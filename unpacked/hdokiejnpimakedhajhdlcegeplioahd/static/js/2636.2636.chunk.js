(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2636, 2783],
  {
    45155: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return d;
        }
      });
      var o,
        r = n(23381),
        i = ["title", "titleId"];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      function s(e, t) {
        var n = e.title,
          s = e.titleId,
          d = a(e, i);
        return r.createElement(
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
          n ? r.createElement("title", { id: s }, n) : null,
          o ||
            (o = r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z",
              fill: "white"
            }))
        );
      }
      var d = r.forwardRef(s);
      n.p;
    },
    43972: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return a;
        }
      });
      var o = n(91640),
        r = (n(23381), n(45155)),
        i = n(27403);
      var l = (0, o.Z)("button", { target: "e14qtjsr0" })({
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
            (0, i.jsx)(r.r, null)
          );
        };
    },
    30375: function (e, t, n) {
      "use strict";
      n.r(t);
      n(23381);
      var o = n(82325),
        r = n(2377),
        i = n(62783),
        l = n(82160),
        a = n(66785),
        s = n(52384),
        d = n(11970),
        u = n(27403),
        c = { id: 0, type: "AddYourFirstPassword", visible: !0, completed: null, seenAt: null, color: r.a.GREY },
        p = { hideSkillDetailsDialog: jest.fn(), closeShowAllSkills: jest.fn(), openAddItemDialog: jest.fn() };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return p;
          }
        };
      }),
        jest.mock("../../services/lp-vault", function () {
          return {
            LPVault: {
              extensionInstalled: function () {
                return !0;
              }
            }
          };
        }),
        it("should render render the AddYourFirstPassword component without crashing", function () {
          var e = (0, l.Z)([])({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: { recordType: a.w.Password, username: "test@test.com", record: {} } },
              user: { type: d.F.PREMIUM_TRIAL },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              settings: { features: {} }
            }),
            t = (0, o.mount)((0, u.jsx)(s.zt, { store: e }, (0, u.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !1 })));
          expect(t).toHaveLength(1), t.unmount();
        }),
        it("should render the SiteComponent when extension is installed in AddYourFirstPassword component without crashing", function () {
          var e,
            t = (0, l.Z)([]),
            n = null === (e = top) || void 0 === e ? void 0 : e.bg;
          top && (top.bg = {});
          var r = t({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: { recordType: a.w.Password, username: "test@test.com", record: {} } },
              user: { type: d.F.PREMIUM_TRIAL },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              settings: { features: {} }
            }),
            p = (0, o.mount)((0, u.jsx)(s.zt, { store: r }, (0, u.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !1 })));
          expect(p.find(".site-name")).toHaveLength(6), p.unmount(), top && (top.bg = n);
        }),
        it("should render the AddYourFirstPassword component and click the Add Item button", function () {
          var e = (0, l.Z)([]),
            t = { recordType: a.w.Password, username: "test@test.com", record: {} };
          top && (top.bg = void 0);
          var n = e({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: t },
              user: { type: d.F.PREMIUM_TRIAL },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              settings: { features: {} }
            }),
            r = (0, o.mount)((0, u.jsx)(s.zt, { store: n }, (0, u.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !1 })));
          r.find(".add-item-button").at(1).simulate("click"),
            r.unmount(),
            expect(p.openAddItemDialog).toHaveBeenCalled(),
            expect(p.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(p.closeShowAllSkills).toHaveBeenCalled();
        }),
        it("should render the Add button when the User is business user", function () {
          var e = (0, l.Z)([]),
            t = { recordType: a.w.Password, username: "test@test.com", record: {} };
          top && (top.bg = void 0);
          var n = e({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: t },
              user: { type: d.F.ENTERPRISE_TRIAL },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              settings: { features: {} }
            }),
            r = (0, o.mount)((0, u.jsx)(s.zt, { store: n }, (0, u.jsx)(i.default, { skill: c, expanded: !0, fromAllSkillsDialog: !1 })));
          r.find(".add-item-button").at(1).simulate("click"),
            r.unmount(),
            expect(p.openAddItemDialog).toHaveBeenCalled(),
            expect(p.hideSkillDetailsDialog).toHaveBeenCalled();
        });
    },
    62783: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return $;
          }
        });
      var o,
        r,
        i,
        l,
        a,
        s,
        d,
        u,
        c,
        p,
        f,
        m = n(91640),
        h = n(48693),
        g = n(23381),
        v = n(57989),
        b = n(14346),
        x = n(30732),
        k = n(98223),
        y = n(67716),
        w = n(74665),
        L = n(82190),
        C = n(43972),
        j = ["title", "titleId"];
      function O() {
        return (
          (O = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          O.apply(this, arguments)
        );
      }
      function D(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      function E(e, t) {
        var n = e.title,
          m = e.titleId,
          h = D(e, j);
        return g.createElement(
          "svg",
          O(
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
          n ? g.createElement("title", { id: m }, n) : null,
          o ||
            (o = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.0352 23.7321C27.6233 25.2233 30.8274 25.2356 33.4326 23.7831L35.0966 25.2573V27.5751H37.4184L38.1924 28.3863V30.6655H40.231L41.8748 32.2108H45.158V28.9333L36.7157 20.5057C38.5267 17.2716 38.0608 13.1072 35.3071 10.3583C33.366 8.42058 30.7222 7.61398 28.1944 7.93847",
              fill: "#B5D9F1"
            })),
          r ||
            (r = g.createElement("path", {
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
          u ||
            (u = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M52.3027 26.9209C52.9931 26.9209 53.5527 26.3613 53.5527 25.6709C53.5527 24.9805 52.9931 24.4209 52.3027 24.4209C51.6124 24.4209 51.0527 24.9805 51.0527 25.6709C51.0527 26.3613 51.6124 26.9209 52.3027 26.9209Z",
              stroke: "#B5D9F1"
            })),
          c ||
            (c = g.createElement("path", {
              d: "M6.5 25.3945H4V27.8945H6.5V25.3945Z",
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          p || (p = g.createElement("path", { d: "M43.8852 3.34912L46.26 5.72402", stroke: "#B5D9F1", strokeLinecap: "round" })),
          f || (f = g.createElement("path", { d: "M46.1761 3.34912L43.8012 5.72402", stroke: "#B5D9F1", strokeLinecap: "round" }))
        );
      }
      var V,
        A,
        R,
        S,
        M,
        P,
        H,
        I,
        B,
        F,
        Z = g.forwardRef(E),
        T = (n.p, ["title", "titleId"]);
      function N() {
        return (
          (N = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
              }),
          N.apply(this, arguments)
        );
      }
      function U(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
        }
        return r;
      }
      function z(e, t) {
        var n = e.title,
          o = e.titleId,
          r = U(e, T);
        return g.createElement(
          "svg",
          N(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": o
            },
            r
          ),
          n ? g.createElement("title", { id: o }, n) : null,
          V ||
            (V = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.0353 23.7321C27.6234 25.2233 30.8275 25.2356 33.4327 23.7831L35.0967 25.2573V27.5751H37.4185L38.1925 28.3863V30.6655H40.2311L41.875 32.2108H45.1581V28.9333L36.7158 20.5057C38.5268 17.2716 38.0609 13.1072 35.3072 10.3583C33.3661 8.42058 30.7223 7.61398 28.1945 7.93847",
              fill: "white"
            })),
          A ||
            (A = g.createElement("path", {
              d: "M25.0353 23.7321C27.6234 25.2233 30.8275 25.2356 33.4327 23.7831L35.0967 25.2573V27.5751H37.4185L38.1925 28.3863V30.6655H40.2311L41.875 32.2108H45.1581V28.9333L36.7158 20.5057C38.5268 17.2716 38.0609 13.1072 35.3072 10.3583C33.3661 8.42058 30.7223 7.61398 28.1945 7.93847",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "109.7 4.54"
            })),
          R ||
            (R = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M30.8772 14.6355C30.8772 10.0012 27.0983 6.24561 22.4386 6.24561C17.779 6.24561 14 10.0012 14 14.6355C14 18.475 16.5976 21.7044 20.1372 22.7005V24.5509L18.6029 26.0748L20.1372 27.6017V29.1272L18.6029 30.6526L20.1372 32.1781V34.4662L22.4386 36.7544L24.7401 34.4662V22.7005C28.2797 21.7044 30.8772 18.475 30.8772 14.6355Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "117.49 4.54 0.65 2.6"
            })),
          S ||
            (S = g.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M24.0613 13.7107C24.0613 14.6065 23.3343 15.3335 22.4385 15.3335C21.5427 15.3335 20.8157 14.6065 20.8157 13.7107C20.8157 12.8149 21.5427 12.0879 22.4385 12.0879C23.3343 12.0879 24.0613 12.8149 24.0613 13.7107Z",
              stroke: "#D7DBE0",
              strokeWidth: 1.29825,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          M ||
            (M = g.createElement("path", {
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
          H ||
            (H = g.createElement("rect", {
              x: 4,
              y: 25.3945,
              width: 2.5,
              height: 2.5,
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          I || (I = g.createElement("path", { d: "M43.8852 3.34926L46.2601 5.72416", stroke: "#D7DBE0", strokeLinecap: "round" })),
          B || (B = g.createElement("path", { d: "M46.1761 3.34926L43.8012 5.72416", stroke: "#D7DBE0", strokeLinecap: "round" })),
          F ||
            (F = g.createElement("path", {
              d: "M36.5623 16.0934C36.4589 16.0161 36.3415 15.9602 36.2169 15.9289C36.0922 15.8976 35.9627 15.8916 35.8358 15.9111C35.7088 15.9307 35.5869 15.9754 35.477 16.0428C35.3671 16.1102 35.2713 16.1989 35.1952 16.3039L30.5595 22.6905L27.6116 20.2963C27.4084 20.1383 27.1522 20.0674 26.8981 20.0988C26.6439 20.1301 26.412 20.2614 26.252 20.4643C26.092 20.6672 26.0167 20.9257 26.0423 21.1843C26.0678 21.4429 26.1921 21.681 26.3885 21.8477L30.1314 24.8869C30.2348 24.969 30.3533 25.0294 30.48 25.0645C30.6067 25.0996 30.739 25.1087 30.8692 25.0913C30.9994 25.074 31.1248 25.0304 31.2383 24.9633C31.3517 24.8961 31.4508 24.8067 31.5298 24.7002L36.7728 17.4819C36.8488 17.3768 36.9037 17.2574 36.9343 17.1307C36.9649 17.004 36.9705 16.8724 36.951 16.7434C36.9315 16.6145 36.8871 16.4907 36.8204 16.3791C36.7537 16.2676 36.666 16.1705 36.5623 16.0934Z",
              fill: "white"
            }))
        );
      }
      var G = g.forwardRef(z),
        W = (n.p, n(15878)),
        _ = n(46177),
        Y = n(52384),
        J = n(27403);
      var q = (0, m.Z)("div", { target: "e19u5f480" })({
          name: "ccd0eo",
          styles:
            "max-width:350px;margin:0 auto;display:flex;flex-direction:column;height:100%;h2{font-weight:600;size:18px;line-height:24px;letter-spacing:0.24px;color:#1d3049;margin-bottom:15px;}b{margin-top:12px;display:block;font-weight:600;}p{font-size:12px;line-height:24px;color:#1d3049;margin-bottom:15px;}.bold{font-weight:600;}.sites{background:#ffffff;border-radius:4px;border:1px solid #dcdfe4;&{.site{display:flex;flex-direction:row;flex-wrap:wrap;column-count:2;cursor:pointer;padding:6px 12px;background:transparent;transition:225ms ease-out;&:first-of-type{padding:12px;}&:last-of-type{padding:6px 12px 12px;}&{:hover{background:#edf2fb;transition:ease-out 225ms;}.icon-container{width:36px;height:36px;background-repeat:no-repeat;background-position:center;background-size:cover;}.site-name{width:calc(100% - 36px);line-height:36px;padding-left:24px;font-weight:600;font-size:14px;color:#000000;}}}}}"
        }),
        K = [
          { displayName: "Google", domains: ["google.com"], loginURL: L.G.Google },
          { displayName: "Facebook", domains: ["facebook.com"], loginURL: L.G.Facebook },
          { displayName: "LinkedIn", domains: ["linkedin.com"], loginURL: L.G.LinkedIn },
          { displayName: "PayPal", domains: ["paypal.com"], loginURL: L.G.PayPal },
          { displayName: "Dropbox", domains: ["dropbox.com"], loginURL: L.G.Dropbox },
          { displayName: "Netflix", domains: ["netflix.com"], loginURL: L.G.Netflix }
        ],
        Q = function (e) {
          var t = e.onButtonClick;
          return (0, J.jsx)(
            q,
            { "data-automation-id": "so-add-first-password", className: "add-first-password no-extension" },
            (0, J.jsx)(
              "p",
              null,
              (0, J.jsx)(h.Trans, { id: "Add passwords to your vault. LastPass will fill them when you need them. Automagically." })
            ),
            (0, J.jsx)(
              "div",
              null,
              (0, J.jsx)("p", { className: "bold" }, (0, J.jsx)(h.Trans, { id: "Click this button to add your first password." })),
              (0, J.jsx)(C.a, { clickFunction: t })
            )
          );
        },
        X = function (e) {
          var t,
            n = e.sitesList,
            o = e.hasExtension,
            r = (0, v.J)(),
            i = (0, b.c)(),
            l = (0, x.Z)(function (e) {
              return e.allSkillsModalOpened;
            }),
            a = function () {
              r.openAddItemDialog(), r.hideSkillDetailsDialog(), l && r.closeShowAllSkills();
            };
          return i
            ? (0, J.jsx)(Q, { onButtonClick: a })
            : o && void 0 !== (null === (t = top) || void 0 === t ? void 0 : t.bg)
            ? (0, J.jsx)(
                q,
                { "data-automation-id": "so-add-first-password", className: "add-first-password" },
                (0, J.jsx)("p", null, (0, J.jsx)(h.Trans, { id: "We'll help you save your first password." })),
                (0, J.jsx)(
                  "div",
                  { className: "sites" },
                  n.map(function (e, t) {
                    return (0, J.jsx)(y.SiteComponent, { site: e, key: t });
                  })
                )
              )
            : (0, J.jsx)(Q, { onButtonClick: a });
        },
        $ = function (e) {
          var t = e.skill,
            n = e.expanded,
            o = e.fromAllSkillsDialog,
            r = w.R.extensionInstalled(),
            i = (0, W.Fe)() === _.t.SPA,
            l = (0, Y.v9)(function (e) {
              return e.settings.features.enable_mv3_background;
            });
          return (0, J.jsx)(k.j, {
            "data-component": "AddYourFirstPassword",
            skill: t,
            icon: (t.completed && (0, J.jsx)(G, null)) || (0, J.jsx)(Z, null),
            title: (0, J.jsx)(h.Trans, { id: "Add your first password" }),
            description: (0, J.jsx)(h.Trans, { id: "Let LastPass remember it for you" }),
            expanded: n,
            fromAllSkillsDialog: o,
            bodyTitle: r
              ? (0, J.jsx)(h.Trans, { id: "Choose a website you use" })
              : (0, J.jsx)(h.Trans, { id: "Save precious time when logging in to websites" }),
            automationId: "so-first-password",
            bodyContent: (0, J.jsx)(X, { sitesList: K, hasExtension: i ? r && l : r, fromAllSkillsDialog: o })
          });
        };
    },
    55804: function (e) {
      var t,
        n,
        o = Function.prototype,
        r = Object.prototype,
        i = o.toString,
        l = r.hasOwnProperty,
        a = i.call(Object),
        s = r.toString,
        d =
          ((t = Object.getPrototypeOf),
          (n = Object),
          function (e) {
            return t(n(e));
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
              } catch (n) {}
            return t;
          })(e)
        )
          return !1;
        var t = d(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && i.call(n) == a;
      };
    },
    82160: function (e, t, n) {
      "use strict";
      t.Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return r.applyMiddleware.apply(
            void 0,
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n;
              }
              return Array.from(e);
            })(e)
          )(function () {
            var e = [],
              n = [];
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
                for (var o = 0; o < n.length; o++) n[o]();
                return t;
              },
              clearActions: function () {
                e = [];
              },
              subscribe: function (e) {
                return (
                  a(e) && n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    t < 0 || n.splice(t, 1);
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
      var o,
        r = n(43754),
        i = n(55804),
        l = (o = i) && o.__esModule ? o : { default: o };
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
