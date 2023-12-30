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
        l = document.querySelector("#zoom-whiteboard-record");
      if (l && null !== l)
        try {
          i = JSON.parse(l.textContent);
        } catch (e) {}
      let a = "",
        s = "",
        c = "https://calendar.google.com";
      function d(e, t) {
        var n = (function (e) {
          for (var t = {}, n = e.split("&"), o = 0; o < n.length; o++) {
            var r = n[o].split("=");
            t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
          }
          return t;
        })(e);
        return void 0 !== n[t] ? n[t] : null;
      }
      function u(e) {
        var t = null;
        try {
          (e = (e = e.replace(/\n/g, " ")).substring(e.indexOf("'") + 1, e.length)), (t = JSON.parse(e));
        } catch (e) {}
        return t;
      }
      function f(e) {
        let t = null,
          n = null,
          o = "";
        try {
          let r = e;
          o = r[5];
          let i = r[35][1][0],
            l = r[36][1][0],
            a = JSON.parse(document.querySelector("#timezonedata").innerText)[0];
          (n = r[35][2]), n || (n = document.querySelector("#xTimezone").innerText);
          let s = 0;
          for (let e = 0, t = a.length; e < t; e++) {
            let t = a[e];
            if (t[0] === n) {
              s = 36e5 * parseInt(t[1].slice(4, 7));
              let e = 6e4 * parseInt(t[1].slice(8, 10));
              e > 0 && (s = s > 0 ? s + e : s - e);
              break;
            }
          }
          (i = new Date(i + s).toJSON().split(".000Z")[0].replace(/-/g, "").replace(/:/g, "")),
            (l = new Date(l + s).toJSON().split(".000Z")[0].replace(/-/g, "").replace(/:/g, "")),
            (t = i + "/" + l);
        } catch (e) {
          console.log("Dates conversion failed: " + e);
        }
        return { dates: t, timezone: n, topic: o };
      }
      function m() {
        let e = document.querySelector("#zoom_repeat_edit_flag"),
          t = null;
        return e && ((t = e.textContent), (e.textContent = "0")), t;
      }
      function p(e) {
        let t = (function () {
          let e = document.querySelector("#zoom_recurring_edit_flag")?.textContent;
          return e || s ? (e !== s ? e || s : e) : "";
        })();
        if ("ALL" === t || "TAIL" === t) {
          if (e.indexOf("_R") > -1)
            try {
              let { sourceId: t, date: n } = v(a),
                { sourceId: o, date: r } = v(e);
              if (t && n && r && t === o && n >= r) return !0;
            } catch (e) {}
        } else if (a === e) return !0;
        return !1;
      }
      function y() {
        let e = (function () {
          let e,
            t = document.querySelector("#zoom_recurring_edit_flag");
          return t && ((e = t.textContent), (t.textContent = "")), e;
        })();
        return !g(a) || "ALL" === e || "TAIL" === e || "ALL" === s || "TAIL" === s || void 0;
      }
      function g(e) {
        return !!e && new RegExp("^\\w{10,}(_[A-Za-z]?\\d{8}[A-Za-z]\\d{6}[A-Za-z]?)$", "").test(e);
      }
      function h(e) {
        return e ? e.replace(/_[A-Za-z]?\d{8}[A-Za-z]\d{6}[A-Za-z]?/g, "") : "";
      }
      function v(e) {
        if (e) {
          let t = new RegExp("^(\\w{10,})_[A-Za-z]?(\\d{8})[A-Za-z]\\d{6}[A-Za-z]?$", "").exec(e);
          if (t && t.length) return { sourceId: t[1], date: t[2] };
        }
        return { sourceId: "", date: "" };
      }
      var x = n.open;
      function w(e) {
        if (Array.isArray(e)) {
          let t = e[0];
          if (Array.isArray(t) && t.length)
            for (let e = t.length - 1; e > -1; e--) {
              let n = t[e];
              if (Array.isArray(n)) {
                let e = n[0];
                if (e && e.length > 10) return (a = e), (s = Array.isArray(n[2]) ? "TAIL" : 1 === n[1] ? "ALL" : ""), !0;
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
                var e = d(t, "action");
                if ("event" === n && "CREATE" === e) {
                  var r = u(this.responseText),
                    l = "";
                  if (
                    ((v = document.querySelector("#zoom-quick2adv-number")) && null !== v && (l = v.textContent),
                    r && void 0 !== r[0] && void 0 !== r[0][1] && "" !== l)
                  ) {
                    let e = r[7][1];
                    "string" == typeof e && e.length > 20 && window.postMessage({ calendarId: e, action: "event", number: l }, c),
                      (document.querySelector("#zoom-quick2adv-number").textContent = "");
                  }
                } else if ("deleteevent" === n) {
                  var s = d(t, "eid");
                  s && s.length < 128 && window.postMessage({ calendarId: s, action: "deleteevent" }, c);
                } else if ("event" === n && "EDIT" === e) {
                  var v;
                  (v = document.querySelector("#zoom-quick2adv-number")) && v.textContent && (v.textContent = "");
                  let e = d(t, "eid"),
                    n = d(t, "dates"),
                    o = document.querySelector("#zoom_edit_event_flag").textContent;
                  if (((document.querySelector("#zoom_edit_event_flag").textContent = "0"), "0" === o && e && n)) {
                    let t = null;
                    try {
                      let e = u(this.responseText);
                      t = JSON.parse(e[0][1])[22][3][0];
                    } catch (e) {}
                    window.postMessage({ calendarId: e, action: "updatetimeandtimezone", dates: n, timezone: t }, c);
                  }
                } else {
                  if ("sync.sync" !== n) return;
                  {
                    let e = null;
                    try {
                      e = JSON.parse(d(t, "f.req"));
                    } catch (e) {}
                    let n = u(this.responseText),
                      r = null,
                      l = null,
                      s = null,
                      v = null,
                      w = null,
                      z = null,
                      q = null,
                      A = null;
                    try {
                      q = n[0][2][3];
                    } catch (e) {}
                    try {
                      (l = n[0][2][11][2]), (A = atob(l));
                    } catch (e) {}
                    if (Array.isArray(q) && (A || a)) {
                      let e,
                        t = g(a),
                        n = (t && h(a)) || "";
                      for (let o = q.length - 1; o > -1; o--) {
                        let r = q[o];
                        if (Array.isArray(r)) {
                          let o = r[1];
                          if (Array.isArray(o) && o.length) {
                            for (let r = o.length - 1; r > -1; r--) {
                              let i = o[r];
                              if (Array.isArray(i)) {
                                let o = i[3];
                                if (Array.isArray(o) && o[0]) {
                                  let r = o[0];
                                  if (t) {
                                    if (p(r)) {
                                      w = o;
                                      break;
                                    }
                                    r === n && (e = o);
                                  } else if ((A && A.indexOf(r) > -1) || (!A && r === a)) {
                                    w = o;
                                    break;
                                  }
                                }
                              }
                            }
                            !w && e && (w = e);
                          }
                        }
                        if (w) {
                          z = r[0];
                          break;
                        }
                      }
                    }
                    if ((Array.isArray(w) && ((r = w[2]), (s = w[1]), (v = w[0])), r)) {
                      let e = r.split("eid=")[1],
                        t = !1,
                        n = null,
                        l = null,
                        s = null,
                        d = [];
                      if (v) {
                        let e = w[20];
                        if (Array.isArray(e)) {
                          s = [];
                          for (var x = 0; x < e.length; x++)
                            try {
                              let t = e[x][0],
                                n = e[x][1];
                              t && s.push(t), n && d.push(n);
                            } catch (e) {}
                        }
                      }
                      if (A && v) {
                        let r = "";
                        try {
                          r = A.split(v)[1];
                        } catch (e) {
                          console.log("Markup field format changes!");
                        }
                        if (r.length < 6) {
                          let t = "",
                            r = document.querySelector("#zoom-quick2adv-number");
                          o ? (t = o) : r && (t = r.textContent);
                          let s = "",
                            u = document.querySelector("#zoom-whiteboard-record");
                          if (i) s = i;
                          else if (u)
                            try {
                              s = JSON.parse(u.textContent);
                            } catch (e) {}
                          if (e && (t || s)) {
                            if ("string" == typeof e && e.length > 20) {
                              let o = { calendarId: e, action: "event", number: t || "", event_baseid: v };
                              s?.docId &&
                                ((o.scheduleTime = s.scheduleTime || ""), (o.wb_doc_id = s.docId), (o.wb_permission = s.permission)),
                                window.postMessage(o, c),
                                t && (n = t),
                                s && (l = s);
                            }
                            if ((r && o == r.textContent && (r.textContent = ""), u && i))
                              try {
                                let e = JSON.parse(u.textContent);
                                i.docId == e.docId && i.permission == e.permission && (u.textContent = "");
                              } catch (e) {}
                            if ("1" === m() || d.length) {
                              let { dates: e, timezone: n, topic: o } = f(w);
                              e &&
                                window.postMessage(
                                  {
                                    event_baseid: v,
                                    action: "updatetimeandtimezone",
                                    dates: e,
                                    timezone: n,
                                    topic: o,
                                    number: t,
                                    zoomrooms: d.join(",")
                                  },
                                  c
                                );
                            }
                          }
                          a
                            ? (a != v &&
                                (console.log("The create request occurs, but sendBaseid is not equal to nid!"),
                                window.postMessage(
                                  {
                                    event_baseid: v,
                                    action: "recordZmlog",
                                    msgType: 7,
                                    msg: {
                                      msg: "The create request occurs, but sendBaseid is not equal to nid!",
                                      nid: v,
                                      sendBaseid: a,
                                      filename: "zm-observer.js"
                                    },
                                    operaType: 3
                                  },
                                  c
                                )),
                              (a = ""))
                            : (console.log("The create request occurs, but sendBaseid has no value!"),
                              window.postMessage(
                                {
                                  event_baseid: v,
                                  action: "recordZmlog",
                                  msgType: 7,
                                  msg: {
                                    msg: "The create request occurs, but sendBaseid has no value!",
                                    nid: v,
                                    filename: "zm-observer.js"
                                  },
                                  operaType: 3
                                },
                                c
                              ));
                        } else {
                          let n = document.querySelector("#zoom-quick2adv-number");
                          n && n.textContent && (n.textContent = "");
                          let r = document.querySelector("#zoom-whiteboard-record");
                          r && r.textContent && (r.textContent = "");
                          let i = document.querySelector("#zoom_edit_event_flag"),
                            l = null;
                          i && ((l = i.textContent), (i.textContent = "0"));
                          let a = "1" === m();
                          if (("0" === l || a || d.length) && e) {
                            let { dates: e, timezone: n, topic: r } = f(w);
                            e &&
                              (window.postMessage(
                                {
                                  event_baseid: v,
                                  action: "updatetimeandtimezone",
                                  dates: e,
                                  timezone: n,
                                  topic: r,
                                  number: a ? o : "",
                                  zoomrooms: d.join(",")
                                },
                                c
                              ),
                              "0" === l && (t = !0));
                          }
                        }
                      } else if (v) {
                        if ("1" === m() || d.length) {
                          let { dates: e, timezone: t, topic: n } = f(w);
                          e &&
                            window.postMessage(
                              {
                                event_baseid: v,
                                action: "updatetimeandtimezone",
                                dates: e,
                                timezone: t,
                                topic: n,
                                number: o,
                                zoomrooms: d.join(",")
                              },
                              c
                            );
                        }
                        let e = document.querySelector("#zoom-quick2adv-number");
                        e && e.textContent && (e.textContent = "");
                        let t = document.querySelector("#zoom_edit_event_flag");
                        t && (t.textContent = "0");
                      }
                      if (v && !t && Array.isArray(s) && y()) {
                        let e = v;
                        if (("string" == typeof v && v.indexOf("_") > -1 && (e = h(v)), n || l))
                          s.length &&
                            window.postMessage(
                              {
                                meetingNumber: n,
                                wb_doc_id: l?.docId,
                                wb_permission: l?.permission,
                                event_baseid: e,
                                action: "saveInvitee",
                                invitee: s,
                                reFilter: !1
                              },
                              c
                            );
                        else {
                          let t,
                            n = w[7];
                          try {
                            t = w[64][1];
                          } catch (e) {}
                          (n || t) &&
                            window.postMessage(
                              { event_baseid: e, action: "saveInvitee", invitee: s, reFilter: !0, joinUrl: n, descText: t },
                              c
                            );
                        }
                      }
                    } else if (2 === s) {
                      let e = !1;
                      try {
                        A.indexOf(z) > -1 && (e = !0);
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
                      e && window.postMessage({ event_baseid: v, action: "deleteevent" }, c);
                    }
                  }
                }
              }
            },
            !0
          ),
          x.apply(this, arguments)
        );
      };
      var z = n.send;
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
                l = -2;
              try {
                let e = i[0]?.[4];
                if (Array.isArray(e) && e.length)
                  for (var r = e.length - 1; r > -1; r--) {
                    let t = e[r]?.[2];
                    if (w(t)) {
                      l = r;
                      break;
                    }
                  }
              } catch (e) {}
              if (n && "" !== n.textContent) {
                try {
                  l > -1 && ((i[0][4][l][2][0][2][3][1][2][1] = decodeURIComponent(n.textContent)), (t = !0), (n.textContent = ""));
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
                      c
                    );
                  })(i);
              }
              if (o && "" !== o.textContent)
                try {
                  l > -1 && ((i[0][4][l][2][0][2][3][3][11] = [null, null, [[[null, o.textContent]]]]), (t = !0), (o.textContent = ""));
                } catch (e) {}
              t && (e = e.replace(/f\.req\=[\w\W]*?(?=&)/, "f.req=" + encodeURIComponent(JSON.stringify(i))));
            }
          } else
            "event" === this._path &&
              (n && "" !== n.textContent && (e = e.replace(/&details&/g, "&details=" + n.textContent + "&")),
              o && "" !== o.textContent && (e = e.replace(/&location&/g, "&location=" + o.textContent + "&")));
          return (t = e), z.apply(this, [].slice.call(arguments));
        }),
        n
      );
    };
    for (let t in e) window.XMLHttpRequest[t] = e[t];
  }
})();
