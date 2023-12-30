"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [5398],
  {
    39566: function (e, t, r) {
      r.d(t, {
        r: function () {
          return P;
        }
      });
      var n,
        o,
        i,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        C,
        x,
        g,
        w,
        y,
        v,
        j,
        b,
        k,
        L,
        E,
        Z = r(23381),
        S = ["title", "titleId"];
      function M() {
        return (
          (M = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          M.apply(this, arguments)
        );
      }
      function O(e, t) {
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
      function T(e, t) {
        var r = e.title,
          T = e.titleId,
          P = O(e, S);
        return Z.createElement(
          "svg",
          M(
            {
              width: 160,
              height: 160,
              viewBox: "0 0 160 160",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": T
            },
            P
          ),
          r ? Z.createElement("title", { id: T }, r) : null,
          n ||
            (n = Z.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160Z",
              fill: "#ECF5FB"
            })),
          o ||
            (o = Z.createElement("rect", {
              width: 5.33333,
              height: 5.33333,
              transform: "matrix(0.707106 -0.707107 0.707106 0.707107 126.007 95.1111)",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          i ||
            (i = Z.createElement("rect", {
              x: 29.3333,
              y: 40,
              width: 5.33333,
              height: 5.33333,
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          a ||
            (a = Z.createElement("path", {
              d: "M110.404 30.4044L114.558 34.558",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          s ||
            (s = Z.createElement("path", {
              d: "M114.412 30.4044L110.258 34.558",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          l ||
            (l = Z.createElement("path", {
              d: "M109.567 81.6724C109.167 82.1701 109.583 84.6915 109.567 84.5406H118.582C118.554 83.4815 118.739 82.9445 119.401 82.0822C121.831 78.5364 123.18 76.2203 125.547 71.4288C126.998 67.9669 127.139 66.5916 125.547 65.6924C125.387 65.6065 125.298 65.5065 125.138 65.6924C123.481 69.4848 122.338 71.5701 119.401 75.1165C119.199 74.5324 117.762 73.8873 117.352 74.297C116.943 74.7068 109.968 81.1747 109.567 81.6724Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.79
            })),
          c ||
            (c = Z.createElement("path", {
              d: "M52.658 80.7582C53.0944 81.2529 52.6407 83.7595 52.658 83.6095H42.8347C42.8644 82.5566 42.6632 82.0227 41.9417 81.1655C39.2934 77.6406 37.824 75.3381 35.2439 70.5749C33.6634 67.1334 33.509 65.7661 35.2439 64.8723C35.4183 64.7869 35.516 64.6875 35.6905 64.8723C37.4961 68.6423 38.7408 70.7153 41.9417 74.2409C42.1615 73.6602 43.7277 73.0189 44.1742 73.4262C44.6208 73.8336 52.2216 80.2634 52.658 80.7582Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.79
            })),
          u ||
            (u = Z.createElement(
              "g",
              { filter: "url(#filter0_i)" },
              Z.createElement("path", {
                d: "M55.3067 99.1862C64.7308 90.1718 96.281 90.9913 105.705 99.1862C106.38 99.7876 106.707 100.151 107.232 100.825L107.344 100.006L109.393 84.0257H119.227V117.625C116.358 126.229 108.164 126.229 104.476 117.625C103.253 116.324 102.782 116.659 102.017 117.625V125H59.4041V117.625C58.6978 116.976 58.346 117.046 57.7651 117.625C53.258 126.229 46.7021 125.41 42.1949 117.625V116.805V83.6159H52.4385L55.3067 108.61L54.4872 100.006L55.3067 99.1862Z",
                fill: "white"
              })
            )),
          d ||
            (d = Z.createElement("path", {
              d: "M106.115 109.02L107.232 100.825M107.232 100.825L107.344 100.006L109.393 84.0257H119.227V117.625C116.358 126.229 108.164 126.229 104.476 117.625C103.253 116.324 102.782 116.659 102.017 117.625V125H59.4041V117.625C58.6978 116.976 58.346 117.046 57.7651 117.625C53.258 126.229 46.7021 125.41 42.1949 117.625V116.805V83.6159H52.4385L55.3067 108.61L54.4872 100.006L55.3067 99.1862C64.7308 90.1718 96.281 90.9913 105.705 99.1862C106.38 99.7876 106.707 100.151 107.232 100.825Z",
              stroke: "#264887",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          p ||
            (p = Z.createElement("path", {
              d: "M87.1911 99.1862C87.1911 102.262 84.5251 104.847 81.1205 104.847C77.7159 104.847 75.0498 102.262 75.0498 99.1862C75.0498 96.1101 77.7159 93.5253 81.1205 93.5253C84.5251 93.5253 87.1911 96.1101 87.1911 99.1862Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.79
            })),
          f ||
            (f = Z.createElement(
              "g",
              { filter: "url(#filter1_i)" },
              Z.createElement("ellipse", {
                cx: 79.4097,
                cy: 70.86,
                rx: 24.135,
                ry: 29.0374,
                transform: "rotate(-8.58805 79.4097 70.86)",
                fill: "#B5D9F1"
              })
            )),
          m ||
            (m = Z.createElement("path", {
              d: "M102.388 67.3898C104.733 82.918 96.1561 96.7912 83.612 98.6856C71.0679 100.58 58.7767 89.8584 56.4316 74.3303C54.0865 58.8021 62.6633 44.9289 75.2074 43.0345C87.7515 41.14 100.043 51.8617 102.388 67.3898Z",
              stroke: "#264887",
              strokeWidth: 1.79259
            })),
          h ||
            (h = Z.createElement("path", {
              d: "M71.2866 68.4554C67.7344 67.2743 66.1874 67.6053 63.9113 69.2749C62.6944 69.9355 61.7722 70.0175 61.8626 68.4554C62.5422 66.446 63.9113 65.5872 67.1892 65.1775C69.6305 65.1695 71.1556 65.5575 72.5159 67.2262C72.6038 67.6713 72.6088 67.9763 72.5159 68.1751C72.3693 68.4886 71.9792 68.5378 71.2866 68.4554Z",
              fill: "#264887"
            })),
          C ||
            (C = Z.createElement("path", {
              d: "M94.2384 65.5873C90.6862 64.4062 89.1391 64.7372 86.863 66.4068C85.6461 67.0675 84.7239 67.1494 84.8143 65.5873C85.4939 63.5779 86.863 62.7192 90.1409 62.3094C92.5822 62.3015 94.1074 62.6894 95.4676 64.3581C95.5555 64.8032 95.5605 65.1083 95.4676 65.307C95.321 65.6205 94.9309 65.6698 94.2384 65.5873Z",
              fill: "#264887"
            })),
          x || (x = Z.createElement("circle", { cx: 68.1405, cy: 74.3236, r: 3, fill: "#264887" })),
          g || (g = Z.createElement("circle", { cx: 91.0861, cy: 71.0457, r: 3, fill: "#264887" })),
          w ||
            (w = Z.createElement("path", {
              d: "M82.8518 78.7052L78.3585 79.0591C77.95 79.0913 78.8701 80.6994 80.5618 80.9406C82.1561 80.659 83.2602 78.673 82.8518 78.7052Z",
              fill: "#264887"
            })),
          y ||
            (y = Z.createElement("path", {
              d: "M76.68 88.6075C78.495 92.1771 84.2084 91.5659 85.2582 87.8566C85.1662 86.5708 84.1389 86.1935 80.8517 86.0911C77.1779 86.478 76.1872 87.0066 76.68 88.6075Z",
              fill: "#264887"
            })),
          v ||
            (v = Z.createElement("path", {
              d: "M106.115 72.307C106.115 69.8486 104.148 68.8652 104.148 68.8652L102.837 76.2406C102.837 76.2406 106.115 74.7655 106.115 72.307Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.79
            })),
          j ||
            (j = Z.createElement("path", {
              d: "M54.04 78.0632C55.315 80.1652 57.5066 79.986 57.5066 79.986L54.8026 73C54.8026 73 52.765 75.9612 54.04 78.0632Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.79
            })),
          b ||
            (b = Z.createElement(
              "g",
              { filter: "url(#filter2_i)" },
              Z.createElement("path", {
                d: "M53.6677 72.9626L56.9456 76.6503C55.9358 66.576 59.4041 58.6216 61.4528 58.6216C63.5015 58.6216 84.8082 57.8021 93.8225 54.5242C98.2327 58.6263 101.165 62.1879 102.837 73.7821L104.476 68.4554C104.252 57.6388 103.003 52.6976 99.1492 45.5098C92.0499 36.8487 87.0295 34.0625 74.9743 35.2662C58.1749 37.3149 51.3007 45.7881 53.6677 72.9626Z",
                fill: "#264887"
              })
            )),
          k ||
            (k = Z.createElement("path", {
              d: "M53.6677 72.9626L56.9456 76.6503C55.9358 66.576 59.4041 58.6216 61.4528 58.6216C63.5015 58.6216 84.8082 57.8021 93.8225 54.5242C98.2327 58.6263 101.165 62.1879 102.837 73.7821L104.476 68.4554C104.252 57.6388 103.003 52.6976 99.1492 45.5098C92.0499 36.8487 87.0295 34.0625 74.9743 35.2662C58.1749 37.3149 51.3007 45.7881 53.6677 72.9626Z",
              stroke: "#264887"
            })),
          L ||
            (L = Z.createElement("path", {
              d: "M49 135.556H112.111",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          E ||
            (E = Z.createElement(
              "defs",
              null,
              Z.createElement(
                "filter",
                {
                  id: "filter0_i",
                  x: 41.2986,
                  y: 82.7196,
                  width: 78.8243,
                  height: 43.1767,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                Z.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                Z.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                Z.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                Z.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                Z.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                Z.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.858824 0 0 0 0 0.92549 0 0 0 0 0.964706 0 0 0 1 0" }),
                Z.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              Z.createElement(
                "filter",
                {
                  id: "filter1_i",
                  x: 51.2092,
                  y: 38.5442,
                  width: 56.401,
                  height: 64.6318,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                Z.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                Z.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                Z.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                Z.createElement("feOffset", { dx: 5.37778, dy: -4.48148 }),
                Z.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                Z.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.564706 0 0 0 0 0.776471 0 0 0 0 0.921569 0 0 0 1 0"
                }),
                Z.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              Z.createElement(
                "filter",
                {
                  id: "filter2_i",
                  x: 52.7143,
                  y: 34.5,
                  width: 52.2631,
                  height: 43.6357,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                Z.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                Z.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                Z.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                Z.createElement("feOffset", { dx: 4, dy: -1 }),
                Z.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                Z.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0729167 0 0 0 0 0.200709 0 0 0 0 0.4375 0 0 0 1 0" }),
                Z.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              )
            ))
        );
      }
      var P = Z.forwardRef(T);
      r.p;
    },
    11592: function (e, t, r) {
      r.d(t, {
        r: function () {
          return d;
        }
      });
      var n,
        o,
        i,
        a = r(23381),
        s = ["title", "titleId"];
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
      function c(e, t) {
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
      function u(e, t) {
        var r = e.title,
          u = e.titleId,
          d = c(e, s);
        return a.createElement(
          "svg",
          l(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": u
            },
            d
          ),
          r ? a.createElement("title", { id: u }, r) : null,
          n || (n = a.createElement("rect", { width: 16, height: 16, fill: "currentColor" })),
          o ||
            (o = a.createElement(
              "g",
              { id: "Dashboard-1" },
              a.createElement("rect", { x: -635, y: -300, width: 1440, height: 780, fill: "white" }),
              a.createElement(
                "g",
                { id: "SC  widget 50-75" },
                a.createElement(
                  "g",
                  { id: "Card Background" },
                  a.createElement(
                    "g",
                    { id: "Background", filter: "url(#filter0_ddd)" },
                    a.createElement("rect", { x: -371, y: -216, width: 696, height: 308, rx: 4, fill: "white" }),
                    a.createElement("rect", { x: -370.5, y: -215.5, width: 695, height: 307, rx: 3.5, stroke: "currentColor" })
                  )
                ),
                a.createElement(
                  "g",
                  { id: "Group 468" },
                  a.createElement(
                    "g",
                    { id: "Frame 466" },
                    a.createElement(
                      "g",
                      { id: "info-icon" },
                      a.createElement("circle", { id: "Ellipse 6", cx: 8, cy: 8, r: 7.5, fill: "currentColor", stroke: "currentColor" }),
                      a.createElement("path", {
                        d: "M7.9993 0.889C6.59285 0.889 5.21799 1.30606 4.04858 2.08744C2.87916 2.86882 1.96771 3.97942 1.42949 5.27881C0.891265 6.57819 0.750441 8.008 1.02482 9.38742C1.29921 10.7668 1.97648 12.0339 2.97098 13.0284C3.96549 14.0229 5.23257 14.7002 6.61199 14.9746C7.99141 15.249 9.42122 15.1081 10.7206 14.5699C12.02 14.0317 13.1306 13.1202 13.912 11.9508C14.6933 10.7814 15.1104 9.40656 15.1104 8.00011C15.1084 6.11475 14.3585 4.3072 13.0254 2.97405C11.6922 1.6409 9.88466 0.891039 7.9993 0.889V0.889ZM8.14745 3.85196C8.32325 3.85196 8.49511 3.9041 8.64129 4.00177C8.78746 4.09944 8.90139 4.23827 8.96867 4.40069C9.03595 4.56311 9.05355 4.74184 9.01926 4.91427C8.98496 5.08669 8.9003 5.24508 8.77599 5.36939C8.65167 5.4937 8.49329 5.57836 8.32086 5.61266C8.14843 5.64696 7.96971 5.62936 7.80728 5.56208C7.64486 5.4948 7.50603 5.38087 7.40836 5.23469C7.31069 5.08852 7.25856 4.91666 7.25856 4.74085C7.25856 4.5051 7.35221 4.27901 7.51891 4.11231C7.68561 3.94561 7.9117 3.85196 8.14745 3.85196ZM9.48078 11.852H7.11041C6.95324 11.852 6.80252 11.7895 6.69138 11.6784C6.58025 11.5673 6.51782 11.4165 6.51782 11.2594C6.51782 11.1022 6.58025 10.9515 6.69138 10.8403C6.80252 10.7292 6.95324 10.6668 7.11041 10.6668H7.55485C7.59414 10.6668 7.63183 10.6512 7.65961 10.6234C7.68739 10.5956 7.703 10.5579 7.703 10.5186V7.85196C7.703 7.81267 7.68739 7.77499 7.65961 7.74721C7.63183 7.71942 7.59414 7.70381 7.55485 7.70381H7.11041C6.95324 7.70381 6.80252 7.64138 6.69138 7.53025C6.58025 7.41912 6.51782 7.26839 6.51782 7.11122C6.51782 6.95406 6.58025 6.80333 6.69138 6.6922C6.80252 6.58106 6.95324 6.51863 7.11041 6.51863H7.703C8.01733 6.51863 8.31879 6.6435 8.54105 6.86576C8.76332 7.08803 8.88819 7.38948 8.88819 7.70381V10.5186C8.88819 10.5579 8.9038 10.5956 8.93158 10.6234C8.95936 10.6512 8.99704 10.6668 9.03633 10.6668H9.48078C9.63795 10.6668 9.78867 10.7292 9.89981 10.8403C10.0109 10.9515 10.0734 11.1022 10.0734 11.2594C10.0734 11.4165 10.0109 11.5673 9.89981 11.6784C9.78867 11.7895 9.63795 11.852 9.48078 11.852Z",
                        fill: "white"
                      })
                    )
                  )
                )
              )
            )),
          i ||
            (i = a.createElement(
              "defs",
              null,
              a.createElement(
                "filter",
                {
                  id: "filter0_ddd",
                  x: -373,
                  y: -218,
                  width: 700,
                  height: 314,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                a.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                a.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                a.createElement("feOffset", { dy: 1 }),
                a.createElement("feGaussianBlur", { stdDeviation: 1 }),
                a.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.113958 0 0 0 0 0.188601 0 0 0 0 0.28457 0 0 0 0.04 0"
                }),
                a.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                a.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                a.createElement("feOffset", { dy: 2 }),
                a.createElement("feGaussianBlur", { stdDeviation: 1 }),
                a.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.113958 0 0 0 0 0.188601 0 0 0 0 0.28457 0 0 0 0.04 0"
                }),
                a.createElement("feBlend", { mode: "normal", in2: "effect1_dropShadow", result: "effect2_dropShadow" }),
                a.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                a.createElement("feOffset", null),
                a.createElement("feGaussianBlur", { stdDeviation: 1 }),
                a.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.113958 0 0 0 0 0.188601 0 0 0 0 0.28457 0 0 0 0.16 0"
                }),
                a.createElement("feBlend", { mode: "normal", in2: "effect2_dropShadow", result: "effect3_dropShadow" }),
                a.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect3_dropShadow", result: "shape" })
              )
            ))
        );
      }
      var d = a.forwardRef(u);
      r.p;
    },
    76648: function (e, t, r) {
      r.d(t, {
        r: function () {
          return u;
        }
      });
      var n,
        o,
        i = r(23381),
        a = ["title", "titleId"];
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          s.apply(this, arguments)
        );
      }
      function l(e, t) {
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
      function c(e, t) {
        var r = e.title,
          c = e.titleId,
          u = l(e, a);
        return i.createElement(
          "svg",
          s(
            {
              width: 48,
              height: 48,
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": c
            },
            u
          ),
          r ? i.createElement("title", { id: c }, r) : null,
          n || (n = i.createElement("circle", { cx: 24, cy: 24, r: 24, fill: "#FBEBEB" })),
          o ||
            (o = i.createElement("path", {
              d: "M34.1777 31.3199L25.622 14.981C25.4669 14.6851 25.2339 14.4372 24.948 14.2643C24.6622 14.0914 24.3345 14 24.0005 14C23.6664 14 23.3387 14.0914 23.0529 14.2643C22.7671 14.4372 22.534 14.6851 22.3789 14.981L13.8223 31.3199C13.6761 31.5989 13.6044 31.9109 13.6142 32.2258C13.6239 32.5406 13.7147 32.8477 13.8778 33.1172C14.0409 33.3867 14.2707 33.6095 14.5452 33.7642C14.8196 33.9188 15.1293 34.0001 15.4443 34H32.5557C32.8707 34.0001 33.1804 33.9188 33.4549 33.7642C33.7293 33.6095 33.9592 33.3867 34.1222 33.1172C34.2853 32.8477 34.3761 32.5406 34.3859 32.2258C34.3956 31.9109 34.3239 31.5989 34.1777 31.3199ZM23.0847 20.7229C23.0847 20.4802 23.1811 20.2473 23.3528 20.0757C23.5244 19.904 23.7572 19.8076 24 19.8076C24.2428 19.8076 24.4756 19.904 24.6473 20.0757C24.8189 20.2473 24.9154 20.4802 24.9154 20.7229V26.215C24.9154 26.4578 24.8189 26.6906 24.6473 26.8622C24.4756 27.0339 24.2428 27.1303 24 27.1303C23.7572 27.1303 23.5244 27.0339 23.3528 26.8622C23.1811 26.6906 23.0847 26.4578 23.0847 26.215V20.7229ZM24.0458 31.2585H24.0201C23.6592 31.2574 23.3126 31.1167 23.053 30.8659C22.7933 30.6152 22.6407 30.2737 22.627 29.913C22.6204 29.7336 22.6496 29.5547 22.7129 29.3867C22.7763 29.2187 22.8725 29.065 22.9959 28.9346C23.1193 28.8043 23.2674 28.6998 23.4316 28.6273C23.5959 28.5548 23.7729 28.5158 23.9524 28.5125H23.978C24.3389 28.5129 24.6857 28.6529 24.9457 28.9032C25.2057 29.1535 25.3588 29.4947 25.373 29.8553C25.3801 30.0351 25.3512 30.2145 25.288 30.383C25.2247 30.5515 25.1285 30.7056 25.0048 30.8363C24.8812 30.9671 24.7326 31.0718 24.5679 31.1443C24.4032 31.2168 24.2257 31.2556 24.0458 31.2585Z",
              fill: "#D32D27"
            }))
        );
      }
      var u = i.forwardRef(c);
      r.p;
    },
    57376: function (e, t, r) {
      r.r(t),
        r.d(t, {
          SecurityDashboard: function () {
            return dC;
          },
          SecurityDashoardTwoDotZero: function () {
            return uC;
          },
          initializeSecurityDashboard: function () {
            return pC;
          }
        });
      var n,
        o,
        i,
        a,
        s,
        l,
        c,
        u,
        d,
        p,
        f,
        m,
        h,
        C,
        x,
        g,
        w,
        y,
        v,
        j,
        b,
        k,
        L,
        E = r(92577),
        Z = r(20011),
        S = r(91640),
        M = r(48693),
        O = r(23381),
        T = r(28236),
        P = r(6629),
        B = r(23707),
        A = r(84785),
        D = r(13613),
        F = r(52384),
        I = ["children"],
        R = r(33764),
        V = ["title", "titleId"];
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      function H(e, t) {
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
          E = e.titleId,
          Z = H(e, V);
        return O.createElement(
          "svg",
          W(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 120,
              height: 120,
              viewBox: "249 97 120 120",
              fill: "none",
              ref: t,
              "aria-labelledby": E
            },
            Z
          ),
          r ? O.createElement("title", { id: E }, r) : null,
          n ||
            (n = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M309 217C342.137 217 369 190.137 369 157C369 123.863 342.137 97 309 97C275.863 97 249 123.863 249 157C249 190.137 275.863 217 309 217Z",
              fill: "#ECF5FB"
            })),
          o ||
            (o = O.createElement("rect", {
              width: 4,
              height: 4,
              transform: "matrix(0.707105 -0.707108 0.707105 0.707108 347 143.828)",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          i ||
            (i = O.createElement("path", {
              d: "M316.137 114.137L319.252 117.252",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          a ||
            (a = O.createElement("path", {
              d: "M319.142 114.137L316.027 117.252",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          s ||
            (s = O.createElement("rect", {
              x: 263,
              y: 163,
              width: 4,
              height: 4,
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          l ||
            (l = O.createElement("path", {
              d: "M313.875 149.501L309.726 145.353C309.329 144.956 308.685 144.956 308.288 145.353C307.89 145.75 307.89 146.395 308.288 146.792L312.436 150.94C312.952 151.456 312.952 152.295 312.436 152.81C311.92 153.326 311.081 153.326 310.566 152.81L306.417 148.662C306.02 148.265 305.376 148.265 304.979 148.662C304.581 149.06 304.581 149.704 304.979 150.101L309.127 154.249C309.781 154.904 310.641 155.231 311.501 155.231C312.36 155.231 313.22 154.903 313.875 154.249C315.184 152.94 315.184 150.81 313.875 149.501Z",
              fill: "#162649"
            })),
          c ||
            (c = O.createElement("path", {
              d: "M306.249 157.127L302.101 152.979C301.704 152.581 301.06 152.581 300.662 152.979C300.265 153.376 300.265 154.02 300.662 154.417L304.811 158.566C305.06 158.815 305.198 159.147 305.198 159.501C305.198 159.854 305.06 160.186 304.811 160.436C304.295 160.951 303.456 160.951 302.94 160.436L298.792 156.287C298.395 155.89 297.751 155.89 297.353 156.287C296.956 156.685 296.956 157.329 297.353 157.726L301.502 161.874C302.156 162.529 303.016 162.856 303.876 162.856C304.735 162.856 305.595 162.529 306.249 161.874C306.884 161.24 307.233 160.397 307.233 159.5C307.233 158.604 306.884 157.761 306.249 157.127Z",
              fill: "#162649"
            })),
          u ||
            (u = O.createElement(
              "g",
              { filter: "url(#filter1_i)" },
              O.createElement("path", {
                d: "M282.192 146.068C279.844 143.729 279.837 139.93 282.175 137.583L289.538 130.192C291.877 127.844 295.676 127.837 298.024 130.175L305.03 137.155L289.198 153.048L282.192 146.068Z",
                fill: "white"
              })
            )),
          d ||
            (d = O.createElement("path", {
              d: "M282.192 146.068C279.844 143.729 279.837 139.93 282.175 137.583L289.538 130.192C291.877 127.844 295.676 127.837 298.024 130.175L305.03 137.155L289.198 153.048L282.192 146.068Z",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          p ||
            (p = O.createElement(
              "g",
              { filter: "url(#filter2_i)" },
              O.createElement("path", {
                d: "M289.704 156.964C288.514 155.779 288.511 153.854 289.696 152.664L305.039 137.263C306.224 136.073 308.149 136.069 309.338 137.254C310.528 138.439 310.532 140.364 309.347 141.554L294.004 156.956C292.818 158.145 290.893 158.149 289.704 156.964Z",
                fill: "white"
              })
            )),
          f ||
            (f = O.createElement("path", {
              d: "M289.704 156.964C288.514 155.779 288.511 153.854 289.696 152.664L305.039 137.263C306.224 136.073 308.149 136.069 309.338 137.254C310.528 138.439 310.532 140.364 309.347 141.554L294.004 156.956C292.818 158.145 290.893 158.149 289.704 156.964Z",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          m ||
            (m = O.createElement("path", {
              d: "M279.834 134.046C278.269 132.487 278.264 129.954 279.823 128.389L280.376 127.834C281.935 126.269 284.468 126.264 286.033 127.823L288.892 130.671L282.692 136.894L279.834 134.046Z",
              fill: "white",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          h ||
            (h = O.createElement(
              "g",
              { filter: "url(#filter3_i)" },
              O.createElement("path", {
                d: "M277.333 125.999C277.149 125.815 277.149 125.517 277.332 125.333C277.516 125.149 277.813 125.149 277.998 125.332L280.083 127.409L279.419 128.076L277.333 125.999Z",
                fill: "white"
              })
            )),
          C ||
            (C = O.createElement("path", {
              d: "M277.333 125.999C277.149 125.815 277.149 125.517 277.332 125.333C277.516 125.149 277.813 125.149 277.998 125.332L280.083 127.409L279.419 128.076L277.333 125.999Z",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          x ||
            (x = O.createElement("path", {
              d: "M285 143C285.552 143 286 142.552 286 142C286 141.448 285.552 141 285 141C284.448 141 284 141.448 284 142C284 142.552 284.448 143 285 143Z",
              fill: "#D32D27"
            })),
          g ||
            (g = O.createElement(
              "g",
              { filter: "url(#filter4_i)" },
              O.createElement("path", {
                d: "M335.905 165.002C338.223 167.37 338.183 171.169 335.815 173.487L324.894 184.178C322.527 186.496 318.728 186.456 316.41 184.088L307.714 175.206L327.209 156.12L335.905 165.002Z",
                fill: "white"
              })
            )),
          w ||
            (w = O.createElement("path", {
              d: "M335.905 165.002C338.223 167.37 338.183 171.169 335.815 173.487L324.894 184.178C322.527 186.496 318.728 186.456 316.41 184.088L307.714 175.206L327.209 156.12L335.905 165.002Z",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          y ||
            (y = O.createElement("path", {
              d: "M327.341 151.622C328.516 152.822 328.496 154.747 327.296 155.921L307.524 175.278C306.324 176.453 304.399 176.432 303.225 175.232C302.05 174.033 302.07 172.108 303.27 170.933L323.042 151.576C324.242 150.402 326.167 150.422 327.341 151.622Z",
              fill: "white",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          v ||
            (v = O.createElement(
              "g",
              { filter: "url(#filter5_i)" },
              O.createElement("path", {
                d: "M336.905 178.689C338.45 180.267 338.423 182.8 336.845 184.345L336.285 184.894C334.706 186.439 332.174 186.412 330.628 184.834L327.805 181.95L334.082 175.806L336.905 178.689Z",
                fill: "white"
              })
            )),
          j ||
            (j = O.createElement("path", {
              d: "M336.905 178.689C338.45 180.267 338.423 182.8 336.845 184.345L336.285 184.894C334.706 186.439 332.174 186.412 330.628 184.834L327.805 181.95L334.082 175.806L336.905 178.689Z",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          b ||
            (b = O.createElement(
              "g",
              { filter: "url(#filter6_i)" },
              O.createElement("path", {
                d: "M339.304 186.766C339.486 186.952 339.483 187.25 339.297 187.432C339.112 187.614 338.814 187.611 338.632 187.425L336.573 185.322L337.245 184.663L339.304 186.766Z",
                fill: "white"
              })
            )),
          k ||
            (k = O.createElement("path", {
              d: "M339.304 186.766C339.486 186.952 339.483 187.25 339.297 187.432C339.112 187.614 338.814 187.611 338.632 187.425L336.573 185.322L337.245 184.663L339.304 186.766Z",
              stroke: "#162649",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          L ||
            (L = O.createElement(
              "defs",
              null,
              O.createElement(
                "filter",
                {
                  id: "filter0_ddd",
                  x: 0,
                  y: 0,
                  width: 618,
                  height: 378,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                O.createElement("feOffset", { dy: 1 }),
                O.createElement("feGaussianBlur", { stdDeviation: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.113958 0 0 0 0 0.188601 0 0 0 0 0.28457 0 0 0 0.04 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                O.createElement("feOffset", { dy: 2 }),
                O.createElement("feGaussianBlur", { stdDeviation: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.113958 0 0 0 0 0.188601 0 0 0 0 0.28457 0 0 0 0.04 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "effect1_dropShadow", result: "effect2_dropShadow" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                O.createElement("feOffset", null),
                O.createElement("feGaussianBlur", { stdDeviation: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.113958 0 0 0 0 0.188601 0 0 0 0 0.28457 0 0 0 0.16 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "effect2_dropShadow", result: "effect3_dropShadow" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect3_dropShadow", result: "shape" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter1_i",
                  x: 276.673,
                  y: 124.673,
                  width: 29.6245,
                  height: 29.6422,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter2_i",
                  x: 286.282,
                  y: 133.841,
                  width: 26.4774,
                  height: 26.536,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter3_i",
                  x: 275.732,
                  y: 123.732,
                  width: 5.61798,
                  height: 5.61131,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.858824 0 0 0 0 0.92549 0 0 0 0 0.964706 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter4_i",
                  x: 306.447,
                  y: 154.853,
                  width: 34.9229,
                  height: 34.7901,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter5_i",
                  x: 326.538,
                  y: 174.538,
                  width: 14.4325,
                  height: 14.4213,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter6_i",
                  x: 335.305,
                  y: 183.396,
                  width: 5.5958,
                  height: 5.63288,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.858824 0 0 0 0 0.92549 0 0 0 0 0.964706 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              )
            ))
        );
      }
      var z = O.forwardRef(U),
        N = (r.p, r(39566)),
        q = r(27645),
        G = r(27403);
      var _ = (0, S.Z)("div", { target: "eoovgmt3" })(
          "border:1px solid ",
          function (e) {
            return e.compact ? "transparent" : e.theme.colors.neutral300;
          },
          ";background:",
          function (e) {
            return e.theme.colors.white;
          },
          ";box-shadow:",
          function (e) {
            return e.compact ? "0" : e.theme.elevations.elevation100;
          },
          ";box-sizing:border-box;width:100%;height:",
          function (e) {
            return e.compact ? "auto" : "100%";
          },
          ";overflow:hidden;text-align:center;display:flex;align-items:center;justify-content:center;flex-flow:column;"
        ),
        Y = (0, S.Z)("p", { target: "eoovgmt2" })(
          "font-family:",
          function (e) {
            return e.theme.fonts.primary;
          },
          ";font-style:normal;font-weight:normal;font-size:14px;line-height:24px;height:24px;margin-top:8px;"
        ),
        X = (0, S.Z)(Y, { target: "eoovgmt1" })(
          "font-weight:",
          function (e) {
            return e.theme.fonts.weight.semibold;
          },
          ";"
        ),
        K = (0, S.Z)(q.K, { target: "eoovgmt0" })({ name: "ki1hti", styles: "margin-top:24px;padding:8px 57px" }),
        J = function (e) {
          var t = e.compact;
          return (0, G.jsx)(
            _,
            { compact: t },
            (0, G.jsx)(z, null),
            (0, G.jsx)(X, null, (0, G.jsx)(M.Trans, { id: "It looks like you are offline" })),
            (0, G.jsx)(Y, null, (0, G.jsx)(M.Trans, { id: "Some functionality may be limited." }))
          );
        },
        Q = function (e) {
          var t = e.shouldDisplay,
            r = e.onErrorShouldTry,
            n = e.compact,
            o = e.errorTitle,
            i = e.errorText;
          return t
            ? (0, G.jsx)(
                _,
                { compact: n },
                (0, G.jsx)(N.r, null),
                (0, G.jsx)(X, null, o),
                (0, G.jsx)(Y, null, i),
                r &&
                  (0, G.jsx)(
                    K,
                    {
                      onClick: function () {
                        return r();
                      },
                      red: !0
                    },
                    (0, G.jsx)(M.Trans, { id: "Try Again" })
                  )
              )
            : null;
        };
      var $ = (0, S.Z)("div", { target: "e1n5n4u84" })(
          "border:1px solid ",
          function (e) {
            return e.theme.colors.neutral300;
          },
          ";border-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";box-shadow:",
          function (e) {
            return e.theme.elevations.elevation100;
          },
          ";padding:24px;"
        ),
        ee = (0, S.Z)("div", { target: "e1n5n4u83" })(
          "border-bottom:1px solid ",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";margin-bottom:16px;padding-bottom:16px;"
        ),
        te = (0, S.Z)("div", { target: "e1n5n4u82" })({
          name: "cohm68",
          styles: "align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:4px"
        }),
        re = (0, S.Z)("h1", { target: "e1n5n4u81" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral900;
          },
          ";font-size:24px;font-weight:",
          function (e) {
            return e.theme.fonts.weight.semibold;
          },
          ";letter-spacing:0.24px;line-height:1.33;margin-right:8px;"
        ),
        ne = (0, S.Z)("p", { target: "e1n5n4u80" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";font-size:14px;line-height:1.7;"
        ),
        oe = r(96833),
        ie = (0, S.Z)(oe.C, { target: "ea1z0e10" })(
          "border:",
          function (e) {
            return "1px solid ".concat(e.theme.colors[e.colors.backgroundColor]);
          },
          ";background-color:transparent;"
        ),
        ae = r(67841),
        se = r(53566),
        le = r(54245),
        ce = r(84081);
      var ue = "980px",
        de = (0, S.Z)("div", { target: "e1hbo0qm2" })({
          name: "1fyidtj",
          styles:
            "align-items:stretch;display:flex;flex-direction:row;justify-content:center;height:100%;overflow:hidden;background-color:white;min-width:850px"
        }),
        pe = (0, S.Z)("div", { target: "e1hbo0qm1" })({
          name: "1a9sqxn",
          styles:
            "box-sizing:border-box;overflow-y:scroll;flex:0 0 65%;padding:24px;display:flex;flex-direction:column;justify-content:start;padding:24px;width:65%;>*{margin-bottom:24px;}"
        }),
        fe = (0, S.Z)("div", { target: "e1hbo0qm0" })(
          "background:",
          function (e) {
            return e.theme.colors.blue50;
          },
          ";border-left:1px solid ",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";box-sizing:border-box;position:relative;flex:0 0 35%;"
        ),
        me = (0, S.Z)("p", { target: "eg06l5h1" })(
          le.Py,
          " color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";"
        ),
        he = (0, S.Z)(q.K, { target: "eg06l5h0" })(
          "float:right;margin-top:24px;padding-left:32px;padding-right:32px;margin-top:24px;@media (max-width: ",
          ue,
          "){float:initial;}"
        ),
        Ce = function () {
          var e = (0, ce.B)();
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(
              me,
              null,
              (0, G.jsx)(M.Trans, {
                id: "Your score is an indicator of the strength of your site passwords, with additional points earned for taking steps to protect your LastPass account with multifactor authentication and device controls."
              })
            ),
            (0, G.jsx)(
              he,
              {
                red: !0,
                onClick: function () {
                  e.addPassword();
                },
                "data-automation-id": "security-dashboard-add-item"
              },
              (0, G.jsx)(M.Trans, { id: "Add items to your vault" })
            )
          );
        },
        xe = (0, S.Z)("div", { target: "e5jo9px0" })(
          "height:24px;opacity:",
          function (e) {
            return e.opacity;
          },
          ";background:",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";border-radius:",
          function (e) {
            return e.theme.radius.pixel4;
          },
          ";"
        );
      var ge = (0, S.Z)("div", { target: "egy3noi1" })({ name: "xkmy7w", styles: "padding-top:32px;padding-bottom:32px" }),
        we = (0, S.Z)("div", { target: "egy3noi0" })({ name: "6gg7bn", styles: "padding-top:8px;padding-bottom:8px" }),
        ye = function () {
          return (0, G.jsx)(
            ge,
            null,
            (0, G.jsx)(we, null, (0, G.jsx)(xe, { opacity: "1" })),
            (0, G.jsx)(we, null, (0, G.jsx)(xe, { opacity: "0.75" })),
            (0, G.jsx)(we, null, (0, G.jsx)(xe, { opacity: "0.5" }))
          );
        },
        ve = r(53992),
        je = r(60672);
      var be = (0, S.Z)("div", { target: "e11b23yn2" })({ name: "1wph0o3", styles: "display:flex;align-items:center;margin-bottom:10px" }),
        ke = (0, S.Z)("h2", { target: "e11b23yn1" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral900;
          },
          ";font-size:14px;font-weight:",
          function (e) {
            return e.theme.fonts.weight.semibold;
          },
          ";"
        ),
        Le = (0, S.Z)("a", { target: "e11b23yn0" })(function (e) {
          var t = e.isLink,
            r = e.theme;
          return (
            !t &&
            "\n      color: "
              .concat(r.colors.neutral900, ";\n      cursor: initial;\n      :hover {\n        color: ")
              .concat(r.colors.neutral900, ";\n      }\n    ")
          );
        }, ";"),
        Ee = function (e) {
          var t = e.linkText,
            r = e.title,
            n = e.isLinkClickable,
            o = e.toDoOnClick,
            i = e.automationId;
          return (0, G.jsx)(
            be,
            null,
            (0, G.jsx)(je.r, { style: { height: "16px", width: "16px", marginRight: "10px" } }),
            (0, G.jsx)(
              ke,
              null,
              r,
              (0, G.jsx)(
                Le,
                {
                  isLink: n,
                  href: n ? "#" : void 0,
                  onClick: function () {
                    return n ? o() : null;
                  },
                  "data-automation-id": i
                },
                " ",
                t,
                n ? "" : "."
              )
            )
          );
        };
      var Ze = (0, S.Z)("div", { target: "eddxuco6" })({ name: "1591tt8", styles: "margin:10px 0;display:flex" }),
        Se = (0, S.Z)(xe, { target: "eddxuco5" })({
          name: "1m3a197",
          styles: ":first-of-type{flex:1;}:nth-of-type(2){flex:3;}:nth-of-type(3){flex:5;}:not(:first-of-type){margin-left:10px;}"
        }),
        Me = (0, S.Z)("div", { target: "eddxuco4" })({ name: "14ldvd5", styles: "display:flex;flex-basis:10%" }),
        Oe = (0, S.Z)("div", { target: "eddxuco3" })({
          name: "1ledtxv",
          styles:
            "position:relative;:after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;background:linear-gradient(transparent, rgba(255, 255, 255, 0.7) 62%);}"
        }),
        Te = (0, S.Z)("div", { target: "eddxuco2" })({
          name: "du6n1t",
          styles: "display:flex;flex-direction:column;justify-content:center;height:100%"
        }),
        Pe = (0, S.Z)("div", { target: "eddxuco1" })({ name: "1lahtli", styles: "display:flex;align-items:center;margin:0 20px" }),
        Be = (0, S.Z)("span", { target: "eddxuco0" })({ name: "11rcwxl", styles: "margin-bottom:4px" }),
        Ae = function (e) {
          var t = e.vaultItems,
            r = e.isVersion1,
            n = e.toDoOnClick,
            o = t.filter(function (e) {
              return !!e.risk.length;
            }),
            i = (o = o.length ? o : t).some(function (e) {
              return e.risk.length;
            }),
            a = o.slice(0, 3).map(function (e, t) {
              return (0, G.jsx)(
                Ze,
                { key: t },
                (0, G.jsx)(Se, { opacity: "1" }),
                (0, G.jsx)(Se, { opacity: "1" }),
                (0, G.jsx)(Se, { opacity: "1" }),
                (0, G.jsx)(Pe, null, (0, G.jsx)(Be, null, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022")),
                (0, G.jsx)(Me, null, !!e.risk.length && (0, G.jsx)(ve.g, { riskType: e.risk }))
              );
            });
          return (0, G.jsx)(
            Te,
            null,
            i
              ? (0, G.jsx)(Ee, {
                  isLinkClickable: r,
                  linkText: (0, G.jsx)(M.Trans, { id: "Upgrade to fix your password" }),
                  title: (0, G.jsx)(M.Trans, { id: "{0} passwords at risk in your vault.", values: { 0: o.length } }),
                  toDoOnClick: n
                })
              : (0, G.jsx)(Ee, {
                  isLinkClickable: r,
                  linkText: (0, G.jsx)(M.Trans, { id: "Upgrade to monitor your passwords" }),
                  title: (0, G.jsx)(M.Trans, { id: "So far, so good!" }),
                  toDoOnClick: n
                }),
            (0, G.jsx)(Oe, null, a)
          );
        },
        De = r(55299),
        Fe = r(16063),
        Ie = r(11592),
        Re = ["passwordSecurityLink"];
      var Ve = (0, S.Z)("div", { target: "e18k0v864" })({
          name: "du6n1t",
          styles: "display:flex;flex-direction:column;justify-content:center;height:100%"
        }),
        We = (0, S.Z)("div", { target: "e18k0v863" })(
          "display:grid;grid-template-columns:1fr 0.5fr 0.75fr;padding:8px 0 8px 8px;&:hover{background:",
          function (e) {
            return e.theme.colors.neutral50;
          },
          ";}"
        ),
        He = (0, S.Z)("div", { target: "e18k0v862" })({
          name: "cpk21",
          styles: "align-items:center;display:flex;&:last-child{justify-content:flex-end;}"
        }),
        Ue = (0, S.Z)("span", { target: "e18k0v861" })(
          le.Py,
          " color:",
          function (e) {
            return e.theme.colors.neutral900;
          },
          ";"
        ),
        ze = (0, S.Z)(Ie.r, { target: "e18k0v860" })(
          "color:",
          function (e) {
            return e.theme.colors.gray500;
          },
          ";padding:4px;"
        ),
        Ne = function (e) {
          var t = e.passwordSecurityLink,
            r = (0, D.Z)(e, Re),
            n = (0, ce.B)();
          return (0, G.jsx)(
            Ve,
            null,
            (0, G.jsx)(
              We,
              null,
              (0, G.jsx)(
                He,
                null,
                (0, G.jsx)(
                  Ue,
                  { "data-automation-id": "security-score-title-at-risk-passwords" },
                  (0, G.jsx)(M.Trans, { id: "At-risk passwords" })
                ),
                (0, G.jsx)(
                  Fe.u,
                  {
                    tooltip: { id: "Passwords in your vault that are unsafe because they are weak, missing, or reused on multiple sites." },
                    vertical: "top",
                    horizontal: "middle",
                    minWidth: 345
                  },
                  (0, G.jsx)(ze, null)
                )
              ),
              (0, G.jsx)(
                He,
                null,
                (0, G.jsx)(
                  oe.C,
                  {
                    colors: { backgroundColor: r.atRiskPasswordsCount ? "red700" : "green700", textColor: "white" },
                    "data-automation-id": "security-score-badge-at-risk-passwords"
                  },
                  r.atRiskPasswordsCount
                )
              ),
              (0, G.jsx)(
                He,
                null,
                (0, G.jsx)(
                  t,
                  null,
                  (0, G.jsx)(
                    De.A,
                    { blue: !0, "data-automation-id": "security-score-button-at-risk-passwords" },
                    (0, G.jsx)(M.Trans, { id: "View passwords" })
                  )
                )
              )
            ),
            (0, G.jsx)(
              We,
              null,
              (0, G.jsx)(
                He,
                null,
                (0, G.jsx)(
                  Ue,
                  { "data-automation-id": "security-score-title-mfa" },
                  (0, G.jsx)(M.Trans, { id: "Multifactor Authentication" })
                ),
                (0, G.jsx)(
                  Fe.u,
                  {
                    tooltip: { id: "Boost your score by adding an extra layer of protection to your LastPass account" },
                    vertical: "top",
                    horizontal: "middle",
                    minWidth: 285
                  },
                  (0, G.jsx)(ze, null)
                )
              ),
              (0, G.jsx)(
                He,
                null,
                r.multifactorEnabled
                  ? (0, G.jsx)(
                      oe.C,
                      { colors: { backgroundColor: "green700", textColor: "white" }, "data-automation-id": "security-score-badge-active" },
                      (0, G.jsx)(M.Trans, { id: "Active" })
                    )
                  : (0, G.jsx)(
                      oe.C,
                      { colors: { backgroundColor: "red700", textColor: "white" }, "data-automation-id": "security-score-badge-inactive" },
                      (0, G.jsx)(M.Trans, { id: "Inactive" })
                    )
              ),
              (0, G.jsx)(
                He,
                null,
                (0, G.jsx)(
                  De.A,
                  {
                    blue: !0,
                    onClick: function () {
                      n.manageMultifactor(r.multifactorEnabled);
                    },
                    "data-automation-id": "security-score-button-mfa"
                  },
                  r.multifactorEnabled ? (0, G.jsx)(M.Trans, { id: "Manage" }) : (0, G.jsx)(M.Trans, { id: "Activate" })
                )
              )
            ),
            r.atRiskPasswordsCount
              ? null
              : (0, G.jsx)(
                  O.Fragment,
                  null,
                  (0, G.jsx)(
                    We,
                    null,
                    (0, G.jsx)(
                      He,
                      null,
                      (0, G.jsx)(
                        Ue,
                        { "data-automation-id": "security-score-title-trusted-devices" },
                        (0, G.jsx)(M.Trans, { id: "Trusted devices" })
                      ),
                      (0, G.jsx)(
                        Fe.u,
                        {
                          tooltip: { id: "The number of devices where you\u2019ve chosen to skip multifactor authentication for 30 days." },
                          vertical: "top",
                          horizontal: "middle",
                          minWidth: 285
                        },
                        (0, G.jsx)(ze, null)
                      )
                    ),
                    (0, G.jsx)(
                      He,
                      null,
                      (0, G.jsx)(
                        oe.C,
                        {
                          colors: { backgroundColor: r.trustedDevicesCount ? "red700" : "green700", textColor: "white" },
                          "data-automation-id": "security-score-badge-trusted-devices"
                        },
                        r.trustedDevicesCount
                      )
                    ),
                    (0, G.jsx)(
                      He,
                      null,
                      (0, G.jsx)(
                        De.A,
                        {
                          blue: !0,
                          onClick: function () {
                            n.manageTrustedDevices();
                          },
                          "data-automation-id": "security-score-button-trusted-devices"
                        },
                        (0, G.jsx)(M.Trans, { id: "Manage" })
                      )
                    )
                  ),
                  (0, G.jsx)(
                    We,
                    null,
                    (0, G.jsx)(
                      He,
                      null,
                      (0, G.jsx)(
                        Ue,
                        { "data-automation-id": "security-score-title-mobile-devices" },
                        (0, G.jsx)(M.Trans, { id: "Permitted mobile devices" })
                      ),
                      (0, G.jsx)(
                        Fe.u,
                        {
                          tooltip: { id: "The number of devices that you\u2019ve allowed to be used to access your LastPass account." },
                          vertical: "top",
                          horizontal: "middle",
                          minWidth: 285
                        },
                        (0, G.jsx)(ze, null)
                      )
                    ),
                    (0, G.jsx)(
                      He,
                      null,
                      (0, G.jsx)(
                        oe.C,
                        {
                          colors: { backgroundColor: r.mobileDevicesCount ? "red700" : "green700", textColor: "white" },
                          "data-automation-id": "security-score-badge-mobile-devices"
                        },
                        r.mobileDevicesCount
                      )
                    ),
                    (0, G.jsx)(
                      He,
                      null,
                      (0, G.jsx)(
                        De.A,
                        {
                          blue: !0,
                          onClick: function () {
                            n.manageMobileDevices();
                          },
                          "data-automation-id": "security-score-button-mobile-devices"
                        },
                        (0, G.jsx)(M.Trans, { id: "Manage" })
                      )
                    )
                  )
                )
          );
        },
        qe = r(53471),
        Ge = r(95705),
        _e = function (e) {
          var t = e.loading,
            r = e.score;
          if (t) return (0, G.jsx)(M.Trans, { id: "Calculating your security score..." });
          if (null === r) return (0, G.jsx)(M.Trans, { id: "Add at least one site to your LastPass vault to get a security score." });
          switch ((0, qe.X)(r)) {
            case Ge.x.HighestSafety:
              return (0, G.jsx)(M.Trans, { id: "Congrats! You\u2019re a security champion." });
            case Ge.x.HighSafety:
              return (0, G.jsx)(M.Trans, { id: "Looking good. With a little attention you\u2019ll be a security star!" });
            case Ge.x.AverageSafety:
              return (0, G.jsx)(M.Trans, { id: "We see room for improvement. Let\u2019s boost that score!" });
            case Ge.x.LowSafety:
            default:
              return (0, G.jsx)(M.Trans, { id: "Time for some tough love: You need to make your online life more secure." });
          }
        },
        Ye = (function (e) {
          return (
            (e.none = "none"),
            (e.generic = "generic"),
            (e.darkWebMonitoring = "darkWebMonitoring"),
            (e.securityScore = "securityScore"),
            (e.unauthorized = "unauthorized"),
            e
          );
        })({});
      var Xe = (0, S.Z)("div", { target: "ex5mxxn0" })({
          name: "4hj25d",
          styles: "text-align:center;padding-top:24px;button{width:100%;}"
        }),
        Ke = function (e) {
          var t = e.text,
            r = e.toDoOnClick;
          return (0, G.jsx)(
            Xe,
            null,
            (0, G.jsx)(
              q.K,
              {
                red: !0,
                onClick: function () {
                  return r();
                }
              },
              t
            )
          );
        },
        Je = (0, S.Z)("div", { target: "e1sf1v6a2" })(
          "align-items:stretch;display:flex;flex-direction:row;justify-content:center;padding-top:8px;@media (max-width: ",
          ue,
          "){text-align:center;display:block;}"
        ),
        Qe = (0, S.Z)("div", { target: "e1sf1v6a1" })(
          "align-items:center;display:flex;flex:0 0 160px;margin-right:24px;@media (max-width: ",
          ue,
          "){display:inline-block;margin-right:0px;}"
        ),
        $e = (0, S.Z)("div", { target: "e1sf1v6a0" })(
          "flex:1 1 auto;min-height:180px;@media (max-width: ",
          ue,
          "){min-height:initial;max-width:500px;padding-top:24px;display:inline-block;}"
        ),
        et = function (e) {
          var t = e.loading,
            r = e.score,
            n = e.details,
            o = e.errorOccurred,
            i = e.isFreeUser,
            a = e.isEnabledForFreeUser,
            s = e.toDoOnClick,
            l = e.filteredResults,
            c = e.paywallV1shouldVisible,
            u = e.isPaywallVisible,
            d = e.showEmptyState,
            p = (0, ce.B)(),
            f = function () {
              return o === Ye.securityScore;
            },
            m = function () {
              return o === Ye.unauthorized;
            },
            h = function () {
              return !(f() || m());
            };
          return (0, G.jsx)(
            $,
            { "data-automation-id": "security-score-widget-container" },
            (0, G.jsx)(
              ee,
              { "data-automation-id": "security-score-header" },
              (0, G.jsx)(
                te,
                null,
                (0, G.jsx)(re, null, (0, G.jsx)(M.Trans, { id: "Security score" })),
                i &&
                  !a &&
                  (0, G.jsx)(
                    ie,
                    { colors: { backgroundColor: "neutral500", textColor: "neutral500" } },
                    (0, G.jsx)(M.Trans, { id: "Premium" })
                  )
              ),
              h() &&
                (0, G.jsx)(
                  ne,
                  { "data-automation-id": "security-score-header-description" },
                  (0, G.jsx)(_e, { loading: t, score: r }),
                  !t &&
                    (0, G.jsx)(ae.d, {
                      url: "http://link.lastpass.com/help-security-score",
                      "data-automation-id": "security-score-header-learn-more"
                    })
                )
            ),
            h() &&
              (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(
                  Je,
                  null,
                  (0, G.jsx)(Qe, null, (0, G.jsx)(se.K, { score: r, loading: t, automationId: "security-score-indicator-container" })),
                  (0, G.jsx)(
                    $e,
                    null,
                    t
                      ? (0, G.jsx)(ye, null)
                      : d
                      ? (0, G.jsx)(Ce, null)
                      : u
                      ? (0, G.jsx)(Ae, { isVersion1: c, vaultItems: l, toDoOnClick: s })
                      : (0, G.jsx)(Ne, n)
                  )
                ),
                u &&
                  !c &&
                  !d &&
                  (0, G.jsx)(Ke, {
                    toDoOnClick: function () {
                      return s();
                    },
                    text: (0, G.jsx)(M.Trans, { id: "Upgrade to fix your passwords" })
                  })
              ),
            (0, G.jsx)(function () {
              return (0, G.jsx)(Q, {
                shouldDisplay: f(),
                onErrorShouldTry: function () {
                  p.setPwsLoadingState(!0), p.setErrorOccurred(Ye.none), p.initialize();
                },
                compact: !0,
                errorTitle: (0, G.jsx)(M.Trans, { id: "Something went wrong" }),
                errorText: (0, G.jsx)(M.Trans, { id: "We couldn\u2019t calculate your security score. Don\u2019t worry, just try again." })
              });
            }, null),
            (0, G.jsx)(function () {
              return (0, G.jsx)(Q, {
                shouldDisplay: m(),
                onErrorShouldTry: null,
                compact: !0,
                errorTitle: (0, G.jsx)(M.Trans, { id: "We couldn't calculate your score" }),
                errorText: (0, G.jsx)(M.Trans, { id: "Log out of LastPass and then back in again. That should solve the problem." })
              });
            }, null)
          );
        },
        tt = r(60972),
        rt = r(21930),
        nt = r(78237),
        ot = r(44645);
      var it = (0, S.Z)(oe.C, { target: "e1cwqjhy0" })({ name: "1her3zb", styles: "margin:4px 8px" }),
        at = function (e) {
          var t = e.status,
            r = e.automationId;
          switch (t) {
            case ot.Mw.Compromised:
              return (0, G.jsx)(
                Fe.u,
                { tooltip: { id: "View alert and change password" }, vertical: "bottom", horizontal: "middle", minWidth: 215 },
                (0, G.jsx)(
                  it,
                  { "data-automation-id": "".concat(r, "-compromised"), colors: { backgroundColor: "red700", textColor: "white" } },
                  (0, G.jsx)(M.Trans, { id: "Compromised" })
                )
              );
            case ot.Mw.Secure:
              return (0, G.jsx)(
                Fe.u,
                { tooltip: { id: "No security breach detected" }, vertical: "bottom", horizontal: "middle", minWidth: 190 },
                (0, G.jsx)(
                  it,
                  { "data-automation-id": "".concat(r, "-secure"), colors: { backgroundColor: "green700", textColor: "white" } },
                  (0, G.jsx)(M.Trans, { id: "Secure" })
                )
              );
            case ot.Mw.Inactive:
            default:
              return (0, G.jsx)(
                Fe.u,
                { tooltip: { id: "Start monitoring this email address" }, vertical: "bottom", horizontal: "middle", minWidth: 230 },
                (0, G.jsx)(
                  it,
                  { "data-automation-id": "".concat(r, "-inactive"), colors: { backgroundColor: "neutral200", textColor: "neutral900" } },
                  (0, G.jsx)(M.Trans, { id: "Not monitored" })
                )
              );
          }
        },
        st = function (e) {
          var t = (0, ce.B)();
          return (0, G.jsx)(
            De.A,
            {
              blue: !0,
              onClick: function () {
                return t.dwmStartMonitoring([e.username]);
              },
              "data-automation-id": e.automationId
            },
            (0, G.jsx)(M.Trans, { id: "Start monitoring" })
          );
        },
        lt = function (e) {
          var t = (0, ce.B)();
          return (0, G.jsx)(
            De.A,
            {
              blue: !0,
              onClick: function (r) {
                var n, o;
                r.stopPropagation(),
                  t.viewAlert(""),
                  (n = t.viewAlert),
                  (o = e.usernameHash),
                  setTimeout(function () {
                    return n(o);
                  }, 0);
              },
              "data-automation-id": e.automationId
            },
            (0, G.jsx)(M.Trans, { id: "View alert" })
          );
        },
        ct = r(47483),
        ut = r(18858),
        dt = function (e) {
          var t = e.username,
            r = e.subscriptionID,
            n = (0, ce.B)();
          return (0, G.jsx)(
            ut.V,
            {
              title: (0, G.jsx)(M.Trans, { id: "Stop monitoring the dark web?" }),
              icon: (0, G.jsx)(je.r, null),
              headerColor: "yellow100",
              primaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Stop monitoring" }),
              secondaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Continue monitoring" }),
              onPrimaryButtonClick: function () {
                n.dwmStopMonitoring(r);
              },
              onSecondaryButtonClick: function () {
                n.dwmContinueMonitoring();
              },
              onDismissClick: function () {
                n.dwmDismissStopConfirmation();
              },
              automationId: "stop-monitoring-dialog"
            },
            (0, G.jsx)(M.Trans, {
              id: "You won\u2019t receive alerts for <0>{email}</0> about security breaches that could compromise your personal info.",
              values: { email: t },
              components: [(0, G.jsx)(nt.uD, null)]
            })
          );
        },
        pt = function (e) {
          var t = (0, ce.B)(),
            r = (0, ct._1)().openDialog;
          return (0, G.jsx)(
            De.A,
            {
              red: !0,
              onClick: function () {
                t.dwmStopMonitoringClick(), r((0, G.jsx)(dt, { username: e.username, subscriptionID: e.subscriptionID }));
              },
              "data-automation-id": e.automationId
            },
            (0, G.jsx)(M.Trans, { id: "Stop monitoring" })
          );
        },
        ft = function (e) {
          return (0, G.jsx)(
            De.A,
            {
              red: !0,
              onClick: function () {
                return e.onClick();
              },
              "data-automation-id": e.automationId
            },
            (0, G.jsx)(M.Trans, { id: "Remove from monitoring" })
          );
        },
        mt = (0, S.Z)("button", { target: "e1ocza8j0" })(
          le.q1,
          " border:none;background:none;text-decoration:none;text-transform:none;outline:none;color:{color:",
          function (e) {
            return e.theme.colors.neutral400;
          },
          ";}cursor:pointer;&:disabled{color:",
          function (e) {
            return e.theme.colors.neutral400;
          },
          ";}"
        ),
        ht = function (e) {
          var t = e.account,
            r = e.isMonitoringActive,
            n = e.removeButtonClicked,
            o = e.automationId,
            i = e.subscriptionLimitReached;
          return r
            ? t.status === ot.Mw.Inactive
              ? i
                ? (0, G.jsx)(
                    mt,
                    { "data-automation-id": "".concat(o, "-start-monitoring-disabled"), disabled: !0 },
                    (0, G.jsx)(M.Trans, { id: "Start monitoring" })
                  )
                : (0, G.jsx)(st, { username: t.username, automationId: "".concat(o, "-start-monitoring") })
              : t.status === ot.Mw.Compromised
              ? (0, G.jsx)(
                  O.Fragment,
                  null,
                  (0, G.jsx)(lt, { usernameHash: t.username, automationId: "".concat(o, "-view-alert") }),
                  (0, G.jsx)(pt, { username: t.username, subscriptionID: t.id, automationId: "".concat(o, "-stop-monitoring") })
                )
              : (0, G.jsx)(pt, { username: t.username, subscriptionID: t.id, automationId: "".concat(o, "-stop-monitoring") })
            : (0, G.jsx)(ft, {
                username: t.username,
                subscriptionID: t.id,
                onClick: function () {
                  return n(t);
                },
                automationId: "".concat(o, "-remove")
              });
        },
        Ct = (function (e) {
          return (
            (e.none = "Not settled yet"),
            (e.endUserControl = "Turned on DWM and enabled end-users to control."),
            (e.adminControlMonitoringOn = "Turned on DWM for all end-users and resided control with the admin."),
            (e.adminControlMonitoringOff =
              "Turned off DWM for all end-users and resided control with the admin. End-users cannot use DWM."),
            e
          );
        })({});
      var xt,
        gt,
        wt,
        yt,
        vt,
        jt,
        bt,
        kt,
        Lt,
        Et,
        Zt,
        St,
        Mt,
        Ot,
        Tt,
        Pt,
        Bt,
        At,
        Dt,
        Ft,
        It,
        Rt,
        Vt,
        Wt,
        Ht,
        Ut,
        zt = (0, S.Z)("div", { target: "ecg1lhv2" })(
          "align-items:center;display:flex;justify-content:flex-start;min-height:30px;padding:8px;&:hover{background:",
          function (e) {
            return e.disableHoverEffect ? e.theme.colors.neutral50 : "inherit";
          },
          ";}"
        ),
        Nt = (0, S.Z)("span", { target: "ecg1lhv1" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral900;
          },
          ";font-size:14px;line-height:1.7;"
        ),
        qt = (0, S.Z)("span", { target: "ecg1lhv0" })({ name: "mkkf9p", styles: "flex:1 1 auto" }),
        Gt = function (e) {
          var t = (0, O.useState)(!1),
            r = (0, E.Z)(t, 2),
            n = r[0],
            o = r[1],
            i = e.darkWebMonitoringPolicy === Ct.endUserControl;
          return (0, G.jsx)(
            zt,
            {
              onMouseEnter: function () {
                o(!0);
              },
              onMouseLeave: function () {
                o(!1);
              },
              "data-automation-id": "dwm-email-list-item",
              disableHoverEffect: i
            },
            (0, G.jsx)(Nt, { "data-automation-id": "dwm-email-list-item-email" }, e.account.username),
            e.showDetails && (0, G.jsx)(at, { status: e.account.status, automationId: "dwm-email-list-item-badge" }),
            (0, G.jsx)(qt, null),
            i &&
              n &&
              (0, G.jsx)(ht, {
                isMonitoringActive: e.showDetails,
                account: e.account,
                removeButtonClicked: function (t) {
                  return e.onRemoveListItemClick(t);
                },
                automationId: "dwm-email-list-item-button",
                subscriptionLimitReached: e.subscriptionLimitReached
              })
          );
        },
        _t = ["title", "titleId"];
      function Yt() {
        return (
          (Yt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Yt.apply(this, arguments)
        );
      }
      function Xt(e, t) {
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
      function Kt(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Xt(e, _t);
        return O.createElement(
          "svg",
          Yt(
            {
              width: 120,
              height: 120,
              viewBox: "0 0 120 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          xt ||
            (xt = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z",
              fill: "#ECF5FB"
            })),
          gt ||
            (gt = O.createElement("path", {
              d: "M36.6666 98.6667H84",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          wt ||
            (wt = O.createElement(
              "g",
              { filter: "url(#filter0_i)" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M46.0003 52.7118C37.2482 57.6192 31.3334 66.9855 31.3334 77.7333C31.3334 93.5655 88.6667 93.5655 88.6667 77.7333C88.6667 66.9855 82.752 57.6192 74 52.7118L77.5243 47.5355C78.7396 45.7504 77.4611 43.3333 75.3016 43.3333H44.6986C42.5391 43.3333 41.2606 45.7504 42.476 47.5355L46.0003 52.7118Z",
                fill: "white"
              })
            )),
          yt ||
            (yt = O.createElement("path", {
              d: "M46.0003 52.7118L46.7411 52.2073L47.2913 53.0154L46.4386 53.4935L46.0003 52.7118ZM74 52.7118L73.5616 53.4936L72.7089 53.0154L73.2591 52.2074L74 52.7118ZM77.5243 47.5355L78.2651 48.0399H78.2651L77.5243 47.5355ZM42.476 47.5355L43.2169 47.0311L43.2169 47.0311L42.476 47.5355ZM58.424 88.695C58.9189 88.7051 59.3119 89.1146 59.3018 89.6095C59.2916 90.1044 58.8822 90.4973 58.3873 90.4872L58.424 88.695ZM60.269 90.5033C59.774 90.5049 59.3713 90.105 59.3696 89.61C59.368 89.115 59.7679 88.7124 60.2629 88.7107L60.269 90.5033ZM60.5257 88.7093C61.0206 88.7059 61.4247 89.1045 61.428 89.5995C61.4314 90.0945 61.0329 90.4985 60.5379 90.5019L60.5257 88.7093ZM61.6129 90.4872C61.118 90.4973 60.7086 90.1044 60.6984 89.6095C60.6882 89.1146 61.0812 88.7051 61.5761 88.695L61.6129 90.4872ZM84.3082 64.2946C84.0683 63.8616 84.2249 63.3161 84.6578 63.0762C85.0908 62.8363 85.6363 62.9928 85.8762 63.4258L84.3082 64.2946ZM85.4428 62.6701C85.6954 63.0958 85.555 63.6456 85.1293 63.8982C84.7036 64.1508 84.1537 64.0104 83.9011 63.5847L85.4428 62.6701ZM83.8413 63.4844C83.5869 63.0597 83.725 62.5092 84.1496 62.2549C84.5743 62.0005 85.1248 62.1386 85.3791 62.5632L83.8413 63.4844ZM85.1197 62.1382C85.3811 62.5585 85.2524 63.1112 84.8321 63.3727C84.4118 63.6342 83.8591 63.5054 83.5976 63.0851L85.1197 62.1382ZM74.9373 49.7425C75.2159 49.3333 75.7734 49.2274 76.1826 49.506C76.5918 49.7846 76.6977 50.3421 76.4191 50.7513L74.9373 49.7425ZM76.517 50.6075C76.2384 51.0167 75.6808 51.1226 75.2717 50.844C74.8625 50.5654 74.7566 50.0078 75.0352 49.5987L76.517 50.6075ZM75.0492 49.5781C75.3278 49.169 75.8853 49.0631 76.2945 49.3417C76.7037 49.6203 76.8095 50.1778 76.531 50.587L75.0492 49.5781ZM76.5869 50.5048C76.3083 50.914 75.7508 51.0199 75.3416 50.7413C74.9324 50.4627 74.8266 49.9051 75.1051 49.496L76.5869 50.5048ZM76.9279 45.268C76.7189 44.8193 76.9131 44.2861 77.3618 44.077C77.8105 43.8679 78.3437 44.0622 78.5528 44.5109L76.9279 45.268ZM78.4563 44.3189C78.6914 44.7545 78.5289 45.2982 78.0933 45.5333C77.6577 45.7684 77.114 45.6059 76.8788 45.1703L78.4563 44.3189ZM76.8714 45.1566C76.6326 44.723 76.7906 44.1779 77.2242 43.9391C77.6578 43.7003 78.2029 43.8583 78.4416 44.2919L76.8714 45.1566ZM78.3806 44.1854C78.6338 44.6107 78.4943 45.1608 78.069 45.414C77.6436 45.6672 77.0935 45.5277 76.8403 45.1024L78.3806 44.1854ZM60.7288 44.2296C60.2338 44.2296 59.8325 43.8283 59.8325 43.3333C59.8325 42.8383 60.2338 42.437 60.7288 42.437V44.2296ZM59.8787 42.437C60.3737 42.437 60.775 42.8383 60.775 43.3333C60.775 43.8283 60.3737 44.2296 59.8787 44.2296V42.437ZM59.7572 44.2296C59.2622 44.2296 58.8609 43.8283 58.8609 43.3333C58.8609 42.8383 59.2622 42.437 59.7572 42.437V44.2296ZM59.2715 42.437C59.7665 42.437 60.1678 42.8383 60.1678 43.3333C60.1678 43.8283 59.7665 44.2296 59.2715 44.2296V42.437ZM43.1599 45.1024C42.9067 45.5277 42.3566 45.6672 41.9313 45.414C41.5059 45.1608 41.3664 44.6107 41.6196 44.1854L43.1599 45.1024ZM41.5152 44.3731C41.743 43.9336 42.2839 43.762 42.7234 43.9897C43.1629 44.2175 43.3345 44.7584 43.1068 45.1979L41.5152 44.3731ZM43.0997 45.2118C42.8756 45.6532 42.3361 45.8294 41.8947 45.6054C41.4533 45.3813 41.2771 44.8419 41.5012 44.4005L43.0997 45.2118ZM41.4475 44.5109C41.6565 44.0622 42.1898 43.8679 42.6384 44.077C43.0871 44.2861 43.2814 44.8193 43.0723 45.268L41.4475 44.5109ZM44.8951 49.496C45.1737 49.9051 45.0678 50.4627 44.6586 50.7413C44.2495 51.0198 43.6919 50.914 43.4133 50.5048L44.8951 49.496ZM43.5112 50.6486C43.2326 50.2394 43.3385 49.6819 43.7477 49.4033C44.1569 49.1247 44.7144 49.2306 44.993 49.6397L43.5112 50.6486ZM45.007 49.6603C45.2856 50.0695 45.1797 50.627 44.7705 50.9056C44.3613 51.1842 43.8038 51.0783 43.5252 50.6691L45.007 49.6603ZM43.5812 50.7513C43.3026 50.3421 43.4084 49.7846 43.8176 49.506C44.2268 49.2274 44.7843 49.3333 45.0629 49.7424L43.5812 50.7513ZM36.4026 63.0851C36.1411 63.5054 35.5884 63.6342 35.1681 63.3727C34.7478 63.1112 34.619 62.5585 34.8805 62.1382L36.4026 63.0851ZM34.4313 62.8845C34.6803 62.4567 35.229 62.3117 35.6568 62.5607C36.0847 62.8097 36.2296 63.3583 35.9807 63.7862L34.4313 62.8845ZM35.9221 63.8873C35.6749 64.3162 35.1269 64.4635 34.698 64.2163C34.2691 63.9691 34.1218 63.4211 34.369 62.9922L35.9221 63.8873ZM34.1239 63.4258C34.3639 62.9928 34.9093 62.8362 35.3423 63.0761C35.7753 63.3161 35.9319 63.8615 35.6919 64.2945L34.1239 63.4258ZM32.2297 77.7333C32.2297 80.9389 35.0335 83.6236 40.028 85.58C44.9417 87.5048 51.5958 88.5549 58.424 88.695L58.3873 90.4872C51.4328 90.3445 44.5509 89.2769 39.3741 87.2491C34.2782 85.2529 30.4371 82.1501 30.4371 77.7333H32.2297ZM60.2629 88.7107C60.3505 88.7104 60.4381 88.7099 60.5257 88.7093L60.5379 90.5019C60.4483 90.5025 60.3586 90.5029 60.269 90.5033L60.2629 88.7107ZM61.5761 88.695C68.4043 88.5549 75.0584 87.5048 79.9722 85.58C84.9667 83.6236 87.7705 80.9389 87.7705 77.7333H89.563C89.563 82.1501 85.722 85.2529 80.626 87.2491C75.4493 89.2769 68.5673 90.3445 61.6129 90.4872L61.5761 88.695ZM87.7705 77.7333C87.7705 72.8565 86.5142 68.2759 84.3082 64.2946L85.8762 63.4258C88.2257 67.6662 89.563 72.5449 89.563 77.7333H87.7705ZM83.9011 63.5847C83.8813 63.5512 83.8613 63.5178 83.8413 63.4844L85.3791 62.5632C85.4004 62.5988 85.4217 62.6344 85.4428 62.6701L83.9011 63.5847ZM83.5976 63.0851C81.1199 59.1024 77.6619 55.7927 73.5616 53.4936L74.4383 51.93C78.8029 54.3773 82.4827 57.8995 85.1197 62.1382L83.5976 63.0851ZM73.2591 52.2074L74.9373 49.7425L76.4191 50.7513L74.7408 53.2162L73.2591 52.2074ZM75.0352 49.5987L75.0492 49.5781L76.531 50.587L76.517 50.6075L75.0352 49.5987ZM75.1051 49.496L76.7834 47.0311L78.2651 48.0399L76.5869 50.5048L75.1051 49.496ZM76.7834 47.0311C77.1698 46.4635 77.1807 45.8105 76.9279 45.268L78.5528 44.5109C79.0517 45.5816 79.0339 46.9107 78.2651 48.0399L76.7834 47.0311ZM76.8788 45.1703C76.8764 45.1657 76.8739 45.1611 76.8714 45.1566L78.4416 44.2919C78.4466 44.3009 78.4515 44.3099 78.4563 44.3189L76.8788 45.1703ZM76.8403 45.1024C76.5342 44.5881 75.9882 44.2296 75.3016 44.2296V42.437C76.6677 42.437 77.7764 43.1704 78.3806 44.1854L76.8403 45.1024ZM75.3016 44.2296H60.7288V42.437H75.3016V44.2296ZM59.8787 44.2296H59.7572V42.437H59.8787V44.2296ZM59.2715 44.2296H44.6986V42.437H59.2715V44.2296ZM44.6986 44.2296C44.012 44.2296 43.4661 44.5881 43.1599 45.1024L41.6196 44.1854C42.2239 43.1704 43.3326 42.437 44.6986 42.437V44.2296ZM43.1068 45.1979C43.1044 45.2025 43.102 45.2072 43.0997 45.2118L41.5012 44.4005C41.5058 44.3913 41.5105 44.3822 41.5152 44.3731L43.1068 45.1979ZM43.0723 45.268C42.8196 45.8104 42.8305 46.4635 43.2169 47.0311L41.7351 48.0399C40.9663 46.9107 40.9486 45.5816 41.4475 44.5109L43.0723 45.268ZM43.2169 47.0311L44.8951 49.496L43.4133 50.5048L41.7351 48.0399L43.2169 47.0311ZM44.993 49.6397L45.007 49.6603L43.5252 50.6691L43.5112 50.6486L44.993 49.6397ZM45.0629 49.7424L46.7411 52.2073L45.2594 53.2162L43.5812 50.7513L45.0629 49.7424ZM46.4386 53.4935C42.3383 55.7926 38.8803 59.1024 36.4026 63.0851L34.8805 62.1382C37.5175 57.8994 41.1973 54.3773 45.5619 51.93L46.4386 53.4935ZM35.9807 63.7862C35.9611 63.8198 35.9415 63.8536 35.9221 63.8873L34.369 62.9922C34.3897 62.9563 34.4105 62.9204 34.4313 62.8845L35.9807 63.7862ZM35.6919 64.2945C33.486 68.2759 32.2297 72.8565 32.2297 77.7333H30.4371C30.4371 72.5449 31.7745 67.6662 34.1239 63.4258L35.6919 64.2945Z",
              fill: "#264887"
            })),
          vt ||
            (vt = O.createElement(
              "g",
              { filter: "url(#filter1_i)" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M60 60C68.8366 60 76 52.8366 76 44C76 35.1634 68.8366 28 60 28C51.1634 28 44 35.1634 44 44C44 52.8366 51.1634 60 60 60Z",
                fill: "#B5D9F1"
              })
            )),
          jt ||
            (jt = O.createElement("path", {
              d: "M75.1037 44C75.1037 52.3415 68.3415 59.1037 60 59.1037C51.6585 59.1037 44.8963 52.3415 44.8963 44C44.8963 35.6585 51.6585 28.8963 60 28.8963C68.3415 28.8963 75.1037 35.6585 75.1037 44Z",
              stroke: "#264887",
              strokeWidth: 1.79259
            })),
          bt ||
            (bt = O.createElement(
              "g",
              { filter: "url(#filter2_di)" },
              O.createElement(
                "mask",
                { id: "path-8-inside-1", fill: "white" },
                O.createElement("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M68.6774 50.5275L60.0001 81.3334L81.3218 56.2804C82.7097 54.6497 81.7273 52.1299 79.6018 51.8689L75.8961 51.4139L78.8854 46.9085C79.9906 45.243 78.9566 42.9967 76.9726 42.7531L65.4099 41.3333L68.6775 50.5275L68.6774 50.5275Z"
                })
              ),
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M68.6774 50.5275L60.0001 81.3334L81.3218 56.2804C82.7097 54.6497 81.7273 52.1299 79.6018 51.8689L75.8961 51.4139L78.8854 46.9085C79.9906 45.243 78.9566 42.9967 76.9726 42.7531L65.4099 41.3333L68.6775 50.5275L68.6774 50.5275Z",
                fill: "white"
              }),
              O.createElement("path", {
                d: "M60.0001 81.3334L58.2747 80.8473L61.3652 82.4952L60.0001 81.3334ZM68.6774 50.5275L68.8959 48.7483L67.369 48.5608L66.9519 50.0415L68.6774 50.5275ZM81.3218 56.2804L82.6869 57.4423L82.6869 57.4423L81.3218 56.2804ZM75.8961 51.4139L74.4024 50.4228L72.7988 52.8396L75.6776 53.1931L75.8961 51.4139ZM78.8854 46.9085L80.3791 47.8996L80.3791 47.8996L78.8854 46.9085ZM65.4099 41.3333L65.6283 39.5541L62.7495 39.2006L63.7208 41.9336L65.4099 41.3333ZM68.6775 50.5275L68.459 52.3068L71.3379 52.6602L70.3666 49.9272L68.6775 50.5275ZM61.7256 81.8194L70.4028 51.0135L66.9519 50.0415L58.2747 80.8473L61.7256 81.8194ZM79.9567 55.1186L58.635 80.1715L61.3652 82.4952L82.6869 57.4423L79.9567 55.1186ZM79.3833 53.6481C80.0918 53.7351 80.4193 54.575 79.9567 55.1186L82.6869 57.4423C85.0001 54.7243 83.3627 50.5246 79.8203 50.0896L79.3833 53.6481ZM75.6776 53.1931L79.3833 53.6481L79.8203 50.0896L76.1145 49.6346L75.6776 53.1931ZM77.3917 45.9175L74.4024 50.4228L77.3898 52.405L80.3791 47.8996L77.3917 45.9175ZM76.7541 44.5323C77.4154 44.6135 77.7601 45.3623 77.3917 45.9175L80.3791 47.8996C82.221 45.1237 80.4977 41.3798 77.191 40.9738L76.7541 44.5323ZM65.1914 43.1126L76.7541 44.5323L77.191 40.9738L65.6283 39.5541L65.1914 43.1126ZM70.3666 49.9272L67.099 40.733L63.7208 41.9336L66.9884 51.1278L70.3666 49.9272ZM68.4589 52.3068L68.459 52.3068L68.8959 48.7483L68.8959 48.7483L68.4589 52.3068Z",
                fill: "#264887",
                mask: "url(#path-8-inside-1)"
              })
            )),
          kt ||
            (kt = O.createElement(
              "mask",
              { id: "path-10-inside-2", fill: "white" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M50.9445 50.5275L59.9999 81.3334L38.3585 56.2903C36.9523 54.6631 37.9306 52.1254 40.0652 51.8633L43.7259 51.4139L40.7365 46.9086C39.6314 45.243 40.6654 42.9967 42.6494 42.7531L54.2121 41.3334L50.9445 50.5275Z"
              })
            )),
          Lt ||
            (Lt = O.createElement(
              "g",
              { filter: "url(#filter3_i)" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M50.9445 50.5275L59.9999 81.3334L38.3585 56.2903C36.9523 54.6631 37.9306 52.1254 40.0652 51.8633L43.7259 51.4139L40.7365 46.9086C39.6314 45.243 40.6654 42.9967 42.6494 42.7531L54.2121 41.3334L50.9445 50.5275Z",
                fill: "white"
              })
            )),
          Et ||
            (Et = O.createElement("path", {
              d: "M59.9999 81.3334L61.7197 80.8278L58.6436 82.5055L59.9999 81.3334ZM50.9445 50.5275L49.2247 51.0331L49.0607 50.4752L49.2554 49.9272L50.9445 50.5275ZM38.3585 56.2903L37.0021 57.4624L37.0021 57.4624L38.3585 56.2903ZM40.0652 51.8633L40.2837 53.6426L40.0652 51.8633ZM43.7259 51.4139L45.2196 50.4228L46.8232 52.8396L43.9443 53.1931L43.7259 51.4139ZM40.7365 46.9086L39.2428 47.8997L39.2428 47.8997L40.7365 46.9086ZM42.6494 42.7531L42.4309 40.9738L42.6494 42.7531ZM54.2121 41.3334L53.9936 39.5541L56.8724 39.2006L55.9012 41.9336L54.2121 41.3334ZM58.2801 81.8389L49.2247 51.0331L52.6643 50.022L61.7197 80.8278L58.2801 81.8389ZM39.7148 55.1182L61.3562 80.1613L58.6436 82.5055L37.0021 57.4624L39.7148 55.1182ZM40.2837 53.6426C39.5722 53.7299 39.246 54.5758 39.7148 55.1182L37.0021 57.4624C34.6585 54.7504 36.2891 50.5209 39.8468 50.0841L40.2837 53.6426ZM43.9443 53.1931L40.2837 53.6426L39.8468 50.0841L43.5074 49.6346L43.9443 53.1931ZM42.2302 45.9175L45.2196 50.4228L42.2322 52.405L39.2428 47.8997L42.2302 45.9175ZM42.8678 44.5323C42.2065 44.6135 41.8618 45.3623 42.2302 45.9175L39.2428 47.8997C37.4009 45.1237 39.1243 41.3798 42.4309 40.9738L42.8678 44.5323ZM54.4305 43.1126L42.8678 44.5323L42.4309 40.9738L53.9936 39.5541L54.4305 43.1126ZM49.2554 49.9272L52.523 40.7331L55.9012 41.9336L52.6336 51.1278L49.2554 49.9272Z",
              fill: "#264887",
              mask: "url(#path-10-inside-2)"
            })),
          Zt ||
            (Zt = O.createElement(
              "mask",
              { id: "path-12-inside-3", fill: "white" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M68.3096 50.4913C72.5569 50.4913 76.0001 47.0981 76.0001 42.9123C76.0001 38.7266 72.5569 35.3334 68.3096 35.3334C65.2103 35.3334 62.5393 37.1401 61.3217 39.7432H58.6783C57.4608 37.1401 54.7897 35.3334 51.6905 35.3334C47.4431 35.3334 44 38.7266 44 42.9123C44 47.0981 47.4431 50.4913 51.6905 50.4913C55.278 50.4913 58.2918 48.0704 59.1416 44.7958H60.8585C61.7083 48.0704 64.7221 50.4913 68.3096 50.4913Z"
              })
            )),
          St ||
            (St = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M68.3096 50.4913C72.5569 50.4913 76.0001 47.0981 76.0001 42.9123C76.0001 38.7266 72.5569 35.3334 68.3096 35.3334C65.2103 35.3334 62.5393 37.1401 61.3217 39.7432H58.6783C57.4608 37.1401 54.7897 35.3334 51.6905 35.3334C47.4431 35.3334 44 38.7266 44 42.9123C44 47.0981 47.4431 50.4913 51.6905 50.4913C55.278 50.4913 58.2918 48.0704 59.1416 44.7958H60.8585C61.7083 48.0704 64.7221 50.4913 68.3096 50.4913Z",
              fill: "#D32D27"
            })),
          Mt ||
            (Mt = O.createElement("path", {
              d: "M61.3217 39.7432V41.5358H62.4622L62.9455 40.5027L61.3217 39.7432ZM58.6783 39.7432L57.0546 40.5027L57.5378 41.5358H58.6783V39.7432ZM59.1416 44.7958V43.0032H57.7548L57.4064 44.3456L59.1416 44.7958ZM60.8585 44.7958L62.5936 44.3456L62.2453 43.0032H60.8585V44.7958ZM74.2075 42.9123C74.2075 46.0834 71.5917 48.6987 68.3096 48.6987V52.2839C73.5222 52.2839 77.7927 48.1127 77.7927 42.9123H74.2075ZM68.3096 37.126C71.5917 37.126 74.2075 39.7412 74.2075 42.9123H77.7927C77.7927 37.712 73.5222 33.5408 68.3096 33.5408V37.126ZM62.9455 40.5027C63.8745 38.5165 65.921 37.126 68.3096 37.126V33.5408C64.4997 33.5408 61.204 35.7638 59.698 38.9837L62.9455 40.5027ZM58.6783 41.5358H61.3217V37.9506H58.6783V41.5358ZM51.6905 37.126C54.0791 37.126 56.1256 38.5165 57.0546 40.5027L60.3021 38.9837C58.796 35.7638 55.5004 33.5408 51.6905 33.5408V37.126ZM45.7926 42.9123C45.7926 39.7412 48.4084 37.126 51.6905 37.126V33.5408C46.4779 33.5408 42.2074 37.712 42.2074 42.9123H45.7926ZM51.6905 48.6987C48.4084 48.6987 45.7926 46.0835 45.7926 42.9123H42.2074C42.2074 48.1127 46.4779 52.2839 51.6905 52.2839V48.6987ZM57.4064 44.3456C56.7609 46.8333 54.4577 48.6987 51.6905 48.6987V52.2839C56.0983 52.2839 59.8228 49.3075 60.8767 45.2461L57.4064 44.3456ZM60.8585 43.0032H59.1416V46.5884H60.8585V43.0032ZM68.3096 48.6987C65.5424 48.6987 63.2392 46.8333 62.5936 44.3456L59.1234 45.2461C60.1773 49.3075 63.9018 52.2839 68.3096 52.2839V48.6987Z",
              fill: "#264887",
              mask: "url(#path-12-inside-3)"
            })),
          Ot ||
            (Ot = O.createElement(
              "mask",
              { id: "path-14-inside-4", fill: "white" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M60 20.7249C56.5849 17.1323 50.0005 17.9778 48.077 23.2611L45.5564 30.1847C40.142 31.4055 36.6666 33.2973 36.6666 35.4209C36.6666 39.1028 47.1133 42.0876 60 42.0876C72.8866 42.0876 83.3333 39.1028 83.3333 35.4209C83.3333 33.2973 79.8579 31.4055 74.4435 30.1847L71.9229 23.2612C69.9994 17.9778 63.4151 17.1324 60 20.7249Z"
              })
            )),
          Tt ||
            (Tt = O.createElement(
              "g",
              { filter: "url(#filter4_i)" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M60 20.7249C56.5849 17.1323 50.0005 17.9778 48.077 23.2611L45.5564 30.1847C40.142 31.4055 36.6666 33.2973 36.6666 35.4209C36.6666 39.1028 47.1133 42.0876 60 42.0876C72.8866 42.0876 83.3333 39.1028 83.3333 35.4209C83.3333 33.2973 79.8579 31.4055 74.4435 30.1847L71.9229 23.2612C69.9994 17.9778 63.4151 17.1324 60 20.7249Z",
                fill: "white"
              })
            )),
          Pt ||
            (Pt = O.createElement("path", {
              d: "M60 20.7249L58.7007 21.96L60 23.3267L61.2992 21.96L60 20.7249ZM48.077 23.2611L46.3926 22.6479V22.6479L48.077 23.2611ZM45.5564 30.1847L45.9507 31.9334L46.9059 31.718L47.2408 30.7979L45.5564 30.1847ZM74.4435 30.1847L72.7591 30.7979L73.0941 31.718L74.0492 31.9334L74.4435 30.1847ZM71.9229 23.2612L73.6073 22.6479L71.9229 23.2612ZM61.2992 19.4899C57.0451 15.0146 48.8095 16.0092 46.3926 22.6479L49.7614 23.8744C51.1915 19.9463 56.1247 19.2501 58.7007 21.96L61.2992 19.4899ZM46.3926 22.6479L43.872 29.5714L47.2408 30.7979L49.7614 23.8744L46.3926 22.6479ZM45.1621 28.436C42.369 29.0658 39.9514 29.8935 38.1859 30.9112C36.5439 31.8577 34.874 33.3234 34.874 35.4209H38.4592C38.4592 35.3947 38.527 34.8528 39.9764 34.0173C41.3021 33.253 43.3294 32.5244 45.9507 31.9334L45.1621 28.436ZM34.874 35.4209C34.874 37.2511 36.1578 38.5968 37.4969 39.5013C38.8984 40.4481 40.8088 41.2301 43.0083 41.8586C47.4319 43.1224 53.4387 43.8802 60 43.8802V40.295C53.6746 40.295 48.0147 39.5603 43.9933 38.4113C41.9703 37.8334 40.4636 37.1788 39.5037 36.5304C38.4813 35.8398 38.4592 35.4317 38.4592 35.4209H34.874ZM60 43.8802C66.5612 43.8802 72.5681 43.1224 76.9916 41.8586C79.1912 41.2301 81.1015 40.4481 82.5031 39.5013C83.8421 38.5968 85.1259 37.2511 85.1259 35.4209H81.5407C81.5407 35.4317 81.5187 35.8398 80.4962 36.5304C79.5364 37.1788 78.0296 37.8334 76.0067 38.4113C71.9852 39.5603 66.3254 40.295 60 40.295V43.8802ZM85.1259 35.4209C85.1259 33.3234 83.456 31.8577 81.8141 30.9112C80.0485 29.8935 77.6309 29.0658 74.8378 28.436L74.0492 31.9334C76.6705 32.5244 78.6978 33.253 80.0236 34.0173C81.4729 34.8528 81.5407 35.3947 81.5407 35.4209H85.1259ZM70.2385 23.8744L72.7591 30.7979L76.128 29.5714L73.6073 22.6479L70.2385 23.8744ZM61.2992 21.96C63.8752 19.2501 68.8084 19.9463 70.2385 23.8744L73.6073 22.6479C71.1904 16.0092 62.9549 15.0146 58.7007 19.4899L61.2992 21.96Z",
              fill: "#264887",
              mask: "url(#path-14-inside-4)"
            })),
          Bt ||
            (Bt = O.createElement("path", {
              d: "M56.4077 33.2343C55.4105 33.8819 54.077 33.5985 53.4294 32.6013C52.7818 31.604 53.0652 30.2706 54.0625 29.6229C55.0597 28.9753 56.3932 29.2587 57.0408 30.256C57.6884 31.2533 57.405 32.5867 56.4077 33.2343Z",
              stroke: "#D32D27",
              strokeWidth: 1.79259
            })),
          At ||
            (At = O.createElement("path", {
              d: "M57.555 30.0241L64.8636 25.2778",
              stroke: "#D32D27",
              strokeWidth: 1.79259,
              strokeLinecap: "square"
            })),
          Dt ||
            (Dt = O.createElement("path", {
              d: "M65.3311 25.5129L66.8073 27.7861",
              stroke: "#D32D27",
              strokeWidth: 1.79259,
              strokeLinecap: "square"
            })),
          Ft ||
            (Ft = O.createElement("path", {
              d: "M61.8228 27.6668L62.7454 29.0876",
              stroke: "#D32D27",
              strokeWidth: 1.79259,
              strokeLinecap: "square"
            })),
          It ||
            (It = O.createElement("rect", {
              width: 4,
              height: 4,
              transform: "matrix(0.707107 -0.707106 0.707107 0.707106 94.5049 71.3334)",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Rt ||
            (Rt = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.3334 63.3334C26.4379 63.3334 27.3334 62.4379 27.3334 61.3334C27.3334 60.2288 26.4379 59.3334 25.3334 59.3334C24.2288 59.3334 23.3334 60.2288 23.3334 61.3334C23.3334 62.4379 24.2288 63.3334 25.3334 63.3334Z",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Vt ||
            (Vt = O.createElement("rect", {
              x: 22,
              y: 30,
              width: 4,
              height: 4,
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Wt ||
            (Wt = O.createElement("path", {
              d: "M82.8034 22.8033L85.9186 25.9185",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ht ||
            (Ht = O.createElement("path", {
              d: "M85.8087 22.8033L82.6935 25.9185",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ut ||
            (Ut = O.createElement(
              "defs",
              null,
              O.createElement(
                "filter",
                {
                  id: "filter0_i",
                  x: 30.4371,
                  y: 42.437,
                  width: 59.1259,
                  height: 48.0662,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.709804 0 0 0 0 0.85098 0 0 0 0 0.945098 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                { id: "filter1_i", x: 44, y: 28, width: 32, height: 32, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: 5.37778, dy: -4.48148 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.564706 0 0 0 0 0.776471 0 0 0 0 0.921569 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter2_di",
                  x: 60.0001,
                  y: 41.2731,
                  width: 26.0275,
                  height: 43.2183,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }),
                O.createElement("feOffset", { dx: 2.68889, dy: 0.896296 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.709804 0 0 0 0 0.85098 0 0 0 0 0.945098 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -4.48148, dy: 0.896296 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.709804 0 0 0 0 0.85098 0 0 0 0 0.945098 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter3_i",
                  x: 36.3282,
                  y: 41.2274,
                  width: 23.6716,
                  height: 42.4079,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dy: 8.96296 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.709804 0 0 0 0 0.85098 0 0 0 0 0.945098 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter4_i",
                  x: 36.6666,
                  y: 18.5438,
                  width: 46.6667,
                  height: 23.5438,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: 5.37778, dy: -4.48148 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.709804 0 0 0 0 0.85098 0 0 0 0 0.945098 0 0 0 1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              )
            ))
        );
      }
      var Jt,
        Qt,
        $t,
        er = O.forwardRef(Kt),
        tr = (r.p, ["title", "titleId"]);
      function rr() {
        return (
          (rr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          rr.apply(this, arguments)
        );
      }
      function nr(e, t) {
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
      function or(e, t) {
        var r = e.title,
          n = e.titleId,
          o = nr(e, tr);
        return O.createElement(
          "svg",
          rr(
            {
              width: 40,
              height: 40,
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Jt || (Jt = O.createElement("circle", { cx: 20, cy: 20, r: 20, fill: "#EDF2FB" })),
          Qt ||
            (Qt = O.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              O.createElement("path", {
                d: "M25.2499 21.5001C24.7475 21.5004 24.2502 21.6023 23.7881 21.7994C23.3259 21.9966 22.9084 22.2851 22.5604 22.6476L18.4407 20.5873C18.476 20.3934 18.4958 20.1971 18.4999 20.0001C18.4958 19.803 18.476 19.6067 18.4407 19.4128L22.5604 17.3526C23.1661 17.975 23.9695 18.3675 24.8328 18.4627C25.6961 18.5579 26.5657 18.35 27.2925 17.8745C28.0193 17.3989 28.5582 16.6855 28.8167 15.8563C29.0753 15.0271 29.0374 14.1338 28.7096 13.3295C28.3819 12.5251 27.7846 11.8598 27.0202 11.4475C26.2557 11.0351 25.3717 10.9015 24.5195 11.0694C23.6673 11.2373 22.9001 11.6963 22.3492 12.3678C21.7983 13.0393 21.4981 13.8815 21.4999 14.7501C21.504 14.9473 21.5238 15.1439 21.5592 15.3381L17.4394 17.3968C16.9206 16.8587 16.2527 16.4879 15.5217 16.3321C14.7906 16.1762 14.0296 16.2424 13.3364 16.5222C12.6433 16.8019 12.0495 17.2825 11.6314 17.9021C11.2133 18.5217 10.9899 19.2522 10.9899 19.9997C10.9899 20.7472 11.2133 21.4776 11.6314 22.0973C12.0495 22.7169 12.6433 23.1974 13.3364 23.4772C14.0296 23.7569 14.7906 23.8231 15.5217 23.6673C16.2527 23.5114 16.9206 23.1407 17.4394 22.6026L21.5592 24.6621C21.5238 24.8562 21.504 25.0528 21.4999 25.2501C21.4999 25.9917 21.7198 26.7168 22.1319 27.3334C22.544 27.9501 23.1296 28.4308 23.8148 28.7146C24.5001 28.9984 25.2541 29.0727 25.9815 28.928C26.7089 28.7833 27.3771 28.4262 27.9016 27.9017C28.426 27.3773 28.7832 26.7091 28.9279 25.9816C29.0726 25.2542 28.9983 24.5002 28.7145 23.815C28.4306 23.1298 27.95 22.5441 27.3333 22.132C26.7166 21.72 25.9916 21.5001 25.2499 21.5001Z",
                fill: "#264887"
              })
            )),
          $t ||
            ($t = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0" }, O.createElement("rect", { x: 11, y: 11, width: 18, height: 18, fill: "white" }))
            ))
        );
      }
      var ir,
        ar,
        sr,
        lr = O.forwardRef(or),
        cr = (r.p, ["title", "titleId"]);
      function ur() {
        return (
          (ur = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ur.apply(this, arguments)
        );
      }
      function dr(e, t) {
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
      function pr(e, t) {
        var r = e.title,
          n = e.titleId,
          o = dr(e, cr);
        return O.createElement(
          "svg",
          ur(
            {
              width: 40,
              height: 40,
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          ir || (ir = O.createElement("circle", { cx: 20, cy: 20, r: 20, fill: "#EDF2FB" })),
          ar ||
            (ar = O.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              O.createElement("path", {
                d: "M17.5 12.75H21.5C21.6326 12.75 21.7598 12.6973 21.8536 12.6036C21.9473 12.5098 22 12.3826 22 12.25V11.75C22 11.087 21.7366 10.4511 21.2678 9.98223C20.7989 9.51339 20.163 9.25 19.5 9.25C18.837 9.25 18.2011 9.51339 17.7322 9.98223C17.2634 10.4511 17 11.087 17 11.75V12.25C17 12.3826 17.0527 12.5098 17.1464 12.6036C17.2402 12.6973 17.3674 12.75 17.5 12.75Z",
                fill: "#264887"
              }),
              O.createElement("path", {
                d: "M13 30.75C14.1046 30.75 15 29.8546 15 28.75C15 27.6454 14.1046 26.75 13 26.75C11.8954 26.75 11 27.6454 11 28.75C11 29.8546 11.8954 30.75 13 30.75Z",
                fill: "#264887"
              }),
              O.createElement("path", {
                d: "M31 14.25H17.5C17.3674 14.25 17.2402 14.3027 17.1465 14.3964C17.0527 14.4902 17 14.6174 17 14.75V15.25C17 15.3826 16.9473 15.5098 16.8536 15.6036C16.7598 15.6973 16.6326 15.75 16.5 15.75H13.589C13.218 15.754 12.8552 15.8595 12.5398 16.055C12.2245 16.2504 11.9686 16.5285 11.8 16.859L9.58501 21.859C9.57044 21.9067 9.55973 21.9556 9.55301 22.005L8.73301 22.825C8.5 23.0568 8.31524 23.3325 8.18943 23.6361C8.06361 23.9398 7.99923 24.2653 8.00001 24.594V28.25C8.00001 28.5152 8.10536 28.7696 8.2929 28.9571C8.48044 29.1446 8.73479 29.25 9.00001 29.25C9.13262 29.25 9.25979 29.1973 9.35356 29.1036C9.44733 29.0098 9.50001 28.8826 9.50001 28.75C9.50001 27.8217 9.86876 26.9315 10.5251 26.2751C11.1815 25.6187 12.0717 25.25 13 25.25C13.9283 25.25 14.8185 25.6187 15.4749 26.2751C16.1313 26.9315 16.5 27.8217 16.5 28.75V28.761C16.5 28.8936 16.5527 29.0208 16.6465 29.1146C16.7402 29.2083 16.8674 29.261 17 29.261L23 29.246C23.1326 29.246 23.2598 29.1933 23.3536 29.0996C23.4473 29.0058 23.5 28.8786 23.5 28.746C23.5 27.8177 23.8688 26.9275 24.5251 26.2711C25.1815 25.6147 26.0718 25.246 27 25.246C27.9283 25.246 28.8185 25.6147 29.4749 26.2711C30.1313 26.9275 30.5 27.8177 30.5 28.746C30.5 28.8786 30.5527 29.0058 30.6465 29.0996C30.7402 29.1933 30.8674 29.246 31 29.246C31.2652 29.246 31.5196 29.1406 31.7071 28.9531C31.8947 28.7656 32 28.5112 32 28.246V15.246C31.9989 14.9815 31.8931 14.7281 31.7057 14.5415C31.5183 14.3548 31.2645 14.25 31 14.25ZM17 20.766C17 20.8986 16.9473 21.0258 16.8536 21.1196C16.7598 21.2133 16.6326 21.266 16.5 21.266H12.8C12.717 21.266 12.6353 21.2453 12.5623 21.2058C12.4893 21.1663 12.4273 21.1092 12.3819 21.0398C12.3364 20.9703 12.309 20.8906 12.302 20.8079C12.2951 20.7252 12.3088 20.6421 12.342 20.566L13.454 18.05C13.4929 17.9609 13.5569 17.885 13.6383 17.8317C13.7196 17.7785 13.8148 17.7501 13.912 17.75H16.5C16.6326 17.75 16.7598 17.8027 16.8536 17.8964C16.9473 17.9902 17 18.1174 17 18.25V20.766ZM27.5 21.25C27.5 21.3826 27.4473 21.5098 27.3536 21.6036C27.2598 21.6973 27.1326 21.75 27 21.75H26C25.8674 21.75 25.7402 21.8027 25.6465 21.8964C25.5527 21.9902 25.5 22.1174 25.5 22.25V23.25C25.5 23.3826 25.4473 23.5098 25.3536 23.6036C25.2598 23.6973 25.1326 23.75 25 23.75H24C23.8674 23.75 23.7402 23.6973 23.6465 23.6036C23.5527 23.5098 23.5 23.3826 23.5 23.25V22.25C23.5 22.1174 23.4473 21.9902 23.3536 21.8964C23.2598 21.8027 23.1326 21.75 23 21.75H22C21.8674 21.75 21.7402 21.6973 21.6465 21.6036C21.5527 21.5098 21.5 21.3826 21.5 21.25V20.25C21.5 20.1174 21.5527 19.9902 21.6465 19.8964C21.7402 19.8027 21.8674 19.75 22 19.75H23C23.1326 19.75 23.2598 19.6973 23.3536 19.6036C23.4473 19.5098 23.5 19.3826 23.5 19.25V18.25C23.5 18.1174 23.5527 17.9902 23.6465 17.8964C23.7402 17.8027 23.8674 17.75 24 17.75H25C25.1326 17.75 25.2598 17.8027 25.3536 17.8964C25.4473 17.9902 25.5 18.1174 25.5 18.25V19.25C25.5 19.3826 25.5527 19.5098 25.6465 19.6036C25.7402 19.6973 25.8674 19.75 26 19.75H27C27.1326 19.75 27.2598 19.8027 27.3536 19.8964C27.4473 19.9902 27.5 20.1174 27.5 20.25V21.25Z",
                fill: "#264887"
              }),
              O.createElement("path", {
                d: "M27 30.75C28.1046 30.75 29 29.8546 29 28.75C29 27.6454 28.1046 26.75 27 26.75C25.8954 26.75 25 27.6454 25 28.75C25 29.8546 25.8954 30.75 27 30.75Z",
                fill: "#264887"
              })
            )),
          sr ||
            (sr = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0" }, O.createElement("rect", { x: 8, y: 8, width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var fr = O.forwardRef(pr);
      r.p;
      var mr = (0, S.Z)("div", { target: "e1j63gf48" })({ name: "1x332y7", styles: "padding-left:40px;padding-right:40px;color:#1d3049" }),
        hr = (0, S.Z)("div", { target: "e1j63gf47" })(
          "border-radius:12px;border:1px solid ",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";padding:8px 24px 8px 24px;"
        ),
        Cr = (0, S.Z)("div", { target: "e1j63gf46" })(
          "border-bottom:1px solid ",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";",
          le.q1,
          ";padding:8px 16px 16px 16px;"
        ),
        xr = (0, S.Z)("div", { target: "e1j63gf45" })({ name: "de9hf", styles: "padding-top:16px" }),
        gr = (0, S.Z)("div", { target: "e1j63gf44" })({ name: "6iw9dv", styles: "padding:8px;display:flex" }),
        wr = (0, S.Z)("div", { target: "e1j63gf43" })({ name: "kwyy2", styles: "text-align:left;padding-left:16px" }),
        yr = (0, S.Z)("div", { target: "e1j63gf42" })(le.q1, ";"),
        vr = (0, S.Z)("div", { target: "e1j63gf41" })(le.Py, ";"),
        jr = (0, S.Z)("div", { target: "e1j63gf40" })({ name: "1u53ekv", styles: "padding-bottom:16px" }),
        br = function (e) {
          return (0, G.jsx)(
            ut.V,
            (0, Z.Z)(
              {
                title: (0, G.jsx)(M.Trans, { id: "Upgrade to Premium and start monitoring" }),
                icon: (0, G.jsx)(er, null),
                headerColor: "teal100",
                primaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Upgrade to Premium" }),
                secondaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Learn more about Premium" }),
                automationId: "upgrade-to-premium-and-enable-monitoring-dialog"
              },
              e
            ),
            (0, G.jsx)(
              mr,
              null,
              (0, G.jsx)(
                jr,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Dark web monitoring scans the web for leaked or stolen personal data and alerts you instantly."
                })
              ),
              (0, G.jsx)(
                hr,
                null,
                (0, G.jsx)(Cr, null, (0, G.jsx)(M.Trans, { id: "Here\u2019s what else you get with LastPass Premium!" })),
                (0, G.jsx)(
                  xr,
                  null,
                  (0, G.jsx)(
                    gr,
                    null,
                    (0, G.jsx)(lr, null),
                    (0, G.jsx)(
                      wr,
                      null,
                      (0, G.jsx)(yr, null, (0, G.jsx)(M.Trans, { id: "Unlimited sharing" })),
                      (0, G.jsx)(vr, null, (0, G.jsx)(M.Trans, { id: "Share vital passwords with family and friends" }))
                    )
                  ),
                  (0, G.jsx)(
                    gr,
                    null,
                    (0, G.jsx)(fr, null),
                    (0, G.jsx)(
                      wr,
                      null,
                      (0, G.jsx)(yr, null, (0, G.jsx)(M.Trans, { id: "Emergency access" })),
                      (0, G.jsx)(vr, null, (0, G.jsx)(M.Trans, { id: "Designate an emergency access contact" }))
                    )
                  )
                )
              )
            )
          );
        };
      var kr = (0, S.Z)("div", { target: "e44szog2" })({
          name: "e2du3u",
          styles: "flex-grow:1;display:flex;justify-content:center;align-items:center;flex-direction:column"
        }),
        Lr = (0, S.Z)(er, { target: "e44szog1" })({ name: "14fl2fc", styles: "display:block;height:160px;width:160px" }),
        Er = (0, S.Z)(nt.sM, { target: "e44szog0" })({ name: "hkh81z", styles: "margin-top:8px" }),
        Zr = function () {
          return (0, G.jsx)(kr, null, (0, G.jsx)(Lr, null), (0, G.jsx)(Er, null, (0, G.jsx)(M.Trans, { id: "Preparing results..." })));
        },
        Sr = r(32573),
        Mr = ["email"];
      var Or = (0, S.Z)("div", { target: "e4sguig0" })({ name: "kvqycw", styles: "padding-bottom:15px" }),
        Tr = function (e) {
          var t = e.email,
            r = (0, D.Z)(e, Mr),
            n = (0, ce.B)();
          return (0, G.jsx)(
            ut.V,
            (0, Z.Z)(
              {
                title: (0, G.jsx)(M.Trans, { id: "Remove email address from monitoring?" }),
                icon: (0, G.jsx)(je.r, null),
                headerColor: "yellow100",
                primaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Remove" }),
                secondaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Keep" })
              },
              r
            ),
            (0, G.jsx)(nt.uD, null, t),
            (0, G.jsx)(
              Or,
              null,
              (0, G.jsx)(M.Trans, {
                id: "You won\u2019t receive alerts that could help protect your personal info if this email is involved in a breach."
              })
            ),
            (0, G.jsx)(
              Sr.X,
              {
                onChange: function (e) {
                  n.dwmShowRemoveFromMonitoringDialog(!e.target.checked);
                }
              },
              (0, G.jsx)(M.Trans, { id: "Don\u2019t show me this message again" })
            )
          );
        },
        Pr = function (e) {
          var t = e.isPaywallVisible,
            r = e.paywallV1shouldVisible,
            n = e.linkText,
            o = e.title,
            i = e.toDoOnClick,
            a = e.automationId;
          return t ? (0, G.jsx)(Ee, { isLinkClickable: r, linkText: n, title: o, toDoOnClick: i, automationId: a }) : null;
        },
        Br = r(90407),
        Ar = r(11029);
      var Dr = (0, S.Z)(Ar.r, { target: "efvocf83" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";cursor:pointer;padding:5px;margin-left:36px;float:right;"
        ),
        Fr = (0, S.Z)("div", { target: "efvocf82" })(
          "box-shadow:inset 0px -1px 4px rgba(19, 54, 77, 0.0986187);background-color:",
          function (e) {
            return e.theme.colors.blue100;
          },
          ";position:relative;padding:16px 24px;color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";line-height:24px;font-size:14px;"
        ),
        Ir = (0, S.Z)("span", { target: "efvocf81" })({ name: "1j97xhc", styles: "margin-right:12px" }),
        Rr = (0, S.Z)("a", { target: "efvocf80" })(
          "white-space:nowrap;color:",
          function (e) {
            return e.theme.colors.blue950;
          },
          ";text-decoration:none;&:hover{text-decoration:underline;}"
        );
      var Vr = (0, S.Z)("div", { target: "e1psxxyx2" })(
          le.Py,
          " background-color:",
          function (e) {
            return e.theme.colors.red100;
          },
          ";padding:12px 16px;border-radius:4px;"
        ),
        Wr = (0, S.Z)(Br.r, { target: "e1psxxyx1" })({ name: "te5dj1", styles: "height:18px;width:18px;margin:3px 8px -3px" }),
        Hr = (0, S.Z)(Rr, { target: "e1psxxyx0" })({ name: "1m72cz5", styles: "font-size:14px;font-weight:600;padding:8px" }),
        Ur = function (e) {
          var t = e.shouldVisible,
            r = e.onClicked,
            n = e.redBarText,
            o = e.redBarButtonText;
          return t
            ? (0, G.jsx)(
                Vr,
                null,
                (0, G.jsx)(Wr, null),
                n,
                (0, G.jsx)(
                  Hr,
                  {
                    onClick: function () {
                      return r();
                    }
                  },
                  o
                )
              )
            : null;
        },
        zr = function (e) {
          var t = e.shouldVisible,
            r = e.redBarText;
          return t ? (0, G.jsx)(Vr, null, (0, G.jsx)(Wr, null), r) : null;
        },
        Nr = (0, S.Z)("p", { target: "eu8q3qd0" })(
          le.Py,
          " padding:4px 8px;margin:0 8px;background-color:",
          function (e) {
            return e.theme.colors.white;
          },
          ";color:",
          function (e) {
            return e.theme.colors.neutral500;
          },
          ";border:1px solid ",
          function (e) {
            return e.theme.colors.neutral400;
          },
          ";border-radius:4px;"
        ),
        qr = function (e) {
          switch (e.policy) {
            case Ct.adminControlMonitoringOff:
              return (0, G.jsx)(Gr, null);
            case Ct.adminControlMonitoringOn:
              return (0, G.jsx)(_r, null);
            default:
              return null;
          }
        },
        Gr = function () {
          return (0, G.jsx)(
            Fe.u,
            {
              tooltip: { id: "Your IT administrator has turned off dark web monitoring in your organization." },
              vertical: "top",
              horizontal: "middle",
              minWidth: 340
            },
            (0, G.jsx)(Nr, null, (0, G.jsx)(M.Trans, { id: "Turned off by administrator" }))
          );
        },
        _r = function () {
          return (0, G.jsx)(
            Fe.u,
            {
              tooltip: {
                id: "Your IT administrator manages dark web monitoring in your organization. All of your email addresses are being monitored for exposure."
              },
              vertical: "top",
              horizontal: "middle",
              minWidth: 340
            },
            (0, G.jsx)(Nr, null, (0, G.jsx)(M.Trans, { id: "Managed by administrator" }))
          );
        };
      var Yr,
        Xr,
        Kr,
        Jr,
        Qr,
        $r,
        en,
        tn = (0, S.Z)($, { target: "e1xc9fmm4" })(function (e) {
          return e.hasAccountToShow && "flex: 1";
        }, ";display:flex;flex-direction:column;margin-bottom:0;align-content:center;justify-items:center;"),
        rn = (0, S.Z)(q.K, { target: "e1xc9fmm3" })({ name: "cgjwfr", styles: "margin-top:16px;width:100%" }),
        nn = (0, S.Z)("div", { target: "e1xc9fmm2" })({
          name: "1qda055",
          styles: "position:relative;flex-grow:1;margin-right:-24px;min-height:96px"
        }),
        on = (0, S.Z)("div", { target: "e1xc9fmm1" })({
          name: "1k4g2wd",
          styles: "position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;margin-right:24px"
        }),
        an = (0, S.Z)("div", { target: "e1xc9fmm0" })(
          "margin-top:8px;color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";text-align:center;font-size:12px;line-height:16px;"
        ),
        sn = function (e) {
          var t = (0, O.useState)((0, rt.Z)(e.accounts)),
            r = (0, E.Z)(t, 2),
            n = r[0],
            o = r[1],
            i = (0, O.useState)([]),
            a = (0, E.Z)(i, 2),
            s = a[0],
            l = a[1],
            c = (0, ce.B)(),
            u = (0, ct._1)().openDialog,
            d = e.darkWebMonitoringPolicy === Ct.adminControlMonitoringOff;
          if (
            ((0, O.useEffect)(
              function () {
                e.accounts.every(function (e) {
                  return e.status === ot.Mw.Inactive;
                })
                  ? o(
                      e.accounts.filter(function (e) {
                        return !s.some(function (t) {
                          return t.username === e.username;
                        });
                      })
                    )
                  : o(e.accounts);
              },
              [e.accounts, s]
            ),
            e.loading)
          )
            return (0, G.jsx)(tn, { hasAccountToShow: !0, "data-automation-id": "dwm-container-empty" }, (0, G.jsx)(Zr, null));
          var p = n.every(function (e) {
              return e.status === ot.Mw.Inactive;
            }),
            f = n.filter(function (e) {
              return e.status === ot.Mw.Compromised;
            }),
            m = n.filter(function (e) {
              return e.status === ot.Mw.Compromised || e.status === ot.Mw.Secure;
            }),
            h = function () {
              return p && !e.isPaywallVisible;
            },
            C = function () {
              return e.isTrialUser;
            },
            x = function () {
              return !e.isTrialUser && !e.isFreeUser;
            },
            g = function () {
              return x() || C() ? 200 : e.isEnabledForFreeUser ? 10 : 0;
            },
            w = function () {
              return m.length >= g();
            },
            y = function () {
              return e.isFreeUser && w();
            },
            v = function (e) {
              return e.emptyState
                ? (0, G.jsx)(M.Trans, { id: "Add items to your vault so you can monitor your email addresses." })
                : (0, G.jsx)(M.Trans, {
                    id: "Cyber-crime is real. Don\u2019t be a victim. With dark web monitoring, you\u2019ll be proactively alerted if sites from your vault are breached. Monitor these addresses. All day, every day."
                  });
            },
            j = function () {
              return (0, G.jsx)(rn, { red: !0, onClick: c.addPassword }, (0, G.jsx)(M.Trans, { id: "Add items to your vault" }));
            };
          return (0, G.jsx)(
            tn,
            { hasAccountToShow: Boolean(n.length), "data-automation-id": "dwm-container" },
            (0, G.jsx)(
              ee,
              null,
              (0, G.jsx)(
                te,
                null,
                (0, G.jsx)(re, null, (0, G.jsx)(M.Trans, { id: "Dark web monitoring" })),
                e.isFreeUser &&
                  !e.isEnabledForFreeUser &&
                  (0, G.jsx)(
                    ie,
                    { colors: { backgroundColor: "neutral500", textColor: "neutral500" } },
                    (0, G.jsx)(M.Trans, { id: "Premium" })
                  ),
                (0, G.jsx)(qr, { policy: e.darkWebMonitoringPolicy })
              ),
              !e.errorOccurred &&
                (0, G.jsx)(
                  ne,
                  null,
                  !e.isPaywallVisible && f.length
                    ? (0, G.jsx)(M.Trans, {
                        id: "{0, plural, =0 {<0><1>No email addresses</1> appeared in a known security breach.</0>} one {<2><3># email address</3> appeared in a known security breach.</2>} other {<4><5># email addresses</5> appeared in a known security breach.</4>}}",
                        values: { 0: f.length },
                        components: [
                          (0, G.jsx)("span", null),
                          (0, G.jsx)(nt.uD, null),
                          (0, G.jsx)("span", null),
                          (0, G.jsx)(nt.uD, null),
                          (0, G.jsx)("span", null),
                          (0, G.jsx)(nt.uD, null)
                        ]
                      })
                    : (0, G.jsx)(
                        O.Fragment,
                        null,
                        (0, G.jsx)(v, { emptyState: !n.length }),
                        (0, G.jsx)(ae.d, { url: "https://link.lastpass.com/dark-web-monitoring" })
                      )
                )
            ),
            (0, G.jsx)(Q, {
              shouldDisplay: e.errorOccurred,
              compact: !0,
              onErrorShouldTry: function () {
                c.setDwmLoadingState(!0), c.setErrorOccurred(Ye.none), c.initialize();
              },
              errorTitle: (0, G.jsx)(M.Trans, { id: "Something went wrong" }),
              errorText: (0, G.jsx)(M.Trans, {
                id: "We couldn\u2019t process your monitored accounts. Don\u2019t worry, you can try again."
              })
            }),
            e.errorOccurred
              ? null
              : e.accounts.length
              ? (0, G.jsx)(
                  O.Fragment,
                  null,
                  (0, G.jsx)(Pr, {
                    isPaywallVisible: e.isPaywallVisible,
                    paywallV1shouldVisible: e.paywallV1shouldVisible,
                    linkText: (0, G.jsx)(M.Trans, { id: "Upgrade to find out" }),
                    title: (0, G.jsx)(M.Trans, { id: "Have any of your email addresses been breached?" }),
                    toDoOnClick: e.toDoOnClick,
                    automationId: "dwm-email-list-upgrade"
                  }),
                  n.length
                    ? (0, G.jsx)(
                        O.Fragment,
                        null,
                        (0, G.jsx)(
                          nn,
                          null,
                          (0, G.jsx)(
                            on,
                            { "data-automation-id": "dwm-email-list-container" },
                            n
                              .sort(function (e, t) {
                                return t.status - e.status;
                              })
                              .map(function (t) {
                                return (0, G.jsx)(Gt, {
                                  key: t.username,
                                  account: t,
                                  subscriptionLimitReached: w(),
                                  showDetails: !e.isPaywallVisible && !p,
                                  onRemoveListItemClick: function (t) {
                                    e.showRemoveFromMonitoringDialog
                                      ? u(
                                          (0, G.jsx)(Tr, {
                                            email: t.username,
                                            onPrimaryButtonClick: function () {
                                              l([].concat((0, rt.Z)(s), [t]));
                                            }
                                          })
                                        )
                                      : l([].concat((0, rt.Z)(s), [t]));
                                  },
                                  darkWebMonitoringPolicy: e.darkWebMonitoringPolicy
                                });
                              })
                          )
                        ),
                        !e.paywallV1shouldVisible &&
                          e.isPaywallVisible &&
                          (0, G.jsx)(Ke, {
                            toDoOnClick: function () {
                              return e.toDoOnClick();
                            },
                            text: (0, G.jsx)(M.Trans, { id: "Upgrade to start monitoring your email addresses" })
                          }),
                        e.isEnabledForFreeUser &&
                          (0, G.jsx)(Ur, {
                            shouldVisible: y(),
                            redBarText: (0, G.jsx)(M.Trans, { id: "You can monitor 10 addresses with LastPass Free." }),
                            redBarButtonText: (0, G.jsx)(M.Trans, { id: "Upgrade now for up to 200" }),
                            onClicked: function () {
                              return c.purchaseButtonClicked("DWM");
                            }
                          }),
                        (0, G.jsx)(zr, {
                          shouldVisible: (!h() && x() && w()) || (!h() && C() && w()),
                          redBarText: (0, G.jsx)(M.Trans, {
                            id: "You can monitor 200 addresses. We started monitoring your first 200 emails."
                          })
                        }),
                        h() &&
                          (0, G.jsx)(
                            O.Fragment,
                            null,
                            (0, G.jsx)(
                              rn,
                              {
                                "data-automation-id": "enable-monitoring-button",
                                red: !0,
                                disabled: d,
                                onClick: function () {
                                  e.isFreeUser && !e.isEnabledForFreeUser
                                    ? u(
                                        (0, G.jsx)(br, {
                                          onPrimaryButtonClick: function () {
                                            c.purchaseButtonClicked("DWM");
                                          },
                                          onSecondaryButtonClick: function () {
                                            return c.openURL("https://www.lastpass.com/premium-password-manager");
                                          }
                                        })
                                      )
                                    : c.dwmEnable(
                                        n
                                          .map(function (e) {
                                            return e.username;
                                          })
                                          .slice(0, g())
                                      );
                                }
                              },
                              (0, G.jsx)(M.Trans, { id: "Start monitoring" })
                            ),
                            (0, G.jsx)(
                              an,
                              null,
                              (0, G.jsx)(M.Trans, {
                                id: "By clicking \u201cStart Monitoring\u201d, you agree to share your monitored usernames or addresses with Enzoic to help protect your credentials."
                              }),
                              (0, G.jsx)(
                                ae.F,
                                {
                                  href: "http://link.lastpass.com/partnership-dark-web-monitoring",
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                },
                                (0, G.jsx)(M.Trans, { id: "Learn more about how Enzoic protects you." })
                              )
                            )
                          )
                      )
                    : (0, G.jsx)(j, null)
                )
              : (0, G.jsx)(j, null)
          );
        },
        ln = ["title", "titleId"];
      function cn() {
        return (
          (cn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          cn.apply(this, arguments)
        );
      }
      function un(e, t) {
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
      function dn(e, t) {
        var r = e.title,
          n = e.titleId,
          o = un(e, ln);
        return O.createElement(
          "svg",
          cn(
            {
              width: 89,
              height: 81,
              viewBox: "0 0 89 81",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Yr ||
            (Yr = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M67.414 68.0993C69.2444 72.3819 67.3501 77.3806 63.1755 79.2578C59.0063 81.138 54.1429 79.1893 52.3155 74.9039C51.8239 73.7626 51.6239 72.5643 51.6378 71.3888L65.3533 65.2118C66.2032 65.9878 66.9226 66.9522 67.4142 68.0991L67.414 68.0993Z",
              stroke: "#1D3049",
              strokeWidth: 1.78,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "316.21 7.91 2.37 3.16"
            })),
          Xr ||
            (Xr = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.2166 44.9865C19.2925 35.2088 21.2897 25.8882 27.1547 19.7928C26.9124 19.4274 26.6673 19.0842 26.487 18.663C24.6307 14.4784 26.5547 9.59951 30.7829 7.76339C35.0112 5.92498 39.9436 7.83592 41.7998 12.0205C41.9745 12.4166 42.0703 12.8267 42.1745 13.234C50.9638 13.0582 59.6399 18.3587 64.1752 27.3723C64.1752 27.3723 70.8908 42.6434 78.2656 43.8567C78.4938 43.8679 82.4488 43.9655 83.6573 46.8222C84.7954 49.5226 82.4516 53.1381 78.3783 54.8758L34.245 73.712C30.1745 75.45 25.6785 74.7525 24.7151 71.9879C23.7658 69.2624 25.8503 66.7265 26.0475 66.5033C30.2138 60.1651 23.2166 44.9865 23.2166 44.9865Z",
              stroke: "#1D3049",
              strokeWidth: 1.78,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Kr ||
            (Kr = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M32.5537 22.6038C25.6006 26.1465 22.8371 34.7104 26.3946 41.6923C26.704 42.2996 27.4458 42.5423 28.0507 42.2342C28.6556 41.926 28.8952 41.1832 28.5858 40.5758C25.6459 34.806 27.9282 27.732 33.6748 24.8039C34.2796 24.4958 34.5193 23.753 34.2098 23.1456C33.9004 22.5383 33.1586 22.2956 32.5537 22.6038Z",
              fill: "#1D3049"
            })),
          Jr ||
            (Jr = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.8562 36.9515C12.5432 36.8179 12.2077 36.8251 11.9138 36.9439C11.6228 37.0614 11.3734 37.2905 11.2411 37.6041C9.01779 42.8718 11.4883 48.9864 16.7466 51.2305C17.3726 51.4978 18.0941 51.2063 18.3587 50.5792C18.6234 49.9521 18.3307 49.2276 17.7047 48.9604C13.694 47.2483 11.8114 42.5887 13.5072 38.5713C13.7749 37.943 13.4822 37.2186 12.8562 36.9514L12.8562 36.9515Z",
              fill: "#1D3049"
            })),
          Qr ||
            (Qr = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.7216 58.8401C16.3476 59.1073 17.0691 58.8158 17.3337 58.1887C17.5984 57.5616 17.3057 56.8372 16.6797 56.57C8.22009 52.9586 4.24648 43.1236 7.82319 34.6493C8.08787 34.0222 7.79517 33.2977 7.16916 33.0305C6.85615 32.8969 6.52063 32.9042 6.2267 33.0229C5.93574 33.1405 5.68637 33.3695 5.55403 33.6831C1.44976 43.4073 6.00987 54.694 15.7215 58.8399L15.7216 58.8401Z",
              fill: "#1D3049"
            })),
          $r ||
            ($r = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M75.7606 24.9924C76.0875 25.0869 76.4197 25.0388 76.6969 24.8851C76.9714 24.733 77.191 24.4752 77.2841 24.1479C78.8489 18.6485 75.6517 12.8805 70.1591 11.2939C69.5052 11.1049 68.8246 11.4822 68.6383 12.1369C68.452 12.7916 68.8308 13.475 69.4847 13.6639C73.6742 14.8745 76.1106 19.2699 74.917 23.464C74.7279 24.1202 75.1068 24.8036 75.7607 24.9925L75.7606 24.9924Z",
              fill: "#1D3049"
            })),
          en ||
            (en = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M70.2489 3.61618C69.5949 3.42722 68.9143 3.80448 68.7281 4.45915C68.5418 5.11384 68.9206 5.79722 69.5745 5.98615C78.4112 8.53959 83.5538 17.817 81.0365 26.6641C80.8502 27.3188 81.229 28.0022 81.8829 28.1911C82.2099 28.2856 82.542 28.2375 82.8193 28.0838C83.0937 27.9316 83.3133 27.6739 83.4065 27.3466C86.2951 17.1946 80.3934 6.54779 70.2489 3.61632L70.2489 3.61618Z",
              fill: "#1D3049"
            }))
        );
      }
      var pn = O.forwardRef(dn);
      r.p;
      var fn = (0, S.Z)("div", { target: "e1ik4gen3" })({ name: "18d63h3", styles: "margin:32px" }),
        mn = (0, S.Z)("div", { target: "e1ik4gen2" })({
          name: "obuyv4",
          styles: "align-items:center;display:flex;flex-direction:column;text-align:center"
        }),
        hn = (0, S.Z)("h2", { target: "e1ik4gen1" })(le.q1, " margin:8px 0;"),
        Cn = (0, S.Z)("p", { target: "e1ik4gen0" })(
          le.Py,
          " color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";margin:8px 0;"
        ),
        xn = function (e) {
          var t = e.isPaywallVersion1,
            r = e.isPaywallVisible;
          return (0, G.jsx)(
            mn,
            null,
            (0, G.jsx)(fn, null, (0, G.jsx)(pn, null)),
            (0, G.jsx)(hn, null, (0, G.jsx)(M.Trans, { id: "Great. No alerts." })),
            (0, G.jsx)(
              Cn,
              null,
              r
                ? t
                  ? (0, G.jsx)(M.Trans, {
                      id: "Upgrade to start dark web monitoring and find out if you\u2019re compromised in an online data breach."
                    })
                  : (0, G.jsx)(M.Trans, {
                      id: "Start dark web monitoring to find out if you\u2019re compromised in an online data breach."
                    })
                : (0, G.jsx)(M.Trans, {
                    id: "Rest at ease. You\u2019ll find out immediately if you\u2019re compromised in an online data breach."
                  })
            )
          );
        };
      var gn,
        wn,
        yn,
        vn = (0, S.Z)(Ar.r, { target: "eg6y06t5" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";cursor:pointer;position:absolute;right:24px;top:24px;"
        ),
        jn = (0, S.Z)("div", { target: "eg6y06t4" })({ name: "h492bl", styles: "display:flex;margin-bottom:16px" }),
        bn = (0, S.Z)("div", { target: "eg6y06t3" })({ name: "ny5p0o", styles: "margin-left:16px" }),
        kn = (0, S.Z)("span", { target: "eg6y06t2" })(le.q1, ";display:block;"),
        Ln = (0, S.Z)("span", { target: "eg6y06t1" })(
          le.Py,
          ";color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";display:block;line-height:1;"
        ),
        En = function (e) {
          var t = e.dismissable,
            r = e.onDismissClick,
            n = e.icon,
            o = e.title,
            i = e.date,
            a = e.highlited,
            s = e.children,
            l = e.automationId,
            c = !0 === a,
            u = (0, S.Z)("div", { target: "eg6y06t0" })(
              "background:",
              function (e) {
                return e.theme.colors.white;
              },
              ";border:1px solid ",
              function (e) {
                return e.theme.colors.neutral300;
              },
              ";border-radius:",
              function (e) {
                return e.theme.radius.pixel8;
              },
              ";box-shadow:",
              function (e) {
                return c ? e.theme.elevations.elevationBlue : e.theme.elevations.elevation100;
              },
              ";padding:24px;position:relative;min-width:200px;&:not(:last-of-type){margin-bottom:24px;}"
            );
          return (0, G.jsx)(
            u,
            { "data-automation-id": l },
            t &&
              (0, G.jsx)(vn, {
                onClick: function () {
                  return r && r();
                },
                "data-automation-id": "".concat(l, "-close-button")
              }),
            (0, G.jsx)(
              jn,
              null,
              n,
              (0, G.jsx)(
                bn,
                null,
                (0, G.jsx)(kn, null, o),
                (0, G.jsx)(
                  Ln,
                  null,
                  (0, G.jsx)(
                    "time",
                    { dateTime: i.toISOString() },
                    i.toLocaleDateString(void 0, { month: "long", day: "numeric", year: "numeric" })
                  )
                )
              )
            ),
            s
          );
        },
        Zn = ["title", "titleId"];
      function Sn() {
        return (
          (Sn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Sn.apply(this, arguments)
        );
      }
      function Mn(e, t) {
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
      function On(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Mn(e, Zn);
        return O.createElement(
          "svg",
          Sn(
            {
              width: 40,
              height: 40,
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          gn || (gn = O.createElement("circle", { cx: 20, cy: 20, r: 20, fill: "#FBEBEB" })),
          wn ||
            (wn = O.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              O.createElement("path", {
                d: "M31.407 23.685L30.54 23.326C29.787 21.1723 29.787 18.8267 30.54 16.673L31.407 16.314C31.5235 16.2657 31.6293 16.195 31.7185 16.1059C31.8076 16.0167 31.8783 15.9108 31.9266 15.7943C31.9748 15.6779 31.9996 15.553 31.9996 15.4269C31.9996 15.3008 31.9748 15.176 31.9265 15.0595C31.8782 14.943 31.8075 14.8372 31.7183 14.748C31.6292 14.6589 31.5233 14.5882 31.4068 14.5399C31.2903 14.4917 31.1655 14.4669 31.0394 14.4669C30.9133 14.4669 30.7885 14.4917 30.672 14.54L29.806 14.899C27.7513 13.9095 26.0927 12.2527 25.101 10.199L25.46 9.332C25.558 9.09676 25.5585 8.83222 25.4615 8.59658C25.3644 8.36094 25.1777 8.1735 24.9425 8.0755C24.7073 7.97751 24.4427 7.97697 24.2071 8.07402C23.9714 8.17108 23.784 8.35776 23.686 8.593L23.327 9.46C21.1733 10.213 18.8277 10.213 16.674 9.46L16.314 8.593C16.2681 8.47327 16.1986 8.36395 16.1098 8.2715C16.0209 8.17905 15.9144 8.10533 15.7966 8.05471C15.6788 8.00409 15.552 7.97759 15.4238 7.97677C15.2956 7.97594 15.1685 8.00082 15.05 8.04993C14.9316 8.09903 14.8241 8.17138 14.7341 8.26268C14.6441 8.35399 14.5732 8.46241 14.5258 8.58154C14.4783 8.70067 14.4552 8.82811 14.4578 8.95631C14.4605 9.08452 14.4887 9.2109 14.541 9.328L14.9 10.195C13.9096 12.2479 12.2529 13.9046 10.2 14.895L9.328 14.54C9.21152 14.4917 9.08667 14.4669 8.96058 14.4669C8.8345 14.4669 8.70965 14.4917 8.59316 14.5399C8.47667 14.5882 8.37082 14.6589 8.28165 14.748C8.19249 14.8372 8.12176 14.943 8.0735 15.0595C8.02524 15.176 8.00039 15.3008 8.00038 15.4269C8.00037 15.553 8.02519 15.6779 8.07343 15.7943C8.12167 15.9108 8.19239 16.0167 8.28153 16.1059C8.37068 16.195 8.47652 16.2657 8.593 16.314L9.461 16.673C10.213 18.8269 10.213 21.1721 9.461 23.326L8.593 23.685C8.35775 23.7825 8.17086 23.9694 8.07343 24.2047C7.97601 24.4399 7.97603 24.7043 8.0735 24.9395C8.17097 25.1748 8.35789 25.3616 8.59316 25.4591C8.82842 25.5565 9.09275 25.5565 9.328 25.459L10.195 25.1C12.2494 26.09 13.9079 27.7467 14.9 29.8L14.541 30.667C14.4926 30.7835 14.4677 30.9083 14.4676 31.0345C14.4675 31.1606 14.4923 31.2855 14.5405 31.402C14.5887 31.5186 14.6593 31.6245 14.7485 31.7137C14.8376 31.8029 14.9435 31.8737 15.06 31.922C15.1761 31.9716 15.3008 31.9981 15.427 32C15.617 32.0001 15.8027 31.9438 15.9606 31.8382C16.1185 31.7327 16.2415 31.5826 16.314 31.407L16.673 30.54C18.8271 29.787 21.1729 29.787 23.327 30.54L23.686 31.407C23.7586 31.5825 23.8816 31.7325 24.0395 31.8381C24.1974 31.9436 24.3831 32 24.573 32C24.6992 31.9997 24.8242 31.9749 24.941 31.927C25.1761 31.8293 25.3628 31.6422 25.4602 31.4069C25.5575 31.1716 25.5574 30.9073 25.46 30.672L25.101 29.805C26.0925 27.7512 27.7512 26.0944 29.806 25.105L30.672 25.464C30.7885 25.5123 30.9133 25.5371 31.0394 25.5371C31.1655 25.5371 31.2903 25.5123 31.4068 25.4641C31.5233 25.4158 31.6292 25.3451 31.7183 25.256C31.8075 25.1668 31.8782 25.061 31.9265 24.9445C31.9748 24.828 31.9996 24.7032 31.9996 24.5771C31.9996 24.451 31.9748 24.3262 31.9266 24.2097C31.8783 24.0932 31.8076 23.9873 31.7185 23.8982C31.6293 23.809 31.5235 23.7383 31.407 23.69V23.685ZM28.833 22.619L27.18 21.934C26.7873 20.6742 26.7873 19.3248 27.18 18.065L28.833 17.38C28.4299 19.1031 28.4299 20.8959 28.833 22.619ZM23.033 15.189C23.5272 15.8732 24.1278 16.4738 24.812 16.968L21.775 18.226L23.033 15.189ZM20 17.491L18.742 14.454C19.5752 14.589 20.4248 14.589 21.258 14.454L20 17.491ZM18.226 18.226L15.189 16.968C15.8734 16.4741 16.4741 15.8734 16.968 15.189L18.226 18.226ZM17.491 20L14.454 21.257C14.589 20.4238 14.589 19.5742 14.454 18.741L17.491 20ZM18.227 21.773L16.968 24.811C16.4735 24.1265 15.8725 23.5255 15.188 23.031L18.227 21.773ZM20 22.509L21.258 25.546C20.4251 25.4073 19.5749 25.4073 18.742 25.546L20 22.509ZM21.774 21.773L24.812 23.032C24.1273 23.5259 23.5263 24.1266 23.032 24.811L21.774 21.773ZM22.509 20L25.547 18.741C25.4125 19.5746 25.4125 20.4244 25.547 21.258L22.509 20ZM28.1 15.606L26.446 16.291C25.2768 15.6788 24.3222 14.7242 23.71 13.555L24.394 11.9C25.3276 13.4041 26.5959 14.6724 28.1 15.606ZM22.62 11.167L21.935 12.82C20.6752 13.215 19.3248 13.215 18.065 12.82L17.381 11.167C19.1041 11.5701 20.8969 11.5701 22.62 11.167ZM15.607 11.9L16.292 13.553C15.6798 14.7228 14.7253 15.6779 13.556 16.291L11.9 15.606C13.4045 14.6725 14.6731 13.4042 15.607 11.9ZM11.167 17.38L12.821 18.065C13.2137 19.3248 13.2137 20.6742 12.821 21.934L11.167 22.619C11.5701 20.8959 11.5701 19.1031 11.167 17.38ZM11.9 24.393L13.553 23.708C14.7221 24.3212 15.6768 25.2759 16.29 26.445L15.607 28.1C14.6732 26.5954 13.4046 25.3268 11.9 24.393ZM17.378 28.833L18.063 27.18C19.3228 26.785 20.6732 26.785 21.933 27.18L22.618 28.833C20.8952 28.4303 19.1028 28.4303 17.38 28.833H17.378ZM24.392 28.098L23.707 26.445C24.3193 25.2755 25.2743 24.3209 26.444 23.709L28.096 24.393C26.593 25.3271 25.3261 26.5958 24.394 28.1L24.392 28.098Z",
                fill: "#D32D27"
              })
            )),
          yn ||
            (yn = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0" }, O.createElement("rect", { x: 8, y: 8, width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var Tn = O.forwardRef(On);
      r.p;
      var Pn,
        Bn = { name: "1k6141t", styles: "margin:16px 0" },
        An = (0, S.Z)("div", { target: "ec3ien92" })(Bn, ";"),
        Dn = (0, S.Z)("span", { target: "ec3ien91" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";display:block;font-size:12px;line-height:1.33;"
        ),
        Fn = (0, S.Z)("span", { target: "ec3ien90" })(le.q1, ";display:block;"),
        In = function (e) {
          return (0, G.jsx)(An, null, (0, G.jsx)(Dn, null, e.label), (0, G.jsx)(Fn, null, e.children));
        },
        Rn = ["title", "titleId"];
      function Vn() {
        return (
          (Vn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Vn.apply(this, arguments)
        );
      }
      function Wn(e, t) {
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
      function Hn(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Wn(e, Rn);
        return O.createElement(
          "svg",
          Vn(
            {
              width: 12,
              height: 12,
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Pn ||
            (Pn = O.createElement("path", {
              d: "M10.6667 10.6667H1.33333V1.33332H6V-1.52588e-05H1.33333C0.593333 -1.52588e-05 0 0.599985 0 1.33332V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V5.99998H10.6667V10.6667ZM7.33333 -1.52588e-05V1.33332H9.72667L3.17333 7.88665L4.11333 8.82665L10.6667 2.27332V4.66665H12V-1.52588e-05H7.33333Z",
              fill: "currentColor"
            }))
        );
      }
      var Un = O.forwardRef(Hn);
      r.p;
      var zn = (0, S.Z)(Un, { target: "e1j6hokd0" })({ name: "6rm8ci", styles: "color:white;margin-right:8px" }),
        Nn = function (e) {
          return (0, G.jsx)(
            q.K,
            (0, Z.Z)({ red: !0, type: "button" }, e),
            (0, G.jsx)(zn, null),
            (0, G.jsx)(M.Trans, { id: "Change password" })
          );
        },
        qn = function (e) {
          var t = (0, ce.B)();
          return (0, G.jsx)(
            ut.V,
            {
              title: (0, G.jsx)(M.Trans, { id: "Be sure to change your password" }),
              icon: (0, G.jsx)(je.r, null),
              headerColor: "yellow100",
              primaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Dismiss Alert" }),
              secondaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Change password" }),
              onPrimaryButtonClick: function () {
                return t.dismissAlert(e.alertID);
              },
              onSecondaryButtonClick: function () {
                return t.changePasswordFromAlert(e.vaultPassword, e.url);
              }
            },
            (0, G.jsx)(M.Trans, { id: "We encourage you to change your password for this site before dismissing this alert." })
          );
        },
        Gn = r(36056),
        _n = r(19555),
        Yn = r(17069),
        Xn = r(88378);
      var Kn,
        Jn,
        Qn = (0, S.Z)("div", { target: "e1w1bwec3" })(
          le.Py,
          " ",
          Bn,
          " color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";"
        ),
        $n = { name: "144esrr", styles: "height:40px;width:40px" },
        eo = (0, S.Z)(Gn.P, { target: "e1w1bwec2" })($n, ";"),
        to = (0, S.Z)(Tn, { target: "e1w1bwec1" })($n, ";"),
        ro = (0, S.Z)("div", { target: "e1w1bwec0" })({ name: "2qga7i", styles: "text-align:right" }),
        no = function (e) {
          var t = (0, ce.B)(),
            r = (0, Yn.d)(),
            n = (0, ct._1)().openDialog;
          return (0, G.jsx)(
            En,
            {
              title: (0, G.jsx)(M.Trans, { id: "Dark web alert" }),
              icon: e.vaultPassword ? (0, G.jsx)(eo, { url: e.vaultPassword.loginUrl, default: Tn }) : (0, G.jsx)(to, null),
              date: e.createdAt,
              dismissable: !0,
              onDismissClick: function () {
                n((0, G.jsx)(qn, { alertID: e.id, url: e.url, vaultPassword: e.vaultPassword }));
              },
              highlited: e.viewAlert === e.username,
              automationId: e.automationId
            },
            (0, G.jsx)(In, { label: (0, G.jsx)(M.Trans, { id: "Breached site" }) }, e.vaultPassword ? e.vaultPassword.loginUrl : e.url),
            (0, G.jsx)(In, { label: (0, G.jsx)(M.Trans, { id: "Your email address for this site" }) }, e.username),
            (0, G.jsx)(In, { label: (0, G.jsx)(M.Trans, { id: "Compromised data" }) }, e.exposedData),
            (0, G.jsx)(
              Qn,
              null,
              (0, G.jsx)(M.Trans, {
                id: "Change your password for this site immediately. If you use the same password elsewhere, change it there, too."
              })
            ),
            (0, G.jsx)(
              ro,
              { "data-automation-id": "alert-list-item-button" },
              (0, G.jsx)(Nn, {
                onClick: function () {
                  e.showPasswordChangeHintDialog &&
                    t.sendTracking("Change Password Clicked", {
                      Action: e.vaultPassword && e.vaultPassword.loginUrl ? "Launch URL" : "Missing URL",
                      Source: Xn.hq.SECURITY_ALERT
                    }),
                    e.showPasswordChangeHintDialog
                      ? r.openPasswordChangeHintDialog(
                          [_n.g.BREACHED],
                          e.url,
                          e.vaultPassword ? e.vaultPassword.record.id : "site-".concat(e.url),
                          Xn.hq.SECURITY_ALERT
                        )
                      : t.changePasswordFromAlert(e.vaultPassword, e.url);
                }
              })
            )
          );
        },
        oo = (0, O.memo)(no),
        io = ["title", "titleId"];
      function ao() {
        return (
          (ao = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ao.apply(this, arguments)
        );
      }
      function so(e, t) {
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
      function lo(e, t) {
        var r = e.title,
          n = e.titleId,
          o = so(e, io);
        return O.createElement(
          "svg",
          ao(
            {
              width: 40,
              height: 40,
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Kn || (Kn = O.createElement("circle", { cx: 20, cy: 20, r: 20, fill: "#FBEBEB" })),
          Jn ||
            (Jn = O.createElement("path", {
              d: "M27.5 17.5H26.75V14.75C26.75 12.9598 26.0388 11.2429 24.773 9.97703C23.5071 8.71116 21.7902 8 20 8C18.2098 8 16.4929 8.71116 15.227 9.97703C13.9612 11.2429 13.25 12.9598 13.25 14.75V17.5H12.5C11.9696 17.5 11.4609 17.7107 11.0858 18.0858C10.7107 18.4609 10.5 18.9696 10.5 19.5V30C10.5 30.5304 10.7107 31.0391 11.0858 31.4142C11.4609 31.7893 11.9696 32 12.5 32H27.5C28.0304 32 28.5391 31.7893 28.9142 31.4142C29.2893 31.0391 29.5 30.5304 29.5 30V19.5C29.5 18.9696 29.2893 18.4609 28.9142 18.0858C28.5391 17.7107 28.0304 17.5 27.5 17.5ZM20 26.5C19.6044 26.5 19.2178 26.3827 18.8889 26.1629C18.56 25.9432 18.3036 25.6308 18.1522 25.2654C18.0009 24.8999 17.9613 24.4978 18.0384 24.1098C18.1156 23.7219 18.3061 23.3655 18.5858 23.0858C18.8655 22.8061 19.2219 22.6156 19.6098 22.5384C19.9978 22.4613 20.3999 22.5009 20.7654 22.6522C21.1308 22.8036 21.4432 23.06 21.6629 23.3889C21.8827 23.7178 22 24.1044 22 24.5C22 25.0304 21.7893 25.5391 21.4142 25.9142C21.0391 26.2893 20.5304 26.5 20 26.5ZM24.25 17C24.25 17.1326 24.1973 17.2598 24.1036 17.3536C24.0098 17.4473 23.8826 17.5 23.75 17.5H16.25C16.1174 17.5 15.9902 17.4473 15.8964 17.3536C15.8027 17.2598 15.75 17.1326 15.75 17V14.75C15.75 13.6228 16.1978 12.5418 16.9948 11.7448C17.7918 10.9478 18.8728 10.5 20 10.5C21.1272 10.5 22.2082 10.9478 23.0052 11.7448C23.8022 12.5418 24.25 13.6228 24.25 14.75V17Z",
              fill: "#D32D27"
            }))
        );
      }
      var co = O.forwardRef(lo);
      r.p;
      var uo = (0, S.Z)("div", { target: "e1xfbuc81" })(
          le.Py,
          " ",
          Bn,
          " color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";"
        ),
        po = (0, S.Z)("div", { target: "e1xfbuc80" })({ name: "2qga7i", styles: "text-align:right" }),
        fo = function (e) {
          var t = (0, ce.B)(),
            r = "".concat(e.strength, "%");
          return (0, G.jsx)(
            En,
            {
              title: (0, G.jsx)(M.Trans, { id: "Master password alert" }),
              icon: (0, G.jsx)(co, null),
              date: e.createdAt,
              dismissable: !1,
              automationId: e.automationId
            },
            (0, G.jsx)(
              In,
              { label: (0, G.jsx)(M.Trans, { id: "Master password strength" }) },
              (0, G.jsx)(M.Trans, { id: "Weak ({percentage})", values: { percentage: r } })
            ),
            (0, G.jsx)(uo, null, (0, G.jsx)(M.Trans, { id: "For your protection, change your master password immediately!" })),
            (0, G.jsx)(
              po,
              { "data-automation-id": "alert-list-item-button-master-password" },
              (0, G.jsx)(Nn, {
                onClick: function () {
                  t.changeMasterPassword();
                }
              })
            )
          );
        };
      var mo = (0, S.Z)("div", { target: "e1ix305c2" })(
          "background:",
          function (e) {
            return e.theme.colors.neutral50;
          },
          ";box-sizing:border-box;height:calc(100% - 83px);overflow-y:auto;padding:3px 30px 30px 30px;position:absolute;bottom:0;"
        ),
        ho = (0, S.Z)("h1", { target: "e1ix305c1" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral900;
          },
          ";font-size:18px;font-weight:",
          function (e) {
            return e.theme.fonts.weight.semibold;
          },
          ";letter-spacing:0.24px;line-height:1.33;position:absolute;background:",
          function (e) {
            return e.theme.colors.neutral50;
          },
          ";z-index:100;box-shadow:",
          function (e) {
            return e.scrolledY ? e.theme.elevations.elevation200 : "";
          },
          ";padding:30px;width:100%;"
        ),
        Co = (0, S.Z)("span", { target: "e1ix305c0" })({ name: "102tj0a", styles: "position:relative;top:-22px" }),
        xo = function (e) {
          var t = e.alerts,
            r = e.viewAlert,
            n = e.isPaywallVersion1,
            o = e.isPaywallVisible,
            i = e.showPasswordChangeHintDialog,
            a = (0, O.useState)(!1),
            s = (0, E.Z)(a, 2),
            l = s[0],
            c = s[1],
            u = (0, O.useRef)(null);
          (0, O.useEffect)(
            function () {
              u.current && r && u.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            },
            [r]
          );
          var d = (0, ce.B)();
          (0, O.useEffect)(
            function () {
              return function () {
                d.viewAlert("");
              };
            },
            [d]
          );
          var p = -1,
            f = function (e) {
              return e.type === ot.NK.MasterPassword;
            },
            m = t.find(f),
            h = m
              ? [m].concat(
                  (0, rt.Z)(
                    t.filter(function (e) {
                      return !f(e);
                    })
                  )
                )
              : (0, rt.Z)(t);
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(
              ho,
              { scrolledY: l },
              (0, G.jsx)(M.Trans, {
                id: "{0, plural, =0 {You have no alerts} one {You have # alert} other {You have # alerts}}",
                values: { 0: t.length }
              })
            ),
            (0, G.jsx)(
              mo,
              {
                "data-automation-id": "alert-list",
                onScroll: function (e) {
                  0 === e.target.scrollTop ? c(!1) : c(!0);
                }
              },
              h.length
                ? h.map(function (e, t) {
                    if (e.type === ot.NK.DarkWeb) {
                      -1 === p && e.details.username === r && (p = t);
                      var n = p === t;
                      return (0, G.jsx)(
                        O.Fragment,
                        null,
                        n && (0, G.jsx)(Co, { ref: u }),
                        (0, G.jsx)(
                          oo,
                          (0, Z.Z)({ key: t }, e.details, {
                            viewAlert: r,
                            automationId: "alert-list-item",
                            showPasswordChangeHintDialog: i
                          })
                        )
                      );
                    }
                    return (0, G.jsx)(fo, (0, Z.Z)({ key: t }, e.details, { automationId: "alert-list-item-master-password" }));
                  })
                : (0, G.jsx)(xn, { isPaywallVersion1: n, isPaywallVisible: o })
            )
          );
        },
        go = function () {
          var e = (0, ce.B)();
          return (0, G.jsx)(
            Fr,
            null,
            (0, G.jsx)(Dr, {
              onClick: function () {
                return e.setShowFeedbackBanner(!1);
              }
            }),
            (0, G.jsx)(Ir, null, (0, G.jsx)(M.Trans, { id: "How is your experience with the Security Dashboard?" })),
            (0, G.jsx)(
              Rr,
              { href: "https://www.getfeedback.com/r/P4JGwgEw", target: "_blank" },
              (0, G.jsx)(M.Trans, { id: "Provide your feedback here." })
            )
          );
        };
      var wo,
        yo = (0, S.Z)("div", { target: "e5tb5wc2" })(
          "align-items:stretch;display:flex;flex-direction:column;justify-content:flex-start;padding:24px;position:relative;background-color:",
          function (e) {
            return e.theme.colors.white;
          },
          ";"
        ),
        vo = (0, S.Z)("div", { target: "e5tb5wc1" })({ name: "1fgdcyd", styles: "margin-bottom:24px" }),
        jo = (function (e) {
          return (
            (e[(e.AllPasswords = 1)] = "AllPasswords"),
            (e[(e.AllAtRiskPasswords = 2)] = "AllAtRiskPasswords"),
            (e[(e.Weak = 3)] = "Weak"),
            (e[(e.Blank = 4)] = "Blank"),
            (e[(e.Duplicate = 5)] = "Duplicate"),
            (e[(e.Excluded = 6)] = "Excluded"),
            (e[(e.Breached = 7)] = "Breached"),
            (e[(e.NotMonitored = 8)] = "NotMonitored"),
            (e[(e.Secure = 9)] = "Secure"),
            e
          );
        })({}),
        bo = (0, S.Z)("p", { target: "e7nkolv0" })(le.Py, ";"),
        ko = function (e) {
          switch (e.filterType) {
            case jo.AllAtRiskPasswords:
              return (0, G.jsx)(
                bo,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "These sites have passwords that are unsafe because they are weak, reused on multiple sites, or missing."
                })
              );
            case jo.Weak:
              return (0, G.jsx)(
                bo,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Create passwords that are long and difficult to guess or that use a short phrase unique to your life. Avoid common phrases, keyboard patterns, and single words."
                })
              );
            case jo.Duplicate:
              return (0, G.jsx)(
                bo,
                null,
                (0, G.jsx)(M.Trans, { id: "Never use the same password on multiple sites. Cyber-criminals love reused passwords." })
              );
            case jo.Blank:
              return (0, G.jsx)(bo, null, (0, G.jsx)(M.Trans, { id: "You haven\u2019t saved a password for these sites." }));
            case jo.AllPasswords:
            default:
              return (0, G.jsx)(bo, null, (0, G.jsx)(M.Trans, { id: "How secure are the passwords in your vault? Find out here." }));
          }
        },
        Lo = ["title", "titleId"];
      function Eo() {
        return (
          (Eo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Eo.apply(this, arguments)
        );
      }
      function Zo(e, t) {
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
      function So(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Zo(e, Lo);
        return O.createElement(
          "svg",
          Eo(
            {
              width: 11,
              height: 16,
              viewBox: "0 0 11 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          wo ||
            (wo = O.createElement("path", {
              d: "M-2.86102e-06 8C-0.000272751 7.78194 0.0459709 7.56634 0.13564 7.36757C0.22531 7.1688 0.356345 6.99144 0.519998 6.84733L7.95466 0.306668C8.20103 0.0999409 8.5185 -0.00219224 8.83919 0.0221076C9.15988 0.0464074 9.45833 0.195211 9.67074 0.436701C9.88314 0.678191 9.99263 0.993198 9.9758 1.31437C9.95897 1.63553 9.81715 1.93737 9.58066 2.15533L3.07933 7.87467C3.06149 7.89031 3.04719 7.90958 3.03739 7.9312C3.02759 7.95281 3.02252 7.97627 3.02252 8C3.02252 8.02373 3.02759 8.04719 3.03739 8.0688C3.04719 8.09042 3.06149 8.10969 3.07933 8.12533L9.58066 13.8447C9.70638 13.9502 9.80974 14.0797 9.88467 14.2257C9.9596 14.3717 10.0046 14.5312 10.017 14.6949C10.0294 14.8585 10.009 15.023 9.95688 15.1786C9.9048 15.3343 9.82214 15.4779 9.71376 15.6011C9.60537 15.7244 9.47345 15.8247 9.32573 15.8962C9.17802 15.9677 9.01751 16.009 8.85362 16.0176C8.68973 16.0262 8.52578 16.0019 8.3714 15.9462C8.21703 15.8905 8.07534 15.8046 7.95466 15.6933L0.522664 9.15467C0.358607 9.01031 0.227152 8.83268 0.137035 8.6336C0.0469189 8.43451 0.00020504 8.21853 -2.86102e-06 8Z",
              fill: "#41536B"
            }))
        );
      }
      var Mo,
        Oo = O.forwardRef(So),
        To =
          (r.p,
          (0, S.Z)("div", { target: "eozcfn01" })(
            "position:absolute;top:100%;right:0;border:1px solid ",
            function (e) {
              return e.theme.colors.neutral100;
            },
            ";box-shadow:",
            function (e) {
              return e.theme.elevations.elevation300;
            },
            ";border-radius:",
            function (e) {
              return e.theme.radius.pixel8;
            },
            ";background:",
            function (e) {
              return e.theme.colors.neutral;
            },
            ";"
          )),
        Po = (0, S.Z)("div", { target: "eozcfn00" })(
          "background-color:",
          function (e) {
            return e.selected ? e.theme.colors.neutral200 : e.theme.colors.neutral;
          },
          ";cursor:pointer;white-space:nowrap;padding:16px;&:first-of-type{border-top-left-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";border-top-right-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";}&:last-of-type{border-bottom-left-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";border-bottom-right-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";}&:hover{background-color:",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";}"
        ),
        Bo = function (e) {
          var t = e.open,
            r = e.children;
          return t
            ? (0, G.jsx)(
                To,
                {
                  onMouseDown: function (e) {
                    e.preventDefault();
                  }
                },
                r
              )
            : null;
        },
        Ao = ["title", "titleId"];
      function Do() {
        return (
          (Do = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Do.apply(this, arguments)
        );
      }
      function Fo(e, t) {
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
      function Io(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Fo(e, Ao);
        return O.createElement(
          "svg",
          Do(
            { width: 10, height: 8, viewBox: "0 0 10 8", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: t, "aria-labelledby": n },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Mo ||
            (Mo = O.createElement("path", {
              d: "M5.0001 7.125C4.86382 7.12517 4.72906 7.09627 4.60483 7.04022C4.4806 6.98418 4.36975 6.90228 4.27969 6.8L0.191771 2.15333C0.0625661 1.99936 -0.00126715 1.80094 0.0139202 1.60051C0.0291076 1.40008 0.12211 1.21354 0.273041 1.08079C0.423972 0.948038 0.620852 0.879606 0.821582 0.890126C1.02231 0.900646 1.21096 0.989284 1.34719 1.13709L4.92177 5.20042C4.93155 5.21157 4.94359 5.22051 4.9571 5.22663C4.97061 5.23275 4.98527 5.23592 5.0001 5.23592C5.01494 5.23592 5.0296 5.23275 5.04311 5.22663C5.05661 5.22051 5.06866 5.21157 5.07844 5.20042L8.65302 1.13709C8.71895 1.05851 8.79992 0.993912 8.89118 0.947081C8.98243 0.900249 9.08213 0.872132 9.18441 0.864383C9.28668 0.856633 9.38948 0.869406 9.48675 0.901952C9.58402 0.934498 9.6738 0.98616 9.75082 1.0539C9.82784 1.12164 9.89053 1.2041 9.93523 1.29642C9.97992 1.38874 10.0057 1.48906 10.0111 1.59149C10.0165 1.69392 10.0013 1.79639 9.96649 1.89287C9.93169 1.98936 9.87795 2.07791 9.80844 2.15333L5.72177 6.79833C5.63154 6.90087 5.52053 6.98303 5.3961 7.03935C5.27167 7.09567 5.13668 7.12487 5.0001 7.125Z",
              fill: "#3B70D4"
            }))
        );
      }
      var Ro = O.forwardRef(Io),
        Vo = (r.p, ["reportFilterType", "numPasswords"]);
      var Wo = (0, S.Z)(Ro, { target: "en90bvm1" })({ name: "1q4vxyr", styles: "margin-left:8px" }),
        Ho = (0, S.Z)("button", { target: "en90bvm0" })(
          "border:none;outline:none;font-size:inherit;background-color:transparent;color:",
          function (e) {
            return e.theme.colors.blue700;
          },
          ";text-decoration:none;cursor:pointer;padding:4px 0;&:focus{text-decoration:underline;}&:hover{text-decoration:underline;}"
        ),
        Uo = function (e) {
          var t = e.reportFilterType,
            r = e.numPasswords,
            n = (0, D.Z)(e, Vo);
          switch (t) {
            case jo.AllAtRiskPasswords:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>all at-risk passwords ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.AllPasswords:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>all passwords ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.Duplicate:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>reused ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.Blank:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>missing ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.Weak:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>weak ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.Excluded:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>Excluded ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.Breached:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>Breached ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.NotMonitored:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>Not monitored ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
            case jo.Secure:
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "Filter by <0>Secure ({numPasswords})</0>",
                  values: { numPasswords: r },
                  components: [(0, G.jsx)(Ho, n)]
                }),
                (0, G.jsx)(Wo, null)
              );
          }
        },
        zo = function (e) {
          var t = e.type,
            r = e.count;
          switch (t) {
            case jo.AllAtRiskPasswords:
              return (0, G.jsx)(M.Trans, { id: "All at-risk passwords ({numPasswords})", values: { numPasswords: r } });
            case jo.AllPasswords:
              return (0, G.jsx)(M.Trans, { id: "All passwords ({numPasswords})", values: { numPasswords: r } });
            case jo.Duplicate:
              return (0, G.jsx)(M.Trans, { id: "Reused ({numPasswords})", values: { numPasswords: r } });
            case jo.Blank:
              return (0, G.jsx)(M.Trans, { id: "Missing ({numPasswords})", values: { numPasswords: r } });
            case jo.Weak:
              return (0, G.jsx)(M.Trans, { id: "Weak ({numPasswords})", values: { numPasswords: r } });
            case jo.Excluded:
              return (0, G.jsx)(M.Trans, { id: "Excluded ({numPasswords})", values: { numPasswords: r } });
            case jo.Breached:
              return (0, G.jsx)(M.Trans, { id: "Breached ({numPasswords})", values: { numPasswords: r } });
            case jo.NotMonitored:
              return (0, G.jsx)(M.Trans, { id: "Not monitored ({numPasswords})", values: { numPasswords: r } });
            case jo.Secure:
              return (0, G.jsx)(M.Trans, { id: "Secure ({numPasswords})", values: { numPasswords: r } });
          }
        },
        No = function () {
          return !0;
        },
        qo = function (e) {
          return e !== jo.Excluded;
        },
        Go = function (e) {
          var t = e.reportFilterType,
            r = e.resultCounts,
            n = e.isExcludedPasswordsEnabled,
            o = (0, ce.B)(),
            i = (0, O.useState)(!1),
            a = (0, E.Z)(i, 2),
            s = a[0],
            l = a[1];
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(Uo, {
              reportFilterType: t,
              numPasswords: r[t],
              onClick: function () {
                l(!s);
              },
              onBlur: function () {
                l(!1);
              }
            }),
            (0, G.jsx)(
              Bo,
              { open: s },
              Object.values(jo)
                .filter(function (e) {
                  return "number" === typeof e;
                })
                .filter(n ? No : qo)
                .filter(function (e) {
                  return ![jo.Breached, jo.NotMonitored, jo.Secure].includes(e);
                })
                .map(function (e) {
                  return (0, G.jsx)(
                    Po,
                    {
                      key: e,
                      selected: t === e,
                      onClick: function () {
                        o.setPasswordSecurityFilterType(e), l(!1);
                      }
                    },
                    (0, G.jsx)(zo, { type: e, count: r[e] })
                  );
                })
            )
          );
        };
      var _o,
        Yo,
        Xo = (0, S.Z)("div", { target: "e1ril3gs5" })({
          name: "1pw6ndo",
          styles: "align-items:center;display:flex;flex-direction:row;justify-content:flex-start;margin:0 0 24px;position:relative"
        }),
        Ko = (0, S.Z)("span", { target: "e1ril3gs4" })(le.q1, " font-size:24px;letter-spacing:0.24px;line-height:1.33;"),
        Jo = (0, S.Z)("button", { target: "e1ril3gs3" })({
          name: "19gzbcl",
          styles: "appearance:none;background:transparent;border:none;cursor:pointer;margin:0 24px 0 0;outline:none;padding:0"
        }),
        Qo = (0, S.Z)("div", { target: "e1ril3gs2" })({ name: "h7wffb", styles: "position:absolute;right:0px;top:24px;z-index:2000" }),
        $o = (0, S.Z)("div", { target: "e1ril3gs1" })({ name: "1u8skbo", styles: "margin:4px 0" }),
        ei = (0, S.Z)("a", { target: "e1ril3gs0" })(
          "color:",
          function (e) {
            return e.theme.colors.blue700;
          },
          ";"
        ),
        ti = function (e) {
          var t = e.mainPageLink,
            r = e.reportFilterType,
            n = e.resultCounts,
            o = e.isExcludedPasswordsEnabled,
            i = (0, ce.B)();
          return (0, G.jsx)(
            "div",
            null,
            (0, G.jsx)(
              Xo,
              null,
              (0, G.jsx)(
                t,
                null,
                (0, G.jsx)(Jo, { type: "button" }, (0, G.jsx)(Oo, null)),
                (0, G.jsx)(Ko, { "data-automation-id": "security-report-page-title" }, (0, G.jsx)(M.Trans, { id: "Password security" }))
              ),
              (0, G.jsx)(Qo, null, (0, G.jsx)(Go, { reportFilterType: r, resultCounts: n, isExcludedPasswordsEnabled: o }))
            ),
            (0, G.jsx)($o, null, (0, G.jsx)(ko, { filterType: r })),
            (0, G.jsx)(
              nt.Fy,
              null,
              (0, G.jsx)(M.Trans, {
                id: "<0>Tip:</0> Use the <1>LastPass password generator</1> to create strong, unique passwords.",
                components: [
                  (0, G.jsx)(nt.sM, null),
                  (0, G.jsx)(ei, {
                    onClick: function () {
                      i.openPasswordGenerator();
                    },
                    href: "#"
                  })
                ]
              })
            )
          );
        },
        ri = ["title", "titleId"];
      function ni() {
        return (
          (ni = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ni.apply(this, arguments)
        );
      }
      function oi(e, t) {
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
      function ii(e, t) {
        var r = e.title,
          n = e.titleId,
          o = oi(e, ri);
        return O.createElement(
          "svg",
          ni(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          _o ||
            (_o = O.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              O.createElement("path", {
                d: "M12 19.5C11.6729 19.5004 11.3495 19.431 11.0514 19.2965C10.7532 19.162 10.4872 18.9655 10.271 18.72L0.460017 7.56799C0.149927 7.19844 -0.00327309 6.72224 0.0331766 6.2412C0.0696263 5.76017 0.292832 5.31248 0.655067 4.99388C1.0173 4.67528 1.48981 4.51104 1.97156 4.53629C2.45332 4.56154 2.90607 4.77427 3.23302 5.12899L11.812 14.881C11.8355 14.9078 11.8644 14.9292 11.8968 14.9439C11.9292 14.9586 11.9644 14.9662 12 14.9662C12.0356 14.9662 12.0708 14.9586 12.1032 14.9439C12.1356 14.9292 12.1646 14.9078 12.188 14.881L20.767 5.12899C20.9253 4.94041 21.1196 4.78537 21.3386 4.67298C21.5576 4.56058 21.7969 4.4931 22.0423 4.4745C22.2878 4.4559 22.5345 4.48656 22.768 4.56467C23.0014 4.64278 23.2169 4.76677 23.4017 4.92935C23.5866 5.09193 23.737 5.28982 23.8443 5.51138C23.9516 5.73295 24.0135 5.97373 24.0264 6.21956C24.0392 6.46539 24.0029 6.71131 23.9193 6.94288C23.8358 7.17444 23.7069 7.38698 23.54 7.56799L13.732 18.716C13.5155 18.9621 13.249 19.1593 12.9504 19.2944C12.6518 19.4296 12.3278 19.4997 12 19.5Z",
                fill: "#41536B"
              })
            )),
          Yo ||
            (Yo = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0" }, O.createElement("path", { d: "M0 0L24 0V24H0L0 0Z", fill: "white" }))
            ))
        );
      }
      var ai,
        si,
        li = O.forwardRef(ii),
        ci = r.p + "static/media/icon-chevron-down.4d7b37a82bd1f9c41305487afc7d71bd.svg",
        ui = ["title", "titleId"];
      function di() {
        return (
          (di = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          di.apply(this, arguments)
        );
      }
      function pi(e, t) {
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
      function fi(e, t) {
        var r = e.title,
          n = e.titleId,
          o = pi(e, ui);
        return O.createElement(
          "svg",
          di(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          ai ||
            (ai = O.createElement(
              "g",
              { clipPath: "url(#clip0)" },
              O.createElement(
                "g",
                { clipPath: "url(#clip1)" },
                O.createElement("path", {
                  d: "M12 4.50001C12.3271 4.49961 12.6505 4.56897 12.9486 4.70347C13.2468 4.83798 13.5128 5.03453 13.729 5.28001L23.54 16.432C23.8501 16.8016 24.0033 17.2778 23.9668 17.7588C23.9304 18.2398 23.7072 18.6875 23.3449 19.0061C22.9827 19.3247 22.5102 19.489 22.0284 19.4637C21.5467 19.4385 21.0939 19.2257 20.767 18.871L12.188 9.11901C12.1645 9.09224 12.1356 9.07079 12.1032 9.0561C12.0708 9.0414 12.0356 9.0338 12 9.0338C11.9644 9.0338 11.9292 9.0414 11.8968 9.0561C11.8644 9.07079 11.8354 9.09224 11.812 9.11901L3.23298 18.871C3.07475 19.0596 2.88041 19.2146 2.6614 19.327C2.44239 19.4394 2.20312 19.5069 1.95766 19.5255C1.71219 19.5441 1.46549 19.5134 1.23204 19.4353C0.998594 19.3572 0.783115 19.2332 0.598272 19.0707C0.413429 18.9081 0.262953 18.7102 0.155684 18.4886C0.0484142 18.2671 -0.0134811 18.0263 -0.0263653 17.7804C-0.0392494 17.5346 -0.00286102 17.2887 0.0806599 17.0571C0.164181 16.8256 0.293146 16.613 0.459982 16.432L10.268 5.28401C10.4845 5.03792 10.751 4.84074 11.0496 4.70557C11.3482 4.57039 11.6722 4.50032 12 4.50001Z",
                  fill: "#41536B"
                })
              )
            )),
          si ||
            (si = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0" }, O.createElement("path", { d: "M0 0L24 0V24H0L0 0Z", fill: "white" })),
              O.createElement("clipPath", { id: "clip1" }, O.createElement("path", { d: "M24 24L0 24L0 0L24 0L24 24Z", fill: "white" }))
            ))
        );
      }
      var mi = O.forwardRef(fi),
        hi = r.p + "static/media/icon-chevron-up.a68a2bb8eead0382dbd5fd5479f7485c.svg",
        Ci = ["columnWidth", "columnType", "sortingState", "sortingEnabled", "automationId"];
      var xi,
        gi,
        wi,
        yi = (0, S.Z)("div", { target: "eitnzve3" })(
          "flex:0 1 ",
          function (e) {
            return e.width ? "".concat(e.width, "%") : "auto";
          },
          ";cursor:",
          function (e) {
            return e.pointer ? "pointer" : "default";
          },
          ";justify-content:flex-start;align-items:center;flex-direction:row;display:flex;min-width:0;"
        ),
        vi = (0, S.Z)("span", { target: "eitnzve2" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral600;
          },
          ";",
          le.q1,
          " line-height:1.33;font-size:12px;"
        ),
        ji = { name: "l41nzy", styles: "height:8px" },
        bi = (0, S.Z)(mi, { target: "eitnzve1" })(ji, ";"),
        ki = (0, S.Z)(li, { target: "eitnzve0" })(ji, ";"),
        Li = (function (e) {
          return (
            (e[(e.Small = 10)] = "Small"), (e[(e.Medium = 20)] = "Medium"), (e[(e.Big = 25)] = "Big"), (e[(e.Large = 33)] = "Large"), e
          );
        })({}),
        Ei = function (e) {
          var t = e.columnWidth,
            r = e.columnType,
            n = e.sortingState,
            o = e.sortingEnabled,
            i = void 0 === o || o,
            a = e.automationId,
            s = (0, D.Z)(e, Ci),
            l = (0, ce.B)(),
            c = (0, O.useState)(!0),
            u = (0, E.Z)(c, 2),
            d = u[0],
            p = u[1],
            f = (0, O.useState)(!1),
            m = (0, E.Z)(f, 2),
            h = m[0],
            C = m[1];
          return (
            (0, O.useEffect)(
              function () {
                C(!!n && n.column === r);
              },
              [n, r]
            ),
            (0, G.jsx)(
              yi,
              {
                width: t,
                pointer: i,
                onClick: function () {
                  i && (p(!d), l.setReportSortingState({ column: r, reverse: d }));
                }
              },
              (0, G.jsx)(vi, { "data-automation-id": a }, s.children),
              h ? (d ? (0, G.jsx)(ki, null) : (0, G.jsx)(bi, null)) : null
            )
          );
        },
        Zi = (function (e) {
          return (
            (e[(e.Website = 0)] = "Website"),
            (e[(e.Username = 1)] = "Username"),
            (e[(e.Score = 2)] = "Score"),
            (e[(e.Risk = 3)] = "Risk"),
            (e[(e.Action = 4)] = "Action"),
            e
          );
        })({}),
        Si = (0, S.Z)("div", { target: "e13crjmz0" })(
          "border-bottom:1px solid ",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";justify-content:space-between;box-sizing:border-box;align-items:center;flex-direction:row;padding:10px 16px;min-height:35px;display:flex;"
        ),
        Mi = function (e) {
          var t = e.reportSortingState;
          return (0, G.jsx)(
            Si,
            { "data-automation-id": "password-security-report-header" },
            (0, G.jsx)(
              Ei,
              { columnWidth: Li.Medium, sortingState: t, columnType: Zi.Website, automationId: "password-security-report-website" },
              (0, G.jsx)(M.Trans, { id: "Website" })
            ),
            (0, G.jsx)(
              Ei,
              { columnWidth: Li.Medium, sortingState: t, columnType: Zi.Username, automationId: "password-security-report-username" },
              (0, G.jsx)(M.Trans, { id: "Username" })
            ),
            (0, G.jsx)(
              Ei,
              { columnWidth: Li.Medium, sortingState: t, columnType: Zi.Score, automationId: "password-security-report-password-strength" },
              (0, G.jsx)(M.Trans, { id: "Password strength" })
            ),
            (0, G.jsx)(
              Ei,
              { columnWidth: Li.Medium, sortingState: t, columnType: Zi.Risk, automationId: "password-security-report-risks" },
              (0, G.jsx)(M.Trans, { id: "Risks" })
            ),
            (0, G.jsx)(
              Ei,
              {
                columnWidth: Li.Medium,
                columnType: Zi.Action,
                sortingEnabled: !1,
                automationId: "password-security-report-actions-to-take"
              },
              (0, G.jsx)(M.Trans, { id: "Actions to take" })
            )
          );
        },
        Oi = r(45354),
        Ti = r(47333),
        Pi = r(67111),
        Bi = r(11358),
        Ai = ["title", "titleId"];
      function Di() {
        return (
          (Di = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Di.apply(this, arguments)
        );
      }
      function Fi(e, t) {
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
      function Ii(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Fi(e, Ai);
        return O.createElement(
          "svg",
          Di(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          xi ||
            (xi = O.createElement("path", {
              d: "M3.25 15.25C5.04493 15.25 6.5 13.7949 6.5 12C6.5 10.2051 5.04493 8.75 3.25 8.75C1.45507 8.75 0 10.2051 0 12C0 13.7949 1.45507 15.25 3.25 15.25Z",
              fill: "#40526D"
            })),
          gi ||
            (gi = O.createElement("path", {
              d: "M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z",
              fill: "#40526D"
            })),
          wi ||
            (wi = O.createElement("path", {
              d: "M20.75 15.25C22.5449 15.25 24 13.7949 24 12C24 10.2051 22.5449 8.75 20.75 8.75C18.9551 8.75 17.5 10.2051 17.5 12C17.5 13.7949 18.9551 15.25 20.75 15.25Z",
              fill: "#40526D"
            }))
        );
      }
      var Ri,
        Vi,
        Wi = O.forwardRef(Ii),
        Hi = (r.p, ["title", "titleId"]);
      function Ui() {
        return (
          (Ui = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ui.apply(this, arguments)
        );
      }
      function zi(e, t) {
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
      function Ni(e, t) {
        var r = e.title,
          n = e.titleId,
          o = zi(e, Hi);
        return O.createElement(
          "svg",
          Ui(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Ri ||
            (Ri = O.createElement(
              "g",
              { clipPath: "url(#clip0_2487_134686)" },
              O.createElement("path", {
                d: "M1.76622 10.9332C1.72397 10.8911 1.6712 10.8611 1.6134 10.8463C1.5556 10.8315 1.4949 10.8326 1.43763 10.8492C1.38035 10.8659 1.3286 10.8977 1.28778 10.9412C1.24696 10.9847 1.21856 11.0383 1.20555 11.0966L0.262884 15.3399C0.250676 15.3946 0.252462 15.4515 0.268077 15.5053C0.283692 15.5592 0.312631 15.6082 0.352217 15.6479C0.392147 15.6871 0.441167 15.7159 0.494907 15.7316C0.548647 15.7473 0.605438 15.7495 0.660217 15.7379L4.90288 14.7952C4.96124 14.7823 5.01503 14.7539 5.05865 14.713C5.10226 14.6722 5.13408 14.6203 5.15078 14.5629C5.16748 14.5055 5.16844 14.4447 5.15356 14.3868C5.13868 14.3289 5.10852 14.2761 5.06622 14.2339L1.76622 10.9332Z",
                fill: "#40526D"
              }),
              O.createElement("path", {
                d: "M11.901 4.80623L4.59432 12.1129C4.56329 12.1443 4.5459 12.1867 4.5459 12.2309C4.5459 12.2751 4.56329 12.3175 4.59432 12.3489L5.77298 13.5276C5.83608 13.5889 5.92063 13.6233 6.00865 13.6233C6.09667 13.6233 6.18122 13.5889 6.24432 13.5276L13.3156 6.45623C13.3781 6.39372 13.4132 6.30895 13.4132 6.22056C13.4132 6.13217 13.3781 6.04741 13.3156 5.9849L12.137 4.80623C12.1055 4.77521 12.0632 4.75781 12.019 4.75781C11.9748 4.75781 11.9324 4.77521 11.901 4.80623Z",
                fill: "#40526D"
              }),
              O.createElement("path", {
                d: "M11.1949 3.86349L10.0162 2.68549C9.95373 2.623 9.86896 2.58789 9.78057 2.58789C9.69218 2.58789 9.60741 2.623 9.54491 2.68549L2.47357 9.75615C2.41108 9.81866 2.37598 9.90343 2.37598 9.99182C2.37598 10.0802 2.41108 10.165 2.47357 10.2275L3.65224 11.4062C3.68368 11.4372 3.72607 11.4546 3.77024 11.4546C3.81441 11.4546 3.8568 11.4372 3.88824 11.4062L11.1949 4.09949C11.2259 4.06805 11.2433 4.02565 11.2433 3.98149C11.2433 3.93732 11.2259 3.89493 11.1949 3.86349Z",
                fill: "#40526D"
              }),
              O.createElement("path", {
                d: "M14.9659 1.03396C14.4654 0.534443 13.7871 0.253906 13.0799 0.253906C12.3728 0.253906 11.6945 0.534443 11.1939 1.03396L10.7226 1.50529C10.6601 1.5678 10.625 1.65257 10.625 1.74096C10.625 1.82935 10.6601 1.91412 10.7226 1.97662L14.0226 5.27596C14.0862 5.33641 14.1705 5.37012 14.2583 5.37012C14.346 5.37012 14.4304 5.33641 14.4939 5.27596L14.9659 4.80462C15.4659 4.30455 15.7467 3.6264 15.7467 2.91929C15.7467 2.21219 15.4659 1.53403 14.9659 1.03396Z",
                fill: "#40526D"
              })
            )),
          Vi ||
            (Vi = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0_2487_134686" }, O.createElement("rect", { width: 16, height: 16, fill: "white" }))
            ))
        );
      }
      var qi,
        Gi,
        _i = O.forwardRef(Ni),
        Yi = (r.p, ["title", "titleId"]);
      function Xi() {
        return (
          (Xi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Xi.apply(this, arguments)
        );
      }
      function Ki(e, t) {
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
      function Ji(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Ki(e, Yi);
        return O.createElement(
          "svg",
          Xi(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          qi ||
            (qi = O.createElement(
              "g",
              { clipPath: "url(#clip0_577_18099)" },
              O.createElement("path", {
                d: "M0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H6.83333C6.87754 9 6.91993 9.01756 6.95118 9.04882C6.98244 9.08007 7 9.12246 7 9.16667V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9.16667C9 9.12246 9.01756 9.08007 9.04882 9.04882C9.08007 9.01756 9.12246 9 9.16667 9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7H9.16667C9.12246 7 9.08007 6.98244 9.04882 6.95118C9.01756 6.91993 9 6.87754 9 6.83333V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V6.83333C7 6.87754 6.98244 6.91993 6.95118 6.95118C6.91993 6.98244 6.87754 7 6.83333 7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8Z",
                fill: "#40526D"
              })
            )),
          Gi ||
            (Gi = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0_577_18099" }, O.createElement("rect", { width: 16, height: 16, fill: "white" }))
            ))
        );
      }
      var Qi,
        $i,
        ea = O.forwardRef(Ji),
        ta = (r.p, ["title", "titleId"]);
      function ra() {
        return (
          (ra = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ra.apply(this, arguments)
        );
      }
      function na(e, t) {
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
      function oa(e, t) {
        var r = e.title,
          n = e.titleId,
          o = na(e, ta);
        return O.createElement(
          "svg",
          ra(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Qi ||
            (Qi = O.createElement(
              "g",
              { clipPath: "url(#clip0_577_18827)" },
              O.createElement("path", {
                d: "M13.6567 2.35601C12.1556 0.855767 10.1199 0.0132912 7.99766 0.0139164C5.87537 0.0145415 3.84026 0.858216 2.34002 2.35934C0.839776 3.86047 -0.00269995 5.89608 -0.00207485 8.01837C-0.00144974 10.1407 0.842225 12.1758 2.34335 13.676C3.82211 15.1232 5.79913 15.9488 7.86791 15.9832C9.9367 16.0175 11.94 15.258 13.466 13.8607C14.1348 13.2352 14.6919 12.5002 15.1133 11.6873C15.5162 10.9053 15.7865 10.0618 15.9134 9.19134C15.9705 8.80217 15.9995 8.40936 16 8.01601C16.0029 6.96452 15.7973 5.9229 15.395 4.95139C14.9928 3.97987 14.402 3.09774 13.6567 2.35601ZM3.52802 3.52801C4.59514 2.48299 5.99346 1.84306 7.48185 1.71856C8.97025 1.59407 10.4554 1.9928 11.6813 2.84601C11.7019 2.86099 11.7189 2.88024 11.7313 2.90243C11.7437 2.92463 11.7511 2.94924 11.7531 2.97458C11.755 2.99992 11.7515 3.02539 11.7427 3.04922C11.7339 3.07306 11.72 3.09471 11.702 3.11267L3.11135 11.7073C3.09333 11.7252 3.07167 11.739 3.04785 11.7477C3.02402 11.7565 2.99859 11.76 2.97329 11.7581C2.94798 11.7561 2.9234 11.7487 2.9012 11.7364C2.87901 11.7241 2.85973 11.7071 2.84468 11.6867C1.97454 10.4659 1.56567 8.97601 1.69079 7.48208C1.81592 5.98815 2.46693 4.58705 3.52802 3.52801ZM12.4994 12.504C11.4392 13.5615 10.0392 14.2101 8.54696 14.3349C7.05474 14.4597 5.56645 14.0527 4.34535 13.186C4.32477 13.1711 4.30767 13.1519 4.29523 13.1297C4.28279 13.1075 4.27529 13.0829 4.27327 13.0576C4.27124 13.0322 4.27473 13.0068 4.28349 12.9829C4.29225 12.959 4.30608 12.9374 4.32402 12.9193L12.9153 4.32401C12.9334 4.30613 12.955 4.29235 12.9789 4.2836C13.0027 4.27485 13.0281 4.27134 13.0534 4.2733C13.0787 4.27526 13.1033 4.28265 13.1255 4.29497C13.1477 4.30728 13.167 4.32424 13.182 4.34468C14.0525 5.56537 14.4617 7.0553 14.3368 8.54937C14.2119 10.0434 13.5611 11.4448 12.5 12.504H12.4994Z",
                fill: "#40526D"
              })
            )),
          $i ||
            ($i = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0_577_18827" }, O.createElement("rect", { width: 16, height: 16, fill: "white" }))
            ))
        );
      }
      var ia,
        aa,
        sa = O.forwardRef(oa),
        la = (r.p, ["title", "titleId"]);
      function ca() {
        return (
          (ca = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ca.apply(this, arguments)
        );
      }
      function ua(e, t) {
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
      function da(e, t) {
        var r = e.title,
          n = e.titleId,
          o = ua(e, la);
        return O.createElement(
          "svg",
          ca(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          ia ||
            (ia = O.createElement(
              "g",
              { clipPath: "url(#clip0_577_18843)" },
              O.createElement("path", {
                d: "M12.968 5H3.03134C2.98492 4.99981 2.93898 5.00932 2.89645 5.02792C2.85392 5.04651 2.81574 5.07379 2.78436 5.10799C2.75298 5.14219 2.72909 5.18257 2.71422 5.22654C2.69935 5.27052 2.69383 5.31711 2.69801 5.36334L3.55601 14.7873C3.58612 15.1187 3.73906 15.4269 3.98479 15.6513C4.23051 15.8756 4.55125 16 4.88401 16H11.1153C11.4481 16 11.7688 15.8756 12.0146 15.6513C12.2603 15.4269 12.4132 15.1187 12.4433 14.7873L13.3 5.36334C13.3041 5.31724 13.2986 5.2708 13.2838 5.22695C13.269 5.1831 13.2452 5.14282 13.214 5.10867C13.1828 5.07446 13.1448 5.04714 13.1025 5.02843C13.0601 5.00972 13.0143 5.00004 12.968 5ZM6.83468 13.6667C6.83468 13.7993 6.782 13.9265 6.68823 14.0202C6.59446 14.114 6.46728 14.1667 6.33468 14.1667C6.20207 14.1667 6.07489 14.114 5.98112 14.0202C5.88735 13.9265 5.83468 13.7993 5.83468 13.6667V7.66667C5.83468 7.53406 5.88735 7.40688 5.98112 7.31312C6.07489 7.21935 6.20207 7.16667 6.33468 7.16667C6.46728 7.16667 6.59446 7.21935 6.68823 7.31312C6.782 7.40688 6.83468 7.53406 6.83468 7.66667V13.6667ZM10.168 13.6667C10.168 13.7993 10.1153 13.9265 10.0216 14.0202C9.92779 14.114 9.80062 14.1667 9.66801 14.1667C9.5354 14.1667 9.40822 14.114 9.31446 14.0202C9.22069 13.9265 9.16801 13.7993 9.16801 13.6667V7.66667C9.16801 7.53406 9.22069 7.40688 9.31446 7.31312C9.40822 7.21935 9.5354 7.16667 9.66801 7.16667C9.80062 7.16667 9.92779 7.21935 10.0216 7.31312C10.1153 7.40688 10.168 7.53406 10.168 7.66667V13.6667Z",
                fill: "#D32D27"
              }),
              O.createElement("path", {
                d: "M14.6667 2.66667H11.5C11.4558 2.66667 11.4134 2.64911 11.3822 2.61785C11.3509 2.5866 11.3334 2.5442 11.3334 2.5V1.66667C11.3334 1.22464 11.1578 0.800716 10.8452 0.488155C10.5326 0.175595 10.1087 0 9.66669 0L6.33335 0C5.89133 0 5.4674 0.175595 5.15484 0.488155C4.84228 0.800716 4.66669 1.22464 4.66669 1.66667V2.5C4.66669 2.5442 4.64913 2.5866 4.61787 2.61785C4.58662 2.64911 4.54422 2.66667 4.50002 2.66667H1.33335C1.15654 2.66667 0.986973 2.7369 0.861949 2.86193C0.736925 2.98695 0.666687 3.15652 0.666687 3.33333C0.666687 3.51014 0.736925 3.67971 0.861949 3.80474C0.986973 3.92976 1.15654 4 1.33335 4H14.6667C14.8435 4 15.0131 3.92976 15.1381 3.80474C15.2631 3.67971 15.3334 3.51014 15.3334 3.33333C15.3334 3.15652 15.2631 2.98695 15.1381 2.86193C15.0131 2.7369 14.8435 2.66667 14.6667 2.66667ZM6.00002 2.5V1.66667C6.00002 1.57826 6.03514 1.49348 6.09765 1.43096C6.16016 1.36845 6.24495 1.33333 6.33335 1.33333H9.66669C9.75509 1.33333 9.83988 1.36845 9.90239 1.43096C9.9649 1.49348 10 1.57826 10 1.66667V2.5C10 2.5442 9.98246 2.5866 9.9512 2.61785C9.91995 2.64911 9.87756 2.66667 9.83335 2.66667H6.16669C6.12248 2.66667 6.08009 2.64911 6.04884 2.61785C6.01758 2.5866 6.00002 2.5442 6.00002 2.5Z",
                fill: "#D32D27"
              })
            )),
          aa ||
            (aa = O.createElement(
              "defs",
              null,
              O.createElement("clipPath", { id: "clip0_577_18843" }, O.createElement("rect", { width: 16, height: 16, fill: "white" }))
            ))
        );
      }
      var pa,
        fa = O.forwardRef(da),
        ma = (r.p, ["title", "titleId"]);
      function ha() {
        return (
          (ha = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ha.apply(this, arguments)
        );
      }
      function Ca(e, t) {
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
      function xa(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Ca(e, ma);
        return O.createElement(
          "svg",
          ha(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          pa ||
            (pa = O.createElement("path", {
              d: "M7.00016 13.6663C8.3187 13.6663 9.60763 13.2753 10.704 12.5428C11.8003 11.8103 12.6548 10.7691 13.1594 9.5509C13.6639 8.33272 13.796 6.99228 13.5387 5.69907C13.2815 4.40587 12.6466 3.21798 11.7142 2.28563C10.7819 1.35328 9.59397 0.718344 8.30076 0.461109C7.00756 0.203874 5.66711 0.335896 4.44894 0.84048C3.23077 1.34506 2.18957 2.19955 1.45703 3.29587C0.724489 4.3922 0.333496 5.68113 0.333496 6.99968C0.335408 8.7672 1.0384 10.4618 2.28823 11.7116C3.53806 12.9614 5.23264 13.6644 7.00016 13.6663ZM4.36905 9.52245V5.07801C4.36905 4.857 4.45685 4.64503 4.61313 4.48875C4.76941 4.33247 4.98137 4.24468 5.20238 4.24468H5.46461C5.68562 4.24468 5.89758 4.33247 6.05386 4.48875C6.21014 4.64503 6.29794 4.857 6.29794 5.07801V9.52245C6.29794 9.74347 6.21014 9.95543 6.05386 10.1117C5.89758 10.268 5.68562 10.3558 5.46461 10.3558H5.20238C4.98137 10.3558 4.76941 10.268 4.61313 10.1117C4.45685 9.95543 4.36905 9.74347 4.36905 9.52245ZM7.67127 5.07801C7.67127 4.857 7.75907 4.64503 7.91535 4.48875C8.07163 4.33247 8.28359 4.24468 8.50461 4.24468H8.79794C9.01895 4.24468 9.23091 4.33247 9.38719 4.48875C9.54347 4.64503 9.63127 4.857 9.63127 5.07801V9.52245C9.63127 9.74347 9.54347 9.95543 9.38719 10.1117C9.23091 10.268 9.01895 10.3558 8.79794 10.3558H8.50461C8.28359 10.3558 8.07163 10.268 7.91535 10.1117C7.75907 9.95543 7.67127 9.74347 7.67127 9.52245V5.07801Z",
              fill: "#40526D"
            }))
        );
      }
      var ga,
        wa = O.forwardRef(xa),
        ya = (r.p, ["title", "titleId"]);
      function va() {
        return (
          (va = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          va.apply(this, arguments)
        );
      }
      function ja(e, t) {
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
      function ba(e, t) {
        var r = e.title,
          n = e.titleId,
          o = ja(e, ya);
        return O.createElement(
          "svg",
          va(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          ga ||
            (ga = O.createElement("path", {
              d: "M15.6049 10.4565L15.0269 10.2172C14.5249 8.78139 14.5249 7.21771 15.0269 5.78188L15.6049 5.54255C15.6826 5.51037 15.7531 5.46322 15.8125 5.40378C15.872 5.34434 15.9191 5.27377 15.9513 5.19611C15.9834 5.11845 16 5.03521 16 4.95116C16 4.8671 15.9834 4.78387 15.9512 4.70621C15.9191 4.62856 15.8719 4.558 15.8125 4.49857C15.753 4.43914 15.6825 4.392 15.6048 4.35984C15.5271 4.32768 15.4439 4.31113 15.3598 4.31114C15.2758 4.31114 15.1926 4.32771 15.1149 4.35988L14.5376 4.59921C13.1677 3.93955 12.062 2.835 11.4009 1.46588L11.6402 0.887881C11.7056 0.73105 11.7059 0.554689 11.6412 0.397596C11.5765 0.240503 11.4521 0.115546 11.2952 0.0502143C11.1384 -0.0151173 10.962 -0.0154722 10.8049 0.0492279C10.6479 0.113928 10.5229 0.238383 10.4576 0.395214L10.2182 0.973214C8.7824 1.47523 7.21873 1.47523 5.7829 0.973214L5.5429 0.395214C5.51229 0.315393 5.466 0.242514 5.40676 0.180879C5.34752 0.119243 5.27653 0.0701012 5.19798 0.0363534C5.11943 0.00260558 5.03492 -0.0150639 4.94944 -0.0156119C4.86395 -0.0161598 4.77922 0.00042472 4.70025 0.0331628C4.62127 0.0659008 4.54966 0.114129 4.48963 0.175C4.42961 0.235871 4.38239 0.30815 4.35075 0.387572C4.31912 0.466994 4.30372 0.551949 4.30547 0.63742C4.30721 0.722892 4.32606 0.807148 4.3609 0.885214L4.60023 1.46321C3.93996 2.83179 2.83547 3.93627 1.4669 4.59655L0.885566 4.35988C0.807912 4.32771 0.72468 4.31114 0.640624 4.31114C0.556567 4.31113 0.473333 4.32768 0.395672 4.35984C0.318011 4.392 0.247445 4.43914 0.188003 4.49857C0.128561 4.558 0.081407 4.62856 0.0492332 4.70621C0.0170593 4.78387 0.000495771 4.8671 0.000488284 4.95116C0.000480797 5.03521 0.0170295 5.11845 0.0491895 5.19611C0.0813496 5.27377 0.128491 5.34434 0.187923 5.40378C0.247354 5.46322 0.317912 5.51037 0.395567 5.54255L0.974233 5.78188C1.47556 7.21783 1.47556 8.78127 0.974233 10.2172L0.395567 10.4565C0.238735 10.5215 0.11414 10.6461 0.0491895 10.803C-0.0157606 10.9598 -0.0157449 11.1361 0.0492332 11.2929C0.114211 11.4497 0.238829 11.5743 0.395672 11.6393C0.552515 11.7042 0.728735 11.7042 0.885566 11.6392L1.46357 11.3999C2.83317 12.0599 3.93881 13.1643 4.60023 14.5332L4.3609 15.1112C4.32865 15.1889 4.31203 15.2721 4.31196 15.3562C4.3119 15.4403 4.32841 15.5235 4.36054 15.6012C4.39267 15.6789 4.4398 15.7495 4.49923 15.809C4.55866 15.8685 4.62923 15.9157 4.7069 15.9479C4.7843 15.9809 4.86741 15.9986 4.95157 15.9999C5.0782 16 5.20201 15.9624 5.30729 15.892C5.41257 15.8217 5.49457 15.7216 5.5429 15.6045L5.78223 15.0265C7.21829 14.5245 8.78218 14.5245 10.2182 15.0265L10.4576 15.6045C10.506 15.7215 10.588 15.8216 10.6933 15.8919C10.7985 15.9623 10.9223 15.9999 11.0489 15.9999C11.1331 15.9997 11.2164 15.9831 11.2942 15.9512C11.451 15.886 11.5755 15.7613 11.6403 15.6045C11.7052 15.4476 11.7052 15.2714 11.6402 15.1145L11.4009 14.5365C12.0619 13.1674 13.1677 12.0628 14.5376 11.4032L15.1149 11.6425C15.1926 11.6747 15.2758 11.6913 15.3598 11.6913C15.4439 11.6913 15.5271 11.6748 15.6048 11.6426C15.6825 11.6104 15.753 11.5633 15.8125 11.5039C15.8719 11.4444 15.9191 11.3739 15.9512 11.2962C15.9834 11.2186 16 11.1353 16 11.0513C16 10.9672 15.9834 10.884 15.9513 10.8063C15.9191 10.7287 15.872 10.6581 15.8125 10.5987C15.7531 10.5392 15.6826 10.4921 15.6049 10.4599V10.4565ZM13.8889 9.74588L12.7869 9.28922C12.5251 8.44937 12.5251 7.54973 12.7869 6.70988L13.8889 6.25321C13.6202 7.40193 13.6202 8.59717 13.8889 9.74588ZM10.0222 4.79255C10.3517 5.2487 10.7521 5.64911 11.2082 5.97855L9.18357 6.81721L10.0222 4.79255ZM8.00023 6.32721L7.16157 4.30255C7.71706 4.39255 8.28341 4.39255 8.8389 4.30255L8.00023 6.32721ZM6.81757 6.81721L4.7929 5.97855C5.24918 5.64927 5.64962 5.24883 5.9789 4.79255L6.81757 6.81721ZM6.32757 7.99988L4.3029 8.83788C4.3929 8.28239 4.3929 7.71604 4.3029 7.16055L6.32757 7.99988ZM6.81823 9.18188L5.9789 11.2072C5.64922 10.7509 5.24859 10.3502 4.79223 10.0205L6.81823 9.18188ZM8.00023 9.67255L8.8389 11.6972C8.28361 11.6048 7.71686 11.6048 7.16157 11.6972L8.00023 9.67255ZM9.1829 9.18188L11.2082 10.0212C10.7517 10.3505 10.3511 10.7509 10.0216 11.2072L9.1829 9.18188ZM9.6729 7.99988L11.6982 7.16055C11.6086 7.71629 11.6086 8.28281 11.6982 8.83855L9.6729 7.99988ZM13.4002 5.07055L12.2976 5.52722C11.5181 5.11906 10.8817 4.48271 10.4736 3.70321L10.9296 2.59988C11.552 3.60263 12.3975 4.44814 13.4002 5.07055ZM9.7469 2.11121L9.29023 3.21321C8.4504 3.47657 7.55007 3.47657 6.71023 3.21321L6.25423 2.11121C7.40295 2.37994 8.59818 2.37994 9.7469 2.11121ZM5.07157 2.59988L5.52823 3.70188C5.12009 4.48172 4.48377 5.1185 3.70423 5.52722L2.60023 5.07055C3.60322 4.44822 4.44897 3.6027 5.07157 2.59988ZM2.11157 6.25321L3.21423 6.70988C3.47605 7.54973 3.47605 8.44937 3.21423 9.28922L2.11157 9.74588C2.38029 8.59717 2.38029 7.40193 2.11157 6.25321ZM2.60023 10.9285L3.70223 10.4719C4.48164 10.8807 5.11809 11.5171 5.5269 12.2965L5.07157 13.3999C4.44905 12.3968 3.6033 11.5511 2.60023 10.9285ZM6.25223 13.8885L6.7089 12.7865C7.54874 12.5232 8.44906 12.5232 9.2889 12.7865L9.74557 13.8885C8.59704 13.6201 7.40209 13.6201 6.25357 13.8885H6.25223ZM10.9282 13.3985L10.4716 12.2965C10.8798 11.5169 11.5164 10.8805 12.2962 10.4725L13.3976 10.9285C12.3956 11.5513 11.551 12.3971 10.9296 13.3999L10.9282 13.3985Z",
              fill: "#40526D"
            }))
        );
      }
      var ka = O.forwardRef(ba),
        La = (r.p, r(56359)),
        Ea = r(64249);
      var Za = r.p + "static/media/icon-close.19e00ea06092aa45b54a099468ea1482.svg",
        Sa = r(21400);
      var Ma = (0, S.Z)("div", { target: "e1e0ez3r12" })({
          name: "5ysu88",
          styles:
            "position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(15, 27, 43, 0.6);display:flex;align-items:center;justify-content:center"
        }),
        Oa = (0, S.Z)("div", { target: "e1e0ez3r11" })({
          name: "jxx4q3",
          styles:
            "position:relative;display:flex;flex-direction:column;background:#ffffff;box-shadow:0px 2px 5px rgba(0, 0, 0, 0.35);border-radius:8px;padding:24px;gap:24px"
        }),
        Ta = (0, S.Z)("div", { target: "e1e0ez3r10" })({
          name: "18ov00z",
          styles: "display:flex;justify-content:space-between;align-items:flex-start;width:100%"
        }),
        Pa = "#1B283C",
        Ba = (0, S.Z)("h1", { target: "e1e0ez3r9" })("font-weight:600;font-size:20px;line-height:24px;color:", Pa, ";"),
        Aa = (0, S.Z)("p", { target: "e1e0ez3r8" })("font-weight:400;font-size:16px;line-height:24px;color:", Pa, ";"),
        Da = (0, S.Z)("p", { target: "e1e0ez3r7" })({
          name: "1dwhzdy",
          styles: "font-weight:600;font-size:16px;line-height:24px;color:#9b7c09"
        }),
        Fa = (0, S.Z)("div", { target: "e1e0ez3r6" })({
          name: "vr17de",
          styles: "padding:8px 12px;background:#e8f3ff;border:1px solid #007aff;border-radius:4px"
        }),
        Ia = (0, S.Z)("span", { target: "e1e0ez3r5" })("font-weight:bold;font-size:16px;line-height:24px;color:", Pa, ";"),
        Ra = (0, S.Z)("p", { target: "e1e0ez3r4" })("font-weight:400;font-size:16px;line-height:24px;color:", Pa, ";"),
        Va = (0, S.Z)("div", { target: "e1e0ez3r3" })({ name: "4hray5", styles: "display:flex;flex-direction:row-reverse" }),
        Wa = (0, S.Z)("img", { target: "e1e0ez3r2" })({ name: "bjn8wh", styles: "position:relative" }),
        Ha = (0, S.Z)("img", { target: "e1e0ez3r1" })({ name: "1ch9ek0", styles: "position:relative;cursor:pointer;padding:5px" }),
        Ua = (0, S.Z)("div", { target: "e1e0ez3r0" })({ name: "7qtfmv", styles: "width:8px" }),
        za = function (e) {
          var t = e.icon,
            r = e.title,
            n = e.body,
            o = e.highlightText,
            i = e.calloutText,
            a = e.primaryButtonText,
            s = e.cancelButtonText,
            l = e.primaryButtonCb,
            c = e.cancelButtonCb,
            u = e.onClose,
            d = e.viewEventTrackingCallback,
            p = e.width,
            f = (0, O.createRef)();
          return (
            (0, O.useEffect)(function () {
              d && d(), f.current && f.current.focus();
            }),
            (0, G.jsx)(
              Ma,
              null,
              (0, G.jsx)(
                Oa,
                { style: { width: p ? "".concat(p, "px") : "566px" }, tabIndex: -1, ref: f },
                (0, G.jsx)(
                  Ta,
                  null,
                  (0, G.jsx)(Wa, { src: t }),
                  (0, G.jsx)(Ha, {
                    src: Za,
                    onClick: function (e) {
                      try {
                        u(e);
                      } catch (t) {
                        console.error(t);
                      }
                    }
                  })
                ),
                (0, G.jsx)(Ba, null, r),
                (0, G.jsx)(Aa, null, n),
                o && (0, G.jsx)(Da, null, o),
                i && (0, G.jsx)(Fa, null, (0, G.jsx)(Ra, null, (0, G.jsx)(Ia, null, "Security tip: "), i)),
                (0, G.jsx)(
                  Va,
                  null,
                  (0, G.jsx)(
                    Sa.M.RedButton,
                    {
                      onClick: function (e) {
                        try {
                          l(e);
                        } catch (t) {
                          console.error(t);
                        }
                      }
                    },
                    a
                  ),
                  (0, G.jsx)(Ua, null),
                  c &&
                    s &&
                    (0, G.jsx)(
                      Sa.M.DefaultButton,
                      {
                        onClick: function (e) {
                          try {
                            c && c(e);
                          } catch (t) {
                            console.error(t);
                          }
                        }
                      },
                      s
                    )
                )
              )
            )
          );
        };
      var Na = r.p + "static/media/icon-bin-yellow.094364fae2da842140941fdba0449f0f.svg";
      var qa = r.p + "static/media/icon-dont-send-alerts-yellow.9506cd9382c7592eef140402eda20c4e.svg";
      var Ga = r.p + "static/media/icon-exclude-yellow.1445c62bc511b40123e23b9bce7c5d18.svg",
        _a = r(73302),
        Ya = r(19244),
        Xa = ["domain", "viewEventTrackingCallback"];
      var Ka = (0, S.Z)("p", { target: "e1imhpgp2" })({
          name: "cwrs7f",
          styles: "width:100%;box-sizing:border-box;text-align:left;padding-bottom:16px;font-weight:400;font-size:14px;line-height:20px"
        }),
        Ja = (0, S.Z)(Ka, { target: "e1imhpgp1" })(
          "padding:12px;background-color:",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";border-radius:8px;"
        ),
        Qa = (0, S.Z)("span", { target: "e1imhpgp0" })({ name: "16ceglb", styles: "font-weight:600" }),
        $a = function (e) {
          var t = e.domain,
            r = e.viewEventTrackingCallback,
            n = (0, D.Z)(e, Xa);
          return (
            (0, O.useEffect)(function () {
              r();
            }),
            (0, G.jsx)(
              ut.V,
              (0, Z.Z)(
                {
                  title: (0, G.jsx)(M.Trans, { id: "Exclude from security score?" }),
                  icon: (0, G.jsx)(je.r, null),
                  headerColor: "yellow100",
                  primaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Exclude password" }),
                  secondaryButtonLabel: (0, G.jsx)(M.Trans, { id: "Back to passwords" }),
                  width: "477px",
                  automationId: "exclude-password-dialog",
                  isPrimarySquareButton: !0
                },
                n
              ),
              (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(
                  Ka,
                  null,
                  (0, G.jsx)(M.Trans, {
                    id: "We\u2019ll ignore your password for {0} when calculating your security score.",
                    values: { 0: t.toLowerCase() }
                  })
                ),
                (0, G.jsx)(
                  Ja,
                  null,
                  (0, G.jsx)(Qa, null, (0, G.jsx)(M.Trans, { id: "Security tip" })),
                  ": ",
                  (0, G.jsx)(M.Trans, { id: "Always use strong and unique passwords for all your sites!" })
                )
              )
            )
          );
        },
        es = r(52411);
      var ts = (0, S.Z)("div", { target: "e1l0k3a09" })({
          name: "1w30gev",
          styles: "margin-left:auto;height:28px;width:28px;border-radius:4px;overflow:visible"
        }),
        rs = (0, S.Z)("button", { target: "e1l0k3a08" })(
          "box-sizing:content-box;cursor:pointer;border-radius:6px;border:1px solid ",
          function (e) {
            return e.isActive ? e.theme.colors.black : e.theme.colors.white;
          },
          ";transition:all 0.1s ease-in-out;background:transparent;height:28px;width:28px;margin:0 0 0 8px;padding:0;&:hover{background:rgba(64, 82, 109, 0.1);}&:active{background:rgba(64, 82, 109, 0.3);}&:focus-visible{border:1px solid ",
          function (e) {
            return e.theme.colors.black;
          },
          ";}"
        ),
        ns = (0, S.Z)("div", { target: "e1l0k3a07" })({
          name: "19pfw0j",
          styles: "position:absolute;top:5px;right:40px;padding:10px;background:transparent;z-index:1000"
        }),
        os = (0, S.Z)("div", { target: "e1l0k3a06" })(
          "background:",
          function (e) {
            return e.theme.colors.white;
          },
          ";border:1px solid #d7dbe0;border-radius:8px;box-shadow:0px 4px 5px rgba(0, 0, 0, 0.14),0px 1px 10px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.2);"
        ),
        is = (0, S.Z)("ul", { target: "e1l0k3a05" })({ name: "1r962iv", styles: "padding:4px" }),
        as = (0, S.Z)("li", { target: "e1l0k3a04" })({
          name: "19dbgg8",
          styles: "transition:all 0.1s ease-in-out;color:#40526d;cursor:pointer;&:hover{background-color:rgba(64, 82, 109, 0.1);}"
        }),
        ss = (0, S.Z)(as, { target: "e1l0k3a03" })({ name: "ark4ku", styles: "color:#d32d27" }),
        ls = (0, S.Z)("hr", { target: "e1l0k3a02" })({ name: "afe3cy", styles: "padding:0;color:#58798f;margin:4px 0" }),
        cs = (0, S.Z)("div", { target: "e1l0k3a01" })({ name: "qire0w", styles: "margin-right:12px;height:16px;width:12px" }),
        us = (0, S.Z)("button", { target: "e1l0k3a00" })({
          name: "qb6fd7",
          styles:
            "width:100%;min-width:284px;background:transparent;border:0;padding:12px 16px;margin:0;display:flex;justify-content:flex-start;align-content:center;align-items:center;flex-direction:row;flex-wrap:nowrap;cursor:pointer"
        }),
        ds = function (e) {
          return e.settings.features.exclude_password;
        },
        ps = function (e) {
          return Object.values(e.user.passwordListForPasswordExclude);
        },
        fs = function (e) {
          return e.securityDashboard.passwordSecurityResults;
        },
        ms = function (e) {
          var t = e.vaultPassword,
            r = e.origin,
            n = (0, O.useState)(!1),
            o = (0, E.Z)(n, 2),
            i = o[0],
            a = o[1],
            s = function () {
              return a(!1);
            },
            l = (0, F.I0)(),
            c = (0, F.v9)(ds),
            u = (0, F.v9)(fs),
            d = (0, F.v9)(ps),
            p = (0, F.v9)(es.mQ),
            f = (0, F.v9)(es.p4),
            m = (0, F.v9)(es.zd),
            h = (0, ct._1)(),
            C = h.openDialog,
            x = h.closeDialog,
            g = c && u[t.record.id] && !u[t.record.id].automaticPasswordExclude,
            w = function (e) {
              e ? x({ dialogToBeClosedById: e }) : x();
            },
            y = !p || (p && f);
          return (0, G.jsx)(
            ts,
            { onMouseLeave: s },
            (0, G.jsx)(
              rs,
              {
                "aria-label": "Action menu open button",
                isActive: i,
                onClick: function () {
                  return a(!i);
                },
                "data-automation-id": "password-action-menu"
              },
              (0, G.jsx)(Wi, null)
            ),
            i
              ? (0, G.jsx)(
                  ns,
                  { "data-automation-id": "password-action-menu-container" },
                  (0, G.jsx)(
                    os,
                    null,
                    (0, G.jsx)(
                      is,
                      null,
                      (0, G.jsx)(
                        as,
                        { "aria-label": "Action menu item" },
                        (0, G.jsx)(
                          us,
                          {
                            onClick: function () {
                              s(), l(R.B.editPassword(t, !0));
                            }
                          },
                          (0, G.jsx)(cs, null, (0, G.jsx)(_i, null)),
                          (0, G.jsx)(M.Trans, { id: "Edit password" })
                        )
                      ),
                      r !== Ea.a.LegacySecurityDashboard &&
                        y &&
                        t.record.lastCredentialMonitoringState !== La.M.Ignored &&
                        m &&
                        (0, G.jsx)(
                          as,
                          { "aria-label": "Action menu item" },
                          (0, G.jsx)(
                            us,
                            {
                              onClick: function () {
                                var e;
                                switch (
                                  (l(R.B.sendTracking(_a.k2)),
                                  s(),
                                  l(R.B.sendTracking(_a.B8)),
                                  (0, Ya.$)(u[t.record.id] ? u[t.record.id].risk : [], t.record.lastCredentialMonitoringState))
                                ) {
                                  case Ya.G.PASSWORD:
                                    e = "Breached password";
                                    break;
                                  case Ya.G.SITE:
                                    e = "Breached site";
                                    break;
                                  default:
                                    e = "Not breached";
                                }
                                C(
                                  (0, G.jsx)(za, {
                                    title: "Stop dark web monitoring?",
                                    body: "You're about to stop monitoring this account.",
                                    calloutText: "Your account at this service may become more vulnerable to hackers.",
                                    icon: qa,
                                    primaryButtonText: "Stop monitoring",
                                    primaryButtonCb: function () {
                                      l(R.B.sendTracking(_a.x2, { Action: "Stop monitoring", "Alert Type": e })),
                                        l(R.B.sendTracking(_a.tT)),
                                        l(R.B.dontSendBreachAlerts(t.record.id)),
                                        w("stop-monitoring-dialog");
                                    },
                                    onClose: function () {
                                      l(R.B.sendTracking(_a.x2, { Action: "Close", "Alert Type": e })), w("stop-monitoring-dialog");
                                    }
                                  }),
                                  { dialogId: "stop-monitoring-dialog" }
                                );
                              }
                            },
                            (0, G.jsx)(cs, null, (0, G.jsx)(wa, null)),
                            (0, G.jsx)(M.Trans, { id: "Don't send breach alerts" })
                          )
                        ),
                      r !== Ea.a.LegacySecurityDashboard &&
                        y &&
                        t.record.lastCredentialMonitoringState === La.M.Ignored &&
                        m &&
                        (0, G.jsx)(
                          as,
                          { "aria-label": "Action menu item" },
                          (0, G.jsx)(
                            us,
                            {
                              onClick: function () {
                                s(), l(R.B.sendTracking(_a.On)), l(R.B.sendBreachAlerts(t.record.id));
                              }
                            },
                            (0, G.jsx)(cs, null, (0, G.jsx)(ka, null)),
                            (0, G.jsx)(M.Trans, { id: "Send breach alerts" })
                          )
                        ),
                      g
                        ? d.some(function (e) {
                            return e === t.record.id;
                          })
                          ? (0, G.jsx)(
                              as,
                              { "aria-label": "Action menu item" },
                              (0, G.jsx)(
                                us,
                                {
                                  onClick: function () {
                                    s(), R.B.sendTracking(_a.$Q), l(R.B.includePassword(t.record.id));
                                  }
                                },
                                (0, G.jsx)(cs, null, (0, G.jsx)(ea, null)),
                                (0, G.jsx)(M.Trans, { id: "Include in security score" })
                              )
                            )
                          : (0, G.jsx)(
                              as,
                              { "aria-label": "Action menu item", "data-automation-id": "exclude-password-option-item" },
                              (0, G.jsx)(
                                us,
                                {
                                  onClick: function () {
                                    s(),
                                      R.B.sendTracking(_a.OY),
                                      r !== Ea.a.LegacySecurityDashboard
                                        ? C(
                                            (0, G.jsx)(za, {
                                              title: "Exclude from security score?",
                                              body: "We".concat(
                                                "\u2019",
                                                "ll ignore your password for ",
                                                t.name,
                                                " when calculating your security score."
                                              ),
                                              icon: Ga,
                                              calloutText: "Always use strong and unique passwords for all your sites!",
                                              primaryButtonText: "Exclude password",
                                              primaryButtonCb: function () {
                                                l(R.B.sendTracking(_a.rP, { Action: "Exclude password" })),
                                                  l(R.B.excludePassword(t.record.id)),
                                                  w("confirm-exclude-dialog");
                                              },
                                              onClose: function () {
                                                l(R.B.sendTracking(_a.rP, { Action: "Close" })), w("confirm-exclude-dialog");
                                              },
                                              viewEventTrackingCallback: function () {
                                                return l(R.B.sendTracking(_a.NI));
                                              }
                                            }),
                                            { dialogId: "confirm-exclude-dialog" }
                                          )
                                        : C(
                                            (0, G.jsx)($a, {
                                              domain: t.name,
                                              onPrimaryButtonClick: function () {
                                                l(R.B.sendTracking(_a.rP, { Action: "Exclude password" })),
                                                  l(R.B.excludePassword(t.record.id));
                                              },
                                              viewEventTrackingCallback: function () {
                                                return l(R.B.sendTracking(_a.NI));
                                              },
                                              onDismissClick: function () {
                                                return l(R.B.sendTracking(_a.rP, { Action: "Close" }));
                                              },
                                              onSecondaryButtonClick: function () {
                                                return l(R.B.sendTracking(_a.rP, { Action: "Back to passwords" }));
                                              }
                                            })
                                          );
                                  }
                                },
                                (0, G.jsx)(cs, null, (0, G.jsx)(sa, null)),
                                (0, G.jsx)(M.Trans, { id: "Exclude from security score" })
                              )
                            )
                        : null,
                      (0, G.jsx)(ls, null),
                      (0, G.jsx)(
                        ss,
                        { "aria-label": "Action menu item" },
                        (0, G.jsx)(
                          us,
                          {
                            onClick: function () {
                              s(),
                                r !== Ea.a.LegacySecurityDashboard
                                  ? C(
                                      (0, G.jsx)(za, {
                                        title: "Delete site?",
                                        body: "This site will be permanently removed from your vault.",
                                        highlightText: "Site name: ".concat(t.name),
                                        icon: Na,
                                        primaryButtonText: "Delete",
                                        cancelButtonText: "Cancel",
                                        primaryButtonCb: function () {
                                          l(Xn.E4.deleteItem(t.record.id, function () {}, !0)),
                                            l(R.B.setNotification({ passwordDeleteSuccess: { show: !0, siteName: t.name } })),
                                            x();
                                        },
                                        cancelButtonCb: function () {
                                          return w("confirm-delete-dialog");
                                        },
                                        onClose: function () {
                                          return w("confirm-delete-dialog");
                                        },
                                        width: 456
                                      }),
                                      { dialogId: "confirm-delete-dialog" }
                                    )
                                  : l(Xn.E4.deleteItem(t.record.id, function () {}, [Ea.a.PreviewTable, Ea.a.ReportTable].includes(r)));
                            }
                          },
                          (0, G.jsx)(cs, null, (0, G.jsx)(fa, null)),
                          (0, G.jsx)(M.Trans, { id: "Delete site from vault" })
                        )
                      )
                    )
                  )
                )
              : null
          );
        };
      var hs,
        Cs,
        xs,
        gs,
        ws,
        ys,
        vs,
        js,
        bs,
        ks,
        Ls,
        Es = (0, S.Z)("div", { target: "e18fj5hs6" })(
          "align-items:center;border-bottom:1px solid ",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";box-sizing:border-box;",
          function (e) {
            return e.aid === e.id
              ? "border: 1px solid #D32D27;box-shadow: inset 0px -1px 0px #DCDFE4;border-radius: 4px;background:rgba(211, 45, 39, 0.1);"
              : "";
          },
          " display:flex;flex-direction:row;justify-content:space-between;min-height:64px;padding:16px;position:relative;"
        ),
        Zs = (0, S.Z)("div", { target: "e18fj5hs5" })(
          "align-items:center;display:flex;flex-direction:row;flex:0 1 ",
          function (e) {
            return e.width ? "".concat(e.width, "%") : "auto";
          },
          ";justify-content:flex-start;min-width:0;span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"
        ),
        Ss = (0, S.Z)("div", { target: "e18fj5hs4" })({ name: "y3vq6d", styles: "height:32px;margin-right:16px" }),
        Ms = (0, S.Z)("span", { target: "e18fj5hs3" })(le.q1, ";"),
        Os = (0, S.Z)("span", { target: "e18fj5hs2" })(
          le.Py,
          " color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";"
        ),
        Ts = (0, S.Z)("span", { target: "e18fj5hs1" })(le.q1, " margin-right:16px;"),
        Ps = (0, S.Z)(xe, { target: "e18fj5hs0" })({ name: "1a87xup", styles: "margin-right:20px;width:100%" }),
        Bs = function (e) {
          var t = (0, ce.B)(),
            r = (0, O.useState)(
              (function (e) {
                var t = (top && top.location.search) || location.search;
                return 0 === t.indexOf("?cmd=openweakpws:")
                  ? (e.setPasswordSecurityFilterType(jo.Weak), t.substring(17))
                  : 0 === t.indexOf("?cmd=openduppws:")
                  ? (e.setPasswordSecurityFilterType(jo.Duplicate), t.substring(16))
                  : "";
              })(t)
            ),
            n = (0, E.Z)(r, 2),
            o = n[0],
            i = n[1];
          return (0, G.jsx)(
            Es,
            { aid: o, id: e.id },
            (0, G.jsx)(
              Zs,
              { width: Li.Medium },
              (0, G.jsx)(Ss, null, (0, G.jsx)(Gn.P, { url: e.vaultPassword.loginUrl, default: Pi.r })),
              (0, G.jsx)(Ms, null, e.vaultPassword.name)
            ),
            (0, G.jsx)(Zs, { width: Li.Medium }, (0, G.jsx)(Os, null, e.vaultPassword.username)),
            (0, G.jsx)(
              Zs,
              { width: Li.Medium },
              e.processing
                ? (0, G.jsx)(Ps, { opacity: "1" })
                : (0, G.jsx)(
                    "span",
                    null,
                    (0, Bi.fN)(e.vaultPassword)
                      ? (0, G.jsx)(
                          O.Fragment,
                          null,
                          (0, G.jsx)(
                            Ts,
                            null,
                            e.passwordStrength === Number(e.passwordStrength)
                              ? "".concat(Math.round(e.passwordStrength), "%")
                              : (0, G.jsx)(M.Trans, { id: "N/A" })
                          ),
                          (0, G.jsx)(Oi._, { vaultPassword: e.vaultPassword })
                        )
                      : (0, G.jsx)(M.Trans, { id: "N/A" })
                  )
            ),
            (0, G.jsx)(
              Zs,
              { width: Li.Medium },
              e.processing ? (0, G.jsx)(Ps, { opacity: "0.75" }) : (0, G.jsx)(ve.g, { riskType: e.riskType })
            ),
            (0, G.jsx)(
              Zs,
              {
                width: Li.Medium,
                onClick: function () {
                  return i("");
                }
              },
              e.processing
                ? (0, G.jsx)(Ps, { opacity: "0.5" })
                : !!e.riskType.length &&
                    (0, G.jsx)(Ti.hL, {
                      riskType: e.riskType,
                      vaultPassword: e.vaultPassword,
                      source: Xn.hq.PASSWORD_SECURITY,
                      showPasswordChangeHintDialog: e.showPasswordChangeHintDialog
                    }),
              (0, G.jsx)(ms, { vaultPassword: e.vaultPassword, origin: Ea.a.LegacySecurityDashboard })
            )
          );
        },
        As = function (e) {
          var t = e.action;
          return (0, O.useEffect)(t, []), null;
        },
        Ds = r(47169),
        Fs = ["title", "titleId"];
      function Is() {
        return (
          (Is = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Is.apply(this, arguments)
        );
      }
      function Rs(e, t) {
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
      function Vs(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Rs(e, Fs);
        return O.createElement(
          "svg",
          Is(
            {
              width: 120,
              height: 120,
              viewBox: "0 0 120 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          hs ||
            (hs = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z",
              fill: "#ECF5FB"
            })),
          Cs ||
            (Cs = O.createElement("path", {
              d: "M37.0002 98.6667H84.3336",
              stroke: "#B5D9F1",
              strokeWidth: 1.79259,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          xs ||
            (xs = O.createElement("path", {
              d: "M64.6865 22.7578C64.6865 22.0632 65.2497 21.5 65.9443 21.5C66.639 21.5 67.2021 22.0632 67.2021 22.7578V26.3906C67.2021 27.0853 66.639 27.6484 65.9443 27.6484C65.2497 27.6484 64.6865 27.0853 64.6865 26.3906V22.7578Z",
              fill: "#162649",
              stroke: "#ECF5FB"
            })),
          gs ||
            (gs = O.createElement("path", {
              d: "M55.6472 26.6194L55.6472 26.6194L58.1331 29.1053C58.6243 29.5965 58.6243 30.3929 58.1331 30.8841L58.1331 30.8841C57.642 31.3753 56.8455 31.3752 56.3543 30.8841L53.8684 28.3982C53.3772 27.907 53.3772 27.1106 53.8684 26.6194C54.3597 26.1282 55.1561 26.1282 55.6472 26.6194Z",
              fill: "#162649",
              stroke: "#ECF5FB"
            })),
          ws ||
            (ws = O.createElement("path", {
              d: "M78.0203 26.6194L78.0203 26.6194C78.5115 27.1106 78.5115 27.907 78.0203 28.3982L75.5344 30.8841C75.0432 31.3753 74.2468 31.3752 73.7557 30.884L73.7556 30.884C73.2644 30.3927 73.2644 29.5964 73.7556 29.1052C73.7556 29.1052 73.7556 29.1052 73.7556 29.1052L76.2415 26.6194L76.2415 26.6194C76.7328 26.1282 77.5292 26.1282 78.0203 26.6194Z",
              fill: "#162649",
              stroke: "#ECF5FB"
            })),
          ys ||
            (ys = O.createElement(
              "g",
              { filter: "url(#filter0_i)" },
              O.createElement("path", {
                d: "M63 34C59.9848 45.9227 56.754 49.5399 49 52V75.5C53.021 77.5108 55.5573 78.9076 61 79.7336H76.5C81.5 79.7336 81.5 72.5 76.5 72.5H81.5C86.5 72.5 86.5 65.5 81.5 65.5C86.5 65.5 86.5 58.5 81.5 58.5C86.5 58.5 86.5 51.5 81.5 51.5H67.5L68 51C71.9327 38.1196 71.0553 34.1563 63 34Z",
                fill: "white"
              })
            )),
          vs ||
            (vs = O.createElement("path", {
              d: "M67.5 51.5L68 51C71.9327 38.1196 71.0553 34.1563 63 34C59.9848 45.9227 56.754 49.5399 49 52V75.5C53.021 77.5108 55.5573 78.9076 61 79.7336H76.5C81.5 79.7336 81.5 72.5 76.5 72.5H81.5C86.5 72.5 86.5 65.5 81.5 65.5M67.5 51.5H63H62.5H62H67.5ZM67.5 51.5H81.5C86.5 51.5 86.5 58.5 81.5 58.5M81.5 58.5H76.5M81.5 58.5C86.5 58.5 86.5 65.5 81.5 65.5M81.5 65.5H76.5",
              stroke: "#162649",
              strokeWidth: 1.79
            })),
          js ||
            (js = O.createElement(
              "g",
              { filter: "url(#filter1_i)" },
              O.createElement("path", {
                d: "M38 78C37.4477 78 37 77.5523 37 77V50C37 49.4477 37.4477 49 38 49L41.0631 49H42.7009L45.0099 49.0077C46.6629 49.0131 48 50.3547 48 52.0076V75C48 76.6569 46.6569 78 45 78H38Z",
                fill: "white"
              })
            )),
          bs ||
            (bs = O.createElement("path", {
              d: "M42.7039 48.105V48.105H42.7009H41.0631L38 48.105C36.9534 48.105 36.105 48.9534 36.105 50V77C36.105 78.0466 36.9534 78.895 38 78.895H45C47.1511 78.895 48.895 77.1512 48.895 75V52.0076C48.895 49.8615 47.159 48.1198 45.0129 48.1127L42.7039 48.105Z",
              stroke: "#1C315F",
              strokeWidth: 1.79
            })),
          ks ||
            (ks = O.createElement("path", {
              d: "M42 74C42.5523 74 43 73.5523 43 73C43 72.4477 42.5523 72 42 72C41.4477 72 41 72.4477 41 73C41 73.5523 41.4477 74 42 74Z",
              fill: "#D32D27"
            })),
          Ls ||
            (Ls = O.createElement(
              "defs",
              null,
              O.createElement(
                "filter",
                {
                  id: "filter0_i",
                  x: 48.105,
                  y: 33.0914,
                  width: 38.04,
                  height: 47.5372,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dy: -5 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter1_i",
                  x: 35.21,
                  y: 47.21,
                  width: 14.58,
                  height: 32.58,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -3, dy: -3 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              )
            ))
        );
      }
      var Ws,
        Hs = O.forwardRef(Vs);
      r.p;
      var Us = (0, S.Z)("div", { target: "eksf08p1" })({ name: "1auj88d", styles: "margin-top:73px;text-align:center" }),
        zs = (0, S.Z)("div", { target: "eksf08p0" })({ name: "1yjx7km", styles: "padding:20px" }),
        Ns = nt.sM.withComponent("div", { target: "eksf08p2" }),
        qs = nt.Fy.withComponent("div", { target: "eksf08p3" }),
        Gs =
          ((Ws = {}),
          (0, Ds.Z)(Ws, jo.AllAtRiskPasswords, (0, G.jsx)(M.Trans, { id: "Your passwords are strong, unique, and up-to-date." })),
          (0, Ds.Z)(Ws, jo.Blank, (0, G.jsx)(M.Trans, { id: "All of your sites have passwords in LastPass." })),
          (0, Ds.Z)(Ws, jo.Duplicate, (0, G.jsx)(M.Trans, { id: "All of your passwords are unique." })),
          (0, Ds.Z)(Ws, jo.Weak, (0, G.jsx)(M.Trans, { id: "All of your passwords are strong." })),
          (0, Ds.Z)(Ws, jo.Excluded, (0, G.jsx)(M.Trans, { id: "All of your passwords are included in your security score calculation." })),
          (0, Ds.Z)(Ws, jo.AllPasswords, (0, G.jsx)(O.Fragment, null)),
          (0, Ds.Z)(Ws, jo.Breached, (0, G.jsx)(O.Fragment, null)),
          (0, Ds.Z)(Ws, jo.NotMonitored, (0, G.jsx)(O.Fragment, null)),
          (0, Ds.Z)(Ws, jo.Secure, (0, G.jsx)(O.Fragment, null)),
          Ws),
        _s = function (e) {
          return (0, G.jsx)(
            Us,
            null,
            (0, G.jsx)(zs, null, (0, G.jsx)(Hs, null)),
            (0, G.jsx)(Ns, null, (0, G.jsx)(M.Trans, { id: "Peace of mind is yours" })),
            (0, G.jsx)(qs, null, (0, G.jsx)(M.Trans, { id: "{0}", values: { 0: Gs[e.filter] } }))
          );
        },
        Ys = function (e) {
          var t = e.purchaseUrl,
            r = (0, ce.B)();
          return (0, G.jsx)(
            Fr,
            null,
            (0, G.jsx)(Dr, {
              onClick: function () {
                return r.setShowFreeUserNotificationBanner(!1);
              }
            }),
            (0, G.jsx)(
              Ir,
              null,
              (0, G.jsx)(M.Trans, {
                id: "We hope you have been enjoying the Security Dashboard. As of October 27, 2020, you'll need LastPass Premium or Families to measure password strength and monitor email addresses on the dark web."
              })
            ),
            (0, G.jsx)(Rr, { href: t, target: "_blank" }, (0, G.jsx)(M.Trans, { id: "Upgrade now to keep the Security Dashboard!" }))
          );
        };
      function Xs(e, t, r, n) {
        var o = n.column,
          i = function () {
            switch (o) {
              case Zi.Username:
                return r[e.id].username.localeCompare(r[t.id].username);
              case Zi.Website:
                return r[e.id].name.localeCompare(r[t.id].name);
              case Zi.Risk:
                return (e.risk.sort(function (e, t) {
                  return t - e;
                })[0] || 0) >
                  (t.risk.sort(function (e, t) {
                    return t - e;
                  })[0] || 0)
                  ? 1
                  : -1;
              case Zi.Score:
                return e.score > t.score ? 1 : -1;
              default:
                return 0;
            }
          };
        return n.reverse ? i() : -i();
      }
      var Ks = function (e) {
        var t = e.showFeedbackBanner,
          r = e.showFreeUserBanner,
          n = e.reportFilterType,
          o = e.vaultPasswords,
          i = e.filteredResults,
          a = e.resultCounts,
          s = e.mainPageLink,
          l = e.reportSortingState,
          c = e.purchaseUrl,
          u = e.showPasswordChangeHintDialog,
          d = e.isExcludedPasswordsEnabled,
          p = (0, ce.B)();
        return (
          (0, O.useEffect)(
            function () {
              i &&
                i.length > 0 &&
                setTimeout(function () {
                  !(function () {
                    var e, t;
                    null === (e = top) ||
                      void 0 === e ||
                      e.window.history.pushState("", "", null === (t = top) || void 0 === t ? void 0 : t.location.pathname);
                  })();
                }, 300);
            },
            [i]
          ),
          (0, G.jsx)(
            O.Fragment,
            null,
            t && (0, G.jsx)(go, null),
            r && (0, G.jsx)(Ys, { purchaseUrl: c }),
            (0, G.jsx)(As, {
              action: function () {
                p.passwordSecurityViewed(a[jo.AllAtRiskPasswords]);
              }
            }),
            (0, G.jsx)(
              yo,
              null,
              (0, G.jsx)(
                vo,
                null,
                (0, G.jsx)(ti, { mainPageLink: s, reportFilterType: n, resultCounts: a, isExcludedPasswordsEnabled: d })
              ),
              0 === i.length
                ? (0, G.jsx)(_s, { filter: n })
                : (0, G.jsx)(
                    O.Fragment,
                    null,
                    (0, G.jsx)(Mi, { reportSortingState: l }),
                    i
                      .sort(function (e, t) {
                        return Xs(e, t, o, l);
                      })
                      .map(function (e) {
                        var t = e.id,
                          r = e.score,
                          n = e.risk,
                          i = e.processing;
                        return o[t]
                          ? (0, G.jsx)(Bs, {
                              key: t,
                              id: t,
                              vaultPassword: o[t],
                              passwordStrength: r,
                              riskType: n,
                              processing: i,
                              showPasswordChangeHintDialog: u
                            })
                          : null;
                      })
                  )
            )
          )
        );
      };
      var Js,
        Qs,
        $s = (0, S.Z)("div", { target: "ey9z7a12" })({
          name: "g0wz89",
          styles: "display:flex;flex-flow:row;justify-content:space-between;align-items:center"
        }),
        el = (0, S.Z)(Rr, { target: "ey9z7a11" })({ name: "1m72cz5", styles: "font-size:14px;font-weight:600;padding:8px" }),
        tl = (0, S.Z)(q.K, { target: "ey9z7a10" })({ name: "1vig0cx", styles: "padding:8px 16px" }),
        rl = function (e) {
          var t = e.shouldVisible,
            r = e.isAppStore,
            n = e.toDoOnClick;
          return t
            ? (0, G.jsx)(
                $s,
                null,
                (0, G.jsx)(
                  tl,
                  {
                    red: !0,
                    onClick: function () {
                      return n();
                    }
                  },
                  (0, G.jsx)(M.Trans, { id: "Upgrade to Premium to unlock Security Dashboard" })
                ),
                r
                  ? null
                  : (0, G.jsx)(
                      el,
                      { href: "https://www.lastpass.com/premium-password-manager", target: "_blank", rel: "noopener noreferrer" },
                      (0, G.jsx)(M.Trans, { id: "Learn more about LastPass Premium" })
                    )
              )
            : null;
        },
        nl = ["title", "titleId"];
      function ol() {
        return (
          (ol = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ol.apply(this, arguments)
        );
      }
      function il(e, t) {
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
      function al(e, t) {
        var r = e.title,
          n = e.titleId,
          o = il(e, nl);
        return O.createElement(
          "svg",
          ol(
            {
              width: 20,
              height: 20,
              viewBox: "0 0 20 20",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Js || (Js = O.createElement("circle", { cx: 10, cy: 10, r: 10, fill: "#00A878" })),
          Qs ||
            (Qs = O.createElement("path", {
              d: "M7.99993 12.8L5.19993 10L4.2666 10.9333L7.99993 14.6667L15.9999 6.66667L15.0666 5.73334L7.99993 12.8Z",
              fill: "white"
            }))
        );
      }
      var sl,
        ll = O.forwardRef(al),
        cl = r.p + "static/media/icon-check-circle.ef911256331401a2ed0fd9d6379b27c3.svg",
        ul = ["title", "titleId"];
      function dl() {
        return (
          (dl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          dl.apply(this, arguments)
        );
      }
      function pl(e, t) {
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
      function fl(e, t) {
        var r = e.title,
          n = e.titleId,
          o = pl(e, ul);
        return O.createElement(
          "svg",
          dl(
            {
              width: 18,
              height: 18,
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          sl ||
            (sl = O.createElement("path", {
              d: "M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z",
              fill: "#008A63"
            }))
        );
      }
      var ml = O.forwardRef(fl),
        hl =
          (r.p,
          (0, S.Z)("div", { target: "ett7ifd0" })(
            le.Py,
            ";font-weight:normal;position:fixed;width:100%;width:-moz-available;width:-webkit-fill-available;width:fill-available;z-index:2110;padding:8px;display:flex;justify-content:center;align-items:center;line-height:20px;"
          ));
      var Cl,
        xl = (0, S.Z)(hl, { target: "e1t7ow3x2" })(
          "background-color:",
          function (e) {
            return e.theme.colors.green100;
          },
          ";color:",
          function (e) {
            return e.theme.colors.typeColorPrimary;
          },
          ";"
        ),
        gl = (0, S.Z)(ll, { target: "e1t7ow3x1" })({ name: "50vupm", styles: "height:16px;width:16px;padding-right:8px" }),
        wl = (0, S.Z)(ml, { target: "e1t7ow3x0" })({ name: "jl1dbw", styles: "height:20px;cursor:pointer;position:fixed;right:12px" }),
        yl = function (e) {
          var t = e.text,
            r = e.show,
            n = e.toDoOnClick,
            o = e.autoClose,
            i = void 0 === o || o;
          return (
            (0, O.useEffect)(
              function () {
                var e = null;
                return (
                  i &&
                    n &&
                    (e = setTimeout(function () {
                      n();
                    }, 8e3)),
                  function () {
                    e && clearTimeout(e);
                  }
                );
              },
              [t, r, i, n]
            ),
            r ? (0, G.jsx)(xl, null, (0, G.jsx)(gl, null), t, (0, G.jsx)(wl, { onClick: n })) : null
          );
        },
        vl = function (e, t, r) {
          return t === jo.AllPasswords
            ? e
            : e.filter(function (e) {
                if ("number" === typeof e.risk.length)
                  switch (t) {
                    case jo.AllAtRiskPasswords:
                      return r === Ea.a.LegacySecurityDashboard
                        ? (function (e) {
                            return !!e.risk.length && !e.risk.includes(_n.g.EXCLUDED);
                          })(e)
                        : (function (e) {
                            return (
                              !!e.risk.length &&
                              (e.risk.toString() !== String([_n.g.EXCLUDED]) ||
                                (e.risk.includes(_n.g.EXCLUDED) && e.risk.includes(_n.g.BREACHED)))
                            );
                          })(e);
                    case jo.Weak:
                      return e.risk.includes(_n.g.WEAK);
                    case jo.Blank:
                      return e.risk.includes(_n.g.BLANK);
                    case jo.Duplicate:
                      return e.risk.includes(_n.g.DUPLICATE);
                    case jo.Excluded:
                      return e.risk.includes(_n.g.EXCLUDED);
                    case jo.Breached:
                      return e.risk.includes(_n.g.BREACHED);
                    case jo.NotMonitored:
                      return e.risk.includes(_n.g.NOT_MONITORED);
                    case jo.Secure:
                      return !e.risk.length;
                  }
                return !1;
              });
        },
        jl = r(37755),
        bl = r(11772),
        kl = r(17544),
        Ll = function (e, t, r, n, o, i) {
          var a = t.filter(function (t) {
              return !!(0, bl.v)(t.username) || (t.id && e(t.id), !1);
            }),
            s = [];
          a
            .sort(function (e, t) {
              return e.username > t.username ? -1 : e.username < t.username ? 1 : 0;
            })
            .forEach(function (e) {
              s.findIndex(function (t) {
                return e.username.toLocaleLowerCase() === t.username.toLocaleLowerCase();
              }) < 0 && s.push(e);
            }),
            (s = s
              .map(function (e) {
                return (0, jl.Z)((0, jl.Z)({}, e), {}, { username: e.username.toLocaleLowerCase() });
              })
              .sort(function (e, t) {
                return e.username > t.username ? 1 : e.username < t.username ? -1 : 0;
              }));
          !o &&
            r &&
            r.length &&
            (a
              .filter(function (e) {
                return e.username.match(/[A-Z]/);
              })
              .forEach(function (t) {
                var n = (0, kl.v)(t.username),
                  o = r.findIndex(function (e) {
                    return e.usernameHash === n;
                  });
                o > -1 && r[o].id && e(r[o].id || -1);
              }),
            i && i(!0));
          var l = Object.values(n);
          return (
            l.length &&
              s.length &&
              (s = s.filter(function (t) {
                if (
                  -1 !==
                  l
                    .filter(function (e) {
                      return !e.record.individualShareSource && !e.record.sharedFolderId;
                    })
                    .findIndex(function (e) {
                      return e.username.toLocaleLowerCase() === t.username.toLocaleLowerCase();
                    })
                )
                  return !0;
                var n = (0, kl.v)(t.username),
                  o = r.findIndex(function (e) {
                    return e.usernameHash === n;
                  });
                return o && r[o] && e(r[o].id || -1), !1;
              })),
            s
          );
        },
        El = r(11970),
        Zl = function (e, t, r) {
          var n = {};
          return (
            (e = e.filter(function (e) {
              return e.usernameHash in r;
            })),
            Object.values(t).forEach(function (e) {
              if (!n[e.username] && e.username) {
                var t = { username: e.username, status: ot.Mw.Inactive };
                n[e.username] = t;
              }
            }),
            e.forEach(function (e) {
              var t = r[e.usernameHash];
              n[t] = (0, jl.Z)((0, jl.Z)({}, e), {}, { username: t });
            }),
            Object.values(n)
          );
        },
        Sl = r(38800),
        Ml = function (e, t) {
          switch (e) {
            case El.F.ENTERPRISE_EXPIRED:
            case El.F.ENTERPRISE_TRIAL_EXPIRED:
              return "".concat(t, "/select-plan/");
            case El.F.FAMILY_EXPIRED:
            case El.F.FAMILY_TRIAL_EXPIRED:
              return (0, Sl.cU)(t);
            case El.F.TEAMS_EXPIRED:
            case El.F.TEAMS_TRIAL_EXPIRED:
              return (0, Sl.vG)(t);
            default:
              return (0, Sl.bw)(t);
          }
        },
        Ol = r(44417),
        Tl = r(44340),
        Pl = ["title", "titleId"];
      function Bl() {
        return (
          (Bl = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Bl.apply(this, arguments)
        );
      }
      function Al(e, t) {
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
      function Dl(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Al(e, Pl);
        return O.createElement(
          "svg",
          Bl(
            {
              width: 18,
              height: 18,
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Cl ||
            (Cl = O.createElement("path", {
              d: "M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z",
              fill: "#D32D27"
            }))
        );
      }
      var Fl = O.forwardRef(Dl);
      r.p;
      var Il = (0, S.Z)(hl, { target: "el9xy9w2" })(
          "background-color:",
          function (e) {
            return e.theme.colors.typeSurfaceColorDangerSecondary;
          },
          ";color:",
          function (e) {
            return e.theme.colors.typeColorPrimary;
          },
          ";"
        ),
        Rl = (0, S.Z)(Br.r, { target: "el9xy9w1" })({ name: "50vupm", styles: "height:16px;width:16px;padding-right:8px" }),
        Vl = (0, S.Z)(Fl, { target: "el9xy9w0" })({ name: "jl1dbw", styles: "height:20px;cursor:pointer;position:fixed;right:12px" }),
        Wl = function (e) {
          var t = e.text,
            r = e.show,
            n = e.toDoOnClick;
          return r ? (0, G.jsx)(Il, null, (0, G.jsx)(Rl, null), t, (0, G.jsx)(Vl, { onClick: n })) : null;
        },
        Hl = r(46177),
        Ul = r(15878);
      var zl = "Security Dashboard",
        Nl = "/passwords",
        ql = (0, S.Z)("div", { target: "evlvjiw1" })({ name: "cblm9y", styles: "margin-left:-24px;margin-right:-24px;margin-top:-24px" }),
        Gl = (0, S.Z)("h1", { target: "evlvjiw0" })({
          name: "4ct349",
          styles: "&{font-weight:600;font-size:20px;line-height:32px;color:#1b283c;margin-bottom:24px;}"
        }),
        _l = function (e) {
          var t,
            r = e.state,
            n = e.actions,
            o = (0, T.k6)();
          (0, B.G)(n);
          var i = (0, tt.y)(),
            a = (0, O.useMemo)(
              function () {
                return function (e) {
                  return (0, G.jsx)(P.rU, (0, Z.Z)({}, e, { to: i.path }));
                };
              },
              [i.path]
            ),
            s = (0, O.useMemo)(
              function () {
                return function (e) {
                  return (0, G.jsx)(
                    P.rU,
                    (0, Z.Z)({}, e, {
                      to: i.path + Nl,
                      onClick: function () {
                        n.viewPasswordsClicked();
                      }
                    })
                  );
                };
              },
              [i.path, n]
            ),
            l = (0, O.useState)(navigator.onLine),
            c = (0, E.Z)(l, 2),
            u = c[0],
            d = c[1];
          (0, A.i)(
            function () {
              return d(!0);
            },
            function () {
              return d(!1);
            }
          );
          var p = Object.values(r.vaultPasswords),
            f = Object.values(r.passwordSecurityResults).filter(function (e) {
              var t = p.findIndex(function (t) {
                return t.id === e.id;
              });
              return p[t] && !p[t].record.individualShareSource && !p[t].record.sharedFolderId;
            }),
            m = (0, Bi.Np)(f, Object.values(r.vaultPasswords)),
            h = (0, O.useMemo)(
              function () {
                return (function (e) {
                  var t;
                  return e.reduce(
                    function (e, t) {
                      return (
                        t.risk.length &&
                          (!t.risk.includes(_n.g.EXCLUDED) && e[jo.AllAtRiskPasswords]++,
                          t.risk.includes(_n.g.BLANK) && e[jo.Blank]++,
                          t.risk.includes(_n.g.DUPLICATE) && e[jo.Duplicate]++,
                          t.risk.includes(_n.g.WEAK) && e[jo.Weak]++,
                          t.risk.includes(_n.g.EXCLUDED) && e[jo.Excluded]++),
                        e
                      );
                    },
                    ((t = {}),
                    (0, Ds.Z)(t, jo.AllAtRiskPasswords, 0),
                    (0, Ds.Z)(t, jo.AllPasswords, e.length),
                    (0, Ds.Z)(t, jo.Blank, 0),
                    (0, Ds.Z)(t, jo.Duplicate, 0),
                    (0, Ds.Z)(t, jo.Weak, 0),
                    (0, Ds.Z)(t, jo.Excluded, 0),
                    (0, Ds.Z)(t, jo.Breached, 0),
                    (0, Ds.Z)(t, jo.NotMonitored, 0),
                    (0, Ds.Z)(t, jo.Secure, 0),
                    t)
                  );
                })(Object.values(m));
              },
              [m]
            ),
            C = null === (t = top) || void 0 === t ? void 0 : t.LPProxy,
            x = document.getElementById("newvault");
          !C && x && x.contentWindow.LPProxy && (C = x.contentWindow.LPProxy);
          var g = (0, F.I0)(),
            w = "undefined" !== typeof C && C.isExpiredFamilyUser(),
            y = (0, F.v9)(function (e) {
              return e.settings.features[Tl.e.REACT_SAVE_SITE_DIALOG];
            }),
            v = (0, F.v9)(function (e) {
              return e.settings.features[Tl.e.EXCLUDE_PASSWORD];
            }),
            j = (0, F.v9)(function (e) {
              return e.settings.features[Tl.e.SECURITY_DASHBOARD_FOR_FREE_USERS];
            }),
            b = (0, O.useState)(!1),
            k = (0, E.Z)(b, 2),
            L = k[0],
            S = k[1],
            D = Ll(n.dwmStopMonitoring, r.dwmSubscriptionsWithUsernames, r.dwmSubscriptions, r.vaultPasswords, L, S),
            I = (0, F.v9)(function (e) {
              return e.settings.features[Tl.e.SECURITY_DASHBOARD_FOR_FREE_USERS];
            }),
            R = (0, Ul.Fe)() === Hl.t.SAFARI;
          if (void 0 === r.showFeedbackBanner && void 0 === r.showFreeUserBanner) return null;
          var V = vl(f, r.reportFilterType, Ea.a.LegacySecurityDashboard),
            W = (0, Bi.Np)(V, Object.values(r.vaultPasswords)),
            H = function () {
              return r.showFeedbackBanner && !r.isFreeUser;
            },
            U = function () {
              return r.showFreeUserBanner && r.isFreeUser && !r.securityDashboardPaywall && !I;
            },
            z = function () {
              return y || !1;
            },
            N = function () {
              return Boolean(r.securityDashboardPaywall && r.paywallShouldVisible && !I);
            },
            q = function () {
              return r.paywallShouldVisible && "1" === r.securityDashboardPaywall && !I;
            },
            _ = function () {
              return null === r.score;
            },
            Y = function () {
              return (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(yl, {
                  text: (0, G.jsx)(M.Trans, { id: "All set. If you're involved in a breach, we'll alert you here and send an email." }),
                  toDoOnClick: function () {
                    return n.setNotification({ dwmSubscriptionSuccess: !1 });
                  },
                  show: r.successNotification.dwmSubscriptionSuccess
                }),
                (0, G.jsx)(yl, {
                  text: (0, G.jsx)(M.Trans, { id: "Your password is now excluded from your security score calculation." }),
                  toDoOnClick: function () {
                    return n.setNotification({ passwordExcludedSuccess: !1 });
                  },
                  show: r.successNotification.passwordExcludedSuccess
                }),
                (0, G.jsx)(yl, {
                  text: (0, G.jsx)(M.Trans, { id: "Your password is now included in your security score calculation." }),
                  toDoOnClick: function () {
                    return n.setNotification({ passwordIncludedSuccess: !1 });
                  },
                  show: r.successNotification.passwordIncludedSuccess
                }),
                (0, G.jsx)(Wl, {
                  text: (0, G.jsx)(M.Trans, { id: "Something went wrong. Please try again." }),
                  toDoOnClick: function () {
                    return n.setNotification({ generalError: !1 });
                  },
                  show: r.errorNotification.generalError
                })
              );
            };
          (0, O.useEffect)(function () {
            var e,
              t = (null === (e = top) || void 0 === e ? void 0 : e.location.search) || location.search;
            (0 !== t.indexOf("?cmd=openweakpws:") && 0 !== t.indexOf("?cmd=openduppws:") && -1 === t.indexOf("cmd=openatrisk")) ||
              (r.isFreeUser && !j) ||
              (r.isExpiredUser && !j) ||
              (o.push(i.path + Nl), -1 !== t.indexOf("cmd=openatrisk") && n.setPasswordSecurityFilterType(jo.AllAtRiskPasswords));
          }, []);
          return (0, G.jsx)(
            O.Fragment,
            null,
            !u && (0, G.jsx)(J, { compact: !1 }),
            (0, G.jsx)(Q, {
              shouldDisplay: u && r.errorOccurred === Ye.generic,
              onErrorShouldTry: function () {
                return location.reload();
              },
              compact: !1,
              errorTitle: (0, G.jsx)(M.Trans, { id: "We're not sure what went wrong" }),
              errorText: (0, G.jsx)(M.Trans, { id: "If the problem persists, reach out to the LastPass team" })
            }),
            u &&
              r.errorOccurred !== Ye.generic &&
              (0, G.jsx)(
                T.rs,
                null,
                (0, G.jsx)(
                  T.AW,
                  { exact: !0, path: i.path },
                  (0, G.jsx)(
                    de,
                    {
                      onClick: function () {
                        return n.viewAlert("");
                      }
                    },
                    (0, G.jsx)(Y, null),
                    (0, G.jsx)(
                      pe,
                      null,
                      H() && (0, G.jsx)(ql, null, (0, G.jsx)(go, null)),
                      U() && (0, G.jsx)(ql, null, (0, G.jsx)(Ys, { purchaseUrl: r.purchaseUrl })),
                      (0, G.jsx)(rl, {
                        shouldVisible: q() && !_(),
                        isAppStore: R,
                        toDoOnClick: function () {
                          w && C
                            ? (g(Xn.E4.setClickSourceOfDialog(zl)), g(Ol.ff.setExpiredFamiliesPurchaseFlowType(C.getFamilyMemberType())))
                            : n.purchaseButtonClicked("Main", "V1");
                        }
                      }),
                      (0, G.jsx)(Gl, null, "Security Dashboard"),
                      (0, G.jsx)(et, {
                        score: f.length ? r.score : null,
                        loading: r.securityScoreInProcess,
                        errorOccurred: r.errorOccurred,
                        showEmptyState: _(),
                        isFreeUser: r.isFreeUser,
                        isEnabledForFreeUser: I,
                        paywallV1shouldVisible: q(),
                        isPaywallVisible: N(),
                        filteredResults: W,
                        details: {
                          atRiskPasswordsCount: h[jo.AllAtRiskPasswords],
                          trustedDevicesCount: r.trustedDevicesCount,
                          mobileDevicesCount: r.mobileDevicesCount,
                          multifactorEnabled: r.multifactorEnabled || Boolean(r.multifactorScore),
                          passwordSecurityLink: s
                        },
                        toDoOnClick: function () {
                          w && C
                            ? (g(Xn.E4.setClickSourceOfDialog(zl)), g(Ol.ff.setExpiredFamiliesPurchaseFlowType(C.getFamilyMemberType())))
                            : n.purchaseButtonClicked("Passwords", q() ? "V1" : "V2");
                        }
                      }),
                      (0, G.jsx)(sn, {
                        accounts: D,
                        paywallV1shouldVisible: q(),
                        loading: r.dwmInProcess,
                        errorOccurred: r.errorOccurred === Ye.darkWebMonitoring,
                        isFreeUser: r.isFreeUser,
                        isTrialUser: r.isTrialUser,
                        isEnabledForFreeUser: I,
                        isPaywallVisible: N(),
                        showRemoveFromMonitoringDialog: r.showRemoveFromMonitoringDialog,
                        toDoOnClick: function () {
                          w && C
                            ? (g(Xn.E4.setClickSourceOfDialog(zl)), g(Ol.ff.setExpiredFamiliesPurchaseFlowType(C.getFamilyMemberType())))
                            : n.purchaseButtonClicked("DWM", q() ? "V1" : "V2");
                        },
                        purchaseUrl: r.purchaseUrl,
                        darkWebMonitoringPolicy: r.darkWebMonitoringPolicy
                      })
                    ),
                    (0, G.jsx)(
                      fe,
                      null,
                      (0, G.jsx)(xo, {
                        alerts: r.alertItems,
                        viewAlert: r.viewAlert,
                        isPaywallVersion1: q(),
                        isPaywallVisible: N(),
                        showPasswordChangeHintDialog: z()
                      })
                    )
                  )
                ),
                (0, G.jsx)(
                  T.AW,
                  { path: i.path + Nl },
                  (0, G.jsx)(
                    O.Fragment,
                    null,
                    (0, G.jsx)(Y, null),
                    (0, G.jsx)(Ks, {
                      showFeedbackBanner: H(),
                      showFreeUserBanner: U(),
                      reportFilterType: r.reportFilterType,
                      vaultPasswords: r.vaultPasswords,
                      filteredResults: W,
                      resultCounts: h,
                      mainPageLink: a,
                      reportSortingState: r.reportSortingState,
                      purchaseUrl: r.purchaseUrl,
                      showPasswordChangeHintDialog: z(),
                      isExcludedPasswordsEnabled: v
                    })
                  )
                )
              )
          );
        };
      var Yl = r(46999),
        Xl = r(41673),
        Kl = r(40959),
        Jl = r(74665);
      var Ql,
        $l = r(23889),
        ec = ["title", "titleId"];
      function tc() {
        return (
          (tc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          tc.apply(this, arguments)
        );
      }
      function rc(e, t) {
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
      function nc(e, t) {
        var r = e.title,
          n = e.titleId,
          o = rc(e, ec);
        return O.createElement(
          "svg",
          tc(
            {
              width: 17,
              height: 16,
              viewBox: "0 0 17 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Ql ||
            (Ql = O.createElement("path", {
              d: "M8.5 0C6.91775 0 5.37104 0.469192 4.05544 1.34824C2.73985 2.22729 1.71447 3.47672 1.10897 4.93853C0.503466 6.40034 0.34504 8.00887 0.653721 9.56072C0.962403 11.1126 1.72433 12.538 2.84315 13.6569C3.96197 14.7757 5.38743 15.5376 6.93928 15.8463C8.49113 16.155 10.0997 15.9965 11.5615 15.391C13.0233 14.7855 14.2727 13.7602 15.1518 12.4446C16.0308 11.129 16.5 9.58225 16.5 8C16.4977 5.87897 15.6541 3.84547 14.1543 2.34568C12.6545 0.845885 10.621 0.00229405 8.5 0ZM8.5 12.6667C8.30222 12.6667 8.10888 12.608 7.94443 12.4981C7.77998 12.3883 7.65181 12.2321 7.57612 12.0493C7.50044 11.8666 7.48063 11.6656 7.51922 11.4716C7.5578 11.2776 7.65304 11.0994 7.7929 10.9596C7.93275 10.8197 8.11093 10.7245 8.30491 10.6859C8.49889 10.6473 8.69996 10.6671 8.88269 10.7428C9.06541 10.8185 9.22159 10.9466 9.33147 11.1111C9.44136 11.2755 9.5 11.4689 9.5 11.6667C9.5 11.9319 9.39465 12.1862 9.20711 12.3738C9.01957 12.5613 8.76522 12.6667 8.5 12.6667ZM9.56667 8.61333C9.44773 8.66524 9.34653 8.75074 9.27548 8.85933C9.20442 8.96792 9.16661 9.09489 9.16667 9.22467C9.16667 9.40148 9.09643 9.57105 8.97141 9.69607C8.84638 9.82109 8.67682 9.89133 8.5 9.89133C8.32319 9.89133 8.15362 9.82109 8.0286 9.69607C7.90358 9.57105 7.83334 9.40148 7.83334 9.22467C7.83328 8.83546 7.94678 8.45469 8.15993 8.12904C8.37309 7.8034 8.67662 7.54702 9.03334 7.39133C9.25368 7.29517 9.44392 7.14121 9.58393 6.94577C9.72393 6.75032 9.80849 6.52066 9.82864 6.28109C9.8488 6.04152 9.8038 5.80096 9.69842 5.58487C9.59304 5.36878 9.43119 5.18521 9.23001 5.05358C9.02883 4.92195 8.79581 4.84716 8.5556 4.83714C8.31539 4.82711 8.07694 4.88222 7.8655 4.99663C7.65405 5.11104 7.47747 5.28049 7.35445 5.48705C7.23143 5.69361 7.16655 5.92958 7.16667 6.17C7.16667 6.34681 7.09643 6.51638 6.97141 6.6414C6.84638 6.76643 6.67682 6.83667 6.5 6.83667C6.32319 6.83667 6.15362 6.76643 6.0286 6.6414C5.90358 6.51638 5.83334 6.34681 5.83334 6.17C5.83333 5.68923 5.9633 5.21739 6.20949 4.80443C6.45568 4.39148 6.80894 4.05276 7.23187 3.82412C7.6548 3.59549 8.13168 3.48545 8.61203 3.50565C9.09238 3.52584 9.55833 3.67553 9.96058 3.93885C10.3628 4.20218 10.6864 4.56936 10.8971 5.00153C11.1077 5.43369 11.1976 5.91477 11.1573 6.39385C11.1169 6.87293 10.9478 7.33218 10.6678 7.72301C10.3878 8.11383 10.0073 8.42102 9.56667 8.61333Z",
              fill: "#40526D"
            }))
        );
      }
      var oc = O.forwardRef(nc),
        ic =
          (r.p,
          (function (e) {
            return (e[(e.LOW = 50)] = "LOW"), (e[(e.AVERAGE = 75)] = "AVERAGE"), (e[(e.HIGHEST = 100)] = "HIGHEST"), e;
          })({})),
        ac = (function (e) {
          return (e.NONE = "#40526DB2"), (e.RED = "#D32D27"), (e.YELLOW = "#EDBF0E"), (e.GREEN = "#00A878"), e;
        })({}),
        sc = function (e) {
          return e ? (e < ic.LOW ? ac.RED : e < ic.AVERAGE ? ac.YELLOW : ac.GREEN) : ac.NONE;
        };
      var lc = {
          MainPageContainer: (0, S.Z)("div", { target: "e15t5ve913" })({
            name: "m6ouol",
            styles: "position:relative;padding:20px 178px;background-color:#ffffff;@media (max-width: 1500px){padding:20px 20px;}"
          }),
          SiteSecurityPageContainer: (0, S.Z)("div", { target: "e15t5ve912" })({
            name: "1dx4g29",
            styles: "position:relative;padding:20px 20px;@media (max-width: 1500px){padding:20px 20px;}"
          }),
          SecurityScoreContainer: (0, S.Z)("div", { target: "e15t5ve911" })({
            name: "1saewja",
            styles: "padding-top:4px;text-align:center"
          }),
          ScoreTitle: (0, S.Z)("h1", { target: "e15t5ve910" })({
            name: "m553i0",
            styles:
              "font-size:28px;font-weight:600;line-height:32px;letter-spacing:0em;text-align:center;color:#1b283c;padding:4px 0 24px 0"
          }),
          MainTitle: (0, S.Z)("h1", { target: "e15t5ve99" })({
            name: "thwnyq",
            styles: "font-size:28px;font-weight:600;line-height:32px;letter-spacing:0em;color:#1b283c;padding:4px 0 24px 0"
          }),
          QuestionMarkIcon: (0, S.Z)(oc, { target: "e15t5ve98" })({ name: "1nkjd93", styles: "heigh:16px;width:16px" }),
          ScorePercentage: (0, S.Z)("p", { target: "e15t5ve97" })({
            name: "1eli1lf",
            styles: "font-size:48px;font-weight:700;line-height:52px;color:#1b283c"
          }),
          ScoreText: (0, S.Z)("p", { target: "e15t5ve96" })(
            "font-size:28px;font-weight:600;line-height:32px;white-space:normal;max-width:260px;margin:auto;color:",
            function (e) {
              return sc(e.score);
            },
            ";"
          ),
          SecurityScoreFeedback: (0, S.Z)("p", { target: "e15t5ve95" })({
            name: "qb4p0m",
            styles: "font-style:normal;font-weight:400;font-size:16px;line-height:24px;color:#1b283c;padding:24px 0 32px 0"
          }),
          LinkUnderline: (0, S.Z)("a", { target: "e15t5ve94" })({
            name: "1htep1q",
            styles:
              "font-style:normal;font-weight:400;font-size:14px;line-height:24px;color:#007aff;text-decoration-line:underline;cursor:pointer"
          }),
          LinkBold: (0, S.Z)("a", { target: "e15t5ve93" })({
            name: "1jor2kn",
            styles:
              "font-style:normal;font-weight:600;font-size:14px;line-height:20px;color:#007aff;cursor:pointer;:visited{color:#007aff;}"
          }),
          ImproveScore: (0, S.Z)("span", { target: "e15t5ve92" })({ name: "11jtljc", styles: "color:#008a63" }),
          Footer: (0, S.Z)("div", { target: "e15t5ve91" })({
            name: "b6j48d",
            styles: "padding-top:24px;padding-bottom:24px;padding-right:20px;padding-left:20px;height:20px;.learn-more{float:right;}"
          }),
          ExportIcon: (0, S.Z)("img", { target: "e15t5ve90" })({
            name: "3qckmk",
            styles: "width:14px;padding-left:15px;position:relative;top:1px"
          })
        },
        cc = function (e) {
          var t = e.score,
            r = Object.values((0, F.v9)(es.dY)),
            n = (0, F.v9)(es.Fo),
            o = t,
            i = r.length;
          return (
            r.forEach(function (e) {
              var t = n.find(function (t) {
                return t.id === e.id;
              });
              t &&
                t.risk.some(function (e) {
                  return e === _n.g.EXCLUDED || e === _n.g.BLANK;
                }) &&
                i--;
            }),
            0 !== i || (t && 0 !== t) || (o = null),
            (0, G.jsx)(
              O.Fragment,
              null,
              (0, G.jsx)(lc.ScorePercentage, null, o || 0 === o ? "".concat(o >= 0 ? o : 0, "%") : "?"),
              (0, G.jsx)(
                lc.ScoreText,
                { score: o || 0 },
                (function (e) {
                  return e
                    ? e < ic.LOW
                      ? (0, G.jsx)(M.Trans, { id: "Low score" })
                      : e < ic.AVERAGE
                      ? (0, G.jsx)(M.Trans, { id: "Average score" })
                      : e < ic.HIGHEST
                      ? (0, G.jsx)(M.Trans, { id: "High score" })
                      : e === ic.HIGHEST
                      ? (0, G.jsx)(M.Trans, { id: "Highest score" })
                      : (0, G.jsx)(O.Fragment, null)
                    : 0 === e
                    ? (0, G.jsx)(M.Trans, { id: "Low score" })
                    : (0, G.jsx)(M.Trans, { id: "No sites, no score" });
                })(o)
              )
            )
          );
        },
        uc = O.memo(cc),
        dc = function (e) {
          var t = e.score;
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(
              lc.SecurityScoreFeedback,
              null,
              (function (e) {
                return e
                  ? e < ic.LOW
                    ? (0, G.jsx)(M.Trans, { id: "Time for some tough love. You need to make your online life more secure." })
                    : e < ic.AVERAGE
                    ? (0, G.jsx)(M.Trans, { id: "We see room for improvement. Let\u2019s boost that score!" })
                    : e < ic.HIGHEST
                    ? (0, G.jsx)(M.Trans, { id: "Looking good. With a little attention you\u2019ll be a security star!" })
                    : e === ic.HIGHEST
                    ? (0, G.jsx)(M.Trans, { id: "Congrats! You\u2019re a security champion." })
                    : (0, G.jsx)(O.Fragment, null)
                  : (0, G.jsx)(M.Trans, { id: "Add at least one site to your LastPass vault to get a security score." });
              })(t)
            )
          );
        },
        pc = O.memo(dc);
      var fc = (0, S.Z)("circle", { target: "e1clkmve3" })(
          "stroke:",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";"
        ),
        mc = (0, S.Z)("circle", { target: "e1clkmve2" })(
          "stroke:",
          function (e) {
            return e.strokeColor;
          },
          ";"
        ),
        hc = (0, S.Z)("div", { target: "e1clkmve1" })({ name: "v2e3u2", styles: "overflow:hidden;height:160px" }),
        Cc = (0, S.Z)("div", { target: "e1clkmve0" })({ name: "nyp39u", styles: "transform:translateY(calc(-100% - 8px))" }),
        xc = function (e) {
          var t = e.score,
            r = e.children;
          return (0, G.jsx)(
            hc,
            null,
            (0, G.jsx)(
              "svg",
              { width: "320", height: "100%", viewBox: "0 0 34.83 17.4" },
              (0, G.jsx)(fc, { cx: "17.42", cy: "17.42", r: "15.92", fill: "transparent", strokeWidth: "3" }),
              t > 0 &&
                (0, G.jsx)(mc, {
                  cx: "17.42",
                  cy: "17.42",
                  r: "15.92",
                  fill: "transparent",
                  strokeLinecap: "butt",
                  strokeDasharray: "".concat(Math.ceil(t / 2), ", 100"),
                  transform: "rotate(180, 17.42, 17.42)",
                  strokeWidth: "3",
                  strokeColor: sc(t)
                })
            ),
            (0, G.jsx)(Cc, null, r)
          );
        },
        gc = O.memo(xc),
        wc = function () {
          var e = (function (e, t) {
            var r = (0, O.useState)(e),
              n = (0, E.Z)(r, 2),
              o = n[0],
              i = n[1];
            return (
              (0, O.useEffect)(
                function () {
                  var r = setTimeout(function () {
                    i(e);
                  }, t);
                  return function () {
                    clearTimeout(r);
                  };
                },
                [e, t]
              ),
              o
            );
          })((0, F.v9)(es.Ee), 500);
          return (0, G.jsx)(
            lc.SecurityScoreContainer,
            null,
            (0, G.jsx)(
              lc.ScoreTitle,
              null,
              (0, G.jsx)(M.Trans, { id: "Security score" }),
              " ",
              (0, G.jsx)(
                $l.u,
                {
                  tooltip: {
                    id: "The overall strength of the passwords in your vault, excluding items in a linked account or shared with you."
                  },
                  position: "right",
                  minWidth: 337
                },
                (0, G.jsx)(lc.QuestionMarkIcon, null)
              )
            ),
            (0, G.jsx)(gc, { score: e }, (0, G.jsx)(uc, { score: e })),
            (0, G.jsx)(pc, { score: e })
          );
        };
      var yc = r.p + "static/media/icon-check.fefbac65133e0060e0e7a84d0f88f54f.svg";
      var vc = {
          ManageButton: (0, S.Z)(Sa.e.DefaultButton, { target: "e1q0tlcg2" })({ name: "d9gf8v", styles: "margin-right:32px" }),
          EnableButton: (0, S.Z)(Sa.e.RedButton, { target: "e1q0tlcg1" })({ name: "14w8gpb", styles: "margin-top:20px;margin-right:22px" })
        },
        jc = {
          MfaProviderContainer: (0, S.Z)("div", { target: "e1q0tlcg0" })({
            name: "jlrjpb",
            styles:
              "width:100%;height:68px;border-bottom:solid 1px #bac0ca;img{float:left;padding-top:18px;padding-bottom:18px;padding-left:24px;padding-right:16px;width:32px;}div{float:left;padding-top:22px;b{font-weight:600;color:#1b283c;}p{max-width:510px;font-style:normal;font-weight:400;font-size:12px;line-height:20px;align-items:center;color:rgba(64, 82, 109, 0.7);}}.enabled-container{float:right;div{margin-top:-18px;span{font-style:normal;font-weight:400;font-size:16px;line-height:24px;display:flex;align-items:center;color:#008a63;padding-right:24px;}img{width:12px;position:relative;top:-10px;}}}"
          })
        };
      var bc = r.p + "static/media/authlogo-duo.78e3ea42c9499a9be65b693cb3f7d618.svg";
      var kc = r.p + "static/media/authlogo-google.e716a7653563e1cda28acf072aa3e67a.svg";
      var Lc = r.p + "static/media/authlogo-ms.c3c80cfb85a74c74d43ee5d16e56504b.svg";
      var Ec = r.p + "static/media/authlogo-grid.f11b5c5765ac079f306016af3f45dc82.svg";
      var Zc = r.p + "static/media/authlogo-fingerprint.eaf452105f5e16c7f6364bd92f9ee3dc.svg";
      var Sc = r.p + "static/media/authlogo-yubikey.aeec160a39cdbeb3f57a4f8503ca63d0.svg";
      var Mc = r.p + "static/media/authlogo-lastpass.a0380648aefdea59d351b33a46c0b145.svg";
      var Oc = r.p + "static/media/authlogo-salesforce.463e7ac791e42cc2c48f1be4a06b0256.svg";
      var Tc = r.p + "static/media/authlogo-securid.3e0af6fe72fd4f2c2b0d3984297c94ca.svg",
        Pc = r(28210),
        Bc = r(51887),
        Ac = {
          lastpass: { name: "LastPass Authenticator", icon: (0, G.jsx)("img", { src: Mc }) },
          lastpassmfa: { name: "LastPass Authenticator", icon: (0, G.jsx)("img", { src: Mc }) },
          google: { name: "Google Authenticator", icon: (0, G.jsx)("img", { src: kc }) },
          ms: { name: "Microsoft Authenticator", icon: (0, G.jsx)("img", { src: Lc }) },
          duo: { name: "Duo Security", icon: (0, G.jsx)("img", { src: bc, style: { paddingTop: "34px" } }) },
          grid: { name: "Grid", icon: (0, G.jsx)("img", { src: Ec }) },
          salesforce: { name: "Salesforce Authenticator", icon: (0, G.jsx)("img", { src: Oc }) }
        },
        Dc = {
          yubi: { name: "YubiKey", icon: (0, G.jsx)("img", { src: Sc }) },
          fingerprint: { name: "Fingerprint", icon: (0, G.jsx)("img", { src: Zc }) }
        },
        Fc = {
          secureauth: { name: "SecureAuth", icon: (0, G.jsx)("img", { src: Pc }) },
          securid: { name: "RSA SecurID", icon: (0, G.jsx)("img", { src: Tc }) },
          symantec: { name: "Symantec VIP", icon: (0, G.jsx)("img", { src: Bc }) }
        },
        Ic = function (e) {
          var t = (0, F.I0)(),
            r = (0, jl.Z)((0, jl.Z)((0, jl.Z)({}, Ac), Dc), Fc);
          return (0, G.jsx)(
            jc.MfaProviderContainer,
            { key: e.providerName },
            r[e.providerName] && r[e.providerName].icon,
            (0, G.jsx)("div", null, (0, G.jsx)("b", null, r[e.providerName] && r[e.providerName].name)),
            e.isMfaEnabled &&
              (0, G.jsx)(
                "div",
                { className: "enabled-container" },
                (0, G.jsx)(
                  "div",
                  { className: "enabled-indicator" },
                  (0, G.jsx)("img", { src: yc }),
                  (0, G.jsx)("span", { className: "enabled" }, (0, G.jsx)(M.Trans, { id: "Enabled" }))
                ),
                (0, G.jsx)(
                  vc.ManageButton,
                  {
                    "data-automation-id": "mfa-provider-row-manage",
                    onClick: function () {
                      return e.openAccountSettingsMfa();
                    }
                  },
                  (0, G.jsx)(M.Trans, { id: "Manage" })
                )
              ),
            !e.isMfaEnabled &&
              (0, G.jsx)(
                vc.EnableButton,
                {
                  "data-automation-id": "mfa-provider-row-enable",
                  onClick: function () {
                    t(R.B.sendTracking(_a.xn)), e.openAccountSettingsMfa();
                  }
                },
                (0, G.jsx)(M.Trans, { id: "Enable" })
              )
          );
        };
      var Rc = r.p + "static/media/icon-lock-yellow.4a6af8e99d2f8d4d77a0c744b17886fa.svg";
      var Vc = r.p + "static/media/icon-lock-gray.41fb51ff95b8c6f24b09300f058c43a2.svg";
      var Wc = r.p + "static/media/icon-mfa-yellow.37c4d1ee557d17d416abbc299e186307.svg";
      var Hc = r.p + "static/media/icon-trusted-devices.5668f3f161dccfeb8a2c9ead7e3b1139.svg";
      var Uc = {
          CollapsibleContainer: (0, S.Z)("div", { target: "eo4dv6i10" })(
            "width:100%;max-width:844px;min-height:52px;border:solid 1px #bac0ca;border-radius:8px;margin:0 auto;margin-bottom:20px;max-height:",
            function (e) {
              return e.isCollapsed ? "100px" : "1200px";
            },
            ";",
            function (e) {
              return e.transition ? "transition: all 0.5s" : "";
            },
            ";"
          ),
          CollapsibleHeader: (0, S.Z)("div", { target: "eo4dv6i9" })({
            name: "5jqir3",
            styles: "display:flex;position:relative;height:52px;padding-top:24px;padding-left:24px;padding-bottom:24px;z-index:100"
          }),
          CollapsibleHeaderIcon: (0, S.Z)("div", { target: "eo4dv6i8" })({
            name: "1tl20nj",
            styles: "position:relative;float:left;width:60px;min-width:60px"
          }),
          CollapsibleHeaderTitle: (0, S.Z)("div", { target: "eo4dv6i7" })({
            name: "197nep1",
            styles:
              "position:relative;float:left;padding-left:24px;max-width:680px;width:680px;font-size:16px;color:#1b283c;b{font-weight:600;}"
          }),
          CollapsibleIconContainer: (0, S.Z)("div", { target: "eo4dv6i6" })({
            name: "icuz4p",
            styles:
              "width:48px;height:48px;min-width:48px;min-height:48px;border-radius:24px;&.gray{background-color:#ebeeef;}&.yellow{background-color:#faf4de;}&.green{background-color:#e7f7f2;}"
          }),
          CollapsibleIcon: (0, S.Z)("img", { target: "eo4dv6i5" })({
            name: "xzmo2",
            styles: "width:20px;height:20px;position:relative;top:14px;left:14px"
          }),
          CollapsibleTrustedDeviceIcon: (0, S.Z)("img", { target: "eo4dv6i4" })({
            name: "ft0rjy",
            styles: "width:28px;position:relative;top:8px;left:14px"
          }),
          CollapsibleWrappedIcon: (0, S.Z)("img", { target: "eo4dv6i3" })({ name: "srew0a", styles: "position:relative;top:4px;left:4px" }),
          CollapsibleSubtitle: (0, S.Z)("div", { target: "eo4dv6i2" })({
            name: "80ccg8",
            styles: "padding-top:4px;font-weight:400;font-size:14px;max-width:calc(100% - 70px)"
          }),
          CollapsibleToggle: (0, S.Z)("button", { target: "eo4dv6i1" })(
            "width:32px;height:32px;right:32px;top:35px;position:absolute;cursor:pointer;background-image:url('",
            function (e) {
              return e.image;
            },
            "');background-repeat:no-repeat;background-color:#ffffff;background-size:14px 14px;background-position:center;border-radius:4px;border:0px;:hover{background-color:rgba(64, 82, 109, 0.1);}:active{background-color:rgba(64, 82, 109, 0.3);}:focus{outline:solid 1px #000000;}:focus:not(:focus-visible){outline:0;}"
          ),
          CollapsibleBody: (0, S.Z)("div", { target: "eo4dv6i0" })(
            "border-top:solid 1px #bac0ca;",
            function (e) {
              return e.isVisible ? "display: none;" : "";
            },
            ";"
          )
        },
        zc = {
          check: (0, G.jsx)(Uc.CollapsibleIconContainer, { className: "green" }, (0, G.jsx)(Uc.CollapsibleIcon, { src: cl })),
          siteSecurityYellow: (0, G.jsx)(
            Uc.CollapsibleIconContainer,
            { className: "yellow" },
            (0, G.jsx)(Uc.CollapsibleWrappedIcon, { src: Rc })
          ),
          siteSecurityGray: (0, G.jsx)(
            Uc.CollapsibleIconContainer,
            { className: "gray" },
            (0, G.jsx)(Uc.CollapsibleWrappedIcon, { src: Vc })
          ),
          mfa: (0, G.jsx)(Uc.CollapsibleIconContainer, { className: "yellow" }, (0, G.jsx)(Uc.CollapsibleIcon, { src: Wc })),
          trustedDevice: (0, G.jsx)(
            Uc.CollapsibleIconContainer,
            { className: "yellow" },
            (0, G.jsx)(Uc.CollapsibleTrustedDeviceIcon, { src: Hc })
          )
        },
        Nc = function (e) {
          var t = (0, O.useState)({ isCollapsed: e.isCollapsed, isTransitionAllowed: !1 }),
            r = (0, E.Z)(t, 2),
            n = r[0],
            o = r[1];
          return (0, G.jsx)(
            Uc.CollapsibleContainer,
            { transition: n.isTransitionAllowed, isCollapsed: n.isCollapsed },
            (0, G.jsx)(
              Uc.CollapsibleHeader,
              null,
              e.icon,
              (0, G.jsx)(
                Uc.CollapsibleHeaderTitle,
                null,
                (0, G.jsx)("b", null, e.title),
                (0, G.jsx)(Uc.CollapsibleSubtitle, null, e.subtitle)
              ),
              (0, G.jsx)(Uc.CollapsibleToggle, {
                "data-automation-id": "collapsible-toggle",
                image: n.isCollapsed ? ci : hi,
                onClick: function () {
                  o({ isCollapsed: !n.isCollapsed, isTransitionAllowed: !0 });
                }
              })
            ),
            (0, G.jsx)(Uc.CollapsibleBody, { isVisible: n.isCollapsed }, e.children)
          );
        };
      var qc = r.p + "static/media/export.47a231603259f35985823423c3b5f53b.svg";
      var Gc = {
        Grey: (0, S.Z)("button", { target: "e181qbxo1" })({
          name: "7omhwb",
          styles:
            "padding:0px 8px;gap:10px;background:#ebeeef;border-radius:20px;border:0px;font-style:normal;font-weight:600;font-size:12px;line-height:20px"
        }),
        Green: (0, S.Z)("button", { target: "e181qbxo0" })({
          name: "9grcfy",
          styles:
            "padding:0px 8px;gap:10px;background:#e7f7f2;border-radius:20px;border:0px;font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:#008a63"
        })
      };
      var _c = {
          FederatedContainer: (0, S.Z)("div", { target: "ex12kj94" })({
            name: "11tbjnh",
            styles:
              "background:#f9fafb;border-bottom:solid 1px #bac0ca;height:68px;padding-top:12px;padding-left:24px;b{font-style:normal;font-weight:600;font-size:16px;line-height:24px;color:#1b283c;}span{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:#1b283c;}a{float:right;font-style:normal;font-weight:600;font-size:12px;line-height:20px;color:#007aff;position:relative;top:-6px;right:60px;cursor:pointer;}"
          }),
          Footer: (0, S.Z)("div", { target: "ex12kj93" })({
            name: "b6j48d",
            styles: "padding-top:24px;padding-bottom:24px;padding-right:20px;padding-left:20px;height:20px;.learn-more{float:right;}"
          }),
          ExportIcon: (0, S.Z)("img", { target: "ex12kj92" })({
            name: "3qckmk",
            styles: "width:14px;padding-left:15px;position:relative;top:1px"
          }),
          MfaProviderRowContainer: (0, S.Z)("div", { target: "ex12kj91" })({ name: "vetbs0", styles: "display:grid" }),
          ShowMoreButton: (0, S.Z)(Sa.e.TertiaryButton, { target: "ex12kj90" })({ name: "1wcmnr5", styles: "position:relative;top:-6px" })
        },
        Yc = function () {
          var e = (0, F.I0)(),
            t = (function (e, t) {
              var r = (0, jl.Z)({}, Ac);
              return e && (r = (0, jl.Z)((0, jl.Z)({}, r), Dc)), t && (r = (0, jl.Z)((0, jl.Z)({}, r), Fc)), r;
            })(!0 === (0, F.v9)(es.fe), !0 === (0, F.v9)(es.u)),
            r = (0, F.v9)(es.iB),
            n = r.length > 0,
            o = (0, F.v9)(es.tE),
            i = o ? 0 : 1,
            a = n ? r.length : i,
            s = function () {
              return e(R.B.manageMultifactor(!0));
            },
            l = n;
          return (
            o && (l = !0),
            (0, G.jsx)(
              Nc,
              {
                icon: l ? zc.check : zc.mfa,
                title: (0, G.jsx)(M.Trans, { id: "Multifactor authentication" }),
                subtitle: (0, G.jsx)(
                  "span",
                  null,
                  l
                    ? (0, G.jsx)(M.Trans, { id: "Good job! Multifactor authentication is turned on for your LastPass account." })
                    : (0, G.jsx)(M.Trans, {
                        id: "Add an extra layer of protection to your LastPass account. Enable it now to <0>improve your score by 20%</0>.",
                        components: [(0, G.jsx)(lc.ImproveScore, null)]
                      })
                ),
                isCollapsed: !0
              },
              (0, G.jsx)(
                _c.MfaProviderRowContainer,
                null,
                n &&
                  !o &&
                  r.map(function (e) {
                    return (0, G.jsx)(Ic, { key: e, openAccountSettingsMfa: s, isMfaEnabled: n, providerName: e });
                  }),
                !n && !o && (0, G.jsx)(Ic, { isMfaEnabled: !1, openAccountSettingsMfa: s, providerName: "lastpass" })
              ),
              o &&
                (0, G.jsx)(
                  _c.FederatedContainer,
                  null,
                  (0, G.jsx)("b", null, (0, G.jsx)(M.Trans, { id: "Federated account" })),
                  " ",
                  (0, G.jsx)(
                    $l.u,
                    {
                      tooltip: { id: "Your IT administrator manages this setting for your organization." },
                      position: "top",
                      textWrap: "nowrap"
                    },
                    (0, G.jsx)(Gc.Grey, null, (0, G.jsx)(M.Trans, { id: "Managed by administrator" }))
                  ),
                  (0, G.jsx)("br", null),
                  (0, G.jsx)(
                    "span",
                    null,
                    (0, G.jsx)(M.Trans, {
                      id: "Your organization uses a federated identity provider to manage your access to various systems."
                    })
                  ),
                  (0, G.jsx)(
                    lc.LinkUnderline,
                    {
                      onClick: function () {
                        e(R.B.sendTracking(_a.zA));
                      },
                      tabIndex: 0,
                      className: "learn-more",
                      href: "http://link.lastpass.com/help-federated-login-users",
                      target: "_blank",
                      rel: "noopener noreferrer"
                    },
                    (0, G.jsx)(M.Trans, { id: "Learn more" })
                  )
                ),
              (0, G.jsx)(
                lc.Footer,
                null,
                !o &&
                  (0, G.jsx)(
                    _c.ShowMoreButton,
                    { "data-automation-id": "show-other-mfa-options", tabIndex: 0, onClick: s },
                    (0, G.jsx)(M.Trans, { id: "Show other options" }),
                    " (",
                    Object.keys(t).length - a,
                    ")",
                    (0, G.jsx)(_c.ExportIcon, { src: qc, width: 12 })
                  ),
                (0, G.jsx)(
                  lc.LinkUnderline,
                  {
                    onClick: function () {
                      e(R.B.sendTracking(_a.zA));
                    },
                    tabIndex: 0,
                    className: "learn-more",
                    href: "http://link.lastpass.com/multifactor-options-account-settings",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  (0, G.jsx)(M.Trans, { id: "Learn more about multifactor authentication" })
                )
              )
            )
          );
        },
        Xc = r(19685);
      var Kc,
        Jc,
        Qc,
        $c,
        eu,
        tu,
        ru,
        nu,
        ou,
        iu,
        au,
        su,
        lu = (0, S.Z)(q.K, { target: "e15htrm72" })({ name: "11prvnw", styles: "border-radius:4px;margin-bottom:20px" }),
        cu = (0, S.Z)(q.K, { target: "e15htrm71" })({
          name: "wrvq52",
          styles: "border-radius:4px;border:solid 1px #bac0ca;margin-bottom:20px"
        }),
        uu = (0, S.Z)("div", { target: "e15htrm70" })({ name: "1azakc", styles: "text-align:center" }),
        du = function () {
          var e = (0, F.I0)(),
            t = (0, F.v9)(es.N0);
          return (0, G.jsx)(
            uu,
            null,
            (0, G.jsx)(
              lu,
              {
                red: !0,
                onClick: function (r) {
                  r.preventDefault(),
                    t ? (0, Xc.T)("LPVault").openImportPasswords() : (0, Xc.T)("LPProxy").import("welcome_screen"),
                    e(R.B.sendTracking(_a.Lx));
                }
              },
              (0, G.jsx)(M.Trans, { id: "Import many passwords at once to LastPass" })
            ),
            (0, G.jsx)("br", null),
            (0, G.jsx)(
              cu,
              {
                customColors: {
                  backgroundColor: "white",
                  textColor: "black",
                  hoverBackgroundColor: "grayBorder",
                  focusBackgroundColor: "white"
                },
                onClick: function (e) {
                  e.preventDefault(), (0, Xc.T)("LPVault").openSiteDialog({ saveOptions: { source: "security-dashboard" } });
                }
              },
              (0, G.jsx)(M.Trans, { id: "Add items one-by-one" })
            )
          );
        },
        pu = ["title", "titleId"];
      function fu() {
        return (
          (fu = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          fu.apply(this, arguments)
        );
      }
      function mu(e, t) {
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
      function hu(e, t) {
        var r = e.title,
          n = e.titleId,
          o = mu(e, pu);
        return O.createElement(
          "svg",
          fu(
            {
              width: 33,
              height: 32,
              viewBox: "0 0 33 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Kc ||
            (Kc = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z",
              fill: "#DAECF8"
            })),
          Jc ||
            (Jc = O.createElement(
              "g",
              { filter: "url(#filter0_i_1120_26400)" },
              O.createElement("path", {
                d: "M26.1004 18.3542V8.419C26.1004 7.74852 25.5518 7.19995 24.8813 7.19995H8.11944C7.44896 7.19995 6.90039 7.74852 6.90039 8.419V18.3542H26.1004Z",
                fill: "#86C1E9"
              })
            )),
          Qc ||
            (Qc = O.createElement(
              "g",
              { filter: "url(#filter1_i_1120_26400)" },
              O.createElement("path", {
                d: "M26.1004 18.354V20.8531C26.1004 21.5235 25.5518 22.0721 24.8813 22.0721H8.11944C7.44896 22.0721 6.90039 21.5235 6.90039 20.8531V18.354H26.1004Z",
                fill: "white"
              })
            )),
          $c ||
            ($c = O.createElement("path", {
              d: "M26.1004 18.354V20.8531C26.1004 21.5235 25.5518 22.0721 24.8813 22.0721H8.11944C7.44896 22.0721 6.90039 21.5235 6.90039 20.8531V18.354H26.1004Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          eu ||
            (eu = O.createElement("path", {
              d: "M17.3688 20.1641C17.3688 20.566 17.0472 20.8876 16.6453 20.8876C16.2434 20.8876 15.9219 20.566 15.9219 20.1641C15.9219 19.7622 16.2434 19.4407 16.6453 19.4407C17.0472 19.4407 17.3688 19.7622 17.3688 20.1641Z",
              fill: "#D32D27"
            })),
          tu ||
            (tu = O.createElement(
              "g",
              { filter: "url(#filter2_i_1120_26400)" },
              O.createElement("path", { d: "M19.5781 24.5101H13.4219L13.7266 22.072H19.2733L19.5781 24.5101Z", fill: "white" })
            )),
          ru ||
            (ru = O.createElement("path", {
              d: "M19.5781 24.5101H13.4219L13.7266 22.072H19.2733L19.5781 24.5101Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          nu ||
            (nu = O.createElement("path", {
              d: "M11.5332 24.6855H21.4684",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ou ||
            (ou = O.createElement("path", {
              d: "M26.1004 18.3542V8.419C26.1004 7.74852 25.5518 7.19995 24.8813 7.19995H8.11944C7.44896 7.19995 6.90039 7.74852 6.90039 8.419V18.3542H26.1004Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          O.createElement(
            "mask",
            { id: "mask0_1120_26400", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: 6, y: 8, width: 27, height: 25 },
            iu || (iu = O.createElement("rect", { x: 6.90039, y: 8.19995, width: 26, height: 23.9106, rx: 2, fill: "#C4C4C4" }))
          ),
          au ||
            (au = O.createElement(
              "g",
              { mask: "url(#mask0_1120_26400)" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.95801 12.5759L18.9246 3.35639L19.3214 4.92227L6.35482 14.1418L5.95801 12.5759Z",
                fill: "white"
              }),
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.0918 14.9939L20.1144 5.02352L20.3349 5.89345L6.31225 15.8638L6.0918 14.9939Z",
                fill: "white"
              })
            )),
          su ||
            (su = O.createElement(
              "defs",
              null,
              O.createElement(
                "filter",
                {
                  id: "filter0_i_1120_26400",
                  x: 6.90039,
                  y: 7.19995,
                  width: 19.2002,
                  height: 11.1543,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -3 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_1120_26400" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter1_i_1120_26400",
                  x: 6.27539,
                  y: 17.729,
                  width: 20.4502,
                  height: 4.96802,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -3.5, dy: -3.5 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_1120_26400" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter2_i_1120_26400",
                  x: 12.7969,
                  y: 21.447,
                  width: 7.40625,
                  height: 3.68799,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -3.5, dy: -3.5 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_1120_26400" })
              )
            ))
        );
      }
      var Cu,
        xu,
        gu,
        wu,
        yu,
        vu,
        ju,
        bu,
        ku,
        Lu,
        Eu,
        Zu = O.forwardRef(hu),
        Su = (r.p, ["title", "titleId"]);
      function Mu() {
        return (
          (Mu = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Mu.apply(this, arguments)
        );
      }
      function Ou(e, t) {
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
      function Tu(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Ou(e, Su);
        return O.createElement(
          "svg",
          Mu(
            {
              width: 33,
              height: 32,
              viewBox: "0 0 33 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Cu ||
            (Cu = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z",
              fill: "#DAECF8"
            })),
          xu ||
            (xu = O.createElement(
              "g",
              { filter: "url(#filter0_i_1120_26195)" },
              O.createElement("path", {
                d: "M12.3207 6.13013H20.0007C20.7897 6.13013 21.4209 6.76136 21.4209 7.5504V23.9099C21.4209 24.6989 20.7897 25.3301 20.0007 25.3301H12.3207C11.5316 25.3301 10.9004 24.6989 10.9004 23.9099V7.5504C10.953 6.76136 11.5842 6.13013 12.3207 6.13013Z",
                fill: "white"
              })
            )),
          gu ||
            (gu = O.createElement(
              "g",
              { filter: "url(#filter1_i_1120_26195)" },
              O.createElement("path", { d: "M21.4211 9.28613H10.9531V22.016H21.4211V9.28613Z", fill: "#86C1E9" })
            )),
          wu ||
            (wu = O.createElement("path", {
              d: "M12.3207 6.13013H20.0007C20.7897 6.13013 21.4209 6.76136 21.4209 7.5504V23.9099C21.4209 24.6989 20.7897 25.3301 20.0007 25.3301H12.3207C11.5316 25.3301 10.9004 24.6989 10.9004 23.9099V7.5504C10.953 6.76136 11.5842 6.13013 12.3207 6.13013Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinejoin: "round"
            })),
          yu ||
            (yu = O.createElement("path", {
              d: "M21.4211 9.28613H10.9531V22.016H21.4211V9.28613Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinejoin: "round"
            })),
          vu ||
            (vu = O.createElement("path", {
              d: "M15.6348 7.70825H18.2649",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ju ||
            (ju = O.createElement("path", {
              d: "M14.1678 7.70842C14.1678 7.59566 14.2592 7.50424 14.372 7.50424C14.4848 7.50424 14.5762 7.59565 14.5762 7.70842C14.5762 7.82119 14.4848 7.9126 14.372 7.9126C14.2592 7.9126 14.1678 7.82118 14.1678 7.70842Z",
              fill: "#264887",
              stroke: "#264887",
              strokeWidth: 1.25
            })),
          bu ||
            (bu = O.createElement("path", {
              d: "M16.2591 24.2995C16.6039 24.2995 16.8835 24.02 16.8835 23.6751C16.8835 23.3303 16.6039 23.0508 16.2591 23.0508C15.9143 23.0508 15.6348 23.3303 15.6348 23.6751C15.6348 24.02 15.9143 24.2995 16.2591 24.2995Z",
              fill: "#D32D27"
            })),
          O.createElement(
            "mask",
            { id: "mask0_1120_26195", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: 11, y: 9, width: 11, height: 13 },
            ku ||
              (ku = O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.4053 9.67822H21.0505V21.783H11.4053V9.67822Z",
                fill: "white"
              }))
          ),
          Lu ||
            (Lu = O.createElement(
              "g",
              { mask: "url(#mask0_1120_26195)" },
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M-1.35059 18.1245L37.088 1.59849L38.5085 5.0284L0.0699081 21.5544L-1.35059 18.1245Z",
                fill: "white"
              }),
              O.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M-0.914302 23.4658L37.5288 6.95034L38.2701 8.74326L-0.172926 25.2587L-0.914302 23.4658Z",
                fill: "white"
              })
            )),
          Eu ||
            (Eu = O.createElement(
              "defs",
              null,
              O.createElement(
                "filter",
                {
                  id: "filter0_i_1120_26195",
                  x: 10.9004,
                  y: 6.13013,
                  width: 10.5205,
                  height: 19.2,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -3.71214, dy: -3.09345 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_1120_26195" })
              ),
              O.createElement(
                "filter",
                {
                  id: "filter1_i_1120_26195",
                  x: 10.9531,
                  y: 9.28613,
                  width: 10.4678,
                  height: 12.73,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                O.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                O.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                O.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                O.createElement("feOffset", { dx: -4.33083 }),
                O.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                O.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" }),
                O.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_1120_26195" })
              )
            ))
        );
      }
      var Pu = O.forwardRef(Tu);
      r.p;
      var Bu = "\n  height: 32px;\n  width: 32px;\n",
        Au = (0, S.Z)(Zu, { target: "e3hquw56" })(Bu, ";"),
        Du = (0, S.Z)(Pu, { target: "e3hquw55" })(Bu, ";"),
        Fu = (0, S.Z)("div", { target: "e3hquw54" })({
          name: "o13bhk",
          styles:
            "display:flex;align-content:center;justify-content:flex-start;align-items:center;padding:12px 24px;border-bottom:1px solid #bac0ca"
        }),
        Iu = (0, S.Z)("span", { target: "e3hquw53" })({ name: "o7nnmj", styles: "margin-right:16px" }),
        Ru = (0, S.Z)(Iu, { target: "e3hquw52" })({
          name: "cavj28",
          styles:
            "p{font-style:normal;font-weight:600;font-size:16px;line-height:24px;color:#1b283c;}span{font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:rgba(64, 82, 109, 0.7);}"
        }),
        Vu = (0, S.Z)("span", { target: "e3hquw51" })({ name: "1o3nkn", styles: "margin-left:auto" }),
        Wu = (0, S.Z)(Sa.e.RedButton, { target: "e3hquw50" })({ name: "1bmnxg7", styles: "white-space:nowrap" }),
        Hu = function (e) {
          var t = e.device,
            r = t.isWeb,
            n = t.label,
            o = t.lastAccess,
            i = e.language,
            a = e.onButtonClick,
            s = new Date(1e3 * o).toLocaleDateString(i),
            l = (0, F.I0)(),
            c = new Date(1e3 * o).toLocaleTimeString(i);
          return (0, G.jsx)(
            Fu,
            null,
            (0, G.jsx)(Iu, null, r ? (0, G.jsx)(Au, null) : (0, G.jsx)(Du, null)),
            (0, G.jsx)(
              Ru,
              null,
              (0, G.jsx)("p", null, r ? (0, G.jsx)(M.Trans, { id: "Computer" }) : (0, G.jsx)(M.Trans, { id: "Mobile" }), ": ", n),
              (0, G.jsx)(
                "span",
                null,
                (0, G.jsx)(M.Trans, { id: "Last access" }),
                ": ",
                (function (e, t) {
                  var r = new Date(),
                    n = new Date(r);
                  return (
                    n.setDate(n.getDate() - 1),
                    e === r.toLocaleDateString(t)
                      ? (0, G.jsx)(M.Trans, { id: "Today" })
                      : e === n.toLocaleDateString(t)
                      ? (0, G.jsx)(M.Trans, { id: "Yesterday" })
                      : e
                  );
                })(s, i),
                ", ",
                c
              )
            ),
            (0, G.jsx)(
              Vu,
              null,
              (0, G.jsx)(
                Wu,
                {
                  onClick: function () {
                    a(), l(R.B.sendTracking(_a.o5));
                  }
                },
                (0, G.jsx)(M.Trans, { id: "Turn on multifactor authentication" })
              )
            )
          );
        },
        Uu = O.memo(Hu),
        zu = function (e) {
          var t = e.numberOfEnabledMfaProviders,
            r = e.numberOfDevices;
          return t && r
            ? (0, G.jsx)(M.Trans, {
                id: "Turn multifactor authentication back on for these devices to <0>improve your score by {numberOfDevices}%</0>.",
                values: { numberOfDevices: r },
                components: [(0, G.jsx)(lc.ImproveScore, null)]
              })
            : t && !r
            ? (0, G.jsx)(M.Trans, {
                id: "You don\u2019t have any trusted devices. Multifactor authentication is not yet enabled for your LastPass account."
              })
            : (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "You don\u2019t have any trusted devices. Multifactor authentication is not yet enabled for your LastPass account."
                })
              );
        },
        Nu = function () {
          var e = (0, F.I0)(),
            t = function () {
              e(R.B.manageTrustedDevices());
            },
            r = (0, F.v9)(es.BX),
            n = (0, F.v9)(es.aE),
            o = (0, F.v9)(es.iB),
            i = n.length,
            a = o.length;
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(
              Nc,
              {
                icon: a && i ? zc.trustedDevice : zc.check,
                title: (0, G.jsx)(M.Trans, { id: "Trusted devices" }),
                subtitle: (0, G.jsx)("span", null, (0, G.jsx)(zu, { numberOfEnabledMfaProviders: a, numberOfDevices: i })),
                isCollapsed: !0
              },
              a > 0 &&
                n.map(function (e) {
                  return (0, G.jsx)(Uu, { device: e, language: r, key: e.lastAccess, onButtonClick: t });
                }),
              (0, G.jsx)(
                lc.Footer,
                null,
                (0, G.jsx)(
                  Sa.e.TertiaryButton,
                  { "data-automation-id": "show-other-mfa-options", onClick: t },
                  (0, G.jsx)(M.Trans, { id: "Manage your devices" }),
                  (0, G.jsx)(lc.ExportIcon, { src: qc, width: 12 })
                ),
                (0, G.jsx)(
                  lc.LinkUnderline,
                  {
                    className: "learn-more",
                    target: "_blank",
                    href: "http://link.lastpass.com/trusted-devices-account-settings",
                    rel: "noopener noreferrer",
                    onClick: function () {
                      e(R.B.sendTracking(_a.V_));
                    }
                  },
                  (0, G.jsx)(M.Trans, { id: "Learn more about trusted devices" })
                )
              )
            )
          );
        },
        qu = r(18950),
        Gu = function (e) {
          var t = e.riskType.length ? e.riskType : [];
          return (0, G.jsx)(
            O.Fragment,
            null,
            t.includes(_n.g.NOT_MONITORED) &&
              (0, G.jsx)(
                $l.u,
                {
                  tooltip: { id: "You\u2019ve chosen to temporarily stop dark web monitoring this site." },
                  position: "top",
                  minWidth: 215
                },
                (0, G.jsx)(
                  oe.C,
                  { colors: { backgroundColor: "neutral1", textColor: "default" } },
                  (0, G.jsx)(M.Trans, { id: "Not monitored" })
                )
              ),
            t.includes(_n.g.BLANK) &&
              (0, G.jsx)(
                $l.u,
                { tooltip: { id: "You haven\u2019t saved a password for this site." }, position: "top", minWidth: 215 },
                (0, G.jsx)(
                  oe.C,
                  { colors: { backgroundColor: "surfaceColorDangerSecondary", textColor: "typeColorDanger" } },
                  (0, G.jsx)(M.Trans, { id: "Missing" })
                )
              ),
            t.includes(_n.g.EXCLUDED) &&
              (0, G.jsx)(
                $l.u,
                {
                  tooltip: { id: "You've chosen to exclude this password from your security score calculation." },
                  position: "top",
                  minWidth: 215
                },
                (0, G.jsx)(oe.C, { colors: { backgroundColor: "neutral1", textColor: "default" } }, (0, G.jsx)(M.Trans, { id: "Excluded" }))
              ),
            t.includes(_n.g.WEAK) &&
              (0, G.jsx)(
                $l.u,
                {
                  tooltip: { id: "You\u2019re probably using a common phrase, word, or keyboard pattern." },
                  position: "top",
                  minWidth: 225
                },
                (0, G.jsx)(
                  oe.C,
                  { colors: { backgroundColor: "surfaceColorDangerSecondary", textColor: "typeColorDanger" } },
                  (0, G.jsx)(M.Trans, { id: "Weak" })
                )
              ),
            t.includes(_n.g.DUPLICATE) &&
              (0, G.jsx)(
                $l.u,
                {
                  tooltip: { id: "The more places you use a password, the weaker it becomes. Each site should have a unique password." },
                  position: "top",
                  minWidth: 215
                },
                (0, G.jsx)(
                  oe.C,
                  { colors: { backgroundColor: "surfaceColorDangerSecondary", textColor: "typeColorDanger" } },
                  (0, G.jsx)(M.Trans, { id: "Reused" })
                )
              ),
            t.includes(_n.g.BREACHED) &&
              (0, G.jsx)(
                $l.u,
                {
                  tooltip: { id: "This site has been breached. Hackers may now have this address. Take action now!" },
                  position: "top",
                  minWidth: 215
                },
                (0, G.jsx)(
                  oe.C,
                  { colors: { backgroundColor: "surfaceColorDangerSecondary", textColor: "typeColorDanger" } },
                  (0, G.jsx)(M.Trans, { id: "Breached" })
                )
              ),
            0 === t.length &&
              (0, G.jsx)(
                $l.u,
                { tooltip: { id: "Secure password" }, position: "top", minWidth: 112 },
                (0, G.jsx)(
                  oe.C,
                  { colors: { backgroundColor: "surfaceColorSuccessSecondary", textColor: "typeColorSuccess" } },
                  (0, G.jsx)(M.Trans, { id: "Secure" })
                )
              )
          );
        },
        _u = function (e) {
          return Number(e) !== Number(_n.g.WEAK);
        },
        Yu = function (e) {
          return Number(e) !== Number(_n.g.DUPLICATE);
        };
      var Xu,
        Ku = (0, S.Z)("div", { target: "eqqh7sa7" })(
          "align-items:center;border-bottom:1px solid ",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";box-sizing:border-box;",
          function (e) {
            return e.aid === e.id
              ? "border: 1px solid #D32D27;box-shadow: inset 0px -1px 0px #DCDFE4;border-radius: 4px;background:rgba(211, 45, 39, 0.1);"
              : "";
          },
          " display:flex;flex-direction:row;justify-content:space-between;min-height:64px;padding:",
          function (e) {
            return e.origin === Ea.a.PreviewTable ? "18px" : "10px";
          },
          " 24px;position:relative;"
        ),
        Ju = "\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n",
        Qu = (0, S.Z)("div", { target: "eqqh7sa6" })(
          "align-items:center;display:flex;flex-direction:row;flex:0 1 ",
          function (e) {
            return e.width ? "".concat(e.width, "%") : "auto";
          },
          ";justify-content:",
          function (e) {
            return e.justifyContent ? e.justifyContent : "flex-start";
          },
          ";min-width:0;"
        ),
        $u = (0, S.Z)("div", { target: "eqqh7sa5" })({ name: "y3vq6d", styles: "height:32px;margin-right:16px" }),
        ed = (0, S.Z)("p", { target: "eqqh7sa4" })(
          "font-style:normal;font-weight:600;font-size:16px;line-height:24px;color:#1b283c;",
          Ju,
          ";"
        ),
        td = (0, S.Z)("p", { target: "eqqh7sa3" })(
          "font-style:normal;font-weight:400;font-size:12px;line-height:20px;color:rgba(64, 82, 109, 0.7);",
          Ju,
          ";"
        ),
        rd = (0, S.Z)("span", { target: "eqqh7sa2" })(le.q1, " margin-right:8px;width:2em;display:inline-block;text-align:right;"),
        nd = (0, S.Z)(xe, { target: "eqqh7sa1" })({ name: "1a87xup", styles: "margin-right:20px;width:100%" }),
        od = (0, S.Z)("div", { target: "eqqh7sa0" })({ name: "186yvhs", styles: "flex-direction:column;width:calc(100% - 60px)" }),
        id = function (e) {
          var t = (0, ce.B)(),
            r = (0, O.useState)(
              (function (e) {
                var t = (top && top.location.search) || location.search;
                return 0 === t.indexOf("?cmd=openweakpws:")
                  ? (e.setPasswordSecurityFilterType(jo.Weak), t.substring(17))
                  : 0 === t.indexOf("?cmd=openduppws:")
                  ? (e.setPasswordSecurityFilterType(jo.Duplicate), t.substring(16))
                  : "";
              })(t)
            ),
            n = (0, E.Z)(r, 2),
            o = n[0],
            i = n[1],
            a = e.isSmallScreen ? Li.Large : Li.Big,
            s = (function (e, t) {
              var r,
                n = (0, rt.Z)(e).filter(_u),
                o = (0, rt.Z)(e).filter(Yu),
                i = ((r = {}),
                (0, Ds.Z)(r, jo.AllPasswords, n),
                (0, Ds.Z)(r, jo.AllAtRiskPasswords, n),
                (0, Ds.Z)(r, jo.Weak, o),
                (0, Ds.Z)(r, jo.Duplicate, n),
                (0, Ds.Z)(r, jo.Excluded, n),
                (0, Ds.Z)(r, jo.Breached, n),
                (0, Ds.Z)(r, jo.NotMonitored, n),
                r)[t];
              return i && e.length > 2 ? i : e;
            })(e.riskType, e.reportFilterType || jo.Secure);
          return (0, G.jsx)(
            Ku,
            { aid: o, id: e.id, origin: e.origin },
            (0, G.jsx)(
              Qu,
              { width: a },
              (0, G.jsx)($u, null, (0, G.jsx)(Gn.P, { url: e.vaultPassword.loginUrl, default: Pi.r })),
              (0, G.jsx)(
                od,
                null,
                (0, G.jsx)(ed, null, e.vaultPassword.name),
                e.origin === Ea.a.PreviewTable && (0, G.jsx)(td, null, e.vaultPassword.username)
              )
            ),
            e.origin === Ea.a.ReportTable && (0, G.jsx)(Qu, { width: a }, (0, G.jsx)(td, null, e.vaultPassword.username)),
            !e.isSmallScreen &&
              (0, G.jsx)(
                Qu,
                { width: Li.Big },
                e.processing
                  ? (0, G.jsx)(nd, { opacity: "1" })
                  : (0, G.jsx)(
                      O.Fragment,
                      null,
                      (0, Bi.fN)(e.vaultPassword)
                        ? (0, G.jsx)(
                            O.Fragment,
                            null,
                            (0, G.jsx)(
                              rd,
                              null,
                              e.passwordStrength === Number(e.passwordStrength)
                                ? "".concat(Math.round(e.passwordStrength), "%")
                                : (0, G.jsx)(M.Trans, { id: "N/A" })
                            ),
                            (0, G.jsx)(Oi._, { vaultPassword: e.vaultPassword })
                          )
                        : (0, G.jsx)(
                            O.Fragment,
                            null,
                            e.riskType.includes(_n.g.BREACHED) ? (0, G.jsx)(rd, null, "0%") : (0, G.jsx)(M.Trans, { id: "N/A" })
                          )
                    )
              ),
            (0, G.jsx)(Qu, { width: a }, e.processing ? (0, G.jsx)(nd, { opacity: "0.75" }) : (0, G.jsx)(Gu, { riskType: s })),
            (0, G.jsx)(
              Qu,
              {
                width: e.isSiteSecurityPage ? a : Li.Large,
                onClick: function () {
                  return i("");
                }
              },
              e.processing
                ? (0, G.jsx)(nd, { opacity: "0.5" })
                : !!s.length &&
                    (0, G.jsx)(Ti.hL, {
                      riskType: s,
                      vaultPassword: e.vaultPassword,
                      source: Xn.hq.SECURITY_DASHBOARD,
                      showPasswordChangeHintDialog: e.showPasswordChangeHintDialog
                    }),
              (0, G.jsx)(ms, { vaultPassword: e.vaultPassword, origin: e.origin })
            )
          );
        },
        ad = top ? top.window : window,
        sd = function (e, t) {
          var r = function () {
            return (function (e, t) {
              Xu ||
                (Xu = setTimeout(function () {
                  e(), Xu && clearTimeout(Xu), (Xu = null);
                }, t));
            })(e, t);
          };
          (0, O.useEffect)(function () {
            return (
              ad.addEventListener("resize", r, { passive: !0 }),
              function () {
                ad.removeEventListener("resize", r);
              }
            );
          }, []);
        },
        ld = function () {
          return (top && top.window.innerWidth < 1154) || !1;
        },
        cd = function () {
          var e = (0, O.useState)(ld()),
            t = (0, E.Z)(e, 2),
            r = t[0],
            n = t[1];
          sd(function () {
            return n(ld());
          }, 1e3);
          var o = (0, F.v9)(es.dY),
            i = (0, F.v9)(es.Fo),
            a = vl(i, jo.AllPasswords, Ea.a.PreviewTable),
            s = (0, Bi.Np)(a, Object.values(o)),
            l = (0, rt.Z)(s).sort(function (e, t) {
              return Xs(e, t, o, { column: 3, reverse: !1 });
            });
          return (
            l.length > 3 && (l.length = 3),
            (0, G.jsx)(
              O.Fragment,
              null,
              l.map(function (e) {
                var t = e.id,
                  n = e.score,
                  i = e.risk,
                  a = e.processing;
                return o[t]
                  ? (0, G.jsx)(id, {
                      key: t,
                      id: t,
                      vaultPassword: o[t],
                      passwordStrength: n,
                      riskType: i,
                      processing: a,
                      showPasswordChangeHintDialog: !0,
                      isSmallScreen: r,
                      origin: Ea.a.PreviewTable,
                      reportFilterType: jo.AllAtRiskPasswords,
                      isSiteSecurityPage: !1
                    })
                  : null;
              })
            )
          );
        },
        ud = ["columnWidth", "columnType", "sortingState", "sortingEnabled", "automationId", "alwaysShowChevron"];
      var dd = (0, S.Z)("div", { target: "e1lxx7al3" })(
          "flex:0 1 ",
          function (e) {
            return e.width ? "".concat(e.width, "%") : "auto";
          },
          ";cursor:",
          function (e) {
            return e.pointer ? "pointer" : "default";
          },
          ";justify-content:flex-start;align-items:center;flex-direction:row;display:flex;min-width:0;"
        ),
        pd = (0, S.Z)("span", { target: "e1lxx7al2" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral600;
          },
          ";",
          le.q1,
          " line-height:1.33;font-size:14px;margin-right:10px;"
        ),
        fd = { name: "cn55mb", styles: "height:11px" },
        md = (0, S.Z)(mi, { target: "e1lxx7al1" })(fd, ";"),
        hd = (0, S.Z)(li, { target: "e1lxx7al0" })(fd, ";"),
        Cd = (function (e) {
          return (e[(e.Small = 10)] = "Small"), (e[(e.Medium = 20)] = "Medium"), (e[(e.Big = 25)] = "Big"), e;
        })({}),
        xd = function (e) {
          var t = e.columnWidth,
            r = e.columnType,
            n = e.sortingState,
            o = e.sortingEnabled,
            i = void 0 === o || o,
            a = e.automationId,
            s = e.alwaysShowChevron,
            l = (0, D.Z)(e, ud),
            c = (0, ce.B)(),
            u = (0, O.useState)(!0),
            d = (0, E.Z)(u, 2),
            p = d[0],
            f = d[1],
            m = (0, O.useState)(s),
            h = (0, E.Z)(m, 2),
            C = h[0],
            x = h[1];
          (0, O.useEffect)(
            function () {
              var e = !!n && n.column === r;
              s || x(e), e || f(!0);
            },
            [n, r, s]
          );
          var g = function () {
            i && (f(!p), c.setReportSortingState({ column: r, reverse: p }));
          };
          return (0, G.jsx)(
            dd,
            {
              width: t,
              pointer: i,
              onClick: function () {
                g();
              }
            },
            (0, G.jsx)(
              pd,
              {
                "data-automation-id": a,
                onKeyDown: function (e) {
                  i &&
                    (" " === e.key || "Enter" === e.key
                      ? g()
                      : "ArrowUp" === e.key
                      ? (f(!1), c.setReportSortingState({ column: r, reverse: !1 }))
                      : "ArrowDown" === e.key && (f(!0), c.setReportSortingState({ column: r, reverse: !0 })));
                },
                tabIndex: C ? 0 : -1
              },
              l.children
            ),
            C ? (p ? (0, G.jsx)(hd, null) : (0, G.jsx)(md, null)) : null
          );
        },
        gd = (0, S.Z)("div", { target: "eil2raj0" })(
          "border-bottom:1px solid ",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";justify-content:space-between;box-sizing:border-box;align-items:center;flex-direction:row;padding:10px 16px;min-height:35px;display:flex;height:56px;"
        ),
        wd = function (e) {
          var t = e.reportSortingState,
            r = e.isSmallScreen;
          return (0, G.jsx)(
            gd,
            { "data-automation-id": "password-security-report-header" },
            (0, G.jsx)(
              xd,
              {
                columnWidth: Cd.Medium,
                sortingState: t,
                columnType: Zi.Website,
                automationId: "password-security-report-website",
                alwaysShowChevron: !0
              },
              (0, G.jsx)(M.Trans, { id: "Website" })
            ),
            (0, G.jsx)(
              xd,
              {
                columnWidth: Cd.Medium,
                sortingState: t,
                columnType: Zi.Username,
                automationId: "password-security-report-username",
                alwaysShowChevron: !0
              },
              (0, G.jsx)(M.Trans, { id: "Username" })
            ),
            !r &&
              (0, G.jsx)(
                xd,
                {
                  columnWidth: Cd.Medium,
                  sortingState: t,
                  columnType: Zi.Score,
                  automationId: "password-security-report-password-strength",
                  alwaysShowChevron: !0
                },
                (0, G.jsx)(M.Trans, { id: "Password strength" })
              ),
            (0, G.jsx)(
              xd,
              {
                columnWidth: Cd.Medium,
                sortingState: t,
                columnType: Zi.Risk,
                automationId: "password-security-report-risks",
                alwaysShowChevron: !0
              },
              (0, G.jsx)(M.Trans, { id: "Risks" })
            ),
            (0, G.jsx)(
              xd,
              {
                columnWidth: Cd.Medium,
                columnType: Zi.Action,
                sortingEnabled: !1,
                automationId: "password-security-report-actions-to-take",
                alwaysShowChevron: !1
              },
              (0, G.jsx)(M.Trans, { id: "Actions to take" })
            )
          );
        };
      var yd,
        vd,
        jd = {
          TableContainer: (0, S.Z)("div", { target: "e3owbrz0" })({
            name: "8ix9d9",
            styles: "border:1px solid #d7dbe0;border-radius:8px;margin-top:20px"
          })
        },
        bd = function (e, t, r) {
          var n = Object.values(e),
            o = Object.values(t).filter(function (e) {
              var t = n.findIndex(function (t) {
                return t.id === e.id;
              });
              return n[t] && !n[t].record.individualShareSource && !n[t].record.sharedFolderId;
            }),
            i = vl(o, r, Ea.a.ReportTable);
          return (0, Bi.Np)(i, n);
        },
        kd = function () {
          return (top && top.window.innerWidth < 1154) || !1;
        },
        Ld = function () {
          var e = (0, O.useState)(kd()),
            t = (0, E.Z)(e, 2),
            r = t[0],
            n = t[1];
          sd(function () {
            return n(kd());
          }, 1e3);
          var o = (0, F.v9)(es.Xg),
            i = (0, F.v9)(es.ZC),
            a = (0, F.v9)(es.dY),
            s = (0, F.v9)(es.XV),
            l = bd(a, (0, F.v9)(es.Fo), i),
            c = l.sort(function (e, t) {
              return Xs(e, t, a, o);
            }),
            u = function (e) {
              return (
                e.risk.length > 1 &&
                e.risk.some(function (e) {
                  return e === _n.g.EXCLUDED || e === _n.g.NOT_MONITORED;
                })
              );
            },
            d = function (e) {
              return e.risk.toString();
            },
            p = c.filter(u),
            f = c.filter(function (e) {
              return !u(e);
            }),
            m = Math.max(f.map(d).indexOf(String(_n.g.EXCLUDED)), 0),
            h = Math.max(f.map(d).indexOf(String(_n.g.NOT_MONITORED)), 0),
            C = Math.max(f.map(d).indexOf(""), 0),
            x = m || h || C || f.length;
          return (
            f.splice.apply(f, [x, 0].concat((0, rt.Z)(p))),
            l.length > 0
              ? (0, G.jsx)(
                  jd.TableContainer,
                  null,
                  (0, G.jsx)(wd, { reportSortingState: o, isSmallScreen: r }),
                  (Number(o.column) !== Number(Zi.Risk) ? c : f).map(function (e) {
                    var t = e.id,
                      n = e.score,
                      o = e.risk,
                      l = e.processing;
                    return a[t]
                      ? (0, G.jsx)(id, {
                          key: t,
                          id: t,
                          vaultPassword: a[t],
                          passwordStrength: n,
                          reportFilterType: i,
                          riskType: o,
                          processing: l,
                          showPasswordChangeHintDialog: s,
                          isSmallScreen: r,
                          origin: Ea.a.ReportTable,
                          isSiteSecurityPage: !0
                        })
                      : (0, G.jsx)(O.Fragment, null);
                  })
                )
              : (0, G.jsx)(O.Fragment, null)
          );
        },
        Ed = r(75642),
        Zd = ["title", "titleId"];
      function Sd() {
        return (
          (Sd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Sd.apply(this, arguments)
        );
      }
      function Md(e, t) {
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
      function Od(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Md(e, Zd);
        return O.createElement(
          "svg",
          Sd(
            {
              width: 48,
              height: 48,
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          yd || (yd = O.createElement("circle", { cx: 24, cy: 24, r: 24, fill: "#E7F7F2" })),
          vd ||
            (vd = O.createElement("path", {
              d: "M24 14C22.0222 14 20.0888 14.5865 18.4443 15.6853C16.7998 16.7841 15.5181 18.3459 14.7612 20.1732C14.0043 22.0004 13.8063 24.0111 14.1922 25.9509C14.578 27.8907 15.5304 29.6725 16.9289 31.0711C18.3275 32.4696 20.1093 33.422 22.0491 33.8078C23.9889 34.1937 25.9996 33.9957 27.8268 33.2388C29.6541 32.4819 31.2159 31.2002 32.3147 29.5557C33.4135 27.9112 34 25.9778 34 24C33.9969 21.3488 32.9424 18.807 31.0677 16.9323C29.193 15.0576 26.6512 14.0031 24 14V14ZM29.7725 20.8333L24.0683 28.5742C24.001 28.6635 23.9165 28.7386 23.8199 28.7949C23.7232 28.8513 23.6163 28.8878 23.5054 28.9024C23.3944 28.917 23.2817 28.9093 23.1738 28.8799C23.0658 28.8504 22.9648 28.7997 22.8767 28.7308L18.8033 25.4742C18.7179 25.4058 18.6467 25.3212 18.5939 25.2253C18.5411 25.1294 18.5077 25.0241 18.4957 24.9153C18.4713 24.6955 18.5352 24.4751 18.6733 24.3025C18.8115 24.1299 19.0125 24.0192 19.2322 23.9948C19.452 23.9705 19.6724 24.0344 19.845 24.1725L23.2417 26.89L28.4308 19.8475C28.4933 19.7538 28.5741 19.6737 28.6684 19.612C28.7627 19.5504 28.8686 19.5085 28.9795 19.489C29.0904 19.4694 29.2042 19.4725 29.3139 19.4981C29.4236 19.5238 29.527 19.5714 29.6177 19.6381C29.7085 19.7048 29.7848 19.7892 29.8421 19.8862C29.8993 19.9833 29.9363 20.0909 29.9507 20.2026C29.9652 20.3143 29.9569 20.4278 29.9262 20.5362C29.8956 20.6446 29.8433 20.7457 29.7725 20.8333Z",
              fill: "#008A63"
            }))
        );
      }
      var Td = O.forwardRef(Od),
        Pd = (r.p, r(47503));
      var Bd = (0, S.Z)(Sa.e.RedButton, { target: "e1flha0m5" })({ name: "1gkzqjm", styles: "border-radius:4px;height:40px" }),
        Ad = (0, S.Z)("div", { target: "e1flha0m4" })({
          name: "yttoqk",
          styles: "font-size:20px;line-height:24px;font-weight:600;margin-top:24px;margin-bottom:24px"
        }),
        Dd = (0, S.Z)("div", { target: "e1flha0m3" })({
          name: "10751jt",
          styles: "margin-bottom:24px;font-weight:600;color:#008a63;font-size:16px;line-height:24px"
        }),
        Fd = (0, S.Z)("div", { target: "e1flha0m2" })({
          name: "124yyf9",
          styles: "margin-bottom:24px;font-weight:400;font-size:16px;line-height:24px"
        }),
        Id = (0, S.Z)("div", { target: "e1flha0m1" })({ name: "skgbeu", styles: "display:flex;justify-content:flex-end" }),
        Rd = (0, S.Z)("div", { target: "e1flha0m0" })({ name: "vxuddk", styles: "padding:24px" }),
        Vd = function (e) {
          var t = e.onClickNextButton;
          return (0, G.jsx)(
            Pd.A,
            { width: "590px", notDismissible: !0 },
            (0, G.jsx)(
              Rd,
              null,
              (0, G.jsx)(Td, null),
              (0, G.jsx)(Ad, null, (0, G.jsx)(M.Trans, { id: "Dark web monitoring turned on. Congrats!" })),
              (0, G.jsx)(Dd, null, (0, G.jsx)(M.Trans, { id: "You just improved your security score by 10%." })),
              (0, G.jsx)(Fd, null, (0, G.jsx)(M.Trans, { id: "Let\u2019s see if you have any breaches..." })),
              (0, G.jsx)(
                Id,
                null,
                (0, G.jsx)(
                  Bd,
                  {
                    onClick: function (e) {
                      return t(e);
                    },
                    "data-automation-id": "dwm-turned-on-dialog-next-button"
                  },
                  (0, G.jsx)(M.Trans, { id: "Next" }),
                  " \u2192"
                )
              )
            )
          );
        },
        Wd = r(76648);
      var Hd,
        Ud,
        zd,
        Nd,
        qd,
        Gd,
        _d,
        Yd,
        Xd,
        Kd,
        Jd,
        Qd,
        $d,
        ep,
        tp,
        rp,
        np,
        op,
        ip,
        ap,
        sp,
        lp,
        cp,
        up,
        dp,
        pp,
        fp,
        mp,
        hp,
        Cp,
        xp,
        gp,
        wp,
        yp,
        vp,
        jp,
        bp,
        kp,
        Lp,
        Ep,
        Zp,
        Sp,
        Mp = (0, S.Z)(Sa.e.RedButton, { target: "egsuw005" })({ name: "1gkzqjm", styles: "border-radius:4px;height:40px" }),
        Op = (0, S.Z)("div", { target: "egsuw004" })({
          name: "yttoqk",
          styles: "font-size:20px;line-height:24px;font-weight:600;margin-top:24px;margin-bottom:24px"
        }),
        Tp = (0, S.Z)("div", { target: "egsuw003" })({
          name: "93nkkb",
          styles: "margin-bottom:24px;font-weight:600;color:#d32d27;font-size:16px;line-height:24px"
        }),
        Pp = (0, S.Z)("div", { target: "egsuw002" })({
          name: "124yyf9",
          styles: "margin-bottom:24px;font-weight:400;font-size:16px;line-height:24px"
        }),
        Bp = (0, S.Z)("div", { target: "egsuw001" })({ name: "skgbeu", styles: "display:flex;justify-content:flex-end" }),
        Ap = (0, S.Z)("div", { target: "egsuw000" })({ name: "vxuddk", styles: "padding:24px" }),
        Dp = function (e) {
          var t = e.onClickRetryButton,
            r = e.onClickCancelButton,
            n = e.onDismissClick;
          return (0, G.jsx)(
            Pd.A,
            { width: "480px", notDismissible: !1, onDismissClick: n, "data-automation-id": "dwm-something-went-wrong-modal" },
            (0, G.jsx)(
              Ap,
              null,
              (0, G.jsx)(Wd.r, null),
              (0, G.jsx)(Op, null, (0, G.jsx)(M.Trans, { id: "Something went wrong" })),
              (0, G.jsx)(Pp, null, (0, G.jsx)(M.Trans, { id: "Sorry, we couldn\u2019t complete your request." })),
              (0, G.jsx)(Tp, null, (0, G.jsx)(M.Trans, { id: "Please try again." })),
              (0, G.jsx)(
                Bp,
                null,
                (0, G.jsx)(
                  Sa.e.DefaultButton,
                  { big: !0, onClick: r, "data-automation-id": "dwm-something-went-wrong-cancel-button" },
                  (0, G.jsx)(M.Trans, { id: "Cancel" })
                ),
                (0, G.jsx)(
                  Mp,
                  { onClick: t, "data-automation-id": "dwm-something-went-wrong-retry-button" },
                  (0, G.jsx)(M.Trans, { id: "Try again" })
                )
              )
            )
          );
        },
        Fp = ["title", "titleId"];
      function Ip() {
        return (
          (Ip = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Ip.apply(this, arguments)
        );
      }
      function Rp(e, t) {
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
      function Vp(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Rp(e, Fp);
        return O.createElement(
          "svg",
          Ip(
            {
              width: 152,
              height: 138,
              viewBox: "0 0 152 138",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Hd ||
            (Hd = O.createElement("path", {
              d: "M75.8018 133C111.148 133 139.802 104.346 139.802 69C139.802 33.6538 111.148 5 75.8018 5C40.4555 5 11.8018 33.6538 11.8018 69C11.8018 104.346 40.4555 133 75.8018 133Z",
              fill: "#EBF5FB"
            })),
          Ud ||
            (Ud = O.createElement("path", {
              d: "M84.6534 11.1129C78.7713 10.2212 72.7884 10.2212 66.9062 11.1129",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          zd ||
            (zd = O.createElement("path", {
              d: "M21.4736 47.0592C23.3972 42.3054 25.938 37.8253 29.0304 33.7344",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Nd ||
            (Nd = O.createElement("path", {
              d: "M84.6534 126.888C78.7713 127.78 72.7884 127.78 66.9062 126.888",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          qd ||
            (qd = O.createElement("path", {
              d: "M21.4736 90.9429C23.3972 95.6967 25.938 100.177 29.0304 104.268",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Gd ||
            (Gd = O.createElement("path", {
              d: "M130.082 47.0592C128.157 42.3056 125.616 37.8256 122.523 33.7344",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          _d ||
            (_d = O.createElement("path", {
              d: "M130.082 90.9429C128.157 95.6964 125.616 100.176 122.523 104.268",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Yd ||
            (Yd = O.createElement("path", {
              d: "M37.2578 69.0015H48.4194",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Xd ||
            (Xd = O.createElement("path", {
              d: "M53.7266 32.28L60.4674 43.5056",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Kd ||
            (Kd = O.createElement("path", {
              d: "M53.7266 105.723L60.4674 94.4976",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Jd ||
            (Jd = O.createElement("path", {
              d: "M114.302 69.0015H103.141",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Qd ||
            (Qd = O.createElement("path", {
              d: "M97.8316 32.28L91.0908 43.5056",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          $d ||
            ($d = O.createElement("path", {
              d: "M97.8316 105.723L91.0908 94.4976",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ep ||
            (ep = O.createElement("path", {
              d: "M33.0489 79.7952C33.0472 80.3756 32.8159 80.9317 32.4055 81.3422C31.995 81.7526 31.4389 81.9839 30.8585 81.9856H3.48568C2.90554 81.9835 2.3498 81.752 1.93973 81.3416C1.52966 80.9312 1.29856 80.3753 1.29688 79.7952V61.1824H33.0489V79.7952Z",
              fill: "#EDBF0E",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          tp ||
            (tp = O.createElement("path", {
              d: "M33.0489 61.1824H1.29688V58.2048C1.29856 57.6247 1.52966 57.0688 1.93973 56.6584C2.3498 56.248 2.90554 56.0165 3.48568 56.0144H30.8585C31.4389 56.0161 31.995 56.2474 32.4055 56.6578C32.8159 57.0682 33.0472 57.6244 33.0489 58.2048V61.1824Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          rp ||
            (rp = O.createElement("path", {
              d: "M61.4161 25.7171C61.4144 26.2975 61.1831 26.8536 60.7726 27.264C60.3622 27.6745 59.8061 27.9058 59.2257 27.9075H31.8529C31.2727 27.9053 30.717 27.6738 30.3069 27.2635C29.8968 26.8531 29.6657 26.2972 29.6641 25.7171V7.10425H61.4161V25.7171Z",
              fill: "#17AF84",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          np ||
            (np = O.createElement("path", {
              d: "M61.4161 7.10428H29.6641V4.12668C29.6657 3.54654 29.8968 2.99063 30.3069 2.58026C30.717 2.16989 31.2727 1.93839 31.8529 1.93628H59.2257C59.8061 1.93797 60.3622 2.16928 60.7726 2.5797C61.1831 2.99011 61.4144 3.54627 61.4161 4.12668V7.10428Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          op ||
            (op = O.createElement("path", {
              d: "M59.6534 133.875C59.6517 134.455 59.4206 135.011 59.0105 135.421C58.6004 135.831 58.0447 136.063 57.4646 136.065H30.0918C29.5114 136.063 28.9552 135.832 28.5448 135.421C28.1344 135.011 27.9031 134.455 27.9014 133.875V115.262H59.6534V133.875Z",
              fill: "#F7DD7B",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ip ||
            (ip = O.createElement("path", {
              d: "M59.6534 115.262H27.9014V112.284C27.9031 111.704 28.1344 111.148 28.5448 110.737C28.9552 110.327 29.5114 110.095 30.0918 110.094H57.4646C58.0447 110.096 58.6004 110.327 59.0105 110.738C59.4206 111.148 59.6517 111.704 59.6534 112.284V115.262Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ap ||
            (ap = O.createElement("path", {
              d: "M118.953 79.7952C118.955 80.3756 119.186 80.9317 119.597 81.3422C120.007 81.7526 120.563 81.9839 121.144 81.9856H148.516C149.096 81.9835 149.652 81.752 150.062 81.3416C150.472 80.9312 150.703 80.3753 150.705 79.7952V61.1824H118.953V79.7952Z",
              fill: "#7C7FD6",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          sp ||
            (sp = O.createElement("path", {
              d: "M118.953 61.1824H150.705V58.2048C150.703 57.6247 150.472 57.0688 150.062 56.6584C149.652 56.248 149.096 56.0165 148.516 56.0144H121.144C120.563 56.0161 120.007 56.2474 119.597 56.6578C119.186 57.0682 118.955 57.6244 118.953 58.2048V61.1824Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          lp ||
            (lp = O.createElement("path", {
              d: "M90.1455 25.7171C90.1468 26.2973 90.3777 26.8535 90.7879 27.2639C91.1981 27.6744 91.754 27.9058 92.3343 27.9075H119.707C120.288 27.9058 120.844 27.6745 121.254 27.264C121.664 26.8536 121.896 26.2975 121.897 25.7171V7.10425H90.1455V25.7171Z",
              fill: "#B0B2E6",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          cp ||
            (cp = O.createElement("path", {
              d: "M90.1455 7.10428H121.897V4.12668C121.896 3.54627 121.664 2.99011 121.254 2.5797C120.844 2.16928 120.288 1.93797 119.707 1.93628H92.3343C91.754 1.93797 91.1981 2.16934 90.7879 2.5798C90.3777 2.99025 90.1468 3.54641 90.1455 4.12668V7.10428Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          up ||
            (up = O.createElement("path", {
              d: "M91.9092 133.875C91.9109 134.455 92.1422 135.011 92.5526 135.421C92.963 135.832 93.5192 136.063 94.0996 136.065H121.471C122.051 136.063 122.607 135.832 123.018 135.421C123.428 135.011 123.659 134.455 123.661 133.875V115.262H91.9092V133.875Z",
              fill: "#E78C89",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          dp ||
            (dp = O.createElement("path", {
              d: "M91.9092 115.262H123.661V112.284C123.659 111.704 123.428 111.148 123.018 110.737C122.607 110.327 122.051 110.095 121.471 110.094H94.0996C93.5192 110.095 92.963 110.327 92.5526 110.737C92.1422 111.148 91.9109 111.704 91.9092 112.284V115.262Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          pp ||
            (pp = O.createElement("path", {
              d: "M100 69.2094C99.9969 73.9105 98.5996 78.505 95.9851 82.412C93.3706 86.319 89.6564 89.3631 85.312 91.1594C80.9676 92.9556 76.1882 93.4234 71.5779 92.5035C66.9677 91.5837 62.7338 89.3175 59.4114 85.9916C56.089 82.6656 53.8274 78.4292 52.9125 73.818C51.9976 69.2068 52.4705 64.4279 54.2715 60.0854C56.0724 55.7429 59.1205 52.032 63.0303 49.4217C66.9401 46.8114 71.5361 45.4191 76.2372 45.4207C82.5419 45.4274 88.5861 47.9367 93.0419 52.3973C97.4976 56.8578 100 62.9047 100 69.2094Z",
              fill: "#6CB4E4"
            })),
          fp ||
            (fp = O.createElement("path", {
              d: "M100 69.2091C100 70.0933 99.9505 70.9768 99.8516 71.8555C99.2072 66.0423 96.4419 60.6708 92.0849 56.7688C87.7279 52.8668 82.0852 50.7083 76.2364 50.7063C70.3875 50.7043 64.7433 52.859 60.3837 56.758C56.0241 60.6571 53.2552 66.0267 52.6068 71.8395C52.2454 68.625 52.544 65.3706 53.484 62.2755C54.4241 59.1804 55.986 56.3097 58.0741 53.8392C60.1622 51.3688 62.7325 49.3504 65.6277 47.9078C68.523 46.4652 71.6821 45.6286 74.9119 45.4494C78.1417 45.2701 81.374 45.7519 84.4111 46.8653C87.4482 47.9787 90.2261 49.7002 92.5747 51.9244C94.9234 54.1487 96.7933 56.8289 98.0702 59.8009C99.347 62.773 100.004 65.9744 100 69.2091V69.2091Z",
              fill: "#ECF5FB"
            })),
          mp ||
            (mp = O.createElement("path", {
              d: "M100 69.2094C99.9969 73.9105 98.5996 78.505 95.9851 82.412C93.3706 86.319 89.6564 89.3631 85.312 91.1594C80.9676 92.9556 76.1882 93.4234 71.5779 92.5035C66.9677 91.5837 62.7338 89.3175 59.4114 85.9916C56.089 82.6656 53.8274 78.4292 52.9125 73.818C51.9976 69.2068 52.4705 64.4279 54.2715 60.0854C56.0724 55.7429 59.1205 52.032 63.0303 49.4217C66.9401 46.8114 71.5361 45.4191 76.2372 45.4207C82.5419 45.4274 88.5861 47.9367 93.0419 52.3973C97.4976 56.8578 100 62.9047 100 69.2094Z",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          hp ||
            (hp = O.createElement("path", {
              d: "M86.4498 47.741L65.9922 90.6449",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Cp ||
            (Cp = O.createElement("path", {
              d: "M97.6726 79.4228L54.7686 58.9636",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          xp ||
            (xp = O.createElement("path", {
              d: "M99.9161 67.3283L62.7529 49.6067",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          gp ||
            (gp = O.createElement("path", {
              d: "M89.6882 88.7798L52.5234 71.0598",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          wp ||
            (wp = O.createElement("path", {
              d: "M86.9474 74.3072C92.5969 62.4594 92.3745 50.565 86.4507 47.7402C80.5268 44.9154 71.1446 52.23 65.4951 64.0778C59.8455 75.9255 60.0679 87.82 65.9918 90.6448C71.9156 93.4695 81.2978 86.155 86.9474 74.3072Z",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          yp ||
            (yp = O.createElement("path", {
              d: "M130.673 89.7076L125.308 95.0039L131.485 101.262L136.851 95.9659L130.673 89.7076Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          vp ||
            (vp = O.createElement("path", {
              d: "M149.217 106.704C150.154 107.652 150.675 108.933 150.666 110.266C150.658 111.599 150.12 112.874 149.172 113.81C148.223 114.746 146.942 115.267 145.609 115.259C144.276 115.25 143.002 114.713 142.065 113.764L131.475 103.037C131.359 102.92 131.268 102.781 131.206 102.628C131.144 102.475 131.112 102.311 131.113 102.146C131.114 101.981 131.148 101.818 131.212 101.666C131.276 101.514 131.37 101.376 131.487 101.26L136.852 95.9643C136.969 95.8485 137.108 95.757 137.261 95.6949C137.414 95.6328 137.577 95.6014 137.742 95.6026C137.907 95.6037 138.07 95.6373 138.222 95.7015C138.374 95.7657 138.511 95.8592 138.627 95.9766L149.217 106.704Z",
              fill: "#3B70D4"
            })),
          jp ||
            (jp = O.createElement("path", {
              d: "M147.565 114.879C147.964 113.96 148.08 112.943 147.896 111.958C147.713 110.973 147.239 110.065 146.536 109.352L135.946 98.6246C135.83 98.5071 135.692 98.4136 135.54 98.3494C135.388 98.2852 135.225 98.2516 135.06 98.2504C134.895 98.2493 134.731 98.2807 134.578 98.3428C134.426 98.4049 134.286 98.4964 134.169 98.6123L136.852 95.9643C136.969 95.8485 137.108 95.757 137.261 95.6949C137.414 95.6328 137.577 95.6014 137.742 95.6026C137.907 95.6037 138.07 95.6373 138.222 95.7015C138.374 95.7657 138.512 95.8592 138.627 95.9766L149.217 106.704C149.796 107.29 150.221 108.01 150.456 108.799C150.691 109.588 150.728 110.423 150.565 111.231C150.402 112.038 150.043 112.793 149.52 113.429C148.997 114.065 148.325 114.563 147.565 114.879V114.879Z",
              fill: "#264887"
            })),
          bp ||
            (bp = O.createElement("path", {
              d: "M149.217 106.704C150.154 107.652 150.675 108.933 150.666 110.266C150.658 111.599 150.12 112.874 149.172 113.81C148.223 114.746 146.942 115.267 145.609 115.259C144.276 115.25 143.002 114.713 142.065 113.764L131.475 103.037C131.359 102.92 131.268 102.781 131.206 102.628C131.144 102.475 131.112 102.311 131.113 102.146C131.114 101.981 131.148 101.818 131.212 101.666C131.276 101.514 131.37 101.376 131.487 101.26L136.852 95.9643C136.969 95.8485 137.108 95.757 137.261 95.6949C137.414 95.6328 137.577 95.6014 137.742 95.6026C137.907 95.6037 138.07 95.6373 138.222 95.7015C138.374 95.7657 138.511 95.8592 138.627 95.9766L149.217 106.704Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          kp ||
            (kp = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M136.323 76.7606C136.323 90.4704 125.209 101.584 111.5 101.584C97.7898 101.584 86.6758 90.4704 86.6758 76.7606C86.6758 63.0508 97.7898 51.9368 111.5 51.9368C125.209 51.9368 136.323 63.0508 136.323 76.7606ZM115.712 59.1919C125.208 61.4335 131.089 70.9488 128.848 80.4449C126.606 89.941 117.091 95.8218 107.595 93.5802C98.0986 91.3386 92.2177 81.8233 94.4593 72.3272C96.701 62.8312 106.216 56.9503 115.712 59.1919Z",
              fill: "#ECF5FB"
            })),
          Lp ||
            (Lp = O.createElement("path", {
              d: "M135.177 69.3001C132.241 63.8562 127.377 59.7051 121.539 57.6603C115.702 55.6155 109.311 55.8244 103.619 58.246C97.9275 60.6676 93.3454 65.1275 90.7706 70.7515C88.1959 76.3756 87.8142 82.7584 89.7003 88.6492C89.3206 87.9482 88.9701 87.2256 88.6488 86.4814C87.3723 83.4812 86.6993 80.259 86.6681 76.9987C86.637 73.7384 87.2483 70.5039 88.4671 67.4798C89.686 64.4557 91.4886 61.7014 93.7719 59.3739C96.0552 57.0465 98.7746 55.1916 101.775 53.9151C104.775 52.6387 107.997 51.9657 111.258 51.9345C114.518 51.9033 117.752 52.5146 120.776 53.7335C123.801 54.9523 126.555 56.7549 128.882 59.0383C131.21 61.3216 133.065 64.041 134.341 67.0412C134.658 67.7878 134.937 68.5431 135.179 69.3019",
              fill: "white"
            })),
          Ep ||
            (Ep = O.createElement("path", {
              d: "M111.5 101.584C125.209 101.584 136.323 90.4704 136.323 76.7606C136.323 63.0508 125.209 51.9368 111.5 51.9368C97.7898 51.9368 86.6758 63.0508 86.6758 76.7606C86.6758 90.4704 97.7898 101.584 111.5 101.584Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Zp ||
            (Zp = O.createElement(
              "g",
              { opacity: 0.3 },
              O.createElement("path", {
                d: "M128.565 80.4447C130.807 70.9487 124.926 61.4334 115.43 59.1918C105.934 56.9501 96.4186 62.831 94.177 72.3271C91.9354 81.8232 97.8162 91.3384 107.312 93.5801C116.808 95.8217 126.324 89.9408 128.565 80.4447Z",
                fill: "#47A1DE"
              }),
              O.createElement("path", {
                d: "M111.296 58.6441C107.801 58.6426 104.383 59.6781 101.477 61.6195C98.5697 63.561 96.3041 66.3212 94.9666 69.5507C93.629 72.7802 93.2796 76.334 93.9625 79.7622C94.6454 83.1904 96.3299 86.339 98.8029 88.8095L123.788 63.8261C122.15 62.1815 120.203 60.877 118.06 59.9877C115.916 59.0983 113.617 58.6417 111.296 58.6441V58.6441Z",
                fill: "#6CB4E4"
              })
            )),
          Sp ||
            (Sp = O.createElement("path", {
              d: "M128.619 80.7504C130.861 71.2543 124.98 61.739 115.484 59.4974C105.988 57.2558 96.4723 63.1367 94.2307 72.6328C91.9891 82.1288 97.87 91.6441 107.366 93.8857C116.862 96.1274 126.377 90.2465 128.619 80.7504Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      }
      var Wp,
        Hp,
        Up,
        zp,
        Np,
        qp,
        Gp,
        _p,
        Yp,
        Xp,
        Kp,
        Jp,
        Qp,
        $p,
        ef,
        tf,
        rf,
        nf,
        of,
        af,
        sf,
        lf,
        cf,
        uf,
        df,
        pf,
        ff,
        mf = O.forwardRef(Vp),
        hf = (r.p, ["title", "titleId"]);
      function Cf() {
        return (
          (Cf = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Cf.apply(this, arguments)
        );
      }
      function xf(e, t) {
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
      function gf(e, t) {
        var r = e.title,
          n = e.titleId,
          o = xf(e, hf);
        return O.createElement(
          "svg",
          Cf(
            {
              width: 114,
              height: 146,
              viewBox: "0 0 114 146",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Wp ||
            (Wp = O.createElement("path", {
              opacity: 0.15,
              d: "M57.6273 145.153C75.0471 145.153 89.1687 143.524 89.1687 141.514C89.1687 139.505 75.0471 137.875 57.6273 137.875C40.2075 137.875 26.0859 139.505 26.0859 141.514C26.0859 143.524 40.2075 145.153 57.6273 145.153Z",
              fill: "#004590"
            })),
          Hp ||
            (Hp = O.createElement("path", {
              d: "M58.2566 45.3621C57.6876 45.6828 57.0429 45.8446 56.3899 45.8306C55.7369 45.8165 55.0997 45.6272 54.545 45.2825C53.9903 44.9377 53.5385 44.4501 53.2369 43.8708C52.9353 43.2915 52.795 42.6417 52.8306 41.9896L53.2141 13.3452C53.2199 12.8531 53.3255 12.3672 53.5243 11.917C53.7232 11.4668 54.0112 11.0615 54.371 10.7256C54.7308 10.3898 55.1549 10.1303 55.6178 9.96294C56.0806 9.79555 56.5726 9.72369 57.064 9.75169C57.5554 9.7797 58.036 9.90699 58.4768 10.1259C58.9176 10.3448 59.3095 10.6507 59.6289 11.0253C59.9482 11.3998 60.1883 11.8352 60.3347 12.3051C60.4811 12.775 60.5307 13.2697 60.4806 13.7594L60.0972 42.4037C60.0619 43.0114 59.875 43.6005 59.5535 44.1172C59.232 44.634 58.7861 45.062 58.2566 45.3621Z",
              fill: "#90C6EB",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Up ||
            (Up = O.createElement("path", {
              d: "M73.3669 11.5777C73.4359 5.85843 66.1215 1.1323 57.0278 1.0211C47.934 0.909898 40.5045 5.4558 40.4355 11.1828L40.3799 15.7612C40.3778 16.3733 40.6169 16.9616 41.0453 17.3986C41.4738 17.8357 42.0572 18.0864 42.6691 18.0965L70.9492 18.4416C71.2549 18.4454 71.5583 18.3889 71.842 18.2752C72.1258 18.1616 72.3843 17.9931 72.6029 17.7794C72.8214 17.5656 72.9956 17.3109 73.1155 17.0297C73.2355 16.7486 73.2987 16.4465 73.3017 16.1409L73.3669 11.5777Z",
              fill: "#90C6EB"
            })),
          zp ||
            (zp = O.createElement("path", {
              d: "M73.3304 10.8106C69.6144 8.09888 65.1148 6.67439 60.5152 6.75361C51.4215 6.64241 43.9939 11.1883 43.923 16.9153L43.9096 18.1308L42.6691 18.0963C42.3634 18.0928 42.0614 18.0291 41.7804 17.9089C41.4993 17.7887 41.2447 17.6143 41.031 17.3956C40.8174 17.177 40.6489 16.9184 40.5352 16.6347C40.4215 16.3509 40.3648 16.0475 40.3683 15.7419L40.4239 11.1634C40.4929 5.4441 47.9225 0.8982 57.0162 1.00173C65.7092 1.12061 72.7706 5.44218 73.3304 10.8106Z",
              fill: "#DAECF8"
            })),
          Np ||
            (Np = O.createElement("path", {
              d: "M73.3669 11.5777C73.4359 5.85843 66.1215 1.1323 57.0278 1.0211C47.934 0.909898 40.5045 5.4558 40.4355 11.1828L40.3799 15.7612C40.3778 16.3733 40.6169 16.9616 41.0453 17.3986C41.4738 17.8357 42.0572 18.0864 42.6691 18.0965L70.9492 18.4416C71.2549 18.4454 71.5582 18.3889 71.842 18.2752C72.1258 18.1616 72.3843 17.9931 72.6029 17.7794C72.8214 17.5656 72.9956 17.3109 73.1155 17.0297C73.2355 16.7486 73.2987 16.4465 73.3017 16.1409L73.3669 11.5777Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          qp ||
            (qp = O.createElement("path", {
              d: "M32.5215 56.3272C33.1751 56.3249 33.8161 56.1468 34.3772 55.8116C34.9383 55.4764 35.3989 54.9963 35.7106 54.4218C36.0224 53.8473 36.1738 53.1996 36.1491 52.5464C36.1243 51.8932 35.9243 51.2588 35.57 50.7095L21.056 26.0109C20.8082 25.5846 20.4764 25.213 20.0808 24.9186C19.6851 24.6243 19.2338 24.4134 18.7542 24.2986C18.2746 24.1839 17.7766 24.1677 17.2906 24.2511C16.8045 24.3345 16.3405 24.5157 15.9265 24.7837C15.5126 25.0517 15.1574 25.401 14.8824 25.8104C14.6075 26.2198 14.4185 26.6807 14.327 27.1653C14.2354 27.6499 14.2432 28.148 14.3499 28.6295C14.4566 29.111 14.6599 29.5658 14.9476 29.9663L29.4615 54.6649C29.7922 55.1754 30.2455 55.595 30.78 55.8854C31.3145 56.1757 31.9132 56.3276 32.5215 56.3272Z",
              fill: "#90C6EB",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Gp ||
            (Gp = O.createElement("path", {
              d: "M7.83971 35.1599C5.6981 31.7414 8.36889 26.21 13.8044 22.8068C19.2399 19.4036 25.381 19.4132 27.5226 22.8317L28.8647 24.9868C29.0269 25.2456 29.1365 25.5338 29.1873 25.835C29.238 26.1362 29.229 26.4444 29.1606 26.7421C29.0922 27.0398 28.9659 27.3211 28.7888 27.57C28.6117 27.8188 28.3873 28.0303 28.1285 28.1925L12.3856 38.0512C12.127 38.2136 11.8389 38.3233 11.5378 38.3742C11.2367 38.4251 10.9286 38.4161 10.631 38.3477C10.3334 38.2793 10.0522 38.1529 9.80354 37.9757C9.55487 37.7985 9.3436 37.5739 9.18182 37.315L7.83971 35.1599Z",
              fill: "#90C6EB"
            })),
          _p ||
            (_p = O.createElement("path", {
              d: "M7.58242 34.6828C8.82587 31.6865 11.013 29.1776 13.8117 27.5371C19.2472 24.1339 25.3883 24.1435 27.5299 27.562L27.9863 28.2906L28.1415 28.1928C28.4004 28.0306 28.6248 27.8191 28.8019 27.5703C28.9789 27.3214 29.1053 27.0401 29.1736 26.7424C29.242 26.4447 29.2511 26.1365 29.2003 25.8353C29.1495 25.5341 29.04 25.2459 28.8778 24.9871L27.5357 22.832C25.3941 19.4135 19.253 19.402 13.8175 22.8071C8.61393 26.0569 5.94505 31.2451 7.58242 34.6828Z",
              fill: "#DAECF8"
            })),
          Yp ||
            (Yp = O.createElement("path", {
              d: "M7.83971 35.1599C5.6981 31.7414 8.36889 26.21 13.8044 22.8068C19.2399 19.4036 25.381 19.4132 27.5226 22.8317L28.8647 24.9868C29.0269 25.2456 29.1365 25.5338 29.1873 25.835C29.238 26.1362 29.229 26.4444 29.1606 26.7421C29.0922 27.0398 28.9659 27.3211 28.7888 27.57C28.6117 27.8188 28.3873 28.0303 28.1285 28.1925L12.3856 38.0512C12.127 38.2136 11.8389 38.3233 11.5378 38.3742C11.2367 38.4251 10.9286 38.4161 10.631 38.3477C10.3334 38.2793 10.0522 38.1529 9.80354 37.9757C9.55487 37.7985 9.3436 37.5739 9.18182 37.315L7.83971 35.1599Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Xp ||
            (Xp = O.createElement("path", {
              d: "M81.1097 56.3271C80.4559 56.3252 79.8147 56.1474 79.2533 55.8123C78.6919 55.4772 78.231 54.9972 77.9191 54.4226C77.6071 53.8481 77.4555 53.2002 77.4801 52.5468C77.5048 51.8935 77.7048 51.2589 78.0593 50.7095L92.5732 26.0109C92.8222 25.587 93.1545 25.2179 93.55 24.9258C93.9455 24.6337 94.3961 24.4247 94.8745 24.3114C95.3529 24.1981 95.8493 24.1828 96.3338 24.2665C96.8183 24.3501 97.2809 24.531 97.6936 24.7981C98.1064 25.0653 98.4607 25.4133 98.7354 25.821C99.0101 26.2288 99.1994 26.688 99.2919 27.1709C99.3844 27.6538 99.3782 28.1504 99.2736 28.6308C99.1691 29.1112 98.9684 29.5655 98.6836 29.9663L84.1697 54.6648C83.839 55.1754 83.3857 55.5949 82.8512 55.8853C82.3167 56.1757 81.718 56.3276 81.1097 56.3271Z",
              fill: "#90C6EB",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Kp ||
            (Kp = O.createElement("path", {
              d: "M105.79 35.1603C107.932 31.7417 105.261 26.2103 99.8254 22.8071C94.3898 19.404 88.2468 19.4135 86.1071 22.8321L84.765 24.9871C84.6029 25.2459 84.4933 25.5342 84.4425 25.8354C84.3917 26.1365 84.4008 26.4448 84.4692 26.7425C84.5375 27.0401 84.6639 27.3214 84.8409 27.5703C85.018 27.8191 85.2424 28.0307 85.5013 28.1928L101.242 38.0515C101.501 38.2137 101.789 38.3233 102.09 38.3741C102.392 38.4248 102.7 38.4158 102.998 38.3474C103.295 38.279 103.577 38.1527 103.825 37.9756C104.074 37.7985 104.286 37.5741 104.448 37.3153L105.79 35.1603Z",
              fill: "#90C6EB"
            })),
          Jp ||
            (Jp = O.createElement("path", {
              d: "M106.051 34.6828C104.808 31.6866 102.622 29.1777 99.8233 27.5371C94.3878 24.1339 88.2448 24.1435 86.1051 27.562L85.6488 28.2906L85.4934 28.1928C85.2346 28.0307 85.0102 27.8191 84.8331 27.5703C84.6561 27.3214 84.5297 27.0401 84.4614 26.7424C84.393 26.4448 84.3839 26.1365 84.4347 25.8353C84.4855 25.5342 84.5951 25.2459 84.7572 24.9871L86.0993 22.8321C88.239 19.4135 94.382 19.402 99.8175 22.8071C105.013 26.0569 107.684 31.2451 106.051 34.6828Z",
              fill: "#DAECF8"
            })),
          Qp ||
            (Qp = O.createElement("path", {
              d: "M105.79 35.1603C107.932 31.7417 105.261 26.2103 99.8254 22.8071C94.3898 19.404 88.2468 19.4135 86.1071 22.8321L84.765 24.9871C84.6029 25.2459 84.4933 25.5342 84.4425 25.8354C84.3917 26.1365 84.4008 26.4448 84.4692 26.7425C84.5375 27.0401 84.6639 27.3214 84.8409 27.5703C85.018 27.8191 85.2424 28.0307 85.5013 28.1928L101.242 38.0515C101.501 38.2137 101.789 38.3233 102.09 38.3741C102.392 38.4248 102.7 38.4158 102.998 38.3474C103.295 38.279 103.577 38.1527 103.825 37.9756C104.074 37.7985 104.286 37.5741 104.448 37.3153L105.79 35.1603Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          $p ||
            ($p = O.createElement("path", {
              d: "M56.8086 140.414C87.6287 140.414 112.613 115.429 112.613 84.609C112.613 53.7889 87.6287 28.8043 56.8086 28.8043C25.9885 28.8043 1.00391 53.7889 1.00391 84.609C1.00391 115.429 25.9885 140.414 56.8086 140.414Z",
              fill: "#90C6EB"
            })),
          ef ||
            (ef = O.createElement("path", {
              d: "M112.299 90.57C110.887 76.8424 104.438 64.1251 94.1969 54.8748C83.9561 45.6246 70.6505 40.4978 56.8504 40.4849C43.0504 40.4721 29.7352 45.574 19.4772 54.8051C9.21915 64.0362 2.74616 76.7415 1.30868 90.4664C0.512885 82.9317 1.25971 75.3138 3.50365 68.077C5.74758 60.8403 9.44162 54.1362 14.3606 48.3735C19.2797 42.6107 25.3206 37.91 32.1153 34.5577C38.9101 31.2055 46.3163 29.2719 53.8825 28.8749C61.4488 28.4779 69.0167 29.6258 76.1249 32.2486C83.2331 34.8714 89.7329 38.9141 95.2279 44.1304C100.723 49.3467 105.098 55.6274 108.087 62.5896C111.076 69.5518 112.616 77.0497 112.613 84.6264C112.612 86.6117 112.507 88.5956 112.299 90.57Z",
              fill: "#DAECF8"
            })),
          tf ||
            (tf = O.createElement("path", {
              d: "M56.8086 140.414C87.6287 140.414 112.613 115.429 112.613 84.609C112.613 53.7889 87.6287 28.8043 56.8086 28.8043C25.9885 28.8043 1.00391 53.7889 1.00391 84.609C1.00391 115.429 25.9885 140.414 56.8086 140.414Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          rf ||
            (rf = O.createElement("path", {
              d: "M56.8699 130.317C82.3299 130.317 102.969 109.678 102.969 84.218C102.969 58.758 82.3299 38.1186 56.8699 38.1186C31.4099 38.1186 10.7705 58.758 10.7705 84.218C10.7705 109.678 31.4099 130.317 56.8699 130.317Z",
              fill: "white"
            })),
          nf ||
            (nf = O.createElement("path", {
              d: "M102.708 89.1454C101.529 77.8148 96.1959 67.3224 87.7375 59.6916C79.2791 52.0609 68.2948 47.8325 56.903 47.8221C45.5113 47.8116 34.5191 52.0197 26.0467 59.6349C17.5743 67.25 12.2218 77.7327 11.0216 89.061C10.3642 82.8364 10.9812 76.543 12.8351 70.5646C14.689 64.5862 17.7408 59.0479 21.8047 54.2873C25.8686 49.5267 30.8594 45.6435 36.4728 42.8744C42.0862 40.1053 48.2048 38.5083 54.4555 38.1808C60.7062 37.8532 66.9581 38.802 72.8302 40.9692C78.7023 43.1365 84.0716 46.4768 88.6107 50.7866C93.1499 55.0964 96.7639 60.2854 99.2325 66.0373C101.701 71.7892 102.972 77.9836 102.969 84.2429C102.967 85.8805 102.88 87.5169 102.708 89.1454Z",
              fill: "#DAECF8"
            })),
          of ||
            (of = O.createElement("path", {
              d: "M56.8699 130.317C82.3299 130.317 102.969 109.678 102.969 84.218C102.969 58.758 82.3299 38.1186 56.8699 38.1186C31.4099 38.1186 10.7705 58.758 10.7705 84.218C10.7705 109.678 31.4099 130.317 56.8699 130.317Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          af ||
            (af = O.createElement("path", {
              d: "M90.4879 95.3824L84.4177 91.8738C85.6627 87.11 85.6627 82.1063 84.4177 77.3426L90.4879 73.8339C90.8295 73.637 91.1289 73.3746 91.369 73.0618C91.6091 72.749 91.7852 72.392 91.8872 72.0111C91.9892 71.6302 92.0152 71.233 91.9636 70.8421C91.912 70.4511 91.7839 70.0742 91.5865 69.7329L87.0809 61.9276C86.8837 61.5856 86.621 61.286 86.3079 61.0457C85.9947 60.8055 85.6373 60.6294 85.2559 60.5275C84.8746 60.4256 84.477 60.4 84.0857 60.4521C83.6945 60.5041 83.3174 60.6328 82.9759 60.8309L76.9 64.3338C73.4054 60.8656 69.0713 58.3626 64.3207 57.0691V50.0557C64.3212 49.6608 64.2438 49.2697 64.0931 48.9048C63.9423 48.5398 63.7211 48.2082 63.4421 47.9288C63.163 47.6494 62.8317 47.4277 62.4669 47.2765C62.1021 47.1253 61.7112 47.0475 61.3163 47.0475H52.305C51.5082 47.0475 50.744 47.364 50.1806 47.9274C49.6171 48.4909 49.3006 49.255 49.3006 50.0519V57.0653C44.551 58.3605 40.2183 60.8648 36.7251 64.3338L30.6492 60.8309C30.308 60.6326 29.931 60.5037 29.5398 60.4516C29.1487 60.3994 28.7511 60.425 28.3699 60.5269C27.9886 60.6288 27.6313 60.805 27.3183 61.0453C27.0054 61.2857 26.743 61.5855 26.5462 61.9276L22.0386 69.7329C21.8413 70.0742 21.7131 70.4511 21.6615 70.8421C21.6099 71.233 21.6359 71.6302 21.7379 72.0111C21.84 72.392 22.0161 72.749 22.2562 73.0618C22.4963 73.3746 22.7957 73.637 23.1372 73.8339L29.2074 77.3426C27.9624 82.1063 27.9624 87.11 29.2074 91.8738L23.1372 95.3824C22.7957 95.5794 22.4963 95.8418 22.2562 96.1546C22.0161 96.4673 21.84 96.8244 21.7379 97.2052C21.6359 97.5861 21.6099 97.9834 21.6615 98.3743C21.7131 98.7652 21.8413 99.1421 22.0386 99.4835L26.5462 107.289C26.743 107.631 27.0054 107.931 27.3183 108.171C27.6313 108.411 27.9886 108.588 28.3699 108.689C28.7511 108.791 29.1487 108.817 29.5398 108.765C29.931 108.713 30.308 108.584 30.6492 108.385L36.7251 104.883C40.2192 108.351 44.5535 110.855 49.3045 112.147V119.161C49.3045 119.957 49.621 120.722 50.1844 121.285C50.7478 121.849 51.512 122.165 52.3088 122.165H61.3201C62.1169 122.165 62.8811 121.849 63.4445 121.285C64.008 120.722 64.3245 119.957 64.3245 119.161V112.147C69.0754 110.855 73.4097 108.351 76.9039 104.883L82.9798 108.385C83.3212 108.584 83.6983 108.712 84.0896 108.764C84.4808 108.816 84.8785 108.791 85.2598 108.689C85.6411 108.587 85.9986 108.411 86.3117 108.171C86.6249 107.93 86.8875 107.631 87.0847 107.289L91.5903 99.4835C91.7875 99.1419 91.9154 98.7648 91.9668 98.3737C92.0181 97.9826 91.9918 97.5853 91.8894 97.2044C91.787 96.8235 91.6105 96.4665 91.37 96.1539C91.1295 95.8412 90.8298 95.5791 90.4879 95.3824ZM56.8087 99.4797C53.8672 99.4797 50.9916 98.6074 48.5458 96.9731C46.1 95.3388 44.1938 93.0159 43.0682 90.2982C41.9426 87.5805 41.6482 84.5901 42.2222 81.705C42.7962 78.82 44.2129 76.17 46.293 74.0901C48.3731 72.0103 51.0233 70.594 53.9084 70.0203C56.7935 69.4467 59.7839 69.7415 62.5015 70.8674C65.219 71.9934 67.5417 73.8999 69.1756 76.3459C70.8096 78.7919 71.6815 81.6676 71.6812 84.6091C71.6812 86.5621 71.2965 88.496 70.549 90.3003C69.8016 92.1046 68.7061 93.744 67.325 95.1249C65.944 96.5057 64.3044 97.6011 62.5 98.3483C60.6956 99.0955 58.7617 99.4799 56.8087 99.4797Z",
              fill: "#F0C936"
            })),
          sf ||
            (sf = O.createElement("path", {
              d: "M76.9 64.3338C73.4054 60.8656 69.0713 58.3626 64.3207 57.0691V50.0557C64.3212 49.6608 64.2438 49.2697 64.0931 48.9048C63.9423 48.5398 63.7211 48.2082 63.4421 47.9288C63.163 47.6494 62.8317 47.4277 62.4669 47.2765C62.1021 47.1253 61.7112 47.0475 61.3163 47.0475H52.305C51.5082 47.0475 50.744 47.364 50.1806 47.9274C49.6171 48.4909 49.3006 49.255 49.3006 50.0519V57.0653C44.551 58.3605 40.2183 60.8648 36.7251 64.3338L30.6492 60.8309C30.308 60.6326 29.931 60.5037 29.5398 60.4516C29.1487 60.3994 28.7511 60.425 28.3699 60.5269C27.9886 60.6288 27.6313 60.805 27.3183 61.0453C27.0054 61.2857 26.743 61.5855 26.5462 61.9276L22.0386 69.7329C21.8413 70.0742 21.7131 70.4511 21.6615 70.8421C21.6099 71.233 21.6359 71.6302 21.7379 72.0111C21.84 72.392 22.0161 72.749 22.2562 73.0618C22.4963 73.3746 22.7957 73.637 23.1372 73.8339L29.2074 77.3426C27.9624 82.1063 27.9624 87.11 29.2074 91.8738L23.1372 95.3824C22.7957 95.5794 22.4963 95.8418 22.2562 96.1546C22.0161 96.4673 21.84 96.8244 21.7379 97.2052C21.6359 97.5861 21.6099 97.9834 21.6615 98.3743C21.7131 98.7652 21.8413 99.1421 22.0386 99.4835L26.5462 107.289C26.743 107.631 27.0054 107.931 27.3183 108.171C27.6313 108.411 27.9886 108.588 28.3699 108.689C28.7511 108.791 29.1487 108.817 29.5398 108.765C29.931 108.713 30.308 108.584 30.6492 108.385L36.3033 105.126L46.3039 95.1274C44.9 93.7516 43.7827 92.1111 43.0168 90.3008C42.2508 88.4906 41.8513 86.5464 41.8413 84.5808C41.8313 82.6151 42.2111 80.667 42.9587 78.8491C43.7062 77.0311 44.8068 75.3794 46.1966 73.9894C47.5865 72.5994 49.2381 71.4987 51.056 70.751C52.8739 70.0032 54.822 69.6233 56.7876 69.6331C58.7533 69.6428 60.6975 70.0422 62.5078 70.808C64.3181 71.5738 65.9587 72.6909 67.3347 74.0947L77.3525 64.0768L76.9 64.3338Z",
              fill: "#F7DD7B"
            })),
          lf ||
            (lf = O.createElement("path", {
              d: "M90.4879 95.3824L84.4177 91.8738C85.6627 87.11 85.6627 82.1063 84.4177 77.3426L90.4879 73.8339C90.8295 73.637 91.1289 73.3746 91.369 73.0618C91.6091 72.749 91.7852 72.392 91.8872 72.0111C91.9892 71.6302 92.0152 71.233 91.9636 70.8421C91.912 70.4511 91.7839 70.0742 91.5865 69.7329L87.0809 61.9276C86.8837 61.5856 86.621 61.286 86.3079 61.0457C85.9947 60.8055 85.6373 60.6294 85.2559 60.5275C84.8746 60.4256 84.477 60.4 84.0857 60.4521C83.6945 60.5041 83.3174 60.6328 82.9759 60.8309L76.9 64.3338C73.4054 60.8656 69.0713 58.3626 64.3207 57.0691V50.0557C64.3212 49.6608 64.2438 49.2697 64.0931 48.9048C63.9423 48.5398 63.7211 48.2082 63.4421 47.9288C63.163 47.6494 62.8317 47.4277 62.4669 47.2765C62.1021 47.1253 61.7112 47.0475 61.3163 47.0475H52.305C51.5082 47.0475 50.744 47.364 50.1806 47.9274C49.6171 48.4909 49.3006 49.255 49.3006 50.0519V57.0653C44.551 58.3605 40.2183 60.8648 36.7251 64.3338L30.6492 60.8309C30.308 60.6326 29.931 60.5037 29.5398 60.4516C29.1487 60.3994 28.7511 60.425 28.3699 60.5269C27.9886 60.6288 27.6313 60.805 27.3183 61.0453C27.0054 61.2857 26.743 61.5855 26.5462 61.9276L22.0386 69.7329C21.8413 70.0742 21.7131 70.4511 21.6615 70.8421C21.6099 71.233 21.6359 71.6302 21.7379 72.0111C21.84 72.392 22.0161 72.749 22.2562 73.0618C22.4963 73.3746 22.7957 73.637 23.1372 73.8339L29.2074 77.3426C27.9624 82.1063 27.9624 87.11 29.2074 91.8738L23.1372 95.3824C22.7957 95.5794 22.4963 95.8418 22.2562 96.1546C22.0161 96.4673 21.84 96.8244 21.7379 97.2052C21.6359 97.5861 21.6099 97.9834 21.6615 98.3743C21.7131 98.7652 21.8413 99.1421 22.0386 99.4835L26.5462 107.289C26.743 107.631 27.0054 107.931 27.3183 108.171C27.6313 108.411 27.9886 108.588 28.3699 108.689C28.7511 108.791 29.1487 108.817 29.5398 108.765C29.931 108.713 30.308 108.584 30.6492 108.385L36.7251 104.883C40.2192 108.351 44.5535 110.855 49.3045 112.147V119.161C49.3045 119.957 49.621 120.722 50.1844 121.285C50.7478 121.849 51.512 122.165 52.3088 122.165H61.3201C62.1169 122.165 62.8811 121.849 63.4445 121.285C64.008 120.722 64.3245 119.957 64.3245 119.161V112.147C69.0754 110.855 73.4097 108.351 76.9039 104.883L82.9798 108.385C83.3212 108.584 83.6983 108.712 84.0896 108.764C84.4808 108.816 84.8785 108.791 85.2598 108.689C85.6411 108.587 85.9986 108.411 86.3117 108.171C86.6249 107.93 86.8875 107.631 87.0847 107.289L91.5903 99.4835C91.7875 99.1419 91.9154 98.7648 91.9668 98.3737C92.0181 97.9826 91.9918 97.5853 91.8894 97.2044C91.787 96.8235 91.6105 96.4665 91.37 96.1539C91.1296 95.8412 90.8298 95.5791 90.4879 95.3824V95.3824ZM56.8087 99.4797C53.8672 99.4797 50.9916 98.6074 48.5458 96.9731C46.1 95.3388 44.1938 93.0159 43.0682 90.2982C41.9426 87.5805 41.6482 84.5901 42.2222 81.705C42.7962 78.82 44.2129 76.17 46.293 74.0901C48.3731 72.0103 51.0233 70.594 53.9084 70.0203C56.7935 69.4467 59.7839 69.7415 62.5015 70.8674C65.219 71.9934 67.5417 73.8999 69.1756 76.3459C70.8096 78.7919 71.6815 81.6676 71.6812 84.6091C71.6812 86.5621 71.2965 88.496 70.549 90.3003C69.8016 92.1046 68.7061 93.744 67.325 95.1249C65.944 96.5057 64.3044 97.6011 62.5 98.3483C60.6956 99.0955 58.7617 99.4799 56.8087 99.4797V99.4797Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          cf ||
            (cf = O.createElement("path", {
              d: "M56.8369 86.6454C56.3692 86.6449 55.9116 86.5093 55.5191 86.2549C55.1267 86.0005 54.8161 85.6381 54.6247 85.2114C54.4333 84.7846 54.3692 84.3117 54.4403 83.8494C54.5113 83.3871 54.7144 82.9552 55.0251 82.6056L74.4453 60.7772C74.873 60.2965 75.4741 60.0052 76.1165 59.9677C76.7588 59.9301 77.3898 60.1492 77.8706 60.5769C78.3514 61.0045 78.6426 61.6057 78.6801 62.248C78.7177 62.8904 78.4986 63.5213 78.0709 64.0021L58.6507 85.8305C58.4236 86.0873 58.1443 86.2929 57.8316 86.4334C57.5189 86.5739 57.1798 86.6461 56.8369 86.6454Z",
              fill: "#90C6EB",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          uf ||
            (uf = O.createElement("path", {
              d: "M54.9513 85.7422C54.658 85.3783 54.4761 84.9373 54.4273 84.4724C54.3785 84.0075 54.4651 83.5385 54.6765 83.1216C54.8878 82.7046 55.2151 82.3576 55.619 82.1222C56.0228 81.8868 56.486 81.773 56.953 81.7945L78.9366 83.1673C79.5794 83.1976 80.1838 83.4819 80.6169 83.9578C81.05 84.4337 81.2763 85.0621 81.246 85.7048C81.2158 86.3476 80.9314 86.952 80.4555 87.3851C79.9797 87.8182 79.3512 88.0445 78.7085 88.0142L56.7248 86.6414C56.3824 86.6255 56.0473 86.5371 55.7416 86.3821C55.4359 86.2271 55.1665 86.009 54.9513 85.7422Z",
              fill: "#90C6EB",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          df ||
            (df = O.createElement("path", {
              d: "M56.8708 91.4961C60.8904 91.4961 64.1489 88.2376 64.1489 84.218C64.1489 80.1985 60.8904 76.94 56.8708 76.94C52.8513 76.94 49.5928 80.1985 49.5928 84.218C49.5928 88.2376 52.8513 91.4961 56.8708 91.4961Z",
              fill: "#DAECF8"
            })),
          pf ||
            (pf = O.createElement("path", {
              d: "M56.8716 81.8675C58.3696 81.8685 59.8309 82.3313 61.0564 83.1928C62.2819 84.0543 63.212 85.2726 63.7202 86.6818C64.1186 85.5815 64.2461 84.4014 64.0919 83.2413C63.9377 82.0813 63.5063 80.9755 62.8343 80.0175C62.1623 79.0594 61.2694 78.2774 60.2312 77.7375C59.1929 77.1975 58.0399 76.9156 56.8697 76.9156C55.6995 76.9156 54.5465 77.1975 53.5082 77.7375C52.47 78.2774 51.5771 79.0594 50.9051 80.0175C50.2331 80.9755 49.8017 82.0813 49.6475 83.2413C49.4933 84.4014 49.6208 85.5815 50.0192 86.6818C50.5276 85.272 51.4583 84.0532 52.6846 83.1917C53.9108 82.3302 55.373 81.8677 56.8716 81.8675Z",
              fill: "white"
            })),
          ff ||
            (ff = O.createElement("path", {
              d: "M56.8708 91.4961C60.8904 91.4961 64.1489 88.2376 64.1489 84.218C64.1489 80.1985 60.8904 76.94 56.8708 76.94C52.8513 76.94 49.5928 80.1985 49.5928 84.218C49.5928 88.2376 52.8513 91.4961 56.8708 91.4961Z",
              stroke: "#004590",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      }
      var wf = O.forwardRef(gf),
        yf =
          (r.p,
          r(30068),
          function (e) {
            return "".concat(e, "_dwm_last_check_started");
          }),
        vf = function (e) {
          return "".concat(e, "_dwm_last_check_completed");
        };
      var jf,
        bf,
        kf,
        Lf,
        Ef,
        Zf,
        Sf,
        Mf,
        Of,
        Tf,
        Pf,
        Bf,
        Af,
        Df,
        Ff,
        If,
        Rf,
        Vf,
        Wf,
        Hf,
        Uf,
        zf,
        Nf,
        qf,
        Gf,
        _f,
        Yf,
        Xf,
        Kf,
        Jf,
        Qf,
        $f,
        em = r(13736),
        tm = ["title", "titleId"];
      function rm() {
        return (
          (rm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          rm.apply(this, arguments)
        );
      }
      function nm(e, t) {
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
      function om(e, t) {
        var r = e.title,
          n = e.titleId,
          o = nm(e, tm);
        return O.createElement(
          "svg",
          rm(
            {
              width: 160,
              height: 160,
              viewBox: "0 0 160 160",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          jf ||
            (jf = O.createElement("path", {
              d: "M88.6537 22.1128C82.7716 21.221 76.7886 21.221 70.9065 22.1128",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          bf ||
            (bf = O.createElement("path", {
              d: "M25.4741 58.0591C27.3977 53.3053 29.9385 48.8253 33.0309 44.7343",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          kf ||
            (kf = O.createElement("path", {
              d: "M88.6537 137.888C82.7716 138.78 76.7886 138.78 70.9065 137.888",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Lf ||
            (Lf = O.createElement("path", {
              d: "M25.4741 101.943C27.3977 106.697 29.9385 111.177 33.0309 115.268",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ef ||
            (Ef = O.createElement("path", {
              d: "M134.082 58.0591C132.157 53.3055 129.616 48.8256 126.523 44.7343",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Zf ||
            (Zf = O.createElement("path", {
              d: "M134.082 101.943C132.157 106.696 129.616 111.176 126.523 115.268",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Sf ||
            (Sf = O.createElement("path", {
              d: "M41.2578 80.0013H52.4194",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Mf ||
            (Mf = O.createElement("path", {
              d: "M57.7268 43.2798L64.4676 54.5055",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Of ||
            (Of = O.createElement("path", {
              d: "M57.7268 116.723L64.4676 105.497",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Tf ||
            (Tf = O.createElement("path", {
              d: "M118.302 80.0013H107.141",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Pf ||
            (Pf = O.createElement("path", {
              d: "M101.832 43.2798L95.0913 54.5055",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Bf ||
            (Bf = O.createElement("path", {
              d: "M101.832 116.723L95.0913 105.497",
              stroke: "#F9FAFB",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Af ||
            (Af = O.createElement("path", {
              d: "M37.0489 90.7951C37.0472 91.3755 36.8159 91.9316 36.4055 92.3421C35.995 92.7525 35.4389 92.9838 34.8585 92.9855H7.48568C6.90554 92.9834 6.3498 92.7519 5.93973 92.3415C5.52966 91.9311 5.29856 91.3752 5.29688 90.7951V72.1823H37.0489V90.7951Z",
              fill: "#EDBF0E",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Df ||
            (Df = O.createElement("path", {
              d: "M37.0489 72.1823H5.29688V69.2047C5.29856 68.6246 5.52966 68.0687 5.93973 67.6583C6.3498 67.2479 6.90554 67.0164 7.48568 67.0143H34.8585C35.4389 67.016 35.995 67.2473 36.4055 67.6577C36.8159 68.0681 37.0472 68.6243 37.0489 69.2047V72.1823Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ff ||
            (Ff = O.createElement("path", {
              d: "M65.4161 36.717C65.4144 37.2974 65.1831 37.8535 64.7726 38.2639C64.3622 38.6744 63.8061 38.9057 63.2257 38.9074H35.8529C35.2727 38.9053 34.717 38.6738 34.3069 38.2634C33.8968 37.853 33.6657 37.2971 33.6641 36.717V18.1042H65.4161V36.717Z",
              fill: "#17AF84",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          If ||
            (If = O.createElement("path", {
              d: "M65.4161 18.1042H33.6641V15.1266C33.6657 14.5465 33.8968 13.9905 34.3069 13.5802C34.717 13.1698 35.2727 12.9383 35.8529 12.9362H63.2257C63.8061 12.9379 64.3622 13.1692 64.7726 13.5796C65.1831 13.99 65.4144 14.5462 65.4161 15.1266V18.1042Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Rf ||
            (Rf = O.createElement("path", {
              d: "M63.6529 144.874C63.6512 145.455 63.4201 146.011 63.01 146.421C62.5999 146.831 62.0442 147.063 61.4641 147.065H34.0913C33.5109 147.063 32.9547 146.832 32.5443 146.421C32.1339 146.011 31.9026 145.455 31.9009 144.874V126.262H63.6529V144.874Z",
              fill: "#F7DD7B",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Vf ||
            (Vf = O.createElement("path", {
              d: "M63.6529 126.262H31.9009V123.284C31.9026 122.704 32.1339 122.148 32.5443 121.737C32.9547 121.327 33.5109 121.095 34.0913 121.094H61.4641C62.0442 121.096 62.6 121.327 63.01 121.738C63.4201 122.148 63.6512 122.704 63.6529 123.284V126.262Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Wf ||
            (Wf = O.createElement("path", {
              d: "M122.953 90.7951C122.955 91.3755 123.186 91.9316 123.597 92.3421C124.007 92.7525 124.563 92.9838 125.144 92.9855H152.516C153.096 92.9834 153.652 92.7519 154.062 92.3415C154.472 91.9311 154.703 91.3752 154.705 90.7951V72.1823H122.953V90.7951Z",
              fill: "#7C7FD6",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Hf ||
            (Hf = O.createElement("path", {
              d: "M122.953 72.1823H154.705V69.2047C154.703 68.6246 154.472 68.0687 154.062 67.6583C153.652 67.2479 153.096 67.0164 152.516 67.0143H125.144C124.563 67.016 124.007 67.2473 123.597 67.6577C123.186 68.0681 122.955 68.6243 122.953 69.2047V72.1823Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Uf ||
            (Uf = O.createElement("path", {
              d: "M94.1458 36.717C94.147 37.2972 94.378 37.8534 94.7881 38.2639C95.1983 38.6743 95.7543 38.9057 96.3346 38.9074H123.707C124.288 38.9057 124.844 38.6744 125.254 38.2639C125.665 37.8535 125.896 37.2974 125.898 36.717V18.1042H94.1458V36.717Z",
              fill: "#B0B2E6",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          zf ||
            (zf = O.createElement("path", {
              d: "M94.1458 18.1042H125.898V15.1266C125.896 14.5462 125.665 13.99 125.254 13.5796C124.844 13.1692 124.288 12.9379 123.707 12.9362H96.3346C95.7543 12.9379 95.1983 13.1692 94.7881 13.5797C94.378 13.9902 94.147 14.5463 94.1458 15.1266V18.1042Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Nf ||
            (Nf = O.createElement("path", {
              d: "M95.9089 144.874C95.9106 145.455 96.1419 146.011 96.5523 146.421C96.9628 146.832 97.5189 147.063 98.0993 147.065H125.471C126.051 147.063 126.607 146.832 127.017 146.421C127.428 146.011 127.659 145.455 127.661 144.874V126.262H95.9089V144.874Z",
              fill: "#E78C89",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          qf ||
            (qf = O.createElement("path", {
              d: "M95.9089 126.262H127.661V123.284C127.659 122.704 127.428 122.148 127.017 121.737C126.607 121.327 126.051 121.095 125.471 121.094H98.0993C97.5189 121.095 96.9628 121.327 96.5523 121.737C96.1419 122.148 95.9106 122.704 95.9089 123.284V126.262Z",
              fill: "white",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Gf ||
            (Gf = O.createElement("path", {
              d: "M104.001 80.2094C103.997 84.9105 102.6 89.505 99.9854 93.412C97.3709 97.319 93.6566 100.363 89.3123 102.159C84.9679 103.956 80.1884 104.423 75.5782 103.503C70.968 102.584 66.734 100.317 63.4116 96.9915C60.0893 93.6655 57.8276 89.4291 56.9128 84.8179C55.9979 80.2067 56.4708 75.4278 58.2717 71.0853C60.0726 66.7429 63.1207 63.0319 67.0305 60.4217C70.9404 57.8114 75.5364 56.419 80.2374 56.4206C86.5422 56.4274 92.5864 58.9367 97.0421 63.3972C101.498 67.8577 104.001 73.9046 104.001 80.2094Z",
              fill: "#6CB4E4"
            })),
          _f ||
            (_f = O.createElement("path", {
              d: "M104.001 80.2091C104 81.0933 103.951 81.9768 103.852 82.8555C103.207 77.0423 100.442 71.6707 96.0852 67.7687C91.7282 63.8667 86.0854 61.7082 80.2366 61.7063C74.3878 61.7043 68.7435 63.859 64.3839 67.758C60.0243 71.6571 57.2554 77.0267 56.607 82.8395C56.2457 79.625 56.5442 76.3706 57.4843 73.2755C58.4244 70.1804 59.9863 67.3097 62.0744 64.8392C64.1624 62.3687 66.7328 60.3504 69.628 58.9078C72.5232 57.4651 75.6824 56.6286 78.9121 56.4493C82.1419 56.2701 85.3743 56.7519 88.4113 57.8653C91.4484 58.9786 94.2263 60.7001 96.575 62.9244C98.9236 65.1486 100.794 67.8288 102.07 70.8009C103.347 73.773 104.004 76.9744 104.001 80.2091V80.2091Z",
              fill: "#ECF5FB"
            })),
          Yf ||
            (Yf = O.createElement("path", {
              d: "M104.001 80.2094C103.997 84.9105 102.6 89.505 99.9854 93.412C97.3709 97.319 93.6566 100.363 89.3123 102.159C84.9679 103.956 80.1884 104.423 75.5782 103.503C70.968 102.584 66.734 100.317 63.4116 96.9915C60.0893 93.6655 57.8276 89.4291 56.9128 84.8179C55.9979 80.2067 56.4708 75.4278 58.2717 71.0853C60.0726 66.7429 63.1207 63.0319 67.0305 60.4217C70.9404 57.8114 75.5364 56.419 80.2374 56.4206C86.5422 56.4274 92.5864 58.9367 97.0421 63.3972C101.498 67.8577 104.001 73.9046 104.001 80.2094Z",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Xf ||
            (Xf = O.createElement("path", {
              d: "M90.4498 58.7409L69.9922 101.645",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Kf ||
            (Kf = O.createElement("path", {
              d: "M101.672 90.4227L58.7683 69.9636",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Jf ||
            (Jf = O.createElement("path", {
              d: "M103.916 78.3283L66.7527 60.6068",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Qf ||
            (Qf = O.createElement("path", {
              d: "M93.6882 99.7798L56.5234 82.0598",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          $f ||
            ($f = O.createElement("path", {
              d: "M90.9474 85.3072C96.5969 73.4594 96.3745 61.565 90.4507 58.7402C84.5268 55.9154 75.1446 63.23 69.4951 75.0778C63.8455 86.9255 64.0679 98.82 69.9918 101.645C75.9156 104.47 85.2978 97.155 90.9474 85.3072Z",
              stroke: "#1B283C",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      }
      var im,
        am,
        sm,
        lm,
        cm,
        um,
        dm,
        pm,
        fm,
        mm = O.forwardRef(om),
        hm = (r.p, ["title", "titleId"]);
      function Cm() {
        return (
          (Cm = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Cm.apply(this, arguments)
        );
      }
      function xm(e, t) {
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
      function gm(e, t) {
        var r = e.title,
          n = e.titleId,
          o = xm(e, hm);
        return O.createElement(
          "svg",
          Cm(
            {
              width: 66,
              height: 66,
              viewBox: "0 0 66 66",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          im ||
            (im = O.createElement("path", {
              d: "M45.006 38.7741L39.6406 44.0704L45.8185 50.3288L51.1839 45.0325L45.006 38.7741Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          am ||
            (am = O.createElement("path", {
              d: "M63.5508 55.77C64.4871 56.7184 65.0083 57.9999 64.9998 59.3326C64.9912 60.6653 64.4536 61.94 63.5052 62.8763C62.5568 63.8126 61.2753 64.3338 59.9427 64.3253C58.61 64.3167 57.3353 63.7791 56.3989 62.8307L45.8087 52.1038C45.6928 51.9863 45.6012 51.8472 45.5391 51.6943C45.477 51.5414 45.4457 51.3778 45.4468 51.2128C45.4479 51.0477 45.4816 50.8846 45.5458 50.7326C45.61 50.5806 45.7035 50.4427 45.821 50.3268L51.1853 45.0308C51.3027 44.915 51.4417 44.8234 51.5944 44.7613C51.7471 44.6993 51.9106 44.6679 52.0755 44.669C52.2404 44.6702 52.4034 44.7038 52.5553 44.768C52.7071 44.8322 52.8449 44.9256 52.9606 45.0431L63.5508 55.77Z",
              fill: "#3B70D4"
            })),
          sm ||
            (sm = O.createElement("path", {
              d: "M61.8983 63.9453C62.2977 63.0265 62.4131 62.0092 62.2298 61.0242C62.0465 60.0392 61.5728 59.1316 60.8696 58.418L50.2794 47.6911C50.1636 47.5736 50.0257 47.4801 49.8737 47.4159C49.7217 47.3516 49.5585 47.318 49.3935 47.3169C49.2285 47.3157 49.0648 47.3471 48.912 47.4092C48.7591 47.4713 48.6199 47.5629 48.5024 47.6788L51.1855 45.0308C51.3028 44.915 51.4418 44.8234 51.5945 44.7613C51.7473 44.6993 51.9108 44.6679 52.0756 44.669C52.2405 44.6702 52.4035 44.7038 52.5554 44.768C52.7073 44.8322 52.845 44.9256 52.9607 45.0431L63.5509 55.77C64.129 56.3566 64.5543 57.0761 64.7893 57.8655C65.0242 58.6549 65.0618 59.4898 64.8986 60.2971C64.7354 61.1044 64.3765 61.8592 63.8534 62.4953C63.3302 63.1314 62.6589 63.6293 61.8983 63.9453V63.9453Z",
              fill: "#264887"
            })),
          lm ||
            (lm = O.createElement("path", {
              d: "M63.5508 55.77C64.4871 56.7184 65.0083 57.9999 64.9998 59.3326C64.9912 60.6653 64.4536 61.94 63.5052 62.8763C62.5568 63.8126 61.2753 64.3338 59.9427 64.3253C58.61 64.3167 57.3353 63.7791 56.3989 62.8307L45.8087 52.1038C45.6928 51.9863 45.6012 51.8472 45.5391 51.6943C45.477 51.5414 45.4457 51.3778 45.4468 51.2128C45.4479 51.0477 45.4816 50.8846 45.5458 50.7326C45.61 50.5806 45.7035 50.4427 45.821 50.3268L51.1853 45.0308C51.3027 44.915 51.4417 44.8234 51.5944 44.7613C51.7471 44.6993 51.9106 44.6679 52.0755 44.669C52.2404 44.6702 52.4034 44.7038 52.5553 44.768C52.7071 44.8322 52.8449 44.9256 52.9606 45.0431L63.5508 55.77Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          cm ||
            (cm = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M50.6562 25.8273C50.6562 39.5371 39.5422 50.6511 25.8324 50.6511C12.1225 50.6511 1.00854 39.5371 1.00854 25.8273C1.00854 12.1174 12.1225 1.00342 25.8324 1.00342C39.5422 1.00342 50.6562 12.1174 50.6562 25.8273ZM30.0451 8.25857C39.5411 10.5002 45.422 20.0155 43.1804 29.5115C40.9388 39.0076 31.4235 44.8885 21.9274 42.6469C12.4314 40.4052 6.55048 30.89 8.79211 21.3939C11.0337 11.8978 20.549 6.01694 30.0451 8.25857Z",
              fill: "#ECF5FB"
            })),
          um ||
            (um = O.createElement("path", {
              d: "M49.51 18.3668C46.5736 12.9229 41.7099 8.77176 35.8723 6.72694C30.0347 4.68212 23.6438 4.891 17.9522 7.31264C12.2605 9.73428 7.67836 14.1941 5.10361 19.8182C2.52887 25.4422 2.14716 31.8251 4.03329 37.7159C3.65358 37.0149 3.30309 36.2923 2.9818 35.5481C1.70534 32.5479 1.03231 29.3256 1.00113 26.0653C0.969964 22.805 1.58126 19.5705 2.80013 16.5464C4.01899 13.5224 5.82156 10.768 8.1049 8.44058C10.3882 6.11316 13.1076 4.25826 16.1078 2.9818C19.108 1.70533 22.3303 1.03231 25.5906 1.00113C28.8509 0.969964 32.0854 1.58126 35.1095 2.80013C38.1335 4.01899 40.8879 5.82156 43.2153 8.1049C45.5428 10.3882 47.3977 13.1076 48.6741 16.1078C48.9913 16.8544 49.27 17.6097 49.5118 18.3685",
              fill: "white"
            })),
          dm ||
            (dm = O.createElement("path", {
              d: "M25.8324 50.6511C39.5422 50.6511 50.6562 39.537 50.6562 25.8272C50.6562 12.1174 39.5422 1.00339 25.8324 1.00339C12.1226 1.00339 1.00854 12.1174 1.00854 25.8272C1.00854 39.537 12.1226 50.6511 25.8324 50.6511Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          pm ||
            (pm = O.createElement(
              "g",
              { opacity: 0.3 },
              O.createElement("path", {
                d: "M42.8986 29.5115C45.1402 20.0154 39.2593 10.5002 29.7632 8.25854C20.2671 6.01691 10.7519 11.8978 8.51024 21.3939C6.26861 30.8899 12.1495 40.4052 21.6456 42.6468C31.1416 44.8885 40.6569 39.0076 42.8986 29.5115Z",
                fill: "#47A1DE"
              }),
              O.createElement("path", {
                d: "M25.6298 7.71079C22.1343 7.7093 18.7168 8.74481 15.81 10.6863C12.9032 12.6278 10.6376 15.3879 9.30008 18.6175C7.96253 21.847 7.61309 25.4007 8.29599 28.8289C8.9789 32.2572 10.6634 35.4057 13.1364 37.8762L38.1215 12.8929C36.4838 11.2483 34.537 9.94376 32.3932 9.05441C30.2493 8.16506 27.9508 7.70843 25.6298 7.71079V7.71079Z",
                fill: "#6CB4E4"
              })
            )),
          fm ||
            (fm = O.createElement("path", {
              d: "M42.952 29.8169C45.1936 20.3209 39.3127 10.8056 29.8167 8.56394C20.3206 6.32232 10.8053 12.2032 8.5637 21.6993C6.32208 31.1954 12.203 40.7106 21.699 42.9523C31.1951 45.1939 40.7104 39.313 42.952 29.8169Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      }
      var wm,
        ym = O.forwardRef(gm);
      r.p;
      var vm = (0, S.Z)("div", { target: "e11xq1851" })({ name: "bjn8wh", styles: "position:relative" }),
        jm = (0, G.keyframes)(
          wm ||
            (wm = (0, em.Z)([
              "\n      0% {\n        transform: translate(0, 0);\n      }\n\n      16% {\n        transform: translate(-118px, 0);\n      }\n\n      32% {\n        transform: translate(-91px, 55px);\n      }\n\n      48% {\n        transform: translate(-29px, -54px);\n      }\n\n      64% {\n        transform: translate(-89px, -54px);\n      }\n\n      80% {\n        transform: translate(-27px, 55px);\n      }\n\n      100% {\n        transform: translate(0, 0);\n      }\n"
            ]))
        ),
        bm = (0, S.Z)("div", { target: "e11xq1850" })(
          "position:absolute;left:300px;top:54px;animation:",
          jm,
          " 3s ease-out;animation-iteration-count:infinite;"
        ),
        km = function () {
          return (0, G.jsx)(vm, null, (0, G.jsx)(mm, null), (0, G.jsx)(bm, null, (0, G.jsx)(ym, null)));
        };
      var Lm = (0, S.Z)("div", { target: "e1qll5jo5" })({
          name: "1024c8s",
          styles: "margin-top:30px;margin-bottom:25px;text-align:center"
        }),
        Em = (0, S.Z)("div", { target: "e1qll5jo4" })({ name: "13df0u0", styles: "margin-top:14px;margin-bottom:20px;text-align:center" }),
        Zm = (0, S.Z)("div", { target: "e1qll5jo3" })({
          name: "1l5qpuz",
          styles: "font-weight:400;font-size:16px;line-height:24px;text-align:center"
        }),
        Sm = (0, S.Z)(Zm, { target: "e1qll5jo2" })({ name: "1fgdcyd", styles: "margin-bottom:24px" }),
        Mm = (0, S.Z)(Zm, { target: "e1qll5jo1" })({ name: "vqx3x2", styles: "margin-bottom:5px" }),
        Om = (0, S.Z)("div", { target: "e1qll5jo0" })({ name: "vxuddk", styles: "padding:24px" }),
        Tm = function () {
          var e = (0, O.useState)(1),
            t = (0, E.Z)(e, 2),
            r = t[0],
            n = t[1],
            o = (0, ct._1)().closeDialog,
            i = (0, F.v9)(es.Ec),
            a = (0, kl.v)(i),
            s = (0, T.k6)(),
            l = (0, F.I0)(),
            c = { 1: (0, G.jsx)(Pm, null), 2: (0, G.jsx)(Bm, null), 3: (0, G.jsx)(Am, null) },
            u = (0, F.v9)(es.Fo);
          return (
            (0, O.useEffect)(
              function () {
                var e = setInterval(function () {
                    var e = yf(a),
                      t = vf(a),
                      r = localStorage.getItem(e),
                      n = localStorage.getItem(t);
                    r &&
                      n &&
                      parseInt(n) >= parseInt(r) &&
                      (l(R.B.setPasswordSecurityFilterType(jo.Breached)),
                      l(R.B.setNotification({ dwmSubscriptionSuccess: !0 })),
                      s.push("/vault/security/passwords"),
                      o());
                  }, 1e3),
                  t =
                    1 == r
                      ? setTimeout(function () {
                          return n(2);
                        }, 15e3)
                      : null,
                  i =
                    2 == r
                      ? setTimeout(function () {
                          return n(3);
                        }, 3e4)
                      : null;
                return function () {
                  t && clearTimeout(t), i && clearTimeout(i), clearInterval(e);
                };
              },
              [o, r, l, s, u, a]
            ),
            c[r]
          );
        },
        Pm = function () {
          var e = (0, ce.B)();
          return (
            (0, O.useEffect)(
              function () {
                e.sendTracking(_a.Qk);
              },
              [e]
            ),
            (0, G.jsx)(
              "span",
              { "data-automation-id": "dwm-loading-dialog-1" },
              (0, G.jsx)(
                Pd.A,
                { width: "590px", notDismissible: !0 },
                (0, G.jsx)(
                  Om,
                  null,
                  (0, G.jsx)(Lm, null, (0, G.jsx)(km, null)),
                  (0, G.jsx)(Sm, null, (0, G.jsx)(M.Trans, { id: "Scanning the web for breaches..." }))
                )
              )
            )
          );
        },
        Bm = function () {
          return (0, G.jsx)(
            "span",
            { "data-automation-id": "dwm-loading-dialog-2" },
            (0, G.jsx)(
              Pd.A,
              { width: "590px", notDismissible: !0 },
              (0, G.jsx)(
                Om,
                null,
                (0, G.jsx)(Lm, null, (0, G.jsx)(mf, null)),
                (0, G.jsx)(Sm, null, (0, G.jsx)(M.Trans, { id: "The results will be available in a minute or two." }))
              )
            )
          );
        },
        Am = function () {
          var e = (0, ce.B)();
          return (
            (0, O.useEffect)(
              function () {
                e.sendTracking(_a.Wq);
              },
              [e]
            ),
            (0, G.jsx)(
              "span",
              { "data-automation-id": "dwm-loading-dialog-3" },
              (0, G.jsx)(
                Pd.A,
                { width: "590px", notDismissible: !1 },
                (0, G.jsx)(
                  Om,
                  null,
                  (0, G.jsx)(Em, null, (0, G.jsx)(wf, null)),
                  (0, G.jsx)(
                    Mm,
                    null,
                    (0, G.jsx)(M.Trans, { id: "The scan took too long this time." }),
                    (0, G.jsx)("br", null),
                    (0, G.jsx)(M.Trans, { id: "We\u2019ll try again soon automatically." }),
                    (0, G.jsx)("br", null),
                    (0, G.jsx)(M.Trans, { id: "Check back later for results." })
                  )
                )
              )
            )
          );
        };
      var Dm = (function (e) {
          return (
            (e[(e.UpToUser = 0)] = "UpToUser"),
            (e[(e.CompanyEnforces = 1)] = "CompanyEnforces"),
            (e[(e.CompanyDisables = 2)] = "CompanyDisables"),
            e
          );
        })(Dm || {}),
        Fm = (0, S.Z)("span", { target: "e5h0nst8" })({ name: "dhit8z", styles: "margin-left:15px" }),
        Im = (0, S.Z)(Sa.e.DefaultButton, { target: "e5h0nst7" })({
          name: "ogwwy2",
          styles: "border-radius:4px;border:solid 1px #bac0ca;margin-left:5px"
        }),
        Rm = (0, S.Z)(lc.LinkBold, { target: "e5h0nst6" })({
          name: "fxb73o",
          styles: "position:relative;top:-42px;float:right;right:15px"
        }),
        Vm = (0, S.Z)(Sa.e.RedButton, { target: "e5h0nst5" })({
          name: "1oi1a8p",
          styles: "border-radius:4px;margin-right:5px;float:inherit"
        }),
        Wm = (0, S.Z)(Sa.e.RedButton, { target: "e5h0nst4" })({
          name: "1r6seyp",
          styles: "border-radius:4px;margin-right:5px;float:inherit;position:relative;float:right;right:40px;top:-48px"
        }),
        Hm = (0, S.Z)("div", { target: "e5h0nst3" })({
          name: "v8gz9t",
          styles: "max-width:680px;font-size:16px;font-weight:600;margin-bottom:10px;color:#1b283c"
        }),
        Um = (0, S.Z)("div", { target: "e5h0nst2" })({
          name: "1qxdazb",
          styles: "max-width:680px;font-size:14px;font-weight:400;margin-bottom:10px"
        }),
        zm = (0, S.Z)("p", { target: "e5h0nst1" })({
          name: "1sb2wut",
          styles: "font-size:10px;font-weight:400;line-height:16px;color:#40526db2;max-width:680px;width:100%;padding-top:10px"
        }),
        Nm = (0, S.Z)("div", { target: "e5h0nst0" })(
          "padding-left:24px;padding-right:24px;padding-top:",
          function (e) {
            return e.dwmControlledByAdmin ? "20px" : "24px";
          },
          ";padding-bottom:",
          function (e) {
            return e.dwmControlledByAdmin ? "20px" : "24px";
          },
          ";background-color:#f9fafb;border-bottom:solid 1px #bac0ca;"
        );
      function qm(e, t, r) {
        return e
          ? (0, G.jsx)(M.Trans, { id: "You have 0 sites in your vault." })
          : t > 0
          ? (0, G.jsx)(M.Trans, {
              id: "You have {sitesInRisk} sites at risk. Fix them now to <0>improve your score by {improvementWithFix}%</0>.",
              values: { sitesInRisk: t, improvementWithFix: r },
              components: [(0, G.jsx)(lc.ImproveScore, null)]
            })
          : (0, G.jsx)(M.Trans, { id: "So far so good. None of your sites are at risk." });
      }
      function Gm(e, t, r) {
        return e ? zc.siteSecurityGray : t > 0 || !r ? zc.siteSecurityYellow : zc.check;
      }
      function _m(e) {
        var t = (0, T.k6)(),
          r = (0, F.v9)(Ed.d),
          n = (0, F.v9)(es.Fo),
          o = (0, tt.y)(),
          i = (0, F.v9)(es.kG),
          a = bd(r, n, jo.AllAtRiskPasswords).length,
          s = (0, F.v9)(es.DT),
          l = (0, F.v9)(es.zd),
          c = (0, F.v9)(es.mQ),
          u = (0, F.v9)(es.s4),
          d = (0, F.v9)(es.p4),
          p = (0, F.v9)(es.ym),
          f = (0, F.v9)(es.bx),
          m = (0, ct._1)(),
          h = m.openDialog,
          C = m.closeDialog,
          x = (0, ce.B)(),
          g = (function (e, t, r, n, o) {
            var i = t ? 0 : 20;
            r && (i = 0);
            var a = parseFloat((100 - e - (n < 2 ? 0 : 2) - i - (o ? 0 : 10)).toFixed(1));
            return a > 70 ? 0 : a;
          })((0, F.v9)(es.Ee), (0, F.v9)(es.iB).length > 0, (0, F.v9)(es.tE), (0, F.v9)(es.aE).length, l);
        return (
          (0, O.useEffect)(
            function () {
              if (p) {
                var e = (0, G.jsx)(Tm, null);
                h(
                  (0, G.jsx)(Vd, {
                    onClickNextButton: function () {
                      x.dwmTurnedOnDialogHasJustBeenDismissed(), h(e);
                    }
                  })
                );
              }
            },
            [p, t, o.path, h, x]
          ),
          (0, O.useEffect)(
            function () {
              var e = function () {
                x.dwmConsentErrorDismissed(), C();
              };
              f &&
                h(
                  (0, G.jsx)(Dp, {
                    onDismissClick: e,
                    onClickCancelButton: e,
                    onClickRetryButton: function () {
                      e(), x.dwmEnable(s, { triggeredByConsenting: !0 });
                    }
                  })
                );
            },
            [C, f, h, x, s]
          ),
          (0, G.jsx)(
            Nc,
            {
              icon: Gm(i, a, l),
              title: (0, G.jsx)(M.Trans, { id: "Site security" }),
              subtitle: (0, G.jsx)("span", null, qm(i, a, g)),
              isCollapsed: e.isCollapsed
            },
            !i && !l && !c && (0, G.jsx)(Ym, { dwmControlMode: Dm.UpToUser }),
            !i && (0, G.jsx)(cd, null),
            c &&
              (d && l
                ? (0, G.jsx)(O.Fragment, null)
                : (0, G.jsx)(Ym, { dwmControlMode: u ? Dm.CompanyEnforces : d ? Dm.UpToUser : Dm.CompanyDisables })),
            (0, G.jsx)(
              _c.Footer,
              null,
              (0, G.jsx)(
                _c.ShowMoreButton,
                {
                  "data-automation-id": "show-all-at-risk-sites",
                  tabIndex: 0,
                  onClick: function () {
                    x.sendTracking(_a.VX), x.setPasswordSecurityFilterType(jo.AllAtRiskPasswords), t.push(o.path + lC);
                  }
                },
                (0, G.jsx)(M.Trans, { id: "Show all at-risk sites ({sitesInRisk})", values: { sitesInRisk: a } }),
                (0, G.jsx)(_c.ExportIcon, { src: qc, width: 12 })
              ),
              (0, G.jsx)(
                lc.LinkUnderline,
                {
                  onClick: function () {
                    x.sendTracking(_a.G0);
                  },
                  className: "learn-more",
                  href: "http://link.lastpass.com/view-at-risk-passwords",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                (0, G.jsx)(M.Trans, { id: "Learn more about at-risk sites" })
              )
            )
          )
        );
      }
      var Ym = function (e) {
          var t = (0, F.I0)(),
            r = (0, ce.B)(),
            n = (0, F.v9)(es.DT),
            o = (0, F.v9)(es.Aq),
            i = (function () {
              var e = (0, qu.Z)(
                (0, Yl.Z)().mark(function e() {
                  return (0, Yl.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t(R.B.sendTracking(_a.T));
                        case 2:
                          r.openURL("https://support.lastpass.com/help/why-am-i-being-asked-to-share-information-with-enzoic");
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, G.jsx)(
            Nm,
            { dwmControlledByAdmin: e.dwmControlMode !== Dm.UpToUser },
            (0, G.jsx)(
              Hm,
              null,
              (0, G.jsx)(M.Trans, { id: "Dark web monitoring" }),
              e.dwmControlMode === Dm.CompanyDisables &&
                (0, G.jsx)(
                  Fm,
                  null,
                  (0, G.jsx)(
                    $l.u,
                    {
                      tooltip: { id: "Your IT administrator has turned off dark web monitoring for your organization." },
                      position: "top",
                      minWidth: 300
                    },
                    (0, G.jsx)(Gc.Grey, null, (0, G.jsx)(M.Trans, { id: "Turned off by administrator" }))
                  )
                ),
              e.dwmControlMode === Dm.CompanyEnforces &&
                (0, G.jsx)(
                  Fm,
                  null,
                  (0, G.jsx)(
                    $l.u,
                    {
                      tooltip: {
                        id: "Your IT administrator manages dark web monitoring for your organization. All of your sites are being monitored for exposure."
                      },
                      position: "top",
                      minWidth: 300
                    },
                    (0, G.jsx)(Gc.Green, null, (0, G.jsx)(M.Trans, { id: "Turned on by administrator" }))
                  )
                )
            ),
            (0, G.jsx)(
              Um,
              null,
              e.dwmControlMode === Dm.UpToUser &&
                (0, G.jsx)(M.Trans, {
                  id: "Receive alerts when your emails and passwords are breached. Turn on to <0>improve your score by 10%</0>.",
                  components: [(0, G.jsx)(lc.ImproveScore, null)]
                }),
              e.dwmControlMode !== Dm.UpToUser && (0, G.jsx)(M.Trans, { id: "Receive alerts when your emails and passwords are breached." })
            ),
            e.dwmControlMode == Dm.UpToUser
              ? (0, G.jsx)(
                  O.Fragment,
                  null,
                  (0, G.jsx)(
                    Vm,
                    {
                      disabled: o,
                      onClick: function () {
                        r.dwmEnable(n, { forceSecurityScoreRecalculation: !0, triggeredByConsenting: !0 });
                      }
                    },
                    (0, G.jsx)(M.Trans, { id: "Turn on" })
                  ),
                  (0, G.jsx)(Im, { onClick: i }, (0, G.jsx)(M.Trans, { id: "Learn more" }))
                )
              : (0, G.jsx)(
                  O.Fragment,
                  null,
                  (0, G.jsx)(
                    Rm,
                    { href: "http://link.lastpass.com/site-security-filters-and-statuses", target: "_blank", rel: "noopener noreferrer" },
                    (0, G.jsx)(M.Trans, { id: "Learn more" })
                  ),
                  e.dwmControlMode === Dm.CompanyDisables &&
                    (0, G.jsx)(Wm, { disabled: !0, onClick: function () {} }, (0, G.jsx)(M.Trans, { id: "Turn on" }))
                ),
            e.dwmControlMode === Dm.UpToUser &&
              (0, G.jsx)(
                zm,
                null,
                (0, G.jsx)(M.Trans, {
                  id: "By turning on dark web monitoring, you agree to share your monitored usernames or addresses with Enzoic to help protect your credentials."
                }),
                (0, G.jsx)(
                  ae.F,
                  { href: "http://link.lastpass.com/partnership-dark-web-monitoring", target: "_blank", rel: "noopener noreferrer" },
                  (0, G.jsx)(M.Trans, { id: "Learn more about how Enzoic protects you." })
                )
              )
          );
        },
        Xm = function () {
          var e = (0, F.v9)(es.kG);
          return (0, G.jsx)(
            lc.MainPageContainer,
            null,
            (0, G.jsx)(wc, null),
            e && (0, G.jsx)(du, null),
            (0, G.jsx)(_m, { isCollapsed: !1 }),
            (0, G.jsx)(Yc, null),
            (0, G.jsx)(Nu, null)
          );
        };
      var Km,
        Jm = r.p + "static/media/icon-arrow-left.b55ae5cfd963fed61c8f68103e2e544c.svg",
        Qm = ["title", "titleId"];
      function $m() {
        return (
          ($m = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          $m.apply(this, arguments)
        );
      }
      function eh(e, t) {
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
      function th(e, t) {
        var r = e.title,
          n = e.titleId,
          o = eh(e, Qm);
        return O.createElement(
          "svg",
          $m(
            {
              width: 14,
              height: 10,
              viewBox: "0 0 14 10",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Km ||
            (Km = O.createElement("path", {
              d: "M6.99966 0.624631C7.19046 0.624395 7.37912 0.664858 7.55304 0.743319C7.72696 0.82178 7.88215 0.936435 8.00824 1.07963L13.7313 7.58496C13.9122 7.80053 14.0016 8.07832 13.9803 8.35892C13.9591 8.63953 13.8289 8.90068 13.6175 9.08653C13.4062 9.27238 13.1306 9.36819 12.8496 9.35346C12.5686 9.33873 12.3045 9.21464 12.1137 9.00771L7.10933 3.31905C7.09564 3.30343 7.07877 3.29092 7.05986 3.28235C7.04095 3.27378 7.02042 3.26934 6.99966 3.26934C6.97889 3.26934 6.95837 3.27378 6.93946 3.28235C6.92054 3.29092 6.90368 3.30343 6.88999 3.31905L1.88558 9.00771C1.79327 9.11772 1.67991 9.20816 1.55215 9.27372C1.4244 9.33928 1.28482 9.37865 1.14163 9.3895C0.998447 9.40035 0.854536 9.38247 0.718359 9.3369C0.582181 9.29134 0.456486 9.21901 0.34866 9.12417C0.240836 9.02933 0.153057 8.9139 0.0904837 8.78465C0.0279102 8.6554 -0.00819588 8.51495 -0.0157108 8.37155C-0.0232267 8.22815 -0.00199986 8.08469 0.0467205 7.94961C0.0954399 7.81453 0.170671 7.69055 0.267991 7.58496L5.98933 1.08196C6.11564 0.938415 6.27106 0.823391 6.44526 0.744539C6.61946 0.665688 6.80845 0.624813 6.99966 0.624631Z",
              fill: "#40526D"
            }))
        );
      }
      var rh,
        nh = O.forwardRef(th),
        oh = (r.p, ["title", "titleId"]);
      function ih() {
        return (
          (ih = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          ih.apply(this, arguments)
        );
      }
      function ah(e, t) {
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
      function sh(e, t) {
        var r = e.title,
          n = e.titleId,
          o = ah(e, oh);
        return O.createElement(
          "svg",
          ih(
            {
              width: 14,
              height: 10,
              viewBox: "0 0 14 10",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          rh ||
            (rh = O.createElement("path", {
              d: "M7.00034 9.37537C6.80954 9.3756 6.62088 9.33514 6.44696 9.25668C6.27304 9.17822 6.11785 9.06357 5.99176 8.92037L0.268674 2.41504C0.0877878 2.19947 -0.0015787 1.92168 0.0196836 1.64108C0.0409459 1.36047 0.171149 1.09932 0.382453 0.913472C0.593756 0.727619 0.869388 0.631814 1.15041 0.646542C1.43143 0.661271 1.69554 0.785363 1.88626 0.992286L6.89067 6.68095C6.90436 6.69657 6.92123 6.70908 6.94014 6.71765C6.95905 6.72622 6.97958 6.73066 7.00034 6.73066C7.02111 6.73066 7.04163 6.72622 7.06054 6.71765C7.07946 6.70908 7.09632 6.69657 7.11001 6.68095L12.1144 0.992286C12.2067 0.882284 12.3201 0.791843 12.4478 0.726279C12.5756 0.660715 12.7152 0.621352 12.8584 0.610502C13.0016 0.599652 13.1455 0.617535 13.2816 0.663099C13.4178 0.708664 13.5435 0.78099 13.6513 0.875828C13.7592 0.970666 13.8469 1.0861 13.9095 1.21535C13.9721 1.3446 14.0082 1.48505 14.0157 1.62845C14.0232 1.77185 14.002 1.91531 13.9533 2.05039C13.9046 2.18547 13.8293 2.30945 13.732 2.41504L8.01067 8.91804C7.88436 9.06159 7.72894 9.17661 7.55474 9.25546C7.38054 9.33431 7.19155 9.37519 7.00034 9.37537Z",
              fill: "#40526D"
            }))
        );
      }
      var lh = O.forwardRef(sh),
        ch = (r.p, ["reportFilterType", "numPasswords", "open"]);
      var uh = (0, S.Z)(lh, { target: "e1qu3vbu2" })({ name: "1q4vxyr", styles: "margin-left:8px" }),
        dh = (0, S.Z)(nh, { target: "e1qu3vbu1" })({ name: "1q4vxyr", styles: "margin-left:8px" }),
        ph = (0, S.Z)("button", { target: "e1qu3vbu0" })(
          "border:none;outline:none;font-size:inherit;background-color:transparent;color:",
          function (e) {
            return e.theme.colors.blue700;
          },
          ";text-decoration:none;cursor:pointer;padding:4px 0;&:focus{text-decoration:underline;}&:hover{text-decoration:underline;}"
        ),
        fh = function (e) {
          var t = e.reportFilterType,
            r = e.numPasswords,
            n = e.open,
            o = (0, D.Z)(e, ch),
            i = n ? (0, G.jsx)(dh, null) : (0, G.jsx)(uh, null);
          switch (t) {
            case jo.AllPasswords:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "All ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.AllAtRiskPasswords:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "At-risk ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.Breached:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Breached ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.Duplicate:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Reused ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.Weak:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Weak ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.Blank:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Missing ({numPasswords})", values: { numPasswords: r } }),
                (0, G.jsx)(uh, null)
              );
            case jo.NotMonitored:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Not monitored ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.Excluded:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Excluded ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            case jo.Secure:
              return (0, G.jsx)(
                ph,
                o,
                (0, G.jsx)(M.Trans, { id: "Secure ({numPasswords}){dropdownArrow}", values: { numPasswords: r, dropdownArrow: i } })
              );
            default:
              return (0, G.jsx)(O.Fragment, null);
          }
        },
        mh = function (e) {
          var t = e.type,
            r = e.count;
          switch (t) {
            case jo.AllAtRiskPasswords:
              return (0, G.jsx)(M.Trans, { id: "At-risk ({numPasswords})", values: { numPasswords: r } });
            case jo.AllPasswords:
              return (0, G.jsx)(M.Trans, { id: "All ({numPasswords})", values: { numPasswords: r } });
            case jo.Breached:
              return (0, G.jsx)(M.Trans, { id: "Breached ({numPasswords})", values: { numPasswords: r } });
            case jo.Duplicate:
              return (0, G.jsx)(M.Trans, { id: "Reused ({numPasswords})", values: { numPasswords: r } });
            case jo.Blank:
              return (0, G.jsx)(M.Trans, { id: "Missing ({numPasswords})", values: { numPasswords: r } });
            case jo.Weak:
              return (0, G.jsx)(M.Trans, { id: "Weak ({numPasswords})", values: { numPasswords: r } });
            case jo.NotMonitored:
              return (0, G.jsx)(M.Trans, { id: "Not monitored ({numPasswords})", values: { numPasswords: r } });
            case jo.Excluded:
              return (0, G.jsx)(M.Trans, { id: "Excluded ({numPasswords})", values: { numPasswords: r } });
            case jo.Secure:
              return (0, G.jsx)(M.Trans, { id: "Secure ({numPasswords})", values: { numPasswords: r } });
          }
        },
        hh = (0, S.Z)("div", { target: "e8ghe641" })(
          "position:absolute;z-index:200;width:250px;border:1px solid ",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";box-shadow:",
          function (e) {
            return e.theme.elevations.elevation300;
          },
          ";border-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";background:",
          function (e) {
            return e.theme.colors.neutral;
          },
          ";"
        ),
        Ch = (0, S.Z)("div", { target: "e8ghe640" })(
          "background-color:",
          function (e) {
            return e.selected ? e.theme.colors.neutral200 : e.theme.colors.neutral;
          },
          ";cursor:pointer;white-space:nowrap;padding:16px;&:first-of-type{border-top-left-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";border-top-right-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";}&:last-of-type{border-bottom-left-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";border-bottom-right-radius:",
          function (e) {
            return e.theme.radius.pixel8;
          },
          ";}&:hover{background-color:",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";}"
        ),
        xh = function (e) {
          var t = e.open,
            r = e.children;
          return t
            ? (0, G.jsx)(
                hh,
                {
                  onMouseDown: function (e) {
                    e.preventDefault();
                  }
                },
                r
              )
            : null;
        };
      var gh = [
          jo.AllPasswords,
          jo.AllAtRiskPasswords,
          jo.Breached,
          jo.Duplicate,
          jo.Weak,
          jo.Blank,
          jo.NotMonitored,
          jo.Excluded,
          jo.Secure
        ],
        wh = function () {
          return !0;
        },
        yh = function (e) {
          return e !== jo.Excluded;
        },
        vh = function (e) {
          return e !== jo.Breached && e !== jo.NotMonitored;
        },
        jh = {
          Container: (0, S.Z)("div", { target: "ey0nkzz2" })({ name: "990t32", styles: "margin-top:28px;display:flex" }),
          FilterBy: (0, S.Z)("div", { target: "ey0nkzz1" })({
            name: "1lm08kl",
            styles: "position:relative;margin-right:8px;top:2px;font-size:14px;line-height:20px"
          }),
          Label: (0, S.Z)(fh, { target: "ey0nkzz0" })({
            name: "1etui7n",
            styles:
              "border:solid 1px #bac0ca;border-radius:3px;padding:4px 12px 4px 16px;text-decoration:none;color:#1b283c;font-weight:600;padding-right:20px;font-size:14px;&:focus{text-decoration:none;}&:hover{text-decoration:none;}"
          })
        },
        bh = function (e) {
          var t = e.reportFilterType,
            r = e.resultCounts,
            n = e.isExcludedPasswordsEnabled,
            o = (0, ce.B)(),
            i = (0, O.useState)(!1),
            a = (0, E.Z)(i, 2),
            s = a[0],
            l = a[1],
            c = (0, F.v9)(es.zd);
          return (0, G.jsx)(
            jh.Container,
            null,
            (0, G.jsx)(jh.FilterBy, null, (0, G.jsx)(M.Trans, { id: "Filter by" })),
            (0, G.jsx)(
              "div",
              {
                tabIndex: 0,
                onKeyDown: function (e) {
                  if ("Escape" === e.key) l(!1);
                  else if ("Enter" === e.key || " " === e.key) l(!s);
                  else if ("ArrowUp" === e.key) {
                    l(!0);
                    var r = gh.indexOf(t);
                    r > 0 && o.setPasswordSecurityFilterType(gh[r - 1]);
                  } else if ("ArrowDown" === e.key) {
                    l(!0);
                    var n = gh.indexOf(t);
                    n < gh.length - 1 && o.setPasswordSecurityFilterType(gh[n + 1]);
                  } else "Tab" === e.key && l(!1);
                },
                "data-automation-id": "site-security-filter-by"
              },
              (0, G.jsx)(jh.Label, {
                tabIndex: -1,
                reportFilterType: t,
                numPasswords: r[t],
                open: s,
                onClick: function () {
                  l(!s);
                },
                onBlur: function () {
                  l(!1);
                }
              }),
              (0, G.jsx)(
                xh,
                { open: s },
                Object.values(gh)
                  .filter(function (e) {
                    return "number" === typeof e;
                  })
                  .filter(n ? wh : yh)
                  .filter(c ? wh : vh)
                  .map(function (e) {
                    return (0, G.jsx)(
                      Ch,
                      {
                        "data-automation-id": "site-security-filter-".concat(e),
                        key: e,
                        selected: t === e,
                        onClick: function () {
                          o.setPasswordSecurityFilterType(e),
                            l(!1),
                            o.sendTracking(_a.n7, { "Previous Filter": jo[t], "Current Filter": jo[e] });
                        }
                      },
                      (0, G.jsx)(mh, { type: e, count: r[e] })
                    );
                  })
              )
            )
          );
        };
      var kh = r.p + "static/media/icon-info.f339cb40b6814145cd5354bf05edbe6b.svg";
      var Lh,
        Eh = {
          Information: (0, S.Z)("div", { target: "e1u1yces6" })(function (e) {
            return e.isDisplayed ? "display: flex;" : "display: none;";
          }, " width:100%;min-height:40px;background:#e8f3ff;border:1px solid #007aff;border-radius:4px;align-content:center;flex-wrap:nowrap;flex-direction:row;align-items:center;box-sizing:border-box;line-height:24px;font-size:16px;font-weight:400;color:#1b283c;"),
          BoldText: (0, S.Z)("span", { target: "e1u1yces5" })({ name: "1j389vi", styles: "font-weight:700" }),
          SecurityTip: (0, S.Z)("span", { target: "e1u1yces4" })({
            name: "jqm4dj",
            styles: "padding:10px 14px;font-style:normal;font-weight:400;flex:1"
          }),
          Icon: (0, S.Z)("img", { target: "e1u1yces3" })({
            name: "4hszmg",
            styles: "width:20px;height:20px;padding-left:14px;padding-top:10px;padding-bottom:10px"
          }),
          CloseIcon: (0, S.Z)("img", { target: "e1u1yces2" })({ name: "1bbg8ov", styles: "width:14px;margin-right:20px;cursor:pointer" }),
          StyledLearnMore: (0, S.Z)(ae.F, { target: "e1u1yces1" })({
            name: "1y3t620",
            styles: "color:inherit;text-decoration:underline;text-underline-offset:3px"
          }),
          Title: (0, S.Z)("p", { target: "e1u1yces0" })({
            name: "2zuk2a",
            styles: "font-weight:400;font-size:16px;line-height:24px;padding:24px 0"
          })
        },
        Zh = function (e) {
          var t = (0, O.useState)(e.visible),
            r = (0, E.Z)(t, 2),
            n = r[0],
            o = r[1],
            i = (0, F.I0)();
          if (
            ((0, O.useEffect)(
              function () {
                o(e.visible);
              },
              [e.visible]
            ),
            !e.securityTip)
          )
            return null;
          var a = function (t) {
            o(!1);
            try {
              e.onClose(t);
            } catch (r) {
              console.error(r);
            }
          };
          return (0, G.jsx)(
            Eh.Information,
            { isDisplayed: n, "data-is-displayed": n },
            (0, G.jsx)(Eh.Icon, { src: kh }),
            (0, G.jsx)(
              Eh.SecurityTip,
              null,
              (0, G.jsx)(Eh.BoldText, null, (0, G.jsx)(M.Trans, { id: "Security tip" })),
              ": ",
              e.securityTip,
              (0, G.jsx)(
                Eh.StyledLearnMore,
                {
                  onClick: function () {
                    i(R.B.sendTracking(_a.Y1, { Action: "Learn more", Filter: jo[e.messageId] }));
                  },
                  href: "http://link.lastpass.com/site-security-filters-and-statuses",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                (0, G.jsx)(M.Trans, { id: "Learn more" })
              )
            ),
            (0, G.jsx)(Eh.CloseIcon, {
              onClick: a,
              onKeyDown: function (e) {
                (" " !== e.key && "Enter" !== e.key) || a(e);
              },
              src: Za,
              tabIndex: 0
            })
          );
        },
        Sh = r(83655),
        Mh = {
          AllPasswords: (0, G.jsx)(M.Trans, {
            id: "Are your passwords strong and unique? Have your sites been compromised in a breach? Find out here."
          }),
          AllAtRiskPasswords: (0, G.jsx)(M.Trans, {
            id: "Your personal info for these sites has appeared in a breach, or your password for these sites is weak, reused, or missing."
          }),
          Breached: (0, G.jsx)(M.Trans, {
            id: "Your personal info for these sites has appeared in a breach at another company or service."
          }),
          Duplicate: (0, G.jsx)(M.Trans, { id: "These sites have a password that matches another password in your vault." }),
          Weak: (0, G.jsx)(M.Trans, { id: "These sites have a weak password." }),
          Blank: (0, G.jsx)(M.Trans, { id: "These sites don\u2019t have a password saved in LastPass." }),
          Secure: (0, G.jsx)(M.Trans, {
            id: "We consider these sites secure. They haven\u2019t been compromised in a breach, and each has a strong, unique password."
          }),
          Excluded: (0, G.jsx)(M.Trans, { id: "You\u2019ve chosen to exclude these sites from your security score calculation." }),
          NotMonitored: (0, G.jsx)(M.Trans, { id: "You chose to stop the dark web monitoring service for these sites." })
        },
        Oh = {
          AllPasswords: null,
          AllAtRiskPasswords: (0, G.jsx)(M.Trans, {
            id: "Take action to protect your personal information. Change your password for each breached site. Always use strong and unique passwords."
          }),
          Breached: (0, G.jsx)(M.Trans, {
            id: "Take action! Change your password for each compromised site. Your LastPass vault remains secure, as always."
          }),
          Duplicate: (0, G.jsx)(M.Trans, { id: "Never use the same password on multiple sites. Hackers love reused passwords." }),
          Weak: (0, G.jsx)(M.Trans, {
            id: "Create passwords or passphrases that are long and difficult to guess. Avoid common phrases, keyboard patterns, and single words."
          }),
          Blank: (0, G.jsx)(M.Trans, { id: "Save a password for each site to make automatic login easy." }),
          Secure: (0, G.jsx)(M.Trans, {
            id: "To make this list longer, resolve any breaches and generate strong, unique passwords for all your sites."
          }),
          Excluded: (0, G.jsx)(M.Trans, { id: "Always use strong and unique passwords for all your sites!" }),
          NotMonitored: (0, G.jsx)(M.Trans, {
            id: "You won\u2019t receive alerts if your information for these sites is compromised on the dark web."
          })
        },
        Th = function (e) {
          var t = (0, F.v9)(Sh.C),
            r = "callout_dismissed_".concat(jo[e.messageId], "_").concat(t ? t.hash : ""),
            n = !0;
          localStorage.getItem(r) && (n = "false" === localStorage.getItem(r));
          var o = (0, O.useState)(n),
            i = (0, E.Z)(o, 2),
            a = i[0],
            s = i[1],
            l = Oh[jo[e.messageId]],
            c = Mh[jo[e.messageId]],
            u = (0, F.I0)();
          (0, O.useEffect)(
            function () {
              s(!!l && n);
            },
            [n, l, e.messageId]
          );
          var d = (function () {
            var t = (0, qu.Z)(
              (0, Yl.Z)().mark(function t() {
                return (0, Yl.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        u(R.B.sendTracking(_a.Y1, { Action: "Close", Filter: jo[e.messageId] })), localStorage.setItem(r, "true"), s(!1);
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(Eh.Title, null, c),
            (0, G.jsx)(Zh, { messageId: e.messageId, securityTip: l, onClose: d, visible: a })
          );
        },
        Ph = r.p + "static/media/icon-safe.43d509876bbfe94327b9.png";
      var Bh = (0, S.Z)("img", { target: "edt7g352" })({ name: "1vb5au9", styles: "width:240px;height:240px" }),
        Ah = (0, S.Z)("div", { target: "edt7g351" })({ name: "1auj88d", styles: "margin-top:73px;text-align:center" }),
        Dh = (0, S.Z)("div", { target: "edt7g350" })({ name: "1yjx7km", styles: "padding:20px" }),
        Fh = nt.sM.withComponent("div", { target: "edt7g353" }),
        Ih = nt.Fy.withComponent("div", { target: "edt7g354" }),
        Rh =
          ((Lh = {}),
          (0, Ds.Z)(
            Lh,
            jo.AllAtRiskPasswords,
            (0, G.jsx)(M.Trans, { id: "None of your sites are at risk due to a breach or a weak/reused password." })
          ),
          (0, Ds.Z)(Lh, jo.Breached, (0, G.jsx)(M.Trans, { id: "None of your sites have been involved in a breach." })),
          (0, Ds.Z)(Lh, jo.Duplicate, (0, G.jsx)(M.Trans, { id: "All of your passwords are unique." })),
          (0, Ds.Z)(Lh, jo.Weak, (0, G.jsx)(M.Trans, { id: "All of your passwords are strong." })),
          (0, Ds.Z)(Lh, jo.Blank, (0, G.jsx)(M.Trans, { id: "All of your sites have passwords saved in LastPass." })),
          (0, Ds.Z)(Lh, jo.Secure, (0, G.jsx)(M.Trans, { id: "All of your sites seem to be at risk in some way." })),
          (0, Ds.Z)(
            Lh,
            jo.Excluded,
            (0, G.jsx)(M.Trans, { id: "All of your sites are included in the calculation of your security score." })
          ),
          (0, Ds.Z)(
            Lh,
            jo.NotMonitored,
            (0, G.jsx)(M.Trans, { id: "All of your sites are being monitored for exposure on the dark web." })
          ),
          (0, Ds.Z)(Lh, jo.AllPasswords, (0, G.jsx)(O.Fragment, null)),
          Lh),
        Vh = function (e) {
          var t = (0, G.jsx)(Bh, {
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAAD1CAYAAACIsbNlAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5gcGCgQM+8/dCgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAgAElEQVR42u2dfXAU553nv093z7RGLyMQHoEQYJAl9lgEe7aDbLwOiWy51gZXLTi3kKy968Suw3d1ULnKbVUr3rxUXE4OpTZ1lwq+S9i199hLsgd7R8gdJt7z5PBbIJYNlEGEBCkCI4RgBMKa957p7uf+GM0gobd565me7t+nyhUIM9JMT3/m9/K8Mc45CIKwDwJdAoIgqQmCIKkJgiCpCYIgqQmCACS6BJWFwTkMALoBcJ76e3oEQzcAg6OFAy2THt8147c5Y/70n0UGPwAwBgiMgTFAFBhEBoABIlL/H1EZMBrSsh6cAzo4dAPQdA6Dc2gGujh4C+e3hS3pjcIwKDG2Ly28JDAIAiCR7SQ1MV1gjacE1g0DCR1ds0VXq+ISWHdadFEk0Ulqh0qc0Dh0g0PjfGe5oq+ZUd0lsH0uUYBEkpPUdq2DEzqQ0AxbSjwfAoPfJQp+l8DgEhkEcpykrkSSRioaJ3Recel0KdJ1WRJIcJK6ckRWdcNx0ZgEJ6ltVSPHNQMJnUMz+B66IoULLktkN0ldpqgcSxhIksim1eDVLoGiN0ldmqgc140uwwDVyRS9SepKlzmmUa1czuhd7RL9JDdJXRAGB6JJA6pmUIptIbmrJMEvS5Sak9QkM8lNUpPMROXI7XHRgkOSmmpmqrlJansS1wxEkySzneSuk0W/5OCc3LFSJw2OSEJv0Q3sJBXshywJ3U4d53ac1JwDEaqbnXFzMwx6JGGf0+ptR0lNqbZzU/L6KsnvlKjtCKkNDoRVnaZ0Opxql9DthKhte6kpOhNOi9q2lZpzIJwwkNCpdiacFbVtKXXS4AgndFp0QcyJS2DdtbJouw657aSOJg3EkhSdiezT8RqX6HfbaNKKbaTmHAhRM4ygdNweUusGEExolG4TBeEWWXeNu/LT8YqXWtUMRKi7TRQxHa/07nhFS031M2GKFAyDtS5xX6XW2RUpNU31JKjOtpHUnAPjqkYLMQgS2w5SGymhqSFGlJQqSeiucQskNQlN2AlZTIldCceCVYTUJDRhBUTG9tVXiYNWF9vyUusGMK5qNGRFkNh2kNrKQqsaVz4eT6DGJaDZ6+qh253EJqmzSLk/iVtX6PM3VKiaAQBY5nWR2CS2ZRCsKvS4qnVZXWhZSl2+K8EkhoNJhW5156BzvnM8rrdYMSYKVhXaik2xyUJXuwW0N8poaXCT2A4WO5IwSGq7CL3mLhmSwOCrlkhsB6Pqxp6wapDUM8E5EFS1lkoSOg2JTWLHkgZJfSfhhAErTv2cT2gSmwCAaNLYE9cMknrSBbHsXmKjUS3T5V69aGahJ4vtq5YyYhPOIpIw9mg6J6njmrWXT/pqpEyX+8LNODRj9g9tNKJhNKoBSA1z2Y1QRFXe6R1QTvUNURYyC8GEvtMos9dlHafWDeCTuGb55ZOqzpXzo+kUnGHNXVXTIvZoRMPgrURGaLuNW4ciqvLFv9qPkUAQANC2yof9f/Msjc3PFCkZ/AuqJH+5xrDLFqkNntqCqBI+JFlkPWt8MmRJQDTBcf7G1Ihtd6EB4N3e/ozQANB/cRTv9PZTxJ753u4Kqbrz0u9KW6Axm9hOEBrAFKHThCMJMngWkgYvW0e8LFJHkwYqccXVnWL3BeKOEJrI+z4vS+Os5FKrGq/ofcUmi61qnIQm5qQcjbOSSm1wIKrpFb8mOi22VxZw9wI3CU3MCudoCZe4vpZK+q1l0Rlj+YtdRXctkVV9HdeM7iqpNDG0ZJE6mrTmjDGCKAWRhLFHK1EeXhKpDQ7an7vEhCKqEoqoSiW9Xrt/JmHVKMlSzZKk3+OqRnuLlZADR04qrx08jlBExY4n71e+/KXOgmv+2hp5hv/PXRSZu3sO4/S5ITQ1epXntv8xtnSutWWPQud8Z1wzTN9y2PRIXanDV5XKSGBc+f7fH0MooqYFx8t73yg4Cm7qaEVt9e0ewhKfF20rGwsWetc3/wdOnxuaeO1BfHvvLxCO2jdqR5Pmp+GmSk1pd+lJCzKZo8f6Cha7qbG+Z//3/gLbn7wf25+8H6+8tANNjfU9hQrdf3F02r9dGAzYPg038+ebOvc7GKejZUt+w0RU5al/87cIR+PT/m1zZzu+tuvxsqe2cwm9xOfFoR/utP0QYY1bMK0bblqkVjVOQpeB2hq555WXdkxJlYsZsc0UurZaRo+y1RGfUzRpmDYpxRSp7TLJpFJpW+WzrNhzCf3KSzvQtqrRERN5OEdLJKFXjtRxao5ZXuxyrIk+eqxPIaFvk9C5KXPDiy61wYEYHTFrebGvjQZL/npmWunlVKEnpeHWlzqaNMgmi4tdWy3j3rXLSv5aNnW0TXsdThYaSE0hTS8MKhZF7X4nDY5gXKcobUFGAuPKgddPIRxWsePJ+8om0khgXHn1wAkAwPM7NhY0LGYXGMPgwippX7F2Simq1DSERRD5UczD7YuWftMQFkHkT0wzdhYrvhZNahrCIoj84Rwtxdo3vChSqxqnISyCsEi0LsoqLaucTEAUl1BEVQ4eOYkLlwIIR1Q0+eqxepUPrSsbcV/7ctrtxaRoXWhtXXCjjDre9qT/YkDZ9c0DmdVed1JXI+PTHW3Y/Nm1JHgRKUYnvGCpqeNtP0YC48qubx7ASCCIro1teHbrhtRnHVHRe+ZjnP99AL1nL2cev7mzHc9vp+GpYlHtFro9BSz2KEhqgwO3YhoJbTOOHutTXt77BrY9tg57vrJlxscMXx9H75nL+MFP3sPw9XE0NXqx91s7SOwiIDD4F3okf97PL+SX0+wxu0p9DgDQ9eDqWR/TvLge2x5bh//e8+fo2tiGkUAQqeg+Tqd2FIjB0VXInHChgF8MleZ425JTExstPPBHK+Z9bPPierzyjc/h0U1/iJFAEC/vfYMuYBEoJGDmLXXSAkd2EsXn9LnU6q2OdStQN8O+ZLPx7Oc/A49HxulzQ2VZAXYtrCmDYwlFM7gy279V0ueQNPgePc/SOG+pabKJPXk9nXo/tDqn59XVytj0mfVT0vdSciuWOkZ44oyzjMBXgknl408SGI1qmEl4K5PQSih10qDJJvaN1KmudtfGtpye5xIYPvPZlNTvfNBf8tfd0jDt8ELlSjCpDAeTqX9f6IYksIpq4uU7GSUvqYu9VIywTuo9EgiieXE9mhfX5/xF7/HIaGioQziiYiQQLGlUvPPwwo+uxTFZaF+NVHFdec7Rksxjz6OcpaYGmX155/2BvKI0cLvH0tx8FwBgJDBe8tefFlsSWOb88LsXVKbQaeJ5NMyEfD88woZST6TNTz22Pq+SDACqPKnmWjl2VgGA0YiGyftqj0aTFVdL33Fd9+SagucstUrzvG2fev+Lltw36bfCbTG5hr57gXtajV2x0Vo3zJPa4KApoTYl3fVOTwnNlVgideN5PKmjeIpxJE++QrcsdGNJrTSlxq5ksZM59rBykppSb3sSjqhKIfU0AMTuCNVNjfUle/26wXfO1BS7s3kWSlRmlplrCp6T1JR627SW7u1HOBpH18a2nLveABBUb98XV4dvAAB4Cb//RYHta2lwY41PntYUS4t99wI36txCxX5GuaTgWa+nptTbvrx68DgAYFvX+ryeH5vUoY3FEmV5D77q2Tvcssh6ltRKFf0ZJTUOT5ZvIeuvLkq97cnkBlnXQ/ml3jdjWubPY2MhAMBqB2/7W+4UPGupEyS1PaP0gVSU3v30w3n/jHT6HYupiMVUtK300YU1gWwdzFpqzTBoWqgNo/Spc0OZZZR5Sx1PnQk1fOUmAKC2poourinR2iie1EmDw+A019tuvLz3FwVH6bGYnpnsMTzRJFu9iiK1SZF6Z/GkptTbdhw91peppYsRpQHg9wPDAIB71y6nC2wCnKMlm+WYWUmtkdS2InUEz0l4a6rw4guPFvSzrkVuN8nSkbptZSNd5DLW1dmm3zSUZSMOvn4K/RdHse2xdnRtXF3Qz0pH6rGxEMbGQlji89I+ZSaiGUWQOmlQlLYTB46cVA4cOYnmxfXY/cynC/pZU+rpK6lzp9tWUZQ2k2QWdfW8UusktW3ovxhQvv/3xwAAL77waE7bFc3Ezejt1Lvv7CUAwH1UT5teVxvz1NXzR2qdLqRd6uju7x4GkOp2F5p2A8DNmD6tnqYmWSmidYGRWuM0Pm0HodOb8z+79VPY9czDBf/MWNLA2ESkHhsLYXj4Bpb4vDSTzAJ1tTRPqHfsXmT9FwPKbEfOTKZtVSP6LwbQ1JhqEGX7vFIdVXO6b0jp/u5hhCIqnupahxdfKM7HOTlKD/QPT7ynFWRcSaQ25ozH0txR2nn19GQJsqHlbh8GPx7FA/ffg62P36t89dv/M6vnNTV6lee2/zG2dK41Te4DR05mauhnt36qaEIDwLVwclI9fXEi9V5GxpUAnWMngH15Se20Jlm67gxFVLS2LkVDQ928z9nwwBp88P55NC3zgdfVY9Nn1iMem/sLYWwshIGBq/j23l+gyedVih21RwLjyst738DpiU35dz/9cFFS7sksqXVhSa0rFakHrqYiNdXTJSHdLBNmOUVPKqQgtxuvHjyBUETFnzyxAY8/nv0OIK2tSzN/3vZUdvK8/fZHOHzoV3j14HHc176jKK8/ffTswddPIhRR0by4Hnu+sgUd64ufFi/zpoR+/8zlzCIOGp8uHUkdkKW8ampnReprEztgrlu3aupFEhgWT0Sl+RoYN6MaFte6MBbVENMMNHtn3tZnW9d6HD70K/RfCuDosb45t9lZ4qufswa/U+Z0ur37mU8XPGw1H788cQEAsKmjjUwraQrOAeQRqXXOHdkkS++zBQCrFrrRtii17Ww2BOM6vFUignEdYzEdKxfOtldXaiVTOKJmdf5UU6NX+fKXHsGmjtaeuWTuWLcCu5952JToPBP+E/0T9TSl3qVkrrFqaY683fErs5Z5XVjjy20ZobdKzPxv+s9zPr5GxqPzjBkPXx9H79nL6O45jP/2vb9UImEVf3fweKZmLqbMh948i5/5z2aZ7scxfH18onQ5jlcPoiQb+7WtasSmDa2OPux+rn7XrFI7sfN9J81el+m/o662Cnv+w5Z5H/edH/mx//CH2P2NA5mo7K2pyszfLlZk/uWJC+g9cznn503+gjGb0+eGcPDISTQ1ehWnnok9Vwd8zkjtdKrdomVey7NbN2D/4Q8RiqiZ1VVdD60ues38yjc+l4m+ViMYjiMUUXH+9wHs//kHGL4+js/927/FX+96QjFzaNCKcI4WzoGZGuDSXE0fwpq8+MKjBa2BnjdDWVxvyfedfl0d61fg2W2fwn/6h3fxw3/8lWlDg5YXGxxshmaZMHshTvJYEW+NbKrQlcSfP7Uxc3xuekdUJzHbjt2zS01WW5K6Wtr/K00saWDbUw+X9bD7MqfguUlNEFZnXE3NjtrQ8QcAgP5LAUe9/9m2NppVah200SBh7SidPmqnuTm10WH/xVFHXYOcI7VhcJKasCwXbqqOvwYcOUZqgrAq/TfVTJQGgOHhVIRuavQ66jrMtg34jENa1CMjrIhmcFy4qeLSranndd1e+klTVSlSExWFJDC47piD/8+/+CCzi6nTxqlnW5sh5FKAE0S5aVskY/3i1LDeO2+dwRtvfAAA+PruJ+jizJl+g6wmSseVHKalhiIqej+6jENvncdvL6S2UXp++0O4d+1yWss9l9QEUSr8J/rx7176X3k9d4nPi6/vfsKxQnOghaQmLEdzoxdrWhoRDGc3RBWKqAhG4gCAa6NBnOobcmyDjHOSmrAga+5ZjMOvPJfTc4avj2P/4Q+w//CHePXgcYyMBpWv7Xrc1Gitalw5fyM+7+NEAbhnoYxql1C27IG630TlRffF9XjxhS7803/ZiYaGOhw91ocDR06aOu97NKpB1fi8/0UTHGOx8m7uVxKpVY0rQVVXoklDoVuSKBaLfV584elHAKRWaYWjqun31+JaCf9yiWfG/xbXWiPxNfVVDAeTyrWwNmVttiwxpdnrgq9aom4lURCxpIHW1ma0ti7FwMBVXBgM4L52c+trSWCQJTbrv1kBUyK1ZnDl/GhcuRJMQjM4ZInBKwuQJQGqxjE4lsDgLdVyUXv7k/fjkc4/QkODl4ypANJnY7evS/WL3v2g31HvX2DwZx2pBRT2jTMcTCKoGpAlhpaFbnjl29sC3Yrp+Hg8idGIDllMKs1el2Ui9qaO1h7fqmVKUDXImAqI0umzvDwemS7IfJGaFeC0qnHlWliDJDCs8VVNERoAFnpErPGlPoSJSE51NpEzvx6K3hY8Riu2TE2/b8VTnb8FVSJkceZvB1lkuKs6lSTciNJZuUROpR3OXIshNmkvn6sTx+i2rnTWgfciY/7sI3UBvyiSSF1sb9Xc3xfpPbGtvMHhbwIxy72+5sZ6xwqdNDjevRTBlUnLLlPnkk2cukmrtGavqVkJmniVcPje9bCGpAFIFhrND0Xijr1ZXQLDg8ur8euhaCZSHz70HsbGQtjc2V6S/b+vhzXcmKjlp9/Tpb0eTMgx/RaEmUP7fNS4Uz/y1jwD8Ldi2pTHW4FXDx5XXvr2AUvXaMGIs+tHj0vAg8urEfokhFd+cBhnz17EEp8Xz2/faOrvrXEJmcxytokn6axutiGvokudS6QuBF+1eGs4yBbeiukIqvq0RhkAXAtrme74wirRMt3v031D+HhoFLGYSh3VkmUeKg7937OZ+dzZZCrnBwOZU0SW+Lx45SXzT+lY6BF77l/qUeaLxqIASAIryT2d81G2EmP+BHLfp0wU2L6lXkm5/EkS50dVLPO6cFe1BFliUDWOG1EtUxOV4libXKitqYLHI5PQJeT9M5fxnX15JYVoW+XD3m99HnU1ckkkkgTWY6VSbLYyWcr1CdnQVOvq0Q0ow8Ekrkz8dyd3L3BbblbZHuVPe3ovjStccpFtJaJj/XLsevrhrB8fisTRe+Yyzg8G0H9xFF/8q/3Y+60dihPP0xJzjdSFznhb5nX1+Gok5cp4EtGkgWgylW4vqBLRWCOVdRXLXNTVyEhPPlm/xAOPxMg8E/HWVGH3Mw/n/Lzh6+P4C+WnGL4+jl3fPID933tWqa2WHSW2kGtNLRRhHqsssp57GtwVe9EWVdPKVKvSvLge/7j3X+O5r/4UAwNX8Z9fO4av7XrcWZF6FkeFXL8F7Mypc0PK/z7Sm/l7NEETY6xM0uD4wtOPwuORcfRYX0lWaVmJ2UpkYY6mgONuktcOHMfPj/RibCwIAHj/ShQxjfZrsypBVUdDQx3a160CALz+//oc894lAd05B2SBSknC4lwPpeY6tLY2AwCujY475r3PVR4L8zzRT7cOYUWuBJOZWWUej/NGK+ZaSTmn1BJzttSrFrrhog2fLEcsaeA3gduTVcbGwgCA2mrnHPPrEmeXes72rtNT8JULZUf2FqzMWEzHRyNTF9r0nR0EkJqM4pxIjfykFkUGaHQjEdaQeWg8MeVgvFSUDmFg4CqW+LzY1NHmmHFqKd9I7RYYInQ/ESXiZlRD/9jUw+80gyOaMGZcAjs2llrUAQBbOtsdc53m6nxnlX4LDH6D0wH0hPksqpZwPaJNO9VyWk0dU/HOW2fw9ttnEIup2NTRiud3POSYKD3fxLB5p0yJjPkNTgfQE+Zx6M2z+Jn/LIDUhJJQfPZJP2NjIYyNhTJ/3/Hkffjylx5x1PRQqWCpBYYkHVhNmMjw9fHMUspsqK2WsamjDVseWevIc7RcrECpXSJDnJplhIl8cdsGPLB+BYavj+PQm2fRezYl+ObOdjy//aFpj29q9Dp6z/i5mmTZSU1DOnNihEK49fNDEOu8WPCn2+iC5EFdjYyO9SsAANseW4eD/3wG3/nRL3H0WB/aVvqw48n76eCH2z52z1tzz/cAxgApix/kVPr/bCtGvvsfceXrX0Xgv+6lC1IEtj22Dl94uhNA6Y7TsUuUzkrqbApzp5K4Oozk1eHM3yMf9pr+O0PhOEI236csluRYt64Fra1LEY6ojlqoMR9uoUhSu0WSesbrsrQZNZ/qyPx98p/NIhhR8YMfv2tzqVNzujd0rEllQxdH6WbLIVJntQsARerZWfXaPyB47JcQ6+pKIjUA7D/8Ic4PBrDr6YfxwEQtaieuhVOzxlrblgIATv/mMt1oWdbTWUvNWOoHJg2+hy7tdLydj5bsdy3xpQ7v6z1zGX955qfoWL/CVnLHksa0qaDEhNRZbq2V9RokN+3VVVbS+303Ndbj0A939vz1rsexxOdNya38FP/qKz/GT45+VNGbOmgGn3JG1tjN0MQXWT3dAABkMTtds96Eyy0KiIBOgywX/hMXMlIDwJbO9p4tne14/Vif8uqB4zh7/grOnr+CvT95D3+29UF0rF+BP1zRgAaPWEFCR6ackZU+Tme1g1ZfzYbIsC/bKjhrqQWW2jTBMGjKaDEJheP4wY/fm/Mxvx28Dv+J1NnLO568b8q/3Sn3tdEgfvTam/gRgI6OP8DGB9fgvnUrsMgjYlG1BK8sWKpHohkcF28lcPFWYsqijbGxED7o/S0A4InPtjv+PnGJwmC2j81pu0xZZP4YSV30tHrvT96b93G11TKe//xDaFvZOONEjLTcp88NKa8fO4ejx/rQ2/s79Pb+Dg0NdWhtXYr2dS1obVuKupoqeKtEeMq8M30ooc+6AmvyGVmrVzU6fvKJnMMIVE5SuwSGGHlYVGprZPz7L3XO+7hPd7RldRLFvWuX99y7djme375ROXVuCP905BQuXApkBAeA5uZFaG1txj2tzWhoqEPzsrsscz0G+q/i8M/ew/DwjZKckVUpqbdkmtQis3UKnmrIDOGdt85g61MPm/q79h/+EADQtrIRmzvbix6Jmhrre7Y01mNLZztGAuPKqXNDeLd3AKf6hjA8fBPDwzfx9ttnAAAej4zm5kUTRw6VZ5/2WCyBgYGrmcMJS3VGViUg5ZB65yy13VPwLY+sxdG3+vD222cwNhbC79qXzlt/fnHbBly59gn8J/rx1GPr4D/eP+9hb8OBcfzszdRSw82da01/X5MFB4DT54aUCxcDOH1uCNcCQVy4FMDAwFVLfAZNjV5s7mzH9i33l+yMLKvjceXWA2Gc5zYEYnDgVkyz7Xj168f6lO+/9hbC0exOYfzeV7fi/xw7h7d+3Y/Vqxpx4WIg69/15ec6sWOLNRYr9F8cVbJ9z2ZmSk5fgTVT6r3AIw2aKjUABOM67DwRZSQwrvRfGkU4i+NVN3e294wExpXT54Zw79rlyPZ52dbIhMN7Lm6hW86xoZmX1HHNQCRh0OwygjCZhR6pO9cRyLzGNGRRgMBAG/0ThInIktCdz5SCvKRmDHCLAklNECZSlefqyLxnH9ByTIIwj1zHpositUtkWS8FIwgiNzyu3MamiyL1xC+mq08QJkRpl5i/WwVZ6RIZRAH76GMgiOIhicJgIWtuCg61VVL+aQJBENOpLjADLlhqGt4iiOKR7zBWUaVmDJAlGt4iCCtE6aJIDQAeiaI1QVghShdNaorWBGGNKF00qSlaE4Q1onRRpWYMqHZRtCaIckbpoko98W1D49YEkSNVRYzSRZcaAGpcIo1bE0SWiAz7ij0zs+hS05xwgsgej6uw2WMlkRoAamWRPi2CyCJKyyZs02yK1AIDPC6BojVBzB38TClVTVtm5aGmGUHMiiwJ3WadlGKa1IxR04wgZku7q01ctmzqgmiXyOAWqWlGEFOyWBOaYyWTGgBq3SLNNCOISWm3bPIZZqZLzRjgoXnhBGF62l0yqQGgyiVQGk5Q2m1y2l1SqdNpOHXDCUq7bSQ1dcMJSrthL6mBVDe8SqJJKYSzqJOlkqTdZZEaAGrcAiSaG044hGqX0C2W2LKybNxdJ9MwF2F/3JLQXY698csitcCAWrdIUhO2rqNrynTYRdmO2HCJjBZ9ELZEYPB7q0pbR08mr/Opi0k4YUDVKuusa83gSjRp0N1bYryy2FMRdbRb6PZI5TuSquxScw4EVR2awStG7LPX4yR1GVi32INqF7O02NWu8tTRk5HKfREYSzXOgqq2TzewsxJurmVeFyIkdWlvVIFZXugqqfxCWyJSpzE4MB7XugyOLrqFicr70kF3fZVkiddimbNoBQZ4ZdFPQ11EpSEy7KuTJcu8HksdMC0KDNUuGuoiKkvocna6LS81AMgSQ61bpKEugoS2i9RpsWkMmyChbSQ1kDqGhMQmSGgbSU1iEyS0DaUmsQkS2oZSp8WuIbEJEjorLDP5JBtUjSOa1GmCCkFC20VqANANjlBCb6mUKaVEZSMJ6K6TJVSK0BUpNZCaUhpUNRKbMBVZErprXAIYq6zXXZFSp8UOVdjqLqJysMJqK8dJnSaSMBCvsPXYhMWFLvN6aMdLDQDRpIFYksQmCmNiYcagKFT2+7CF1ACQ1DkiSWqgEflRiQ0x20tNdTaRL1WS0F3jFmzzfmwlNaXjRC4IDP4al+B3S4Kt3pctpaZ0nJgPl8C6a1P7z9sO20qdTsejycrbrZQwNzpXuQS/x2bR2TFSp1E1AzHNoKjtcCQB3bVuCaJg7/fpCKkpalN0liXBX+0SHPF+HSM1RW2qnZ2C46QGUgcIxDTqkNs9Ole7BL8sCY57746UmlJye+NxpaZ5MubM9+9oqSklp1SbpCa5CYvK7HEJcImMLgZJTXKTzCQ1yU2QzCQ1yU2QzCS1heVWNY4krQIrGQKD3y0KfrfISGaS2jzSQ2GaQdHbLETG9rklNujkoSmSmqK3TaIy87tFSrFJaotE74RuIE61d161sltikEWKyiS1RdENjrjGoRmcdmEhkUlqu0bwhMNT9HRqLQkC3CIjkUlqe8A5kDQ4krr9o7jA4BcZ87slBpFR55qkdpDkmsGRNDg0nUPnvGLPCRMY87tF+EWBJCapiWn1uD4hu25wGKk/77GOvPALjPklAUgLLAmUTpPURF6yGzxVo+ucg+ukREwAAABJSURBVHMO3QB4qm7vMjjvKoawAJsQFxAYwFhaXIAxQCB7SWqitBgTnyef+AKYi8l7dZGsJDVBEBZFoEtAECQ1QRAkNUEQpeL/A1zy7w4tZGPmAAAAAElFTkSuQmCC"
            }),
            r = (0, G.jsx)(M.Trans, { id: "Peace of mind is yours" });
          switch (e.filter) {
            case jo.Secure:
              (t = (0, G.jsx)(Bh, { src: Ph })), (r = (0, G.jsx)(M.Trans, { id: "No sites with Secure status" }));
              break;
            case jo.Excluded:
              (t = (0, G.jsx)(Bh, { src: Ph })), (r = (0, G.jsx)(M.Trans, { id: "No excluded sites" }));
              break;
            case jo.NotMonitored:
              (t = (0, G.jsx)(Bh, { src: Ph })), (r = (0, G.jsx)(M.Trans, { id: "No sites that are not being monitored" }));
          }
          return (0, G.jsx)(
            Ah,
            null,
            (0, G.jsx)(Dh, null, t),
            (0, G.jsx)(Fh, null, r),
            (0, G.jsx)(Ih, null, (0, G.jsx)(M.Trans, { id: "{0}", values: { 0: Rh[e.filter] } }))
          );
        };
      var Wh,
        Hh = {
          IconArrowLeft: (0, S.Z)("img", { target: "e1v50u6b0" })({
            name: "m7mzww",
            styles: "margin-right:16px;position:relative;top:-2px;cursor:pointer"
          })
        },
        Uh = function () {
          var e,
            t = (0, F.v9)(es.ZC),
            r = (0, F.v9)(Ed.d),
            n = (0, F.v9)(es.Fo);
          return (
            (0, O.useEffect)(
              function () {
                R.B.sendTracking(_a.pC, { "Item Count": r.length });
              },
              [r.length]
            ),
            (0, G.jsx)(
              lc.SiteSecurityPageContainer,
              null,
              (0, G.jsx)(
                lc.MainTitle,
                null,
                (0, G.jsx)(
                  P.rU,
                  { to: "/vault/security", "data-automation-id": "back-to-site-security" },
                  (0, G.jsx)(Hh.IconArrowLeft, { src: Jm })
                ),
                (0, G.jsx)(M.Trans, { id: "Site security" })
              ),
              (0, G.jsx)(Th, { messageId: t }),
              (0, G.jsx)(bh, {
                reportFilterType: t,
                resultCounts:
                  ((e = {}),
                  (0, Ds.Z)(e, jo.AllPasswords, bd(r, n, jo.AllPasswords).length),
                  (0, Ds.Z)(e, jo.AllAtRiskPasswords, bd(r, n, jo.AllAtRiskPasswords).length),
                  (0, Ds.Z)(e, jo.Breached, bd(r, n, jo.Breached).length),
                  (0, Ds.Z)(e, jo.Duplicate, bd(r, n, jo.Duplicate).length),
                  (0, Ds.Z)(e, jo.Weak, bd(r, n, jo.Weak).length),
                  (0, Ds.Z)(e, jo.Blank, bd(r, n, jo.Blank).length),
                  (0, Ds.Z)(e, jo.NotMonitored, bd(r, n, jo.NotMonitored).length),
                  (0, Ds.Z)(e, jo.Excluded, bd(r, n, jo.Excluded).length),
                  (0, Ds.Z)(e, jo.Secure, bd(r, n, jo.Secure).length),
                  e),
                isExcludedPasswordsEnabled: !0
              }),
              (0, G.jsx)(Ld, null),
              0 === bd(r, n, t).length && (0, G.jsx)(Vh, { filter: t })
            )
          );
        },
        zh = ["title", "titleId"];
      function Nh() {
        return (
          (Nh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Nh.apply(this, arguments)
        );
      }
      function qh(e, t) {
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
      function Gh(e, t) {
        var r = e.title,
          n = e.titleId,
          o = qh(e, zh);
        return O.createElement(
          "svg",
          Nh(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          Wh ||
            (Wh = O.createElement("path", {
              d: "M7.00016 0.333984C5.68162 0.333984 4.39269 0.724978 3.29636 1.45752C2.20004 2.19006 1.34555 3.23125 0.840969 4.44943C0.336385 5.6676 0.204362 7.00805 0.461597 8.30125C0.718832 9.59446 1.35377 10.7823 2.28612 11.7147C3.21847 12.647 4.40636 13.282 5.69956 13.5392C6.99277 13.7965 8.33321 13.6644 9.55139 13.1598C10.7696 12.6553 11.8108 11.8008 12.5433 10.7045C13.2758 9.60812 13.6668 8.31919 13.6668 7.00065C13.6649 5.23313 12.9619 3.53855 11.7121 2.28872C10.4623 1.03889 8.76769 0.335896 7.00016 0.333984V0.333984ZM7.13905 3.11176C7.30387 3.11176 7.46499 3.16064 7.60203 3.2522C7.73907 3.34377 7.84588 3.47392 7.90895 3.62619C7.97203 3.77846 7.98853 3.94602 7.95637 4.10767C7.92422 4.26932 7.84485 4.41781 7.72831 4.53435C7.61176 4.65089 7.46328 4.73026 7.30163 4.76242C7.13998 4.79457 6.97242 4.77807 6.82015 4.71499C6.66788 4.65192 6.53773 4.54511 6.44616 4.40807C6.35459 4.27103 6.30572 4.10991 6.30572 3.9451C6.30572 3.72408 6.39352 3.51212 6.5498 3.35584C6.70608 3.19956 6.91804 3.11176 7.13905 3.11176ZM8.38905 10.6118H6.16683C6.01949 10.6118 5.87818 10.5532 5.77399 10.449C5.66981 10.3449 5.61128 10.2035 5.61128 10.0562C5.61128 9.90886 5.66981 9.76756 5.77399 9.66337C5.87818 9.55918 6.01949 9.50065 6.16683 9.50065H6.5835C6.62033 9.50065 6.65566 9.48602 6.68171 9.45997C6.70775 9.43392 6.72239 9.3986 6.72239 9.36176V6.86176C6.72239 6.82493 6.70775 6.7896 6.68171 6.76355C6.65566 6.73751 6.62033 6.72287 6.5835 6.72287H6.16683C6.01949 6.72287 5.87818 6.66434 5.77399 6.56015C5.66981 6.45597 5.61128 6.31466 5.61128 6.16732C5.61128 6.01997 5.66981 5.87867 5.77399 5.77448C5.87818 5.67029 6.01949 5.61176 6.16683 5.61176H6.72239C7.01707 5.61176 7.29969 5.72883 7.50806 5.9372C7.71643 6.14557 7.8335 6.42819 7.8335 6.72287V9.36176C7.8335 9.3986 7.84813 9.43392 7.87418 9.45997C7.90022 9.48602 7.93555 9.50065 7.97239 9.50065H8.38905C8.5364 9.50065 8.6777 9.55918 8.78189 9.66337C8.88608 9.76756 8.94461 9.90886 8.94461 10.0562C8.94461 10.2035 8.88608 10.3449 8.78189 10.449C8.6777 10.5532 8.5364 10.6118 8.38905 10.6118Z",
              fill: "#007AFF"
            }))
        );
      }
      var _h,
        Yh = O.forwardRef(Gh),
        Xh = (r.p, ["title", "titleId"]);
      function Kh() {
        return (
          (Kh = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Kh.apply(this, arguments)
        );
      }
      function Jh(e, t) {
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
      function Qh(e, t) {
        var r = e.title,
          n = e.titleId,
          o = Jh(e, Xh);
        return O.createElement(
          "svg",
          Kh(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? O.createElement("title", { id: n }, r) : null,
          _h ||
            (_h = O.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.93411 6.75657L13.1782 1.5125L11.9997 0.333984L6.7556 5.57806L1.51152 0.333984L0.333008 1.5125L5.57709 6.75657L0.333008 12.0007L1.51152 13.1792L6.7556 7.93508L11.9997 13.1792L13.1782 12.0007L7.93411 6.75657Z",
              fill: "#007AFF"
            }))
        );
      }
      var $h = O.forwardRef(Qh);
      r.p;
      var eC = (0, S.Z)(hl, { target: "e1a7megi2" })({
          name: "17nzgc3",
          styles: "background-color:#e8f3ff;color:#1b283c;position:inherit"
        }),
        tC = (0, S.Z)(Yh, { target: "e1a7megi1" })({ name: "50vupm", styles: "height:16px;width:16px;padding-right:8px" }),
        rC = (0, S.Z)($h, { target: "e1a7megi0" })({ name: "jl1dbw", styles: "height:20px;cursor:pointer;position:fixed;right:12px" }),
        nC = function (e) {
          var t = e.text,
            r = e.show,
            n = e.toDoOnClick;
          return r ? (0, G.jsx)(eC, null, (0, G.jsx)(tC, null), t, (0, G.jsx)(rC, { onClick: n })) : null;
        };
      var oC = (0, S.Z)("a", { target: "e1vc9av0" })({
          name: "rlxsks",
          styles:
            "text-decoration:underline;color:inherit;font-weight:400;font-size:14px;line-height:20px;margin-left:4px;&:visited{color:inherit;}"
        }),
        iC = function () {
          var e = (0, ce.B)(),
            t = (0, F.v9)(es.Cf),
            r = (0, F.v9)(es.z_),
            n = (0, F.v9)(es.Et),
            o = "feedbackShown_".concat(n),
            i = !localStorage.getItem(o),
            a = (0, O.useState)(i),
            s = (0, E.Z)(a, 2),
            l = s[0],
            c = s[1];
          return (0, G.jsx)(
            O.Fragment,
            null,
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "Site deleted: {0}", values: { 0: t.passwordDeleteSuccess.siteName } }),
              toDoOnClick: function () {
                return e.setNotification({ passwordDeleteSuccess: { show: !1, siteName: "" } });
              },
              show: t.passwordDeleteSuccess.show
            }),
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "All set. If you're involved in a breach, we'll alert you here and send an email." }),
              toDoOnClick: function () {
                return e.setNotification({ dwmSubscriptionSuccess: !1 });
              },
              show: t.dwmSubscriptionSuccess
            }),
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "Your password is now excluded from your security score calculation." }),
              toDoOnClick: function () {
                return e.setNotification({ passwordExcludedSuccess: !1 });
              },
              show: t.passwordExcludedSuccess
            }),
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "Your password is now included in your security score calculation." }),
              toDoOnClick: function () {
                return e.setNotification({ passwordIncludedSuccess: !1 });
              },
              show: t.passwordIncludedSuccess
            }),
            (0, G.jsx)(Wl, {
              text: (0, G.jsx)(M.Trans, { id: "Something went wrong. Please try again." }),
              toDoOnClick: function () {
                return e.setNotification({ generalError: !1 });
              },
              show: r.generalError
            }),
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "You\u2019ve changed your password. Your digital life just got more secure." }),
              toDoOnClick: function () {
                return e.setNotification({ passwordChangedSuccess: !1 });
              },
              show: t.passwordChangedSuccess
            }),
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "We\u2019ll send breach alerts for this site." }),
              toDoOnClick: function () {
                return e.setNotification({ breachAlertsTurnedOnSuccess: !1 });
              },
              show: t.breachAlertsTurnedOnSuccess
            }),
            (0, G.jsx)(yl, {
              text: (0, G.jsx)(M.Trans, { id: "We won\u2019t send breach alerts for this site." }),
              toDoOnClick: function () {
                return e.setNotification({ breachAlertsTurnedOffSuccess: !1 });
              },
              show: t.breachAlertsTurnedOffSuccess
            }),
            (0, G.jsx)(nC, {
              text: (0, G.jsx)(
                O.Fragment,
                null,
                (0, G.jsx)(M.Trans, { id: "How is your experience with the Security Dashboard?" }),
                (0, G.jsx)(
                  oC,
                  { href: "https://www.getfeedback.com/r/JH1gteLB/", target: "_blank" },
                  (0, G.jsx)(M.Trans, { id: "Provide your feedback here" })
                )
              ),
              toDoOnClick: function () {
                localStorage.setItem(o, "true"), c(!1);
              },
              show: l
            })
          );
        },
        aC = function () {
          return (0, G.jsx)("div", null, "Placeholder for Security Dashboard Paywall");
        },
        sC = r(46387);
      var lC = "/passwords",
        cC = { DashboardContainer: (0, S.Z)("div", { target: "el733pn0" })({ name: "153olnc", styles: "background:#ffffff;height:100%" }) },
        uC = function () {
          var e = (0, ce.B)(),
            t = (0, T.k6)(),
            r = (0, F.I0)();
          (0, O.useEffect)(
            function () {
              r(R.B.initialize());
            },
            [r]
          );
          var n = (0, tt.y)(),
            o = (0, O.useState)(navigator.onLine),
            i = (0, E.Z)(o, 2),
            a = i[0],
            s = i[1];
          (0, A.i)(
            function () {
              return s(!0);
            },
            function () {
              return s(!1);
            }
          );
          var l = (0, F.v9)(es.GB),
            c = (0, F.v9)(es.fe),
            u = (0, F.v9)(es.DY),
            d = (0, F.v9)(sC.H);
          return (
            (0, O.useEffect)(
              function () {
                var r = (top && top.location.search) || location.search;
                (-1 === r.indexOf("cmd=openweakpws:") && -1 === r.indexOf("cmd=openduppws:") && -1 === r.indexOf("cmd=openatrisk")) ||
                  (!c && !d) ||
                  (t.push(n.path + lC), -1 !== r.indexOf("cmd=openatrisk") && e.setPasswordSecurityFilterType(jo.AllAtRiskPasswords));
              },
              [e, t, c, d, n.path]
            ),
            !c && u
              ? (0, G.jsx)(aC, null)
              : (0, G.jsx)(
                  cC.DashboardContainer,
                  null,
                  !a && (0, G.jsx)(J, { compact: !1 }),
                  (0, G.jsx)(Q, {
                    shouldDisplay: a && l === Ye.generic,
                    onErrorShouldTry: function () {
                      return r(R.B.initialize());
                    },
                    compact: !1,
                    errorTitle: (0, G.jsx)(M.Trans, { id: "We're not sure what went wrong" }),
                    errorText: (0, G.jsx)(M.Trans, { id: "If the problem persists, reach out to the LastPass team" })
                  }),
                  a &&
                    l !== Ye.generic &&
                    (0, G.jsx)(
                      T.rs,
                      null,
                      (0, G.jsx)(
                        T.AW,
                        { exact: !0, path: n.path },
                        (0, G.jsx)(O.Fragment, null, (0, G.jsx)(iC, null), (0, G.jsx)(Xm, null))
                      ),
                      (0, G.jsx)(T.AW, { path: n.path + lC }, (0, G.jsx)(O.Fragment, null, (0, G.jsx)(iC, null), (0, G.jsx)(Uh, null)))
                    )
                )
          );
        },
        dC = (function () {
          return (
            (e = _l),
            (t = function (e) {
              return (function (e) {
                var t,
                  r = Object.values(e.vaultData.passwords)
                    .filter(function (e) {
                      return e.username && e.username.length;
                    })
                    .map(function (e) {
                      return (0, jl.Z)((0, jl.Z)({}, e), {}, { username: e.username.toLocaleLowerCase() });
                    })
                    .reduce(function (e, t) {
                      var r = t.username;
                      return (e[(0, kl.v)(r)] = r), e;
                    }, {});
                return (0, jl.Z)(
                  (0, jl.Z)({}, e.securityDashboard),
                  {},
                  {
                    vaultPasswords: Object.values(e.securityDashboard.passwordSecurityResults).reduce(function (t, r) {
                      return e.vaultData.passwords[r.id] && (t[r.id] = e.vaultData.passwords[r.id]), t;
                    }, {}),
                    usernameHashMap: r,
                    dwmSubscriptionsWithUsernames: Zl(e.securityDashboard.dwmSubscriptions, e.vaultData.passwords, r),
                    alertItems: e.securityDashboard.alerts
                      .map(function (t) {
                        var n = Object.values(e.vaultData.passwords).find(function (e) {
                          return e.loginUrl.includes(t.url) && e.username === r[t.usernameHash];
                        });
                        return {
                          type: ot.NK.DarkWeb,
                          details: {
                            id: t.id,
                            createdAt: new Date(t.createdAt),
                            exposedData: t.exposedData && t.exposedData.join(", "),
                            username: r[t.usernameHash],
                            url: t.url,
                            vaultPassword: n,
                            viewAlert: e.securityDashboard.viewAlert
                          }
                        };
                      })
                      .concat(
                        e.user.masterPasswordStrength && e.user.masterPasswordStrength < 100
                          ? [{ type: ot.NK.MasterPassword, details: { createdAt: new Date(), strength: e.user.masterPasswordStrength } }]
                          : []
                      ),
                    viewAlert: e.securityDashboard.viewAlert,
                    isFreeUser: e.user.type === El.F.FREE,
                    isTrialUser: !!e.user.type && e.user.type.includes("Trial"),
                    isExpiredUser: !!e.user.type && e.user.type.includes("Expired"),
                    username: e.user.username,
                    securityDashboardPaywall: e.user.securityDashboardPaywall,
                    paywallShouldVisible:
                      !!e.user.type &&
                      ((t = e.user.type),
                      [
                        El.F.FREE,
                        El.F.ENTERPRISE_EXPIRED,
                        El.F.ENTERPRISE_TRIAL_EXPIRED,
                        El.F.FAMILY_EXPIRED,
                        El.F.FAMILY_TRIAL_EXPIRED,
                        El.F.TEAMS_EXPIRED,
                        El.F.TEAMS_TRIAL_EXPIRED
                      ].includes(t)),
                    purchaseUrl: Ml(e.user.type, e.user.baseUrl)
                  }
                );
              })(e);
            }),
            (r = R.B),
            (0, F.$j)(t, r, function (e, t, r) {
              return { children: r.children, props: (0, D.Z)(r, I), actions: t, state: e };
            })(e)
          );
          var e, t, r;
        })(),
        pC = function (e, t) {
          t.run(
            (function (e, t) {
              for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
              return (0, Yl.Z)().mark(function r() {
                var o;
                return (0, Yl.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), Xl.rM.apply(void 0, [t].concat(n));
                      case 2:
                        return (o = r.sent), (r.next = 5), (0, Xl.qn)(e);
                      case 5:
                        return (r.next = 7), (0, Xl.al)(o);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              });
            })(
              R.s.RESET,
              (function (e, t) {
                return (0, Yl.Z)().mark(function r() {
                  return (0, Yl.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.next = 2),
                            (0, Xl.ib)(R.s.OPEN_PASSWORD_GENERATOR, function () {
                              e.dialogs.betterGeneratePassword.open();
                            })
                          );
                        case 2:
                          return (
                            (r.next = 4),
                            (0, Xl.ib)(R.s.ADD_PASSWORD, function () {
                              e.dialogs.site.open();
                            })
                          );
                        case 4:
                          return (
                            (r.next = 6),
                            (0, Xl.ib)(R.s.EDIT_PASSWORD, function (t) {
                              e.dialogs.site.open({ vaultItem: t.payload.id });
                            })
                          );
                        case 6:
                          return (
                            (r.next = 8),
                            (0, Xl.ib)(
                              R.s.LAUNCH_WEBSITE,
                              (0, Yl.Z)().mark(function t(r) {
                                return (0, Yl.Z)().wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (!r.payload.loginUrl) {
                                          t.next = 3;
                                          break;
                                        }
                                        return (t.next = 3), e.LPProxy.getSiteModel(r.payload.id).launch();
                                      case 3:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            )
                          );
                        case 8:
                          return (
                            (r.next = 10),
                            (0, Xl.ib)(R.s.OPEN_URL, function (t) {
                              e.bg.openURL((0, Kl.V)(t.payload));
                            })
                          );
                        case 10:
                          return (
                            (r.next = 12),
                            (0, Xl.ib)(R.s.MANAGE_MULTIFACTOR, function () {
                              e.LPProxy.callAcctsIFrameCommand("settings", null, { defaulttab: "settings_multifactor" });
                            })
                          );
                        case 12:
                          return (
                            (r.next = 14),
                            (0, Xl.ib)(R.s.MANAGE_TRUSTED_DEVICES, function () {
                              e.LPProxy.callAcctsIFrameCommand("settings", null, { defaulttab: "settings_trusted" });
                            })
                          );
                        case 14:
                          return (
                            (r.next = 16),
                            (0, Xl.ib)(R.s.MANAGE_MOBILE_DEVICES, function () {
                              e.LPProxy.callAcctsIFrameCommand("settings", null, { defaulttab: "settings_mobiledevices" });
                            })
                          );
                        case 16:
                          return (
                            (r.next = 18),
                            (0, Xl.ib)(R.s.CHANGE_MASTER_PASSWORD, function () {
                              e.bg.openURL(
                                ""
                                  .concat(e.bg.get("base_url"), "passwordreset.php?cmd2=resetpassword&u=")
                                  .concat(encodeURIComponent(t), "&lpnorefresh=1")
                              );
                            })
                          );
                        case 18:
                          return (
                            (r.next = 20),
                            (0, Xl.ib)(R.s.PURCHASE_BUTTON_CLICKED, function () {
                              Jl.R.get().upgradeToPremiumAction();
                            })
                          );
                        case 20:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                });
              })(parent, e)
            )
          );
        };
    },
    83655: function (e, t, r) {
      r.d(t, {
        C: function () {
          return i;
        }
      });
      var n = r(2747),
        o = r(17544),
        i = (0, n.P1)(
          function (e) {
            return e.user.username;
          },
          function (e) {
            return e.user.key;
          },
          function (e, t) {
            if (e && t) return { hash: (0, o.v)(e), key: t };
          }
        );
    },
    44645: function (e, t, r) {
      r.d(t, {
        Mw: function () {
          return c;
        },
        NK: function () {
          return l;
        },
        lA: function () {
          return p;
        }
      });
      var n = r(46999),
        o = r(18950),
        i = r(18124),
        a = r(76279),
        s = r(89993),
        l = (function (e) {
          return (e[(e.DarkWeb = 0)] = "DarkWeb"), (e[(e.MasterPassword = 1)] = "MasterPassword"), e;
        })({}),
        c = (function (e) {
          return (e[(e.Secure = 0)] = "Secure"), (e[(e.Inactive = 1)] = "Inactive"), (e[(e.Compromised = 2)] = "Compromised"), e;
        })({}),
        u = {},
        d = function (e) {
          return (function () {
            var t = (0, o.Z)(
              (0, n.Z)().mark(function t(r) {
                var o, i, s;
                return (0, n.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((o = new Date().getTime()),
                          (i = r.toString()),
                          (s = { stringifiedUsernameHashes: i, lastCheck: new Date() }),
                          Object.values(u).forEach(function (e) {
                            o - e.lastCheck.getTime() > 5e3 && delete u[e.stringifiedUsernameHashes];
                          }),
                          Object.values(u).some(function (e) {
                            return e.stringifiedUsernameHashes === i;
                          }))
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (u[i] = s), (t.next = 9), (0, a.P)(e)("dark-web-monitoring/subscription")(r);
                      case 9:
                        return t.abrupt("return", t.sent);
                      case 10:
                        return t.abrupt("return", { addedEmails: r });
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        };
      function p(e) {
        var t = (0, s.O)(e);
        return {
          getSubscriptions: (0, i.U)(e)("dark-web-monitoring/subscription"),
          addSubscriptions: d(e),
          deleteSubscription: function (e) {
            return t("dark-web-monitoring/subscription/".concat(e));
          },
          deleteSubscriptions: (0, a.v_)(e)("dark-web-monitoring/subscriptions/delete-by-hashes"),
          getAlerts: (0, i.U)(e)("dark-web-monitoring/alert"),
          dismissAlert: function (e) {
            return t("dark-web-monitoring/alert/".concat(e));
          },
          setVaultAlerts: (0, a.v_)(e)("dark-web-monitoring/vault-alerts"),
          getMfaStatus: (0, i.U)(e)("security-dashboard/user-security-report/authentication", { method: "GET" }),
          getTrustedDevices: (0, i.U)(e)("security-dashboard/trusted-devices", { method: "GET" }),
          getExcludePasswordDetails: (0, i.U)(e)("security-dashboard/security-score/exclude", { method: "GET" }),
          excludePassword: function (t) {
            return (0, a.kj)(e)("/lmiapi/security-dashboard/security-score/exclude")({ accountIds: t });
          },
          includePassword: function (t) {
            return (0, s.Q)(e)("/lmiapi/security-dashboard/security-score/exclude", void 0, { accountIds: t });
          },
          storeConsent: (0, a.P)(e)("security-dashboard/dark-web-monitoring/consent"),
          getConsent: (0, i.U)(e)("security-dashboard/dark-web-monitoring/consent"),
          addBreach: (0, a.v_)(e)("credential-monitoring/breaches"),
          getCompromisedCredentials: (0, a.P)(e)("credential-monitoring/get-credentials")
        };
      }
    },
    89993: function (e, t, r) {
      r.d(t, {
        O: function () {
          return s;
        },
        Q: function () {
          return l;
        }
      });
      var n = r(46999),
        o = r(37755),
        i = r(18950),
        a = r(39427);
      function s(e) {
        return (function () {
          var t = (0, i.Z)(
            (0, n.Z)().mark(function t(r, i, a) {
              return (0, n.Z)().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e(r, (0, o.Z)((0, o.Z)({}, i), {}, { body: a || {}, method: "DELETE" }));
                    case 2:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, r, n) {
            return t.apply(this, arguments);
          };
        })();
      }
      function l(e) {
        return (function () {
          var t = (0, i.Z)(
            (0, n.Z)().mark(function t(r, i, s) {
              var l;
              return (0, n.Z)().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), e(r, (0, o.Z)((0, o.Z)({}, i), {}, { body: s || {}, method: "DELETE" }));
                    case 2:
                      if (!((l = t.sent).status >= 200 && l.status <= 300)) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt("return", l.json());
                    case 5:
                      if (401 != l.status) {
                        t.next = 7;
                        break;
                      }
                      throw new a.od();
                    case 7:
                      if (!(l.status >= 400 && l.status < 500)) {
                        t.next = 13;
                        break;
                      }
                      return (t.t0 = a.C), (t.next = 11), l.json();
                    case 11:
                      throw ((t.t1 = t.sent), new t.t0(t.t1));
                    case 13:
                      throw new a.UE();
                    case 14:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          return function (e, r, n) {
            return t.apply(this, arguments);
          };
        })();
      }
    },
    53471: function (e, t, r) {
      r.d(t, {
        X: function () {
          return o;
        }
      });
      var n = r(95705),
        o = function (e) {
          return e !== Number(e)
            ? n.x.LowSafety
            : e >= 100
            ? n.x.HighestSafety
            : e >= 75
            ? n.x.HighSafety
            : e >= 50
            ? n.x.AverageSafety
            : n.x.LowSafety;
        };
    },
    95705: function (e, t, r) {
      r.d(t, {
        x: function () {
          return n;
        }
      });
      var n = (function (e) {
        return (
          (e[(e.LowSafety = 0)] = "LowSafety"),
          (e[(e.AverageSafety = 1)] = "AverageSafety"),
          (e[(e.HighSafety = 2)] = "HighSafety"),
          (e[(e.HighestSafety = 3)] = "HighestSafety"),
          e
        );
      })({});
    },
    67841: function (e, t, r) {
      r.d(t, {
        F: function () {
          return s;
        },
        d: function () {
          return l;
        }
      });
      var n = r(20011),
        o = r(91640),
        i = r(48693),
        a = (r(23381), r(27403)),
        s = (0, o.Z)("a", { target: "e1t4w43y0" })(
          "color:",
          function (e) {
            return e.theme.colors.blue;
          },
          ";margin-left:8px;text-decoration:none;&:hover{text-decoration:underline;}"
        ),
        l = function (e) {
          return (0, a.jsx)(
            s,
            (0, n.Z)({}, e, { href: e.url, target: "_blank", rel: "noopener noreferrer" }),
            (0, a.jsx)(i.Trans, { id: "Learn more" })
          );
        };
    },
    53566: function (e, t, r) {
      r.d(t, {
        K: function () {
          return x;
        }
      });
      var n = r(91640),
        o = r(48693),
        i = r(23381),
        a = r(27403),
        s = (0, n.Z)("circle", { target: "e13iwt451" })(
          "stroke:",
          function (e) {
            return e.theme.colors.neutral100;
          },
          ";"
        ),
        l = (0, n.Z)("circle", { target: "e13iwt450" })(
          "stroke:",
          function (e) {
            return e.theme.colors[e.strokeColor];
          },
          ";"
        ),
        c = function (e) {
          return (0, a.jsx)(
            "svg",
            { width: "100%", height: "100%", viewBox: "0 0 34.83 34.83" },
            (0, a.jsx)(s, { cx: "17.42", cy: "17.42", r: "15.92", fill: "transparent", strokeWidth: "3" }),
            e.value > 0 &&
              (0, a.jsx)(l, {
                cx: "17.42",
                cy: "17.42",
                r: "15.92",
                fill: "transparent",
                strokeLinecap: "round",
                strokeDasharray: "".concat(e.value, ", 100"),
                transform: "rotate(-90, 17.42, 17.42)",
                strokeWidth: "3",
                strokeColor: e.color
              })
          );
        },
        u = r(53471),
        d = r(95705);
      var p = (0, n.Z)("div", { target: "e1vby79z4" })(
          "height:",
          function (e) {
            return (e.style && e.style.height) || "160px";
          },
          ";position:relative;width:",
          function (e) {
            return (e.style && e.style.height) || "160px";
          },
          ";"
        ),
        f = (0, n.Z)("div", { target: "e1vby79z3" })({
          name: "n416c1",
          styles:
            "align-items:center;bottom:0;display:flex;flex-direction:column;left:0;justify-content:center;margin:auto;position:absolute;right:0;top:0"
        }),
        m = (0, n.Z)("span", { target: "e1vby79z2" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral900;
          },
          ";display:block;font-size:28px;line-height:1.42;text-align:center;"
        ),
        h = (0, n.Z)("span", { target: "e1vby79z1" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral700;
          },
          ";display:block;font-size:12px;line-height:1.33;padding:0 32px;text-align:center;"
        ),
        C = (0, n.Z)("span", { target: "e1vby79z0" })(
          "color:",
          function (e) {
            return e.theme.colors.neutral200;
          },
          ";display:block;font-size:28px;line-height:1.42;text-align:center;"
        ),
        x = function (e) {
          var t = (function (e) {
            switch (e) {
              case d.x.HighestSafety:
                return { color: "green700", label: (0, a.jsx)(o.Trans, { id: "Highest safety" }) };
              case d.x.HighSafety:
                return { color: "green700", label: (0, a.jsx)(o.Trans, { id: "High safety" }) };
              case d.x.AverageSafety:
                return { color: "yellow700", label: (0, a.jsx)(o.Trans, { id: "Average safety" }) };
              case d.x.LowSafety:
              default:
                return { color: "red700", label: (0, a.jsx)(o.Trans, { id: "Low safety" }) };
            }
          })((0, u.X)(e.score));
          return (0, a.jsx)(
            p,
            { style: { height: e.height, width: e.width }, "data-automation-id": e.automationId },
            (0, a.jsx)(c, { color: t.color, value: e.score || 0 }),
            (0, a.jsx)(
              f,
              null,
              e.loading
                ? (0, a.jsx)(C, null, "...")
                : (0, a.jsx)(
                    i.Fragment,
                    null,
                    (0, a.jsx)(
                      m,
                      { "data-automation-id": "displayed-security-score" },
                      e.score !== Number(e.score) ? "?" : "".concat(e.score, "%")
                    ),
                    e.score === Number(e.score) && (0, a.jsx)(h, null, t.label)
                  )
            )
          );
        };
    },
    46387: function (e, t, r) {
      r.d(t, {
        H: function () {
          return n;
        }
      });
      var n = (0, r(2747).P1)(
        function (e) {
          return e.settings.features.security_dashboard_for_free_users;
        },
        function (e) {
          return e;
        }
      );
    },
    84785: function (e, t, r) {
      r.d(t, {
        i: function () {
          return o;
        }
      });
      var n = r(23381),
        o = function (e, t) {
          return (0, n.useEffect)(function () {
            return (
              window.addEventListener("online", e),
              window.addEventListener("offline", t),
              function () {
                window.removeEventListener("online", e), window.removeEventListener("offline", t);
              }
            );
          }, []);
        };
    },
    78237: function (e, t, r) {
      r.d(t, {
        Fy: function () {
          return s;
        },
        sM: function () {
          return a;
        },
        uD: function () {
          return i;
        }
      });
      var n = r(91640),
        o = r(54245),
        i = (0, n.Z)("span", { target: "ed70r0z2" })(o.$x, ";"),
        a = (0, n.Z)("span", { target: "ed70r0z1" })(o.q1, ";"),
        s = (0, n.Z)("span", { target: "ed70r0z0" })(o.Py, " & b{font-weight:bold;}");
    },
    6629: function (e, t, r) {
      r.d(t, {
        rU: function () {
          return h;
        }
      });
      var n = r(28236),
        o = r(23788),
        i = r(23381),
        a = r(30392),
        s = r(20011),
        l = r(66017),
        c = r(37268);
      i.Component;
      i.Component;
      var u = function (e, t) {
          return "function" === typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" === typeof e ? (0, a.ob)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        f = i.forwardRef;
      "undefined" === typeof f && (f = p);
      var m = f(function (e, t) {
        var r = e.innerRef,
          n = e.navigate,
          o = e.onClick,
          a = (0, l.Z)(e, ["innerRef", "navigate", "onClick"]),
          c = a.target,
          u = (0, s.Z)({}, a, {
            onClick: function (e) {
              try {
                o && o(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (c && "_self" !== c) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), n());
            }
          });
        return (u.ref = (p !== f && t) || r), i.createElement("a", u);
      });
      var h = f(function (e, t) {
          var r = e.component,
            o = void 0 === r ? m : r,
            h = e.replace,
            C = e.to,
            x = e.innerRef,
            g = (0, l.Z)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(n.s6.Consumer, null, function (e) {
            e || (0, c.Z)(!1);
            var r = e.history,
              n = d(u(C, e.location), e.location),
              l = n ? r.createHref(n) : "",
              m = (0, s.Z)({}, g, {
                href: l,
                navigate: function () {
                  var t = u(C, e.location),
                    n = (0, a.Ep)(e.location) === (0, a.Ep)(d(t));
                  (h || n ? r.replace : r.push)(t);
                }
              });
            return p !== f ? (m.ref = t || x) : (m.innerRef = x), i.createElement(o, m);
          });
        }),
        C = function (e) {
          return e;
        },
        x = i.forwardRef;
      "undefined" === typeof x && (x = C);
      x(function (e, t) {
        var r = e["aria-current"],
          o = void 0 === r ? "page" : r,
          a = e.activeClassName,
          p = void 0 === a ? "active" : a,
          f = e.activeStyle,
          m = e.className,
          g = e.exact,
          w = e.isActive,
          y = e.location,
          v = e.sensitive,
          j = e.strict,
          b = e.style,
          k = e.to,
          L = e.innerRef,
          E = (0, l.Z)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef"
          ]);
        return i.createElement(n.s6.Consumer, null, function (e) {
          e || (0, c.Z)(!1);
          var r = y || e.location,
            a = d(u(k, r), r),
            l = a.pathname,
            Z = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            S = Z ? (0, n.LX)(r.pathname, { path: Z, exact: g, sensitive: v, strict: j }) : null,
            M = !!(w ? w(S, r) : S),
            O = "function" === typeof m ? m(M) : m,
            T = "function" === typeof b ? b(M) : b;
          M &&
            ((O = (function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(O, p)),
            (T = (0, s.Z)({}, T, f)));
          var P = (0, s.Z)({ "aria-current": (M && o) || null, className: O, style: T, to: a }, E);
          return C !== x ? (P.ref = t || L) : (P.innerRef = L), i.createElement(h, P);
        });
      });
    }
  }
]);
