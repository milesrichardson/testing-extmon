// LICENSE_CODE ZON
(self["webpackChunk"] = self["webpackChunk"] || []).push([
  [202],
  {
    6969: (module, exports, __webpack_require__) => {
      "use strict";
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // LICENSE_CODE ZON
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(7439),
        __webpack_require__(541),
        __webpack_require__(7345),
        __webpack_require__(5250),
        __webpack_require__(4118),
        __webpack_require__(6386),
        __webpack_require__(1291),
        __webpack_require__(9824),
        __webpack_require__(9641)
      ]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (_, Backbone, be_util, be_vpn_util, zconf, etask, zutil, zerr, conf) {
        const is_bg = be_vpn_util.is_bg();
        const listener_prefix = "l" + (is_bg ? "b" : "p");
        const E = {};
        const manifest = be_util.get_manifest();
        function _destroy(o) {
          try {
            o.destroy();
          } catch (err) {
            try {
              console.error("error in destroy %s", err.stack || err);
            } catch (_err) {}
            throw err;
          }
        }
        const is_object = (obj) => obj != null && (typeof obj == "object" || obj instanceof Object);
        const is_array = (obj) => Array.isArray(obj) || obj instanceof Array;
        const _clone_deep = (obj) => {
          let ret;
          if (is_array(obj)) {
            ret = new Array(obj.length);
            let n = obj.length;
            for (let i = 0; i < n; i++) ret[i] = is_object(obj[i]) ? _clone_deep(obj[i]) : obj[i];
            return ret;
          } else if (obj instanceof Date) return new Date(obj);
          else if (obj instanceof RegExp) return new RegExp(obj);
          else if (obj instanceof Function) return obj;
          ret = {};
          for (let i in obj) ret[i] = is_object(obj[i]) ? _clone_deep(obj[i]) : obj[i];
          return ret;
        };
        const clone_deep = (obj) => (is_bg && conf.firefox_web_ext && is_object(obj) ? _clone_deep(obj) : obj);
        E.model = Backbone.Model.extend({
          defaults: function () {
            this._listenerId = _.uniqueId(listener_prefix);
            if (this._defaults) this._defaults.call(this);
            this.on("destroy", function () {
              this.off();
              this.stopListening();
              this.destroyed = true;
            });
          },
          _destroy: function () {
            _destroy(this);
          },
          sync: function () {},
          assert_inited: function () {
            be_vpn_util.assert(this.get("inited"), new Error("not inited"));
          },
          on_init: function (events, cb) {
            this.on(events, cb);
            cb.call(this);
          },
          listen_to: function (other, events, cb) {
            this.listenTo(other, events, cb);
            cb.call(this);
          },
          fcall: function (a0, a1) {
            return this[a0].apply(this, clone_deep(a1));
          },
          ecall: function (a0, a1) {
            return this[a0].apply(this, clone_deep(a1));
          },
          safe_set: function (change) {
            var diff = this.changedAttributes(change);
            if (!diff) return;
            this.set(diff, { silent: true });
            _.each(
              diff,
              function (val, key) {
                try {
                  this.trigger("change:" + key);
                } catch (err) {
                  be_util.perr("be_safe_set_err", { key, val }, { err, rate_limit: { count: 1 } });
                  console.error("error in change listener %s", err.stack || err);
                }
              },
              this
            );
            try {
              this.trigger("change");
            } catch (e) {
              be_util.perr("be_safe_set_err", {}, { err: e, rate_limit: { count: 1 } });
              console.error("error in change listener %s", e.stack || e);
            }
          },
          set: function (attributes, options) {
            if (typeof options == "object") options = _.clone(options);
            Backbone.Model.prototype.set.apply(this, [attributes, options]);
          },
          assert_no_listeners: function () {
            if (!this._events || !Object.keys(this._events).length) return;
            if (Object.keys(this._events).length > 1 || Object.keys(this._events)[0] != "destroy") {
              console.error("%s: assert_no_listeners _events %s", this.model_name, Object.keys(this._events));
              if (zutil.is_mocha()) throw new Error("has listeners");
            }
          }
        });
        let backbone_max_listeners_limit = 11;
        let leak_warn = (obj, events) => {
          if (!obj._events) return;
          if (typeof events == "object") events = Object.keys(events);
          else events = events.split(/\s+/);
          for (let event of events) {
            let a = obj._events[event];
            if (!a || a.length < backbone_max_listeners_limit) continue;
            console.error("%s: too many event listeners %s %s", obj.model_name, a.length, event);
            be_util.perr(
              "be_backbone_max_listeners_" + backbone_max_listeners_limit,
              { count: a.length, module: obj.model_name, event, bt: zerr.get_stack_trace() },
              { rate_limit: { count: 1 } }
            );
            backbone_max_listeners_limit *= 10;
            if (zutil.is_mocha()) throw new Error(obj.model_name + " too many listeners");
          }
        };
        if ((manifest && !manifest.update_url) || zutil.is_mocha()) {
          E.model.prototype.on = function (events) {
            leak_warn(this, events);
            return Backbone.Model.prototype.on.apply(this, arguments);
          };
          E.model.prototype.listenTo = function (other, events) {
            leak_warn(other, events);
            return Backbone.Model.prototype.listenTo.apply(this, arguments);
          };
        }
        E.task_model = E.model.extend({
          defaults: function () {
            if (this._defaults) this._defaults.call(this);
            this.queue = [];
            this.on("destroy", function () {
              clearTimeout(this.queue_timer);
              delete this.queue;
              this.off();
              this.stopListening();
              this.destroyed = true;
            });
          },
          assert_inited: function () {
            be_vpn_util.assert(this.get("inited"), new Error("not inited"));
            be_vpn_util.assert(this.queue, new Error("in destroy"));
          },
          set_busy: function (opt) {
            this.assert_inited();
            be_vpn_util.assert(this.get("status") != "error", new Error("set_busy in error"));
            if (this.get("status") == "ready" || !this.get("status") || this.in_clr_busy) {
              this.in_clr_busy = false;
              this.set("status_opt", opt);
              this.set("status", "busy");
              return true;
            }
            return false;
          },
          update_progress: function (opt) {
            this.set("status_opt", opt);
          },
          clr_busy: function () {
            this.assert_inited();
            be_vpn_util.assert(this.get("status") != "error", new Error("clr_busy in error"));
            if (!this.queue.length) {
              this.unset("status_opt");
              return this.set("status", "ready");
            }
            this.queue_timer = setTimeout(
              function () {
                this.in_clr_busy = true;
                this.trigger.apply(this, this.queue.shift());
              }.bind(this),
              0
            );
          },
          clr_task: function (task) {
            this.assert_inited();
            this.queue = _.filter(this.queue, function (o) {
              return !_.isEqual(o, task);
            });
          },
          clr_task_by_id: function (id) {
            this.assert_inited();
            this.queue = _.filter(this.queue, function (o) {
              return o[0] != id;
            });
          },
          set_err: function () {
            this.assert_inited();
            be_vpn_util.assert(this.get("status") == "busy", new Error("set_err but not busy"));
            clearTimeout(this.queue_timer);
            this.queue = [];
            this.in_clr_busy = 0;
            this.unset("status_opt");
            return this.set("status", "error");
          },
          schedule: function (task) {
            this.assert_inited();
            be_vpn_util.assert(this.get("status") == "busy", new Error("schedule but not busy"));
            this.queue.push(task);
          },
          schedule_clr: function (task) {
            this.clr_task(task);
            return this.schedule(task);
          },
          recover: function () {
            this.assert_inited();
            be_vpn_util.assert(this.get("status") == "error", new Error("recover but not in error"));
            this.unset("status_opt");
            this.set("status", "", { silent: true });
            return this.trigger("recover");
          }
        });
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    1211: (module, exports, __webpack_require__) => {
      "use strict";
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // LICENSE_CODE ZON
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(6386),
        __webpack_require__(9824),
        __webpack_require__(57),
        __webpack_require__(6969),
        __webpack_require__(177),
        __webpack_require__(7439),
        __webpack_require__(6262),
        __webpack_require__(9369),
        __webpack_require__(901),
        __webpack_require__(1291),
        __webpack_require__(5250),
        __webpack_require__(7345)
      ]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (
        etask,
        zerr,
        be_msg,
        be_backbone,
        be_chrome,
        _,
        version_util,
        be_transport,
        user_agent,
        zutil,
        be_vpn_util,
        be_util
      ) {
        const chrome = self.chrome;
        const v3 = be_util.is_v3;
        const is_tpopup = be_vpn_util.is_tpopup();
        const is_tpopup_window = be_vpn_util.get_tpopup_mode() == "window";
        const bg = (is_tpopup && !is_tpopup_window) || v3 ? null : chrome.extension.getBackgroundPage();
        const use_msg = !bg;
        const use_backbone_over_msg = use_msg;
        const E = new (be_backbone.model.extend({
          model_name: "browser",
          _defaults: function () {
            this.use_msg = use_msg;
            this.bg = bg;
            this.msg = new be_msg();
            this.on("destroy", () => E.uninit());
          }
        }))();
        if (zutil.is_mocha()) {
          chrome.browserAction = { setIcon: () => {}, setBadgeText: () => {}, setBadgeBackgroundColor: () => {} };
          chrome.windows = { getLastFocused: () => {}, onFocusChanged: { addListener: () => {}, removeListener: () => {} } };
          chrome.storage = { local: { get: () => {}, set: () => {}, remove: () => {} } };
          chrome.tabs = {
            update: () => {},
            reload: () => {},
            query: () => {},
            get: () => {},
            onFocusChanged: { addListener: () => {}, removeListener: () => {} },
            onCreated: { addListener: () => {}, removeListener: () => {} },
            onUpdated: { addListener: () => {}, removeListener: () => {} },
            onActivated: { addListener: () => {}, removeListener: () => {} },
            onRemoved: { addListener: () => {}, removeListener: () => {} },
            onReplaced: { addListener: () => {}, removeListener: () => {} }
          };
        }
        E.uninit = () => {
          if (!E.inited) return;
          if (zutil.is_mocha()) {
            be_chrome.uninit();
            E.msg.uninit();
          } else {
            be_chrome._destroy();
            E.msg._destroy();
          }
          E.inited = false;
        };
        E.init = (opt) => {
          if (E.inited) return;
          E.inited = true;
          E.browser_version = user_agent.guess_browser().version;
          E.os = user_agent.guess().os;
          opt = opt || {};
          E.msg.init(get_transport(), { context: opt.context !== undefined ? opt.context : {} });
          E.rpc = use_msg && !be_vpn_util.is_bg() ? E.rpc_types.chrome_msg : E.rpc_types.chrome_native;
          E.rpc.init();
        };
        function get_transport() {
          if (be_vpn_util.is_bg()) return be_transport.chrome_tabs(chrome);
          if ((is_tpopup && !is_tpopup_window) || !bg) {
            return be_transport.tpopup(chrome, zutil.get(self, "hola.tpopup_opt.tab_id", !bg && -1));
          }
          return be_transport.chrome_tabs(chrome);
        }
        E.rpc_types = {
          chrome_native: {
            init: function () {
              if (this.inited) return;
              this.inited = true;
              be_chrome.init(E.msg);
              be_chrome.impl.init();
              E.runtime.id = be_chrome.impl.id;
              E.runtime.url = be_chrome.impl.url;
              E.runtime.manifest = be_chrome.impl.manifest;
            },
            call_api: function (obj, sub, func, args, cb, ms, error_cb) {
              var _this = this,
                _cb = !cb
                  ? null
                  : function () {
                      E.runtime.last_error = _this.last_error = chrome.runtime.lastError;
                      return cb.apply(null, arguments);
                    };
              return be_chrome.impl.call_api(obj, sub, func, args, _cb);
            },
            add_listener: (obj, sub, cb, opt, extra) => be_chrome.impl.add_listener(obj, sub, cb, opt, extra),
            del_listener: (obj, sub, cb) => be_chrome.impl.del_listener(obj, sub, cb)
          },
          chrome_msg: {
            init: function () {
              if (this.inited) return;
              this.inited = true;
              be_chrome.init(E.msg);
              E.rpc.call_api("impl", "", "init", [], function (o) {
                E.runtime.id = o.id;
                E.runtime.manifest = o.manifest;
                if ((E.runtime.url = o.url)) return;
                E.runtime.url = chrome
                  ? "chrome-extension://" + o.id
                  : "resource://" + o.id.replace("@", "-at-").toLowerCase() + "/hola_firefox_ext";
              });
            },
            call_api: function (obj, sub, func, args, cb, ms, error_cb, skip_resp) {
              var _this = this;
              return E.msg.send(
                { msg: "call_api", obj, sub, func, args, has_cb: !!cb, skip_resp },
                function (ret) {
                  if (!cb) return;
                  E.runtime.last_error = _this.last_error = ret.last_error;
                  if (ret.error) {
                    if (error_cb) error_cb(ret);
                    return;
                  }
                  cb.apply(null, ret.args);
                },
                ms
              );
            },
            add_listener: (obj, sub, cb) => E.msg.add_listener({ obj, sub }, cb),
            del_listener: (obj, sub, cb) => E.msg.del_listener({ obj, sub }, cb)
          }
        };
        E.tabs = {
          disconnect: (tab_id, cb) => {
            if (use_msg) return E.rpc.call_api("tabs", "", "disconnect", [tab_id], cb);
            var m = E.msg;
            m.disconnect(tab_id);
            if (cb) cb();
          },
          is_connected: (tab_id) => !!E.msg.tab_connections[tab_id],
          get_tab_connections: (tab_id) => E.msg.tab_connections[tab_id]
        };
        E.runtime = {};
        function get_backbone_obj(id) {
          var main = bg && bg.be_bg_main;
          return main && main.be_browser.backbone.server.obj[id];
        }
        E.backbone = { client: { obj: {} }, server: { obj: {}, cb: {} } };
        E.backbone.client.ping = function (id, ms, cb) {
          if (!use_backbone_over_msg) {
            if (get_backbone_obj(id)) return be_vpn_util.set_timeout(() => cb({}));
            be_vpn_util.set_timeout(() => {
              const o = get_backbone_obj(id);
              cb(o ? {} : { error: "no_object" });
            }, ms);
            return;
          }
          E.rpc.call_api("backbone", "server", "ping", [id], cb, ms, cb);
        };
        E.backbone.client.start = function (id) {
          zerr.debug("backbone.client.start " + id);
          if (!use_backbone_over_msg) return get_backbone_obj(id);
          var o = this.obj[id],
            _this = this;
          zerr.assert(!o, "client " + id + " already started");
          o = this.obj[id] = new be_backbone.model();
          E.msg.on_backbone_event = function (info) {
            var o = _this.obj[info.id];
            if (!o) return;
            var ename = info.ename;
            if (ename.includes("change:")) {
              var attr = ename.replace("change:", ""),
                val = info.args[0];
              o.set(attr, val);
            } else o.trigger.apply(o, [ename].concat(info.args));
          };
          o.fcall = (func, args) => E.rpc.call_api("backbone.server.obj." + id, "fcall", func, args);
          o.ecall = (func, args) =>
            etask(function* () {
              const ret = yield etask.cb_apply(E.rpc, ".call_api", ["backbone.server.obj." + id, "ecall", func, args]);
              be_vpn_util.assert(!zutil.get(ret, "_error"), zutil.get(ret, "_error"));
              return ret;
            });
          E.rpc.call_api("backbone", "server", "connect", [id], function (ret) {
            var o = _this.obj[id];
            if (!o) return zerr("client %s got connected after stop", id);
            if (ret.error) return zerr("backbone.client.start error: " + ret.error);
            o.set(ret.attributes);
            o.set("_backbone_client_started", true);
          });
          return o;
        };
        E.backbone.client.stop = function (id) {
          zerr.debug("backbone.client.stop " + id);
          if (!use_backbone_over_msg) return;
          var o = this.obj[id];
          zerr.assert(o, "client " + id + " not started");
          E.rpc.call_api("backbone", "server", "disconnect", [id, o.get("_backbone_client_id")], null, null, null, true);
          o._destroy();
          delete this.obj[id];
        };
        E.backbone.server.start = function (obj, id) {
          zerr.debug("backbone.server.start " + id + " cid " + obj.cid);
          zerr.assert(!this.obj[id], "server " + id + " already started");
          this.obj[id] = obj;
        };
        E.backbone.server.stop = function (id) {
          zerr.debug("backbone.server.stop " + id);
          var o = this.obj[id];
          zerr.assert(o, "server " + id + " not started");
          delete this.obj[id];
        };
        if (v3) E.init();
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    177: (module, exports, __webpack_require__) => {
      "use strict";
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // LICENSE_CODE ZON
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(7439),
        __webpack_require__(6386),
        __webpack_require__(6969),
        __webpack_require__(9824),
        __webpack_require__(1291),
        __webpack_require__(5250),
        __webpack_require__(7345)
      ]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (_, etask, be_backbone, zerr, zutil, be_vpn_util, be_util) {
        const v3 = be_util.is_v3;
        const chrome = !be_vpn_util.is_tpopup() && self.chrome;
        const noop = () => {};
        const E = new (be_backbone.model.extend({
          model_name: "chrome",
          _defaults: function () {
            this.on("destroy", function () {
              E.uninit();
            });
          }
        }))();
        E.init = (msg) => {
          if (E.inited || !be_vpn_util.is_bg()) return;
          E.inited = true;
          E.listeners = { "": {} };
          E.msg = msg;
          E.msg.on_req = on_req;
          E.msg.on_add_listener = on_add_listener;
          E.msg.on_del_listener = on_del_listener;
          E.msg.on_connect = on_connect;
          E.msg.on_disconnect = on_disconnect;
        };
        E.uninit = () => {
          if (!E.inited) return;
          E.msg.on_req = undefined;
          E.msg.on_add_listener = undefined;
          E.msg.on_del_listener = undefined;
          E.msg.on_connect = undefined;
          E.msg.on_disconnect = undefined;
        };
        function on_req(j) {
          var req = j.msg;
          switch (req.msg) {
            case "call_api":
              var cb = !req.has_cb
                ? null
                : function () {
                    E.msg.resp(j, { args: _.toArray(arguments), last_error: !chrome ? 0 : chrome.runtime.lastError });
                  };
              E.impl.call_api(req.obj, req.sub, req.func, req.args, cb, j);
              if (!req.has_cb && !req.skip_resp) E.msg.resp(j, { args: [] });
              break;
          }
        }
        function on_add_listener(j) {
          var req = j.msg,
            id = j.id,
            cid = j._connection_id || "";
          var cb = function () {
            E.msg.send_event(j, _.toArray(arguments));
          };
          cb.__j = j;
          var l = E.listeners[cid];
          if (!l) return zerr("add: listeners for " + cid + " not inited");
          zerr.assert(!l[id], "add: listener " + id + " already exists");
          l[id] = cb;
          E.impl.add_listener(req.obj, req.sub, cb);
        }
        function on_del_listener(j) {
          var req = j.msg,
            id = j.id,
            cid = j._connection_id || "";
          var l = E.listeners[cid];
          if (!l) return zerr("del: listeners for " + cid + " not inited");
          var cb = l[id];
          zerr.assert(cb, "del: listener " + id + " not found");
          E.impl.del_listener(req.obj, req.sub, cb);
          delete l[id];
        }
        function on_connect(cid) {
          if (E.listeners[cid]) {
            if (!v3) zerr("connect: listeners for " + cid + " already inited");
            return;
          }
          E.listeners[cid] = {};
        }
        function on_disconnect(cid) {
          var l = E.listeners[cid];
          if (!l) return zerr("disc: listeners for " + cid + " not inited");
          _.each(zutil.clone(l), function (e, i) {
            var t;
            if ((t = e.__j)) on_del_listener(t);
            else if ((t = e.__backbone)) del_backbone_listener(t.id, cid, t.backbone_client_id);
          });
          zerr.assert(_.isEmpty(l), "listeners not empty");
          delete E.listeners[cid];
        }
        function del_backbone_listener(id, connection_id, backbone_client_id) {
          var o = get_backbone_obj(id);
          var l = E.listeners[connection_id];
          if (!l) {
            return zerr("del_backbone: listeners for " + connection_id + " not inited");
          }
          var cb = l[backbone_client_id];
          delete l[backbone_client_id];
          if (!o) return;
          E.stopListening(o, "all", cb);
        }
        function join_dot(obj, sub, func) {
          return _.compact(arguments).join(".");
        }
        function get_obj(root, obj, sub) {
          let a = obj.split(".").concat(sub || []),
            o = root,
            i;
          for (i = 0; i < a.length && o; i++) o = o[a[i]];
          return i < a.length ? null : o;
        }
        function get_backbone_obj(id) {
          var main = self.be_bg_main;
          return main && main.be_browser.backbone.server.obj[id];
        }
        function perr(id, info, opt, new_name) {
          let perr_func = zutil.get(self, "be_bg_main.be_util.perr");
          if (perr_func) return perr_func(id, info, opt, new_name);
          zerr("perr " + id + " " + (info ? info : "") + (opt.err ? "\n" + zerr.e2s(opt.err) : ""));
        }
        let sent;
        function _perr(obj, sub, func, args, err) {
          if (sent) return console.error("skip be_msg_err %s", err);
          var err_info = err ? err.hola_info : undefined;
          perr("be_msg_err", { method: join_dot(obj, sub, func), args, err_info }, { err });
          sent = true;
        }
        E.impl = {};
        E.impl.init = function () {
          if (this.inited) return;
          this.inited = true;
          if (!chrome) return;
          this.id = chrome.runtime.id;
          this.url = chrome.runtime.getURL("").slice(0, -1);
          this.manifest = chrome.runtime.getManifest();
        };
        E.impl["impl.init"] =
          chrome &&
          function (args, cb) {
            this.init();
            if (cb) cb({ id: this.id, url: this.url, manifest: this.manifest });
          };
        E.impl["tpopup.set_dont_show_again"] = function (args) {
          if (!self.be_bg_main || !self.be_bg_main.be_info) return zerr("no be_bg_main or be_info");
          self.be_bg_main.be_info.set_dont_show_again(args[0]);
        };
        E.impl["tpopup.send_tpopup_msg"] = function (args) {
          chrome.tabs.sendMessage(args[0], args[1]);
        };
        E.impl["tpopup.trigger"] = function (args) {
          if (!self.be_bg_main || !self.be_bg_main.be_tpopup) return;
          self.be_bg_main.be_tpopup.trigger(args[0], args[1]);
        };
        E.impl["be_premium.login_popup_done"] = function (args) {
          if (!self.be_bg_main || !self.be_bg_main.be_premium) return;
          self.be_bg_main.be_premium.login_popup_done();
        };
        E.impl["tpopup.perr"] = function (args) {
          perr(args[1], args[2], args[3], true);
        };
        E.impl["backbone.server.connect"] = function (args, cb, j) {
          cb = cb || noop;
          var id = args[0],
            o = get_backbone_obj(id),
            cid = j._connection_id || "";
          if (!o) return;
          var attr = o.attributes;
          var bcid = (attr._backbone_client_id = _.uniqueId("bbl"));
          var l = E.listeners[cid];
          if (!l) return zerr("connect: listeners for " + cid + " not inited");
          zerr.assert(!l[bcid], "backbone listener for" + bcid + " already exists");
          var _cb = (l[bcid] = function (ename) {
            var _args = [];
            if (ename.includes("change:")) _args = [o.get(ename.replace("change:", ""))];
            else if (ename != "change") _args = [].slice.call(arguments, 1);
            E.msg.send_backbone_event(j, { id, ename, args: _args });
          });
          _cb.__backbone = { id, backbone_client_id: bcid };
          E.listenTo(o, "all", _cb);
          cb({ attributes: attr });
        };
        E.impl["backbone.server.disconnect"] = function (args, cb, j) {
          del_backbone_listener(args[0], j._connection_id || "", args[1]);
          if (cb) cb({});
        };
        E.impl["backbone.server.ping"] = function (args, cb, j) {
          cb = cb || noop;
          var id = args[0],
            o = get_backbone_obj(id);
          if (o) cb({});
        };
        E.impl.call_api = function (obj, sub, func, args, cb, j) {
          try {
            var o;
            if (obj.startsWith("backbone.server.obj.")) {
              cb = cb || noop;
              var id = obj.replace("backbone.server.obj.", "");
              o = get_backbone_obj(id);
              if (!o) return;
              if (sub == "ecall") {
                return etask([
                  function () {
                    return o.ecall(func, args);
                  },
                  function () {
                    cb.apply(null, arguments);
                  },
                  function catch$(err) {
                    cb({ _error: "" + err });
                    _perr(obj, sub, func, args, err);
                  }
                ]);
              }
              o[sub].call(o, func, args);
              cb({});
              return;
            }
            var s = join_dot(obj, sub, func);
            if (_.isFunction(this[s])) {
              if (zerr.is.info()) zerr.info(s + "(" + zerr.json(args).substr(0, 100) + ")");
              return void this[s].call(this, args, cb, j);
            }
            o = get_obj(chrome, obj, sub);
            if (!o || !o[func]) return _perr(obj, sub, func, args, new Error("not found"));
            return o[func].apply(o, args.concat(cb || []));
          } catch (e) {
            _perr(obj, sub, func, args, e);
          }
        };
        E.impl.add_listener = function (obj, sub, cb, opt, extra) {
          try {
            var s = join_dot(obj, sub, "add_listener");
            if (_.isFunction(this[s])) {
              zerr.info(s + "()");
              return void this[s].call(this, cb, opt, extra);
            }
            var o = get_obj(chrome, obj, sub);
            if (!o || !o.addListener) return _perr(obj, sub, "add_listener", new Error("not found"));
            if (!opt) return o.addListener(cb);
            o.addListener(cb, opt, extra);
          } catch (e) {
            _perr(obj, sub, "add_listener", { opt, extra }, e);
          }
        };
        E.impl.del_listener = function (obj, sub, cb) {
          try {
            var s = join_dot(obj, sub, "del_listener");
            if (_.isFunction(this[s])) {
              zerr.info(s + "()");
              return void this[s].call(this, cb);
            }
            var o = get_obj(chrome, obj, sub);
            if (!o || !o.removeListener) return _perr(obj, sub, "del_listener");
            o.removeListener(cb);
          } catch (e) {
            _perr(obj, sub, "del_listener", [], e);
          }
        };
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    57: (module, exports, __webpack_require__) => {
      "use strict";
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // LICENSE_CODE ZON
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(7439),
        __webpack_require__(6969),
        __webpack_require__(5250),
        __webpack_require__(9824),
        __webpack_require__(6545),
        __webpack_require__(7345)
      ]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (_, be_backbone, be_vpn_util, zerr, array, be_util) {
        const v3 = be_util.is_v3;
        const E = be_backbone.model.extend({
          model_name: "msg",
          _defaults: function () {
            this.id = 1;
            this.unique = Math.random();
            this.queue = {};
            this.listeners = {};
            this.connections = {};
            this.tab_connections = {};
            this.on("destroy", function () {
              this.uninit();
            });
          },
          unique_id: function () {
            return this.unique + "_" + this.id++;
          },
          init: function (transport, opt) {
            if (this.inited) return;
            this.inited = true;
            this.opt = opt || {};
            this.context = this.opt.context;
            this.transport = transport;
            this._on_msg = this.on_msg.bind(this);
            this.transport.add_listener(this._on_msg);
            if (!this.transport.add_connection_listener || !be_vpn_util.is_bg()) return;
            this._on_connection = this.on_connection.bind(this);
            this.transport.add_connection_listener(this._on_connection);
          },
          uninit: function () {
            if (!this.inited) return;
            this.transport.remove_listener(this._on_msg);
            if (this._on_connection) this.transport.remove_connection_listener(this._on_connection);
            _.each(this.connections, function (port) {
              port.disconnect();
            });
            this.inited = false;
          },
          disconnect: function (tid, cid) {
            var cids = cid ? [cid] : (this.tab_connections[tid] || []).slice();
            cids.forEach(function (_cid) {
              this.connections[_cid].disconnect();
              this._after_disconnect(_cid, tid);
            }, this);
          },
          send: function (msg, cb, ms) {
            var j = { id: this.unique_id(), msg, cb };
            this.queue[j.id] = j;
            if (ms) j.timer = be_vpn_util.set_timeout(() => this.cancel_send(j.id), ms);
            this.transport.send({ type: "be_msg_req", id: j.id, msg, context: this.context });
          },
          resp: function (j, ret) {
            this.transport.send({
              type: "be_msg_resp",
              id: j.id,
              ret,
              _tab_id: j._tab_id,
              _connection_id: j._connection_id,
              context: j.context
            });
          },
          cancel_send: function (id) {
            var j = this.queue[id];
            if (!j) return;
            j.timer = be_vpn_util.clear_timeout(j.timer);
            if (j.cb) j.cb({ error: "cancel_send" });
            delete this.queue[id];
          },
          add_listener: function (msg, cb) {
            be_vpn_util.assert(!cb.__listener_id, new Error("listener_id " + cb.__listener_id + " already exists"));
            cb.__listener_id = this.unique_id();
            var j = { id: cb.__listener_id, msg, cb };
            this.listeners[j.id] = j;
            this.transport.send({ type: "be_msg_add_listener", id: j.id, msg, context: this.context });
          },
          del_listener: function (msg, cb) {
            const id = cb.__listener_id;
            be_vpn_util.assert(id, new Error("no listener id"));
            delete this.listeners[id];
            delete cb.__listener_id;
            this.transport.send({ type: "be_msg_del_listener", id, msg, context: this.context });
          },
          send_event: function (j, args) {
            this.transport.send({
              type: "be_msg_event",
              id: j.id,
              args,
              _tab_id: j._tab_id,
              _connection_id: j._connection_id,
              context: j.context
            });
          },
          send_backbone_event: function (j, info) {
            this.transport.send({
              type: "be_msg_backbone_event",
              info,
              _tab_id: j._tab_id,
              _connection_id: j._connection_id,
              context: j.context
            });
          },
          on_connection: function (port) {
            const connection_id = port.name;
            let tab_id = port.sender.tab && port.sender.tab.id;
            if (v3 && !tab_id) tab_id = -1;
            this.add_connection(port, connection_id, tab_id);
            if (this.on_connect) this.on_connect(connection_id);
            const on_disconnect = () => {
              delete_timer();
              this._after_disconnect(connection_id, tab_id);
            };
            const force_reconnect = () => {
              zerr.notice("force reconnect: " + connection_id);
              port.onDisconnect.removeListener(on_disconnect);
              delete_timer(port);
              port.disconnect();
            };
            const delete_timer = () => {
              if (port._timer) {
                clearTimeout(port._timer);
                delete port._timer;
              }
            };
            port.onDisconnect.addListener(on_disconnect);
            if (v3 && connection_id.includes(":tpopup:")) port._timer = setTimeout(force_reconnect, 250 * 1e3, port);
          },
          on_msg: function (msg) {
            var j;
            if (!this.transport.is_valid(msg)) return;
            var data = this.transport.get_data(msg);
            if (!data) return;
            switch (data.type) {
              case "be_msg_req":
                if (!this.on_req) return;
                return this.on_req(data);
              case "be_msg_resp":
                j = this.queue[data.id];
                if (!j) return;
                j.timer = be_vpn_util.clear_timeout(j.timer);
                if (j.cb) j.cb(data.ret);
                delete this.queue[data.id];
                return;
              case "be_msg_add_listener":
                if (!this.on_add_listener) return;
                return this.on_add_listener(data);
              case "be_msg_del_listener":
                if (this.on_del_listener) return;
                return this.on_del_listener(data);
              case "be_msg_event":
                j = this.listeners[data.id];
                if (!j) return;
                j.cb.apply(null, data.args);
                return;
              case "be_msg_backbone_event":
                if (!this.on_backbone_event) return;
                return this.on_backbone_event(data.info);
              case "be_msg_connect":
                var _this = this;
                var port = {
                  name: data._connection_id,
                  sender: { tab: { id: data._tab_id } },
                  disconnect: () => {
                    _this.send({ msg: "call_api", obj: "firefox", sub: "workers", func: "disconnect", args: [data._connection_id] });
                  }
                };
                this.add_connection(port, data._connection_id, data._tab_id);
                if (this.on_connect) this.on_connect(data._connection_id);
                return;
              case "be_msg_disconnect":
                _this._after_disconnect(data._connection_id, data._tab_id);
                return;
            }
          },
          add_connection: function (port, cid, tid) {
            zerr.info("accepted connection " + cid + " from tab " + tid);
            if (!cid) return zerr("add_connection without connection_id");
            if (this.connections[cid]) {
              if (v3) zerr.notice(`connection: ${cid} reconnected`);
              else zerr(`connection ${cid} already exists`);
              return;
            }
            this.connections[cid] = port;
            if (!tid) return zerr.notice("not a tab connection: " + cid);
            this.tab_connections[tid] = this.tab_connections[tid] || [];
            this.tab_connections[tid].push(cid);
          },
          del_connection: function (cid, tid) {
            zerr.info("connection " + cid + " from tab " + tid + " disconnected");
            if (!cid) return zerr("del_connection without connection_id");
            if (!this.connections[cid]) return zerr("no connection with id: " + cid);
            delete this.connections[cid];
            if (!tid) return zerr.notice("not a tab connection: " + cid);
            var tab_conn = this.tab_connections[tid];
            if (!tab_conn || !tab_conn.includes(cid)) return zerr("no connection " + cid + " for tab " + tid);
            array.rm_elm(tab_conn, cid);
            if (!tab_conn.length) delete this.tab_connections[tid];
          },
          is_connected: function (tid) {
            return !!this.tab_connections[tid];
          },
          _after_disconnect: function (cid, tid) {
            this.del_connection(cid, tid);
            if (this.on_disconnect) this.on_disconnect(cid);
          }
        });
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    9369: (module, exports, __webpack_require__) => {
      "use strict";
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // LICENSE_CODE ZON
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7439), __webpack_require__(7345)]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (_, be_util) {
        const E = { errors: 0 };
        function wrap_cb(cb) {
          return function () {
            try {
              return cb.apply(this, arguments);
            } catch (err) {
              E.errors++;
              E.last_error = err;
              if (E.errors == 1) {
                console.error("transport error %o", err);
                be_util.perr("be_transport_err", {}, { err });
              }
            }
          };
        }
        E.chrome_tabs = (chrome) => ({
          add_connection_listener: wrap_cb((cb) => {
            if (chrome.runtime) chrome.runtime.onConnect.addListener(cb);
          }),
          remove_connection_listener: wrap_cb((cb) => {
            if (chrome.runtime) chrome.runtime.onConnect.removeListener(cb);
          }),
          add_listener: wrap_cb((cb) => {
            if (chrome.runtime) chrome.runtime.onMessage.addListener(cb);
          }),
          remove_listener: wrap_cb((cb) => {
            if (chrome.runtime) chrome.runtime.onMessage.removeListener(cb);
          }),
          send: wrap_cb((data) => {
            data._type = "tpopup";
            if ((!data._tab_id || data._tab_id == -1) && chrome.runtime) chrome.runtime.sendMessage(data);
            else chrome.tabs.sendMessage(data._tab_id, data);
          }),
          get_data: (e) => e,
          is_valid: (e) => (e && e._type == "tpopup") || e._type == "login_done_popup"
        });
        E.tpopup = (chrome, tab_id) => {
          const connection_id = tab_id + ":tpopup_int:" + _.random(Number.MAX_SAFE_INTEGER);
          let port = chrome.runtime.connect({ name: connection_id });
          port.onDisconnect.addListener(function uninit() {
            port.onDisconnect.removeListener(uninit);
            port = null;
          });
          return {
            add_listener: wrap_cb((cb) => {
              if (chrome.runtime) chrome.runtime.onMessage.addListener(cb);
            }),
            remove_listener: wrap_cb((cb) => {
              if (chrome.runtime) chrome.runtime.onMessage.removeListener(cb);
            }),
            send: wrap_cb((data) => {
              if (!port) return;
              data._type = "tpopup";
              data._tab_id = tab_id;
              data._connection_id = connection_id;
              if (chrome.runtime) chrome.runtime.sendMessage(data);
            }),
            get_data: (e) => e,
            is_valid: (e) => e && e._tab_id == tab_id && e._type == "tpopup"
          };
        };
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    7345: (module, exports, __webpack_require__) => {
      "use strict";
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // LICENSE_CODE ZON
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(7439),
        __webpack_require__(9824),
        __webpack_require__(6386),
        __webpack_require__(932),
        __webpack_require__(4996),
        __webpack_require__(901),
        __webpack_require__(918),
        __webpack_require__(8915),
        __webpack_require__(1291),
        __webpack_require__(5250),
        __webpack_require__(843),
        __webpack_require__(2181),
        __webpack_require__(7619),
        __webpack_require__(5317),
        __webpack_require__(4118),
        __webpack_require__(9641)
      ]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (
        _,
        zerr,
        etask,
        date,
        sprintf,
        user_agent,
        ajax,
        storage,
        zutil,
        be_vpn_util,
        svc_util,
        be_no_log,
        State,
        rate_limit,
        zconf,
        conf
      ) {
        if (ajax.default) ajax = ajax.default;
        const E = {};
        const is_bg = be_vpn_util.is_bg();
        const chrome = self.chrome;
        const assign = Object.assign,
          if_set = zutil.if_set;
        let ajax_cb, bext_config_cb;
        be_no_log = be_no_log.default;
        State = State.default;
        let state, init_ts;
        const { www_host } = conf;
        E.is_v3 = chrome.runtime.getManifest().manifest_version == 3;
        E.os_guess = user_agent.guess();
        E.browser_guess = user_agent.guess_browser();
        E.os_win = () => E.os_guess.os == "windows";
        E.os_mac = () => E.os_guess.os == "macos";
        E.is_mobile = () => E.os_guess.mobile;
        let _is_laptop;
        E.is_laptop = () => _is_laptop;
        E.version = () => zconf.ZON_VERSION;
        E.install_version = () => {
          let ext = get_bg_module("be_ext");
          if (ext) return ext.get("install_version");
        };
        E.install_ts = () => {
          let ext = get_bg_module("be_ext");
          return (ext && ext.get("install_ts")) || Date.now();
        };
        var check_opera = /\bOPR\b\/(\d+)/i;
        E.browser = () => {
          if (E.browser_guess.hola_browser) return "hola";
          if (E.browser_guess.edge) return "edge";
          var ua = navigator.userAgent;
          var opera = check_opera.exec(ua);
          return conf.browser.firefox ? "firefox" : conf.browser.opera || (opera && opera[1]) ? "opera" : "chrome";
        };
        E.qs_ajax = (o) => {
          var info = {
            ext_ver: E.version(),
            install_ver: E.install_version(),
            install_ts: E.install_ts(),
            browser: E.browser(),
            product: E.get_product(),
            src_country: storage.get("src_country")
          };
          if (zutil.is_mocha()) {
            info.browser = undefined;
            info.install_ts = undefined;
          }
          assign(info, o);
          for (var k in info) {
            if (info[k] === undefined) delete info[k];
          }
          return info;
        };
        let storage_perr_sent;
        storage.on_err = (api, key, err) => {
          if (zutil.is_mocha()) return;
          zerr("%s failed %s %s", api, key, zerr.e2s(err));
          if (storage_perr_sent) return;
          storage_perr_sent = true;
          E.perr("be_storage_err", api + " " + key, { err, rate_limit: { count: 1 } });
        };
        E.get_install_ms = () => {
          let ts = E.install_ts();
          return ts ? Date.now() - ts : 0;
        };
        E.get_ua_update_ms = () => {
          let ts = storage.get_int("ua_update_ts");
          return ts ? Date.now() - ts : 0;
        };
        const get_bg_module = (name) => {
          if (!is_bg) return null;
          let bg_main = E.rmt || self.be_bg_main;
          return name == "be_bg_main" ? bg_main : bg_main && bg_main[name];
        };
        E.get_manifest = () => {
          if (chrome.runtime && chrome.runtime.getManifest) return chrome.runtime.getManifest();
        };
        const is_enabled_for_url = (url) => {
          let be_vpn = get_bg_module("be_vpn");
          if (!url.match("^https?://.*")) url = `https://${url}/`;
          return be_vpn && be_vpn.get_enabled_rule({ url });
        };
        E.build_info = (opt) => {
          let ext = get_bg_module("be_ext");
          let mode = get_bg_module("be_mode");
          let tabs = get_bg_module("be_tabs");
          let be_trial = get_bg_module("be_trial");
          let be_ab_test = get_bg_module("be_ab_test");
          let be_rule = get_bg_module("be_rule");
          let be_vpn = get_bg_module("be_vpn");
          let info = { version: zconf.ZON_VERSION, local_ts: new Date(), src_country: storage.get("src_country") };
          let manifest = E.get_manifest();
          if (manifest) {
            info.manifest_version = manifest.version;
            info.manifest_ver = manifest.manifest_version;
          }
          info.conf_stamp = E.CG("stamp");
          if (mode) {
            if_set(mode.get("svc.version"), info, "svc_version");
            if_set(mode.get("svc.appid"), info, "svc_appid");
            if_set(mode.get("pending"), info, "svc_mode_pending");
            if_set(mode.get("svc.campaign"), info, "campaign");
            if_set(mode.get("svc.uuid"), info, "svc_uuid");
          }
          if (ext) {
            if_set(ext.get("ext.active"), info, "ext.active");
            if_set(ext.get("ext.suspended"), info, "ext.suspended");
            if_set(ext.get("ext.conflict"), info, "ext_conflict");
            if_set(ext.get("no_permission"), info, "no_permission");
            if_set(ext.get("is_premium") && 1, info, "is_premium");
            if_set(ext.get("hola_uid"), info, "hola_uid");
            if_set(ext.get("session_key"), info, "session_key");
            if_set(ext.get("pap_a_aid"), info, "aff_id");
            let bext_config = ext.get("bext_config");
            if_set(zutil.get(bext_config, "version"), info, "conf_ver");
            if (be_trial) {
              const total_watch_time = be_trial.get_param_from_state("total_watch_time");
              if (total_watch_time) info.trial_watch_time = date.dur_to_str(total_watch_time);
              if_set(be_trial.get_watch_time_ms() || undefined, info, "trial_watch_time_ms");
            }
            if (be_ab_test) if_set(be_ab_test.get_ab_test_str(), info, "ab_test");
            let f;
            if ((f = ext.get("features"))) assign(info, f);
          }
          let active_url;
          if (tabs) {
            active_url = tabs.get("active.url");
            info.active_tab = tabs.get("active.id");
            if (tabs.get("active.incognito")) info.active_incognito = true;
          }
          if (active_url && be_rule) {
            let rules = be_vpn_util.get_rules(be_rule.get("rules"), active_url);
            if (zutil.get(rules, "0.enabled")) {
              if_set(svc_util.get_root_url(active_url), info, "root_url");
              info.proxy_country = rules[0].country;
            } else if_set(storage.get("last_root_url"), info, "last_root_url");
          }
          let enabled_for_browser = be_vpn && be_vpn.is_enabled_for_browser();
          info.unblocking_mode = E.full_browser_mode() || enabled_for_browser ? "browser" : "tab";
          if_set(opt && opt.is_tpopup, info, "is_tpopup");
          if (chrome) info.product_type = conf.type;
          info.id = zutil.get(chrome, "runtime.id");
          var browser = E.browser();
          var browser_ver = browser == "opera" ? E.browser_guess.opera_version : E.browser_guess.version;
          info.browser = browser + " " + browser_ver;
          info.browser_build = conf.browser.name;
          info.platform = navigator.platform;
          info.user_agent = navigator.userAgent;
          if (self.hola) {
            var now = Date.now();
            var install_ms;
            if ((install_ms = E.get_install_ms())) {
              info.install_ms = install_ms;
              info.install_time = date.ms_to_dur_interval(install_ms);
            }
            var update, diff;
            if ((update = ext && ext.get("update_ts")) && (diff = now - update) <= date.ms.MIN) {
              info.after_update = true;
              info.update_ms = diff;
            }
          }
          info.last_install_ts = storage.get("install_perr_ts");
          info.since_init_ms = Date.now() - init_ts;
          if (E.is_v3) info.since_state_init_ms = Date.now() - state.get("init_ts");
          return info;
        };
        E.build = (opt, add_build) => {
          const info = Object.assign(E.build_info(opt), add_build || {});
          let s = "";
          for (let f in info) s += (s && "\n") + f + ": " + info[f];
          return s;
        };
        E.perr_id = (id, new_name) => {
          if (new_name) return "vpn." + E.browser() + "." + id;
          if (!id.match(/^be_/)) id = "be_" + id;
          return id;
        };
        function perr_send(id, info, opt) {
          opt = zutil.clone(opt || {});
          var qs = opt.qs || {},
            data = opt.data || {};
          data.is_json = 1;
          if (info && typeof info != "string") info = zerr.json(info);
          var err = opt.err;
          if (err) {
            if (!info) info = "" + (err.message || zerr.json(err));
            else if (!opt.bt) opt.bt = "" + (err.message || zerr.json(err));
            if (err.hola_info) {
              opt.bt =
                "status " +
                err.hola_info.status +
                " " +
                err.hola_info.method +
                " " +
                err.hola_info.url +
                " text " +
                ("" + err.hola_info.response_text).substr(0, 256) +
                "\n" +
                (opt.bt || "");
            }
          }
          data.info = info;
          qs.id = id;
          opt = { url: conf.url_perr + "/perr", qs, data, method: "POST", json: 1 };
          return ajax_cb ? ajax_cb(opt) : ajax(opt);
        }
        function perr_install(perr_orig, pending) {
          while (pending.length) perr_send.apply(null, pending.shift());
          return function (id, info, opt) {
            perr_orig.apply(null, arguments);
            return perr_send(id, info, opt);
          };
        }
        function laptop_test() {
          _is_laptop = storage.get("is_laptop");
          if (!_is_laptop && !E.is_mobile() && navigator && navigator.getBattery) {
            navigator.getBattery().then(function (b) {
              _is_laptop = !b.charging || b.chargingTime != 0;
              storage.set("is_laptop", _is_laptop);
            });
          }
        }
        let reinited = false;
        E.is_bg_reinited = () => reinited;
        E.init = () =>
          etask(function* () {
            init_ts = Date.now();
            if (E.is_v3) {
              state = new State(
                "util_state",
                { perr_rate_limit: {}, perr_dropped: {}, init_ts },
                { ttl: 24 * date.ms.HOUR, persistent: false }
              );
              yield state.load();
              if (state.get("init_ts")) reinited = true;
              else yield state.set("init_ts", init_ts);
            }
            laptop_test();
            zerr.perr_install(perr_install);
          });
        E.get_product = () => conf.type;
        E.get_connection_type = () => {
          const connection = navigator && (navigator.connection || navigator.mozConnection || navigator.webkitConnection);
          return connection && connection.type;
        };
        E.get_device_type = () => (E.is_mobile() ? "mobile" : _is_laptop ? "laptop" : "desktop");
        const get_ext_opt = () => ({
          ext_ver: E.version(),
          install_ver: E.install_version() || E.version(),
          install_ts: E.install_ts(),
          src_country: storage.get("src_country"),
          browser: E.browser(),
          now: E.now()
        });
        E.get_site_key = (root_url) => svc_util.get_site_key(E.get_bext_config(), get_ext_opt(), root_url);
        E.is_same_site = (root_url1, root_url2) => {
          if (root_url1 == root_url2) return true;
          let key1 = E.get_site_key(root_url1),
            key2 = E.get_site_key(root_url2);
          return !!(key1 && key2 && key1 == key2);
        };
        E.get_site_conf = (root_url, path, def) => svc_util.get_site_conf(E.get_bext_config(), get_ext_opt(), root_url, path, def);
        const get_tests_by_conf = (conf, path) => {
          let conf2test = conf && conf._conf2ab_test_;
          if (!conf2test || !path) return [];
          let key = path.split(".")[0];
          return conf2test[key];
        };
        E.get_trial_conf = (trial, path, def) => {
          trial = trial || {};
          let tests = get_tests_by_conf(trial.conf, path) || [];
          for (let test of tests) {
            if (ab_test_report) ab_test_report(test, path);
          }
          return path ? zutil.get(trial.conf, path, def) : trial.conf || def;
        };
        let ab_test_report;
        E.set_ab_test_report_cb = (cb) => (ab_test_report = cb);
        E.get_suggestion_conf = (site_conf, src_country) => {
          if (!site_conf) return;
          src_country = (src_country || "").toUpperCase();
          let suggestion_popup = site_conf.suggestion_popup || {};
          return suggestion_popup[src_country] === undefined ? suggestion_popup["*"] : suggestion_popup[src_country];
        };
        E.convert_url2regex = (conf, name) => {
          const rules = conf && conf[name];
          if (!rules) return;
          conf[name] = rules.map((rule) =>
            assign({}, rule, {
              url:
                typeof rule.url == "string"
                  ? new RegExp(rule.url.replace(/\./g, "\\.").replace(/\*\*/, "*").replace(/^\*/, "").replace(/\*/g, ".*"))
                  : rule.url
            })
          );
        };
        E.find_conf_rule_by_url = (conf, name, url) => {
          const rules = conf && conf[name];
          if (rules) return rules.find((r) => r.url && r.url.test && r.url.test(url));
        };
        E.get_site_verify_conf = (root_url, url, country) => {
          let verify;
          if (!(verify = E.get_site_conf(root_url, "verify"))) return;
          let sv,
            site,
            name = verify[country] === undefined ? "*" : country;
          if (!(site = E.find_conf_rule_by_url(verify, name, url)) && (!(sv = verify[name]) || !sv.find((v) => !v.url))) {
            return;
          }
          let key = E.get_site_key(root_url),
            idx = key.indexOf("_");
          return assign({ id: key.slice(0, idx != -1 ? idx : undefined) }, site);
        };
        E.get_dont_show_def_period = () => E.CG("popup.dont_show_def_period", "7d");
        E.reload_ext = (cb, period) => {
          var info;
          period = period || date.ms.MIN;
          if (!(info = storage.get_json("reload_ext"))) info = { ts: Date.now(), count: 0 };
          var diff = Date.now() - info.ts;
          if (diff > period || diff < 0) {
            info.ts = Date.now();
            info.count = 1;
          } else if (info.count < 2) info.count++;
          else return zerr("too many reload_ext " + info.count);
          storage.set_json("reload_ext", info);
          cb();
          return true;
        };
        E.reload_ext_native = function (args) {
          E.perr("be_runtime_reload_ext");
          storage.set("reload_ext_ts", Date.now());
          if (chrome.runtime.reload) return chrome.runtime.reload();
          var bg = chrome.extension.getBackgroundPage();
          bg.location.reload();
          if (self != bg) self.close();
        };
        E.check_permission = (name) => {
          if (!chrome || !chrome.permissions) return;
          return etask({ name: "check_permission", cancel: true }, function* check_permission() {
            try {
              let info = { origins: E.is_v3 ? ["*://*/*"] : ["<all_urls>"] };
              if (name) info.permissions = [name];
              chrome.permissions.contains(info, (res) => this.continue(res));
              return yield this.wait();
            } catch (e) {
              E.perr("check_permission_failed", {}, { err: e });
            }
          });
        };
        E.grant_permission = function (name) {
          if (!chrome || !chrome.permissions) return;
          return etask({ name: "grant_permission", cancel: true }, function* grant_permission() {
            try {
              chrome.permissions.request({ permissions: [name], origins: E.is_v3 ? ["*://*/*"] : ["<all_urls>"] }, (res) =>
                this.continue(res)
              );
              return yield this.wait();
            } catch (e) {
              E.perr("grant_permission_failed", {}, { err: e });
            }
          });
        };
        E.set_ajax_cb = (cb) => {
          ajax_cb = cb;
        };
        E.set_bext_config_cb = (cb) => {
          bext_config_cb = cb;
        };
        E.format_log = (log) => {
          const skips = [
            /backbone\.\w+\./,
            /ajax.*(perr| url )/,
            /perr.*rate too high/,
            /connection.*tpopup(_int)?:[0-9]+/,
            /be_tab_unblocker.*chrome-extension/,
            /stop .*cws/,
            /: (tab:[\d-]+ )?[a-z.]*popup /,
            /fetch_rules/,
            /be_req_bw/,
            /update url .* is_vpn false/,
            /checking if site has high unblocking/,
            /impl\.init/,
            /be_(bw_)?req_err/,
            /not_working_trigger/,
            /be\.ccgi\.send/,
            /be_vpn_total_active_time/,
            /be_media_failure/
          ];
          const formats = [{ from: /(perr [\w.]+) .*$/, to: "$1" }];
          const format = (line) => {
            let ret = line;
            formats.forEach((f) => {
              ret = ret.replace(f.from, f.to);
            });
            return ret;
          };
          const map = (line) => {
            if (!/]$/.test(line)) return format(line);
            let cnt = 0,
              str;
            let args_len = line
              .split("")
              .reverse()
              .findIndex((c) => {
                if (c == '"') return void (str = !str);
                return !str && (cnt += c == "]" ? 1 : c == "[" ? -1 : 0) == 0;
              });
            if (args_len == -1) return format(line);
            args_len++;
            const fmt = line.slice(0, -args_len);
            try {
              const args = JSON.parse(line.slice(-args_len));
              line = sprintf.apply(null, [fmt].concat(args));
            } catch (e) {
              line += " (truncated)";
            }
            return format(line);
          };
          return (log || []).map(map).filter((line) => !skips.find((s) => s.test(line)));
        };
        function throttle_log(log, agg) {
          const throttle = [
            { test: /tab_unblocker slow/, per: date.ms.MIN },
            { test: /media failure detected/, per: date.ms.SEC },
            { test: /popup not allowed/ },
            { test: /tab already attached/ },
            { test: /perr be_wrong_agent/ }
          ];
          return log
            .map((l) => {
              let t = throttle.find((_t) => _t.test.test(l));
              if (!t) return l;
              let m,
                prefix = ((m = l.match(/^\[[\w[\]]+\] /)) && m[0]) || "";
              let _l = l.replace(prefix, "");
              let date_str = _l.substr(0, 23),
                d = new Date(date_str);
              if (!t.last) {
                t.last = d;
                t.count = 0;
                return l;
              }
              let count = ++t.count;
              if (!t.per || (agg && d - t.last < t.per)) return;
              t.last = d;
              t.count = 0;
              return agg && count > 1 ? prefix + date_str + " x" + count + _l.substr(23) : l;
            })
            .filter((l) => l);
        }
        E.get_zerr_log = () => (zerr.log ? E.format_log(zerr.log).slice(-zerr.log.max_size) : []);
        E.get_log = (ui_log = []) => {
          let idx = 0;
          const be_ext = get_bg_module("be_ext");
          const is_premium = be_ext && be_ext.get("is_premium");
          const map = (f) => (l) => ({ from: f, line: l, idx: idx++ });
          const log = E.get_zerr_log()
            .map(map(is_bg ? "bg" : "ui"))
            .concat(ui_log.map(map("ui")))
            .sort((a, b) => (a.from == b.from ? a.idx - b.idx : a.line.localeCompare(b.line)))
            .map((c) => "[" + (is_premium ? "P" : "F") + "][" + c.from + "] " + c.line);
          return throttle_log(log, true);
        };
        E.perr_opt = (id, info, opt) => {
          const bg_main = get_bg_module("be_bg_main");
          let { err, bt, filehead } = opt,
            ver = E.version();
          bt = bt || (err && zerr.e2s(err));
          if (err && err.hola_info) {
            bt =
              "status " +
              err.hola_info.status +
              " " +
              err.hola_info.method +
              " " +
              err.hola_info.url +
              " text " +
              ("" + err.hola_info.response_text).substr(0, 256) +
              "\n" +
              bt;
          }
          if (err && err.etask) opt.err = _.omit(err, "etask");
          let qs = { id, ext_ver: ver, product: E.get_product(), browser: E.browser() };
          if (opt.with_log) filehead = (filehead || "") + "\n" + E.get_log(opt.ui_log);
          if (info && typeof info == "object") {
            info = assign({}, info);
            const url_keys = ["root_url", "root_url_prev", "tab_url", "page_url", "top_url"];
            for (let key of url_keys) {
              if (info[key] && typeof info[key] == "string" && !is_enabled_for_url(info[key])) {
                delete info[key];
              }
            }
          }
          opt.data = { bt, info, filehead, ver, build: E.build({ is_tpopup: opt.is_tpopup }, opt.build) };
          qs.uuid = (bg_main && bg_main.get("uuid")) || storage.get("uuid");
          opt.qs = qs;
          let err_re = /err|slow|problem|fail|bad|mismatch|invalid|wrong|missing/;
          opt.level = opt.level || (err || bt || id.match(err_re) ? zerr.L.ERR : zerr.L.NOTICE);
          return { id, info, opt };
        };
        let perr_cb;
        E.set_perr_cb = (cb) => (perr_cb = cb);
        E.trigger_user_message = (id) => {
          const ext = get_bg_module("be_ext");
          if (!ext) return;
          const valid_user_message = ext.get("valid_user_message") || [];
          let valid_till = -1;
          const is_msg_triggered = valid_user_message.find((vm) => {
            const trigger = vm.trigger;
            if (!trigger) return false;
            const events = vm.trigger.events;
            if (!events) return false;
            const found = events.indexOf(id) > -1;
            if (found) valid_till = trigger.expires ? Date.now() + trigger.expires : -1;
            return found;
          });
          if (!is_msg_triggered) return;
          const um = storage.get_json("user_message_show") || [];
          const um_shown = storage.get_json("user_message_shown") || [];
          if (um_shown.indexOf(is_msg_triggered.id) >= 0) return;
          const m_exist = um.find((one) => one.id == is_msg_triggered.id);
          if (m_exist) {
            m_exist.ts = Date.now();
            m_exist.valid_till = valid_till;
          } else {
            um.push(Object.assign({}, is_msg_triggered, { ts: Date.now(), valid_till }));
          }
          const n_um = um.slice();
          storage.set_json("user_message_show", n_um);
          ext.set("user_message_show", n_um);
        };
        E.perr = (id, info, opt, new_name) =>
          be_no_log.enabled(id)
            ? null
            : etask(function* () {
                info = info || {};
                opt = opt || {};
                id = E.perr_id(id, new_name);
                let conf_rate_limit = E.CG(`perr_rate_limit.${id}`);
                if (conf_rate_limit) {
                  opt.rate_limit = opt.rate_limit || {};
                  opt.rate_limit.count = conf_rate_limit;
                }
                if (E.is_v3 && state) {
                  let _rate_limit = opt.rate_limit || {};
                  opt.rate_limit = false;
                  let ms = _rate_limit.ms || date.ms.HOUR,
                    count = _rate_limit.count || 10;
                  let { disable_drop_count } = _rate_limit;
                  let rl = state.get(`perr_rate_limit.${id}`) || {};
                  let dropped = state.get(`perr_dropped.${id}`) || 0;
                  let drop = !rate_limit(rl, ms, count);
                  yield state.set(`perr_rate_limit.${id}`, rl);
                  if (drop) {
                    yield state.set(`perr_dropped.${id}`, dropped + 1);
                    zerr("perr %s %s rate too high %s %d %d", id, zerr.json(info), zerr.json(rl), ms, count);
                    return;
                  }
                  if (dropped) {
                    yield state.set(`perr_dropped.${id}`, 0);
                    if (!disable_drop_count && info && typeof info != "string") info.w = dropped;
                  }
                }
                const bg_main = get_bg_module("be_bg_main");
                if (conf.check_agree_ts && !(bg_main && bg_main.get("agree_ts"))) return void zerr("no agree_ts, skip perr %s", id);
                let browser_test = storage.get_json("test_from_browser_ab");
                if (!browser_test) browser_test = {};
                if (!opt.build) opt.build = {};
                const www_tests = yield be_vpn_util.get_www_tests();
                opt.build = Object.assign({}, opt.build, www_tests, browser_test);
                let perr_opt = E.perr_opt(id, info, opt);
                if (zutil.is_mocha()) return;
                let res = yield zerr.perr(id, perr_opt.info, perr_opt.opt);
                if (perr_cb) perr_cb(res);
                E.trigger_user_message(id);
                return res;
              });
        E.get_bext_config = () => (bext_config_cb ? bext_config_cb() : storage.get_json("bext_config_last"));
        E.CG = (path, def) => zutil.get(E.get_bext_config(), path, def);
        E.check_min_ver = (min_ver) => svc_util.check_min_ver(E.version(), min_ver);
        E.check_min_install_ver = (min_ver) => svc_util.check_min_install_ver(E.install_version() || E.version(), min_ver);
        E.check_min_install_ts = (ts) => svc_util.check_min_install_ts(E.install_ts(), ts);
        E.check_min_tfi = (tfi) => !tfi || Date.now() - E.install_ts() > tfi;
        E.is_conf_allowed = (on, id) => {
          let random;
          if (!on) return false;
          id = id || "ext_rand_id";
          if (!(random = +storage.get(id))) storage.set(id, (random = Math.random()));
          return random < on;
        };
        E.proxy_error_ui_enabled = (type) => {
          const c = E.CG("proxy_error_ui") || {};
          return !!(E.check_min_ver(c.min_ver) && c[type]);
        };
        E.set_hola_org_cookie = (name, value) => chrome.cookies.set({ url: `https://${www_host}`, domain: `.${www_host}`, name, value });
        E.del_hola_org_cookie = (name) => {
          try {
            chrome.cookies.remove({ url: `https://${www_host}`, name });
          } catch (e) {
            console.error(`falied to rm ${www_host} cookes %s`, e);
          }
        };
        let now_cb;
        E.set_now_cb = (cb) => (now_cb = cb);
        E.now = () => (now_cb ? now_cb() : Date.now());
        E.get_dpi = () => {
          try {
            let div = document.createElement("div");
            div.style.width = "1in";
            document.body.appendChild(div);
            let ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue("width");
            document.body.removeChild(div);
            return parseFloat(ppi) || 96;
          } catch (e) {
            console.error("failed to get dpi %s", e);
            return 96;
          }
        };
        E.set_full_browser_mode = (value) => storage.set("full_browser_mode", value);
        E.full_browser_mode = () => storage.get_json("full_browser_mode");
        E.init();
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    5250: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON
      ("use strict");
      (function () {
        const is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
          __webpack_require__(6386),
          __webpack_require__(5305),
          __webpack_require__(1291),
          __webpack_require__(3958),
          __webpack_require__(9824),
          __webpack_require__(843),
          __webpack_require__(1889)
        ]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (etask, zurl, zutil, pcountries, zerr, svc_util, hash) {
          const E = {};
          let conf;
          E.assert = (exp, err, msg) => {
            if (exp) return;
            zerr("assert failed exp %s err %s msg %s", exp, err, msg);
            err = err || exp;
            throw err instanceof Error ? err : new Error(err);
          };
          E.assert_bg = (f) => zerr.assert(E.is_bg(), `file ${f} can only be included in background`);
          E.assert_ui = (f) => zerr.assert(!E.is_bg(), `file ${f} can only be included in ui`);
          E.new_etask = (n) =>
            etask(n, function* new_etask() {
              yield this.wait();
            });
          E.set_timeout = (cb, t, opt) => {
            opt = opt || {};
            const name = "set_timeout_" + (opt.name || cb.name || "unknown");
            const sp = etask(function* set_timeout() {
              this.name = name;
              yield etask.sleep(t);
              cb();
            });
            if (opt.sp) opt.sp.spawn(sp);
            return sp;
          };
          E.set_interval = (cb, t, opt) => {
            opt = opt || {};
            const name = "set_interval_" + (opt.name || cb.name || "unknown");
            const sp = etask(function* set_interval() {
              this.name = name;
              while (true) {
                yield etask.sleep(t);
                cb();
              }
            });
            if (opt.sp) opt.sp.spawn(sp);
            return sp;
          };
          E.clear_timeout = E.clear_interval = (et) => {
            if (et) et.return();
          };
          E.is_all_browser = (rule) => rule && rule.name == "all_browser";
          E.is_debug_peer = (rule) => rule && rule.name == "debug_peer";
          E.set_conf = (c) => (conf = c);
          E.is_skip_url = (url) => {
            if (!url) return true;
            const protocol = zurl.get_proto(url),
              host = zurl.get_host(url);
            if (zurl.is_ip_port(host) || protocol.search(/^(http|https)$/) == -1 || host == "localhost" || !zurl.is_valid_domain(host)) {
              return true;
            }
            return zurl.is_hola_domain(host) && !/(access|unblock)\/([^/]*)\/using\/.*/.test(url);
          };
          E.is_google = (root_url) => root_url && (root_url.split(".")[0] == "google" || root_url.split(".")[1] == "google");
          E.is_stub_url = (url, is_premium) => E.is_skip_url(url) || (!is_premium && E.is_google(svc_util.get_root_url(url)));
          E.is_youtube = (root_url) => root_url && (root_url.split(".")[0] == "youtube" || root_url.split(".")[1] == "youtube");
          E.get_rules = (_rules, url, ignore) => {
            url = url || "";
            var _r,
              rules,
              ret = [],
              r_enabled = null;
            if (!_rules || !(rules = _rules.unblocker_rules)) return [];
            for (_r in rules) {
              var r = rules[_r];
              if (!r.supported) continue;
              if (!ignore && r.enabled && E.is_all_browser(r)) return [r];
              var urls = r.root_url;
              if (
                urls &&
                urls.some((rurl) => {
                  try {
                    return url.match(rurl);
                  } catch (e) {}
                })
              ) {
                if (r.enabled) r_enabled = r;
                else ret.push(r);
              }
            }
            if (r_enabled) ret.unshift(r_enabled);
            return ret;
          };
          E.get_tld_country = (host, strict_match) => {
            if (!host) return "";
            var tld = zurl.get_top_level_domain(host);
            if (!tld) return "";
            tld = tld.toUpperCase();
            if (!strict_match && tld == "COM") return "US";
            if (tld == "UK") tld = "GB";
            var skip_domain = ["TV", "FM", "IO", "AM"];
            if (skip_domain.includes(tld)) return "";
            if (!pcountries.proxy_countries.bext.includes(tld)) return "";
            return tld;
          };
          E.get_popular_country_old = (opt) => {
            var c0,
              c1,
              tld = E.get_tld_country(opt.host);
            var p = {};
            c0 = tld || "US";
            c1 = c0 == "US" ? "GB" : "US";
            p[c0] = { proxy_country: c0, rating: 0.02 };
            p[c1] = { proxy_country: c1, rating: 0.01 };
            var rule_ratings = opt.rule_ratings || [];
            rule_ratings.forEach((country_ratings) => {
              if (country_ratings.rating < 0.1) return;
              var country = country_ratings.proxy_country.toUpperCase();
              var ratings = { proxy_country: country, rating: country_ratings.rating };
              p[country] = ratings;
            });
            var popular_array = [];
            zutil.forEach(p, (r) => {
              popular_array.push(r);
            });
            popular_array.sort((a, b) => (a.rating - b.rating > 0 ? -1 : 1));
            return popular_array;
          };
          E.get_popular_country = (opt) => {
            let domain_country = E.get_tld_country(opt.host, true);
            let popular_obj = {};
            (opt.rule_ratings || []).forEach((country_ratings) => {
              if (country_ratings.rating < 0.1) return;
              const proxy_country = country_ratings.proxy_country.toUpperCase();
              popular_obj[proxy_country] = { proxy_country, rating: country_ratings.rating };
            });
            if (domain_country) {
              popular_obj[domain_country] = { proxy_country: domain_country, rating: 1.01 };
              const c1 = domain_country == "US" ? "GB" : "US";
              if (!popular_obj[c1]) popular_obj[c1] = { proxy_country: c1, rating: 0.01 };
            } else {
              const c0 = "US",
                c1 = "GB";
              if (!popular_obj[c0] || popular_obj[c0].rating < 1) popular_obj[c0] = { proxy_country: c0, rating: 0.99 };
              if (!popular_obj[c1]) popular_obj[c1] = { proxy_country: c1, rating: 0.01 };
            }
            let popular_array = Object.values(popular_obj);
            popular_array.sort((a, b) => (a.rating - b.rating > 0 ? -1 : 1));
            return popular_array;
          };
          E.must_verify_email = (user) => user && user.emails && !user.verified;
          E.get_rule_min_fmt = (rule) => zutil.pick(rule || {}, "name", "country");
          E.is_tpopup = () => {
            if (E.is_bg()) return false;
            if (E.get_tpopup_mode() == "window") return true;
            try {
              return self != self.top;
            } catch (e) {
              return true;
            }
          };
          E.is_bg = () => location.pathname == "/js/bg.html" || location.pathname == "/js/bg.bg.bundle.js";
          E.is_new_tab = (url) => url == "chrome://newtab/";
          E.is_browser_internal_url = (url) => !!url.match("^(chrome|opera|edge|hola|about):");
          E.root2url = (root_url) => "http://" + root_url + "/";
          E.get_tpopup_type = () => zutil.get(self, "hola.tpopup_opt.type");
          E.get_tpopup_mode = () => zutil.get(self, "hola.tpopup_opt.mode");
          E.get_peer_filter_opt = (s) => {
            if (!s) return;
            let res = {},
              g = {};
            let allowed = {
              country: { match: /[a-z]{2}/, group: 1 },
              asn: { match: /\d+(-\d+)*/, group: 1 },
              cid: { match: /\w+_\d+\.\d+\.\d+\.\d+_\d+/, group: 2 },
              ip: { match: /\d+\.\d+\.\d+\.\d+/, group: 3 }
            };
            s = s.split(",");
            for (let e of s) {
              let o = e.split(":");
              if (!allowed[o[0]] || !o[1] || !allowed[o[0]].match.test(o[1])) return;
              res[o[0]] = o[1];
              g[allowed[o[0]].group] = true;
            }
            return Object.keys(g).length == 1 && res;
          };
          E.get_user_name = (opt) => {
            let res =
              "user-uuid-" +
              opt.uuid +
              (opt.asnum && opt.peer_country
                ? "-asnum-" + opt.asnum + "-peer_country-" + opt.peer_country
                : opt.asnum
                ? "-asnum-" + opt.asnum
                : opt.cid
                ? "-peer_cid-" + opt.cid
                : opt.peer_ip
                ? "-peer_ip-" + opt.peer_ip
                : "");
            if (opt.is_premium !== undefined) res += "-is_prem-" + (opt.is_premium ? "1" : "0");
            return res;
          };
          E.get_cookies = (domain) =>
            etask(function* () {
              if (!self.chrome || !self.chrome.cookies) return null;
              return (yield etask.cb_apply(self.chrome.cookies, ".getAll", [{ domain }])) || [];
            });
          E.get_cookie = (domain, name) =>
            etask(function* () {
              if (!self.chrome || !self.chrome.cookies) return null;
              const cookies = yield E.get_cookies(domain);
              return (cookies.find((cookie) => cookie.name == name) || {}).value;
            });
          E.get_hola_cookie = (name) =>
            etask(function* () {
              for (const d of zurl.hola_domains) {
                const cookie = yield E.get_cookie("." + d, name);
                if (cookie) return cookie;
              }
            });
          E.get_hola_cookies = (names) =>
            etask(function* () {
              const res = {},
                cookies = {};
              for (const name of names) {
                for (let d of zurl.hola_domains) {
                  d = "." + d;
                  if (!cookies[d]) {
                    cookies[d] = {};
                    const _cookies = yield E.get_cookies(d);
                    if (_cookies) {
                      for (const c of _cookies) cookies[d][c.name] = c.value;
                    }
                  }
                  if (cookies[d] && cookies[d][name] && !res[name]) res[name] = cookies[d][name];
                }
              }
              return res;
            });
          E.get_www_tests = () =>
            etask(function* () {
              let ui_testing = yield E.get_hola_cookie("ui_testing");
              try {
                ui_testing = JSON.parse(decodeURIComponent(ui_testing));
              } catch (e) {
                ui_testing = {};
              }
              const res = {};
              for (let [k, v] of Object.entries(ui_testing)) {
                if (k.endsWith("_conf")) continue;
                const conf = ui_testing[`${k}_conf`];
                if (conf && conf.ext && conf.on > 0 && conf.on < 1) {
                  res[k] = v;
                  if (conf.name) res[conf.name] = v;
                }
              }
              return res;
            });
          E.get_replace_plan_conf = (value, rp) => {
            if (!rp || !rp.bext || !rp.on) return;
            if (rp.on == 1) return Object.assign({}, rp, { on: true });
            if (!value) return;
            value = Number.isInteger(value) ? value : hash.hash_string(value);
            return Object.assign({}, rp, { on: (value % 100) / 100 < rp.on });
          };
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    3958: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1291)]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (zutil) {
          var E = {};
          E.ports_offset = 24e3;
          E.ports = {
            af: { port: 0 },
            ax: { port: 1 },
            al: { port: 2 },
            dz: { port: 3 },
            as: { port: 4 },
            ad: { port: 5 },
            ao: { port: 6 },
            ai: { port: 7 },
            aq: { port: 8 },
            ag: { port: 9 },
            ar: { port: 10 },
            am: { port: 11 },
            aw: { port: 12 },
            au: { port: 13 },
            at: { port: 14 },
            az: { port: 15 },
            bs: { port: 16 },
            bh: { port: 17 },
            bd: { port: 18 },
            bb: { port: 19 },
            by: { port: 20 },
            be: { port: 21 },
            bz: { port: 22 },
            bj: { port: 23 },
            bm: { port: 24 },
            bt: { port: 25 },
            bo: { port: 26 },
            bq: { port: 27 },
            ba: { port: 28 },
            bw: { port: 29 },
            bv: { port: 30 },
            br: { port: 31 },
            io: { port: 32 },
            bn: { port: 33 },
            bg: { port: 34 },
            bf: { port: 35 },
            bi: { port: 36 },
            kh: { port: 37 },
            cm: { port: 38 },
            ca: { port: 39 },
            cv: { port: 40 },
            ky: { port: 41 },
            cf: { port: 42 },
            td: { port: 43 },
            cl: { port: 44 },
            cn: { port: 45 },
            cx: { port: 46 },
            cc: { port: 47 },
            co: { port: 48 },
            km: { port: 49 },
            cg: { port: 50 },
            cd: { port: 51 },
            ck: { port: 52 },
            cr: { port: 53 },
            ci: { port: 54 },
            hr: { port: 55 },
            cu: { port: 56 },
            cw: { port: 57 },
            cy: { port: 58 },
            cz: { port: 59 },
            dk: { port: 60 },
            dj: { port: 61 },
            dm: { port: 62 },
            do: { port: 63 },
            ec: { port: 64 },
            eg: { port: 65 },
            sv: { port: 66 },
            gq: { port: 67 },
            er: { port: 68 },
            ee: { port: 69 },
            et: { port: 70 },
            fk: { port: 71 },
            fo: { port: 72 },
            fj: { port: 73 },
            fi: { port: 74 },
            fr: { port: 75 },
            gf: { port: 76 },
            pf: { port: 77 },
            tf: { port: 78 },
            ga: { port: 79 },
            gm: { port: 80 },
            ge: { port: 81 },
            de: { port: 82 },
            gh: { port: 83 },
            gi: { port: 84 },
            gr: { port: 85 },
            gl: { port: 86 },
            gd: { port: 87 },
            gp: { port: 88 },
            gu: { port: 89 },
            gt: { port: 90 },
            gg: { port: 91 },
            gn: { port: 92 },
            gw: { port: 93 },
            gy: { port: 94 },
            ht: { port: 95 },
            hm: { port: 96 },
            va: { port: 97 },
            hn: { port: 98 },
            hk: { port: 99 },
            hu: { port: 100 },
            is: { port: 101 },
            in: { port: 102 },
            id: { port: 103 },
            ir: { port: 104 },
            iq: { port: 105 },
            ie: { port: 106 },
            im: { port: 107 },
            il: { port: 108 },
            it: { port: 109 },
            jm: { port: 110 },
            jp: { port: 111 },
            je: { port: 112 },
            jo: { port: 113 },
            kz: { port: 114 },
            ke: { port: 115 },
            ki: { port: 116 },
            kp: { port: 117 },
            kr: { port: 118 },
            kw: { port: 119 },
            kg: { port: 120 },
            la: { port: 121 },
            lv: { port: 122 },
            lb: { port: 123 },
            ls: { port: 124 },
            lr: { port: 125 },
            ly: { port: 126 },
            li: { port: 127 },
            lt: { port: 128 },
            lu: { port: 129 },
            mo: { port: 130 },
            mk: { port: 131 },
            mg: { port: 132 },
            mw: { port: 133 },
            my: { port: 134 },
            mv: { port: 135 },
            ml: { port: 136 },
            mt: { port: 137 },
            mh: { port: 138 },
            mq: { port: 139 },
            mr: { port: 140 },
            mu: { port: 141 },
            yt: { port: 142 },
            mx: { port: 143 },
            fm: { port: 144 },
            md: { port: 145 },
            mc: { port: 146 },
            mn: { port: 147 },
            me: { port: 148 },
            ms: { port: 149 },
            ma: { port: 150 },
            mz: { port: 151 },
            mm: { port: 152 },
            na: { port: 153 },
            nr: { port: 154 },
            np: { port: 155 },
            nl: { port: 156 },
            nc: { port: 157 },
            nz: { port: 158 },
            ni: { port: 159 },
            ne: { port: 160 },
            ng: { port: 161 },
            nu: { port: 162 },
            nf: { port: 163 },
            mp: { port: 164 },
            no: { port: 165 },
            om: { port: 166 },
            pk: { port: 167 },
            pw: { port: 168 },
            ps: { port: 169 },
            pa: { port: 170 },
            pg: { port: 171 },
            py: { port: 172 },
            pe: { port: 173 },
            ph: { port: 174 },
            pn: { port: 175 },
            pl: { port: 176 },
            pt: { port: 177 },
            pr: { port: 178 },
            qa: { port: 179 },
            re: { port: 180 },
            ro: { port: 181 },
            ru: { port: 182 },
            rw: { port: 183 },
            bl: { port: 184 },
            sh: { port: 185 },
            kn: { port: 186 },
            lc: { port: 187 },
            mf: { port: 188 },
            pm: { port: 189 },
            vc: { port: 190 },
            ws: { port: 191 },
            sm: { port: 192 },
            st: { port: 193 },
            sa: { port: 194 },
            sn: { port: 195 },
            rs: { port: 196 },
            sc: { port: 197 },
            sl: { port: 198 },
            sg: { port: 199 },
            sx: { port: 200 },
            sk: { port: 201 },
            si: { port: 202 },
            sb: { port: 203 },
            so: { port: 204 },
            za: { port: 205 },
            gs: { port: 206 },
            ss: { port: 207 },
            es: { port: 208 },
            lk: { port: 209 },
            sd: { port: 210 },
            sr: { port: 211 },
            sj: { port: 212 },
            sz: { port: 213 },
            se: { port: 214 },
            ch: { port: 215 },
            sy: { port: 216 },
            tw: { port: 217 },
            tj: { port: 218 },
            tz: { port: 219 },
            th: { port: 220 },
            tl: { port: 221 },
            tg: { port: 222 },
            tk: { port: 223 },
            to: { port: 224 },
            tt: { port: 225 },
            tn: { port: 226 },
            tr: { port: 227 },
            tm: { port: 228 },
            tc: { port: 229 },
            tv: { port: 230 },
            ug: { port: 231 },
            ua: { port: 232 },
            ae: { port: 233 },
            gb: { port: 234 },
            us: { port: 235 },
            um: { port: 236 },
            uy: { port: 237 },
            uz: { port: 238 },
            vu: { port: 239 },
            ve: { port: 240 },
            vn: { port: 241 },
            vg: { port: 242 },
            vi: { port: 243 },
            wf: { port: 244 },
            eh: { port: 245 },
            ye: { port: 246 },
            zm: { port: 247 },
            zw: { port: 248 }
          };
          E.init = function () {
            var pc = (E.proxy_countries = { bext: [] });
            for (var key in E.ports) pc.bext.push(key.toUpperCase());
            var no_flag = zutil.bool_lookup(
              "AX BL BQ BV IO CX CC CW FK " + "GF TF HM YT NU NF MP PN SH MF PM " + "SX GS SS SJ TK UM WF ZW GP RE AQ"
            );
            E.proxy_countries.bext = E.proxy_countries.bext.filter(function (c) {
              return !no_flag[c];
            });
          };
          E.init();
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    6467: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON
      ("use strict");
      (function () {
        let is_node = typeof module == "object" && module.exports;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(932), __webpack_require__(2569), __webpack_require__(1291)]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = ((date, zcountry, zutil) => {
          const E = { t: {} };
          const { ms } = date;
          E.desktop_gateways = ["paypal", "paymill", "avangate", "bluesnap", "paypal2", "coupon", "stripe"];
          E.mobile_gateways = ["android", "apple"];
          E.gateways = E.desktop_gateways.concat(E.mobile_gateways);
          E.grace = 1;
          E.periods = ["1 D", "1 W", "1 M", "6 M", "1 Y", "2 Y", "3 Y"];
          E.period_unit_to_ms = { D: ms.DAY, W: 7 * ms.DAY, M: ms.MONTH, Y: ms.YEAR };
          E.period_unit_names = { D: "day", W: "week", M: "month", Y: "year" };
          E.type2name = { plus: "premium", ultra: "ultra" };
          E.get_country_code = (membership) => {
            if (!membership) return;
            const country_name = membership.geo_country || membership.country;
            return zcountry.mixed2code(country_name) || country_name;
          };
          E.get_gateways = (type) => {
            if (!type) return [];
            switch (type) {
              case "desktop":
                return E.desktop_gateways;
              case "mobile":
                return E.mobile_gateways;
              case "paypal":
                return ["paypal", "paypal2"];
            }
            return E.gateways.includes(type) ? [type] : [];
          };
          E.get_period_ms = (period) => {
            const { count, unit } = E.parse_period(period) || {};
            return count * E.period_unit_to_ms[unit];
          };
          E.get_offsets = (d) => {
            const offsets = {};
            for (const p of E.periods) offsets[p] = E.offset_by_period(d, p, -1);
            return offsets;
          };
          E.offset_by_period = (d, period, factor = 1) => {
            d = date(d, true);
            const { count, unit } = E.parse_period(period) || {};
            switch (unit) {
              case "D":
                d.setUTCDate(d.getUTCDate() + count * factor);
                return d;
              case "W":
                d.setUTCDate(d.getUTCDate() + 7 * count * factor);
                return d;
              case "M": {
                const day = d.getUTCDate();
                d.setUTCMonth(d.getUTCMonth() + count * factor);
                if (d.getUTCDate() != day) d.setUTCDate(0);
                return d;
              }
              case "Y":
                d.setUTCFullYear(d.getUTCFullYear() + count * factor);
                return d;
            }
          };
          const get_end_by_period = (m, opt) => {
            opt = opt || {};
            let end = m.period ? E.offset_by_period(opt.start || m.start, m.period) : m.end || m.trial_end || m.grace_end;
            if (!end) throw "Unexpected period: " + m.period + " (" + JSON.stringify(m) + ")";
            end = date(end);
            if (!opt.disable_grace) end.setUTCDate(end.getUTCDate() + E.grace);
            return end;
          };
          E.get_length_by_period = (period) => {
            const start = Date.now();
            return get_end_by_period({ period }, { start }) - start;
          };
          E.get_end_by_period = get_end_by_period;
          E.get_end_date = (m) => {
            const ends = [];
            if (m && m.trial_end) ends.push(date(m.trial_end));
            if (m && m.grace_end) ends.push(date(m.grace_end));
            if (m && m.end) ends.push(date(m.end));
            if (m && m.start && m.period && (!m.cancelled || !m.end) && !E.is_trial(m)) {
              const _end = get_end_by_period(m);
              if (_end) ends.push(_end);
            }
            if (!ends.length) return null;
            const res = date(Math.max.apply(null, ends));
            return res;
          };
          E.is_active = (m) => {
            const now = Date.now();
            if (!m) return false;
            if (m.trial_end && now <= date(m.trial_end)) return true;
            if (m.grace_end && now <= date(m.grace_end)) return true;
            if (m.end && now <= date(m.end)) return true;
            if (m.start && m.period && now <= get_end_by_period(m) && !E.is_trial(m)) return !m.cancelled || !m.end;
            return false;
          };
          E.is_ultra = (m) => E.is_active(m) && m && m.type == "ultra";
          E.is_lifetime = (m) => m && m.period == "100 Y";
          E.is_in_trial = (m) => E.is_trial(m) && Date.now() < date(m.trial_end || m.end);
          E.is_trial = (m, type) => !!(m && ((m.trial_end && (!type || type == (m.type || "start"))) || (m.plan == "trial" && m.end)));
          E.is_in_grace = (m) => E.is_grace(m) && Date.now() < date(m.grace_end);
          E.is_grace = (m, type) => !!m && !!m.grace_end && (!type || type == (m.type || "start"));
          E.is_manual = (m) => !!m && m.plan == "manual";
          E.had_premium = (history) => !!history && history.some((m) => !E.is_trial(m));
          E.had_trial = (history, type) => !!history && history.some((h) => E.is_trial(h, type));
          E.had_grace = (history, type) => !!history && history.some((h) => E.is_grace(h, type));
          E.trial_forbidden = (m, history, type) => {
            if (E.is_in_trial(m)) return "trial exists";
            if (E.is_trial(m, type)) return "trial expired";
            if (E.is_active(m)) return "already premium";
            if (E.had_premium(history)) return "had premium";
            if (E.had_trial(history, type)) return "had trial";
            return false;
          };
          E.grace_period_forbidden = (m, history, type) => {
            if (E.is_in_grace(m)) return "grace exists";
            if (E.is_grace(m, type)) return "grace expired";
            if (E.is_active(m)) return "already premium";
            if (E.had_grace(history, type)) return "had grace";
            return false;
          };
          E.is_paid = (m) => !!m && !!m.gateway;
          E.is_paid_amount = (m) => E.is_paid(m) && (m.amount || m.amount_usd);
          E.is_expired = (m) => {
            const end_date = E.get_end_date(m);
            return !!end_date && Date.now() > end_date;
          };
          E.classify = (m) => {
            if (E.is_active(m)) return E.is_in_trial(m) ? "trial" : "premium";
            if (E.is_expired(m)) return E.is_trial(m) ? "trial_expired" : "premium_expired";
            return "free";
          };
          E.gen_email_hash = (email, md5) => md5("hola unsubscribe " + email).substr(0, 8);
          E.fmt_date = (d, fmt) => (d ? date.strftime(fmt || "%o %B %Y", date(d)) : "-");
          E.is_ios = (m) => m.gateway == "apple" || m.product == "ios";
          E.is_mobile = (m) => E.is_ios(m) || (!!m.gateway && !E.desktop_gateways.includes(m.gateway));
          E.is_desktop = (m) => E.desktop_gateways.includes(m.gateway);
          E.get_plan_short_name = (period) => {
            const { count, unit } = E.parse_period(period) || {};
            const period_name = E.period_unit_names[unit];
            let short_name = { "1 D": "Daily", "1 W": "Weekly", "1 M": "Monthly", "1 Y": "Yearly" }[period];
            if (!short_name) {
              short_name = count + " " + period_name[0].toUpperCase() + period_name.substr(1);
              if (count > 1) short_name += "s";
            }
            return short_name;
          };
          E.get_period_with_price = (m) => {
            if (m.plan == "signup_bonus") return "Signup bonus";
            if (m.period == "100 Y") return "Lifetime";
            const { count, unit } = E.parse_period(m.period) || {};
            if (m.gateway == "coupon" && count) return count + "-" + E.period_unit_names[unit];
            const end = E.get_end_date(m);
            if (m.cancelled) return "Till " + E.fmt_date(end);
            const show_price = (name) => {
              if (!m.amount) return name;
              const price = m.amount;
              const currency = m.currency;
              const vat = m.vat;
              const p = +(price / count).toFixed(2);
              const cp = zcountry.currency2prefix(currency);
              return (
                name +
                ", " +
                cp +
                p +
                "/" +
                E.period_unit_names[unit] +
                (vat && vat.percent ? " (includes VAT " + vat.percent + "% " + cp + vat.amount + ")" : "")
              );
            };
            switch (unit) {
              case "W":
                if (count == 1) return show_price("Weekly");
                return show_price(count + "-week");
              case "M":
                if (count == 1) return show_price("Monthly");
                if (count == 6) return show_price("Half-yearly");
                return show_price(count + "-month");
              case "Y":
                if (count == 1) return show_price("Yearly");
                return show_price(count + "-year");
              case "D":
                return show_price(count + "-day");
            }
            if (!m.end) return m.grace_end ? "updating" : "-";
            return (m.gateway ? "Till " : "Manual till ") + E.fmt_date(end);
          };
          E.get_per = (period, full) => {
            const { count, unit } = E.parse_period(period) || {};
            const name = E.period_unit_names[unit];
            return count == 1 ? (full ? count + " " : "") + name : count + " " + name + "s";
          };
          E.sum_period = (p1, p2) => {
            const { count: c1, unit: u1 } = E.parse_period(p1) || {};
            const { count: c2, unit: u2 } = E.parse_period(p2) || {};
            if (u1 == u2) return `${c1 + c2} ${u1}`;
            let c_min, c_max, u_min, u_max;
            const ums = E.period_unit_to_ms;
            if (ums[u1] > ums[u2]) {
              c_max = c1;
              u_max = u1;
              c_min = c2;
              u_min = u2;
            } else {
              c_max = c2;
              u_max = u2;
              c_min = c1;
              u_min = u1;
            }
            if (u_min == "D") return c_min + (c_max * ums[u_max]) / ums.D + " D";
            if (u_min == "W") return c_min * 7 + (c_max * ums[u_max]) / ums.D + " D";
            if (u_min == "M") return c_min + c_max * 12 + " M";
          };
          E.period_start_str = (m) => E.fmt_date(m.start);
          E.period_end_str = (m, fmt) => {
            if (E.is_in_trial(m)) return "Trial valid until " + E.fmt_date(m.trial_end);
            if (m.next_renewal_date) return E.fmt_date(m.next_renewal_date);
            if (m.cancelled || !m.period) return m.grace_end ? "updating" : "-";
            return E.fmt_date(m.end || E.offset_by_period(m.start, m.period), fmt);
          };
          E.is_unassoc_trial = (m) => E.is_trial(m) && E.is_ios(m);
          E.is_bonus = (m) => m && m.plan == "signup_bonus";
          E.payment_label = (m) => {
            if (E.is_unassoc_trial(m) || E.is_bonus(m)) return "-";
            switch (m.gateway) {
              case "paypal":
              case "paypal2":
                return "PayPal";
              case "coupon":
                return "Coupon";
              case "paymill":
                return "Credit card ************" + (((m.paymill | {}).payment || {}).last4 || "****");
              case "avangate":
              case "stripe":
              case "bluesnap":
                return "Credit card";
              case "apple":
                return "App Store";
              case "android":
                return "Google Play";
              default:
                return m.grace_end ? "updating" : m.plan == "manual" ? "Other" : "Google Play";
            }
          };
          const gateway_id_path = (gateway) => {
            switch (gateway) {
              case "paypal":
              case "paypal2":
                return "paypal.subscr_id";
              case "coupon":
                return "coupon.code";
              case "bluesnap":
                return "bluesnap.subscr_id";
              case "stripe":
                return "stripe.subscr_id";
              case "apple":
                return "apple_ios.original_transaction_id";
              case "android":
                return "google_apk.purchase_token";
              case "avangate":
                return "avangate.subscr_ref";
              case "paymill":
                return "paymill.subscription_id";
            }
          };
          E.get_paypal_id = (m) => zutil.get(m, "paypal.subscr_id") || zutil.get(m, "paypal2.subscr_id") || zutil.get(m, "paypal.txn_id");
          E.parse_id = (subscr_id, gateway) => {
            if (gateway == "bluesnap" && subscr_id) return +subscr_id;
            return subscr_id;
          };
          E.get_id = (m, gateway) => {
            if (!m) return;
            if (m && m.plan == "manual") return +date(m.start);
            gateway = gateway || m.gateway;
            switch (gateway) {
              case "paypal":
              case "paypal2":
                return E.get_paypal_id(m);
              case "bluesnap_gpay":
              case "bluesnap_apm":
              case "bluesnap_applepay":
              case "bluesnap":
                return m.bluesnap && (m.bluesnap.subscr_id || m.bluesnap.ref);
              case "apple":
                return zutil.get(m, "apple_ios.original_transaction_id") || zutil.get(m, "apple_ios.transaction_id");
              case "coupon":
              case "android":
              case "avangate":
              case "stripe":
              case "paymill":
                return zutil.get(m, gateway_id_path(gateway));
            }
          };
          E.get_gateway_name = (m, gateway) => {
            gateway = gateway || (m && m.gateway);
            switch (gateway) {
              case "bluesnap":
                if (zutil.get(m, "bluesnap.gpay")) gateway = "bluesnap_gpay";
                else if (zutil.get(m, "bluesnap.applepay")) gateway = "bluesnap_applepay";
                else if (!zutil.get(m, "bluesnap.subscr_id") && zutil.get(m, "bluesnap.ref")) {
                  gateway = "bluesnap_apm";
                }
                break;
              case "paypal":
              case "paypal2":
                gateway = "paypal";
                break;
              case "avangate":
              case "stripe":
              case "apple":
              case "android":
              case "coupon":
              case "paymill":
              case "bluesnap_gpay":
              case "bluesnap_apm":
              case "bluesnap_applepay":
                break;
              default:
                if (m && m.plan == "trial") gateway = "trial";
                else if (m && m.plan == "grace") gateway = "grace";
                else if (m && m.plan == "manual") gateway = "manual";
                else gateway = "unknown";
            }
            return gateway;
          };
          E.get_full_id = (m, gateway, id) => {
            id = id || E.get_id(m);
            if (!id) return;
            return E.get_gateway_name(m, gateway) + "-" + id;
          };
          E.is_cancellable_mobile = (m) => E.is_mobile(m) && !E.is_unassoc_trial(m) && (m.cancelled || m.cancellation_reason);
          E.is_cancellable = (m) => !m.cancelled && !E.is_cancellable_mobile(m) && !E.is_unassoc_trial(m) && !m.grace_end && !E.is_bonus(m);
          E.get_plan_currency = (plan, currency) => {
            if (!currency || !plan) return "USD";
            currency = currency.toUpperCase();
            if (currency == "USD") return "USD";
            if (!plan.currency || !plan.currency[currency.toLowerCase()]) return "USD";
            return currency;
          };
          E.get_price_plan = (plan, currency) => {
            currency = ("" + currency).toLowerCase();
            return currency == "usd" || !plan.currency || !plan.currency[currency] ? plan : plan.currency[currency];
          };
          E.is_better = (m1, m2) => {
            if (!m1) return false;
            if (!m2) return true;
            if (m1.type == "ultra" && m2.type != "ultra") return true;
            if (m2.type == "ultra" && m1.type != "ultra") return false;
            if (!m1.period && m1.plan != "manual" && m2.period) return false;
            if (!m2.period && m2.plan != "manual" && m1.period) return true;
            const start = Date.now();
            const end1 = get_end_by_period(m1, { start, disable_grace: true });
            const end2 = get_end_by_period(m2, { start, disable_grace: true });
            return end1 > end2;
          };
          E.is_more_actual = (m1, m2) => {
            if (!m1) return false;
            if (!m2) return true;
            if (!m1.period && m1.plan != "manual") return false;
            if (!m2.period && m2.plan != "manual") return true;
            const end1 = E.get_end_date(m1);
            const end2 = E.get_end_date(m2);
            return end1 > end2;
          };
          E.find_last = (m, history, subscr_id) => {
            if (m && E.get_id(m) == subscr_id) return { m };
            if (!Array.isArray(history)) return {};
            for (let i = history.length - 1; i >= 0; i--) {
              if (E.get_id(history[i]) == subscr_id) return { m: history[i], index: i };
            }
            return {};
          };
          E.t.get_exp_date_by_gateway = (m, gateway) => {
            gateway = gateway || m.gateway;
            switch (gateway) {
              case "bluesnap":
                return zutil.get(m, "bluesnap.exp_date");
              case "stripe":
                return zutil.get(m, "stripe.exp_date");
              case "android":
                return zutil.get(m, "google_apk.expiry");
            }
          };
          const get_seq_id_by_exp = (exp, period) => {
            period = period.split(" ");
            const align = { D: "DAY", W: "WEEK", M: "MONTH", Y: "YEAR" }[period[1]];
            return +date.align(exp, align);
          };
          const get_seq_data = (m) => {
            if (!m || !m.period) return;
            const exp_date = E.t.get_exp_date_by_gateway(m);
            let exp = date(exp_date || E.offset_by_period(m.start, m.period));
            if (m.end && date(m.end) > exp) exp = date(m.end);
            return { seq_id: get_seq_id_by_exp(exp, m.period), exp, persistent: m.persistent || !!exp_date };
          };
          E.get_seq_id = (m) => {
            const res = get_seq_data(m);
            return res && res.seq_id;
          };
          E.make_seqs = (memberships) => {
            const ids = new Set();
            for (const m of memberships) {
              const id = E.get_id(m);
              if (id) ids.add(id);
            }
            const res = {};
            for (const id of ids) res[id] = E.make_seq(memberships, id);
            return res;
          };
          E.make_seq = (memberships, subscr_id) => {
            const list = [];
            for (const m of memberships) {
              if (!E.is_paid_amount(m) || { trial: 1, grace: 1 }[m.plan]) continue;
              if (subscr_id && E.get_id(m) != subscr_id) continue;
              list.push(m);
            }
            list.sort((m1, m2) => {
              if (date(m1.start) < date(m2.start)) return -1;
              if (date(m1.start) > date(m2.start)) return 1;
              return 0;
            });
            let seq = [];
            for (let i = 0; i < list.length; i++) {
              const m = list[i];
              const start = date(m.start);
              let { seq_id, exp, persistent } = get_seq_data(m) || {};
              const last = seq[seq.length - 1];
              if (last && !(start - date(last.m.start))) {
                if (persistent && !last.persistent) seq[seq.length - 1] = { m, seq_id, exp, persistent };
                seq[seq.length - 1].duplicate = true;
                continue;
              }
              const end = m.end && date(m.end);
              if (last && end && start < end && end < last.exp) {
                last.duplicate = true;
                continue;
              }
              const next_seq_id = last && +E.offset_by_period(last.seq_id, m.period);
              if (next_seq_id && seq_id > next_seq_id && seq_id <= +E.offset_by_period(next_seq_id, m.period)) {
                exp = E.offset_by_period(last.exp, m.period);
                seq_id = next_seq_id;
              }
              if (last && last.seq_id >= seq_id) {
                if (last.seq_id == seq_id && (!persistent || (persistent && last.persistent))) {
                  last.duplicate = true;
                  continue;
                }
                const new_seq = [{ m, seq_id, exp, persistent }];
                for (let j = seq.length - 1; j >= 0; j--) {
                  const item = seq[j];
                  if (!item.persistent) {
                    item.exp = E.offset_by_period(new_seq[0].exp, m.period, -1);
                    item.seq_id = get_seq_id_by_exp(item.exp, m.period);
                  }
                  if (item.seq_id >= new_seq[0].seq_id || item.exp < date(item.m.start)) {
                    if (item.persistent) new_seq[0] = item;
                    new_seq[0].duplicate = true;
                    continue;
                  }
                  new_seq.unshift(item);
                }
                seq = new_seq;
                continue;
              }
              seq.push({ m, seq_id, exp, persistent });
            }
            return seq;
          };
          const omit_meta = (o) => (!o ? null : zutil.omit(o, ["actual_from", "actual_to"]));
          E.parse_period = (period) => {
            const m = ("" + period).match(/^(\d+)\s?([dwmy])$/i);
            if (!m) return;
            return { count: +m[1], unit: m[2].toUpperCase() };
          };
          E.is_duplicate = (m1, m2) => {
            let omitted_m1 = omit_meta(m1);
            let omitted_m2 = omit_meta(m2);
            if (m1 && m2 && m2.start - m1.start < date.ms.DAY) {
              omitted_m1 = zutil.omit(omitted_m1, ["start"]);
              omitted_m2 = zutil.omit(omitted_m2, ["start"]);
            }
            return zutil.equal_deep(omitted_m1, omitted_m2);
          };
          return E;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    843: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON
      ("use strict");
      (function () {
        const is_node = typeof module == "object" && module.exports && module.children;
        var is_rn =
          (typeof global == "object" && !!global.nativeRequire) || (typeof navigator == "object" && navigator.product == "ReactNative");
        if (is_rn) {
        } else if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
          __webpack_require__(4996),
          __webpack_require__(1291),
          __webpack_require__(5305),
          __webpack_require__(6262)
        ]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (sprintf, zutil, zurl, version_util) {
          const E = {};
          const assign = Object.assign;
          E.get_root_domain = zurl.get_root_domain;
          E.get_root_url = (url) => {
            if (url == "chrome://newtab/") return "newtab";
            const n = (url || "").match(/^https?:\/\/([^\/]+)(\/.*)?$/);
            if (!n) return null;
            return E.get_root_domain(n[1]);
          };
          E.find_rule = (rules, opt) => {
            if (!rules) return;
            for (let i in rules) {
              const r = rules[i];
              if (
                opt.name == r.name &&
                (opt.type === undefined || opt.type == r.type) &&
                (opt.md5 === undefined || opt.md5 == r.md5) &&
                (opt.country === undefined || opt.country.toLowerCase() == r.country.toLowerCase())
              ) {
                return r;
              }
            }
            return null;
          };
          E.gen_route_str = (route_opt, opt) => {
            opt = opt || {};
            if (route_opt.direct) return "direct";
            let s = route_opt.country.toLowerCase(),
              r = [];
            if (route_opt.peer) r.push("peer");
            if (route_opt.pool) {
              r.push("pool" + (typeof route_opt.pool == "string" ? "_" + route_opt.pool : ""));
            }
            if (!opt.no_algo && route_opt.algo) r.push(route_opt.algo);
            if (r.length) s += "." + r.join(",");
            return s;
          };
          function ip_list_to_agents(ip_list) {
            return fix_zagent(Object.keys(ip_list).join(","));
          }
          function fix_zagent(s) {
            return s.replace(/.hola.org/g, "").replace(/zagent/g, "za");
          }
          function pad(num, size) {
            return ("000" + num).slice(-size);
          }
          function time_str(d) {
            d = new Date(d);
            if (isNaN(d)) return "00:00:00.000";
            return (
              pad(d.getUTCHours(), 2) +
              ":" +
              pad(d.getUTCMinutes(), 2) +
              ":" +
              pad(d.getUTCSeconds(), 2) +
              "." +
              pad(d.getUTCMilliseconds(), 3)
            );
          }
          E.events_enabled = false;
          E.events = [];
          E.events_n = {};
          E.reset_events = () => {
            E.events = [];
            E.events_n = {};
          };
          E.push_event = (name, opt) => {
            try {
              if (!E.events_enabled) return;
              if (E.events.length > 512) E.events.splice(0, E.events.length / 2);
              E.events.push({ name, ts: Date.now(), opt });
              E.events_n[name] = (E.events_n[name] || 0) + 1;
            } catch (err) {
              console.error("push_event error %s", err && err.stack);
            }
          };
          E.enable_events_logging = (enabled) => {
            E.events_enabled = !!enabled;
            if (!enabled) E.reset_events();
          };
          E.get_event_n = (e) => E.events_n[e];
          E.events_to_str = () => {
            let s = "",
              a = [];
            E.events.forEach((e) => {
              let s = time_str(e.ts) + " " + e.name,
                o = e.opt;
              switch (e.name) {
                case ">zgettunnels":
                  s += sprintf(
                    " %s%s",
                    o.country,
                    (o.exclude || []).length ? " exclude " + o.exclude.map((e) => fix_zagent(e)).join(",") : ""
                  );
                  break;
                case "<zgettunnels":
                  s += sprintf(" %s%s", o.country, " agents " + ip_list_to_agents(o.ip_list));
                  break;
                case "set_rule":
                  s += sprintf(
                    " %s%s%s%s%s",
                    o.name,
                    o.enabled ? " " + o.country : " off",
                    o.del ? " del" : "",
                    o.src ? " src " + o.src : "",
                    !o.full_vpn ? " !full_vpn" : "",
                    o.mode == "unblock" ? "" : " mode " + o.mode
                  );
                  break;
                case "<verify_err":
                  s += sprintf(" %s %s", o.host ? fix_zagent(o.host) : o.ip, " " + o.err);
                  break;
                case "<verify":
                  s += sprintf(" %s %s", o.host ? fix_zagent(o.host) : o.ip, o.rtt ? o.rtt + "ms" : "!rtt");
                  break;
                case ">verify":
                  s += sprintf(" %s", o.host ? fix_zagent(o.host) : o.ip);
                  break;
                case ">stuck":
                case ">stuck_long":
                  break;
                case "<stuck_end":
                  s += sprintf(" %sms", o.duration);
                  break;
                case "pac_miss":
                  s += sprintf(" %s!=%s %s", o.req_ip, o.agent_ip, o.url);
                  break;
                case "pac_reload":
                  s += sprintf(" after %ssec", (o.new_ts - o.init_ts) / 1e3);
                  break;
                case "navgiate":
                  s += sprintf(" tab %s %s", o.tab_id, o.url);
                  break;
                case "popup_render":
                case "tpopup_render":
                  break;
                case "pac_slow":
                  s += sprintf(" %dms %s", o.dur, (o.url || "").substr(0, 50));
                  break;
                default:
                  s += JSON.stringify(o) || "";
                  break;
              }
              a.push(s);
            });
            a = a.reverse();
            return a.join("\n");
          };
          class Domain_tree {
            constructor() {
              this.clear();
            }
            *[Symbol.iterator]() {
              let parts = [];
              for (let item of Domain_tree.iterate_subtree(parts, this.tree)) yield item;
            }
            clear() {
              this.tree = {};
            }
            get_value(domain) {
              if (!domain) return;
              let parts = domain.split(".");
              let leaf = this.tree,
                value = leaf[Domain_tree.VALUE];
              for (let i = parts.length - 1; leaf && i >= 0; i--) {
                leaf = leaf[parts[i]];
                value = leaf && Domain_tree.VALUE in leaf ? leaf[Domain_tree.VALUE] : value;
              }
              return value;
            }
            set_value(domain, value) {
              if (!domain) return void (this.tree[Domain_tree.VALUE] = value);
              let parts = domain.split(".");
              let leaf = this.tree;
              for (let i = parts.length - 1; i >= 0; i--) leaf = leaf[parts[i]] = leaf[parts[i]] || {};
              leaf[Domain_tree.VALUE] = value;
            }
          }
          Domain_tree.VALUE = Symbol.for("value");
          Domain_tree.iterate_subtree = function* (parts, leaf) {
            if (Domain_tree.VALUE in leaf) yield [parts.slice().reverse().join("."), leaf[Domain_tree.VALUE]];
            for (let key in leaf) {
              parts.push(key);
              for (let item of Domain_tree.iterate_subtree(parts, leaf[key])) yield item;
              parts.pop();
            }
          };
          E.Domain_tree = Domain_tree;
          E.get_site_key = (conf, ext_opt, root_url) => {
            let { ext_ver } = ext_opt;
            let sites = (conf && conf.sites) || {};
            return Object.keys(sites).find((k) => {
              let v = sites[k];
              let urls = Array.isArray(v.root_url) ? v.root_url : [v.root_url];
              return urls.includes(root_url) && E.check_min_ver(ext_ver, v.min_ver);
            });
          };
          const get_match_fn = (operator) => {
            if (operator == "gt") return (a, b) => a > b;
            if (operator == "gte") return (a, b) => a >= b;
            if (operator == "lt") return (a, b) => a < b;
            if (operator == "lte") return (a, b) => a <= b;
            if (operator == "in") return (a, b) => Array.isArray(b) && b.includes(a);
            if (operator == "re") return (a, b) => b.test(a);
            return (a, b) => {
              if (!Array.isArray(a)) return a == b;
              if (!Array.isArray(b)) b = [b];
              return b.every((i) => a.includes(i));
            };
          };
          E.match_filter = (query, filter) => {
            if (!filter) return true;
            if (!query) return false;
            query = assign({}, query);
            for (let key in query) {
              if (key.endsWith("_ts") && query.now) query["since_" + key] = query.now - query[key];
            }
            for (let f_key in filter) {
              let m = f_key.match(/^(.*)_(gt|gte|lt|lte|in|re)$/);
              let q_key = m ? m[1] : f_key;
              let operator = m ? m[2] : "eq";
              if ((operator == "in" && !Array.isArray(filter[f_key])) || (operator == "re" && !(filter[f_key] instanceof RegExp))) {
                q_key = f_key;
                operator = "eq";
              }
              let op1, op2;
              if (q_key.endsWith("_ver") && operator != "in" && operator != "re") {
                op1 = version_util.cmp(query[q_key], filter[f_key]);
                op2 = 0;
              } else {
                op1 = query[q_key];
                op2 = filter[f_key];
              }
              if (!get_match_fn(operator)(op1, op2)) return false;
            }
            return true;
          };
          const apply_conf_override = (site_conf, ext_opt) => {
            let { ext_ver, install_ver, install_ts } = ext_opt;
            let { override } = site_conf;
            site_conf = zutil.omit(site_conf, ["override"]);
            if (!override) return site_conf;
            let versions = Object.keys(override).sort((a, b) => -version_util.cmp(a, b));
            let ver = versions.find(
              (v) =>
                E.check_min_ver(ext_ver, v) &&
                E.check_min_install_ver(install_ver, override[v].install_min_ver) &&
                E.check_min_install_ts(install_ts, override[v].install_min_ts)
            );
            if (ver) {
              site_conf = zutil.extend_deep(zutil.clone_deep(site_conf), zutil.omit(override[ver], ["install_min_ver", "install_min_ts"]));
            }
            return site_conf;
          };
          const apply_trial_conf_override = (tconf, ext_opt) => {
            let { override } = tconf;
            tconf = zutil.omit(tconf, ["override"]);
            if (!override || !ext_opt) return tconf;
            let { ext_ver, trial_state, now } = ext_opt;
            let first_start_ts = trial_state && trial_state.first_start_ts;
            if (!first_start_ts || !now || version_util.cmp(ext_ver, "1.174.712") < 0) return tconf;
            let match_opt = assign({ first_start_ts }, ext_opt);
            delete match_opt.trial_state;
            match_opt.first_start = now - first_start_ts;
            let ov = override
              .slice()
              .reverse()
              .find((o) => E.match_filter(match_opt, o.filter));
            if (ov) tconf = zutil.extend_deep(zutil.clone_deep(tconf), ov.conf);
            return tconf;
          };
          E.get_all_sites_conf = (conf, ext_opt) => {
            let { ext_ver, install_ver, install_ts } = ext_opt;
            let c = (conf && conf.sites_default) || {};
            if (
              !E.check_min_ver(ext_ver, c.min_ver) ||
              !E.check_min_install_ver(install_ver, c.install_min_ver) ||
              !E.check_min_install_ts(install_ts, c.install_min_ts)
            ) {
              return;
            }
            return apply_conf_override(c, ext_opt);
          };
          E.get_specific_site_conf = (conf, ext_opt, root_url) => {
            let site_conf = zutil.get(conf && conf.sites, E.get_site_key(conf, ext_opt, root_url));
            if (site_conf) site_conf = apply_conf_override(site_conf, ext_opt);
            return site_conf;
          };
          E.get_site_conf = (conf, ext_opt, root_url, path, def) => {
            let site_conf = (root_url && E.get_specific_site_conf(conf, ext_opt, root_url)) || E.get_all_sites_conf(conf, ext_opt);
            return path ? zutil.get(site_conf, path, def) : site_conf;
          };
          E.get_trial_conf = (conf, ext_opt, root_url, path, def) => {
            let { ext_ver } = ext_opt;
            let tconf = E.get_site_conf(conf, ext_opt, root_url, "trial");
            if (!tconf) return;
            let def_trial = zutil.get(E.get_all_sites_conf(conf, ext_opt), "trial");
            if (tconf.all_sites_timer && !def_trial) tconf = zutil.omit(tconf, ["all_sites_timer"]);
            if (tconf.all_sites_timer && def_trial) tconf = assign({}, tconf, zutil.omit(def_trial, ["skip_signin"]));
            tconf = apply_trial_conf_override(tconf, ext_opt);
            let { time_ended_bonus } = tconf;
            if (time_ended_bonus && !E.check_min_ver(ext_ver, time_ended_bonus.min_ver)) {
              tconf = zutil.omit(tconf, ["time_ended_bonus"]);
            }
            return path ? zutil.get(tconf, path, def) : tconf;
          };
          E.check_min_ver = (ext_ver, min_ver) => version_util.valid(min_ver) && version_util.cmp(ext_ver, min_ver) >= 0;
          E.check_min_install_ver = (install_ver, min_ver) =>
            !min_ver || (version_util.valid(min_ver) && version_util.cmp(install_ver, min_ver) >= 0);
          E.check_min_install_ts = (install_ts, ts) => !ts || +install_ts >= +ts;
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    918: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON ISC
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
          __webpack_require__(6449),
          __webpack_require__(6386),
          __webpack_require__(932),
          __webpack_require__(4336),
          __webpack_require__(9824),
          __webpack_require__(8425)
        ]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function ($, etask, date, zescape, zerr, events) {
          var E = ajax;
          var assign = Object.assign;
          E.events = new events.EventEmitter();
          E.json = function (opt) {
            return ajax(assign({}, opt, { json: 1 }));
          };
          E.abort = function (aj) {
            aj.goto("abort");
          };
          function ajax(opt) {
            var timeout = opt.timeout || 20 * date.ms.SEC,
              slow = opt.slow || 2 * date.ms.SEC;
            var retry = opt.retry,
              data = opt.data,
              qs = zescape.qs(opt.qs);
            var url = zescape.uri(opt.url, qs),
              perr = opt.perr;
            var response_etag, response_status;
            var method = opt.method || opt.type || "GET";
            var data_type = opt.json ? "json" : "text";
            var t0 = Date.now();
            var xhr;
            zerr.debug("ajax(" + data_type + ") url " + url + " retry " + retry);
            return etask([
              function () {
                var ajopt = { dataType: data_type, type: method, url, data, timeout, xhrFields: {}, no_throw: opt.no_throw };
                if (opt.headers) ajopt.headers = opt.headers;
                if (opt.content_type) ajopt.contentType = opt.content_type;
                if (opt.with_credentials) ajopt.xhrFields.withCredentials = true;
                if (opt.onprogress) ajopt.xhrFields.onprogress = opt.onprogress;
                if (opt.onuploadprogress) {
                  ajopt.xhr = function () {
                    var _xhr = $.ajaxSettings.xhr();
                    _xhr.upload.onprogress = opt.onuploadprogress;
                    return _xhr;
                  };
                }
                if (opt.multipart) {
                  ajopt.contentType = false;
                  ajopt.processData = false;
                  delete ajopt.dataType;
                }
                if (opt.async !== undefined) ajopt.async = opt.async;
                xhr = $.ajax(ajopt);
                var _this = this;
                if (xhr instanceof etask) return xhr;
                xhr.done(function (v, status_text, _xhr) {
                  response_etag = _xhr.getResponseHeader("etag");
                  response_status = _xhr.status;
                  var server_ts = +_xhr.getResponseHeader("x-hola-ts");
                  if (server_ts) E.events.emit("server_ts", server_ts);
                  var conf_ver = +_xhr.getResponseHeader("x-hola-conf-ver");
                  if (conf_ver) E.events.emit("conf_ver", conf_ver);
                  _this.continue(v);
                });
                xhr.fail(function (_xhr, status_text, err) {
                  if (data_type == "json" && _xhr && _xhr.status == 200 && ["", "ok", "OK"].includes(_xhr.responseText)) {
                    _this.continue(null);
                    return;
                  }
                  if (!err && data_type == "text" && _xhr && _xhr.responseText) err = _xhr.responseText;
                  _this.throw(err instanceof Error ? err : new Error("" + err));
                });
                return this.wait();
              },
              function catch$(err) {
                xhr = xhr || {};
                var status = xhr.status;
                var status_text = xhr.statusText;
                var response_text = xhr.responseText;
                if (xhr instanceof etask) {
                  var hola_info = err.hola_info || {};
                  status = hola_info.status;
                  status_text = hola_info.status_text;
                  response_text = hola_info.response_text;
                }
                zerr(
                  "ajax(" +
                    data_type +
                    ") failed url " +
                    url +
                    " data " +
                    zerr.json(data).substr(0, 200) +
                    " status: " +
                    status +
                    " " +
                    status_text +
                    "\nresponseText: " +
                    (response_text || "").substr(0, 200)
                );
                if (retry && (!opt.should_retry || opt.should_retry(err, { status }))) {
                  return this.return(ajax(assign({}, opt, { retry: retry - 1 })));
                }
                if (err instanceof Error && err.hola_info) throw err;
                if (status_text == "timeout") E.events.emit("timeout", this);
                if (xhr instanceof etask) {
                  if (xhr.headers && xhr.headers.get("x-hola-ts")) E.events.emit("server_ts", +xhr.headers.get("x-hola-ts"));
                } else if (xhr.getResponseHeader("x-hola-ts")) E.events.emit("server_ts", +xhr.getResponseHeader("x-hola-ts"));
                if (opt.no_throw) {
                  return {
                    err,
                    url,
                    method,
                    status: +status || 0,
                    data: get_res_data(xhr),
                    xhr,
                    error: status_text || "no_status",
                    message: response_text
                  };
                }
                err.hola_info = { url, method, status, data: get_res_data(xhr), response_text };
                if (xhr instanceof etask && xhr.headers) err.x_error = xhr.headers.get("X-Hola-Error");
                else err.x_error = xhr.getResponseHeader("X-Hola-Error");
                throw err;
              },
              function (data) {
                if (xhr instanceof etask && xhr.headers) {
                  var server_ts = +xhr.headers.get("x-hola-ts");
                  if (server_ts) E.events.emit("server_ts", server_ts);
                  var conf_ver = +xhr.headers.get("x-hola-conf-ver");
                  if (conf_ver) E.events.emit("conf_ver", conf_ver);
                }
                var t = Date.now() - t0;
                zerr[t > slow ? "err" : "debug"]("ajax(" + data_type + ") " + (t > slow ? "SLOW " : "ok ") + t + "ms url " + url);
                if (t > slow && perr && !url.includes("client_cgi/perr")) {
                  perr({ id: "be_ajax_slow", info: t + "ms " + url, rate_limit: { count: 1 } });
                }
                if (E.do_op) E.do_op(data && data.do_op);
                if (opt.full_response) {
                  return this.return({ data, etag: response_etag, status: response_status });
                }
                return this.return(data);
              },
              function abort() {
                xhr.abort();
              }
            ]);
          }
          ["GET", "POST", "PUT", "DELETE"].forEach(function (m) {
            E[m.toLowerCase()] = function (url, opt) {
              url = typeof url == "string" ? { url } : url;
              opt = assign({ method: m, json: 1 }, url, opt);
              if (!{ get: 1, delete: 1 }[opt.method.toLowerCase()] && opt.data != null && typeof opt.data != "string") {
                opt.content_type = opt.content_type || "application/json";
                if (opt.content_type.startsWith("application/json")) opt.data = JSON.stringify(opt.data);
              }
              return ajax(opt);
            };
          });
          function get_res_data(xhr) {
            if (xhr.responseJSON != null && xhr.responseJSON !== "") return xhr.responseJSON;
            var content_type = xhr.getResponseHeader("content-type") || "";
            if (xhr.responseText && content_type.includes("application/json")) {
              try {
                return JSON.parse(xhr.responseText);
              } catch (e) {}
            }
            return xhr.responseText || "";
          }
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    3787: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON ISC
      ("use strict");
      (function () {
        var hash, assert, zerr, vm;
        var is_node = typeof module == "object" && module.exports && module.children;
        var is_rn =
          (typeof global == "object" && !!global.nativeRequire) || (typeof navigator == "object" && navigator.product == "ReactNative");
        if (!is_node) {
          if (is_rn) {
          } else;
          assert = function () {};
          if (!is_rn && self.hola && self.hola.zerr) zerr = self.hola.zerr;
          else {
            zerr = function () {
              console.log.apply(console, arguments);
            };
            zerr.perr = zerr;
          }
        } else {
          require("./config.js");
          zerr = require("./zerr.js");
          hash = require("crypto");
          assert = require("assert");
          vm = require("vm");
        }
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1291)]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (zutil) {
          var E = {};
          var has_map = typeof Map == "function" && Map.prototype.get && Map.prototype.set;
          has_map = 0;
          E.cache_str_map_fn = function (fn) {
            var cache = new Map();
            return function (s) {
              s = "" + s;
              var v = cache.get(s);
              if (v !== undefined || cache.has(s)) return v;
              cache.set(s, (v = fn(s)));
              return v;
            };
          };
          E.cache_str_obj_fn = function (fn) {
            var cache = {};
            return function (s) {
              if (s in cache) return cache[s];
              return (cache[s] = fn(s));
            };
          };
          E.cache_str_fn = has_map ? E.cache_str_map_fn : E.cache_str_obj_fn;
          E.cache_str_fn2 = function (fn) {
            var cache = {};
            return function (s1, s2) {
              var cache2 = (cache[s1] = cache[s1] || {});
              if (s2 in cache2) return cache2[s2];
              return (cache2[s2] = fn(s1, s2));
            };
          };
          E.o = function (oct_str) {
            return parseInt(oct_str, 8);
          };
          E.md5 = function (buf, hash_len, encoding) {
            return hash
              .createHash("md5")
              .update(buf, encoding || "utf8")
              .digest("hex")
              .slice(0, hash_len);
          };
          E.md5_zero = function (key, hash_len) {
            assert(hash_len <= 32, "invalid hash len" + hash_len);
            if (!key || !key.length) return "0".repeat(hash_len);
            return E.md5(key, hash_len);
          };
          E.md5_etag = function (buf) {
            return E.md5(buf, 8);
          };
          E.inet_ntoa_t = function (ip) {
            return ((ip & 4278190080) >>> 24) + "." + ((ip & 16711680) >>> 16) + "." + ((ip & 65280) >>> 8) + "." + (ip & 255);
          };
          E.inet_addr = function (ip) {
            var code,
              res = 0,
              shift = 24,
              num = undefined;
            ip = "" + ip;
            for (var i = 0, l = ip.length; i < l; ++i) {
              code = ip.charCodeAt(i);
              if (code > 47 && code < 58) {
                num = (num || 0) * 10 + code - 48;
                continue;
              }
              if (code == 46) {
                if (num == undefined || num > 255) return null;
                res += num << shift;
                num = undefined;
                shift -= 8;
                continue;
              }
              return null;
            }
            return shift == 0 && num != undefined && num < 256 ? (res + (num | 0)) >>> 0 : null;
          };
          function flags_to_str_once(flags, conv) {
            var f = 'var s = "";\n';
            f += 'if (!flags) return "";\n';
            for (var i in conv) {
              if (!conv.hasOwnProperty(i)) continue;
              f +=
                "if (flags & " + conv[i] + ") " + "{ s += " + JSON.stringify(i.toLowerCase()) + '+" ";' + " flags &= ~" + conv[i] + "; }\n";
            }
            f += "if (flags && conv.__conv_to_str.err) " + "conv.__conv_to_str.err(flags, conv);\n";
            f += "return s.slice(0, -1);\n";
            var func = new Function(["flags", "conv"], f);
            Object.defineProperty(conv, "__conv_to_str", { enumerable: false, writable: true });
            conv.__conv_to_str = func;
            func.err = function (_flags, _conv) {
              zerr.perr("flags_str_invalid", "flags " + _flags + " " + JSON.stringify(_conv).slice(0, 30));
            };
            return conv.__conv_to_str(flags, conv);
          }
          E.flags_to_str = function (flags, conv) {
            if (conv.__conv_to_str) return conv.__conv_to_str(flags, conv);
            return flags_to_str_once(flags, conv);
          };
          function flags_from_str_once(s, conv) {
            var f = "var flags = 0, a, i;\n";
            f += "if (!s) return 0;\n";
            f += "s = s.toUpperCase();\n";
            f += 'a = s.split(",");\n';
            f += "for (i=0; i<a.length; i++)\n";
            f += "{\n";
            f += "    if (!conv[a[i]])\n";
            f += "    {\n";
            f += "        if (flags && conv.__conv_from_str.err) " + "conv.__conv_from_str.err(flags, conv);\n";
            f += "        return -1;\n";
            f += "    }\n";
            f += "    flags |= conv[a[i]];\n";
            f += "}\n";
            f += "return flags;\n";
            var func = new Function(["s", "conv"], f);
            Object.defineProperty(conv, "__conv_from_str", { enumerable: false, writable: true });
            conv.__conv_from_str = func;
            func.err = function (_s, _conv) {
              zerr.perr("flags_str_invalid", "flags " + _s + " " + JSON.stringify(_conv).slice(0, 30));
            };
            return conv.__conv_from_str(s, conv);
          }
          E.flags_from_str = function (s, conv) {
            if (conv.__conv_from_str) return conv.__conv_from_str(s, conv);
            return flags_from_str_once(s, conv);
          };
          E.scale_vals = {
            1e3: [
              { s: "", n: 1 },
              { s: "K", n: 1e3 },
              { s: "M", n: 1e6 },
              { s: "G", n: 1e9 },
              { s: "T", n: 1e12 },
              { s: "P", n: 1e15 }
            ],
            1024: [
              { s: "", n: 1 },
              { s: "K", n: 1024 },
              { s: "M", n: Math.pow(1024, 2) },
              { s: "G", n: Math.pow(1024, 3) },
              { s: "T", n: Math.pow(1024, 4) },
              { s: "P", n: Math.pow(1024, 5) }
            ]
          };
          function apply_scale(num, opt) {
            opt = opt || {};
            var per = opt.per,
              scale = opt.scale;
            var base = opt.base == 1024 ? 1024 : 1e3,
              ratio = opt.ratio || 1;
            var scale_vals = E.scale_vals[base],
              i = 0;
            if (num < 0) num = -num;
            if (scale == null) for (; i < scale_vals.length - 1 && num >= scale_vals[i + 1].n * ratio; i++);
            else
              i = scale_vals.findIndex(function (_scale) {
                return _scale.s == scale;
              });
            if (per == "ms" && i) {
              per = "s";
              i--;
              num = num / 1e3;
            }
            return { num, per, base, scale: scale_vals[i] };
          }
          E.get_unscaled = function (str, opt) {
            opt = opt || {};
            var match = /(\d+)(\S)?/.exec(str);
            if (!match) return;
            var num = +match[1],
              scale = (match[2] || "").toUpperCase();
            if (!scale) return num;
            var base = opt.base == 1024 ? 1024 : 1e3;
            var scale_vals = E.scale_vals[base],
              i = 0;
            for (; i < scale_vals.length; i++) {
              if (scale_vals[i].s == scale) return num * scale_vals[i].n;
            }
          };
          E.get_unit = function (num, opt) {
            var res = apply_scale(num, opt);
            return res.scale.s + (res.per ? E.fmt_per(res.per) : "");
          };
          E.scaled_number = function (num, opt) {
            opt = opt || {};
            var sign = "";
            var unit = opt.unit === undefined || opt.unit;
            if (num < 0) {
              sign = "-";
              num = -num;
            }
            if (num === undefined) return "";
            if (isNaN(num)) return opt.nan || "x";
            if (num == Infinity) return sign + "∞";
            var res = apply_scale(num, opt);
            var _per = unit && res.per ? E.fmt_per(res.per) : "";
            num = res.num;
            if (opt.is_scale) return res.scale.n;
            num /= res.scale.n;
            if (num < 0.001) return "0" + _per;
            if (num >= res.base - 1) num = Math.trunc(num);
            var str = num.toFixed(num < 1 ? 3 : num < 10 ? 2 : num < 100 ? 1 : 0);
            return sign + str.replace(/((\.\d*[1-9])|\.)0*$/, "$2") + (unit ? (opt.space ? " " : "") + res.scale.s : "") + _per;
          };
          E.scaled_bytes = function (num, opt) {
            return E.scaled_number(num, Object.assign({ base: 1e3 }, opt));
          };
          E.fmt_currency = function (amount, digits, currency_sign) {
            if (amount === undefined) return;
            if (digits === undefined) digits = 2;
            if (currency_sign === undefined) currency_sign = "$";
            var sign = amount < 0 ? "-" : "";
            amount = Math.abs(amount);
            amount = (+amount).toLocaleString("en-GB", { useGrouping: true, maximumFractionDigits: digits }) || amount;
            return sign + currency_sign + amount;
          };
          E.fmt_per = function (per) {
            if (!per) return "";
            switch (per) {
              case "s":
              case "ms":
                return per;
              case "%":
              case "%%":
                return "%";
              default:
                return "/" + per[0];
            }
          };
          E.parse_function = function (f) {
            var m = /^function\s*([\w$]+)?\s*\(\n?([\s\w$,]*?)(\s*\/\*`*\*\/)?\)\s*\{\n?([\s\S]*?)\n?\}$/.exec(f);
            return { name: m[1] || null, args: m[2] ? m[2].split(/\s*,\s*/) : [], body: m[4] };
          };
          function date_stringify(d) {
            return { __ISODate__: d.toISOString() };
          }
          var pos_inf = { __Infinity__: 1 };
          var neg_inf = { __Infinity__: -1 };
          function replace_inf(k, v) {
            switch (v) {
              case Infinity:
                return pos_inf;
              case -Infinity:
                return neg_inf;
              default:
                return v;
            }
          }
          E.JSON_stringify = function (obj, opt) {
            var s, prev_date, _date, prev_func, prev_re;
            var date_class, func_class, re_class;
            opt = opt || {};
            if (opt.date) _date = typeof opt.date == "function" ? opt.date : date_stringify;
            if (opt.mongo) _date = date_stringify;
            if (_date) {
              date_class = opt.vm_context ? vm.runInContext("Date", opt.vm_context) : Date;
              prev_date = date_class.prototype.toJSON;
              date_class.prototype.toJSON = function () {
                return _date(this);
              };
            }
            if (opt.func) {
              func_class = opt.vm_context ? vm.runInContext("Function", opt.vm_context) : Function;
              prev_func = func_class.prototype.toJSON;
              func_class.prototype.toJSON = function () {
                return { __Function__: this.toString() };
              };
            }
            if (opt.re) {
              re_class = opt.vm_context ? vm.runInContext("RegExp", opt.vm_context) : RegExp;
              prev_re = re_class.prototype.toJSON;
              Object.defineProperty(re_class.prototype, "toJSON", {
                value: function () {
                  return { __RegExp__: this.toString() };
                },
                writable: true
              });
            }
            var opt_replacer = opt.replacer;
            var replacer = opt_replacer;
            if (opt.inf) {
              if (opt_replacer && typeof opt_replacer == "function") {
                replacer = function (k, v) {
                  if (this == pos_inf || this == neg_inf) return v;
                  return opt_replacer.call(this, k, replace_inf.call(this, k, v));
                };
              } else if (opt_replacer && Array.isArray(opt_replacer)) {
                replacer = function (k, v) {
                  if (v == obj || this == pos_inf || this == neg_inf) return v;
                  if (opt_replacer.includes(k)) return replace_inf.call(this, k, v);
                };
              } else replacer = replace_inf;
            }
            try {
              s = JSON.stringify(obj, replacer, opt.spaces);
            } finally {
              if (_date) date_class.prototype.toJSON = prev_date;
              if (opt.func) func_class.prototype.toJSON = prev_func;
              if (opt.re) re_class.prototype.toJSON = prev_re;
            }
            if (opt.mongo) s = s.replace(/\{"__ISODate__":("[0-9TZ:.-]+")\}/g, "ISODate($1)");
            return s;
          };
          function parse_leaf(v, opt) {
            if (!v || typeof v != "object" || Object.keys(v).length != 1) return v;
            if (v.__ISODate__ && opt.date) return new Date(v.__ISODate__);
            if (v.__Function__ && opt.func) {
              if (vm) return vm.runInThisContext('"use strict";(' + v.__Function__ + ")");
              return new Function("", '"use strict";return (' + v.__Function__ + ");")();
            }
            if (v.__RegExp__ && opt.re) {
              var parsed = /^\/(.*)\/(\w*)$/.exec(v.__RegExp__);
              if (!parsed) throw new Error("failed parsing regexp");
              return new RegExp(parsed[1], parsed[2]);
            }
            if (v.__Infinity__ && opt.inf) return v.__Infinity__ < 0 ? -Infinity : Infinity;
            if (v.__ObjectId__ && typeof opt.object_id == "function") return opt.object_id(v.__ObjectId__);
            return v;
          }
          function parse_obj(v, opt) {
            if (!v || typeof v != "object") return v;
            if (Array.isArray(v)) {
              for (var i = 0; i < v.length; i++) v[i] = parse_obj(v[i], opt);
              return v;
            }
            var v2 = parse_leaf(v, opt);
            if (v2 !== v) return v2;
            for (var key in v) v[key] = parse_obj(v[key], opt);
            return v;
          }
          E.JSON_parse = function (s, opt) {
            opt = Object.assign({ date: true, re: true, inf: true }, opt, { func: false });
            return JSON.parse(s, function (k, v) {
              return parse_leaf(v, opt);
            });
          };
          E.JSON_parse_obj = function (v, opt) {
            opt = Object.assign({ date: true, re: true, inf: true }, opt, { func: false });
            return parse_obj(v, opt);
          };
          E.JSON_parse_unsafe = function (s, opt) {
            opt = Object.assign({ date: true, re: true, func: true, inf: true }, opt);
            return JSON.parse(s, function (k, v) {
              return parse_leaf(v, opt);
            });
          };
          E.JSON_parse_obj_unsafe = function (v, opt) {
            opt = Object.assign({ date: true, re: true, func: true, inf: true }, opt);
            return parse_obj(v, opt);
          };
          E.hex2bin = function (hex, opt) {
            var byte_array = opt && opt.byte_array;
            var bin = byte_array ? new Uint8Array() : [];
            var re = /('.)|([0-9a-f][0-9a-f]?)|\s+|[.-]|(.)/gi;
            var m, v;
            for (re.lastIndex = 0; (m = re.exec(hex)); ) {
              if (m[1]) v = m[1].charCodeAt(1);
              else if (m[2]) v = parseInt(m[2], 16);
              else if (m[3]) return null;
              else continue;
              bin.push(v);
            }
            return bin;
          };
          E.bin2hex = function (arr) {
            var s = "",
              v,
              i;
            for (i = 0; i < arr.length; i++) {
              v = (arr[i] & 255).toString(16).toUpperCase();
              s += (v.length < 2 ? "0" : "") + v + " ";
            }
            return s.trim();
          };
          E.str2bin = function (s, offset) {
            var len;
            if (!s || !(len = s.length)) return;
            offset = offset || 0;
            var arr = new Uint8Array(len - offset);
            for (var i = offset, j = 0; i < len; i++, j++) arr[j] = s.charCodeAt(i);
            return arr;
          };
          E.tab2sp = function (line) {
            var added = 0;
            return line.replace(/\t/g, function (m, offset, str) {
              var insert = 8 - ((added + offset) % 8);
              added += insert - 1;
              return " ".repeat(insert);
            });
          };
          E.str2utf8bin = function (s) {
            if (!s || !s.length) return;
            var arr = new Uint8Array(s.length * 3);
            var len = s.length,
              i = 0,
              j = 0,
              c,
              extra;
            while (i < len) {
              c = s.charCodeAt(i++);
              if (c >= 55296 && c <= 56319 && i < len) {
                extra = s.charCodeAt(i++);
                if ((extra & 64512) == 56320) c = ((c & 1023) << 10) + (extra & 1023) + 65536;
                else i--;
              }
              if ((c & 4294967168) == 0) arr[j++] = c;
              else {
                if ((c & 4294965248) == 0) arr[j++] = ((c >> 6) & 31) | 192;
                else if ((c & 4294901760) == 0) {
                  arr[j++] = ((c >> 12) & 15) | 224;
                  arr[j++] = ((c >> 6) & 63) | 128;
                } else if ((c & 4292870144) == 0) {
                  arr[j++] = ((c >> 18) & 7) | 240;
                  arr[j++] = ((c >> 12) & 63) | 128;
                  arr[j++] = ((c >> 6) & 63) | 128;
                }
                arr[j++] = (c & 63) | 128;
              }
            }
            return arr.slice(0, j);
          };
          E.utf8bin2str = function (arr, offset, len) {
            if (arr.byteLength && !arr.length) arr = new Uint8Array(arr);
            var out = "",
              i = offset || 0,
              cp;
            var c, char2, char3, char4;
            len = len ? i + len : arr.length;
            while (i < len) {
              c = arr[i++];
              switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  out += String.fromCharCode(c);
                  break;
                case 12:
                case 13:
                  char2 = arr[i++];
                  out += String.fromCharCode(((c & 31) << 6) | (char2 & 63));
                  break;
                case 14:
                  char2 = arr[i++];
                  char3 = arr[i++];
                  out += String.fromCharCode(((c & 15) << 12) | ((char2 & 63) << 6) | ((char3 & 63) << 0));
                  break;
                case 15:
                  char2 = arr[i++];
                  char3 = arr[i++];
                  char4 = arr[i++];
                  cp = ((c & 3) << 18) | ((char2 & 63) << 12) | ((char3 & 63) << 6) | (char4 & 63);
                  cp -= 65536;
                  out += String.fromCharCode(55296 | (cp >> 10));
                  out += String.fromCharCode(56320 | (cp & 1023));
                  break;
              }
            }
            return out;
          };
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    2569: (module, exports) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON ISC
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          var E = {};
          E.list = {
            AF: "Afghanistan",
            AL: "Albania",
            DZ: "Algeria",
            AX: "Aland Islands",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua And Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            JE: "Bailiwick of Jersey",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia",
            BQ: "Bonaire (Caribbean Netherlands)",
            BA: "Bosnia And Herzegovina",
            BW: "Botswana",
            BR: "Brazil",
            BN: "Brunei",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: "Cape Verde",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos (Keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: "Cote D'Ivoire (Ivory Coast)",
            HR: "Croatia (Hrvatska)",
            CU: "Cuba",
            CW: "Curacao",
            CY: "Cyprus",
            CZ: "Czech Republic",
            CD: "Democratic Republic Of Congo (Zaire)",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EU: "European Union",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands (Malvinas)",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GB: "Great Britain",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GU: "Guam",
            GP: "Guadeloupe",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: "Iran",
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            XK: "Kosovo",
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Laos",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macau",
            MK: "Macedonia",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            FM: "Micronesia",
            MD: "Moldova",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar (Burma)",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            AN: "Netherlands Antilles",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            KP: "North Korea",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PW: "Palau",
            PS: "Palestine",
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RE: "Réunion",
            RO: "Romania",
            RU: "Russia",
            RW: "Rwanda",
            BL: "Saint Barthelemy",
            SH: "Saint Helena",
            KN: "Saint Kitts And Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin",
            VC: "Saint Vincent And The Grenadines",
            SM: "San Marino",
            ST: "Sao Tome And Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SX: "Sint Maarten (Dutch part)",
            SK: "Slovak Republic",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia And South Sandwich Islands",
            KR: "South Korea",
            SS: "South Sudan",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syria",
            TW: "Taiwan",
            TJ: "Tajikistan",
            TZ: "Tanzania",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad And Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks And Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            UK: "United Kingdom",
            US: "United States",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VA: "Vatican City (Holy See)",
            VE: "Venezuela",
            VN: "Vietnam",
            VG: "Virgin Islands (British)",
            VI: "Virgin Islands (US)",
            WF: "Wallis And Futuna Islands",
            EH: "Western Sahara",
            WS: "Western Samoa",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
          };
          E.iso_list = {
            AF: "Afghanistan",
            AX: "Aland Islands",
            AL: "Albania",
            DZ: "Algeria",
            AS: "American Samoa",
            AD: "Andorra",
            AO: "Angola",
            AI: "Anguilla",
            AQ: "Antarctica",
            AG: "Antigua And Barbuda",
            AR: "Argentina",
            AM: "Armenia",
            AW: "Aruba",
            AU: "Australia",
            AT: "Austria",
            AZ: "Azerbaijan",
            BS: "Bahamas",
            BH: "Bahrain",
            BD: "Bangladesh",
            BB: "Barbados",
            BY: "Belarus",
            BE: "Belgium",
            BZ: "Belize",
            BJ: "Benin",
            BM: "Bermuda",
            BT: "Bhutan",
            BO: "Bolivia",
            BA: ["Bosnia And Herzegovina", "Bosnia and Herzegovina"],
            BW: "Botswana",
            BV: "Bouvet Island",
            BR: "Brazil",
            IO: "British Indian Ocean Territory",
            BN: "Brunei Darussalam",
            BG: "Bulgaria",
            BF: "Burkina Faso",
            BI: "Burundi",
            KH: "Cambodia",
            CM: "Cameroon",
            CA: "Canada",
            CV: ["Cape Verde", "Cabo Verde"],
            CW: "Curacao",
            KY: "Cayman Islands",
            CF: "Central African Republic",
            TD: "Chad",
            CL: "Chile",
            CN: "China",
            CX: "Christmas Island",
            CC: "Cocos (Keeling) Islands",
            CO: "Colombia",
            KM: "Comoros",
            CG: "Congo",
            CD: "Congo, Democratic Republic",
            CK: "Cook Islands",
            CR: "Costa Rica",
            CI: ["Cote D'Ivoire", "Côte d'Ivoire"],
            HR: "Croatia",
            CU: "Cuba",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DK: "Denmark",
            DJ: "Djibouti",
            DM: "Dominica",
            DO: "Dominican Republic",
            EC: "Ecuador",
            EG: "Egypt",
            SV: "El Salvador",
            GQ: "Equatorial Guinea",
            ER: "Eritrea",
            EE: "Estonia",
            ET: "Ethiopia",
            FK: "Falkland Islands (Malvinas)",
            FO: "Faroe Islands",
            FJ: "Fiji",
            FI: "Finland",
            FR: "France",
            GF: "French Guiana",
            PF: "French Polynesia",
            TF: "French Southern Territories",
            GA: "Gabon",
            GM: "Gambia",
            GE: "Georgia",
            DE: "Germany",
            GH: "Ghana",
            GI: "Gibraltar",
            GR: "Greece",
            GL: "Greenland",
            GD: "Grenada",
            GP: "Guadeloupe",
            GU: "Guam",
            GT: "Guatemala",
            GG: "Guernsey",
            GN: "Guinea",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HT: "Haiti",
            HM: "Heard Island & Mcdonald Islands",
            VA: "Holy See (Vatican City State)",
            HN: "Honduras",
            HK: "Hong Kong",
            HU: "Hungary",
            IS: "Iceland",
            IN: "India",
            ID: "Indonesia",
            IR: ["Iran, Islamic Republic Of", "Iran, Islamic Republic of"],
            IQ: "Iraq",
            IE: "Ireland",
            IM: "Isle Of Man",
            IL: "Israel",
            IT: "Italy",
            JM: "Jamaica",
            JP: "Japan",
            JE: "Jersey",
            JO: "Jordan",
            KZ: "Kazakhstan",
            KE: "Kenya",
            KI: "Kiribati",
            KR: ["Korea", "Korea, Republic of", "Republic of Korea"],
            KW: "Kuwait",
            KG: "Kyrgyzstan",
            LA: "Lao People's Democratic Republic",
            LV: "Latvia",
            LB: "Lebanon",
            LS: "Lesotho",
            LR: "Liberia",
            LY: "Libyan Arab Jamahiriya",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            MO: "Macao",
            MK: "Macedonia",
            MG: "Madagascar",
            MW: "Malawi",
            MY: "Malaysia",
            MV: "Maldives",
            ML: "Mali",
            MT: "Malta",
            MH: "Marshall Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MU: "Mauritius",
            YT: "Mayotte",
            MX: "Mexico",
            FM: "Micronesia, Federated States Of",
            MD: "Moldova, Republic of",
            MC: "Monaco",
            MN: "Mongolia",
            ME: "Montenegro",
            MS: "Montserrat",
            MA: "Morocco",
            MZ: "Mozambique",
            MM: "Myanmar",
            NA: "Namibia",
            NR: "Nauru",
            NP: "Nepal",
            NL: "Netherlands",
            AN: "Netherlands Antilles",
            NC: "New Caledonia",
            NZ: "New Zealand",
            NI: "Nicaragua",
            NE: "Niger",
            NG: "Nigeria",
            NU: "Niue",
            NF: "Norfolk Island",
            MP: "Northern Mariana Islands",
            NO: "Norway",
            OM: "Oman",
            PK: "Pakistan",
            PW: "Palau",
            PS: ["Palestinian Territory, Occupied", "Palestine"],
            PA: "Panama",
            PG: "Papua New Guinea",
            PY: "Paraguay",
            PE: "Peru",
            PH: "Philippines",
            PN: "Pitcairn",
            PL: "Poland",
            PT: "Portugal",
            PR: "Puerto Rico",
            QA: "Qatar",
            RE: "Reunion",
            RO: "Romania",
            RU: "Russian Federation",
            RW: "Rwanda",
            BL: "Saint Barthelemy",
            SH: "Saint Helena",
            KN: "Saint Kitts And Nevis",
            LC: "Saint Lucia",
            MF: "Saint Martin",
            PM: "Saint Pierre And Miquelon",
            VC: "Saint Vincent And Grenadines",
            WS: "Samoa",
            SM: "San Marino",
            ST: "Sao Tome And Principe",
            SA: "Saudi Arabia",
            SN: "Senegal",
            RS: "Serbia",
            SC: "Seychelles",
            SL: "Sierra Leone",
            SG: "Singapore",
            SK: "Slovakia",
            SI: "Slovenia",
            SB: "Solomon Islands",
            SO: "Somalia",
            ZA: "South Africa",
            GS: "South Georgia And Sandwich Isl.",
            ES: "Spain",
            LK: "Sri Lanka",
            SD: "Sudan",
            SR: "Suriname",
            SJ: "Svalbard And Jan Mayen",
            SZ: "Swaziland",
            SE: "Sweden",
            CH: "Switzerland",
            SY: "Syrian Arab Republic",
            TW: "Taiwan",
            TJ: "Tajikistan",
            TZ: "Tanzania",
            TH: "Thailand",
            TL: "Timor-Leste",
            TG: "Togo",
            TK: "Tokelau",
            TO: "Tonga",
            TT: "Trinidad And Tobago",
            TN: "Tunisia",
            TR: "Turkey",
            TM: "Turkmenistan",
            TC: "Turks And Caicos Islands",
            TV: "Tuvalu",
            UG: "Uganda",
            UA: "Ukraine",
            AE: "United Arab Emirates",
            GB: ["United Kingdom", "Great Britain"],
            US: "United States",
            UM: ["United States Outlying Islands", "United States Minor Outlying Islands"],
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VU: "Vanuatu",
            VE: "Venezuela",
            VN: ["Viet Nam", "Vietnam"],
            VG: "Virgin Islands, British",
            VI: "Virgin Islands, U.S.",
            WF: "Wallis And Futuna",
            EH: "Western Sahara",
            YE: "Yemen",
            ZM: "Zambia",
            ZW: "Zimbabwe"
          };
          E.adj_list = {
            AF: { name: "Afghanistan", adj: "Afghan" },
            AX: { name: "Åland Islands", adj: "Åland Island" },
            AL: { name: "Albania", adj: "Albanian" },
            DZ: { name: "Algeria", adj: "Algerian" },
            AS: { name: "American Samoa", adj: "American Samoan" },
            AD: { name: "Andorra", adj: "Andorran" },
            AO: { name: "Angola", adj: "Angolan" },
            AI: { name: "Anguilla", adj: "Anguillan" },
            AG: { name: "Antigua and Barbuda", adj: "Antiguan" },
            AR: { name: "Argentina", adj: "Argentinian" },
            AM: { name: "Armenia", adj: "Armenian" },
            AW: { name: "Aruba", adj: "Aruban" },
            AU: { name: "Australia", adj: "Australian" },
            AT: { name: "Austria", adj: "Austrian" },
            AZ: { name: "Azerbaijan", adj: "Azerbaijani" },
            BS: { name: "Bahamas", adj: "Bahamian" },
            BH: { name: "Bahrain", adj: "Bahraini" },
            BD: { name: "Bangladesh", adj: "Bengali" },
            BB: { name: "Barbados", adj: "Barbadian" },
            BY: { name: "Belarus", adj: "Belarusian" },
            BE: { name: "Belgium", adj: "Belgian" },
            BZ: { name: "Belize", adj: "Belizean" },
            BJ: { name: "Benin", adj: "Beninese" },
            BM: { name: "Bermuda", adj: "Bermudan" },
            BT: { name: "Bhutan", adj: "Bhutanese" },
            BO: { name: "Bolivia", adj: "Bolivian" },
            BA: { name: "Bosnia and Herzegovina", adj: "Bosnian" },
            BW: { name: "Botswana", adj: "Botswanan" },
            BR: { name: "Brazil", adj: "Brazilian" },
            BN: { name: "Brunei", adj: "Bruneian" },
            BG: { name: "Bulgaria", adj: "Bulgarian" },
            BF: { name: "Burkina Faso", adj: "Burkinabé" },
            BI: { name: "Burundi", adj: "Burundian" },
            CV: { name: "Cabo Verde", adj: "Cabo Verdean" },
            KH: { name: "Cambodia", adj: "Cambodian" },
            CM: { name: "Cameroon", adj: "Cameroonian" },
            CA: { name: "Canada", adj: "Canadian" },
            KY: { name: "Cayman Islands", adj: "Caymanian" },
            TD: { name: "Chad", adj: "Chadian" },
            CL: { name: "Chile", adj: "Chilean" },
            CN: { name: "China", adj: "Chinese" },
            CX: { name: "Christmas Island", adj: "Christmas Island" },
            CO: { name: "Colombia", adj: "Colombian" },
            KM: { name: "Comoros", adj: "Comoran" },
            CG: { name: "Congo", adj: "Congolese" },
            CK: { name: "Cook Islands", adj: "Cook Island" },
            CR: { name: "Costa Rica", adj: "Costa Rican" },
            CI: { name: "Côte d'Ivoire", adj: "Ivorian" },
            HR: { name: "Croatia", adj: "Croatian" },
            CU: { name: "Cuba", adj: "Cuban" },
            CW: { name: "Curaçao", adj: "Curaçaoan" },
            CY: { name: "Cyprus", adj: "Cypriot" },
            CZ: { name: "Czech Republic", adj: "Czech" },
            DK: { name: "Denmark", adj: "Danish" },
            DJ: { name: "Djibouti", adj: "Djiboutian" },
            DM: { name: "Dominica", adj: "Dominican" },
            DO: { name: "Dominican Republic", adj: "Dominican" },
            EC: { name: "Ecuador", adj: "Ecuadorian" },
            EG: { name: "Egypt", adj: "Egyptian" },
            SV: { name: "El Salvador", adj: "Salvadoran" },
            GQ: { name: "Equatorial Guinea", adj: "Equatorial Guinean" },
            EE: { name: "Estonia", adj: "Estonian" },
            ET: { name: "Ethiopia", adj: "Ethiopian" },
            FO: { name: "Faroe Islands", adj: "Faroese" },
            FJ: { name: "Fiji", adj: "Fijian" },
            FI: { name: "Finland", adj: "Finnish" },
            FR: { name: "France", adj: "French" },
            PF: { name: "French Polynesia", adj: "French Polynesian" },
            GA: { name: "Gabon", adj: "Gabonese" },
            GM: { name: "Gambia", adj: "Gambian" },
            GE: { name: "Georgia", adj: "Georgian" },
            DE: { name: "Germany", adj: "German" },
            GH: { name: "Ghana", adj: "Ghanaian" },
            GI: { name: "Gibraltar", adj: "Gibraltar" },
            GR: { name: "Greece", adj: "Greek" },
            GL: { name: "Greenland", adj: "Greenlandic" },
            GD: { name: "Grenada", adj: "Grenadian" },
            GU: { name: "Guam", adj: "Guamanian" },
            GT: { name: "Guatemala", adj: "Guatemalan" },
            GG: { name: "Guernsey", adj: "Channel Island" },
            GN: { name: "Guinea", adj: "Guinean" },
            GW: { name: "Guinea-Bissau", adj: "Bissau-Guinean" },
            GY: { name: "Guyana", adj: "Guyanese" },
            HT: { name: "Haiti", adj: "Haitian" },
            HN: { name: "Honduras", adj: "Honduran" },
            HK: { name: "Hong Kong", adj: "Hong Kong" },
            HU: { name: "Hungary", adj: "Hungarian" },
            IS: { name: "Iceland", adj: "Icelandic" },
            IN: { name: "India", adj: "Indian" },
            ID: { name: "Indonesia", adj: "Indonesian" },
            IR: { name: "Iran", adj: "Iranian" },
            IQ: { name: "Iraq", adj: "Iraqi" },
            IE: { name: "Ireland", adj: "Irish" },
            IM: { name: "Isle of Man", adj: "Manx" },
            IL: { name: "Israel", adj: "Israeli" },
            IT: { name: "Italy", adj: "Italian" },
            JM: { name: "Jamaica", adj: "Jamaican" },
            JP: { name: "Japan", adj: "Japanese" },
            JE: { name: "Jersey", adj: "Channel Island" },
            JO: { name: "Jordan", adj: "Jordanian" },
            KZ: { name: "Kazakhstan", adj: "Kazakhstani" },
            KE: { name: "Kenya", adj: "Kenyan" },
            KI: { name: "Kiribati", adj: "I-Kiribati" },
            KW: { name: "Kuwait", adj: "Kuwaiti" },
            KG: { name: "Kyrgyzstan", adj: "Kyrgyzstani" },
            LA: { name: "Laos", adj: "Lao, Laotian" },
            LV: { name: "Latvia", adj: "Latvian" },
            LB: { name: "Lebanon", adj: "Lebanese" },
            LS: { name: "Lesotho", adj: "Basotho" },
            LR: { name: "Liberia", adj: "Liberian" },
            LY: { name: "Libya", adj: "Libyan" },
            LI: { name: "Liechtenstein", adj: "Liechtensteiner" },
            LT: { name: "Lithuania", adj: "Lithuanian" },
            LU: { name: "Luxembourg", adj: "Luxembourgish" },
            MO: { name: "Macau", adj: "Macanese" },
            MK: { name: "Macedonia", adj: "Macedonian" },
            MG: { name: "Madagascar", adj: "Malagasy" },
            MW: { name: "Malawi", adj: "Malawian" },
            MY: { name: "Malaysia", adj: "Malaysian" },
            MV: { name: "Maldives", adj: "Maldivian" },
            ML: { name: "Mali", adj: "Malian" },
            MT: { name: "Malta", adj: "Maltese" },
            MH: { name: "Marshall Islands", adj: "Marshallese" },
            MQ: { name: "Martinique", adj: "Martinican" },
            MR: { name: "Mauritania", adj: "Mauritanian" },
            MU: { name: "Mauritius", adj: "Mauritian" },
            YT: { name: "Mayotte", adj: "Mahoran" },
            MX: { name: "Mexico", adj: "Mexican" },
            FM: { name: "Micronesia", adj: "Micronesian" },
            MD: { name: "Moldova", adj: "Moldovan" },
            MC: { name: "Monaco", adj: "Monacan" },
            MN: { name: "Mongolia", adj: "Mongolian" },
            ME: { name: "Montenegro", adj: "Montenegrin" },
            MA: { name: "Morocco", adj: "Moroccan" },
            MZ: { name: "Mozambique", adj: "Mozambican" },
            MM: { name: "Myanmar", adj: "Burmese" },
            NA: { name: "Namibia", adj: "Namibian" },
            NR: { name: "Nauru", adj: "Nauruan" },
            NP: { name: "Nepal", adj: "Nepali" },
            NL: { name: "Netherlands", adj: "Dutch" },
            NC: { name: "New Caledonia", adj: "New Caledonian" },
            NZ: { name: "New Zealand", adj: "Zelanian" },
            NI: { name: "Nicaragua", adj: "Nicaraguan" },
            NE: { name: "Niger", adj: "Nigerien" },
            NG: { name: "Nigeria", adj: "Nigerian" },
            MP: { name: "Northern Mariana Islands", adj: "Niuean" },
            NO: { name: "Norway", adj: "Norwegian" },
            OM: { name: "Oman", adj: "Omani" },
            PK: { name: "Pakistan", adj: "Pakistani" },
            PW: { name: "Palau", adj: "Palauan" },
            PS: { name: "Palestine", adj: "Palestinian" },
            PA: { name: "Panama", adj: "Panamanian" },
            PG: { name: "Papua New Guinea", adj: "Papuan" },
            PY: { name: "Paraguay", adj: "Paraguayan" },
            PE: { name: "Peru", adj: "Peruvian" },
            PH: { name: "Philippines", adj: "Filipino" },
            PL: { name: "Poland", adj: "Polish" },
            PT: { name: "Portugal", adj: "Portuguese" },
            PR: { name: "Puerto Rico", adj: "Puerto Rican" },
            QA: { name: "Qatar", adj: "Qatari" },
            RO: { name: "Romania", adj: "Romanian" },
            RU: { name: "Russia", adj: "Russian" },
            RW: { name: "Rwanda", adj: "Rwandan" },
            BL: { name: "Saint Barthélemy", adj: "Barthélemois" },
            KN: { name: "Saint Kitts and Nevis", adj: "Kittitian" },
            LC: { name: "Saint Lucia", adj: "Saint Lucian" },
            MF: { name: "Saint Martin", adj: "Saint-Martinoise" },
            VC: { name: "Saint Vincent and the Grenadines", adj: "Saint Vincentian" },
            SM: { name: "San Marino", adj: "Sammarinese" },
            SA: { name: "Saudi Arabia", adj: "Saudi" },
            SN: { name: "Senegal", adj: "Senegalese" },
            RS: { name: "Serbia", adj: "Serbian" },
            SC: { name: "Seychelles", adj: "Seychellois" },
            SL: { name: "Sierra Leone", adj: "Sierra Leonean" },
            SG: { name: "Singapore", adj: "Singaporean" },
            SK: { name: "Slovakia", adj: "Slovak" },
            SI: { name: "Slovenia", adj: "Slovenian" },
            SB: { name: "Solomon Islands", adj: "Solomon Island" },
            SO: { name: "Somalia", adj: "Somali" },
            ZA: { name: "South Africa", adj: "South African" },
            KR: { name: "South Korea", adj: "South Korean" },
            SS: { name: "South Sudan", adj: "South Sudanese" },
            ES: { name: "Spain", adj: "Spanish" },
            LK: { name: "Sri Lanka", adj: "Sri Lankan" },
            SD: { name: "Sudan", adj: "Sudanese" },
            SR: { name: "Surinam", adj: "Surinamese" },
            SZ: { name: "Swaziland", adj: "Swazi" },
            SE: { name: "Sweden", adj: "Swedish" },
            CH: { name: "Switzerland", adj: "Swiss" },
            SY: { name: "Syria", adj: "Syrian" },
            TW: { name: "Taiwan", adj: "Taiwanese" },
            TJ: { name: "Tajikistan", adj: "Tajikistani" },
            TZ: { name: "Tanzania", adj: "Tanzanian" },
            TH: { name: "Thailand", adj: "Thai" },
            TL: { name: "Timor-Leste", adj: "Timorese" },
            TG: { name: "Togo", adj: "Togolese" },
            TT: { name: "Trinidad and Tobago", adj: "Trinidadian" },
            TN: { name: "Tunisia", adj: "Tunisian" },
            TR: { name: "Turkey", adj: "Turkish" },
            TC: { name: "Turks and Caicos Islands", adj: "Turks and Caicos Island" },
            UG: { name: "Uganda", adj: "Ugandan" },
            UA: { name: "Ukraine", adj: "Ukrainian" },
            AE: { name: "United Arab Emirates", adj: "Emirati" },
            GB: { name: "United Kingdom", adj: "British" },
            US: { name: "United States", adj: "American" },
            UY: { name: "Uruguay", adj: "Uruguayan" },
            UZ: { name: "Uzbekistan", adj: "Uzbekistani" },
            VU: { name: "Vanuatu", adj: "Vanuatuan" },
            VE: { name: "Venezuela", adj: "Venezuelan" },
            VN: { name: "Vietnam", adj: "Vietnamese" },
            VG: { name: "Virgin Islands, British", adj: "British Virgin Island" },
            VI: { name: "Virgin Islands, United States", adj: "U.S. Virgin Island" },
            YE: { name: "Yemen", adj: "Yemeni" },
            ZM: { name: "Zambia", adj: "Zambian" },
            ZW: { name: "Zimbabwe", adj: "Zimbabwean" }
          };
          E.timezone = {
            CI: "Africa/Abidjan",
            GH: "Africa/Accra",
            ET: "Africa/Addis_Ababa",
            DZ: "Africa/Algiers",
            ER: "Africa/Asmara",
            ML: "Africa/Bamako",
            CF: "Africa/Bangui",
            GM: "Africa/Banjul",
            GW: "Africa/Bissau",
            MW: "Africa/Blantyre",
            CG: "Africa/Brazzaville",
            BI: "Africa/Bujumbura",
            EG: "Africa/Cairo",
            MA: "Africa/Casablanca",
            GN: "Africa/Conakry",
            SN: "Africa/Dakar",
            TZ: "Africa/Dar_es_Salaam",
            DJ: "Africa/Djibouti",
            CM: "Africa/Douala",
            EH: "Africa/El_Aaiun",
            SL: "Africa/Freetown",
            BW: "Africa/Gaborone",
            ZW: "Africa/Harare",
            ZA: "Africa/Johannesburg",
            SS: "Africa/Juba",
            UG: "Africa/Kampala",
            SD: "Africa/Khartoum",
            RW: "Africa/Kigali",
            CD: "Africa/Kinshasa",
            NG: "Africa/Lagos",
            GA: "Africa/Libreville",
            TG: "Africa/Lome",
            AO: "Africa/Luanda",
            ZM: "Africa/Lusaka",
            GQ: "Africa/Malabo",
            MZ: "Africa/Maputo",
            LS: "Africa/Maseru",
            SZ: "Africa/Mbabane",
            SO: "Africa/Mogadishu",
            LR: "Africa/Monrovia",
            KE: "Africa/Nairobi",
            TD: "Africa/Ndjamena",
            NE: "Africa/Niamey",
            MR: "Africa/Nouakchott",
            BF: "Africa/Ouagadougou",
            BJ: "Africa/Porto-Novo",
            ST: "Africa/Sao_Tome",
            LY: "Africa/Tripoli",
            TN: "Africa/Tunis",
            NA: "Africa/Windhoek",
            AI: "America/Anguilla",
            AG: "America/Antigua",
            AR: "America/Argentina/Buenos_Aires",
            AW: "America/Aruba",
            PY: "America/Asuncion",
            BB: "America/Barbados",
            BZ: "America/Belize",
            CO: "America/Bogota",
            VE: "America/Caracas",
            KY: "America/Cayman",
            CR: "America/Costa_Rica",
            CW: "America/Curacao",
            DM: "America/Dominica",
            SV: "America/El_Salvador",
            GL: "America/Godthab",
            TC: "America/Grand_Turk",
            GD: "America/Grenada",
            GT: "America/Guatemala",
            EC: "America/Guayaquil",
            GY: "America/Guyana",
            CU: "America/Havana",
            JM: "America/Jamaica",
            BO: "America/La_Paz",
            PE: "America/Lima",
            NI: "America/Managua",
            MF: "America/Marigot",
            MQ: "America/Martinique",
            MX: "America/Mexico_City",
            UY: "America/Montevideo",
            MS: "America/Montserrat",
            BS: "America/Nassau",
            BR: "America/Sao_Paulo",
            PA: "America/Panama",
            SR: "America/Paramaribo",
            HT: "America/Port-au-Prince",
            TT: "America/Port_of_Spain",
            PR: "America/Puerto_Rico",
            CL: "America/Santiago",
            DO: "America/Santo_Domingo",
            BL: "America/St_Barthelemy",
            KN: "America/St_Kitts",
            LC: "America/St_Lucia",
            VI: "America/St_Thomas",
            VC: "America/St_Vincent",
            HN: "America/Tegucigalpa",
            VG: "America/Tortola",
            AQ: "Pacific/Auckland",
            YE: "Asia/Aden",
            KZ: "Asia/Almaty",
            JO: "Asia/Amman",
            TM: "Asia/Ashgabat",
            IQ: "Asia/Baghdad",
            BH: "Asia/Bahrain",
            AZ: "Asia/Baku",
            TH: "Asia/Bangkok",
            LB: "Asia/Beirut",
            KG: "Asia/Bishkek",
            BN: "Asia/Brunei",
            IN: "Asia/Colombo",
            LK: "Asia/Colombo",
            SY: "Asia/Damascus",
            BD: "Asia/Dhaka",
            TL: "Asia/Dili",
            AE: "Asia/Dubai",
            TJ: "Asia/Dushanbe",
            PS: "Asia/Gaza",
            VN: "Asia/Ho_Chi_Minh",
            HK: "Asia/Hong_Kong",
            ID: "Asia/Jakarta",
            AF: "Asia/Kabul",
            PK: "Asia/Karachi",
            NP: "Asia/Kathmandu",
            MY: "Asia/Kuala_Lumpur",
            KW: "Asia/Kuwait",
            MO: "Asia/Macau",
            PH: "Asia/Manila",
            OM: "Asia/Muscat",
            CY: "Asia/Nicosia",
            KH: "Asia/Phnom_Penh",
            KP: "Asia/Pyongyang",
            QA: "Asia/Qatar",
            MM: "Asia/Rangoon",
            SA: "Asia/Riyadh",
            KR: "Asia/Seoul",
            CN: "Asia/Shanghai",
            SG: "Asia/Singapore",
            TW: "Asia/Taipei",
            UZ: "Asia/Tashkent",
            GE: "Asia/Tbilisi",
            IR: "Asia/Tehran",
            BT: "Asia/Thimphu",
            JP: "Asia/Tokyo",
            MN: "Asia/Ulaanbaatar",
            LA: "Asia/Vientiane",
            AM: "Asia/Yerevan",
            BM: "Atlantic/Bermuda",
            CV: "Atlantic/Cape_Verde",
            FO: "Atlantic/Faroe",
            IS: "Atlantic/Reykjavik",
            GS: "Atlantic/South_Georgia",
            SH: "Atlantic/St_Helena",
            FK: "Atlantic/Stanley",
            AU: "Australia/Sydney",
            CA: "America/Toronto",
            NL: "Europe/Amsterdam",
            AD: "Europe/Andorra",
            GR: "Europe/Athens",
            RS: "Europe/Belgrade",
            DE: "Europe/Berlin",
            SK: "Europe/Bratislava",
            BE: "Europe/Brussels",
            RO: "Europe/Bucharest",
            HU: "Europe/Budapest",
            DK: "Europe/Copenhagen",
            IE: "Europe/Dublin",
            GI: "Europe/Gibraltar",
            GG: "Europe/Guernsey",
            FI: "Europe/Helsinki",
            IM: "Europe/Isle_of_Man",
            MD: "Europe/Istanbul",
            TR: "Europe/Istanbul",
            JE: "Europe/Jersey",
            UA: "Europe/Kiev",
            PT: "Europe/Lisbon",
            SI: "Europe/Ljubljana",
            GB: "Europe/London",
            UK: "Europe/London",
            LU: "Europe/Luxembourg",
            ES: "Europe/Madrid",
            MT: "Europe/Malta",
            AX: "Europe/Mariehamn",
            BY: "Europe/Minsk",
            MC: "Europe/Monaco",
            RU: "Europe/Moscow",
            NO: "Europe/Oslo",
            FR: "Europe/Paris",
            ME: "Europe/Podgorica",
            CZ: "Europe/Prague",
            LV: "Europe/Riga",
            IT: "Europe/Rome",
            SM: "Europe/San_Marino",
            BA: "Europe/Sarajevo",
            MK: "Europe/Skopje",
            BG: "Europe/Sofia",
            SE: "Europe/Stockholm",
            EE: "Europe/Tallinn",
            AL: "Europe/Tirane",
            LI: "Europe/Vaduz",
            VA: "Europe/Vatican",
            AT: "Europe/Vienna",
            LT: "Europe/Vilnius",
            HR: "Europe/Zagreb",
            CH: "Europe/Zurich",
            MG: "Indian/Antananarivo",
            CX: "Indian/Christmas",
            CC: "Indian/Cocos",
            KM: "Indian/Comoro",
            TF: "Indian/Kerguelen",
            SC: "Indian/Mahe",
            MV: "Indian/Maldives",
            MU: "Indian/Mauritius",
            YT: "Indian/Mayotte",
            IL: "Israel",
            WS: "Pacific/Apia",
            NZ: "Pacific/Auckland",
            FM: "Pacific/Chuuk",
            VU: "Pacific/Efate",
            TK: "Pacific/Fakaofo",
            FJ: "Pacific/Fiji",
            TV: "Pacific/Funafuti",
            SB: "Pacific/Guadalcanal",
            GU: "Pacific/Guam",
            MH: "Pacific/Majuro",
            NR: "Pacific/Nauru",
            NU: "Pacific/Niue",
            NF: "Pacific/Norfolk",
            NC: "Pacific/Noumea",
            AS: "Pacific/Pago_Pago",
            PW: "Pacific/Palau",
            PN: "Pacific/Pitcairn",
            PG: "Pacific/Port_Moresby",
            CK: "Pacific/Rarotonga",
            MP: "Pacific/Saipan",
            PF: "Pacific/Tahiti",
            KI: "Pacific/Tarawa",
            TO: "Pacific/Tongatapu",
            WF: "Pacific/Wallis",
            PL: "Europe/Warsaw",
            US: "America/New_York"
          };
          E.regions = {
            AD: ["Southern Europe", "EMEA"],
            AE: ["Western Asia", "EMEA"],
            AF: ["Southern Asia", "EMEA"],
            AG: ["Caribbean", "AMER"],
            AI: ["Caribbean", "AMER"],
            AL: ["South-Eastern Europe", "EMEA"],
            AM: ["Western Asia", "EMEA"],
            AN: ["Caribbean"],
            AO: ["Middle Africa", "EMEA"],
            AQ: ["Antarctica", "APAC"],
            AR: ["South America", "AMER"],
            AS: ["Polynesia", "South America", "AMER"],
            AT: ["Western Europe", "EMEA"],
            AU: ["Australia and New Zealand", "APAC"],
            AW: ["Caribbean", "AMER"],
            AX: ["Scandinavia", "EMEA", "Northern Europe"],
            AZ: ["Western Asia", "EMEA"],
            BA: ["South-Eastern Europe", "EMEA"],
            BB: ["Caribbean", "AMER"],
            BD: ["Southern Asia", "APAC"],
            BE: ["Western Europe", "EMEA"],
            GF: ["South America", "AMER"],
            BF: ["Western Africa", "EMEA"],
            BG: ["Eastern Europe", "EMEA"],
            BH: ["Western Asia", "EMEA"],
            BI: ["Eastern Africa", "EMEA"],
            BJ: ["Western Africa", "EMEA"],
            BL: ["Caribbean", "AMER"],
            BM: ["Northern America", "AMER"],
            BN: ["South-Eastern Asia", "EMEA"],
            BO: ["South America", "AMER"],
            BQ: ["Caribbean", "AMER"],
            BR: ["South America", "AMER"],
            BS: ["Caribbean", "AMER"],
            BT: ["Southern Asia", "APAC"],
            BW: ["Southern Africa", "EMEA"],
            BY: ["Eastern Europe", "EMEA"],
            BZ: ["South America", "AMER"],
            CA: ["Northern America", "AMER"],
            CC: ["Australia and New Zealand", "APAC"],
            CD: ["Middle Africa", "EMEA"],
            CF: ["Middle Africa", "EMEA"],
            CG: ["Middle Africa", "EMEA"],
            CH: ["Western Europe", "EMEA"],
            CI: ["Western Africa", "EMEA"],
            CK: ["Polynesia", "APAC"],
            CL: ["South America", "AMER"],
            CM: ["Middle Africa", "EMEA"],
            CN: ["Asia", "China"],
            CO: ["South America", "AMER"],
            CR: ["South America", "AMER"],
            CU: ["Caribbean", "AMER"],
            CV: ["Western Africa", "EMEA"],
            CW: ["Caribbean", ""],
            CX: ["Australia and New Zealand", "APAC"],
            CY: ["South-Eastern Europe", "EMEA"],
            CZ: ["Eastern Europe", "EMEA"],
            DE: ["Western Europe", "EMEA"],
            DJ: ["Eastern Africa", "EMEA"],
            DK: ["Scandinavia", "EMEA", "Northern Europe"],
            DM: ["Caribbean", "AMER"],
            DO: ["Caribbean", "AMER"],
            DZ: ["Northern Africa", "EMEA"],
            EC: ["South America", "AMER"],
            EE: ["Eastern Europe", "EMEA"],
            EG: ["Northern Africa", "EMEA"],
            EH: ["Northern Africa", "EMEA"],
            ER: ["Eastern Africa", "EMEA"],
            ES: ["Southern Europe", "EMEA"],
            ET: ["Eastern Africa", "EMEA"],
            EU: ["Western Europe"],
            FI: ["Scandinavia", "EMEA", "Northern Europe"],
            FJ: ["Melanesia", "APAC"],
            FK: ["South America", "AMER"],
            FM: ["Micronesia", "APAC"],
            FO: ["Scandinavia", "EMEA", "Northern Europe"],
            FR: ["Western Europe", "EMEA"],
            GA: ["Middle Africa", "EMEA"],
            GB: ["Northern Europe", "EMEA"],
            GD: ["Caribbean", "AMER"],
            GE: ["Western Asia", "EMEA"],
            GG: ["Northern Europe", "EMEA"],
            GH: ["Western Africa", "EMEA"],
            GI: ["Southern Europe", "EMEA"],
            GL: ["Scandinavia", "EMEA", "Northern Europe"],
            GM: ["Western Africa", "EMEA"],
            GN: ["Western Africa", "EMEA"],
            GP: ["Caribbean", "AMER"],
            GQ: ["Middle Africa", "EMEA"],
            GR: ["South-Eastern Europe", "EMEA"],
            GS: ["Antarctica", "South America", "AMER"],
            GT: ["South America", "AMER"],
            GU: ["Micronesia", "APAC"],
            GW: ["Western Africa", "EMEA"],
            GY: ["South America", "EMEA"],
            HK: ["Eastern Asia", "China"],
            HN: ["South America", "AMER"],
            HR: ["South-Eastern Europe", "EMEA"],
            HT: ["Caribbean", "AMER"],
            HU: ["Eastern Europe", "EMEA"],
            ID: ["South-Eastern Asia", "APAC"],
            IE: ["Northern Europe", "EMEA"],
            IL: ["Western Asia", "EMEA"],
            IM: ["Northern Europe", "EMEA"],
            IN: ["Southern Asia", "APAC"],
            IQ: ["Western Asia", "EMEA"],
            IR: ["Southern Asia", "EMEA"],
            IS: ["Scandinavia", "EMEA", "Northern Europe"],
            IT: ["Southern Europe", "EMEA"],
            JE: ["Northern Europe", "EMEA"],
            JM: ["Caribbean", "AMER"],
            JO: ["Western Asia", "EMEA"],
            JP: ["Eastern Asia", "APAC"],
            KE: ["Eastern Africa", "EMEA"],
            KG: ["Central Asia", "EMEA"],
            KH: ["South-Eastern Asia", "APAC"],
            KI: ["Micronesia", "EMEA"],
            KM: ["Eastern Africa", "EMEA"],
            KN: ["Caribbean", "AMER"],
            KP: ["Eastern Asia", "APAC"],
            KR: ["Eastern Asia", "APAC"],
            KW: ["Western Asia", "EMEA"],
            KY: ["Caribbean", "AMER"],
            KZ: ["Central Asia", "EMEA"],
            LA: ["South-Eastern Asia", "APAC"],
            LB: ["Western Asia", "EMEA"],
            LC: ["Caribbean", "AMER"],
            LI: ["Western Europe", "EMEA"],
            LK: ["Southern Asia", "APAC"],
            LR: ["Western Africa", "EMEA"],
            LS: ["Southern Africa", "EMEA"],
            LT: ["Eastern Europe", "EMEA"],
            LU: ["Western Europe", "EMEA"],
            LV: ["Eastern Europe", "EMEA"],
            LY: ["Northern Africa", "EMEA"],
            MA: ["Northern Africa", "EMEA"],
            MC: ["Western Europe", "EMEA"],
            MD: ["Eastern Europe", "EMEA"],
            ME: ["South-Eastern Europe", "EMEA"],
            MF: ["Caribbean", "AMER"],
            MG: ["Eastern Africa", "EMEA"],
            MH: ["Micronesia", "AMER"],
            MK: ["South-Eastern Europe", "EMEA"],
            ML: ["Western Africa", "EMEA"],
            MM: ["South-Eastern Asia", "APAC"],
            MN: ["Eastern Asia", "APAC"],
            MO: ["Eastern Asia", "APAC"],
            MP: ["Micronesia", "AMER"],
            MQ: ["Caribbean", "EMEA"],
            MR: ["Western Africa", "EMEA"],
            MS: ["Caribbean", "AMER"],
            MT: ["Southern Europe", "EMEA"],
            MU: ["Eastern Africa", "EMEA"],
            MV: ["Southern Asia", "APAC"],
            MW: ["Eastern Africa", "EMEA"],
            MX: ["South America", "AMER"],
            MY: ["South-Eastern Asia", "APAC"],
            MZ: ["Eastern Africa", "EMEA"],
            NA: ["Southern Africa", "EMEA"],
            NC: ["Melanesia", "APAC"],
            NE: ["Western Africa", "EMEA"],
            NF: ["Australia and New Zealand", "AMER"],
            NG: ["Western Africa", "EMEA"],
            NI: ["South America", "AMER"],
            NL: ["Western Europe", "EMEA"],
            NO: ["Scandinavia", "EMEA", "Northern Europe"],
            NP: ["Southern Asia", "APAC"],
            NR: ["Micronesia", "AMER"],
            NU: ["Polynesia", "AMER"],
            NZ: ["Australia and New Zealand", "APAC"],
            OM: ["Western Asia", "EMEA"],
            PA: ["South America", "AMER"],
            PE: ["South America", "AMER"],
            PF: ["Polynesia", "EMEA"],
            PG: ["Melanesia", "APAC"],
            PH: ["South-Eastern Asia", "APAC"],
            PK: ["Southern Asia", "EMEA"],
            PL: ["Eastern Europe", "EMEA"],
            PN: ["Polynesia", "AMER"],
            PR: ["Caribbean", "AMER"],
            PS: ["Western Asia", "EMEA"],
            PT: ["Southern Europe", "EMEA"],
            PW: ["Micronesia", "APAC"],
            PY: ["South America", "AMER"],
            QA: ["Western Asia", "EMEA"],
            RE: ["Eastern Africa", "EMEA"],
            RO: ["Eastern Europe", "EMEA"],
            RS: ["South-Eastern Europe", "EMEA"],
            RU: ["Eastern Europe", "EMEA"],
            RW: ["Eastern Africa", "EMEA"],
            SA: ["Western Asia", "EMEA"],
            SB: ["Melanesia", "APAC"],
            SC: ["Eastern Africa", "APAC"],
            SD: ["Northern Africa", "EMEA"],
            SE: ["Scandinavia", "EMEA", "Northern Europe"],
            SG: ["South-Eastern Asia", "APAC"],
            SX: ["Caribbean", "AMER"],
            SH: ["Western Africa", "EMEA"],
            SI: ["South-Eastern Europe", "EMEA"],
            SK: ["Eastern Europe", "EMEA"],
            SL: ["Western Africa", "EMEA"],
            SM: ["Southern Europe", "EMEA"],
            SN: ["Western Africa", "EMEA"],
            SO: ["Eastern Africa", "EMEA"],
            SR: ["South America", "AMER"],
            SS: ["Eastern Africa", "EMEA"],
            ST: ["Middle Africa", "EMEA"],
            SV: ["South America", "AMER"],
            SY: ["Western Asia", "EMEA"],
            SZ: ["Southern Africa", "EMEA"],
            TC: ["Caribbean", "AMER"],
            TD: ["Middle Africa", "EMEA"],
            TF: ["Antarctica", "EMEA"],
            TG: ["Western Africa", "EMEA"],
            TH: ["South-Eastern Asia", "APAC"],
            TJ: ["Central Asia", "EMEA"],
            TK: ["Polynesia", "EMEA"],
            TL: ["South-Eastern Asia", "APAC"],
            TM: ["Central Asia", "EMEA"],
            TN: ["Northern Africa", "EMEA"],
            TO: ["Polynesia", "APAC"],
            TR: ["South-Eastern Europe", "EMEA"],
            TT: ["Caribbean", "AMER"],
            TV: ["Polynesia", "AMER"],
            TW: ["Eastern Asia", "China"],
            TZ: ["Eastern Africa", "EMEA"],
            UA: ["Eastern Europe", "EMEA"],
            UG: ["Eastern Africa", "EMEA"],
            UK: ["Northern Europe", "EMEA"],
            US: ["Northern America", "AMER"],
            UY: ["South America", "AMER"],
            UZ: ["Central Asia", "EMEA"],
            VA: ["Southern Europe", "EMEA"],
            VC: ["Caribbean", "AMER"],
            VE: ["South America", "AMER"],
            VG: ["Caribbean", "AMER"],
            VI: ["Caribbean", "AMER"],
            VN: ["South-Eastern Asia", "APAC"],
            VU: ["Melanesia", "APAC"],
            WF: ["Polynesia", "AMER"],
            WS: ["Polynesia", "APAC"],
            XK: ["South-Eastern Europe", "EMEA"],
            YE: ["Western Asia", "EMEA"],
            YT: ["Eastern Africa", "EMEA"],
            ZA: ["Southern Africa", "EMEA"],
            ZM: ["Eastern Africa", "EMEA"],
            ZW: ["Eastern Africa", "EMEA"]
          };
          var supraregions = {
            "Northern America": ["America"],
            "South America": ["LATAM"],
            "Central America": ["LATAM"],
            Caribbean: ["LATAM", "South America"],
            LATAM: ["America"],
            "Eastern Europe": ["Eastern Europe (W/E)"],
            "South-Eastern Europe": ["Eastern Europe (W/E)"],
            "Western Europe": ["Western Europe (W/E)"],
            "Southern Europe": ["Western Europe (W/E)"],
            "Northern Europe": ["Western Europe (W/E)"],
            "Western Europe (W/E)": ["Europe"],
            "Eastern Europe (W/E)": ["Europe"],
            Polynesia: ["Oceania"],
            Melanesia: ["Oceania"],
            Micronesia: ["Oceania"],
            "Australia and New Zealand": ["Oceania"],
            Oceania: ["APAC"],
            "South-Eastern Asia": ["APAC", "Asia"],
            "Southern Asia": ["APAC", "Asia"],
            "Eastern Asia": ["APAC", "Asia"],
            "Central Asia": ["Asia"],
            "Western Asia": ["Asia"],
            "Eastern Africa": ["Africa"],
            "Western Africa": ["Africa"],
            "Southern Africa": ["Africa"],
            "Northern Africa": ["Africa"],
            "Middle Africa": ["Africa"]
          };
          var extend_regions = function (regions) {
            for (var i = 0; i < regions.length; i++) {
              (supraregions[regions[i]] || [])
                .filter(function (extra) {
                  return !regions.includes(extra);
                })
                .forEach(function (extra) {
                  regions.push(extra);
                });
            }
            regions.push("All");
          };
          (function () {
            for (var country in E.regions) extend_regions(E.regions[country]);
          })();
          E.unallowed_list = { SY: 1, LB: 1, IR: 1, IQ: 1, DO: 1 };
          E.is_allowed = function (code) {
            return E.list[code] && !E.unallowed_list[code];
          };
          E.dialing_code_list = {
            AF: "93",
            AL: "355",
            DZ: "213",
            AX: "358",
            AS: "1684",
            AD: "376",
            AO: "244",
            AI: "1264",
            AQ: "672",
            AG: "1268",
            AR: "54",
            AM: "374",
            AW: "297",
            AU: "61",
            AT: "43",
            AZ: "994",
            BS: "1242",
            BH: "973",
            JE: "44",
            BD: "880",
            BB: "1246",
            BY: "375",
            BE: "32",
            BZ: "501",
            BJ: "229",
            BM: "1441",
            BT: "975",
            BO: "591",
            BA: "387",
            BW: "267",
            BR: "55",
            BN: "673",
            BG: "359",
            BF: "226",
            BI: "257",
            KH: "855",
            CM: "237",
            CV: "238",
            KY: "1345",
            CF: "236",
            TD: "235",
            CL: "56",
            CN: "86",
            CX: "61",
            CC: "61",
            CO: "57",
            KM: "269",
            CG: "242",
            CK: "682",
            CR: "506",
            CI: "225",
            HR: "385",
            CU: "53",
            CW: "599",
            CY: "357",
            CZ: "420",
            CD: "243",
            DK: "45",
            DJ: "253",
            DM: "1767",
            EC: "593",
            EG: "20",
            SV: "503",
            GQ: "240",
            ER: "291",
            EE: "372",
            ET: "251",
            FK: "500",
            FO: "298",
            FJ: "679",
            FI: "358",
            FR: "33",
            PF: "689",
            TF: "262",
            GA: "241",
            GM: "220",
            GE: "995",
            DE: "49",
            GH: "233",
            GI: "350",
            GB: "44",
            GR: "30",
            GL: "299",
            GD: "1473",
            GU: "1671",
            GT: "502",
            GG: "44",
            GN: "224",
            GW: "245",
            GY: "592",
            HT: "509",
            HN: "504",
            HK: "852",
            HU: "36",
            IS: "354",
            IN: "91",
            ID: "62",
            IR: "98",
            IQ: "964",
            IE: "353",
            IM: "44",
            IL: "972",
            IT: "39",
            JM: "1876",
            JP: "81",
            JO: "962",
            KE: "254",
            KI: "686",
            KW: "965",
            KG: "996",
            LA: "856",
            LV: "371",
            LB: "961",
            LS: "266",
            LR: "231",
            LY: "218",
            LI: "423",
            LT: "370",
            LU: "352",
            MO: "853",
            MK: "389",
            MG: "261",
            MW: "265",
            MY: "60",
            MV: "960",
            ML: "223",
            MT: "356",
            MH: "692",
            MQ: "596",
            MR: "222",
            MU: "230",
            YT: "262",
            MX: "52",
            FM: "691",
            MD: "373",
            MC: "377",
            MN: "976",
            ME: "382",
            MS: "1664",
            MA: "212",
            MZ: "258",
            MM: "95",
            NA: "264",
            NR: "674",
            NP: "977",
            NL: "31",
            AN: "599",
            NC: "687",
            NZ: "64",
            NI: "505",
            NE: "227",
            NG: "234",
            NU: "683",
            NF: "672",
            KP: "850",
            MP: "1670",
            NO: "47",
            OM: "968",
            PK: "92",
            PW: "680",
            PS: "970",
            PA: "507",
            PG: "675",
            PY: "595",
            PE: "51",
            PH: "63",
            PN: "64",
            PL: "48",
            PT: "351",
            QA: "974",
            RO: "40",
            RW: "250",
            BL: "590",
            SH: "290",
            KN: "1869",
            LC: "1758",
            MF: "590",
            VC: "1784",
            SM: "378",
            ST: "239",
            SA: "966",
            SN: "221",
            RS: "381",
            SC: "248",
            SL: "232",
            SG: "65",
            SK: "421",
            SI: "386",
            SB: "677",
            SO: "252",
            ZA: "27",
            GS: "500",
            KR: "82",
            SS: "211",
            ES: "34",
            LK: "94",
            SD: "249",
            SR: "597",
            SZ: "268",
            SE: "46",
            CH: "41",
            SY: "963",
            TW: "886",
            TJ: "992",
            TZ: "255",
            TH: "66",
            TL: "670",
            TG: "228",
            TK: "690",
            TO: "676",
            TT: "1868",
            TN: "216",
            TR: "90",
            TM: "993",
            TC: "1649",
            TV: "688",
            UG: "256",
            UA: "380",
            AE: "971",
            UK: "44",
            UY: "598",
            UZ: "998",
            VU: "678",
            VA: "39",
            VE: "58",
            VN: "84",
            VG: "1284",
            VI: "1340",
            WF: "681",
            EH: "212",
            WS: "685",
            YE: "967",
            ZM: "260",
            ZW: "263",
            DO: "1",
            CA: "1",
            KZ: "7",
            US: "1",
            PR: "1",
            RU: "7"
          };
          E.dialing_code_rlist = {
            1: "US",
            1403: "CA",
            1587: "CA",
            1780: "CA",
            1825: "CA",
            1236: "CA",
            1250: "CA",
            1604: "CA",
            1778: "CA",
            1204: "CA",
            1431: "CA",
            1506: "CA",
            1709: "CA",
            1902: "CA",
            1782: "CA",
            1226: "CA",
            1249: "CA",
            1289: "CA",
            1343: "CA",
            1365: "CA",
            1416: "CA",
            1437: "CA",
            1519: "CA",
            1548: "CA",
            1613: "CA",
            1647: "CA",
            1705: "CA",
            1807: "CA",
            1905: "CA",
            1418: "CA",
            1438: "CA",
            1450: "CA",
            1514: "CA",
            1579: "CA",
            1581: "CA",
            1819: "CA",
            1873: "CA",
            1306: "CA",
            1639: "CA",
            1867: "CA",
            1787: "PR",
            1939: "PR",
            1809: "DO",
            1829: "DO",
            1849: "DO",
            1242: "BS",
            1246: "BB",
            1264: "AI",
            1268: "AG",
            1284: "VG",
            1340: "VI",
            1345: "KY",
            1441: "BM",
            1473: "GD",
            1649: "TC",
            1664: "MS",
            1670: "MP",
            1671: "GU",
            1684: "AS",
            1758: "LC",
            1767: "DM",
            1784: "VC",
            1868: "TT",
            1869: "KN",
            1876: "JM",
            20: "EG",
            211: "SS",
            212: "MA",
            212528: "EH",
            213: "DZ",
            216: "TN",
            218: "LY",
            220: "GM",
            221: "SN",
            222: "MR",
            223: "ML",
            224: "GN",
            225: "CI",
            226: "BF",
            227: "NE",
            228: "TG",
            229: "BJ",
            230: "MU",
            231: "LR",
            232: "SL",
            233: "GH",
            234: "NG",
            235: "TD",
            236: "CF",
            237: "CM",
            238: "CV",
            239: "ST",
            240: "GQ",
            241: "GA",
            242: "CG",
            243: "CD",
            244: "AO",
            245: "GW",
            248: "SC",
            249: "SD",
            250: "RW",
            251: "ET",
            252: "SO",
            253: "DJ",
            254: "KE",
            255: "TZ",
            256: "UG",
            257: "BI",
            258: "MZ",
            260: "ZM",
            261: "MG",
            262: "TF",
            262269: "YT",
            262639: "YT",
            263: "ZW",
            264: "NA",
            265: "MW",
            266: "LS",
            267: "BW",
            268: "SZ",
            269: "KM",
            27: "ZA",
            290: "SH",
            291: "ER",
            297: "AW",
            298: "FO",
            299: "GL",
            30: "GR",
            31: "NL",
            32: "BE",
            33: "FR",
            34: "ES",
            350: "GI",
            351: "PT",
            352: "LU",
            353: "IE",
            354: "IS",
            355: "AL",
            356: "MT",
            357: "CY",
            358: "FI",
            35818: "AX",
            358457: "AX",
            359: "BG",
            36: "HU",
            370: "LT",
            371: "LV",
            372: "EE",
            373: "MD",
            374: "AM",
            375: "BY",
            376: "AD",
            377: "MC",
            378: "SM",
            380: "UA",
            381: "RS",
            382: "ME",
            385: "HR",
            386: "SI",
            387: "BA",
            389: "MK",
            39: "IT",
            39066987: "VA",
            39066988: "VA",
            40: "RO",
            41: "CH",
            420: "CZ",
            421: "SK",
            423: "LI",
            43: "AT",
            44: "GB",
            441481: "GG",
            441534: "JE",
            441624: "IM",
            45: "DK",
            46: "SE",
            47: "NO",
            48: "PL",
            49: "DE",
            500: "FK",
            501: "BZ",
            502: "GT",
            503: "SV",
            504: "HN",
            505: "NI",
            506: "CR",
            507: "PA",
            509: "HT",
            51: "PE",
            52: "MX",
            53: "CU",
            54: "AR",
            55: "BR",
            56: "CL",
            57: "CO",
            58: "VE",
            590: "BL",
            591: "BO",
            592: "GY",
            593: "EC",
            595: "PY",
            596: "MQ",
            597: "SR",
            598: "UY",
            599: "AN",
            60: "MY",
            61: "AU",
            619162: "CC",
            619164: "CX",
            62: "ID",
            63: "PH",
            64: "NZ",
            65: "SG",
            66: "TH",
            670: "TL",
            6721: "AQ",
            67232: "NF",
            67235: "NF",
            673: "BN",
            674: "NR",
            675: "PG",
            676: "TO",
            677: "SB",
            678: "VU",
            679: "FJ",
            680: "PW",
            681: "WF",
            682: "CK",
            683: "NU",
            685: "WS",
            686: "KI",
            687: "NC",
            688: "TV",
            689: "PF",
            690: "TK",
            691: "FM",
            692: "MH",
            7: "RU",
            76: "KZ",
            77: "KZ",
            81: "JP",
            82: "KR",
            84: "VN",
            850: "KP",
            852: "HK",
            853: "MO",
            855: "KH",
            856: "LA",
            86: "CN",
            880: "BD",
            886: "TW",
            90: "TR",
            91: "IN",
            92: "PK",
            93: "AF",
            94: "LK",
            95: "MM",
            960: "MV",
            961: "LB",
            962: "JO",
            963: "SY",
            964: "IQ",
            965: "KW",
            966: "SA",
            967: "YE",
            968: "OM",
            970: "PS",
            971: "AE",
            972: "IL",
            973: "BH",
            974: "QA",
            975: "BT",
            976: "MN",
            977: "NP",
            98: "IR",
            992: "TJ",
            993: "TM",
            994: "AZ",
            995: "GE",
            996: "KG",
            998: "UZ"
          };
          E.google_list = {
            AD: "Andorra",
            AE: "United Arab Emirates",
            AF: "Afghanistan",
            AG: "Antigua and Barbuda",
            AL: "Albania",
            AM: "Armenia",
            AO: "Angola",
            AQ: "Antarctica",
            AR: "Argentina",
            AS: "American Samoa",
            AT: "Austria",
            AU: "Australia",
            AZ: "Azerbaijan",
            BA: "Bosnia and Herzegovina",
            BB: "Barbados",
            BD: "Bangladesh",
            BE: "Belgium",
            BF: "Burkina Faso",
            BG: "Bulgaria",
            BH: "Bahrain",
            BI: "Burundi",
            BJ: "Benin",
            BN: "Brunei",
            BO: "Bolivia",
            BQ: "Caribbean Netherlands",
            BR: "Brazil",
            BS: "The Bahamas",
            BT: "Bhutan",
            BW: "Botswana",
            BY: "Belarus",
            BZ: "Belize",
            CA: "Canada",
            CC: "Cocos (Keeling) Islands",
            CD: "Democratic Republic of the Congo",
            CF: "Central African Republic",
            CG: "Republic of the Congo",
            CH: "Switzerland",
            CI: "Cote d'Ivoire",
            CK: "Cook Islands",
            CL: "Chile",
            CM: "Cameroon",
            CN: "China",
            CO: "Colombia",
            CR: "Costa Rica",
            CV: "Cape Verde",
            CW: "Curacao",
            CX: "Christmas Island",
            CY: "Cyprus",
            CZ: "Czechia",
            DE: "Germany",
            DJ: "Djibouti",
            DK: "Denmark",
            DM: "Dominica",
            DO: "Dominican Republic",
            DZ: "Algeria",
            EC: "Ecuador",
            EE: "Estonia",
            EG: "Egypt",
            ER: "Eritrea",
            ES: "Spain",
            ET: "Ethiopia",
            FI: "Finland",
            FJ: "Fiji",
            FM: "Federated States of Micronesia",
            FR: "France",
            GA: "Gabon",
            GB: "United Kingdom",
            GD: "Grenada",
            GE: "Georgia",
            GG: "Guernsey",
            GH: "Ghana",
            GM: "The Gambia",
            GN: "Guinea",
            GQ: "Equatorial Guinea",
            GR: "Greece",
            GS: "South Georgia and the South Sandwich Islands",
            GT: "Guatemala",
            GU: "Guam",
            GW: "Guinea-Bissau",
            GY: "Guyana",
            HM: "Heard Island and McDonald Islands",
            HN: "Honduras",
            HR: "Croatia",
            HT: "Haiti",
            HU: "Hungary",
            ID: "Indonesia",
            IE: "Ireland",
            IL: "Israel",
            IN: "India",
            IQ: "Iraq",
            IS: "Iceland",
            IT: "Italy",
            JE: "Jersey",
            JM: "Jamaica",
            JO: "Jordan",
            JP: "Japan",
            KE: "Kenya",
            KG: "Kyrgyzstan",
            KH: "Cambodia",
            KI: "Kiribati",
            KM: "Comoros",
            KN: "Saint Kitts and Nevis",
            KR: "South Korea",
            KW: "Kuwait",
            KZ: "Kazakhstan",
            LA: "Laos",
            LB: "Lebanon",
            LC: "Saint Lucia",
            LI: "Liechtenstein",
            LK: "Sri Lanka",
            LR: "Liberia",
            LS: "Lesotho",
            LT: "Lithuania",
            LU: "Luxembourg",
            LV: "Latvia",
            LY: "Libya",
            MA: "Morocco",
            MC: "Monaco",
            MD: "Moldova",
            ME: "Montenegro",
            MG: "Madagascar",
            MH: "Marshall Islands",
            MK: "North Macedonia",
            ML: "Mali",
            MM: "Myanmar (Burma)",
            MN: "Mongolia",
            MP: "Northern Mariana Islands",
            MR: "Mauritania",
            MT: "Malta",
            MU: "Mauritius",
            MV: "Maldives",
            MW: "Malawi",
            MX: "Mexico",
            MY: "Malaysia",
            MZ: "Mozambique",
            NA: "Namibia",
            NC: "New Caledonia",
            NE: "Niger",
            NF: "Norfolk Island",
            NG: "Nigeria",
            NI: "Nicaragua",
            NL: "Netherlands",
            NO: "Norway",
            NP: "Nepal",
            NR: "Nauru",
            NU: "Niue",
            NZ: "New Zealand",
            OM: "Oman",
            PA: "Panama",
            PE: "Peru",
            PF: "French Polynesia",
            PG: "Papua New Guinea",
            PH: "Philippines",
            PK: "Pakistan",
            PL: "Poland",
            PM: "Saint Pierre and Miquelon",
            PN: "Pitcairn Islands",
            PT: "Portugal",
            PW: "Palau",
            PY: "Paraguay",
            QA: "Qatar",
            RO: "Romania",
            RS: "Serbia",
            RU: "Russia",
            RW: "Rwanda",
            SA: "Saudi Arabia",
            SB: "Solomon Islands",
            SC: "Seychelles",
            SE: "Sweden",
            SG: "Singapore",
            SH: "Saint Helena, Ascension and Tristan da Cunha",
            SI: "Slovenia",
            SK: "Slovakia",
            SL: "Sierra Leone",
            SM: "San Marino",
            SN: "Senegal",
            SO: "Somalia",
            SR: "Suriname",
            ST: "Sao Tome and Principe",
            SV: "El Salvador",
            SX: "Sint Maarten",
            SZ: "Eswatini",
            TD: "Chad",
            TF: "French Southern and Antarctic Lands",
            TG: "Togo",
            TH: "Thailand",
            TJ: "Tajikistan",
            TK: "Tokelau",
            TL: "Timor-Leste",
            TM: "Turkmenistan",
            TN: "Tunisia",
            TO: "Tonga",
            TR: "Turkey",
            TT: "Trinidad and Tobago",
            TV: "Tuvalu",
            TZ: "Tanzania",
            UA: "Ukraine",
            UG: "Uganda",
            UM: "United States Minor Outlying Islands",
            US: "United States",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VA: "Vatican City",
            VC: "Saint Vincent and the Grenadines",
            VE: "Venezuela",
            VN: "Vietnam",
            VU: "Vanuatu",
            WF: "Wallis and Futuna",
            WS: "Samoa",
            YE: "Yemen",
            ZA: "South Africa",
            ZM: "Zambia",
            ZW: "Zimbabwe"
          };
          E.us_state_zip_list = [
            { min: 35e3, max: 36999, code: "AL", name: "Alabama" },
            { min: 99500, max: 99999, code: "AK", name: "Alaska" },
            { min: 85e3, max: 86999, code: "AZ", name: "Arizona" },
            { min: 71600, max: 72999, code: "AR", name: "Arkansas" },
            { min: 9e4, max: 96699, code: "CA", name: "California" },
            { min: 8e4, max: 81999, code: "CO", name: "Colorado" },
            { min: 6e3, max: 6999, code: "CT", name: "Connecticut" },
            { min: 19700, max: 19999, code: "DE", name: "Deleware" },
            { min: 32e3, max: 34999, code: "FL", name: "Florida" },
            { min: 3e4, max: 31999, code: "GA", name: "Georgia" },
            { min: 96700, max: 96999, code: "HI", name: "Hawaii" },
            { min: 83200, max: 83999, code: "ID", name: "Idaho" },
            { min: 6e4, max: 62999, code: "IL", name: "Illinois" },
            { min: 46e3, max: 47999, code: "IN", name: "Indiana" },
            { min: 5e4, max: 52999, code: "IA", name: "Iowa" },
            { min: 66e3, max: 67999, code: "KS", name: "Kansas" },
            { min: 4e4, max: 42999, code: "KY", name: "Kentucky" },
            { min: 7e4, max: 71599, code: "LA", name: "Louisiana" },
            { min: 3900, max: 4999, code: "ME", name: "Maine" },
            { min: 20600, max: 21999, code: "MD", name: "Maryland" },
            { min: 1e3, max: 2799, code: "MA", name: "Massachusetts" },
            { min: 48e3, max: 49999, code: "MI", name: "Michigan" },
            { min: 55e3, max: 56999, code: "MN", name: "Minnesota" },
            { min: 38600, max: 39999, code: "MS", name: "Mississippi" },
            { min: 63e3, max: 65999, code: "MO", name: "Missouri" },
            { min: 59e3, max: 59999, code: "MT", name: "Montana" },
            { min: 27e3, max: 28999, code: "NC", name: "North Carolina" },
            { min: 58e3, max: 58999, code: "ND", name: "North Dakota" },
            { min: 68e3, max: 69999, code: "NE", name: "Nebraska" },
            { min: 88900, max: 89999, code: "NV", name: "Nevada" },
            { min: 3e3, max: 3899, code: "NH", name: "New Hampshire" },
            { min: 7e3, max: 8999, code: "NJ", name: "New Jersey" },
            { min: 87e3, max: 88499, code: "NM", name: "New Mexico" },
            { min: 1e4, max: 14999, code: "NY", name: "New York" },
            { min: 43e3, max: 45999, code: "OH", name: "Ohio" },
            { min: 73e3, max: 74999, code: "OK", name: "Oklahoma" },
            { min: 97e3, max: 97999, code: "OR", name: "Oregon" },
            { min: 15e3, max: 19699, code: "PA", name: "Pennsylvania" },
            { min: 300, max: 999, code: "PR", name: "Puerto Rico" },
            { min: 2800, max: 2999, code: "RI", name: "Rhode Island" },
            { min: 29e3, max: 29999, code: "SC", name: "South Carolina" },
            { min: 57e3, max: 57999, code: "SD", name: "South Dakota" },
            { min: 37e3, max: 38599, code: "TN", name: "Tennessee" },
            { min: 75e3, max: 79999, code: "TX", name: "Texas" },
            { min: 88500, max: 88599, code: "TX", name: "Texas" },
            { min: 84e3, max: 84999, code: "UT", name: "Utah" },
            { min: 5e3, max: 5999, code: "VT", name: "Vermont" },
            { min: 22e3, max: 24699, code: "VA", name: "Virgina" },
            { min: 2e4, max: 20599, code: "DC", name: "Washington DC" },
            { min: 98e3, max: 99499, code: "WA", name: "Washington" },
            { min: 24700, max: 26999, code: "WV", name: "West Virginia" },
            { min: 53e3, max: 54999, code: "WI", name: "Wisconsin" },
            { min: 82e3, max: 83199, code: "WY", name: "Wyoming" }
          ];
          E.in_state_list = {
            AN: "Andaman and Nicobar Islands",
            AP: "Andhra Pradesh",
            AR: "Arunachal Pradesh",
            AS: "Assam",
            BR: "Bihar",
            CG: "Chandigarh",
            CH: "Chhattisgarh",
            DN: "Dadra and Nagar Haveli",
            DD: "Daman and Diu",
            DL: "Delhi",
            GA: "Goa",
            GJ: "Gujarat",
            HR: "Haryana",
            HP: "Himachal Pradesh",
            JK: "Jammu and Kashmir",
            JH: "Jharkhand",
            KA: "Karnataka",
            KL: "Kerala",
            LA: "Ladakh",
            LD: "Lakshadweep",
            MP: "Madhya Pradesh",
            MH: "Maharashtra",
            MN: "Manipur",
            ML: "Meghalaya",
            MZ: "Mizoram",
            NL: "Nagaland",
            OR: "Odisha",
            PY: "Puducherry",
            PB: "Punjab",
            RJ: "Rajasthan",
            SK: "Sikkim",
            TN: "Tamil Nadu",
            TS: "Telangana",
            TR: "Tripura",
            UP: "Uttar Pradesh",
            UK: "Uttarakhand",
            WB: "West Bengal"
          };
          E.get_state_by_zip = function (zip) {
            zip = parseInt("" + zip, 10);
            var state = E.us_state_zip_list.filter(function (s) {
              return s.min <= zip && zip <= s.max;
            });
            if (state.length) return state[0].code;
          };
          E.currency_list = {
            AF: "AFN",
            AL: "ALL",
            DZ: "DZD",
            AS: "USD",
            AD: "EUR",
            AO: "AOA",
            AI: "XCD",
            AG: "XCD",
            AR: "ARS",
            AM: "AMD",
            AW: "AWG",
            AU: "AUD",
            AT: "EUR",
            AZ: "AZN",
            BS: "BSD",
            BH: "BHD",
            BD: "BDT",
            BB: "BBD",
            BY: "BYN",
            BE: "EUR",
            BZ: "BZD",
            BJ: "XOF",
            BM: "BMD",
            BT: "BTN",
            BO: "BOB",
            BQ: "USD",
            BA: "BAM",
            BW: "BWP",
            BV: "NOK",
            BR: "BRL",
            IO: "USD",
            BN: "BND",
            BG: "BGN",
            BF: "XOF",
            BI: "BIF",
            CV: "CVE",
            KH: "KHR",
            CM: "XAF",
            CA: "CAD",
            KY: "KYD",
            CF: "XAF",
            TD: "XAF",
            CL: "CLF",
            CN: "CNY",
            CX: "AUD",
            CC: "AUD",
            CO: "COP",
            KM: "KMF",
            CD: "CDF",
            CG: "XAF",
            CK: "NZD",
            CR: "CRC",
            HR: "EUR",
            CU: "CUC",
            CW: "ANG",
            CY: "EUR",
            CZ: "CZK",
            CI: "XOF",
            DK: "DKK",
            DJ: "DJF",
            DM: "XCD",
            DO: "DOP",
            EC: "USD",
            EG: "EGP",
            SV: "SVC",
            GQ: "XAF",
            ER: "ERN",
            EE: "EUR",
            ET: "ETB",
            FK: "FKP",
            FO: "DKK",
            FJ: "FJD",
            FI: "EUR",
            FR: "EUR",
            GF: "EUR",
            PF: "XPF",
            TF: "EUR",
            GA: "XAF",
            GM: "GMD",
            GE: "GEL",
            DE: "EUR",
            GH: "GHS",
            GI: "GIP",
            GR: "EUR",
            GL: "DKK",
            GD: "XCD",
            GP: "EUR",
            GU: "USD",
            GT: "GTQ",
            GG: "GBP",
            GN: "GNF",
            GW: "XOF",
            GY: "GYD",
            HT: "HTG",
            HM: "AUD",
            VA: "EUR",
            HN: "HNL",
            HK: "HKD",
            HU: "HUF",
            IS: "ISK",
            IN: "INR",
            ID: "IDR",
            IR: "IRR",
            IQ: "IQD",
            IE: "EUR",
            IM: "GBP",
            IL: "ILS",
            IT: "EUR",
            JM: "JMD",
            JP: "JPY",
            JE: "GBP",
            JO: "JOD",
            KZ: "KZT",
            KE: "KES",
            KI: "AUD",
            KP: "KPW",
            KR: "KRW",
            KW: "KWD",
            KG: "KGS",
            LA: "LAK",
            LV: "EUR",
            LB: "LBP",
            LS: "LSL",
            LR: "LRD",
            LY: "LYD",
            LI: "CHF",
            LT: "EUR",
            LU: "EUR",
            MO: "MOP",
            MG: "MGA",
            MW: "MWK",
            MY: "MYR",
            MV: "MVR",
            ML: "XOF",
            MT: "EUR",
            MH: "USD",
            MQ: "EUR",
            MR: "MRU",
            MU: "MUR",
            YT: "EUR",
            MX: "MXN",
            FM: "USD",
            MD: "MDL",
            MC: "EUR",
            MN: "MNT",
            ME: "EUR",
            MS: "XCD",
            MA: "MAD",
            MZ: "MZN",
            MM: "MMK",
            NA: "NAD",
            NR: "AUD",
            NP: "NPR",
            NL: "EUR",
            NC: "XPF",
            NZ: "NZD",
            NI: "NIO",
            NE: "XOF",
            NG: "NGN",
            NU: "NZD",
            NF: "AUD",
            MP: "USD",
            NO: "NOK",
            OM: "OMR",
            PK: "PKR",
            PW: "USD",
            PA: "PAB",
            PG: "PGK",
            PY: "PYG",
            PE: "PEN",
            PH: "PHP",
            PN: "NZD",
            PL: "PLN",
            PT: "EUR",
            PR: "USD",
            QA: "QAR",
            MK: "MKD",
            RO: "RON",
            RU: "RUB",
            RW: "RWF",
            RE: "EUR",
            BL: "EUR",
            SH: "SHP",
            KN: "XCD",
            LC: "XCD",
            MF: "EUR",
            PM: "EUR",
            VC: "XCD",
            WS: "WST",
            SM: "EUR",
            ST: "STN",
            SA: "SAR",
            SN: "XOF",
            RS: "RSD",
            SC: "SCR",
            SL: "SLL",
            SG: "SGD",
            SX: "ANG",
            SK: "EUR",
            SI: "EUR",
            SB: "SBD",
            SO: "SOS",
            ZA: "ZAR",
            SS: "SSP",
            ES: "EUR",
            LK: "LKR",
            SD: "SDG",
            SR: "SRD",
            SJ: "NOK",
            SE: "SEK",
            CH: "CHF",
            SY: "SYP",
            TW: "TWD",
            TJ: "TJS",
            TZ: "TZS",
            TH: "THB",
            TL: "USD",
            TG: "XOF",
            TK: "NZD",
            TO: "TOP",
            TT: "TTD",
            TN: "TND",
            TR: "TRY",
            TM: "TMT",
            TC: "USD",
            TV: "AUD",
            UG: "UGX",
            UA: "UAH",
            AE: "AED",
            GB: "GBP",
            UM: "USD",
            US: "USD",
            UY: "UYI",
            UZ: "UZS",
            VU: "VUV",
            VE: "VEF",
            VN: "VND",
            VG: "USD",
            VI: "USD",
            WF: "XPF",
            EH: "MAD",
            YE: "YER",
            ZM: "ZMW",
            ZW: "ZWL",
            AX: "EUR"
          };
          E.paypal_currency_list = [
            "AUD",
            "BRL",
            "CAD",
            "CZK",
            "DKK",
            "EUR",
            "HKD",
            "HUF",
            "ILS",
            "JPY",
            "MXN",
            "TWD",
            "NZD",
            "NOK",
            "PHP",
            "PLN",
            "GBP",
            "RUB",
            "SGD",
            "SEK",
            "CHF",
            "THB",
            "USD"
          ];
          E.bluesnap_currency_list = [
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "ARS",
            "AUD",
            "AWG",
            "BAM",
            "BBD",
            "BGN",
            "BHD",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BWP",
            "BYR",
            "CAD",
            "CHF",
            "CLP",
            "CNY",
            "CRC",
            "CZK",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "EUR",
            "FJD",
            "GBP",
            "GEL",
            "GIP",
            "GTQ",
            "HKD",
            "HUF",
            "IDR",
            "ILS",
            "INR",
            "ISK",
            "JMD",
            "JOD",
            "JPY",
            "KES",
            "KHR",
            "KRW",
            "KWD",
            "KYD",
            "KZT",
            "LBP",
            "LKR",
            "MAD",
            "MDL",
            "MKD",
            "MRO",
            "MUR",
            "MWK",
            "MXN",
            "MYR",
            "NAD",
            "NGN",
            "NOK",
            "NPR",
            "NZD",
            "OMR",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "SAR",
            "SCR",
            "SDG",
            "SEK",
            "SGD",
            "THB",
            "TND",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "USD",
            "UYU",
            "UZS",
            "VND",
            "XCD",
            "XOF",
            "ZAR",
            "COP"
          ];
          E.bluesnap_prohibited_countries = [
            "AF",
            "AX",
            "BQ",
            "CO",
            "CU",
            "EU",
            "IR",
            "IQ",
            "XK",
            "LB",
            "LY",
            "MM",
            "KP",
            "BL",
            "SS",
            "SD",
            "SY",
            "TL",
            "YE"
          ];
          E.avangate_currency_list = [
            "USD",
            "EUR",
            "GBP",
            "RON",
            "AUD",
            "CAD",
            "CHF",
            "CZK",
            "DKK",
            "HUF",
            "JPY",
            "NOK",
            "PLN",
            "SEK",
            "TRY",
            "RUB",
            "CNY",
            "BGN",
            "BRL",
            "HKD",
            "KRW",
            "MXN",
            "NZD",
            "SGD",
            "ZAR",
            "MDL",
            "AED",
            "EGP",
            "INR",
            "RSD",
            "UAH",
            "TWD",
            "ILS",
            "QAR",
            "SAR",
            "ARS",
            "CLP",
            "BOB",
            "COP",
            "PYG",
            "PEN",
            "UYU",
            "NGN",
            "NAD",
            "TND",
            "DZD",
            "KES",
            "BYN"
          ];
          E.avangate_prohibited_countries = [
            "CU",
            "IR",
            "LY",
            "SD",
            "SY",
            "KP",
            "AF",
            "DZ",
            "AS",
            "AG",
            "BS",
            "BJ",
            "BW",
            "BN",
            "KH",
            "CM",
            "CI",
            "FO",
            "GF",
            "GA",
            "GE",
            "GH",
            "GL",
            "GP",
            "GG",
            "GN",
            "IQ",
            "JM",
            "LY",
            "MV",
            "ML",
            "MZ",
            "MM",
            "NA",
            "NC",
            "NI",
            "MP",
            "QA",
            "RE",
            "RW",
            "SN",
            "SC",
            "SZ",
            "TJ",
            "TZ",
            "TL",
            "TN",
            "TM",
            "UG",
            "UM",
            "VE",
            "YE"
          ];
          E.stripe_currency_list = [
            "USD",
            "AED",
            "AFN",
            "ALL",
            "AMD",
            "ANG",
            "AOA",
            "ARS",
            "AUD",
            "AWG",
            "AZN",
            "BAM",
            "BBD",
            "BDT",
            "BGN",
            "BIF",
            "BMD",
            "BND",
            "BOB",
            "BRL",
            "BSD",
            "BWP",
            "BZD",
            "CAD",
            "CDF",
            "CHF",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "CVE",
            "CZK",
            "DJF",
            "DKK",
            "DOP",
            "DZD",
            "EGP",
            "ETB",
            "EUR",
            "FJD",
            "FKP",
            "GBP",
            "GEL",
            "GIP",
            "GMD",
            "GNF",
            "GTQ",
            "GYD",
            "HKD",
            "HNL",
            "HTG",
            "HUF",
            "IDR",
            "ILS",
            "INR",
            "ISK",
            "JMD",
            "JPY",
            "KES",
            "KGS",
            "KHR",
            "KMF",
            "KRW",
            "KYD",
            "KZT",
            "LAK",
            "LBP",
            "LKR",
            "LRD",
            "LSL",
            "MAD",
            "MDL",
            "MGA",
            "MKD",
            "MMK",
            "MNT",
            "MOP",
            "MUR",
            "MVR",
            "MWK",
            "MXN",
            "MYR",
            "MZN",
            "NAD",
            "NGN",
            "NIO",
            "NOK",
            "NPR",
            "NZD",
            "PAB",
            "PEN",
            "PGK",
            "PHP",
            "PKR",
            "PLN",
            "PYG",
            "QAR",
            "RON",
            "RSD",
            "RUB",
            "RWF",
            "SAR",
            "SBD",
            "SCR",
            "SEK",
            "SGD",
            "SHP",
            "SLL",
            "SOS",
            "SRD",
            "STD",
            "SZL",
            "THB",
            "TJS",
            "TOP",
            "TRY",
            "TTD",
            "TWD",
            "TZS",
            "UAH",
            "UGX",
            "UYU",
            "VND",
            "VUV",
            "WST",
            "XAF",
            "XCD",
            "XOF",
            "XPF",
            "YER",
            "ZAR",
            "ZMW"
          ];
          E.currency_decimals = { BYR: 0, CLP: 0, JPY: 0, KRW: 0, VND: 0, XOF: 0, HUF: 0, TWD: 0, ISK: 0 };
          E.currency_sign_list = {
            USD: "$",
            EUR: "€",
            GBP: "£",
            ARS: "$",
            AUD: "$",
            BRL: "R$",
            CAD: "C$",
            CHF: "Fr",
            CZK: "Kč",
            KRW: "₩",
            INR: "₹",
            ILS: "₪",
            MXN: "$",
            NOK: "kr",
            PHP: "₱",
            PLN: "zł",
            RUB: "₽",
            SEK: "kr",
            SGD: "S$",
            TRY: "₺"
          };
          E.code2label = function (code) {
            code = code.toUpperCase();
            return E.list[code] || code;
          };
          E.code2adj = function (code) {
            code = code.toUpperCase();
            return E.adj_list[code] || code;
          };
          E.code2timezone = function (code) {
            code = code.toUpperCase();
            return E.timezone[code] || code;
          };
          E.label2code = function (label) {
            for (var i in E.list) {
              if (E.list[i] === label) return i;
            }
            return "";
          };
          E.mixed2code = function (mixed) {
            if (!mixed) return;
            if (/^[A-Z]{2}$/.test(mixed)) return mixed;
            if (mixed.length == 2) return mixed.toUpperCase();
            if (mixed == "USA") return "US";
            for (var code in E.list) {
              if (E.list[code].toLowerCase() == mixed.toLowerCase()) return code;
            }
            return mixed;
          };
          E.www2code = function (code) {
            return code == "UK" ? "GB" : code == "uk" ? "gb" : code;
          };
          E.code2www = function (code) {
            return code == "GB" ? "UK" : code == "gb" ? "uk" : code;
          };
          E.gl2uule = function (gl) {
            gl = E.www2code(gl.toUpperCase());
            return E.google_list[gl] || gl;
          };
          E.code2currency = function (code) {
            return E.currency_list[code.toUpperCase()];
          };
          E.currency2sign = function (currency) {
            currency = currency && currency.toUpperCase();
            return E.currency_sign_list[currency] || "";
          };
          E.code2currency_sign = function (code) {
            return E.currency2sign(E.code2currency(code));
          };
          E.currency2prefix = function (currency) {
            var sign = E.currency2sign(currency);
            return sign ? sign : currency + " ";
          };
          var currency_rlist;
          E.get_currency_rlist = function () {
            if (currency_rlist) return currency_rlist;
            currency_rlist = {};
            for (var co in E.currency_list) {
              var cu = E.currency_list[co];
              if (!currency_rlist[cu]) currency_rlist[cu] = co;
              else {
                if (!Array.isArray(currency_rlist[cu])) currency_rlist[cu] = [currency_rlist[cu]];
                currency_rlist[cu].push(co);
              }
            }
            return currency_rlist;
          };
          E.get_currency_decimals = function (currency) {
            var decimals = E.currency_decimals[currency.toUpperCase()];
            return decimals === undefined ? 2 : decimals;
          };
          E.country2isocode = function (country) {
            return country_lookup[("" + country).toLowerCase()];
          };
          E.isocode2country = function (iso_code) {
            var name = E.iso_list[iso_code];
            return Array.isArray(name) ? name[0] : name;
          };
          var country_lookup = (function () {
            var lookup = {};
            Object.keys(E.iso_list).forEach(function (iso_code) {
              var names = E.iso_list[iso_code];
              (Array.isArray(names) ? names : [names]).forEach(function (n) {
                lookup[n.toLowerCase()] = iso_code;
              });
            });
            return lookup;
          })();
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    8425: (module, exports) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        var is_rn =
          (typeof global == "object" && !!global.nativeRequire) || (typeof navigator == "object" && navigator.product == "ReactNative");
        if (!is_node && !is_rn);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          function EventEmitter() {
            this._events = {};
          }
          EventEmitter.prototype.listeners = function listeners(name) {
            var events = (this._events && this._events[name]) || [];
            var length = events.length,
              listeners = [],
              event;
            for (var i = 0; i < length; event = events[++i]) listeners.push(events[i].fn);
            return listeners;
          };
          EventEmitter.prototype.emit = function emit(name, a1, a2, a3, a4, a5) {
            if (!this._events || !this._events[name]) return false;
            var listeners = this._events[name],
              length = listeners.length;
            var len = arguments.length,
              event = listeners[0],
              args,
              i;
            if (length === 1) {
              switch (len) {
                case 1:
                  event.fn.call(event.context || this);
                  break;
                case 2:
                  event.fn.call(event.context || this, a1);
                  break;
                case 3:
                  event.fn.call(event.context || this, a1, a2);
                  break;
                case 4:
                  event.fn.call(event.context || this, a1, a2, a3);
                  break;
                case 5:
                  event.fn.call(event.context || this, a1, a2, a3, a4);
                  break;
                case 6:
                  event.fn.call(event.context || this, a1, a2, a3, a4, a5);
                  break;
                default:
                  for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
                  event.fn.apply(event.context || this, args);
              }
              if (event.once) remove_listener.apply(this, [name, event]);
            } else {
              for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
              for (i = 0; i < length; event = listeners[++i]) {
                event.fn.apply(event.context || this, args);
                if (event.once) remove_listener.apply(this, [name, event]);
              }
            }
            return true;
          };
          function add_listener(name, fn, opt) {
            opt = opt || {};
            if (!this._events) this._events = {};
            if (!this._events[name]) this._events[name] = [];
            var event = { fn };
            if (opt.context) event.context = opt.context;
            if (opt.once) event.once = opt.once;
            if (opt.prepend) this._events[name].unshift(event);
            else this._events[name].push(event);
            return this;
          }
          function remove_listener(name, listener) {
            if (!this._events || !this._events[name]) return this;
            var listeners = this._events[name],
              events = [];
            var is_fn = typeof listener == "function";
            for (var i = 0, length = listeners.length; i < length; i++) {
              if (!listener) continue;
              if ((is_fn && listeners[i].fn !== listener) || (!is_fn && listeners[i] !== listener)) {
                events.push(listeners[i]);
              }
            }
            if (events.length) this._events[name] = events;
            else this._events[name] = null;
            return this;
          }
          EventEmitter.prototype.on = function on(name, fn, context) {
            return add_listener.apply(this, [name, fn, { context }]);
          };
          EventEmitter.prototype.once = function once(name, fn, context) {
            return add_listener.apply(this, [name, fn, { context, once: true }]);
          };
          EventEmitter.prototype.prependListener = function prependListener(name, fn, context) {
            return add_listener.apply(this, [name, fn, { context, prepend: true }]);
          };
          EventEmitter.prototype.prependOnceListener = function prependOnceListener(name, fn, context) {
            return this.prependListener(name, fn, { context, prepend: true, once: true });
          };
          EventEmitter.prototype.removeListener = function removeListener(name, fn) {
            return remove_listener.apply(this, [name, fn]);
          };
          EventEmitter.prototype.removeAllListeners = function removeAllListeners(name) {
            if (!this._events) return this;
            if (name) this._events[name] = null;
            else this._events = {};
            return this;
          };
          EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
          EventEmitter.prototype.addListener = EventEmitter.prototype.on;
          EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
            return this;
          };
          EventEmitter.prototype.eventNames = function eventNames() {
            var _this = this;
            return Object.keys(this._events).filter(function (e) {
              return _this._events[e] !== null;
            });
          };
          EventEmitter.EventEmitter = EventEmitter;
          EventEmitter.EventEmitter2 = EventEmitter;
          EventEmitter.EventEmitter3 = EventEmitter;
          return EventEmitter;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    1889: (module, exports) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          var E = {};
          function imul64h(a, b) {
            var ah = (a >>> 16) & 65535;
            var al = a & 65535;
            var bh = (b >>> 16) & 65535;
            var bl = b & 65535;
            return ((ah * bh + (ah * bl + al * bh)) >> 16) | 0;
          }
          E.hash_int = function (val) {
            var xh = imul64h(val, 1103515245);
            var xl = Math.imul(val, 1103515245);
            return (xl - xh) >>> 0;
          };
          E.hash_string = function (s) {
            if (!s.length) return 0;
            var hash = E.hash_int(s.length);
            for (var i = 0; i < s.length; i += 2) {
              hash = E.hash_int((hash + (s.charCodeAt(i) << 16) + (s.charCodeAt(i + 1) | 0)) >>> 0);
            }
            return hash;
          };
          E.sum_parse = function (str) {
            var parts = /([0-9a-f]+)\s+([ *]?)(.*)/i.exec(str);
            if (!parts) return null;
            return { hash: parts[1], type: parts[2] == "*" ? "binary" : "text", file: parts[3] };
          };
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    8915: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON ISC
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9813), __webpack_require__(1291)]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (cookie, zutil) {
          var E = {};
          var storage;
          function have_local_storage() {
            try {
              var _ = window.localStorage;
              if (_.length) return true;
              _.setItem("_", 0);
              _.removeItem("_");
              return true;
            } catch (e) {}
          }
          function select_local_storage() {
            storage = window.localStorage;
          }
          function select_cookies(domain) {
            var cookie_opt = { domain: "." + domain, path: "/", expires: 30 };
            storage = {
              getItem: cookie.get,
              setItem: function (key, val) {
                cookie.set(key, val, cookie_opt);
              },
              removeItem: function (key) {
                cookie.remove(key, cookie_opt);
              },
              clear: function () {}
            };
          }
          E.init = function (opt) {
            var domain;
            if (typeof opt == "string") domain = opt;
            if ((E.is_test_storage = zutil.get(opt, "test_storage") && zutil.is_mocha())) return (E.test_storage = {});
            if (have_local_storage()) return select_local_storage();
            console.error("cannot use localStorage, using cookies instead");
            select_cookies(domain || "hola.org");
          };
          E.init();
          E.on_err = function () {};
          E.set = function (key, val) {
            if (E.is_test_storage) return (E.test_storage[key] = val);
            try {
              return storage.setItem(key, val);
            } catch (e) {
              E.on_err("storage_set", key, e);
            }
          };
          E.get = function (key) {
            if (E.is_test_storage) return E.test_storage[key];
            try {
              return storage.getItem(key);
            } catch (e) {
              E.on_err("storage_get", key, e);
            }
          };
          E.get_int = function (key) {
            return +E.get(key) || 0;
          };
          E.clr = function (key) {
            if (E.is_test_storage) return delete E.test_storage[key];
            try {
              storage.removeItem(key);
            } catch (e) {
              E.on_err("storage_clr", key, e);
            }
          };
          E.clr_all = function () {
            if (E.is_test_storage) E.test_storage = {};
            try {
              storage.clear();
            } catch (e) {
              E.on_err("storage_clr_all", e);
            }
          };
          E.set_json = function (key, val) {
            try {
              return E.set(key, JSON.stringify(val || null));
            } catch (e) {
              E.on_err("storage_set_json", key, e);
            }
          };
          E.get_json = function (key) {
            var val = E.get(key);
            if (!val) return val;
            try {
              val = JSON.parse(val);
            } catch (e) {
              console.log("err " + e);
            }
            return val;
          };
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    5516: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON ISC
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        var is_rn =
          (typeof global == "object" && !!global.nativeRequire) || (typeof navigator == "object" && navigator.product == "ReactNative");
        if (is_rn) {
        } else if (is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6545)]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (array) {
          var E = {};
          E.rm_empty_last = function (a) {
            if (a[a.length - 1] === "") a.pop();
            return a;
          };
          E.split_trim = function (s, sep, limit) {
            return array.compact_self(s.split(sep, limit));
          };
          E.split_ws = function (s) {
            return E.split_trim(s, /\s+/);
          };
          E.qw = function (s) {
            if (Array.isArray(s) && !s.raw) return s;
            return E.split_ws(!Array.isArray(s) ? s : E.es6_str(arguments));
          };
          E.chomp = function (s) {
            return s.replace(/\n$/, "");
          };
          E.split_crlf = function (s) {
            return E.rm_empty_last(s.split(/\r?\n/));
          };
          E.split_nl = function (s) {
            return E.rm_empty_last(s.split("\n"));
          };
          E.to_array_buffer = function (s) {
            var buf = new ArrayBuffer(s.length),
              buf_view = new Uint8Array(buf),
              i;
            for (i = 0; i < s.length; i++) buf_view[i] = s.charCodeAt(i);
            return buf;
          };
          E.from_array_buffer = function (buf) {
            return String.fromCharCode.apply(null, new Uint8Array(buf));
          };
          E.capitalize = function (s) {
            s = "" + s;
            return (s[0] || "").toUpperCase() + s.slice(1);
          };
          E.trunc = function (s, len) {
            if (s.length <= len) return s;
            return s.slice(0, len) + "...";
          };
          E.template = function (strings) {
            var keys = Array.prototype.slice.call(arguments, 1);
            return function () {
              var values = arguments;
              var dict = values[values.length - 1] || {};
              var result = [strings[0]];
              keys.forEach(function (key, i) {
                var value = Number.isInteger(key) ? values[key] : dict[key];
                result.push(value, strings[i + 1]);
              });
              return result.join("");
            };
          };
          E.es6_str = function (args) {
            var parts = args[0],
              s = "";
            if (!Array.isArray(parts)) return parts;
            s += parts[0];
            for (var i = 1; i < parts.length; i++) {
              s += args[i];
              s += parts[i];
            }
            return s;
          };
          E.align = function () {
            var str = E.es6_str(arguments),
              lines = str.split("\n");
            if (!lines[0]) lines.shift();
            var spaces = Infinity;
            for (var i = 0; i < lines.length; i++) {
              var space = lines[i].match(/^\s*/)[0];
              if (space.length == lines[i].length) space = lines[i] = "";
              else spaces = Math.min(spaces, space.length);
            }
            if (spaces > 0 && spaces != Infinity) lines = array.sed(lines, new RegExp("^ {" + spaces + "}"), "");
            return lines.join("\n");
          };
          E.nl2sp = function () {
            return E.es6_str(arguments).replace(/\n\s*/g, " ");
          };
          E.nl2jn = function () {
            return E.es6_str(arguments).replace(/\n\s*/g, "");
          };
          E.nl2br = function () {
            return E.es6_str(arguments).replace(/\n\s*/g, "<br>");
          };
          E.detach = function (s) {
            return (" " + s).slice(1);
          };
          E.hash = function (s) {
            var hash = 0;
            for (var i = 0, l = s.length; i < l; i++) hash = ((hash << 5) - hash + s.charCodeAt(i)) >>> 0;
            return hash;
          };
          var alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
          E.generate = function (len) {
            len = len || 12;
            var ret = "";
            for (var i = 0; i < len; i++) ret += alphabet[(Math.random() * alphabet.length) | 0];
            return ret;
          };
          E.longest = function () {
            var i, s;
            for (i = 0; i < arguments.length; i++) s = (arguments[i] || "").length > (s || "").length ? arguments[i] : s;
            return s;
          };
          E.trim = function (s) {
            return ("" + s).replace(/^[\s\u00a0\u200c]*/g, "").replace(/[\s\u00a0\u200c]*$/g, "");
          };
          function _encode_decode_prototype(s, opt, node_func, browser_func) {
            var encode_decode = function (val) {
              if (typeof process === "object") return node_func(val);
              return browser_func(val);
            };
            if (!opt.safe) return encode_decode(s);
            try {
              return encode_decode(s);
            } catch (e) {
              return undefined;
            }
          }
          E.b64encode = function (s, opt) {
            opt = opt || {};
            return _encode_decode_prototype(
              s,
              opt,
              function (val) {
                return Buffer.from(val, opt.encoding).toString("base64");
              },
              function (val) {
                return btoa(val);
              }
            );
          };
          E.b64decode = function (s, opt) {
            opt = opt || {};
            return _encode_decode_prototype(
              s,
              opt,
              function (val) {
                return Buffer.from(val, "base64").toString(opt.encoding);
              },
              function (val) {
                return atob(val);
              }
            );
          };
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    901: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        if (!is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
          var E = {};
          var win_versions = { "10.0": "10.0", 6.3: "8.1", 6.2: "8", 6.1: "7", "6.0": "vista", 5.2: "2003", 5.1: "xp", "5.0": "2000" };
          var arch_mapping = { x86_64: "64", i686: "32", arm: "arm" };
          var check_hola = /\bhola_android\b/i;
          var check_hola_viewer = /\bHola help viewer\b/i;
          var check_opera = /\bOPR\b\/(\d+)/i;
          var check_edge = /\bEdge\b\/(\d+)/i;
          var check_xbox = /\bxbox\b/i;
          var check_ucbrowser = /\bUCBrowser\b\/(\d+)/i;
          var check_webview = / Version\/(\d+)(\.\d)/;
          var check_chromium_edge = /\bEdg\/(\d+)/i;
          var is_browser = !is_node && typeof self != "undefined";
          function is_ipad_os(ua) {
            return /Macintosh/.test(ua) && typeof navigator == "object" && navigator.maxTouchPoints > 1;
          }
          function ios_ua(ua, safari_ver) {
            var res;
            if ((res = /(?:iPhone|iPad|iPod|iPod touch);.*?OS ([\d._]+)/.exec(ua))) {
              var ios_ver = res[1];
              var is_chrome = /CriOS/.test(ua);
              var is_firefox = /FxiOS/.test(ua);
              var ucbrowser_ver = (check_ucbrowser.exec(ua) || [])[1];
              var is_ucbrowser = !!ucbrowser_ver;
              return {
                browser: "safari",
                version: safari_ver || ios_ver,
                ios: ios_ver,
                hola_viewer: check_hola_viewer.test(ua),
                chrome: is_chrome,
                firefox: is_firefox,
                ucbrowser: is_ucbrowser,
                ucbrowser_version: ucbrowser_ver,
                webview: /Twitter/.test(ua)
                  ? "twitter"
                  : /GSA\/\d+/.test(ua)
                  ? "googlesearch"
                  : /FBAV\/\d+/.test(ua)
                  ? "facebook"
                  : !safari_ver && !is_chrome && !is_firefox && !is_ucbrowser
              };
            }
          }
          function check_chromium(ua) {
            if (
              check_webview.test(ua) ||
              /Android/.test(ua) ||
              / Mobile /.test(ua) ||
              check_opera.test(ua) ||
              check_chromium_edge.test(ua)
            ) {
              return false;
            }
            var group = "(?: (\\w*)\\/)?",
              ver = "\\/[\\d\\.]+";
            var res = new RegExp(
              "AppleWebKit" + ver + "(?: \\(.*\\))?" + group + ".* Chrome" + ver + group + ".* Safari" + ver + group
            ).exec(ua);
            return res && (res[1] || res[2] || res[3]);
          }
          E.guess_browser = function (ua) {
            var res;
            var nav = is_browser ? self.navigator && navigator : null;
            ua = ua || (is_browser ? nav.userAgent : "");
            if ((res = /\bOpera Mini\/(\d+)/.exec(ua))) return { browser: "opera_mini", version: res[1] };
            var ucbrowser = check_ucbrowser.exec(ua);
            if ((res = /[( ]MSIE ([6789]|10).\d[);]/.exec(ua))) return { browser: "ie", version: res[1], xbox: check_xbox.test(ua) };
            if ((res = /[( ]Trident\/\d+(\.\d)+.*rv:(\d\d)(\.\d)+[);]/.exec(ua)))
              return { browser: "ie", version: res[2], xbox: check_xbox.test(ua) };
            if ((res = / Chrome\/(\d+)(\.\d+)+.* Safari\/\d+(\.\d+)+/.exec(ua))) {
              var opera = check_opera.exec(ua);
              var edge;
              if ((edge = check_edge.exec(ua))) return { browser: "edge", version: edge[1] };
              var chromium_based = check_chromium(ua);
              var brands = nav && nav.userAgentData && nav.userAgentData.brands;
              var brand = brands && brands.length && brands[0] && brands[0].brand;
              return {
                browser: "chrome",
                version: res[1],
                android: ua.match(/Android/),
                webview: ua.match(check_webview),
                hola_android: check_hola.test(ua),
                hola_browser: chromium_based == "Hola" || brand == "Hola",
                hola_viewer: check_hola_viewer.test(ua),
                chromium_based,
                edge: check_chromium_edge.test(ua),
                opera: opera && !!opera[1],
                opera_version: opera ? opera[1] : undefined,
                ucbrowser: ucbrowser && !!ucbrowser[1],
                ucbrowser_version: ucbrowser ? ucbrowser[1] : undefined,
                webos_app: /Web0S/.test(ua),
                samsung_browser: /SamsungBrowser/.test(ua),
                samsung: /(SAMSUNG|SM-)/i.test(ua),
                huawei: /HUAWEI/i.test(ua)
              };
            }
            if ((res = / QupZilla\/(\d+\.\d+\.\d+).* Safari\/\d+.\d+/.exec(ua))) return { browser: "qupzilla", version: res[1] };
            if ((res = /\(PlayStation (\d+) (\d+\.\d+)\).* AppleWebKit\/\d+.\d+/.exec(ua))) {
              return { browser: "playstation" + res[1], version: res[2] };
            }
            if ((res = /\(SMART-TV; Linux; Tizen ([0-9.]+)\) AppleWebkit\//.exec(ua))) return { browser: "samsung_tizen", version: res[1] };
            if ((res = / Version\/(\d+)(\.\d)+.* Safari\/\d+.\d+/.exec(ua))) {
              if (!ua.match(/Android/)) return ios_ua(ua, res[1]) || { browser: "safari", version: res[1] };
              return {
                browser: "chrome",
                version: res[1],
                android: true,
                webview: true,
                hola_android: check_hola.test(ua),
                ucbrowser: ucbrowser && !!ucbrowser[1],
                ucbrowser_version: ucbrowser ? ucbrowser[1] : undefined,
                samsung_browser: /SamsungBrowser/.test(ua),
                samsung: /(SAMSUNG|SM-)/.test(ua),
                huawei: /HUAWEI/.test(ua)
              };
            }
            if ((res = / (Firefox|PaleMoon)\/(\d+).\d/.exec(ua))) {
              return { browser: "firefox", version: res[2], palemoon: res[1] == "PaleMoon" };
            }
            if (/Hola\/\d+\.\d+.*?(?:iPhone|iPad|iPod)/.exec(ua)) return { browser: "safari", version: "Hola" };
            if ((res = ios_ua(ua))) return res;
            return {};
          };
          E.browser_to_string = function (browser) {
            if (typeof browser != "object" || !browser.browser) return "unknown";
            var s = browser.browser == "ie" && browser.version > 11 ? "edge" : browser.browser;
            if (browser.version) s += " " + browser.version;
            if (browser.chrome) s += " chrome";
            if (browser.firefox) s += " firefox";
            if (browser.xbox) s += " xbox";
            if (browser.android) s += " android";
            if (browser.webview) {
              s += " webview";
              if (typeof browser.webview == "string") s += "-" + browser.webview;
            }
            if (browser.chromium_based) s += " chromium_based";
            if (browser.samsung_browser) s += " samsung";
            if (browser.edge) s += " edge";
            if (browser.opera) {
              s += " opera";
              if (browser.opera_version) s += "-" + browser.opera_version;
            }
            if (browser.hola_android) s += " hola_android";
            if (browser.hola_viewer) s += " hola_viewer";
            if (browser.ucbrowser) {
              s += " ucbrowser";
              if (browser.ucbrowser_version) s += "-" + browser.ucbrowser_version;
            }
            if (browser.palemoon) s += " palemoon";
            if (browser.ios) s += " ios";
            if (browser.webos_app) s += " webos_app";
            return s ? s : "unknown";
          };
          E.guess = function (ua, platform) {
            var res;
            ua = ua || (is_browser ? navigator.userAgent : "");
            platform = platform || (is_browser ? navigator.platform : "");
            if (check_xbox.exec(ua)) return { os: "xbox", mobile: false };
            if ((res = /Windows(?: NT(?: (.*?))?)?[);]/.exec(ua))) {
              return {
                os: "windows",
                version: win_versions[res[1]],
                release_version: res[1],
                arch: ua.match(/WOW64|Win64|x64/) ? "64" : "32",
                mobile: false
              };
            }
            if (/Windows Phone/.exec(ua)) return { os: "winphone", mobile: true };
            if (/Macintosh/.exec(ua)) {
              if (is_ipad_os(ua)) return { os: "ios", mobile: true };
              if ((res = /Macintosh.*; (?:Intel|PPC) Mac OS X (\d+[._]\d+)/.exec(ua))) {
                return { os: "macos", version: res[1].replace("_", "."), mobile: false };
              }
              return { os: "macos", mobile: false };
            }
            if (/Web0S.*SmartTV/.exec(ua)) {
              return { os: "webos", version: /Chrome/.test(ua) ? "3" : "2", mobile: false, tv: true };
            }
            if (/droid.+aft(\w)( bui|\))/i.exec(ua)) return { os: "fireos", mobile: false, tv: true };
            if (/(apple) ?tv/i.exec(ua)) return { os: "tvos", mobile: false, tv: true };
            if ((res = /(Android|Andr0id)(?: (\d+\.\d+))?/.exec(ua))) return { os: "android", version: res[2], mobile: true };
            if ((res = /(Linux|CrOS|OpenBSD|FreeBSD)(?: (x86_64|i686|arm))?/.exec(ua))) {
              if (check_opera.test(ua) && res[1] == "Linux" && res[2] == "x86_64" && /^Linux arm/.test(platform)) {
                return { os: "android", mobile: true };
              }
              return { os: res[1].toLowerCase(), arch: arch_mapping[res[2]], nix: true, mobile: false };
            }
            if ((res = /(?:iPhone|iPad|iPod|iPod touch);.*?OS (\d+[._]\d+)/.exec(ua)))
              return { os: "ios", version: res[1].replace("_", "."), mobile: true };
            if (/iPhone|iPad|iPod/.exec(ua)) return { os: "ios", mobile: true };
            if (/PLAYSTATION/.exec(ua)) return { os: "ps", mobile: false };
            if (/HitLeap Viewer/.exec(ua)) return { os: "windows", mobile: false };
            return {};
          };
          E.guess_device = function (ua) {
            var res;
            ua = ua || (is_browser ? navigator.userAgent : "");
            if ((res = /(iPhone|iPad|iPod)/.exec(ua))) return { device: res[1].toLowerCase() };
            if (/Macintosh/.test(ua)) return { device: is_ipad_os(ua) ? "ipad" : "mac" };
            return {};
          };
          E.support_fullscreen = function () {
            return !!(
              is_browser &&
              typeof document != "undefined" &&
              (document.fullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.webkitFullscreenEnabled ||
                document.msFullscreenEnabled)
            );
          };
          E.support_hover = function () {
            if (!is_browser) return false;
            if (self.matchMedia && self.matchMedia("(hover: hover)").matches) return true;
            return !E.guess().mobile;
          };
          E.is_invalid = function (ua) {
            return /^(python-request|python-urllib|blackberry)/i.test(ua);
          };
          return E;
        }.call(exports, __webpack_require__, exports, module)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    },
    6262: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      var module;
      // LICENSE_CODE ZON ISC
      ("use strict");
      (function () {
        var is_node = typeof module == "object" && module.exports && module.children;
        var is_rn =
          (typeof global == "object" && !!global.nativeRequire) || (typeof navigator == "object" && navigator.product == "ReactNative");
        if (is_rn) {
        } else if (is_node);
        else;
        !((__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4996), __webpack_require__(3787)]),
        (__WEBPACK_AMD_DEFINE_RESULT__ = function (sprintf, conv) {
          var E = {};
          var ver_regexp = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
          E._expand = function (ver) {
            var v;
            if (!ver) return "";
            if (!(v = ver_regexp.exec(ver))) return;
            return sprintf("%03d.%03d.%03d", +v[1], +v[2], +v[3]);
          };
          E.expand = conv.cache_str_fn(E._expand);
          E._trim = function (ver) {
            var v;
            if (!ver) return "";
            if (!(v = ver_regexp.exec(ver))) return;
            return "" + +v[1] + "." + +v[2] + "." + +v[3];
          };
          E.trim = conv.cache_str_fn(E._trim);
          E._cmp = function (v1, v2) {
            if (!v1 || !v2) return +!!v1 - +!!v2;
            var _v1 = ("" + v1).split("."),
              _v2 = ("" + v2).split("."),
              i;
            for (i = 0; i < _v1.length && i < _v2.length && +_v1[i] == +_v2[i]; i++);
            if (_v1.length == i || _v2.length == i) return _v1.length - _v2.length;
            return +_v1[i] - +_v2[i];
          };
          E.cmp = conv.cache_str_fn2(E._cmp);
          E._valid = function (v) {
            return ver_regexp.test("" + v);
          };
          var version_valid_cache = {};
          E.valid = function (v) {
            var cache = version_valid_cache,
              res;
            v = "" + v;
            if (v in cache) return cache[v];
            if ((res = E._valid(v))) cache[v] = res;
            return res;
          };
          function iter_ver(version, cb) {
            var v;
            if (!E.valid(version)) return version;
            v = version.split(".");
            for (var i = v.length - 1; i >= 0 && !cb(v, i); i--);
            return v.join(".");
          }
          E.inc = function (version) {
            return iter_ver(version, function (v, i) {
              if (v[i] < 999) {
                v[i] = +v[i] + 1;
                return true;
              }
              v[i] = 0;
            });
          };
          E.dec = function (version) {
            return iter_ver(version, function (v, i) {
              if (v[i] > 0) {
                v[i] = +v[i] - 1;
                return true;
              }
              v[i] = 999;
            });
          };
          E.get_max = function (versions, cmp) {
            var v, i;
            versions = versions.sort(
              cmp ||
                function (v1, v2) {
                  return E.cmp(v2.version, v1.version);
                }
            );
            for (i = 0; i < versions.length; i++) {
              v = versions[i];
              if (+v.isbranch || !+v.soft_tag || !+v.onsymbol || v.repository != "zon" || !E.valid(v.version)) {
                continue;
              }
              return v.version;
            }
          };
          E.hash = function (ver) {
            return conv.md5("wQ" + ver + "\n", 8);
          };
          E.ver2int = function (ver) {
            var m = ver_regexp.exec(ver);
            return m && +m[1] * 1e6 + +m[2] * 1e3 + +m[3];
          };
          E.int2ver = function (n) {
            if (!n) return "";
            var n3 = n % 1e3;
            n = (n / 1e3) | 0;
            var n2 = n % 1e3;
            n = (n / 1e3) | 0;
            return n + "." + n2 + "." + n3;
          };
          E.get_major_minor = function (ver) {
            return ver && ver.replace(/^(\d+(\.\d+)?).*$/, "$1");
          };
          E.win_build2ver = function (v) {
            if (!/^\d+\.\d+/.test(v)) v = "0.0";
            var vv = v.split(".");
            var ver = +vv.slice(0, 2).join(".");
            var build = vv.length >= 3 ? +vv[2] : 0;
            return ver >= 10 && build >= 21996
              ? "v11"
              : ver >= 10
              ? "v10"
              : ver >= 6.3
              ? "v8.1"
              : ver >= 6.2
              ? "v8"
              : ver >= 6.1
              ? "v7"
              : ver >= 6
              ? "vista"
              : ver >= 5.2
              ? "xp"
              : "other";
          };
          E.st_version = function (zon_version) {
            var st_base_ver = [0, 212, 809];
            return zon_version
              .split(".")
              .map(function (v, i) {
                return Number(v) - st_base_ver[i];
              })
              .reduceRight(function (res, v, i, ar) {
                if (v < 0) {
                  v += 1e3;
                  ar[i - 1]--;
                }
                res.unshift(v);
                return res;
              }, [])
              .join(".");
          };
          return E;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      })();
    }
  }
]);
//# sourceMappingURL=https://hola.org/be_source_map/1.216.954/202.bundle.js.map?build=nopeer_v2
