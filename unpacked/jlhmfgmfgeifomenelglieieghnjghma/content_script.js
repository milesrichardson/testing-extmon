var ContentScript = (function (p) {
  return (
    (p.id = chrome.runtime.id),
    (p.port = null),
    (p.token_ = ""),
    (p.hashList = []),
    (p.uuid_ = ""),
    (p.numberOfFailures_ = 0),
    (p.cwsDeprecated_ = !1),
    (p.initHashList = function () {
      p.hashList.push("X4WKTojPTBCkUep3mJ4lISkJd5xjgCy7t3WOV9ekcYQ="),
        p.hashList.push("64tUupzAFkz0sO9FdxdKzXPU1M+kX5addpE8cY8KwMY="),
        p.hashList.push("Y1UGgNTP1Q1s+ApMq8hsYXhEOhDHsCr5/q5bbvBFP/c="),
        p.hashList.push("eaShT5BXYGibkON42a7ewRxsy4+PSGtTMh2fG54Zf7A="),
        p.hashList.push("bzT9bgmTETuVqCgVxPDSjrnTqC6N14zH8kVD/pHJBdw="),
        p.hashList.push("Y1KRUKo4HpiaxizSb9jeqQR7pL82VYHg0CMQHD0EHHI="),
        p.hashList.push("1bIZVrqEKHJbytsxxLWDyOXWT4CQO7K46V4lOryJIJo=");
    }),
    (p.uuid = function () {
      var n = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (n + 16 * Math.random()) % 16 | 0;
        return (n = Math.floor(n / 16)), ("x" === e ? t : (7 & t) | 8).toString(16);
      });
    }),
    (p.filterLog = function (e) {
      var t = {};
      for (var n in e) {
        var r = e[n];
        if (n.match(/location\d+_url|szhomepage\d+/i))
          try {
            var a = document.createElement("a");
            if (
              ((a.href = atob(r)),
              a.hostname
                .trim()
                .toLowerCase()
                .match(/webex\.com$|webex\.com\.cn$|^_self$/i))
            )
              continue;
          } catch (e) {}
        else if ("clientparam_value" === n.trim().toLowerCase()) {
          var o = new DOMParser().parseFromString(atob(r), "text/xml");
          if (o && "root" === o.childNodes[0].nodeName) continue;
        } else if (r.match(/^\d+$|^\d+\.\d+$/)) continue;
        t[n] = r;
      }
      return t;
    }),
    (p.sendLog = function (t, e) {
      try {
        var n = "string" == typeof t.message ? JSON.parse(t.message) : t.message;
        (n.ext_message_type = t.message_type),
          (n.ext_tracking_id = p.uuid_),
          (n.domain = window.location.protocol + "//" + window.location.host),
          (n.illegal = !!e),
          chrome.runtime.sendMessage(n, function (e) {});
      } catch (e) {
        chrome.runtime.sendMessage(t.message, function (e) {});
      }
    }),
    (p.verifyScriptCall = function (e) {
      var t = /^(WebEx_|As[ADEPS]|RA[AM])|^(Ex|In)it|^(FinishC|Is[NS]|JoinM|[NM][BCS][JRUC]|Set|Name|Noti|Trans|Update)|^(td|SCSP)$/;
      if (20480 < e.length) return !1;
      for (var n = e.split(";"), r = 0; r < n.length; r++) {
        var a = n[r].trim(),
          o = "",
          s = a.indexOf("=");
        if (0 <= s) {
          if ("szCookie" !== a.substring(0, s).trim()) return !1;
          a = a.substring(s + 1).trim();
        }
        0 <= (s = a.indexOf("(")) && ((o = a.substring(s + 1)), (a = a.substring(0, s).trim()));
        var i = o.split(",");
        if (1024 < o.length || 20 < i.length) return !1;
        if (0 < a.length && !a.match(t)) return !1;
        if (a.match(/2$/)) return !1;
        for (var c = p.crypto(a), m = 0; m < p.hashList.length; m++) if (c === p.hashList[m]) return !1;
      }
      return !0;
    }),
    (p.verify = function (e) {
      if ("connect" !== e.message_type && "disconnect" !== e.message_type && "launch_meeting" !== e.message_type) return !1;
      if ("launch_meeting" !== e.message_type) return !0;
      try {
        if ("string" != typeof e.message) return !1;
        if (e.message.includes("\\u0000")) return !1;
        var t = JSON.parse(e.message);
        if (navigator.platform.match(/win/i)) {
          if ((o = t.GpcExtName) && "atgpcext" !== (o = o.trim()).toLowerCase() && "atgpcext" !== atob(o).toLowerCase().trim()) return !1;
          var n = t.GpcUnpackName;
          if (n && "atgpcdec" !== (n = n.trim()).toLowerCase() && "atgpcdec" !== atob(n).toLowerCase().trim()) return !1;
          var r = t.GpcInitCall;
          if (r && !p.verifyScriptCall(atob(r.trim()))) return !1;
          var a = t.GpcExitCall;
          if (a && !p.verifyScriptCall(atob(a.trim()))) return !1;
        } else if (navigator.platform.match(/mac/i)) {
          var o;
          if ("atgpcext64" !== (o = t.GpcExtName.trim()).toLowerCase() && "atgpcext64" !== atob(o).toLowerCase().trim()) return !1;
        } else if (!navigator.platform.match(/linux/i)) return !1;
        var s = t.GpcComponentName.toLowerCase().trim();
        return null == s.match(/\.dll$|\.bundle$|\.app$/) && (s = (s = atob(t.GpcComponentName)).toLowerCase().trim()), !0;
      } catch (e) {}
      return !1;
    }),
    (p.verifyVersion = function (e, t) {
      if ((console.info("[ContentScript] verifyVersion: cwsVersion=", e, "gpcVersion=", t), !e || !t)) return !1;
      try {
        var n = /^(\d+)\.(\d+)(\.\d+)+$/.exec(e);
        if (navigator.platform.match(/win/i)) {
          if (parseInt(t) < 3) return !1;
          if (n.length < 2 || parseInt(n[1]) < 10040) return !1;
        } else {
          if (!navigator.platform.match(/mac/i)) return !1;
          if (parseInt(t) < 1) return !1;
          if (n.length < 3 || parseInt(n[2]) < 40) return !1;
        }
        return !0;
      } catch (e) {
        return console.error("[ContentScript] verifyVersion: err=", e), !1;
      }
    }),
    (p.handleStateChanged = function (e) {
      console.info("[ContentScript] handleStateChanged: result=", e);
      var t = {
        timestamp: new Date().toUTCString(),
        token: p.token_,
        message_type: "state_changed",
        message: {
          ExtState: { result: e, reason: e ? "ok" : "ExtensionNotInstalled" },
          HostState: { result: !1, reason: "HostNotInstalled" }
        }
      };
      p.handleNativeMessage(t);
    }),
    (p.handleNativeMessage = function (e) {
      if (
        (console.info("[ContentScript] handleNativeMessage: message=", e, "self.cwsDeprecated_=", p.cwsDeprecated_),
        ("hello_ack" !== e.message_type && "launch_meeting_started" !== e.message_type && "launch_meeting_ack" !== e.message_type) ||
          p.sendLog(e),
        "disconnect_ack" !== e.message_type || !p.cwsDeprecated_)
      ) {
        if ("hello_ack" === e.message_type) {
          var t = navigator.platform.match(/win/i) ? e.cwsversion : navigator.platform.match(/mac/i) ? e.message.cwsversion : null,
            n = navigator.platform.match(/win/i) ? e.gpcversion : navigator.platform.match(/mac/i) ? e.message.gpcversion : null;
          if (!p.verifyVersion(t, n))
            return (
              p.numberOfFailures_++,
              (e = {
                timestamp: new Date().toUTCString(),
                token: p.token_,
                message_type: "disconnect",
                message: "Specified native messaging host deprecated."
              }),
              p.cwsDeprecated_ || p.handleNativeMessage(e),
              (p.cwsDeprecated_ = !0),
              void p.sendMessage(e)
            );
          (p.numberOfFailures_ = 0), (p.cwsDeprecated_ = !1);
        }
        var r = new CustomEvent("native_message", { detail: e });
        window.parent.document.dispatchEvent(r);
      }
    }),
    (p.handleNativeDisconnect = function (e) {
      console.info("[ContentScript] port.onDisconnect: self.port=", p.port, "self.cwsDeprecated_=", p.cwsDeprecated_);
      var t = { timestamp: new Date().toUTCString(), token: p.token_, message_type: "disconnect", message: "disconnect" };
      (p.port = null), p.cwsDeprecated_ || p.handleNativeMessage(t);
    }),
    (p.sendMessage = function (e, t) {
      console.info("[ContentScript] sendMessage: self.port=", p.port), console.info("[ContentScript] sendMessage: message=", e);
      try {
        if (!p.verify(e)) {
          "launch_meeting" === e.message_type && p.sendLog(e, !0);
          var n = {
            timestamp: new Date().toUTCString(),
            token: p.token_,
            message_type: "error",
            message: { error_code: 1005, error_message: "BadDocShow" }
          };
          if ((p.handleNativeMessage(n), null != p.port)) {
            var r = { timestamp: new Date().toUTCString(), token: p.token_, message_type: "disconnect", message: "disconnect" };
            p.port.postMessage(r);
          }
          return;
        }
        "launch_meeting" === e.message_type && (e.domain = window.location.protocol + "//" + window.location.host),
          null != p.port && p.port.postMessage(e),
          "launch_meeting" === e.message_type && p.sendLog(e);
      } catch (e) {
        n = {
          timestamp: new Date().toUTCString(),
          token: p.token_,
          message_type: "error",
          message: { error_code: -1, error_message: e.toString() }
        };
        p.handleNativeMessage(n);
      }
    }),
    (p.connectPort = function (e) {
      var t = window.location.host;
      if ((console.info("[ContentScript] connectPort: extId=", e, "self.port=", p.port, "host=", t), !p.port))
        try {
          (p.port = chrome.runtime.connect(e, { name: p.token_ })),
            console.info("[ContentScript] connectPort: self.port=", p.port, "now=", performance.now()),
            null != p.port &&
              (p.port.onMessage.addListener(p.handleNativeMessage), p.port.onDisconnect.addListener(p.handleNativeDisconnect));
        } catch (e) {
          console.info("[ContentScript] connectPort: err=", e), ContentScript.handleStateChanged(!1);
        }
    }),
    (p.crypto = function (e) {
      return CryptoJS.SHA256(e).toString(CryptoJS.enc.Base64);
    }),
    (p.init = function () {
      console.info("[ContentScript] init: chrome.runtime.id=", chrome.runtime.id),
        p.initHashList(),
        (p.uuid_ = p.uuid()),
        document.addEventListener("connect", function (e) {
          console.info("[ContentScript] connect: e=", e), (p.token_ = e.detail.token), p.connectPort(chrome.runtime.id);
        }),
        document.addEventListener("message", function (e) {
          console.info("[ContentScript] message: e=", e), p.sendMessage(e.detail, p.handleNativeMessage);
        });
    }),
    p
  );
})(ContentScript || {});
ContentScript.init(), ContentScript.handleStateChanged(!0);
