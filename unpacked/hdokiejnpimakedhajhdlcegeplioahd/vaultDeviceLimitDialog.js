var VaultDeviceLimitDialog = function (e) {
  Dialog.call(this, e, {
    additionalHeaderClasses: [],
    dynamicHeight: !0,
    buttonsInsideContent: !0,
    closeButtonEnabled: !1,
    hidePreviousDialogs: !0,
    overlayDialog: !0,
    blurOverlay: !0
  });
};
(VaultDeviceLimitDialog.prototype = Object.create(Dialog.prototype)),
  ((VaultDeviceLimitDialog.prototype.constructor = VaultDeviceLimitDialog).prototype.initialize = function (e, t) {
    Dialog.prototype.initialize.apply(this, arguments);
    var i = this;
    if ("/acctsiframe.php" !== location.pathname) {
      var n = document.querySelector("#vaultDeviceLimitDialog .media__figure img"),
        r = document.querySelector("#vaultDeviceLimitDialog .message"),
        s = document.querySelector("#vaultDeviceLimitDialog .title"),
        a = document.getElementById("switchingYourDeviceLink"),
        o = document.getElementById("lastPassPremiumLink"),
        c = document.getElementById("setDevice"),
        l = document.getElementById("paywallUpgradeButton"),
        u = document.querySelector("#vaultDeviceLimitDialog .device__type"),
        g = Number(bg.get("g_primary_device_switches_left")),
        p = "Vault Pop Up",
        m = "Desktop";
      try {
        localStorage.setItem(bg.get("g_username_hash") + "LPUserHasMetVaultDeviceLimitRestriction", bg.get("g_is_restricted"));
      } catch (e) {}
      var d = function () {
          var e = bg.get("g_username_hash") + "LPNotificationSuccessMessage",
            t;
          2 < g && (t = Strings.translateString("You switched to computer: %s switches left", g - 1)),
            2 === g && (t = Strings.translateString("You switched to computer: 1 switch left")),
            1 === g && (t = Strings.translateString("You made the final switch to computer"));
          try {
            t && localStorage.setItem(e, t);
          } catch (e) {}
        },
        y = function () {
          1 === g
            ? bg.sendLpImprove("mdpw_last_switch_confirmation_clicked", { Action: "Confirm", CurrentDevice: m, Source: p })
            : bg.sendLpImprove("mdpw_paywall_clicked", { Action: "Switch", CurrentDevice: m, Source: p, SwitchesLeft: g }),
            document.getElementById("spinner").classList.remove("is-hidden"),
            bg.setPrimaryDevice(
              function (e) {
                top.LPPlatform &&
                  "function" == typeof top.LPPlatform.isSPA &&
                  e &&
                  e.pwdeckey &&
                  reduxApp.storeUserSessionRestoreKey(bg.get("g_username"), bg.get("g_local_key"), e.pwdeckey),
                  LPProxy.refreshSites(),
                  d(),
                  location.reload();
              },
              function () {
                document.getElementById("spinner").classList.add("is-hidden"),
                  i.close(),
                  Notifications.displayErrorMessage(
                    Strings.translateString("Something went wrong. We couldn’t switch your device type. Please try again.")
                  );
              }
            );
        },
        h = function () {
          reduxApp && LPProxy.isExpiredFamilyUser()
            ? (i.close(), reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Multi Device Paywall"))
            : LPVault.upgradeToPremiumAction({
                self: function () {
                  bg.sendLpImprove("mdpw_paywall_clicked", {
                    feature: "None",
                    action: "Purchase",
                    userType: _userType,
                    product: "Premium",
                    source: "Vault Banner"
                  });
                },
                apple: function () {
                  i.close();
                }
              });
        },
        S = function () {
          bg.sendLpImprove("mdpw_paywall_clicked", { Action: "Dismiss", CurrentDevice: m, Source: p, SwitchesLeft: g }),
            i.close(),
            w(g),
            bg.get("g_display_premium_retrial_offer") &&
              setTimeout(function () {
                LPVault.openRetrialDialog();
              }, 1500);
        },
        v =
          ((a.style.display = "block"), (o.style.display = "none"), Strings.translateString("Go Premium for only <currency><price>/month")),
        v,
        f =
          ((v = (v = v.replace("<price>", t.price)).replace("<currency>", t.currency)),
          (l.innerText = v),
          l.addEventListener("click", h),
          (c.innerText = Strings.translateString("Switch to computer")),
          c.addEventListener("click", y),
          document.getElementById("closeDeviceLimitDialog").addEventListener("click", S),
          function () {
            w(-1);
          }),
        w = function (e) {
          switch (((u.style.display = "block"), e)) {
            case 0:
              (s.innerText = Strings.translateString("%s device switches left", 0)),
                (r.innerHTML = Strings.translateString(
                  "%sGo Premium%s for unlimited access on both mobile and computer.",
                  "<span>",
                  "</span>"
                )),
                (n.src = "images/vault_4.0/paywall/switch-device-icon-red-light.png"),
                (o.style.display = "block"),
                (a.style.display = "none"),
                (l.innerText = Strings.translateString("Cancel")),
                (c.innerText = v),
                l.removeEventListener("click", h),
                l.addEventListener("click", S),
                c.removeEventListener("click", y),
                c.addEventListener("click", h),
                reduxApp &&
                  LPProxy.isExpiredFamilyUser() &&
                  ((r.innerHTML = Strings.translateString(
                    "%sUpgrade to Families or Premium%s for unlimited access on both mobile and computer.",
                    "<b>",
                    "</b>"
                  )),
                  (c.innerText = Strings.translateString("Upgrade now")));
              break;
            case 1:
              (s.innerText = Strings.translateString("1 device switch left")),
                reduxApp && LPProxy.isExpiredFamilyUser()
                  ? ((r.innerHTML = Strings.translateString(
                      "Please take a minute to %sthink about how you use LastPass.%s This is your last switch. %sUpgrade to Families or Premium%s for unlimited access.",
                      "<b>",
                      "</b>",
                      "<b>",
                      "</b>"
                    )),
                    (l.innerText = Strings.translateString("Upgrade now")))
                  : (r.innerHTML = Strings.translateString(
                      "Please take a minute to %sthink about how you use LastPass.%s This is your last switch. Go Premium for unlimited access.",
                      "<span>",
                      "</span>"
                    )),
                (n.src = "images/vault_4.0/paywall/switch-device-icon-yellow-light.png"),
                c.removeEventListener("click", y),
                c.addEventListener("click", f);
              break;
            case -1:
              i.close(),
                setTimeout(function () {
                  i.open();
                }, 250),
                (s.innerText = Strings.translateString("Switch to computer only?")),
                reduxApp && LPProxy.isExpiredFamilyUser()
                  ? ((u.style.display = "none"),
                    (r.innerHTML = Strings.translateString(
                      "%sThis is your last opportunity to switch!%s After this switch, you’ll be able to use LastPass for free on computers, but not on mobile devices. %sUpgrade to Families or Premium%s for unlimited access.",
                      "<b>",
                      "</b>",
                      "<b>",
                      "</b>"
                    )),
                    (l.innerText = Strings.translateString("Upgrade now")))
                  : (r.innerHTML = Strings.translateString(
                      "%sThis is your last opportunity to switch!%s After this switch, you’ll be able to use LastPass for free on computers, but not on mobile devices.",
                      "<span>",
                      "</span>"
                    )),
                (n.src = "images/vault_4.0/paywall/switch-illustration.png"),
                (c.innerText = Strings.translateString("Yes, make the final switch")),
                c.removeEventListener("click", f),
                c.addEventListener("click", y);
              break;
            case 2:
              (s.innerText = Strings.translateString("%s device switches left", 2)),
                reduxApp && LPProxy.isExpiredFamilyUser()
                  ? ((r.innerHTML = Strings.translateString(
                      "You can switch your device type %s2 more times%s to find the right option for you. %sUpgrade to Families or Premium%s for unlimited access.",
                      "<b>",
                      "</b>",
                      "<b>",
                      "</b>"
                    )),
                    (l.innerText = Strings.translateString("Upgrade now")))
                  : (r.innerHTML = Strings.translateString(
                      "You can switch your device type %s2 more times%s to find the right option for you. Go Premium for unlimited access.",
                      "<span>",
                      "</span>"
                    )),
                (n.src = "images/vault_4.0/paywall/switch-device-icon-blue-light.png");
              break;
            default:
              (s.innerText = Strings.translateString("%s device switches left", g)),
                reduxApp && LPProxy.isExpiredFamilyUser()
                  ? ((r.innerHTML = Strings.translateString(
                      "You can only use LastPass for free %son one device type%s. Switch up to %s times to find the right option for you. %sUpgrade to Families or Premium%s for unlimited access.",
                      "<b>",
                      "</b>",
                      g,
                      "<b>",
                      "</b>"
                    )),
                    (l.innerText = Strings.translateString("Upgrade now")))
                  : (r.innerHTML = Strings.translateString(
                      "You can only use LastPass for free on %sone type of device.%s Switch up to %s times to find the right option for you.",
                      "<span>",
                      "</span>",
                      g
                    )),
                (n.src = "images/vault_4.0/paywall/switch-device-icon-blue-light.png");
          }
        };
      w(g);
    }
  });
