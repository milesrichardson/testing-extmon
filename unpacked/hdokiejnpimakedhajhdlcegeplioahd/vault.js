var reduxApp,
  isSPA = ((LPVault = {}), "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()),
  initialize = function (u, d, B) {
    var R = Strings.translateString("Folder (a-z)"),
      V = Strings.translateString("Folder (z-a)"),
      n = Strings.translateString("Name (a-z)"),
      i = Strings.translateString("Name (z-a)"),
      U = Strings.translateString("Most Recent"),
      N = Strings.translateString("Sender (a-z)"),
      G = Strings.translateString("Sender (z-a)"),
      z = Strings.translateString("Recipient (a-z)"),
      H = Strings.translateString("Recipient (z-a)"),
      e = [R, V, n, i, U],
      W = [n, i],
      Y = [n, i, z, H, U],
      q = [n, i, N, G, U],
      j = [n, i],
      t = [n, i],
      K,
      X,
      J,
      Q,
      r =
        ("undefined" != typeof getHtmlLanguageCode
          ? (document.documentElement.lang = getHtmlLanguageCode(bg.get("g_language")))
          : (document.documentElement.lang = "en-US"),
        (d.handleSubscriptionChange = function () {
          var t = 300,
            n = 0,
            i = Strings.translateString("Subscription updated. Thanks for choosing LastPass!"),
            o,
            r =
              ((o = getCookie("subscription_updated")) && (deleteCookie("subscription_updated"), Notifications.displaySuccessMessage(i)),
              setInterval(function () {
                var e;
                (o = getCookie("subscription_updated")) &&
                  (deleteCookie("subscription_updated"),
                  localStorage.setItem(bg.get("g_username_hash") + "LPNotificationSuccessMessage", i),
                  clearInterval(r),
                  LPFeatures.secondaryOnboardingEnabled()) &&
                  void 0 !== reduxApp &&
                  "function" == typeof reduxApp.setSecondaryOnboardingClaimedView &&
                  (e = setInterval(function () {
                    n === t && clearInterval(e),
                      "visible" === document.visibilityState &&
                        (reduxApp.setSecondaryOnboardingClaimedView(),
                        setTimeout(function () {
                          parent.location.reload();
                        }, 5e3)),
                      n++;
                  }, 1e3));
              }, 500));
        }),
        (d.handleShowingNotificationsFromRedux = function () {
          var n = function (e, t) {
              e && t && ("string" == typeof t ? Notifications.displayAlertMessage(t) : Notifications.displayAlertMessage(t.id));
            },
            i = function (e, t) {
              e && t && ("string" == typeof t ? Notifications.displaySuccessMessage(t) : Notifications.displaySuccessMessage(t.id));
            },
            e,
            t;
          void 0 !== reduxApp &&
            "function" == typeof reduxApp.subscribeForState &&
            ((e = reduxApp.getState().settings.alertMessagetext),
            (t = reduxApp.getState().settings.successMessagetext),
            n(e, e),
            i(t, t),
            reduxApp.subscribeForState({
              handler: function (e, t) {
                n(e, t);
              },
              selector: "settings.alertMessagetext"
            }),
            reduxApp.subscribeForState({
              handler: function (e, t) {
                i(e, t), Notifications.closeAlertMessage();
              },
              selector: "settings.successMessagetext"
            }),
            void 0 !== reduxApp) &&
            "function" == typeof reduxApp.getState &&
            reduxApp.getState().settings.features &&
            reduxApp.getState().settings.features.security_dashboard_2_0 &&
            reduxApp.subscribeForState({
              handler: function (e, t) {
                var t;
                !0 === t
                  ? PasswordChangeSuccessfulBanner.initialize()
                  : (t = document.getElementById(PasswordChangeSuccessfulBanner.elementId)) && t.remove();
              },
              selector: "securityDashboard.successNotification.passwordChangedSuccessInVault"
            });
        }),
        (d.registerProductPriceUpdatesObserver =
          ((K = { Premium: [], Families: [] }),
          (X = function (e) {
            bg.LPPlatform.setProductPriceUpdatesObserver(e);
          })(
            (J = function (e, t, n) {
              LPPlatform.isValidProductType(e) &&
                (K[e].forEach(function (e) {
                  "function" == typeof e && e(t, n);
                }),
                X(J));
            })
          ),
          function (e, t) {
            LPPlatform.isValidProductType(e) && (K[e].push(t), LPPlatform.updateProductPrice(e, t));
          })),
        (d.upgradeToPremiumAction =
          ((Q = !1),
          bg.LPPlatform.isSafariAppStore(function (e) {
            Q = e;
          }),
          function (e) {
            var e = {
              apple: void 0 !== e && "function" == typeof e.apple ? e.apple : function () {},
              self: void 0 !== e && "function" == typeof e.self ? e.self : function () {}
            };
            Q ? (d.showVaultUpgradeToPremiumDialog("paywall"), e.apple()) : (LPPlatform.purchasePremium("Premium"), e.self());
          })),
        (d.isAppStore =
          (bg.LPPlatform.isSafariAppStore(function (e) {
            d.isAppStore = e;
          }),
          !1)),
        function (e) {
          this.options = e;
        }),
      a =
        ((r.prototype.getAddElement = function () {
          return (
            void 0 === this.addElement &&
              ((this.addElement = LPTools.createElement("div", "addMenuItem")),
              this.build(this.addElement, this.options.icon || "images/vault_4.0/Add.png", 18)),
            this.addElement
          );
        }),
        (r.prototype.build = function (e, t, n) {
          var i = this.options.autoId || "",
            i =
              (e.appendChild(LPTools.createElement("span", null, Strings.Vault[this.options.text])).setAttribute("automation-id", i),
              LPTools.createElement("div")),
            n = LPTools.createElement("div", { tabindex: n, class: "focusable-add-menu-item space-clickable" }),
            t = LPTools.createElement("img", { src: isSPA ? LPPlatform.getResourcePath(t) : t });
          e.appendChild(i),
            i.appendChild(n),
            n.appendChild(t),
            $(n).bind("focus", ft),
            $(n).bind("blur", ht),
            $(e).bind("click", this.options.func);
        }),
        (r.prototype.getMenuElement = function (e) {
          return (
            void 0 === this.menuElement &&
              ((this.menuElement = LPTools.createElement("li", "addMenuItem")),
              this.build(this.menuElement, this.options.additionalIcon, e)),
            this.menuElement
          );
        }),
        {
          Site: new r({
            text: "ADD_SITE",
            autoId: "vaultAddSiteButton",
            icon: "images/vault_4.0/Sites_Active.png",
            func: function () {
              d.openSiteDialog({ saveOptions: { source: "vault" } });
            }
          }),
          Note: new r({
            text: "ADD_NOTE",
            autoId: "vaultAddNoteButton",
            icon: "images/vault_4.0/Notes_Active.png",
            additionalIcon: "images/vault_4.0/Add_Secure_Note.png",
            func: function () {
              d.openNoteDialog({ saveOptions: { source: "vault" } });
            }
          }),
          FormFill: new r({
            text: "ADD_FORM_FILL",
            autoId: "vaultAddFormFillButton",
            icon: "images/vault_4.0/Form_Fills_Active.png",
            func: function () {
              d.openFormFillDialog({ saveOptions: { source: "vault" } });
            }
          }),
          SharedFolder: new r({
            text: "ADD_SHARED_FOLDER",
            autoId: "vaultAddSharedFolderButton",
            func: function () {
              reduxApp && LPProxy.isExpiredFamilyUser()
                ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Add Shared Folder")
                : d.openCreateSharedFolderDialog();
            }
          }),
          Identity: new r({
            text: "ADD_IDENTITY",
            autoId: "vaultAddIdentityButton",
            func: function () {
              d.openIdentityDialog();
            }
          }),
          EmergencyAccess: new r({
            text: "GIVE_EMER_ACCESS",
            autoId: "vaultGiveEmerAccessButton",
            func: function () {
              (LPFeatures.isVaultPremiumPopupsEnabled() && LPProxy.isFreeUser()) || LPProxy.isExpiredUser()
                ? (bg.sendLpImprove("restricted_emergency_access_lightbox_shown"), d.showVaultUpgradeToPremiumDialog("emergency_access"))
                : dialogs.addEmergencyAccess.open();
            }
          }),
          CreditMonitoring: new r({
            text: "ADD_CREDIT_MON",
            autoId: "vaultAddCreditButton",
            func: function () {
              d.openCreateCreditMonitoringDialog();
            }
          }),
          Folder: new r({
            text: "ADD_FOLDER",
            autoId: "vaultAddNewFolderButton",
            additionalIcon: "images/vault_4.0/Add_Folder.png",
            func: function () {
              d.openFolderDialog(), bg.sendLpImprove("vault_add_folder_click", { os_type: v, browser_type: _ });
            }
          }),
          ShareItems: new r({
            text: "SHARE_ITEMS",
            autoId: "vaultAddShareItemsButton",
            additionalIcon: "images/vault_4.0/Add_Share.png",
            func: function () {
              d.openShareDialog();
            }
          })
        }),
      Z = Strings.translateString("search my vault"),
      o = null,
      s = $("#advacedOptionsOverlay"),
      ee = $("#inProgressOverlay"),
      te = $("#header"),
      ne = $("#leftMenu"),
      ie = $("#vaultContent"),
      oe = $("#tools"),
      re = $("#helpTools"),
      ae = $("#options"),
      l = $("#mainScroll"),
      c = $("#addMenu"),
      se = $("#addMenuItems"),
      le = $("#addMenuButton"),
      ce = $("#addMenuButtonCustom"),
      ue = $("#gridButton"),
      de = $("#listButton"),
      pe = $("#collapseAllToggle"),
      ge = $("#sizeToggle"),
      me = $("#orderOption"),
      fe = $("#sortOrderMenu"),
      ye = $("#sortOrderOption"),
      he = $("#userMenuItems"),
      p = $("#leftMenuMinimizeButton"),
      Pe = $("#moreActions"),
      Se = u.getElementById("contextMenu").parentElement,
      g = $(u.body),
      be = $("#advancedMenuItem"),
      ve = $("#helpMenuItem"),
      _e = u.getElementById("sortOrderMenu").children[0],
      m = $("#vaultSearch"),
      Le = $("#userMenuContainer"),
      Ee = $("#pageTitle"),
      we = $("#cloudAppsMenuItem"),
      Te = $("#cloudAppsFilterMenuItem"),
      Ie = $(".securityMenuItem"),
      xe = $(".securityDashboardMenuItem"),
      Ae = $("#emergencyAccessMenuItem"),
      f = $("#familyAdminConsoleMenuItem"),
      Ce = $(".emptyVaultWrapper"),
      Fe = $("#sharedFoldersMenuItem"),
      De = $("#addMenuButtonDefault"),
      Me = $("#welcomePremiumTrial"),
      y = ["leftMenu", "header", "vaultContent", "addMenuButtonDefault"],
      ke = ["sharedFolders", "sentShares", "receivedShares"],
      Oe = ["emergencyTrusted", "emergencyTrusting"],
      Be = document.getElementById("sharingMenuItemOmaria"),
      Re = null,
      h = null,
      $e = !0,
      P = null,
      S = null,
      b = null,
      Ve = function (e, t) {
        b.getContainer() === t && (b.removeBodyState(), b.addBodyState());
      },
      v = getOsType() ? getOsType() : "Unknown OS",
      _ = getBrowserType() ? getBrowserType() : "Unknown Browser",
      L = function () {
        return (
          void 0 !== reduxApp &&
          "function" == typeof reduxApp.getState &&
          reduxApp.getState().settings.features &&
          reduxApp.getState().settings.features.security_dashboard_for_free_users
        );
      },
      E = function (e) {
        var i;
        (e = e || {}),
          (this.state = e.bodyState),
          (this.menuElement = e.menuElement || null),
          (this.emptyState = this.state + "Empty"),
          (this.container = null),
          (this.sortOptions = e.sortOptions || null),
          (this.persistent = LPTools.getOption(e, "persistent", !0)),
          (this.searchPlaceholder = LPTools.getOption(e, "searchPlaceholder", Z)),
          (this.title = e.title || ""),
          (this.addMenu = e.addMenu),
          (this.additionalOptionButtons = e.additionalOptionButtons),
          (this.scrollParent = e.scrollParent),
          (this.notificationCount = e.notificationCount),
          (i = this),
          Topics.get(Topics.CLEAR_DATA).subscribe(function () {
            i.clear();
          }),
          e.menuElement &&
            e.menuElement.unbind("click.menu").bind("click.menu", function () {
              var e = void 0,
                t = null;
              try {
                void 0 !== (t = LPProxy.getConfigViewObject(i.getElement().id)).segmentEvent && bg.sendLpImprove(t.segmentEvent),
                  (e = t.url);
              } catch (e) {}
              if (bg.get("g_is_restricted")) {
                var n = t ? t.id : null;
                if (["passwords", "notes", "addresses", "payment-cards", "bank-accounts"].includes(n))
                  return void d.openVaultDeviceLimitDialog();
              }
              void 0 !== e
                ? bg.openOnNewTab(e)
                : i.parent
                ? i.parent.show(i)
                : (i.show(),
                  "reactMainView" !== i.state &&
                    ["passwords", "notes", "addresses", "payment-cards", "bank-accounts"].includes(t.id) &&
                    bg.sendLpImprove("vault_open_view", { view_name: t.name, os_type: v, browser_type: _ }),
                  "reactMainView" === i.state && $("#main").removeAttr("style"));
            });
      },
      w =
        ((E.prototype.getElement = function () {
          return this.menuElement.get(0);
        }),
        (E.prototype.applyContainerFunction = function (e) {
          var t = this.getContainer();
          if (null !== t)
            switch (typeof e) {
              case "string":
                var n = [];
                if (1 < arguments.length) for (var i = 1, o = arguments.length; i < o; ++i) n.push(arguments[i]);
                return t[e].apply(t, n);
              case "function":
                return e(t);
            }
        }),
        (E.prototype.updateNotificationCount = function (e) {
          var t = 0,
            n = this.menuElement.find(".tabNotification");
          return (
            void 0 !== e
              ? ((t = parseInt(n.text())), Yt(n, t - e), this.parent && this.parent.updateNotificationCount(e))
              : this.notificationCount && ((t = this.notificationCount()), Yt(n, t)),
            t
          );
        }),
        (E.prototype.getSortOptions = function () {
          return this.sortOptions;
        }),
        (E.prototype.getContainer = function () {
          return this.container;
        }),
        (E.prototype.setContainer = function (e, t) {
          (this.container = e) &&
            ((e._buildOptions.stateChangeCallback = Ve),
            LPTools.getOption(t, "checkForStateChange", !0) && b === this && Ve(e.isEmpty(), e),
            b === this) &&
            "" !== m.val() &&
            d.search(m.val());
        }),
        (E.prototype.openAll = function () {
          this.applyContainerFunction("openAll");
        }),
        (E.prototype.collapseAll = function () {
          this.applyContainerFunction("collapseAll");
        }),
        (E.prototype.createSelectionContextMenu = function () {
          return this.applyContainerFunction("createSelectionContextMenu");
        }),
        (E.prototype.isEmpty = function () {
          return this.applyContainerFunction("isEmpty");
        }),
        (E.prototype.search = function (e) {
          var t = this.applyContainerFunction("applySearch", e);
          e && null === t && !this.isEmpty() ? g.addClass("searchEmpty") : g.removeClass("searchEmpty");
        }),
        (E.prototype.clearSelected = function () {
          this.applyContainerFunction("clearSelected");
        }),
        (E.prototype.getSelectedItems = function () {
          return this.applyContainerFunction("getSelectedItems");
        }),
        (E.prototype.getSortOrder = function () {
          var e;
          return (
            void 0 === this.sortOrder &&
              ((e = this.sortOptions ? this.sortOptions[0] : null), (this.sortOrder = localStorage.getItem(this.state + "SortOrder") || e)),
            this.sortOrder
          );
        }),
        (E.prototype.setSortOrder = function (e) {
          (this.sortOrder = e), localStorage.setItem(this.state + "SortOrder", e);
        }),
        (E.prototype.addBodyState = function () {
          g.addClass(this.getState());
          var e = this.getContainer();
          null !== e && e.isEmpty() ? g.addClass("empty") : g.removeClass("empty"),
            setTimeout(function () {
              Topics.get(Topics.EMPTY_VAULT_STATE_CHANGE).publish();
            }, 400);
        }),
        (E.prototype.removeBodyState = function () {
          g.removeClass(this.emptyState), g.removeClass(this.state);
        }),
        (E.prototype.hide = function () {
          if (
            (null !== this.menuElement && this.menuElement.removeClass("selected"),
            this.parent && null !== this.parent.menuElement && this.parent.menuElement.removeClass("selected"),
            this.removeBodyState(),
            this.additionalOptionButtons)
          )
            for (var e = 0, t = this.additionalOptionButtons.length; e < t; ++e) this.additionalOptionButtons[e].detach();
          this.persistent ? this.applyContainerFunction("hide") : this.clear();
        }),
        (E.prototype.getAddMenuItems = function () {
          var e = [];
          if (this.addMenu && 0 < this.addMenu.length)
            for (var t = 0, n = this.addMenu.length; t < n; ++t) {
              var i = this.addMenu[t];
              (i === a.ShareItems && !LPFeatures.allowIndividualSharing()) || (i === a.Note && !LPFeatures.allowNotes()) || e.push(i);
            }
          return e;
        }),
        (E.prototype.show = function () {
          if (($("#vault").focus(), b !== this)) {
            null !== b && (at(), b.hide()),
              m.attr("placeholder", this.searchPlaceholder),
              m.next().attr("tabindex", 3),
              null !== this.menuElement && this.menuElement.addClass("selected"),
              this.parent && null !== this.parent.menuElement && this.parent.menuElement.addClass("selected"),
              (-1 !== this.state.indexOf("vaultContent") ? Ft : Dt)(),
              -1 !== ke.indexOf(this.state)
                ? Ee.text("Sharing Center")
                : -1 !== Oe.indexOf(this.state)
                ? Ee.text("Emergency Access")
                : Ee.text(this.title);
            var e = bg.get("g_is_restricted"),
              n = parseInt(bg.get("g_primary_device_switches_left")),
              t = function () {
                var e = bg.get("g_username_hash") + "LPNotificationSuccessMessage",
                  t;
                1 < n && (t = Strings.translateString("You switched to computer: %s switches left", n - 1)),
                  1 === n && (t = Strings.translateString("You made the final switch to computer"));
                try {
                  t && localStorage.setItem(e, t);
                } catch (e) {}
              },
              i;
            if (
              LPProxy.isExpiredFamilyUser() &&
              !bg.localStorage_getItem(bg.get("g_uid") + "_firstExpiredFamilyNotification") &&
              reduxApp.getState().settings.primaryDeviceIsWeb
            )
              reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "First vault opening"),
                bg.localStorage_setItem(bg.get("g_uid") + "_firstExpiredFamilyNotification", JSON.stringify(new Date())),
                this.addBodyState();
            else if (e) {
              reduxApp &&
                "function" == typeof reduxApp.subscribeForState &&
                reduxApp.subscribeForState({
                  handler: function (e) {
                    e && location.reload();
                  },
                  selector: "settings.isRestricted"
                }),
                (ln ? Lt : _t)(),
                $("#restrictedVaultItems").empty(),
                $("#options").css({ "background-color": "white" });
              for (var o = 0; o < 8; o++)
                $("#restrictedVaultItems").append(
                  "<div class='restricted-vault-item'><div class='restricted-vault-item-header'><div class='restricted-vault-item-logo'></div></div><div class='restricted-vault-item-footer'><div class='restricted-vault-item-small-bar'></div><div class='restricted-vault-item-large-bar'></div></div></div>"
                );
              switch (n) {
                case 0:
                  $("#restrictedVaultTitle").text(Strings.translateString("Everything is safe in your vault.")),
                    reduxApp && LPProxy.isExpiredFamilyUser()
                      ? ($("#restrictedVaultMessage").text(
                          Strings.translateString(
                            "To use LastPass on computer, upgrade to Families or Premium. Otherwise, log in on a mobile device."
                          )
                        ),
                        $("#restrictedVaultPrimaryButton").text(Strings.translateString("Upgrade for unlimited access")),
                        $("#restrictedVaultLearnMoreLink").text(Strings.translateString("Which plan is right for you?")))
                      : ($("#restrictedVaultMessage").text(
                          Strings.translateString("To use LastPass on computer, go Premium. Otherwise, log in on a mobile device.")
                        ),
                        $("#restrictedVaultPrimaryButton").text(Strings.translateString("Go premium")),
                        d.registerProductPriceUpdatesObserver("Premium", function (e, t) {
                          var n = Strings.translateString("Go Premium for only <currency><price>/month"),
                            n;
                          (n = (n = n.replace("<price>", e)).replace("<currency>", t)), $("#restrictedVaultPrimaryButton").text(n);
                        }),
                        $("#restrictedVaultLearnMoreLink").text(Strings.translateString("What is LastPass Premium?"))),
                    $("#restrictedVaultLearnMoreLink").attr("href", "https://www.lastpass.com/pricing/lastpass-premium-vs-free");
                  break;
                case 1:
                  reduxApp && LPProxy.isExpiredFamilyUser()
                    ? $("#restrictedVaultMessage").text(
                        Strings.translateString(
                          "This is your last opportunity to switch. Upgrade to Families or Premium for unlimited access."
                        )
                      )
                    : $("#restrictedVaultMessage").text(
                        Strings.translateString("This is your last opportunity to switch. Go Premium for unlimited access.")
                      );
                  break;
                case 2:
                  reduxApp && LPProxy.isExpiredFamilyUser()
                    ? $("#restrictedVaultMessage").text(
                        Strings.translateString(
                          "You can switch your device type 2 more times to find the right option for you. Upgrade to Families or Premium for unlimited access."
                        )
                      )
                    : $("#restrictedVaultMessage").text(
                        Strings.translateString(
                          "You can switch your device type 2 more times to find the right option for you. Go Premium for unlimited access."
                        )
                      );
                  break;
                case 3:
                  $("#restrictedVaultMessage").text(
                    Strings.translateString(
                      "You can only use LastPass for free on one device type. Switch up to 3 times to find the right option for you."
                    )
                  );
                  break;
                default:
                  $("#restrictedVaultMessage").text(
                    Strings.translateString(
                      "You can only use LastPass for free on one device type. Switch up to %s times to find the right option for you.",
                      n
                    )
                  );
              }
              $("#restrictedVaultPrimaryButton").off("click"),
                reduxApp && LPProxy.isExpiredFamilyUser() && 0 === n
                  ? $("#restrictedVaultPrimaryButton").click(function () {
                      reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Multi Device Paywall");
                    })
                  : 1 < n
                  ? $("#restrictedVaultPrimaryButton").click(function () {
                      bg.setPrimaryDevice(
                        function () {
                          var e = LPProxy.refreshSites();
                          e
                            ? e
                                .then(function () {
                                  t(), location.reload();
                                })
                                .catch(function () {
                                  Notifications.displayErrorMessage(
                                    "Something went wrong. We couldn’t switch your device type. Please try again."
                                  );
                                })
                            : (t(), location.reload());
                        },
                        function () {
                          Notifications.displayErrorMessage("Something went wrong. We couldn’t switch your device type. Please try again.");
                        }
                      );
                    })
                  : 1 === n
                  ? $("#restrictedVaultPrimaryButton").click(function () {
                      d.openVaultDeviceLimitDialog();
                    })
                  : $("#restrictedVaultPrimaryButton").click(function () {
                      d.upgradeToPremiumAction({
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
                          dialog.close();
                        }
                      });
                    }),
                $("#passwords, #notes, #addresses, #payment-cards, #bank-accounts").css({ color: "#5D6B73" }),
                $(
                  "#toolsImport, #manageIdentitiesMenuItem, #openTourMenuItem, #toolsOpenFavorites, #historyMenuItem, #deletedMenuItem"
                ).css({ color: "#B9C0C9" }),
                ln || $("#creditMonitoringMenuItem").css({ color: "#B9C0C9" }),
                L() ||
                  ($(".securityDashboardMenuItem .leftMenuItem").css({ color: "#5D6B73" }),
                  $(".securityDashboardMenuItem .menuIcon").css({ opacity: "0.5" }).empty()),
                $(".sharingMenuItem .leftMenuItem").css({ color: "#5D6B73" }),
                $(".sharingMenuItem .menuIcon").css({ opacity: "0.5" }),
                $("#emergencyAccessMenuItem .leftMenuItem").css({ color: "#5D6B73" }),
                $("#emergencyAccessMenuItem .menuIcon").css({ opacity: "0.5" });
            } else this.addBodyState();
            this.scrollParent.scrollTop(0);
            var e = this.getSortOptions(),
              e = ((null !== b && b.getSortOptions() === e) || lt(e), (b = this).getSortOrder()),
              r =
                (e && d.sort(e),
                this.additionalOptionButtons && ae.append(this.additionalOptionButtons),
                se.children().detach(),
                ce.children().detach(),
                this.getAddMenuItems());
            if (0 < r.length) {
              var e = r[0];
              ce.append(e.getAddElement());
              for (var o = r.length - 1; 0 < o; --o) se.append(r[o].getMenuElement(19));
              le.show();
            } else le.hide();
            LPProxy.getPreference("leftMenuMaximize") ? d.maximizeLeftMenu() : d.minimizeLeftMenu();
          }
        }),
        (E.prototype.getState = function () {
          return this.isEmpty() ? this.emptyState : this.state;
        }),
        (E.prototype.clear = function () {
          this.container && (this.container.destruct(), (this.container = null));
        }),
        function (e) {
          var n;
          (e.bodyState = e.bodyState || e.contentID),
            E.call(this, e),
            (this.contentElement = u.getElementById(e.contentID)),
            (this.containerType = e.containerType),
            (this.dataSource = e.dataFunction),
            (this.buildOptions = e.buildOptions),
            (this.filter = e.filter),
            (n = this),
            Topics.get(Topics.IDENTITY_ENABLE).subscribe(function (e) {
              n.refresh(e);
            }),
            (n.initializeCallback = function (e, t) {
              var e = new n.containerType(e, n.buildOptions);
              e.initialize(n.contentElement, n.scrollParent),
                n.filter && e.applyFilter(n.filter, { checkForStateChange: !1 }),
                n.setContainer(e, { checkForStateChange: LPTools.getOption(t, "checkForStateChange", !1) }),
                Topics.get(Topics.DIALOG_LOADED).publish();
            });
        }),
      T =
        ((((w.prototype = Object.create(E.prototype)).constructor = w).prototype.makeDataRequest = function (e, t) {
          (t.error = function () {
            Topics.get(Topics.DIALOG_LOADED).publish();
          }),
            LPRequest.makeDataRequest(e, t);
        }),
        (w.prototype.initialize = function (e, t) {
          var n, i;
          null === this.container &&
            null !== this.containerType &&
            null !== this.dataSource &&
            ((n = this),
            (e = (i = e)
              ? function (e, t) {
                  n.initializeCallback(e, t), i();
                }
              : n.initializeCallback),
            Topics.get(Topics.DIALOG_LOADING).publish(),
            this.dataSource.call(this, e, t));
        }),
        (w.prototype.show = function (e) {
          var t;
          null === this.container
            ? (t = this).initialize(function () {
                e && e(), E.prototype.show.apply(t);
              })
            : (E.prototype.show.apply(this), e && e());
        }),
        (w.prototype.refresh = function (e) {
          null !== this.container &&
            (this.container.destruct(), (this.container = null), this.initialize(null, { identity: e, checkForStateChange: !0 }));
        }),
        function (e) {
          E.call(this, e), this.setContainer(e.container || null), (this.filter = e.filter);
        }),
      I =
        ((((T.prototype = Object.create(E.prototype)).constructor = T).prototype.show = function () {
          this.container.applyFilter(this.filter, { checkForStateChange: !1 }), E.prototype.show.apply(this, arguments);
        }),
        function (i) {
          var n = null,
            e;
          if (i.views && 0 < i.views.length) {
            for (var t = 0, o = i.views.length; t < o; ++t) i.views[t].parent = this;
            (this.show = function (e, t) {
              e ? (e.show(t), (n = e)) : (n = null === n ? i.defaultView() : n).show(t);
            }),
              (this.clear = function () {
                n = null;
              }),
              (this.menuElement = i.menuElement);
            var r = i.menuElement.find(".notificationBubble"),
              a =
                ((this.updateNotificationCount = function (e) {
                  for (var t = 0, n = r.length; t < n; ++t) {
                    var i = $(r[t]);
                    Yt(i, parseInt(i.text()) - e);
                  }
                }),
                function () {
                  for (var e = 0, t = 0, n = i.views.length; t < n; ++t) e += i.views[t].updateNotificationCount();
                  Yt(r, e);
                });
            Topics.get(Topics.LOGIN).subscribe(a),
              Topics.get(Topics.REFRESH_DATA).subscribe(a),
              (e = this),
              Topics.get(Topics.CLEAR_DATA).subscribe(function () {
                e.clear();
              });
          }
        }),
      Ue = new w({
        containerType: IdentityContainer,
        dataFunction: function (e) {
          for (var t = [], n = 0, i = o._identities.length; n < i; ++n) t.push(o._identities[n].newDisplayObject());
          e(t);
        },
        sortOptions: t,
        contentID: "identityContent",
        bodyState: "identity",
        scrollParent: l,
        searchPlaceholder: Strings.translateString("search my identities"),
        buildOptions: { multiSelect: !1 },
        title: Strings.translateString("Identities"),
        addMenu: [a.Identity]
      }),
      Ne = new w({
        containerType: CreditMonitoringContainer,
        dataFunction: function (t, n) {
          this.makeDataRequest(LPProxy.getCreditMonitoringData, {
            success: function (e) {
              Ge(t, e, n);
            }
          });
        },
        persistent: !(Ge = function (e, t, n) {
          for (var i = !0, o = [], r = 0, a = t.length; r < a; ++r) {
            var s = t[r];
            "1" !== s.premium && (i = !1), o.push(new CreditMonitoringProfile(s));
          }
          var l = $("#creditMonitoring .viewExplanation");
          i
            ? (l.hide(), (Ne.title = Strings.translateString("Premium Credit Monitoring")))
            : (l.show(), (Ne.title = Strings.translateString("Credit Monitoring"))),
            e(o, n);
        }),
        contentID: "creditMonitoring",
        scrollParent: l,
        title: Strings.translateString("Credit Monitoring"),
        addMenu: [a.CreditMonitoring]
      }),
      Ge,
      ze = new w({
        containerType: GridListContainer,
        dataFunction: function (e, t) {
          this.makeDataRequest(LPProxy.getDeletedItems, { success: e });
        },
        filter: { showEmptyGroups: !1 },
        sortOptions: e,
        contentID: "deletedItems",
        scrollParent: l,
        persistent: !1,
        searchPlaceholder: Strings.translateString("search my deleted items"),
        buildOptions: { allowDrag: !1, stickyFolders: !0, stickyFolderParent: u.getElementById("main") },
        title: Strings.translateString("Deleted Items"),
        additionalOptionButtons: [
          ((t = LPTools.createElement("div", { class: "optionButton optionButtons", id: "purgeAllButton" }, Strings.Vault.PURGE_ALL)),
          LPPlatform.addEventListener(t, "click", function () {
            var e = ze.getContainer(),
              e;
            e && 0 < (e = e.getItemModelChildren()).length && e[0].purge({ itemsForAction: e });
          }),
          $(t))
        ]
      }),
      t,
      x =
        ((ze.refresh = function () {}),
        new w({
          containerType: EmergencyAccessRecipientContainer,
          dataFunction: function (e, t) {
            this.makeDataRequest(LPProxy.getEmergencyAccessRecipientInfo, { success: e });
          },
          filter: { showEmptyGroups: !1 },
          sortOptions: e,
          menuElement: $("#emergencyTrustedMenuItem"),
          contentID: "emergencyTrustedContainer",
          bodyState: "emergencyTrusted",
          scrollParent: l,
          persistent: !1,
          searchPlaceholder: Strings.translateString("search people I trust"),
          buildOptions: { allowDrag: !1 },
          title: Strings.translateString("People I Trust"),
          addMenu: [a.EmergencyAccess]
        })),
      A = new w({
        containerType: EmergencyAccessSharerContainer,
        dataFunction: function (e, t) {
          this.makeDataRequest(LPProxy.getEmergencyAccessSharerInfo, { success: e });
        },
        filter: { showEmptyGroups: !1 },
        notificationCount: function () {
          var e = 0,
            t = bg.get("g_emer_sharers");
          if (t) for (var n = 0, i = t.length; n < i; ++n) "0" === t[n].accepted && ++e;
          return e;
        },
        sortOptions: e,
        menuElement: $("#emergencyTrustingMenuItem"),
        contentID: "emergencyTrusting",
        bodyState: "emergencyTrusting",
        scrollParent: l,
        persistent: !1,
        searchPlaceholder: Strings.translateString("search people who trust me"),
        buildOptions: { allowDrag: !1 },
        title: Strings.translateString("People Who Trust Me")
      }),
      He = new I({
        menuElement: $("#emergencyAccessMenuItem"),
        defaultView: function () {
          return 0 < A.notificationCount() ? A : x;
        },
        views: [x, A]
      }),
      We = new E({
        bodyState: "reactMainView",
        menuElement: $(".securityDashboardMenuItem"),
        persistent: !1,
        contentID: "securityDashboard",
        scrollParent: l,
        filter: { multiSelect: !1, showEmptyGroups: !1 },
        buildOptions: { allowDrag: !1, multiSelect: !1, stickyFolders: !1 },
        title: Strings.translateString("Security Dashboard")
      }),
      Ye =
        ((We.show = function () {
          L()
            ? (E.prototype.addBodyState.call(this),
              E.prototype.show.call(this),
              reduxApp.navigate("/vault/security"),
              bg.sendLpImprove("vault_open_view", { view_name: "Security Dashboard", os_type: v, browser_type: _ }),
              bg.get("g_is_restricted") &&
                ($("#restrictedVaultContent").css({ display: "none" }),
                $("#options").css({ display: "none" }),
                $("#main").addClass("hideOptionsContainer")))
            : bg.get("g_is_restricted")
            ? d.openVaultDeviceLimitDialog()
            : (E.prototype.show.call(this),
              reduxApp.navigate("/vault/security"),
              bg.sendLpImprove("vault_open_view", { view_name: "Security Dashboard", os_type: v, browser_type: _ }));
        }),
        (We.hide = function () {
          E.prototype.hide.call(this),
            reduxApp.navigate("/vault"),
            L() &&
              bg.get("g_is_restricted") &&
              ($("#restrictedVaultContent").css({ display: "block" }),
              $("#options").css({ display: "block" }),
              $("#main").removeClass("hideOptionsContainer"));
        }),
        new E({ bodyState: "reactMainView", scrollParent: l })),
      qe =
        ((Ye.show = function () {
          E.prototype.show.call(this), reduxApp.navigate("/vault/import-passwords");
        }),
        (Ye.hide = function () {
          E.prototype.hide.call(this), reduxApp.navigate("/vault");
        }),
        new E({ bodyState: "reactMainView", menuElement: $("#familyAdminConsoleMenuItem"), scrollParent: l })),
      C =
        ((qe.show = function () {
          reduxApp ? (E.prototype.show.call(this), reduxApp.navigate("/vault/family")) : bg.openFamilyConsole();
        }),
        (qe.hide = function () {
          E.prototype.hide.call(this), reduxApp.navigate("/vault");
        }),
        new w({
          containerType: IndividualShareContainer,
          sortOptions: q,
          menuElement: $("#receivedSharesMenuItem"),
          contentID: "receivedSharesContent",
          bodyState: "receivedShares",
          scrollParent: l,
          persistent: !1,
          notificationCount: function () {
            return bg.get("g_pendings").length;
          },
          searchPlaceholder: Strings.translateString("search my received shares"),
          buildOptions: { multiSelect: !1 },
          filter: { showEmptyGroups: !1, multiSelect: !1 },
          title: Strings.translateString("Shared with Me"),
          addMenu: [a.ShareItems],
          dataFunction:
            ((je = function (e) {
              for (var t = LPProxy.getAllModelItems(), n = [], i = 0, o = t.length; i < o; ++i) {
                var r = t[i],
                  a = e[r.getID()];
                a && "1" === a.state && r instanceof AccountBase && n.push(new AcceptedReceivedSharedItem(r, a));
              }
              return n;
            }),
            (Ke = function (e) {
              for (var t = LPProxy.getPendingRecievedShares(), n = !1, i = 0, o = t.length; i < o; ++i) {
                var r = t[i],
                  a = e[r._model.getID()];
                a ? (r._model._shareData = a) : (n = !0);
              }
              return n && LPProxy.refreshSites(), t;
            }),
            (Xe = function (e, t, n) {
              var i = je(e),
                e = Ke(e);
              t(i.concat(e));
            }),
            function (t, n) {
              this.makeDataRequest(LPProxy.getReceivedShareData, {
                params: { url: document.location.href },
                success: function (e) {
                  Xe(e, t, n);
                }
              });
            })
        })),
      je,
      Ke,
      Xe,
      Je = new w({
        containerType: IndividualShareContainer,
        sortOptions: Y,
        menuElement: $("#sentSharesMenuItem"),
        contentID: "sentSharesContent",
        bodyState: "sentShares",
        scrollParent: l,
        persistent: !1,
        searchPlaceholder: Strings.translateString("search my sent shares"),
        buildOptions: { multiSelect: !1 },
        filter: { showEmptyGroups: !1, multiSelect: !1 },
        title: Strings.translateString("Shared with Others"),
        addMenu: [a.ShareItems],
        dataFunction:
          ((Qe = function (e, t, n) {
            for (var i = LPProxy.getAllModelItems(), o = [], r = 0, a = i.length; r < a; ++r)
              var s = i[r], o = o.concat(LPTools.buildSentShareItems(s, e[s.getID()]));
            t(o, n);
          }),
          function (t, n) {
            this.makeDataRequest(LPProxy.getSentShareData, {
              params: {},
              success: function (e) {
                Qe(e, t, n);
              }
            });
          })
      }),
      Qe,
      F = new w({
        containerType: SharedFolderContainer,
        dataFunction:
          ((Ze = function (e, t, n) {
            for (var i = LPProxy.getAllSharedGroupModelsByID(), o = [], r = 0, a = e.length; r < a; ++r) {
              var s = e[r],
                l;
              s.sharedata && ((l = i[s.shareid]), o.push(new SharedFolderItem(l, s)));
            }
            t(o);
          }),
          function (t, n) {
            this.makeDataRequest(LPProxy.getSharedFolderData, {
              params: {},
              success: function (e) {
                Ze(e, t, n);
              }
            });
          }),
        notificationCount: function () {
          return bg.get("g_pending_shares").length;
        },
        sortOptions: j,
        menuElement: $("#sharedFoldersMenuItem"),
        contentID: "sharedFoldersContent",
        bodyState: "sharedFolders",
        scrollParent: l,
        searchPlaceholder: Strings.translateString("search my shared folders"),
        buildOptions: { multiSelect: !1 },
        title: Strings.translateString("Shared Folders"),
        addMenu: [a.SharedFolder],
        additionalOptionButtons: [
          ((t = $(LPTools.buildCheckbox(null, { text: Strings.translateString("View Deleted Shared Folders") }))).attr(
            "id",
            "showDeletedSharedFoldersButton"
          ),
          t.addClass("optionButtons"),
          t.bind("click", function () {
            an();
          }),
          t)
        ]
      }),
      t,
      Ze,
      et =
        ((F.initialize = function (e, t) {
          var n, i;
          (n = this),
            (e = (i = e)
              ? function () {
                  rn({ checkForStateChange: !1 }), i();
                }
              : function () {
                  rn({ checkForStateChange: !1 });
                }),
            w.prototype.initialize.call(this, e, t);
        }),
        new I({
          menuElement: $(".sharingMenuItem"),
          defaultView: function () {
            return 0 < C.notificationCount()
              ? C
              : LPProxy.getAccountClass() === Constants.USER_FREE ||
                (LPProxy.getAccountClass() === Constants.USER_PREMIUM && LPProxy.isPremiumAsAPerk() && !LPProxy.isLegacyPremium())
              ? Je
              : LPFeatures.allowSharedFolders() && 0 !== bg.get_show_expired_subscription_messaging().daysLeft
              ? F
              : C;
          },
          views: [F, Je, C]
        })),
      tt = new E({
        menuElement: $("#newSettingsMenuItem"),
        bodyState: "newSettings",
        title: Strings.translateString("Settings"),
        addMenu: null,
        scrollParent: $(document.body)
      }),
      nt = function () {
        LPTools.hideContextMenu(S), (S = null);
      },
      D = function (e) {
        e.preventDefault(), e.stopPropagation();
      },
      it = function () {
        m.val("");
      },
      ot = function () {
        nt(), en(), ut(), dt(), yt();
      },
      rt = function () {
        b && b.clearSelected();
      },
      at = function () {
        it(), rt();
      },
      st = function (t) {
        return function (e) {
          nt(),
            b.setSortOrder(t),
            d.sort(t),
            bg.sendLpImprove("vault_change_sort_click", { sort_order: t, os_type: v, browser_type: _ }),
            D(e);
        };
      },
      lt = function (e) {
        if (null !== e) {
          LPTools.removeDOMChildren(_e);
          for (var t = 0, n = e.length; t < n; ++t) {
            var i = u.createElement("li"),
              o = e[t];
            (i.textContent = o), LPPlatform.addEventListener(i, "click", st(o)), _e.appendChild(i);
          }
          me.show();
        } else me.hide();
      },
      ct = function (e) {
        var e;
        0 < e && ((e = Strings.translateString("%d items selected", e)), $("#selectedItemCounter").text(e));
      },
      ut = function () {
        be.removeClass("selected"), oe.hide("fast"), s.hide();
      },
      dt = function () {
        ve.removeClass("selected"), re.hide("fast"), s.hide();
      },
      pt = function () {
        be.addClass("selected"), oe.show("fast"), s.show();
      },
      gt = function () {
        ve.addClass("selected"), re.show("fast"), s.show();
      },
      mt = function () {
        c.addClass("open");
      },
      ft = function (e) {
        var t;
        !c.hasClass("open") &&
          0 < ce.length &&
          (c.addClass("open"), 0 < (t = ce[0].querySelectorAll(".focusable-add-menu-item")).length) &&
          t[0].focus();
      },
      yt = function () {
        c.removeClass("open");
      },
      ht = function (e) {
        $(e.relatedTarget).hasClass("focusable-add-menu-item") || yt();
      },
      Pt = function (e, t) {
        var e = LPProxy.getAllItems({ identity: e }),
          n =
            (!bg.Preferences.get("hide_aurora") && LPFeatures.isPromotionVaultSearchEnabled() && e.push(St()),
            new GridListContainer(e, {
              separateItems: !0,
              separateFavorites: !0,
              stickyFolders: !0,
              ignoreFilterOnSearch: !0,
              keyboardNavigation: !0,
              stickyFolderParent: u.getElementById("main"),
              folderStateChange: zt
            })),
          i;
        for (i in (Gt(n), Zt(n, O.all.getSortOrder()), n.initialize(u.getElementById("vaultContent"), l), n.applyFilter(t), mn(n), O))
          O[i].setContainer(n);
        return n;
      },
      St = function () {
        var e = new AuroraGroup({ group: "Suggested for You", url: "http://group" }),
          t = bt(),
          e = new AuroraGroupDisplay(e, t);
        return e.collapse(), e;
      },
      bt = function () {
        for (
          var e = [AuroraAccount.prototype.createGoToAssistData.call(), AuroraAccount.prototype.createGoToWebinarData.call()],
            t = [],
            n = 0;
          n < e.length;
          n++
        )
          bg.Preferences.get("hide_aurora_" + e[n].auroraId) || t.push(new AuroraAccountDisplay(new AuroraAccount(e[n])));
        return t;
      },
      vt = function () {
        var e;
        reduxApp && reduxApp.getState
          ? ((e = reduxApp.getState().securityDashboard.alerts), d.setSecurityDashboardBadgeVisibility(e && e.length))
          : bg.LPServer.jsonRequest({
              type: "GET",
              url: "lmiapi/dark-web-monitoring/alert",
              success: function (e) {
                d.setSecurityDashboardBadgeVisibility(e && e.length);
              },
              error: function (e) {
                d.setSecurityDashboardBadgeVisibility(!1),
                  e && e.message && (e.message = "Error while querying security dashboard alerts from vault. " + e.message),
                  LPPlatform.logException(e);
              }
            });
      },
      _t = function () {
        $("#restrictedVaultContent").is(":hidden") && ($("#restrictedVaultContent").show(), $("#addMenu").hide());
      },
      Lt = function () {
        $("#restrictedVaultContent").is(":visible") && ($("#restrictedVaultContent").hide(), $("#addMenu").show());
      },
      Et =
        ((d.openVaultDeviceLimitDialog = function () {
          L() || _t(),
            "block" !== $("#vaultDeviceLimitDialog").css("display") &&
              (LPPlatform.updateProductPrice("Premium", function (e, t) {
                dialogs.vaultDeviceLimitDialog.open({ price: e, currency: t });
              }),
              bg.sendLpImprove("mdpw_user_viewed", {
                CurrentDevice: "Desktop",
                Source: "Vault Pop Up",
                SwitchesLeft: Number(bg.get("g_primary_device_switches_left"))
              }));
        }),
        (d.openRetrialDialog = function () {
          "block" !== $("#reTrialDialog").css("display") && dialogs.reTrialDialog.open();
        }),
        (d.setSecurityDashboardBadgeVisibility = function (e) {
          var t;
          $(".securityDashboardMenuItem .notificationBubble").toggle(!!e);
        }),
        void 0 === bg.get_method ? "undefined" : bg.get_method()),
      wt =
        ((d.initializeWelcomeDialogs = function () {
          var i = LPTools.getURLParams(),
            e = LPProxy.getAccountClass(),
            t,
            n;
          if (bg.get("g_is_restricted")) return "opendashboard" === i.cmd ? void 0 : void d.openVaultDeviceLimitDialog();
          bg.get("g_display_premium_retrial_offer") &&
            ((t = 0),
            $("#successMessage .message").text() && (t = 3e3),
            setTimeout(function () {
              ("undefined" === Et || (reduxApp && reduxApp.getState().settings.features.premium_retrial)) && d.openRetrialDialog();
            }, t)),
            bg.MigrationBackground.getShouldStartMigration(function (e) {
              var t = bg.get_show_expired_subscription_messaging(),
                e,
                n;
              e
                ? (bg.MigrationBackground.setShouldStartMigration(!1), xt())
                : bg.get("g_show_billing_address_notification")
                ? (dialogs.vaultBillingAddressDialog.open(), bg.sendLpImprove("billing_address_callout_shown", { source: "webvault" }))
                : void 0 !== t.daysLeft
                ? (Ce.addClass("info-banner-open"),
                  (e = Strings.translateString("Renew to retain access to shared folders")),
                  (n = Strings.translateString(
                    "Renew within %d days to retain access to shared folders and other LastPass Enterprise features.",
                    t.daysLeft
                  )),
                  1 === t.daysLeft &&
                    (n = Strings.translateString("Renew today to retain access to shared folders and other LastPass Enterprise features.")),
                  0 === t.daysLeft &&
                    ((e = Strings.translateString("Renew now to access shared folders")),
                    (n = Strings.translateString(
                      "To leverage the full power of LastPass Enterprise, including shared folders, renew now."
                    )),
                    Fe.LP_hide()),
                  dialogs.vaultInfoBanner.open({
                    title: e,
                    contentText1: n,
                    dialogClass: "migrationBanner expirationBanner",
                    hideXCloseBtn: !0,
                    buttons: [
                      {
                        style: "btn-gray",
                        sizeStyle: "col-2 btn-container-lg pull-right",
                        autoId: "openEnterprisePaymentPage",
                        text: Strings.translateString("Renew"),
                        action: function () {
                          bg && bg.openEnterprisePaymentPage && bg.openEnterprisePaymentPage();
                        }
                      }
                    ]
                  }))
                : bg.MigrationBackground.shouldShowMigrationNotification()
                ? d.openVaultTakeOverUpdateNotification()
                : LPFeatures.safari_legacy_messaging()
                ? dialogs.vaultInfoBanner.open({
                    title: Strings.translateString("Safari extension update required"),
                    contentText1: Strings.translateString(
                      "Due to new Apple requirements, you need to download the new LastPass app to continue using LastPass in your Safari browser."
                    ),
                    contentText2: Strings.translateString(
                      "After download, simply login to your account again and use LastPass in Safari as you always have."
                    ),
                    buttons: [
                      {
                        style: "btn-blue",
                        sizeStyle: "col-2 btn-container-lg",
                        autoId: "updateBtn",
                        text: Strings.translateString("Update"),
                        closeOnClick: !0,
                        action: function () {
                          bg && bg.openURL && bg.openURL("https://lastpass.com/safariAppExtension.php?source=vault");
                        }
                      },
                      {
                        style: "btn-link",
                        sizeStyle: "col-1 btn-container-sm",
                        autoId: "closeBtn",
                        text: Strings.translateString("Close"),
                        closeOnClick: !0
                      }
                    ]
                  })
                : (("undefined" === Et || ("function" == typeof LPPlatform.isSPA && LPPlatform.isSPA())) &&
                    !d.isExtensionDownloaded() &&
                    LPFeatures.allowLicenseExpiration() &&
                    (VaultLicenseExpiration.premiumTrialStatusChecker() || VaultLicenseExpiration.companyLicenseStatusChecker()) &&
                    VaultLicenseExpiration.showExpirationMessage()) ||
                  (!("undefined" === Et || ("function" == typeof LPPlatform.isSPA && LPPlatform.isSPA())) ||
                  d.isExtensionDownloaded() ||
                  bg.get("g_hasplugin") ||
                  window.reduxApp.getState().settings.features.secondary_onboarding ||
                  d.welcomeExperimentShown()
                    ? (i && "openInContextOnboarding" === i.cmd) || LPPlatform.showIntroTutorial()
                    : (dialogs.vaultInfoBanner.open({
                        title: Strings.translateString(
                          "The easy life awaits! Install the LastPass browser extension for the best possible experience."
                        ),
                        dialogClass: "migrationBanner",
                        titleSize: "col-8",
                        hideXCloseBtn: !0,
                        segmentEvents: {
                          show: { name: "download_extension_prompt_shown" },
                          download: { name: "download_extension_prompt_clicked", properties: { action: "download" } },
                          learn: { name: "download_extension_prompt_clicked", properties: { action: "learn" } },
                          close: { name: "download_extension_prompt_clicked", properties: { action: "close" } }
                        },
                        buttons: [
                          {
                            style: "btn-link",
                            sizeStyle: "col-2 btn-container-sm pull-right",
                            text: Strings.translateString("Learn More"),
                            action: function () {
                              bg.openURL(
                                "https://support.logmeininc.com/lastpass/help/what-is-the-difference-between-my-local-online-and-offline-vaults-lp010104"
                              );
                            },
                            segment: "learn"
                          },
                          {
                            style: "btn-gray",
                            sizeStyle: "col-2 btn-container-lg pull-right",
                            autoId: "downloadNowBtn",
                            text: Strings.translateString("Install Now"),
                            action: d.openDownloadExtensionLink,
                            segment: "download"
                          }
                        ]
                      }),
                      $("#dialogLoadingOverlay").remove(),
                      $("#dialogLoadingOverlay").removeClass("overlay").addClass("loaded")));
            });
        }),
        (d.showFormFillMigrationMessage = function () {
          var e;
          dialogs.vaultInfoBanner.open({
            title: Strings.translateString("Please finish the latest update to access your Form Fills information"),
            dialogClass: "migrationBanner",
            segmentEvents: {
              show: { name: "migration_formfill_notification_shown", properties: { version: "vault", vault_version: "omar" } },
              update: {
                name: "migration_formfill_notification_clicked",
                properties: { action: "update_now", version: "vault", vault_version: "omar" }
              }
            },
            buttons: [
              {
                style: "btn-link",
                sizeStyle: "col-1 btn-container-sm",
                text: Strings.translateString("Learn More"),
                action: function () {
                  bg.openURL("https://link.lastpass.com/help-new-form-fills");
                },
                segment: "learn"
              },
              {
                style: "btn-gray",
                sizeStyle: "col-2 btn-container-lg",
                text: Strings.translateString("Finish the Update"),
                action: function () {
                  d.startFormFillMigration(Et);
                },
                segment: "update"
              }
            ],
            hideXCloseBtn: !0
          });
        }),
        (d.initializeCategoryBackground = function () {
          if (bg.MigrationBackground.shouldShowMigrationNotification()) {
            document.getElementsByTagName("body")[0].classList.add("vaultCategoryTakeoverOverride");
            for (
              var e = [
                  document.getElementById("addressesButton"),
                  document.getElementById("paymentCardsButton"),
                  document.getElementById("bankAccountsButton")
                ],
                t = ["vault_addresses", "vault_payment_cards", "vault_bank_accounts"],
                n = 0;
              n < e.length;
              n++
            ) {
              var i = t[n];
              e[n].addEventListener("click", function () {
                bg.sendLpImprove("migration_formfill_notification_clicked", {
                  action: "migrate",
                  version: "vault_takeover",
                  vault_version: "omar",
                  source: i
                }),
                  d.startFormFillMigration(Et);
              });
            }
            for (
              var o = [
                  document.getElementById("addresses"),
                  document.getElementById("payment-cards"),
                  document.getElementById("bank-accounts")
                ],
                r = 0;
              r < o.length;
              r++
            ) {
              var a = t[r];
              o[r].addEventListener("click", function () {
                bg.sendLpImprove("migration_formfill_notification_shown", { version: "vault_takeover", vault_version: "omar", source: a });
              });
            }
            document.getElementById("emptyAddressesWrapper").classList.add("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyBankAccountsWrapper").classList.add("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyPaymentCardsWrapper").classList.add("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyAddressesWrapperMigration").classList.remove("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyBankAccountsWrapperMigration").classList.remove("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyPaymentCardsWrapperMigration").classList.remove("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("addMenuArrow").classList.add("vaultCategoryTakeoverContainerHidden"),
              (document.getElementById("mainScroll").style.height = "720px");
          } else
            document.getElementById("emptyAddressesWrapper").classList.remove("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyBankAccountsWrapper").classList.remove("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyPaymentCardsWrapper").classList.remove("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyAddressesWrapperMigration").classList.add("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyBankAccountsWrapperMigration").classList.add("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("emptyPaymentCardsWrapperMigration").classList.add("vaultCategoryTakeoverContainerHidden"),
              document.getElementById("addMenuArrow").classList.remove("vaultCategoryTakeoverContainerHidden");
        }),
        (d.showWelcomeUpdateDialog = function (e) {
          var t =
            "Update to the new LastPass experience. It should only take a minute. You'll be logged out here and taken to LastPass.com to finish. Sorry for the inconvenience, but it only happens once - and it's worth it! Promise.";
          d.showFormFillMigrationMessage();
        }),
        (d.isExtensionDownloaded = function () {
          return "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()
            ? !!top.document.documentElement.getAttribute("data-extension-enabled") ||
                !!top.document.documentElement.getAttribute("data-lp-ext")
            : null !== top.ext;
        }),
        (d.isVaultEmpty = function () {
          return (
            Object.keys(reduxApp.getState().vaultData.dataRecords).length +
              Object.keys(reduxApp.getState().vaultData.passwords).length +
              Object.keys(reduxApp.getState().vaultData.folders).length <=
            0
          );
        }),
        (d.welcomeExperimentShown = function () {
          var e;
          return LPFeatures.welcomeExperimentEnabled() && d.isVaultEmpty();
        }),
        (d.openDownloadExtensionLink = function () {
          "object" == typeof top.LP_ExtInstall && "function" == typeof top.LP_ExtInstall.run
            ? top.LP_ExtInstall.run()
            : bg && bg.openURL && bg.openURL("https://lastpass.com/misc_download2.php");
        }),
        function () {
          var e = void 0 !== top.getLocalOTP ? top.getLocalOTP() : null;
          e && e.otpData && e.localOtpKey && LPProxy.setOtpOnWeb(e.localOtpKey, e.otpData);
        }),
      Tt =
        ((d.toggleAccountBenefitsMenu = function (e) {
          $("#accountBenefitsMenuItem").LP_hide(), $("#accountBenefitsMenuItem").unbind("click");
          var t = LPProxy.getAccountClass(),
            n,
            i,
            t,
            e,
            o,
            r;
          [
            Constants.USER_ENTERPRISE_ADMIN,
            Constants.USER_ENTERPRISE,
            Constants.USER_ENTERPRISE_ROLE,
            Constants.USER_TEAMS,
            Constants.USER_TEAMS_ADMIN
          ].includes(t) &&
            (i = reduxApp.getState()) &&
            (e && i.familiesAsABenefit.drawerOpen
              ? reduxApp.toggleFamiliesAsABenefitDrawer()
              : ((t = "redeemed" === i.familiesAsABenefit.faabDetails.status),
                (e = LPFeatures.isFamiliesAsABenefitEnabled()),
                (o = i.encryptedVaultDataSource.settings.allowPersonalLinkedAccount),
                (r =
                  0 <
                  Object.values(i.encryptedVaultDataSource.sharedFolders).filter(function (e) {
                    return e.isPersonalAccount && e.accepted;
                  }).length),
                o || e || t || r
                  ? ($("#accountBenefitsMenuItem").LP_show(),
                    $("#accountBenefitsMenuItem").click(function () {
                      var e = i.familiesAsABenefit.drawerOpen;
                      reduxApp.toggleFamiliesAsABenefitDrawer(),
                        e || $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected"),
                        bg.sendLpImprove("vault_open_view", { view_name: "Account Benefits", os_type: v, browser_type: _ });
                    }))
                  : i.familiesAsABenefit.drawerOpen && reduxApp.toggleFamiliesAsABenefitDrawer()));
        }),
        (d.initializeSharingKeys = function () {
          var e = LPPlatform.lpIsExtension(),
            t = "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA(),
            n = "" !== bg.get("rsaprivatekeyhex"),
            e,
            t,
            i,
            o,
            r;
          !window.Worker ||
            e ||
            t ||
            n ||
            ((e = bg.get("g_local_key")),
            (t = LPPlatform.getResourcePath("generate-sharing-key-worker.js")),
            (i = new Worker(t)),
            (o = function () {
              $("#generateSharingKeys").hide(), i.terminate();
            }),
            (r = function () {
              i.terminate();
            }),
            i &&
              (i.addEventListener("message", function (e) {
                var t, e;
                e.data &&
                  "sharing_key_generated" === e.data.cmd &&
                  ((t = e.data.publickey), (e = e.data.privatekeyenc), LPProxy.uploadSharingKeysWeb(t, e, o, r));
              }),
              i.postMessage({ cmd: "generate_sharing_key", local_key: e })));
        }),
        (d.initialize = function (e) {
          try {
            var t, n, i, o;
            d.handleSubscriptionChange(),
              /otp\.php/.test(top.location.pathname) || wt(),
              d.handleShowingNotificationsFromRedux(),
              bg.sendLpImprove("user_vault_opened"),
              u.body.removeAttribute("class"),
              Topics.get(Topics.REFRESH_DATA).publish(),
              $(".leftMenuItem").removeClass("selected"),
              LPProxy.getPreference("gridView") || d.displayAsList(),
              LPProxy.getPreference("compactView") && d.displayCompact(),
              p.attr("title", "Maximize Menu"),
              VaultLicenseExpiration.initialize(),
              kt(),
              It(),
              At(),
              Ct(),
              LPFeatures.allowTryFamilies() && $("#lp-try-families").show(),
              bg.LPPlatform.isSafariAppStore(function (e) {
                e && ($("#tryEnterprise").hide(), $("#lp-try-families").hide(), Tt());
              }),
              "undefined" != typeof bg &&
                ((t = LPProxy.getAccountClass()),
                LPFeatures.isVaultPremiumFeatureIndicatorEnabled() ||
                  (t !== Constants.USER_FREE && t !== Constants.USER_PREMIUM_TRIAL) ||
                  Mt(),
                d.toggleAccountBenefitsMenu(!1)),
              LPFeatures.allowSecurityDashboard() && !LPProxy.isFreeUser() && vt(),
              !LPFeatures.isVaultPremiumFeatureIndicatorEnabled() ||
                (LPProxy.getAccountClass() !== Constants.USER_PREMIUM_TRIAL &&
                  LPProxy.getAccountClass() !== Constants.USER_FREE &&
                  LPProxy.getAccountClass() !== Constants.USER_FAMILY_ADMIN) ||
                d.initializePremiumFeatureIndicatorIfNeeded(),
              LPFeatures.welcomeExperimentEnabled()
                ? (g.addClass("welcome-experiment"),
                  (n = $("#welcomeOpenImport")),
                  (i = $("#welcomeAddPassword")),
                  d.isExtensionDownloaded()
                    ? $("#welcomeInstallExtension").addClass("hidden-button")
                    : $("#welcomeInstallExtension").click(function () {
                        d.openDownloadExtensionLink(), bg.sendLpImprove("import_welcome_screen_click", { option: "extension" });
                      }))
                : (g.addClass("vault-import"),
                  (o = bg.get("g_username").replace(new RegExp(/(@\w+.*)/), "")),
                  $("#emptyVaultWelcomeUsername").text(Strings.translateString("Welcome to LastPass, %s", o)),
                  (n = $("#openImport")),
                  (i = $("#openAddDialog"))),
              d.welcomeExperimentShown() &&
                (g.removeClass("onBoardingDrawerOpened"), g.addClass("onBoardingWidget"), reduxApp.minimizeSecondaryOnboarding()),
              n.click(function () {
                LPFeatures.importPasswordsInVaultEnabled() ? d.openImportPasswords("empty_vault_screen") : LPProxy.import("welcome_screen");
              }),
              i.click(function () {
                dialogs.addItem.open(), bg.sendLpImprove("import_welcome_screen_click", { option: "add_item_dialog" });
              });
          } catch (e) {
            LPPlatform.logException(e);
          } finally {
            var r = $("#vaultLoadingOverlay"),
              t =
                (LPTools.getOption(e, "fadeIn", !1)
                  ? (r.addClass("fadeIn"),
                    setTimeout(function () {
                      r.addClass("loaded");
                    }, 500))
                  : r.addClass("loaded"),
                g.addClass("loaded"),
                0),
              o = 0,
              a =
                (void 0 !== reduxApp &&
                  "function" == typeof reduxApp.getState &&
                  ((t =
                    Object.keys(reduxApp.getState().vaultData.dataRecords).length +
                    Object.keys(reduxApp.getState().vaultData.passwords).length),
                  (o = Object.keys(reduxApp.getState().vaultData.folders).length)),
                {
                  folder_count: o,
                  item_count: t,
                  os_type: v,
                  browser_type: _,
                  SW_cache_size: 0,
                  SW_cache_count: 0,
                  SW_cache_miss_count: 0
                });
            isSPA && "serviceWorker" in navigator
              ? (bg.get("mv3_extension_used_to_get_key") ||
                  navigator.serviceWorker.ready.then(function (e) {
                    e.active.postMessage({ type: "logout-other-spa-tabs" });
                  }),
                navigator.serviceWorker
                  .getRegistration()
                  .then(function (e) {
                    function t(t, n) {
                      var i = function (e) {
                        e.data.type === t && (navigator.serviceWorker.removeEventListener("message", i), n(e));
                      };
                      navigator.serviceWorker.addEventListener("message", i);
                    }
                    e && e.active
                      ? (t("cache-status", function (e) {
                          (a.SW_cache_size = e.data.cacheSize),
                            (a.SW_cache_count = e.data.cacheCount),
                            (a.SW_cache_miss_count = e.data.cacheMissCount),
                            bg.sendLpImprove("vault_all_items_load", a);
                        }),
                        e.active.postMessage({ type: "get-cache-size" }),
                        t("caching-is-done", function (t) {
                          var n = $('<div id="sw-caching-is-done"/>');
                          Object.keys(t.data.results || {}).forEach(function (e) {
                            n.attr(e, t.data.results[e]);
                          }),
                            $("body").append(n);
                        }),
                        e.active.postMessage({ type: "is-caching-done" }))
                      : bg.sendLpImprove("vault_all_items_load", a);
                  })
                  .catch(function (e) {
                    bg.sendLpImprove("vault_all_items_load", a), console.log("error occured during getting sw registration ", e);
                  }))
              : bg.sendLpImprove("vault_all_items_load", a),
              reduxApp && reduxApp.initFinished && reduxApp.initFinished();
          }
        }),
        function () {
          var e = LPProxy.getAccountClass();
          e === Constants.USER_FREE || e === Constants.USER_PREMIUM_TRIAL
            ? $("#advanced-options-upgrade-title").show()
            : $("#advanced-options-upgrade-title").hide();
        }),
      It = function () {
        bg.LPPartner &&
          bg.LPPartner.getPartnerInfo &&
          bg.LPPartner.getPartnerInfo(function (e) {
            e
              ? ($("#logoPartner").attr("src", e.logoWhiteUrl).addClass(e.classWhite), $("#logoPartnerContainer").addClass("show"))
              : $("#logoPartnerContainer").removeClass("show");
          });
      },
      xt = function (e) {
        $("#inProgressMigration").show(), bg && bg.clear_badge && bg.clear_badge();
        var n = $("#inProgressMigration").find(".progress-bar");
        Migrator.executeMigrations(function (e, t) {
          n.css("width", Math.floor((e / t) * 100) + "%");
        }, !!e);
      },
      At = function () {
        $("#vaultFooter").addClass("disabled");
      },
      Ct = function () {
        te.attr("aria-label", Strings.translateString("Main header")),
          ne.attr("aria-label", Strings.translateString("Main navigation")),
          ae.attr("aria-label", Strings.translateString("Vault options")),
          ie.attr("aria-label", Strings.translateString("Main content")),
          se.attr("aria-label", Strings.translateString("New item"));
      },
      Ft = function () {
        var e, t, n, e;
        void 0 !== reduxApp &&
          ((e = "Premium_Trial" === reduxApp.getState().user.type),
          (t = reduxApp.getState().login.firstTimeLogin),
          (n = d.isVaultEmpty()),
          e) &&
          t &&
          !n &&
          ((e = bg.get("g_username").replace(new RegExp(/(@\w+.*)/), "")),
          Me.find("h1").text(Strings.translateString("Welcome to LastPass, %s!", e)),
          Me.find("p").text(
            Strings.translateString(
              "Everything you need for life online – passwords, payment cards, bank accounts, IDs, and more – stored in one place."
            )
          ),
          Me.show(),
          ae.css("top", "216px"),
          $("#main").css("top", "276px"));
      },
      Dt = function () {
        Me.hide(), ae.css("top", ""), $("#main").css("top", "");
      },
      Mt = function () {
        $("#upgradeButton")
          .addClass("headerButtonActive")
          .click(function () {
            reduxApp && LPProxy.isExpiredFamilyUser()
              ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Vault Upgrade Button")
              : d.upgradeToPremiumAction({
                  self: function () {
                    bg.sendLpImprove("upgrade_button_vault_click");
                  },
                  apple: function () {}
                });
          });
      },
      kt =
        ((Ot = function (t) {
          d.openReceivedShareCenter(function () {
            var e = LPProxy.getPendingRecievedShare(t);
            e && d.openAcceptShareDialog(e);
          });
        }),
        (Bt = function (t) {
          d.openReceivedShareCenter(function () {
            var e = LPProxy.getPendingRecievedShare(t);
            e && e.reject();
          });
        }),
        (Rt = function (e) {
          LPProxy.getSiteModel(e)
            ? d.openSiteDialog({ vaultItem: e })
            : LPProxy.getNoteModel(e)
            ? d.openNoteDialog({ vaultItem: e })
            : LPProxy.getFormFillModel(e) && d.openFormFillDialog({ vaultItem: e });
        }),
        ($t = function (e) {
          switch (e) {
            case "emergencyAccess":
              x.show();
              break;
            case "emergencyAccessOthers":
              A.show();
              break;
            default:
              O.all.show();
          }
        }),
        (Vt = function () {
          d.openManageIdentities(), d.openIdentityDialog();
        }),
        (Ut = function (e) {
          for (var t = [], n = 0, i = (e = e.split(",")).length; n < i; ++n) {
            var o = e[n],
              r = LPProxy.getSiteModel(o),
              r;
            (r = r || LPProxy.getNoteModel(o)) && t.push(r);
          }
          0 < t.length && d.openShareDialog(t);
        }),
        (d.handleParameters = function (e) {
          rt(), ot();
          var t = Dialog.prototype.getCurrentDialog(),
            n = function () {
              setTimeout(function () {
                Nt(e);
              }, 1e3);
            };
          t ? t.close(!1, n) : window.closeSiteDialog ? window.closeSiteDialog(n) : Nt(e);
        }),
        function () {
          Nt(document.location.search);
        }),
      Ot,
      Bt,
      Rt,
      $t,
      Vt,
      Ut;
    function Nt(e) {
      var t = LPTools.processURLParams(e),
        n;
      for (n in (LPPlatform.setIntroTutorialDisable(!1), t)) {
        var i = t[n],
          o;
        switch (
          ((0 !== (n = "cmd" === n ? i : n).indexOf("openweakpws:") && 0 !== n.indexOf("openduppws:") && -1 === n.indexOf("openatrisk")) ||
            d.openSecurityDashboard(),
          n)
        ) {
          case "opengoogleauth":
          case "opensettings":
            Topics.get(Topics.EDIT_SETTINGS).publish();
            break;
          case "openhistory":
            LPProxy.openHistory();
            break;
          case "openbookmarklets":
            LPProxy.openBookmarklets();
            break;
          case "sharedfolder":
          case "sf":
            d.openSharingCenter();
            break;
          case "sfadd":
            d.openSharingCenter(),
              reduxApp && LPProxy.isExpiredFamilyUser()
                ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Direct Link")
                : d.openCreateSharedFolderDialog();
            break;
          case "sfadduser":
            d.openSharingCenter(),
              t.shareid && (o = LPProxy.getAllSharedGroupModelsByID()[t.shareid]) && Topics.get(Topics.EDIT_SHARED_FOLDER).publish(o);
            break;
          case "sfaddsite":
            d.openSharingCenter(),
              t.shareid &&
                (o = LPProxy.getAllSharedGroupModelsByID()[t.shareid]) &&
                o._shareInfo.name &&
                d.openSiteDialog({ saveOptions: { source: "vault" }, defaultData: { group: "Shared-" + o._shareInfo.name } });
            break;
          case "additem":
            d.openAddItemDialog();
            break;
          case "addidentity":
            Vt();
            break;
          case "showdeleted":
            d.openDeletedItems();
            break;
          case "viewcreditmon":
            d.openCreditMonitoring();
            break;
          case "share":
            Ut(i);
            break;
          case "ffid":
          case "edit":
            Rt(i);
            break;
          case "acceptshare":
            Ot(i);
            break;
          case "rejectshare":
            Bt(i);
            break;
          case "omsstart":
            LPPlatform.setIntroTutorialDisable(!0);
            break;
          case "openadvancedoptions":
            pt();
            break;
          case "opendashboard":
            d.openSecurityDashboard();
            break;
          case "openInContextOnboarding":
            var r = LPProxy.getPreference("ShowIntroTutorialLater");
            if (r && Date.now() < new Date(r)) return;
            dialogs.inContextTutorialWelcome.open();
            break;
          case "openemergencyaccess":
            d.openEmergencyAccess();
            break;
          case "showretrialoffer":
            LPProxy.isFreeUser() && !bg.get("g_display_premium_retrial_offer") && bg.getRetrialOfferDeepLinkEnabled(d.openRetrialDialog);
            break;
          case "showfamilyexpiredpurchase":
            reduxApp &&
              LPProxy.isExpiredFamilyUser() &&
              reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Direct Link");
            break;
          case "import":
            reduxApp && LPFeatures.importPasswordsInVaultEnabled() ? d.openImportPasswords("import") : LPProxy.import("advanced_options");
            break;
          case "startpasswordlessenrollmentsetup":
            var a = "true" === t.enablePasswordlessOnOtherDevice;
            window.history.replaceState &&
              window.history.replaceState(
                null,
                "",
                window.location.href.replace(
                  /\?cmd=startpasswordlessenrollmentsetup(&enablePasswordlessOnOtherDevice=(true|false))?$|cmd=startpasswordlessenrollmentsetup(&enablePasswordlessOnOtherDevice=(true|false))?(&)?/,
                  ""
                )
              ),
              setTimeout(function () {
                reduxApp && reduxApp.startPasswordlessEnrollmentSetup(a);
              }, 1e3);
            break;
          case "passwordlesslpasetupsuccessful":
            window.history.replaceState &&
              window.history.replaceState(
                null,
                "",
                window.location.href.replace(/\?cmd=passwordlesslpasetupsuccessful$|cmd=passwordlesslpasetupsuccessful(&)?/, "")
              ),
              setTimeout(function () {
                reduxApp && reduxApp.passwordlessLPASetupSuccessful();
              }, 1e3);
            break;
          case "passwordlesslpasetupfailed":
            window.history.replaceState &&
              window.history.replaceState(
                null,
                "",
                window.location.href.replace(/\?cmd=passwordlesslpasetupfailed$|cmd=passwordlesslpasetupfailed(&)?/, "")
              ),
              setTimeout(function () {
                reduxApp && reduxApp.passwordlessLPASetupFailed();
              }, 1e3);
        }
      }
      null === b && $t(t.view);
    }
    var Gt = function (e) {
        var t = LPPlatform.getOpenGroups();
        if (null !== t) {
          for (var n = !0, i = e.getAllSubGroupsIncludingFavorites(!0), o = 0, r = i.length; o < r; ++o) {
            var a = i[o];
            t[a._model.getName()] ? (a.expand(), (n = !1)) : a.collapse();
          }
          n && Topics.get(Topics.ALL_COLLAPSED).publish();
        }
      },
      zt = function (e) {
        if (e) {
          for (var t = e.getAllSubGroupsIncludingFavorites(!0), n = [], i = 0, o = t.length; i < o; ++i) {
            var r = t[i];
            r.isExpanded() && n.push(r._model.getName());
          }
          LPPlatform.setOpenGroups(n);
        }
      },
      Ht = function (e, t, n) {
        var i = u.getElementById("sharedFoldersMenuItem").parentElement;
        e === Constants.USER_FREE
          ? ($("#emptySharedFoldersIcon .tourText").append(
              LPTools.createElement(
                "a",
                { class: "nbtn rbtn dynamicWidth", href: LPProxy.getBaseURL() + "go-premium", target: "_blank" },
                Strings.translateString("Upgrade to Premium")
              )
            ),
            i.parentElement.appendChild(i))
          : e === Constants.USER_PREMIUM && t && !n && $("#sharedFoldersMenuItem").remove(),
          $(i.parentElement).children().last().addClass("last");
      },
      Wt = function (e) {
        var t = $(".securityScore");
        t.text(null !== e ? Math.round(e) + "%" : ""),
          void 0 !== e ? t.parents(".menuIcon").addClass("score") : t.parents(".menuIcon").removeClass("score");
      },
      Yt =
        ((d.toggleInProgressOverlay = function () {
          ee.toggle();
        }),
        function (e, t) {
          0 < t ? (e.text(t), e.show()) : e.hide();
        }),
      qt =
        ((jt = !1),
        function () {
          if (!jt)
            for (var e = LPProxy.getEmergencyAccessRecipientModels(), t = 0, n = e.length; t < n; ++t) {
              var i = e[t];
              if (i.allowedAccess() || i.hasRequestedAccess()) {
                dialogs.denyEmergencyAccess.open({ sharee: i }), (jt = !0);
                break;
              }
            }
        }),
      jt,
      Kt =
        ((d.openVault = function () {
          O.all.show();
        }),
        (d.openNotes = function () {
          O.notes.show();
        }),
        (d.openPaymentCards = function () {
          O["payment-cards"].show();
        }),
        (d.openAddresses = function () {
          O.addresses.show();
        }),
        (d.openFormFills = function () {
          O.formFill.show();
        }),
        (d.toggleAdvancedMenu = function (e) {
          ve.is(":visible") && dt(), (oe.is(":visible") ? ut : (d.closeFaaB(e), pt))(), D(e);
        }),
        (d.toggleHelpMenu = function (e) {
          be.is(":visible") && ut(), (re.is(":visible") ? dt : (d.closeFaaB(e), gt))(), D(e);
        }),
        (d.clear = function () {
          o && (o.destruct(), (o = null)),
            $(u.body).addClass("loggedout"),
            LPPlatform.shouldShowVaultLoginButton() &&
              $(u.body).addClass(LPPlatform.canBackgroundOpenPopover() ? "canopenpopover" : "cannotopenpopover"),
            $("#vaultLoadingOverlay").removeClass("loaded fadeIn"),
            at(),
            (S = P = h = Re = b = null);
        }),
        (d.maximizeLeftMenu = function () {
          g.addClass("maximized"),
            p.addClass("opened"),
            p.attr("title", Strings.translateString("Minimize")),
            setTimeout(Topics.get(Topics.VAULT_LEFT_MENU_TOGGLE).publish, 400);
        }),
        (d.minimizeLeftMenu = function () {
          g.removeClass("maximized"),
            p.removeClass("opened"),
            p.attr("title", Strings.translateString("Maximize")),
            setTimeout(Topics.get(Topics.VAULT_LEFT_MENU_TOGGLE).publish, 400);
        }),
        (d.toggleLeftMenu = function () {
          var e = !g.hasClass("maximized");
          LPProxy.setPreferences("leftMenuMaximize", e), e ? d.maximizeLeftMenu() : d.minimizeLeftMenu();
        }),
        (d.addSource = function (e) {
          return (
            e
              ? (e.saveOptions && e.saveOptions.source) || (e.saveOptions = { source: "vault" })
              : (e = { saveOptions: { source: "vault" } }),
            e
          );
        }),
        (d.openSiteDialog = function (e) {
          dialogs.site.open(d.addSource(e));
          var n = function () {
              "" == $("#siteDialogTotp").val()
                ? ($("#siteDialogDeleteTotpSecret").hide(), $("#siteDialogAddTotpSecret").show())
                : ($("#siteDialogDeleteTotpSecret").show(), $("#siteDialogAddTotpSecret").hide());
            },
            t;
          function i(e, t) {
            setTimeout(n, e);
          }
          [0, 500, 1e3].forEach(i);
        }),
        (d.openNoteDialog = function (e) {
          dialogs.note.open(d.addSource(e));
        }),
        (d.openAddItemDialog = function () {
          dialogs.addItem.open();
        }),
        (d.openFormFillDialog = function (e) {
          dialogs.formFill.open(d.addSource(e));
        }),
        (d.openFolderDialog = function (e, t) {
          dialogs.folder.open({ vaultItem: e, defaultData: { groupParent: t ? t.getName() : "" }, groups: P.getAllSubGroups() });
        }),
        (d.openTryFamiliesDialog = function (e, t) {
          var n;
          (e = e || !1),
            bg.sendLpImprove("try_families_lightbox_shown", t ? { origin: t } : {}),
            dialogs.tryFamilies.open({ forceAccepted: e });
        }),
        (d.openUpgradeFamiliesForFolderSharingDialog = function (e) {
          var e = { forceAccepted: e || !1 };
          bg.sendLpImprove("shared_folder_families_lightbox_shown"), dialogs.upgradeFamiliesForFolderSharing.open(e);
        }),
        (d.openFamiliesInvitationDialog = function (t) {
          LPProxy.getFamiliesInvitations({
            params: {},
            success: function (e) {
              0 < e.length
                ? (e.sort(function (e, t) {
                    return new Date(t.date) - new Date(e.date);
                  }),
                  dialogs.familiesInvitation.open({ invitations: e, callback: t }))
                : t(!1);
            },
            error: function () {
              t(!1);
            }
          });
        }),
        function () {
          var e = LPProxy.getAccountClass();
          return e === Constants.USER_FREE || e === Constants.USER_PREMIUM_TRIAL || e === Constants.USER_PREMIUM;
        }),
      Xt = function () {
        var e = bg.localStorage_getItem("lp_families_dialog_snooze_timestamp"),
          t = bg.localStorage_getItem("lp_families_dialog_snooze_count"),
          n,
          i;
        return e && parseInt(e) > Date.now() && t && "1" === t;
      },
      Jt = function () {
        var e = bg.localStorage_getItem("lp_try_families_dialog_declined"),
          t = bg.localStorage_getItem("lp_families_dialog_snooze_count"),
          t = t && 1 < parseInt(t);
        return e || t;
      },
      Qt,
      Zt =
        ((d.openCreateSharedFolderDialog = function (e, t) {
          !LPProxy.isLegacyPremium() &&
          Kt() &&
          LPFeatures.allowTryFamilies() &&
          !LPProxy.isFamiliesTrialStarted() &&
          LPFeatures.isVaultPremiumPopupsEnabled()
            ? d.showVaultUpgradeToPremiumDialog("sharing")
            : !LPProxy.isLegacyPremium() && Kt() && LPFeatures.allowTryFamilies() && !LPProxy.isFamiliesTrialStarted()
            ? d.openUpgradeFamiliesForFolderSharingDialog(!1)
            : LPProxy.isFamilyUser() && bg.get("LPContentScriptFeatures").family_shared_folders_enabled
            ? dialogs.familiesSharedFolder.open({ group: e, children: t })
            : LPFeatures.isVaultPremiumPopupsEnabled() && LPProxy.getAccountClass() === Constants.USER_FREE
            ? d.showVaultUpgradeToPremiumDialog("sharing")
            : LPProxy.getAccountClass() === Constants.USER_FREE
            ? (bg.sendLpImprove("upgrade_to_premium_lightbox_shown"),
              dialogs.upgradePremium.open({
                upgradeText: [
                  LPTools.createElement(
                    "h1",
                    "upgradeDialogHeader",
                    Strings.translateString("Need to share passwords with family or friends?")
                  ),
                  LPTools.createElement(
                    "p",
                    "dialogText",
                    Strings.translateString(
                      "Go Premium now to create a Shared Folder, invite family or friends, and fill the folder with passwords and notes. Give up to 5 people access to the Shared Folder. Changes are synced automatically, and you can assign read-only access. Go Premium now to create a Shared Folder!"
                    )
                  )
                ]
              }))
            : dialogs.createSharedFolder.open({ group: e, children: t });
        }),
        (d.openSettingsDialog = function () {
          null === Re &&
            (AccountSettingsService.call(
              function (e) {
                (Re = e), d.openSettingsDialog();
              },
              function () {
                Notifications.displayErrorMessage("Could not retrieve account settings!");
              }
            ),
            Topics.get(Topics.DIALOG_LOADING).publish()),
            dialogs.settings.open(Re);
        }),
        (d.unlinkAccount = function () {
          var e = LPProxy.getLinkedAccount();
          e &&
            LPProxy.reprompt(function () {
              e.unlink();
            });
        }),
        (d.toggleCollapseAll =
          ((Qt = !1),
          Topics.get(Topics.ALL_COLLAPSED).subscribe(function () {
            (Qt = !0), pe.addClass("selected"), pe.attr("title", Strings.Vault.EXPAND_ALL);
          }),
          Topics.get(Topics.ALL_EXPANDED).subscribe(function () {
            (Qt = !1), pe.removeClass("selected"), pe.attr("title", Strings.Vault.COLLAPSE_ALL);
          }),
          function () {
            (Qt
              ? (Topics.get(Topics.EXPAND_ALL).publish(), Topics.get(Topics.ALL_EXPANDED))
              : (Topics.get(Topics.COLLAPSE_ALL).publish(), Topics.get(Topics.ALL_COLLAPSED))
            ).publish();
          })),
        (d.toggleSize =
          ((d.displayLarge = function () {
            Topics.get(Topics.DISPLAY_LARGE).publish(), ge.removeClass("selected"), ge.attr("title", Strings.Vault.COMPACT_VIEW);
          }),
          (d.displayCompact = function () {
            Topics.get(Topics.DISPLAY_COMPACT).publish(), ge.addClass("selected"), ge.attr("title", Strings.Vault.LARGE_VIEW);
          }),
          function () {
            LPProxy.getPreference("compactView")
              ? (d.displayCompact(), bg.lpevent($e ? "v_grd_cmp" : "v_lst_cmp"))
              : (d.displayLarge(), bg.lpevent($e ? "v_grd_lrg" : "v_lst_lrg"));
          })),
        (d.displayAsGrid = function () {
          Topics.get(Topics.DISPLAY_GRID).publish(), ue.addClass("selected"), de.removeClass("selected"), ($e = !0);
        }),
        (d.displayAsList = function () {
          Topics.get(Topics.DISPLAY_LIST).publish(), de.addClass("selected"), ue.removeClass("selected"), ($e = !1);
        }),
        (d.search = function (e) {
          b && b.search(e), b && "" !== e && bg.sendLpImprove("vault_search_click", { page: b.title, os_type: v, browser_type: _ });
        }),
        function (e, t) {
          switch (t) {
            case n:
              e.sortByName(!0);
              break;
            case i:
              e.sortByName(!1);
              break;
            case R:
              e.sortByFolder(!0);
              break;
            case V:
              e.sortByFolder(!1);
              break;
            case U:
              e.sortItemsByMostRecent();
              break;
            case N:
            case z:
              e.sortByEmail(!0);
              break;
            case G:
            case H:
              e.sortByEmail(!1);
          }
        }),
      q =
        ((d.sort = function (e) {
          ye.text(e), Zt(b.getContainer(), e);
        }),
        function (e) {
          fe.toggle("fast"), (S = fe), LPTools.addKeyBoardNavigation(_e.children), D(e);
        }),
      Y = function (e) {
        var t;
        null === S || S.get(0).parentElement !== Se
          ? ((t = b.createSelectionContextMenu()),
            Se.appendChild(t),
            t.removeAttribute("style"),
            (S = $(t)).show("fast"),
            document.querySelector('[vaultaction="manageRecipients"]') && bg.sendLpImprove("Shared Folder Actions Menu Opened"))
          : nt(),
          D(e);
      },
      j =
        ((d.showMoreOptionsMenu = function () {
          Pe.show("fast");
        }),
        (d.hideMoreOptionsMenu = function () {
          Pe.hide("fast");
        }),
        function (e) {
          Le.toggleClass("selected"), he.toggle("fast"), D(e), d.closeFaaB(e);
        }),
      en = function () {
        he.hide("fast"), Le.removeClass("selected");
      },
      tn =
        ((d.openEmergencyAccess = function () {
          He.show();
        }),
        (d.openEmergencyAccessTrusted = function () {
          He.show(x);
        }),
        (d.openEmergencyAccessTrusting = function () {
          He.show(A);
        }),
        (d.openRestrictedEmergencyAccess = function () {
          dialogs.restrictedEmergencyAccess.open();
        }),
        (d.openVaultTakeOverUpdateNotification = function () {
          dialogs.vaultTakeoverUpdateNotification.open();
        }),
        (d.startFormFillMigration = function (e) {
          "cr" === e || "ff" === e || "undefined" === e || "edgecr" === e
            ? (bg.MigrationBackground.setShouldStartMigration(!1), xt())
            : (bg.openURL("https://lastpass.com/experience-update"), bg.lpevent("m_lo"), bg.loggedOut(!1, "menu"));
        }),
        (d.openSecurityDashboard = function () {
          We.show();
        }),
        (d.openSharingCenter = function (e) {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : et.show();
        }),
        (d.openReceivedShareCenter = function (e) {
          et.show(C, e);
        }),
        (d.openSentShareCenter = function (e) {
          et.show(Je, e);
        }),
        !(d.openSharedFolderCenter = function (e) {
          et.show(F, e);
        })),
      nn = function (e) {
        F.getContainer().applyFilter(
          {
            showEmptyGroups: !1,
            multiSelect: !1,
            func: function (e) {
              return !e._model.isDeleted();
            }
          },
          e
        ),
          (tn = !1);
      },
      on = function (e) {
        F.getContainer().applyFilter(
          {
            showEmptyGroups: !1,
            multiSelect: !1,
            func: function (e) {
              return !0;
            }
          },
          e
        ),
          (tn = !0);
      },
      rn = function (e) {
        (tn ? on : nn)(e);
      },
      an = function () {
        (tn ? nn : on)();
      };
    function sn(t) {
      var e;
      (t &&
      (-1 <
        (e = y.findIndex(function (e) {
          return e === t.id;
        })) && $("#" + y[e]).blur(),
      -1 < e) &&
      e < y.length - 1
        ? $("#" + y[e + 1])
        : $("#" + y[0])
      ).focus();
    }
    (d.openAcceptShareDialog = function (e) {
      dialogs.acceptShare.open({ vaultItem: e, groups: P.getAllSubGroups() });
    }),
      (d.openShareDialog = function (e) {
        LPTools.openShareDialog(e);
      }),
      (d.openSharedFolderDialog = function (e, t) {
        LPProxy.isFamilyUser() &&
        e._shareInfo.cid !== Constants.UNAFFILIATED_COMPANY_ID &&
        bg.get("LPContentScriptFeatures").family_shared_folders_enabled
          ? dialogs.familiesSharedFolder.open({ folder: e, members: t })
          : dialogs.sharedFolder.open(e, t);
      }),
      (d.openSharedFolderAccessDialog = function (e) {
        dialogs.sharedfolderAccess.open(e);
      }),
      (d.openAddTotpDialog = function () {
        dialogs.addTotpDialog.open();
      }),
      (d.openRestrictedSharingDialog = function () {
        dialogs.restrictedSharing.open();
      }),
      (d.closeShareDialog = function () {
        dialogs.share.close(!0);
      }),
      (d.openManageIdentities = function () {
        bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : Ue.show();
      }),
      (d.openIdentityDialog = function (e) {
        dialogs.identity.open(e);
      }),
      (d.enableIdentity = function (e) {
        null !== h && h !== e && (h.disable(), LPProxy.enableIdentity(e)), (h = e);
        var e = P ? P._filter : null;
        null !== P && (zt(P), P.destruct()), (P = Pt(h, e));
      }),
      (d.openCreditMonitoring = function (e) {
        ((LPProxy.isFreeUser() || LPProxy.isExpiredUser() || -1 != navigator.userAgent.indexOf(" Edge/")) && !ln) || Ne.show();
      }),
      (d.openCreateCreditMonitoringDialog = function () {
        dialogs.createCreditMonitoring.open();
      }),
      (d.openDeletedItems = function (e) {
        ze.show();
      }),
      (d.openImportPasswords = function (e) {
        Ye.show(), e && bg.sendLpImprove("import_start_viewed", { origin: e });
      }),
      (d.openFamiliesInVault = function () {
        qe.show();
      }),
      (d.showAdPane = function () {
        var e;
        if (void 0 !== bg.is_edge ? bg.is_edge() : -1 !== navigator.userAgent.indexOf(" Edge/")) return !1;
        var t = bg.get("g_prompts").improve ? 1 : 0,
          n = u.getElementById("ad"),
          i = u.createElement("iframe");
        i.setAttribute(
          "src",
          B.getPartnerURL(
            LPProxy.getBaseURL() + "ads.php?nobr=1&noga=1&rand=" + Math.floor(1e3 * Math.random()) + "&v=" + LPProxy.getVersion()
          ) +
            "&g_lpImprove=" +
            t
        ),
          i.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups"),
          n.appendChild(i),
          g.addClass("freeUser"),
          setInterval(function () {
            i.setAttribute(
              "src",
              B.getPartnerURL(
                LPProxy.getBaseURL() + "ads.php?v=4.0&nobr=1&noga=1&rand=" + Math.floor(1e3 * Math.random()) + "&v=" + LPProxy.getVersion()
              ) +
                "&g_lpImprove=" +
                t
            );
          }, 3e5);
      }),
      g.bind("click", function () {
        ot();
      }),
      $("#vault").bind("click", function () {
        rt(), ot();
      }),
      $(ne, te).bind("click", function (e) {
        d.closeFaaB(e);
      }),
      $(te).bind("click", function (e) {
        d.closeFaaB(e);
      }),
      $("#loginButton").bind("click", function () {
        bg.open_login();
      }),
      $("#skip-to-search").keydown(function (e) {
        (13 !== e.keyCode && 32 !== e.keyCode) || ($("#vaultSearch").focus(), e.preventDefault(), e.stopPropagation());
      }),
      $("#skip-to-vault").keydown(function (e) {
        (13 !== e.keyCode && 32 !== e.keyCode) || ($("#vaultContent").focus(), e.preventDefault(), e.stopPropagation());
      }),
      $("#skip-to-add-item").keydown(function (e) {
        (13 !== e.keyCode && 32 !== e.keyCode) || ($("#addMenuButtonDefault").focus(), e.preventDefault(), e.stopPropagation());
      }),
      g.bind("keydown", function (e) {
        var t, n;
        (0 !== Dialog.prototype.getDialogCount() && "introTourDialog" !== Dialog.prototype.getCurrentDialog().element.id) ||
          ((t = e.keyCode || e.which),
          (n = document.activeElement),
          117 === t
            ? (e.preventDefault(), sn(n))
            : 9 === t && n && "header" === n.id && $("#search").children(".searchWrapper")[0].focus());
      }),
      LPPlatform.addEventListener(window, "unload", function () {
        Topics.get(Topics.CLEAR_DATA).publish();
      }),
      m.LP_addSearchHandlers("inputLight", function (e) {
        d.search(e);
      }),
      m.bind("keydown", function (e) {
        var t, n, n;
        40 === (e.keyCode || e.which) &&
          (n = b.getContainer()) &&
          0 < (n = n.getAllChildrenOrdered()).length &&
          (n[0].focus(), e.preventDefault(), e.stopPropagation());
      }),
      $("#orderOption").bind("click", q),
      $("#actions").bind("click", Y),
      $(".sharingMenuItem").bind("click", function () {
        var e;
        bg.get("g_is_restricted")
          ? d.openVaultDeviceLimitDialog()
          : (bg.sendLpImprove("vault_open_view", { view_name: "sharing_center", os_type: v, browser_type: _ }),
            bg.sendLpImprove("sharing_center_vault_click"),
            !LPProxy.isLegacyPremium() &&
              Kt() &&
              LPFeatures.allowTryFamilies() &&
              !Jt() &&
              !Xt() &&
              LPProxy.isFamiliesTrialStarted() &&
              d.openTryFamiliesDialog(!1, "sharing_menu_item"),
            d.openSharingCenter());
      }),
      be.bind("click", function (e) {
        d.toggleAdvancedMenu(e), bg.sendLpImprove("vault_open_view", { view_name: "Advanced Options", os_type: v, browser_type: _ });
      }),
      ve.bind("click", function (e) {
        d.toggleHelpMenu(e), bg.sendLpImprove("vault_open_view", { view_name: "Help", os_type: v, browser_type: _ });
      }),
      s.bind("click", ut),
      s.bind("click", dt),
      p.bind("click", d.toggleLeftMenu),
      LPPlatform.addEventListener(u.getElementById("settingsMenuItem"), "click", function () {
        Topics.get(Topics.EDIT_SETTINGS).publish({ source: "sidebar" }),
          bg.sendLpImprove("vault_open_view", { view_name: "Account Settings", os_type: v, browser_type: _ });
      }),
      oe.on("click", ".toolsMenuItem", ut),
      re.on("click", ".toolsMenuItem", dt),
      bg.get("g_is_restricted") ||
        (c.bind("mouseenter", mt),
        c.bind("mouseleave", yt),
        c.bind("touchstart", function (e) {
          c.unbind("mousenter"), c.unbind("mouseleave"), c.hasClass("open") || (mt(), e.preventDefault());
        })),
      De.bind("focus", ft),
      De.bind("blur", ht);
    var ln = bg.get("g_has_credit_monitoring_premium"),
      M,
      k,
      t,
      cn =
        (LPPlatform.addEventListener(u.getElementById("collapseAllToggle"), "click", function () {
          d.toggleCollapseAll(), bg.sendLpImprove("vault_collapse_arrow_click", { os_type: v, browser_type: _ });
        }),
        LPPlatform.addEventListener(u.getElementById("sizeToggle"), "click", function () {
          LPProxy.setPreferences("compactView", !LPProxy.getPreference("compactView")),
            d.toggleSize(),
            bg.sendLpImprove("vault_zoom_click", {
              zoom_type: 1 === LPProxy.getPreference("compactView") ? "in" : "out",
              os_type: v,
              browser_type: _
            });
        }),
        LPPlatform.addEventListener(u.getElementById("gridButton"), "click", function () {
          d.displayAsGrid(),
            LPProxy.setPreferences("gridView", !0),
            bg.sendLpImprove("vault_grid_view_click", { view_type: "tile", os_type: v, browser_type: _ });
        }),
        LPPlatform.addEventListener(u.getElementById("listButton"), "click", function () {
          d.displayAsList(),
            LPProxy.setPreferences("gridView", !1),
            bg.sendLpImprove("vault_grid_view_click", { view_type: "list", os_type: v, browser_type: _ });
        }),
        LPPlatform.addEventListener(u.getElementById("userMenuContainer"), "click", j),
        LPPlatform.addEventListener(u.getElementById("manageIdentitiesMenuItem"), "click", function () {
          d.openManageIdentities();
        }),
        LPPlatform.addEventListener(u.getElementById("creditMonitoringMenuItem"), "click", function () {
          bg.get("g_is_restricted") && !ln ? d.openVaultDeviceLimitDialog() : d.openCreditMonitoring();
        }),
        LPPlatform.addEventListener(u.getElementById("openTourMenuItem"), "click", function () {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : LPPlatform.openTour(!0);
        }),
        $(".toolsMenuItem").click(function () {
          var e = $(this).attr("tracking-event");
          e && bg.sendLpImprove("vaultnav" + e.toLowerCase(), { source: "Vault" });
        }),
        LPPlatform.addEventListener(u.getElementById("toolsImport"), "click", function () {
          bg.get("g_is_restricted")
            ? d.openVaultDeviceLimitDialog()
            : LPFeatures.importPasswordsInVaultEnabled()
            ? d.openImportPasswords("advanced_options")
            : LPProxy.import("advanced_options");
        }),
        LPPlatform.addEventListener(u.getElementById("toolsExport"), "click", function () {
          LPProxy.export();
        }),
        LPPlatform.addEventListener(u.getElementById("toolsOpenFavorites"), "click", function () {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : LPProxy.openAllFavorites("vault");
        }),
        LPPlatform.addEventListener(u.getElementById("otpMenuItem"), "click", function () {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : $(this).attr("href", bg.get("base_url") + "otp.php");
        }),
        LPPlatform.addEventListener(u.getElementById("historyMenuItem"), "click", function () {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : LPProxy.openHistory();
        }),
        LPPlatform.addEventListener(u.getElementById("deletedMenuItem"), "click", function () {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : d.openDeletedItems();
        }),
        LPPlatform.addEventListener(u.getElementById("generateSharingKeys"), "click", function () {
          bg.lpevent("v_gsk"), dialogs.sharingKey.open();
        }),
        $("#generateSharingKeys").hide(),
        LPPlatform.addEventListener(u.getElementById("featureManager"), "click", function () {
          bg.openURL(window.location.origin + "/lastpass/index.html#/feature-manager");
        }),
        LPPlatform.addEventListener(u.getElementById("generatePasswordMenuItem"), "click", function () {
          var e;
          bg.lpevent("v_gpw"),
            (bg.get("LPContentScriptFeatures").better_generate_password_enabled
              ? dialogs.betterGeneratePassword
              : dialogs.generatePassword
            ).open({ fillGenerated: !1, saveOptions: { source: "vault" } });
        }),
        $("#tryEnterprise").bind("click", function () {
          dialogs.enterpriseTrial.open();
        }),
        $("#emergencyAccessMenuItem").bind("click", function () {
          var e;
          reduxApp && LPProxy.isExpiredFamilyUser()
            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Emergency Access")
            : bg.get("g_is_restricted")
            ? d.openVaultDeviceLimitDialog()
            : ((e = 0 < bg.get("g_emer_sharers").length || 0 < bg.get("g_emer_sharees").length),
              LPFeatures.isVaultPremiumPopupsEnabled() &&
              LPProxy.getAccountClass() === Constants.USER_FAMILY_ADMIN &&
              LPProxy.isExpiredUser()
                ? d.showVaultUpgradeToPremiumDialog("emergency_access_families")
                : LPFeatures.isVaultPremiumPopupsEnabled() && (LPProxy.isFreeUser() || LPProxy.isExpiredUser()) && !e
                ? d.showVaultUpgradeToPremiumDialog("emergency_access")
                : (!LPProxy.isFreeUser() && !LPProxy.isExpiredUser()) || e
                ? (bg.sendLpImprove("emergency_access_vault_click"),
                  bg.sendLpImprove("vault_open_view", { view_name: "Emergency Access", os_type: v, browser_type: _ }),
                  d.openEmergencyAccess())
                : (bg.sendLpImprove("restricted_emergency_access_lightbox_shown"), d.openRestrictedEmergencyAccess()));
        }),
        $(".securityMenuItem").bind("click", function () {
          bg.get("g_is_restricted") ? d.openVaultDeviceLimitDialog() : (bg.lpevent("v_sec"), bg.openseccheck());
        }),
        $("#adminConsoleMenuItem").bind("click", function () {
          bg.lpevent("v_oec"), bg.openentconsole();
        }),
        $("#more-options-refer-a-friend").bind("click", function () {
          bg.sendLpImprove("refer_a_friend_more_options_click");
        }),
        $("#advanced-options-go-premium").bind("click", function () {
          reduxApp && LPProxy.isExpiredFamilyUser()
            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Vault Menu Upgrade")
            : d.upgradeToPremiumAction({
                self: function () {
                  bg.sendLpImprove("go_premium_more_options_vault_click");
                },
                apple: function () {}
              });
        }),
        f.bind("click", function () {
          reduxApp && LPProxy.isExpiredFamilyUser()
            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Manage Family Menu Item")
            : (bg.lpevent("v_ofc"),
              d.openFamiliesInVault(),
              bg.sendLpImprove("Families Console Viewed", { source: "Vault" }),
              bg.sendLpImprove("vault_open_view", { view_name: "Manage Families", os_type: v, browser_type: _ }));
        }),
        $("#lp-try-families").bind("click", function () {
          reduxApp && LPProxy.isExpiredFamilyUser()
            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Try Family Menu Item")
            : Kt() && LPFeatures.allowTryFamilies() && d.openTryFamiliesDialog(!1, "try_families_submenu_item");
        }),
        (LPFeatures.isPromotionVaultSidebarG2aEnabled() ||
          LPFeatures.isPromotionVaultSidebarG2wEnabled() ||
          LPFeatures.isPromotionVaultSidebarG2mVariantAEnabled() ||
          LPFeatures.isPromotionVaultSidebarG2mVariantBEnabled()) &&
          ((M = LPFeatures.isPromotionVaultSidebarG2mVariantAEnabled()
            ? "g2ma"
            : LPFeatures.isPromotionVaultSidebarG2mVariantBEnabled()
            ? "g2mb"
            : LPFeatures.isPromotionVaultSidebarG2aEnabled()
            ? "g2a"
            : "g2w"),
          (k = AuroraAccount.products[M]),
          (t = $("#promotionMenuItem")),
          bg.sendLpImprove("promotion_vault_menu_item_shown", { recommendedProduct: k.productId, promotionText: k.promotionText }),
          $(".freeTrialTag").css("display", k.freeTrialTagDisplay),
          $(".menuIcon").addClass(k.icon),
          t
            .LP_show()
            .prop("title", k.tooltip)
            .on("click", function () {
              bg.BackgroundServer.aurora.getOneClickSignupUrls({
                success: function (e) {
                  var t, n, i;
                  e &&
                    e[M] &&
                    ((t = bg.localStorage_getItem("promotion_" + k.productId + "_clicked_" + bg.get("g_username_hash"))),
                    bg.sendLpImprove("promotion_vault_menu_item_clicked", {
                      recommendedProduct: k.productId,
                      promotionText: k.promotionText,
                      promotionLink: t ? "login" : "signup"
                    }),
                    (n = t ? e[M].login : e[M].signup),
                    (i = function () {
                      bg.localStorage_setItem("promotion_" + k.productId + "_clicked_" + bg.get("g_username_hash"), 1),
                        t ||
                          new Account().addFromDialog({ name: k.name, url: e[M].login }, null, {
                            success: function () {
                              return null;
                            }
                          }),
                        bg.openURL(n);
                    }),
                    "g2m" === k.productId && LPFeatures.isPromotionPromptEmailVerifyEnabled() ? cn(i, M) : i());
                }
              });
            })
            .find(".menuText")
            .text(k.promotionText)),
        function (t, n) {
          bg.LPServer.jsonRequest({
            url: "lmiapi/users/me/shouldverifyemail",
            type: "GET",
            success: function (e) {
              e.shouldVerifyEmail
                ? (bg.sendLpImprove("promotion_email_verification_required"),
                  dialogs.confirmation.open({
                    title: Strings.translateString("Verify Email"),
                    text: Strings.translateString("Please verify your email before signing up for your GoToMeeting trial."),
                    nextButtonText: Strings.translateString("Send Verification Email"),
                    backButtonText: Strings.Vault.CANCEL,
                    handler: function () {
                      bg.LPServer.jsonRequest({
                        url: "/settings.php",
                        type: "POST",
                        data: { testemail: 1, email: bg.get("g_username"), extra: "verifypromotion", product: n },
                        success: function () {
                          bg.sendLpImprove("promotion_email_verification_email_sent"),
                            dialogs.alert.open({
                              title: Strings.translateString("Success!"),
                              text: Strings.translateString(
                                "Please check your email for the verification message (it may have gone to your spam folder)."
                              )
                            });
                        },
                        error: function () {
                          dialogs.alert.open({
                            title: Strings.translateString("ERROR"),
                            text: Strings.translateString("There was an error sending your verification email.")
                          });
                        }
                      });
                    }
                  }))
                : t();
            },
            error: function () {
              dialogs.alert.open({
                title: Strings.translateString("ERROR"),
                text: Strings.translateString("There was an error connecting with the verification service.")
              });
            }
          });
        }),
      I,
      un,
      dn =
        (Topics.get(Topics.ACCOUNT_UNLINKED).subscribe(function () {
          var e = reduxApp.getState().encryptedVaultDataSource.settings.allowPersonalLinkedAccount;
          d.toggleAccountBenefitsMenu(!LPFeatures.isFamiliesAsABenefitEnabled() && !e);
        }),
        Topics.get(Topics.ITEMS_DESELECTED).subscribe(function () {
          d.hideMoreOptionsMenu();
        }),
        Topics.get(Topics.ITEMS_SELECTED).subscribe(function () {
          d.showMoreOptionsMenu();
        }),
        Topics.get(Topics.SELECT_COUNT_CHANGE).subscribe(function (e) {
          ct(e);
        }),
        Topics.get(Topics.CONTEXT_MENU).subscribe(function (e, t) {
          t.parentElement !== u.body && u.body.appendChild(t), (S = LPTools.displayContextMenu(e, t));
        }),
        Topics.get(Topics.CONTEXT_CLOSE).subscribe(function () {
          nt();
        }),
        Topics.get(Topics.ITEM_SHARE).subscribe(function (e) {
          d.openShareDialog(e);
        }),
        Topics.get(Topics.IDENTITY_ENABLE).subscribe(function (e) {
          d.enableIdentity(e), mn(P);
        }),
        Topics.get(Topics.CLEAR_DATA).subscribe(function () {
          d.clear(), Dialog.prototype.closeAllDialogs(!0), bg.closeSettingsIframe();
        }),
        Topics.get(Topics.LOGIN).subscribe(function (e) {
          hn(),
            d.initialize(e),
            Dialog.prototype.closeAllDialogs(!0),
            d.initializeWelcomeDialogs(),
            d.initializeCategoryBackground(),
            d.initializeSharingKeys();
        }),
        Topics.get(Topics.REQUEST_SUCCESS).subscribe(function (e) {
          LPTools.getOption(e, "incrementAccountsVersion", !1) && rt();
        }),
        (I = function (e, t, n) {
          at(), P.addChild(e.newDisplayObject(), t, n), mn(P);
        }),
        Topics.get(Topics.SITE_ADDED).subscribe(I),
        Topics.get(Topics.NOTE_ADDED).subscribe(I),
        Topics.get(Topics.FORM_FILL_ADDED).subscribe(I),
        Topics.get(Topics.APPLICATION_ADDED).subscribe(I),
        Topics.get(Topics.ITEM_REMOVED).subscribe(function () {
          mn(P);
        }),
        Topics.get(Topics.EDIT_SHARED_FOLDER_ACCESS).subscribe(function (e) {
          d.openSharedFolderAccessDialog(e);
        }),
        Topics.get(Topics.EDIT_SITE).subscribe(function (e) {
          d.openSiteDialog(e);
        }),
        Topics.get(Topics.EDIT_NOTE).subscribe(function (e) {
          d.openNoteDialog(e);
        }),
        Topics.get(Topics.EDIT_FORM_FILL).subscribe(function (e) {
          d.openFormFillDialog(e);
        }),
        Topics.get(Topics.EDIT_APPLICATION).subscribe(function (e) {
          dialogs.application.open(e);
        }),
        Topics.get(Topics.EDIT_SETTINGS).subscribe(function (e) {
          bg.sendLpImprove("viewvaultsettings", { source: e && e.source ? e.source : "" }),
            (params = {}),
            bg.get("gRecovery") && (params.recovery = bg.get("gRecovery"));
          var t = "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA(),
            n = new URLSearchParams(location.search);
          t && n.has("recovery") && (params.recovery = n.get("recovery")),
            e && e.defaulttab && (params.defaulttab = e.defaulttab),
            LPProxy.callAcctsIFrameCommand("settings", null, params);
        }),
        Topics.get(Topics.EDIT_IDENTITY).subscribe(function (e) {
          d.openIdentityDialog(e);
        }),
        Topics.get(Topics.ACCEPT_SHARE).subscribe(function (e) {
          reduxApp.acceptPendingShare(e._data.id);
        }),
        Topics.get(Topics.RENAME_FOLDER).subscribe(function (e) {
          d.openFolderDialog(e);
        }),
        Topics.get(Topics.CREATE_SUB_FOLDER).subscribe(function (e) {
          d.openFolderDialog(null, e);
        }),
        Topics.get(Topics.GROUP_ADDED).subscribe(function (e, t) {
          var t, e;
          at(),
            P.addChild(e.newDisplayObject(), t),
            e instanceof SharedGroup && null !== (t = F.getContainer()) && ((e = new SharedFolderItem(e)), t.addChild(e));
        }),
        Topics.get(Topics.ESCAPE).subscribe(function (e) {
          var t = Dialog.prototype.getCurrentDialog();
          t && t.close(), rt(), ot();
        }),
        Topics.get(Topics.EDIT_SHARED_FOLDER).subscribe(function (e, t) {
          d.openSharedFolderDialog(e, t);
        }),
        Topics.get(Topics.IDENTITY_ADDED).subscribe(function (e) {
          Ue.getContainer().addChild(e.newDisplayObject());
        }),
        (d.refreshVault = function () {
          var e;
          null !== o &&
            o._accountClass !== LPProxy.getAccountClass() &&
            void 0 !== bg.makeLoginCheck &&
            (bg.makeLoginCheck(),
            (e = Strings.translateString("Subscription updated. Thanks for choosing LastPass!")),
            localStorage.setItem(bg.get("g_username_hash") + "LPNotificationSuccessMessage", e),
            LPFeatures.secondaryOnboardingEnabled() || location.reload()),
            LPProxy.initializeModel(),
            qt(),
            (o = LPProxy.getUser()).initialize(he, $("#userMenuText")),
            LPTools.parseUserSpecificMenu(u.getElementById("tools"), o._accountClass),
            LPTools.parseUserSpecificMenu(u.getElementById("leftMenu"), o._accountClass),
            Ht(LPProxy.getAccountClass(), LPProxy.isPremiumAsAPerk(), LPProxy.isLegacyPremium()),
            VaultState.setIdentities(o._identities),
            LPProxy.enableCurrentIdentity(o._identities),
            o.isFreeOrTrial() && !LPFeatures.secondaryOnboardingEnabled() ? d.showAdPane() : g.removeClass("freeUser"),
            LPProxy.getSecurityChallengeScore(Wt),
            Dialog.prototype.closeInProcessDialogs(),
            VaultItemDialog.prototype.refreshOpenDialogs(),
            Topics.get(Topics.REFRESH_PREFERENCES).publish(),
            nt();
        }),
        Topics.get(Topics.REFRESH_DATA).subscribe(d.refreshVault),
        Topics.get(Topics.UPDATE_NOTIFICATION_COUNT).subscribe(function (e) {
          b && b.updateNotificationCount("number" == typeof e ? e : 1);
        }),
        Topics.get(Topics.CREATE_SHARED_FOLDER).subscribe(function (e, t) {
          reduxApp && LPProxy.isExpiredFamilyUser()
            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType())
            : d.openCreateSharedFolderDialog(e, t);
        }),
        Topics.get(Topics.REPROMPT).subscribe(function (e, t) {
          dialogs.reprompt.open({ successCallback: e, cancelCallback: t });
        }),
        Topics.get(Topics.CONFIRM).subscribe(function (e) {
          dialogs.confirmation.open(e);
        }),
        Topics.get(Topics.EMERGENCY_RECIPIENT_ADDED).subscribe(function (e) {
          x.getContainer().addChild(e.newDisplayObject());
        }),
        Topics.get(Topics.EDIT_EMERGENCY_RECIPIENT).subscribe(function (e) {
          dialogs.addEmergencyAccess.open({ vaultItem: e });
        }),
        Topics.get(Topics.REAPPLY_SEARCH).subscribe(function (e, t) {
          var n = m.val();
          n && e.applySearch(n, t);
        }),
        Topics.get(Topics.ENROLLED_CREDIT_MONITORING).subscribe(function () {
          Ne.refresh();
        }),
        Topics.get(Topics.ITEM_SHARED).subscribe(function (e) {
          Je.refresh();
        }),
        Topics.get(Topics.REFRESH_PREFERENCES).subscribe(function () {
          switch (
            (LPFeatures.updateFeatures({
              import: !0,
              noexport: !1,
              share: !0,
              share_onlyfolders: !1,
              show_notes: !0,
              show_two_factor_code: !0,
              bookmarklets: !0,
              hideidentities: !1,
              link_personal: !0,
              show_formfills: !0
            }),
            LPProxy.hasReceivedShares() ? g.removeClass("noReceivedShares") : g.addClass("noReceivedShares"),
            b)
          ) {
            case Je:
              LPFeatures.allowIndividualSharing() ||
                (et.clear(),
                O.all.show(),
                dialogs.alert.open({
                  title: Strings.translateString("Policy Update"),
                  text: Strings.translateString("Your enterprise has prohibited individual sharing.")
                }));
              break;
            case F:
              LPFeatures.allowSharedFolders() ||
                (O.all.show(),
                dialogs.alert.open({
                  title: Strings.translateString("Policy Update"),
                  text: Strings.translateString("Your enterprise has prohibited sharing.")
                }));
          }
        }),
        Strings.translate(u.body),
        $("input,textarea").prop("spellcheck", !1),
        LPFeatures.allowNewSettings() &&
          (((un = document.getElementById("new-settings-iframe")).src = LPProxy.getBaseURL() + "newvault/lp-vault/settings.html"),
          un.addEventListener("load", function () {
            un.contentWindow.postMessage({ localkey: parent.g_local_key }, LPProxy.getBaseURL());
          })),
        Topics.get(Topics.INTRO_TOURS_LOADED).subscribe(function (e) {
          var t = LPProxy.seenVaultPostFamilies(),
            n = LPProxy.predatesFamilies(),
            i = LPFeatures.allowTryFamilies(),
            o = LPProxy.isFamiliesTrialStarted();
          !i || !n || t || Jt() || Xt() || !Kt() || o || d.openTryFamiliesDialog(!1, "first_vault_entry");
        }),
        Notifications.initialize(),
        void 0 !== reduxApp &&
          "function" == typeof reduxApp.getState &&
          reduxApp.getState().settings.features &&
          reduxApp.getState().settings.features.security_dashboard_2_0 &&
          BreachedAlertBanner.initialize(),
        function (e, t, n) {
          var n = LPTools.createElement("div", $.extend(n, { class: "leftMenuItem space-clickable", id: n.id, tabindex: 1 }));
          return n.appendChild(t), n.appendChild(LPTools.createElement("span", { class: "menuText" }, e)), $(n);
        }),
      pn = function (e, t) {
        return e instanceof GroupDisplay || e._model.getRecordType() === t.recordType;
      },
      gn = function (t, e) {
        var n;
        return t.types
          ? ((n = e.filter(function (e) {
              return -1 < t.types.indexOf(e.id);
            })),
            function (e) {
              for (var t = 0; t < n.length; ++t) if (pn(e, n[t])) return !0;
              return !1;
            })
          : function (e) {
              return !(e instanceof FormFillDisplay);
            };
      },
      O = {},
      mn = function (i) {
        var n, o, r, a, s, l, c, r;
        LPFeatures.allowOmarIA() &&
          ((n = document.getElementById("leftMenuItemsContainer")),
          LPTools.removeDOMChildren(n),
          (o = LPProxy.getRecordConfig()),
          (s = function (e) {
            if (e.types) {
              var t = LPProxy.getConfigTypeObject(e.types[0]),
                n = bg.get("g_prefoverrides").noformfill ? bg.get("g_prefoverrides").noformfill : [],
                i,
                o;
              if (
                !(-1 !== LPProxy.getAllModelTypes().indexOf(t.recordType)) &&
                "Account" !== t.recordType &&
                (-1 !== n.indexOf("0") || -1 !== n.indexOf(t.enterprisePolicyId))
              )
                return !0;
              if (Array.isArray(e.platformSpecific))
                if (e.platformSpecific.includes("electron"))
                  return !("function" == typeof LPPlatform.isElectron && LPPlatform.isElectron());
            }
            return !1;
          }),
          (r = !(a = r =
            !(l = function (e) {
              r && (n.appendChild(LPTools.createElement("div", "leftMenuItemsDivider")), (r = !1));
              var t = O[e.id].getElement();
              n.appendChild(t), null != e.user && t.setAttribute("user", e.user);
            }))),
          o.viewConfig.forEach(
            (c = function (e, t) {
              var t, e, n;
              Array.isArray(e)
                ? ((r = 0 < t), e.forEach(c))
                : (t = LPProxy.getConfigViewObject(e)).default
                ? s(t) || l(t)
                : ((e = gn(t, o.types)),
                  (n = i._filter),
                  i.applyFilter({ func: e }, { checkForStateChange: !1 }),
                  0 < i.getItemChildren().length ? l(t) : O[t.id] === b && (a = !0),
                  i.applyFilter(n, { checkForStateChange: !1 }));
            })
          ),
          LPTools.parseUserSpecificMenu(u.getElementById("leftMenu"), LPProxy.getAccountClass()),
          a && O.all.show(),
          (LPFeatures.hide_cloud_apps_policy_enabled()
            ? ($("#cloud-apps").LP_hide(), $("#cloud-apps-filter"))
            : LPFeatures.cloud_apps_filter_in_vault()
            ? $("#cloud-apps")
            : $("#cloud-apps-filter")
          ).LP_hide(),
          (LPFeatures.allowSecurityDashboard() ? $(".securityMenuItem") : $(".securityDashboardMenuItem")).LP_hide(),
          m.val()) &&
          i.applySearch(m.val(), { forceSearch: !0 }),
          (void 0 === bg.get_method && bg.get("LPContentScriptFeatures").omaria) || $("#toolsMigrate").LP_hide(),
          yn();
      },
      fn = function (e) {
        var e,
          t = LPProxy.getRecordConfig(),
          e = e.types && 0 < e.types.length ? t.icons[e.types[0]] : t.icons.all;
        return LPTools.createElement("i", { class: ["menuIcon", e] });
      },
      yn = function () {
        var e;
        LPFeatures.allowOmarIA() &&
          ((e = document.getElementById("all")), Be) &&
          e &&
          (Be.remove(), e.after(Be), (Be.querySelector(".leftMenuCell").style.minWidth = "288px"));
      },
      hn = function () {
        var o;
        LPFeatures.allowOmarIA()
          ? (o = LPProxy.getRecordConfig()).views.forEach(function (i) {
              O[i.id] = new T({
                filter: { showEmptyGroups: !0 !== i.noShowEmptyGroups, func: gn(i, o.types) },
                sortOptions: e,
                menuElement: dn(Strings.translateString(i.name), fn(i), { id: i.id }),
                bodyState: "vaultContent " + i.id,
                scrollParent: l,
                title: Strings.translateString(i.name),
                addMenu: i.noAddItemMenu
                  ? []
                  : [
                      new r({
                        text: "ADD_ITEM",
                        autoId: "vaultAddItemButton",
                        func: function () {
                          var t,
                            n = bg.get("g_prefoverrides").noformfill ? bg.get("g_prefoverrides").noformfill : [];
                          bg.get("g_is_restricted")
                            ? d.openVaultDeviceLimitDialog()
                            : i.types && -1 === n.indexOf("0")
                            ? o.types.forEach(function (e) {
                                if (e.id === i.types[0])
                                  switch ((t = e.recordType)) {
                                    case o.TYPE.Password:
                                      dialogs.site.open(),
                                        bg.sendLpImprove("vault_add_item_click", { item_type: "Password", os_type: v, browser_type: _ });
                                      break;
                                    case o.TYPE.Application:
                                      dialogs.application.open(),
                                        bg.sendLpImprove("vault_add_item_click", { item_type: "Application", os_type: v, browser_type: _ });
                                      break;
                                    case o.TYPE.Custom:
                                      dialogs.addItem.open({ isExpanded: !0 }),
                                        bg.sendLpImprove("vault_add_item_click", { item_type: "Custom", os_type: v, browser_type: _ });
                                      break;
                                    default:
                                      -1 !== n.indexOf(e.enterprisePolicyId)
                                        ? dialogs.addItem.open()
                                        : (dialogs.note.open({
                                            defaultData: {
                                              notetype: t,
                                              language: Note.prototype.isValidLanguage(navigator.language) ? navigator.language : "en-US"
                                            }
                                          }),
                                          bg.sendLpImprove("vault_add_item_click", { item_type: t, os_type: v, browser_type: _ }));
                                  }
                              })
                            : dialogs.addItem.open();
                        }
                      }),
                      a.Folder
                    ]
              });
            })
          : ((O.all = new T({
              filter: {
                showEmptyGroups: !0,
                func: function (e) {
                  return e instanceof AccountBaseDisplay || e instanceof ApplicationDisplay || e instanceof GroupDisplay;
                }
              },
              sortOptions: e,
              menuElement: $("#vaultMenuItem"),
              bodyState: "vaultContent site",
              scrollParent: l,
              title: Strings.translateString("Sites"),
              addMenu: [a.Site, a.Note, a.ShareItems, a.Folder]
            })),
            (O.CloudAppsFilter = new T({
              filter: {
                showEmptyGroups: !1,
                multiSelect: !1,
                hasFolderView: !0,
                func: function (e) {
                  return e instanceof GroupDisplay || (e instanceof AccountDisplay && "Cloud Apps" === e.getRecordType());
                }
              },
              sortOptions: e,
              menuElement: $("#cloudAppsFilterMenuItem"),
              bodyState: "vaultContent CloudApps",
              scrollParent: l,
              title: Strings.translateString("Cloud Apps"),
              addMenu: []
            })),
            (O.notes = new T({
              filter: {
                showEmptyGroups: !1,
                func: function (e) {
                  return e instanceof NoteDisplay || e instanceof GroupDisplay;
                }
              },
              sortOptions: e,
              menuElement: $("#notesMenuItem"),
              bodyState: "vaultContent note",
              scrollParent: l,
              title: Strings.translateString("Secure Notes"),
              addMenu: [a.Note, a.ShareItems, a.Folder]
            })),
            (O.formFills = new T({
              filter: {
                showEmptyGroups: !1,
                multiSelect: !1,
                hasFolderView: !1,
                func: function (e) {
                  return e instanceof FormFillDisplay;
                }
              },
              sortOptions: W,
              menuElement: $("#formFillMenuItem"),
              bodyState: "vaultContent formFill",
              scrollParent: l,
              title: Strings.translateString("Form Fills"),
              addMenu: [a.FormFill]
            }))),
          LPFeatures.isDogfood() || $("#featureManager").LP_hide(),
          LPFeatures.hide_cloud_apps_policy_enabled()
            ? (we.LP_hide(), Te.LP_hide())
            : LPFeatures.cloud_apps_filter_in_vault()
            ? (Te.LP_show(), we.LP_hide())
            : (Te.LP_hide(),
              we.LP_show().bind("click", function () {
                bg.sendLpImprove("vault_cloud_apps_clicked"), bg.openOnNewTab("saml/launch/nopassword?RelayState=/");
              })),
          LPFeatures.hide_cloud_apps_policy_enabled()
            ? $("#cloud-apps").LP_hide()
            : $("#cloud-apps")
                .LP_show()
                .bind("click", function () {
                  bg.sendLpImproveCallback("vault_cloud_apps_clicked", function () {
                    window.location.href = "/saml/launch/nopassword?RelayState=/";
                  });
                }),
          (LPFeatures.allowSecurityDashboard() ? Ie : xe).LP_hide();
      },
      Pn = getCookie("session_valid_until"),
      Pn,
      Sn,
      bn;
    Pn &&
      ((Pn = new Date(1e3 * parseInt(Pn))),
      (Sn = !1),
      (bn = setInterval(function () {
        !Sn &&
          Pn.getTime() - Date.now() < 12e4 &&
          ((Sn = !0),
          dialogs.alert.open({
            title: Strings.translateString("Your session will expire soon"),
            text: Strings.translateString(
              "For your protection, your session will expire in 2 minutes. This is required by your organization's security policy."
            )
          })),
          Pn.getTime() - Date.now() < -1e4 &&
            (clearInterval(bn),
            "function" == typeof LPPlatform.isSPA && LPPlatform.isSPA()
              ? bg.loggedOut(!1, "session_expired_timer")
              : window.top.location.reload());
      }, 1e4))),
      (d.initializePremiumFeatureIndicatorIfNeeded = function () {
        LPProxy.isFamilyUser()
          ? bg.LPPlatform.isSafariAppStore(function (e) {
              e || d.initializePremiumFeatureIndicator();
            })
          : d.initializePremiumFeatureIndicator();
      }),
      (d.initializePremiumFeatureIndicator = function () {
        var i = LPProxy.getAccountClass(),
          o = $("#trialCounter"),
          t = $("#trialCounterBody"),
          e = bg.get("g_premium_trial_exp_days"),
          r = $('<span class="trial-counter__text"></span>'),
          n = $('<button class="trial-counter__button"></button>'),
          a = document.querySelectorAll(".premium-indicator"),
          s = document.getElementById("emergencyAccessPremiumTooltip"),
          l = document.getElementById("securityDashboardPremiumTooltip"),
          c = document.getElementById("familyAdminConsolePremiumTooltip");
        function u() {
          ne.addClass("trial-counter-is-visible"), o.addClass("is-visible");
          for (var e = 0; e < a.length; e++) {
            if (L()) {
              var t = a[e].parentElement.parentElement.parentElement,
                n;
              if ($(t).hasClass("securityDashboardMenuItem")) continue;
            }
            a[e].classList.add("is-visible");
          }
        }
        t.empty(),
          (s.innerText = ""),
          (l.innerText = ""),
          (c.innerText = ""),
          xe.addClass("premium-feature"),
          Ae.addClass("premium-feature"),
          Ae.addClass("premium-feature"),
          f.addClass("premium-feature"),
          n.text(Strings.translateString("Upgrade")),
          t.append(r),
          i === Constants.USER_FAMILY_ADMIN
            ? bg.BackgroundServer.licensing.getCompanyLicensing(function (e) {
                !1 === e.success
                  ? (o.addClass("clickable"),
                    reduxApp && LPProxy.isExpiredFamilyUser()
                      ? r.html(Strings.translateString("Upgrade to Families"))
                      : r.html(Strings.translateString("Go Families for %s$4.00/month.%s", "<b>", "</b>")),
                    o.on("click", function () {
                      reduxApp && LPProxy.isExpiredFamilyUser()
                        ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Premium Feature Indicator")
                        : (bg.openURL(LPProxy.getBaseURL() + "families/payment"),
                          bg.sendLpImprove("upgrade_prompt_action", {
                            feature: "None",
                            action: "Purchase",
                            userType: i,
                            product: "Families",
                            source: "Vault Banner"
                          }));
                    }),
                    (l.innerText = Strings.translateString("Go Families to continue monitoring your security.")),
                    (s.innerText = Strings.translateString("Go Families to keep your digital life alive in an emergency.")),
                    (c.innerText = Strings.translateString("Go Families to continue managing your family’s online security.")),
                    f.unbind("click"),
                    f.on("click", function () {
                      "undefined" != typeof Proxy && reduxApp && LPProxy.isExpiredFamilyUser()
                        ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Manage Family Menu Item")
                        : d.showVaultUpgradeToPremiumDialog("families");
                    }),
                    u())
                  : e.hasOwnProperty("trialdaysleft") &&
                    ((_companyTrialDays = e.trialdaysleft),
                    1 < e.trialdaysleft
                      ? (t.append(n),
                        r.html(Strings.translateString("%s%d days%s left in trial.", "<b>", e.trialdaysleft, "</b>")),
                        n.on("click", function () {
                          reduxApp && LPProxy.isExpiredFamilyUser()
                            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Premium Feature Indicator")
                            : (bg.openURL(LPProxy.getBaseURL() + "families/payment"),
                              bg.sendLpImprove("upgrade_prompt_action", {
                                feature: "None",
                                action: "Purchase",
                                userType: i,
                                product: "Families",
                                source: "Vault Banner"
                              }));
                        }),
                        (l.innerHTML =
                          Strings.translateString("Go Families to continue monitoring your security.") +
                          "</br>" +
                          Strings.translateString("%d days left in trial.", e.trialdaysleft)),
                        (s.innerHTML =
                          Strings.translateString("Go Families to keep your digital life alive in an emergency.") +
                          "</br>" +
                          Strings.translateString("%d days left in trial.", e.trialdaysleft)),
                        (c.innerHTML =
                          Strings.translateString("Go Families to continue managing your family’s online security.") +
                          " " +
                          Strings.translateString("%d days left in trial.", e.trialdaysleft)))
                      : 1 === e.trialdaysleft
                      ? (t.append(n),
                        r.html(Strings.translateString("1 day left in trial.", "<b>", "</b>")),
                        n.on("click", function () {
                          reduxApp && LPProxy.isExpiredFamilyUser()
                            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Premium Feature Indicator")
                            : (bg.openURL(LPProxy.getBaseURL() + "families/payment"),
                              bg.sendLpImprove("upgrade_prompt_action", {
                                feature: "None",
                                action: "Purchase",
                                userType: i,
                                product: "Families",
                                source: "Vault Banner"
                              }));
                        }),
                        (l.innerHTML =
                          Strings.translateString("Go Families to continue monitoring your security.") +
                          "</br>" +
                          Strings.translateString("1 day left in trial.")),
                        (s.innerHTML =
                          Strings.translateString("Go Families to keep your digital life alive in an emergency.") +
                          "</br>" +
                          Strings.translateString("1 day left in trial.")),
                        (c.innerHTML =
                          Strings.translateString("Go Families to continue managing your family’s online security.") +
                          " " +
                          Strings.translateString("1 day left in trial.")))
                      : 0 === e.trialdaysleft
                      ? (t.append(n),
                        r.html(Strings.translateString("Your trial will expire today", "<b>", "</b>")),
                        n.on("click", function () {
                          reduxApp && LPProxy.isExpiredFamilyUser()
                            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Premium Feature Indicator")
                            : (bg.openURL(LPProxy.getBaseURL() + "families/payment"),
                              bg.sendLpImprove("upgrade_prompt_action", {
                                feature: "None",
                                action: "Purchase",
                                userType: i,
                                product: "Families",
                                source: "Vault Banner"
                              }));
                        }),
                        (l.innerHTML =
                          Strings.translateString("Go Families to continue monitoring your security.") +
                          "</br>" +
                          Strings.translateString("Your trial will expire today")),
                        (s.innerHTML =
                          Strings.translateString("Go Families to keep your digital life alive in an emergency.") +
                          "</br>" +
                          Strings.translateString("Your trial will expire today")),
                        (c.innerHTML =
                          Strings.translateString("Go Families to continue managing your family’s online security.") +
                          " " +
                          Strings.translateString("Your trial will expire today")))
                      : (o.addClass("clickable"),
                        reduxApp && LPProxy.isExpiredFamilyUser()
                          ? r.html(Strings.translateString("Upgrade to Families"))
                          : r.html(Strings.translateString("Go Families for %s$4.00/month.%s", "<b>", "</b>")),
                        o.on("click", function () {
                          reduxApp && LPProxy.isExpiredFamilyUser()
                            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Premium Feature Indicator")
                            : (bg.openURL(LPProxy.getBaseURL() + "families/payment"),
                              bg.sendLpImprove("upgrade_prompt_action", {
                                feature: "None",
                                action: "Purchase",
                                userType: i,
                                product: "Families",
                                source: "Vault Banner"
                              }));
                        }),
                        (l.innerText = Strings.translateString("Go Families to continue monitoring your security.")),
                        (s.innerText = Strings.translateString("Go Families to keep your digital life alive in an emergency.")),
                        (c.innerText = Strings.translateString("Go Families to continue managing your family’s online security.")),
                        f.unbind("click"),
                        f.on("click", function () {
                          reduxApp && LPProxy.isExpiredFamilyUser()
                            ? reduxApp.setExpiredFamiliesPurchaseFlowType(LPProxy.getFamilyMemberType(), "Manage Family Menu Item")
                            : d.showVaultUpgradeToPremiumDialog("families");
                        })),
                    u());
              })
            : (1 < e
                ? (t.append(n),
                  r.html(Strings.translateString("%s%d days%s left in trial.", "<b>", e, "</b>")),
                  n.on("click", function () {
                    d.upgradeToPremiumAction({
                      self: function () {
                        bg.sendLpImprove("upgrade_prompt_action", {
                          feature: "None",
                          action: "Purchase",
                          userType: i,
                          product: "Premium",
                          source: "Vault Banner"
                        });
                      },
                      apple: function () {}
                    });
                  }),
                  (l.innerHTML =
                    Strings.translateString("Go Premium to continue monitoring your security.") +
                    "</br>" +
                    Strings.translateString("%d days left in trial.", e)),
                  (s.innerHTML =
                    Strings.translateString("Go Premium to keep your digital life alive in an emergency.") +
                    "</br>" +
                    Strings.translateString("%d days left in trial.", e)))
                : 1 === e
                ? (t.append(n),
                  r.html(Strings.translateString("1 day left in trial.", "<b>", "</b>")),
                  n.on("click", function () {
                    d.upgradeToPremiumAction({
                      self: function () {
                        bg.sendLpImprove("upgrade_prompt_action", {
                          feature: "None",
                          action: "Purchase",
                          userType: i,
                          product: "Premium",
                          source: "Vault Banner"
                        });
                      },
                      apple: function () {}
                    });
                  }),
                  (l.innerHTML =
                    Strings.translateString("Go Premium to continue monitoring your security.") +
                    "</br>" +
                    Strings.translateString("1 day left in trial.")),
                  (s.innerHTML =
                    Strings.translateString("Go Premium to keep your digital life alive in an emergency.") +
                    "</br>" +
                    Strings.translateString("1 day left in trial.")))
                : (r.html(Strings.translateString("Go premium")),
                  d.registerProductPriceUpdatesObserver("Premium", function (e, t) {
                    var n = Strings.translateString("Go Premium for %s<currency><price>/month.%s", "<b>", "</b>"),
                      n;
                    (n = (n = n.replace("<price>", e)).replace("<currency>", t)),
                      r.html(n),
                      o.addClass("clickable"),
                      o.on("click", function () {
                        d.upgradeToPremiumAction({
                          self: function () {
                            bg.sendLpImprove("upgrade_prompt_action", {
                              feature: "None",
                              action: "Purchase",
                              userType: i,
                              product: "Premium",
                              source: "Vault Banner"
                            });
                          },
                          apple: function () {}
                        });
                      });
                  }),
                  (l.innerText = Strings.translateString("Go Premium to continue monitoring your security.")),
                  (s.innerText = Strings.translateString("Go Premium to keep your digital life alive in an emergency."))),
              u());
      }),
      (d.showVaultUpgradeToPremiumDialog = function (e) {
        Topics.get(Topics.DIALOG_LOADING).publish(),
          dialogs.vaultUpgradeToPremiumDialog.preload({
            arguments: [],
            callback: function (n) {
              n.setType(e),
                LPPlatform.updateProductPrice(
                  n.getProductType(),
                  function (e, t) {
                    n.open.apply(n, [
                      {
                        price: e,
                        currency: t,
                        handleSubmit: function () {
                          bg.LPPlatform.isSafariAppStore(function (e) {
                            var t;
                            e
                              ? ((n.options.allowClose = !1),
                                (t = LPRequest.getNewRequestID()),
                                Topics.get(Topics.REQUEST_START).publish({ requestID: t }),
                                n.purchasePremiumAction(
                                  function () {
                                    (n.options.allowClose = !0), Topics.get(Topics.REQUEST_SUCCESS).publish({ requestID: t }), n.close();
                                  },
                                  function () {
                                    (n.options.allowClose = !0), Topics.get(Topics.REQUEST_ERROR).publish({ requestID: t });
                                  }
                                ))
                              : n.purchasePremiumAction();
                          });
                        }
                      }
                    ]);
                  },
                  function () {
                    Topics.get(Topics.DIALOG_LOADED).publish();
                  }
                );
            }
          });
      }),
      (d.closeFaaB = function (e) {
        var t = $("#familyAsABenefitDrawer div")[0],
          n = $("#accountBenefitsMenuItem div")[0];
        e.target !== t &&
          e.target !== n &&
          e.target.parentElement !== n &&
          reduxApp.getState().familiesAsABenefit.drawerOpen &&
          ($("#accountBenefitsMenuItem").removeClass("selected"), reduxApp.toggleFamiliesAsABenefitDrawer());
      }),
      (d.removeFaaBMenuItemSelection = function () {
        var e = $("#accountBenefitsMenuItem");
        void 0 !== e && $(e).removeClass("selected");
      });
  };
function getCookie(e) {
  for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
    for (var o = n[i]; " " === o.charAt(0); ) o = o.substring(1);
    if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
  }
  return "";
}
function deleteCookie(e) {
  document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
}
Topics.get(Topics.INITIALIZED).subscribe(function () {
  initialize(document, LPVault, BuildVariables);
}),
  Topics.get(Topics.INITIALIZED).subscribe(function () {
    try {
      var e = bg.get("g_username_hash") + "LPNotificationSuccessMessage",
        t = localStorage.getItem(e);
      t && (Notifications.displaySuccessMessage(t), localStorage.removeItem(e));
    } catch (e) {}
  }),
  Topics.get(Topics.REFRESH_PREFERENCES).subscribe(function () {
    try {
      var e = bg.get("g_username_hash") + "LPUserHasMetVaultDeviceLimitRestriction",
        t = localStorage.getItem(e),
        n = !bg.get("g_is_restricted"),
        i = JSON.stringify(reduxApp.getState().vaultData.passwords) === JSON.stringify({});
      t &&
        n &&
        i &&
        (LPProxy.refreshSites(),
        localStorage.removeItem(e),
        setTimeout(function () {
          location.reload();
        }, 1e3));
    } catch (e) {}
  });
