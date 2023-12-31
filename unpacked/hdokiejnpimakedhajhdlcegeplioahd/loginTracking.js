LPTabState = (function () {
  var i = {},
    t = null,
    s = 6e3,
    r = 50,
    a =
      (LPPlatform.onTabClosed &&
        LPPlatform.onTabClosed(function (e) {
          delete i[e];
        }),
      Topics.get(Topics.CLEAR_DATA).subscribe(function () {
        i = {};
      }),
      function (e) {
        (this.tabID = e.tabID),
          (this.url = e.tabURL),
          (this.domain = lp_gettld_url(e.tabURL)),
          (this.sites = []),
          (this.acccountsVersion = null),
          (this.usernameField = null),
          (this.username = null),
          (this.lastFillSource = null),
          (this.fillSourceCounts = {}),
          (this.formParser = LPModule.getService("FormParser")),
          (this.siteService = LPModule.getService("Site")),
          (this.backgroundTools = LPModule.getService("BackgroundTools")),
          (this.pageLoaded = !1);
      }),
    o =
      ((a.prototype.getDomainSites = function () {
        if (this.acccountsVersion !== g_local_accts_version) {
          var e, t;
          for (t in ((this.sites = []), getsites(this.url))) this.sites.push(g_sites[t]);
          this.acccountsVersion = g_local_accts_version;
        }
        return this.passwordForm ? reorderOnURL(getsites(this.url), this.passwordForm.getURL()) : this.sites;
      }),
      (a.prototype.getFields = function () {
        var e = [],
          t = (this.passwordForm && (e = this.passwordForm.getFields()), this.getUsernameField()),
          s;
        return (
          t &&
            t.value === this.getUsername() &&
            0 ===
              e.filter(function (e) {
                return e.name === t.name && e.value === t.value;
              }).length &&
            e.unshift(t),
          e.filter(function (e) {
            return e.id || e.attributes.name;
          })
        );
      }),
      (a.prototype.getUsernameField = function () {
        if (!this.usernameField)
          for (var e in i) {
            var e = i[e];
            if (e.usernameField && compare_tlds(e.domain, this.domain)) {
              this.usernameField = e.usernameField;
              break;
            }
          }
        return this.usernameField;
      }),
      (a.prototype.setUsernameField = function (e) {
        e && (this.usernameField = e);
      }),
      (a.prototype.setUsername = function (e) {
        (this.username = e), (this.timeUsernameLastCached = Date.now());
      }),
      (a.prototype.getUsername = function () {
        var e = 1 < this.sites.length;
        if ((!this.username && this.passwordForm && this.setUsername(this.passwordForm.getUsername()), !this.username && !e))
          for (var t in i) {
            var t = i[t];
            if (t.username && compare_tlds(t.domain, this.domain)) {
              this.setUsername(t.username);
              break;
            }
          }
        return this.username;
      }),
      (a.prototype.getLastFillSource = function () {
        return this.lastFillSource;
      }),
      (a.prototype.clearFillSource = function () {
        (this.lastFillSource = null), (this.fillSourceCounts = {});
      }),
      (a.prototype.setLastFillSource = function (e) {
        "Manual" !== (this.lastFillSource = e) &&
          (this.fillSourceCounts.hasOwnProperty(e) || (this.fillSourceCounts[e] = 0), this.fillSourceCounts[e]++);
      }),
      (a.prototype.debouncedSetLastFillSource = null),
      (a.prototype.getFillSourceCounts = function () {
        return this.fillSourceCounts;
      }),
      function (e, t) {
        switch (t.transitionType) {
          case "auto_subframe":
          case "manual_subframe":
            return !1;
        }
        return -1 < t.transitionQualifiers.indexOf("from_address_bar") || -1 < t.transitionQualifiers.indexOf("forward_back");
      }),
    n =
      ((a.prototype.processPasswordSubmit = function (e, t) {
        (this.passwordForm = this.formParser.parse(e)),
          e.username
            ? this.setUsername(e.username)
            : this.passwordForm.getUsername()
            ? this.setUsername(this.passwordForm.getUsername())
            : this.shouldUseCachedUsername() || this.setUsername(null),
          delete this.isMultiStepLogin,
          this.setUsernameField(this.passwordForm.getUsernameField()),
          e.generatedPassword
            ? (this.generatedPassword = e.generatedPassword)
            : LPPlatform.once(
                LPPlatform.onTransition,
                function (e) {
                  o(this, e) && this.clear();
                },
                this
              );
      }),
      (a.prototype.shouldUseCachedUsername = function () {
        var e = this.username && this.timeUsernameLastCached > new Date(Date.now() + 6e4),
          t,
          s = 1 === this.getDomainSites().length && this.passwordForm.isChangePasswordForm;
        return !e && (this.isMultiStepLogin || s);
      }),
      (a.prototype.processTextSubmit = function (e, t) {
        var e = this.formParser.parse(e, { strict: !0 });
        0 === this.getMatchingSites(e.getUsername()).length && (this.isMultiStepLogin = !0),
          this.setUsernameField(e.getUsernameField()),
          this.setUsername(e.getUsername());
      }),
      (a.prototype.getMatchingSites = function (t, s) {
        var r = this,
          e = r.getDomainSites(),
          o = [],
          t,
          i,
          a,
          a;
        return (
          (t = t || r.getUsername())
            ? (o = e.filter(function (e) {
                return this.siteService.hasMatchingSiteUserName(e, t);
              }, this))
            : s
            ? (o = e.filter(function (e) {
                return null !== this.siteService.findMatchingSitePassword(e, s.password);
              }, this))
            : ((i = r.passwordForm && r.passwordForm.getOriginalPassword()),
              (a = null !== (a = r.passwordForm ? r.passwordForm.getFormMetaData() : null) && 1 === a.uniquePasswords.length),
              i &&
                (o = e.filter(function (e) {
                  return null !== this.siteService.findMatchingSitePassword(e, i);
                }, this)),
              a &&
                r.passwordForm.getPassword() &&
                (o = e.filter(function (e) {
                  return null !== this.siteService.findMatchingSitePassword(e, r.passwordForm.getPassword());
                }, this))),
          (r.matchingSiteCount = o.length),
          o
        );
      }),
      (a.prototype.shouldShowNotification = function (e) {
        var t = !1,
          s = this.findMatchingPassword(this.siteService.getSites(e.url), e.password);
        return (
          (e.password !== e.currentPassword || (e.originalPassword !== e.currentPassword && "" !== e.originalPassword)) &&
            ((e.isChangePasswordForm = !0), (t = Preferences.get("showChangeNotificationBar"))),
          e.password === e.currentPassword &&
            null === s &&
            ((e.isCreateAccountForm = !0), (t = Preferences.get("showSaveNotificationBar"))),
          t
        );
      }),
      (a.prototype.findMatchingPassword = function (e, t) {
        for (var s = 0; s < e.length; ++s) {
          var r = this.siteService.findMatchingSitePassword(e[s], t);
          if (r) return r;
        }
        return null;
      }),
      (a.prototype.shouldShowSiteNotification = function () {
        return (
          !!this.passwordForm &&
          !!(this.passwordForm.succeeded() || this.passwordForm.isChangePasswordForm() || this.passwordForm.isCreateAccountForm()) &&
          (this.passwordForm.isChangePasswordForm()
            ? Preferences.get("showChangeNotificationBar")
            : Preferences.get("showSaveNotificationBar"))
        );
      }),
      (u = function (e) {
        var t = "";
        return (
          e.forEach(function (e) {
            t +=
              e.formname +
              "\t" +
              encodeURIComponent(e.name) +
              "\t" +
              encodeURIComponent(crypto_btoa(e.value)) +
              "\t" +
              encodeURIComponent(e.type) +
              "\n";
          }),
          bin2hex(t)
        );
      }),
      function (e, t) {
        var s;
        0 == t.length ||
          100 < e.fields.length ||
          ((e.fields = e.fields.concat(t)),
          g_local_accts_version++,
          rewritelocalfile(),
          (s = { data: u(t), ref: url2hex(e.url), updatefields: 1, aid: e.aid }),
          e.sharedfolderid && (s.sharedfolderid = e.sharedfolderid),
          (e.postdata = new PostParams(s).toString()),
          (e.posturl = base_url + "gm_deliver.php"),
          (e.newvalues = t),
          updateFieldsFromSubmit(e.postdata, e));
      }),
    u,
    l = function (e) {
      return { name: e.attributes.name || e.id, type: e.type, value: e.value, formname: "" };
    },
    c = function (e, t) {
      return t === e.unencryptedUsername
        ? e.username
        : t === this.siteService.decrypt(e, e.password)
        ? e.password
        : lpmenc_acct(t, !0, e, g_shares);
    },
    d,
    m,
    f =
      ((a.prototype.addFields = function (e) {
        var i, t;
        this.getUsername() &&
          ((t = (i = this).getFields()),
          e.forEach(function (r) {
            var o;
            r.fields &&
              ((o = []),
              t.forEach(function (t) {
                var s = l(t),
                  e;
                0 ===
                  r.fields.filter(function (e) {
                    return e.name === s.name && (!r.save_all || e.formname === t.formname);
                  }).length &&
                  o.push({
                    otherfield: r.save_all,
                    name: s.name,
                    type: s.type,
                    value: c.call(i, r, t.value),
                    checked: !1,
                    formname: r.save_all ? t.formname : "",
                    urid: "0",
                    otherlogin: "0",
                    url: ""
                  });
              }),
              n(r, o));
          }));
      }),
      (a.prototype.getSiteNotificationData = function (e) {
        if (this.passwordForm) {
          var t = { formSubmitted: this.passwordForm.submitted(), formSucceeded: this.passwordForm.succeeded() };
          if (
            (1 == t.formSubmitted && Topics.get(Topics.PASSWORD_FORM_SUBMITTED).publish({ form: this.passwordForm, tabId: e.tabID }),
            this.shouldShowSiteNotification())
          ) {
            var s = this.passwordForm.getFormProfile(),
              r = this.getMatchingSites(),
              o = r.filter(function (e) {
                return null !== this.siteService.findMatchingSitePassword(e, this.passwordForm.getPassword());
              }, this),
              i;
            if (0 < o.length) return this.addFields(o), this.clear({ force: !0 }), {};
            ((t = this.getNotificationTabStateData(r)).defaultData.url = this.passwordForm.shouldSaveFields() ? s.url : hostof(s.url)),
              (t.defaultData.unencryptedUsername = this.getUsername()),
              (t.defaultData.realm = s.realm),
              (t.defaultData.domain = lp_gettld_url(e.tabURL)),
              (t.dialogData = { password: this.passwordForm.getPassword() }),
              (t.matchingSiteSameSubDomain = 1 === r.length && hostof(r[0].url) === hostof(this.passwordForm.getFormProfile().url)),
              (t.sameDomain = compare_tlds(lp_gettld_url(this.passwordForm.getFormProfile().url), lp_gettld_url(e.tabURL))),
              (t.generatedPassword = this.generatedPassword === this.passwordForm.getPassword()),
              this.passwordForm.shouldSaveFields() && 0 < this.getFields().length && (t.dialogData.fields = this.getFields().map(l));
          } else this.clear();
          return t;
        }
        return {};
      }),
      (a.prototype.getNotificationGroupName = function () {
        var e = "",
          t = "",
          s =
            (reduxApp.getState().settings.features.no_auto_folder || (t = e = siteCats[this.domain] || ""), getacct(get_personal_linked())),
          r = Policies.getSaveSiteToPersonal();
        return (
          r && s && -1 === r.indexOf(this.domain) && (t = s.group),
          "" !== (t = Policies.getAccountSelectionBasedOnEmail() && s && this.username === s.group ? s.group : t) &&
            "" !== e &&
            t !== e &&
            (t += "\\" + e),
          t
        );
      }),
      (a.prototype.getNotificationTabStateData = function (e) {
        var t = {},
          e =
            ((t.matchingSites = e.map(function (e) {
              return e.aid;
            })),
            this.getNotificationGroupName()),
          s = this.getDomainSites().map(function (e) {
            return e.aid;
          });
        return (t.defaultData = { name: this.domain, group: e, domainSites: s }), t;
      }),
      (a.prototype.getWebRequestSiteNotificationData = function (e) {
        var t = { formSubmitted: !0, formSucceeded: !0 },
          s,
          t;
        return (
          this.shouldShowNotification(e)
            ? ((s = this.getMatchingSites(e.username, e)),
              ((t = this.getNotificationTabStateData(s)).showNotification = !0),
              (t.defaultData.url = e.url),
              (t.defaultData.unencryptedUsername = e.username),
              (t.defaultData.domain = lp_gettld_url(e.url)),
              (t.dialogData = { password: e.currentPassword }),
              (t.matchingSiteSameSubDomain = 1 === s.length && hostof(s[0].url) === hostof(e.url)),
              (t.sameDomain = compare_tlds(lp_gettld_url(e.url), lp_gettld_url(e.url))),
              (t.generatedPassword = this.generatedPassword === e.password),
              e.isChangePasswordForm || e.isCreateAccountForm || (0 < e.fields.length && (t.dialogData.fields = e.fields.map(l))))
            : this.clear(),
          t
        );
      }),
      (a.prototype.getFormSubmissionTabState = function () {
        for (var e = this; e; ) {
          if (e.passwordForm) return e;
          e = e.previousTabState;
        }
        return this;
      }),
      (a.prototype.getUsernames = function () {
        return this.getDomainSites().map(function (e) {
          return e.unencryptedUsername;
        });
      }),
      (a.prototype.getSiteNotification =
        ((d = function (s, e, t) {
          var r = s.getUsernames();
          e.forEachWindow({
            each: function (e, t) {
              return e.LPContentScriptTools.findText({
                searches: r,
                callback: function (e) {
                  s.setUsername(e), t();
                }
              });
            },
            done: t
          });
        }),
        (m = function (s, e, t) {
          var r = !1,
            o = LPTabs.get({ tabID: s.tabID }),
            i = function () {
              s.passwordForm &&
              (s.passwordForm.succeeded() || s.passwordForm.succeeded(!r), s.passwordForm.succeeded()) &&
              !s.passwordForm.getUsername() &&
              0 < s.getDomainSites().length
                ? d(s, o, t)
                : t();
            },
            e;
          e
            ? (e = o.getFrame(e.frameID)) &&
              e.LPSiteNotification.formExists(s.passwordForm.getFormProfile(), function (e) {
                (r = e), i();
              })
            : s.passwordForm.getFormProfile().top
            ? o.getTop().LPSiteNotification.formExists(s.passwordForm.getFormProfile(), function (e) {
                (r = e), i();
              })
            : o.onFramesLoaded(function () {
                o.forEachFrame({
                  each: function (e, t) {
                    return e.LPSiteNotification.formExists(s.passwordForm.getFormProfile(), function (e) {
                      (r = r || e), t();
                    });
                  },
                  done: i
                });
              });
        }),
        function (e, t) {
          if (e.callback) {
            var s = this.getFormSubmissionTabState(),
              r = function () {
                e.callback(s.getSiteNotificationData(t));
              };
            if (s.passwordForm && s.passwordForm.getPassword()) {
              if (s.domain === this.domain && !s.passwordForm.isBasicAuthentication()) return void m(s, e.source, r);
              s.passwordForm.succeeded(!0);
            }
            r();
          }
        })),
      (a.prototype.clear = function (e) {
        var t = e && e.force,
          s = !0;
        return (
          this.previousTabState && (s = this.previousTabState.clear(e)) && delete this.previousTabState,
          this.passwordForm &&
            (this.passwordForm.getPassword() === this.generatedPassword && (this.passwordForm.submitted(!1), (s = !1)), s || t) &&
            (delete this.passwordForm, delete this.generatedPassword),
          s
        );
      }),
      (a.prototype.processBasicAuthentication = function (e) {
        this.passwordForm = this.formParser.parse({
          basicAuthentication: !0,
          url: e.url,
          realm: e.realm,
          username: e.username,
          password: e.password
        });
      }),
      (a.prototype.setLoginRequestRecentlyResolved = function () {
        var e = this;
        e.loginRequestRecentlyResolved && (clearTimeout(e.loginRequestRecentlyResolved), delete e.loginRequestRecentlyResolved),
          (this.loginRequestRecentlyResolved = setTimeout(function () {
            delete e.loginRequestRecentlyResolved;
          }, s));
      }),
      (a.prototype.getLoginRequestRecentlyResolved = function () {
        return !!this.loginRequestRecentlyResolved;
      }),
      function (e) {
        var t;
        return !(
          !lploggedin ||
          ((t = lp_gettld_url(e.tabURL)), hasNeverEnableLP(e.tabURL, t)) ||
          lp_url_is_lastpass(e.tabURL) ||
          lp_url_is_lastpassext(e.tabURL)
        );
      }),
    h = function (e, t) {
      var s, r, o;
      e
        ? f(e) &&
          ((s = lp_gettld_url(e.tabURL)),
          ((r = i[e.tabID]) && compare_tlds(r.domain, lp_gettld_url(e.tabURL))) ||
            (((o = i[e.tabID] = new a(e)).previousTabState = r), (r = o)),
          (r.neverSave = hasNeverSave(e.tabURL, s)),
          t(r))
        : LPPlatform.getCurrentTab(function (e) {
            e && h(e.tabDetails, t);
          });
    },
    e,
    p,
    g,
    S,
    w,
    F,
    b,
    v,
    P,
    _,
    U,
    y,
    R,
    D,
    L;
  return {
    getSiteNotification: function (t, s) {
      h(s, function (e) {
        e.getSiteNotification(t, s);
      });
    },
    clear: function (t, e) {
      h(e, function (e) {
        e.clear(t);
      });
    },
    processPasswordSubmit: function (t, s) {
      reduxApp.getState().settings.features.web_client_save ||
        h(s, function (e) {
          e.neverSave ||
            (e.processPasswordSubmit(t.formData, s),
            e.getSiteNotification({ callback: t.callback, source: s }, s),
            Topics.get(Topics.PROCESSED_FORM_SUBMIT).publish({ password: !0, tabId: e.tabID, inputValues: t.formData.fields }));
        });
    },
    processTextSubmit: function (t, s) {
      h(s, function (e) {
        e.neverSave ||
          (e.processTextSubmit(t, s),
          Topics.get(Topics.PROCESSED_FORM_SUBMIT).publish({ password: !1, tabId: e.tabID, inputValues: t.fields }));
      });
    },
    processBasicAuthentication: function (t, e) {
      h(e, function (e) {
        e.processBasicAuthentication(t);
      });
    },
    getState: function (t, e) {
      var s = { enabled: f(e) };
      s.enabled
        ? h(e, function (e) {
            (s.usernames = e.getUsernames()), (s.formSubmittedFrame = e.passwordForm && !e.passwordForm.getFormProfile().top), t(s);
          })
        : t(s);
    },
    getTabState: h,
    getStateByTabId: function (e, t) {
      var e;
      e
        ? ((e = i[e]), t(e))
        : LPPlatform.getCurrentTab(function (e) {
            e && h(e.tabDetails, t);
          });
    },
    getStateByTabIdImmediate: function (e) {
      return e ? i[e] : null;
    },
    setLoginRequestRecentlyResolved: function (e) {
      h(e, function (e) {
        e.setLoginRequestRecentlyResolved();
      });
    },
    setCopiedGeneratedPassword: function (e) {
      t = e;
    },
    getCopiedGeneratedPassword: function (e) {
      e(t);
    },
    clearFillSource: function () {
      h(null, function (e) {
        e.clearFillSource();
      });
    },
    setLastFillSource: function (t) {
      h(null, function (e) {
        e.debouncedSetLastFillSource || (e.debouncedSetLastFillSource = e.backgroundTools.debounce(e.setLastFillSource, r, !1)),
          e.debouncedSetLastFillSource.call(e, t);
      });
    },
    getLastFillSource: function (e) {
      h(null, function (e) {
        e.getLastFillSource();
      });
    },
    getFillSourceCounts: function () {
      h(null, function (e) {
        e.getFillSourceCounts();
      });
    }
  };
})();
