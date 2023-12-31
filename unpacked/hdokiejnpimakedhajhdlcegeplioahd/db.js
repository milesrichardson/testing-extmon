var g_db = null,
  g_indexeddb = !1;
function opendb() {
  try {
    if (getBG().g_db_transaction_tested && !getBG().g_db_transaction_worked) return null;
    if (null != g_db) return g_db;
    var e;
    window.openDatabase
      ? (g_db = openDatabase("lp", "1.0", "LastPass Local Database", 2e5)) || console_log("opendb: Failed to open database!")
      : window.indexedDB
      ? (((e = indexedDB.open("lp")).onerror = function (e) {
          indexedDB.deleteDatabase("lp"), console_log("opendb: Database request failed!");
        }),
        (e.onsuccess = function (e) {
          (g_indexeddb = !0), (g_db = e.target.result);
        }),
        (e.onupgradeneeded = function (e) {
          var a = e.target.result.createObjectStore("LastPassData", { keyPath: "usertype" });
          a.createIndex("username_hash", "username_hash", { unique: !1 }),
            (a = e.target.result.createObjectStore("LastPassSavedLogins2", { keyPath: "username" })).createIndex(
              "last_login",
              "last_login",
              { unique: !1 }
            ),
            (a = e.target.result.createObjectStore("LastPassPreferences", { keyPath: "userkey" })).createIndex(
              "username_hash",
              "username_hash",
              { unique: !1 }
            );
        }))
      : console_log("opendb: open database is not available!");
  } catch (e) {
    console_log("opendb: Caught exception while opening database: " + e.message);
  }
  return g_db;
}
function createDataTable(e) {
  e &&
    !g_indexeddb &&
    e.transaction(function (e) {
      e.executeSql(
        "CREATE TABLE IF NOT EXISTS LastPassData(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, username_hash varchar(255), type varchar(20), data TEXT, CONSTRAINT usertype UNIQUE (username_hash, type))",
        [],
        function (e, a) {},
        function (e, a) {
          console_log("createDataTable" + a);
        }
      );
    });
}
function createSavedLoginsTable(e) {
  e &&
    !g_indexeddb &&
    (e.transaction(function (e) {
      e.executeSql(
        "CREATE TABLE IF NOT EXISTS LastPassSavedLogins(username varchar(255) PRIMARY KEY, password varchar(255), last_login datetime)",
        [],
        function (e, a) {},
        function (e, a) {
          console_log("createSavedLoginsTable1" + a),
            alert(
              "executeSQL access is broken. Safari has a bug with Private Browsing that causes this issue.  Restarting Safari typically fixes it. Error: " +
                a.message +
                "\nCode: " +
                a.code
            );
        }
      );
    }),
    e.transaction(function (e) {
      e.executeSql(
        "CREATE TABLE IF NOT EXISTS LastPassSavedLogins2(username varchar(255) PRIMARY KEY, password text, last_login datetime, protected tinyint(1))",
        [],
        function (e, a) {},
        function (e, a) {
          console_log("createSavedLoginsTable2" + a);
        }
      );
    }),
    e.transaction(function (e) {
      e.executeSql(
        "SELECT * FROM LastPassSavedLogins order by last_login desc",
        [],
        function (e, a) {
          for (var t = 0; t < a.rows.length; t++) {
            var n = a.rows.item(t).username;
            e.executeSql(
              "REPLACE INTO LastPassSavedLogins2 (username, password, last_login) VALUES(?, ?, ?)",
              [n, a.rows.item(t).password, a.rows.item(t).last_login],
              function (e, a) {},
              function (e, a) {
                console_log(a);
              }
            ),
              e.executeSql(
                "DELETE FROM LastPassSavedLogins",
                [],
                function (e, a) {},
                function (e, a) {
                  console_log(a);
                }
              );
          }
        },
        function (e, a) {
          console_log("createSavedLoginsTable6" + a);
        }
      );
    }));
}
function lpSaveData(a, t) {
  var e;
  !lpdisableoffline || ("key" != t && "accts" != t)
    ? null == g_username || "" == g_username
      ? console_log("db.js : lpSaveData : returning B")
      : "" != a || !LPISLOC || ("key" != t && "accts" != t)
      ? (createDataTable((e = opendb())),
        e
          ? (console_log("db.js : lpSaveData : writing data : type=" + t),
            g_indexeddb
              ? e
                  .transaction("LastPassData", "readwrite")
                  .objectStore("LastPassData")
                  .put({ username_hash: db_prepend(g_username_hash), type: t, data: a, usertype: db_prepend(g_username_hash) + "_" + t })
              : e.transaction(function (e) {
                  e.executeSql(
                    "REPLACE INTO LastPassData (username_hash, type, data) VALUES (?, ?, ?)",
                    [db_prepend(g_username_hash), t, a],
                    function (e, a) {
                      console_log("db.js : lpSaveData : success : type=" + t);
                    },
                    function (e, a) {
                      console_log("db.js : lpSaveData : failed error=" + a);
                    }
                  );
                }))
          : console_log("server.js : lpSaveData : returning D"))
      : console_log("db.js : lpSaveData : returning C")
    : console_log("db.js : lpSaveData : returning A");
}
function createPrefsTable(e) {
  e &&
    !g_indexeddb &&
    e.transaction(function (e) {
      e.executeSql(
        "CREATE TABLE IF NOT EXISTS LastPassPreferences (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, username_hash varchar(255), prefname varchar(255), prefvalue varchar(255), CONSTRAINT userkey UNIQUE (username_hash, prefname))",
        [],
        function (e, a) {},
        function (e, a) {
          console_log("createPrefsTable: " + a);
        }
      );
    });
}
function deletesavedpw() {
  var a = opendb();
  createSavedLoginsTable(a),
    a &&
      (g_indexeddb
        ? (a
            .transaction("LastPassSavedLogins2", "readonly")
            .objectStore("LastPassSavedLogins2")
            .openCursor(IDBKeyRange.only(g_username)).onsuccess = function (e) {
            e.target.result &&
              "" != e.target.result.value.password &&
              ((e.target.result.value.password = ""),
              a.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put(e.target.result.value),
              (g_master_password_saved = !1));
          })
        : a.transaction(function (e) {
            e.executeSql(
              "UPDATE LastPassSavedLogins2 SET password = '' WHERE username = ?",
              [g_username],
              function (e, a) {
                g_master_password_saved = !1;
              },
              function (e, a) {
                console_log("deletesavedpw:" + a);
              }
            );
          }));
}
function protect_data(a, e, t, n) {
  var e;
  !a.length || (e && !g_is_win) || is_chrome_portable()
    ? n(a)
    : ((e = "") != a || g_is_mac) && have_binary_function("protect_data")
    ? call_binary_function("protect_data", a, t, function (e) {
        n((e = "" == (e = "string" != typeof e ? "" : e) ? a : e));
      })
    : n((e = "" == e ? a : e));
}
function unprotect_data(a, e, t) {
  var e;
  void 0 === a
    ? t(null)
    : !a.length || (e && !g_is_win) || is_chrome_portable()
    ? t(a)
    : (e = "") != a && have_binary_function("unprotect_data")
    ? call_binary_function("unprotect_data", a, function (e) {
        t((e = (e = "string" != typeof e ? "" : e) == a ? "" : e));
      })
    : t((e = e == a ? "" : e));
}
function set_default_login_username(t) {
  var a = opendb(),
    n;
  createSavedLoginsTable(a),
    a &&
      ((n = new Date().getTime()),
      g_indexeddb
        ? (a.transaction("LastPassSavedLogins2", "readonly").objectStore("LastPassSavedLogins2").openCursor(IDBKeyRange.only(t)).onsuccess =
            function (e) {
              var e,
                e = e.target.result ? e.target.result.value : { username: t, password: "", last_login: n, protected: 0 };
              a.transaction("LastPassSavedLogins2", "readwrite").objectStore("LastPassSavedLogins2").put(e);
            })
        : a.transaction(function (e) {
            e.executeSql(
              "INSERT OR IGNORE INTO LastPassSavedLogins2 (username, password, last_login) VALUES (?, '', ?)",
              [t, n],
              function (e, a) {
                e.executeSql("UPDATE LastPassSavedLogins2 SET last_login = ? WHERE username = ?", [n, t]);
              },
              function (e, a) {
                console_log(a);
              }
            );
          }));
}
