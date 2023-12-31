!(function (i) {
  var a = {},
    e = function () {
      for (var e in a) clearTimeout(a[e]);
      a = {};
    },
    t,
    c,
    l,
    u,
    p,
    g,
    s,
    n;
  Topics.get(Topics.REFRESH_DATA).subscribe(e),
    Topics.get(Topics.CLEAR_DATA).subscribe(e),
    (i.getNewRequestID =
      ((t = 0),
      function () {
        return ++t;
      })),
    (i.makeRequest =
      ((c = function (r, o) {
        return function () {
          for (var e = 0, t = r.length; e < t; ++e) r[e].unlock();
          o && o.apply(window, arguments);
        };
      }),
      (l = function (r, o) {
        return function () {
          for (var e = 0, t = r.length; e < t; ++e) r[e].lockForUpdate();
          o.apply(window, arguments);
        };
      }),
      (u = function (r, t) {
        var o = function (e) {
          try {
            Topics.get(Topics.REQUEST_SUCCESS).publish(r),
              t && (clearTimeout(t), delete a[r.requestID]),
              e && Topics.get(Topics.SUCCESS).publish(e);
          } catch (e) {
            LPPlatform.logException(e);
          }
        };
        return r && r.success
          ? function () {
              var e = arguments,
                t = r.successMessage;
              0 < e.length && "string" == typeof e[0] && ((t = void 0 === t ? e[0] : t), (e = Array.prototype.slice.call(e, 1)));
              try {
                r.success.apply(window, e);
              } catch (e) {
                LPPlatform.logException(e);
              }
              o(t);
            }
          : o;
      }),
      (p = function (r, o) {
        var t = function (e, t) {
          try {
            switch (
              (o && (clearTimeout(o), delete a[r.requestID]),
              "object" == typeof t && (e = s(t)),
              Topics.get(Topics.REQUEST_ERROR).publish(r),
              e)
            ) {
              case "noDefaultMessage":
                return;
              case "throttled":
                return n(t);
              case "notoken":
                e = Strings.translateString("No token was provided. Request could not be completed.");
                break;
              case "session_expired":
                e = Strings.translateString("ErrorSessionMsg");
                break;
              case "not_allowed":
                e = Strings.translateString("Your Shared Folder action failed. Please check your permissions before trying again");
                break;
              case "invalidxml":
                e = Strings.translateString("Invalid XML response.");
                break;
              case "invalidjson":
                e = Strings.translateString("Invalid JSON response.");
                break;
              case "offline":
                e = Strings.translateString("This request cannot be completed because you are currently offline.");
                break;
              case "1_to_1_restricted_for_free":
                LPVault.closeShareDialog(), (e = LPVault.openRestrictedSharingDialog());
                break;
              case "policy":
                e = Strings.translateString("Sorry, this operation is not allowed by a policy.");
                break;
              case "shouldverifyemail":
                dialogs.verifyEmail.open({ email: bg.get("g_username") }), (e = null);
                break;
              case void 0:
                e = Strings.Vault.UNEXPECTED_ERROR;
            }
            Topics.get(Topics.ERROR).publish(e);
          } catch (e) {
            LPPlatform.logException(e);
          }
        };
        return r && r.error
          ? r.shouldverifyemail
            ? void dialogs.verifyEmail.open({ email: bg.get("g_username") })
            : function (e) {
                t(e), r.error();
              }
          : t;
      }),
      (g = function (t) {
        return function (e) {
          Topics.get(Topics.REQUEST_STATUS).publish(e, t);
        };
      }),
      (s = function (e) {
        var t;
        return e && void 0 !== e.__raven_xhr
          ? (t = e.__raven_xhr).status_code && 429 == t.status_code
            ? "throttled"
            : Strings.Vault.UNEXPECTED_ERROR
          : (console.log("Unable to read error response object."), e);
      }),
      (n = function (e) {
        var e, t, r, o;
        e && void 0 !== e.__raven_xhr
          ? ((e = e.__raven_xhr.url),
            (t = Strings.translateString("Too many requests were made in a short time. Please try again later.")),
            (r = "Request to " + e + " was throttled."),
            (function (e) {
              return -1 < e.indexOf("deliver_and_add.php") || -1 < e.indexOf("show.php");
            })(e)
              ? Topics.get(Topics.ERROR).publish(t)
              : console.log(r),
            LPPlatform.logException(r))
          : console.log("Request to unknown url was throttled.");
      }),
      function (e, t) {
        var r;
        if (t.confirm)
          (r = t.confirm),
            delete t.confirm,
            (r.handler = function () {
              i.makeRequest(e, t);
            }),
            Topics.get(Topics.CONFIRM).publish(r);
        else {
          t.requestID = i.getNewRequestID();
          var r = null,
            o,
            o =
              (LPTools.getOption(t, "showTimeWarning", !0) &&
                ((r = setTimeout(
                  function () {
                    LPTools.getOption(t, "noDefaultMessage", !1)
                      ? s("noDefaultMessage")
                      : s(Strings.translateString("Sorry, this request is taking longer than normal."));
                  },
                  LPTools.getOption(t, "showTimeWarningTimeout", 3e4)
                )),
                (a[t.requestID] = r)),
              t.items &&
                LPTools.getOption(t, "lockItems", !1) &&
                ((o = t.items) instanceof Array || (o = [o]),
                (e = l(o, e)),
                (t.success = c(o, t.success)),
                (t.error = c(o, t.error)),
                t.confirm) &&
                (t.confirm.closeHandler = c(o)),
              u(t, r)),
            s = p(t, r),
            n;
          t.params
            ? (n = [{ params: t.params, requestArgs: t.requestArgs, success: o, error: s, status: t.status ? g(t) : null }])
            : ((n = (n = LPTools.getOption(t, "parameters", [])) instanceof Array ? n : [n]).push(o), n.push(s)),
            Topics.get(Topics.REQUEST_START).publish(t);
          try {
            e.apply(window, n);
          } catch (e) {
            LPPlatform.logException(e), s(Strings.Vault.UNEXPECTED_ERROR);
          }
        }
      })),
    (i.makeDataRequest = function (e, t) {
      i.makeRequest(e, $.extend(!0, t, { dialogRequest: !1 }));
    }),
    (i.makeUpdateRequest = function (e, t) {
      i.makeRequest(e, $.extend(!0, t, { requestSuccessOptions: { incrementAccountsVersion: !0 } }));
    }),
    (i.makeLockItemUpdateRequest = function (e, t) {
      this.makeUpdateRequest(e, $.extend(t, { lockItems: !0 }));
    });
})((LPRequest = {}));
