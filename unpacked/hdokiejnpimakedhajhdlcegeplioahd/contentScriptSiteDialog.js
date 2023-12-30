var SiteDialog = function (t) {
  Topics.get(Topics.CONTENT_SCRIPT_ADD_SITE_DIALOG_OPENED).publish(),
    DialogWithGroupInput.call(this, t, {
      confirmOnClose: !1,
      hideButtons: !0,
      hideHeader: !0,
      type: Account,
      additionalClasses: "lmiDialog",
      additionalDropdownClasses: "lmiDropdown"
    }),
    (this.tiles = []),
    (this.activeTile = null),
    (this.selectedTile = null),
    (this.isSelectable = !1),
    (this.submitted = !1);
};
(SiteDialog.prototype = Object.create(DialogWithGroupInput.prototype)),
  (SiteDialog.prototype.constructor = SiteDialog),
  (function () {
    var k = function (t, e, i) {
        var t = $.extend(null, t.data, { action: i, saveSiteEvent: e });
        bg.LPModule.callService("Segment", "sendTypedEvent", ["SaveSiteDialog", t], function (t) {
          t && console.error(t);
        });
      },
      i =
        ((SiteDialog.prototype.initialize = function (i) {
          var a;
          DialogWithGroupInput.prototype.initialize.apply(this, arguments),
            (a = this),
            bg.get("g_is_restricted") ||
              (i.on("click", ".neverSave", function () {
                a.data.generatedPasswordSaved && a.deleteItem(),
                  bg.handleNeverURL({ action: "never", cmd: "neverdomain", url: a.data.defaultData.url, fromsave: !0 }),
                  k(a, "SaveSiteDialogAction", "Never"),
                  bg.IntroTutorial.getState(function (t) {
                    for (var e = !1, i = 0; i < t.domains.length; i++) a.data.defaultData.url.includes(t.domains[i]) && (e = !0);
                    t.enabled && e ? bg.IntroTutorial.completeTutorial({ textChoice: "skipped" }) : bg.IntroTutorial.resetState(),
                      a.close();
                  });
              }),
              i.on("input change", function () {
                a.data.generatedPasswordSaved && (a.nextButton.text(Strings.translateString("Update")), (a.data.inputChanged = !0)),
                  bg.Policies.getAccountSelectionBasedOnEmail(function (t) {
                    t &&
                      bg.getLinkedAccount(function (t) {
                        var e = a.getData();
                        t && e.unencryptedUsername === bg.get("g_username") && -1 !== e.group.indexOf(t.group)
                          ? i.find("#submit").attr("disabled", "disabled")
                          : i.find("#submit").removeAttr("disabled");
                      });
                  });
              }),
              (a.backButton = i.find("#close").bind("click", function () {
                a.data.generatedPassword
                  ? a.data.generatedPasswordSaved
                    ? (a.data.matchingSites && 0 === a.data.matchingSites.length
                        ? a.$element.find("#undo").text(Strings.translateString("Yes, remove"))
                        : a.$element.find("#undo").text(Strings.translateString("Yes, undo")),
                      a.dialogContent.css({ height: a.dialogContent.css("height") }),
                      a.$element.addClass("removeGeneratedConfirmation"))
                    : (k(a, "SaveSiteDialogAction", "NotNow"), a.close())
                  : (k(a, "SaveSiteDialogAction", "NotNow"),
                    bg.IntroTutorial.getState(function (t) {
                      for (var e = !1, i = 0; i < t.domains.length; i++) a.data.defaultData.url.includes(t.domains[i]) && (e = !0);
                      t.enabled && e ? bg.IntroTutorial.completeTutorial({ textChoice: "skipped" }) : bg.IntroTutorial.resetState(),
                        a.close();
                    }));
              })),
              (a.nextButton = i.find("#submit").bind("click", function () {
                (!a.isSelectable || a.selectedTile) && a.submit();
              })),
              i.find("#closeConfirmation").bind("click", function () {
                k(a, "SaveSiteDialogAction", "OK"), a.close();
              }),
              i.find("#undo").bind("click", function () {
                k(a, "SaveSiteDialogAction", "Undo"),
                  a.data.matchingSites && 0 === a.data.matchingSites.length
                    ? a.deleteItem(function () {
                        a.close();
                      })
                    : a.revertPasswordChange(function () {
                        a.close();
                      });
              }),
              i.find(".addNewSiteButton").bind("click", function () {
                k(a, "SaveSiteDialogNewClicked");
                var t = a.tiles.slice(),
                  e = (a.defaultFields(a.data), (a.originalData = a.getData()), a.populateFields(a.data.dialogData), a.setupAdd());
                a.setSelectable(!1), $(this).LP_hide();
                for (var i = 0; i < t.length; ++i) t[i].remove();
                e.showDetails({ animate: !1, clearErrors: !0, tileHeight: "auto" });
              }),
              i.find(".updateAnotherSiteButton").bind("click", function () {
                k(a, "SaveSiteDialogAnotherClicked");
                var t = a.tiles.slice();
                $(this).LP_hide();
                for (var e = 0; e < t.length; ++e) t[e].remove();
                a.setupUpdateAnother();
              }));
        }),
        function (t) {
          for (var e = {}, i = t.find("[dialogFieldDisplay]"), a = 0, n; a < i.length; ++a) {
            e[i[a].getAttribute("dialogFieldDisplay")] = !0;
          }
          return e;
        }),
      I = function (t, e) {
        for (var i = t.find("[dialogFieldDisplay]"), a = 0; a < i.length; ++a) {
          var n = i[a],
            o = e[n.getAttribute("dialogFieldDisplay")];
          o && (n.textContent = o);
        }
      },
      O =
        ((SiteDialog.prototype.deleteItem = function (t) {
          this.vaultItem.deleteItem({ confirm: !1, success: t });
        }),
        (SiteDialog.prototype.revertPasswordChange = function (t) {
          this.vaultItem.revertPasswordChange({ confirm: !1, success: t });
        }),
        (SiteDialog.prototype.setupAdd = function (t) {
          (t = t || this.data),
            this.$element.find(".question").text(Strings.translateString("Add to LastPass?")),
            this.nextButton.text(Strings.translateString("Add")),
            this.$element.find(".updateAnotherSiteButton").LP_hide();
          var e = new this.SiteTile();
          return t.defaultData.unencryptedUsername || e.showDetails({ animate: !1, clearErrors: !0, tileHeight: "auto" }), e;
        }),
        (SiteDialog.prototype.setupUpdateAnother = function (t) {
          var e;
          (t = t || this.data),
            this.$element.find(".question").text(Strings.translateString("Which account should we update?")),
            this.nextButton.text(Strings.translateString("Update")),
            this.$element.find(".addNewSiteButton").LP_hide();
          for (var i = 0; i < t.defaultData.domainSites.length; ++i)
            (e = new this.SiteTile({ site: LPProxy.getSiteModel(t.defaultData.domainSites[i]) })).setSelectable(!0);
          this.hasDuplicates() &&
            this.$element.find(".explanation").text(Strings.translateString("Choose one to update and delete the duplicate.")),
            this.setFrameSize();
        }),
        function (t, e, i) {
          var a = $.extend({}, t.defaultData);
          return (
            e && $.extend(a, e.getFormData($.extend(i, DialogInput.getProperties(t.dialogData), DialogInput.getProperties(t.defaultData)))),
            a
          );
        }),
      A = function (t, e, i) {
        return $.extend(O(t, e, i), t.dialogData);
      },
      t = function (i, a) {
        bg.LPIcons.get({
          url: i.defaultData.url,
          square: !0,
          callback: function (t) {
            var e;
            t
              ? a(t)
              : ((e = function () {
                  bg.LPPlatform.getFavicon({ url: i.defaultData.url, callback: a });
                }),
                i.sameDomain
                  ? csTop.LPContentScriptTools.getFavicon(function (t) {
                      t ? a(t) : e();
                    })
                  : e());
          }
        });
      },
      a =
        ((SiteDialog.prototype.hasDuplicates = function () {
          if (this.data.defaultData.unencryptedUsername)
            for (var t = 0; t < this.tiles.length; ++t) if (0 < this.tiles[t].getDuplicates().length) return !0;
          return !1;
        }),
        (SiteDialog.prototype.setup = function (n, o) {
          (o.saveOptions = { source: "saveSite" }),
            n.find(".addSiteFavicon").append(LPTools.createElement("img", { class: "favicon", src: o.favicon || "images/site/world.png" }));
          var b = this,
            y = n.find(".tileContainer"),
            s = n.find(".question"),
            l = n.find(".explanation"),
            C = n.find(".dialogForm"),
            x = n.find(".tile.template"),
            w = n.find(".deleteOverlayContainer.template"),
            T = i(x),
            P = DialogInput.getProperties(b.inputFields),
            r =
              ((this.csFeatures = bg.get("LPContentScriptFeatures")),
              (this.SiteTile = function (t) {
                t = t || {};
                var n = this,
                  s = x.clone().removeClass("template"),
                  e = null,
                  o = b.data,
                  i = !1,
                  a = !1,
                  l = null,
                  r = !1,
                  d = O(o, t.site, P),
                  c = A(o, t.site, P),
                  u = null,
                  g = function (t) {
                    t && b.clearErrors(), (b.originalData = d), b.populateFields(c);
                  },
                  h,
                  p,
                  f =
                    ((this.showedPassword = function () {
                      return r;
                    }),
                    (this.getDialogData = function () {
                      return c;
                    }),
                    (this.getOriginalData = function () {
                      return d;
                    }),
                    (this.getOriginalDialogData = function () {
                      return A(o, t.site, P);
                    }),
                    (this.getDuplicates = function () {
                      var i, a;
                      return (
                        null === u &&
                          ((u = []), o.defaultData.unencryptedUsername) &&
                          ((i = bg.hostof(c.url)),
                          (a = n.getDialogData().unencryptedUsername),
                          b.tiles.forEach(function (t) {
                            var e = t.getDialogData();
                            t !== n && bg.hostof(e.url) === i && e.unencryptedUsername === a && u.push(t);
                          })),
                        u
                      );
                    }),
                    (this.handleHeightChange =
                      ((h = function (e, i) {
                        var a = function (t) {
                          t.target === this && (e.unbind("transitionend", a), i());
                        };
                        e.bind("transitionend", a);
                      }),
                      (p = function (a, e) {
                        a = a || {};
                        var n = LPTools.getOption(a, "animate", !0),
                          i = "animating",
                          o =
                            (n && (a.animationClass && (i += " " + a.animationClass), s.addClass(i)),
                            function (t) {
                              s.removeClass(i),
                                t && t.transitionEndHandler && t.transitionEndHandler(),
                                e({ callback: t && t.onFrameResizeComplete });
                            });
                        a.change(function (t) {
                          var e = LPTools.getOption(
                              t,
                              "tileHeight",
                              LPTools.getOption(a, "tileHeight", s.children().first().outerHeight())
                            ),
                            i = s.height();
                          return (
                            s.css("height", e),
                            e !== i && n
                              ? h(s, function () {
                                  o(t);
                                })
                              : o(t),
                            e
                          );
                        });
                      }),
                      function (e) {
                        LPTools.getOption(e, "animate", !0)
                          ? b.requestAnimationFrame(function (t) {
                              p(e, t);
                            })
                          : p(e, function (t) {
                              b.setFrameSize(), t && t.callback && t.callback();
                            });
                      })),
                    (this.showDetails = function (e) {
                      this.handleHeightChange(
                        $.extend(e, {
                          animationClass: "details-animatation",
                          change: function (t) {
                            null === l && (l = s.height()),
                              b.activeTile && b.activeTile !== n && b.activeTile.hideDetails(e),
                              (b.activeTile = n),
                              g(e && e.clearErrors),
                              s.find(".tileContent").append(C),
                              s.addClass("details");
                            var t = t();
                            b.clickedEdit || ((b.clickedEdit = !0), b.adjustView(!0), b.adjustScrollHeight(t - l));
                          }
                        })
                      );
                    }),
                    (this.preSubmit = function () {
                      b.activeTile !== this && (b.activeTile && (b.activeTile.hideDetails(), (b.activeTile = null)), g()),
                        (b.vaultItem = t.site),
                        !b.vaultItem && o.dialogData.fields && (o.saveOptions.saveFromSubmit = !0);
                    }),
                    (this.hideDetails = function (t) {
                      c = b.getData();
                      var e = C.clone();
                      this.handleHeightChange(
                        $.extend(t, {
                          animationClass: "details-animatation",
                          change: function (t) {
                            s.find(".tileContent").append(e),
                              s.removeClass("details"),
                              t({
                                transitionEndHandler: function () {
                                  e.remove();
                                },
                                tileHeight: l
                              });
                          }
                        })
                      );
                    }),
                    (this.unselect = function () {
                      i &&
                        ((b.selectedTile = null),
                        (i = !1),
                        s.removeClass("selected"),
                        b.$element.removeClass("selected"),
                        b.nextButton.prop("disabled", !0));
                    }),
                    (this.toggleSelect = function () {
                      i
                        ? (this.unselect(),
                          this.getDuplicates().forEach(function (t) {
                            t.hideDeleteOverlay();
                          }))
                        : (this.getDuplicates().forEach(function (t) {
                            t.showDeleteOverlay();
                          }),
                          b.tiles.forEach(function (t) {
                            t.unselect();
                          }),
                          (b.selectedTile = this),
                          (i = !0),
                          s.addClass("selected"),
                          b.$element.addClass("selected"),
                          b.nextButton.prop("disabled", !1),
                          k(b, "SaveSiteDialogSelectClicked"));
                    }),
                    (this.remove = function () {
                      s.remove();
                      for (var t = 0; t < b.tiles.length; ++t)
                        if (b.tiles[t] === this) {
                          b.tiles.splice(t, 1);
                          break;
                        }
                    }),
                    (this.showDeleteOverlay = function () {
                      null === e &&
                        ((e = w.clone().removeClass("template")).find(".cancelDeleteButton").bind("click", function () {
                          k(b, "SaveSiteDialogDuplicateKeepClicked"), n.hideDeleteOverlay();
                        }),
                        e.find(".deleteButton").bind("click", function () {
                          k(b, "SaveSiteDialogDuplicateDeleteClicked"),
                            t.site.deleteItem({
                              confirm: !1,
                              success: function () {
                                n.remove();
                              }
                            }),
                            n.hideDeleteOverlay();
                        })),
                        s.append(e),
                        s.addClass("duplicate");
                    }),
                    (this.hideDeleteOverlay = function () {
                      s.removeClass("duplicate"),
                        e.one("animationend", function () {
                          s.hasClass("duplicate") || e.detach();
                        });
                    }),
                    (this.setSelectable = function (t) {
                      a = t;
                      var e = s.find(".favicon");
                      a
                        ? (e.addClass("hoverFadeOut"), s.find(".checkmark").LP_show())
                        : (e.removeClass("hoverFadeOut"), s.find(".checkmark").LP_hide()),
                        b.setSelectable(t);
                    }),
                    s.find(".circle")),
                  m = function () {
                    f.addClass("circleHover");
                  },
                  v = function () {
                    f.removeClass("circleHover");
                  },
                  S = s.find(".tileEditCell"),
                  D = null;
                S.bind("mouseenter", function () {
                  clearTimeout(D), (D = setTimeout(m, 50));
                }),
                  S.bind("mouseleave", function () {
                    clearTimeout(D), (D = setTimeout(v, 50));
                  }),
                  s.find(".tileEditCell").bind("click", function () {
                    k(b, "SaveSiteDialogEditClicked"), n.showDetails({ clearErrors: !0 });
                  }),
                  s.find(".tileEditCell").addClass("showCell"),
                  s.find(".checkmark").bind("click", function () {
                    n.toggleSelect();
                  }),
                  s.on("click", ".showPassword", function () {
                    r = !0;
                  }),
                  y.append(s),
                  I(s, t.site ? t.site.getFormData(T) : o.defaultData),
                  b.tiles.push(this);
              })),
            t,
            e;
          (SiteDialog.prototype.setSiteDialogMessage = function (t, e) {
            var i = !1;
            if (1 < t.length) {
              for (var a = 0; a < t.length; ++a) new r({ site: LPProxy.getSiteModel(t[a]) }).setSelectable(!0);
              s.text(Strings.translateString("Which account should we update?")),
                this.hasDuplicates() && l.text(Strings.translateString("Choose one to update and delete the duplicate.")),
                n.find(".addNewSiteButton").LP_show(),
                this.nextButton.text(Strings.translateString("Update")),
                (i = !0);
            } else
              1 === t.length
                ? (o.generatedPasswordSaved
                    ? (s.text(Strings.translateString("We've updated your password")),
                      this.nextButton.text(Strings.translateString("OK")),
                      this.backButton.text(Strings.translateString("Undo")))
                    : (s.text(Strings.translateString("Update password?")),
                      this.nextButton.text(Strings.translateString("Update")),
                      n.find(".addNewSiteButton").LP_show()),
                  (o.vaultItem = LPProxy.getSiteModel(t[0])),
                  new r({ site: o.vaultItem }),
                  (i = !0))
                : e &&
                  (o.generatedPasswordSaved
                    ? (s.text(Strings.translateString("This site has been added to your LastPass vault")),
                      this.nextButton.text(Strings.translateString("OK")),
                      this.backButton.text(Strings.translateString("Remove")),
                      new r({ site: o.vaultItem }))
                    : this.setupAdd(o),
                  (i = !0));
            return i;
          }),
            o.matchingSites &&
              ((t = !!o.defaultData.unencryptedUsername),
              this.setSiteDialogMessage(o.matchingSites, t) || t || this.setSiteDialogMessage(o.defaultData.domainSites, !t)),
            !o.generatedPassword ||
              o.generatedPasswordSaved ||
              o.sameDomain ||
              (s.text(Strings.translateString("Oops! What would you like to do with your generated password?")),
              this.backButton.text(Strings.translateString("Discard"))),
            DialogWithGroupInput.prototype.setup.apply(this, arguments),
            this.inputFields.unencryptedUsername.setValues(LPProxy.getSiteUsernames()),
            this.inputFields.unencryptedUsername.disableClickToggle();
        }),
        (SiteDialog.prototype.setSelectable = function (t) {
          t
            ? (this.$element.addClass("selectable"), this.nextButton.prop("disabled", !0))
            : (this.$element.removeClass("selectable"), this.nextButton.prop("disabled", !1));
        }),
        (SiteDialog.prototype.validate = function (t) {
          var e = DialogWithGroupInput.prototype.validate.apply(this, arguments);
          return (
            "" === t.unencryptedUsername &&
              (this.addError("unencryptedUsername", Strings.translateString("Please enter a username.")), (e = !1)),
            e
          );
        }),
        (SiteDialog.prototype.getDialogActions = function (t) {}),
        (SiteDialog.prototype.close = function (t) {
          bg.LPTabState.clear({ force: !0 }), DialogWithGroupInput.prototype.close.apply(this, arguments);
        }),
        (SiteDialog.prototype.open = function (e) {
          var i = this;
          t(e, function (t) {
            (e.favicon = t), DialogWithGroupInput.prototype.open.call(i, e);
          });
        }),
        (SiteDialog.prototype.adjustScrollHeight = function (t) {
          this.scrollHeight && ((this.scrollHeight += t), this.tileContainer.css({ "max-height": this.scrollHeight }));
        }),
        (SiteDialog.prototype.setInitialScrollHeight = function () {
          var t, e, i;
          3 < this.tiles.length &&
            ((this.tileContainer = this.$element.find(".tileContainer")),
            (i =
              ((t = this.tileContainer.height()) - (e = this.$element.find(".tile").first().height()) * this.tiles.length) /
              (this.tiles.length - 1)),
            (this.scrollHeight = 3.5 * e + 3 * i),
            this.tileContainer.css({ overflow: "auto", "max-height": this.scrollHeight }));
        }),
        (SiteDialog.prototype.showInitial = function () {
          var e;
          (e = this).requestAnimationFrame(function (t) {
            e.show(),
              e.setInitialScrollHeight(),
              e.$element.addClass("animate-enter").one("animationend", function () {
                e.$element.removeClass("animate-enter"), t();
              }),
              k(e, "SaveSiteDialogViewed");
          });
        }),
        null),
      n = !1,
      e =
        ((SiteDialog.prototype.showInProcessOverlay = function () {
          var t;
          this.submitted &&
            (t = this.$element).addClass("inProcess").one("animationend", function () {
              t.addClass("waiting"),
                setTimeout(function () {
                  (n = !0), a && a();
                }, 500);
            });
        }),
        (SiteDialog.prototype.hideInProcessOverlay = function () {
          this.$element.removeClass("inProcess waiting");
        }),
        (SiteDialog.prototype.closeOnSuccess = function () {
          var t, e;
          this.submitted &&
            ((t = this).$element.addClass("inProcess waiting"),
            (e = function () {
              t.$element
                .removeClass("waiting")
                .addClass("success")
                .one("animationend.success", function () {
                  setTimeout(function () {
                    t.close();
                  }, 500);
                });
            }),
            n
              ? e()
              : (a = function () {
                  setTimeout(function () {
                    e();
                  }, 0);
                }));
        }),
        (SiteDialog.prototype.performValidate = function (t) {
          var a = this,
            e;
          a.selectedTile &&
            (a.selectedTile === a.activeTile
              ? a.activeTile.handleHeightChange({
                  change: function (e) {
                    var i = t.callback;
                    (t.callback = function () {
                      var t = arguments;
                      e({
                        onFrameResizeComplete: function () {
                          i && i.apply(a, t);
                        }
                      });
                    }),
                      DialogWithGroupInput.prototype.performValidate.call(a, t);
                  }
                })
              : ((e = t.callback),
                (t.callback = function (t) {
                  t || a.selectedTile.showDetails(), e && e.apply(this, arguments);
                }),
                DialogWithGroupInput.prototype.performValidate.call(a, t)));
        }),
        (SiteDialog.prototype.getErrorOptions = function () {
          return { static: !0, alignTop: !0, showErrorLabel: !1 };
        }),
        (SiteDialog.prototype.submit = function () {
          1 === this.tiles.length && (this.selectedTile = this.tiles[0]),
            this.selectedTile.preSubmit(),
            DialogWithGroupInput.prototype.submit.apply(this, arguments),
            this.data.generatedPasswordSaved && !this.data.inputChanged
              ? k(this, "SaveSiteDialogAction", "OK")
              : this.vaultItem
              ? k(this, "SaveSiteDialogAction", "Update")
              : k(this, "SaveSiteDialogAction", "Add");
          try {
            var t, e, i;
            bg.get("g_password_strength_hardening_enabled")
              ? ((e = {}),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-common"].dictionary),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-en"].dictionary),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-de"].dictionary),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-es-es"].dictionary),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-fr"].dictionary),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-it"].dictionary),
                zxcvbnts.addToDictionary(e, zxcvbnts["language-nl-be"].dictionary),
                zxcvbnts.addToDictionary(zxcvbnts["language-pt-br"].dictionary),
                (i = {
                  useLevenshteinDistance: !1,
                  translations: zxcvbnts["language-en"].translations,
                  graphs: zxcvbnts["language-common"].adjacencyGraphs,
                  dictionary: e
                }),
                zxcvbnts.core.zxcvbnOptions.setOptions(i),
                (t = 25 * zxcvbnts.calculatePasswordStrength(password, username)) < 50
                  ? bg.setWeakPasswordBadge(this.data)
                  : bg.checkDuplicatePasswordAndSetBadge(this.data),
                bg.setSecurityScoreAlertBadge())
              : (t = 25 * zxcvbn(passwordStr, [usernameStr, "lastpass", "lastpass.com"]).score),
              t < 50 ? bg.setWeakPasswordBadge(this.data) : bg.checkDuplicatePasswordAndSetBadge(this.data),
              bg.setSecurityScoreAlertBadge();
          } catch (t) {}
          bg.LPTabState.clear({ force: !0 });
        }),
        function (t, e) {
          for (var i = 0; i < t.length; ++i) {
            var a = t[i];
            if (a.value === e) return a;
          }
          return null;
        }),
      o = function (e, i) {
        e.fields &&
          e.fields.forEach(function (t) {
            e.unencryptedUsername && e.unencryptedUsername === t.value && "password" !== t.type
              ? (t.value = i.unencryptedUsername)
              : "password" === t.type && (t.value = i.password);
          });
      },
      s = function (t, e, i) {
        var a;
        i.fields &&
          (o(e, i),
          o(t, i),
          (a = e.fields || []),
          t.fields &&
            (a = a.concat(
              t.fields.filter(function (t) {
                for (var e = 0; e < a.length; ++e) {
                  var i = a[e];
                  if (t.type === i.type && t.name === i.name && t.formname === i.formname) return !1;
                }
                return !0;
              })
            )),
          (i.fields = a));
      };
    SiteDialog.prototype.handleSubmit = function (t) {
      (this.submitted = !0),
        s(this.selectedTile.getOriginalDialogData(), this.selectedTile.getOriginalData(), t),
        DialogWithGroupInput.prototype.handleSubmit.apply(this, arguments);
    };
  })();
