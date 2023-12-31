(VaultState = {}),
  (function () {
    var t = null,
      i = null,
      o = null,
      c = null,
      s = null,
      l = null,
      g = null,
      n = "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA(),
      r = n ? 50 : 1e3,
      u = function (e) {
        var e;
        LPTools.getOption(e, "incrementAccountsVersion", !1) && ((e = LPTools.getOption(e, "incrementAccountsVersionAmount", 1)), (o += e));
      },
      a =
        (Topics.get(Topics.INITIALIZED).subscribe(function () {
          var e;
          (LPPlatform.lpIsExtension() && !bg.get("g_isie")) || n
            ? n
              ? bgInterface.contentWindow.webClient.init(function (e) {
                  (window.reduxApp = e), b(), top.Topics.get(top.Topics.SPA_IFRAME_WEB_CLIENT_INITIALIZED).publish();
                })
              : (((e = document.createElement("iframe")).src = n
                  ? LPPlatform.getResourcePath("webclient-vault.html")
                  : "webclient-vault.html"),
                (e.id = "webclient"),
                $(e).LP_hide(),
                document.body.appendChild(e),
                e.addEventListener("load", function () {
                  e.contentWindow.webClient.init(function (e) {
                    (window.reduxApp = e), b();
                  });
                }))
            : b();
        }),
        Topics.get(Topics.IDENTITY_ENABLE).subscribe(function (e) {
          i = e.getID();
        }),
        Topics.get(Topics.REQUEST_SUCCESS).subscribe(function (e) {
          u(e.requestSuccessOptions);
        }),
        Topics.get(Topics.UPDATE_VAULT_STATE).subscribe(u),
        function () {
          if (bg.get("lploggedin")) {
            if (l && bg.get("g_identity") !== i) {
              i = bg.get("g_identity");
              for (var e = 0, t = l.length; e < t; ++e) i === l[e].getID() && l[e].enable({ reprompt: !1 });
            }
            var n = parseInt(bg.get("g_local_accts_version"));
            o < n
              ? ((o = n), Topics.get(Topics.REFRESH_DATA).publish(), (s = null))
              : n < o
              ? (null === s && (s = new Date().getTime()), 15e3 < new Date().getTime() - s && ((s = null), (o = n)))
              : (s = null),
              c !== bg.get("g_showcredmon") && ((c = bg.get("g_showcredmon")), Topics.get(Topics.REFRESH_PREFERENCES).publish());
          } else
            Topics.get(Topics.CLEAR_DATA).publish(),
              clearInterval(g),
              (g = setInterval(function () {
                d();
              }, r));
        }),
      p =
        ((VaultState.incrementAccountsVersion = function () {
          ++o;
        }),
        (VaultState.setAccountsVersion = function (e) {
          o = e;
        }),
        (VaultState.setIdentities = function (e) {
          l = e;
        }),
        function () {
          return (
            bg &&
            bg.get("lploggedin") &&
            -1 < parseInt(bg.get("g_local_accts_version")) &&
            (!n || (bg.get("loginCheckFinished") && reduxApp && -1 < reduxApp.getState().encryptedVaultDataSource.vaultVersion))
          );
        }),
      d = function (e) {
        return (
          !!p() &&
          ((t = bg.get("lploggedin")),
          (i = bg.get("g_identity")),
          (o = parseInt(bg.get("g_local_accts_version"))),
          (c = bg.get("g_showcredmon")),
          Topics.get(Topics.LOGIN).publish({ fadeIn: void 0 === e || e }),
          clearInterval(g),
          $("#creditMonitoringMenuItem").show(),
          (!LPProxy.isFreeUser() && !LPProxy.isExpiredUser() && -1 == navigator.userAgent.indexOf(" Edge/")) ||
            bg.get("g_has_credit_monitoring_premium") ||
            $("#creditMonitoringMenuItem").hide(),
          (g = setInterval(function () {
            a();
          }, r)),
          !0)
        );
      },
      b = function () {
        d(!1) ||
          (g = setInterval(function () {
            d();
          }, r));
      };
  })();
