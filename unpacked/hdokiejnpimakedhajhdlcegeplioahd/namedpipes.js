var g_np_init = !1,
  namedpipeobserverfunction = null,
  g_np_gotack = !1;
function lpnp_init() {
  var e, a, n;
  g_np_init ||
    ((e = !1),
    !(g_is_win || g_is_mac || g_is_linux) || g_issafari_appext
      ? (g_np_init = !1)
      : have_binary()
      ? is_chrome_portable()
        ? (g_np_init = !1)
        : (lpdbg("namedpipes", "lpnp_init : initializing named pipe server"),
          (namedpipeobserverfunction = function (e, a, n) {
            "lpxpcom" == a && process_ipc_msg(n, "pipes");
          }),
          call_binary_function("StartNamedPipeServer"),
          (g_np_init = !0),
          setTimeout(function () {
            lpnp_notify("logincheck");
          }, 1e3))
      : lpdbg("namedpipes", "named pipe server could not be started"));
}
function lpnp_get_javascript_message() {
  have_binary_function("get_javascript_message") &&
    call_binary_function("get_javascript_message", function (e) {
      0 < e.length && namedpipeobserverfunction(null, "lpxpcom", e),
        setTimeout(
          function () {
            lpnp_get_javascript_message();
          },
          0 == e.length ? 2e3 : 0
        );
    });
}
function lpnp_notify(e, a) {
  var n, e;
  (LPISLOC && "refresh_local" != e && "local_pwchange" != e) ||
    ((n = !1),
    reduxApp.getPreference("enablenamedpipes") &&
      ((e = lpnp_xml_msg(e, a)),
      lp_ws && lp_ws.isconnected() && !have_nplastpass() && !have_native_messaging()
        ? lp_ws.send(e)
        : g_np_init &&
          have_binary_function("SendNamedPipeMessageToAll") &&
          (lpdbg("namedpipes", "broadcasting " + e), call_binary_function("SendNamedPipeMessageToAll", e))));
}
function lpnp_xml_msg(e, a) {
  var n = "<" + e,
    t;
  if (void 0 !== a) for (t in a) n += " " + t + '="' + lpxmlescape(a[t]) + '"';
  return (n += "/>");
}
function lpnp_send_internal_logincheck_ack() {
  lploggedin &&
    getuuid(function (e) {
      var a = new Array();
      (a.data0 = lp_phpsessid),
        (a.data1 = g_username),
        (a.data2 = g_identity),
        have_binary() || ((a.data3 = e), (a.data4 = lpCreateKeyFileData()), (a.data5 = get_key_iterations(g_username))),
        lpnp_notify("internal_logincheck_ack", a);
    }, g_username_hash);
}
function process_ipc_msg(e, a) {
  try {
    var n = "",
      t = e.match(/^<([^ \/]+)/),
      l,
      i;
    if (t) {
      if (
        ((n = t[1]),
        "websocket" == a && "launch" != n && (have_nplastpass() || have_native_messaging() || !reduxApp.getPreference("enablenamedpipes")))
      )
        return;
    } else if ("{" == e[0]) {
      try {
        native_messaging_message(LPJSON.parse(e), null, !0);
      } catch (e) {}
      return;
    }
    if (!LPISLOC || "refresh_local" == n || "local_pwchange" == n)
      switch ((lpdbg("namedpipes", "received cmd=" + n + " data=" + e), n)) {
        case "pipeinitdone":
          call_binary_function("NamedPipeNumClients", function (e) {
            var a;
            1 < e
              ? ((a = new Array()),
                setTimeout(
                  function () {
                    lpnp_notify("internal_logincheck", a);
                  },
                  g_is_win ? 0 : 1e3
                ),
                setTimeout(function () {
                  lp_StartLogin();
                }, g_is_win && 2e3))
              : lp_StartLogin();
          });
          break;
        case "logout":
          console_log("LOGGING OFF : namedpipes : logoff"), lplogoff(!0, "namedpipes1");
          break;
        case "login":
          var s = e.match(/data0=\"([^\"]*)\"/),
            l = e.match(/data1=\"([^\"]*)\"/),
            p,
            _;
          s && l && ((p = lpxmlunescape(s[1])), (_ = lpxmlunescape(l[1])), "" != p) && "" != _ && LP_do_login(p, _);
          break;
        case "refresh":
          refresh_windows();
          break;
        case "switchidentity":
          (l = e.match(/data0=\"([^\"]*)\"/)) && ((i = lpxmlunescape(l[1])), switch_identity(i, !0, !1, !0));
          break;
        case "launch":
          var l = e.match(/id=\"([^\"]*)\"/),
            c = e.match(/existing=\"([^\"]*)\"/),
            r,
            o;
          l &&
            ((r = lpxmlunescape(l[1])),
            ((o = new Array()).data0 = r),
            lpnp_notify("launchok", o),
            c ? fillaid(r) : (launch(r), browser_focus()));
          break;
        case "internal_logincheck":
          lpnp_send_internal_logincheck_ack();
          break;
        case "internal_logincheck_ack":
          g_np_gotack = !0;
          var g = e.match(/data0=\"([^\"]*)\"/),
            p = e.match(/data1=\"([^\"]*)\"/),
            d = e.match(/data2=\"([^\"]*)\"/),
            u = e.match(/data3=\"([^\"]*)\"/),
            m = e.match(/data4=\"([^\"]*)\"/),
            h = e.match(/data5=\"([^\"]*)\"/),
            f,
            b;
          !lploggedin && g && p
            ? (set_default_login_username(lpxmlunescape(p[1])),
              (f = g_username_hash),
              (b = g_username),
              (g_username = lpusername = lpxmlunescape(p[1])),
              (g_username_hash = SHA256(lpxmlunescape(p[1]))),
              (g_identity = "" + (d ? lpxmlunescape(d[1]) : "")),
              reduxApp.setExtensionPreferences({ identity: d ? lpxmlunescape(d[1]) : "" }),
              null != b && ((g_username = lpusername = b), (g_username_hash = lpusername_hash = f)),
              (lp_phpsessid = lpxmlunescape(g[1])),
              rsa_setpendingsharests(),
              have_binary() ||
                (u && 1 < u.length && u[1].length && localStorage_setItem(db_prepend("lp.uid"), lpxmlunescape(u[1])),
                m && 1 < m.length && m[1].length && lpSaveData(lpxmlunescape(m[1]), "key"),
                h && 1 < h.length && h[1].length && localStorage_setItem(g_username_hash + "_key_iter", h[1])),
              have_binary_function("read_file")
                ? call_binary_function("read_file", db_prepend(SHA256(lpxmlunescape(p[1])) + "_lpall.slps"), function (e) {
                    var a = function (a) {
                      var e, n;
                      "string" == typeof a &&
                        "" != a &&
                        ((e = opendb()), createDataTable(e), e) &&
                        ((n = db_prepend(SHA256(lpxmlunescape(p[1])))),
                        g_indexeddb
                          ? (e
                              .transaction("LastPassData", "readwrite")
                              .objectStore("LastPassData")
                              .put({ username_hash: n, type: "key", data: a, usertype: n + "_key" }).onsuccess = function (e) {
                              lp_StartLogin(!0);
                            })
                          : e.transaction(function (e) {
                              e.executeSql(
                                "REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, 'key', ?)",
                                [n, a],
                                function (e, a) {
                                  lp_StartLogin(!0);
                                },
                                function (e, a) {
                                  console_log(a);
                                }
                              );
                            }));
                    };
                    "string" != typeof e || "" == e
                      ? call_binary_function("read_file", db_prepend(SHA256(lpxmlunescape(p[1])) + "_lpall.lps"), function (e) {
                          "string" == typeof e &&
                            "" != e &&
                            protect_data(e, !0, null, function (e) {
                              call_binary_function("write_file", db_prepend(SHA256(lpxmlunescape(p[1])) + "_lpall.slps"), e),
                                call_binary_function("delete_file", db_prepend(SHA256(lpxmlunescape(p[1])) + "_lpall.lps"));
                            }),
                            a(e);
                        })
                      : unprotect_data(e, !0, a);
                  })
                : ((g_loginstarted = !1), lp_StartLogin(!0, lp_phpsessid)))
            : lploggedin &&
              p &&
              g_username != lpxmlunescape(p[1]) &&
              (console_log("LOGGING OFF : namedpipes : different username"), lplogoff(!1, "namedpipes2"));
          break;
        case "refresh_local":
          var y = e.match(/data0=\"([^\"]*)\"/);
          y && lpxmlunescape(y[1]) == g_username_hash && (console_log("named_pipes: refresh_local reparsing"), get_accts_local());
          break;
        case "local_pwchange":
          console_log("LOGGING OFF : namedpipes : local_pwchange"), lplogoff(!1, "namedpipes3");
          break;
        case "wscapabilities":
          var v = e.match(/functions=\"([^\"]*)\"/);
          v && 1 < v.length && (console_log("Got Capabilities Message: " + v[1]), (g_ws_functions = v[1].split(",")));
          break;
        default:
          lpdbg("namedpipes", "received unknown message. data=" + e);
      }
  } catch (e) {}
}
