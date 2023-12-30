function checkIconsVersion(t) {
  var n = opendb(),
    e,
    s;
  createDataTable(n),
    n
      ? ((e = function (n, e) {
          var s = !0,
            o = null,
            i;
          0 < e.rows.length && reduxApp.getPreference("icons") == t && ((s = !1), (o = e.rows.item(0).data)),
            null == o || s ? (isUrlEncryptionEnabled() ? downloadIcons(getDomainsFromGTlds()) : downloadIcons()) : processIcons(o);
        }),
        g_indexeddb
          ? ((s = {
              rows: {
                item: function (n) {
                  return this[n];
                },
                length: 0
              }
            }),
            (n
              .transaction("LastPassData", "readonly")
              .objectStore("LastPassData")
              .openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_icons")).onsuccess = function (n) {
              var n = n.target.result;
              n ? ((s.rows[s.rows.length] = n.value), s.rows.length++, n.continue()) : e(null, s);
            }))
          : n.transaction(function (n) {
              n.executeSql(
                "SELECT * FROM LastPassData WHERE username_hash=? AND type=?",
                [db_prepend(g_username_hash), "icons"],
                e,
                function (n, e) {
                  console_log(e);
                }
              );
            }))
      : isUrlEncryptionEnabled()
      ? downloadIcons(getDomainsFromGTlds())
      : downloadIcons();
}
function downloadIcons(n) {
  lpMakeRequest(
    base_url + "geticon.php",
    "versionchrome=1&username=" + en(g_username) + useV2WithUrlEncryption() + (n ? "&domain=" + n : ""),
    lpIconResponse,
    null
  );
}
function downloadBigIcons(n, e) {
  e = e || "big";
  var s = "big=1&versionchrome=1&username=" + en(g_username) + "&size=" + ("big" === e ? "s" : e) + useV2WithUrlEncryption();
  n && (s += "&domain=" + en(n)),
    lpMakeRequest(
      base_url + "geticon.php",
      s,
      function (n) {
        4 == n.readyState &&
          200 == n.status &&
          n.responseText &&
          "latest" != n.responsetext &&
          "nodata" != n.responsetext &&
          (processIcons(n.responseText, e), saveBigIcons(e));
      },
      null
    );
}
function lpIconResponse(n) {
  var n, e, s, n;
  4 == n.readyState &&
    200 == n.status &&
    n.responseText &&
    "latest" != n.responsetext &&
    "nodata" != n.responsetext &&
    ((s = (n = n.responseText.split("\n"))[0].split("=")[1]),
    (n = n[1]),
    reduxApp.setExtensionPreferences({ icons: s }),
    lpSaveData(n, "icons"),
    processIcons(n));
}
function getBigIconKeyIfMissing(n, e) {
  var e = "sq" === (e = e || "big") ? g_bigsquareicons : g_bigicons,
    s = (null == BigIconList && LoadBigIconList(), hostof(n)),
    o = AES.bin2hex(s),
    o,
    s;
  return void 0 !== BigIconList[o]
    ? void 0 === e[s]
      ? s
      : null
    : ((o = lp_gettld_url(n)), (s = AES.bin2hex(o)), void 0 !== BigIconList[s] && void 0 === e[o] ? o : null);
}
function checkBigIconsVersion(e, n, s, o) {
  var i = !0,
    t,
    r,
    a;
  for (r in "sq" === (o = o || "big") ? g_bigsquareicons : g_bigicons) {
    i = !1;
    break;
  }
  if (i && !n)
    LPPlatform.getBigIcons(function (n) {
      n
        ? (processIcons(n, o), checkBigIconsVersion(e, !0, s, o))
        : isUrlEncryptionEnabled()
        ? downloadBigIcons(getDomainsFromGTlds(), o)
        : downloadBigIcons("all", o);
    }, o);
  else if (e) {
    null != (a = getBigIconKeyIfMissing(e, o)) && downloadBigIcons(a, o);
  } else {
    var c = !1,
      l = [],
      g = [],
      u;
    for (u in g_sites) {
      var c = !0,
        d,
        a;
      null != (a = getBigIconKeyIfMissing(g_sites[u].url, o)) && void 0 === g[a] && ((g[a] = 1), (l[l.length] = a));
    }
    c || s
      ? l.length && downloadBigIcons(l.join(","), o)
      : isUrlEncryptionEnabled()
      ? downloadBigIcons(getDomainsFromGTlds(), o)
      : downloadBigIcons("all", o);
  }
}
function processIcons(n, e) {
  var s = null;
  if (n && ((n = n.split(":")), e && (s = "sq" === e ? g_bigsquareicons : g_bigicons), n.length))
    for (var o = n[0], i = 0, t = n.length; i + 1 < t; i += 2) {
      var r = parseInt(n[i + 1]),
        o,
        a;
      0 === o.indexOf("lp") &&
        0 < r &&
        ((o = o.substring(2)), (a = n[i + 2].substring(0, r)), e ? (s[AES.hex2bin(o)] = a) : (g_icons[o] = a), (o = n[i + 2].substring(r)));
    }
  LPPlatform.updateBigIcons(s);
}
function saveBigIcons(n) {
  var e = "sq" === n ? g_bigsquareicons : g_bigicons,
    s = "",
    o;
  for (o in e) {
    var i = e[o];
    s += "lp" + AES.bin2hex(o) + ":" + i.length + ":" + i;
  }
  LPPlatform.saveBigIcons(s, n);
}
function isUrlEncryptionEnabled() {
  return reduxApp && reduxApp.getState().settings.features.url_encryption;
}
function useV2WithUrlEncryption() {
  var n = "";
  return (n = isUrlEncryptionEnabled() ? "&v2=1" : n);
}
function getDomainsFromGTlds() {
  return Object.keys(g_tlds).join(",");
}
