function segmentService(e, t) {
  top.reduxApp && top.reduxApp.segmentService && top.reduxApp.segmentService(e, t);
}
function trackMenuItem(e, t) {
  document.getElementById(e).addEventListener(
    "click",
    function () {
      segmentService("Extension Toolbar Menu Clicked", { Action: t });
    },
    !0
  );
}
trackMenuItem("vaultMenuItem", "OpenVault"),
  trackMenuItem("favoriteSitesMenuItem", "Favorites"),
  trackMenuItem("recentSitesMenuItem", "RecentlyUsed"),
  trackMenuItem("allItemsMenuItem", "AllItems"),
  trackMenuItem("addItem", "AddItem"),
  trackMenuItem("generateMenuItem", "GeneratePassword"),
  trackMenuItem("securityDashboardMenuItem", "SecurityDashboard"),
  trackMenuItem("optionsMenuItem", "AccountOptions"),
  trackMenuItem("optionsMenuItemEnt", "AccountOptions"),
  trackMenuItem("adminConsoleMenuItem", "AdminConsole"),
  trackMenuItem("logoutMenuItem", "Logout"),
  trackMenuItem("omarIdentitiesMenuItem", "Identities"),
  trackMenuItem("advancedMenuItem", "Advanced"),
  trackMenuItem("omarFavoritesMenuItem", "OpenFavorites"),
  trackMenuItem("omarPrefMenuItem", "Preferences"),
  trackMenuItem("siteFeedbackMenuItem", "ImproveLastPass"),
  trackMenuItem("omarSupportMenuItem", "SupportCenter"),
  trackMenuItem("omarAboutMenuItem", "AboutLastPass"),
  trackMenuItem("optionsViewLogoutMenuItem", "Logout"),
  trackMenuItem("omarRefreshMenuItem", "RefreshSites"),
  trackMenuItem("omarClearCachMenuItem", "ClearLocalCache"),
  trackMenuItem("omarSessionsMenuItem", "OtherSessions"),
  trackMenuItem("omarImportMenuItemMain", "Import"),
  trackMenuItem("exportMenuItemMain", "Export"),
  trackMenuItem("printMenuItem", "Print"),
  (ExtensionDropdown = (function (a) {
    var r = $(a.body),
      O = $("html"),
      n = a.getElementById("items"),
      s = a.getElementById("searchResults"),
      l = a.getElementById("recentSites"),
      N = a.getElementById("favoriteSites"),
      c = a.getElementById("identitiesMenuItem"),
      U = a.getElementById("matchingSitesTopLevel"),
      R = a.getElementById("matchingSites"),
      K = a.getElementById("addCustomItems"),
      o = $("#panelContainer"),
      z = $("#restrictionOverlay"),
      G = $("#topLevelContainer"),
      V = $("#allMatchingSitesMenuItem"),
      H = a.getElementById("allMatchingSitesItems"),
      i = $("#vaultMenuItem"),
      u = $("#addOmariaItems"),
      m = $("#allItems"),
      d = $("#groupLabel"),
      e = $("#backButton"),
      W = $("#debugconsole"),
      Y = $("#wifiExportMenuItem"),
      j = $("#matchingSitesMenuItem"),
      q = $("#recentSitesMenuItem"),
      Z = $("#favoriteSitesMenuItem"),
      X = $(".new"),
      p = $("#container"),
      g = $("#innerWrapper"),
      f = $("#searchInput"),
      Q = $("#applicationsMenuItem"),
      J = $("#logoContainer"),
      ee = $("#logoPartner"),
      b = null,
      te = !1,
      ne = null,
      oe = null,
      ie = null,
      ae = null,
      v = null,
      re = 365,
      se = 457,
      h,
      le = function () {
        var e = "en-US";
        if (window.location && window.location.search)
          for (var t = window.location.search.replace("?", "").split("&"), n = 0; n < t.length; n++) {
            var o = t[n];
            -1 !== o.indexOf("htmllanguage=") && (e = o.split("=")[1]);
          }
        return e;
      },
      _ = function () {
        var e = bg.get("lploggedin") ? re : se,
          e = o.is(":visible") && o.outerHeight() > g.outerHeight() ? o.outerHeight() : g.outerHeight() < e ? e : g.outerHeight(),
          t = o.is(":visible") ? o.outerWidth() + g.outerWidth() : g.outerWidth();
        LPPlatform.setDropdownPopoverSize(e, t);
      };
    function ce() {}
    "undefined" != typeof otplib &&
      ((ce.prototype.getOtp = function (e) {
        return otplib.authenticator.generate(e);
      }),
      (jsOTP = { totp: ce }));
    var ue = null,
      P = null,
      I = null,
      y = null,
      me = null,
      x = null,
      de = null,
      pe = null,
      E = null,
      ge = null,
      fe = null,
      be = null,
      L = null,
      ve = !1,
      S = !1,
      he = !1,
      _e = !1,
      Pe = !1,
      Ie = {},
      w = null,
      ye = {},
      k = [],
      C = {},
      xe = function (e) {
        var t, t, n, o;
        d.empty(),
          e &&
            (0 < (n = -1 === (n = (t = (t = e.getName()).replace(/\\/g, " \\ ")).indexOf("\\", t.length / 2)) ? t.lastIndexOf("\\") : n)
              ? ((o = LPTools.createElement("div", "textOverflowContainer groupLabel")).appendChild(
                  LPTools.createElement("span", null, t.substring(0, n))
                ),
                d.append(LPTools.createElement("span", "textTail", " " + t.substring(n))),
                d.append(o),
                LPTools.setupMiddleEllipsis(d))
              : d.append(LPTools.createElement("span", "groupLabel", t)),
            d.find(".groupLabel").attr("title", e.toString()));
      },
      Ee,
      Le,
      Se =
        ((C.GroupState = function (t) {
          var n = LPTools.getNavIndex();
          this.pop = function (e) {
            t.rebuildItems(null, e), e && LPTools.setNavIndex(n), xe(t._model);
          };
        }),
        (C.SearchState = function () {
          var e = new C.CSSState("searchItem", { restoreKeyboardNav: !1 });
          this.pop = function () {
            We(), e.pop();
          };
        }),
        (C.TopLevelMatchingSitesState = function (e) {
          var t = new C.CSSState("matchingSites"),
            n = new C.GroupState(e);
          this.pop = function () {
            n.pop(), t.pop();
          };
        }),
        (C.CSSState =
          ((Ee = r.attr("class")),
          (Le = function (e) {
            r.removeClass(Ee), r.addClass(e), (Ee = e);
          }),
          function (e, t) {
            var n = Ee,
              e;
            Le(e),
              LPTools.getOption(t, "applyKeyboardNav", !0) &&
                ((e = LPTools.getOption(t, "selectFirst", !1)),
                LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"), { selectFirst: e })),
              (this.pop = function () {
                xe(null),
                  Le(n),
                  LPTools.getOption(t, "restoreKeyboardNav", !0) &&
                    LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"), {
                      displayItems: 0 === k.length && L ? L.getItems() : null
                    }),
                  t && "function" == typeof t.onPop && t.onPop();
              });
          })),
        function () {
          LPTools.parseUserSpecificMenu(a.getElementById("mainMenu"), LPProxy.getAccountClass()),
            $("#username, #optionsMenuUserName, #optionsViewUserName").text(bg.get("g_username"));
        }),
      we = function () {
        $("#container").LP_show();
        var e = le(),
          t = (O.attr("lang", e), Me(), bg.get("LPContentScriptFeatures").ziggy),
          n = bg.get("LPContentScriptFeatures").omaria,
          o = bg.get("LPContentScriptFeatures").site_feedback && !(bg.get("g_isedge") || bg.get("g_issafari_appext")),
          i = bg.get("LPContentScriptFeatures").site_feedback_new_badge && o,
          e =
            ((v = LPProxy.getAccountClass()),
            bg.get("LPContentScriptFeatures").new_native_extension_ads_enabled ||
              "Free User" === v ||
              "Premium Trial User" === v ||
              "Family Admin" === v ||
              ExtensionLicenseExpiration.initialize(),
            ExtensionBillingAddressNotification.initialize(),
            ("Enterprise Admin" !== v && "Teams Admin" !== v) || r.addClass("admin"),
            (ne = bg.get("g_premium_trial_exp_days")),
            (oe = bg.get("g_company_trial_exp_days")),
            (ie = bg.get("g_company_license_exp_days")),
            (ae = bg.get("g_company_renewalstatus")),
            bg.get("LPContentScriptFeatures").show_device_limit_notification &&
              LPProxy.isExpiredFamilyUser() &&
              parent.reduxApp.getState().settings.features.expiredFamiliesPurchaseFlow &&
              (bg.setDeviceLimitNotification(!0), ExtensionDeviceLimitNotification.initialize()),
            ((bg.get("LPContentScriptFeatures").new_native_extension_ads_enabled && "Free User" === v) ||
              "Premium Trial User" === v ||
              "Family Admin" === v) &&
              $("#securityDashboardMenuItem span").replaceWith(
                '<img src="images/dropdownIconset/diamond-icon-small.svg" class="premium-feature">'
              ),
            (b = { isZiggySet: t, isOmarSet: n, showHelpText: t }),
            function () {
              bg.get_method_async(function (e) {
                h = e;
              }),
                ke(),
                Ue(),
                n || q.detach().insertBefore("#toolsMenuItem"),
                Ge(b),
                Se(t),
                setTimeout(function () {
                  Te();
                }),
                lt(),
                o
                  ? i &&
                    !bg.Preferences.get("hasClickedSiteFeedback") &&
                    (X.css("display", "flex"),
                    X.append(LPTools.createElement("div", { class: "badge newBadge" }, Strings.translateString("NEW"))))
                  : $("#siteFeedbackMenuItem").detach(),
                t || ($("#mainMenu").addClass("showIcons"), T("postSetup", Ce)()),
                bg.sendLpImprove("openicondropdown", { show_sites_in_folders: bg.Preferences.get("showAcctsInGroups", !0) ? "on" : "off" }),
                segmentService("Extension Toolbar Menu Opened");
            }),
          a = LPPlatform.getExtensionDropdownDelay();
        0 <= a ? setTimeout(e, a) : e();
      },
      ke = function () {
        p.addClass("loading");
      },
      Ce = function () {
        var t, n;
        bg.get("g_is_restricted")
          ? (r.addClass("restricted"),
            $("#recentSitesMenuItem").unbind("click"),
            $("#allItemsMenuItem").unbind("click"),
            $("#addItem").unbind("click"),
            $("#securityDashboardMenuItem").unbind("click"),
            $("#searchInput").attr("disabled", !0),
            $("#omarIdentitiesMenuItem").unbind("click"),
            $("#omarRefreshMenuItem").unbind("click"),
            $("#omarClearCachMenuItem").unbind("click"),
            $("#omarImportMenuItemMain").unbind("click"),
            $("#printMenuItem").unbind("click"),
            M())
          : parent && parent.reduxApp && bg.get("LPContentScriptFeatures").new_native_extension_ads_enabled
          ? (!bg.get("g_isedge") && bg.get("g_show_device_limit_notification")
              ? o.load("extensionDropdownDeviceLimitNotification.html", function () {
                  ExtensionDeviceLimitNotification.setupUI(), M();
                })
              : bg.get("g_isedge") &&
                chrome.runtime.getBackgroundPage(function (e) {
                  e.g_show_device_limit_notification &&
                    o.load("extensionDropdownDeviceLimitNotification.html", function () {
                      ExtensionDeviceLimitNotification.setupUI(), M();
                    }),
                    M();
                }),
            M())
          : ((t = AuroraAccount.prototype.createGoToAssistData.call()),
            (n = AuroraAccount.prototype.createGoToWebinarData.call()),
            bg.get("g_show_device_limit_notification")
              ? o.load("extensionDropdownDeviceLimitNotification.html", function () {
                  ExtensionDeviceLimitNotification.setupUI(), M();
                })
              : bg.get("g_show_billing_address_notification")
              ? o.load("extensionBillingAddressNotification.html", function () {
                  ExtensionBillingAddressNotification.showBillingAddressNotification(), M();
                })
              : bg.MigrationBackground.shouldShowMigrationNotification()
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    openEvent: "migration_formfill_notification_shown",
                    headerText: "Welcome to the new LastPass Experience!",
                    openEventProps: { version: "welcome", vault_version: "omar" },
                    subHeaderText: "Your vault has been upgraded!",
                    linkText: "Learn more about these changes.",
                    linkUrl: "https://link.lastpass.com/help-new-form-fills",
                    text1:
                      "The final step is to migrate your form fill profiles to their new homes - this process should only take a minute.",
                    text2: "Your form fill information will be unavailable until you complete this step.",
                    buttonText: "Finish the Update",
                    buttonEvent: "migration_formfill_notification_clicked",
                    buttonEventProps: { version: "welcome", vault_version: "omar", action: "migrate" },
                    dialogClasses: "boldText tall",
                    buttonAction: function () {
                      "cr" === h || "ff" === h || "edgecr" === h
                        ? (bg.MigrationBackground.setShouldStartMigration(!0), bg.openvault())
                        : (bg.openURL("https://lastpass.com/experience-update"), bg.lpevent("m_lo"), bg.loggedOut(!1, "menu"));
                    }
                  }),
                    M();
                })
              : LPFeatures.isPromotionDialogG2aEnabled() && !localStorage.getItem(t.storageKey)
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: t.storageKey,
                    class: "promotion",
                    openEvent: "promotion_extension_dialog_shown",
                    openEventProps: { recommendedProduct: t.auroraId },
                    imageTop: "vault_4.0/promotion/logo-gotoassist-lmi.png",
                    imageCenter: "vault_4.0/promotion/gotoassist-promo.png",
                    text1: "Radically refreshing remote support",
                    text2: "Keep your employees on-the-move and resolve issues quickly, without frustration.",
                    buttonText: "Start your free trial",
                    buttonAction: function () {
                      var e;
                      Lt({
                        name: t.name,
                        urlConfigKey: t.auroraId,
                        storageKey: t.storageKey,
                        segmentEvent: "promotion_extension_dialog_button_clicked",
                        segmentEventProperties: { recommendedProduct: t.auroraId, action: "clicked" }
                      });
                    },
                    closePanelButton: !0,
                    closePanelButtonAction: function () {
                      bg.sendLpImprove("promotion_extension_dialog_button_clicked", { recommendedProduct: t.auroraId, action: "dismiss" });
                    }
                  }),
                    M();
                })
              : LPFeatures.isPromotionDialogG2wEnabled() && !localStorage.getItem(n.storageKey)
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: n.storageKey,
                    class: "promotion",
                    openEvent: "promotion_extension_dialog_shown",
                    openEventProps: { recommendedProduct: n.auroraId },
                    imageTop: "vault_4.0/promotion/logo-gotowebinar-lmi.png",
                    imageCenter: "vault_4.0/promotion/gotowebinar-promo.png",
                    text1: "Your next webinar is on us",
                    text2: "Go from preparing a webinar to presenting in fewer steps - and have fun along the way.",
                    buttonText: "Start your free trial",
                    buttonAction: function () {
                      var e;
                      Lt({
                        name: n.name,
                        urlConfigKey: n.auroraId,
                        storageKey: n.storageKey,
                        segmentEvent: "promotion_extension_dialog_button_clicked",
                        segmentEventProperties: { recommendedProduct: n.auroraId, action: "clicked" }
                      });
                    },
                    closePanelButton: !0,
                    closePanelButtonAction: function () {
                      bg.sendLpImprove("promotion_extension_dialog_button_clicked", { recommendedProduct: n.auroraId, action: "dismiss" });
                    }
                  }),
                    M();
                })
              : bg.get("LPContentScriptFeatures").premium_trial_upgrade_test_emergency_access &&
                !localStorage.getItem("dropdown_emergency_upsell")
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: "dropdown_emergency_upsell",
                    class: "emergencyUpsell",
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 2 },
                    imageTop: "icon-secure.png",
                    headerText: "Prepare for the Unexpected",
                    text1:
                      "Make your LastPass account safely available to a trusted family member or friend with emergency access, available in LastPass Premium.",
                    text2: "Buy Premium to get emergency access.",
                    linkText: "Learn more.",
                    linkUrl: "https://support.logmeininc.com/lastpass/help/set-up-and-manage-emergency-access-lp030013",
                    linkEventProps: { version: 2, action: 3 },
                    buttonText: "Buy Premium",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 2, action: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/premium/payment");
                    },
                    closePanelButton: !0,
                    closePanelEventProps: { version: 2, action: 2 }
                  }),
                    M();
                })
              : bg.get("LPContentScriptFeatures").premium_trial_upgrade_test_sharing && !localStorage.getItem("dropdown_sharing_upsell")
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: "dropdown_sharing_upsell",
                    class: "sharingUpsell",
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 3 },
                    headerText: "Sharing Made Easy",
                    text1:
                      "Never get asked for a password again. Store & share unlimited items with friends and family members as you need to with LastPass Premium.",
                    linkText: "Learn more.",
                    linkUrl: "https://support.logmeininc.com/lastpass/help/use-the-sharing-center-lp020007",
                    linkEventProps: { version: 3, action: 3 },
                    centerImages: ["icon-media", "icon-bill-accounts", "icon-medical"],
                    centerLabels: ["Streaming Media", "Bill Payments", "Medical ID Numbers"],
                    buttonText: "Buy Premium",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 3, action: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/premium/payment");
                    },
                    closePanelButton: !0,
                    closePanelEventProps: { version: 3, action: 2 }
                  }),
                    M();
                })
              : bg.get("LPContentScriptFeatures").premium_trial_to_families_test_generic &&
                !localStorage.getItem("dropdown_premium_trial_families")
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: "dropdown_premium_trial_families",
                    class: "emergencyUpsell",
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 4 },
                    imageTop: "icon-family.png",
                    headerText: "LastPass for the Entire Family",
                    text1: "All your family's information -- organized, secure and at your fingertips.",
                    text2: "Simple access to shared accounts",
                    text3: "Secure storage for SSN, medical IDs and more",
                    text4: "Six LastPass accounts, all for one low price",
                    linkText: "Learn more.",
                    linkUrl: "https://www.lastpass.com/family-password-manager",
                    linkEventProps: { version: 4, action: 3 },
                    buttonText: "Try Families",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 4, action: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/families/trial");
                    },
                    closePanelButton: !0,
                    closePanelEventProps: { version: 4, action: 2 }
                  }),
                    M();
                })
              : bg.get("LPContentScriptFeatures").premium_to_families_test_generic && !localStorage.getItem("dropdown_premium_families")
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: "dropdown_premium_families",
                    class: "emergencyUpsell",
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 4 },
                    imageTop: "icon-family.png",
                    headerText: "LastPass for the Entire Family",
                    text1: "All your family's information -- organized, secure and at your fingertips.",
                    text2: "Simple access to shared accounts",
                    text3: "Secure storage for SSN, medical IDs and more",
                    text4: "Six LastPass accounts, all for $48 per year",
                    linkText: "Learn more.",
                    linkUrl: "https://www.lastpass.com/family-password-manager",
                    linkEventProps: { version: 4, action: 3 },
                    buttonText: "Try Families",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 4, action: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/families/trial");
                    },
                    closePanelButton: !0,
                    closePanelEventProps: { version: 4, action: 2 }
                  }),
                    M();
                })
              : bg.get("LPContentScriptFeatures").free_to_premium_ad_test_generic &&
                !localStorage.getItem("dropdown_free_premium_generic_upsell")
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: "dropdown_free_premium_generic_upsell",
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 1 },
                    imageCenter: "premium.svg",
                    headerText: "Control Your Digital Life",
                    subHeaderText: "Take your online security to the next level with LastPass Premium",
                    text2: "Designate an emergency access contact & digital heir",
                    text3: "Share vital passwords with family and friends",
                    text4: "Fast-track yourself to priority tech support",
                    linkText: "Learn more.",
                    linkUrl: "https://support.logmeininc.com/lastpass/help/lastpass-premium-faqs-lp010085",
                    linkEventProps: { version: 1, action: 3 },
                    buttonText: "Upgrade To Premium",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 1, action: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/premium/payment");
                    },
                    closePanelButton: !0,
                    closePanelEventProps: { version: 1, action: 2 }
                  }),
                    M();
                })
              : bg.get("LPContentScriptFeatures").free_to_premium_ad_test_sharing &&
                !localStorage.getItem("dropdown_free_premium_sharing_upsell")
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    key: "dropdown_free_premium_sharing_upsell",
                    class: "sharingUpsell",
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 3 },
                    headerText: "Enjoy No Limits on Sharing",
                    text1: "Store & share unlimited items with trusted friends and family with LastPass Premium.",
                    linkText: "Learn more.",
                    linkUrl: "https://support.logmeininc.com/lastpass/help/use-the-sharing-center-lp020007",
                    linkEventProps: { version: 3, action: 3 },
                    centerImages: ["icon-bill-accounts", "icon-media", "icon-medical"],
                    centerLabels: ["Cable & Household Bill Accounts", "Streaming Media", "Medical ID Numbers"],
                    buttonText: "Upgrade to Premium",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 3, action: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/premium/payment");
                    },
                    closePanelButton: !0,
                    closePanelEventProps: { version: 3, action: 2 }
                  }),
                    M();
                })
              : ExtensionLicenseExpiration.expiredCompanyStatusCheckerForPanelSize() ||
                ExtensionLicenseExpiration.expiredPremiumStatusCheckerForPanelSize()
              ? M()
              : bg.get("g_show_original_language_changed_notification")
              ? o.load("extensionLanguageUpdate.html", function () {
                  ExtensionLanguageUpdate.initialize(), M();
                })
              : LPProxy.isPremiumTrialUser()
              ? o.load("extensionDropdownMessagingDialog.html", function () {
                  ExtensionDropdownMessagingDialog.initialize({
                    openEvent: "consumer_test_ad_shown",
                    openEventProps: { version: 1 },
                    headerText: "Control Your Digital Life",
                    subHeaderText: "Stay secure with LastPass Premium",
                    text1: "Designate an emergency access contact & digital heir",
                    text2: "Share vital passwords with family and friends",
                    text3: "Fast-track yourself to priority tech support",
                    buttonText: "Upgrade To Premium",
                    imageCenter: "premium.svg",
                    buttonEvent: "consumer_test_ad_clicked",
                    buttonEventProps: { version: 1 },
                    buttonAction: function () {
                      bg.openURL("https://lastpass.com/premium/payment");
                    }
                  }),
                    M();
                })
              : M());
      },
      M = function () {
        p.addClass("initialized"),
          bg.get("LPContentScriptFeatures").new_native_extension_ads_enabled && r.addClass("extension-ads"),
          LPTools.addKeyBoardNavigation($(".extensionMenuItem:visible"), { displayItems: L ? L.getItems() : null }),
          f.focus(),
          _();
      },
      Me = function () {
        LPFeatures.updateFeatures({ import: !0, noexport: !1, show_notes: !0, hideidentities: !1, show_formfills: !0 });
      },
      Te = function () {
        if ((LPProxy.initializeModel(), Re(b), Ae(b), !S && -1 < bg.get("g_local_accts_version"))) {
          for (var e in ((S = !0), p.removeClass("loading"), ye)) ye[e]();
          var t = f.val();
          t && Ye(t);
        } else setTimeout(Te, 15);
      },
      De = function (e, t) {
        var t = t || {};
        return (
          LPProxy.getPreference("showAcctsInGroups", !0) && ((e = LPProxy.assignItemsToGroups(e, !1)), (t.separateFavorites = !0)),
          new Container(e, t)
        );
      },
      Ae = function (e) {
        var t = !1;
        e.isOmarSet
          ? ((I = new Container(LPProxy.getAllItems(), $.extend({}, e, { omarItems: !0, trackAction: !0, source: "AllItems" }))).setElement(
              n
            ),
            (fe = new Container(
              LPProxy.getCustomNoteTemplates().map(function (e) {
                return new AddCustomItemDisplay(e);
              }),
              $.extend({}, e, { additionalItemClasses: "addOmariaItem", autoExpandSingleItem: !1, value: "Custom" })
            )),
            Be(fe.getItemCount()),
            (t = Oe()))
          : ((y = De(LPProxy.getSites(), e)).setElement(n),
            (x = De(LPProxy.getNotes(), e)).setElement(n),
            (de = new Container(LPProxy.getFormFills(), e)).setElement(n),
            (pe = new Container(LPProxy.getApplications(), e)).setElement(n)),
          ct({ hasFavorites: t }),
          ExtensionLicenseExpiration.showExpiredSubscriptionMessaging() ||
            (ExtensionLicenseExpiration.premiumTrialExpiringStatusChecker() || ExtensionLicenseExpiration.premiumTrialExpiredStatusChecker()
              ? ExtensionLicenseExpiration.showExpiration(v, "trial", ne)
              : ExtensionLicenseExpiration.companyTrialExpiringStatusChecker() ||
                ExtensionLicenseExpiration.companyTrialExpiredStatusChecker()
              ? ExtensionLicenseExpiration.showExpiration(v, "trial", oe)
              : (ExtensionLicenseExpiration.companyLicenseExpiredStatusChecker() ||
                  ExtensionLicenseExpiration.companyLicenseExpiringStatusChecker()) &&
                ExtensionLicenseExpiration.showExpiration(v, "normal", ie, ae)),
          (ge = new Container(LPProxy.getAllItems(), $.extend({}, e, { moreOptionsState: C.SearchState, moreOptionsCallback: _ }))),
          "Enterprise Admin" === v ||
          "Enterprise Role User" === v ||
          "Teams Admin" === v ||
          "Teams Role User" === v ||
          "Premium Trial User" === v
            ? ($(".feature-omaria #optionsViewLogoutMenuItem, .feature-omaria #optionsMenuItemEnt").show(),
              $(".feature-omaria #logoutMenuItem, .feature-omaria #optionsMenuItem").hide())
            : ($(".feature-omaria #optionsViewLogoutMenuItem, .feature-omaria #optionsMenuItemEnt").hide(),
              $(".feature-omaria #logoutMenuItem, .feature-omaria #optionsMenuItem").show());
      },
      $e = function (e) {
        var t = ["extensionMenuItem", "omariaMenuItem"],
          t = (e && e.attrs && e.attrs.class && (t = t.concat(e.attrs.class)), $.extend({}, e.attrs, { class: t })),
          n = LPTools.createElement("li", t);
        return (
          n.appendChild(LPTools.createElement("i", e.icon + " menuIcon")),
          n.appendChild(LPTools.createElement("span", "name", e.name)),
          e.addMoreButton && n.appendChild(LPTools.createElement("div", "more")),
          t.childView && $(n).bind("click", kt),
          e.onClick && $(n).bind("click", e.onClick),
          n
        );
      },
      Fe = function (e, t) {
        switch (
          (t &&
            I.applyFilter({
              showEmptyGroups: !1,
              func: function (e) {
                return e instanceof GroupDisplay || e.getRecordType() === t;
              }
            }),
          I.rebuildItems(n, !e.originalEvent.isTrusted),
          t)
        ) {
          case "Account":
            A(
              I,
              "Empty_Site_Omaria",
              Strings.translateString("You can save and fill usernames and passwords for any website or app."),
              Strings.translateString("Add a password"),
              t
            );
            break;
          case "Generic":
            A(
              I,
              "Empty_Note_Omaria",
              Strings.translateString("Use a secure note to save important documents in your LastPass vault."),
              Strings.translateString("Add a secure note"),
              t
            );
            break;
          case "Address":
            A(
              I,
              "Empty_Address_Omaria",
              Strings.translateString("Add an address to auto-fill your email, phone number, and other contact info."),
              Strings.translateString("Add an address"),
              t
            );
            break;
          case "Credit Card":
            A(
              I,
              "Empty_Credit_Card_Omaria",
              Strings.translateString("Next time you go shopping, they'll be waiting!"),
              Strings.translateString("Add a payment card"),
              t
            );
            break;
          case "Bank Account":
            A(
              I,
              "Empty_Bank_Account_Omaria",
              Strings.translateString("Save and fill your bank accounts securely on any device with LastPass."),
              Strings.translateString("Add a bank account"),
              t
            );
        }
      },
      Be = function (a) {
        var r = LPProxy.getRecordConfig(),
          s = LPProxy.getAllModelTypes(),
          e =
            (u.empty(),
            $("#addItem").addClass("divider"),
            m.empty(),
            r.viewConfig.forEach(function (e) {
              var e, e;
              e.forEach(function (e) {
                var i;
                "all" !== e &&
                  (i = LPProxy.getConfigViewObject(e)).types.forEach(function (e) {
                    var t = LPProxy.getConfigTypeObject(e),
                      n = bg.get("g_prefoverrides").noformfill ? bg.get("g_prefoverrides").noformfill : [],
                      o = LPProxy.getAllModelTypes().includes(t.recordType),
                      n,
                      o;
                    "cloud-apps" === e ||
                      "CloudApps" === e ||
                      (!o && "Password" !== e && (n.includes("0") || n.includes(t.enterprisePolicyId))) ||
                      ((i.default || s.includes(t.recordType)) &&
                        m.append(
                          $e({
                            attrs: { class: "omariaItem", childView: "omariaItems" },
                            name: Strings.translateString(i.name),
                            icon: r.icons[t.id],
                            addMoreButton: !0,
                            onClick: function (e) {
                              Fe(e, t.recordType);
                            }
                          })
                        ),
                      (n = bg.get("g_prefoverrides").noformfill ? bg.get("g_prefoverrides").noformfill : []),
                      "Password" !== t.id && (n.includes("0") || n.includes(t.enterprisePolicyId))) ||
                      ((o = null),
                      t.recordType === r.TYPE.Custom
                        ? 0 < a &&
                          (o = $e({
                            attrs: { class: "addOmariaItem", childView: "addCustomItems" },
                            name: Strings.translateString(t.name),
                            icon: r.icons[t.id],
                            addMoreButton: !0,
                            onClick: function (e) {
                              fe.rebuildItems(K, !e.originalEvent.isTrusted);
                            }
                          }))
                        : (o = $e({
                            attrs: { class: "addOmariaItem" },
                            name: Strings.translateString(t.name),
                            icon: r.icons[t.id],
                            onClick: function () {
                              Ne(t.recordType);
                            }
                          })),
                      o && u.append(o));
                  });
              }),
                e !== r.viewConfig[0] &&
                  (m[0].lastChild.classList.contains("omarSpacer") || ((e = LPTools.createElement("li", "omarSpacer")), m.append(e)),
                  (e = LPTools.createElement("li", "omarSpacer")),
                  u.children().last().hasClass("omarSpacer") || u.append(e));
            }),
            LPTools.createElement(
              "li",
              { class: "extensionMenuItem addOmariaItem", value: "saveAll" },
              Strings.translateString("Save All Entered Data")
            ));
        u.append(e),
          $('.addOmariaItem[value="saveAll"]').bind("click", function () {
            bg.lpevent("m_saed"),
              bg.get_selected_tab_data(null, function (e) {
                bg.sendLpImprove("save_all_entered_data", { domain: bg.lp_gettld_url(e.url) });
              }),
              bg.saveall();
          });
      },
      Oe = function () {
        var e = I.getItemChildren(),
          t = [];
        return (
          e.forEach(function (e) {
            e._model.isFavorite() && t.push(e._model.newDisplayObject());
          }),
          0 < t.length
            ? (Z.show(), $("#omarFavoritesMenuItem").show(), r.removeClass("noFavorites"), !0)
            : ($("#omarFavoritesMenuItem").hide(), r.addClass("noFavorites"), Z.hide(), !1)
        );
      },
      Ne = function (e) {
        bg.lpevent("m_add"),
          "Account" === e
            ? bg.get_selected_tab_data_no_extension(null, function (e) {
                Je({ defaultData: { url: e ? e.url : "" } });
              })
            : et({ defaultData: { notetype: e } });
      },
      Ue = function () {
        W.LP_removeAttr("style"),
          Y.LP_removeAttr("style"),
          Q.LP_removeAttr("style"),
          bg.is_user_debug_enabled() && W.show(),
          bg.have_binary() && bg.LPPlatform.isWin() && Y.show(),
          LPTools.hasProperties(bg.get("g_applications")) && Q.show(),
          LPFeatures.allowNotes() ? $("#notesMenuItem").show() : $("#notesMenuItem").hide();
      },
      Re = function (e) {
        if (
          (e.isOmarSet && (c = a.getElementById("omarIdentitiesMenuItem")),
          (P = LPProxy.getIdentities()),
          LPProxy.enableCurrentIdentity(P),
          0 < P.length)
        ) {
          qe(ue);
          for (var t = [], n = 0, o = P.length, i; n < o; ++n) t.push(P[n].newDisplayObject());
          new IdentityContainer(t, e).initialize(a.getElementById("identities"));
        } else $(c).hide();
      },
      Ke = function (t) {
        return top.reduxApp && top.reduxApp.getState().settings.features.web_client_fill
          ? top.reduxApp.getState().activePageFillableRecords.some(function (e) {
              return e.id === t;
            })
          : !0 === Ie[t];
      },
      ze = function (e, t) {
        for (
          var n = function (e) {
              var e = bg.lpmdec(e.extra, !0),
                e = /Language:(.+)/.exec(e);
              return e && 1 < e.length ? e[1].substr(0, 2) : "en";
            },
            o = [],
            i = [],
            a,
            r,
            a = 0,
            r = w.length;
          a < r;
          ++a
        ) {
          var s = LPProxy.getNoteModel(w[a].aid),
            s;
          s && ((s = n(s._data)), -1 === i.indexOf(s)) && i.push(s);
        }
        for (a = 0, r = w.length; a < r; ++a) {
          var l = w[a].aid,
            l;
          "account" === w[a].type
            ? o.push(new MatchingAccountDisplay(LPProxy.getSiteModel(l)))
            : "note" === w[a].type && ((l = LPProxy.getNoteModel(l)), o.push(new MatchingNoteDisplay(l, 1 < i.length ? n(l._data) : null)));
        }
        (L = new Container(o, t)).setElement(e), L.rebuildItems();
      },
      Ge = function (e) {
        for (var t = 0, n = (w = bg.getmatchingsites(!1, !0, !1)).length, o; t < n; ++t) Ie[w[t].aid] = !0;
        e.isZiggySet || LPProxy.getPreference("toplevelmatchingsites", !1)
          ? (void 0 !== parent.reduxApp && parent.reduxApp.saveSettingsState("dropdownMatchingSites", w.length),
            2 <= w.length &&
              bg.get("LPContentScriptFeatures").secondary_onboarding &&
              "Premium Trial User" === v &&
              r.addClass("showOneMatchingSite"),
            r.addClass("matchingSitesIsVisible"),
            i.addClass("divider"),
            G.removeClass("hidden"),
            2 <= w.length
              ? (r.addClass("matchingSitesOverTwo"),
                i.addClass("topLevelMatchesShadow"),
                $("#allMatchingSiteCounter").text(w.length),
                V.removeClass("hidden"))
              : (i.removeClass("topLevelMatchesShadow"),
                0 === w.length &&
                  (i.removeClass("divider"), r.removeClass("matchingSitesIsVisible"), G.addClass("hidden"), V.addClass("hidden"))),
            T("topLevelMatchingSites", function () {
              ze(
                U,
                $.extend({}, e, {
                  autoExpandSingleItem: !1,
                  moreOptionsElement: a.getElementById("matchingSites"),
                  moreOptionsState: C.TopLevelMatchingSitesState,
                  addLastClass: !1,
                  trackAction: !0,
                  source: "Suggestion",
                  sortFunction: !!bg.get("LPContentScriptFeatures").web_client_fill || VaultItemBaseDisplay.prototype.sortOmarMatchingItems
                })
              ),
                Ce();
            })())
          : (0 === w.length ? j.LP_removeAttr("style") : (j.show(), $("#matchingSiteCounter").text(w.length)),
            i.removeClass("divider"),
            i.removeClass("topLevelMatchesShadow"),
            r.removeClass("matchingSitesIsVisible"),
            G.addClass("hidden"));
      },
      Ve = function () {
        var e = bg.getClearRecentTime(),
          t = bg.Preferences.get("recentUsedCount"),
          n = null,
          n;
        (n = bg.get("LPContentScriptFeatures").omaria ? I.getItemChildren() : y.getItemChildren().concat(x.getItemChildren())).sort(
          VaultItemBaseDisplay.prototype.sortByMostRecent
        );
        for (var o = [], i = 0, a = n.length; i < a && i < t; ++i) {
          var r = n[i];
          r.getLastTouchValue() >= e && o.push(r._model.newDisplayObject());
        }
        0 < o.length
          ? (be = new Container(
              o,
              $.extend({}, b, { sortFunction: VaultItemBaseDisplay.prototype.sortByMostRecent, separateFavorites: !1 })
            )).initialize(l)
          : nt(l);
      },
      He = function () {
        var e = I.getItemChildren(),
          t,
          t = [];
        e.forEach(function (e) {
          e._model.isFavorite() && t.push(e._model.newDisplayObject());
        }),
          0 < t.length ? (me = new Container(t, b, { sortFunction: VaultItemBaseDisplay.prototype.sortByNameAsc })).initialize(N) : nt(N);
      },
      We = function () {
        LPTools.removeDOMChildren(s);
        for (var e = Object.assign({}, b, { source: "Search" }), t = 0, n = E.length, o; t < n; ++t) {
          var i = E[t],
            a = i.build(e);
          i.postBuild(a, e), s.appendChild(a);
        }
        0 === E.length &&
          ((o = LPTools.buildEmptyPlaceholder(Strings.translateString("No Matching Results"), "extensionSearchPlaceholder", s)),
          s.appendChild(o)),
          LPTools.addKeyBoardNavigation(s.children, { rightArrowSelector: ".moreItem", selectFirst: !0, displayItems: E }),
          _();
      },
      Ye =
        ((je = null),
        function (e) {
          0 < e.length
            ? (S &&
                (E &&
                  E.forEach(function (e) {
                    e.hideInContextOptions();
                  }),
                (E = ge.getSearchResultItems(e)),
                We()),
              ve ||
                (ot("search", {
                  applyKeyboardNav: !1,
                  onPop: function () {
                    f.val("");
                  }
                }),
                (ve = !0),
                bg.sendLpImprove("search", { source: "icon" }),
                segmentService("Extension Toolbar Menu Clicked", { Action: "Search" })))
            : je && 0 < je.length && (t(), (ve = !1)),
            (je = e),
            _();
        }),
      je,
      qe = function (e) {
        var e = Strings.translateString("Identities") + " (" + e.getName() + ")",
          t = c.firstChild;
        3 !== t.nodeType ? ((t = a.createTextNode(e)), c.insertBefore(t, c.firstChild)) : (t.textContent = e);
      },
      T = function (o, i) {
        return function () {
          var e = this,
            t = arguments,
            n = function () {
              i.apply(e, t);
            };
          S ? n() : (ye[o] = n);
        };
      },
      Ze = function (e) {
        e && (e.stopPropagation(), e.preventDefault());
      },
      Xe = function (e) {
        for (var t = null; null !== e && null === (t = e.getAttribute("childview")); ) e = e.parentElement;
        return t;
      },
      Qe = function (e) {
        return ((e = e || {}).saveOptions = { source: "icon" }), e;
      },
      Je = function (e) {
        bg.LPPlatform.openTabDialog("site", Qe(e));
      },
      et = function (e) {
        bg.LPPlatform.openTabDialog("note", Qe(e));
      },
      tt = function (e) {
        bg.LPPlatform.openTabDialog("formFill", Qe(e));
      },
      nt = function (e) {
        e.appendChild(LPTools.createElement("li", "extensionMenuItem none", bg.gs("None Available")));
      },
      ot = function (e, t) {
        k.push(new C.CSSState(e, t)), _();
      },
      t = function (e) {
        var t = k.pop();
        t && t.pop(e), _();
      },
      D = dialogs.generatePassword,
      it = function () {
        D.getDialog().close(), e.unbind("click", it);
      },
      at = null,
      rt = function () {
        (D = !0 === bg.get("LPContentScriptFeatures").better_generate_password_enabled ? dialogs.betterGeneratePassword : D).open({
          preSetup: function (e) {
            var t, n, o;
            null === at &&
              ((t = D.parentElementID),
              (n = e.options.hideHeader),
              (o = e.dynamicHeight),
              (at = function () {
                (D.parentElementID = t), (e.options.hideHeader = n), e.useDynamicHeignt(o);
              })),
              (D.parentElementID = "extensionDropdownGeneratePassword"),
              (e.options.hideHeader = !0),
              e.useDynamicHeignt(!1);
          },
          postSetup: function () {
            _();
          },
          onClose: function () {
            t();
          },
          onCopy: function () {
            LPPlatform.closePopup(!0);
          },
          saveOptions: { source: "icon" }
        }),
          e.unbind("click", it),
          e.bind("click", it);
      },
      A = function (e, t, n, o, i) {
        var e, t;
        (i = i || "Generic"),
          e.isEmpty() &&
            ((e = LPTools.createElement("div", "emptyView")).appendChild(
              LPTools.createElement("img", { src: "images/vault_4.0/" + t + ".png", class: "emptyViewIcon" })
            ),
            e.appendChild(LPTools.createElement("h1", "emptyViewText", n)),
            (t = LPTools.createElement("input", { class: "addItem rbtn", type: "button", value: o, tabindex: -1 })).appendChild(
              LPTools.createElement("i", "fa fa-trash")
            ),
            e.appendChild(t),
            t.addEventListener("click", function (e) {
              Ne(i);
            }),
            LPTools.addKeyBoardNavigation($(t), { selectFirst: !0 }),
            document.getElementById("items").appendChild(e));
      },
      st = function (e, t, n) {
        var e;
        e.isEmpty() &&
          ((e = LPTools.createElement("div", "emptyView")).appendChild(
            LPTools.createElement("img", { src: "images/vault_4.0/" + t, class: "emptyViewIcon" })
          ),
          e.appendChild(LPTools.createElement("h1", "emptyViewText", n)),
          document.getElementById("items").appendChild(e));
      },
      lt = function () {
        bg.LPPartner &&
          bg.LPPartner.getPartnerInfo &&
          bg.LPPartner.getPartnerInfo(function (e) {
            e &&
              ($(s).addClass("partner-logo"),
              ee.attr("src", e.logoUrl).removeClass(e.class).addClass(e.class),
              J.show(),
              r.addClass("partner"),
              _());
          });
      },
      ct = function (e) {
        var t = bg.getmatchingsites(!1, !0, !1),
          n = 2,
          e = (e.hasFavorites && --n, !t || t.length <= n);
        LPFeatures.isPromotionMenuItemG2mEnabled()
          ? gt(e)
          : LPFeatures.isPromotionMenuItemG2aEnabled()
          ? ft(e)
          : LPFeatures.isPromotionMenuItemG2wEnabled() && bt(e);
      },
      ut = dialogs.siteFeedback,
      mt = function () {
        ut.getDialog().resetPage(), ut.getDialog().close(), e.unbind("click", mt), e.bind("click", t);
      },
      dt = function () {
        ut.open({
          preSetup: function (e) {
            (ut.parentElementID = "siteFeedback"), (e.options.hideHeader = !0), e.useDynamicHeignt(!1);
          },
          postSetup: function () {
            _();
          },
          onClose: function () {
            t();
          }
        }),
          e.unbind("click", t),
          e.bind("click", mt);
      };
    function pt() {
      return [
        Object.assign({}, AuroraAccount.prototype.createGoToAssistData.call()),
        Object.assign({}, AuroraAccount.prototype.createGoToWebinarData.call())
      ];
    }
    function gt(e) {
      var t = AuroraAccount.products.g2ma;
      vt(
        {
          name: t.name,
          urlConfigKey: "g2ma",
          storageKey: "promotion_" + t.productId + "_clicked_" + bg.get("g_username_hash"),
          trackingProductId: t.productId,
          backgroundImage: "images/vault_4.0/promotion/logo-gotomeeting-lmi.png"
        },
        e
      );
    }
    function ft(e) {
      var t = AuroraAccount.products.g2a,
        n = AuroraAccount.prototype.createGoToAssistData.call();
      vt(
        {
          name: t.name,
          urlConfigKey: "g2a",
          storageKey: n.storageKey,
          trackingProductId: t.productId,
          backgroundImage: "images/vault_4.0/promotion/logo-gotoassist-lmi.png"
        },
        e
      );
    }
    function bt(e) {
      var t = AuroraAccount.products.g2w,
        n = AuroraAccount.prototype.createGoToWebinarData.call();
      vt(
        {
          name: t.name,
          urlConfigKey: "g2w",
          storageKey: n.storageKey,
          trackingProductId: t.productId,
          backgroundImage: "images/vault_4.0/promotion/logo-gotowebinar-lmi.png"
        },
        e
      );
    }
    function vt(e, t) {
      var t;
      t
        ? ((t = $("#promotionMenuItem")),
          bg.sendLpImprove("promotion_extension_menu_item_shown", { recommendedProduct: e.trackingProductId }),
          t.css("background-image", "url(" + e.backgroundImage + ")"),
          t.unbind("click"),
          t.bind("click", function () {
            ht(e);
          }),
          t.show())
        : bg.sendLpImprove("promotion_extension_menu_item_not_shown", { recommendedProduct: e.trackingProductId });
    }
    function ht(e) {
      var t = {
        name: e.name,
        urlConfigKey: e.urlConfigKey,
        storageKey: e.storageKey,
        segmentEvent: "promotion_extension_menu_item_clicked",
        segmentEventProperties: { recommendedProduct: e.trackingProductId }
      };
      (localStorage.getItem(e.storageKey) ? Et : Lt)(t);
    }
    function _t(t) {
      var n = null,
        e;
      return {
        recommendation: pt().find(function (e) {
          return !!e.competitorProductNames.find(function (e) {
            return !!e.toLowerCase().includes(t.toLowerCase()) && ((n = e.toLowerCase()), !0);
          });
        }),
        matchSource: "search_text",
        searchToken: n
      };
    }
    function Pt() {
      var n = null,
        e;
      return {
        recommendation: pt().find(function (e) {
          return !!e.searchResultKeywords.find(function (t) {
            return !!E.find(function (e) {
              return !!e.getDisplayName().toLowerCase().includes(t.toLowerCase()) && ((n = t.toLowerCase()), !0);
            });
          });
        }),
        matchSource: "search_result",
        searchToken: n
      };
    }
    function It(e) {
      return E.length ? Pt() : 3 < e.length ? _t(e) : void 0;
    }
    function yt(t) {
      t &&
        t.recommendation &&
        ($(
          '<li class="extensionMenuItem item promotionSearch" title="Launch ' +
            t.recommendation.name +
            '" aria-label="Site: ' +
            t.recommendation.name +
            '"><div class="text">From the makers of LastPass. Try it for free.</div><div class="image"><img src="' +
            t.recommendation.imageUrl +
            '" /></div></li>'
        )
          .hover(
            function () {
              $(this).addClass("hover");
            },
            function () {
              $(this).removeClass("hover");
            }
          )
          .click(function () {
            var e = {
              name: t.recommendation.name,
              urlConfigKey: t.recommendation.auroraId,
              storageKey: t.recommendation.storageKey,
              segmentEvent: "promotion_extension_search_clicked",
              segmentEventProperties: { product: t.recommendation.auroraId, searchToken: t.searchToken, matchSource: t.matchSource }
            };
            (localStorage.getItem(t.recommendation.storageKey) ? Et : Lt)(e);
          })
          .appendTo("#searchResults"),
        bg.sendLpImprove("promotion_extension_search_shown", {
          product: t.recommendation.auroraId,
          searchToken: t.searchToken,
          matchSource: t.matchSource
        }));
    }
    function xt(e) {
      var t;
      yt(It(e));
    }
    function Et(t) {
      bg.BackgroundServer.aurora.getOneClickSignupUrls({
        success: function (e) {
          e && e[t.urlConfigKey] && (bg.openURL(e[t.urlConfigKey].login), bg.sendLpImprove(t.segmentEvent, t.segmentEventProperties));
        }
      });
    }
    function Lt(t) {
      bg.BackgroundServer.aurora.getOneClickSignupUrls({
        success: function (e) {
          e &&
            e[t.urlConfigKey] &&
            (wt(e[t.urlConfigKey].signup),
            St(e[t.urlConfigKey].login, t.name),
            bg.localStorage_setItem(t.storageKey, 1),
            bg.sendLpImprove(t.segmentEvent, t.segmentEventProperties));
        }
      });
    }
    function St(e, t) {
      e &&
        new Account().addFromDialog({ name: t, url: e }, null, {
          success: function () {
            return null;
          }
        });
    }
    function wt(e) {
      e && bg.openURL(e);
    }
    f.LP_addSearchHandlers("inputDialog", function (e) {
      Ye(e), LPFeatures.isPromotionExtensionSearchEnabled() && xt(e);
    }),
      e.bind("click", t);
    var kt = function (e) {
        ot(Xe(e.target), { selectFirst: !e.originalEvent.isTrusted }), Ze(e);
      },
      Ct =
        ($("[childview]").bind("click", kt),
        $("#addSite").bind("click", function (e) {
          bg.get_selected_tab_data_no_extension(null, function (e) {
            bg.lpevent("m_add"), Je({ defaultData: { url: e ? e.url : "" } }), LPPlatform.closePopup();
          }),
            e.stopPropagation();
        }),
        $("#saveAllEnteredData").bind("click", function () {
          bg.lpevent("m_saed"),
            bg.get_selected_tab_data(null, function (e) {
              bg.sendLpImprove("save_all_entered_data");
            }),
            bg.saveall();
        }),
        $("#addNote").bind("click", function () {
          bg.lpevent("m_addn"), et();
        }),
        $("#addFormFill").bind("click", function () {
          bg.lpevent("m_af"), tt();
        }),
        $("#addCreditCard").bind("click", function () {
          bg.lpevent("m_af"), tt({ defaultData: { profiletype: FormFill.prototype.FORM_FILL_TYPE_CREDIT_CARD } });
        }),
        $("#clearForms").bind("click", function () {
          bg.lpevent("m_clrf"), bg.clearforms("icon");
        }),
        $("#siteFeedbackMenuItem").bind("click", function () {
          var e;
          bg.Preferences.set("hasClickedSiteFeedback", !0),
            bg.LPModule.callService("Segment", "sendTypedEvent", ["ExtensionMenuItemClicked", { Item: "Site Feedback" }], function (e) {
              e && console.error(e);
            });
        }),
        function () {
          var e;
          bg.LPModule.callService("Segment", "sendTypedEvent", ["ExtensionMenuItemClicked", { Item: "Account Options" }], function (e) {
            e && console.error(e);
          });
        }),
      Mt =
        ($("#optionsMenuItem").bind("click", function () {
          Ct();
        }),
        $("#optionsMenuItemEnt").bind("click", function () {
          Ct();
        }),
        null),
      Tt,
      Dt,
      At,
      $t,
      rt =
        ($("#chooseProfile").bind("click", function () {
          dialogs.chooseProfile.open({
            preSetup: function (e) {
              var t, n;
              null === Mt &&
                ((t = dialogs.chooseProfile.parentElementID),
                (n = e.options.hideHeader),
                (Mt = function () {
                  (dialogs.chooseProfile.parentElementID = t), (e.options.hideHeader = n), e.$element.css("min-height", "");
                })),
                e.$element.css("min-height", 0),
                (dialogs.chooseProfile.parentElementID = "chooseProfileCreditCard"),
                (e.options.hideHeader = !0);
            },
            onClose: function () {
              t();
            },
            saveOptions: { source: "icon" }
          });
        }),
        $("#vaultMenuItem").bind("click", function () {
          bg.lpevent("m_ov"), bg.openvault();
        }),
        $("#sitesMenuItem").bind(
          "click",
          T("sites", function (e) {
            y.rebuildItems(n, !e.originalEvent.isTrusted), st(y, "Empty_Site.png", Strings.translateString("Remember every password"));
          })
        ),
        $("#formFillsMenuItem").bind(
          "click",
          T("formFills", function (e) {
            de.rebuildItems(n, !e.originalEvent.isTrusted), st(de, "Empty_Form.png", Strings.translateString("Fill Every Form"));
          })
        ),
        $("#applicationsMenuItem").bind(
          "click",
          T("applications", function (e) {
            pe.rebuildItems(n, !e.originalEvent.isTrusted), st(pe, "Empty_Site.png", Strings.translateString("Remember every password"));
          })
        ),
        $("#generateMenuItem").bind("click", rt),
        $("#securityDashboardMenuItem").bind("click", function () {
          bg.lpevent("m_sd"), bg.openvault(!1, "opendashboard");
        }),
        $("#notesMenuItem").bind(
          "click",
          T("notes", function (e) {
            x.rebuildItems(n, !e.originalEvent.isTrusted), st(x, "Empty_Note.png", Strings.translateString("Store Every Note"));
          })
        ),
        $("#clearMostRecent").bind("click", function () {
          bg.clearrecent(), LPTools.removeDOMChildren(l), nt(l);
        }),
        $("#siteFeedbackMenuItem").bind("click", dt),
        T("mostRecent", function (e) {
          he || (Ve(), (he = !0)),
            LPTools.addKeyBoardNavigation(l.children, {
              rightArrowSelector: ".moreItem",
              selectFirst: !e.originalEvent.isTrusted,
              displayItems: be ? be.getItems() : null
            });
        })),
      dt =
        (q.bind("click", rt),
        T("sites", function (e) {
          bg.get("LPContentScriptFeatures").omaria &&
            !Pe &&
            (He(),
            (Pe = !0),
            LPTools.addKeyBoardNavigation(N.children, {
              rightArrowSelector: ".moreItem",
              selectFirst: !e.originalEvent.isTrusted,
              displayItems: me ? me.getItems() : null
            }));
        })),
      rt =
        (Z.bind("click", dt),
        T("matchingSites", function (e) {
          _e || (ze(R, b), (_e = !0)),
            LPTools.addKeyBoardNavigation(a.getElementById("matchingSites").children, {
              rightArrowSelector: ".moreItem",
              selectFirst: !e.originalEvent.isTrusted
            });
        })),
      F =
        (j.bind("click", rt),
        V.bind("click", rt),
        $("#prefMenuItem").bind("click", function () {
          bg.lpevent("m_op"), bg.openprefs();
        }),
        $("#helpMenuItem").bind("click", function () {
          bg.lpevent("m_oh"), bg.openhelp();
        }),
        $("#adminConsoleMenuItem").bind("click", function () {
          bg.lpevent("m_oec"), bg.openentconsole();
        }),
        $("#logoutMenuItem, #optionsViewLogoutMenuItem").bind("click", function (e) {
          bg.sendLpImprove("logout_clicked", { source: "icon" }),
            bg.lpevent("m_lo"),
            bg.get("g_issafari_appext") &&
              ($("#extensionDropdown").removeClass("panelIsActive"),
              $("#extensionDropdown").removeClass("expirationSet"),
              $("#notificationContainer").empty(),
              $("#panelContainer").empty()),
            e.stopPropagation(),
            setTimeout(function () {
              bg.loggedOut(!1, "menu"), LPPlatform.closePopup();
            });
        }),
        $("#favoritesMenuItem").bind("click", function () {
          bg.lpevent("m_of"), bg.openfavorites(!1, "icon");
        }),
        $("#aboutMenuItem").bind("click", function () {
          bg.lpevent("m_abt"), bg.openabout();
        }),
        W.bind("click", function () {
          bg.lpevent("m_dbgcon"), bg.opendebugtab();
        }),
        $("#csvExportMenuItem").bind("click", function () {
          bg.lpevent("m_e"), bg.sendLpImprove("Export", { source: "Dropdown" }), bg.openexport();
        }),
        $("#formFillExportMenuItem").bind("click", function () {
          bg.lpevent("m_eff"), bg.sendLpImprove("Export", { source: "Dropdown" }), bg.formfillexport();
        }),
        $("#encryptedExportMenuItem").bind("click", function () {
          bg.lpevent("m_elp"), bg.sendLpImprove("Export", { source: "Dropdown" }), bg.openlastpassexport();
        }),
        Y.bind("click", function () {
          bg.lpevent("m_ewlan"), bg.wlanexport();
        }),
        $("#printSitesMenuItem").bind("click", function () {
          bg.lpevent("m_p"), bg.openprint(!1);
        }),
        $("#printNotesMenuItem").bind("click", function () {
          bg.lpevent("m_pn"), bg.openprint(!0);
        }),
        $("#refreshMenuItem").bind("click", function () {
          bg.lpevent("m_ref"), LPProxy.refreshSites();
        }),
        $("#clearCachMenuItem").bind("click", function () {
          bg.lpevent("m_cl"), bg.clearCache(!1, !0, !1);
        }),
        $("#myAccountMenuItem").bind("click", function () {
          bg.lpevent("m_mya"), bg.openmyaccount();
        }),
        $("#sessionsMenuItem").bind("click", function () {
          bg.lpevent("m_ses"), bg.opensessions();
        }),
        $(".extensionMenuItem").bind("click", function () {
          _();
        }),
        LPPlatform.addEventListener(window, "unload", function () {
          Bt();
        }),
        r.on("click", ".extensionMenuItem, .footer, .contextOptionsDropdown", function () {
          LPPlatform.closePopup();
        }),
        $("#omarFavoritesMenuItem").bind("click", function () {
          bg.lpevent("m_of"), bg.openfavorites(!1, "icon");
        }),
        $("#omarPrefMenuItem").bind("click", function () {
          bg.lpevent("m_op"), bg.openprefs();
        }),
        $("#omarSupportMenuItem").bind("click", function () {
          bg.lpevent("m_oh"), bg.openhelp();
        }),
        $("#omarAboutMenuItem").bind("click", function () {
          bg.lpevent("m_abt"), bg.openabout();
        }),
        $("#omarRefreshMenuItem").bind("click", function () {
          bg.lpevent("m_ref"), LPProxy.refreshSites();
        }),
        $("#omarClearCachMenuItem").bind("click", function () {
          bg.lpevent("m_cl"), bg.clearCache(!1, !0, !1);
        }),
        $("#omarSessionsMenuItem").bind("click", function () {
          bg.lpevent("m_ses"), bg.opensessions();
        }),
        $("#safariMessageButton").bind("click", function () {
          bg.openURL("https://lastpass.com/safariAppExtension.php?source=dropdown"), LPPlatform.closePopup();
        }),
        Topics.get(Topics.REFRESH_DATA).subscribe(function () {
          Te();
        }),
        Topics.get(Topics.PUSH_STATE).subscribe(function (e) {
          k.push(e);
        }),
        Topics.get(Topics.EDIT_SITE).subscribe(function (e) {
          (e.vaultItem = e.vaultItem.getID()), Je(e);
        }),
        Topics.get(Topics.EDIT_NOTE).subscribe(function (e) {
          (e.vaultItem = e.vaultItem.getID()), et(e);
        }),
        Topics.get(Topics.EDIT_FORM_FILL).subscribe(function (e) {
          (e.vaultItem = e.vaultItem.getID()), tt(e);
        }),
        Topics.get(Topics.EDIT_APPLICATION).subscribe(function (e) {
          (e.vaultItem = e.vaultItem.getID()), bg.LPPlatform.openTabDialog("application", e);
        }),
        Topics.get(Topics.IDENTITY_ENABLE).subscribe(function (e) {
          LPProxy.enableIdentity(e), (ue = e);
        }),
        Topics.get(Topics.CONFIRM).subscribe(function (e) {
          F("confirmation", e);
        }),
        Topics.get(Topics.ERROR).subscribe(function (e) {
          e && F("alert", { title: Strings.Vault.ERROR, text: e });
        }),
        Topics.get(Topics.REPROMPT).subscribe(function (e) {
          F("reprompt", { successCallback: e });
        }),
        Topics.get(Topics.LEFT_ARROW).subscribe(function () {
          LPTools.disableMouse(), t(!0);
        }),
        Topics.get(Topics.CLEAR_DATA).subscribe(function () {
          for (var e = k.length - 1; -1 < e; --e) k[e].pop();
          (k = []),
            LPTools.setNavIndex(0),
            f.val(""),
            (Pe = _e = he = S = ve = !1),
            (Ie = {}),
            (ye = {}),
            (w = null),
            at && at(),
            Mt && Mt(),
            p.removeClass("initialized"),
            bg.get("g_issafari_appext") &&
              ($("#extensionDropdown").removeClass("panelIsActive"),
              $("#extensionDropdown").removeClass("expirationSet"),
              $("#notificationContainer").empty(),
              $("#panelContainer").empty()),
            m.empty(),
            u.empty(),
            Dialog.prototype.closeAllDialogs(!0);
        }),
        Topics.get(Topics.INITIALIZED).subscribe(function () {
          Strings.translate(a.body), LPPlatform.setupDropdownImportMenu(p);
        }),
        function (e, t) {
          $("#container").LP_hide(),
            LPTools.removeKeyBoardNavigation(),
            (t = $.extend(t, {
              onResize: function (e, t) {
                LPPlatform.setDropdownPopoverSize(e, t);
              },
              onClose: function () {
                LPPlatform.closePopup();
              }
            })),
            LPDialog.openDialog(e, t);
        }),
      Ft,
      Bt = function () {
        Topics.get(Topics.CLEAR_DATA).publish();
      },
      Ot,
      Nt,
      Ut,
      B,
      Rt;
    return (
      (Ut = function () {
        bg.getData({
          context: "extensionDropdown",
          callback: function () {
            we();
          }
        });
      }),
      (B = {}),
      (Rt = function (e) {
        LPPlatform.move(screenY - (e.screenY - B.y), e.screenX - B.x);
      }),
      {
        setup: we,
        State: C,
        isMatchingSite: Ke,
        setGroupLabel: xe,
        open: function () {
          var e = bg.get("g_badgedata");
          if (e && "notification" === e.cmd) {
            switch (e.type) {
              case "error":
                F("notification", { notification: bg.get("g_notification_data") });
                break;
              case "mpwchange":
                F("securityNotice", { notification: bg.get("g_notification_data") });
                break;
              case "lpalert":
                F("breachAlert", { notification: bg.get("g_notification_data") });
                break;
              default:
                we();
            }
            bg.clear_badge();
          } else e && "migration" === e.cmd ? (F("migration", { notification: e }), bg.clear_badge()) : we();
        },
        openDialog: F,
        reset: Bt,
        setBigIcons: function (e) {
          bg.set("g_bigicons", e);
        },
        openQuickSearch: function () {
          document.body.classList.add("quickSearch"),
            window.addEventListener("mousedown", function (e) {
              e.target === document.getElementById("searchContainer") &&
                ((B.x = e.clientX), (B.y = e.clientY), window.addEventListener("mousemove", Rt), e.preventDefault());
            }),
            window.addEventListener("mouseup", function () {
              window.removeEventListener("mousemove", Rt);
            }),
            Topics.get(Topics.ESCAPE).subscribe(function () {
              LPPlatform.doClosePopup();
            }),
            (Account.prototype.getDisplayClass = function () {
              return MatchingAccountDisplay;
            }),
            "undefined" != typeof bg ? Ut() : LPPlatform.initialize({ context: "extensionDropdown", callback: Ut });
        },
        setSize: _
      }
    );
  })(document));
