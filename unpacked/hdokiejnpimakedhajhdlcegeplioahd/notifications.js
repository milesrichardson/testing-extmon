Notifications = (function () {
  var s = null,
    t = null,
    n = "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA(),
    a = function (e, t, s) {
      var a, n, i, i, r, o, c, a;
      t &&
        ((a = (n = e.find(".message")).text()),
        "string" == typeof t
          ? ((i = -1 < a.indexOf(t)), "" != a ? i || n.text(a + "   " + Strings.translateString(t)) : n.text(Strings.translateString(t)))
          : t instanceof Array && (n.empty(), n.append(t)),
        s &&
          s.text &&
          s.callback &&
          "function" == typeof s.callback &&
          ((i = a + "   " + Strings.translateString(t) + '<span class="message-retry-button">' + s.text + "</span>"),
          n.html(i),
          e.find(".title").text(""),
          (o = n.find(".message-retry-button")).on(
            "click",
            (c = function () {
              s.callback(), o.off("click", c), n.empty(), l();
            })
          )),
        e.css("top", 0));
    },
    i = function (e, t) {
      a(s, e, t);
    },
    e,
    r = function (e, t) {
      var s;
      t.css("top", -t.outerHeight()), t.find(".message").empty(), e && (e.stopPropagation(), e.preventDefault());
    },
    l = function (e) {
      r(e, s);
    },
    o = function (e) {
      r(e, _alertNotification);
    },
    c = function (e) {
      r(e, t);
    },
    d = null,
    u = function (e) {
      a(t, e),
        clearTimeout(d),
        (d = setTimeout(function () {
          c();
        }, 3e3));
    },
    g = function (e) {
      var t = ["notification"].concat(LPTools.getOption(e, "additionalClasses", [])),
        t = LPTools.createElement("div", { class: t.join(" "), id: e.id, role: "alert", "aria-atomic": "true" }),
        s = "undefined" != typeof dialogs && void 0 !== dialogs.baseURL ? dialogs.baseURL : "",
        a = LPTools.createElement("div", "messageCell"),
        a =
          (a.appendChild(LPTools.createElement("img", { src: n ? LPPlatform.getResourcePath(e.img) : s + e.img })),
          a.appendChild(LPTools.createElement("span", "title", e.title)),
          a.appendChild(LPTools.createElement("span", "message")),
          t.appendChild(a),
          LPTools.createElement("div", { class: "close midToneHover", title: Strings.translateString("Close") }));
      return (
        a.appendChild(LPTools.createElement("img", { src: n ? LPPlatform.getResourcePath(e.closeImg) : s + e.closeImg })),
        LPPlatform.addEventListener(a, "click", e.closeHandler),
        t.appendChild(a),
        document.body.appendChild(t),
        $(t)
      );
    },
    p;
  return {
    displayErrorMessage: i,
    displaySuccessMessage: u,
    displayAlertMessage: function (e, t) {
      a(_alertNotification, e, t);
    },
    closeAlertMessage: o,
    initialize: function (e) {
      (s = g(
        $.extend(e, {
          id: "errorMessage",
          img: "images/vault_4.0/Error.png",
          title: Strings.translateString("ERROR") + ": ",
          closeImg: "images/vault_4.0/Error_Close.png",
          closeHandler: l
        })
      )),
        (_alertNotification = g(
          $.extend(e, {
            id: "alertMessage",
            img: "images/vault_4.0/Error.png",
            closeImg: "images/vault_4.0/Error_Close.png",
            closeHandler: o
          })
        )),
        (t = g(
          $.extend(e, {
            id: "successMessage",
            img: "images/vault_4.0/Success.png",
            title: Strings.translateString("SUCCESS") + "! ",
            closeImg: "images/vault_4.0/Success_Close_v2.png",
            closeHandler: c
          })
        )),
        Topics.get(Topics.ERROR).subscribe(function (e) {
          i(e);
        }),
        Topics.get(Topics.SUCCESS).subscribe(function (e) {
          u(e);
        }),
        Topics.get(Topics.REQUEST_START).subscribe(function () {
          l();
        }),
        Topics.get(Topics.DIALOG_CLOSE).subscribe(function () {
          l();
        });
    }
  };
})();
var BreachedAlertBanner = {
    localStorageKey: "dismissed-breached-password-ids",
    initialize: function () {
      this.shouldDisplayBanner() && this.displayBanner();
    },
    shouldDisplayBanner: function () {
      var e = !1 === reduxApp.getState().user.disablePasswordAlerts,
        t = 0 < this.getBreachedPasswordIds().length;
      return e && t && this.isThereAnyNotDismissedBreachedSite();
    },
    isThereAnyNotDismissedBreachedSite: function () {
      var t = localStorage.getItem(this.localStorageKey);
      return (
        null === t && (t = []),
        void 0 !==
          this.getBreachedPasswordIds().find(function (e) {
            return -1 === t.indexOf(e);
          })
      );
    },
    getBreachedPasswordIds: function () {
      var e;
      return Object.values(window.reduxApp.getState().securityDashboard.passwordSecurityResults).reduce(function (e, t) {
        return t.risk.includes(6) && e.push(t.id), e;
      }, []);
    },
    displayBanner: function () {
      var e = document.createElement("div");
      e.classList.add("absolute", "right", "middlePosition", "vault-banner", "vault-banner-alert");
      var t,
        s = (document.getElementById("options").before(e), document.createElement("img")),
        s =
          ((s.src = "images/vault_4.0/banner/icon-alert.svg"),
          isSPA && (s.src = LPPlatform.getResourcePath(s.src)),
          s.classList.add("vault-banner-alert-icon"),
          e.appendChild(s),
          document.createElement("span")),
        s =
          (1 === this.getBreachedPasswordIds().length
            ? (s.textContent = Strings.translateString("1 site in your vault has been breached."))
            : (s.textContent = Strings.translateString("%s sites in your vault have been breached.", this.getBreachedPasswordIds().length)),
          s.classList.add("vault-banner-message"),
          e.appendChild(s),
          document.createElement("button")),
        s =
          ((s.textContent = Strings.translateString("View breached sites")),
          (s.onclick = function () {
            bg && bg.sendLpImprove && bg.sendLpImprove("security_dashboard_breach_alert_banner_clicked", { Action: "View Breached Sites" }),
              LPVault.openSecurityDashboard(),
              reduxApp.navigate("/vault/security/passwords");
          }),
          s.classList.add("vault-banner-alert-link"),
          e.appendChild(s),
          document.createElement("button")),
        a =
          (s.classList.add("vault-banner-icon-close"),
          (s.onclick = function () {
            bg && bg.sendLpImprove && bg.sendLpImprove("security_dashboard_breach_alert_banner_clicked", { Action: "Close" }),
              localStorage.setItem(BreachedAlertBanner.localStorageKey, JSON.stringify(BreachedAlertBanner.getBreachedPasswordIds())),
              e.remove();
          }),
          document.createElement("img"));
      (a.src = "images/vault_4.0/banner/icon-close.svg"),
        isSPA && (a.src = LPPlatform.getResourcePath(a.src)),
        s.appendChild(a),
        e.appendChild(s);
    }
  },
  PasswordChangeSuccessfulBanner = {
    displayed: !1,
    elementId: "vault-banner-password-change-successful",
    localStorageKey: "dismissed-breached-password-ids2",
    notification: null,
    initialize: function () {
      this.shouldDisplayBanner() && (this.displayBanner(), (this.displayed = !0), bg.sendLpImprove("Change password success modal seen"));
    },
    shouldDisplayBanner: function () {
      return (
        !document.getElementById(this.elementId) &&
        !0 === reduxApp.getState().securityDashboard.successNotification.passwordChangedSuccessInVault
      );
    },
    displayBanner: function () {
      var e = document.createElement("div");
      e.classList.add("absolute", "right", "middlePosition", "vault-banner", "vault-banner-success"), e.setAttribute("id", this.elementId);
      var t,
        s = (document.getElementById("options").before(e), document.createElement("img")),
        s =
          ((s.src = "images/vault_4.0/banner/icon-check.svg"),
          isSPA && (s.src = LPPlatform.getResourcePath(s.src)),
          s.classList.add("vault-banner-success-icon"),
          e.appendChild(s),
          document.createElement("span")),
        s =
          ((s.textContent = "You’ve changed your password. Your digital life just got more secure."),
          s.classList.add("vault-banner-success-message"),
          e.appendChild(s),
          document.createElement("button")),
        a =
          (s.classList.add("vault-banner-icon-close"),
          (s.onclick = function () {
            try {
              bg.reduxApp.closePasswordChangedSuccessVaultBanner();
            } catch (e) {
              reduxApp.getState().securityDashboard.successNotification.passwordChangedSuccessInVault = !1;
            }
            e.remove();
          }),
          document.createElement("img"));
      (a.src = "images/vault_4.0/banner/icon-notification-close-green.svg"),
        isSPA && (a.src = LPPlatform.getResourcePath(a.src)),
        s.appendChild(a),
        e.appendChild(s),
        (this.notification = e);
    }
  };
