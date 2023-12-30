ExtensionLicenseExpiration = (function (w) {
  var n,
    t,
    i,
    r,
    s,
    a,
    e,
    d,
    k = function (e, n) {
      var t = JSON.parse(localStorage.getItem("expiredData"));
      null === t ? ((t = {})[e] = n) : (t[e] = n), localStorage.setItem("expiredData", JSON.stringify(t));
    },
    o,
    l,
    p,
    g,
    m,
    c,
    S,
    x,
    u,
    L;
  return {
    initialize: function () {
      var e;
      (n = bg.get("LPContentScriptFeatures").license_expiration),
        (t = LPProxy.getAccountClass()),
        (i = bg.get("g_premium_trial_exp_days")),
        (r = bg.get("g_company_trial_exp_days")),
        (s = bg.get("g_company_license_exp_days")),
        (a = bg.get("g_company_renewalstatus")),
        360 < s && null !== JSON.parse(localStorage.getItem("expiredData")) && localStorage.removeItem("expiredData");
    },
    showExpiration: function (e, n, t, i) {
      var r = $(w.body),
        s = "license_expiration_seen",
        a = "license_expiration_upgrade",
        d = "license_expiration_learn_more",
        o = "license_expiration_dismiss",
        l,
        p = document.getElementById("notificationContainer"),
        g = LPTools.createElement("div"),
        m = LPTools.createElement("p"),
        c = LPTools.createElement("button"),
        S = LPTools.createElement("a"),
        x =
          (g.setAttribute("id", "expirationTextContainer"),
          m.setAttribute("id", "expirationText"),
          c.setAttribute("id", "expirationUpgradeButton"),
          S.setAttribute("id", "expirationLearnMore"),
          document.getElementById("panelContainer")),
        u = LPTools.createElement("h1"),
        L = LPTools.createElement("p"),
        E = LPTools.createElement("span"),
        T = LPTools.createElement("a"),
        v = LPTools.createElement("div", "features"),
        b = LPTools.createElement("div", "feature one"),
        f = LPTools.createElement("div", "feature two"),
        P = LPTools.createElement("div", "feature three"),
        h = LPTools.createElement("div", "buttons"),
        C = LPTools.createElement("button", "try-btn"),
        y = LPTools.createElement("button", "no-thanks-btn"),
        I = function () {
          $("#notificationContainer").empty(), g.appendChild(m), g.appendChild(S), p.appendChild(g), p.appendChild(c);
        },
        _ = function () {
          $("#panelContainer").empty(),
            L.appendChild(E),
            L.appendChild(T),
            v.appendChild(b),
            v.appendChild(f),
            v.appendChild(P),
            h.appendChild(C),
            h.appendChild(y),
            x.appendChild(u),
            x.appendChild(L),
            x.appendChild(v),
            x.appendChild(h);
        };
      switch (e) {
        case "Enterprise Admin":
          void 0 !== t && t < 1
            ? (_(),
              (l =
                ("trial" === n
                  ? ((u.innerText = Strings.translateString("Your LastPass Enterprise trial expired.")),
                    (E.innerText = Strings.translateString("Upgrade now to avoid losing LastPass Enterprise features.")),
                    (C.innerText = Strings.translateString("Upgrade to LastPass Enterprise")),
                    (T.innerText = Strings.translateString("Learn More")))
                  : ((u.innerText = Strings.translateString("Your Enterprise License has expired.")),
                    (E.innerText = Strings.translateString("Renew now to avoid losing LastPass Enterprise features.")),
                    (T.innerText = Strings.translateString("Learn More")),
                    (C.innerText = Strings.translateString("Renew LastPass Enterprise"))),
                (y.innerText = Strings.translateString("No Thanks")),
                (b.innerText = Strings.translateString("Federated Login with AD Sync")),
                (f.innerText = Strings.translateString("SAML Single Sign-On")),
                (P.innerText = Strings.translateString("Advanced Reporting")),
                "dismissedEnterpriseExpired")),
              r.addClass("panelIsActive licenseExpired"),
              x.classList.add("enterpriseExpired"),
              bg.sendLpImprove(s),
              C.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openenterprisepayment();
              }),
              T.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }),
              y.addEventListener("click", function () {
                bg.sendLpImprove(o), r.removeClass("panelIsActive licenseExpired"), ExtensionDropdown.setSize(), k(l, 1);
              }))
            : (void 0 !== t && t <= 30 && 1 !== i
                ? (I(),
                  (m.innerText =
                    1 === t
                      ? Strings.translateString("You have licenses expiring in 1 day")
                      : Strings.translateString("You have licenses expiring in %d days", t)),
                  (c.innerText = Strings.translateString("Renew")),
                  (S.innerText = Strings.translateString("Learn More")),
                  r.addClass("expirationSet"),
                  bg.sendLpImprove(s))
                : (I(),
                  (m.innerText = Strings.translateString("Your LastPass Enterprise trial expires in %d days.", t)),
                  (c.innerText = Strings.translateString("Upgrade")),
                  (S.innerText = Strings.translateString("Learn More")),
                  bg.sendLpImprove(s),
                  r.addClass("expirationSet")),
              c.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openURL(bg.get("base_url") + "company/#!settings/company-profile");
              }),
              S.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }));
          break;
        case "Teams Admin":
          void 0 !== t && t < 1
            ? (_(),
              (l =
                ("trial" === n
                  ? ((u.innerText = Strings.translateString("Your Teams License has expired.")),
                    (E.innerText = Strings.translateString("Upgrade now to avoid losing LastPass Teams features.")),
                    (C.innerText = Strings.translateString("Upgrade to LastPass Teams")))
                  : ((u.innerText = Strings.translateString("Your Teams License has expired.")),
                    (E.innerText = Strings.translateString("Renew now to avoid losing LastPass Teams features.")),
                    (C.innerText = Strings.translateString("Renew LastPass Teams"))),
                (T.innerText = Strings.translateString("Learn More")),
                (y.innerText = Strings.translateString("No Thanks")),
                (b.innerText = Strings.translateString("Admin Console")),
                (f.innerText = Strings.translateString("User Management")),
                (P.innerText = Strings.translateString("Increased Security Policies")),
                "dismissedTeamsExpired")),
              r.addClass("panelIsActive licenseExpired"),
              x.classList.add("teamsExpired"),
              bg.sendLpImprove(s),
              C.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openteamspayment();
              }),
              T.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }),
              y.addEventListener("click", function () {
                bg.sendLpImprove(o), r.removeClass("panelIsActive licenseExpired"), ExtensionDropdown.setSize(), k(l, 1);
              }))
            : (void 0 !== t && t <= 30 && 1 !== i
                ? (I(),
                  (m.innerText =
                    1 === t
                      ? Strings.translateString("You have licenses expiring in 1 day")
                      : Strings.translateString("You have licenses expiring in %d days", t)),
                  (c.innerText = Strings.translateString("Renew")))
                : (I(),
                  (m.innerText = Strings.translateString("Your LastPass Teams trial expires in %d days.", t)),
                  (c.innerText = Strings.translateString("Upgrade"))),
              (S.innerText = Strings.translateString("Learn More")),
              r.addClass("expirationSet"),
              bg.sendLpImprove(s),
              c.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openURL(bg.get("base_url") + "company/#!settings/team-profile");
              }),
              S.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }));
          break;
        case "Family Admin":
          void 0 !== t && t < 1
            ? (_(),
              "trial" === n
                ? ((u.innerText = Strings.translateString("Your LastPass Families trial expired.")),
                  (E.innerText = Strings.translateString("Upgrade now to avoid losing LastPass Families features.")),
                  (C.innerText = Strings.translateString("Upgrade to LastPass Families")),
                  (T.innerText = Strings.translateString("Learn More")),
                  (y.innerText = Strings.translateString("No Thanks")),
                  (b.innerText = Strings.translateString("Six Premium Licenses")),
                  (f.innerText = Strings.translateString("Family Manager Dashboard")),
                  (P.innerText = Strings.translateString("Unlimited Shared Folders")),
                  (l = "dismissedFamiliesExpired"))
                : void 0 !== t &&
                  t < 1 &&
                  1 !== i &&
                  ((u.innerText = Strings.translateString("Your Families License has expired.")),
                  (E.innerText = Strings.translateString("Renew now to avoid losing LastPass Families features.")),
                  (C.innerText = Strings.translateString("Renew LastPass Families")),
                  (T.innerText = Strings.translateString("Learn More")),
                  (y.innerText = Strings.translateString("No Thanks")),
                  (b.innerText = Strings.translateString("Six Premium Licenses")),
                  (f.innerText = Strings.translateString("Family Manager Dashboard")),
                  (P.innerText = Strings.translateString("Unlimited Shared Folders")),
                  (a = "license_expired_upgrade_families"),
                  (d = "license_expired_learn_more_families"),
                  (o = "license_expired_dismiss_families"),
                  (l = "dismissedFamiliesExpired"),
                  (s = "license_expired_seen_families")),
              r.addClass("panelIsActive licenseExpired"),
              x.classList.add("familiesExpired"),
              bg.sendLpImprove(s),
              C.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openfamiliespayment();
              }),
              T.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }),
              y.addEventListener("click", function () {
                bg.sendLpImprove(o), r.removeClass("panelIsActive licenseExpired"), ExtensionDropdown.setSize(), k(l, 1);
              }))
            : (I(),
              (m.innerText = Strings.translateString("Your LastPass Families trial expires in %d days.", t)),
              (c.innerText = Strings.translateString("Upgrade")),
              (S.innerText = Strings.translateString("Learn More")),
              r.addClass("expirationSet"),
              bg.sendLpImprove(s),
              c.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openfamiliespayment();
              }),
              S.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }));
          break;
        case "Premium Trial User":
          void 0 !== t && t < 1
            ? (_(),
              (u.innerText = Strings.translateString("Your LastPass Premium trial expired.")),
              (E.innerText = Strings.translateString("Upgrade now to avoid losing LastPass Premium features.")),
              (C.innerText = Strings.translateString("Upgrade to LastPass Premium")),
              (T.innerText = Strings.translateString("Learn More")),
              (y.innerText = Strings.translateString("No Thanks")),
              (b.innerText = Strings.translateString("Unlimited 1:1 Password Sharing")),
              (f.innerText = Strings.translateString("Emergency Access")),
              (P.innerText = Strings.translateString("Two-Factor Authentication")),
              (l = "dismissedPremiumTrialExpired"),
              r.addClass("panelIsActive licenseExpired"),
              x.classList.add("premiumExpired"),
              bg.sendLpImprove(s),
              C.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openpremium();
              }),
              T.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }),
              y.addEventListener("click", function () {
                bg.sendLpImprove(o), r.removeClass("panelIsActive licenseExpired"), ExtensionDropdown.setSize(), k(l, 1);
              }))
            : (I(),
              (m.innerText = Strings.translateString("Your LastPass Premium trial expires in %d days.", t)),
              (c.innerText = Strings.translateString("Upgrade")),
              (S.innerText = Strings.translateString("Learn More")),
              r.addClass("expirationSet"),
              bg.sendLpImprove(s),
              c.addEventListener("click", function () {
                bg.sendLpImprove(a), bg.openpremium();
              }),
              S.addEventListener("click", function () {
                bg.sendLpImprove(d), bg.openpricing();
              }));
          break;
        case "Free User":
          void 0 !== t &&
            -30 <= t &&
            (_(),
            (u.innerText = Strings.translateString("Your LastPass Premium trial expired.")),
            (E.innerText = Strings.translateString("Upgrade now to avoid losing LastPass Premium features.")),
            (C.innerText = Strings.translateString("Upgrade to LastPass Premium")),
            (T.innerText = Strings.translateString("Learn More")),
            (y.innerText = Strings.translateString("No Thanks")),
            (b.innerText = Strings.translateString("Unlimited 1:1 Password Sharing")),
            (f.innerText = Strings.translateString("Emergency Access")),
            (P.innerText = Strings.translateString("Two-Factor Authentication")),
            (l = "dismissedPremiumTrialExpired"),
            r.addClass("panelIsActive licenseExpired"),
            x.classList.add("premiumExpired"),
            bg.sendLpImprove(s),
            C.addEventListener("click", function () {
              bg.sendLpImprove(a), bg.openpremium();
            }),
            T.addEventListener("click", function () {
              bg.sendLpImprove(d), bg.openpricing();
            }),
            y.addEventListener("click", function () {
              bg.sendLpImprove(o), r.removeClass("panelIsActive licenseExpired"), ExtensionDropdown.setSize(), k(l, 1);
            }));
      }
      ExtensionDropdown.setSize();
    },
    getStoredExpPrefs: function (e, n, t, i) {
      var r = JSON.parse(localStorage.getItem("expiredData"));
      return null !== r && (1 === r[e] || 1 === r[n] || 1 === r[t] || 1 === r[i]);
    },
    premiumTrialExpiringStatusChecker: function () {
      return n && null !== i && i <= 7 && 1 <= i && "Premium Trial User" === t;
    },
    premiumTrialExpiredStatusChecker: function () {
      return (
        n &&
        null !== i &&
        i < 1 &&
        -31 < i &&
        ("Premium Trial User" === t || "Free User" === t) &&
        !ExtensionLicenseExpiration.getStoredExpPrefs("dismissedPremiumTrialExpired")
      );
    },
    companyTrialExpiringStatusChecker: function () {
      return n && null !== r && r <= 7 && 1 <= r;
    },
    companyTrialExpiredStatusChecker: function () {
      return (
        n &&
        null !== r &&
        r < 1 &&
        ("Enterprise Admin" === t || "Teams Admin" === t || "Family Admin" === t) &&
        !ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired", "dismissedTeamsExpired", "dismissedFamiliesExpired")
      );
    },
    companyLicenseExpiredStatusChecker: function () {
      return (
        n &&
        null !== s &&
        s < 1 &&
        ("Enterprise Admin" === t || "Teams Admin" === t || "Family Admin" === t) &&
        !ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired", "dismissedTeamsExpired", "dismissedFamiliesExpired")
      );
    },
    companyLicenseExpiringStatusChecker: function () {
      return (
        n &&
        null !== s &&
        s <= 30 &&
        1 !== a &&
        ("Enterprise Admin" === t || "Teams Admin" === t) &&
        !ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired", "dismissedTeamsExpired", "dismissedFamiliesExpired")
      );
    },
    expiredCompanyStatusCheckerForPanelSize: function () {
      return (
        n &&
        ((null !== s && s < 1) || (null !== r && r < 1)) &&
        ("Enterprise Admin" === t || "Teams Admin" === t || "Family Admin" === t) &&
        !ExtensionLicenseExpiration.getStoredExpPrefs("dismissedEnterpriseExpired", "dismissedTeamsExpired", "dismissedFamiliesExpired")
      );
    },
    expiredPremiumStatusCheckerForPanelSize: function () {
      return (
        n &&
        null !== i &&
        i < 1 &&
        ("Premium Trial User" === t || "Free User" === t) &&
        !ExtensionLicenseExpiration.getStoredExpPrefs("dismissedPremiumTrialExpired")
      );
    },
    showExpiredSubscriptionMessaging: function () {
      var e = bg.get_show_expired_subscription_messaging(),
        n,
        t,
        i,
        r,
        s,
        a,
        r,
        s,
        a,
        d,
        o,
        l,
        p,
        g,
        m,
        c;
      return (
        void 0 !== e.daysLeft &&
        ((n = $(w.body)),
        (t = "license_expiration_seen"),
        (i = "license_expiration_upgrade"),
        (r = LPTools.createElement("div")),
        (s = LPTools.createElement("p")),
        (a = LPTools.createElement("button")),
        r.setAttribute("id", "expirationTextContainer"),
        s.setAttribute("id", "expirationText"),
        a.setAttribute("id", "expirationUpgradeButton"),
        (r = document.getElementById("panelContainer")),
        (s = LPTools.createElement("h1", "expired-flow")),
        (a = LPTools.createElement("p")),
        (d = LPTools.createElement("span")),
        (o = LPTools.createElement("div", "features")),
        (l = LPTools.createElement("div", "feature one")),
        (p = LPTools.createElement("div", "feature two")),
        (g = LPTools.createElement("div", "feature three")),
        (m = LPTools.createElement("div", "buttons expired-flow")),
        (c = LPTools.createElement("button", "try-btn renew-btn")),
        $("#panelContainer").empty(),
        a.appendChild(d),
        o.appendChild(l),
        o.appendChild(p),
        o.appendChild(g),
        m.appendChild(c),
        r.appendChild(s),
        r.appendChild(a),
        r.appendChild(o),
        r.appendChild(m),
        (l.innerText = Strings.translateString("Shared folders")),
        (p.innerText = Strings.translateString("Single sign-on")),
        (g.innerText = Strings.translateString("Enterprise admin console")),
        (c.innerText = Strings.translateString("Renew")),
        (s.innerText = Strings.translateString("Your LastPass Enterprise subscription has expired.")),
        0 === e.daysLeft
          ? (d.innerText = Strings.translateString(
              "Renew now to leverage the full power of LastPass Enterprise, including shared folders and more."
            ))
          : 1 === e.daysLeft
          ? (d.innerText = Strings.translateString(
              "Renew today to retain access to shared folders and other LastPass Enterprise features."
            ))
          : (d.innerText = Strings.translateString(
              "Renew within %d days to retain access to shared folders and other LastPass Enterprise features.",
              e.daysLeft
            )),
        n.addClass("panelIsActive licenseExpired"),
        r.classList.add("enterpriseExpired"),
        bg.sendLpImprove(t),
        c.addEventListener("click", function () {
          bg.sendLpImprove(i), bg.openenterprisepayment();
        }),
        !0)
      );
    }
  };
})(document);
