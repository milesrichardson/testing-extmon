var CPWbatch,
  g_batchpagealive = !0,
  g_batchpagealiveinterval = -1,
  g_cpw_batchstates = {},
  CPWbatch = CPWbatch || new CPWbatch_lib(),
  g_cpw_batch_aid = null,
  g_cpwfast = !1,
  g_cpw_aid_queue = [],
  g_cpw_status_update_lastmsg = "",
  F_OK = 1,
  F_FAIL = 2,
  F_TIMEOUT = 4,
  F_PENDING = 8,
  F_ALL = F_OK | F_FAIL | F_TIMEOUT | F_PENDING,
  P_RESET = !0,
  F_STARTED = "started",
  F_DONE = "done",
  F_NONE = null;
function close_cpw_tabs() {
  g_ischrome &&
    get_selected_tab(null, function (t) {
      cpwbot_close_cpw_tab_handler(t);
    });
}
function cpwbot_close_cpw_tab_handler(t) {
  var e = gettabid(t);
  null === g_cpw_server_initiated_tabid ||
    null === t ||
    (e != CPWbot_bg.originating_tabid && e != CPWbot_bg.destination_tabid) ||
    (g_ischrome
      ? chrome.tabs.update(g_cpw_server_initiated_tabid, { active: !0 })
      : g_isfirefox && activate_tabid(g_cpw_server_initiated_tabid)),
    CPWbot_bg &&
      (null !== CPWbot_bg.originating_tabid &&
        (g_ischrome
          ? void 0 !== chrome.tabs.remove && chrome.tabs.remove(CPWbot_bg.originating_tabid, function () {})
          : g_isfirefox && close_tabid(CPWbot_bg.originating_tabid)),
      null !== CPWbot_bg.destination_tabid) &&
      (CPWbatch && CPWbatch.deregister_worker(CPWbot_bg.destination_tabid),
      g_ischrome
        ? void 0 !== chrome.tabs.remove &&
          chrome.tabs.remove(CPWbot_bg.destination_tabid, function () {
            chrome.runtime.lastError && debug && L(chrome.runtime.lastError);
          })
        : g_isfirefox && close_tabid(CPWbot_bg.destination_tabid));
}
function start_pwchange_from_server(t, e) {
  if ((debug && L("running start_pwchange_from_server for aid=" + e + " batchstate=" + CPWbatch.cpw_get_batchjob_state()), !lploggedin))
    return !1;
  CPWbatch && CPWbatch.cpw_get_batchjob_state() && CPWbatch.update_last_batch_timestamp();
  var _ = !0,
    a,
    i;
  return cpwbot_preinit(), dopwchange(e, !0, null, _);
}
function end_pwchange_from_server(t, e) {
  var _ = cpwbot_getpwchangestate();
  "FAIL" != _ &&
    "CAPTCHA" != _ &&
    "DONE" != _ &&
    "OK" != _ &&
    "TIMEOUT" != _ &&
    0 != _ &&
    null !== _ &&
    (CPWbatch && CPWbatch.cpw_get_batchjob_state()
      ? CPWbot_bg && e == CPWbot_bg.getpwchangeaid()
        ? (L("halting for aid=" + e + " current_state=" + _), cpwbot_halt())
        : pass
      : cpwbot_halt()),
    g_isfirefox
      ? cpwbot_close_cpw_tab_handler(LP.mostRecent().getBrowser().selectedTab)
      : get_selected_tab(null, function (t) {
          cpwbot_close_cpw_tab_handler(t);
        });
}
function CPWbatch_lib() {
  var o = this,
    b = ((this.m_workers = {}), (this.m_max_workers = 1), (this.m_workermap = {}), 0),
    u = null,
    e = null,
    i = {};
  function _() {
    var t = 0,
      e = 0,
      _ = 0,
      a = 0,
      i = 0,
      c = 0,
      s = 0;
  }
  function t() {
    (this.m_workers = []), o.cpw_batchjob_reset_stats(), (e = null);
  }
  function c(t) {
    return "undefined" != typeof g_sites ? g_sites[t] : "undefined" != typeof lpaccts ? lpaccts[t] : null;
  }
  (this.register_worker = function (t, e) {
    var t;
    return (
      null !== this.m_workers &&
      null != t &&
      ((t = t.toString()),
      o.count_workers() >= this.m_max_workers
        ? (L("too many workers, " + o.count_workers() + " >= " + this.m_max_workers), !1)
        : (L("registered: worker " + t + " aid=" + e), (this.m_workers[t] = e), o.cpw_batchjob_mark_stats(F_PENDING), !0))
    );
  }),
    (this.count_workers = function () {
      if (null === this.m_workers) return -1;
      var t = 0,
        e;
      for (e in this.m_workers) this.m_workers.hasOwnProperty(e) && t++;
      return t;
    }),
    (this.deregister_worker = function (t) {
      var t;
      return (
        null !== this.m_workers &&
        null != t &&
        ((t = t.toString()),
        this.m_workers[t] && (L("deregistered: worker " + t + " from aid=" + this.m_workers[t]), delete this.m_workers[t]),
        o.cpw_batchjob_mark_stats(F_PENDING),
        !0)
      );
    }),
    (this.logout = function () {
      t(), (b = 0);
    }),
    (this.init = function () {
      t();
    }),
    (this.cpw_batchjob_mark_stats = function (t, e) {
      var _, a;
      return (
        !!i &&
        ((a = _ = null), e && e.aid && (a = e.aid), e && e.reset && (_ = e.reset), 0 != (t & F_ALL)) &&
        ((t & F_OK) == F_OK && (void 0 !== _ && _ ? (i.ok = 0) : i.ok++),
        (t & F_FAIL) == F_FAIL && (void 0 !== _ && _ ? (i.fail = 0) : i.fail++),
        (t & F_TIMEOUT) == F_TIMEOUT && (void 0 !== _ && _ ? (i.timeout = 0) : i.timeout++),
        (t & F_PENDING) == F_PENDING && (i.pending = void 0 !== _ && _ ? 0 : o.count_workers()),
        void 0 === i.byaid && (i.byaid = {}),
        a && (void 0 !== _ && _ ? delete i.byaid[a.toString()] : (i.byaid[a.toString()] = t)),
        !0)
      );
    }),
    (this.cpw_batchjob_reset_stats = function () {
      var t;
      return (
        (i = null),
        !!(i = new _()) &&
          (o.cpw_batchjob_mark_stats(F_ALL, { reset: P_RESET }), "undefined" != typeof Date) &&
          ((t = new Date().getTime()), (i.start_time = t), !0)
      );
    }),
    (this.cpw_batchjob_endjob_stats = function () {
      var t, e;
      return !!i && ((e = (t = new Date().getTime()) - i.start_time), (i.end_time = t), (i.elapsed = e), !0);
    }),
    (this.cpw_batchjob_getstats = function () {
      return i;
    }),
    (this.cpw_get_batchjob_state = function () {
      return e;
    }),
    (this.cpw_set_batchjob_state = function (t) {
      return void 0 === t ? (debug && L("batchjob state is missing"), !1) : ((e = t), !0);
    }),
    (this.cpw_get_batchjob_queue_length = function () {
      return !g_cpw_aid_queue || g_cpw_aid_queue.length < 0 || void 0 === g_cpw_aid_queue.length ? -1 : g_cpw_aid_queue.length;
    }),
    (this.cpw_queue_change_donext = function () {
      var t = o.cpw_queue_change_getnext(),
        e;
      if (null != (g_cpw_batch_aid = t)) {
        if (start_pwchange_from_server(g_cpw_server_initiated_tabid, t)) return t;
        CPWbatch.cpw_batchjob_mark_stats(F_FAIL, { aid: t });
        var _ = "failed to initiate pw change in batch job for aid=" + t;
        if ((o.conditional_website_status_update({ aid: t, msg: _ }), console_error(_), lploggedin && !c(t)))
          return verbose_log("bad aid=" + t + " proceed to next"), o.cpw_queue_change_donext();
        if (lploggedin && c(t)) return verbose_log("other error for aid=" + t + " proceed to next"), o.cpw_queue_change_donext();
      }
      return (
        setTimeout(function () {
          o.cpw_batch_end();
        }, 0),
        null
      );
    }),
    (this.cpw_queue_change_getnext = function () {
      var t;
      return !g_cpw_aid_queue || g_cpw_aid_queue.length <= 0 ? null : g_cpw_aid_queue.shift();
    }),
    (this.cpw_batch_end = function () {
      CPWbatch &&
        (o.cpw_set_batchjob_state(F_DONE),
        (g_cpwfast = !1),
        clearInterval(g_batchpagealiveinterval),
        (g_cpw_batch_aid = null),
        CPWbatch && (o.cpw_batchjob_endjob_stats(), o.cpw_batchjob_mark_stats(F_PENDING)),
        o.conditional_website_status_update({ msg: "done" }),
        setTimeout(function () {
          (g_cpw_aid_queue = []), (g_cpw_batchstates = {});
        }, 1e3));
    }),
    (this.cpw_queue_push = function (t) {
      return null != t && !isNaN(t) && (g_cpw_aid_queue.push(t), !0);
    }),
    (this.cpw_batch_wait = function (t) {
      if (CPWbatch) {
        var e = 3e5,
          _ = !1,
          a = !1,
          i = !1,
          c = g_cpw_batch_aid,
          s = cpwbot_getpwchangestate();
        switch (
          (L(sprintf("cpw_batch_wait wake up, state=%s batchstate=%s aid=%d\n", s, CPWbatch.cpw_get_batchjob_state(), c)),
          CPWbatch.cpw_get_batchjob_state() == F_DONE && (_ = !0),
          s)
        ) {
          case "TIMEOUT":
          case "CAPTCHA":
          case "FAIL":
          case "FAIL_PW_SAVED":
            i = _ = !0;
            break;
          case "OK":
          case "DONE":
            _ = !0;
            break;
          case "DOCAPTCHA":
            a = !0;
            break;
          case "preinit":
          case null:
            CPWbot_bg.get_failstate() && (i = _ = !0);
        }
        var n = new Date().getTime(),
          r =
            (0 < b &&
              e < n - b &&
              CPWbatch.cpw_get_batchjob_state() != F_DONE &&
              (_ || ((i = _ = !0), (s = "TIMEOUT"), L("BATCH JOB TIMED OUT"), CPWbatch.cpw_set_batchjob_state(F_DONE))),
            "");
        if (_) {
          if (
            (i
              ? "TIMEOUT" == s
                ? ((r = "TIMEOUT"), CPWbatch.cpw_batchjob_mark_stats(F_TIMEOUT, { aid: c }))
                : ((r = "FAIL"), CPWbatch.cpw_batchjob_mark_stats(F_FAIL, { aid: c }))
              : ((r = "OK"), CPWbatch.cpw_batchjob_mark_stats(F_OK, { aid: c })),
            CPWbatch.cpw_batchjob_mark_stats(F_PENDING),
            CPWbatch.cpw_get_batchjob_state() == F_DONE)
          )
            return;
          end_pwchange_from_server(g_cpw_server_initiated_tabid, c),
            o.conditional_website_status_update({ aid: c, msg: "finished change on " + c + " in current batchjob" }),
            t();
        } else pass;
        setTimeout(function () {
          o.cpw_batch_wait(t);
        }, 1001);
      }
    }),
    (this.cpw_batch_begin = function (t) {
      var t = t || !1,
        e = (o.cpw_reset_status_update_ack(), (g_cpw_status_update_lastmsg = ""), o.init(), !1),
        _,
        t;
      for (_ in g_cpw_aid_queue) {
        var a = g_cpw_aid_queue[_];
        g_cpw_aid_queue.hasOwnProperty(_) && c(a) && c(a).pwprotect && (e = !0);
      }
      !t && e
        ? security_prompt(function () {
            CPWbatch.cpw_batch_begin(!0);
          })
        : ((g_batchpagealive = !0),
          (g_batchpagealiveinterval = setInterval(function () {
            g_batchpagealive
              ? (console.error("heartbeat received. setting to false"), (g_batchpagealive = !1))
              : (console.error("Killing the batch update. No heartbeat received."), (g_cpw_aid_queue = []), cpwbot_halt());
          }, 3e4)),
          o.cpw_batchjob_reset_stats(),
          o.cpw_set_batchjob_state(F_STARTED),
          (t = o.cpw_queue_change_donext()),
          (g_cpw_batch_aid = t),
          setTimeout(function () {
            o.cpw_batch_wait(o.cpw_queue_change_donext);
          }, 1001));
    }),
    (this.conditional_website_status_update = function (e) {
      if (g_cpw_server_initiated_tabid) {
        var t;
        void 0 === (t = (e = e || {}).tabid) && (t = null);
        var _,
          a = (void 0 === (_ = e.recipe) && (_ = null), e.msg),
          i = (void 0 === a && (a = ""), e.aid),
          c = (void 0 === i && (i = CPWbot_bg.getpwchangeaid()), e.state),
          e = (void 0 === c && (c = cpwbot_getpwchangestate()), e.batchstate),
          c = (void 0 === e && (e = CPWbatch.cpw_get_batchjob_state()), c),
          i = i,
          c = (void 0 === g_cpw_batchstates[i] && (g_cpw_batchstates[i] = []), g_cpw_batchstates[i].push(c), e),
          s,
          e,
          n,
          r;
        if (null !== c && CPWbatch) {
          CPWbatch.cpw_batchjob_mark_stats(F_PENDING);
          try {
            s = LPJSON.stringify(CPWbatch.cpw_batchjob_getstats());
          } catch (t) {
            var e = "JSON error: " + t;
            CPWbot_bg && CPWbot_bg.warning_phone_home(e), console_error(e);
          }
        } else s = LPJSON.stringify(CPWbot_bg.get_timestamps());
        CPWbot_bg &&
          null === CPWbot_bg.originating_tabid &&
          null === CPWbot_bg.originating_tab &&
          null !== g_cpw_server_initiated_tabid &&
          null !== CPWbot_bg.destination_tabid &&
          null !== CPWbot_bg.destination_tab &&
          ((e = ""),
          g_isdebug && (e = CPWbot_bg.get_user_debug_messages()),
          CPWbatch.cpw_get_batchjob_state()
            ? (u || (g_cpw_status_update_lastmsg = a = a != g_cpw_status_update_lastmsg ? g_cpw_status_update_lastmsg + "\n" + a : a),
              (g_cpw_status_update_lastmsg = a),
              o.cpw_clear_status_update_ack(),
              (r = JSON.stringify({ aid: i, state: JSON.stringify(g_cpw_batchstates), msg: a, debugmsg: e })),
              sendCS(g_cpw_server_initiated_tabid, { cmd: "cpw_batch_status_update", msgstr: r, batchstate: c, stats: s }))
            : sendCS(g_cpw_server_initiated_tabid, {
                cmd: "cpw_status_update",
                state: JSON.stringify(g_cpw_batchstates),
                msg: a,
                debugmsg: e,
                aid: i,
                batchstate: c,
                stats: s
              }));
      }
    }),
    (this.cpw_set_status_update_ack = function (t) {
      u = t;
    }),
    (this.cpw_get_status_update_ack = function () {
      return u;
    }),
    (this.cpw_clear_status_update_ack = function () {
      o.cpw_set_status_update_ack(!1);
    }),
    (this.cpw_reset_status_update_ack = function () {
      u = null;
    }),
    (this.update_last_batch_timestamp = function () {
      return (b = new Date().getTime());
    }),
    (this.get_last_batch_timestamp = function () {
      return b;
    });
}
function iscpwfast() {
  if (void 0 !== g_cpwfast && !0 === g_cpwfast) return !0;
}
