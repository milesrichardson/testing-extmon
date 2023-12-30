// LICENSE_CODE ZON
(self["webpackChunk"] = self["webpackChunk"] || []).push([
  [529],
  {
    1328: (module, __unused_webpack_exports, __webpack_require__) => {
      var map = {
        "./af.json": [9546, 832],
        "./ar.json": [3182, 832],
        "./az.json": [3237, 832],
        "./be.json": [3199, 832],
        "./bg.json": [1480, 832],
        "./bn.json": [7825, 832],
        "./bs.json": [402, 832],
        "./ca.json": [6874, 832],
        "./cs.json": [1723, 832],
        "./cy.json": [928, 832],
        "./da.json": [5320, 832],
        "./de.json": [4232, 832],
        "./el.json": [1213, 832],
        "./en.json": [3846],
        "./es.json": [5679, 832],
        "./et.json": [6710, 832],
        "./eu.json": [3436, 832],
        "./fa.json": [681, 832],
        "./fi.json": [2144, 832],
        "./fr.json": [4553, 832],
        "./ga.json": [8069, 832],
        "./gl.json": [3610, 832],
        "./gu.json": [3526, 832],
        "./he.json": [5640, 832],
        "./hi.json": [353, 832],
        "./hr.json": [4037, 832],
        "./ht.json": [1280, 832],
        "./hu.json": [9753, 832],
        "./hy.json": [7066, 832],
        "./id.json": [9408, 832],
        "./is.json": [8698, 832],
        "./it.json": [4539, 832],
        "./ja.json": [306, 832],
        "./ka.json": [743, 832],
        "./km.json": [9895, 832],
        "./kn.json": [6523, 832],
        "./ko.json": [1338, 832],
        "./ku.json": [470, 832],
        "./lt.json": [7778, 832],
        "./lv.json": [6093, 832],
        "./mk.json": [4890, 832],
        "./mr.json": [8811, 832],
        "./ms.json": [4578, 832],
        "./mt.json": [3633, 832],
        "./my.json": [3876, 832],
        "./nl.json": [7271, 832],
        "./no.json": [9958, 832],
        "./pl.json": [3542, 832],
        "./pt.json": [3964, 832],
        "./pt_BR.json": [9392, 832],
        "./ro.json": [8129, 832],
        "./ru.json": [6089, 832],
        "./sk.json": [1196, 832],
        "./sl.json": [9575, 832],
        "./sq.json": [6326, 832],
        "./sr.json": [6586, 832],
        "./sv.json": [2326, 832],
        "./sw.json": [826, 832],
        "./ta.json": [9204, 832],
        "./te.json": [2582, 832],
        "./th.json": [3654, 832],
        "./tl.json": [1361, 832],
        "./tr.json": [9935, 832],
        "./uk.json": [5971, 832],
        "./ur.json": [3740, 832],
        "./vi.json": [3259, 832],
        "./zh_CN.json": [657, 832],
        "./zh_TW.json": [9142, 832]
      };
      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(() => {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          });
        }
        var ids = map[req],
          id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => __webpack_require__.t(id, 3 | 16));
      }
      webpackAsyncContext.keys = () => Object.keys(map);
      webpackAsyncContext.id = 1328;
      module.exports = webpackAsyncContext;
    },
    7619: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, { default: () => State });
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_0__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_1__);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_util_date_js__WEBPACK_IMPORTED_MODULE_2__);
      // LICENSE_CODE ZON
      const chrome = self.chrome;
      class State {
        constructor(name, def, opt) {
          opt = opt || {};
          this.name = name;
          this.value = def;
          this.ttl = opt.ttl || _util_date_js__WEBPACK_IMPORTED_MODULE_2___default().ms.HOUR;
          this.storage = opt.persistent
            ? chrome.storage.local
            : opt.persistent === false
            ? chrome.storage.session
            : chrome.storage.session || chrome.storage.local;
        }
        get(path, def) {
          return _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().get(this.value, path, def);
        }
        set(path, value) {
          let _this = this;
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
            _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().set(_this.value, path, value);
            yield _this.save();
          });
        }
        delete(path) {
          let _this = this;
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
            _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().unset(_this.value, path);
            yield _this.save();
          });
        }
        save() {
          if (_util_util_js__WEBPACK_IMPORTED_MODULE_1___default().is_mocha() || !this.storage) return;
          let _this = this;
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
            yield _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default().cb_apply(_this.storage, ".set", [
              { [_this.name]: { ts: Date.now(), value: _this.value } }
            ]);
          });
        }
        load() {
          if (_util_util_js__WEBPACK_IMPORTED_MODULE_1___default().is_mocha() || !this.storage) return;
          let _this = this;
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default()(function* () {
            let key = _this.name;
            let data = yield _util_etask_js__WEBPACK_IMPORTED_MODULE_0___default().cb_apply(_this.storage, ".get", [key]);
            if (!data || !data[key]) return;
            let { value, ts } = data[key];
            if (value && Date.now() - ts < _this.ttl) _this.value = value;
          });
        }
      }
    },
    2181: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8915);
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_util_storage_js__WEBPACK_IMPORTED_MODULE_0__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_1__);
      // LICENSE_CODE ZON
      const E = {};
      let status_cb,
        no_log_for_plus,
        no_log_for_uid = {};
      let allowed_perrs = { be_install: true, be_update: true };
      let cached = _util_storage_js__WEBPACK_IMPORTED_MODULE_0___default().get_json("no_log") || {};
      let enabled = cached.enabled;
      let is_plus = cached.is_plus;
      let uuid = cached.uuid;
      const invalidate = () => {
        let no_log = !!(uuid && uuid in no_log_for_uid ? no_log_for_uid[uuid] : is_plus && no_log_for_plus);
        if (enabled !== no_log) {
          enabled = no_log;
          if (status_cb) status_cb(enabled);
        }
        _util_storage_js__WEBPACK_IMPORTED_MODULE_0___default().set_json("no_log", { enabled, is_plus, uuid });
      };
      E.set_plus = (_is_plus) => {
        if (_is_plus === undefined || _is_plus === is_plus) return;
        is_plus = _is_plus;
        invalidate();
      };
      E.set_config = (conf) => {
        no_log_for_plus = conf.no_log_for_plus;
        no_log_for_uid = conf.no_log_for_uid || {};
        allowed_perrs = _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().bool_lookup(conf.no_log_perrs || []);
        invalidate();
      };
      E.set_uuid = (_uuid) => {
        if (_uuid === undefined || _uuid === uuid) return;
        uuid = _uuid;
        invalidate();
      };
      E.set_status_cb = (cb) => {
        status_cb = cb;
        cb(enabled);
      };
      E.enabled = (perr_id) => enabled && !(perr_id && allowed_perrs[perr_id]);
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    5513: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4850);
      var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_1__);
      var _util_zerr_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9824);
      var _util_zerr_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_util_zerr_js__WEBPACK_IMPORTED_MODULE_2__);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_3__);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(932);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_util_date_js__WEBPACK_IMPORTED_MODULE_4__);
      var _bext_vpn_ui_react_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2626);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5250);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_6__
      );
      var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6357);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7345);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8__);
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8915);
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_util_storage_js__WEBPACK_IMPORTED_MODULE_9__);
      var conf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9641);
      // LICENSE_CODE ZON
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_6___default().assert_ui("be_ui_context");
      const SEC = _util_date_js__WEBPACK_IMPORTED_MODULE_4___default().ms.SEC,
        perr = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.perr;
      const E = {};
      const CG = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8___default().CG;
      E.App_context = react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
      E.Provider = class App_context_provider extends _bext_vpn_ui_react_util_js__WEBPACK_IMPORTED_MODULE_5__.Z.PureComponent {
        constructor(...args) {
          super(...args);
          _defineProperty(this, "state", {
            enabled: true,
            is_tpopup: _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_6___default().is_tpopup(),
            src_country: null,
            ip: null,
            rule: null,
            user: null,
            is_premium: false,
            is_ultra: false,
            trial: null,
            trial_state: null,
            is_trial_expired: null,
            trial_need_signin: null,
            is_watermark_small: false,
            is_watermark_popcorn: false,
            mitm_dialog: null,
            url: "",
            root_url: "",
            redirects: [],
            busy_info: {},
            busy: false,
            error: false,
            inited: false,
            proxy_error: false,
            dev_mode: false,
            ext_conflict: false,
            incognito_allowed: false,
            hide_ip_active: false,
            no_permission: false,
            agree_ts: 1,
            watermark_pos: null,
            set_watermark_pos: (pos) => this.set_watermark_pos(pos),
            set_error: (error) => this.setState({ error }),
            force_trial_update: () => this.update_trial(),
            hola_url: conf__WEBPACK_IMPORTED_MODULE_10__.url_site + "/",
            rebranding: !!_util_storage_js__WEBPACK_IMPORTED_MODULE_9___default().get_int("rebranding")
          });
        }
        componentDidMount() {
          const _this = this;
          this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              this.catch((e) => {
                perr("be_ui_context_init_err", undefined, { err: e });
                _this.setState({ error: e });
              });
              if (!_this.props.tpopup_type && _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_ext_active()) _this.update_info();
              yield _this.update_url();
              yield _this.update_location();
              yield _this.update_enabled();
              yield _this.update_user();
              yield _this.update_trial();
              yield _this.update_mitm();
              yield _this.update_status();
              yield _this.update_conflict();
              yield _this.update_no_permission();
              yield _this.update_agree_ts();
              yield _this.update_suspended();
              yield _this.update_dev_mode();
              yield _this.update_rule();
              yield _this.update_proxy_error();
              yield _this.update_watermark_pos();
              yield _this.update_hide_ip();
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "url_changed", _this.update_url);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "location_changed", _this.update_location);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "enabled_changed", _this.update_enabled);
              _this.on(
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z,
                "trial_start trial_wait_start trial_wait_stop " +
                  "trial_wait_end trial_change rule_changed svc_change " +
                  "svc_info_changed",
                _this.update_trial
              );
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "mitm_change rule_changed", _this.update_mitm);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "trial_end", _this.on_trial_end);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "user_changed", _this.update_user);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "rule_changed", _this.update_rule);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "ext_active_changed", _this.update_rule);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "ext_suspended_changed", _this.update_rule);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "status_changed", _this.update_status);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "set_tab_state", _this.on_tab_state);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "ext_conflict_changed", _this.update_conflict);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "no_permission_changed", _this.update_no_permission);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "agree_ts_changed", _this.update_agree_ts);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "ext_suspended_changed", _this.update_suspended);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "dev_mode_changed", _this.update_dev_mode);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "hide_ip_changed", _this.update_hide_ip);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "user_action_error", _this.on_user_action_error);
              _this.on(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z, "tab_load_err", _this.update_proxy_error);
              _this.setState({
                inited: true,
                incognito_allowed: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.is_incognito_allowed(),
                hola_url: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_selected_url({
                  name: "hola",
                  url: conf__WEBPACK_IMPORTED_MODULE_10__.url_site + "/"
                })
              });
            })
          );
        }
        componentDidUpdate(prev_props, prev_state) {
          let state = this.state,
            props = this.props;
          let changed_root_url = prev_state.root_url != state.root_url;
          let changed_url = prev_state.url != state.url;
          let changed_user = prev_state.user != state.user;
          if (changed_root_url || changed_user) {
            this.update_trial();
            this.update_mitm();
            this.update_rule();
          }
          if (changed_url) this.update_watermark_pos();
          if (
            !props.tpopup_type &&
            state.rule &&
            _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().get(prev_state, "rule.country") !=
              _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().get(state, "rule.country")
          ) {
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.trigger_bg("popup_open", state.rule);
          }
          if (prev_state.busy != state.busy) {
            this.clear_timer("busy_timer");
            this.clear_timer("very_busy_timer");
            if (state.busy && !props.tpopup_type) {
              this.set_timer(
                "busy_timer",
                () => {
                  perr("be_ui_vpn_busy_slow", state.busy_info);
                  this.set_timer(
                    "very_busy_timer",
                    () => {
                      perr("be_ui_vpn_busy_very_slow", state.busy_info);
                    },
                    13 * SEC
                  );
                },
                7 * SEC
              );
            }
          }
        }
        setState(state) {
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().cb_apply(super.setState, this, [state]);
        }
        update_info() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.update_svc_info();
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.refresh_user({ force_premium: true, reason: "popup_open" });
        }
        update_location() {
          const _ref = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_location() || {},
            country = _ref.country,
            ip = _ref.ip;
          this.setState({ src_country: country, ip });
          this.clear_timer("country_timer");
          if (country) {
            if (this.no_country_perr_sent && !this.props.tpopup_type) perr("be_ui_vpn_no_country_recover", { country }, { err: true });
            return;
          }
          if (!this.props.tpopup_type) {
            this.set_timer(
              "country_timer",
              () => {
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.no_country_perr();
                this.no_country_perr_sent = true;
              },
              3 * SEC
            );
          }
        }
        update_rule() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              let tab_id = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_tab_id(),
                url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_url();
              _this.setState({
                rule: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_enabled_rule({ tab_id, url }),
                disabled_rule: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_disabled_rule({ tab_id, url })
              });
            })
          );
        }
        update_proxy_error() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              let tab_id = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_tab_id();
              let proxy_error = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_tab_load_err(tab_id);
              _this.setState({ proxy_error });
            })
          );
        }
        update_mitm() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              const root_url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_root_url();
              _this.setState({ mitm_dialog: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_mitm_dialog(root_url) });
            })
          );
        }
        update_status() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              const wait = 300 - (Date.now() - (_this.update_status_ts || 0));
              if (wait > 0) yield _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().sleep(wait);
              let s = { busy_info: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_busy_info() };
              s.busy = s.busy_info.busy;
              _this.setState(s);
              _this.update_status_ts = Date.now();
            })
          );
        }
        on_tab_state(event) {
          if (!["fix_vpn_err", "set_rule_err"].includes(event.curr)) return;
          this.setState({ error: true });
          if (!this.props.tpopup_type) perr("be_ui_vpn_tab_state", { state: event });
        }
        on_user_action_error(event) {
          if (!_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_enabled()) return;
          perr("be_ui_user_action_error", undefined, { err: event });
          this.setState({ error: true });
        }
        update_url() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              let root_url_prev = _this.state.root_url;
              let url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_url(),
                root_url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_root_url();
              let redirects = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_redirect_urls();
              _this.setState({ url, root_url, redirects });
              if (root_url_prev && root_url_prev != root_url && !_this.props.tpopup_type) {
                let info = {
                  root_url,
                  root_url_prev,
                  ext_enabled: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_ext_active(),
                  ext_suspended: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_ext_suspended()
                };
                if (window.hola) info.t = Date.now() - window.hola.t.l_start;
                perr("be_ui_vpn_root_url_changed", info, { err: true });
              }
            })
          );
        }
        update_enabled() {
          this.setState({ enabled: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_enabled() });
        }
        update_user() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              let is_premium = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_is_premium();
              let is_ultra = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_is_ultra();
              let user = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_user();
              if (!user) return void _this.setState({ user, is_premium, is_ultra });
              _this.setState({
                is_premium,
                is_ultra,
                user: {
                  is_paid: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.is_paid(),
                  display_name: user.displayName,
                  verified: user.verified,
                  hola_uid: user.hola_uid,
                  no_log: user.no_log,
                  email: _util_util_js__WEBPACK_IMPORTED_MODULE_1___default().get(user.emails, "0.value")
                }
              });
            })
          );
        }
        update_trial() {
          let _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              const root_url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_root_url();
              const user = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_user();
              const is_premium = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_is_premium();
              let trial = null,
                trial_state;
              let is_trial_expired = false;
              let need_trial = false;
              let trial_need_signin = false;
              let is_watermark_small = false;
              let is_watermark_popcorn = false;
              let is_watermark_hidden = false;
              let can_hide_watermark = false;
              let can_skip_signin = false;
              let is_unlimited_trial = false;
              if (!is_premium) {
                trial = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_trial_active(root_url);
                trial_state = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_trial_active(root_url, true);
                is_trial_expired = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.is_trial_expired(root_url);
                need_trial = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.need_trial(root_url);
                trial_need_signin = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.trial_need_signin(root_url);
                is_watermark_small = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8___default().get_trial_conf(trial, "small_watermark");
                is_watermark_popcorn = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8___default().get_trial_conf(trial, "popcorn_watermark");
                is_watermark_hidden = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_8___default().get_trial_conf(trial, "is_watermark_hidden");
                can_hide_watermark = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.can_hide_watermark(root_url);
                can_skip_signin = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.can_skip_signin(root_url);
                is_unlimited_trial = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.is_unlimited_trial(root_url);
              }
              let new_ui = (yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_trial_conf("new_ui")) || CG("debug.new_ui");
              let wm_rebranding =
                CG("debug.wm_rebranding") || (yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_trial_conf("wm_rebranding"));
              let rebranding =
                (yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_trial_conf("rebranding")) &&
                (!_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_6___default().is_tpopup() || wm_rebranding);
              _util_storage_js__WEBPACK_IMPORTED_MODULE_9___default().set("rebranding", rebranding ? 1 : 0);
              _util_zerr_js__WEBPACK_IMPORTED_MODULE_2___default().notice(
                "ui context update_trial root_url: %s, " +
                  "user: %s, is_premium: %s, trial: %s, expired: %s, " +
                  "trial_need_signin: %s, is_watermark_hidden: %s, " +
                  "can_hide_watermark: %s, can_skip_signin: %s, " +
                  "need_trial: %d, is_unlimited_trial: %s",
                root_url,
                !!user,
                is_premium,
                !!trial,
                is_trial_expired,
                trial_need_signin,
                is_watermark_hidden,
                can_hide_watermark,
                can_skip_signin,
                need_trial,
                is_unlimited_trial
              );
              _this.setState({
                trial,
                trial_state,
                is_trial_expired,
                need_trial,
                trial_need_signin,
                is_watermark_small,
                is_watermark_popcorn,
                is_watermark_hidden,
                can_hide_watermark,
                can_skip_signin,
                is_unlimited_trial,
                new_ui,
                rebranding
              });
            })
          );
        }
        on_trial_end() {
          _util_zerr_js__WEBPACK_IMPORTED_MODULE_2___default().notice("ui context on_trial_end %s", this.state.root_url);
          const _this = this;
          this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              yield _this.update_trial();
              if (_this.state.is_premium) {
                perr("be_ui_trial_end_on_premium", null, { err: true });
                return;
              }
              if (!_this.state.trial && _this.state.is_tpopup && _this.props.tpopup_type != "watermark") {
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.set_tpopup_type("watermark");
              }
            })
          );
        }
        update_conflict() {
          this.setState({ ext_conflict: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_ext_conflict() });
        }
        update_no_permission() {
          this.setState({ no_permission: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_no_permission() });
        }
        update_agree_ts() {
          this.setState({ agree_ts: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_agree_ts() });
        }
        update_suspended() {
          this.setState({ suspended: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_ext_suspended() });
        }
        update_dev_mode() {
          this.setState({ dev_mode: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_dev_mode() });
        }
        update_watermark_pos() {
          const _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              _this.setState({
                watermark_pos: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.get_watermark_pos(_this.state.url)
              });
            })
          );
        }
        update_hide_ip() {
          const _this = this;
          return this.etask(
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              _this.setState({ hide_ip_active: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.is_hide_ip_active() });
            })
          );
        }
        set_watermark_pos(pos) {
          this.setState({ watermark_pos: pos });
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.set_watermark_pos(this.state.url, pos);
        }
        render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            E.App_context.Provider,
            { value: this.state },
            this.props.children
          );
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    8239: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var _bext_vpn_ui_locale_en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3846);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_1__);
      var _util_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5516);
      var _util_string_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_util_string_js__WEBPACK_IMPORTED_MODULE_2__);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7345);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_3__);
      var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6357);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5250);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_5__
      );
      // LICENSE_CODE ZON
      const qw = _util_string_js__WEBPACK_IMPORTED_MODULE_2___default().qw;
      const E = get_message;
      E.locale_curr = E.locale_en = _bext_vpn_ui_locale_en_json__WEBPACK_IMPORTED_MODULE_0__;
      E.locales = qw`af ar az be bg bn bs ca cs cy da de el es et eu fa fi fr ga gl
   gu he hi hr ht hu hy id is it ja ka km kn ko ku lt lv mk mr ms mt my nl no
   pl pt pt_BR ro ru sk sl sq sr sv sw ta te th tl tr uk ur vi zh_CN zh_TW en`;
      if (_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_3___default().browser() == "edge") E.locales = [];
      E.is_rtl = () => /^(ar|he|fa|ur)$/.test(E.locale);
      E.set_locale = (l) => {
        _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_4__.Z.set_storage_locale(l);
        window.location.reload();
      };
      function get_message(id, vals, locale) {
        let s,
          msg = E.locale_curr[id] || _bext_vpn_ui_locale_en_json__WEBPACK_IMPORTED_MODULE_0__[id];
        if (locale) msg = (E.locale == locale && E.locale_curr[id]) || _bext_vpn_ui_locale_en_json__WEBPACK_IMPORTED_MODULE_0__[id];
        if (!msg) {
          if (false) {
          }
          s = id;
        } else s = msg;
        if (!vals) return s;
        for (let i = 0; i < vals.length; i++) s = s.replace("$" + (i + 1), vals[i]);
        return s;
      }
      E.init = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_1___default()(function* () {
          let hola_locale = yield _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_5___default().get_hola_cookie("i18next");
          let storage_locale = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_4__.Z.get_storage_locale();
          let locale = storage_locale || hola_locale || "en";
          if (!E.locales.includes(locale)) {
            let navlang = (navigator.language || "").replace("-", "_");
            let choices = [navlang, navlang.substr(0, navlang.indexOf("_")), "en"];
            for (let i = 0; i < choices.length; i++) {
              if (E.locales.includes(choices[i])) {
                locale = choices[i];
                break;
              }
            }
          }
          E.locale = locale;
          if (E.locale == "en") return;
          __webpack_require__(1328)(`./${E.locale}.json`).then(
            (locale_curr) => {
              E.locale_curr = locale_curr;
              this.continue();
            },
            (err) => {
              _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_3___default().perr("be_lang_err", { locale: E.locale, err }, { err });
              E.locale = "en";
              this.continue();
            }
          );
          yield this.wait();
        });
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    2626: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4850);
      var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      var _util_zerr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9824);
      var _util_zerr_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_util_zerr_js__WEBPACK_IMPORTED_MODULE_1__);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5250);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2__
      );
      // LICENSE_CODE ZON
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      const E = {};
      const LONG_CB_MS = 500;
      E.PureComponent = class PureComponent extends react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent {
        constructor(...args) {
          super(...args);
          _defineProperty(this, "timers", {});
          _defineProperty(this, "events", {});
        }
        componentWillUnmount() {
          let t0 = Date.now();
          let a = Object.keys(this.timers);
          a.forEach((name) => this.clear_timer(name));
          a = Object.keys(this.events);
          a.forEach((event) => this.off(event));
          if (this._componentWillUnmount) this._componentWillUnmount();
          let t1 = Date.now();
          if (t1 - t0 > LONG_CB_MS) {
            _util_zerr_js__WEBPACK_IMPORTED_MODULE_1___default().warn(
              "long cb componentWillUnmount %s took %sms",
              this.displayName,
              t1 - t0
            );
          }
          if (this.sp) {
            this.sp.return();
            delete this.sp;
          }
        }
        etask(task) {
          let name = this.constructor.displayName || this.constructor.name;
          this.sp = this.sp || _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2___default().new_etask("Component_" + name);
          this.sp.spawn(task);
          return task;
        }
        has_timer(name) {
          return !!this.timers[name];
        }
        set_timer(name, cb, ms) {
          this.clear_timer(name);
          this.timers[name] = {
            cb,
            ms,
            timer: _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2___default().set_timeout(() => this.on_timer(name), ms)
          };
        }
        clear_timer(name) {
          let t = this.timers[name];
          if (!t) return;
          _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2___default().clear_timeout(t.timer);
          delete this.timers[name];
        }
        on_timer(name) {
          let t = this.timers[name];
          if (!t) return _util_zerr_js__WEBPACK_IMPORTED_MODULE_1___default()("timer not found %s", name);
          try {
            let t0 = Date.now();
            t.cb();
            let t1 = Date.now();
            if (t1 - t0 > LONG_CB_MS) {
              _util_zerr_js__WEBPACK_IMPORTED_MODULE_1___default().warn("long cb timer %s:%s took %sms", this.displayName, name, t1 - t0);
            }
          } catch (e) {
            _util_zerr_js__WEBPACK_IMPORTED_MODULE_1___default()("timer %s error %s", name, e);
          }
          this.clear_timer(name);
        }
        on(obj, event, cb, call_on_init) {
          let _this = this;
          this.off(obj, event, cb);
          let e = (this.events[event] = this.events[event] || { a: [] });
          let cb2 = function cb2() {
            let t0 = Date.now();
            let ret = cb.apply(_this, arguments);
            let t1 = Date.now();
            if (t1 - t0 > LONG_CB_MS) {
              _util_zerr_js__WEBPACK_IMPORTED_MODULE_1___default().warn("long cb event %s:%s took %sms", _this.displayName, event, t1 - t0);
            }
            return ret;
          };
          e.a.push({ obj, cb, cb2 });
          obj.on(event, cb2);
          if (call_on_init) cb2();
        }
        off(obj, event, cb) {
          if (event === undefined && cb === undefined) {
            event = obj;
            let e = this.events[event];
            if (!e) return;
            let a = Object.assign([], e.a);
            return a.forEach((ee) => this.off(ee.obj, event, ee.cb));
          }
          _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_2___default().assert(
            event != undefined && cb != undefined,
            new Error("invalid off params")
          );
          let e = this.events[event];
          if (!e) return;
          let i = e.a.findIndex((ee) => ee.cb === cb && ee.obj === obj);
          if (i == -1) return;
          let ee = e.a.splice(i, 1)[0];
          ee.obj.off(event, ee.cb2);
          if (!e.a.length) delete this.events[event];
        }
      };
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    6357: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7439);
      var underscore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8915);
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_util_storage_js__WEBPACK_IMPORTED_MODULE_1__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_2__);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_3__);
      var _util_conv_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3787);
      var _util_conv_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_util_conv_js__WEBPACK_IMPORTED_MODULE_4__);
      var _util_escape_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4336);
      var _util_escape_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_util_escape_js__WEBPACK_IMPORTED_MODULE_5__);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_6__);
      var _util_zerr_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9824);
      var _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_util_zerr_js__WEBPACK_IMPORTED_MODULE_7__);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(932);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_util_date_js__WEBPACK_IMPORTED_MODULE_8__);
      var _util_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6545);
      var _util_array_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_util_array_js__WEBPACK_IMPORTED_MODULE_9__);
      var _util_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5516);
      var _util_string_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(_util_string_js__WEBPACK_IMPORTED_MODULE_10__);
      var _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4191);
      var _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
        _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_11__
      );
      var _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6467);
      var _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
        _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_12__
      );
      var _util_country_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2569);
      var _util_country_js__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(_util_country_js__WEBPACK_IMPORTED_MODULE_13__);
      var _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1211);
      var _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
        _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14__
      );
      var _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(843);
      var _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
        _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15__
      );
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7345);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16__);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5250);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17__
      );
      var _protocol_pub_countries_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3958);
      var _protocol_pub_countries_js__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(
        _protocol_pub_countries_js__WEBPACK_IMPORTED_MODULE_18__
      );
      var _bext_pub_backbone_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(6969);
      var _bext_pub_backbone_js__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(
        _bext_pub_backbone_js__WEBPACK_IMPORTED_MODULE_19__
      );
      var _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8239);
      var _util_version_util_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6262);
      var _util_version_util_js__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(
        _util_version_util_js__WEBPACK_IMPORTED_MODULE_21__
      );
      var conf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9641);
      // LICENSE_CODE ZON
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e2) {
            didErr = true;
            err = _e2;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().assert_ui("be_ui_api");
      _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().set_zerr(_util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default());
      _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default().set_exception_handler("be", (id, info, err) => perr(id, info, { err }));
      const E = new (_bext_pub_backbone_js__WEBPACK_IMPORTED_MODULE_19___default().model)({ model_name: "ui_api" });
      const assign = Object.assign,
        root2url = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().root2url,
        qw = _util_string_js__WEBPACK_IMPORTED_MODULE_10___default().qw;
      const _window = window,
        chrome = _window.chrome,
        CG = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().CG,
        ms = _util_date_js__WEBPACK_IMPORTED_MODULE_8___default().ms;
      const www_host = conf__WEBPACK_IMPORTED_MODULE_22__.www_host;
      const v3 = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().is_v3;
      const ping_bg_api = () => {
        if (!_bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default().use_msg) return;
        const et = _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().wait();
        const ping = () =>
          _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default().backbone.client.ping("bg_ui_api", 500, (ret) => {
            if (ret.error) {
              _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default()(
                "ping bg failed %s",
                _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default().json(ret)
              );
              ping();
            } else et.continue();
          });
        ping();
        return et;
      };
      const init_bg_api = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let module;
          while (!(module = _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default().backbone.client.start("bg_ui_api"))) {
            _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default()(`bg_ui_api start failed, retrying`);
            yield _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().sleep(300);
          }
          if (!_bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default().use_msg) return module;
          const et = _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().wait();
          const cb = () => {
            if (!module.get("_backbone_client_started")) return;
            module.off("change:_backbone_client_started", cb);
            et.continue();
          };
          module.on_init("change:_backbone_client_started", cb);
          yield et;
          return module;
        });
      let _date_diff;
      let update_ts = (server_time_ts) => {
        if (server_time_ts) _date_diff = server_time_ts - performance.now();
      };
      E.now = () => {
        if (_date_diff && _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().check_min_ver(CG("use_server_ts_min_ver")))
          return Math.round(performance.now() + _date_diff);
        return Date.now();
      };
      E.init = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (E.inited) return;
          E.inited = true;
          _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default().init();
          yield ping_bg_api();
          E.bg_ui_api = yield init_bg_api();
          update_ts(yield E.get_server_ts());
          E.listenTo(E.bg_ui_api, "body_click", (e) => {
            if (_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup() && e.connection_id == E.get_connection_id())
              E.trigger("body_click");
          });
          E.listenTo(E.bg_ui_api, "trial_end", (trial) =>
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              if (yield E.trial_match_url(trial, E.get_url())) E.trigger("trial_end");
            })
          );
          E.listenTo(E.bg_ui_api, "trial_wait_start", (trial) =>
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              if (yield E.trial_match_url(trial, E.get_url())) E.trigger("trial_wait_start");
            })
          );
          E.listenTo(E.bg_ui_api, "trial_wait_stop", (trial) =>
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              if (yield E.trial_match_url(trial, E.get_url())) E.trigger("trial_wait_stop");
            })
          );
          E.listenTo(E.bg_ui_api, "trial_wait_end", (trial) =>
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              if (yield E.trial_match_url(trial, E.get_url())) E.trigger("trial_wait_end", trial);
            })
          );
          E.listenTo(E.bg_ui_api, "trial_start", (trial) =>
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              if (!(yield E.trial_match_url(trial, E.get_url()))) return;
              if (yield E.get_trial_active(E.get_root_url())) E.trigger("trial_start");
            })
          );
          E.listenTo(E.bg_ui_api, "trial_change", (trial) =>
            _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
              if (!trial || (yield E.trial_match_url(trial, E.get_url()))) E.trigger("trial_change", trial);
            })
          );
          E.listenTo(E.bg_ui_api, "mitm_change", (root_url) => {
            if (E.get_root_url() == root_url) E.trigger("mitm_change");
          });
          E.listenTo(E.bg_ui_api, "tab_url_updated", (id, url) => {
            if (
              !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup() ||
              !url ||
              id != E.get_tab_id() ||
              url == _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(window, "hola.tpopup_opt.url")
            ) {
              return;
            }
            _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().set(window, "hola.tpopup_opt.url", url);
            E.trigger("url_changed");
          });
          E.listenTo(E.bg_ui_api, "local_time_change", (ts) => update_ts(ts));
          E.listenTo(E.bg_ui_api, "active_url_changed", (e) => E.trigger("url_changed"));
          E.listenTo(E.bg_ui_api, "welcome_plans_show", (e) => {
            if (!_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup() && e.tab_id == E.get_tab_id()) E.close_popup();
          });
          document.addEventListener("click", E.cancel_autoclose);
          const events = qw`force_trial mouseleave mouseenter url_changed
        tab_id_changed country_changed enabled_changed bg_main_inited
        user_changed membership_changed rule_changed ext_active_changed
        status_changed settings_changed tab_load_err vpn_status_changed
        svc_info_changed svc_version_changed protect_changed
        ext_conflict_changed agree_ts_changed dev_mode_changed set_tab_state
        location_changed ext_suspended_changed no_permission_changed
        bext_config_changed close_trial_suggestion trial_wait_start
        hide_ip_changed user_message_changed`;
          if (false) {
          }
          events.forEach((event) => E.listenTo(E.bg_ui_api, event, (...args) => E.trigger(event, ...args)));
          _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().set_ajax_cb((req) => E.perr_ajax(req));
          _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().set_bext_config_cb(() => E.get_bext_config());
          _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().set_now_cb(() => E.now());
          _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().set_ab_test_report_cb((...args) => E.ab_test_report(...args));
          yield _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_20__.Z.init();
          if (_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup()) {
            _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().set(window, "hola.tpopup_opt.url", yield E.get_tab_url(E.get_tab_id()));
          } else {
            E.force_bext_config_update();
            E.update_user_geo_block();
          }
          if (
            !_util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().get("first_ui_show_ts") &&
            _util_version_util_js__WEBPACK_IMPORTED_MODULE_21___default().cmp(E.get_install_version(), "1.206.693") >= 0
          ) {
            _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().set("first_ui_show_ts", Date.now());
            perr("be_ui_first_show");
          }
          E.update_full_browser_vpn_mode();
          if (yield E.need_welcome_popup()) {
            E.do_tpopup(E.get_tab_id(), E.get_root_url(), { tpopup_type: "welcome_plans" });
          }
        });
      E.uninit = () => {
        if (!E.inited) return;
        _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().set("popup_close_ts", Date.now());
        E.inited = false;
        _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().set_ajax_cb(null);
        _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().set_bext_config_cb(null);
        var _iterator = _createForOfIteratorHelper(bg_et_active),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            let et = _step.value;
            et.return();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        bg_et_active = [];
        _bext_pub_browser_js__WEBPACK_IMPORTED_MODULE_14___default().backbone.client.stop("bg_ui_api");
        E.bg_ui_api = null;
        E.stopListening();
      };
      const perr = (E.perr = (id, info, opt, new_name) =>
        wrap_etask(
          _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
            info = info || {};
            opt = opt || {};
            if (opt.with_log)
              opt = _objectSpread(
                _objectSpread({}, opt),
                {},
                { ui_log: _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_zerr_log() }
              );
            let _opt = opt,
              err = _opt.err;
            let bt = opt.bt || (err && _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default().e2s(err));
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
                bt;
            }
            if (opt.add_trial_info) {
              let trial_info = yield E.get_trial_perr_info();
              if (trial_info.timeline) opt.filehead = trial_info.timeline + "\n\n" + (opt.filehead || "");
              assign(info, { cycle_stats: trial_info.cycle_stats, trial_state: trial_info.state });
            }
            if (err && err.etask) err = underscore__WEBPACK_IMPORTED_MODULE_0___default().omit(err, "etask");
            opt = _objectSpread(
              _objectSpread({}, opt),
              {},
              { is_tpopup: _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup(), err, bt }
            );
            if (E.bg_ui_api) {
              try {
                return yield wrap_etask(E.bg_ui_api.fcall("perr", [id, info, opt, new_name]));
              } catch (e) {
                _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default()(
                  "bg perr failed " + _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default().e2s(e)
                );
              }
            }
            return yield wrap_etask(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().perr(id, info, opt, new_name));
          })
        ));
      E.set_enabled = (on) => {
        perr("be_ui_click_" + (on ? "on" : "off"));
        if (E.get_ext_conflict()) return;
        E.bg_ui_api.fcall("set_enabled", [on]);
      };
      E.login = (src, close) => {
        let url = E.get_url();
        E.set_login_redirect(_util_url_js__WEBPACK_IMPORTED_MODULE_6___default().get_host(url));
        E.open_page(
          _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().qs_add(E.hola_url() + "/signin", {
            utm_source: "holaext",
            utm_content: src,
            signin_redirect: true,
            next: url
          })
        );
        if (close) E.close_popup();
      };
      E.push_event = (name, opt) => E.bg_ui_api.ecall("push_event", [name, opt]);
      E.close_popup = () => {
        if (_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup()) E.close_tpopup();
        else window.close();
      };
      E.open_about = () => E.open_be_tab({ url: "about.html", force_active: true });
      E.open_settings = () => E.open_be_tab({ url: "settings.html", force_active: true });
      E.open_page = (url, curr_tab) => {
        const _zurl$parse = _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().parse(url),
          pathname = _zurl$parse.pathname,
          query = _zurl$parse.query;
        if (["/ultra", "/plus", "/premium"].includes(pathname)) {
          const qs = (query && _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().qs_parse(query)) || {};
          const info = _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().pick(qs, "ref", "plan_id");
          let rules = E.get_rules();
          info.rules_count = (rules && rules.unblocker_rules && Object.keys(rules.unblocker_rules).length) || 0;
          perr("be_open_payment_page", info);
        }
        const open_url = _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().is_hola_url(url)
          ? _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().url_qs_encode_qid(url)
          : url;
        if (curr_tab) E.update_tab(E.get_tab_id(), open_url);
        else E.open_new_tab({ url: open_url, force_active: true });
      };
      E.open_plus_page = (root_url, ref) => {
        E.open_page(E.plus_ref(ref, { root_url }));
      };
      E.search_popular = (url) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          yield E.set_force_suggestion(E.get_tab_id(), true);
          E.open_page(url, true);
          E.close_popup();
        });
      E.open_popular = ({ root_url, src_country, country }) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let url = root2url(root_url);
          if (!country) {
            let popular = yield E.get_popular_countries({ root_url, src_country });
            country = popular[0];
          }
          yield E.unblock_action({ url, country });
          E.open_page(url, true);
          E.close_popup();
        });
      E.open_ext_settings = () => {
        E.open_new_tab({ url: `chrome://extensions/?id=${chrome.runtime.id}`, force_active: true });
      };
      let force_trial = ({ url, root_url, tab_id, country, redirects, src }) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          const is_tpopup = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup();
          let close = true;
          this.finally(() => {
            if (!is_tpopup && close) E.close_popup();
          });
          if (!is_tpopup && (yield E.tpopup_is_connected(tab_id))) {
            E.trigger_force_trial({ country, tab_id });
            return this.return();
          }
          if (yield E.can_start_trial_silently(root_url)) {
            try {
              if (yield E.start_trial(root_url)) {
                yield bg_ui_api_call("unblock_action", { tab_id, url, country, src: src || "trial" });
                close = false;
                return;
              }
            } catch (e) {
              perr("be_ui_silent_trial_start_err", { root_url, country }, { err: e });
            }
          }
          var _iterator2 = _createForOfIteratorHelper(redirects),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              let r = _step2.value;
              yield E.set_site_storage(r, "force_trial", { country, tab_id, src });
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (is_tpopup) return void E.set_tpopup_type("watermark");
          let active = E.get_root_url();
          if (redirects.some((r) => _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().is_same_site(r, active))) {
            return yield E.do_tpopup(tab_id, root_url);
          }
          E.open_page(root2url(root_url), true);
        });
      E.need_welcome_popup = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let url = E.get_url();
          let debug = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().CG("debug.show_welcome_plans");
          return (
            !E.get_is_premium() &&
            !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup() &&
            !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_skip_url(url) &&
            (debug ||
              (!_util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().get("welcome_plans_show_ts") &&
                (yield E.get_trial_conf("show_welcome_plans"))))
          );
        });
      E.need_welcome_ui_popup = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (E.get_is_premium() || _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup()) return false;
          if (_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().CG("debug.show_welcome_plans_ui")) return true;
          let show_ts = _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().get("welcome_plans_ui_show_ts");
          let click_ts = _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().get("welcome_plans_ui_click_ts");
          return !click_ts && (!show_ts || Date.now() - show_ts > ms.DAY) && (yield E.get_trial_conf("show_welcome_plans_ui"));
        });
      let autoclose_t;
      E.schedule_autoclose = () => {
        if (!CG("autoclose_popup", true)) return;
        E.cancel_autoclose();
        autoclose_t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().set_timeout(() => E.close_popup(), 2e3);
      };
      E.cancel_autoclose = () => {
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().clear_timeout(autoclose_t);
      };
      E.unblock_action = (opt) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let tab_id = E.get_tab_id();
          let url = opt.url,
            country = opt.country,
            disable = opt.disable;
          let root_url = _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(url);
          if (!E.get_ext_active() || E.get_ext_suspended()) {
            perr("be_ui_vpn_set_enabled_mismatch");
            E.trigger("user_action_error");
            return;
          }
          if (disable) perr("be_ui_vpn_stop", { root_url, country });
          if (false) {
          }
          try {
            let is_stub =
              _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_stub_url(url, E.get_is_premium()) &&
              !_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().full_browser_mode();
            if (!disable && !is_stub && (yield E.need_trial(root_url))) {
              let redirects = [root_url];
              if (opt.redirects) {
                var _iterator3 = _createForOfIteratorHelper(opt.redirects),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    let u = _step3.value;
                    let r = _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(u);
                    if (r != root_url) redirects.push(r);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              return yield force_trial({ url, root_url, tab_id, country, redirects, src: opt.src });
            }
            yield bg_ui_api_call("unblock_action", _objectSpread({ tab_id }, opt));
            perr("be_ui_vpn_script_set_ok", assign({ tab_id, root_url }, opt));
          } catch (e) {
            perr("be_ui_vpn_script_set_err", assign({ tab_id, root_url }, opt), { err: e });
            E.trigger("user_action_error", e);
          }
        });
      E.get_all_countries = () => {
        let blacklist = CG("exclude_countries") || [];
        return _protocol_pub_countries_js__WEBPACK_IMPORTED_MODULE_18___default().proxy_countries.bext.filter(
          (c) => c.toLowerCase() != "kp" && !blacklist.includes(c.toLowerCase())
        );
      };
      E.is_premium_country = (country) => (CG("premium_countries") || []).includes(country.toLowerCase());
      E.get_popular_ratings = ({ root_url, src_country }) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (!root_url) return _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_popular_country({});
          let rule_ratings = yield E.get_popup_rating_cache(root_url);
          if (!Array.isArray(rule_ratings)) {
            try {
              let opt = { root_url, src_country, limit: 20, vpn_only: true };
              let rule = yield E.get_enabled_rule({ tab_id: E.get_tab_id(), url: root2url(root_url) });
              if (rule && rule.country) opt.proxy_country = rule.country;
              rule_ratings = yield E.get_rule_ratings(opt);
              yield E.set_popup_rating_cache(root_url, rule_ratings);
            } catch (e) {
              perr("be_ui_vpn_rule_ratings_err", { root_url }, { err: e });
            }
          }
          let invalid_countries = [];
          rule_ratings =
            Array.isArray(rule_ratings) &&
            rule_ratings.filter((r) => {
              let c = r.proxy_country.toUpperCase();
              if (_protocol_pub_countries_js__WEBPACK_IMPORTED_MODULE_18___default().proxy_countries.bext.includes(c)) return true;
              invalid_countries.push(c);
            });
          if (invalid_countries.length) {
            perr("be_ui_vpn_rating_invalid_countries", { invalid_countries, rule_ratings }, { rate_limit: { count: 1 } });
          }
          if (CG("disable_new_rule_ratings")) {
            return _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_popular_country_old({ host: root_url, rule_ratings });
          }
          return _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_popular_country({ host: root_url, rule_ratings });
        });
      const get_popular_by_ratings = ({ root_url, src_country, ratings, prev_country }) => {
        let site_conf = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_site_conf(root_url);
        let suggestion_conf = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_suggestion_conf(site_conf, src_country);
        let suggested = ((suggestion_conf || {}).proxy || []).filter((c) => c != "*");
        let popular = ratings.map((r) => r.proxy_country);
        let res = suggested.concat(popular.filter((p) => !suggested.includes(p)));
        if (prev_country) {
          const elm = prev_country.toUpperCase();
          _util_array_js__WEBPACK_IMPORTED_MODULE_9___default().rm_elm(res, elm);
          res.unshift(elm);
        }
        return res;
      };
      E.get_popular_countries = ({ root_url, src_country, prev_country }) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let ratings = yield E.get_popular_ratings({ root_url, src_country });
          return get_popular_by_ratings({ root_url, src_country, ratings, prev_country });
        });
      E.get_default_countries = ({ root_url, src_country, prev_country }) => {
        let ratings = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_popular_country({ host: root_url });
        return get_popular_by_ratings({ root_url, src_country, ratings, prev_country });
      };
      E.get_popular_sites = (limit) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let list = (yield E.get_unblocking_rate(limit || 6)) || [];
          let root_urls = list.map((p) => p.root_url);
          return { list, top_urls: root_urls };
        });
      E.get_redirect_urls = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup()) return [];
          let list,
            tab_id = E.get_tab_id();
          list = yield E.get_redirect_list(tab_id);
          if (!list || !list.length) return [];
          list = list.map(root2url).filter((u) => !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_skip_url(u));
          list.push(E.get_url());
          var _iterator4 = _createForOfIteratorHelper(list),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              let url = _step4.value;
              if (
                yield E.get_force_premium_rule(_svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(url), {
                  tab_url: url
                })
              ) {
                return [];
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return list;
        });
      E.click_working = ({ src }) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let url = E.get_url(),
            tab_id = E.get_tab_id();
          yield E.increment_vpn_work_yes();
          let rule = yield E.get_enabled_rule({ tab_id, url });
          E.send_vpn_work_report({ rule, src });
        });
      E.click_not_working = ({ src, send_logs, src_country }) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let url = E.get_url(),
            tab_id = E.get_tab_id();
          let root_url = _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(url);
          try {
            let rule = yield E.get_enabled_rule({ tab_id, url });
            if (!rule) {
              return void perr("be_ui_vpn_no_rule", { country: src_country, root_url, url });
            }
            E.fix_vpn({ rule, root_url, url, tab_id, src_country });
            E.trigger_not_working({ tab_id, src });
            E.send_fix_it_report({ rule, send_logs, src });
          } catch (e) {
            perr("be_ui_vpn_fix_it_err", { tab_id, root_url }, { err: e });
            E.trigger("user_action_error", e);
          }
        });
      E.click_star = (rating) => {
        E.set_vpn_last_rating(rating);
        if (rating == 5 && !E.get_rate_on_store()) E.open_rate_us();
      };
      E.need_rating = () => {
        if (E.get_is_premium() || E.get_rate_on_store()) return false;
        let vpn_work_yes = E.get_vpn_work_yes() || 0;
        let rating = E.get_vpn_last_rating() || 0;
        let n = CG("rate_us.show_every_nth_click", 3);
        return rating < 5 && vpn_work_yes % n == 1;
      };
      E.open_report_problem = () => {
        perr("be_report_problem", {}, { rate_limit: { count: 1 } });
        let url = "about.html?" + _util_escape_js__WEBPACK_IMPORTED_MODULE_5___default().qs({ url: E.get_url() });
        E.open_be_tab({ url: url + "#report_issue", force_active: true });
      };
      E.get_force_premium_rule = (root_url, opt) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (E.get_is_premium()) return false;
          return yield E.bg_ui_api.ecall("get_force_premium_rule", [root_url, opt]);
        });
      E.need_tpopup_hint = () => !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_tpopup_type();
      E.tpopup_close_click = (src) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          const type = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_tpopup_type();
          if (type == "watermark" || type == "suggestion") return void E.set_tpopup_type("watermark");
          const root_url = E.get_root_url();
          const period = E.get_is_premium() ? "default" : "session";
          yield E.set_dont_show_again({ root_url, src, period, tab_id: E.get_tab_id(), type: null });
          E.close_tpopup(true);
        });
      E.tpopup_close_hint_click = (root_url) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          yield E.set_dont_show_again({ root_url, period: "default", src: "x_tooltip", type: null });
          E.close_tpopup(true);
        });
      E.allow_skip_url = (trial_state) => {
        let url = E.get_url();
        if (_util_url_js__WEBPACK_IMPORTED_MODULE_6___default().is_hola_url(url)) {
          let stub_rule_on_hola_site =
            CG("stub_rule_on_hola_site") ||
            _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_trial_conf(trial_state, "stub_rule_on_hola_site");
          if (stub_rule_on_hola_site) return true;
        }
        return _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_new_tab(url);
      };
      E.set_locale = (l) => {
        if (l == _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_20__.Z.locale) return;
        perr("be_popup_lang", { locale: l }, { rate_limit: { count: 20 } });
        _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_20__.Z.set_locale(l);
      };
      E.get_locale = () => _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_20__.Z.locale;
      E.get_locales = () => _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_20__.Z.locales;
      E.resize_tpopup = (opt) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          try {
            return yield E.bg_ui_api.ecall("resize_tpopup", [E.get_connection_id(), opt]);
          } catch (e) {
            console.error("resize_tpopup err %o", e);
          }
        });
      E.show_tpopup = () => E.bg_ui_api.ecall("show_tpopup", [E.get_connection_id()]);
      E.close_tpopup = (hide_anim) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_tpopup_mode() == "window") return window.close();
          if (hide_anim) {
            document.body.classList.add("hide_anim");
            yield _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().sleep(1e3);
          }
          if (E.bg_ui_api) E.bg_ui_api.ecall("close_tpopup", [E.get_connection_id()]);
          else _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default()("cannot close tpopup: no bg_ui_api");
        });
      E.no_country_perr = () => {
        perr("be_ui_vpn_no_country", {
          url: E.get_url(),
          be_info: { country: E.get_country(), location: E.get_location() },
          status: {
            rmt: E.get_bg_main_status() + " " + (E.get_bg_main_inited() ? "inited" : "not_inited"),
            be_vpn: E.get_vpn_status(),
            be_rule: E.get_rule_status(),
            be_info: E.get_info_status()
          }
        });
      };
      E.is_busy = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          return (yield E.get_busy_info()).busy;
        });
      E.get_busy_info = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let info = {
            rule_status_opt: E.get_rule_status_opt(),
            rule_busy: E.get_rule_status() == "busy",
            ext_busy: E.get_info_status() == "busy",
            main_busy: E.get_bg_main_status() == "busy",
            svc_busy: E.get_svc_status() == "busy"
          };
          info.tab_state = yield E.get_tab_state(E.get_tab_id());
          info.stoppping =
            _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(info.rule_status_opt, "desc", "").includes("Stopping") ||
            info.tab_state == "disable_rule";
          info.error = info.tab_state && info.tab_state.includes("err");
          info.busy =
            info.ext_busy ||
            info.main_busy ||
            (E.get_enabled() && !info.error && !info.stoppping && (info.tab_state != "idle" || info.rule_busy || info.svc_busy));
          return info;
        });
      E.reload_ext = (opt, force) => {
        const do_reload = () => {
          _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().set_timeout(() => {
            try {
              _util_zerr_js__WEBPACK_IMPORTED_MODULE_7___default().notice("going for full reload");
            } catch (e) {}
            _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().reload_ext_native();
          }, 500);
        };
        if (_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().reload_ext(do_reload, force ? 100 : ms.DAY)) {
          perr("be_popup_reload_ext", "r." + opt.info, { rate_limit: { count: 20 }, err: new Error("") });
        }
      };
      E.send_issue_report = (info) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          try {
            info.bg_log = yield E.get_log();
          } catch (e) {
            info.bg_log_err = e;
          }
          perr("be_issue_report", info);
        });
      E.get_problem_mailto_url = (opt) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          opt = opt || {};
          const info = yield E.get_product_info();
          return _util_escape_js__WEBPACK_IMPORTED_MODULE_5___default().mailto_url({
            to: opt.to || "help_be@" + www_host,
            subject: "Problem with Hola extension",
            body:
              "(Please include a brief explanation of the problem and " +
              "a screenshot if possible)\n\n" +
              "Information automatically generated about my problem:\n" +
              info.map((item) => `${item.name}: ${item.value}`).join("\n")
          });
        });
      E.aj_event = (id) => {
        perr(id);
      };
      E.get_connection_id = () => _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(window, "hola.tpopup_opt.connection_id");
      E.set_tpopup_type = (type) => E.trigger("set_tpopup_type", type);
      E.get_trial_left = (trial) => (trial ? Math.max(trial.expire_ts - E.now(), 0) : 0);
      E.get_root_url = () => _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(E.get_url()) || "";
      E.get_url = () =>
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup()
          ? _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(window, "hola.tpopup_opt.url")
          : E.get_active_tab_url() || "";
      E.get_tab_id = () =>
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup()
          ? _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(window, "hola.tpopup_opt.tab_id")
          : E.get_active_tab_id();
      E.reload_tab = (tab_id) => E.reload_tab_by_id(tab_id || E.get_tab_id());
      E.is_tab_active = () => E.get_active_tab_id() == E.get_tab_id();
      E.get_timings = () => {
        const res = {};
        if (!performance.getEntriesByType) return res;
        var _iterator5 = _createForOfIteratorHelper(performance.getEntriesByType("mark")),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            let item = _step5.value;
            res[item.name + "_ms"] = Math.round(item.startTime);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return res;
      };
      E.get_vpn_tpopup_initial_size = () => ({ width: 360, height: 545 });
      E.plus_ref = (ref, extra, ultra) => {
        extra = assign({}, extra);
        let rules = E.get_rules();
        if (extra.root_url) {
          let is_active =
            rules &&
            underscore__WEBPACK_IMPORTED_MODULE_0___default().some(
              rules.unblocker_rules,
              (rule) =>
                rule.enabled &&
                (rule.name == extra.root_url || _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_all_browser(rule))
            );
          if (!is_active) delete extra.root_url;
        }
        ref = (E.get_ref_prefix() || "") + (ref || "");
        return _util_escape_js__WEBPACK_IMPORTED_MODULE_5___default().uri(
          E.hola_url() + (ultra ? "/ultra" : "/plus"),
          assign({ ref, uuid: E.get_uuid() }, extra)
        );
      };
      E.is_fullscreen = () => _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(window, "hola.tpopup_opt.fullscreen");
      const get_watermark_pos_key = (url, pos_conf) => {
        if (!url || !pos_conf) return;
        if (E.is_fullscreen() && pos_conf.fullscreen) return "fullscreen";
        let pathname = _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().parse(url).pathname;
        let keys = Object.keys(pos_conf);
        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          let key = _keys[_i];
          let re = _util_url_js__WEBPACK_IMPORTED_MODULE_6___default().http_glob_host(key);
          if (new RegExp("^" + re + "$").test(pathname)) return key;
        }
      };
      E.get_watermark_pos = (url) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let root_url = _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(url);
          let pos;
          let pos_conf = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_site_conf(root_url, "watermark.pos") || {};
          let pos_key = get_watermark_pos_key(url, pos_conf);
          if (pos_key && (pos = yield E.get_site_storage(root_url, `${pos_key}_watermark_pos`))) {
            return pos;
          }
          if (pos_key && (pos = pos_conf[pos_key])) return pos;
          if ((pos = yield E.get_site_storage(root_url, "watermark_pos"))) return pos;
          if ((pos = pos_conf.default)) return pos;
          return CG(`geo_popup.watermark.position`) || "bottom_right";
        });
      E.set_watermark_pos = (url, pos) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let root_url = _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(url);
          let pos_conf = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_site_conf(root_url, "watermark.pos") || {};
          let pos_key = get_watermark_pos_key(url, pos_conf);
          yield E.set_site_storage(root_url, pos_key ? `${pos_key}_watermark_pos` : "watermark_pos", pos);
        });
      E.request_permission = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          let res = yield _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default().cb_apply(chrome.permissions.request, [
            { origins: [v3 ? "*://*/*" : "<all_urls>"] }
          ]);
          perr(res ? "be_request_permission_allowed" : "be_request_permission_denied");
        });
      E.trigger_bg = (...args) => E.bg_ui_api && E.bg_ui_api.ecall("trigger", [...args]);
      let render_perr_sent = false;
      E.send_render_stats = () => {
        if (render_perr_sent) return;
        let count = (_util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().get_int("ui_popup_render_count") || 0) + 1;
        _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().set("ui_popup_render_count", count);
        let err = window.hola.err,
          info = E.get_timings();
        _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().if_set(
          _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(err, "require"),
          info,
          "require"
        );
        _util_util_js__WEBPACK_IMPORTED_MODULE_2___default().if_set(count, info, "count");
        let is_tpopup = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup();
        let url = E.get_url(),
          root_url = _svc_vpn_pub_util_js__WEBPACK_IMPORTED_MODULE_15___default().get_root_url(url);
        perr("be_popup_render" + (info.popup_render_ms > 4e3 ? "_slow" : ""), info);
        if (is_tpopup) perr("be_tpopup_open", { root_url, url });
        else E.set_has_opened_popup();
        E.push_event(is_tpopup ? "tpopup_render" : "popup_render", { url });
        render_perr_sent = true;
      };
      E.get_payment_conf = (trial_state) => {
        if (!trial_state) return CG("payment", {});
        let trial_payment_conf = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().get_trial_conf(trial_state, "payment", {});
        if (!trial_payment_conf) return CG("payment", {});
        return assign({}, CG("payment"), trial_payment_conf);
      };
      const get_replace_plan = (rp) => {
        const location = E.get_location();
        const rp_conf = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().get_replace_plan_conf(
          (location && _util_conv_js__WEBPACK_IMPORTED_MODULE_4___default().inet_addr(location.ip)) || E.get_uuid(),
          rp
        );
        return rp_conf && rp_conf.on ? rp.replace : null;
      };
      E.get_plans = (for_trial, trial_state, opt = {}) => {
        let payment_conf = E.get_payment_conf(trial_state);
        let trial_plans = opt.mm_plans ? payment_conf.mm_plan_ids : payment_conf.trial_plan_ids;
        let plan_ids = for_trial ? trial_plans : payment_conf.watermark_plan_ids;
        plan_ids = plan_ids || ["3y", "1y", "1m"];
        let all_plans = payment_conf.all_plans || [
          { period: "1 M", id: "1m", price: 11.95 },
          { period: "1 Y", id: "1y", price: 83.88 }
        ];
        const replace_plan = get_replace_plan(payment_conf.replace_plan_conf);
        const plans = _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_11___default().fill_plans_info(plan_ids, all_plans, {
          replace_plan
        });
        if (replace_plan) plans.sort((a, b) => a.day_price - b.day_price);
        return plans;
      };
      E.get_best_plan = (plans) =>
        underscore__WEBPACK_IMPORTED_MODULE_0___default().min(plans, (p) => (p.month_price == null ? undefined : p.month_price));
      E.get_popular_plan = (trial_state, plans) => {
        let payment_conf = E.get_payment_conf(trial_state);
        let popular = payment_conf && payment_conf.popular_plan;
        return popular && plans.find((p) => p.id == popular);
      };
      E.get_bonus_plan = () => {
        let plan_ids = [CG("payment.bonus_plan_id") || "1y"].concat(CG("payment.trial_plan_ids", ["3y", "1y", "1m"]));
        let all_plans = CG("payment.all_plans", [{ period: "1 Y", id: "1y", price: 83.88 }]);
        return _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_11___default().fill_plans_info(plan_ids, all_plans, {
          replace_plan: get_replace_plan(CG("payment.replace_plan_conf"))
        })[0];
      };
      let canvas;
      const get_text_width = (text, font) => {
        if (!text) return 0;
        canvas = canvas || document.createElement("canvas");
        let context = canvas.getContext("2d");
        context.font = font;
        let metrics = context.measureText(text);
        return Math.ceil(metrics.width);
      };
      E.get_font_size = (text, style, max_width) => {
        let font_size = parseInt(style.fontSize, 10);
        let width = get_text_width(text, `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`);
        return width > max_width ? Math.floor((font_size * max_width) / width) : font_size;
      };
      E.format_price = (price, prefix) => (price ? prefix + price.toFixed(2) : "");
      E.time2str = (t, round_days, short) => {
        let n, str;
        if (t < ms.MIN) {
          n = Math.round(t / ms.SEC);
          str = short ? "sec" : "second";
        } else if (t < ms.HOUR) {
          n = Math.round(t / ms.MIN);
          str = short ? "min" : "minute";
        } else if (!round_days || t < ms.DAY) {
          n = Math.round(t / ms.HOUR);
          str = short ? "h" : "hour";
        } else {
          n = Math.round(t / ms.DAY);
          str = short ? "d" : "day";
        }
        if (n != 1 && !short) str += "s";
        return `${n} ${str}`;
      };
      E.get_user_currency = (src_country) => {
        let currency = (_util_country_js__WEBPACK_IMPORTED_MODULE_13___default().code2currency(src_country || "") || "").toLowerCase();
        return _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_12___default().get_plan_currency(E.get_plans()[0], currency);
      };
      E.get_local_price = (user_currency, plan) => {
        let price = plan.price,
          month_price = plan.month_price,
          regular_price = plan.regular_price,
          discount_percent = plan.discount_percent;
        let prefix = "$";
        let local_price = user_currency && plan.currency && plan.currency[user_currency.toLowerCase()];
        if (local_price && local_price.price) {
          price = local_price.price;
          month_price = local_price.month_price;
          regular_price = local_price.regular_price;
          discount_percent = local_price.discount_percent;
          prefix = _util_country_js__WEBPACK_IMPORTED_MODULE_13___default().currency2prefix(user_currency).toUpperCase();
        }
        return { price, month_price, regular_price, prefix, discount_percent };
      };
      E.need_trial_dialog = (root_url) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          return (
            _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().check_min_ver(CG("ext_trial_dialog_min_ver")) &&
            !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup() &&
            (yield E.need_trial(root_url)) &&
            (yield E.is_trial_expired(root_url)) &&
            !(yield E.trial_need_signin(root_url))
          );
        });
      E.need_limited_premium = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          return (
            !E.get_is_premium() &&
            !_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_17___default().is_tpopup() &&
            (_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_16___default().CG("debug.limited_premium") ||
              (yield E.get_trial_conf("limited_premium")))
          );
        });
      E.hola_hostname = () => {
        if (CG("disable_hola_hostname_fallback")) return www_host;
        return E.get_hola_conn_hostname() || www_host;
      };
      E.hola_url = () => "https://" + E.hola_hostname();
      E.is_signup_bonus_allowed = () =>
        !E.get_user() && !_util_util_js__WEBPACK_IMPORTED_MODULE_2___default().get(E.get_uuid_info(), "has_user");
      E.start_survey = (survey_id) => {
        _util_storage_js__WEBPACK_IMPORTED_MODULE_1___default().set("survey_start_ts", E.now());
        E.open_page(`https://${www_host}/survey/${survey_id}`);
      };
      const bg_attributes = qw`is_premium is_ultra ext_active enabled bext_config
    uuid active_tab_url active_tab_id rules user membership
    vpn_last_rating rate_on_store country location user_id ref_prefix
    dev_mode agree_ts ext_conflict svc_info svc_version
    vpn_status rule_status rule_status_opt
    info_status svc_status bg_main_status bg_main_inited vpn_work_yes
    rate_us_count ext_suspended no_permission uuid_info hola_conn_hostname
    install_ts install_version`;
      bg_attributes.forEach((attr) => (E["get_" + attr] = () => E.bg_ui_api && E.bg_ui_api.get(attr)));
      let bg_functions = qw`get_tab_load_err get_enabled_rule send_vpn_work_report
    send_fix_it_report trigger_not_working set_dont_show_again
    get_dont_show_rules is_dont_show get_rule_ratings fix_vpn set_rule
    fetch_rules rule_task_cancel_all force_bext_config_update
    stop_vpn pause_videos resume_videos hide_arrow_anim
    show_arrow_anim close_tab_tpopup get_trial_active set_trial
    get_trial_wait get_next_trial_ts
    move_trial_time is_trial_expired get_trials_info refresh_user
    refresh_anonymous logout resend_verification_email set_vpn_last_rating
    get_redirect_list mitm_set_ignore mitm_set_unblock mitm_remove_rule
    set_login_redirect set_email_verify_url get_mitm_rules
    get_unblocking_rate_url get_unblocking_rate set_dev_mode update_svc_info
    is_paid set_enabled_for_browser get_disabled_rule
    tpopup_is_connected hola_api_call perr_ajax
    bg_vpn_recover set_agree_ts bg_main_recover open_new_tab
    open_be_tab open_rate_us open_web_store update_tab get_log
    set_force_suggestion do_tpopup vpn_change_agent trigger_force_trial
    need_trial get_force_premium_rules increment_vpn_work_yes get_tab_state
    get_product_info reset_trial is_incognito_allowed trial_match_url
    set_rate_us_count is_verified get_site_storage set_site_storage
    get_popup_rating_cache set_popup_rating_cache need_upgrade_msg
    click_upgrade init_monitor_active uninit_monitor_active set_dbg_conf
    get_dbg_conf reset_rate_us get_storage_locale set_storage_locale
    open_login_popup get_tab_url is_hide_ip_active set_hide_ip
    trial_need_signin get_trial_period get_last_trial_end_ts
    get_server_ts get_total_cycle_time get_used_cycle_time
    get_remaining_cycle_time get_trial_perr_info get_selected_url
    trial_start_wait trial_stop_wait is_trial_wait_ended
    trial_hide_watermark can_hide_watermark can_skip_signin skip_signin
    get_used_trial_time close_bonus_tooltip get_debug_peer_info change_peer
    get_mitm_dialog reload_tab_by_id focus_on_tab set_has_opened_popup
    need_ext_pin_tip shown_ext_pin_tip
    is_unlimited_trial debug_set_install_ts debug_set_install_ver
    update_full_browser_vpn_mode close_rating_popup can_start_trial_silently
    start_trial dev_get dev_set dev_force_tpopup is_user_geo_blocked
    get_trial_conf update_user_geo_block need_trial_middle_wait
    start_trial_middle_wait get_trial_middle_wait_end_ts
    get_suggested_survey_id notify_survey_suggested ab_test_report`;
      if (false) {
      }
      const bg_et_parent =
        conf__WEBPACK_IMPORTED_MODULE_22__.firefox_web_ext &&
        qw`get_unblocking_rate
    unblock_action set_trial get_trial_perr_info check_unblockig_rate
    get_tpopup_opt`;
      let bg_et_active = [];
      const wrap_etask = (e, name) =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_3___default()(function* () {
          if (!e) return;
          if (!conf__WEBPACK_IMPORTED_MODULE_22__.firefox_web_ext) return yield e;
          this.on("finally", () => {
            let idx = bg_et_active.indexOf(this);
            if (idx != -1) bg_et_active.splice(idx, 1);
          });
          e.spawn_parent(this);
          bg_et_active.push(this);
          return yield e;
        });
      const bg_ui_api_call = (f, ...args) => {
        let e = E.bg_ui_api && E.bg_ui_api.ecall(f, [...args]);
        if (bg_et_parent && bg_et_parent.includes(f) && e && e.constructor && e.constructor.name == "Etask") {
          return wrap_etask(e, f);
        }
        return e;
      };
      bg_functions.forEach((f) => (E[f] = (...args) => bg_ui_api_call(f, ...args)));
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    2075: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7439);
      var underscore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4850);
      var react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5380);
      var react_dom__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
      var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(793);
      var classnames__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
      var react_tiny_virtual_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8983);
      var react_tiny_virtual_list__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
        react_tiny_virtual_list__WEBPACK_IMPORTED_MODULE_4__
      );
      var _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4191);
      var _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
        _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_5__
      );
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8915);
      var _util_storage_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_util_storage_js__WEBPACK_IMPORTED_MODULE_6__);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5305);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_7__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_8__);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(932);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_util_date_js__WEBPACK_IMPORTED_MODULE_9__);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_10__);
      var _util_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5516);
      var _util_string_js__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(_util_string_js__WEBPACK_IMPORTED_MODULE_11__);
      var _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8239);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7345);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13__);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5250);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14__
      );
      var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6357);
      var _bext_vpn_ui_context_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5513);
      var _img_x_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6190);
      var _img_x_svg__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(_img_x_svg__WEBPACK_IMPORTED_MODULE_17__);
      var _img_left_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4762);
      var _img_left_svg__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(_img_left_svg__WEBPACK_IMPORTED_MODULE_18__);
      var _img_search_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7568);
      var _img_search_svg__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(_img_search_svg__WEBPACK_IMPORTED_MODULE_19__);
      var _img_arrow_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8393);
      var _img_arrow_svg__WEBPACK_IMPORTED_MODULE_20___default = __webpack_require__.n(_img_arrow_svg__WEBPACK_IMPORTED_MODULE_20__);
      var _img_globe_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9163);
      var _img_globe_svg__WEBPACK_IMPORTED_MODULE_21___default = __webpack_require__.n(_img_globe_svg__WEBPACK_IMPORTED_MODULE_21__);
      var _img_thumbs_down_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5027);
      var _img_thumbs_down_svg__WEBPACK_IMPORTED_MODULE_22___default = __webpack_require__.n(
        _img_thumbs_down_svg__WEBPACK_IMPORTED_MODULE_22__
      );
      var _img_thumbs_up_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8175);
      var _img_thumbs_up_svg__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
        _img_thumbs_up_svg__WEBPACK_IMPORTED_MODULE_23__
      );
      var _img_ic_guarantee_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(5420);
      var _img_ic_guarantee_svg__WEBPACK_IMPORTED_MODULE_24___default = __webpack_require__.n(
        _img_ic_guarantee_svg__WEBPACK_IMPORTED_MODULE_24__
      );
      var conf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9641);
      // LICENSE_CODE ZON
      const _excluded = ["ts", "add_time", "on_end"],
        _excluded2 = ["ts", "expire_ts", "add_time", "on_end"],
        _excluded3 = ["mitm", "stop", "country", "size", "plus"],
        _excluded4 = ["light", "disabled", "arrow", "children"],
        _excluded5 = ["on_click", "yes", "small"];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _extends() {
        _extends = Object.assign
          ? Object.assign.bind()
          : function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }
              return target;
            };
        return _extends.apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }
        return target;
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }
        return target;
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : (typeof Symbol !== "undefined" && arr[Symbol.iterator]) || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
              s: F,
              n: function n() {
                if (i >= o.length) return { done: true };
                return { done: false, value: o[i++] };
              },
              e: function e(_e2) {
                throw _e2;
              },
              f: F
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var normalCompletion = true,
          didErr = false,
          err;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function e(_e3) {
            didErr = true;
            err = _e3;
          },
          f: function f() {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      const E = {};
      const useRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef,
        useEffect = react__WEBPACK_IMPORTED_MODULE_1___default().useEffect,
        useLayoutEffect = react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect,
        useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState,
        useContext = react__WEBPACK_IMPORTED_MODULE_1___default().useContext,
        Fragment = react__WEBPACK_IMPORTED_MODULE_1___default().Fragment;
      const CG = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().CG;
      const Menu_icon = _svc_vpn_pub_common_ui_js__WEBPACK_IMPORTED_MODULE_5___default().Menu_icon;
      const ms = _util_date_js__WEBPACK_IMPORTED_MODULE_9___default().ms;
      const App_context = _bext_vpn_ui_context_js__WEBPACK_IMPORTED_MODULE_16__.Z.App_context;
      const www_host = conf__WEBPACK_IMPORTED_MODULE_25__.www_host;
      const assign = Object.assign;
      const perr = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr;
      const T = (E.T = (props) => {
        if (typeof props == "string") return (0, _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_12__.Z)(props);
        const children = props.children;
        if (typeof children == "string") return (0, _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_12__.Z)(children.replace(/\s+/g, " "));
        if (Array.isArray(children)) {
          let obj = [],
            str = [];
          var _iterator = _createForOfIteratorHelper(children),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              let v = _step.value;
              if (typeof v == "string") str.push(v);
              else {
                obj.push(v);
                str.push("$" + obj.length);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          let translated = (0, _bext_vpn_ui_locale_js__WEBPACK_IMPORTED_MODULE_12__.Z)(str.join("")).split(/(\$\d+)/);
          return translated.map((v) => {
            let m = v.match(/\$(\d+)/);
            return m ? obj[m[1] - 1] : v;
          });
        }
        console.error("<T> must receive text to translate. Received: ", children);
        return null;
      });
      const pad = (num) => ("000" + num).slice(-2);
      const Rate_us = ({ on_rated }) => {
        const _useState = useState(null),
          _useState2 = _slicedToArray(_useState, 2),
          active = _useState2[0],
          set_active = _useState2[1];
        react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_vpn_rating_display");
          let count = (_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_rate_us_count() || 0) + 1;
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.set_rate_us_count(count);
          if (count > 5) _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_rate_us_too_often", { count });
        }, []);
        const on_rate = (rate) => {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_vpn_rating_rate", { rating: rate });
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.click_star(rate);
          on_rated(rate);
        };
        const cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()("rate-us", active && "rate-us-active-" + active);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: cls },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "rate-us-title" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Rate us")
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "rate-us-stars" },
            [1, 2, 3, 4, 5].map((n) =>
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
                key: n,
                onMouseEnter: () => set_active(n),
                onMouseLeave: () => set_active(null),
                onClick: () => on_rate(n)
              })
            )
          )
        );
      };
      E.Rate_us = Rate_us;
      const Rated = ({ rating, on_try_premium }) =>
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "rated" },
          !rating || rating == 5
            ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Awesome!")
            : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Thanks for your feedback"),
          !!on_try_premium &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              Btn,
              { onClick: on_try_premium },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Try Hola VPN Premium")
            )
        );
      E.Rated = Rated;
      E.Link_mailto = function Link_mailto({ to = "help_be@" + www_host, on_click }) {
        const href = E.use_etask(() => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_problem_mailto_url({ to }));
        if (!href) return null;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "a",
          { href, target: "report_mailto", onClick: on_click },
          to,
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("iframe", { name: "report_mailto", style: { display: "none" } })
        );
      };
      const Timer_days_section = ({ value }) =>
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "timer-section" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "timer-digits timer-days-digits" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "timer-digit" }, value, "d")
          )
        );
      const Timer_section = ({ value, name }) => {
        value = pad(value);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "timer-section" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "timer-digits" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "timer-digit" }, value[0]),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "timer-digit" }, value[1])
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "timer-text" }, name)
        );
      };
      const Timer_el = ({ time, on_click, hide_hours, style }) => {
        let days;
        let sec = Math.floor(time / 1e3);
        let hrs = Math.floor(sec / (60 * 60));
        sec -= hrs * 60 * 60;
        let min = Math.floor(sec / 60);
        sec -= min * 60;
        if (24 <= hrs && !hide_hours) {
          days = Math.floor(hrs / 24);
          hrs = hrs % 24;
        }
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("timer", { "show-days": days }), onClick: on_click, style },
          days && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_days_section, { value: days }),
          !hide_hours && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_section, { value: hrs, name: "hrs" }),
          !hide_hours && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "timer-separator" }, ":"),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_section, { value: min, name: "min" }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "timer-separator" }, ":"),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_section, { value: sec, name: "sec" })
        );
      };
      const Countdown = (_ref) => {
        let ts = _ref.ts,
          _ref$add_time = _ref.add_time,
          add_time = _ref$add_time === void 0 ? 0 : _ref$add_time,
          on_end = _ref.on_end,
          rest = _objectWithoutProperties(_ref, _excluded);
        const time = E.use_countdown(ts);
        useEffect(() => {
          if (time == 0 && on_end) on_end();
        }, [time, on_end]);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_el, _extends({ time: time + add_time }, rest));
      };
      E.Countdown = Countdown;
      const Timer = (_ref2) => {
        let ts = _ref2.ts,
          expire_ts = _ref2.expire_ts,
          _ref2$add_time = _ref2.add_time,
          add_time = _ref2$add_time === void 0 ? 0 : _ref2$add_time,
          on_end = _ref2.on_end,
          rest = _objectWithoutProperties(_ref2, _excluded2);
        let time = E.use_timer(ts);
        useEffect(() => {
          if (expire_ts && expire_ts <= ts + time && on_end) on_end();
        }, [ts, time, expire_ts, on_end]);
        let t_time = Math.max(time + add_time, 0);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_el, _extends({ time: t_time }, rest));
      };
      E.format_time = ({ time, hide_hours }) => {
        let sec = Math.floor(Math.max(time, 0) / 1e3);
        let hrs = Math.floor(sec / (60 * 60));
        sec -= hrs * 60 * 60;
        let min = Math.floor(sec / 60);
        sec -= min * 60;
        let timer = [pad(min), pad(sec)];
        if (!hide_hours) timer.unshift(pad(hrs));
        return timer.join(":");
      };
      E.use_trial_timer = () => {
        const _useContext = useContext(App_context),
          trial = _useContext.trial,
          trial_state = _useContext.trial_state,
          root_url = _useContext.root_url;
        const remaining_cycle_time = E.use_etask(
          () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_remaining_cycle_time(root_url),
          0,
          [root_url, trial]
        );
        const used_cycle_time = E.use_etask(
          () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_used_cycle_time(root_url, true),
          0,
          [root_url, trial]
        );
        const used_trial_time = E.use_etask(
          () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_used_trial_time(root_url, true),
          0,
          [root_url, trial]
        );
        let type = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_trial_conf(trial_state, "timer_type", "cycle_countdown");
        const expire_ts = trial ? trial.expire_ts : 0;
        const start_ts = trial ? trial.interval_ts || trial.start_ts : 0;
        let add_time = 0;
        if (type == "cycle_timer") add_time = used_cycle_time;
        else if (type == "trial_timer") add_time = used_trial_time;
        else if (type == "cycle_countdown") add_time = remaining_cycle_time;
        else if (type == "trial_countdown") add_time = 0;
        return { type, start_ts, expire_ts, add_time };
      };
      const Trial_timer = (_ref3) => {
        let rest = _extends({}, _ref3);
        const _E$use_trial_timer = E.use_trial_timer(),
          type = _E$use_trial_timer.type,
          start_ts = _E$use_trial_timer.start_ts,
          expire_ts = _E$use_trial_timer.expire_ts,
          add_time = _E$use_trial_timer.add_time;
        if (type == "trial_timer" || type == "cycle_timer") {
          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer, _extends({ ts: start_ts, expire_ts, add_time }, rest));
        }
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Countdown, _extends({ ts: expire_ts, add_time }, rest));
      };
      E.Trial_timer = Trial_timer;
      E.use_trial_progress = () => {
        const _useContext2 = useContext(App_context),
          trial = _useContext2.trial,
          trial_state = _useContext2.trial_state,
          root_url = _useContext2.root_url;
        const trial_period = E.use_etask(() => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_trial_period(root_url), 0, [
          root_url
        ]);
        const total_cycle_time = E.use_etask(
          () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_total_cycle_time(root_url, true),
          0,
          [root_url]
        );
        const remaining_cycle_time = E.use_etask(
          () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_remaining_cycle_time(root_url),
          0,
          [root_url, trial]
        );
        const type = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_trial_conf(trial_state, "progress_type", "cycle");
        const total_time = type == "cycle" ? total_cycle_time : trial_period;
        const add_time = type == "cycle" ? remaining_cycle_time : 0;
        const update_interval = Math.max(total_time / 100, 1e3);
        const end_ts = trial ? trial.expire_ts + add_time : 0;
        const remaining = E.use_countdown(end_ts, update_interval);
        const percent = total_time ? Math.max(Math.min(Math.floor(100 - (100 * remaining) / total_time), 100), 1) : 0;
        const hide_dots = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_trial_conf(
          trial_state,
          "hide_watermark_progress_dots"
        );
        const dots = !hide_dots && type == "cycle" && trial_period ? Math.max(Math.floor(total_time / trial_period) - 1, 0) : 0;
        return { percent, end_ts, trial_period, total_time, hide_dots, dots };
      };
      const Trial_progress = ({ on_click }) => {
        const _E$use_trial_progress = E.use_trial_progress(),
          percent = _E$use_trial_progress.percent,
          dots = _E$use_trial_progress.dots;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "trial-progress", onClick: on_click },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
            className: "trial-progress-bar",
            style: { width: `${percent}%` }
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "trial-progress-dots" },
            new Array(dots)
              .fill(1)
              .map((d, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { key: i, className: "trial-progress-dot" }))
          )
        );
      };
      E.Trial_progress = Trial_progress;
      const use_hover = (el, def = false) => {
        const _useState3 = useState(def),
          _useState4 = _slicedToArray(_useState3, 2),
          hover = _useState4[0],
          set_hover = _useState4[1];
        useEffect(() => {
          if (!el) return void set_hover(false);
          const on_enter = () => set_hover(true);
          const on_leave = () => set_hover(false);
          el.addEventListener("mouseenter", on_enter);
          el.addEventListener("mouseleave", on_leave);
          return () => {
            el.removeEventListener("mouseenter", on_enter);
            el.removeEventListener("mouseleave", on_leave);
          };
        }, [el]);
        return { hover, set_hover };
      };
      E.use_hover = use_hover;
      const Tooltip = ({
        position = "top",
        r_align,
        show_icon,
        icon,
        title,
        on_click,
        show_on_init = false,
        hide_on_click = true,
        hide_on_el_click = true,
        on_show,
        on_hide,
        className,
        el,
        boundary_el,
        margin = 24,
        el_margin = 16,
        width = 312,
        show_delay = 250,
        hide_delay = 50,
        children,
        on_before_show
      }) => {
        const ref = useRef();
        const _useState5 = useState(false),
          _useState6 = _slicedToArray(_useState5, 2),
          visible = _useState6[0],
          _set_visible = _useState6[1];
        const _useState7 = useState(),
          _useState8 = _slicedToArray(_useState7, 2),
          pos = _useState8[0],
          set_pos = _useState8[1];
        const _use_hover = use_hover(el, show_on_init),
          el_hover = _use_hover.hover;
        const _use_hover2 = use_hover(ref.current),
          tp_hover = _use_hover2.hover,
          set_tp_hover = _use_hover2.set_hover;
        const hover = el_hover || (!!on_click && tp_hover);
        const set_visible = (value) => {
          _set_visible(value);
          if (value && on_show) on_show();
          if (!value && on_hide) on_hide();
        };
        useEffect(() => {
          if (!el || !hide_on_el_click) return;
          const el_click = () => set_visible(false);
          el.addEventListener("click", el_click);
          return () => el.removeEventListener("click", el_click);
        }, [el, hide_on_el_click]);
        useEffect(() => {
          if (hover && on_before_show) on_before_show();
          let t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(
            () => set_visible(hover),
            hover ? show_delay : hide_delay
          );
          return () => _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().clear_timeout(t);
        }, [hover]);
        useEffect(() => {
          let self_el = ref.current;
          if (!el || !self_el || !visible) return;
          let w = width == "auto" ? self_el.clientWidth : width;
          let w_height = window.innerHeight,
            w_width = window.innerWidth;
          let _pos = {};
          let rect = el.getBoundingClientRect();
          let el_center = rect.left + rect.width / 2;
          if (position == "top") _pos.bottom = Math.ceil(w_height - rect.top + el_margin);
          else _pos.top = Math.floor(rect.bottom + el_margin);
          let b_rect = (boundary_el || document.body).getBoundingClientRect();
          if (r_align) {
            _pos.right = Math.round(w_width - el_center - w / 2);
            _pos.right = Math.max(w_width - b_rect.right + margin, Math.min(_pos.right, w_width - b_rect.left - margin - w));
            _pos.a_left = Math.round(el_center - w_width + _pos.right + w - 8);
          } else {
            _pos.left = Math.round(el_center - w / 2);
            _pos.left = Math.max(b_rect.left + margin, Math.min(_pos.left, b_rect.right - w - margin));
            _pos.a_left = Math.round(el_center - _pos.left - 8);
          }
          set_pos(_pos);
        }, [el, visible]);
        const onClick = (e) => {
          if (hide_on_click) set_tp_hover(false);
          if (on_click) on_click(e);
        };
        const cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
          "tooltip",
          `tooltip-${position}`,
          { "tooltip-visible": pos && visible },
          className
        );
        const style = !pos ? {} : { top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom, width };
        const arrow_style = !pos ? {} : { left: pos.a_left };
        show_icon = show_icon || !!icon;
        return react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { ref, className: cls, onClick, style },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "tooltip-arrow" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { style: arrow_style })
            ),
            !!(title || show_icon) &&
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "div",
                { className: "tooltip-header" },
                show_icon && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "tooltip-icon" }, icon),
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "tooltip-title" }, title)
              ),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "tooltip-body" }, children)
          ),
          document.querySelector(".react-root")
        );
      };
      E.Tooltip = Tooltip;
      const Country_flag = (_ref4) => {
        let mitm = _ref4.mitm,
          stop = _ref4.stop,
          country = _ref4.country,
          _ref4$size = _ref4.size,
          size = _ref4$size === void 0 ? 24 : _ref4$size,
          plus = _ref4.plus,
          rest = _objectWithoutProperties(_ref4, _excluded3);
        const flag = mitm ? "flag_mitm" : stop ? "flag_stop" : ["flag", country && country.toLowerCase()];
        const padding = Math.max(Math.floor(size * 0.065), 1);
        const style = { width: `${size}px`, height: `${size}px`, padding: `${padding}px` };
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          _extends({ className: "country-flag", style }, rest),
          !!plus && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "country-flag-plus" }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "fsvg_4x3" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(flag, { plus_logo: plus })
            })
          )
        );
      };
      E.Country_flag = Country_flag;
      const Other_flags = ({ pop_countries, size }) => {
        const def = ["US", "GB", "DE", "FR", "CA", "AU"];
        const flags = underscore__WEBPACK_IMPORTED_MODULE_0___default()
          .uniq((pop_countries || []).concat(def))
          .slice(2, 6);
        const style = { width: `${size}px`, height: `${size}px` };
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "other-flags", style },
          flags.map((f) =>
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Country_flag, { key: f, country: f, size: Math.round(size * 0.43) })
          )
        );
      };
      E.Other_flags = Other_flags;
      const Load_spinner = ({ size = 100, gray, busy, finishing }) => {
        const _useState9 = useState(false),
          _useState10 = _slicedToArray(_useState9, 2),
          started = _useState10[0],
          set_started = _useState10[1];
        const show = busy || finishing;
        useEffect(() => void set_started(show), [show]);
        if (!show) return null;
        const d = size,
          r = d / 2;
        const c = Math.PI * d;
        const style = { width: `${d}px`, height: `${d}px` };
        const circle_style = {
          strokeDasharray: c,
          strokeDashoffset: !started ? c : finishing ? 0 : 0.167 * c,
          transition: finishing ? "stroke-dashoffset 1200ms ease-in" : "stroke-dashoffset 10s cubic-bezier(0.5,1,0.5,1)"
        };
        const width = Math.max(Math.round(d / 25), 1);
        const color0 = gray ? "rgba(212, 224, 236, 0.81)" : "#ee3000";
        const color1 = gray ? "rgba(235, 242, 249, 0.34)" : "rgba(253, 161, 1, 0.25)";
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "load-spinner", style },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "svg",
            { viewBox: `0 0 ${d} ${d}` },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "linearGradient",
              { id: "grad" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("stop", { stopColor: color0, offset: "0" }),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("stop", { stopColor: color1, offset: "1" })
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("circle", {
              cx: r,
              cy: r,
              r: r - width / 2,
              strokeWidth: width,
              fill: "none",
              stroke: "url(#grad)",
              style: circle_style
            })
          )
        );
      };
      E.Load_spinner = Load_spinner;
      const Country_button = ({
        country,
        mitm,
        protect,
        other,
        toggle_dropdown,
        plus,
        error,
        main,
        glow,
        busy,
        active,
        finishing,
        on_click,
        pop_countries,
        title,
        size,
        misc,
        stop,
        premium
      }) => {
        country = country || "";
        const ref = useRef();
        const cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
          "country-button",
          main && "country-button-main",
          glow && "country-button-glow",
          active && "country-button-active",
          { error }
        );
        if (!title && country && !mitm) {
          title = T(country.toUpperCase());
          if (main) title += " VPN";
          if (premium)
            title = react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              react__WEBPACK_IMPORTED_MODULE_1___default().Fragment,
              null,
              title,
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("br", null),
              "(Premium)"
            );
        }
        size = size || (!main ? 56 : 80);
        const arrow_style = { top: Math.round(size / 2) - 3 + "px", right: "-24px" };
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: cls, ref, style: { width: `${size}px` } },
          main && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Load_spinner, { size: 100, busy, finishing }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "country-button-inner", onClick: () => on_click({ country, mitm, main, other, premium }) },
            other
              ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Other_flags, { pop_countries, size })
              : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Country_flag, { mitm, protect, country, stop, plus, size }),
            title &&
              !protect &&
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "country-button-title" }, title),
            misc && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "country-button-misc" }, misc)
          ),
          !!toggle_dropdown &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "country-button-arrow", style: arrow_style, onClick: () => toggle_dropdown(true) },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_arrow_svg__WEBPACK_IMPORTED_MODULE_20___default(), null)
            ),
          !!error && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Error_tooltip, { el: ref.current, error })
        );
      };
      E.Country_button = Country_button;
      const Error_tooltip = ({ error, el }) => {
        const opt = { position: "bottom", title: "There was an error", key: "tooltip", icon_cls: "icon", className: "error-tooltip" };
        const dns_err = _util_util_js__WEBPACK_IMPORTED_MODULE_8___default().get(error, "err") == "ERR_DNS_FAILED";
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          Tooltip,
          _extends({}, opt, { el }),
          dns_err && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, "Site is down or doesn't exist."),
          !dns_err &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", null, 'To fix the problem, click "No, fix it" below.'),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "p",
                null,
                "If the issue is not fixed, contact us at ",
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", null, "help@", www_host)
              )
            )
        );
      };
      const Search_field = ({ value, set_value, placeholder, on_action, autofocus }) => {
        const ref = useRef();
        useEffect(() => {
          if (ref.current && autofocus) ref.current.focus();
        }, [ref.current]);
        const on_key_press = (e) => {
          if (e.key == "Enter" && on_action) on_action(value);
        };
        const on_change = (e) => {
          e.preventDefault();
          set_value(e.target.value);
        };
        const cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()("search-field", value && "search-field-active");
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: cls },
          !!value &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "search-field-clear", onClick: () => set_value("") },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_x_svg__WEBPACK_IMPORTED_MODULE_17___default(), null)
            ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("input", {
            ref,
            type: "text",
            placeholder,
            onKeyPress: on_key_press,
            onChange: on_change,
            value
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_search_svg__WEBPACK_IMPORTED_MODULE_19___default(), {
            className: "search-field-btn",
            onClick: () => on_action && on_action(value)
          })
        );
      };
      E.Search_field = Search_field;
      const Country_item = ({ item, on_click, style }) => {
        const _on_click = (e) => {
          e.stopPropagation();
          on_click(item);
        };
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "li",
          { className: "country-item", style, onClick: _on_click },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Country_flag, {
            size: 32,
            country: item.country,
            mitm: item.mitm,
            stop: item.disable
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "country-item-name" },
            item.name,
            " ",
            item.premium ? "(Premium)" : ""
          )
        );
      };
      const Menu_header = ({ on_back, on_close, title }) =>
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "menu-header" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "menu-header-btn", onClick: on_close || on_back },
            on_back &&
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_left_svg__WEBPACK_IMPORTED_MODULE_18___default(), null),
            on_close && react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_x_svg__WEBPACK_IMPORTED_MODULE_17___default(), null)
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "menu-header-title" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, title)
          )
        );
      E.Menu_header = Menu_header;
      const country_match = (country, filter) => {
        let c = country.toLowerCase(),
          f = filter.toLowerCase();
        return c.split(" ").some((word) => word.startsWith(f));
      };
      const Country_menu = ({ pop_countries, countries, country, show_stop, on_click, on_close, inline, no_header, parent }) => {
        const ref = useRef();
        const _useState11 = useState(0),
          _useState12 = _slicedToArray(_useState11, 2),
          height = _useState12[0],
          set_height = _useState12[1];
        const _use_enter_effect = use_enter_effect({ close: on_close }),
          enter_state = _use_enter_effect.enter_state,
          close = _use_enter_effect.close;
        const _useState13 = useState(""),
          _useState14 = _slicedToArray(_useState13, 2),
          filter = _useState14[0],
          set_filter = _useState14[1];
        useLayoutEffect(() => {
          if (ref.current) set_height(ref.current.clientHeight);
        }, [ref.current]);
        const map_country = (c) => ({ country: c, name: T(c.toUpperCase()) });
        let pop = pop_countries.map(map_country);
        let all = countries.map(map_country).sort((a, b) => a.name.localeCompare(b.name));
        let stop = show_stop ? { name: country ? `Stop ${T(country.toUpperCase())} VPN` : T("Stop VPN"), disable: true } : null;
        let items = filter
          ? [stop, ...all.filter((c) => country_match(c.name, filter))]
          : [stop, stop ? { divider: true } : null, ...pop, { divider: true }, ...all];
        items = items.filter((i) => !!i);
        const item_size = (i) => (items[i].divider ? 7 : 40);
        const render_item = ({ index, style }) => {
          style = _objectSpread(_objectSpread({}, style), {}, { left: "8px", right: "8px", width: "auto" });
          if (items[index].divider)
            return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { key: index, className: "menu-divider", style });
          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Country_item, {
            key: index,
            on_click,
            item: items[index],
            style
          });
        };
        const cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
          "country-menu",
          inline && "country-menu-inline",
          !inline && enter_state
        );
        const inner = react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: cls, onClick: (e) => e.stopPropagation() },
          !no_header &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Menu_header, { on_back: close, title: "Virtual location" }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Search_field, {
            value: filter,
            set_value: set_filter,
            autofocus: true,
            placeholder: "Search a country"
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { ref, className: "country-menu-body" },
            height > 0 &&
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "ul",
                { role: "menu" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_tiny_virtual_list__WEBPACK_IMPORTED_MODULE_4___default(), {
                  width: "100%",
                  height,
                  itemCount: items.length,
                  itemSize: item_size,
                  renderItem: render_item
                })
              )
          )
        );
        return parent ? react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(inner, parent) : inner;
      };
      E.Country_menu = Country_menu;
      const siteicons = { "bbc.co.uk": "./bext/vpn/ui/img/bbc.svg" };
      const get_icon_sources = (root_url, size) => {
        let res = [],
          url;
        if (siteicons[root_url]) return [siteicons[root_url]];
        if ((url = CG("popular_sites.siteicon_url"))) {
          res.push(url.replace("${root_url}", root_url).replace("${size}", size));
        }
        res.push(`https://${root_url}/favicon.ico`);
        return res;
      };
      const Site_icon = ({ root_url, size = 24 }) => {
        const icon_sources = get_icon_sources(root_url, size);
        const _useState15 = useState(0),
          _useState16 = _slicedToArray(_useState15, 2),
          icon_index = _useState16[0],
          set_icon_index = _useState16[1];
        const _useState17 = useState("loading"),
          _useState18 = _slicedToArray(_useState17, 2),
          img_state = _useState18[0],
          set_img_state = _useState18[1];
        const on_load = () => set_img_state("ready");
        const on_error = () => {
          set_img_state("error");
          if (icon_sources.length > icon_index + 1) set_icon_index(icon_index + 1);
        };
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "site-icon", style: { width: size + "px", height: size + "px" } },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
            src: icon_sources[icon_index],
            style: { display: img_state != "ready" && "none" },
            onLoad: on_load,
            onError: on_error
          }),
          img_state != "ready" &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_globe_svg__WEBPACK_IMPORTED_MODULE_21___default(), null)
        );
      };
      E.Site_icon = Site_icon;
      const Dots = () => {
        const _useState19 = useState(0),
          _useState20 = _slicedToArray(_useState19, 2),
          step = _useState20[0],
          set_step = _useState20[1];
        useEffect(() => {
          let t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(() => set_step((step + 1) % 3), 500);
          return () => _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().clear_timeout(t);
        }, [step]);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "dots" }, ".".repeat(step + 1));
      };
      E.Dots = Dots;
      const Btn = (_ref5) => {
        let light = _ref5.light,
          disabled = _ref5.disabled,
          _ref5$arrow = _ref5.arrow,
          arrow = _ref5$arrow === void 0 ? true : _ref5$arrow,
          children = _ref5.children,
          rest = _objectWithoutProperties(_ref5, _excluded4);
        let cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()("btn", light && "btn-light", disabled && "btn-disabled");
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          _extends({ className: cls }, rest),
          children,
          !!arrow && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "btn-arrow" })
        );
      };
      E.Btn = Btn;
      const Working_button = (_ref6) => {
        let on_click = _ref6.on_click,
          yes = _ref6.yes,
          small = _ref6.small,
          rest = _objectWithoutProperties(_ref6, _excluded5);
        const cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()(
          "working-button",
          yes && "working-button-yes",
          !yes && "working-button-no",
          small && "working-button-small"
        );
        const inner = small
          ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              Fragment,
              null,
              yes
                ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Yes")
                : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "No")
            )
          : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              Fragment,
              null,
              yes
                ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    _img_thumbs_up_svg__WEBPACK_IMPORTED_MODULE_23___default(),
                    null
                  )
                : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                    _img_thumbs_down_svg__WEBPACK_IMPORTED_MODULE_22___default(),
                    null
                  ),
              yes
                ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Oh, yes!")
                : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "No, fix it")
            );
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          _extends({ className: cls, onClick: on_click }, rest),
          inner
        );
      };
      E.Working_button = Working_button;
      E.Progress_bar = function Progress_bar({ visible }) {
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "progress-bar" },
          !!visible && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "progress-bar-anim" })
        );
      };
      E.is_mouse_over = (el, event) => {
        if (!el) return false;
        let r = el.getBoundingClientRect();
        let x = event.clientX,
          y = event.clientY;
        return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;
      };
      const Close_tooltip = ({
        close_btn,
        period,
        root_url,
        show_on_init,
        position,
        margin = 24,
        el_margin,
        className,
        on_click,
        on_show,
        on_hide
      }) => {
        switch (_util_date_js__WEBPACK_IMPORTED_MODULE_9___default().str_to_dur(period)) {
          case ms.DAY:
            period = "one day";
            break;
          case ms.WEEK:
            period = "one week";
            break;
          case ms.MONTH:
            period = "one month";
            break;
          case ms.YEAR:
            period = "one year";
            break;
        }
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          Tooltip,
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("close-tooltip", className),
            el: close_btn,
            show_on_init,
            hide_on_click: false,
            hide_on_el_click: false,
            on_show,
            on_hide,
            on_click: () => {},
            position,
            margin,
            el_margin,
            width: "auto",
            hide_delay: 300,
            title: "Don’t show again"
          },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "close-tooltip-option", onClick: () => on_click(root_url) },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              T,
              null,
              "for ",
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, root_url),
              " for ",
              period
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "close-tooltip-option", onClick: () => on_click("all") },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              T,
              null,
              "for ",
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, "any site"),
              " for ",
              period
            )
          )
        );
      };
      E.Close_tooltip = Close_tooltip;
      const Menu_items = ({ children }) =>
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "menu-items" }, children);
      E.Menu_items = Menu_items;
      const Menu_item = ({ on_click, selected, text, extra, icon, href, dot, class_name }) => {
        if (href) on_click = () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.open_page(href);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "li",
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("menu-item", selected && "menu-item-selected", class_name),
            onClick: on_click
          },
          icon &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Menu_icon, { img: "./bext/vpn/ui/img/menu_icons.svg", id: icon }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "menu-item-text" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, text)
          ),
          !!extra && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "menu-item-extra" }, extra),
          !!dot && react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "notification-dot" })
        );
      };
      E.Menu_item = Menu_item;
      const use_is_mounted = () => {
        const is_mounted_ref = useRef(true);
        useEffect(() => () => (is_mounted_ref.current = false), []);
        return is_mounted_ref;
      };
      E.use_is_mounted = use_is_mounted;
      let stuck_timer, stuck_timer_5s;
      const Wait_timer = ({ end_ts, hide_hours, show_full_time, on_stuck_end, try_again }) => {
        const time = E.use_countdown(end_ts);
        const is_mounted = use_is_mounted();
        useEffect(() => {
          if (!on_stuck_end) return;
          if (time > 0 && stuck_timer) clearTimeout(stuck_timer);
          if (time > 0 && stuck_timer_5s) clearTimeout(stuck_timer_5s);
          if (time == 0 && !stuck_timer) {
            stuck_timer = setTimeout(() => {
              if (!is_mounted.current || time > 0) return;
              _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_ui_wait_stuck", {}, { add_trial_info: true });
              if (on_stuck_end) on_stuck_end();
            }, 2e3);
          }
          if (time == 0 && !stuck_timer_5s) {
            stuck_timer_5s = setTimeout(() => {
              if (!is_mounted.current || time > 0) return;
              _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_ui_wait_stuck_over_5s", {}, { add_trial_info: true });
            }, 5e3);
          }
        }, [time]);
        useEffect(
          () => () => {
            if (stuck_timer) clearTimeout(stuck_timer);
            if (stuck_timer_5s) clearTimeout(stuck_timer_5s);
            stuck_timer = null;
            stuck_timer_5s = null;
          },
          []
        );
        if (time == 0) {
          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "wait-timer-loader" },
            try_again
              ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "wait-reload", onClick: try_again })
              : react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "wait-spinner" })
          );
        }
        if (show_full_time || ms.MIN < time) {
          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "wait-timer-big" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Timer_el, { time, hide_hours })
          );
        }
        const sec_arr = Array.from(Math.ceil(time / 1e3) + "");
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "wait-timer" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "wait-timer-value" },
            sec_arr.map((n, i) => react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { key: i }, n))
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "wait-timer-title" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "seconds")
          )
        );
      };
      E.Wait_timer = Wait_timer;
      const Month_price = ({ prefix, price, max_width, font_size }) => {
        let style = { fontWeight: "bold", fontSize: font_size, fontFamily: "Montserrat" };
        let text = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.format_price(price, prefix);
        style.fontSize = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_font_size(text, style, max_width);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "month-price", style }, text);
      };
      E.Month_price = Month_price;
      const Full_price = ({ prefix, price, regular_price, every, period_count, max_width }) => {
        let style = { fontWeight: "500", fontSize: "12px", fontFamily: "Montserrat" };
        let regular_text =
          regular_price == price ? "" : _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.format_price(regular_price, prefix);
        let billed_text = ` billed every ${every}`;
        let actual_text = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.format_price(price, prefix) + billed_text;
        style.fontSize = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_font_size(
          regular_text + " " + actual_text,
          style,
          max_width
        );
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "full-price", style },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", { className: "regular-price" }, regular_text),
          " ",
          actual_text
        );
      };
      const period2label = { "1 M": "month", "1 Y": "year" };
      const Plan = ({
        currency,
        plan,
        on_click,
        best,
        best_text = "Best Value",
        small,
        price_font_size = "24px",
        price_max_width,
        free_per
      }) => {
        let cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()("plan-btn", {
          "best-plan": best,
          "plan-btn-small": small,
          "free-per-plan": free_per
        });
        let _ui_api$get_local_pri = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_local_price(currency, plan),
          price = _ui_api$get_local_pri.price,
          month_price = _ui_api$get_local_pri.month_price,
          regular_price = _ui_api$get_local_pri.regular_price,
          prefix = _ui_api$get_local_pri.prefix,
          discount_percent = _ui_api$get_local_pri.discount_percent;
        price_max_width = price_max_width || (small ? 70 : 160);
        let best_badge =
          best &&
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "best-badge" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, best_text)
          );
        let free_badge =
          !best &&
          free_per &&
          plan.free_period &&
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "free-per-badge" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Free ", period2label[plan.free_period] || plan.period)
          );
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: cls, onClick: () => on_click(plan) },
          best_badge,
          free_badge,
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "plan-btn-column" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "plan-btn-row" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "div",
                { className: "plan-name" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, plan.short_name, " plan")
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Month_price, {
                prefix,
                price: month_price || price,
                font_size: price_font_size,
                max_width: price_max_width
              }),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "div",
                { className: "per-month" },
                " ",
                "/ ",
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, month_price ? "month" : plan.every)
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "plan-btn-row" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Full_price, {
                prefix,
                price,
                regular_price,
                every: plan.every,
                period_count: plan.period_count,
                max_width: small ? 248 : 280
              }),
              discount_percent &&
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  "div",
                  { className: "plan-discount" },
                  "Save ",
                  discount_percent,
                  "%"
                )
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "select-btn" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Select")
          )
        );
      };
      E.Plan = Plan;
      const Plan_one = ({ currency, plan, on_click, big, best, best_text = "Best Value" }) => {
        let _ui_api$get_local_pri2 = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_local_price(currency, plan),
          price = _ui_api$get_local_pri2.price,
          month_price = _ui_api$get_local_pri2.month_price,
          regular_price = _ui_api$get_local_pri2.regular_price,
          prefix = _ui_api$get_local_pri2.prefix;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("plan-btn-one", best && "best-plan", big && "plan-btn-one-big"),
            onClick: () => on_click(plan)
          },
          best &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "best-badge" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, best_text)
            ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "plan-name" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, plan.short_name, " plan")
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "plan-btn-price-row" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Month_price, {
              prefix,
              price: month_price || price,
              font_size: 32,
              max_width: 180
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "per-month" },
              " ",
              "/ ",
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, month_price ? "month" : plan.every)
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Full_price, {
            prefix,
            price,
            regular_price,
            every: plan.every,
            period_count: plan.period_count,
            max_width: 248
          }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            Btn,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Upgrade")
          )
        );
      };
      E.Plan_one = Plan_one;
      const Plan2 = ({ currency, plan, on_click, best, best_text = "Best Value" }) => {
        let _ui_api$get_local_pri3 = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_local_price(currency, plan),
          price = _ui_api$get_local_pri3.price,
          month_price = _ui_api$get_local_pri3.month_price,
          regular_price = _ui_api$get_local_pri3.regular_price,
          prefix = _ui_api$get_local_pri3.prefix;
        let name = `${plan.period_count} ${_util_string_js__WEBPACK_IMPORTED_MODULE_11___default().capitalize(plan.period_name)}`;
        if (plan.period_count > 1) name += "s";
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("plan-btn2", best && "best-plan"), onClick: () => on_click(plan) },
          best &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "best-badge" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, best_text)
            ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "plan-name" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, name)
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "plan-btn-price-row" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Month_price, {
              prefix,
              price: month_price || price,
              font_size: 24,
              max_width: 180
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "per-month" },
              " ",
              "/ ",
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, month_price ? "month" : plan.every)
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Full_price, {
            prefix,
            price,
            regular_price,
            every: plan.every,
            period_count: plan.period_count,
            max_width: 248
          })
        );
      };
      E.Plan2 = Plan2;
      const More_plans = ({ currency, plan, on_click, small, price_font_size = "24px", price_max_width, title, subtitle }) => {
        let cls = classnames__WEBPACK_IMPORTED_MODULE_3___default()("more-plans-btn", "plan-btn", { "plan-btn-small": small });
        let _ui_api$get_local_pri4 = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_local_price(currency, plan),
          month_price = _ui_api$get_local_pri4.month_price,
          price = _ui_api$get_local_pri4.price,
          prefix = _ui_api$get_local_pri4.prefix;
        price_max_width = price_max_width || (small ? 70 : 160);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: cls, onClick: () => on_click(plan) },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "plan-btn-column" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "plan-btn-row" }, title),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "plan-btn-row" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Month_price, {
                prefix,
                price: month_price || price,
                font_size: price_font_size,
                max_width: price_max_width
              }),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                "div",
                { className: "per-month" },
                " ",
                "/ ",
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, month_price ? "mo" : plan.every)
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "plan-btn-row" }, subtitle)
          )
        );
      };
      E.More_plans = More_plans;
      const Moneyback = ({ text }) => {
        const child = text
          ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, text)
          : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "100% money-back guarantee policy")
            );
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "moneyback" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_img_ic_guarantee_svg__WEBPACK_IMPORTED_MODULE_24___default(), {
            width: "15",
            height: "15"
          }),
          child
        );
      };
      E.Moneyback = Moneyback;
      const Mitm_btn = ({ root_url, enable, on_click }) =>
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "action-button mitm-unblock", onClick: on_click },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: enable ? "unlock-anim" : "lock-anim" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "power-switch" }),
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
              "div",
              { className: "img-wrapper" },
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "lock-img" }),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "unlock-img" }),
              react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "strike-line" })
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "title" },
            enable
              ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
                  T,
                  null,
                  "Unblock ",
                  react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, root_url)
                )
              : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "Continue without VPN")
          )
        );
      E.Mitm_btn = Mitm_btn;
      const Auto_btn = ({ timeout = 1e4, width = 67, height = 32, onClick, children }) => {
        const _useState21 = useState(null),
          _useState22 = _slicedToArray(_useState21, 2),
          end_ts = _useState22[0],
          set_end_ts = _useState22[1];
        useEffect(() => {
          set_end_ts(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now() + timeout);
          const t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(onClick, timeout);
          return () => _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().clear_timeout(t);
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "auto-btn", onClick, style: { width: width + "px", lineHeight: height + "px" } },
          !!end_ts &&
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(E.Timer_progress_rect, {
              total: timeout,
              end_ts,
              width: 67,
              height: 32,
              border_r: 4,
              border_width: 1,
              border_color: "#D478FF"
            }),
          children
        );
      };
      E.Auto_btn = Auto_btn;
      E.get_dialog_conf = (ctx, path) => {
        const trial_state = ctx.trial_state;
        let base_conf = CG("dialogs");
        let trial_conf = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_trial_conf(trial_state, "dialogs");
        let c = _util_util_js__WEBPACK_IMPORTED_MODULE_8___default().extend_deep(
          _util_util_js__WEBPACK_IMPORTED_MODULE_8___default().clone_deep(base_conf),
          trial_conf
        );
        return _util_util_js__WEBPACK_IMPORTED_MODULE_8___default().get(c, path);
      };
      const get_dialog_text = (ctx, path, variables = {}) => {
        let tpl = E.get_dialog_conf(ctx, path) || "";
        const vars = {};
        for (const k in variables) vars[`%%${k}%%`] = variables[k];
        vars["%%root_url%%"] = ctx.root_url;
        let t = tpl.replace(/%%[^%]*%%/g, (v) => (vars[v] == undefined ? "" : vars[v]));
        if (!t) return;
        if (!/<[^<]+>/.test(t)) return t;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { dangerouslySetInnerHTML: { __html: t } });
      };
      E.get_dialog_text = get_dialog_text;
      E.use_body_class = (cls, val) => {
        useLayoutEffect(() => {
          document.body.classList.toggle(cls, val);
          return () => document.body.classList.remove(cls);
        }, []);
      };
      E.use_previous = (value) => {
        const ref = useRef();
        useEffect(() => void (ref.current = value), [value]);
        return ref.current;
      };
      E.use_busy = () => {
        const _useContext3 = useContext(App_context),
          busy = _useContext3.busy;
        const _useState23 = useState(false),
          _useState24 = _slicedToArray(_useState23, 2),
          finishing = _useState24[0],
          set_finishing = _useState24[1];
        const prev_busy = E.use_previous(busy);
        const need_finish = prev_busy && !busy;
        useEffect(() => {
          if (!need_finish) return void set_finishing(false);
          set_finishing(true);
          const t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(() => set_finishing(false), 1200);
          return () => _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().clear_timeout(t);
        }, [busy]);
        return { busy: busy || need_finish || finishing, finishing: need_finish || finishing };
      };
      E.on_outside_click = (ref, cb, arr) => {
        useEffect(() => {
          const click_outside = (e) => {
            if (ref.current && !ref.current.contains(e.target) && !e.target.closest(".tooltip") && cb) {
              cb();
            }
          };
          const body_click = () => cb();
          setTimeout(() => {
            if (document.body) document.body.addEventListener("click", click_outside);
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.on("body_click", body_click);
          }, 30);
          return () => {
            if (document.body) document.body.removeEventListener("click", click_outside);
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.off("body_click", body_click);
          };
        }, arr || []);
      };
      E.use_etask = (task, def, inputs) => {
        const _useState25 = useState(def),
          _useState26 = _slicedToArray(_useState25, 2),
          data = _useState26[0],
          set_data = _useState26[1];
        useEffect(() => {
          const et = _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default()(function* () {
            set_data(yield task());
          });
          return () => et.return();
        }, inputs || []);
        return data;
      };
      E.use_timer = (ts, interval = 1e3) => {
        const _useState27 = useState(ts > 0 ? _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now() - ts : 0),
          _useState28 = _slicedToArray(_useState27, 2),
          time = _useState28[0],
          set_time = _useState28[1];
        useEffect(() => {
          const et = _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default()(function* () {
            while (true) {
              set_time(ts > 0 ? _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now() - ts : 0);
              yield _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default().sleep(interval);
            }
          });
          return () => et.return();
        }, [ts, interval]);
        return time;
      };
      E.use_countdown = (ts, interval = 1e3) => {
        const prev_ts = E.use_previous(ts);
        const initial_value = Math.max(ts - _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now(), 0);
        const _useState29 = useState(initial_value),
          _useState30 = _slicedToArray(_useState29, 2),
          time = _useState30[0],
          set_time = _useState30[1];
        useEffect(() => {
          const et = _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default()(function* () {
            let t;
            while ((t = ts - _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now()) > 0) {
              set_time(t);
              yield _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default().sleep(Math.min(t, interval));
            }
            set_time(0);
          });
          return () => et.return();
        }, [ts, interval]);
        return prev_ts != ts ? initial_value : time;
      };
      const use_enter_effect = ({ close, on_enter, on_exit, delay, immidiate }) => {
        const _useState31 = useState(immidiate ? "entered" : "entering"),
          _useState32 = _slicedToArray(_useState31, 2),
          state = _useState32[0],
          set_state = _useState32[1];
        useEffect(() => {
          const do_enter = () => {
            if (on_enter) on_enter();
            set_state("entered");
          };
          if (!delay) return void do_enter();
          const t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(do_enter, delay);
          return () => _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().clear_timeout(t);
        }, []);
        return {
          enter_state: state,
          close: !close
            ? null
            : () => {
                if (on_exit) on_exit();
                set_state("exiting");
                _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(() => close(), 300);
              }
        };
      };
      E.use_enter_effect = use_enter_effect;
      E.use_popular_countries = ({ root_url, src_country, prev_country }) =>
        E.use_etask(
          () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_popular_countries({ root_url, src_country, prev_country }),
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_default_countries({ root_url, src_country, prev_country }),
          [root_url, src_country, prev_country]
        );
      E.use_trial_dialog = ({ wait_end_cb }) => {
        const _useContext4 = useContext(App_context),
          trial = _useContext4.trial,
          trial_state = _useContext4.trial_state,
          root_url = _useContext4.root_url;
        const _useState33 = useState(0),
          _useState34 = _slicedToArray(_useState33, 2),
          trial_changed = _useState34[0],
          set_trial_changed = _useState34[1];
        const _useState35 = useState(false),
          _useState36 = _slicedToArray(_useState35, 2),
          waited = _useState36[0],
          set_waited = _useState36[1];
        const autostart_after_wait = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_trial_conf(
          trial_state,
          "autostart_after_wait"
        );
        const wait_end_ts = (trial_state && trial_state.wait_end_ts) || 0;
        const survey_id = E.use_etask(() => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_suggested_survey_id(), null);
        const on_wait_end = (trial_obj) => {
          if (waited) return;
          set_waited(true);
          if (wait_end_cb) wait_end_cb(_util_util_js__WEBPACK_IMPORTED_MODULE_8___default().get(trial_obj, "conf.autostart_after_wait"));
        };
        useEffect(() => {
          const inc_trial_changed = () => set_trial_changed(trial_changed + 1);
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.on("trial_change", inc_trial_changed);
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.on("bext_config_changed", inc_trial_changed);
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.on("trial_wait_end", on_wait_end);
          return () => {
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.off("trial_change", inc_trial_changed);
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.off("bext_config_changed", inc_trial_changed);
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.off("trial_wait_end", on_wait_end);
          };
        }, [trial_changed]);
        const _useState37 = useState({
            last_trial_end_ts: null,
            next_trial_ts: 0,
            total_wait: 0,
            total_cycle_time: 0,
            wait_screen_time: 0,
            remaining_cycle_time: 0,
            is_wait_ended: false,
            inited: false
          }),
          _useState38 = _slicedToArray(_useState37, 2),
          state = _useState38[0],
          set_state = _useState38[1];
        useEffect(() => {
          if (!waited && state.is_trial_wait_ended) on_wait_end(trial_state);
        }, [state]);
        useEffect(() => {
          const et = _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default()(function* () {
            set_state({
              last_trial_end_ts: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_last_trial_end_ts(root_url),
              next_trial_ts: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_next_trial_ts(root_url, true),
              total_wait: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_trial_wait(root_url),
              total_cycle_time: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_total_cycle_time(root_url),
              wait_screen_time: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_total_cycle_time(root_url, true),
              remaining_cycle_time: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_remaining_cycle_time(root_url),
              is_trial_wait_ended: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.is_trial_wait_ended(root_url),
              inited: true
            });
          });
          return () => et.return();
        }, [trial, trial_changed, root_url]);
        const _useState39 = useState(false),
          _useState40 = _slicedToArray(_useState39, 2),
          start_error = _useState40[0],
          set_start_error = _useState40[1];
        const start_trial_fn = (unblock_opt) =>
          _util_etask_js__WEBPACK_IMPORTED_MODULE_10___default()(function* () {
            if (yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.trial_need_signin(root_url)) {
              yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.unblock_action(unblock_opt);
              close();
              return;
            }
            try {
              set_start_error(false);
              yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.start_trial(root_url);
              yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.unblock_action(unblock_opt);
              close();
            } catch (e) {
              let err = e.toString();
              if (err.includes("trial_forbidden_waiting") || err.includes("trial_forbidden_limit")) {
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.force_bext_config_update(true);
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_ui_start_trial_err_limit", {}, { add_trial_info: true });
                return;
              }
              if (err.includes("trial_forbidden_domain")) {
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.force_bext_config_update(true);
                _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_ui_start_trial_err_disabled", {}, { add_trial_info: true });
                close();
                return;
              }
              _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_ui_start_trial_err", { err }, { add_trial_info: true });
              set_start_error(true);
            }
          });
        const cycle_wait = E.use_countdown(state.next_trial_ts, 10 * ms.SEC);
        const now = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now();
        const waiting = wait_end_ts > now;
        const is_wait_ended = waited || state.is_trial_wait_ended;
        const need_start_wait = state.total_wait && !is_wait_ended && !waiting;
        let status;
        if (!state.inited) status = "";
        else if (waiting || cycle_wait) status = "waiting";
        else if (need_start_wait) status = "before_wait";
        else if (is_wait_ended) status = "waited";
        else status = "initial";
        useEffect(() => {
          if (!status) return;
          perr(`geo_trial_${status}_show`, {}, { add_trial_info: true }, true);
        }, [status]);
        const send_upgrade_perr = () => {
          perr(`geo_trial_${status}_click_upgrade`, {}, true, { add_trial_info: true });
        };
        const send_free_perr = () => {
          perr(`geo_trial_${status}_click_free`, {}, true, { add_trial_info: true });
        };
        return _objectSpread(
          {
            cycle_wait,
            waiting,
            wait_end_ts,
            waited: is_wait_ended,
            need_start_wait,
            status,
            autostart_after_wait,
            start_error,
            start_trial_fn,
            survey_id,
            send_upgrade_perr,
            send_free_perr
          },
          state
        );
      };
      E.Timer_progress_rect = ({ total, end_ts, width, height, border_r, border_width, border_color }) => {
        const h = height || 72,
          w = width || 192,
          r = border_r || 8;
        const el_ref = E.use_ref();
        const stroke_style = E.use_timer_progress({
          total,
          end_ts,
          path_length: (w + h - 4 * r) * 2 + 2 * Math.PI * r,
          el: el_ref.current
        });
        const path_s = assign({ strokeWidth: border_width || 2, stroke: border_color || "#ff6400", fill: "none" }, stroke_style);
        if (!total) return null;
        let d =
          `M ${w / 2} 0 ` +
          `L ${w - r} 0 A ${r} ${r} 0 0 1 ${w} ${r} ` +
          `L ${w} ${h - r} A ${r} ${r} 0 0 1 ${w - r} ${h} ` +
          `L ${r} ${h} A ${r} ${r} 0 0 1 0 ${h - r} ` +
          `L 0 ${r} A ${r} ${r} 0 0 1 ${r} 0 Z`;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "div",
          { className: "timer-progress" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "svg",
            { viewBox: `-1 -1 ${w + 2} ${h + 2}` },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", { ref: el_ref, d, style: path_s })
          )
        );
      };
      E.use_timer_progress = ({ end_ts, total, path_length, el }) => {
        const _useState41 = useState(0),
          _useState42 = _slicedToArray(_useState41, 2),
          force_update = _useState42[0],
          set_force_update = _useState42[1];
        const time_left = Math.min(Math.max(end_ts - _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now(), 0), total);
        const time_passed = total - time_left;
        const offset = total ? path_length - (path_length * time_passed) / total : path_length;
        useEffect(() => {
          if (!el || !total) return;
          if (total >= 30 * ms.MIN) {
            const t = _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().set_timeout(
              () => set_force_update(force_update + 1),
              10 * ms.SEC
            );
            return () => _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_14___default().clear_timeout(t);
          }
          const anim = el.animate([{ strokeDashoffset: offset }, { strokeDashoffset: 0 }], { duration: time_left, fill: "both" });
          return () => anim.cancel();
        }, [time_left, offset, total, force_update, el]);
        return { strokeDasharray: path_length, strokeDashoffset: offset };
      };
      E.add_rule_ref = (rule, ref) => (rule && rule.mitm ? "mitm_" + (ref || "") : ref);
      E.use_slide_enter = ({ ref, close_cb, direction = "right", immidiate }) => {
        const _useState43 = useState(immidiate ? 1 : 0),
          _useState44 = _slicedToArray(_useState43, 2),
          opacity = _useState44[0],
          set_opacity = _useState44[1];
        const animate = (enter) => {
          let k;
          if (direction == "right") k = ["X(-100%)", "X(0)"];
          else if (direction == "left") k = ["X(100%)", "X(0)"];
          else if (direction == "top") k = ["Y(100%)", "Y(0)"];
          else k = ["Y(-100%)", "Y(0)"];
          let keyframes = [{ transform: "translate" + k[0] }, { transform: "translate" + k[1] }];
          if (enter) set_opacity(1);
          else keyframes.reverse();
          if (!ref.current) return;
          ref.current.animate(keyframes, { duration: 150, easing: "ease-in-out", fill: "both" });
        };
        const _use_enter_effect2 = use_enter_effect({
            immidiate,
            close: close_cb,
            on_enter: () => !immidiate && animate(true),
            on_exit: () => animate(false)
          }),
          enter_state = _use_enter_effect2.enter_state,
          close = _use_enter_effect2.close;
        return { opacity, enter_state, close };
      };
      E.use_ref = () => {
        const _useState45 = useState(null),
          _useState46 = _slicedToArray(_useState45, 2),
          current = _useState46[0],
          set_current = _useState46[1];
        const fn = (v) => set_current(v);
        fn.current = current;
        return fn;
      };
      E.use_singnup_bonus_menu = () => {
        const _useContext5 = useContext(App_context),
          user = _useContext5.user,
          is_premium = _useContext5.is_premium;
        const on_bonus_click = () => {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.perr("be_ui_signup_bonus_menu_click");
          _util_storage_js__WEBPACK_IMPORTED_MODULE_6___default().set(
            "signup_bonus_click_ts",
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.now()
          );
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.open_page(
            _util_url_js__WEBPACK_IMPORTED_MODULE_7___default().qs_add(
              _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.hola_url() + "/signup_bonus",
              { ref: "ext-menu" }
            )
          );
        };
        let show_bonus_menu, show_bonus_dot;
        let c = CG("signup_bonus_menu");
        show_bonus_menu =
          !user &&
          !is_premium &&
          c &&
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.is_signup_bonus_allowed() &&
          _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().check_min_ver(c.min_ver) &&
          _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_install_ms() > c.install_ts_gt;
        show_bonus_dot = show_bonus_menu && !_util_storage_js__WEBPACK_IMPORTED_MODULE_6___default().get_int("signup_bonus_click_ts");
        return { show_bonus_menu, show_bonus_dot, on_bonus_click };
      };
      E.use_skip_plans = (ctx) => {
        const _ref7 = ctx || useContext(App_context),
          trial_state = _ref7.trial_state,
          root_url = _ref7.root_url,
          rule = _ref7.rule,
          src_country = _ref7.src_country;
        const currency = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.get_user_currency(src_country);
        const plan_id = _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_13___default().get_trial_conf(trial_state, "skip_plan_selection");
        return {
          skip_plan_selection: !!plan_id,
          open_payment_page: (plus_ref) => {
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.open_page(
              _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_15__.Z.plus_ref(E.add_rule_ref(rule, plus_ref), {
                plan_id,
                root_url,
                currency,
                bext: 1
              })
            );
          }
        };
      };
      const A = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) =>
        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          "a",
          _extends({ ref, target: "_blank", rel: "noopener noreferrer" }, props),
          props.children
        )
      );
      E.A = A;
      const Trustpilot_link = () => {
        const rating = CG("trustpilot_rating");
        if (!rating) return null;
        return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
          A,
          { className: "trustpilot-link", href: "https://www.trustpilot.com/review/{www_host}" },
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "trustpilot-link-logo" }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { className: "trustpilot-link-stars" }),
          react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
            "div",
            { className: "trustpilot-link-text" },
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement("b", null, rating),
            " ",
            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(T, null, "out of"),
            " 5"
          )
        );
      };
      E.Trustpilot_link = Trustpilot_link;
      if (false) {
      }
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    4191: (module, exports, __webpack_require__) => {
      var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var module; // LICENSE_CODE ZON
      ("use strict");
      let is_node = typeof module == "object" && module.exports && module.children;
      if (is_node);
      else;
      !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(4850),
        __webpack_require__(793),
        __webpack_require__(1291),
        __webpack_require__(6467)
      ]),
      (__WEBPACK_AMD_DEFINE_RESULT__ = function (React, cn, zutil, zmembership) {
        const E = {};
        const assign = Object.assign;
        E.format_time = (ms) => {
          let pad = (num) => ("000" + num).slice(-2);
          let sec = Math.floor(ms / 1e3);
          let days = Math.floor(sec / (60 * 60 * 24));
          sec -= days * 60 * 60 * 24;
          let hours = Math.floor(sec / (60 * 60));
          sec -= hours * 60 * 60;
          let mins = Math.floor(sec / 60);
          sec -= mins * 60;
          if (days == 1 && hours == 0) {
            days = 0;
            hours = 24;
          }
          return (days ? days + "d " : "") + (hours || days ? hours + "h " : "") + pad(mins) + "m " + pad(sec) + "s";
        };
        E.get_plan_display_options = (plan) => {
          const regular_price = plan.regular_price,
            price = plan.price,
            free_period = plan.free_period,
            renewal_price = plan.renewal_price;
          const show_line_through_regular_price = regular_price && regular_price != price && !free_period;
          return { show_line_through_regular_price, show_plus_free: free_period, show_renewal_billing_label: renewal_price };
        };
        const get_price_obj = (plan, currency, { days, months, free_months, regular_monthly }) => {
          const regular_monthly_price =
            currency == "usd"
              ? regular_monthly && regular_monthly.price
              : regular_monthly &&
                regular_monthly.currency &&
                regular_monthly.currency[currency] &&
                regular_monthly.currency[currency].price;
          const price = plan.price,
            renewal_price = plan.renewal_price;
          const regular_price = months && regular_monthly_price ? regular_monthly_price * (months + free_months || 0) : renewal_price;
          const discount = regular_price ? regular_price - price : null;
          const month_price = months ? +(price / months).toFixed(2) : null;
          const day_price = days ? +(price / days).toFixed(2) : null;
          const regular_month_price = months && regular_price ? +(regular_price / (months + free_months || 0)).toFixed(2) : null;
          const discount_percent = discount ? Math.round((100 * discount) / regular_price) : null;
          return { price, regular_price, month_price, day_price, regular_month_price, discount, discount_percent, renewal_price };
        };
        const get_period_units = (period) => {
          const _ref = zmembership.parse_period(period) || {},
            count = _ref.count,
            unit = _ref.unit;
          const months = unit == "M" ? count : unit == "Y" ? 12 * count : 0;
          const days = unit == "D" ? count : unit == "W" ? count * 7 : unit == "M" ? count * 30 : unit == "Y" ? 365 * count : 0;
          return { days, months };
        };
        const fill_plan_info = (plan, { add, replace, regular_monthly } = {}) => {
          const id = plan.id;
          const m = zmembership.parse_period(plan.period);
          if (!m) return;
          const period_count_original = m.count,
            period_type_original = m.unit;
          const period_type = period_type_original;
          const period_name = zmembership.period_unit_names[period_type];
          const period_name_original = period_name;
          let period_count = period_count_original;
          const _get_period_units = get_period_units(plan.period),
            months = _get_period_units.months,
            days = _get_period_units.days;
          const _get_period_units2 = get_period_units(plan.free_period),
            free_months = _get_period_units2.months;
          let currency;
          if (E.is_month_on) period_count = months;
          if (plan.currency) {
            currency = {};
            for (const c in plan.currency) {
              const cur = plan.currency[c];
              currency[c] = assign({}, cur, get_price_obj(cur, c, { days, months, free_months, regular_monthly }));
            }
          }
          const short_name = zmembership.get_plan_short_name(plan.period);
          return assign(
            {},
            add,
            {
              id,
              short_name,
              name: `${short_name} Plan`,
              period_count,
              period_type,
              period_name,
              every: period_count_original > 1 ? period_count_original + " " + period_name_original + "s" : period_name_original,
              currency,
              bluesnap: !!plan.bluesnap_id,
              paypal: !!plan.paypal_id,
              stripe: !!plan.stripe_id
            },
            zutil.pick(
              plan,
              "type",
              "base_plan",
              "period",
              "avangate_id",
              "avangate_product",
              "net",
              "paypal_id",
              "paypal_test_id",
              "bluesnap_id",
              "bluesnap_test_id",
              "bluesnap_ext_id",
              "bluesnap_ext_test_id",
              "stripe_id",
              "stripe_test_id",
              "free_period",
              "fallback_plan",
              "title"
            ),
            get_price_obj(plan, "usd", { days, months, free_months, regular_monthly }),
            replace
          );
        };
        E.fill_plans_info = (plan_ids, all_plans, { discount_base, replace_plan, add }) => {
          let regular_monthly =
            all_plans.find((p) => (discount_base && discount_base == p.id) || (p.period.match(/1\s?m/i) && plan_ids.includes(p.id))) || {};
          let plans = plan_ids.map((id) => {
            let replace = replace_plan && replace_plan[id];
            id = (replace && replace.id) || replace || id;
            replace = replace && typeof replace == "object" ? replace : {};
            if (id == "free") {
              return assign({ period: "free", id: "free", name: "Free", price: "Free" }, {});
            }
            const plan = all_plans.find((p) => p.id == id);
            if (!plan) return;
            return fill_plan_info(plan, { add, regular_monthly, replace });
          });
          return plans.filter((p) => !!p);
        };
        E.Sitepic = class Sitepic extends React.PureComponent {
          constructor(...args) {
            super(...args);
            _defineProperty(this, "state", { no_image: false });
            _defineProperty(this, "on_img_error", (event) => {
              event.target.onerror = null;
              this.setState({ no_image: true });
            });
            _defineProperty(this, "on_click", (event) => this.props.activate(event, this.props));
          }
          render() {
            let state = this.state,
              props = this.props;
            let src = props.image || "";
            if (props.is_landing) {
              src = /netflix\.com\.jpg/.test(props.image)
                ? props.sitepic_netflix
                : /fubo\.tv\.png/.test(props.image)
                ? props.sitepic_fubo
                : /france\.tv\.png/.test(props.image)
                ? props.sitepic_france
                : props.image;
            }
            let sitepic_cls = cn("ui_sitepic2", props.sitepic_class, {
              ui_sitepic2_noimage: state.no_image,
              premium_site: props.premium_site !== undefined && props.premium_site,
              free_site: props.premium_site !== undefined && !props.premium_site,
              ui_sitepic2_unblocking: props.unblocking,
              ui_sitepic2_active: props.unblocking,
              ui_sitepic_disabled: props.disabled,
              ui_sitepic2_orange: props.orange
            });
            let is_shaded = props.is_shaded || state.no_image;
            return React.createElement(
              "div",
              { className: sitepic_cls },
              React.createElement(
                "a",
                { className: "ui_sitepic2_body", onClick: this.on_click },
                React.createElement(
                  "div",
                  { className: "ui_status", style: { display: "none" } },
                  React.createElement("div", { className: "ui_status_label" })
                ),
                is_shaded &&
                  React.createElement(
                    "div",
                    { className: "ui_sitepic2_shade ui_sitepic2_shade_bg_1" },
                    React.createElement("span", { className: "ui_sitepic2_shade_siteurl" }, props.link),
                    React.createElement(
                      "div",
                      { className: "ui_sitepic2_shade_sitename" },
                      React.createElement(
                        "span",
                        { className: "ui_sitepic2_shade_sitename_img" },
                        React.createElement("img", { src: "//favicon.yandex.net/favicon/test.com" })
                      ),
                      React.createElement("span", { className: "ui_sitepic2_shade_sitename_title" }, props.title)
                    )
                  ),
                React.createElement(
                  "div",
                  { className: "ui_sitepic2_overlay" },
                  React.createElement("div", { className: "sprite" }),
                  React.createElement("div", { className: "status" }, "Unblocking ", props.title)
                ),
                React.createElement("div", { className: "ui_sitepic2_promotion" }, "Add Hola to unblock ", props.title),
                React.createElement(
                  "div",
                  { className: "ui_sitepic2_img" },
                  React.createElement("img", { src, onError: this.on_img_error, alt: `${props.title} website image` })
                )
              )
            );
          }
        };
        E.Menu_icon = function Menu_icon({ img, id, img_urls = [] }) {
          return React.createElement(
            "div",
            { className: cn("menu-icon", "menu-icon-" + id) },
            React.createElement(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", version: "1.1" },
              React.createElement("use", { xlinkHref: img_urls[0] || `${img}#${id}_1` })
            ),
            React.createElement(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", version: "1.1" },
              React.createElement("use", { xlinkHref: img_urls[1] || `${img}#${id}_2` })
            )
          );
        };
        return E;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
      __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    },
    8393: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function Arrow(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#A3B5CA",
            fillRule: "evenodd",
            d: "M9.586 0H2.414c-.552 0-1 .448-1 1 0 .265.106.52.293.707l3.586 3.586c.39.39 1.024.39 1.414 0l3.586-3.586c.39-.39.39-1.024 0-1.414C10.105.105 9.85 0 9.586 0z"
          })
        );
      }
      Arrow.defaultProps = { width: "12", height: "6", viewBox: "0 0 12 6" };
      module.exports = Arrow;
      Arrow.default = Arrow;
    },
    9163: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function Globe(props) {
        return React.createElement("svg", props, [
          React.createElement(
            "defs",
            { key: 0 },
            React.createElement(
              "filter",
              { id: "prefix__a", width: "133.3%", height: "140%", x: "-16.7%", y: "-20%", filterUnits: "objectBoundingBox" },
              [
                React.createElement("feOffset", { in: "SourceAlpha", result: "shadowOffsetOuter1", key: 0 }),
                React.createElement("feGaussianBlur", { in: "shadowOffsetOuter1", result: "shadowBlurOuter1", stdDeviation: "4", key: 1 }),
                React.createElement("feColorMatrix", {
                  in: "shadowBlurOuter1",
                  result: "shadowMatrixOuter1",
                  values: "0 0 0 0 0.639215686 0 0 0 0 0.709803922 0 0 0 0 0.792156863 0 0 0 0.74494646 0",
                  key: 2
                }),
                React.createElement("feMerge", { key: 3 }, [
                  React.createElement("feMergeNode", { in: "shadowMatrixOuter1", key: 0 }),
                  React.createElement("feMergeNode", { in: "SourceGraphic", key: 1 })
                ])
              ]
            )
          ),
          React.createElement(
            "g",
            { fill: "#D4E0EC", fillRule: "evenodd", filter: "url(#prefix__a)", transform: "translate(-36 -16)", key: 1 },
            React.createElement("path", {
              d: "M48 40c6.632 0 12-5.373 12-12.01C60 21.352 54.611 16 48 16s-12 5.373-12 12.01C36 34.648 41.368 40 48 40zm-7.109-4.895c-.456-.457-.85-.934-1.202-1.452h2.238c.27.767.601 1.472.995 2.115.311.54.663 1.017 1.037 1.432-1.12-.498-2.156-1.203-3.068-2.095zm1.803-6.265h4.477v3.153h-4c-.27-.996-.435-2.054-.477-3.153zm.436-4.709h4.041v3.029h-4.477c.042-1.058.187-2.074.436-3.029zm10.176 3.029h-4.477V24.13h4.02c.25.955.395 1.971.457 3.029zm4.684 1.68c-.083 1.1-.353 2.157-.788 3.153h-2.674c.228-.996.374-2.074.436-3.153h3.026zM47.17 37.428c-1.036-.311-2.01-1.162-2.798-2.51-.228-.394-.435-.81-.622-1.265h3.44v3.775h-.02zm1.658 0v-3.775h3.44c-.186.456-.393.87-.621 1.265-.809 1.348-1.783 2.22-2.819 2.51zm0-5.435V28.84h4.477c-.062 1.1-.208 2.157-.477 3.153h-4zm0-9.521v-3.9c1.036.311 2.01 1.162 2.798 2.51.249.436.477.892.684 1.39h-3.482zm-1.658-3.9v3.9h-3.503c.208-.498.436-.954.684-1.39.809-1.348 1.783-2.199 2.819-2.51zm7.917 16.533c-.891.892-1.927 1.597-3.047 2.095.374-.415.726-.892 1.037-1.432.373-.643.704-1.348.995-2.115h2.238c-.373.518-.767.995-1.223 1.452zm-.124-7.945c-.042-1.037-.187-2.054-.394-3.029h2.694c.394.955.643 1.971.726 3.029h-3.026zm.124-6.265c.477.478.912 1.017 1.285 1.577h-2.28c-.29-.81-.621-1.556-1.036-2.24-.31-.54-.663-1.017-1.036-1.432 1.14.498 2.176 1.203 3.067 2.095zm-14.197 0c.891-.892 1.928-1.597 3.047-2.095-.373.415-.726.892-1.036 1.432-.415.684-.747 1.43-1.037 2.24h-2.28c.394-.56.83-1.079 1.306-1.577zm-2.155 3.236h2.694c-.207.975-.352 1.992-.394 3.029H38.01c.063-1.037.311-2.054.726-3.029zm2.28 4.71c.041 1.098.186 2.156.435 3.152h-2.674c-.435-.996-.704-2.054-.787-3.153h3.026z"
            })
          )
        ]);
      }
      Globe.defaultProps = { width: "24", height: "24", viewBox: "0 0 24 24" };
      module.exports = Globe;
      Globe.default = Globe;
    },
    5420: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function IcGuarantee(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#FF6400",
            fillRule: "evenodd",
            stroke: "#FF6400",
            d: "M9.531.502c.115.008.226.052.318.13.265.77.632 1.325 1.05 1.697.52.462 1.124.655 1.759.612.164-.012.317.043.431.142.095.081.162.193.189.32-.234.794-.267 1.455-.158 1.992.139.679.499 1.18 1.015 1.519.184.121.307.282.352.459.035.137.02.281-.045.41-.617.48-1.012.987-1.225 1.486-.263.615-.262 1.227-.043 1.8.091.238.11.458.048.637-.042.125-.126.223-.238.285-.763.017-1.38.2-1.85.493-.566.353-.93.867-1.078 1.48-.048.196-.146.353-.282.446-.097.066-.212.097-.33.087-.634-.447-1.25-.668-1.808-.71-.678-.05-1.283.156-1.767.577-.115.1-.26.144-.4.134-.115-.008-.226-.052-.318-.13-.265-.77-.632-1.325-1.05-1.697-.52-.462-1.124-.655-1.759-.612-.164.012-.317-.043-.431-.142-.095-.081-.162-.193-.189-.32.234-.794.267-1.455.158-1.992-.139-.679-.499-1.18-1.015-1.519-.184-.121-.307-.282-.352-.459-.035-.137-.02-.281.045-.41.617-.48 1.012-.987 1.225-1.486.263-.615.262-1.227.043-1.8-.091-.238-.11-.458-.048-.637.042-.125.126-.223.238-.285.763-.017 1.38-.2 1.85-.493.566-.353.93-.867 1.078-1.48.048-.196.146-.353.282-.446.964.36 1.58.581 2.138.623.678.05 1.283-.156 1.767-.577.115-.1.26-.144.4-.134zM7.5 2.338c-1.374 0-2.618.58-3.519 1.52-.893.932-1.447 2.22-1.447 3.642 0 1.423.554 2.71 1.447 3.642.9.94 2.145 1.52 3.519 1.52s2.618-.58 3.519-1.52c.893-.932 1.447-2.22 1.447-3.642 0-1.423-.554-2.71-1.447-3.642-.9-.94-2.145-1.52-3.519-1.52zm0 2.036c.819 0 1.559.349 2.095.908.544.568.879 1.352.879 2.218 0 .866-.335 1.65-.879 2.218-.536.56-1.276.908-2.095.908-.819 0-1.559-.349-2.095-.908-.544-.568-.879-1.352-.879-2.218 0-.866.335-1.65.879-2.218.536-.56 1.276-.908 2.095-.908z"
          })
        );
      }
      IcGuarantee.defaultProps = { width: "15", height: "15", viewBox: "0 0 15 15" };
      module.exports = IcGuarantee;
      IcGuarantee.default = IcGuarantee;
    },
    4762: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function Left(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#40474F",
            fillRule: "evenodd",
            d: "M6.31 8l5.41-5.377c.373-.371.373-.973 0-1.345-.374-.37-.98-.37-1.353 0L4.28 7.328c-.373.371-.373.973 0 1.344l6.087 6.05c.374.37.98.37 1.353 0 .373-.372.373-.974 0-1.345L6.31 8z"
          })
        );
      }
      Left.defaultProps = { width: "16", height: "16", viewBox: "0 0 16 16" };
      module.exports = Left;
      Left.default = Left;
    },
    7568: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function Search(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#65707C",
            fillRule: "evenodd",
            d: "M6.221 0c3.43 0 6.221 2.792 6.221 6.221 0 1.49-.522 2.856-1.4 3.927L16 15.106l-.894.894-4.958-4.957c-1.071.877-2.437 1.4-3.927 1.4C2.792 12.442 0 9.65 0 6.22 0 2.792 2.792 0 6.221 0zm0 1.244c-2.756 0-4.977 2.221-4.977 4.977 0 2.756 2.221 4.977 4.977 4.977 2.756 0 4.977-2.221 4.977-4.977 0-2.756-2.221-4.977-4.977-4.977z"
          })
        );
      }
      Search.defaultProps = { width: "16", height: "16", viewBox: "0 0 16 16" };
      module.exports = Search;
      Search.default = Search;
    },
    5027: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function ThumbsDown(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#40474F",
            fillRule: "evenodd",
            d: "M4.229 0l.146.005c.727.054 1.388.5 1.588 1.081l.012.045.153-.095C6.716.698 7.615.463 8.283.463h7.444c1.436 0 2.252 1.633 2.774 4.372l.053.287c.309 1.732.489 4.126.437 4.687l-.02.145c-.152.857-.947 1.492-1.864 1.492h-4.828l.01.068c.09.712.223 2.49.223 3.452 0 1.44-1.249 3.034-2.201 3.034h-.036c-.305 0-.423-.008-.608-.062-.18-.054-.344-.144-.521-.28-.25-.192-.32-.433-.332-.815l-.002-.15c.001-.207.012-.384.046-.787l.022-.257c.055-.636.063-.97.024-1.11l-.033-.1c-.126-.358-.526-1.253-1.184-2.654l-1.18-2.477c-.028-.057-.051-.109-.074-.172l-.04-.123-.388-.004-.016.032c-.274.469-.782.767-1.342.767h-2.85C.802 9.808 0 8.996 0 8.003V1.449C0 .445.735 0 1.796 0H4.23zm11.498 1.616H8.283c-.524 0-1.356.246-1.666.471l-.066.056c-.102.102-.222.179-.352.228l-.003 5.483c.199.002.44.012.74.026l.551.026v.55c0 .107.008.182.022.238l.021.067 1.24 2.603c.71 1.511 1.116 2.436 1.235 2.812l.016.055c.076.272.084.573.046 1.116l-.086 1.076c-.005.081-.007.148-.009.211v.134l.003.056.025.01c.03.008.07.012.19.013h.12c.24 0 1.043-1.024 1.043-1.881l-.008-.438c-.037-1.128-.183-2.874-.195-2.91-.11-.29-.07-.627.11-.893.186-.27.49-.431.815-.431h5.032c.384 0 .7-.27.73-.59l.006-.156c.003-.65-.148-2.536-.393-4.007l-.038-.217C17 3.008 16.344 1.616 15.727 1.616zM4.229 1.153H1.796c-.503 0-.637.08-.637.296v6.554c0 .361.289.652.637.652h2.851c.166 0 .313-.103.37-.257l.022-.055V2.008c-.11-.161-.174-.355-.174-.559 0-.077-.29-.296-.636-.296z"
          })
        );
      }
      ThumbsDown.defaultProps = { width: "19", height: "18", viewBox: "0 0 19 18" };
      module.exports = ThumbsDown;
      ThumbsDown.default = ThumbsDown;
    },
    8175: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function ThumbsUp(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#40474F",
            fillRule: "evenodd",
            d: "M4.229 18l.146-.005c.727-.054 1.388-.5 1.588-1.081l.012-.045.153.095c.588.338 1.487.573 2.155.573h7.444c1.436 0 2.252-1.633 2.774-4.372l.053-.287c.309-1.732.489-4.126.437-4.687l-.02-.145c-.152-.857-.947-1.492-1.864-1.492h-4.828l.01-.068c.09-.712.223-2.49.223-3.452 0-1.44-1.249-3.034-2.201-3.034h-.036c-.305 0-.423.008-.608.062-.18.054-.344.144-.521.28-.25.192-.32.433-.332.815l-.002.15c.001.207.012.384.046.787l.022.257c.055.636.063.97.024 1.11l-.033.1c-.126.358-.526 1.253-1.184 2.654l-1.18 2.477c-.028.057-.051.109-.074.172l-.04.123-.388.004-.016-.032c-.274-.469-.782-.767-1.342-.767h-2.85C.802 8.192 0 9.004 0 9.997v6.554C0 17.555.735 18 1.796 18H4.23zm11.498-1.616H8.283c-.524 0-1.356-.246-1.666-.471l-.066-.056c-.102-.102-.222-.179-.352-.228l-.003-5.483c.199-.002.44-.012.74-.026l.551-.026v-.55c0-.107.008-.182.022-.238l.021-.067 1.24-2.603c.71-1.511 1.116-2.436 1.235-2.812l.016-.055c.076-.272.084-.573.046-1.116l-.086-1.076c-.005-.081-.007-.148-.009-.211v-.134l.003-.056.025-.01c.03-.008.07-.012.19-.013h.12c.24 0 1.043 1.024 1.043 1.881l-.008.438c-.037 1.128-.183 2.874-.195 2.91-.11.29-.07.627.11.893.186.27.49.431.815.431h5.032c.384 0 .7.27.73.59l.006.156c.003.65-.148 2.536-.393 4.007l-.038.217c-.413 2.316-1.068 3.708-1.685 3.708zm-11.498.463H1.796c-.503 0-.637-.08-.637-.296V9.997c0-.361.289-.652.637-.652h2.851c.166 0 .313.103.37.257l.022.055v6.335c-.11.161-.174.355-.174.559 0 .077-.29.296-.636.296z"
          })
        );
      }
      ThumbsUp.defaultProps = { width: "19", height: "18", viewBox: "0 0 19 18" };
      module.exports = ThumbsUp;
      ThumbsUp.default = ThumbsUp;
    },
    6190: (module, __unused_webpack_exports, __webpack_require__) => {
      var React = __webpack_require__(4850);
      function X(props) {
        return React.createElement(
          "svg",
          props,
          React.createElement("path", {
            fill: "#A3B5CA",
            fillRule: "evenodd",
            d: "M.9 1.028L.959.96c.257-.258.661-.278.94-.06l.068.06L6 5.018 10.033.96c.278-.28.73-.28 1.008 0 .257.259.277.666.06.947l-.06.068-4 4.025 4 4.025c.257.259.277.666.06.947l-.06.068c-.257.258-.661.278-.94.06l-.068-.06L6 6.982 1.967 11.04c-.278.28-.73.28-1.008 0-.257-.259-.277-.666-.06-.947l.06-.068 4-4.025-4-4.025c-.257-.259-.277-.666-.06-.947L.96.96l-.06.068z"
          })
        );
      }
      X.defaultProps = { width: "12", height: "12", viewBox: "0 0 12 12" };
      module.exports = X;
      X.default = X;
    },
    4118: (module) => {
      "use strict";
      module.exports = JSON.parse('{"BUILDTYPE_DEBUG":false,"ZON_VERSION":"1.216.954","_RELEASE":true,"_RELEASE_LEVEL":2}');
    }
  }
]);
//# sourceMappingURL=https://hola.org/be_source_map/1.216.954/529.bundle.js.map?build=nopeer_v2
