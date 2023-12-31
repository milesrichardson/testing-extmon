!(function (o) {
  var t;
  function c(e, t, n) {
    var a = bin2ab(atob(e.substring(e.indexOf("|") + 1))),
      r;
    a.byteLength
      ? !g_isie && !g_isedge && "undefined" != typeof crypto && crypto.subtle && crypto.subtle.importKey && crypto.subtle.decrypt
        ? ((r = bin2ab(atob(e.substring(e.indexOf("!") + 1, e.indexOf("|"))))),
          crypto.subtle
            .importKey("raw", bin2ab(t), "AES-CBC", !1, ["decrypt"])
            .then(function (e) {
              return crypto.subtle.decrypt({ name: "AES-CBC", iv: r }, e, a);
            })
            .then(function (e) {
              n(ab2bin(e));
            })
            .catch(function (e) {
              o.logException(e), n(null);
            }))
        : dec(e, t, !1, function (e) {
            a.byteLength && "" === e ? n(null) : n(e);
          })
      : n("");
  }
  function n(e) {
    var t = null,
      n = document.createElement("textarea");
    if (
      (null !== e && (n.value = e),
      (n.style.display = "block"),
      (n.style.position = "absolute"),
      (n.style.left = "-100px"),
      (n.style.right = "-100px"),
      (n.style.height = "1px"),
      (n.style.width = "1px"),
      document.body.appendChild(n),
      n.focus(),
      n.select(),
      (t = document.execCommand("copy")),
      document.body.removeChild(n),
      !1 === t)
    )
      throw new Error("Failed copying to clipboard, document.execCommand() returned with false.");
  }
  function a(e) {
    var t = 60,
      t = "undefined" != typeof Preferences ? parseInt(Preferences.get("clearClipboardSecsVal", t), 10) : t;
    n(e), o.lpIsExtension() && 0 < t && setTimeout(r, 1e3 * t);
  }
  function r() {
    n(" ");
  }
  (o.logException = function (e) {
    var t = e.message;
    e.stack && (t += "\n" + e.stack), o.logError(t);
  }),
    (o.logError = function (e) {
      e = "Page: " + window.location.href + " Error: " + e;
      try {
        console.error(e), logger.info("VAULT_4_0: " + e, { vault: "VAULT_4_0", location: window.location.href, message: e });
      } catch (e) {}
    }),
    (o.getBackgroundInterface =
      ((t = null),
      function (e) {
        return (
          null === t &&
            (((e = e || {}).source = window), (e.direct = !0), (t = Interfaces.createInstance(Interfaces.BackgroundInterface, e))),
          t
        );
      })),
    (o.getUILanguage = function () {
      return "en-US";
    }),
    (o.fill = function (e) {
      lpevent("m_mf"), LegacyFillTracking.track("Password", "Icon Dropdown"), fillaid(e, !0, "Icon Dropdown");
    }),
    (o.downloadAttachment = function (n, a, e, r) {
      var n = n,
        e = getacct(e),
        i = issharedfolder(g_shares, e.group),
        e = { getattach: n };
      i.id && (e.sharedfolderid = i.id),
        LPServer.ajax({
          url: base_url + "getattach.php",
          type: "POST",
          data: e,
          success: function (e) {
            var t, t;
            e
              ? ((t =
                  "undefined" != typeof reduxApp && "function" == typeof reduxApp.getState
                    ? reduxApp.getState().user.uid
                    : "undefined" != typeof bg && bg.get("g_uid")
                    ? bg.get("g_uid")
                    : "undefined" !== g_uid
                    ? g_uid
                    : 0),
                (t = {
                  attachment_action: !0,
                  action_type: "attachment_downloading",
                  attachment_id: n,
                  user_id: g_uid,
                  attachment_hash: getBG().SHA256(e.slice(0, 50) + t)
                }),
                LPServer.ajax({ global: !1, type: "POST", cache: !1, dataType: "json", data: t, url: base_url + "debug.php" }),
                c(e, a, function (e) {
                  null === e
                    ? (o.logError(
                        "Failed to decrypt attachment. uid=" + g_uid + " storagekey=" + n + " sharedfolderid=" + (i.id || 0) + " "
                      ),
                      r(null))
                    : r(e);
                }))
              : (o.logError("Server did not return attachment data. uid=" + g_uid + " storagekey=" + n + " sharedfolderid=" + (i.id || 0)),
                r(null));
          },
          error: function () {
            o.logError("Network error happened while downloading an attachment. uid=" + g_uid + " storagekey=" + n), r(null);
          }
        });
    }),
    (o.copyToClipboard = function (e) {
      o.copyToClipboardWithoutPermissionCheck(e);
    }),
    (o.copyToClipboardWithoutPermissionCheck = function (e) {
      try {
        a(e);
      } catch (e) {
        o.logException(e);
      }
    }),
    (o.lpIsExtension = function () {
      return !0;
    }),
    (o.isElectron = function () {
      return -1 < navigator.userAgent.indexOf("Electron") && "LastpassApp" in (top || window);
    }),
    (o.isSafariAppStore = function (e) {
      e(!1);
    }),
    (o.setProductPriceUpdatesObserver = function () {});
})(LPPlatform),
  (function (s, e) {
    (s.getFavicon = function (e) {
      e.callback && e.callback(null);
    }),
      (s.onAuthRequired = function (e) {
        return !1;
      }),
      (s.openLogin = function () {
        sendLpEvent("login_viewed"), openURL(getchromeurl("vault.html"));
      }),
      (s.once = function (e, t, n) {
        var a;
        e &&
          (a = e(function () {
            a(), t.apply(n, arguments);
          }));
      }),
      (s.getBigIcons = function (n, e) {
        var t = (e = e || "big") + "icons",
          e = opendb(),
          a,
          r;
        createDataTable(e),
          e &&
            ((a = function (e, t) {
              n(0 < t.rows.length && null !== t.rows.item(0).data ? t.rows.item(0).data : "");
            }),
            g_indexeddb
              ? ((r = {
                  rows: {
                    item: function (e) {
                      return this[e];
                    },
                    length: 0
                  }
                }),
                (e
                  .transaction("LastPassData", "readonly")
                  .objectStore("LastPassData")
                  .openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_" + t)).onsuccess = function (e) {
                  var e = e.target.result;
                  e ? ((r.rows[r.rows.length] = e.value), r.rows.length++, e.continue()) : a(null, r);
                }))
              : e.transaction(function (e) {
                  e.executeSql(
                    "SELECT * FROM LastPassData WHERE username_hash=? AND type=?",
                    [db_prepend(g_username_hash), t],
                    a,
                    function (e, t) {
                      console_log(t);
                    }
                  );
                }));
      }),
      (s.saveBigIcons = function (t, e) {
        var n = (e = e || "big") + "icons",
          e = opendb();
        createDataTable(e),
          e &&
            (g_indexeddb
              ? e
                  .transaction("LastPassData", "readwrite")
                  .objectStore("LastPassData")
                  .put({ username_hash: db_prepend(g_username_hash), type: n, data: t, usertype: db_prepend(g_username_hash) + "_" + n })
              : e.transaction(function (e) {
                  e.executeSql(
                    "REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, ?, ?)",
                    [db_prepend(g_username_hash), n, t],
                    function (e, t) {
                      console_log("server.js : inserted");
                    },
                    function (e, t) {
                      console_log(t);
                    }
                  );
                }));
      }),
      (s.export = function (e, t) {
        s.saveFile(e, t, !1, function (e) {
          e && ((g_export_output = t), openURL(getchromeurl("export.html")));
        });
      }),
      (s.saveFile = function (e, t, n, a) {
        try {
          var r,
            i,
            r,
            o =
              ((r = n ? ((i = bin2ab(atob(t))), new Blob([i], { type: "application/octet-stream" })) : new Blob([t])),
              window.URL.createObjectURL(r)),
            c = document.createElement("a");
          (c.href = o), (c.download = e), c.click(), URL.revokeObjectURL(o), a(null);
        } catch (e) {
          s.logException(e), a(e);
        }
      }),
      (s.updateBigIcons = function () {});
    var t = function (e, t) {
        for (var n in e) {
          var a = t[n];
          a && (a.group = e[n]);
        }
      },
      l,
      u,
      n,
      a,
      g,
      b,
      h,
      _,
      m;
    function r() {
      have_binary() && have_binary_function("delete_files_by_extension") && call_binary_function("delete_files_by_extension", "", "*", !0);
    }
    (s.refreshGroupNames = function (e) {
      e && (t(e.sites, g_sites), t(e.notes, g_securenotes), t(e.applications, g_applications));
    }),
      (s.useDialogWindows = function () {
        return Preferences.get("htmlindialog");
      }),
      (s.extendSendImproveParams = function (e, t) {
        t();
      }),
      (l = {}),
      (u = function (e, t) {
        return function () {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }),
      (s.openTabDialog = function (t, n) {
        var e = { createAccountSimple: !0, siteTutorial: !0 },
          a = t + (n ? "-" + JSON.stringify(n) : ""),
          r = l[a];
        if (r) r.activate();
        else {
          var i = { dialogWindow: s.useDialogWindows() && !(n && n.virtualKeyboard) },
            o = {
              url: getchromeurl("tabDialog.html?dialog=" + t),
              loadHandler: function (e) {
                e.getTop().LPTabDialog.openDialog(t, n, i), (l[a] = e);
              },
              closeHandler: function () {
                delete l[a];
              },
              tabId: n && n.tabId ? n.tabId : void 0
            };
          if (o.tabId) s.navigateTab(o);
          else if (i.dialogWindow && !e[t]) {
            var c = Preferences.get("dialogSizePrefs"),
              r = c[t];
            (o.features = { height: r ? r.height : 600, width: r ? r.width : 800, left: r ? r.left : 0, top: r ? r.top : 0 }),
              o.features.width > window.screen.availWidth && ((o.features.width = window.screen.availWidth), (o.features.left = 0)),
              o.features.height > window.screen.availHeight && ((o.features.height = window.screen.availHeight), (o.features.top = 0)),
              (o.closeHandler = u(o.closeHandler, function (e) {
                (c[t] = { height: e.outerHeight, width: e.outerWidth, left: e.screenLeft || e.screenX, top: e.screenTop || e.screenY }),
                  Preferences.set("dialogSizePrefs", c),
                  delete l[a];
              })),
              s.openDialogWindow(o);
          } else if (e[t]) s.openTab(o);
          else
            switch (Preferences.get("openpref")) {
              case "tabs":
                s.openTab(o);
                break;
              case "windows":
                s.openWindow(o);
                break;
              case "same":
                s.openSame(o);
            }
        }
      }),
      (s.stringifyFeatures = function (e) {
        var t = [],
          n;
        for (n in e) t.push(n + "=" + e[n]);
        return t.join(",");
      }),
      (s.doAjax = function (e) {
        LPServer.ajax(e);
      }),
      (s.ajax = function (e) {
        if (!isOffline()) return s.doAjax(e);
        e.error && e.error(null, null, "offline");
      }),
      (s.isEdge = function () {
        return is_edge();
      }),
      (s.copyDataIfEdge = function (e) {
        return s.isEdge() && void 0 !== e ? JSON.parse(JSON.stringify(e)) : e;
      }),
      (s.setUserPreference =
        ((n = s.setUserPreference),
        function (e, t) {
          n(e, t);
        })),
      (s.setGlobalPreference =
        ((a = s.setGlobalPreference),
        function (e, t) {
          a(e, t);
        })),
      (s.writePreferences = function () {}),
      (s.closePopovers = function () {}),
      (s.activeOverlayTab = void 0),
      (s.showModalOverlay = function (t) {
        "function" == typeof t &&
          s.getCurrentTabDetails(function (e) {
            e && e.tabURL && e.tabURL.indexOf(getchromeurl("")) < 0 && ((s.activeOverlayTab = e.tabID), t(e.tabID));
          });
      }),
      (s.removeModalOverlay = function (e) {}),
      (s.hideYoureAlmostDoneMarketingOverlay = function (e) {}),
      (g = {}),
      (b = {}),
      (h = {}),
      (_ = {}),
      (m = {}),
      (e.LPTabs = {
        get: function (e) {
          if (e.interface) {
            var t = [],
              n;
            for (n in _) _[n].tabDetails.interfaceName === e.interface && t.push(_[n]);
            return e.callback && e.callback(t), t;
          }
          if (void 0 !== e.tabID) {
            var a = _[e.tabID],
              r,
              r;
            if (a) return e.callback && e.callback(a), a;
            e.callback && (r = (r = h[e.tabID]) || (h[e.tabID] = [])).push(e.callback);
          }
          return null;
        }
      }),
      (s.getUnavailablePreferences = function () {
        return {
          openpopoverHk: !1,
          pollServerVal: g_nopoll,
          storeLostOTP: "0" === g_prefoverrides.account_recovery,
          showvault: g_hidevault || g_hideshowvault,
          homeHk: g_hidevault || g_hideshowvault,
          saveallHk: g_hidesaedhotkey,
          searchHk: g_hidesearch,
          usepopupfill: !g_offer_popupfill,
          recentUsedCount: g_hiderecentlyusedlistsize,
          searchNotes: g_hidenotes,
          idleLogoffVal: !(g_is_win || g_is_mac || g_is_linux),
          enablenamedpipes: lppassusernamehash || !(g_is_win || g_is_mac || g_is_linux) || is_chrome_portable(),
          enablenewlogin: !0
        };
      }),
      (s.getWindowIDs = function () {
        var e = {},
          t;
        for (t in _) _[t].tabDetails.windowID && (e[_[t].tabDetails.windowID] = !0);
        return Object.keys(e);
      }),
      (s.getWindowTabDetails = function (e) {
        var t = [],
          n;
        for (n in _) {
          var a = _[n];
          a.tabDetails.windowID === e && t.push(a.tabDetails);
        }
        return t;
      }),
      (s.openNativeFileSelector = function (i) {
        have_binary() &&
          have_binary_function("choose_file") &&
          call_binary_function("choose_file", !0, "", "", !0, function (e) {
            var t, n, a, e, r;
            "string" == typeof e &&
              e.length &&
              ((t = e.indexOf("\n")),
              (a = e.substr(0, t).replace(/\\/g, "/").replace(/.*\//, "")),
              (e = e.substr(t + 1)),
              isAllowedFileExtension(a)
                ? 10485762 < (3 * e.length) / 4
                  ? i(StringUtils.translate("File is too big. Try again with a file smaller than 10MB."))
                  : i(null, a, e)
                : i(bg.getInvalidFileExtensionMessageStrings()));
          });
      }),
      (s.writeAndOpenAttachmentFile = function (t, e) {
        sendLpImprove("attachment_downloaded", { source: "extension", usingbinary: "1" }),
          isAllowedFileExtension(t) &&
            (call_binary_function("write_file", t, e, !0, !0),
            g_is_win && call_binary_function("write_file", t + ":Zone.Identifier", "[ZoneTransfer]\nZoneId=3", !1, !0),
            g_is_linux
              ? call_binary_function("get_path", !0, function (e) {
                  alertfrombg(
                    gs("Your attachment is located at:") +
                      "\n\n" +
                      e +
                      t +
                      "\n\n" +
                      gs("It is recommended that you delete the attachment file after you use it.")
                  );
                })
              : (call_binary_function("get_path", !0, function (e) {
                  call_binary_function("run_file", e + t);
                }),
                setTimeout(r, 1e4)));
      }),
      (s.initializeRequestFramework = function (i) {
        var o = null,
          c = i.tabDetails || {},
          s = LPMessaging.getNewMessageSourceID(),
          l = !1,
          u = i.frameIdentity,
          n = !1,
          d = function (e) {
            try {
              var t = !n;
              return t ? ((e.frameID = s), i.sendContentScript(e)) : t;
            } catch (e) {
              return !1;
            }
          },
          f = function (e) {
            return d({ type: "backgroundResponse", data: e });
          },
          a = function (e) {
            var t, n, t, a, r;
            (o = _[c.tabID]),
              (l = e.top),
              void 0 !== c.tabID && (l && (b[c.tabID] = s), e.frameIdentity) && (u = c.tabID + "-" + e.frameIdentity),
              d({ type: "initialization", data: { tabID: c.tabID, frameID: s, topFrameID: b[c.tabID], request: e } }),
              e.extendFrame
                ? ((t = m[u].frameID),
                  (n = g[t]),
                  (g[t] = function (e) {
                    d(e), n(e);
                  }))
                : (g[s] = d),
              e.interfaceName && Interfaces.hasOwnProperty(e.interfaceName)
                ? (c.interfaceName || (c.interfaceName = e.interfaceName),
                  (t = function (e) {
                    return LPMessaging.makeRequest(d, { type: "contentScriptRequest", sourceFrameID: 0, data: e }, f);
                  }),
                  (a = Interfaces.createInstance(Interfaces[e.interfaceName], {
                    instance: e.extendFrame ? m[u].interface : null,
                    direct: !1,
                    context: i.context || "background",
                    requestFunction: t
                  })),
                  u && ((r = m[u]) && r.frameID !== s && r.disconnect(), (m[u] = { interface: a, disconnect: p, frameID: s })),
                  ("number" != typeof c.tabID && !c.tabID) ||
                    e.interfaceName !== c.interfaceName ||
                    e.extendFrame ||
                    ((o && !l) || (o && o.disconnect(), (o = _[c.tabID] = new LPTab(c))),
                    o.addFrame(a, { topWindow: l, frameID: s, contentScriptRequester: t, childFrameCount: e.childFrameCount }, p)),
                  i.interfaces && i.interfaces[e.interfaceName] && i.interfaces[e.interfaceName](a),
                  i.callback && i.callback(a))
                : (o = o || (_[c.tabID] = new LPTab(c)));
          },
          e = Raven.wrap(function (e) {
            switch (e.type) {
              case "backgroundRequest":
                LPMessaging.handleRequest(Interfaces.BackgroundInterface, e.data, f, {
                  additionalArguments: { tabURL: c.tabURL, tabID: c.tabID, windowID: c.windowID, frameID: s, top: l }
                });
                break;
              case "contentScriptRequest":
              case "contentScriptResponse":
                var t;
                0 === e.frameID ? LPMessaging.handleResponse(e.data) : e.frameID && (t = g[e.frameID]) && t(e);
                break;
              case "initialize":
                a(e.data);
                break;
              case "disconnect":
                p();
                break;
              case "initialized":
                l &&
                  h[c.tabID] &&
                  (h[c.tabID].forEach(function (e) {
                    e(o);
                  }),
                  delete h[c.tabID]);
            }
          }),
          p = function () {
            var e;
            n ||
              ((n = !0),
              delete g[s],
              delete m[u],
              b[c.tabID] === s && delete b[c.tabID],
              (e = _[c.tabID]) && (e.removeFrame(s), e.isEmpty()) && delete _[c.tabID],
              i.onDisconnect && i.onDisconnect());
          };
        return { frameID: s, requestHandler: e, disconnectHandler: p };
      }),
      (s.productType = { Premium: "Premium", Families: "Families" });
    var i = null;
    (s.setProductPriceUpdatesObserver = function (e) {
      i = e;
    }),
      (s.emitProductPriceUpdates = function (e, t, n) {
        "function" == typeof i && void 0 !== s.productType[e] && t && n && i(e, t, n);
      }),
      (s.updateProductPrice = function (e, t, n) {
        var a, r;
        void 0 !== s.productType[e]
          ? ((a = g_product_price || StringUtils.translate("Local price")),
            (r = g_local_currency || StringUtils.translate("Local currency")),
            "function" == typeof t && t(a, r),
            s.emitProductPriceUpdates(e, a, r))
          : "function" == typeof n && n("cannotFindProducts");
      }),
      (s.deleteAccount = function (e) {
        var t = e.username.toLowerCase().replace(/\s*/g, ""),
          n = get_key_iterations(t),
          t = make_lp_key_iterations(t, e.password, n),
          t = make_lp_hash_iterations(t, e.password, n),
          n = "object" != typeof e.reasons || null === e.reasons || Array.isArray(e.reasons) ? {} : e.reasons;
        (n.passwordhash = t),
          (n.reasontext = e.reasontext),
          LPServer.jsonRequest({ url: "/delete_account.php?cmd=delete", method: "POST", data: n, success: e.successCallback });
      });
  })(LPPlatform, this);
