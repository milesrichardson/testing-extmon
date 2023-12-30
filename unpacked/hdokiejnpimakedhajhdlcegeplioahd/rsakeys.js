function upload_rsa_keys(e, r, a, s) {
  var s, t, n, o, r, a, r, a, o, o;
  lploggedin
    ? ((s = "undefined" == typeof forcewriteprivatearg || 0 == forcewriteprivatearg ? 0 : forcewriteprivatearg),
      a
        ? console_log("RSA : upload_rsa_keys : from=" + e + " : getting rsa keys from server : forcewriteprivate=" + s)
        : console_log("RSA : upload_rsa_keys : from=" + e + " : created new rsa keys and uploading to server : forcewriteprivate=" + s),
      (t = ""),
      (o = n = ""),
      a
        ? console_log("RSA : upload_rsa_keys : NOT wrapping and CBC encrypting privatekey -- that should have already been done")
        : (console_log("RSA : upload_rsa_keys : wrapping and CBC encrypting privatekey"),
          (t = void 0 !== r.publickey ? r.publickey : encode_public_key(r)),
          (o = rsa_encrypt_privatekey(void 0 !== r.privatekey ? r.privatekey : encode_private_key(r), g_local_key))),
      (r = (a = "") == (a = null != (r = g_local_key) && "" != r ? (a = AES.bin2hex(r)).toUpperCase() : a) ? "" : SHA256(a)),
      (a = "" == a ? "" : SHA256(o)),
      console_log("RSA : upload_rsa_keys : -- uploading privatekeyenchexhash"),
      console_log("RSA : upload_rsa_keys : -- uploading publickey"),
      (o = "privatekeyenc=" + LP.en(o)),
      (o =
        (o =
          (o = (o = (o += "&publickey=" + LP.en(t)) + "&forcewriteprivate=" + LP.en(s)) + "&userkeyhexhash=" + LP.en(r)) +
          "&privatekeyenchexhash=" +
          LP.en(a)) +
        "&from=" +
        LP.en("crplugin")),
      lpMakeRequest(base_url + "uploadrsakeys.php", o, upload_rsa_keys_response, null))
    : console_log("RSA : upload_rsa_keys : from=" + e + " : returning because we are not logged in");
}
function upload_rsa_keys_response(e) {
  var r, e, a;
  4 == e.readyState &&
    200 == e.status &&
    e.responseXML &&
    e.responseXML.documentElement &&
    ((a = ""), 0 < (e = e.responseXML.documentElement.getElementsByTagName("ok")).length) &&
    ((a = e[0].getAttribute("privatekeyenchex")),
    console_log("RSA : upload_rsa_keys_response : got uploadrsakeys response : server returned privatekeyenchex"),
    null != a) &&
    "" != a &&
    (console_log("RSA : upload_rsa_keys_response : calling writersaprivatekeyenchextodb()"),
    writersaprivatekeyenchextodb(a),
    console_log("RSA : upload_rsa_keys_response : calling readrsaprivatekeyhexfromdb()"),
    readrsaprivatekeyhexfromdb(!0, null, null, function () {
      g_shares &&
        0 < g_shares.length &&
        (console_log("RSA : upload_rsa_keys_response found shares: reparse!"), get_accts_local(!0, "refetchsharing"));
    }));
}
function writersaprivatekeyenchextodb(e) {
  console_log("RSA : writersaprivatekeyenchextodb : writing privatekeyenchex to db"),
    null == g_username || "" == g_username
      ? console_log("RSA : writersaprivatekeyenchextodb : FAILED because g_username is blank")
      : lpSaveData(e, "rsakey");
}
function readrsaprivatekeyhexfromdb(e, s, t, n) {
  var r, e, a, o;
  g_nosharingkeys
    ? console_log("RSA : readrsaprivatekeyhexfromdb : FAILED because g_nosharingkeys==TRUE")
    : null == g_username || "" == g_username || null == g_local_key
    ? console_log("RSA : readrsaprivatekeyhexfromdb : FAILED because g_username is blank")
    : (void 0 !== e && e ? 1 : 0) || "" == lp_rsaprivatekeyhex || (t && SHA256(lp_rsaprivatekeyenchex) != t)
    ? (rsa_clearvars(),
      console_log("RSA : readrsaprivatekeyhexfromdb : trying to read from db"),
      (e = opendb()),
      createDataTable(e),
      e &&
        ((a = function (e, r) {
          var r, a;
          0 < r.rows.length
            ? "" == (r = r.rows.item(0).data) || null == r
              ? (console_log("RSA : readrsaprivatekeyhexfromdb : FAILED to find in db"), DeleteFromDB("rsakey"))
              : t && SHA256(r) != t
              ? (console_log("RSA : readrsaprivatekeyhexfromdb : found in db, but hash does not match!"),
                DeleteFromDB("rsakey"),
                0 == g_privkeyattempts
                  ? (console_log("RSA : readrsaprivatekeyhexfromdb : GET IT FROM THE SERVER A"),
                    (g_privkeyattempts = 1),
                    setTimeout(function () {
                      console.error("BAH!!!"), upload_rsa_keys("GetA", null, !0);
                    }, 500))
                  : console_log(
                      "RSA : readrsaprivatekeyhexfromdb : NOT GETTING IT FROM THE SERVER BECAUSE g_privkeyattempts=" + g_privkeyattempts
                    ))
              : (console_log("RSA : readrsaprivatekeyhexfromdb : found it in the db"),
                console_log("RSA : readrsaprivatekeyhexfromdb : trying to decrypt using CBC"),
                (a = rsa_extract_privatekey(r, g_local_key))
                  ? (console_log("RSA : readrsaprivatekeyhexfromdb : successfully decrypted using CBC and extracted plaintext private key"),
                    (lp_rsaprivatekeyenchex = r),
                    (lp_rsaprivatekeyhex = a),
                    (lp_rsaprivatekeyenchexserverhash = SHA256(lp_rsaprivatekeyenchex)),
                    console_log("RSA : readrsaprivatekeyhexfromdb : SUCCESS"),
                    n && n(lp_rsaprivatekeyhex),
                    g_shares &&
                      1 == g_shares.length &&
                      0 == g_shares[0].id &&
                      (console_log("RSA : readrsaprivatekeyhexfromdb : Shared folder found, we just got the key, reparse!"),
                      get_accts_local()))
                  : (console_log("RSA : readrsaprivatekeyhexfromdb : FAILED to decrypt/extract private key"),
                    lpReportError(
                      "readrsaprivatekeyhexfromfile : failed to extract rsa key from file - did we change our password on another PC? datahex.length=" +
                        r.length
                    ),
                    DeleteFromDB("rsakey")))
            : (console_log("RSA : readrsaprivatekeyhexfromdb : FAILED to find in db"),
              s && (console_log("RSA : readrsaprivatekeyhexfromdb : GET IT FROM THE SERVER B"), upload_rsa_keys("GetB", null, !0)));
        }),
        g_indexeddb
          ? ((o = {
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
              .openCursor(IDBKeyRange.only(db_prepend(g_username_hash) + "_rsakey")).onsuccess = function (e) {
              var e = e.target.result;
              e ? ((o.rows[o.rows.length] = e.value), o.rows.length++, e.continue()) : a(null, o);
            }))
          : e.transaction(function (e) {
              e.executeSql(
                "SELECT * FROM LastPassData WHERE username_hash=? AND type=?",
                [db_prepend(g_username_hash), "rsakey"],
                a,
                function (e, r) {
                  console_log(r);
                }
              );
            })))
    : (console_log("RSA : readrsaprivatekeyhexfromdb : returning a cached value"), n && n(lp_rsaprivatekeyhex));
}
function rsa_userchangedpassword() {
  console_log("rsa_userchangedpassword : called"), DeleteFromDB("rsakey"), rsa_clearvars();
}
function rsa_clearvars() {
  console_log("rsa_clearvars : called"), (lp_rsaprivatekeyhex = ""), (lp_rsaprivatekeyenchex = ""), (lp_rsaprivatekeyenchexserverhash = "");
}
var lppendingsharests = 0;
function rsa_setpendingsharests(e) {
  lppendingsharests = void 0 !== e && e ? 0 : new Date().getTime();
}
function rsa_acceptpendingshares(e) {
  var r;
  if (lploggedin && !lploggedinoffline && null != g_local_key)
    if ("" == lp_rsaprivatekeyhex)
      e ||
        (console_log("RSA : rsa_acceptpendingshares : calling readrsaprivatekeyhexfromdb()"),
        readrsaprivatekeyhexfromdb(!1, null, null, rsa_acceptpendingshares));
    else if (((rsaprivatekeyhex = lp_rsaprivatekeyhex), 0 != g_pendings.length))
      if (new Date().getTime() - lppendingsharests < 1e4)
        console_log("lprsa_acceptpendingshares : skipping because we were already called very recently");
      else {
        rsa_setpendingsharests();
        var a = [],
          s;
        for (s in g_pendings) {
          var t = g_pendings[s];
          if (1 == t.shareautoaccept) {
            var n = "",
              o = "";
            if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSADecrypt)
              (n = g_nplastpass.xCryptoRSADecrypt(rsaprivatekeyhex, t.sharekeyenchex)), (o = AES.hex2bin(n));
            else {
              var p = new RSAKey();
              if (!parse_private_key(p, lp_rsaprivatekeyhex))
                return void console_error("Private key could not be parsed while auto accepting shares");
              var l = t.sharekeyenchex,
                o = p.decrypt(l),
                n = AES.bin2hex(o);
            }
            if ("" == o) return void console_error("Share key bin empty while auto accepting shares");
            var p = dec(t.sharename, o),
              l = dec(t.sharegroup, o),
              n = dec(t.username, o),
              i = dec(t.password, o),
              c = dec(t.extra, o),
              u = !0,
              h = {};
            for (s in t.shareafids)
              if (((h[s] = dec(t.shareafids[s], o)), "" != t.shareafids[s] && "" == h[s])) {
                u = !1;
                break;
              }
            if (
              ("" != t.sharename && "" == p) ||
              ("" != t.sharegroup && "" == l) ||
              ("" != t.username && "" == n) ||
              ("" != t.password && "" == i) ||
              ("" != t.extra && "" == c) ||
              !u
            )
              lpReportError("lprsa_acceptpendingshares : failing autoaccept of share because we failed to decrypt at least one value");
            else {
              var d = enc(p),
                _ = enc(l),
                g = enc(n),
                y = enc(i),
                v = enc(c),
                u = !0,
                f = {};
              for (s in h)
                if (((f[s] = enc(h[s])), "" != h[s] && "" == f[s])) {
                  u = !1;
                  break;
                }
              if (
                ("" != p && "" == d) ||
                ("" != l && "" == _) ||
                ("" != n && "" == g) ||
                ("" != i && "" == y) ||
                ("" != c && "" == v) ||
                !u
              )
                lpReportError("lprsa_acceptpendingshares : failing autoaccept of share because we failed to reencrypt at least one value");
              else {
                var k = { aid: t.id, name: d, group: _, username: g, password: y, extra: v },
                  x = 0;
                for (s in f) (k["afid" + x] = s), (k["afidv" + x] = f[s]), ++x;
                (k.numafids = x), a.push(k);
              }
            }
          }
        }
        if (0 < a.length) {
          var m = "cmd=" + LP.en("autoacceptshares") + "&from=" + LP.en("crplugin") + "&numshares=" + LP.en(a.length),
            b = 0,
            s;
          for (s in a) {
            var S = "&share" + b,
              R;
            for (R in (++b, a[s])) m += S + R + "=" + LP.en(a[s][R]);
          }
          console_log("rsa_acceptpendingshares : issuing server request to autoaccept " + a.length + " shares"),
            lpMakeRequest(base_url + "showacceptshare.php", m, rsa_acceptpendingsharesresponse);
        } else console_log("rsa_acceptpendingshares : no shares to autoaccept so not issuing server request");
      }
}
function rsa_acceptpendingsharesresponse(e) {
  var r, a;
  4 == e.readyState &&
    (console_log("rsa_acceptpendingsharesresponse : received response from server"),
    200 != e.status
      ? lpReportError("lprsa_acceptpendingsharesresponse : request failed status=" + e.status)
      : null == e.responseXML || null == e.responseXML.documentElement
      ? lpReportError("lprsa_acceptpendingsharesresponse : request failed xml invalid A text=" + e.responseText)
      : (a = e.responseXML.documentElement.getElementsByTagName("ok")) && 0 != a.length
      ? get_accts()
      : lpReportError("lprsa_acceptpendingsharesresponse : request failed xml invalid B text=" + e.responseText));
}
function rsa_setshareeautopushests(e) {
  g_shareeautopushests = void 0 !== e && e ? 0 : new Date().getTime();
}
function rsa_acceptshareeautopushes() {
  var e = !1,
    r,
    a;
  for (r in g_shareeautopushes) {
    e = !0;
    break;
  }
  !e ||
    !lploggedin ||
    lploggedinoffline ||
    null == g_local_key ||
    new Date().getTime() - lpshareeautopushests < 1e4 ||
    (rsa_setshareeautopushests(),
    console_log("RSA : rsa_acceptshareeautopushes : calling readrsaprivatekeyhexfromdb()"),
    readrsaprivatekeyhexfromdb(!1, null, null, rsa_acceptshareeautopushes2));
}
function rsa_acceptshareeautopushes2(e) {
  var r = [],
    a;
  for (a in g_shareeautopushes)
    for (var s in g_shareeautopushes[a]) {
      var t = g_shareeautopushes[a][s],
        s = "",
        s;
      if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSADecrypt)
        var n = g_nplastpass.xCryptoRSADecrypt(e, t.sharekeyhexenc),
          s = AES.hex2bin(n);
      else {
        var n = new RSAKey();
        if (!parse_private_key(n, e)) return void console_error("Private key could not be parsed while auto accepting shares");
        s = n.decrypt(t.sharekeyhexenc);
      }
      "" != s && null != s && null != (s = reencryptShareeAutoPushes(s, t, a)) && (void 0 === r[a] && (r[a] = []), r[a].push(s));
    }
  var o = "cmd=" + LP.en("updateautoshareepushes") + "&from=" + LP.en("ffplugin"),
    p = 0,
    l = 0,
    a;
  for (a in r)
    for (var i in (++p, r[a])) {
      var c = "&share" + l,
        t,
        u;
      for (u in (t = r[a][i])) o += c + u + "=" + LP.en(t[u]);
      ++l;
    }
  (o += "&numupdates=" + LP.en(l)),
    0 < l
      ? ((lplastgetaccounts = 0), lpMakeRequest(base_url + "showacceptshare.php", o, rsa_acceptshareeautopushesresponse))
      : lpdbg("sharing", "lprsa_acceptshareeautopushes : no shareeautopushes so not issuing server request");
}
function rsa_acceptshareeautopushesresponse(e) {
  var r, a;
  4 == e.readyState &&
    (lpdbg("sharing", "lprsa_acceptshareeautopushesresponse : received response from server"),
    200 != e.status
      ? lpReportError("lprsa_acceptshareeautopushesresponse : request failed status=" + e.status)
      : null == e.responseXML || null == e.responseXML.documentElement
      ? lpReportError("lprsa_acceptshareeautopushesresponse : request failed xml invalid A text=" + e.responseText)
      : (a = e.responseXML.documentElement.getElementsByTagName("ok")) && 0 != a.length
      ? get_accts()
      : lpReportError("lprsa_acceptshareeautopushesresponse : request failed xml invalid B text=" + e.responseText));
}
function rsa_shareeautopushesresponse(e, r) {
  var a, s, t, n, o, p, l, p;
  return (
    4 == e.readyState &&
    200 == e.status &&
    null != e.responseXML &&
    null != e.responseXML.documentElement &&
    void 0 !== r &&
    null != r &&
    ((a = new Date().getTime()),
    (s = r.url),
    (t = r.aid),
    (n = r.handler),
    (o = r.param),
    (p = r.postdata),
    null ==
      (l =
        null == (l = void 0 !== r.acct ? r.acct : null)
          ? void 0 !== g_sites[t]
            ? g_sites[t]
            : void 0 !== g_securenotes[t]
            ? g_securenotes[t]
            : null
          : l) && (l = { name: "", group: "", username: "", password: "", extra: "", url: "" }),
    0 != (p = createShareeAutoPushesResponse(e, r, l))) &&
    ((a = (new Date().getTime() - a) / 1e3),
    lpdbg("sharing", "Finished RSA encryption. Total time taken = " + a + " seconds"),
    lpdbg("sharing", "Reissuing request to " + s + " with postdata=" + p),
    (lplastgetaccounts = 0),
    lpMakeRequest(s, p, n, null, o || r),
    !0)
  );
}
function lprsa_encryptdata(e, r) {
  var a = null;
  if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSAEncrypt) a = g_nplastpass.xCryptoRSAEncrypt(e, r);
  else {
    var s = new RSAKey();
    if (!parse_public_key(s, e)) return console_error("Private key could not be parsed while auto accepting shares"), !1;
    a = s.encrypt(AES.hex2bin(r));
  }
  return "" == r || (null != a && "" != a) ? a : (lpReportError("lprsa_encryptdata : Failed to rsaencrypt data using publickeyhex"), !1);
}
function lprsa_rsadecrypt(e) {
  if ("" == lp_rsaprivatekeyhex) return null;
  var r;
  if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSADecrypt) r = g_nplastpass.xCryptoRSADecrypt(lp_rsaprivatekeyhex, e);
  else {
    var a = new RSAKey();
    if (!parse_private_key(a, lp_rsaprivatekeyhex)) return null;
    var a = a.decrypt(e),
      r = AES.bin2hex(a).toUpperCase();
  }
  return r;
}
function lprsa_encryptmultiple(e) {
  for (var r = JSON.parse(e), a = 0, s; a < r.length; ++a) {
    if (void 0 === r[a].valuehex || void 0 === r[a].publickeyhex || "" == r[a].publickeyhex) return null;
    if (have_nplastpass() && "function" == typeof g_nplastpass.xCryptoRSAEncrypt)
      r[a].valuehexenc = g_nplastpass.xCryptoRSAEncrypt(r[a].publickeyhex, r[a].valuehex);
    else {
      var t = new RSAKey();
      if (!parse_public_key(t, r[a].publickeyhex)) return null;
      r[a].valuehexenc = t.encrypt(AES.hex2bin(r[a].valuehex)).toUpperCase();
    }
    if ("" == r[a].valuehexenc || null == r[a].valuehexenc) return null;
  }
  return JSON.stringify(r);
}
