LPContextMenus = (function () {
  var u = null,
    c = null,
    l = [],
    a = [],
    i = [],
    s = [],
    d = "all",
    t = !1,
    p = 20;
  function m(e, t) {
    var n = gettabid(t),
      t = gettaburl(t),
      e = a[e.menuItemId];
    sendLpImprove("sitelogin", { shareType: getShareType(e), copy: 0, autologin: 0, source: "context" }, !0),
      LegacyFillTracking.track("Password", "Context Menu"),
      handleFill(n, { url: t, topurl: t, docid: 0, force: !1, docnum: 0, cmd: "autofillaid", aid: e, source: "notrack" });
  }
  function g(e, t) {
    var e = a[e.menuItemId];
    copyusername(e), sendLpImprove("copyitem", { itemtype: "username", source: "context" });
  }
  function f(e, t) {
    var e = a[e.menuItemId];
    copypassword(e),
      sendLpImprove("sitelogin", { shareType: getShareType(e), copy: 1, autologin: 0, source: "context" }, !0),
      sendLpImprove("copypass", { action: "sitepassword", source: "context" });
  }
  function h(e, t) {
    var e = a[e.menuItemId];
    copyurl(e);
  }
  function x(e, t) {
    var n = a[e.menuItemId],
      o = i[e.menuItemId],
      e = s[e.menuItemId];
    copyprop(n, o, 0, -1, null, e), sendLpImprove("copyitem", { itemtype: o, source: "context" });
  }
  function I(e, t) {
    var e = a[e.menuItemId],
      n = g_securenotes[e];
    LegacyFillTracking.track(n.notetype, "Context Menu"), fillitem(e, null, null, 0, null, "context");
  }
  function r(e, t) {
    var e = a[e.menuItemId];
    fillform(e, null, null, null, null, null, "context");
  }
  function y(e, t) {
    var e = a[e.menuItemId];
    editprofile(e, null, "context");
  }
  function v(e, t) {
    var e = a[e.menuItemId];
    openeditsite(e), sendLpImprove("edititem", { itemtype: "Saved Site", source: "context" });
  }
  function C(e, t) {
    var n = a[e.menuItemId],
      e = i[e.menuItemId];
    openeditsecurenote(n), sendLpImprove("edititem", { itemtype: e, source: "context" });
  }
  function M(e, t) {
    for (
      var n = 0 === t ? m : 1 == t ? g : 2 == t ? f : h,
        o = e.slice(0, p).sort(function (e, t) {
          return e.name && t.name ? e.name.localeCompare(t.name) : 0;
        }),
        c = 0;
      c < o.length;
      c++
    ) {
      var r,
        r = void 0 !== (r = e[c].useusername) && r.length ? " (" + r + ")" : "",
        r = chrome.contextMenus.create({ title: e[c].name + r, contexts: [d], parentId: l[t], onclick: n });
      (a[r] = e[c].aid), (l[l.length] = r);
    }
    e.length > p &&
      ((l[l.length] = chrome.contextMenus.create({ type: "separator", contexts: [d], parentId: l[t] })),
      (l[l.length] = chrome.contextMenus.create({
        title: gs("Additional sites available in the Vault"),
        contexts: [d],
        parentId: l[t],
        onclick: openvault
      })));
  }
  function k(e) {
    if (void 0 === g_prefoverrides.show_formfills || "1" === g_prefoverrides.show_formfills) {
      for (var t = e ? 6 : 3, n = 0, o = 0; o < g_formfills.length; o++)
        if (check_ident_ffid(g_formfills[o].ffid)) {
          l[l.length] = chrome.contextMenus.create({ title: g_formfills[o].decprofilename, contexts: [d], parentId: l[t] });
          var c = chrome.contextMenus.create({ title: gs("Fill Form"), contexts: [d], parentId: l[l.length - 1], onclick: r }),
            c =
              ((a[c] = g_formfills[o].ffid),
              chrome.contextMenus.create({ title: gs("Edit"), contexts: [d], parentId: l[l.length - 1], onclick: y }));
          if (((a[c] = g_formfills[o].ffid), p <= (n += 1))) break;
        }
      (l[l.length] = chrome.contextMenus.create({ type: "separator", contexts: [d], parentId: l[t] })),
        (l[l.length] = chrome.contextMenus.create({
          title: gs("Add Profile"),
          contexts: [d],
          parentId: l[t],
          onclick: function () {
            addprofile(null, "context");
          }
        })),
        (l[l.length] = chrome.contextMenus.create({
          title: gs("Add Credit Card"),
          contexts: [d],
          parentId: l[t],
          onclick: function () {
            addcreditcard(null, "context");
          }
        })),
        (l[l.length] = chrome.contextMenus.create({
          title: gs("Clear Forms"),
          contexts: [d],
          parentId: l[t],
          onclick: function () {
            clearforms("context");
          }
        })),
        (l[l.length] = chrome.contextMenus.create({
          title: gs("Choose Profile and Credit Card"),
          contexts: [d],
          parentId: l[t],
          onclick: function () {
            openchooseprofilecc("context");
          }
        })),
        p < n &&
          ((l[l.length] = chrome.contextMenus.create({ type: "separator", contexts: [d], parentId: l[t] })),
          (l[l.length] = chrome.contextMenus.create({
            title: gs("Additional form fills available in the Vault"),
            contexts: [d],
            parentId: t,
            onclick: openvault
          })));
    }
  }
  function _(e, t) {
    if (lploggedin) {
      (l[l.length] = chrome.contextMenus.create({ title: gs("Auto Fill"), contexts: [d], parentId: u })),
        t &&
          ((l[l.length] = chrome.contextMenus.create({ title: gs("Copy Username"), contexts: [d], parentId: u })),
          (l[l.length] = chrome.contextMenus.create({ title: gs("Copy Password"), contexts: [d], parentId: u })),
          (l[l.length] = chrome.contextMenus.create({ title: gs("Copy URL"), contexts: [d], parentId: u }))),
        (l[l.length] = chrome.contextMenus.create({
          title: gs("Recheck Page"),
          contexts: [d],
          parentId: u,
          onclick: function (e, t) {
            recheckpage();
          }
        })),
        (l[l.length] = chrome.contextMenus.create({
          title: gs("Generate Secure Password"),
          contexts: [d],
          parentId: u,
          onclick: opengenpw
        })),
        (void 0 !== g_prefoverrides.show_formfills && "1" !== g_prefoverrides.show_formfills) ||
          (l[l.length] = chrome.contextMenus.create({ title: gs("Fill Forms"), contexts: [d], parentId: u }));
      for (var n = t ? 3 : 0, o = 0; o <= n; o++)
        0 < e.length ? M(e, o) : chrome.contextMenus.create({ title: gs("No Matching Sites!"), contexts: [d], parentId: l[o] });
      k(t);
    }
  }
  function b(e, t, n) {
    return (l[l.length] = chrome.contextMenus.create({ title: gs(e), contexts: [d], parentId: n || u, onclick: t }));
  }
  function w(e, t, n, o, c, r) {
    var t = chrome.contextMenus.create({ title: gs(t), contexts: [d], parentId: l[l.length - 1], onclick: c });
    null != t && ((a[t] = e), null != n) && ((i[t] = n), (s[t] = o));
  }
  function A(e, n, t) {
    for (
      var o = e.length < p ? e.length : p,
        c =
          (e.slice(0, o).forEach(function (e) {
            var t = e.useusername ? " - " + e.useusername : "";
            b(e.name + t),
              w(e.aid, "Fill", null, null, m),
              w(e.aid, "Edit", null, null, v),
              n && (w(e.aid, "Copy username", "Username", null, g), w(e.aid, "Copy password", "Password", null, f));
          }),
          chrome.contextMenus.create({ type: "separator", contexts: [d], parentId: u }),
          b("Other")),
        r = Object.keys(g_securenotes),
        l = [],
        a = 0;
      a < r.length && l.length < p;
      a++
    )
      check_ident_aid(g_securenotes[r[a]].aid) &&
        -1 < fillableNoteTypes.indexOf(g_securenotes[r[a]].notetype) &&
        l.push(addUserFriendlyDescription(g_securenotes[r[a]]));
    l.sort(function (e, t) {
      return e.name && t.name ? e.name.localeCompare(t.name) : 0;
    });
    for (var i = l.length < p ? l.length : p, a = 0; a < i; a++) {
      var s = l[a];
      if (
        (b(s.description ? s.decprofilename + "  -  " + s.description : s.decprofilename, null, c),
        w(s.aid, "Fill", null, null, I),
        w(s.aid, "Edit", s.notetype, null, C),
        n)
      )
        switch (s.notetype) {
          case "Credit Card":
            w(s.aid, "Copy card number", "Number", null, x), w(s.aid, "Copy CVV/Security code", "Security Code", null, x);
            break;
          case "Bank Account":
            w(s.aid, "Copy account number", "Account Number", null, x), w(s.aid, "Copy routing number", "Routing Number", null, x);
            break;
          case "Address":
            w(s.aid, "Copy first name", "First Name", null, x),
              w(s.aid, "Copy last name", "Last Name", null, x),
              w(s.aid, "Copy address 1", "Address 1", null, x),
              w(s.aid, "Copy city/town", "City / Town", null, x),
              w(s.aid, "Copy zip/postal code", "Zip / Postal Code", null, x),
              w(s.aid, "Copy email address", "Email Address", null, x),
              w(s.aid, "Copy phone number", "Phone", "num", x);
        }
    }
    chrome.contextMenus.create({ type: "separator", contexts: [d], parentId: u }),
      (p < o || p < i) &&
        chrome.contextMenus.create({
          title: gs("Additional items available in the Vault"),
          contexts: [d],
          parentId: u,
          onclick: openvault
        }),
      b("Add Item", function () {
        openaddsecurenote();
      }),
      b("Recheck Page", function (e, t) {
        recheckpage();
      }),
      b("Generate Secure Password", opengenpw);
  }
  function P(e, t) {
    var n, o;
    setcurrenturl(e),
      "undefined" == typeof chrome ||
        void 0 === chrome.contextMenus ||
        reduxApp.getPreference("hideContextMenus") ||
        (c != e &&
          ((c = e),
          l.length
            ? L(function () {
                (c = null), P(e, t);
              })
            : ((a = []),
              lploggedin &&
                ((n = reorderOnURL(getsites(e), e, !0, !1)),
                (o = can_copy_to_clipboard() && !g_isedge),
                reduxApp.getState().settings.features.omar_ia ? A(n, o, t) : _(n, o)))));
  }
  function L(e) {
    lpdbg("context", "createContextMenus called"),
      "undefined" == typeof chrome ||
        void 0 === chrome.contextMenus ||
        (t && !reduxApp.getPreference("hideContextMenus") && !e) ||
        (lpdbg("context", "not created yet or preference changed"),
        chrome.contextMenus.removeAll(function () {
          lpdbg("context", "context menu items all removed"),
            (t = !1),
            (l = []),
            reduxApp.getPreference("hideContextMenus") ||
              (lpdbg("context", "creating context menu"),
              (e = e || n),
              (u = chrome.contextMenus.create({ title: gs("LastPass"), contexts: ["all"], onclick: o }, e)));
        }));
  }
  function n() {
    console_log("Context menu callback function called"), (t = !0);
  }
  function o(e, t) {
    lploggedin || open_login();
  }
  function e(e) {
    return function () {
      if (!reduxApp.getState().settings.features.web_client_fill) return e.apply(this, arguments);
    };
  }
  return e(L)(), { rebuildcontext: e(P), createContextMenus: e(L), lastcontexturl: c };
})();
