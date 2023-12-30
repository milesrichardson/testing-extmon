(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [8626, 1621],
  {
    57302: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return d;
        }
      });
      var r,
        o,
        i = n(23381),
        a = ["title", "titleId"];
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
      function c(e, t) {
        var n = e.title,
          c = e.titleId,
          d = s(e, a);
        return i.createElement(
          "svg",
          l(
            {
              width: 48,
              height: 32,
              viewBox: "0 0 48 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": c
            },
            d
          ),
          n ? i.createElement("title", { id: c }, n) : null,
          r ||
            (r = i.createElement("path", {
              d: "M47.776 3.66401C47.7092 3.63563 47.6353 3.62789 47.5641 3.64179C47.4928 3.65569 47.4273 3.69059 47.376 3.74201L27.882 23.232C26.8506 24.2628 25.4522 24.8418 23.994 24.8418C22.5358 24.8418 21.1374 24.2628 20.106 23.232L0.620004 3.74201C0.56902 3.69012 0.503509 3.65489 0.432104 3.64096C0.360699 3.62704 0.286751 3.63508 0.220004 3.66401C0.154417 3.69226 0.0985893 3.73918 0.0594709 3.79893C0.0203524 3.85867 -0.000328216 3.9286 3.93912e-06 4.00001V28C3.93912e-06 29.0609 0.421431 30.0783 1.17158 30.8284C1.92172 31.5786 2.93914 32 4 32H44C45.0609 32 46.0783 31.5786 46.8284 30.8284C47.5786 30.0783 48 29.0609 48 28V4.00001C48.0003 3.92809 47.9791 3.85772 47.9392 3.79788C47.8993 3.73803 47.8425 3.69143 47.776 3.66401V3.66401Z",
              fill: "#768498"
            })),
          o ||
            (o = i.createElement("path", {
              d: "M22.23 21.112C22.6994 21.58 23.3352 21.8428 23.998 21.8428C24.6608 21.8428 25.2966 21.58 25.766 21.112L45.138 1.74C45.2692 1.60885 45.3612 1.44381 45.404 1.26333C45.4467 1.08285 45.4384 0.894036 45.38 0.718C45.16 0.0600004 44.548 0 44 0H4.00002C3.45002 0 2.83402 0.0600004 2.61802 0.718C2.55961 0.894036 2.55131 1.08285 2.59405 1.26333C2.63678 1.44381 2.72887 1.60885 2.86002 1.74L22.23 21.112Z",
              fill: "#768498"
            }))
        );
      }
      var d = i.forwardRef(c);
      n.p;
    },
    92453: function (e, t, n) {
      "use strict";
      n.r(t);
      n(23381);
      var r = n(82160),
        o = n(82325),
        i = n(2377),
        a = n(31621),
        l = n(11970),
        s = n(52384),
        c = n(27403),
        d = { id: 0, type: "EnableDarkWebMonitoring", visible: !0, completed: null, seenAt: null, color: i.a.BLUE },
        u = {
          complete: jest.fn(),
          hideExpandedSkillInDrawer: jest.fn(),
          toggleShowAllSkills: jest.fn(),
          hideSkillDetailsDialog: jest.fn(),
          openSecurityDashboard: jest.fn()
        };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return u;
          }
        };
      });
      var p = (0, r.Z)([])({ secondaryOnboarding: { isHowToOpen: !1 }, user: { type: l.F.ENTERPRISE_TRIAL } });
      it("should shallow render the EnableDarkWebMonitoring ad component without crashing", function () {
        var e = (0, o.shallow)((0, c.jsx)(s.zt, { store: p }, (0, c.jsx)(a.default, { skill: d, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(e).toHaveLength(1);
      }),
        it("should open the security dashboard and be completed when the EnableDarkWebMonitoring button is clicked", function () {
          var e = (0, o.mount)((0, c.jsx)(s.zt, { store: p }, (0, c.jsx)(a.default, { skill: d, expanded: !0, fromAllSkillsDialog: !1 })));
          e.find(".action-cta").at(1).simulate("click"),
            e.unmount(),
            expect(u.openSecurityDashboard).toHaveBeenCalled(),
            expect(u.complete).toHaveBeenCalled(),
            expect(u.hideExpandedSkillInDrawer).toHaveBeenCalled();
        }),
        it("should be closed when the EnableDarkWebMonitoring button is clicked from all skills", function () {
          var e = (0, o.mount)((0, c.jsx)(s.zt, { store: p }, (0, c.jsx)(a.default, { skill: d, expanded: !0, fromAllSkillsDialog: !0 })));
          e.find(".action-cta").at(1).simulate("click"),
            e.unmount(),
            expect(u.openSecurityDashboard).toHaveBeenCalled(),
            expect(u.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(u.toggleShowAllSkills).toHaveBeenCalled();
        });
    },
    31621: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return P;
          }
        });
      var r,
        o,
        i,
        a,
        l,
        s,
        c,
        d,
        u,
        p,
        C,
        f,
        h,
        m,
        g,
        b,
        x,
        k,
        j = n(91640),
        y = n(48693),
        v = n(23381),
        w = n(57989),
        L = n(27645),
        E = n(26807),
        D = n(98223),
        O = n(2770),
        S = n(57302),
        M = n(74292),
        Z = ["title", "titleId"];
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          A.apply(this, arguments)
        );
      }
      function B(e, t) {
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
      function H(e, t) {
        var n = e.title,
          j = e.titleId,
          y = B(e, Z);
        return v.createElement(
          "svg",
          A(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": j
            },
            y
          ),
          n ? v.createElement("title", { id: j }, n) : null,
          r ||
            (r = v.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.4246 28.3027C11.1149 28.3027 11.6746 27.7431 11.6746 27.0527C11.6746 26.3624 11.1149 25.8027 10.4246 25.8027C9.7342 25.8027 9.17456 26.3624 9.17456 27.0527C9.17456 27.7431 9.7342 28.3027 10.4246 28.3027Z",
              stroke: "#EDBF0E",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          o ||
            (o = v.createElement("path", {
              d: "M11.5 8H9V10.5H11.5V8Z",
              stroke: "#EDBF0E",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          i ||
            (i = v.createElement("path", {
              d: "M49.7678 25.6556L48 27.4233L49.7678 29.1911L51.5355 27.4233L49.7678 25.6556Z",
              stroke: "#EDBF0E",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          a ||
            (a = v.createElement("path", {
              d: "M34.5662 9.32553C36.5117 9.97524 38.5907 10.118 40.6067 9.74035C40.2291 11.7564 40.3719 13.8354 41.0215 15.7808C41.9376 17.6163 43.307 19.1876 44.9999 20.346C43.307 21.5045 41.9376 23.0758 41.0215 24.9112C40.3719 26.8567 40.2291 28.9357 40.6067 30.9517C38.5907 30.5746 36.5118 30.7174 34.5662 31.3665C32.733 32.2837 31.1637 33.6529 30.0065 35.3449C28.8459 33.6513 27.2718 32.2822 25.4337 31.3676C23.4883 30.7175 21.4093 30.5744 19.3932 30.9517C19.7705 28.9356 19.6274 26.8566 18.9773 24.9112C18.0616 23.0758 16.6926 21.5045 15 20.346C16.6926 19.1875 18.0616 17.6162 18.9773 15.7808C19.6274 13.8355 19.7705 11.7564 19.3932 9.74035C21.4092 10.1174 23.4881 9.97463 25.4337 9.32553C27.2716 8.41014 28.8456 7.04081 30.0065 5.34717C31.1637 7.03912 32.733 8.40831 34.5662 9.32553Z",
              fill: "white"
            })),
          l ||
            (l = v.createElement("path", {
              d: "M35.1806 9.16552C35.6225 9.46602 36.0853 9.73774 36.5662 9.97836C37.8206 10.3973 39.1305 10.6054 40.4433 10.5992C40.4773 10.1958 40.5318 9.79323 40.6067 9.39318C38.8015 9.73134 36.9458 9.65223 35.1806 9.16552Z",
              fill: "#B5D9F1"
            })),
          s ||
            (s = v.createElement("path", {
              d: "M21.5564 30.3989C21.6938 28.7689 21.4984 27.1235 20.9773 25.564C20.0616 23.7286 18.6926 22.1573 17 20.9988C18.6926 19.8403 20.0616 18.269 20.9773 16.4336C21.6274 14.4883 21.7705 12.4092 21.3932 10.3932C23.4092 10.7702 25.4881 10.6275 27.4337 9.97836C28.9953 9.20061 30.3663 8.09517 31.4553 6.74154C30.9208 6.20974 30.4354 5.62703 30.0065 5C28.8456 6.69364 27.2716 8.06297 25.4337 8.97836C23.4881 9.62746 21.4092 9.77023 19.3932 9.39318C19.7705 11.4092 19.6274 13.4883 18.9773 15.4336C18.0616 17.269 16.6926 18.8403 15 19.9988C16.6926 21.1573 18.0616 22.7286 18.9773 24.564C19.6274 26.5094 19.7705 28.5884 19.3932 30.6045C20.1093 30.4705 20.8333 30.4022 21.5564 30.3989Z",
              fill: "#B5D9F1"
            })),
          c ||
            (c = v.createElement("path", {
              d: "M34.5662 9.32553C36.5117 9.97524 38.5907 10.118 40.6067 9.74035C40.2291 11.7564 40.3719 13.8354 41.0215 15.7808C41.9376 17.6163 43.307 19.1876 44.9999 20.346C43.307 21.5045 41.9376 23.0758 41.0215 24.9112C40.3719 26.8567 40.2291 28.9357 40.6067 30.9517C38.5907 30.5746 36.5118 30.7174 34.5662 31.3665C32.733 32.2837 31.1637 33.6529 30.0065 35.3449C28.8459 33.6513 27.2718 32.2822 25.4337 31.3676C23.4883 30.7175 21.4093 30.5744 19.3932 30.9517C19.7705 28.9356 19.6274 26.8566 18.9773 24.9112C18.0616 23.0758 16.6926 21.5045 15 20.346C16.6926 19.1875 18.0616 17.6162 18.9773 15.7808C19.6274 13.8355 19.7705 11.7564 19.3932 9.74035C21.4092 10.1174 23.4881 9.97463 25.4337 9.32553C27.2716 8.41014 28.8456 7.04081 30.0065 5.34717C31.1637 7.03912 32.733 8.40831 34.5662 9.32553Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          d ||
            (d = v.createElement("path", {
              d: "M32.7849 13.6232C33.9719 14.0196 35.2404 14.1065 36.4704 13.8757C36.2397 15.1057 36.3265 16.3742 36.7229 17.5612C37.2826 18.6808 38.1185 19.6391 39.1521 20.3452C38.1187 21.0515 37.2826 22.0097 36.7229 23.1292C36.3265 24.3158 36.2396 25.584 36.4704 26.8136C35.2404 26.5831 33.9718 26.6704 32.7849 27.0673C31.6675 27.6268 30.7111 28.4621 30.0063 29.4941C29.2995 28.4617 28.341 27.6268 27.2213 27.0683C26.0348 26.6716 24.7667 26.5842 23.537 26.8147C23.7653 25.5841 23.676 24.3157 23.2778 23.1292C22.7194 22.0096 21.8844 21.0509 20.8521 20.3441C21.8841 19.6374 22.719 18.6792 23.2778 17.5601C23.6739 16.3731 23.7614 15.1048 23.5315 13.8747C24.7611 14.1054 26.0293 14.0184 27.2159 13.6221C28.3374 13.0642 29.2978 12.2293 30.0063 11.1963C30.7112 12.2282 31.6676 13.0634 32.7849 13.6232Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          u ||
            (u = v.createElement("path", {
              d: "M30.0012 2V38.6915",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          p ||
            (p = v.createElement("path", {
              d: "M17.8538 8.19824L45 35.3445",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          C ||
            (C = v.createElement("path", {
              d: "M15.0022 20.3457H44.9988",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          f ||
            (f = v.createElement("path", {
              d: "M15 35.3835L42.1462 8.2373",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          h ||
            (h = v.createElement("path", {
              d: "M28.2499 36C28.1264 36 28.0199 35.9075 28.0024 35.7855L27.7649 34.1215L27.3059 33.686C27.1144 33.973 26.8049 34 26.4999 34C26.1954 34 25.8859 33.973 25.6944 33.686L25.2354 34.1215L24.9974 35.7855C24.9799 35.9075 24.8739 36 24.7499 36C24.7384 36 24.7264 35.9995 24.7144 35.9975C24.5779 35.978 24.4824 35.851 24.5024 35.7145L24.7524 33.9645C24.7604 33.909 24.7869 33.8575 24.8274 33.8185L25.5234 33.1585C25.5199 33.132 25.5169 33.105 25.5144 33.077L24.1634 33.463L23.4644 34.6285C23.4194 34.7035 23.3374 34.75 23.2499 34.75C23.2049 34.75 23.1604 34.7375 23.1214 34.7145C23.0639 34.68 23.0239 34.6255 23.0074 34.5605C22.9914 34.496 23.0014 34.4285 23.0354 34.3715L23.7854 33.1215C23.8179 33.067 23.8694 33.0275 23.9309 33.01L25.3654 32.6L23.9024 31.98C23.8189 31.9445 23.7614 31.867 23.7514 31.777L23.5014 29.527C23.4939 29.4605 23.5129 29.3955 23.5544 29.343C23.5959 29.2905 23.6559 29.258 23.7219 29.2505C23.7314 29.2505 23.7409 29.25 23.7504 29.25C23.8779 29.25 23.9844 29.3455 23.9984 29.4725L24.2324 31.577L25.5979 32.1555C25.6179 32.098 25.6414 32.0415 25.6669 31.9865C25.0569 31.6205 24.6999 30.945 24.7504 30.232C24.7499 29.0335 25.5894 28.2165 26.2499 28.037V24.25C26.2499 24.112 26.3619 24 26.4999 24C26.6379 24 26.7499 24.112 26.7499 24.25V28.037C27.4089 28.2165 28.2479 29.035 28.2499 30.245C28.2984 30.948 27.9414 31.621 27.3329 31.9865C27.3589 32.0415 27.3819 32.098 27.4024 32.156L28.7674 31.5765L29.0014 29.472C29.0159 29.345 29.1229 29.2495 29.2509 29.2495C29.2599 29.2495 29.2684 29.25 29.2774 29.251C29.4149 29.266 29.5139 29.39 29.4989 29.527L29.2489 31.777C29.2389 31.8665 29.1814 31.944 29.0979 31.9795L27.6364 32.5995L29.0689 33.009C29.1304 33.0265 29.1819 33.0665 29.2149 33.121L29.9649 34.371C29.9994 34.4285 30.0094 34.4955 29.9929 34.56C29.9769 34.625 29.9364 34.6795 29.8789 34.714C29.8399 34.7375 29.7954 34.75 29.7499 34.75C29.6624 34.75 29.5804 34.7035 29.5354 34.6285L28.8364 33.463L27.4854 33.077C27.4829 33.105 27.4799 33.132 27.4764 33.1585L28.1719 33.8185C28.2124 33.857 28.2394 33.909 28.2474 33.9645L28.4974 35.7145C28.5069 35.7805 28.4899 35.8465 28.4499 35.9C28.4099 35.9535 28.3514 35.988 28.2854 35.9975C28.2734 35.9995 28.2614 36 28.2499 36ZM26.0199 32.5115C26.0184 32.529 26.0149 32.5435 26.0124 32.553C26.0034 32.614 25.9989 32.681 25.9999 32.746C25.9999 33.5 26.1359 33.5 26.4999 33.5C26.8639 33.5 26.9999 33.5 26.9999 32.75C27.0029 32.552 26.9594 32.3585 26.8724 32.184C26.7544 32.2175 26.6364 32.2395 26.5204 32.249C26.5169 32.249 26.5034 32.2495 26.4999 32.2495C26.4934 32.2495 26.4869 32.2495 26.4809 32.249C26.3639 32.2395 26.2459 32.2175 26.1279 32.184C26.0764 32.2875 26.0399 32.397 26.0199 32.5115ZM26.4999 28.5C26.1789 28.5 25.2499 29.1015 25.2499 30.25C25.1964 31.01 25.7564 31.6765 26.4999 31.749C27.2434 31.676 27.8034 31.0145 27.7504 30.2675C27.7504 30.2645 27.7499 30.2525 27.7499 30.25C27.7499 29.1015 26.8214 28.5 26.4999 28.5Z",
              fill: "#D32D27"
            })),
          m ||
            (m = v.createElement("path", {
              d: "M26.4999 28.5C26.1789 28.5 25.2499 29.1015 25.2499 30.25C25.1964 31.01 25.7564 31.6765 26.4999 31.749C27.2434 31.676 27.8034 31.0145 27.7504 30.2675C27.7504 30.2645 27.7499 30.2525 27.7499 30.25C27.7499 29.1015 26.8214 28.5 26.4999 28.5Z",
              fill: "#D32D27"
            })),
          g ||
            (g = v.createElement("path", {
              d: "M26.0199 32.5116C26.0184 32.5291 26.0149 32.5436 26.0124 32.5531C26.0034 32.6141 25.9989 32.6811 25.9999 32.7461C25.9999 33.5001 26.1359 33.5001 26.4999 33.5001C26.8639 33.5001 26.9999 33.5001 26.9999 32.7501C27.0029 32.5521 26.9594 32.3586 26.8724 32.1841C26.7544 32.2176 26.6364 32.2396 26.5204 32.2491C26.5169 32.2491 26.5034 32.2496 26.4999 32.2496C26.4934 32.2496 26.4869 32.2496 26.4809 32.2491C26.3639 32.2396 26.2459 32.2176 26.1279 32.1841C26.0764 32.2876 26.0399 32.3971 26.0199 32.5116Z",
              fill: "#D32D27"
            })),
          b ||
            (b = v.createElement("path", {
              d: "M26.4999 30.75C26.2994 30.75 26.1109 30.672 25.9694 30.531C25.6769 30.2385 25.6769 29.7625 25.9694 29.4705C26.0164 29.4235 26.0794 29.3975 26.1464 29.3975C26.2134 29.3975 26.2759 29.4235 26.3234 29.4705C26.3704 29.5175 26.3964 29.5805 26.3964 29.6475C26.3964 29.7145 26.3704 29.777 26.3234 29.8245C26.2259 29.922 26.2259 30.0805 26.3234 30.178C26.3704 30.224 26.4329 30.25 26.4999 30.25C26.5669 30.25 26.6294 30.224 26.6769 30.177C26.7744 30.0795 26.7744 29.921 26.6769 29.8235C26.6299 29.7765 26.6039 29.7135 26.6039 29.6465C26.6039 29.5795 26.6299 29.517 26.6769 29.4695C26.7239 29.422 26.7869 29.3965 26.8539 29.3965C26.9209 29.3965 26.9834 29.4225 27.0309 29.4695C27.3234 29.762 27.3234 30.2375 27.0309 30.53C26.8889 30.672 26.7004 30.75 26.4999 30.75Z",
              fill: "#D32D27"
            })),
          x ||
            (x = v.createElement("path", {
              d: "M37.1042 2.104L39.4795 4.47936",
              stroke: "#EDBF0E",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          k ||
            (k = v.createElement("path", {
              d: "M39.3958 2.104L37.0205 4.47936",
              stroke: "#EDBF0E",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      }
      var T = v.forwardRef(H),
        I = (n.p, n(27403));
      var W = (0, j.Z)("p", { target: "epwoqpr2" })({
          name: "10nqmpa",
          styles: "font-size:12px;line-height:24px;color:#1d3049;margin-bottom:24px"
        }),
        N = (0, j.Z)("div", { target: "epwoqpr1" })({
          name: "8a1zmy",
          styles:
            "background-color:#fff;border-radius:4px;overflow:hidden;margin-bottom:24px;font-size:14px;border:1px solid #dcdfe4;padding:6px 12px;.step{color:#000000;padding:6px 0px;display:flex;align-items:center;position:relative;margin-bottom:8px;line-height:24px;text-align:left;&:last-child{margin-bottom:0;}&.with-image{align-items:baseline;}b{font-weight:600;}.image-wrapper{padding:5px;border:1px solid #97a1ae;border-radius:6px;margin-right:12px;display:flex;align-items:center;flex-shrink:0;justify-content:center;position:relative;height:28px;width:28px;min-width:28px;background-color:#fff;color:#748193;font-weight:600;}.step-image{margin-top:12px;}}"
        }),
        F = (0, j.Z)(L.K, { target: "epwoqpr0" })({ name: "1auzifb", styles: "width:100%;border-radius:4px" }),
        P = function (e) {
          var t = e.skill,
            n = e.expanded,
            r = e.fromAllSkillsDialog,
            o = (0, w.J)();
          return (0, I.jsx)(D.j, {
            "data-component": "EnableDarkWebMonitoring",
            skill: t,
            icon: (t.completed && (0, I.jsx)(M.r, null)) || (0, I.jsx)(T, null),
            title: (0, I.jsx)(y.Trans, { id: "Enable dark web monitoring" }),
            description: (0, I.jsx)(y.Trans, { id: "Monitor your email addresses for data breaches" }),
            expanded: n,
            fromAllSkillsDialog: r,
            bodyTitle: (0, I.jsx)(y.Trans, { id: "What is dark web monitoring?" }),
            automationId: "so-dwm",
            bodyContent: (0, I.jsx)(
              v.Fragment,
              null,
              (0, I.jsx)(
                W,
                null,
                (0, I.jsx)(y.Trans, {
                  id: "Dark web monitoring helps you see if your personal information at other companies and services may be exposed to hackers."
                }),
                " ",
                (0, I.jsx)(
                  "a",
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://support.logmeininc.com/lastpass/help/what-is-dark-web-monitoring"
                  },
                  (0, I.jsx)(y.Trans, { id: "Learn more" })
                )
              ),
              (0, I.jsx)(
                N,
                null,
                (0, I.jsx)(
                  "ul",
                  { className: "vertical-stepper" },
                  (0, I.jsx)(
                    "li",
                    { className: "step with-image" },
                    (0, I.jsx)("div", { className: "image-wrapper" }, "1"),
                    (0, I.jsx)(
                      "span",
                      null,
                      (0, I.jsx)(y.Trans, { id: "Go to the <0>Security Dashboard</0>.", components: [(0, I.jsx)("b", null)] }),
                      (0, I.jsx)("div", { className: "step-image" }, (0, I.jsx)(O.r, null))
                    )
                  ),
                  (0, I.jsx)(
                    "li",
                    { className: "step" },
                    (0, I.jsx)("div", { className: "image-wrapper" }, "2"),
                    (0, I.jsx)(
                      "span",
                      null,
                      (0, I.jsx)(y.Trans, {
                        id: "Click <0>Start monitoring</0> in the Dark web monitoring section.",
                        components: [(0, I.jsx)("b", null)]
                      })
                    )
                  ),
                  (0, I.jsx)(
                    "li",
                    { className: "step" },
                    (0, I.jsx)("div", { className: "image-wrapper" }, (0, I.jsx)(S.r, null)),
                    (0, I.jsx)(
                      "span",
                      null,
                      (0, I.jsx)(y.Trans, {
                        id: "You'll receive an <0>email notification</0> if any of your email addresses are involved in a security breach at another company or service.",
                        components: [(0, I.jsx)("b", null)]
                      })
                    )
                  )
                )
              ),
              (0, I.jsx)(
                F,
                {
                  red: !0,
                  theme: E.Q,
                  className: "action-cta",
                  "data-automation-id": "so-go-to-security-dashboard-btn",
                  onClick: function () {
                    o.openSecurityDashboard(),
                      o.complete(t.type),
                      o.hideExpandedSkillInDrawer(),
                      r && (o.hideSkillDetailsDialog(), o.toggleShowAllSkills());
                  }
                },
                (0, I.jsx)(y.Trans, { id: "Go to Security Dashboard" })
              )
            )
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
        l = i.call(Object),
        s = o.toString,
        c =
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
        var t = c(e);
        if (null === t) return !0;
        var n = a.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && i.call(n) == l;
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
                return l(t) ? t(e) : t;
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
                  l(e) && n.push(e),
                  function () {
                    var t = n.indexOf(e);
                    t < 0 || n.splice(t, 1);
                  }
                );
              },
              replaceReducer: function (e) {
                if (!l(e)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var r,
        o = n(43754),
        i = n(55804),
        a = (r = i) && r.__esModule ? r : { default: r };
      var l = function (e) {
        return "function" === typeof e;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
