"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [4436],
  {
    14511: function (e, t, n) {
      n.r(t),
        n.d(t, {
          FamilyDashboard: function () {
            return ti;
          }
        });
      var r,
        i = n(92577),
        a = n(91640),
        o = n(23381),
        l = n(41611),
        s = n(42942),
        d = n(57893),
        c = (function (e) {
          return (
            (e.INITIALIZE = "[family-dashboard] initialize"),
            (e.INITIALIZED = "[family-dashboard] initialized"),
            (e.SET_ERROR = "[family-dashboard] set error"),
            (e.GET_USERS = "[family-dashboard] get users"),
            (e.SET_USERS = "[family-dashboard] set users"),
            (e.START_ADD_USER = "[family-dashboard] start add users"),
            (e.OPEN_ADD_USER_DRAWER = "[family-dashboard] open add user drawer"),
            (e.CLOSE_ADD_USER_DRAWER = "[family-dashboard] close add user drawer"),
            (e.OPEN_EDIT_USER_DRAWER = "[family-dashboard] open edit user drawer"),
            (e.CLOSE_EDIT_USER_DRAWER = "[family-dashboard] close edit user drawer"),
            (e.OPEN_VERIFY_EMAIL_DIALOG = "[family-dashboard] open verify email dialog"),
            (e.CLOSE_VERIFY_EMAIL_DIALOG = "[family-dashboard] close verify email dialog"),
            (e.ADD_USER = "[family-dashboard] add user"),
            (e.ADD_BANNER = "[family-dashboard] add banner"),
            (e.REMOVE_BANNER = "[family-dashboard] remove banner"),
            (e.CHECK_VERIFY = "[family-dashboard] check email verification"),
            (e.SEND_VERIFY = "[family-dashboard] send email verification"),
            (e.SET_VERIFY = "[family-dashboard] store email verified status"),
            (e.EDIT_FAMILYNAME = "[family-dashboard] edit family name"),
            (e.RESEND_INVITE = "[family-dashboard] resend invite"),
            (e.EDIT_USER = "[family-dashboard] edit user"),
            (e.REMOVE_USER = "[family-dashboard] remove user"),
            (e.SHOW_ERROR_VIEW = "[family-dashboard] show error view"),
            (e.HIDE_ERROR_VIEW = "[family-dashboard] hide error view"),
            (e.SET_RESEND_PENDING = "[family-dashboard] set resend pending"),
            (e.OPEN_REMOVE_MODAL = "[family-dashboard] open remove modal"),
            (e.CLOSE_REMOVE_MODAL = "[family-dashboard] close remove modal"),
            (e.SEND_SEGMENT_EVENT = "[family-dashboard] send segment event"),
            (e.RESET = "[family-dashboard] reset"),
            (e.SET_ACCOUNT_INFORMATION = "[family-dashboard] set account information"),
            e
          );
        })({}),
        u = {
          initialize: function () {
            return (0, s.j)((0, l.P)(c.INITIALIZE), { segment: (0, d.R1)("Families Console Viewed") });
          },
          initialized: function (e) {
            return (0, l.P)(c.INITIALIZED, { familyName: e });
          },
          setError: function (e) {
            return (0, l.P)(c.SET_ERROR, { error: e });
          },
          getUsers: function () {
            return (0, l.P)(c.GET_USERS);
          },
          setUsers: function (e) {
            return (0, l.P)(c.SET_USERS, { users: e });
          },
          startAddUser: function () {
            return (0, s.j)((0, l.P)(c.START_ADD_USER), { segment: (0, d.R1)("Add Users Button Clicked") });
          },
          openAddUserDrawer: function () {
            return (0, l.P)(c.OPEN_ADD_USER_DRAWER);
          },
          closeAddUserDrawer: function () {
            return (0, l.P)(c.CLOSE_ADD_USER_DRAWER);
          },
          openEditUserDrawer: function () {
            return (0, s.j)((0, l.P)(c.OPEN_EDIT_USER_DRAWER), { segment: (0, d.R1)("Families Member Details Viewed") });
          },
          closeEditUserDrawer: function () {
            return (0, l.P)(c.CLOSE_EDIT_USER_DRAWER);
          },
          openVerifyEmailDialog: function () {
            return (0, l.P)(c.OPEN_VERIFY_EMAIL_DIALOG);
          },
          closeVerifyEmailDialog: function () {
            return (0, l.P)(c.CLOSE_VERIFY_EMAIL_DIALOG);
          },
          addUser: function (e) {
            return (0, l.P)(c.ADD_USER, { user: e });
          },
          addBanner: function (e) {
            return (0, l.P)(c.ADD_BANNER, { banner: e });
          },
          removeBanner: function (e) {
            return (0, l.P)(c.REMOVE_BANNER, { id: e });
          },
          checkVerify: function () {
            return (0, l.P)(c.CHECK_VERIFY);
          },
          sendVerify: function () {
            return (0, l.P)(c.SEND_VERIFY);
          },
          setVerify: function (e) {
            return (0, l.P)(c.SET_VERIFY, { verified: e });
          },
          editFamilyName: function (e) {
            return (0, s.j)((0, l.P)(c.EDIT_FAMILYNAME, { name: e }), { segment: (0, d.R1)("Families Name Changed") });
          },
          resendInvite: function (e) {
            return (0, s.j)((0, l.P)(c.RESEND_INVITE, { email: e }), { segment: (0, d.R1)("Family Provision Resend Click") });
          },
          editUser: function (e) {
            return (0, s.j)((0, l.P)(c.EDIT_USER, { user: e }), { segment: (0, d.R1)("Families Provision Update Family Member") });
          },
          removeUser: function (e, t, n, r) {
            return (0, l.P)(c.REMOVE_USER, { id: e, email: t, name: n, pending: r });
          },
          hideErrorView: function () {
            return (0, l.P)(c.HIDE_ERROR_VIEW);
          },
          showErrorView: function () {
            return (0, l.P)(c.SHOW_ERROR_VIEW);
          },
          setResendPending: function (e) {
            return (0, s.j)((0, l.P)(c.SET_RESEND_PENDING, { email: e }), { segment: { event: "Resend Lastpass Invitation Clicked" } });
          },
          openRemoveModal: function () {
            return (0, s.j)((0, l.P)(c.OPEN_REMOVE_MODAL), { segment: (0, d.R1)("Remove Family Member Click") });
          },
          closeRemoveModal: function () {
            return (0, l.P)(c.CLOSE_REMOVE_MODAL);
          },
          sendSegmentEvent: function (e, t) {
            return (0, s.j)((0, l.P)(c.SEND_SEGMENT_EVENT, { eventType: e, eventProperties: t }), { segment: (0, d.R1)(e, t || {}) });
          },
          reset: function () {
            return (0, l.P)(c.RESET);
          },
          setAccountInformation: function (e) {
            return (0, l.P)(c.SET_ACCOUNT_INFORMATION, { ownerEmail: e });
          }
        },
        f = (0, n(6821).a)(u),
        m = n(52384),
        p = function (e) {
          return (0, m.v9)(function (t) {
            return e(t.familyDashboard);
          });
        },
        x = n(84785),
        h = ["title", "titleId"];
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      function g(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function v(e, t) {
        var n = e.title,
          i = e.titleId,
          a = g(e, h);
        return o.createElement(
          "svg",
          C(
            {
              width: 17,
              height: 16,
              viewBox: "0 0 17 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": i
            },
            a
          ),
          n ? o.createElement("title", { id: i }, n) : null,
          r ||
            (r = o.createElement("path", {
              d: "M14.5399 2.89106C14.4216 2.80139 14.2872 2.73657 14.1445 2.7003C14.0018 2.66403 13.8536 2.65703 13.7083 2.6797C13.5629 2.70236 13.4234 2.75425 13.2976 2.83239C13.1718 2.91054 13.0622 3.01341 12.975 3.13512L7.66874 10.5398L4.29454 7.764C4.06188 7.58075 3.76867 7.49852 3.47775 7.53492C3.18683 7.57132 2.92136 7.72346 2.73824 7.95872C2.55512 8.19399 2.46892 8.49365 2.49814 8.79348C2.52735 9.09331 2.66964 9.36944 2.89451 9.56268L7.17878 13.0864C7.29717 13.1816 7.43283 13.2516 7.57782 13.2923C7.72282 13.333 7.87425 13.3436 8.02327 13.3234C8.17229 13.3033 8.31592 13.2528 8.44575 13.1749C8.57558 13.0971 8.68902 12.9934 8.77945 12.8699L14.7808 4.50094C14.8679 4.379 14.9307 4.2406 14.9657 4.09368C15.0007 3.94675 15.0072 3.79417 14.9848 3.64466C14.9625 3.49515 14.9116 3.35164 14.8353 3.22233C14.7589 3.09302 14.6586 2.98046 14.5399 2.89106V2.89106Z",
              fill: "#00A878"
            }))
        );
      }
      var b,
        y = o.forwardRef(v),
        j = (n.p, ["title", "titleId"]);
      function E() {
        return (
          (E = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          E.apply(this, arguments)
        );
      }
      function w(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function k(e, t) {
        var n = e.title,
          r = e.titleId,
          i = w(e, j);
        return o.createElement(
          "svg",
          E(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          b ||
            (b = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.99999 9.41425L3.75735 13.6569C3.56982 13.8444 3.31546 13.9498 3.05025 13.9498C2.78503 13.9498 2.53068 13.8444 2.34314 13.6569C2.1556 13.4694 2.05025 13.215 2.05025 12.9498C2.05025 12.6846 2.1556 12.4302 2.34314 12.2427L6.58578 8.00004L2.34314 3.7574C2.1556 3.56986 2.05025 3.31551 2.05025 3.05029C2.05025 2.78508 2.1556 2.53072 2.34314 2.34319C2.53068 2.15565 2.78503 2.05029 3.05025 2.05029C3.31546 2.05029 3.56982 2.15565 3.75735 2.34319L7.99999 6.58583L12.2426 2.34319C12.4302 2.15565 12.6845 2.05029 12.9497 2.05029C13.215 2.05029 13.4693 2.15565 13.6568 2.34319C13.8444 2.53072 13.9497 2.78508 13.9497 3.05029C13.9497 3.31551 13.8444 3.56986 13.6568 3.7574L9.41421 8.00004L13.6568 12.2427C13.8444 12.4302 13.9497 12.6846 13.9497 12.9498C13.9497 13.215 13.8444 13.4694 13.6568 13.6569C13.4693 13.8444 13.215 13.9498 12.9497 13.9498C12.6845 13.9498 12.4302 13.8444 12.2426 13.6569L7.99999 9.41425Z",
              fill: "#B9C0C9"
            }))
        );
      }
      var L = o.forwardRef(k),
        O = (n.p, n(27403));
      var R = (function (e) {
          return (e[(e.Outside = 0)] = "Outside"), (e[(e.Inside = 1)] = "Inside"), e;
        })(R || {}),
        _ = { success: "#008a63", error: "#D32D27", warning: "#9B7C09" },
        Z = { success: "#E7F7F2", error: "#F7D8D7", warning: "#FBEFC3" },
        D = (0, a.Z)("div", { target: "e1rxsdz13" })(
          "padding:16px;display:flex;justify-content:space-between;align-items:center;background:",
          function (e) {
            var t = e.color;
            return Z[t];
          },
          ";width:fill-available;position:absolute;transition:transform 400ms;transform:translate3d(\n    0,\n    ",
          function (e) {
            return e.bannerState === R.Outside ? "-200%" : "0";
          },
          ",\n    0\n  );"
        ),
        M = (0, a.Z)("div", { target: "e1rxsdz12" })({
          name: "1sngtf8",
          styles: "display:flex;justify-content:center;align-items:center;width:100%;gap:8px"
        }),
        I = (0, a.Z)("div", { target: "e1rxsdz11" })({ name: "1edkb2e", styles: "font-size:14px;line-height:20px;color:#1b283c" }),
        T = (0, a.Z)(L, { target: "e1rxsdz10" })(
          "cursor:pointer;path{fill:",
          function (e) {
            var t = e.color;
            return _[t];
          },
          ";}"
        ),
        S = function (e) {
          var t = e.id,
            n = e.color,
            r = e.text,
            a = e.duration,
            l = e.isPermanent,
            s = e.isClosable,
            d = (0, o.useState)(R.Outside),
            c = (0, i.Z)(d, 2),
            u = c[0],
            m = c[1],
            p = f(),
            x = (0, o.useCallback)(
              function (e) {
                m(R.Outside),
                  setTimeout(function () {
                    p.removeBanner(e);
                  }, 1e3);
              },
              [p]
            );
          return (
            (0, o.useEffect)(function () {
              m(R.Inside);
            }, []),
            (0, o.useEffect)(
              function () {
                if (!l) {
                  var e = setTimeout(function () {
                    x(t);
                  }, a);
                  return function () {
                    clearTimeout(e);
                  };
                }
              },
              [l, t, a, x]
            ),
            (0, O.jsx)(
              D,
              { "data-automation-id": "Banner", color: n, bannerState: u },
              (0, O.jsx)(M, null, "success" === n && (0, O.jsx)(y, null), (0, O.jsx)(I, null, r)),
              s &&
                (0, O.jsx)(T, {
                  color: n,
                  onClick: function () {
                    return x(t);
                  }
                })
            )
          );
        };
      var A = (0, a.Z)("div", { target: "eroujvf0" })({ name: "119vcbm", styles: "width:100%;position:relative;z-index:10" }),
        F = function () {
          var e = p(function (e) {
            return e.banners;
          });
          return (0, O.jsx)(
            A,
            { "data-automation-id": "BannerContainer" },
            e.map(function (e) {
              var t = e.id,
                n = e.color,
                r = e.text,
                i = e.duration,
                a = e.isPermanent,
                o = e.isClosable;
              return (0, O.jsx)(S, { key: t, id: t, color: n, text: r, duration: i, isPermanent: a, isClosable: o });
            })
          );
        },
        P = n(48693),
        B = { small: 5, medium: 8, large: 11 },
        V = { small: 8, medium: 12, large: 16 },
        z = {
          small: { height: 20, width: 3, borderRadius: 2 },
          medium: { height: 32, width: 4, borderRadius: 2 },
          large: { height: 44, width: 5, borderRadius: 2 }
        },
        H = (0, a.Z)("div", { target: "evo1enj2" })(
          "display:inline-flex;gap:",
          function (e) {
            var t = e.size;
            return B[t];
          },
          "px;align-items:center;"
        ),
        N = (0, a.Z)("div", { target: "evo1enj1" })(
          "background:",
          function (e) {
            return e.color;
          },
          ";border-radius:50%;width:",
          function (e) {
            var t = e.size;
            return V[t];
          },
          "px;aspect-ratio:1/1;"
        ),
        U = (0, a.Z)("div", { target: "evo1enj0" })(
          "background:",
          function (e) {
            return e.color;
          },
          ";border-radius:",
          function (e) {
            var t = e.size;
            return z[t].borderRadius;
          },
          "px;height:",
          function (e) {
            var t = e.size;
            return z[t].height;
          },
          "px;width:",
          function (e) {
            var t = e.size;
            return z[t].width;
          },
          "px;"
        ),
        W = function (e, t, n) {
          return !!(e && e.current && e.current.animate) && (e.current.animate(t, n), !0);
        },
        G = function (e) {
          var t = e.size,
            n = void 0 === t ? "medium" : t,
            r = e.color,
            i = void 0 === r ? "#CB2929" : r,
            a = (0, o.useRef)(null),
            l = (0, o.useRef)(null),
            s = (0, o.useRef)(null),
            d = [
              { transform: "translate3D(0, 0, 0)" },
              { transform: "translate3D(0, -".concat((B[n] + V[n]) / 2, "px, 0)") },
              { transform: "translate3D(0, ".concat((B[n] + V[n]) / 2, "px, 0)") },
              { transform: "translate3D(0, -".concat((B[n] + V[n]) / 4, "px, 0)") },
              { transform: "translate3D(0, ".concat((B[n] + V[n]) / 4, "px, 0)") },
              { transform: "translate3D(0, 0, 0)" }
            ],
            c = { duration: 2500, iterations: 1 / 0 };
          return (
            (0, o.useEffect)(
              function () {
                W(a, d, c);
                var e = setTimeout(function () {
                    W(l, d, c);
                  }, 300),
                  t = setTimeout(function () {
                    W(s, d, c);
                  }, 600);
                return function () {
                  clearTimeout(e), clearTimeout(t);
                };
              },
              [c, d]
            ),
            (0, O.jsx)(
              H,
              { "data-automation-id": "AnimatedLogo", size: n },
              (0, O.jsx)(N, { color: i, size: n, ref: a }),
              (0, O.jsx)(N, { color: i, size: n, ref: l }),
              (0, O.jsx)(N, { color: i, size: n, ref: s }),
              (0, O.jsx)(U, { color: i, size: n })
            )
          );
        };
      var Y,
        q = (0, a.Z)("div", { target: "e1h0u3q51" })({
          name: "dih1v",
          styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px;width:100%;height:100%"
        }),
        Q = (0, a.Z)("div", { target: "e1h0u3q50" })({
          name: "1xm28gg",
          styles: "font-weight:600;font-size:28px;line-height:36px;text-align:center;width:388px"
        }),
        K = function () {
          return (0, O.jsx)(
            q,
            { "data-automation-id": "LoadingView" },
            (0, O.jsx)(G, { size: "large" }),
            (0, O.jsx)(Q, null, (0, O.jsx)(P.Trans, { id: "We're loading your Families account..." }))
          );
        },
        J = ["title", "titleId"];
      function X() {
        return (
          (X = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          X.apply(this, arguments)
        );
      }
      function $(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function ee(e, t) {
        var n = e.title,
          r = e.titleId,
          i = $(e, J);
        return o.createElement(
          "svg",
          X(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          Y ||
            (Y = o.createElement(
              "g",
              { clipPath: "url(#clip0_224_7373)" },
              o.createElement("path", {
                d: "M23.888 5.83199C23.8546 5.8178 23.8177 5.81393 23.782 5.82088C23.7464 5.82783 23.7136 5.84528 23.688 5.87099L13.941 15.616C13.4253 16.1314 12.7261 16.4209 11.997 16.4209C11.2679 16.4209 10.5687 16.1314 10.053 15.616L0.310002 5.87099C0.28451 5.84504 0.251754 5.82743 0.216052 5.82047C0.180349 5.8135 0.143375 5.81752 0.110002 5.83199C0.0772087 5.84612 0.0492947 5.86958 0.0297354 5.89945C0.0101762 5.92932 -0.000164108 5.96429 1.96956e-06 5.99999V18C1.96956e-06 18.5304 0.210716 19.0391 0.585788 19.4142C0.960861 19.7893 1.46957 20 2 20H22C22.5304 20 23.0391 19.7893 23.4142 19.4142C23.7893 19.0391 24 18.5304 24 18V5.99999C24.0001 5.96403 23.9896 5.92885 23.9696 5.89892C23.9497 5.869 23.9212 5.8457 23.888 5.83199Z",
                fill: "currentColor"
              }),
              o.createElement("path", {
                d: "M11.115 14.556C11.3497 14.79 11.6676 14.9214 11.999 14.9214C12.3304 14.9214 12.6483 14.79 12.883 14.556L22.569 4.87C22.6346 4.80442 22.6806 4.7219 22.702 4.63166C22.7234 4.54142 22.7192 4.44702 22.69 4.359C22.58 4.03 22.274 4 22 4H2.00001C1.72501 4 1.41701 4.03 1.30901 4.359C1.2798 4.44702 1.27566 4.54142 1.29702 4.63166C1.31839 4.7219 1.36444 4.80442 1.43001 4.87L11.115 14.556Z",
                fill: "currentColor"
              })
            ))
        );
      }
      var te = o.forwardRef(ee),
        ne = (n.p, n(20011)),
        re = n(53312),
        ie = (0, a.Z)("div", { target: "e1mtpjwn0" })(
          "transition:opacity 0.5s;opacity:",
          function (e) {
            return e.open ? "0.7" : "0";
          },
          ";position:absolute;right:0px;left:0px;top:0px;bottom:0px;background:#283952;"
        ),
        ae = (0, a.Z)("div", { target: "ejp14pe0" })(
          "transition:transform 0.5s;transform:",
          function (e) {
            var t = e.open;
            return "translate3d(".concat(t ? "0" : "500px", ", 0, 0)");
          },
          ";position:fixed;top:60px;bottom:0px;right:0px;width:500px;z-index:999;display:flex;flex-direction:column;background:#ffffff;box-shadow:inset 1px 0px 0px #dcdfe4;"
        );
      var oe = (0, a.Z)("div", { target: "ekznwzb0" })({
          name: "1t8zorq",
          styles: "display:flex;justify-content:space-between;align-items:baseline;padding:24px"
        }),
        le = n(11029);
      var se = (0, a.Z)(le.r, { target: "etgu47u0" })({ name: "pxwjo0", styles: "cursor:pointer;width:20px;height:20px;padding:5px" });
      var de = (0, a.Z)("div", { target: "e2j8q320" })({
        name: "1xlx0x9",
        styles: "padding:0px 24px;flex-grow:1;display:flex;flex-direction:column;gap:24px"
      });
      var ce = (0, a.Z)("div", { target: "e2gyadi0" })({
        name: "1w3asui",
        styles:
          "padding:24px;background:#f7f9fc;border-top:1px solid #d7dbe0;display:flex;align-items:center;justify-content:flex-end;gap:24px"
      });
      var ue = (0, a.Z)("div", { target: "e1yu129z0" })({ name: "fqebkb", styles: "font-weight:600;font-size:20px;line-height:32px" });
      var fe = (0, a.Z)("label", { target: "e1vd6umv0" })({
        name: "hs15y8",
        styles: "display:block;font-weight:600;font-size:12px;line-height:17px;margin-bottom:4px"
      });
      var me = (0, a.Z)("input", { target: "elkqxg80" })({
        name: "101a9w4",
        styles: "border:1px solid #bac0ca;border-radius:4px;width:100%;height:30px;padding-left:12px"
      });
      var pe = (0, a.Z)("span", { target: "e1lzmmlg2" })({ name: "bhmv3w", styles: "font-weight:400;font-size:14px;line-height:24px" }),
        xe = (0, a.Z)("span", { target: "e1lzmmlg1" })({
          name: "168oadr",
          styles: "font-weight:600;font-size:12px;line-height:17px;display:block"
        }),
        he = (0, a.Z)("label", { target: "e1lzmmlg0" })({ name: "1c865ly", styles: "input{margin:10px 10px 10px 0;}" });
      var Ce,
        ge = (0, a.Z)("div", { target: "e1hh65nc1" })({
          name: "1wd9eko",
          styles: "font-weight:400;font-size:12px;line-height:17px;color:#768498;margin:4px 0px"
        }),
        ve = (0, a.Z)("div", { target: "e1hh65nc0" })({
          name: "16j0cur",
          styles: "font-weight:400;font-size:12px;line-height:17px;color:#ff0000;margin:4px 0px"
        }),
        be = n(37755),
        ye = {
          "contained-error": "background-color: #D32D27; color: white;",
          "contained-success": "background-color: #2cd472; color: white;",
          "contained-info": "background-color: #3B70D4; color: white;",
          "contained-warning": "background-color: #daac49; color: white;",
          "contained-primary": "background-color: #40526D; color: white;",
          "outlined-error": "border:1px solid#D32D27; color: #D32D27;",
          "outlined-success": "border:1px solid #2cd472; color: #2cd472;",
          "outlined-info": "border:1px solid #3B70D4; color: #3B70D4;",
          "outlined-warning": "border:1px solid #daac49; color: #daac49;",
          "outlined-primary": "border:1px solid #BAC0CA; color: #1B283C;",
          "text-error": "color: #D32D27;",
          "text-success": "color: #2cd472;",
          "text-info": "color: #3B70D4;",
          "text-warning": "color: #daac49;",
          "text-primary": "color: #007AFF;",
          "text-link": "color: #3B70D4;"
        },
        je = {
          "contained-error": "background-color: #af0809;",
          "contained-success": "background-color: #1b8b4a;",
          "contained-info": "background-color: #3B70D4;",
          "contained-warning": "background-color: #b48e3a;",
          "contained-primary": "background-color: rgba(186, 192, 202, 0.1); color: #1B283C;",
          "outlined-error": "border-color:#af0809; color: #af0809;",
          "outlined-success": "border-color:#1b8b4a; color: #1b8b4a;",
          "outlined-info": "border-color:#3B70D4; color: #3B70D4;",
          "outlined-warning": "border-color:#b48e3a; color: #b48e3a;",
          "outlined-primary": "border-color:#BAC0CA; color: #1B283C; background: rgba(27, 40, 60, 0.1);",
          "text-error": "color: #af0809;",
          "text-success": "color: #1b8b4a;",
          "text-info": "color: #3B70D4;",
          "text-warning": "color: #b48e3a;",
          "text-primary": "color: #007AFF;background: rgba(0, 122, 255, 0.1);",
          "text-link": "color: #3B70D4; text-decoration: underline;"
        },
        Ee = {
          "contained-error": "background-color: #871D19; box-shadow: none;",
          "outlined-primary": "border:1px solid #BAC0CA; color: #1B283C; background: rgba(27, 40, 60, 0.3);box-shadow: none;",
          "text-primary": "color: #007AFF; background: rgba(0, 122, 255, 0.3); box-shadow:none;"
        },
        we = {
          "contained-error": "background-color: #D32D27;box-shadow: 0 0 0 2px white, 0 0 0 3px #871D19; color: white;",
          "outlined-primary": "border-color: #40526D; color: #1B283C; box-shadow: 0 0 0 2px white, 0 0 0 3px #1B283C;",
          "text-primary": "color: #007AFF; box-shadow: 0 0 0 2px white, 0 0 0 3px #1B283C;",
          "text-link": "outline: 1px solid #1B283C;"
        },
        ke = {
          contained: "background-color: #BAC0CA; color: white;",
          outlined: "border:1px solid #BAC0CA; color: white; background: #BAC0CA;",
          text: "color: #BAC0CA; text-decoration: none;"
        },
        Le = {
          xs: "padding: 2px 12px 2px 8px; font-size: 12px; line-height: 20px; border-radius: 4px;",
          sm: "padding: 6px 12px; font-size: 12px; line-height: 17px; border-radius: 4px;",
          md: "padding: 8px 16px; font-size: 14px; line-height: 20px; border-radius: 4px;",
          lg: "padding: 8px 20px; font-size: 16px; line-height: 25px; border-radius: 4px;"
        },
        Oe = (0, a.Z)("button", { target: "eiepqnh0" })(
          "border:",
          function (e) {
            return "link" === e.color ? "3px solid white" : "none";
          },
          ";outline:none;background-color:transparent;",
          function (e) {
            var t = e.variant,
              n = e.color;
            return ye["".concat(t, "-").concat(n)];
          },
          " ",
          function (e) {
            var t = e.size;
            return Le["".concat(t)];
          },
          " cursor:pointer;user-select:none;font-style:normal;font-weight:600;text-align:center;&:hover{",
          function (e) {
            var t = e.variant,
              n = e.color;
            return je["".concat(t, "-").concat(n)];
          },
          ";}&:focus{",
          function (e) {
            var t = e.variant,
              n = e.color;
            return we["".concat(t, "-").concat(n)];
          },
          ";}&:active{",
          function (e) {
            var t = e.variant,
              n = e.color;
            return Ee["".concat(t, "-").concat(n)];
          },
          ";}&:disabled{",
          function (e) {
            var t = e.variant;
            return ke["".concat(t)];
          },
          " cursor:not-allowed;}"
        ),
        Re = function (e) {
          var t = e.variant,
            n = void 0 === t ? "contained" : t,
            r = e.color,
            i = void 0 === r ? "error" : r,
            a = e.size,
            o = void 0 === a ? "md" : a,
            l = e.type,
            s = void 0 === l ? "button" : l,
            d = e.children,
            c = (0, be.Z)((0, be.Z)({}, e), {}, { variant: n, color: i, size: o, type: s });
          return (0, O.jsx)(Oe, c, d);
        },
        _e = ["title", "titleId"];
      function Ze() {
        return (
          (Ze = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ze.apply(this, arguments)
        );
      }
      function De(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function Me(e, t) {
        var n = e.title,
          r = e.titleId,
          i = De(e, _e);
        return o.createElement(
          "svg",
          Ze(
            {
              width: 14,
              height: 16,
              viewBox: "0 0 14 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          Ce ||
            (Ce = o.createElement("path", {
              d: "M1.99992 6.33333L2.49992 6.33333L2.49992 4.5C2.49992 3.30653 2.97402 2.16193 3.81794 1.31802C4.66185 0.474107 5.80644 6.58014e-07 6.99992 5.53678e-07C8.19339 4.49341e-07 9.33799 0.474106 10.1819 1.31802C11.0258 2.16193 11.4999 3.30653 11.4999 4.5L11.4999 6.33333L11.9999 6.33333C12.3535 6.33333 12.6927 6.47381 12.9427 6.72386C13.1928 6.97391 13.3333 7.31305 13.3333 7.66667L13.3333 14.6667C13.3333 15.0203 13.1928 15.3594 12.9427 15.6095C12.6927 15.8595 12.3535 16 11.9999 16L1.99992 16C1.6463 16 1.30716 15.8595 1.05711 15.6095C0.807063 15.3594 0.666586 15.0203 0.666586 14.6667L0.666586 7.66667C0.666586 7.31305 0.807062 6.97391 1.05711 6.72386C1.30716 6.47381 1.6463 6.33333 1.99992 6.33333ZM6.99992 12.3333C7.26363 12.3333 7.52141 12.2551 7.74068 12.1086C7.95995 11.9621 8.13084 11.7539 8.23176 11.5102C8.33268 11.2666 8.35908 10.9985 8.30763 10.7399C8.25619 10.4812 8.1292 10.2437 7.94273 10.0572C7.75626 9.87072 7.51868 9.74373 7.26004 9.69229C7.0014 9.64084 6.73331 9.66724 6.48967 9.76816C6.24604 9.86908 6.0378 10.04 5.89129 10.2592C5.74478 10.4785 5.66659 10.7363 5.66659 11C5.66659 11.3536 5.80706 11.6928 6.05711 11.9428C6.30716 12.1929 6.6463 12.3333 6.99992 12.3333ZM4.16659 6C4.16659 6.08841 4.2017 6.17319 4.26422 6.2357C4.32673 6.29822 4.41151 6.33333 4.49992 6.33333L9.49992 6.33333C9.58832 6.33333 9.67311 6.29822 9.73562 6.2357C9.79813 6.17319 9.83325 6.08841 9.83325 6L9.83325 4.5C9.83325 3.74855 9.53474 3.02788 9.00339 2.49653C8.47204 1.96518 7.75137 1.66667 6.99992 1.66667C6.24847 1.66667 5.5278 1.96518 4.99645 2.49653C4.4651 3.02788 4.16659 3.74855 4.16659 4.5L4.16659 6Z",
              fill: "#3B70D4"
            }))
        );
      }
      var Ie = o.forwardRef(Me),
        Te =
          (n.p,
          function (e) {
            var t = (0, o.useState)(!1),
              n = (0, i.Z)(t, 2),
              r = n[0],
              a = n[1];
            (0, o.useEffect)(function () {
              setTimeout(function () {
                return a(!0);
              }, 0);
            }, []);
            return {
              isDrawerOpen: r,
              initiateClose: function () {
                a(!1),
                  setTimeout(function () {
                    e();
                  }, 500);
              }
            };
          }),
        Se = function (e) {
          return e.replace(/\s{2,}/g, " ").trim();
        };
      var Ae = (0, a.Z)("div", { target: "ehj4obx2" })(""),
        Fe = (0, a.Z)("div", { target: "ehj4obx1" })({
          name: "1eezigm",
          styles: "font-weight:400;font-size:12px;line-height:16px;color:#d32d27"
        }),
        Pe = (0, a.Z)("div", { target: "ehj4obx0" })({
          name: "1yzbqu5",
          styles:
            "background:rgba(59, 112, 212, 0.1);border:1px solid #3b70d4;border-radius:4px;display:flex;align-items:center;gap:12px;padding:12px;font-weight:400;font-size:14px;line-height:20px"
        }),
        Be = { name: "", email: "", isAdmin: !1 },
        Ve = function (e) {
          var t = e.close,
            n =
              6 -
              p(function (e) {
                return e;
              }).users.length,
            r = f(),
            i = Te(t),
            a = i.isDrawerOpen,
            o = i.initiateClose;
          return (0, O.jsx)(P.I18n, null, function (e) {
            var t = e.i18n;
            return (0, O.jsx)(
              Ae,
              { "data-automation-id": "AddNewMemberDrawer" },
              (0, O.jsx)(ie, {
                open: a,
                onClick: function () {
                  return o();
                }
              }),
              (0, O.jsx)(
                re.J9,
                {
                  initialValues: Be,
                  validate: function (e) {
                    var n = {};
                    return (
                      (e.name && e.name.trim()) || (n.name = "REQUIRED"),
                      e.name && e.name.length > 54 && (n.name = t._({ id: "Name must be less than 54 characters" })),
                      e.email
                        ? /^((?!(.+\.\.+))(?!(.+\.@+))(?!(^\.))([a-zA-Z_0-9-+!#$.*^\u2019]{1,63}))@((?:[a-zA-Z_0-9-]+\.)*[a-zA-Z_0-9][a-zA-Z_0-9-]*)\.([a-z]{2,})$/i.test(
                            e.email
                          ) || (n.email = "Invalid email address")
                        : (n.email = "REQUIRED"),
                      n
                    );
                  },
                  onSubmit: function (e, t) {
                    var n = t.setSubmitting;
                    o(), r.addUser({ email: e.email, name: Se(e.name), emailnew: "0", emailexisting: "0", isAdmin: e.isAdmin }), n(!1);
                  }
                },
                function (e) {
                  var t = e.values,
                    r = e.isSubmitting,
                    i = e.isValid;
                  return (0, O.jsx)(
                    re.l0,
                    null,
                    (0, O.jsx)(
                      ae,
                      { open: a },
                      (0, O.jsx)(
                        oe,
                        null,
                        (0, O.jsx)(
                          "div",
                          null,
                          (0, O.jsx)(ue, null, (0, O.jsx)(P.Trans, { id: "Add new member" })),
                          (0, O.jsx)(
                            Fe,
                            { "data-automation-id": "remainingInvitations" },
                            (0, O.jsx)(P.Trans, {
                              id: "Remaining invitations: {remainingInvitations}",
                              values: { remainingInvitations: n }
                            })
                          )
                        ),
                        (0, O.jsx)(se, {
                          onClick: function () {
                            return o();
                          }
                        })
                      ),
                      (0, O.jsx)(
                        de,
                        null,
                        (0, O.jsx)(
                          Pe,
                          null,
                          (0, O.jsx)(Ie, null),
                          (0, O.jsx)(P.Trans, { id: "Each member gets their own personal, private LastPass account and vault" })
                        ),
                        (0, O.jsx)(
                          "div",
                          { "data-automation-id": "nameInputField" },
                          (0, O.jsx)(fe, { htmlFor: "name" }, (0, O.jsx)(P.Trans, { id: "Name" })),
                          (0, O.jsx)(re.gN, { type: "text", id: "name", name: "name", value: t.name }, function (e) {
                            var n = e.field;
                            return (0, O.jsx)(
                              me,
                              (0, ne.Z)({ type: "name", id: "name", name: "name", value: t.name }, n, { autoFocus: !0 })
                            );
                          }),
                          (0, O.jsx)(re.Bc, { name: "name" }, function (e) {
                            return "REQUIRED" !== e ? (0, O.jsx)(ve, null, e) : null;
                          })
                        ),
                        (0, O.jsx)(
                          "div",
                          { "data-automation-id": "emailInputField" },
                          (0, O.jsx)(fe, { htmlFor: "email" }, (0, O.jsx)(P.Trans, { id: "Email address" })),
                          (0, O.jsx)(re.gN, { type: "text", id: "email", name: "email", value: t.email }, function (e) {
                            var n = e.field;
                            return (0, O.jsx)(me, (0, ne.Z)({ type: "email", id: "email", name: "email", value: t.email }, n));
                          }),
                          (0, O.jsx)(re.Bc, { name: "email" }, function (e) {
                            return "REQUIRED" !== e ? (0, O.jsx)(ve, null, e) : null;
                          })
                        ),
                        (0, O.jsx)(
                          "div",
                          { "data-automation-id": "roleCheckbox" },
                          (0, O.jsx)(
                            he,
                            null,
                            (0, O.jsx)(xe, null, (0, O.jsx)(P.Trans, { id: "Role" })),
                            (0, O.jsx)(re.gN, { type: "checkbox", id: "role", name: "isAdmin" }),
                            (0, O.jsx)(pe, null, (0, O.jsx)(P.Trans, { id: "Make this user a manager" }))
                          ),
                          (0, O.jsx)(ge, null, (0, O.jsx)(P.Trans, { id: "A manager can invite and remove members" }))
                        )
                      ),
                      (0, O.jsx)(
                        ce,
                        null,
                        (0, O.jsx)(
                          Re,
                          {
                            "data-automation-id": "cancelButton",
                            variant: "text",
                            color: "primary",
                            size: "lg",
                            onClick: function () {
                              return o();
                            }
                          },
                          (0, O.jsx)(P.Trans, { id: "Cancel" })
                        ),
                        (0, O.jsx)(
                          Re,
                          { "data-automation-id": "addMemberButton", variant: "contained", size: "lg", type: "submit", disabled: r || !i },
                          (0, O.jsx)(P.Trans, { id: "Add member" })
                        )
                      )
                    )
                  );
                }
              )
            );
          });
        },
        ze = n(98950),
        He = n(2372),
        Ne = n(90890),
        Ue = (0, o.createContext)(null);
      var We,
        Ge,
        Ye = (0, a.Z)("div", { target: "evqspgo1" })({
          name: "91nt9g",
          styles: "position:fixed;inset:0;background:rgba(40, 57, 82, 0.7);display:flex;align-items:center;justify-content:center"
        }),
        qe = (0, a.Z)("div", { target: "evqspgo0" })({ name: "1fttcpj", styles: "display:flex;flex-direction:column" }),
        Qe = function (e) {
          var t = e.onEsc,
            n = e.onOutsideClick,
            r = e.children,
            i = (0, o.useContext)(Ue),
            a = (0, Ne.T)(i, "familyInTheVaultModal");
          (0, o.useEffect)(
            function () {
              if (a)
                return (
                  a.classList.add("absolute"),
                  (a.style.zIndex = "10"),
                  function () {
                    a && (a.classList.remove("absolute"), (a.style.zIndex = "0"));
                  }
                );
            },
            [a]
          ),
            (0, o.useEffect)(
              function () {
                var e = function (e) {
                  "Escape" === e.code && t && t();
                };
                return (
                  i && i.document.addEventListener("keydown", e),
                  function () {
                    i && i.document.removeEventListener("keydown", e);
                  }
                );
              },
              [i, t]
            );
          return (
            a &&
            (0, O.jsx)(
              He.Q,
              { container: a },
              (0, O.jsx)(
                Ye,
                {
                  "data-automation-id": "Modal",
                  onClick: function (e) {
                    return (function (e) {
                      !e.target.closest('[data-automation-id="ModalContent"]') && n && n();
                    })(e);
                  }
                },
                (0, O.jsx)(qe, { "data-automation-id": "ModalContent" }, r)
              )
            )
          );
        },
        Ke = ["title", "titleId"];
      function Je() {
        return (
          (Je = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Je.apply(this, arguments)
        );
      }
      function Xe(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function $e(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Xe(e, Ke);
        return o.createElement(
          "svg",
          Je(
            {
              width: 48,
              height: 48,
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          We || (We = o.createElement("circle", { cx: 24, cy: 24, r: 24, fill: "#FAF4DE" })),
          Ge ||
            (Ge = o.createElement("path", {
              d: "M24 14C22.0222 14 20.0888 14.5865 18.4443 15.6853C16.7998 16.7841 15.5181 18.3459 14.7612 20.1732C14.0043 22.0004 13.8063 24.0111 14.1922 25.9509C14.578 27.8907 15.5304 29.6725 16.9289 31.0711C18.3275 32.4696 20.1093 33.422 22.0491 33.8078C23.9889 34.1937 25.9996 33.9957 27.8268 33.2388C29.6541 32.4819 31.2159 31.2002 32.3147 29.5557C33.4135 27.9112 34 25.9778 34 24C33.997 21.3488 32.9424 18.807 31.0677 16.9323C29.193 15.0576 26.6512 14.003 24 14V14ZM22.9286 19C22.9286 18.7158 23.0415 18.4433 23.2424 18.2424C23.4433 18.0415 23.7158 17.9286 24 17.9286C24.2842 17.9286 24.5567 18.0415 24.7576 18.2424C24.9585 18.4433 25.0714 18.7158 25.0714 19V23.2857C25.0714 23.5699 24.9585 23.8424 24.7576 24.0433C24.5567 24.2443 24.2842 24.3571 24 24.3571C23.7158 24.3571 23.4433 24.2443 23.2424 24.0433C23.0415 23.8424 22.9286 23.5699 22.9286 23.2857V19ZM24 29.7143C23.7175 29.7143 23.4413 29.6305 23.2063 29.4735C22.9714 29.3166 22.7883 29.0934 22.6802 28.8324C22.572 28.5714 22.5438 28.2841 22.5989 28.007C22.654 27.7299 22.7901 27.4753 22.9899 27.2756C23.1896 27.0758 23.4442 26.9397 23.7213 26.8846C23.9984 26.8295 24.2857 26.8578 24.5467 26.9659C24.8077 27.074 25.0308 27.2571 25.1878 27.492C25.3448 27.727 25.4286 28.0032 25.4286 28.2857C25.4286 28.6646 25.2781 29.028 25.0102 29.2959C24.7422 29.5638 24.3789 29.7143 24 29.7143Z",
              fill: "#9B7C09"
            }))
        );
      }
      var et = o.forwardRef($e);
      n.p;
      var tt = (0, a.Z)("div", { target: "e1d1ahbj7" })({ name: "1mx07n", styles: "border-radius:16px;overflow:hidden;width:590px" }),
        nt = (0, a.Z)("div", { target: "e1d1ahbj6" })({
          name: "1sxuwn2",
          styles: "display:flex;justify-content:space-between;padding:24px;background:#ffffff"
        }),
        rt = (0, a.Z)(et, { target: "e1d1ahbj5" })({ name: "1q2y9l6", styles: "width:48px;aspect-ratio:1/1" }),
        it = (0, a.Z)(L, { target: "e1d1ahbj4" })({ name: "7rhrv0", styles: "cursor:pointer;path{fill:#41536b;}" }),
        at = (0, a.Z)("div", { target: "e1d1ahbj3" })({
          name: "g3dbjh",
          styles: "display:flex;flex-direction:column;padding:0px 24px;background:#ffffff;gap:24px"
        }),
        ot = (0, a.Z)("div", { target: "e1d1ahbj2" })({ name: "10319dx", styles: "font-size:20px;line-height:32px;font-weight:600" }),
        lt = (0, a.Z)("div", { target: "e1d1ahbj1" })({ name: "1muarzf", styles: "font-size:16px;line-height:24px" }),
        st = (0, a.Z)("div", { target: "e1d1ahbj0" })({
          name: "w1u0ey",
          styles: "display:flex;justify-content:flex-end;gap:8px;background:#ffffff;padding:24px"
        }),
        dt = function (e) {
          var t = e.onClose,
            n = e.onRemove,
            r = e.name;
          return (0, O.jsx)(
            Qe,
            {
              "data-automation-id": "RemoveMemberModal",
              onEsc: function () {
                return t();
              },
              onOutsideClick: function () {
                return t();
              }
            },
            (0, O.jsx)(
              tt,
              null,
              (0, O.jsx)(
                nt,
                null,
                (0, O.jsx)(rt, null),
                (0, O.jsx)(it, {
                  onClick: function () {
                    return t();
                  }
                })
              ),
              (0, O.jsx)(
                at,
                null,
                (0, O.jsx)(ot, null, (0, O.jsx)(P.Trans, { id: "Remove member?" })),
                (0, O.jsx)(lt, null, (0, O.jsx)(P.Trans, { id: "Remove {name} from your Families account?", values: { name: r } }))
              ),
              (0, O.jsx)(
                st,
                null,
                (0, O.jsx)(
                  Re,
                  {
                    variant: "outlined",
                    color: "primary",
                    size: "lg",
                    onClick: function () {
                      return t();
                    }
                  },
                  (0, O.jsx)(P.Trans, { id: "Cancel" })
                ),
                (0, O.jsx)(
                  Re,
                  {
                    size: "lg",
                    "data-automation-id": "removeMemberButton",
                    onClick: function () {
                      n(), t();
                    }
                  },
                  (0, O.jsx)(P.Trans, { id: "Remove member" })
                )
              )
            )
          );
        };
      var ct = (0, a.Z)("div", { target: "e1xyedmk3" })({
          name: "ld9srw",
          styles: "position:relative;display:inline-flex;line-height:0px"
        }),
        ut = (0, a.Z)("div", { target: "e1xyedmk2" })({ name: "1lv1yo7", styles: "display:inline-flex" }),
        ft = (0, a.Z)("div", { target: "e1xyedmk1" })(
          "position:absolute;",
          function (e) {
            var t = e.horizontal;
            return "left" === t ? "right : 0;" : "left : 0;";
          },
          " ",
          function (e) {
            return "bottom" === e.vertical ? "top : 0;" : "bottom : 0;";
          },
          " transform:",
          function (e) {
            var t = e.vertical,
              n = e.horizontal,
              r = e.childrenContainerRect;
            return "\n      translateX(calc("
              .concat("left" === n ? "0%" : "middle" === n ? "-50%" : "-10%", "))\n\n      translateY(")
              .concat("bottom" === t ? r.height + 10 : -r.height - 10, "px)\n    ");
          },
          ";width:224px;padding:4px 8px;border-radius:4px;background:#000000;color:white;font-size:12px;line-height:20px;z-index:9;"
        ),
        mt = (0, a.Z)("div", { target: "e1xyedmk0" })(
          "position:absolute;",
          function (e) {
            return "top" === e.vertical ? "bottom: 0;" : "top: 0;";
          },
          " left:",
          function (e) {
            var t = e.horizontal;
            return "middle" === t ? "50%" : "left" === t ? "90%" : "10%";
          },
          ";transform:",
          function (e) {
            var t = e.vertical,
              n = e.horizontal,
              r = e.childrenContainerRect;
            return "\n    translateX("
              .concat("left" === n ? 0 : r.width / 4, "px)\n    translateY(")
              .concat("top" === t ? "50%" : "-50%", ")\n    rotate(45deg)\n  ");
          },
          ";width:8px;aspect-ratio:1/1;background:#000000;"
        ),
        pt = function (e) {
          var t = e.message,
            n = e.children,
            r = e.vertical,
            a = void 0 === r ? "top" : r,
            l = e.horizontal,
            s = void 0 === l ? "middle" : l,
            d = (0, o.useState)(!1),
            c = (0, i.Z)(d, 2),
            u = c[0],
            f = c[1],
            m = (0, o.useState)({ width: 0, height: 0 }),
            p = (0, i.Z)(m, 2),
            x = p[0],
            h = p[1],
            C = (0, o.useCallback)(function (e) {
              null !== e && h(e.getBoundingClientRect());
            }, []);
          return (0, O.jsx)(
            ct,
            { "data-automation-id": "Tooltip" },
            (0, O.jsx)(
              ut,
              {
                ref: C,
                onPointerEnter: function () {
                  f(!0);
                },
                onPointerLeave: function () {
                  f(!1);
                }
              },
              n
            ),
            u &&
              (0, O.jsx)(
                ft,
                { vertical: a, horizontal: s, childrenContainerRect: x },
                t,
                (0, O.jsx)(mt, { vertical: a, horizontal: s, childrenContainerRect: x })
              )
          );
        };
      var xt,
        ht,
        Ct = (0, a.Z)("div", { target: "espd2md3" })(""),
        gt = (0, a.Z)("div", { target: "espd2md2" })({ name: "1r9eqj5", styles: "display:flex;gap:16px" }),
        vt = (0, a.Z)("div", { target: "espd2md1" })({
          name: "1njn12z",
          styles:
            "width:32px;height:32px;left:0px;top:0px;background:#264887;color:#ffffff;border-radius:999px;display:flex;align-items:center;justify-content:center"
        }),
        bt = (0, a.Z)("div", { target: "espd2md0" })({
          name: "1me6f7i",
          styles: "font-weight:400;font-size:14px;line-height:20px;margin-top:8px;margin-bottom:8px"
        }),
        yt = function (e) {
          return e && e.trim()[0] && e.trim()[0].toLocaleUpperCase();
        },
        jt = function (e) {
          var t = e.close,
            n = e.user,
            r = f(),
            i = (0, ze.e)(function (e) {
              return e.username;
            }),
            a = p(function (e) {
              return e;
            }),
            o = a.removeModalVisible,
            l = a.ownerEmail,
            s = Te(t),
            d = s.isDrawerOpen,
            c = s.initiateClose;
          return (0, O.jsx)(P.I18n, null, function (e) {
            var t = e.i18n;
            return (0, O.jsx)(
              Ct,
              { "data-automation-id": "EditMemberDrawer" },
              (0, O.jsx)(ie, {
                open: d,
                onClick: function () {
                  return c();
                }
              }),
              (0, O.jsx)(
                re.J9,
                {
                  initialValues: { name: n.name, email: n.email, isAdmin: n.isAdmin },
                  validate: function (e) {
                    var n = {};
                    return (
                      (e.name && e.name.trim()) || (n.name = "REQUIRED"),
                      e.name && e.name.length > 54 && (n.name = t._({ id: "Name must be less than 54 characters" })),
                      n
                    );
                  },
                  onSubmit: function (e, t) {
                    var i = t.setSubmitting;
                    c(),
                      r.editUser({
                        id: n.id,
                        pending: n.invitePending,
                        email: n.email,
                        name: e.name !== n.name ? Se(e.name) : void 0,
                        isAdmin: e.isAdmin !== n.isAdmin ? e.isAdmin : void 0
                      }),
                      i(!1);
                  }
                },
                function (e) {
                  var t = e.values,
                    a = e.isSubmitting,
                    o = e.dirty,
                    s = e.isValid;
                  return (0, O.jsx)(
                    re.l0,
                    null,
                    (0, O.jsx)(
                      ae,
                      { open: d },
                      (0, O.jsx)(
                        oe,
                        null,
                        (0, O.jsx)(gt, null, (0, O.jsx)(vt, null, yt(yt(n.name))), (0, O.jsx)(ue, null, n.name)),
                        (0, O.jsx)(se, {
                          onClick: function () {
                            return c();
                          }
                        })
                      ),
                      (0, O.jsx)(
                        de,
                        null,
                        (0, O.jsx)(
                          "div",
                          null,
                          (0, O.jsx)(fe, { htmlFor: "name" }, (0, O.jsx)(P.Trans, { id: "Name" })),
                          (0, O.jsx)(re.gN, { type: "text", id: "name", name: "name", value: t.name }, function (e) {
                            var r = e.field;
                            return (0, O.jsx)(
                              me,
                              (0, ne.Z)(
                                {
                                  type: "name",
                                  id: "name",
                                  name: "name",
                                  value: t.name,
                                  disabled: n.invitePending || (n.email === l && n.email !== i)
                                },
                                r,
                                { autoFocus: !0 }
                              )
                            );
                          }),
                          (0, O.jsx)(re.Bc, { name: "name" }, function (e) {
                            return "REQUIRED" !== e ? (0, O.jsx)(ve, null, e) : null;
                          })
                        ),
                        (0, O.jsx)(
                          "div",
                          null,
                          (0, O.jsx)(fe, { htmlFor: "email" }, (0, O.jsx)(P.Trans, { id: "Email address" })),
                          (0, O.jsx)(me, { type: "email", id: "email", name: "email", value: t.email, disabled: !0 }),
                          n.email !== l &&
                            (0, O.jsx)(ge, null, (0, O.jsx)(P.Trans, { id: "Incorrect email? Remove from Families and start again." }))
                        ),
                        n.email !== i &&
                          (0, O.jsx)(
                            "div",
                            null,
                            (0, O.jsx)(
                              he,
                              null,
                              (0, O.jsx)(xe, null, (0, O.jsx)(P.Trans, { id: "Role" })),
                              (0, O.jsx)(re.gN, {
                                type: "checkbox",
                                id: "role",
                                name: "isAdmin",
                                defaultChecked: t.isAdmin,
                                autoFocus: n.invitePending,
                                disabled: n.email === l
                              }),
                              (0, O.jsx)(pe, null, (0, O.jsx)(P.Trans, { id: "Make this user a manager" }))
                            ),
                            (0, O.jsx)(ge, null, (0, O.jsx)(P.Trans, { id: "A manager can invite and remove members" }))
                          ),
                        (0, O.jsx)(
                          "div",
                          null,
                          (0, O.jsx)(fe, { htmlFor: "role" }, "Status"),
                          (0, O.jsx)(
                            bt,
                            null,
                            n.invitePending
                              ? (0, O.jsx)(P.Trans, { id: "Pending (waiting for them to accept)" })
                              : (0, O.jsx)(P.Trans, { id: "Active" })
                          ),
                          n.invitePending &&
                            (0, O.jsx)(
                              Re,
                              {
                                "data-automation-id": "resendInviteButton",
                                variant: "text",
                                color: "link",
                                size: "sm",
                                type: "button",
                                disabled: n.resendPending,
                                onClick: function () {
                                  r.resendInvite(n.email), r.closeEditUserDrawer();
                                },
                                style: { padding: "2px 0", marginLeft: "-2px" }
                              },
                              (0, O.jsx)(P.Trans, { id: "Resend invitation email" })
                            )
                        ),
                        n.email !== i &&
                          n.email !== l &&
                          (0, O.jsx)(
                            "div",
                            null,
                            (0, O.jsx)(
                              Re,
                              {
                                "data-automation-id": "removeFromFamilyButton",
                                variant: "outlined",
                                color: "primary",
                                size: "sm",
                                type: "button",
                                onClick: function () {
                                  return r.openRemoveModal();
                                }
                              },
                              (0, O.jsx)(P.Trans, { id: "Remove from Families" })
                            )
                          ),
                        n.email !== i &&
                          n.email === l &&
                          (0, O.jsx)(
                            "div",
                            null,
                            (0, O.jsx)(
                              pt,
                              {
                                message: (0, O.jsx)(P.Trans, { id: "You can\u2019t remove the owner of a Families account." }),
                                vertical: "bottom",
                                horizontal: "left"
                              },
                              (0, O.jsx)(
                                Re,
                                {
                                  "data-automation-id": "removeFromFamilyButton",
                                  variant: "outlined",
                                  color: "primary",
                                  size: "sm",
                                  type: "button",
                                  disabled: !0
                                },
                                (0, O.jsx)(P.Trans, { id: "Remove from Families" })
                              )
                            )
                          )
                      ),
                      (0, O.jsx)(
                        ce,
                        null,
                        (0, O.jsx)(
                          Re,
                          {
                            variant: "text",
                            color: "primary",
                            size: "lg",
                            onClick: function () {
                              return c();
                            }
                          },
                          (0, O.jsx)(P.Trans, { id: "Cancel" })
                        ),
                        (0, O.jsx)(
                          Re,
                          {
                            "data-automation-id": "updateMemberButton",
                            variant: "contained",
                            size: "lg",
                            type: "submit",
                            disabled: a || !o || !s
                          },
                          (0, O.jsx)(P.Trans, { id: "Update member" })
                        )
                      )
                    )
                  );
                }
              ),
              o &&
                (0, O.jsx)(dt, {
                  onClose: function () {
                    return r.closeRemoveModal();
                  },
                  onRemove: function () {
                    return r.removeUser(n.id, n.email, n.name, n.invitePending);
                  },
                  name: n.name
                })
            );
          });
        },
        Et = ["title", "titleId"];
      function wt() {
        return (
          (wt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          wt.apply(this, arguments)
        );
      }
      function kt(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function Lt(e, t) {
        var n = e.title,
          r = e.titleId,
          i = kt(e, Et);
        return o.createElement(
          "svg",
          wt(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          xt ||
            (xt = o.createElement(
              "g",
              { clipPath: "url(#clip0_839_13815)" },
              o.createElement("path", {
                d: "M16.187 3.51101C16.0915 3.42056 15.965 3.37015 15.8335 3.37015C15.702 3.37015 15.5755 3.42056 15.48 3.51101L4.067 14.924C3.97326 15.0178 3.92061 15.1449 3.92061 15.2775C3.92061 15.4101 3.97326 15.5372 4.067 15.631L8.347 19.911C8.44076 20.0047 8.56792 20.0574 8.7005 20.0574C8.83308 20.0574 8.96024 20.0047 9.054 19.911L20.467 8.50001C20.5607 8.40624 20.6134 8.27909 20.6134 8.14651C20.6134 8.01393 20.5607 7.88677 20.467 7.79301L16.187 3.51101Z",
                fill: "#40526D"
              }),
              o.createElement("path", {
                d: "M3 16.71C2.93942 16.6498 2.86443 16.6061 2.78217 16.5831C2.69991 16.5601 2.61313 16.5585 2.5301 16.5786C2.44707 16.5986 2.37057 16.6396 2.30788 16.6976C2.24519 16.7557 2.19841 16.8288 2.172 16.91L0.032001 23.33C0.00247214 23.4181 -0.00194202 23.5126 0.0192534 23.6031C0.0404489 23.6935 0.086416 23.7762 0.152001 23.842C0.218168 23.907 0.300862 23.9526 0.391117 23.9739C0.481372 23.9953 0.575744 23.9915 0.664001 23.963L7.084 21.824C7.16542 21.7977 7.23872 21.7509 7.29689 21.6881C7.35505 21.6254 7.39614 21.5487 7.41621 21.4655C7.43628 21.3823 7.43466 21.2954 7.41151 21.213C7.38836 21.1306 7.34446 21.0556 7.284 20.995L3 16.71Z",
                fill: "#40526D"
              }),
              o.createElement("path", {
                d: "M22.968 1.017C22.296 0.375851 21.4028 0.0181427 20.474 0.0181427C19.5452 0.0181427 18.652 0.375851 17.98 1.017L17.268 1.73C17.1743 1.82377 17.1216 1.95092 17.1216 2.0835C17.1216 2.21608 17.1743 2.34324 17.268 2.437L21.547 6.717C21.6408 6.81074 21.7679 6.8634 21.9005 6.8634C22.0331 6.8634 22.1602 6.81074 22.254 6.717L22.968 6C23.6272 5.33838 23.9973 4.44247 23.9973 3.5085C23.9973 2.57453 23.6272 1.67863 22.968 1.017Z",
                fill: "#40526D"
              })
            )),
          ht ||
            (ht = o.createElement(
              "defs",
              null,
              o.createElement("clipPath", { id: "clip0_839_13815" }, o.createElement("rect", { width: 24, height: 24, fill: "white" }))
            ))
        );
      }
      var Ot,
        Rt = o.forwardRef(Lt),
        _t = (n.p, ["title", "titleId"]);
      function Zt() {
        return (
          (Zt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Zt.apply(this, arguments)
        );
      }
      function Dt(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function Mt(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Dt(e, _t);
        return o.createElement(
          "svg",
          Zt(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          Ot ||
            (Ot = o.createElement("path", {
              d: "M20.8042 4.33656C20.6244 4.20205 20.4203 4.10482 20.2035 4.05042C19.9867 3.99602 19.7615 3.98552 19.5407 4.01951C19.3199 4.05351 19.1078 4.13134 18.9167 4.24856C18.7255 4.36578 18.559 4.52008 18.4266 4.70265L10.3645 15.8097L5.23785 11.646C4.88437 11.3711 4.43888 11.2477 3.99687 11.3023C3.55485 11.3569 3.1515 11.5852 2.87328 11.9381C2.59506 12.291 2.4641 12.7404 2.50848 13.1902C2.55287 13.6399 2.76906 14.0541 3.11072 14.344L9.62004 19.6295C9.79992 19.7723 10.006 19.8773 10.2263 19.9384C10.4466 19.9995 10.6767 20.0153 10.9031 19.9851C11.1295 19.9549 11.3478 19.8792 11.545 19.7624C11.7423 19.6456 11.9146 19.4901 12.052 19.3049L21.1702 6.75139C21.3025 6.56846 21.398 6.36088 21.4511 6.14049C21.5043 5.9201 21.5142 5.69123 21.4802 5.46696C21.4462 5.24269 21.369 5.02743 21.253 4.83347C21.137 4.63951 20.9845 4.47065 20.8042 4.33656Z",
              fill: "#008A63"
            }))
        );
      }
      var It = o.forwardRef(Mt);
      n.p;
      var Tt,
        St,
        At,
        Ft,
        Pt,
        Bt,
        Vt,
        zt,
        Ht,
        Nt,
        Ut,
        Wt,
        Gt,
        Yt,
        qt,
        Qt,
        Kt,
        Jt,
        Xt,
        $t,
        en,
        tn,
        nn,
        rn,
        an,
        on,
        ln = o.useState,
        sn = o.useRef,
        dn = o.useEffect,
        cn = (0, a.Z)("div", { target: "e1ek8b213" })({
          name: "1htevg8",
          styles: "display:inline-block;font-size:28px;font-weight:600;line-height:36px;letter-spacing:0px;max-height:36px;overflow:hidden"
        }),
        un = (0, a.Z)(Rt, { target: "e1ek8b212" })({
          name: "hb0drl",
          styles: "display:inline-block;font-size:28px;line-height:36px;vertical-align:super;cursor:pointer;margin-left:16px"
        }),
        fn = (0, a.Z)(It, { target: "e1ek8b211" })({ name: "3g3xcj", styles: "height:36px;width:35px" }),
        mn = (0, a.Z)("div", { target: "e1ek8b210" })(
          "display:inline-block;font-size:28px;line-height:36px;vertical-align:super;cursor:default;position:absolute;pointer-events:none;background:#ffffff;animation-duration:2s;margin-left:11px;opacity:0;animation-name:",
          function (e) {
            return e.isanimated ? "blink-animation" : "none";
          },
          ";@keyframes blink-animation{0%{opacity:0;}20%{opacity:1;}80%{opacity:1;}100%{opacity:0;}}"
        ),
        pn = function () {
          var e = p(function (e) {
              return e.familyName;
            }),
            t = ln(""),
            n = (0, i.Z)(t, 2),
            r = n[0],
            a = n[1],
            l = f(),
            s = sn(null),
            d = ln(!1),
            c = (0, i.Z)(d, 2),
            u = c[0],
            m = c[1];
          return (
            dn(
              function () {
                var t;
                return (
                  s.current &&
                    "" !== s.current.textContent &&
                    (m(!0),
                    (t = setTimeout(function () {
                      m(!1);
                    }, 2e3))),
                  a(e),
                  s.current && (s.current.textContent = e),
                  function () {
                    return clearTimeout(t);
                  }
                );
              },
              [e]
            ),
            (0, O.jsx)(
              o.Fragment,
              null,
              (0, O.jsx)(
                "div",
                null,
                (0, O.jsx)(cn, {
                  "data-automation-id": "familyNameInputField",
                  ref: s,
                  contentEditable: !0,
                  onKeyDown: function (e) {
                    13 === e.keyCode && (e.preventDefault(), e.currentTarget.blur());
                  },
                  onBlur: function (t) {
                    t.currentTarget.innerHTML.includes("<br>") &&
                      (t.currentTarget.innerHTML = t.currentTarget.innerHTML.replace(/<br>/g, ""));
                    var n = t.currentTarget.textContent || "";
                    if (n.trim()) {
                      if (n !== e) {
                        var r = Se(n);
                        l.editFamilyName(r), (t.currentTarget.textContent = r);
                      }
                    } else t.currentTarget.textContent = e;
                  },
                  onInput: function (e) {
                    var t = e.currentTarget.textContent || "";
                    t.length > 60 && (60 == r.length ? (e.currentTarget.textContent = r) : (e.currentTarget.textContent = t.slice(0, 60))),
                      a(e.currentTarget.textContent || "");
                  }
                }),
                (0, O.jsx)(mn, { "data-automation-id": "familyNameCheckmark", isanimated: u }, (0, O.jsx)(fn, null)),
                (0, O.jsx)(un, {
                  "data-automation-id": "familyNamePencil",
                  onClick: function () {
                    s.current && s.current.focus();
                  }
                })
              )
            )
          );
        },
        xn = ["title", "titleId"];
      function hn() {
        return (
          (hn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          hn.apply(this, arguments)
        );
      }
      function Cn(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function gn(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Cn(e, xn);
        return o.createElement(
          "svg",
          hn(
            {
              width: 120,
              height: 80,
              viewBox: "0 0 120 80",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          Tt ||
            (Tt = o.createElement("path", {
              d: "M4.65527 31.8926C4.65527 30.3397 6.46026 29.0811 8.68696 29.0811H104.407C106.633 29.0811 108.439 30.3397 108.439 31.8926V47.0263C108.439 48.5792 106.633 49.8378 104.407 49.8378H8.68696C6.46026 49.8378 4.65527 48.5792 4.65527 47.0263V31.8926Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25
            })),
          St ||
            (St = o.createElement("path", {
              d: "M20.4355 36.5152H19.1788V39.7432C19.1788 40.5794 18.7328 41.0861 17.917 41.0861C17.167 41.0861 16.8173 40.6706 16.8173 39.8091V36.5152H15.5605V40.1131C15.5605 41.4104 16.27 42.1655 17.4812 42.1655C18.3274 42.1655 18.8697 41.8057 19.1382 41.1723H19.2244V42.054H20.4355V36.5152Z",
              fill: "#264887"
            })),
          At ||
            (At = o.createElement("path", {
              d: "M26.1264 34.7364C23.6078 34.7364 21.8798 36.4594 21.8798 38.9628C21.8798 41.527 23.5825 43.1892 26.2126 43.1892C26.7852 43.1892 27.3376 43.1131 27.7582 42.9814V42.2314C27.4643 42.353 26.8612 42.4341 26.2632 42.4341C24.1045 42.4341 22.7312 41.0962 22.7312 38.9932C22.7312 36.9307 24.1146 35.4814 26.0808 35.4814C28.042 35.4814 29.3545 36.7027 29.3545 38.5321C29.3545 39.652 28.9997 40.3716 28.4372 40.3716C28.1078 40.3716 27.9203 40.1587 27.9203 39.804V36.9966H26.993V37.6047H26.9018C26.7041 37.1587 26.2582 36.8902 25.721 36.8902C24.6974 36.8902 23.993 37.7364 23.993 38.9679C23.993 40.255 24.6974 41.1165 25.7514 41.1165C26.3393 41.1165 26.77 40.8378 26.9828 40.326H27.0741C27.1653 40.8175 27.6264 41.1419 28.2447 41.1419C29.4507 41.1419 30.2058 40.1182 30.2058 38.4915C30.2058 36.2669 28.5437 34.7364 26.1264 34.7364ZM25.9541 37.7314C26.5521 37.7314 26.9271 38.2179 26.9271 38.9983C26.9271 39.7736 26.547 40.2601 25.9491 40.2601C25.3714 40.2601 25.0166 39.7837 25.0166 38.9983C25.0166 38.2027 25.3663 37.7314 25.9541 37.7314Z",
              fill: "#264887"
            })),
          Ft || (Ft = o.createElement("path", { d: "M31.6146 42.054H32.8714V34.3716H31.6146V42.054Z", fill: "#264887" })),
          Pt ||
            (Pt = o.createElement("path", {
              d: "M35.9879 42.1452C36.7126 42.1452 37.3207 41.831 37.6298 41.2939H37.716V42.054H38.9271V38.2685C38.9271 37.0979 38.1264 36.4087 36.7024 36.4087C35.3849 36.4087 34.4676 37.027 34.3663 37.9949H35.5521C35.6687 37.6148 36.0639 37.4071 36.6416 37.4071C37.3207 37.4071 37.6855 37.7162 37.6855 38.2685V38.7449L36.2565 38.831C34.9085 38.9071 34.1535 39.4898 34.1535 40.4831C34.1535 41.4966 34.9187 42.1452 35.9879 42.1452ZM36.3578 41.1773C35.8004 41.1773 35.4001 40.8986 35.4001 40.4223C35.4001 39.9611 35.7295 39.7027 36.4339 39.6571L37.6855 39.5709V40.0219C37.6855 40.6807 37.118 41.1773 36.3578 41.1773Z",
              fill: "#264887"
            })),
          Bt ||
            (Bt = o.createElement("path", {
              d: "M40.3156 38.0962C40.3156 38.9273 40.8173 39.4138 41.8815 39.6571L42.8646 39.8851C43.3916 40.0067 43.6298 40.2094 43.6298 40.5236C43.6298 40.9442 43.1889 41.2331 42.5555 41.2331C41.9271 41.2331 41.5369 40.9797 41.4153 40.5692H40.1737C40.27 41.5675 41.1416 42.1655 42.5251 42.1655C43.9085 42.1655 44.8866 41.4611 44.8866 40.402C44.8866 39.5861 44.395 39.1351 43.3359 38.8919L42.3578 38.6739C41.8004 38.5422 41.5369 38.3446 41.5369 38.0304C41.5369 37.6199 41.9676 37.3412 42.5403 37.3412C43.1281 37.3412 43.498 37.5946 43.5893 37.9848H44.77C44.6788 36.9864 43.8528 36.4087 42.5352 36.4087C41.2278 36.4087 40.3156 37.103 40.3156 38.0962Z",
              fill: "#264887"
            })),
          Vt ||
            (Vt = o.createElement("path", {
              d: "M46.5183 35.1571V36.5506H45.6416V37.5287H46.5183V40.5844C46.5183 41.6537 47.0251 42.0794 48.297 42.0794C48.5403 42.0794 48.7734 42.0591 48.9558 42.0236V41.0608C48.8038 41.076 48.7075 41.0861 48.5301 41.0861C48.0031 41.0861 47.77 40.8378 47.77 40.2854V37.5287H48.9558V36.5506H47.77V35.1571H46.5183Z",
              fill: "#264887"
            })),
          zt ||
            (zt = o.createElement("path", {
              d: "M53.2328 36.4239C52.4727 36.4239 51.8291 36.804 51.5099 37.4324H51.4237V36.5152H50.2126V43.8935H51.4693V41.2128H51.5555C51.8393 41.8006 52.4524 42.1452 53.248 42.1452C54.6467 42.1452 55.5183 41.0456 55.5183 39.2871C55.5183 37.5135 54.6366 36.4239 53.2328 36.4239ZM52.8376 41.1013C51.9812 41.1013 51.4491 40.4071 51.444 39.2871C51.4491 38.1672 51.9862 37.4729 52.8426 37.4729C53.7041 37.4729 54.2261 38.152 54.2261 39.2871C54.2261 40.4223 53.7092 41.1013 52.8376 41.1013Z",
              fill: "#264887"
            })),
          Ht ||
            (Ht = o.createElement("path", {
              d: "M58.3055 42.1452C59.0301 42.1452 59.6382 41.831 59.9474 41.2939H60.0335V42.054H61.2447V38.2685C61.2447 37.0979 60.444 36.4087 59.02 36.4087C57.7024 36.4087 56.7852 37.027 56.6839 37.9949H57.8697C57.9862 37.6148 58.3815 37.4071 58.9592 37.4071C59.6382 37.4071 60.0031 37.7162 60.0031 38.2685V38.7449L58.5741 38.831C57.2261 38.9071 56.471 39.4898 56.471 40.4831C56.471 41.4966 57.2362 42.1452 58.3055 42.1452ZM58.6754 41.1773C58.118 41.1773 57.7176 40.8986 57.7176 40.4223C57.7176 39.9611 58.047 39.7027 58.7514 39.6571L60.0031 39.5709V40.0219C60.0031 40.6807 59.4355 41.1773 58.6754 41.1773Z",
              fill: "#264887"
            })),
          Nt ||
            (Nt = o.createElement("path", {
              d: "M62.6332 38.0962C62.6332 38.9273 63.1349 39.4138 64.1991 39.6571L65.1822 39.8851C65.7092 40.0067 65.9474 40.2094 65.9474 40.5236C65.9474 40.9442 65.5065 41.2331 64.873 41.2331C64.2447 41.2331 63.8545 40.9797 63.7328 40.5692H62.4913C62.5876 41.5675 63.4592 42.1655 64.8426 42.1655C66.2261 42.1655 67.2041 41.4611 67.2041 40.402C67.2041 39.5861 66.7126 39.1351 65.6534 38.8919L64.6754 38.6739C64.118 38.5422 63.8545 38.3446 63.8545 38.0304C63.8545 37.6199 64.2852 37.3412 64.8578 37.3412C65.4457 37.3412 65.8156 37.5946 65.9068 37.9848H67.0876C66.9963 36.9864 66.1703 36.4087 64.8528 36.4087C63.5453 36.4087 62.6332 37.103 62.6332 38.0962Z",
              fill: "#264887"
            })),
          Ut ||
            (Ut = o.createElement("path", {
              d: "M68.248 38.0962C68.248 38.9273 68.7497 39.4138 69.8139 39.6571L70.797 39.8851C71.3241 40.0067 71.5622 40.2094 71.5622 40.5236C71.5622 40.9442 71.1213 41.2331 70.4879 41.2331C69.8595 41.2331 69.4693 40.9797 69.3477 40.5692H68.1061C68.2024 41.5675 69.0741 42.1655 70.4575 42.1655C71.8409 42.1655 72.819 41.4611 72.819 40.402C72.819 39.5861 72.3274 39.1351 71.2683 38.8919L70.2903 38.6739C69.7328 38.5422 69.4693 38.3446 69.4693 38.0304C69.4693 37.6199 69.9001 37.3412 70.4727 37.3412C71.0605 37.3412 71.4305 37.5946 71.5217 37.9848H72.7024C72.6112 36.9864 71.7852 36.4087 70.4676 36.4087C69.1602 36.4087 68.248 37.103 68.248 38.0962Z",
              fill: "#264887"
            })),
          Wt ||
            (Wt = o.createElement("path", {
              d: "M75.0284 42.1554C75.5099 42.1554 75.8393 41.8158 75.8393 41.3648C75.8393 40.9189 75.5099 40.5794 75.0284 40.5794C74.5521 40.5794 74.2176 40.9189 74.2176 41.3648C74.2176 41.8158 74.5521 42.1554 75.0284 42.1554Z",
              fill: "#264887"
            })),
          Gt ||
            (Gt = o.createElement("path", {
              d: "M82.0926 38.3648C81.9609 37.2196 81.0994 36.4087 79.6754 36.4087C78.0082 36.4087 77.0301 37.478 77.0301 39.2719C77.0301 41.0861 78.0132 42.1655 79.6805 42.1655C81.0842 42.1655 81.9558 41.3851 82.0926 40.2398H80.8967C80.7649 40.8226 80.3291 41.1317 79.6754 41.1317C78.819 41.1317 78.3021 40.4476 78.3021 39.2719C78.3021 38.1165 78.8139 37.4375 79.6754 37.4375C80.3646 37.4375 80.7801 37.8277 80.8967 38.3648H82.0926Z",
              fill: "#264887"
            })),
          Yt ||
            (Yt = o.createElement("path", {
              d: "M85.6855 42.1655C87.3426 42.1655 88.3511 41.081 88.3511 39.2821C88.3511 37.4932 87.3376 36.4087 85.6855 36.4087C84.0386 36.4087 83.02 37.4983 83.02 39.2821C83.02 41.081 84.0234 42.1655 85.6855 42.1655ZM85.6855 41.1368C84.8088 41.1368 84.3072 40.4577 84.3072 39.2871C84.3072 38.1165 84.8088 37.4375 85.6855 37.4375C86.5572 37.4375 87.0588 38.1165 87.0588 39.2871C87.0588 40.4577 86.5622 41.1368 85.6855 41.1368Z",
              fill: "#264887"
            })),
          qt ||
            (qt = o.createElement("path", {
              d: "M89.618 42.054H90.8747V38.6841C90.8747 37.9949 91.3359 37.4729 91.9592 37.4729C92.5774 37.4729 92.9626 37.8479 92.9626 38.4611V42.054H94.1838V38.5929C94.1838 37.9594 94.6146 37.4729 95.2683 37.4729C95.9423 37.4729 96.2818 37.8327 96.2818 38.5523V42.054H97.5335V38.2432C97.5335 37.0929 96.8646 36.4087 95.7548 36.4087C94.9845 36.4087 94.346 36.804 94.0724 37.4071H93.9862C93.7531 36.7939 93.221 36.4087 92.4558 36.4087C91.721 36.4087 91.1534 36.7837 90.9153 37.4071H90.8291V36.5152H89.618V42.054Z",
              fill: "#264887"
            })),
          Qt ||
            (Qt = o.createElement("path", {
              d: "M97.0228 20C96.6099 20 96.214 20.164 95.922 20.456C95.6301 20.7479 95.4661 21.1439 95.4661 21.5568V30.8973C95.4661 35.8924 102.974 41.451 105.526 43.1022C105.775 43.2647 106.066 43.3512 106.363 43.3512C106.661 43.3512 106.952 43.2647 107.201 43.1022C109.753 41.451 117.261 35.8924 117.261 30.8973V21.5568C117.261 21.3523 117.22 21.1499 117.142 20.961C117.064 20.7721 116.949 20.6005 116.805 20.456C116.66 20.3114 116.488 20.1967 116.3 20.1185C116.111 20.0403 115.908 20 115.704 20H97.0228Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.2973,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Kt ||
            (Kt = o.createElement("path", {
              d: "M102.212 30.8851L104.331 33.8957C104.411 34.0155 104.519 34.1145 104.646 34.1843C104.772 34.2542 104.913 34.2929 105.058 34.2972C105.202 34.3015 105.345 34.2713 105.476 34.2091C105.606 34.147 105.72 34.0546 105.807 33.9398L112.59 25.3542",
              stroke: "#D7403A",
              strokeWidth: 1.2973,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Jt ||
            (Jt = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M97.2196 20.456C97.5116 20.164 97.9075 20 98.3204 20H117.001C117.002 20 117.003 20 117.004 20H100.915C100.502 20 100.106 20.164 99.8139 20.456C99.522 20.7479 99.358 21.1439 99.358 21.5568V30.8973C99.358 35.62 106.069 40.8465 108.958 42.798C108.791 42.9105 108.638 43.0122 108.498 43.1022C108.249 43.2647 107.958 43.3512 107.661 43.3512C107.364 43.3512 107.073 43.2647 106.823 43.1022C104.271 41.451 96.7637 35.8924 96.7637 30.8973V21.5568C96.7637 21.1439 96.9277 20.7479 97.2196 20.456Z",
              fill: "#B5D9F1"
            })),
          Xt ||
            (Xt = o.createElement("path", {
              d: "M97.0228 20C96.6099 20 96.214 20.164 95.922 20.456C95.6301 20.7479 95.4661 21.1439 95.4661 21.5568V30.8973C95.4661 35.8924 102.974 41.451 105.526 43.1022C105.775 43.2647 106.066 43.3512 106.363 43.3512C106.661 43.3512 106.952 43.2647 107.201 43.1022C109.753 41.451 117.261 35.8924 117.261 30.8973V21.5568C117.261 21.3523 117.22 21.1499 117.142 20.961C117.064 20.7721 116.949 20.6005 116.805 20.456C116.66 20.3114 116.488 20.1967 116.3 20.1185C116.111 20.0403 115.908 20 115.704 20H97.0228Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          $t ||
            ($t = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.4998 71C21.8805 71 22.9998 69.8807 22.9998 68.5C22.9998 67.1193 21.8805 66 20.4998 66C19.119 66 17.9998 67.1193 17.9998 68.5C17.9998 69.8807 19.119 71 20.4998 71Z",
              stroke: "#F0C936"
            })),
          en ||
            (en = o.createElement("rect", {
              x: 99.9998,
              y: 62,
              width: 5,
              height: 5.00002,
              stroke: "#F0C936",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          tn ||
            (tn = o.createElement("rect", {
              x: 29.9998,
              y: 58,
              width: 5,
              height: 5.00001,
              stroke: "#F0C936",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          nn ||
            (nn = o.createElement("rect", {
              width: 4,
              height: 4,
              transform: "matrix(0.707106 -0.707107 0.707106 0.707107 8.54688 43.3558)",
              stroke: "#F0C936",
              strokeWidth: 0.7,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          rn || (rn = o.createElement("path", { d: "M32.2083 10.2083L36.9587 14.9587", stroke: "#F0C936", strokeLinecap: "round" })),
          an || (an = o.createElement("path", { d: "M36.7912 10.2083L32.0408 14.9587", stroke: "#F0C936", strokeLinecap: "round" })),
          on ||
            (on = o.createElement("path", {
              d: "M94.3313 14.6192L94.6856 14.972L94.3313 14.6192C94.0738 14.8779 93.7249 15.0228 93.3617 15.0228H92.1135C91.8146 15.0228 91.5285 15.1421 91.3178 15.3536C91.1073 15.5651 90.9894 15.8515 90.9894 16.1497V17.4035C90.9894 17.7704 90.8442 18.1218 90.5866 18.3806C90.3291 18.6393 89.9803 18.7842 89.617 18.7842C89.2538 18.7842 88.905 18.6393 88.6474 18.3806C88.3898 18.1218 88.2447 17.7704 88.2447 17.4035V16.1497C88.2447 15.8515 88.1268 15.5651 87.9162 15.3536C87.7056 15.1421 87.4194 15.0228 87.1206 15.0228H85.8723C85.5091 15.0228 85.1603 14.8779 84.9027 14.6192C84.6451 14.3604 84.5 14.009 84.5 13.6421C84.5 13.2752 84.6451 12.9238 84.9027 12.665C85.1603 12.4063 85.5091 12.2614 85.8723 12.2614H87.1206C87.4194 12.2614 87.7056 12.1421 87.9162 11.9305C88.1268 11.719 88.2447 11.4327 88.2447 11.1345V9.8807C88.2447 9.5138 88.3898 9.16237 88.6474 8.90361L88.2931 8.55084L88.6474 8.90361C88.905 8.64492 89.2538 8.5 89.617 8.5C89.9803 8.5 90.3291 8.64492 90.5866 8.90361C90.8442 9.16237 90.9894 9.5138 90.9894 9.8807V11.1345C90.9894 11.4327 91.1073 11.719 91.3178 11.9305C91.5285 12.1421 91.8146 12.2614 92.1135 12.2614H93.3617C93.7249 12.2614 94.0738 12.4063 94.3313 12.665C94.5889 12.9238 94.734 13.2752 94.734 13.6421C94.734 14.009 94.5889 14.3604 94.3313 14.6192Z",
              fill: "#F0C936",
              stroke: "#F0C936"
            }))
        );
      }
      var vn = o.forwardRef(gn);
      n.p;
      var bn,
        yn,
        jn = (0, a.Z)("div", { target: "e6pvcsh6" })({ name: "e0pwp7", styles: "border-radius:16px;overflow:hidden;width:526px" }),
        En = (0, a.Z)("div", { target: "e6pvcsh5" })({
          name: "1j2in7r",
          styles: "position:relative;display:flex;justify-content:center;padding:16px;background:#fbefc3"
        }),
        wn = (0, a.Z)(L, { target: "e6pvcsh4" })({
          name: "fjju7h",
          styles: "position:absolute;cursor:pointer;top:30px;right:30px;path{fill:#41536b;}"
        }),
        kn = (0, a.Z)("div", { target: "e6pvcsh3" })({
          name: "12hrhpu",
          styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;padding:24px;background:#ffffff;gap:16px"
        }),
        Ln = (0, a.Z)("div", { target: "e6pvcsh2" })({ name: "10319dx", styles: "font-size:20px;line-height:32px;font-weight:600" }),
        On = (0, a.Z)("div", { target: "e6pvcsh1" })({ name: "c3507l", styles: "font-size:16px;line-height:24px;text-align:center" }),
        Rn = (0, a.Z)("div", { target: "e6pvcsh0" })({
          name: "6kqe9x",
          styles: "display:flex;flex-direction:column;align-items:center;gap:12px"
        }),
        _n = function (e) {
          var t = e.onClose,
            n = f();
          return (0, O.jsx)(
            Qe,
            {
              "data-automation-id": "VerifyEmailModal",
              onEsc: function () {
                return t();
              },
              onOutsideClick: function () {
                return t();
              }
            },
            (0, O.jsx)(
              jn,
              null,
              (0, O.jsx)(
                En,
                null,
                (0, O.jsx)(vn, null),
                (0, O.jsx)(wn, {
                  onClick: function () {
                    return t();
                  }
                })
              ),
              (0, O.jsx)(
                kn,
                null,
                (0, O.jsx)(Ln, null, (0, O.jsx)(P.Trans, { id: "Verify email to invite members" })),
                (0, O.jsx)(
                  On,
                  null,
                  (0, O.jsx)(P.Trans, { id: "Request a verification link and then look for an email from LastPass in your email inbox." })
                ),
                (0, O.jsx)(On, null, (0, O.jsx)(P.Trans, { id: "This is required, but you only need to do it once." })),
                (0, O.jsx)(
                  Rn,
                  null,
                  (0, O.jsx)(
                    Re,
                    {
                      "data-automation-id": "requestVerificationLinkButton",
                      size: "lg",
                      onClick: function () {
                        n.sendVerify(), t();
                      }
                    },
                    (0, O.jsx)(P.Trans, { id: "Request verification link" })
                  ),
                  (0, O.jsx)(
                    Re,
                    {
                      "data-automation-id": "inviteMembersLaterLink",
                      variant: "text",
                      color: "primary",
                      size: "lg",
                      onClick: function () {
                        return t();
                      }
                    },
                    (0, O.jsx)(P.Trans, { id: "I'll invite members later" })
                  )
                )
              )
            )
          );
        },
        Zn = ["title", "titleId"];
      function Dn() {
        return (
          (Dn = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Dn.apply(this, arguments)
        );
      }
      function Mn(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function In(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Mn(e, Zn);
        return o.createElement(
          "svg",
          Dn(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          bn ||
            (bn = o.createElement(
              "g",
              { clipPath: "url(#clip0_1430_80088)" },
              o.createElement("path", {
                d: "M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845885 10.121 0.00229405 8 0V0ZM8.16667 3.33333C8.36445 3.33333 8.55779 3.39198 8.72224 3.50186C8.88669 3.61174 9.01486 3.76792 9.09055 3.95065C9.16624 4.13338 9.18604 4.33444 9.14746 4.52842C9.10887 4.7224 9.01363 4.90059 8.87378 5.04044C8.73392 5.18029 8.55574 5.27553 8.36176 5.31412C8.16778 5.3527 7.96671 5.3329 7.78399 5.25721C7.60126 5.18153 7.44508 5.05335 7.3352 4.8889C7.22532 4.72445 7.16667 4.53111 7.16667 4.33333C7.16667 4.06812 7.27203 3.81376 7.45956 3.62623C7.6471 3.43869 7.90145 3.33333 8.16667 3.33333ZM9.66667 12.3333H7C6.82319 12.3333 6.65362 12.2631 6.5286 12.1381C6.40358 12.013 6.33334 11.8435 6.33334 11.6667C6.33334 11.4899 6.40358 11.3203 6.5286 11.1953C6.65362 11.0702 6.82319 11 7 11H7.5C7.54421 11 7.5866 10.9824 7.61786 10.9512C7.64911 10.9199 7.66667 10.8775 7.66667 10.8333V7.83333C7.66667 7.78913 7.64911 7.74674 7.61786 7.71548C7.5866 7.68423 7.54421 7.66667 7.5 7.66667H7C6.82319 7.66667 6.65362 7.59643 6.5286 7.4714C6.40358 7.34638 6.33334 7.17681 6.33334 7C6.33334 6.82319 6.40358 6.65362 6.5286 6.5286C6.65362 6.40357 6.82319 6.33333 7 6.33333H7.66667C8.02029 6.33333 8.35943 6.47381 8.60948 6.72386C8.85953 6.97391 9 7.31304 9 7.66667V10.8333C9 10.8775 9.01756 10.9199 9.04882 10.9512C9.08008 10.9824 9.12247 11 9.16667 11H9.66667C9.84348 11 10.0131 11.0702 10.1381 11.1953C10.2631 11.3203 10.3333 11.4899 10.3333 11.6667C10.3333 11.8435 10.2631 12.013 10.1381 12.1381C10.0131 12.2631 9.84348 12.3333 9.66667 12.3333Z",
                fill: "#40526D"
              })
            )),
          yn ||
            (yn = o.createElement(
              "defs",
              null,
              o.createElement("clipPath", { id: "clip0_1430_80088" }, o.createElement("rect", { width: 16, height: 16, fill: "white" }))
            ))
        );
      }
      var Tn = o.forwardRef(In),
        Sn = (n.p, n(38539));
      var An,
        Fn,
        Pn,
        Bn,
        Vn,
        zn,
        Hn,
        Nn,
        Un,
        Wn,
        Gn,
        Yn,
        qn = (0, a.Z)(Tn, { target: "ekivo9816" })({ name: "e0dnmk", styles: "cursor:pointer" }),
        Qn = (0, a.Z)("div", { target: "ekivo9815" })({ name: "1og3vwv", styles: "display:flex;align-items:center;gap:10px" }),
        Kn = (0, a.Z)("div", { target: "ekivo9814" })(""),
        Jn = (0, a.Z)("div", { target: "ekivo9813" })({
          name: "gqkc9l",
          styles: "display:flex;justify-content:space-between;padding:24px;margin-bottom:25px"
        }),
        Xn = (0, a.Z)("table", { target: "ekivo9812" })({ name: "1d3w5wq", styles: "width:100%" }),
        $n = (0, a.Z)("th", { target: "ekivo9811" })({
          name: "1ckr8dg",
          styles:
            "font-weight:700;font-size:14px;line-height:20px;color:#1b283c;vertical-align:middle;text-align:left;:first-of-type{padding-left:24px;}"
        }),
        er = (0, a.Z)("tr", { target: "ekivo9810" })({ name: "4wam81", styles: "height:42px" }),
        tr = (0, a.Z)("tr", { target: "ekivo989" })({
          name: "s00el5",
          styles:
            ":focus{outline:#1b283c solid 2px;outline-offset:-1px;}:hover{background:rgba(27, 40, 60, 0.1);}:active{background:rgba(27, 40, 60, 0.3);outline:none;}cursor:pointer;height:42px"
        }),
        nr = (0, a.Z)("td", { target: "ekivo988" })({
          name: "o6ih19",
          styles:
            "font-weight:400;font-size:14px;line-height:20px;color:#1b283c;border-top:1px solid #d7dbe0;vertical-align:middle;:first-of-type{padding-left:24px;}"
        }),
        rr = (0, a.Z)("span", { target: "ekivo987" })({
          name: "e5e21",
          styles:
            "display:inline-block;font-weight:600;font-size:12px;line-height:20px;color:#008a63;padding:0px 8px;background:#e7f7f2;border-radius:20px;text-align:center;vertical-align:baseline"
        }),
        ir = (0, a.Z)(te, { target: "ekivo986" })({
          name: "17bko4p",
          styles: "height:14px;vertical-align:sub;margin-left:-6px;margin-right:-4px"
        }),
        ar = (0, a.Z)(rr, { target: "ekivo985" })({ name: "1wm1553", styles: "color:#007aff;background:#e8f3ff" }),
        or = (0, a.Z)("div", { target: "ekivo984" })({ name: "budh8k", styles: "display:flex;flex-direction:column;gap:16px" }),
        lr = (0, a.Z)("div", { target: "ekivo983" })(""),
        sr = (0, a.Z)("span", { target: "ekivo982" })({ name: "16ceglb", styles: "font-weight:600" }),
        dr = (0, a.Z)("span", { target: "ekivo981" })({ name: "mmvz9h", styles: "font-weight:400" }),
        cr = (0, a.Z)("div", { target: "ekivo980" })({ name: "1yydxi7", styles: "display:flex;align-items:center;gap:8px" });
      function ur() {
        var e = p(function (e) {
            return e;
          }),
          t = e.initialized,
          n = e.users,
          r = e.addNewUserDrawerVisible,
          a = e.editUserDrawerVisible,
          l = e.verifyEmailDialogVisible,
          s = 6 - n.length,
          d = (0, o.useState)(),
          c = (0, i.Z)(d, 2),
          u = c[0],
          m = c[1],
          x = f();
        return t
          ? (0, O.jsx)(
              o.Fragment,
              null,
              (0, O.jsx)(
                Kn,
                null,
                (0, O.jsx)(
                  Jn,
                  null,
                  (0, O.jsx)(pn, null),
                  0 !== s &&
                    (0, O.jsx)(
                      Re,
                      {
                        "data-automation-id": "addMemberButton",
                        onClick: function () {
                          return x.startAddUser();
                        }
                      },
                      (0, O.jsx)(P.Trans, { id: "Add member" })
                    ),
                  0 === s &&
                    (0, O.jsx)(
                      pt,
                      {
                        message: (0, O.jsx)(
                          or,
                          { "data-automation-id": "addMemberTooltip" },
                          (0, O.jsx)(lr, null, (0, O.jsx)(dr, null, (0, O.jsx)(P.Trans, { id: "You've already invited 5 folks." }))),
                          (0, O.jsx)(
                            lr,
                            null,
                            (0, O.jsx)(
                              dr,
                              null,
                              (0, O.jsx)(P.Trans, { id: "Pro tip: To add someone new, cancel an invitation or remove someone." })
                            )
                          )
                        ),
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      (0, O.jsx)(
                        Re,
                        { "data-automation-id": "addMemberButtonDisabled", disabled: !0 },
                        (0, O.jsx)(P.Trans, { id: "Add member" })
                      )
                    )
                ),
                (0, O.jsx)(
                  Xn,
                  { "data-automation-id": "familyMemberList" },
                  (0, O.jsx)(
                    "thead",
                    null,
                    (0, O.jsx)(
                      er,
                      null,
                      (0, O.jsx)($n, null, (0, O.jsx)(P.Trans, { id: "Name" })),
                      (0, O.jsx)($n, null, (0, O.jsx)(P.Trans, { id: "Email" })),
                      (0, O.jsx)(
                        $n,
                        null,
                        (0, O.jsx)(
                          Qn,
                          null,
                          (0, O.jsx)(P.Trans, { id: "Status" }),
                          (0, O.jsx)(
                            pt,
                            {
                              message: (0, O.jsx)(
                                or,
                                { "data-automation-id": "statusTooltip" },
                                (0, O.jsx)(
                                  lr,
                                  null,
                                  (0, O.jsx)(sr, null, (0, O.jsx)(P.Trans, { id: "Active:" }), " "),
                                  (0, O.jsx)(
                                    dr,
                                    null,
                                    (0, O.jsx)(P.Trans, { id: "They've joined your account and logged in at least once." })
                                  )
                                ),
                                (0, O.jsx)(
                                  lr,
                                  null,
                                  (0, O.jsx)(sr, null, (0, O.jsx)(P.Trans, { id: "Pending:" }), " "),
                                  (0, O.jsx)(
                                    dr,
                                    null,
                                    (0, O.jsx)(P.Trans, { id: "An email has been sent, but they haven't yet activated their account." })
                                  )
                                )
                              ),
                              vertical: "bottom",
                              horizontal: "right"
                            },
                            (0, O.jsx)(qn, { "data-automation-id": "statusInfoIcon" })
                          )
                        )
                      ),
                      (0, O.jsx)($n, null, (0, O.jsx)(P.Trans, { id: "Last login" })),
                      (0, O.jsx)(
                        $n,
                        null,
                        (0, O.jsx)(
                          Qn,
                          null,
                          (0, O.jsx)(P.Trans, { id: "Role" }),
                          (0, O.jsx)(
                            pt,
                            {
                              message: (0, O.jsx)(
                                or,
                                { "data-automation-id": "roleTooltip" },
                                (0, O.jsx)(
                                  lr,
                                  null,
                                  (0, O.jsx)(
                                    dr,
                                    null,
                                    (0, O.jsx)(P.Trans, {
                                      id: "<0>Managers </0>can manage their own vault, invite and remove members, and create shared folders.",
                                      components: [(0, O.jsx)(sr, null)]
                                    })
                                  )
                                ),
                                (0, O.jsx)(
                                  lr,
                                  null,
                                  (0, O.jsx)(
                                    dr,
                                    null,
                                    (0, O.jsx)(P.Trans, {
                                      id: "<0>Members </0>can manage their own vault and create shared folders.",
                                      components: [(0, O.jsx)(sr, null)]
                                    })
                                  )
                                )
                              ),
                              vertical: "bottom",
                              horizontal: "right"
                            },
                            (0, O.jsx)(qn, { "data-automation-id": "roleInfoIcon" })
                          )
                        )
                      ),
                      (0, O.jsx)($n, null)
                    )
                  ),
                  (0, O.jsx)(
                    "tbody",
                    null,
                    n.map(function (e) {
                      return (0, O.jsx)(
                        tr,
                        {
                          key: e.email,
                          tabIndex: 0,
                          role: "button",
                          onClick: function () {
                            m(e), x.openEditUserDrawer();
                          },
                          onKeyPress: function (t) {
                            ("Enter" !== t.key && " " !== t.key) || (m(e), x.openEditUserDrawer());
                          }
                        },
                        (0, O.jsx)(nr, { "data-automation-id": "familyMemberName" }, e.name),
                        (0, O.jsx)(nr, { "data-automation-id": "familyMemberEmail" }, e.email),
                        (0, O.jsx)(
                          nr,
                          { "data-automation-id": "familyMemberStatus" },
                          e.invitePending
                            ? (0, O.jsx)(ar, null, (0, O.jsx)(P.Trans, { id: "Pending" }))
                            : (0, O.jsx)(rr, null, (0, O.jsx)(P.Trans, { id: "Active" }))
                        ),
                        (0, O.jsx)(
                          nr,
                          { "data-automation-id": "familyMemberLastLogin" },
                          (function (e) {
                            if (!e) return Sn.a._({ id: "Never" });
                            var t = (Date.now() - Date.parse(e)) / 1e3;
                            if (t < 60) return Sn.a._({ id: "Just now" });
                            if (t < 3600) {
                              var n = Math.ceil(t / 60);
                              return Sn.a._({ id: "{MINUTES} minutes ago", values: { MINUTES: n } });
                            }
                            if (t < 86400) {
                              var r = Math.ceil(t / 3600);
                              return Sn.a._({ id: "{HOURS} hours ago", values: { HOURS: r } });
                            }
                            if (t < 2592e3) {
                              var i = Math.ceil(t / 86400);
                              return Sn.a._({ id: "{DAYS} days ago", values: { DAYS: i } });
                            }
                            if (t < 31536e3) {
                              var a = Math.ceil(t / 2592e3);
                              return Sn.a._({ id: "{MONTHS} months ago", values: { MONTHS: a } });
                            }
                            var o = Math.ceil(t / 31536e3);
                            return Sn.a._({ id: "{YEARS} years ago", values: { YEARS: o } });
                          })(e.lastLoginDate)
                        ),
                        (0, O.jsx)(
                          nr,
                          { "data-automation-id": "familyMemberRole" },
                          e.isAdmin ? (0, O.jsx)(P.Trans, { id: "Manager" }) : (0, O.jsx)(P.Trans, { id: "Member" })
                        ),
                        (0, O.jsx)(
                          nr,
                          null,
                          (0, O.jsx)(
                            Re,
                            {
                              "data-automation-id": "sendInvitationButton",
                              variant: e.resendPending ? "contained" : "outlined",
                              color: "primary",
                              size: "xs",
                              style: {
                                marginRight: e.resendPending ? "-50px" : "default",
                                visibility: e.invitePending ? "visible" : "hidden"
                              },
                              onClick: function (t) {
                                e.invitePending && (t.stopPropagation(), x.resendInvite(e.email));
                              },
                              disabled: e.resendPending,
                              onKeyPress: function (e) {
                                e.stopPropagation();
                              },
                              type: "button"
                            },
                            (0, O.jsx)(
                              cr,
                              null,
                              (0, O.jsx)(ir, null),
                              e.resendPending ? (0, O.jsx)(P.Trans, { id: "Invitation sent" }) : (0, O.jsx)(P.Trans, { id: "Resend" })
                            )
                          )
                        )
                      );
                    })
                  )
                )
              ),
              r &&
                (0, O.jsx)(Ve, {
                  close: function () {
                    return x.closeAddUserDrawer();
                  }
                }),
              a &&
                u &&
                (0, O.jsx)(jt, {
                  user: u,
                  close: function () {
                    m(null), x.closeEditUserDrawer();
                  }
                }),
              l &&
                (0, O.jsx)(_n, {
                  onClose: function () {
                    return x.closeVerifyEmailDialog();
                  }
                })
            )
          : null;
      }
      var fr = ["title", "titleId"];
      function mr() {
        return (
          (mr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          mr.apply(this, arguments)
        );
      }
      function pr(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function xr(e, t) {
        var n = e.title,
          r = e.titleId,
          i = pr(e, fr);
        return o.createElement(
          "svg",
          mr(
            {
              width: 180,
              height: 180,
              viewBox: "0 0 180 180",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          An ||
            (An = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z",
              fill: "#FAF4DE"
            })),
          Fn ||
            (Fn = o.createElement("path", {
              d: "M47.4747 131.999C46.2975 131.998 45.1404 131.693 44.1161 131.113C43.0918 130.533 42.2351 129.697 41.6295 128.688C41.0239 127.678 40.6901 126.529 40.6604 125.352C40.6307 124.176 40.9062 123.011 41.4601 121.972L84.6516 41.0145C85.2331 39.9241 86.1 39.0123 87.1596 38.3765C88.2193 37.7407 89.4318 37.4048 90.6675 37.4048C91.9033 37.4048 93.1158 37.7407 94.1755 38.3765C95.2351 39.0123 96.102 39.9241 96.6835 41.0145L139.855 121.97C140.41 123.009 140.686 124.175 140.656 125.353C140.626 126.531 140.292 127.681 139.685 128.691C139.078 129.701 138.22 130.537 137.194 131.116C136.168 131.696 135.01 132 133.832 131.999H47.4747Z",
              fill: "#F0C936"
            })),
          Pn ||
            (Pn = o.createElement("path", {
              d: "M102.681 52.2661C101.555 51.4665 100.209 51.0372 98.8281 51.0378C97.5896 51.0403 96.3749 51.3776 95.3125 52.0141C94.2502 52.6506 93.3797 53.5626 92.7933 54.6534L51.5817 131.999H47.4747C46.2975 131.998 45.1404 131.693 44.1161 131.113C43.0918 130.533 42.2351 129.697 41.6295 128.688C41.0239 127.678 40.6901 126.529 40.6604 125.352C40.6307 124.176 40.9062 123.011 41.4601 121.972L84.6516 41.0145C85.2331 39.9241 86.1 39.0123 87.1596 38.3765C88.2193 37.7407 89.4318 37.4048 90.6675 37.4048C91.9033 37.4048 93.1158 37.7407 94.1755 38.3765C95.2351 39.0123 96.102 39.9241 96.6835 41.0145L102.687 52.269",
              fill: "#FAE8A7"
            })),
          Bn ||
            (Bn = o.createElement("path", {
              d: "M47.4747 131.999C46.2975 131.998 45.1404 131.693 44.1161 131.113C43.0918 130.533 42.2351 129.697 41.6295 128.688C41.0239 127.678 40.6901 126.529 40.6604 125.352C40.6307 124.176 40.9062 123.011 41.4601 121.972L84.6516 41.0145C85.2331 39.9241 86.1 39.0123 87.1596 38.3765C88.2193 37.7407 89.4318 37.4048 90.6675 37.4048C91.9033 37.4048 93.1158 37.7407 94.1755 38.3765C95.2351 39.0123 96.102 39.9241 96.6835 41.0145L139.855 121.97C140.41 123.009 140.686 124.175 140.656 125.353C140.626 126.531 140.292 127.681 139.685 128.691C139.078 129.701 138.22 130.537 137.194 131.116C136.168 131.696 135.01 132 133.832 131.999H47.4747Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeDasharray: "182 7 1 4"
            })),
          Vn ||
            (Vn = o.createElement("path", {
              d: "M92.2655 99.8418C92.1748 100.201 91.9668 100.52 91.6744 100.748C91.382 100.976 91.0219 101.099 90.6513 101.099C90.2806 101.099 89.9206 100.976 89.6282 100.748C89.3358 100.52 89.1278 100.201 89.0371 99.8418C82.5139 74.1333 82.7885 75.2923 82.7624 75.0351C82.6571 73.9357 82.7827 72.8264 83.1313 71.7783C83.4798 70.7303 84.0435 69.7667 84.7863 68.9494C85.5291 68.132 86.4346 67.4789 87.4446 67.032C88.4546 66.5851 89.5468 66.3542 90.6513 66.3542C91.7558 66.3542 92.848 66.5851 93.858 67.032C94.868 67.4789 95.7735 68.132 96.5163 68.9494C97.259 69.7667 97.8228 70.7303 98.1713 71.7783C98.5199 72.8264 98.6455 73.9357 98.5401 75.0351C98.5228 75.2923 98.7916 74.1275 92.2655 99.8418Z",
              fill: "#264887",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          zn ||
            (zn = o.createElement("path", {
              d: "M90.6517 121.51C89.3844 121.51 88.1454 121.135 87.0914 120.432C86.0373 119.728 85.2156 118.728 84.7301 117.557C84.2446 116.386 84.1171 115.098 84.3638 113.855C84.6104 112.612 85.2202 111.47 86.1159 110.573C87.0116 109.677 88.1531 109.066 89.3959 108.818C90.6388 108.57 91.9272 108.697 93.0983 109.181C94.2693 109.666 95.2704 110.487 95.975 111.54C96.6795 112.593 97.0559 113.832 97.0564 115.099C97.0557 116.798 96.3808 118.427 95.18 119.629C93.9793 120.831 92.3507 121.508 90.6517 121.51Z",
              fill: "#264887",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Hn ||
            (Hn = o.createElement("path", {
              d: "M37 147.5H143",
              stroke: "#EDBF0E",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "1 6 164 5"
            })),
          Nn ||
            (Nn = o.createElement("rect", {
              x: 145.645,
              y: 50.8787,
              width: 6.35515,
              height: 6.35516,
              stroke: "#EDBF0E",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Un ||
            (Un = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.1776 30.4394C24.9325 30.4394 26.3551 29.0167 26.3551 27.2618C26.3551 25.5069 24.9325 24.0842 23.1776 24.0842C21.4226 24.0842 20 25.5069 20 27.2618C20 29.0167 21.4226 30.4394 23.1776 30.4394Z",
              stroke: "#EDBF0E",
              strokeWidth: 2
            })),
          Wn ||
            (Wn = o.createElement("rect", {
              width: 6.35514,
              height: 6.35514,
              transform: "matrix(0.707106 -0.707107 0.707106 0.707107 37.7947 41.2883)",
              stroke: "#EDBF0E",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Gn ||
            (Gn = o.createElement("path", {
              d: "M55.8537 19.2648L61.892 25.3031",
              stroke: "#EDBF0E",
              strokeWidth: 2,
              strokeLinecap: "round"
            })),
          Yn ||
            (Yn = o.createElement("path", {
              d: "M61.6781 19.2648L55.6398 25.3031",
              stroke: "#EDBF0E",
              strokeWidth: 2,
              strokeLinecap: "round"
            }))
        );
      }
      var hr = o.forwardRef(xr);
      n.p;
      var Cr,
        gr,
        vr,
        br,
        yr,
        jr,
        Er,
        wr,
        kr,
        Lr,
        Or,
        Rr,
        _r,
        Zr,
        Dr,
        Mr,
        Ir,
        Tr,
        Sr,
        Ar,
        Fr,
        Pr,
        Br,
        Vr = (0, a.Z)("div", { target: "e18ys9812" })({
          name: "dih1v",
          styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px;width:100%;height:100%"
        }),
        zr = (0, a.Z)("div", { target: "e18ys9811" })({ name: "1ycck3l", styles: "font-weight:600;font-size:28px;line-height:36px" }),
        Hr = (0, a.Z)("div", { target: "e18ys9810" })(
          "font-weight:",
          function (e) {
            return e.bold ? 600 : 400;
          },
          ";font-size:18px;line-height:25px;"
        ),
        Nr = function () {
          return (0, O.jsx)(
            Vr,
            { "data-automation-id": "ErrorView" },
            (0, O.jsx)(hr, null),
            (0, O.jsx)(zr, null, (0, O.jsx)(P.Trans, { id: "We couldn't load your Families data" })),
            (0, O.jsx)(Hr, null, (0, O.jsx)(P.Trans, { id: "Something went wrong on our side." })),
            (0, O.jsx)(Hr, { bold: !0 }, (0, O.jsx)(P.Trans, { id: "We're working on solving the problem. Check back soon." }))
          );
        },
        Ur = ["title", "titleId"];
      function Wr() {
        return (
          (Wr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Wr.apply(this, arguments)
        );
      }
      function Gr(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
        }
        return i;
      }
      function Yr(e, t) {
        var n = e.title,
          r = e.titleId,
          i = Gr(e, Ur);
        return o.createElement(
          "svg",
          Wr(
            {
              width: 180,
              height: 180,
              viewBox: "0 0 180 180",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            i
          ),
          n ? o.createElement("title", { id: r }, n) : null,
          Cr ||
            (Cr = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180Z",
              fill: "#ECF5FB"
            })),
          gr ||
            (gr = o.createElement("rect", {
              width: 6,
              height: 6,
              transform: "matrix(0.707106 -0.707108 0.707106 0.707108 147 70.2427)",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          vr ||
            (vr = o.createElement("path", {
              d: "M100.705 25.7049L105.378 30.3778",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          br ||
            (br = o.createElement("path", {
              d: "M105.213 25.7049L100.54 30.3778",
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          yr ||
            (yr = o.createElement("rect", {
              x: 21,
              y: 99,
              width: 6,
              height: 6,
              stroke: "#B5D9F1",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          jr ||
            (jr = o.createElement("path", {
              d: "M97.3119 78.752L91.0897 72.5297C90.4939 71.9338 89.5274 71.9338 88.9316 72.5297C88.3357 73.1257 88.3357 74.092 88.9316 74.6878L95.1539 80.9101C95.9273 81.6834 95.9273 82.9421 95.1539 83.7157C94.3803 84.4893 93.1219 84.4891 92.3483 83.7157L89.2372 80.6045L86.126 77.4934C85.53 76.8974 84.5637 76.8974 83.968 77.4934C83.372 78.0894 83.372 79.0557 83.968 79.6514L90.1903 85.8737C91.172 86.8555 92.4616 87.3463 93.7512 87.3463C95.0406 87.3463 96.3304 86.8553 97.3121 85.8737C99.2755 83.9106 99.2755 80.7154 97.3119 78.752Z",
              fill: "#264887"
            })),
          Er ||
            (Er = o.createElement("path", {
              d: "M85.8739 90.19L79.6517 83.9677C79.0559 83.3718 78.0896 83.3718 77.4936 83.9677C76.8977 84.5637 76.8977 85.53 77.4936 86.1258L83.7159 92.3482C84.0906 92.7229 84.2968 93.2211 84.2968 93.7507C84.2968 94.2806 84.0904 94.7788 83.7159 95.1535C82.9423 95.927 81.6839 95.9268 80.9103 95.1535L74.688 88.9312C74.0921 88.3352 73.1258 88.3352 72.53 88.9312C71.934 89.5272 71.934 90.4935 72.53 91.0892L78.7523 97.3115C79.734 98.2935 81.0234 98.7843 82.3132 98.7841C83.6026 98.7841 84.8926 98.2931 85.8741 97.3115C86.8254 96.3605 87.3491 95.0955 87.3491 93.7505C87.3491 92.4058 86.8254 91.141 85.8739 90.19Z",
              fill: "#264887"
            })),
          wr ||
            (wr = o.createElement(
              "g",
              { filter: "url(#filter0_i_707_9726)" },
              o.createElement("path", {
                d: "M47.662 71.4848C45.3144 69.1461 45.3071 65.3471 47.6458 62.9995L62.9249 47.662C65.2636 45.3144 69.0626 45.3071 71.4102 47.6458L84.0454 60.2329L60.2972 84.0719L47.662 71.4848Z",
                fill: "white"
              })
            )),
          kr ||
            (kr = o.createElement("path", {
              d: "M47.662 71.4848C45.3144 69.1461 45.3071 65.3471 47.6458 62.9995L62.9249 47.662C65.2636 45.3144 69.0626 45.3071 71.4102 47.6458L84.0454 60.2329L60.2972 84.0719L47.662 71.4848Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Lr ||
            (Lr = o.createElement(
              "g",
              { filter: "url(#filter1_i_707_9726)" },
              o.createElement("path", {
                d: "M61.0559 89.9458C59.2716 88.1683 59.2661 85.2808 61.0436 83.4964L84.0582 60.3939C85.8358 58.6096 88.7233 58.604 90.5076 60.3816C92.292 62.1592 92.2975 65.0467 90.5199 66.831L67.5053 89.9335C65.7278 91.7179 62.8403 91.7234 61.0559 89.9458Z",
                fill: "white"
              })
            )),
          Or ||
            (Or = o.createElement("path", {
              d: "M61.0559 89.9458C59.2716 88.1683 59.2661 85.2808 61.0436 83.4964L84.0582 60.3939C85.8358 58.6096 88.7233 58.604 90.5076 60.3816C92.292 62.1592 92.2975 65.0467 90.5199 66.831L67.5053 89.9335C65.7278 91.7179 62.8403 91.7234 61.0559 89.9458Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Rr ||
            (Rr = o.createElement("path", {
              d: "M44.8338 54.1573C43.2687 52.5981 43.2639 50.0655 44.823 48.5004L48.4757 44.8338C50.0348 43.2687 52.5674 43.2639 54.1325 44.823L59.8373 50.5062L50.5387 59.8404L44.8338 54.1573Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          _r ||
            (_r = o.createElement(
              "g",
              { filter: "url(#filter2_i_707_9726)" },
              o.createElement("path", {
                d: "M42.5 43.4981C42.2239 43.223 42.223 42.7761 42.4981 42.5C42.7733 42.2238 43.2202 42.2229 43.4963 42.498L46.6243 45.6141L45.628 46.6142L42.5 43.4981Z",
                fill: "white"
              })
            )),
          Zr ||
            (Zr = o.createElement("path", {
              d: "M42.5 43.4981C42.2239 43.223 42.223 42.7761 42.4981 42.5C42.7733 42.2238 43.2202 42.2229 43.4963 42.498L46.6243 45.6141L45.628 46.6142L42.5 43.4981Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Dr ||
            (Dr = o.createElement("path", {
              d: "M54 69C54.8284 69 55.5 68.3284 55.5 67.5C55.5 66.6716 54.8284 66 54 66C53.1716 66 52.5 66.6716 52.5 67.5C52.5 68.3284 53.1716 69 54 69Z",
              fill: "#D32D27"
            })),
          Mr ||
            (Mr = o.createElement(
              "g",
              { filter: "url(#filter3_i_707_9726)" },
              o.createElement("path", {
                d: "M132.456 104.147C134.774 106.515 134.734 110.313 132.366 112.632L111.698 132.866C109.33 135.184 105.531 135.144 103.213 132.776L88.0714 117.309L117.314 88.6804L132.456 104.147Z",
                fill: "white"
              })
            )),
          Ir ||
            (Ir = o.createElement("path", {
              d: "M132.456 104.147C134.774 106.515 134.734 110.313 132.366 112.632L111.698 132.866C109.33 135.184 105.531 135.144 103.213 132.776L88.0714 117.309L117.314 88.6804L132.456 104.147Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Tr ||
            (Tr = o.createElement("path", {
              d: "M117.512 81.9327C119.274 83.7324 119.243 86.6198 117.444 88.3817L87.7861 117.417C85.9864 119.179 83.099 119.148 81.3371 117.349C79.5751 115.549 79.6057 112.662 81.4054 110.9L111.063 81.8643C112.863 80.1023 115.75 80.133 117.512 81.9327Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Sr ||
            (Sr = o.createElement(
              "g",
              { filter: "url(#filter4_i_707_9726)" },
              o.createElement("path", {
                d: "M133.256 123.962C134.801 125.541 134.775 128.073 133.196 129.619L129.498 133.239C127.919 134.785 125.387 134.758 123.841 133.179L118.208 127.425L127.623 118.208L133.256 123.962Z",
                fill: "white"
              })
            )),
          Ar ||
            (Ar = o.createElement("path", {
              d: "M133.256 123.962C134.801 125.541 134.775 128.073 133.196 129.619L129.498 133.239C127.919 134.785 125.387 134.758 123.841 133.179L118.208 127.425L127.623 118.208L133.256 123.962Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Fr ||
            (Fr = o.createElement(
              "g",
              { filter: "url(#filter5_i_707_9726)" },
              o.createElement("path", {
                d: "M135.456 134.65C135.729 134.928 135.724 135.375 135.446 135.648C135.167 135.921 134.72 135.916 134.448 135.637L131.359 132.482L132.368 131.495L135.456 134.65Z",
                fill: "white"
              })
            )),
          Pr ||
            (Pr = o.createElement("path", {
              d: "M135.456 134.65C135.729 134.928 135.724 135.375 135.446 135.648C135.167 135.921 134.72 135.916 134.448 135.637L131.359 132.482L132.368 131.495L135.456 134.65Z",
              stroke: "#264887",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "215.11 6.27 0.9 3.59"
            })),
          Br ||
            (Br = o.createElement(
              "defs",
              null,
              o.createElement(
                "filter",
                {
                  id: "filter0_i_707_9726",
                  x: 44.8966,
                  y: 44.8965,
                  width: 40.563,
                  height: 40.5896,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                o.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                o.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                o.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                o.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                o.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                o.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_707_9726" })
              ),
              o.createElement(
                "filter",
                {
                  id: "filter1_i_707_9726",
                  x: 58.7141,
                  y: 58.052,
                  width: 34.1354,
                  height: 34.2234,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                o.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                o.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                o.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                o.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                o.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                o.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_707_9726" })
              ),
              o.createElement(
                "filter",
                {
                  id: "filter2_i_707_9726",
                  x: 41.2924,
                  y: 41.2922,
                  width: 6.74622,
                  height: 6.73608,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                o.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                o.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                o.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                o.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                o.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.858824 0 0 0 0 0.92549 0 0 0 0 0.964706 0 0 0 1 0" }),
                o.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_707_9726" })
              ),
              o.createElement(
                "filter",
                {
                  id: "filter3_i_707_9726",
                  x: 86.6572,
                  y: 87.2661,
                  width: 48.5104,
                  height: 48.3113,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                o.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                o.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                o.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                o.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                o.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                o.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_707_9726" })
              ),
              o.createElement(
                "filter",
                {
                  id: "filter4_i_707_9726",
                  x: 116.794,
                  y: 116.794,
                  width: 18.6033,
                  height: 18.5864,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                o.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                o.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                o.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                o.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                o.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                o.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_707_9726" })
              ),
              o.createElement(
                "filter",
                {
                  id: "filter5_i_707_9726",
                  x: 129.945,
                  y: 130.081,
                  width: 6.71301,
                  height: 6.76855,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                o.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                o.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                o.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                o.createElement("feOffset", { dx: -5.37778, dy: -6.27407 }),
                o.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                o.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.858824 0 0 0 0 0.92549 0 0 0 0 0.964706 0 0 0 1 0" }),
                o.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_707_9726" })
              )
            ))
        );
      }
      var qr = o.forwardRef(Yr);
      n.p;
      var Qr = (0, a.Z)("div", { target: "e25gv7l2" })({
          name: "dih1v",
          styles: "display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px;width:100%;height:100%"
        }),
        Kr = (0, a.Z)("div", { target: "e25gv7l1" })({ name: "1ycck3l", styles: "font-weight:600;font-size:28px;line-height:36px" }),
        Jr = (0, a.Z)("div", { target: "e25gv7l0" })(
          "font-weight:",
          function (e) {
            return e.bold ? 600 : 400;
          },
          ";font-size:18px;line-height:25px;"
        ),
        Xr = function () {
          return (0, O.jsx)(
            Qr,
            { "data-testid": "OfflineView" },
            (0, O.jsx)(qr, null),
            (0, O.jsx)(Kr, null, (0, O.jsx)(P.Trans, { id: "It looks like you're offline..." })),
            (0, O.jsx)(Jr, null, (0, O.jsx)(P.Trans, { id: "Families is only available when you're connected to the internet." })),
            (0, O.jsx)(Jr, { bold: !0 }, (0, O.jsx)(P.Trans, { id: "Make sure you're online and then refresh this page." }))
          );
        },
        $r = (function (e) {
          return (e[(e.offline = 0)] = "offline"), (e[(e.online = 1)] = "online"), e;
        })($r || {}),
        ei = (0, a.Z)("div", { target: "e5by4on0" })(
          "position:absolute;top:",
          function (e) {
            return e ? "50px" : "0";
          },
          ";bottom:0;left:0;right:0;background:#ffffff;"
        ),
        ti = function (e) {
          var t = e.vault,
            n = f(),
            r = p(function (e) {
              return e;
            }),
            a = r.initialized,
            l = r.isErrorViewVisible,
            s = (0, o.useState)(navigator.onLine ? $r.online : $r.offline),
            d = (0, i.Z)(s, 2),
            c = d[0],
            u = d[1],
            m = (0, o.useState)(!1),
            h = (0, i.Z)(m, 2),
            C = h[0],
            g = h[1];
          return (
            (0, x.i)(
              function () {
                u($r.online);
              },
              function () {
                u($r.offline);
              }
            ),
            (0, o.useEffect)(
              function () {
                return (
                  n.initialize(),
                  n.getUsers(),
                  function () {
                    n.reset();
                  }
                );
              },
              [n]
            ),
            (0, o.useEffect)(
              function () {
                var e = t.document.querySelector(".dialog.responsive.vault-info-banner.migrationBanner");
                g(!!e);
              },
              [t.document]
            ),
            (0, O.jsx)(
              Ue.Provider,
              { value: t },
              (0, O.jsx)(
                ei,
                { "data-automation-id": "FamilyDashboard", isYellowBannerActive: C },
                (0, O.jsx)(F, null),
                c === $r.online && !l && (0, O.jsx)(o.Fragment, null, !a && (0, O.jsx)(K, null), a && (0, O.jsx)(ur, null)),
                c === $r.online && l && (0, O.jsx)(Nr, null),
                c === $r.offline && (0, O.jsx)(Xr, null)
              )
            )
          );
        };
    },
    84785: function (e, t, n) {
      n.d(t, {
        i: function () {
          return i;
        }
      });
      var r = n(23381),
        i = function (e, t) {
          return (0, r.useEffect)(function () {
            return (
              window.addEventListener("online", e),
              window.addEventListener("offline", t),
              function () {
                window.removeEventListener("online", e), window.removeEventListener("offline", t);
              }
            );
          }, []);
        };
    }
  }
]);
