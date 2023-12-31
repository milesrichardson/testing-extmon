var REPORT_ERROR_URL = "/lmiapi/report-error",
  logger = {
    error: function (t, e) {
      this.log("ERROR", t, e);
    },
    warning: function (t, e) {
      this.log("WARNING", t, e);
    },
    info: function (t, e) {
      this.log("INFO", t, e);
    },
    debug: function (t, e) {
      this.log("DEBUG", t, e);
    },
    notice: function (t, e) {
      this.log("NOTICE", t, e);
    },
    alert: function (t, e) {
      this.log("ALERT", t, e);
    },
    critical: function (t, e) {
      this.log("CRITICAL", t, e);
    },
    emergency: function (t, e) {
      this.log("EMERGENCY", t, e);
    },
    log: function (t, e, o) {
      var n = REPORT_ERROR_URL,
        e = { message: e, context: o, level: t };
      try {
        var i = new XMLHttpRequest();
        "object" == typeof bg && "function" == typeof bg.get && "string" == typeof bg.get("base_url")
          ? i.open("POST", bg.get("base_url").replace(/\/$/, "") + n)
          : i.open("POST", n),
          i.setRequestHeader("Content-type", "application/json"),
          i.send(JSON.stringify(e));
      } catch (t) {
        console.warn("Error reporting log", t, e);
      }
    }
  };
