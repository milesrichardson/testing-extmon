"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2783],
  {
    45155: function (e, t, n) {
      n.d(t, {
        r: function () {
          return d;
        }
      });
      var r,
        o = n(23381),
        i = ["title", "titleId"];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      function a(e, t) {
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
      function s(e, t) {
        var n = e.title,
          s = e.titleId,
          d = a(e, i);
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
            d
          ),
          n ? o.createElement("title", { id: s }, n) : null,
          r ||
            (r = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z",
              fill: "white"
            }))
        );
      }
      var d = o.forwardRef(s);
      n.p;
    },
    43972: function (e, t, n) {
      n.d(t, {
        a: function () {
          return a;
        }
      });
      var r = n(91640),
        o = (n(23381), n(45155)),
        i = n(27403);
      var l = (0, r.Z)("button", { target: "e14qtjsr0" })({
          name: "1lnnzuy",
          styles:
            "height:56px;width:56px;border-radius:50%;border:0;background-color:#d32d27;box-shadow:0px 8px 8px rgb(0 0 0 / 24%);cursor:pointer;margin-top:12px"
        }),
        a = function (e) {
          var t = e.clickFunction;
          return (0, i.jsx)(
            l,
            {
              "data-component": "FloatingActionButton",
              className: "add-item-button",
              onClick: function () {
                return t();
              }
            },
            (0, i.jsx)(o.r, null)
          );
        };
    },
    62783: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return $;
          }
        });
      var r,
        o,
        i,
        l,
        a,
        s,
        d,
        c,
        p,
        u,
        f,
        h = n(91640),
        m = n(48693),
        g = n(23381),
        k = n(57989),
        L = n(14346),
        x = n(30732),
        b = n(98223),
        C = n(67716),
        v = n(74665),
        w = n(82190),
        y = n(43972),
        j = ["title", "titleId"];
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
      function E(e, t) {
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
      function O(e, t) {
        var n = e.title,
          h = e.titleId,
          m = E(e, j);
        return g.createElement(
          "svg",
          V(
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
          n ? g.createElement("title", { id: h }, n) : null,
          r ||
            (r = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.0352 23.7321C27.6233 25.2233 30.8274 25.2356 33.4326 23.7831L35.0966 25.2573V27.5751H37.4184L38.1924 28.3863V30.6655H40.231L41.8748 32.2108H45.158V28.9333L36.7157 20.5057C38.5267 17.2716 38.0608 13.1072 35.3071 10.3583C33.366 8.42058 30.7222 7.61398 28.1944 7.93847",
              fill: "#B5D9F1"
            })),
          o ||
            (o = g.createElement("path", {
              d: "M25.0352 23.7321C27.6233 25.2233 30.8274 25.2356 33.4326 23.7831L35.0966 25.2573V27.5751H37.4184L38.1924 28.3863V30.6655H40.231L41.8748 32.2108H45.158V28.9333L36.7157 20.5057C38.5267 17.2716 38.0608 13.1072 35.3071 10.3583C33.366 8.42058 30.7222 7.61398 28.1944 7.93847",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "109.7 4.54"
            })),
          i ||
            (i = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.8772 14.6355C30.8772 10.0012 27.0982 6.24561 22.4386 6.24561C17.779 6.24561 14 10.0012 14 14.6355C14 18.475 16.5976 21.7044 20.1372 22.7005V24.5509L18.6029 26.0748L20.1372 27.6017V29.1272L18.6029 30.6526L20.1372 32.1781V34.4662L22.4386 36.7544L24.74 34.4662V22.7005C28.2796 21.7044 30.8772 18.475 30.8772 14.6355Z",
              fill: "white"
            })),
          l ||
            (l = g.createElement("path", {
              d: "M23.4386 35.5145L22.1372 34.2206V31.9325L20.6029 30.407L22.1372 28.8816V27.3561L20.6029 25.8292L22.1372 24.3053V22.4549C18.5976 21.4588 16 18.2294 16 14.3899C16 10.0921 19.2501 6.55004 23.4386 6.0583C23.1107 6.0198 22.7769 6 22.4386 6C17.779 6 14 9.75559 14 14.3899C14 18.2294 16.5976 21.4588 20.1372 22.4549V24.3053L18.6029 25.8292L20.1372 27.3561V28.8816L18.6029 30.407L20.1372 31.9325V34.2206L22.4386 36.5088L23.4386 35.5145Z",
              fill: "#B5D9F1"
            })),
          a ||
            (a = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.8772 14.6355C30.8772 10.0012 27.0982 6.24561 22.4386 6.24561C17.779 6.24561 14 10.0012 14 14.6355C14 18.475 16.5976 21.7044 20.1372 22.7005V24.5509L18.6029 26.0748L20.1372 27.6017V29.1272L18.6029 30.6526L20.1372 32.1781V34.4662L22.4386 36.7544L24.74 34.4662V22.7005C28.2796 21.7044 30.8772 18.475 30.8772 14.6355Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "117.49 4.54 0.65 2.6"
            })),
          s ||
            (s = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.0613 13.7107C24.0613 14.6065 23.3343 15.3335 22.4385 15.3335C21.5427 15.3335 20.8157 14.6065 20.8157 13.7107C20.8157 12.8149 21.5427 12.0879 22.4385 12.0879C23.3343 12.0879 24.0613 12.8149 24.0613 13.7107Z",
              stroke: "#264887",
              strokeWidth: 1.29825,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          d ||
            (d = g.createElement("path", {
              d: "M22.4387 13.7105V5.99595C22.4387 4.34219 23.8928 3 25.6843 3C27.4759 3 28.9299 4.34219 28.9299 5.99595V7.50419",
              stroke: "#D7403A",
              strokeWidth: 1.94737,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          c ||
            (c = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M52.3027 26.9209C52.9931 26.9209 53.5527 26.3613 53.5527 25.6709C53.5527 24.9805 52.9931 24.4209 52.3027 24.4209C51.6124 24.4209 51.0527 24.9805 51.0527 25.6709C51.0527 26.3613 51.6124 26.9209 52.3027 26.9209Z",
              stroke: "#B5D9F1"
            })),
          p ||
            (p = g.createElement("path", {
              d: "M6.5 25.3945H4V27.8945H6.5V25.3945Z",
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          u || (u = g.createElement("path", { d: "M43.8852 3.34912L46.26 5.72402", stroke: "#B5D9F1", strokeLinecap: "round" })),
          f || (f = g.createElement("path", { d: "M46.1761 3.34912L43.8012 5.72402", stroke: "#B5D9F1", strokeLinecap: "round" }))
        );
      }
      var D,
        R,
        M,
        B,
        H,
        P,
        S,
        I,
        Z,
        F,
        N = g.forwardRef(O),
        A = (n.p, ["title", "titleId"]);
      function W() {
        return (
          (W = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          W.apply(this, arguments)
        );
      }
      function G(e, t) {
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
      function T(e, t) {
        var n = e.title,
          r = e.titleId,
          o = G(e, A);
        return g.createElement(
          "svg",
          W(
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
          n ? g.createElement("title", { id: r }, n) : null,
          D ||
            (D = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.0353 23.7321C27.6234 25.2233 30.8275 25.2356 33.4327 23.7831L35.0967 25.2573V27.5751H37.4185L38.1925 28.3863V30.6655H40.2311L41.875 32.2108H45.1581V28.9333L36.7158 20.5057C38.5268 17.2716 38.0609 13.1072 35.3072 10.3583C33.3661 8.42058 30.7223 7.61398 28.1945 7.93847",
              fill: "white"
            })),
          R ||
            (R = g.createElement("path", {
              d: "M25.0353 23.7321C27.6234 25.2233 30.8275 25.2356 33.4327 23.7831L35.0967 25.2573V27.5751H37.4185L38.1925 28.3863V30.6655H40.2311L41.875 32.2108H45.1581V28.9333L36.7158 20.5057C38.5268 17.2716 38.0609 13.1072 35.3072 10.3583C33.3661 8.42058 30.7223 7.61398 28.1945 7.93847",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "109.7 4.54"
            })),
          M ||
            (M = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.8772 14.6355C30.8772 10.0012 27.0983 6.24561 22.4386 6.24561C17.779 6.24561 14 10.0012 14 14.6355C14 18.475 16.5976 21.7044 20.1372 22.7005V24.5509L18.6029 26.0748L20.1372 27.6017V29.1272L18.6029 30.6526L20.1372 32.1781V34.4662L22.4386 36.7544L24.7401 34.4662V22.7005C28.2797 21.7044 30.8772 18.475 30.8772 14.6355Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "117.49 4.54 0.65 2.6"
            })),
          B ||
            (B = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.0613 13.7107C24.0613 14.6065 23.3343 15.3335 22.4385 15.3335C21.5427 15.3335 20.8157 14.6065 20.8157 13.7107C20.8157 12.8149 21.5427 12.0879 22.4385 12.0879C23.3343 12.0879 24.0613 12.8149 24.0613 13.7107Z",
              stroke: "#D7DBE0",
              strokeWidth: 1.29825,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          H ||
            (H = g.createElement("path", {
              d: "M22.4387 13.7105V5.99595C22.4387 4.34219 23.8928 3 25.6844 3C27.4759 3 28.93 4.34219 28.93 5.99595V7.50419",
              stroke: "#D7DBE0",
              strokeWidth: 1.94737,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          P ||
            (P = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M52.3027 26.9209C52.9931 26.9209 53.5527 26.3613 53.5527 25.6709C53.5527 24.9805 52.9931 24.4209 52.3027 24.4209C51.6124 24.4209 51.0527 24.9805 51.0527 25.6709C51.0527 26.3613 51.6124 26.9209 52.3027 26.9209Z",
              stroke: "#D7DBE0"
            })),
          S ||
            (S = g.createElement("rect", {
              x: 4,
              y: 25.3945,
              width: 2.5,
              height: 2.5,
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          I || (I = g.createElement("path", { d: "M43.8852 3.34926L46.2601 5.72416", stroke: "#D7DBE0", strokeLinecap: "round" })),
          Z || (Z = g.createElement("path", { d: "M46.1761 3.34926L43.8012 5.72416", stroke: "#D7DBE0", strokeLinecap: "round" })),
          F ||
            (F = g.createElement("path", {
              d: "M36.5623 16.0934C36.4589 16.0161 36.3415 15.9602 36.2169 15.9289C36.0922 15.8976 35.9627 15.8916 35.8358 15.9111C35.7088 15.9307 35.5869 15.9754 35.477 16.0428C35.3671 16.1102 35.2713 16.1989 35.1952 16.3039L30.5595 22.6905L27.6116 20.2963C27.4084 20.1383 27.1522 20.0674 26.8981 20.0988C26.6439 20.1301 26.412 20.2614 26.252 20.4643C26.092 20.6672 26.0167 20.9257 26.0423 21.1843C26.0678 21.4429 26.1921 21.681 26.3885 21.8477L30.1314 24.8869C30.2348 24.969 30.3533 25.0294 30.48 25.0645C30.6067 25.0996 30.739 25.1087 30.8692 25.0913C30.9994 25.074 31.1248 25.0304 31.2383 24.9633C31.3517 24.8961 31.4508 24.8067 31.5298 24.7002L36.7728 17.4819C36.8488 17.3768 36.9037 17.2574 36.9343 17.1307C36.9649 17.004 36.9705 16.8724 36.951 16.7434C36.9315 16.6145 36.8871 16.4907 36.8204 16.3791C36.7537 16.2676 36.666 16.1705 36.5623 16.0934Z",
              fill: "white"
            }))
        );
      }
      var U = g.forwardRef(T),
        z = (n.p, n(15878)),
        _ = n(46177),
        q = n(52384),
        J = n(27403);
      var Y = (0, h.Z)("div", { target: "e19u5f480" })({
          name: "ccd0eo",
          styles:
            "max-width:350px;margin:0 auto;display:flex;flex-direction:column;height:100%;h2{font-weight:600;size:18px;line-height:24px;letter-spacing:0.24px;color:#1d3049;margin-bottom:15px;}b{margin-top:12px;display:block;font-weight:600;}p{font-size:12px;line-height:24px;color:#1d3049;margin-bottom:15px;}.bold{font-weight:600;}.sites{background:#ffffff;border-radius:4px;border:1px solid #dcdfe4;&{.site{display:flex;flex-direction:row;flex-wrap:wrap;column-count:2;cursor:pointer;padding:6px 12px;background:transparent;transition:225ms ease-out;&:first-of-type{padding:12px;}&:last-of-type{padding:6px 12px 12px;}&{:hover{background:#edf2fb;transition:ease-out 225ms;}.icon-container{width:36px;height:36px;background-repeat:no-repeat;background-position:center;background-size:cover;}.site-name{width:calc(100% - 36px);line-height:36px;padding-left:24px;font-weight:600;font-size:14px;color:#000000;}}}}}"
        }),
        K = [
          { displayName: "Google", domains: ["google.com"], loginURL: w.G.Google },
          { displayName: "Facebook", domains: ["facebook.com"], loginURL: w.G.Facebook },
          { displayName: "LinkedIn", domains: ["linkedin.com"], loginURL: w.G.LinkedIn },
          { displayName: "PayPal", domains: ["paypal.com"], loginURL: w.G.PayPal },
          { displayName: "Dropbox", domains: ["dropbox.com"], loginURL: w.G.Dropbox },
          { displayName: "Netflix", domains: ["netflix.com"], loginURL: w.G.Netflix }
        ],
        Q = function (e) {
          var t = e.onButtonClick;
          return (0, J.jsx)(
            Y,
            { "data-automation-id": "so-add-first-password", className: "add-first-password no-extension" },
            (0, J.jsx)(
              "p",
              null,
              (0, J.jsx)(m.Trans, { id: "Add passwords to your vault. LastPass will fill them when you need them. Automagically." })
            ),
            (0, J.jsx)(
              "div",
              null,
              (0, J.jsx)("p", { className: "bold" }, (0, J.jsx)(m.Trans, { id: "Click this button to add your first password." })),
              (0, J.jsx)(y.a, { clickFunction: t })
            )
          );
        },
        X = function (e) {
          var t,
            n = e.sitesList,
            r = e.hasExtension,
            o = (0, k.J)(),
            i = (0, L.c)(),
            l = (0, x.Z)(function (e) {
              return e.allSkillsModalOpened;
            }),
            a = function () {
              o.openAddItemDialog(), o.hideSkillDetailsDialog(), l && o.closeShowAllSkills();
            };
          return i
            ? (0, J.jsx)(Q, { onButtonClick: a })
            : r && void 0 !== (null === (t = top) || void 0 === t ? void 0 : t.bg)
            ? (0, J.jsx)(
                Y,
                { "data-automation-id": "so-add-first-password", className: "add-first-password" },
                (0, J.jsx)("p", null, (0, J.jsx)(m.Trans, { id: "We'll help you save your first password." })),
                (0, J.jsx)(
                  "div",
                  { className: "sites" },
                  n.map(function (e, t) {
                    return (0, J.jsx)(C.SiteComponent, { site: e, key: t });
                  })
                )
              )
            : (0, J.jsx)(Q, { onButtonClick: a });
        },
        $ = function (e) {
          var t = e.skill,
            n = e.expanded,
            r = e.fromAllSkillsDialog,
            o = v.R.extensionInstalled(),
            i = (0, z.Fe)() === _.t.SPA,
            l = (0, q.v9)(function (e) {
              return e.settings.features.enable_mv3_background;
            });
          return (0, J.jsx)(b.j, {
            "data-component": "AddYourFirstPassword",
            skill: t,
            icon: (t.completed && (0, J.jsx)(U, null)) || (0, J.jsx)(N, null),
            title: (0, J.jsx)(m.Trans, { id: "Add your first password" }),
            description: (0, J.jsx)(m.Trans, { id: "Let LastPass remember it for you" }),
            expanded: n,
            fromAllSkillsDialog: r,
            bodyTitle: o
              ? (0, J.jsx)(m.Trans, { id: "Choose a website you use" })
              : (0, J.jsx)(m.Trans, { id: "Save precious time when logging in to websites" }),
            automationId: "so-first-password",
            bodyContent: (0, J.jsx)(X, { sitesList: K, hasExtension: i ? o && l : o, fromAllSkillsDialog: r })
          });
        };
    }
  }
]);
