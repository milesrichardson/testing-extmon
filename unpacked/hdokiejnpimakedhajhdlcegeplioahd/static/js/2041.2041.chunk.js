(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2041, 4063],
  {
    45155: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return d;
        }
      });
      var r,
        o = n(23381),
        i = ["title", "titleId"];
      function a() {
        return (
          (a = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          a.apply(this, arguments)
        );
      }
      function s(e, t) {
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
      function l(e, t) {
        var n = e.title,
          l = e.titleId,
          d = s(e, i);
        return o.createElement(
          "svg",
          a(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l
            },
            d
          ),
          n ? o.createElement("title", { id: l }, n) : null,
          r ||
            (r = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z",
              fill: "white"
            }))
        );
      }
      var d = o.forwardRef(l);
      n.p;
    },
    43972: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return s;
        }
      });
      var r = n(91640),
        o = (n(23381), n(45155)),
        i = n(27403);
      var a = (0, r.Z)("button", { target: "e14qtjsr0" })({
          name: "1lnnzuy",
          styles:
            "height:56px;width:56px;border-radius:50%;border:0;background-color:#d32d27;box-shadow:0px 8px 8px rgb(0 0 0 / 24%);cursor:pointer;margin-top:12px"
        }),
        s = function (e) {
          var t = e.clickFunction;
          return (0, i.jsx)(
            a,
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
    9069: function (e, t, n) {
      "use strict";
      n.r(t);
      n(23381);
      var r = n(82325),
        o = n(2377),
        i = n(34063),
        a = n(82160),
        s = n(66785),
        l = n(52384),
        d = n(11970),
        c = n(27403),
        u = { id: 0, type: "AddThreePassword", visible: !0, completed: null, seenAt: null, color: o.a.GREY },
        p = { hideSkillDetailsDialog: jest.fn(), closeShowAllSkills: jest.fn(), openAddItemDialog: jest.fn(), openAllItemsView: jest.fn() };
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
        it("should render render the AddThreePassword component without crashing", function () {
          var e = (0, a.Z)([])({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: { recordType: s.w.Password, username: "test@test.com", record: {} } },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              user: { type: d.F.ENTERPRISE_TRIAL }
            }),
            t = (0, r.mount)((0, c.jsx)(l.zt, { store: e }, (0, c.jsx)(i.default, { skill: u, expanded: !0, fromAllSkillsDialog: !1 })));
          expect(p.openAllItemsView).toHaveBeenCalled(), expect(t).toHaveLength(1), t.unmount();
        }),
        it("should render the SiteComponent when extension is installed in AddThreePassword component without crashing", function () {
          var e,
            t = (0, a.Z)([]),
            n = null === (e = top) || void 0 === e ? void 0 : e.bg;
          top && (top.bg = {});
          var o = t({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: { recordType: s.w.Password, username: "test@test.com", record: {} } },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              user: { type: d.F.ENTERPRISE_TRIAL }
            }),
            p = (0, r.mount)((0, c.jsx)(l.zt, { store: o }, (0, c.jsx)(i.default, { skill: u, expanded: !0, fromAllSkillsDialog: !1 })));
          console.log(p.html()), expect(p.find(".site-name")).toHaveLength(6), p.unmount(), top && (top.bg = n);
        }),
        it("should render the AddThreePassword component and click the Add Item button", function () {
          var e = (0, a.Z)([]),
            t = { recordType: s.w.Password, username: "test@test.com", record: {} };
          top && (top.bg = void 0);
          var n = e({
              login: { baseUrl: "https://dummy.com" },
              vaultData: { passwords: t },
              secondaryOnboarding: { allSkillsModalOpened: !0 },
              user: { type: d.F.ENTERPRISE_TRIAL }
            }),
            o = (0, r.mount)((0, c.jsx)(l.zt, { store: n }, (0, c.jsx)(i.default, { skill: u, expanded: !0, fromAllSkillsDialog: !1 })));
          o.find(".add-item-button").at(1).simulate("click"),
            o.unmount(),
            expect(p.openAddItemDialog).toHaveBeenCalled(),
            expect(p.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(p.closeShowAllSkills).toHaveBeenCalled();
        });
    },
    34063: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return ce;
          }
        });
      var r,
        o,
        i,
        a,
        s,
        l,
        d,
        c,
        u,
        p,
        f,
        h,
        m,
        k,
        g,
        x,
        b,
        w = n(91640),
        y = n(48693),
        L = n(23381),
        v = n(57989),
        j = n(30732),
        E = n(77829),
        D = n(98223),
        C = n(67716),
        O = n(74665),
        A = n(82190),
        M = n(43972),
        H = ["title", "titleId"];
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
      function P(e, t) {
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
          w = e.titleId,
          y = P(e, H);
        return L.createElement(
          "svg",
          S(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": w
            },
            y
          ),
          n ? L.createElement("title", { id: w }, n) : null,
          r ||
            (r = L.createElement("path", {
              d: "M19 5.81157C19 5.36335 19.3634 5 19.8116 5H45.3806C45.8288 5 46.1921 5.36335 46.1921 5.81157V29.8279C46.1921 30.2761 45.8288 30.6395 45.3806 30.6395H19.8116C19.3634 30.6395 19 30.2761 19 29.8279V5.81157Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          o ||
            (o = L.createElement("path", {
              d: "M16 8.81157C16 8.36335 16.3634 8 16.8116 8H42.3806C42.8288 8 43.1921 8.36335 43.1921 8.81157V32.8279C43.1921 33.2761 42.8288 33.6395 42.3806 33.6395H16.8116C16.3634 33.6395 16 33.2761 16 32.8279V8.81157Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          i ||
            (i = L.createElement("path", {
              d: "M13.0535 11.7291C13.0535 11.2808 13.4168 10.9175 13.865 10.9175H39.434C39.8822 10.9175 40.2456 11.2808 40.2456 11.7291V35.7454C40.2456 36.1936 39.8822 36.557 39.434 36.557H13.865C13.4168 36.557 13.0535 36.1936 13.0535 35.7454V11.7291Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          a ||
            (a = L.createElement("path", {
              d: "M13.0531 16.834H40.2452",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          s ||
            (s = L.createElement("path", {
              d: "M16.9376 20.7788H24.7068V28.6679H16.9376V20.7788Z",
              fill: "#E78C89",
              stroke: "#E78C89",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          l ||
            (l = L.createElement("path", {
              d: "M16.8835 32.5278H36.4174",
              stroke: "#90C6EB",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          d ||
            (d = L.createElement("path", {
              d: "M28.6482 24.8643H36.4186",
              stroke: "#90C6EB",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          c ||
            (c = L.createElement("path", {
              d: "M28.6482 28.9214H36.4186",
              stroke: "#90C6EB",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          u ||
            (u = L.createElement("path", {
              d: "M28.6482 20.8071H36.4186",
              stroke: "#90C6EB",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          p ||
            (p = L.createElement("path", {
              d: "M5.57081 1.91772L3.47064 3.27393L4.85393 5.40116L6.9541 4.04496L5.57081 1.91772Z",
              stroke: "#E78C89",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          f ||
            (f = L.createElement("path", {
              d: "M11.5002 2.16442L10.99 4.61182L13.469 5.15353L13.9791 2.70613L11.5002 2.16442Z",
              stroke: "#E78C89",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          h || (h = L.createElement("path", { d: "M2.26031 10.6338L5.5681 11.3659L2.26031 10.6338Z", fill: "#E78C89" })),
          m || (m = L.createElement("path", { d: "M2.26031 10.6338L5.5681 11.3659", stroke: "#E78C89", strokeLinecap: "round" })),
          k || (k = L.createElement("path", { d: "M4.1836 9.39186L3.50285 12.6997L4.1836 9.39186Z", fill: "#E78C89" })),
          g || (g = L.createElement("path", { d: "M4.1836 9.39186L3.50285 12.6997", stroke: "#E78C89", strokeLinecap: "round" })),
          x ||
            (x = L.createElement("path", {
              d: "M55.4711 13.4389L53.615 11.7642L51.9474 13.613L53.8035 15.2878L55.4711 13.4389Z",
              stroke: "#E78C89",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          b ||
            (b = L.createElement(
              "defs",
              null,
              L.createElement("clipPath", { id: "clip0" }, L.createElement("rect", { width: 60, height: 40, fill: "white" }))
            ))
        );
      }
      var I,
        T,
        Z,
        V,
        R,
        N,
        W,
        F,
        U,
        z,
        G,
        _,
        q,
        J,
        Y,
        K,
        Q,
        X = L.forwardRef(B),
        $ = (n.p, ["title", "titleId"]);
      function ee() {
        return (
          (ee = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ee.apply(this, arguments)
        );
      }
      function te(e, t) {
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
      function ne(e, t) {
        var n = e.title,
          r = e.titleId,
          o = te(e, $);
        return L.createElement(
          "svg",
          ee(
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
          n ? L.createElement("title", { id: r }, n) : null,
          I ||
            (I = L.createElement("path", {
              d: "M19 5.81157C19 5.36335 19.3634 5 19.8116 5H45.3806C45.8288 5 46.1921 5.36335 46.1921 5.81157V29.8279C46.1921 30.2761 45.8288 30.6395 45.3806 30.6395H19.8116C19.3634 30.6395 19 30.2761 19 29.8279V5.81157Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          T ||
            (T = L.createElement("path", {
              d: "M16 8.81157C16 8.36335 16.3634 8 16.8116 8H42.3806C42.8288 8 43.1921 8.36335 43.1921 8.81157V32.8279C43.1921 33.2761 42.8288 33.6395 42.3806 33.6395H16.8116C16.3634 33.6395 16 33.2761 16 32.8279V8.81157Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Z ||
            (Z = L.createElement("path", {
              d: "M13.0535 11.7291C13.0535 11.2808 13.4168 10.9175 13.865 10.9175H39.434C39.8822 10.9175 40.2456 11.2808 40.2456 11.7291V35.7454C40.2456 36.1936 39.8822 36.557 39.434 36.557H13.865C13.4168 36.557 13.0535 36.1936 13.0535 35.7454V11.7291Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          V ||
            (V = L.createElement("path", {
              d: "M13.0531 16.834H40.2452",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          R ||
            (R = L.createElement("path", {
              d: "M16.9376 20.7788H24.7068V28.6679H16.9376V20.7788Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          N ||
            (N = L.createElement("path", {
              d: "M16.8835 32.5278H36.4174",
              stroke: "#D7DBE0",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          W ||
            (W = L.createElement("path", {
              d: "M28.6482 24.8643H36.4186",
              stroke: "#D7DBE0",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          F ||
            (F = L.createElement("path", {
              d: "M28.6482 28.9214H36.4186",
              stroke: "#D7DBE0",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          U ||
            (U = L.createElement("path", {
              d: "M28.6482 20.8071H36.4186",
              stroke: "#D7DBE0",
              strokeWidth: 1.77532,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          z ||
            (z = L.createElement("path", {
              d: "M5.57081 1.91772L3.47064 3.27393L4.85393 5.40116L6.9541 4.04496L5.57081 1.91772Z",
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          G ||
            (G = L.createElement("path", {
              d: "M11.5002 2.16442L10.99 4.61182L13.469 5.15353L13.9791 2.70613L11.5002 2.16442Z",
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          _ || (_ = L.createElement("path", { d: "M2.26031 10.6338L5.5681 11.3659L2.26031 10.6338Z", fill: "#D7DBE0" })),
          q || (q = L.createElement("path", { d: "M2.26031 10.6338L5.5681 11.3659", stroke: "#D7DBE0", strokeLinecap: "round" })),
          J || (J = L.createElement("path", { d: "M4.1836 9.39186L3.50285 12.6997L4.1836 9.39186Z", fill: "#D7DBE0" })),
          Y || (Y = L.createElement("path", { d: "M4.1836 9.39186L3.50285 12.6997", stroke: "#D7DBE0", strokeLinecap: "round" })),
          K ||
            (K = L.createElement("path", {
              d: "M55.4711 13.4389L53.615 11.7642L51.9474 13.613L53.8035 15.2878L55.4711 13.4389Z",
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Q ||
            (Q = L.createElement(
              "defs",
              null,
              L.createElement("clipPath", { id: "clip0" }, L.createElement("rect", { width: 60, height: 40, fill: "white" }))
            ))
        );
      }
      var re = L.forwardRef(ne),
        oe = (n.p, n(45155)),
        ie = n(27403);
      var ae = (0, w.Z)("div", { target: "e14satbd1" })({
          name: "qfo9pd",
          styles:
            "&{height:100%;max-width:350px;margin:0 auto;h2{font-weight:600;size:18px;line-height:24px;letter-spacing:0.24px;color:#1d3049;margin-bottom:15px;}p{font-size:12px;line-height:24px;color:#1d3049;margin-bottom:12px;}.bold{font-weight:600;}.add-three-passwords{display:flex;flex-direction:column;height:100%;.arrow-container--drawer{height:350px;}}.sites{background:#ffffff;border-radius:4px;border:1px solid #dcdfe4;text-align:left;&{.site{display:flex;flex-direction:row;flex-wrap:wrap;column-count:2;cursor:pointer;padding:6px 12px;background:transparent;transition:225ms ease-out;&:first-of-type{padding:12px;}&:last-of-type{padding:6px 12px 12px;}&{:hover{background:#edf2fb;transition:ease-out 225ms;}.icon-container{width:36px;height:36px;background-repeat:no-repeat;background-position:center;background-size:cover;}.site-name{width:calc(100% - 36px);line-height:36px;padding-left:24px;font-weight:600;font-size:14px;color:#000000;}}}}}}"
        }),
        se = [
          { displayName: "Google", domains: ["google.com"], loginURL: A.G.Google },
          { displayName: "Facebook", domains: ["facebook.com"], loginURL: A.G.Facebook },
          { displayName: "LinkedIn", domains: ["linkedin.com"], loginURL: A.G.LinkedIn },
          { displayName: "PayPal", domains: ["paypal.com"], loginURL: A.G.PayPal },
          { displayName: "Dropbox", domains: ["dropbox.com"], loginURL: A.G.Dropbox },
          { displayName: "Netflix", domains: ["netflix.com"], loginURL: A.G.Netflix }
        ],
        le = (0, w.Z)("button", { target: "e14satbd0" })({
          name: "1a4ezhc",
          styles:
            "height:56px;width:56px;border-radius:50%;border:0;background-color:#d32d27;box-shadow:0px 8px 8px rgb(0 0 0 / 24%);cursor:pointer"
        }),
        de = function (e) {
          var t,
            n = e.sitesList,
            r = e.hasExtension,
            o = e.fromAllSkillsDialog,
            i = (0, v.J)(),
            a = (0, j.Z)(function (e) {
              return e.allSkillsModalOpened;
            }),
            s = function () {
              i.openAddItemDialog(), i.hideSkillDetailsDialog(), a && i.closeShowAllSkills();
            };
          return r && void 0 !== (null === (t = top) || void 0 === t ? void 0 : t.bg)
            ? (0, ie.jsx)(
                ae,
                { "data-component": "AddThreePassword" },
                (0, ie.jsx)(
                  "div",
                  { className: "add-three-passwords" },
                  (0, ie.jsx)(
                    "p",
                    null,
                    o
                      ? (0, ie.jsx)(y.Trans, { id: "We'll help you save your first password." })
                      : (0, ie.jsx)(y.Trans, { id: "Consider adding frequently used websites. Save time, every day." })
                  ),
                  (0, ie.jsx)(
                    "div",
                    { className: "sites" },
                    n.map(function (e, t) {
                      return (0, ie.jsx)(C.SiteComponent, { site: e, key: t });
                    })
                  ),
                  (0, ie.jsx)(
                    "div",
                    null,
                    (0, ie.jsx)("p", { className: "bold" }, (0, ie.jsx)(y.Trans, { id: "Or try adding something using this button." })),
                    (0, ie.jsx)(
                      le,
                      {
                        className: "add-item-button",
                        onClick: function () {
                          s();
                        }
                      },
                      (0, ie.jsx)(oe.r, null)
                    )
                  )
                )
              )
            : (0, ie.jsx)(
                ae,
                { "data-component": "AddThreePassword" },
                (0, ie.jsx)(
                  "div",
                  { className: "add-three-passwords no-extension" },
                  (0, ie.jsx)(
                    "p",
                    null,
                    (0, ie.jsx)(y.Trans, { id: "Add passwords to your vault. LastPass will fill them when you need them. Automagically." })
                  ),
                  (0, ie.jsx)(
                    "div",
                    null,
                    (0, ie.jsx)("p", { className: "bold" }, (0, ie.jsx)(y.Trans, { id: "Click this button to add your first password." })),
                    (0, ie.jsx)(M.a, { clickFunction: s })
                  )
                )
              );
        },
        ce = function (e) {
          var t = e.skill,
            n = e.expanded,
            r = e.fromAllSkillsDialog,
            o = (0, E.t)(function (e) {
              return e.passwords;
            }),
            i = Math.min(3, Object.keys(o).length),
            a = (0, v.J)(),
            s = O.R.extensionInstalled();
          return (
            (0, L.useEffect)(
              function () {
                n && a.openAllItemsView();
              },
              [a, n]
            ),
            (0, ie.jsx)(D.j, {
              "data-component": "AddThreePassword",
              skill: t,
              icon: (t.completed && (0, ie.jsx)(re, null)) || (0, ie.jsx)(X, null),
              title: (0, ie.jsx)(y.Trans, { id: "Add 3+ websites" }),
              description: (0, ie.jsx)(y.Trans, { id: "The more you add, the fewer you have to remember" }),
              expanded: n,
              fromAllSkillsDialog: r,
              bodyTitle: r
                ? (0, ie.jsx)(y.Trans, { id: "Choose a website to use" })
                : (0, ie.jsx)(y.Trans, { id: "{passwordsCount}/3 websites already added", values: { passwordsCount: i } }),
              automationId: "so-three-password",
              bodyContent: (0, ie.jsx)(de, { sitesList: se, hasExtension: s, fromAllSkillsDialog: r })
            })
          );
        };
    },
    77829: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return o;
        }
      });
      var r = n(52384),
        o = function (e) {
          return (0, r.v9)(function (t) {
            return e(t.vaultData);
          });
        };
    },
    55804: function (e) {
      var t,
        n,
        r = Function.prototype,
        o = Object.prototype,
        i = r.toString,
        a = o.hasOwnProperty,
        s = i.call(Object),
        l = o.toString,
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
          "[object Object]" != l.call(e) ||
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
        var n = a.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && i.call(n) == s;
      };
    },
    82160: function (e, t, n) {
      "use strict";
      t.Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return o.applyMiddleware.apply(
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
                return s(t) ? t(e) : t;
              },
              getActions: function () {
                return e;
              },
              dispatch: function (t) {
                if (!(0, a.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" === typeof t.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant? Action: ' + JSON.stringify(t)
                  );
                e.push(t);
                for (var r = 0; r < n.length; r++) n[r]();
                return t;
              },
              clearActions: function () {
                e = [];
              },
              subscribe: function (e) {
                return (
                  s(e) && n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    t < 0 || n.splice(t, 1);
                  }
                );
              },
              replaceReducer: function (e) {
                if (!s(e)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var r,
        o = n(43754),
        i = n(55804),
        a = (r = i) && r.__esModule ? r : { default: r };
      var s = function (e) {
        return "function" === typeof e;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
