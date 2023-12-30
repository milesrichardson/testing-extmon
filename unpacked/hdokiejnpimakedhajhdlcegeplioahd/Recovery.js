var Recovery = (function () {
  "use strict";
  function e(e, a) {
    var n = opendb(),
      t,
      s,
      r,
      o;
    createDataTable(n),
      n &&
        ((t = e ? SHA256(e) : g_username_hash),
        (s = e || g_username),
        (r = function (e, n) {
          var t = "",
            t,
            n;
          "" != (t = 0 < n.rows.length ? n.rows.item(0).data : t)
            ? ((t = AES.hex2bin(t)), (n = make_lp_hash(fix_username(s), t)), a(n))
            : a("");
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
            (n
              .transaction("LastPassData", "readonly")
              .objectStore("LastPassData")
              .openCursor(IDBKeyRange.only(db_prepend(t) + "_otp")).onsuccess = function (e) {
              var e = e.target.result;
              e ? ((o.rows[o.rows.length] = e.value), o.rows.length++, e.continue()) : r(null, o);
            }))
          : n.transaction(function (e) {
              e.executeSql("SELECT * FROM LastPassData WHERE username_hash=? and type=?", [db_prepend(t), "otp"], r, function (e, n) {
                console_log(n);
              });
            }));
  }
  return { getOtpHash: e };
})();
