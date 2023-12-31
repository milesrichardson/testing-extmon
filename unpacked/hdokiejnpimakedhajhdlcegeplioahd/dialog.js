(Dialog = function (t, e) {
  (this.dialogConfig = t),
    (this.options = $.extend(t.dialogOptions, e)),
    (this.adjustedView = !1),
    (this.title = null),
    (this.titleElement = null),
    (this.headerElement = null),
    (this.element = null),
    (this.$element = null),
    (this.dialogContent = null),
    (this.previousDialog = null),
    (this.previousFocus = null),
    (this.pendingRefresh = !1),
    (this.maximized = !1),
    (this.currentViewElement = null),
    (this.currentMenuElement = null),
    (this.keyboardShown = !1),
    (this.inputFields = {}),
    (this.hiddenFields = {}),
    (this.originalData = {}),
    (this.containers = {}),
    (this.passwordInputs = []),
    (this.leftMenu = null),
    (this.dynamicHeight = LPTools.getOption(this.options, "dynamicHeight", !1)),
    (this.responsive = LPTools.getOption(this.options, "responsive", !0)),
    (this.title = LPTools.getOption(this.options, "title", null)),
    (this.overlayDialog = LPTools.getOption(this.options, "overlayDialog", !1)),
    (this.inProcessOverlay = null),
    (this.blurOverlay = null),
    (this.buttonContainer = null),
    (this.actionButtonContainer = null),
    (this.nextButton = null),
    (this.backButton = null),
    (this.backToAllSitesButton = null),
    (this.headerHeight = 0),
    (this.buttonHeight = 0),
    (this.excludedActions = {});
  for (var i = LPTools.getOption(this.options, "excludedActions", [Constants.ACTION_EDIT]), o = 0, n = i.length, s; o < n; ++o)
    this.excludedActions[i[o]] = !0;
  (this.setupComplete = !1),
    (this.modalOverlayTabID = null),
    (this.hidePreviousDialogs = !1),
    ((s = this).checkViewPasswordHandler = function (t) {
      s.checkViewPassword(t);
    }),
    (s.copyVaultItemPasswordHandler = function () {
      s.copyVaultItemPassword && s.copyVaultItemPassword();
    });
}),
  (function (n) {
    var s = !1,
      l = [],
      i = [],
      e = !1,
      o = function (t, e) {
        for (var i = 0, o = e.length; i < o; ++i)
          if (t === e[i]) {
            e.splice(i, 1);
            break;
          }
      },
      a = function (t) {
        o(t, l), o(t, i);
      },
      r = function (t) {
        l.push(t), LPTools.getOption(t.options, "submitDialog", !0) && i.push(t);
      },
      h = {},
      u = n.body,
      d = !1,
      p = $(n.body),
      t,
      c =
        ((Dialog.prototype.DIALOG_FIELD = "dialogField"),
        (Dialog.prototype.RIGHT_ALIGN = 0),
        (Dialog.prototype.CENTER_ALIGN = 1),
        (Dialog.prototype.LEFT_ALIGN = 2),
        n.body.appendChild(LPTools.createElement("div", { id: "dialogLoadingOverlay", class: "overlay" })),
        n.body.appendChild(
          ((t = LPTools.createElement("div", { id: "dialogOverlay", class: "overlay" })),
          $(t).bind("click", function () {
            Dialog.prototype.closeAllDialogs();
          }),
          t)
        ),
        Topics.get(Topics.ENTER).subscribe(function (t) {
          0 < i.length && "TEXTAREA" !== t.target.nodeName && "BUTTON" !== t.target.nodeName && i[i.length - 1].submit();
        }),
        function (t, e) {
          for (var i = 0; i < e.length; ++i)
            for (var o = e[i]._views, n = 0; n < o.length; ++n) if (jQuery.contains(t, o[n].getElement())) return !0;
          return !1;
        }),
      g,
      f,
      m,
      v =
        (Topics.get(Topics.REQUEST_START).subscribe(function (t) {
          var e;
          0 < i.length &&
            LPTools.getOption(t, "dialogRequest", !0) &&
            ((e = i[i.length - 1]),
            (t.hasOwnProperty("items") && c(e.$element, t.items)) || (e.showInProcessOverlay(), (h[t.requestID] = e)));
        }),
        Topics.get(Topics.REQUEST_SUCCESS).subscribe(function (t) {
          if (LPTools.getOption(t, "dialogRequest", !0)) {
            var e = h[t.requestID];
            if (e) {
              delete h[t.requestID];
              var i = !1,
                o;
              for (o in h)
                if (h[o] === e) {
                  i = !0;
                  break;
                }
              i || (e.hideInProcessOverlay(), LPTools.getOption(t.requestSuccessOptions, "closeDialog", !0) && e.closeOnSuccess());
            }
          }
        }),
        Topics.get(Topics.REQUEST_ERROR).subscribe(function (t) {
          var e;
          LPTools.getOption(t, "dialogRequest", !0) && (e = h[t.requestID]) && (e.hideInProcessOverlay(), delete h[t.requestID]);
        }),
        (g = function () {
          p.addClass("dialogLoading");
        }),
        (f = null),
        Topics.get(Topics.DIALOG_LOADING).subscribe(function () {
          (d = !0),
            clearTimeout(f),
            (f = setTimeout(function () {
              g();
            }, 250));
        }),
        Topics.get(Topics.DIALOG_LOADED).subscribe(function () {
          (d = !1), p.removeClass("dialogLoading"), clearTimeout(f);
        }),
        (Dialog.prototype.closeAllDialogs = function (t) {
          for (var e = "object" == typeof t && t ? t.forceClose : t, i = l.slice(), o = 0; o < i.length; o++) i[o].close(e);
        }),
        (Dialog.prototype.getCurrentDialog = function () {
          return 0 < l.length ? l[l.length - 1] : null;
        }),
        (Dialog.prototype.isOpen = function () {
          for (var t = 0; t < l.length; ++t) if (l[t] === this) return !0;
          return !1;
        }),
        (Dialog.prototype.closeInProcessDialogs = function () {
          for (var t in h) {
            var e;
            h[t].close(!0);
          }
        }),
        (Dialog.prototype.refreshOpenDialogs = function () {
          for (var t = [], e = 0, i = l.length; e < i; ++e) {
            var o = l[e],
              n = !1,
              s,
              a;
            for (s in h)
              if (h[s] === o) {
                n = !0;
                break;
              }
            n || ((a = o.refresh()) && t.push(a));
          }
          LPTools.openAlerts(t);
        }),
        (Dialog.prototype.getDialogCount = function () {
          return l.length;
        }),
        (Dialog.prototype.setIsDialogWindow = function (t) {
          s = t;
        }),
        (Dialog.prototype.isDialogWindow = function () {
          return s;
        }),
        (Dialog.prototype.closeOnSuccess = function () {
          this.close(!0);
        }),
        (Dialog.prototype.refresh = function () {
          for (var t in this.inputFields) {
            var t = this.inputFields[t];
            "function" == typeof t.refresh && t.refresh();
          }
        }),
        (Dialog.prototype.inProcess = function () {
          for (var t in h) if (this === h[t]) return !0;
          return !1;
        }),
        (Dialog.prototype.showInProcessOverlay = function () {
          null === this.inProcessOverlay &&
            ((this.inProcessOverlay = LPTools.createElement("div", "dialogInProcessOverlay")),
            this.element.appendChild(this.inProcessOverlay)),
            this.$element.addClass("inProcess");
        }),
        (Dialog.prototype.hideInProcessOverlay = function () {
          this.$element.removeClass("inProcess");
        }),
        (Dialog.prototype.showBlurOverlay = function () {
          null === this.blurOverlay &&
            ((this.blurOverlay = LPTools.createElement("div", "dialogBlurOverlay")), this.element.appendChild(this.blurOverlay)),
            this.$element.addClass("blurred");
        }),
        (Dialog.prototype.hideBlurOverlay = function () {
          this.$element.removeClass("blurred");
        }),
        (Dialog.prototype.addHeaderButton = function (t, e, i) {
          void 0 === this.headerButtons &&
            ((this.headerButtons = LPTools.createElement("div", "dialogHeaderButtons")),
            t.append(this.headerButtons),
            t.addClass("dialogHeaderButtonsEnabled")),
            $(e).addClass("dialogHeaderButton"),
            LPPlatform.addEventListener(e, "click", i),
            this.headerButtons.appendChild(e);
        }),
        (Dialog.prototype.maximize = function () {
          this.$element.addClass("maximized"), this.maximizeButton.setAttribute("title", Strings.Vault.MINIMIZE), (this.maximized = !0);
        }),
        (Dialog.prototype.minimize = function () {
          this.$element.removeClass("maximized"),
            this.maximizeButton.setAttribute("title", Strings.Vault.MAXIMIZE),
            (this.maximized = !1),
            this.setDynamicHeight();
        }),
        (Dialog.prototype.loadDialog = function (t) {
          var e = this.dialogConfig.getID() + "Title",
            i,
            o;
          (this.element = LPTools.createElement("div", {
            class:
              ((i = this),
              (o = ["dialog"]),
              s && !i.isOverlay() && o.push("dialogWindow"),
              i.responsive && o.push("responsive"),
              o.concat(LPTools.getOption(i.options, "additionalClasses", []))),
            role: "dialog",
            "aria-labelledby": e
          })),
            (this.$element = $(this.element));
          var o,
            o = (o = ["dialogHeader"]).concat(LPTools.getOption(this.options, "additionalHeaderClasses", [])),
            i = ((this.headerElement = LPTools.createElement("div", o)), LPTools.createElement("div", "dialogHeaderInner"));
          (this.titleElement = LPTools.createElement("span", { class: "dialogHeaderTitle", id: e })),
            ("siteDialog" !== this.dialogConfig.getID() && "noteDialog" !== this.dialogConfig.getID()) ||
              "vault" !== this.data.saveOptions.source ||
              ((this.backToAllSitesButton = LPTools.createElement(
                "button",
                { class: "dialogAllSitesButton", "automation-id": "dialogAllSitesButton" },
                Strings.translateString("All Items")
              )),
              i.appendChild(this.backToAllSitesButton),
              this.backToAllSitesButton.addEventListener("click", function () {
                Dialog.prototype.getCurrentDialog().close(), dialogs.addItem.open(), LPVault.openVault();
              }),
              this.element.classList.add("vaultDialog")),
            i.appendChild(this.titleElement),
            this.headerElement.appendChild(i),
            this.element.appendChild(this.headerElement),
            (this.titleElement = $(this.titleElement)),
            (this.headerElement = $(this.headerElement)),
            (!this.isOverlay() && s) ||
              !LPTools.getOption(this.options, "maximizeButtonEnabled", !1) ||
              ((this.maximizeButton = LPTools.createElement("button", { title: Strings.Vault.MAXIMIZE, class: "dialogMaximizeButton" })),
              this.addHeaderButton(
                this.headerElement,
                this.maximizeButton,
                this.createHandler(function () {
                  this.maximized ? this.minimize() : this.maximize(), Topics.get(Topics.DIALOG_RESIZE).publish(this);
                })
              )),
            (!this.isOverlay() && s) ||
              !LPTools.getOption(this.options, "closeButtonEnabled", !1) ||
              this.addHeaderButton(
                this.headerElement,
                LPTools.createElement("button", { title: Strings.Vault.CLOSE, id: "dialogCloseButton", class: "dialogCloseButton" }),
                this.createHandler(this.close)
              ),
            (this.dialogContent = LPTools.createElement(
              "div",
              LPTools.getOption(this.options, "buttonsInsideContent", !1) ? "dialogContent" : "dialogContent dialogContentFixed"
            )),
            this.element.appendChild(this.dialogContent),
            (this.dialogContent = $(this.dialogContent)),
            (this.dialogConfig.parentElementID ? n.getElementById(this.dialogConfig.parentElementID) : u).appendChild(this.element),
            this.element.setAttribute("id", this.dialogConfig.getID()),
            this.dialogConfig.load(this.dialogContent, t);
        }),
        (Dialog.prototype.getNextViewButton = function () {
          return this.nextButton;
        }),
        (Dialog.prototype.setupButtons = function (t) {
          var t, t, e, e, e;
          LPTools.getOption(this.options, "hideButtons", !1) || 0 !== t.find(".buttons").length
            ? (this.buttonContainer = $())
            : ((t = ["buttons"]),
              LPTools.getOption(this.options, "buttonsInsideContent", !1) || (t = t.concat(["buttonsFixed"])),
              (this.buttonContainer = LPTools.createElement("div", t)),
              (this.buttonContainer = $(this.buttonContainer)),
              (t = ["nbtn"]),
              LPTools.getOption(this.options, "largeButtons", !1) || t.push("btn_midi"),
              (this.nextButton = LPTools.createElement(
                "button",
                t.concat("rbtn"),
                LPTools.getOption(this.options, "nextButtonText", Strings.Vault.SAVE)
              )),
              (this.nextButton = $(this.nextButton).attr("automation-id", "okButton")),
              (this.nextButton = $(this.nextButton).attr("id", "submitButton")),
              (e = LPTools.getOption(this.options, "views", null)) &&
                ((this.views = e), (this.currentViewIndex = 0), (e = this.getNextViewButton()) !== this.nextButton) &&
                e.bind("click", this.createHandler(this.showNextView)),
              this.nextButton.bind("click", this.createHandler(this.submit)),
              LPTools.getOption(this.options, "hideBackButton", !1) ||
                ((this.backButton = LPTools.createElement(
                  "button",
                  t.concat("wbtn"),
                  LPTools.getOption(this.options, "backButtonText", Strings.Vault.CANCEL)
                )),
                (this.backButton = $(this.backButton).attr("automation-id", "cancelButton")),
                this.backButton.bind("click", this.createHandler(LPTools.getOption(this.options, "backButtonOverrideFunc", this.close))),
                this.buttonContainer.append(this.backButton)),
              this.buttonContainer.append(this.nextButton),
              (e = LPTools.getOption(this.options, "buttonAlign", this.CENTER_ALIGN)) === this.RIGHT_ALIGN
                ? this.buttonContainer.addClass("rightButtons")
                : e === this.CENTER_ALIGN && this.buttonContainer.addClass("centerButtons"),
              (LPTools.getOption(this.options, "buttonsInsideContent", !1) ? this.dialogContent : this.$element).append(
                this.buttonContainer
              ));
        }),
        (Dialog.prototype.applyToContainers = function (t) {
          for (var e in this.containers) {
            var i = this.containers[e];
            if (i)
              switch (typeof t) {
                case "string":
                  i[t].apply(i);
                  break;
                case "function":
                  t.call(this, i);
              }
          }
        }),
        (Dialog.prototype.destroyContainers = function () {
          for (var t in (this.applyToContainers("destruct"), this.containers)) this.containers[t] = null;
        }),
        (Dialog.prototype.createHandler = function (t) {
          for (var e = [], i = 1, o = arguments.length, n; i < o; ++i) e.push(arguments[i]);
          return (
            (n = this),
            function () {
              t.apply(n, e);
            }
          );
        }),
        (Dialog.prototype.createDynamicHandler = function (t) {
          return (
            (e = this),
            function () {
              t.apply(e, arguments);
            }
          );
          var e;
        }),
        (Dialog.prototype.resetScroll = function () {
          this.$element.find(".dialogRightPane").scrollTop(0), this.dialogContent.scrollTop(0);
        }),
        (Dialog.prototype.leftMenuChange = function (t) {}),
        (Dialog.prototype.setupLeftMenu = function (t) {
          if (((this.leftMenu = t.find(".dialogLeftMenu")), 0 < this.leftMenu.length))
            for (
              var e = function (e, i, o) {
                  return function (t) {
                    e.currentViewElement && e.currentViewElement.removeClass("selected"),
                      e.currentMenuElement && e.currentMenuElement.removeClass("selected"),
                      (e.currentViewElement = o),
                      (e.currentMenuElement = i),
                      e.currentViewElement.addClass("selected"),
                      e.currentMenuElement.addClass("selected"),
                      e.resetScroll(),
                      e.leftMenuChange(i);
                  };
                },
                i = t.find(".dialogLeftMenuView"),
                o = this.leftMenu.get(0).children,
                n = 0,
                s = o.length;
              n < s;
              ++n
            ) {
              var a = $(o[n]),
                l = e(this, a, $(i[n]));
              a.bind("click", l);
            }
        }),
        (Dialog.prototype.selectFirstLeftMenuItem = function () {
          this.leftMenu && this.leftMenu.find(":visible").first().trigger("click");
        }),
        (Dialog.prototype.addZebraStriping = function (t) {
          for (var e = t.find(".settings"), i = 0, o = e.length; i < o; ++i) LPTools.addZebraStriping(e[i]);
        }),
        (Dialog.prototype.show = function () {
          this.$element.show();
        }),
        (Dialog.prototype.hide = function () {
          this.$element.hide();
        }),
        (Dialog.prototype.initialize = function (t, e) {
          for (
            var i,
              o,
              n =
                (t.find("input,textarea").prop("spellcheck", !1),
                this.setupButtons(t),
                this.addZebraStriping(t),
                this.setupLeftMenu(t),
                (i = this),
                (o = t.find(".advancedOptionsLabel")).length &&
                  (o.attr("aria-expanded", "false"), (i.advancedOptionsLabel = o), (i.advancedOptionsShown = !1)),
                o.bind("click", i.createHandler(i.toggleAdvancedOptions)),
                t.bind("click", function () {
                  i.applyToContainers("clearSelected");
                }),
                t.find(".help").bind("click", function (t) {
                  bg.openhelp(t.target.getAttribute("help-section"));
                }),
                this.initializeInputObjects(t),
                this.initializeFocusHandlers(t),
                e && e.options && e.options.shouldDisableCycleHandler && $(".focusCycler").attr("tabindex", -1),
                this.show(),
                LPTools.getOption(this.options, "buttonsInsideContent", !1) ||
                  ((this.buttonHeight = this.buttonContainer.outerHeight()), this.dialogContent.css("bottom", this.buttonHeight)),
                (this.headerHeight = this.headerElement ? this.headerElement.outerHeight() : 0),
                (this.responsiveTextAreas = []),
                (this.responsiveTextAreasSelector = this.$element.find(".responsiveTextArea")),
                T(this.responsiveTextAreasSelector)),
              s = 0,
              a = this.responsiveTextAreasSelector.length;
            s < a;
            ++s
          ) {
            var l = $(this.responsiveTextAreasSelector[s]);
            this.responsiveTextAreas.push({ element: l, ratio: (l.outerHeight() / n) * 100 });
          }
          this.hide();
        }),
        (Dialog.prototype.toggleKeyboard = function () {
          this.keyboardShown ? this.disableVirtualKeyboard() : this.enableVirtualKeyboard();
        }),
        (Dialog.prototype.enableVirtualKeyboard = function () {
          var t, t;
          "undefined" == typeof showkeyboard
            ? ((t = LPTools.createElement("link", { rel: "stylesheet", type: "text/css", href: "simple-keyboard.css" })),
              n.head.appendChild(t),
              (t = LPTools.createElement("script", { type: "text/javascript", src: "simple-keyboard.js" })),
              n.head.appendChild(t),
              (t.onload = function () {
                var t;
                "undefined" == typeof showkeyboard &&
                  ((t = LPTools.createElement("script", { type: "text/javascript", src: "virtual-keyboard.js" })),
                  n.body.appendChild(t),
                  (t.onload = function () {
                    showkeyboard();
                  }));
              }))
            : showkeyboard();
        }),
        (Dialog.prototype.disableVirtualKeyboard = function () {
          if ("undefined" != typeof showkeyboard && "undefined" != typeof VirtualKeyboard && "function" == typeof VirtualKeyboard.hide) {
            try {
              VirtualKeyboard.hide();
            } catch (t) {}
            this.$element.removeClass("keyboard"), (this.keyboardShown = !1);
          }
        }),
        (Dialog.prototype.initializeFocusHandlers =
          ((m = function (t) {
            var t = t.find(".dialogInput:visible,button:visible");
            return 2 < t.length ? t : null;
          }),
          function (e) {
            var t = LPTools.createElement("button", "focusCycler"),
              t =
                (LPPlatform.addEventListener(t, "focus", function () {
                  var t = m(e);
                  t && t[1].focus();
                }),
                e.append(t),
                LPTools.createElement("button", "focusCycler"));
            LPPlatform.addEventListener(t, "focus", function () {
              var t = m(e);
              t && t[t.length - 2].focus();
            }),
              e.prepend(t);
          })),
        (Dialog.prototype.toggleAdvancedOptions = function () {
          this.advancedOptionsShown ? this.hideAdvancedOptions() : this.showAdvancedOptions();
        }),
        (Dialog.prototype.showAdvancedOptions = function () {
          this.advancedOptionsLabel.attr("aria-expanded", "true"),
            this.advancedOptionsLabel.addClass("open"),
            this.advancedOptionsLabel.next().show(),
            this.setDynamicHeight(),
            (this.advancedOptionsShown = !0);
        }),
        (Dialog.prototype.hideAdvancedOptions = function () {
          this.advancedOptionsLabel.attr("aria-expanded", "false"),
            this.advancedOptionsLabel.removeClass("open"),
            this.advancedOptionsLabel.next().hide(),
            this.setDynamicHeight(),
            (this.advancedOptionsShown = !1);
        }),
        (Dialog.prototype.showNextView = function () {
          this.performValidate({
            data: this.getData(),
            callback: function (t) {
              t && this.setNextView(this.currentViewIndex + 1);
            }
          });
        }),
        (Dialog.prototype.setNextView = function (t) {
          var e, i;
          0 <= t &&
            t < this.views.length &&
            t !== this.currentViewIndex &&
            ((e = this.views[t]),
            void 0 === (i = this.views[this.currentViewIndex]).title && (i.title = this.getTitle()),
            LPTools.getOption(this.options, "hideBackButton", !1) ||
              (void 0 === i.cancelButtonText && (i.cancelButtonText = this.backButton.text()),
              this.backButton.text(void 0 === e.cancelButtonText ? Strings.translateString("Back") : e.cancelButtonText)),
            $(i.selector).hide(),
            this.setTitle(e.title),
            e.nextButtonText && this.nextButton.text(e.nextButtonText),
            $(e.selector).show(),
            LPTools.getOption(this.options, "hideBackButton", !1) ||
              (0 === t
                ? (this.backButton.unbind("click"), this.backButton.bind("click", this.createHandler(this.close)))
                : (this.backButton.unbind("click"), this.backButton.bind("click", this.createHandler(this.showPreviousView)))),
            (this.currentViewIndex = t),
            this.setDynamicHeight(),
            this.focus());
        }),
        (Dialog.prototype.showPreviousView = function () {
          this.setNextView(this.currentViewIndex - 1);
        }),
        (Dialog.prototype.initializeInputFields = function (t, e) {
          for (var i = 0, o = t.length; i < o; ++i) {
            var n = t[i],
              s = n.getAttribute(this.DIALOG_FIELD),
              a = this.inputFields[s],
              s;
            void 0 === a
              ? (this.inputFields[s] = e.call(this, n, s))
              : "radio" === n.getAttribute("type") && (s = n.getAttribute("name")) && a.addRadioInput(s, n);
          }
        }),
        function (t) {
          var e = LPTools.createTimezoneSelect();
          return t.parentElement.insertBefore(e, t), t.parentElement.removeChild(t), new DialogInput.Input(e);
        }),
      y = function (t, e) {
        var i = {},
          i = ($(t).hasClass("monthYearDate") && (i.includeDay = !1), new DialogInput.NumericDateInput(i));
        return t.parentElement.insertBefore(i.buildInputElement(), t), t.parentElement.removeChild(t), i;
      },
      D,
      b,
      T =
        ((Dialog.prototype.initializeInputObjects = function (t) {
          this.initializeInputFields(t.find("input.selectDropdown"), function (t) {
            return new DropdownInput(t, null, { dialog: this, additionalDropdownClasses: this.options.additionalDropdownClasses });
          }),
            this.initializeInputFields(t.find(".typeaheadDropdown"), function (t) {
              return new TypeaheadDropdown(t, null, { dialog: this, additionalDropdownClasses: this.options.additionalDropdownClasses });
            }),
            this.initializeInputFields(t.find(".timezoneDropdown"), v),
            this.initializeInputFields(t.find(".stateDropdown"), function (t) {
              var e = new StateDropdown({ dialog: this });
              return t.parentElement.insertBefore(e.buildInputElement(), t), t.parentElement.removeChild(t), e;
            }),
            this.initializeInputFields(t.find(".countryDropdown"), function (t) {
              var e = LPTools.createCountrySelect();
              return t.parentElement.insertBefore(e, t), t.parentElement.removeChild(t), new DialogInput.Input(e);
            }),
            this.initializeInputFields(t.find(".phoneInput"), function (t) {
              var e = new PhoneInput();
              return t.parentElement.insertBefore(e.buildInputElement(), t), t.parentElement.removeChild(t), e;
            }),
            this.initializeInputFields(t.find(".dateInput"), y),
            this.initializeInputFields(t.find("select[" + this.DIALOG_FIELD + "]"), function (t) {
              return new DialogInput.Input(t, this);
            }),
            this.initializeInputFields(t.find("input[" + this.DIALOG_FIELD + "],textarea[" + this.DIALOG_FIELD + "]"), function (t) {
              var t = new DialogInput.Input(t, this),
                e = t.getElement();
              return e.hasClass("passwordToggle") && this.addPasswordEye(e), e.hasClass("totpToggle") && this.addTotpEye(e), t;
            });
        }),
        (Dialog.prototype.addTotpEye = function (t) {
          t.LP_addTotpEye(document.getElementById("siteDialogTotp"));
        }),
        (Dialog.prototype.addPasswordEye = function (t) {
          t.LP_addPasswordEye({
            checkPermissionHandler: this.checkViewPasswordHandler,
            includeGenerateButton: t.hasClass("generate"),
            copyVaultItemPasswordHandler: this.copyVaultItemPasswordHandler
          });
        }),
        (Dialog.prototype.checkViewPassword = function (t) {
          t();
        }),
        (Dialog.prototype.close = function (t, e) {
          return !(
            !1 === this.options.allowClose ||
            !this.isOpen() ||
            ("function" == typeof this.data.cancelCallback && "VaultRepromptDialog" === this.data.type && this.data.cancelCallback(),
            !LPTools.getOption(this.options, "confirmOnClose", !0) || (void 0 !== t && t) || !this.isModified()
              ? (n.activeElement &&
                  "INPUT" === n.activeElement.nodeName.toUpperCase() &&
                  "password" === n.activeElement.type &&
                  n.activeElement.blur(),
                this.clearFields(),
                this.destroyContainers(),
                this.hide(),
                a(this),
                this.disableVirtualKeyboard(),
                0 < l.length
                  ? (this.focusPreviousDialog(), 1 !== l.length || l[0].isModal() || p.removeClass("dialogState"))
                  : (p.removeClass("dialogState"), p.css("min-width", "")),
                this.previousFocus && this.previousFocus.focus(),
                this.hideBlurOverlay(),
                this.hideInProcessOverlay(),
                (this.setupComplete = !1),
                "function" == typeof this.data.onClose && this.data.onClose.apply(this),
                Topics.get(Topics.DIALOG_CLOSE).publish(this),
                e && e(),
                0)
              : (dialogs.confirmation.open({
                  title: Strings.translateString("Discard Unsaved Changes?"),
                  text: Strings.translateString("Changes will be lost if you close before saving."),
                  nextButtonText: Strings.translateString("Discard"),
                  backButtonText: Strings.Vault.CANCEL,
                  handler: this.createHandler(this.close, !0, e)
                }),
                1))
          );
        }),
        (Dialog.prototype.differs =
          ((D = function (t) {
            return null == t;
          }),
          (b = function (t, e) {
            return !((D(t) && D(e)) || t === e);
          }),
          function (t, e) {
            if (t && e) {
              for (var i in t)
                if ("totpCode" !== i) {
                  var o = t[i];
                  if ("object" == typeof o) {
                    if (this.differs(o, e[i])) return !0;
                  } else if (b(o, e[i])) return !0;
                }
              for (var n in e) if (!D(e[n]) && !t.hasOwnProperty(n)) return !0;
              return !1;
            }
            return D(t) !== D(e);
          })),
        (Dialog.prototype.getChanges = function (t) {
          var e = {},
            i;
          for (i in t) {
            var o = this.originalData[i],
              n = t[i],
              s;
            "object" == typeof o ? ((s = this.getChanges(o, n)), LPTools.hasProperties(s) && (e[i] = s)) : o !== n && (e[i] = n);
          }
          return e;
        }),
        (Dialog.prototype.isModified = function () {
          var t = this.getData(),
            e = this.getOriginalData();
          return this.differs(e, t);
        }),
        (Dialog.prototype.getOriginalData = function () {
          return this.originalData;
        }),
        (Dialog.prototype.clearFields = function () {
          for (var t in this.inputFields) this.inputFields[t].clear();
          this.clearErrors(), (this.originalData = {}), (this.originalFormData = {}), (this.hiddenFields = {});
        }),
        (Dialog.prototype.addError = function (t, e) {
          this.inputFields[t].addError(e, this);
        }),
        (Dialog.prototype.populateFields = function (t) {
          for (var e in t) {
            var i = this.inputFields[e],
              o = t[e];
            "group" === e && bg.get("g_nofolder_feature_enabled") && o === Strings.Consts.NONE_GROUP && (o = ""),
              i ? i.setValue(o) : (this.hiddenFields[e] = o);
          }
        }),
        (Dialog.prototype.getData = function () {
          var t = {},
            e,
            i;
          for (e in this.inputFields) t[e] = this.inputFields[e].getValue();
          for (i in this.hiddenFields) t[i] = this.hiddenFields[i];
          return $.extend(!0, {}, t);
        }),
        (Dialog.prototype.initFunction = function (t) {
          return (
            (e = this),
            function () {
              Strings.translate(e.dialogContent.get(0)), e.initialize(e.$element, t), e.preSetup(t), e.setup(e.$element, t), e.postSetup(t);
            }
          );
          var e;
        }),
        (Dialog.prototype.open = function (t) {
          r(this),
            (this.data = t = t || {}),
            null === this.element
              ? this.loadDialog(this.initFunction(t))
              : (this.preSetup(t), this.setup(this.$element, t), this.postSetup(t));
        }),
        (Dialog.prototype.preSetup = function (t) {
          var t = LPTools.getOption(t, "preSetup", null);
          "function" == typeof t && t(this);
        }),
        (Dialog.prototype.postSetup = function (t) {
          (this.setupComplete = !0), (this.originalData = this.getData()), t.virtualKeyboard && this.enableVirtualKeyboard();
          var t = LPTools.getOption(t, "postSetup", null);
          "function" == typeof t && t(this), this.adjustView();
        }),
        (Dialog.prototype.adjustView = function (t) {
          if (!this.adjustedView || t) {
            for (var e in this.inputFields) {
              var e = this.inputFields[e];
              "function" == typeof e.adjustView && e.adjustView();
            }
            this.adjustedView = !0;
          }
        }),
        (Dialog.prototype.getZIndex = function () {
          var t = this.$element.css("z-index");
          return "auto" === t ? 0 : parseInt(t);
        }),
        (Dialog.prototype.useDynamicHeignt = function (t) {
          this.dynamicHeight && !t && this.element.removeAttribute("style"), (this.dynamicHeight = t);
        }),
        function (t) {
          for (var e = 0, i = 0, o = t.length; i < o; ++i) e += $(t[i]).outerHeight();
          return e;
        }),
      C,
      I,
      w;
    (Dialog.prototype.viewHeightIsDynamic = function () {
      return this.views && this.views[this.currentViewIndex]
        ? LPTools.getOption(this.views[this.currentViewIndex], "dynamicHeight", this.dynamicHeight)
        : this.dynamicHeight;
    }),
      (Dialog.prototype.setDynamicHeight =
        ((I = Math.max(window.outerHeight - window.innerHeight, 0)),
        (w = Math.max(window.outerWidth - window.innerWidth, 0)),
        function () {
          if (this.viewHeightIsDynamic()) {
            this.show(), this.dialogContent.css("position", "static");
            for (
              var t = this.dialogContent.outerHeight(),
                e =
                  (!LPTools.getOption(this.options, "hideHeader", !1) && this.headerHeight && (t += this.headerHeight),
                  !LPTools.getOption(this.options, "hideButtons", !1) && this.buttonHeight && (t += this.buttonHeight),
                  this.$element.css(this.responsive ? "max-height" : "height", t),
                  this.dialogContent.height() - T(this.responsiveTextAreasSelector)),
                i = 0,
                o = this.responsiveTextAreas.length;
              i < o;
              ++i
            ) {
              var n = this.responsiveTextAreas[i];
              n.element.css("height", "calc(" + n.ratio + "% - " + e + "px)");
            }
            this.dialogContent.css("position", "");
          }
          this.responsive ||
            !s ||
            this.isOverlay() ||
            (p.css("overflow", "hidden"),
            LPPlatform.resizeTo(this.$element.outerWidth() + w, this.$element.outerHeight() + I),
            p.css("overflow", "")),
            "function" == typeof this.data.onResize &&
              this.data.onResize.call(this, this.$element.outerHeight(), this.$element.outerWidth());
        })),
      (Dialog.prototype.isOverlay = function () {
        return this.overlayDialog && ((0 < l.length && l[0] !== this) || e);
      }),
      (Dialog.prototype.blurPreviousDialog = function () {
        this.previousDialog &&
          (this.isOverlay() ? this.previousDialog.showBlurOverlay() : this.hidePreviousDialogs && this.previousDialog.hide());
      }),
      (Dialog.prototype.focusPreviousDialog = function () {
        this.previousDialog &&
          -1 < l.indexOf(this.previousDialog) &&
          (this.isOverlay() ? this.previousDialog.hideBlurOverlay() : (this.previousDialog.show(), this.previousDialog.setMinWidth()),
          this.previousDialog.setDynamicHeight(),
          (this.previousDialog = null));
      }),
      (Dialog.prototype.focus = function () {
        var t = this.$element.find(".dialogInput:visible").first();
        0 < t.length ? t.focus() : this.nextButton && this.nextButton.focus();
      }),
      (Dialog.prototype.isModal = function () {
        return LPTools.getOption(this.options, "isModal", !0);
      }),
      (Dialog.prototype.setup = function (t, e) {
        LPTools.getOption(this.options, "hideHeader", !1)
          ? (this.headerElement.LP_hide(), this.dialogContent.css("top", ""))
          : (this.dialogContent.css("top", this.headerHeight), this.headerElement.LP_show());
        var i = u,
          i;
        this.dialogConfig.parentElementID && (i = n.getElementById(this.dialogConfig.parentElementID)),
          this.element.parentElement !== i && i.appendChild(this.element),
          this.defaultFields(e),
          "undefined" != typeof LPProxy && LPProxy.getAccountClass && LPTools.parseUserSpecificMenu(t.get(0), LPProxy.getAccountClass()),
          this.setTitle(e.title || this.title),
          this.views && ((this.views[0].title = e.title), this.setNextView(0)),
          this.setDynamicHeight(),
          (this.previousFocus = n.activeElement),
          1 < l.length &&
            ((this.previousDialog = l[l.length - 2]),
            (i = this.previousDialog.getZIndex()),
            t.css("z-index", i + 1),
            this.blurPreviousDialog()),
          0 < l.length && this.isModal() && p.addClass("dialogState"),
          LPTools.getOption(e, "show", !0) && t.show(),
          this.focus(),
          this.setMinWidth(),
          this.resetScroll(),
          this.selectFirstLeftMenuItem(),
          d && Topics.get(Topics.DIALOG_LOADED).publish(),
          Topics.get(Topics.DIALOG_OPEN).publish(this);
      }),
      (Dialog.prototype.setMinWidth = function () {
        var t;
        this.isDialogWindow() || (0 < (t = parseInt(this.$element.css("min-width"))) ? p.css("min-width", t + 40) : p.css("min-width", ""));
      }),
      (Dialog.prototype.clearErrors = function () {
        for (var t in this.inputFields) this.inputFields[t].clearErrors();
        this.leftMenu && this.leftMenu.children().removeClass("error");
      }),
      (Dialog.prototype.performValidate = function (t) {
        (this.validateOptions = t), this.clearErrors();
        var e = this.validate(t.data);
        this.postValidate(e), t.callback && t.callback.call(this, e);
      }),
      (Dialog.prototype.postValidate = function (t) {
        for (var e in ((this.validateOptions = null), this.inputFields)) {
          var i = this.inputFields[e];
          "function" == typeof i.postValidate && i.postValidate();
        }
        if (!t && (this.setDynamicHeight(), 0 < this.leftMenu.length))
          for (var e in this.inputFields) {
            var o = this.inputFields[e];
            if (o.hasError()) {
              var o = o.getElement().closest(".dialogLeftMenuView");
              if (0 < o.length)
                for (var n = o.get(0), s = n.parentElement, a = 0, l = s.children.length; a < l; ++a)
                  s.children[a] === n && this.leftMenu.children().eq(a).addClass("error");
            }
          }
      }),
      (Dialog.prototype.validate = function (t) {
        var e = !0,
          i;
        for (i in this.inputFields) {
          var o = this.inputFields[i];
          (LPTools.getOption(this.validateOptions, "errorsOnly", !1) && !o.hasError()) || (e = o.validate(this, i, t[i]) && e);
        }
        return e;
      }),
      (Dialog.prototype.submit = function () {
        try {
          var e;
          this.getNextViewButton() === this.nextButton && this.views && this.currentViewIndex < this.views.length - 1
            ? this.showNextView()
            : ((e = this.getData()),
              "undefined" != typeof bg && bg.g_isLoginWithFederatedEmail
                ? this.handleSubmit(e, this.data)
                : this.performValidate({
                    data: e,
                    callback: function (t) {
                      var t;
                      t &&
                        ("function" == typeof (t = LPTools.getOption(this.data, "handleSubmit", null))
                          ? t(e, this.data)
                          : this.handleSubmit(e, this.data));
                    }
                  }));
        } catch (t) {
          LPPlatform.logException(t);
        }
      }),
      (Dialog.prototype.getTitle = function () {
        return this.title;
      }),
      (Dialog.prototype.setTitle = function (t) {
        t &&
          ((this.title = t),
          this.titleElement && !LPTools.getOption(this.options, "hideHeaderTitle", !1) && this.titleElement.text(t),
          this.titleElement && this.titleElement.text().trim()
            ? this.headerElement.addClass("titleEnabled")
            : this.headerElement && this.headerElement.removeClass("titleEnabled"));
      }),
      (Dialog.prototype.setNextButtonText = function (t) {
        this.nextButton ? this.nextButton.text(t) : (this.options.nextButtonText = t);
      }),
      (Dialog.prototype.defaultFields = function (t) {
        for (var e in this.inputFields) {
          var e = this.inputFields[e];
          "function" == typeof e.default ? e.default() : e.setValue("");
        }
        this.populateFields(LPTools.getOption(t, "defaultData", {}));
      }),
      (Dialog.prototype.showFederationState = function () {
        $(".hideOnFederation").hide(), $(".showOnFederation").show();
      }),
      (Dialog.prototype.hideFederationState = function () {
        $(".hideOnFederation").show(), $(".showOnFederation").hide();
      }),
      (Dialog.prototype.getErrorOptions = function () {
        return {};
      }),
      ((VaultItemDialog = function (t, e) {
        var i;
        Dialog.call(this, t, e),
          ((i = this).itemButtonHandler = function (t) {
            var t = LPTools.getAttribute(i.actionButtonContainer.get(0), t.target, "vaultaction");
            i.vaultItem.handleClickEvent(t, {
              itemsForAction: [i.vaultItem],
              source: i.data.saveOptions && i.data.saveOptions.source ? i.data.saveOptions.source : "vault"
            });
          });
      }).prototype = Object.create(Dialog.prototype)),
      ((VaultItemDialog.prototype.constructor = VaultItemDialog).prototype.refresh = function () {
        var t, e, i;
        if ((Dialog.prototype.refresh.apply(this, arguments), this.data.vaultItem && !this.pendingRefresh))
          return this.data.vaultItem.removed
            ? ((this.pendingRefresh = !0),
              (i = this),
              {
                type: "alert",
                title: Strings.translateString("Deleted"),
                text: Strings.translateString("%s has been deleted. This dialog will be closed.", i.data.vaultItem.toString()),
                handler: function () {
                  i.close(!0), (i.pendingRefresh = !1);
                }
              })
            : ((t = this.getFormData()),
              this.differs(this.originalFormData, t)
                ? ((this.pendingRefresh = !0),
                  (e = this),
                  {
                    type: "confirmation",
                    title: Strings.translateString("Updated"),
                    text: Strings.translateString(
                      "%s has been updated. Would you like to update this dialog with the latest data?",
                      e.data.vaultItem.toString()
                    ),
                    handler: function () {
                      e.populateFields(t), (e.originalData = e.getData()), (e.pendingRefresh = !1);
                    }
                  })
                : void 0);
      }),
      (VaultItemDialog.prototype.getDialogActions = function (t) {
        var e = t.vaultItem.newDisplayObject();
        t.dialogActions = e.getDialogActions();
      }),
      (VaultItemDialog.prototype.open = function (t) {
        ((t = t || {}).saveOptions = $.extend({ source: "vault" }, t.saveOptions)),
          "string" == typeof t.vaultItem &&
            "function" == typeof t.sourceFunction &&
            ((t.vaultItem = t.sourceFunction(t.vaultItem)), void 0 === t.dialogActions) &&
            this.getDialogActions(t),
          t.vaultItem && (t.actions = this.getItemButtonActions(t)),
          t.vaultItem
            ? ((e = !0),
              t.vaultItem.passwordProtect(
                this.createHandler(function () {
                  (e = !1), Dialog.prototype.open.call(this, t);
                })
              ))
            : Dialog.prototype.open.call(this, t);
      }),
      (VaultItemDialog.prototype.getItemButtonActions = function (t) {
        if (t.dialogActions) {
          for (var e = [], i = 0, o = t.dialogActions.length; i < o; ++i) {
            var n = t.dialogActions[i];
            void 0 === this.excludedActions[n] && e.push(n);
          }
          return e;
        }
      }),
      (VaultItemDialog.prototype.handleSubmit = function (t) {
        this.vaultItem ? (this.isModified() ? this.save(this.vaultItem, t) : this.close(!0)) : this.add(t);
      }),
      (VaultItemDialog.prototype.save = function (t, e) {
        t.saveFromDialog(e, null, this.data.saveOptions);
      }),
      (VaultItemDialog.prototype.getFormData = function () {
        var t;
        return this.vaultItem
          ? ((t = $.extend(!0, DialogInput.getProperties(this.inputFields), DialogInput.getProperties(this.hiddenFields))),
            this.vaultItem.getFormData(t))
          : {};
      }),
      (VaultItemDialog.prototype.setup = function (t, e) {
        (this.vaultItem = LPTools.getOption(e, "vaultItem", void 0)),
          Dialog.prototype.setup.apply(this, arguments),
          this.vaultItem && ((this.originalFormData = this.getFormData()), this.populateFields(this.originalFormData)),
          this.buildActionButtons(LPTools.getOption(e, "actions", null));
      }),
      (VaultItemDialog.prototype.postSetup = function (t) {
        Dialog.prototype.postSetup.apply(this, arguments), t.dialogData && this.populateFields(t.dialogData);
      }),
      (VaultItemDialog.prototype.buildActionButtons = function (t) {
        if ((this.actionButtonContainer && (this.actionButtonContainer.unbind("click"), this.actionButtonContainer.empty()), t)) {
          null === this.actionButtonContainer &&
            ((this.actionButtonContainer = LPTools.createElement("div", "dialogItemButtons")),
            (this.actionButtonContainer = $(this.actionButtonContainer)),
            this.buttonContainer.prepend(this.actionButtonContainer)),
            this.actionButtonContainer.bind("click", this.itemButtonHandler);
          for (var e = 0, i = t.length; e < i; ++e) this.actionButtonContainer.append(LPTools.buildItemButton(t[e]));
        }
      }),
      (VaultItemDialog.prototype.add = function (t) {
        if (!this.options.type) throw "Dialog must provide a type for new item or override this function.";
        var e;
        new this.options.type().addFromDialog(t, null, this.data.saveOptions);
      });
  })(document);
