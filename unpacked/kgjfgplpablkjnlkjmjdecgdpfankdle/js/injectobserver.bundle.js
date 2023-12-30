!(function () {
  if (window.XMLHttpRequest) {
    var e = window.XMLHttpRequest;
    window.XMLHttpRequest = function () {
      var t,
        n = new e();
      let o = "",
        r = document.querySelector("#zoom-quick2adv-number");
      r && null !== r && (o = r.textContent);
      let i = "",
        a = "";
      function l(e, t) {
        var n = (function (e) {
          for (var t = {}, n = e.split("&"), o = 0; o < n.length; o++) {
            var r = n[o].split("=");
            t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
          }
          return t;
        })(e);
        return void 0 !== n[t] ? n[t] : null;
      }
      function s(e) {
        var t = null;
        try {
          (e = (e = e.replace(/\n/g, " ")).substring(e.indexOf("'") + 1, e.length)), (t = JSON.parse(e));
        } catch (e) {}
        return t;
      }
      function c(e) {
        let t = null,
          n = null,
          o = "";
        try {
          let r = e;
          o = r[5];
          let i = r[35][1][0],
            a = r[36][1][0],
            l = JSON.parse(document.querySelector("#timezonedata").innerText)[0];
          (n = r[35][2]), n || (n = document.querySelector("#xTimezone").innerText);
          let s = 0;
          for (let e = 0, t = l.length; e < t; e++) {
            let t = l[e];
            if (t[0] === n) {
              s = 36e5 * parseInt(t[1].slice(4, 7));
              let e = 6e4 * parseInt(t[1].slice(8, 10));
              e > 0 && (s = s > 0 ? s + e : s - e);
              break;
            }
          }
          (i = new Date(i + s).toJSON().split(".000Z")[0].replace(/-/g, "").replace(/:/g, "")),
            (a = new Date(a + s).toJSON().split(".000Z")[0].replace(/-/g, "").replace(/:/g, "")),
            (t = i + "/" + a);
        } catch (e) {
          console.log("Dates conversion failed: " + e);
        }
        return { dates: t, timezone: n, topic: o };
      }
      function u() {
        let e = document.querySelector("#zoom_repeat_edit_flag"),
          t = null;
        return e && ((t = e.textContent), (e.textContent = "0")), t;
      }
      function d(e) {
        let t = (function () {
          let e = document.querySelector("#zoom_recurring_edit_flag")?.textContent;
          return e || a ? (e !== a ? e || a : e) : "";
        })();
        if ("ALL" === t || "TAIL" === t) {
          if (e.indexOf("_R") > -1)
            try {
              let { sourceId: t, date: n } = y(i),
                { sourceId: o, date: r } = y(e);
              if (t && n && r && t === o && n >= r) return !0;
            } catch (e) {}
        } else if (i === e) return !0;
        return !1;
      }
      function f() {
        let e = (function () {
          let e,
            t = document.querySelector("#zoom_recurring_edit_flag");
          return t && ((e = t.textContent), (t.textContent = "")), e;
        })();
        return !m(i) || "ALL" === e || "TAIL" === e || "ALL" === a || "TAIL" === a || void 0;
      }
      function m(e) {
        return !!e && new RegExp("^\\w{10,}(_[A-Za-z]?\\d{8}[A-Za-z]\\d{6}[A-Za-z]?)$", "").test(e);
      }
      function p(e) {
        return e ? e.replace(/_[A-Za-z]?\d{8}[A-Za-z]\d{6}[A-Za-z]?/g, "") : "";
      }
      function y(e) {
        if (e) {
          let t = new RegExp("^(\\w{10,})_[A-Za-z]?(\\d{8})[A-Za-z]\\d{6}[A-Za-z]?$", "").exec(e);
          if (t && t.length) return { sourceId: t[1], date: t[2] };
        }
        return { sourceId: "", date: "" };
      }
      var g = n.open;
      function h(e) {
        if (Array.isArray(e)) {
          let t = e[0];
          if (Array.isArray(t) && t.length)
            for (let e = t.length - 1; e > -1; e--) {
              let n = t[e];
              if (Array.isArray(n)) {
                let e = n[0];
                if (e && e.length > 10) return (i = e), (a = Array.isArray(n[2]) ? "TAIL" : 1 === n[1] ? "ALL" : ""), !0;
              }
            }
        }
        return !1;
      }
      n.open = function (e, n, r) {
        return (
          (this._path = n),
          this.addEventListener(
            "readystatechange",
            function () {
              if (4 === this.readyState) {
                var e = l(t, "action");
                if ("event" === n && "CREATE" === e) {
                  var r = s(this.responseText),
                    a = "";
                  if (
                    ((g = document.querySelector("#zoom-quick2adv-number")) && null !== g && (a = g.textContent),
                    r && void 0 !== r[0] && void 0 !== r[0][1] && "" !== a)
                  ) {
                    let e = r[7][1];
                    "string" == typeof e && e.length > 20 && window.postMessage({ calendarId: e, action: "event", number: a }, "*"),
                      (document.querySelector("#zoom-quick2adv-number").textContent = "");
                  }
                } else if ("deleteevent" === n) {
                  var y = l(t, "eid");
                  y && y.length < 128 && window.postMessage({ calendarId: y, action: "deleteevent" }, "*");
                } else if ("event" === n && "EDIT" === e) {
                  var g;
                  (g = document.querySelector("#zoom-quick2adv-number")) && g.textContent && (g.textContent = "");
                  let e = l(t, "eid"),
                    n = l(t, "dates"),
                    o = document.querySelector("#zoom_edit_event_flag").textContent;
                  if (((document.querySelector("#zoom_edit_event_flag").textContent = "0"), "0" === o && e && n)) {
                    let t = null;
                    try {
                      let e = s(this.responseText);
                      t = JSON.parse(e[0][1])[22][3][0];
                    } catch (e) {}
                    window.postMessage({ calendarId: e, action: "updatetimeandtimezone", dates: n, timezone: t }, "*");
                  }
                } else {
                  if ("sync.sync" !== n) return;
                  {
                    let e = null;
                    try {
                      e = JSON.parse(l(t, "f.req"));
                    } catch (e) {}
                    let n = s(this.responseText),
                      r = null,
                      a = null,
                      y = null,
                      g = null,
                      v = null,
                      x = null,
                      A = null,
                      z = null;
                    try {
                      A = n[0][2][3];
                    } catch (e) {}
                    try {
                      (a = n[0][2][11][2]), (z = atob(a));
                    } catch (e) {}
                    if (Array.isArray(A) && (z || i)) {
                      let e,
                        t = m(i),
                        n = (t && p(i)) || "";
                      for (let o = A.length - 1; o > -1; o--) {
                        let r = A[o];
                        if (Array.isArray(r)) {
                          let o = r[1];
                          if (Array.isArray(o) && o.length) {
                            for (let r = o.length - 1; r > -1; r--) {
                              let a = o[r];
                              if (Array.isArray(a)) {
                                let o = a[3];
                                if (Array.isArray(o) && o[0]) {
                                  let r = o[0];
                                  if (t) {
                                    if (d(r)) {
                                      v = o;
                                      break;
                                    }
                                    r === n && (e = o);
                                  } else if ((z && z.indexOf(r) > -1) || (!z && r === i)) {
                                    v = o;
                                    break;
                                  }
                                }
                              }
                            }
                            !v && e && (v = e);
                          }
                        }
                        if (v) {
                          x = r[0];
                          break;
                        }
                      }
                    }
                    if ((Array.isArray(v) && ((r = v[2]), (y = v[1]), (g = v[0])), r)) {
                      let e = r.split("eid=")[1],
                        t = !1,
                        n = null,
                        a = null,
                        l = [];
                      if (g) {
                        let e = v[20];
                        if (Array.isArray(e)) {
                          a = [];
                          for (var h = 0; h < e.length; h++)
                            try {
                              let t = e[h][0],
                                n = e[h][1];
                              t && a.push(t), n && l.push(n);
                            } catch (e) {}
                        }
                      }
                      if (z && g) {
                        let r = "";
                        try {
                          r = z.split(g)[1];
                        } catch (e) {
                          console.log("Markup field format changes!");
                        }
                        if (r.length < 6) {
                          let t = "",
                            r = document.querySelector("#zoom-quick2adv-number");
                          if (
                            (o ? (t = o) : r && (t = r.textContent),
                            e &&
                              t &&
                              ("string" == typeof e &&
                                e.length > 20 &&
                                (window.postMessage({ calendarId: e, action: "event", number: t, event_baseid: g }, "*"), (n = t)),
                              r && o == r.textContent && (r.textContent = ""),
                              "1" === u() || l.length))
                          ) {
                            let { dates: e, timezone: n, topic: o } = c(v);
                            e &&
                              window.postMessage(
                                {
                                  event_baseid: g,
                                  action: "updatetimeandtimezone",
                                  dates: e,
                                  timezone: n,
                                  topic: o,
                                  number: t,
                                  zoomrooms: l.join(",")
                                },
                                "*"
                              );
                          }
                          i
                            ? (i != g &&
                                (console.log("The create request occurs, but sendBaseid is not equal to nid!"),
                                window.postMessage(
                                  {
                                    event_baseid: g,
                                    action: "recordZmlog",
                                    msgType: 7,
                                    msg: {
                                      msg: "The create request occurs, but sendBaseid is not equal to nid!",
                                      nid: g,
                                      sendBaseid: i,
                                      filename: "zm-observer.js"
                                    },
                                    operaType: 3
                                  },
                                  "*"
                                )),
                              (i = ""))
                            : (console.log("The create request occurs, but sendBaseid has no value!"),
                              window.postMessage(
                                {
                                  event_baseid: g,
                                  action: "recordZmlog",
                                  msgType: 7,
                                  msg: {
                                    msg: "The create request occurs, but sendBaseid has no value!",
                                    nid: g,
                                    filename: "zm-observer.js"
                                  },
                                  operaType: 3
                                },
                                "*"
                              ));
                        } else {
                          let n = document.querySelector("#zoom-quick2adv-number");
                          n && n.textContent && (n.textContent = "");
                          let r = document.querySelector("#zoom_edit_event_flag"),
                            i = null;
                          r && ((i = r.textContent), (r.textContent = "0"));
                          let a = "1" === u();
                          if (("0" === i || a || l.length) && e) {
                            let { dates: e, timezone: n, topic: r } = c(v);
                            e &&
                              (window.postMessage(
                                {
                                  event_baseid: g,
                                  action: "updatetimeandtimezone",
                                  dates: e,
                                  timezone: n,
                                  topic: r,
                                  number: a ? o : "",
                                  zoomrooms: l.join(",")
                                },
                                "*"
                              ),
                              "0" === i && (t = !0));
                          }
                        }
                      } else if (g) {
                        if ("1" === u() || l.length) {
                          let { dates: e, timezone: t, topic: n } = c(v);
                          e &&
                            window.postMessage(
                              {
                                event_baseid: g,
                                action: "updatetimeandtimezone",
                                dates: e,
                                timezone: t,
                                topic: n,
                                number: o,
                                zoomrooms: l.join(",")
                              },
                              "*"
                            );
                        }
                        let e = document.querySelector("#zoom-quick2adv-number");
                        e && e.textContent && (e.textContent = "");
                        let t = document.querySelector("#zoom_edit_event_flag");
                        t && (t.textContent = "0");
                      }
                      if (g && !t && Array.isArray(a) && f()) {
                        let e = g;
                        if (("string" == typeof g && g.indexOf("_") > -1 && (e = p(g)), n))
                          a.length &&
                            window.postMessage({ meetingNumber: n, event_baseid: e, action: "saveInvitee", invitee: a, reFilter: !1 }, "*");
                        else {
                          let t,
                            n = v[7];
                          try {
                            t = v[64][1];
                          } catch (e) {}
                          (n || t) &&
                            window.postMessage(
                              { event_baseid: e, action: "saveInvitee", invitee: a, reFilter: !0, joinUrl: n, descText: t },
                              "*"
                            );
                        }
                      }
                    } else if (2 === y) {
                      let e = !1;
                      try {
                        z.indexOf(x) > -1 && (e = !0);
                      } catch (e) {}
                      if (!e) return;
                      try {
                        n[0][2][3][1][1][0][3][34][0] && (e = !1);
                      } catch (e) {}
                      try {
                        n[0][2][3][3][1][0][3][2] && (e = !1);
                      } catch (e) {}
                      try {
                        n[0][2][3][1][1][1][3][2] && (e = !1);
                      } catch (e) {}
                      try {
                        void 0 === n[0][2][4][0] && (e = !1);
                      } catch (e) {}
                      e && window.postMessage({ event_baseid: g, action: "deleteevent" }, "*");
                    }
                  }
                }
              }
            },
            !0
          ),
          g.apply(this, arguments)
        );
      };
      var v = n.send;
      return (
        (n.send = function (e) {
          var n = document.querySelector("#zoom-quick-desc"),
            o = document.querySelector("#zoom-quick-location");
          if ("sync.sync" === this._path && "string" == typeof e && e.indexOf("f.req=") >= 0) {
            let t = e.split("&"),
              i = null;
            for (let e = 0, n = t.length; e < n; e++) {
              let n = t[e];
              if (n.indexOf("f.req=") >= 0) {
                try {
                  i = JSON.parse(decodeURIComponent(n.split("f.req=")[1]));
                } catch (e) {}
                break;
              }
            }
            if (Array.isArray(i)) {
              let t = !1,
                a = -2;
              try {
                let e = i[0]?.[4];
                if (Array.isArray(e) && e.length)
                  for (var r = e.length - 1; r > -1; r--) {
                    let t = e[r]?.[2];
                    if (h(t)) {
                      a = r;
                      break;
                    }
                  }
              } catch (e) {}
              if (n && "" !== n.textContent) {
                try {
                  a > -1 && ((i[0][4][a][2][0][2][3][1][2][1] = decodeURIComponent(n.textContent)), (t = !0), (n.textContent = ""));
                } catch (e) {}
                t ||
                  (function (e) {
                    window.postMessage(
                      {
                        event_baseid: " ",
                        action: "recordZmlog",
                        msgType: 7,
                        msg: {
                          msg: "[Zoom Chrome Extension] Sync.Sync Request format exception: " + JSON.stringify(e),
                          filename: "zm-observer.js"
                        },
                        operaType: 3
                      },
                      "*"
                    );
                  })(i);
              }
              if (o && "" !== o.textContent)
                try {
                  a > -1 && ((i[0][4][a][2][0][2][3][3][11] = [null, null, [[[null, o.textContent]]]]), (t = !0), (o.textContent = ""));
                } catch (e) {}
              t && (e = e.replace(/f\.req\=[\w\W]*?(?=&)/, "f.req=" + encodeURIComponent(JSON.stringify(i))));
            }
          } else
            "event" === this._path &&
              (n && "" !== n.textContent && (e = e.replace(/&details&/g, "&details=" + n.textContent + "&")),
              o && "" !== o.textContent && (e = e.replace(/&location&/g, "&location=" + o.textContent + "&")));
          return (t = e), v.apply(this, [].slice.call(arguments));
        }),
        n
      );
    };
    for (let t in e) window.XMLHttpRequest[t] = e[t];
  }
})();
