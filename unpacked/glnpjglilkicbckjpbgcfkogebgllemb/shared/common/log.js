var Log = (function (f) {
  var s,
    n = new Date();
  if ("undefined" != typeof window) {
    var o = ["debug", "info", "warn", "error"],
      t = ["assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
    window.console || (window.console = {}), window.console.log || (window.console.log = function () {});
    for (var r = 0; r < t.length; ++r) window.console[t[r]] || (window.console[t[r]] = function () {});
    for (r = 0; r < o.length; ++r) window.console[o[r]] || (window.console[o[r]] = window.console.log);
  }
  var i = {
      DEBUG: function (n) {
        console.debug(n);
      },
      INFO: function (n) {
        console.info(n);
      },
      WARN: function (n) {
        console.warn(n);
      },
      ERROR: function (n) {
        console.error(n);
      }
    },
    e = { DEBUG: function () {}, INFO: function () {}, WARN: function () {}, ERROR: function () {} },
    u = f ? i : e,
    c = [],
    g = [],
    a = n;
  function d(n) {
    var o = new Date(),
      t = o - a,
      t = 150 < t ? t + "(ms): " + n.msg : n.msg;
    try {
      u[n.type](t);
    } catch (r) {
      return;
    }
    a = o;
  }
  function l(n) {
    if (0 == n.length) return null;
    var o = n[0];
    if ("string" != typeof o) throw "not a string: " + o;
    for (var t = [], r = 1; r < n.length; r++) {
      var i = n[r];
      t.push(
        "object" == typeof i
          ? JSON.stringify(i, function (n, o) {
              if ("string" != typeof n) return o;
              n = n.toLowerCase();
              return -1 != n.indexOf("password") || ("value" == n && ("p" == this.key || "password" == this.type))
                ? (function r(n) {
                    if ("[object Array]" !== Object.prototype.toString.call(n)) return StringUtil.hashCode(n);
                    for (var o = "[", t = 0; t < n.length; t++) o = o + r(n[t]) + ",";
                    return o + "]";
                  })(o)
                : o;
            })
          : i
      );
    }
    return StringUtil.format(o, t);
  }
  function w(n, o) {
    var t = { type: n, msg: l(o) };
    if ((d(t), Okta.Config.startrecordingLogs && g.push(t), f))
      if (s == undefined) c.push(t);
      else if (s && s.passwords) {
        c.push(t);
        for (var r = s.passwords, i = 0; i < r.length; i++) {
          var e = r[i];
          if (-1 == "password".indexOf(e) && -1 != t.msg.indexOf(e)) {
            e = "audit fail for: " + e;
            throw (d({ type: "ERROR", msg: e }), e);
          }
        }
      }
  }
  return {
    setLogging: function (n) {
      u = n ? i : e;
    },
    skipAudit: function () {
      d({ type: "DEBUG", msg: l(arguments) });
    },
    debug: function () {
      w("DEBUG", arguments);
    },
    info: function () {
      w("INFO", arguments);
    },
    warn: function () {
      w("WARN", arguments);
    },
    error: function () {
      w("ERROR", arguments);
    },
    getAuditString: function () {
      for (var n = [], o = 0; o < c.length; o++) {
        var t = c[o];
        n.push(t.type + ":" + t.msg);
      }
      return n.join("\n");
    },
    getRecordedLogs: function () {
      return g;
    },
    init: function (n) {
      !1 === (s = n) && (c = []);
    }
  };
})(Okta.Config.enabledLogging);
