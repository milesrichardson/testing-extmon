var InfieldCommands = (function () {
  var n = {};
  return {
    getPopupFillData: function (e, t) {
      var i = s(t.tabURL, void 0, t.tabID),
        r = o(t.tabID),
        n;
      e({
        url: t.tabURL,
        fillData: { sites: i.sites, formFills: i.formfills, favIcons: i.favicons, bigIcons: i.bigicons },
        domPath: r.domPath,
        fieldID: r.fieldID,
        fieldType: r.fieldType,
        type: r.type,
        save: r.save,
        generate: 1 === r.generate,
        canCopyToClipboard: can_copy_to_clipboard(),
        userName: g_username,
        condensedDropdown: reduxApp.getState().settings.features.omar_infield_b,
        noHeaders: reduxApp.getState().settings.features.omar_infield_c
      });
    },
    setActiveFormData: function (e, t) {
      var i = n[t.tabID] || {},
        r;
      for (r in i) i.hasOwnProperty(r) && (i[r].isActive = !1);
      (i[e.active] = {
        isActive: !0,
        domPath: e.active,
        fieldID: e.activefieldid,
        fieldType: e.activefieldtype,
        type: e.start_type,
        save: e.opentosave,
        generate: e.ask_generate
      }),
        (n[t.tabID] = i);
    },
    copyPassword: function (e, t, i, r) {
      sendLpImprove("copypass", { url: r.tabURL, source: "formv2", action: "sitepassword" }),
        sendLpImprove("sitelogin", { copy: 1, shareType: getShareType(e), autologin: 0, source: "formv2" }, !0),
        copypassword(e, null, t ? 1 : 0, r.tabID);
    },
    copyUserName: function (e, t, i) {
      copyusername(e, t ? 1 : 0, i.tabID);
    },
    copyUrl: function (e, t, i) {
      copyurl(e, t ? 1 : 0, i.tabID);
    },
    copyTotp: function (e, t, i) {
      copytotp(e, t ? 1 : 0, i.tabID);
    },
    copyProp: function (e, t, i, r, n) {
      copyprop(e, t, i ? 1 : 0, void 0, void 0, r);
    },
    getGeneratePasswordPrefs: function (e, t) {
      var i;
      e(do_popupfillgetgenerateprefs(t.tabID));
    },
    setGeneratePasswordPrefs: function (e, t) {
      do_popupfillsetgenerateprefs(t.tabID, e);
    },
    searchVault: function (e, t, i, r) {
      var n;
      i(do_searchvault(e, t, r.tabID));
    },
    searchVaultAll: function (e, t, i, r) {
      var n;
      i(a(e, t, r.tabID));
    },
    fillGeneratedPassword: function (i, e, r, n) {
      var t;
      LPTabs.get({ tabID: n.tabID }).forEachWindow({
        each: function (e, t) {
          return e.LPInfieldFrame.fillGeneratedPassword(n.tabURL, i, r, g_equivalentdomains);
        }
      }),
        (e.action = "formfill"),
        sendLpImprove("genpassword", e, !0);
    },
    fillUserData: function (e, t, i) {
      r(i.tabID, e, t), sendLpImprove("sitelogin", { copy: 0, shareType: getShareType(e), autologin: 0, source: "formv2" }, !0);
    },
    editFormFill: function (e, t) {
      reduxApp.getState().settings.features.omar_ia ? openeditsecurenote(e) : editprofile(e, null, t);
    },
    fillForm: function (e, t, i, r) {
      var n = null,
        r;
      if (t)
        if (frame_and_topdoc_has_same_domain(r.tabID)) reduxApp.getState().settings.features.omar_ia && (n = !0);
        else {
          if (
            (ftd_report_error(r.tabID, "fillform"),
            !lpConfirmYesNo(
              gs("Are you sure you want LastPass to fill your information into this site:") +
                "\n\n" +
                lp_gettld_url(ftd_get_frameparenturl(r.tabID))
            ))
          )
            return !1;
          n = !0;
        }
      reduxApp.getState().settings.features.omar_ia
        ? ((r = g_securenotes[e]), LegacyFillTracking.track(r.notetype, "Infield V2"), fillitem(e, null, null, t, n, i))
        : fillform(e, null, null, null, t, n, i);
    },
    editSite: function (e) {
      editAid(e);
    },
    canCopy: function (e) {
      "function" == typeof e && e(can_copy_to_clipboard() && !g_isedge && (have_binary() || !is_firefox_webext()));
    }
  };
  function o(e) {
    var t = n[e] || {},
      i;
    for (i in t) if (t.hasOwnProperty(i) && t[i].isActive) return t[i];
  }
  function y(e) {
    var t = e
        .filter(function (e) {
          return "Password" === e.recordType;
        })
        .map(function (e) {
          return g_sites[e.id];
        }),
      e = e
        .filter(function (e) {
          return "Password" !== e.recordType;
        })
        .map(function (e) {
          var e = addUserFriendlyDescription(g_securenotes[e.id]);
          return (e.language = v(e)), e;
        }),
      i = {},
      r =
        (t.forEach(function (e) {
          i[e.aid] = geticonurlfromrecord(e);
        }),
        {});
    return (
      t.forEach(function (e) {
        r[e.aid] = getbigsquareiconurlfromrecord(e);
      }),
      { sites: t, formfills: e, favicons: i, bigicons: r }
    );
  }
  function s(e, t, i) {
    var r, i;
    if (reduxApp.getState().settings.features.web_client_fill)
      return (
        (i = y(reduxApp.getInfieldRecords(i))),
        {
          sites: cache_usernames(i.sites),
          formfills: JSON.stringify(i.formfills),
          favicons: JSON.stringify(i.favicons),
          bigicons: JSON.stringify(i.bigicons)
        }
      );
    var n = [],
      o = {},
      i = {},
      s = "",
      a = "",
      l = "",
      f = "",
      c = new Array(),
      d = new Array(),
      u = {};
    (t = t || lp_gettld_url(e)), (n = getsites(e));
    for (var n = reorderOnURL(n, e, !0), g = 0; g < n.length; g++)
      (o[n[g].aid] = geticonurlfromrecord(n[g])), (u[n[g].aid] = getbigsquareiconurlfromrecord(n[g]));
    var t = LPJSON.stringify("");
    if (reduxApp.getState().settings.features.omar_ia) {
      notekeys = Object.keys(g_securenotes);
      for (var p = 0; p < notekeys.length; p++)
        check_ident_aid(g_securenotes[notekeys[p]].aid) &&
          (-1 < fillableNoteTypes.indexOf(g_securenotes[notekeys[p]].notetype) ||
            "Custom_" === g_securenotes[notekeys[p]].notetype.substring(0, 7)) &&
          ((d[p] = addUserFriendlyDescription(g_securenotes[notekeys[p]])), (d[p].language = v(d[p])));
      d && 0 < d.length && (t = LPJSON.stringify(d));
    } else {
      for (var _ = 0, m, m; _ < g_formfills.length; _++) {
        check_ident_ffid(g_formfills[_].ffid) &&
          ((c[c.length] = g_formfills[_]),
          (m = lpmdec_acct(g_formfills[_].ccnum, !0, g_formfills[_], g_shares)),
          (o[g_formfills[_].ffid] = geticonCCnum(m)),
          (u[g_formfills[_].ffid] = geticonCCnum(m, !0)),
          "" !== g_formfills[_].ccnum) &&
          ((m = lpmdec(g_formfills[_].ccnum)),
          (c[c.length - 1].description = LPCC.getFormattedNumber(m)),
          (c[c.length - 1].ccType = LPCC.getCCType(m)));
      }
      c && 0 < c.length && (t = LPJSON.stringify(c));
    }
    return (
      (f = cache_usernames(n)),
      (s = t),
      (a = LPJSON.stringify(o)),
      g_40fieldicon && (l = LPJSON.stringify(u)),
      f && (i.sites = f),
      s && (i.formfills = s),
      a && (i.favicons = a),
      l && (i.bigicons = l),
      i
    );
  }
  function v(e) {
    var e = lpmdec(e.extra, !0),
      e = /Language:(.+)/.exec(e);
    return e && 1 < e.length ? e[1] : "en-US";
  }
  function r(e, t, i) {
    var r, n;
    lploggedin &&
      null == grid_getdata("active") &&
      ((g_last_launch[t] = new Date().getTime()), void 0 !== g_sites[t]) &&
      ((r = !0),
      (n = get_record(t)),
      i && !n.save_all && (r = !0),
      (g_fillfield_confirm_perfield = {}),
      fill({
        tabid: e,
        acct: g_sites[t],
        docid: null,
        submit: !1,
        doconfirm: !0,
        docnum: "all",
        allowforce: !0,
        skip_pwprotect: !1,
        manualfill: r,
        automaticallyFill: null,
        skip_basicauth: null,
        from_iframe: i,
        desc: "autofillaid",
        source: "notrack"
      }));
  }
  function a(e, t, i) {
    var r, r;
    if (((e = e && e.toLowerCase().trim()), reduxApp.getState().settings.features.web_client_fill))
      return (r = reduxApp.getInfieldRecords(i)), (r = reduxApp.searchInfieldRecords(e, r)), JSON.stringify(y(r));
    var n = {},
      o = {},
      s = "",
      r = g_popup_url_by_tabid[i],
      a;
    for (a in (r && (s = lp_gettld_url(r)), g_sites))
      !check_ident_aid(g_sites[a].aid) ||
        g_sites[a].tld !== s ||
        (e && -1 === g_sites[a].name.toLowerCase().indexOf(e) && -1 === g_sites[a].unencryptedUsername.toLowerCase().indexOf(e)) ||
        ((n[a] = g_sites[a]),
        g_sites[a].tld && g_bigsquareicons[g_sites[a].tld] && (o[a] = "data:image/png;base64," + g_bigsquareicons[g_sites[a].tld]));
    for (var l = Object.keys(g_securenotes), f = new Array(), c = 0; c < l.length; c++)
      check_ident_aid(g_securenotes[l[c]].aid) &&
        -1 < fillableNoteTypes.indexOf(g_securenotes[l[c]].notetype) &&
        -1 !== g_securenotes[l[c]].decprofilename.toLowerCase().indexOf(e) &&
        (f[c] = addUserFriendlyDescription(g_securenotes[l[c]]));
    return JSON.stringify({ sites: n, bigicons: o, formfills: f });
  }
})();
