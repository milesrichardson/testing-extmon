var lp_ws,
  g_ws_functions = [
    "alert",
    "protect_data",
    "unprotect_data",
    "can_check_idle",
    "get_idle_ms",
    "StartNamedPipeServer",
    "SendNamedPipeMessageToAll",
    "NamedPipeNumClients",
    "get_javascript_message",
    "write_file",
    "read_file",
    "delete_file",
    "delete_files_by_extension",
    "file_exists",
    "get_chrome_passwords",
    "get_safari_passwords",
    "get_opera_passwords",
    "get_registry_value",
    "is_chrome_portable",
    "winbio_supported",
    "winbio_store_data",
    "winbio_has_data",
    "winbio_verify_user",
    "winbio_delete_default_login",
    "winbio_has_fingerprints",
    "winbio_launch_enrollment",
    "get_path",
    "setup_basicauth_timer",
    "fill_basicauth",
    "accessibility_enabled",
    "GetStringResource",
    "GetImageResource",
    "xCryptoRSAEncrypt",
    "xCryptoRSADecrypt",
    "xGenerateKeys",
    "encrypt",
    "decrypt",
    "encryptcbc",
    "decryptcbc",
    "copy_to_clipboard",
    "clear_clipboard_if",
    "choose_file",
    "save_file",
    "wlan_works",
    "wlan_pull_csv",
    "wlan_push",
    "wlan_has_exe",
    "run_file",
    "get_version",
    "get_build_date",
    "get_build_time",
    "debug_windows",
    "pbkdf2",
    "get_function_names"
  ];
function lp_ws_lib() {
  var e = "ws",
    t = "127.0.0.1",
    n = 19536,
    i = "lp1",
    s = null,
    _ = !1,
    o = [];
  function c() {
    lp_ws.isconnected() || lp_ws.setup(!0);
  }
  function a(e) {
    console.info("WS CONNECTED"),
      lpnp_init(),
      ws_send_message({ cmd: "get_function_names", argcount: 0 }, function (e) {
        g_ws_functions = e.split(",");
      });
  }
  function r(e) {
    setTimeout(c, 5e3);
  }
  function l(e) {
    _ ? process_ipc_msg(e.data, "websocket") : o.push(e);
  }
  (this.setup = function (e) {
    try {
      (s = new WebSocket("ws://" + t + ":" + n, i)) && ((s.onopen = a), (s.onmessage = l), (s.onclose = r));
    } catch (e) {
      setTimeout(function () {
        c();
      }, 1e3);
    }
  }),
    (this.isconnected = function () {
      return !(!s || s.readyState != s.OPEN);
    }),
    (this.send = function (e) {
      if (!lp_ws.isconnected()) return !1;
      try {
        s.send(e);
      } catch (e) {
        return !1;
      }
      return !0;
    }),
    (this.startProcessing = function () {
      if (((_ = !0), 0 < o.length)) {
        for (var e = 0, t = o.length; e < t; ++e) l(o[e]);
        o = [];
      }
      lpnp_notify("internal_logincheck"),
        setTimeout(function () {
          g_np_gotack || httptest();
        }, 3e3);
    });
}
lp_ws = lp_ws || new lp_ws_lib();
