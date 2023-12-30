// LICENSE_CODE ZON
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([
  [805],
  {
    726: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, {
        $0: () => Section,
        PH: () => Label_line,
        St: () => Legal_section,
        VV: () => init_api,
        f6: () => Page_layout,
        u_: () => Modal
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4850);
      var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5380);
      var react_dom__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
      var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(793);
      var classnames__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5305);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_3__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_4__);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_5__);
      var _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2075);
      var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6357);
      var conf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9641);
      // LICENSE_CODE ZON
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }
      function _nonIterableRest() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
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
      const useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState,
        useEffect = react__WEBPACK_IMPORTED_MODULE_0___default().useEffect;
      const T = _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__.Z.T,
        Btn = _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_6__.Z.Btn;
      const www_host = conf__WEBPACK_IMPORTED_MODULE_8__.www_host;
      const Header = (props) => {
        let logo_url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url() + "/?utm_source=holaext&utm_content=settings";
        let cp_url = _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url() + "/cp?utm_source=holaext&utm_content=settings";
        let login_url =
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url() + "/signin?utm_source=holaext&utm_content=settings";
        let logo_cls = "logo " + (props.is_plus ? "logo-plus" : "logo-free");
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          "div",
          { className: "header" },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "div",
            { className: "header-left" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "spacer" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
              className: logo_cls,
              target: "_blank",
              rel: "noopener noreferrer",
              href: logo_url
            })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "div",
            { className: "header-content" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "title" }, props.title),
            !props.is_plus &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                "div",
                { className: "upgrade-btn" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  "a",
                  {
                    href: "",
                    onClick: () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.open_plus_page("", "ext_settings_upgrade")
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(T, null, "Upgrade to Premium")
                )
              )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "div",
            { className: "header-right" },
            props.user &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                "a",
                { className: "user-name", target: "_blank", rel: "noopener noreferrer", href: cp_url },
                props.user.displayName
              ),
            !props.user &&
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                "a",
                { className: "login-btn", target: "_blank", rel: "noopener noreferrer", href: login_url },
                "Sign in"
              ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "spacer" })
          )
        );
      };
      const Page_layout = ({ user, is_plus, title, cls, children, trial }) =>
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          "div",
          { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("page-layout", cls) },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, { user, is_plus, title }),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "content" }, children)
        );
      const Section = (props) =>
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          "div",
          { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("section", props.cls) },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "title", onClick: props.on_click }, props.title),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card" }, props.children)
        );
      const Label_line = (props) =>
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          "label",
          { className: "label-line" },
          props.label && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "label-line-label" }, props.label),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "label-line-children" }, props.children)
        );
      const Modal = ({ action, title, on_close, children, className }) =>
        react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "div",
            { className: "page-layout" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "div",
              { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("page-modal", className) },
              react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                "div",
                { className: "page-modal-body" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
                  "div",
                  { className: "page-modal-title" },
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, title),
                  react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
                    className: "icon-remove",
                    title: T("Close"),
                    onClick: on_close
                  })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "page-modal-content" }, children),
                action && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "page-modal-actions" }, action)
              )
            )
          ),
          document.body
        );
      const Legal_section = (props) =>
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          Section,
          { title: T("Legal") },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            Label_line,
            { label: T("Privacy Policy") },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "a",
              { href: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url() + "/legal/privacy" },
              "https://",
              www_host,
              "/legal/privacy"
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            Label_line,
            { label: T("End User License") },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "a",
              { href: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.hola_url() + "/legal/sla" },
              "https://",
              www_host,
              "/legal/sla"
            )
          ),
          props.children
        );
      const Report_problem_modal = ({ url, init_subj, close_cb }) => {
        useEffect(() => void ui_api.perr("be_report_problem", { perr: 1 }, { with_log: true, rate_limit: { count: 1 } }), []);
        const _useState = useState(true),
          _useState2 = _slicedToArray(_useState, 2),
          valid_email = _useState2[0],
          set_valid_email = _useState2[1];
        const _useState3 = useState(() => zutil.get(ui_api.get_user(), "emails.0.value", "")),
          _useState4 = _slicedToArray(_useState3, 2),
          email = _useState4[0],
          set_email = _useState4[1];
        const _useState5 = useState(init_subj || ""),
          _useState6 = _slicedToArray(_useState5, 2),
          subj = _useState6[0],
          set_subj = _useState6[1];
        const _useState7 = useState(""),
          _useState8 = _slicedToArray(_useState7, 2),
          desc = _useState8[0],
          set_desc = _useState8[1];
        const _useState9 = useState(""),
          _useState10 = _slicedToArray(_useState9, 2),
          error = _useState10[0],
          set_error = _useState10[1];
        const can_submit = desc && subj && email && valid_email;
        useEffect(() => {
          if (error && can_submit) set_error("");
        }, [can_submit]);
        const verify_email = () => set_valid_email(zurl.is_valid_email(email));
        const on_change = (setter) => (ev) => setter(ev.target.value);
        const send_click = () => {
          if (!can_submit) return void set_error("Please fill all fields");
          ui_api.send_issue_report({ email, subj, desc, url });
          close_cb();
        };
        const send_report = React.createElement(
          Btn,
          { disabled: !can_submit, arrow: true, onClick: send_click },
          React.createElement(T, null, "Send")
        );
        return React.createElement(
          Modal,
          { title: T("Report a problem"), on_close: close_cb, action: send_report },
          React.createElement(
            "div",
            { className: classnames("form-group", { "has-error": !valid_email }) },
            React.createElement("input", {
              type: "text",
              placeholder: "Your e-mail",
              className: "form-control",
              onBlur: verify_email,
              value: email,
              onChange: on_change(set_email)
            }),
            !valid_email &&
              React.createElement(
                "span",
                { className: "help-block" },
                React.createElement("img", { src: "./bext/vpn/ui/img/icon_warning.svg" }),
                " ",
                "Please enter a valid email."
              )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("input", {
              type: "text",
              placeholder: "Subject",
              className: "form-control",
              value: subj,
              onChange: on_change(set_subj)
            })
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("textarea", {
              placeholder: "Description",
              rows: "10",
              className: "form-control",
              onChange: on_change(set_desc)
            })
          ),
          error &&
            React.createElement(
              "div",
              { className: "has-error" },
              React.createElement(
                "span",
                { className: "help-block" },
                React.createElement("img", { src: "./bext/vpn/ui/img/icon_warning.svg" }),
                " ",
                error
              )
            )
        );
      };
      const init_api = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_5___default()(function* () {
          window.addEventListener("unload", uninit);
          yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.init();
        });
      const uninit = () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_7__.Z.uninit();
    },
    7209: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4850);
      var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
      var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(793);
      var classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
      var conf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9641);
      // LICENSE_CODE ZON
      const E = {};
      const www_host = conf__WEBPACK_IMPORTED_MODULE_2__.www_host;
      E.Text = function Text({ className }) {
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          "div",
          { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, "privacy_text") },
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "What types of information do we collect?"),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "p",
            null,
            "We collect the following types of data from you when you use the Services:"
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "ul",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "li",
              null,
              "Log Data: Log data may include the following information- browser type, web pages you visit, time spent on those pages, access times and dates."
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "li",
              null,
              'Personal Information: Personal information is information that may be of a private or sensitive nature, and which identifies or may identify you. The Personal Information we may collect and retain includes your IP address, your name and email address, screen name, payment and billing information or other information we may ask from time to time as will be required for the on-boarding process and services provisioning. When you create an account on the Services you are able to do so by using your credentials with a designated third party website or service ("Third Party Account") such as Gmail®. Doing so will enable you to link your account and your Third Party Account. If you choose this option, a Third Party Account pop-up box will appear that you will need to approve in order to proceed, and which will describe the types of information that we will obtain. This information includes your Personal Information stored on your Third Party Account, such as user-name, email address, profile picture, birth date, gender and preferences. Any Anonymous Information that is specifically connected or linked to any Personal Information, is treated by us as Personal Information, as long as such connection or linkage exists.'
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
              "li",
              null,
              "Registering through social network account: When you register or sign-in to the Services via your social network account (e.g., Facebook, Google+), we will have access to basic information from your social network account, such as your full name, home address, email address, birth date, profile picture, friends list, personal description, as well as any other information you made publicly available on such account or agreed to share with us. At all times, we will abide by the terms, conditions and restrictions of the social network platform."
            )
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "How do we use your information?"),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "p",
            null,
            "We use your information in order to provide you with the Service. This means that we will use the information to set up your account, provide you with support regarding the Service, communicate with you for updates, marketing offers or concerns you may have and conduct statistical and analytical research to improve the Service."
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Information we share"),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "p",
            null,
            "We do not rent or sell any Personal Information. We may disclose Personal Information to other trusted third party service providers or partners for the purposes of providing you with the Services, storage and analytics. We may also transfer or disclose Personal Information to our subsidiaries, affiliated companies."
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "p",
            null,
            "We may also share your Personal Information and other information in special cases if we have good reason to believe that it is necessary to: (1) comply with law, regulation, subpoena or court order; (2) detect, prevent or otherwise address fraud, security, violation of our policies or technical issues; (3) enforce the provisions of this Privacy Policy or any other agreements between you and us, including investigation of potential violations thereof; (4) protect against harm to the rights, property or safety of us, its partners, its affiliates, users, or the public."
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Your Choices and Rights"),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "p",
            null,
            "We strive to give you ways to update your information quickly or to delete it. To exercise such right, you may contact us at:",
            " ",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "mailto:privacy@{www_host}" }, "privacy@", www_host)
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Contact Us"),
          react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
            "p",
            null,
            "If you feel that your privacy was not treated in accordance with our Privacy Policy, or if you believe that your privacy has been compromised by any person in the course of using the Services, please contact Hola at: ",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "mailto:privacy@{www_host}" }, "privacy@", www_host),
            " and our privacy officer shall promptly investigate."
          )
        );
      };
      E.title = "Hola Firefox Add-on Privacy Policy";
      const __WEBPACK_DEFAULT_EXPORT__ = E;
    },
    6805: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, { init: () => init });
      var underscore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7439);
      var underscore__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_0__);
      var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(793);
      var classnames__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4850);
      var react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
      var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5380);
      var react_dom__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
      var conf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9641);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(932);
      var _util_date_js__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_util_date_js__WEBPACK_IMPORTED_MODULE_5__);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1291);
      var _util_util_js__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_util_util_js__WEBPACK_IMPORTED_MODULE_6__);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5305);
      var _util_url_js__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_util_url_js__WEBPACK_IMPORTED_MODULE_7__);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6386);
      var _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_util_etask_js__WEBPACK_IMPORTED_MODULE_8__);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7345);
      var _bext_pub_util_js__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_9__);
      var _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2075);
      var _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6357);
      var _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(726);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5250);
      var _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
        _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13__
      );
      var _bext_vpn_ui_privacy_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7209);
      var _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6467);
      var _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
        _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15__
      );
      // LICENSE_CODE ZON
      const _excluded = ["children"],
        _excluded2 = ["message"];
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
      const useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState,
        useEffect = react__WEBPACK_IMPORTED_MODULE_2___default().useEffect;
      const assign = Object.assign,
        T = _bext_vpn_ui_ui_lib_js__WEBPACK_IMPORTED_MODULE_10__.Z.T;
      const perr = (id, info) => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.perr(id, info, {}, true);
      const Switch = ({ checked, on_change }) => {
        const toggle = () => {
          if (on_change) on_change(!checked);
        };
        const cls = "switch" + (checked ? " switch-checked" : "");
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          className: cls,
          onClick: toggle
        });
      };
      const Label_checkbox = (_ref) => {
        let children = _ref.children,
          props = _objectWithoutProperties(_ref, _excluded);
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "label",
          { className: "label-checkbox" },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", _extends({ type: "checkbox" }, props)),
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", { className: "content" }, children)
        );
      };
      const Link_button = ({ href, on_click, cls, style, new_tab, children }) => {
        const click = (e) => {
          if (!href) e.preventDefault();
          if (on_click) on_click(e);
        };
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "a",
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("link-button", cls),
            style,
            href,
            onClick: click,
            target: new_tab ? "_blank" : undefined
          },
          children
        );
      };
      const Link_line = ({ href, children }) =>
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "div",
          { className: "link-line" },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Link_button, { href }, children)
        );
      const Row = ({ cls, children }) =>
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "div",
          { className: "row-sp1" },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            "div",
            { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row-children", cls) },
            children
          )
        );
      const Report_problem = () =>
        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "div",
          { className: "section report-problem" },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            "a",
            { className: "title", href: "about.html#report_issue" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "Report a problem")
          )
        );
      const date2display = (d) =>
        d
          ? _util_date_js__WEBPACK_IMPORTED_MODULE_5___default().strftime(
              "%o %B %Y",
              _util_date_js__WEBPACK_IMPORTED_MODULE_5___default()(d)
            )
          : "-";
      const Mobile_cancel_notice = (props) => {
        const store = _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_ios(props.membership)
          ? "App Store"
          : "Google Play";
        const faq_url = props.hola_faq
          ? "/faq#premium-cancel"
          : _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_ios(props.membership)
          ? "https://support.apple.com/en-il/HT202039"
          : "https://support.google.com/googleplay/answer/7018481";
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "p",
          null,
          "Note: To cancel your subscription, you must use ",
          store,
          ". See ",
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: faq_url }, "the FAQ.")
        );
      };
      class Cancel_modal extends react__WEBPACK_IMPORTED_MODULE_2___default().Component {
        constructor(...args) {
          super(...args);
          _defineProperty(this, "state", {});
          _defineProperty(this, "on_change", (e) => this.setState({ [e.target.name]: e.target.value }));
          _defineProperty(this, "perr_commit", () => {
            perr("cancel_subscription", {
              user: _util_util_js__WEBPACK_IMPORTED_MODULE_6___default().get(this.props.user, "hola_uid"),
              is_mobile: _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_mobile(this.props.membership)
            });
          });
          _defineProperty(this, "on_back", () => {
            if (this.state.step == "cancel") {
              this.perr_commit();
              return this.cancel_subscr();
            }
            let step = this.history.pop();
            if (!step) return this.props.close();
            this.setState({ step });
          });
          _defineProperty(this, "on_next", () => {
            let _this = this;
            let step = this.state.step;
            this.history.push(step);
            return _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
              let next_step;
              switch (step) {
                case "faq":
                  next_step = "reason";
                  break;
                case "reason":
                  if (_svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_mobile(_this.props.membership)) {
                    _this.perr_commit();
                    next_step = (yield _this.send_reason()) ? "cancel_mobile" : "reason";
                  } else next_step = "cancel";
                  break;
                default:
                  _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.refresh_user({
                    force_premium: true,
                    reason: "cancel_subscr_next"
                  });
                  next_step = undefined;
                  _this.props.close();
              }
              _this.setState({ step: next_step });
            });
          });
        }
        componentDidMount() {
          this.setState({ step: "faq" });
          this.history = [];
        }
        render_faq() {
          const Faq = (props) =>
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "a",
              { href: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_url() + "/faq#" + props.id },
              props.children
            );
          let body = react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "p",
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement("b", null, "Common issues:")
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "ul",
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                "li",
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Faq, { id: "premium-slowconn" }, "Slow connection")
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                "li",
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Faq, { id: "premium-appearfree" }, "My account appears as free")
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "p",
              null,
              "Search the ",
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Faq, { id: "faq" }, "Full FAQs")
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "p",
              null,
              "Still need help? ",
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement("a", { href: "/premium_support" }, "Contact us!")
            )
          );
          return { title: T("Technical issue?"), next_label: T("Still want to cancel"), body };
        }
        render_reason() {
          let reason = this.state.reason || "";
          let body = react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
            className: "hfill",
            name: "reason",
            value: reason,
            onChange: this.on_change,
            placeholder: "Problems with a specific site? " + "Slow connection? Please let us know."
          });
          return { title: T("Before you go... tell us why?"), next_label: T("Continue"), next_disabled: reason.trim().length < 8, body };
        }
        render_cancel() {
          let cancel_error = this.state.cancel_error;
          let body = react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "p",
              null,
              "The subscription allows you to enjoy uninterrupted secure browsing and unblocking of all your favorite sites, on all your devices."
            ),
            cancel_error && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Alert_message, { type: "error" }, cancel_error)
          );
          return {
            title: T("Are you sure you want to cancel your subscription?"),
            next_label: T("Keep using Hola VPN"),
            back_label: T("Cancel my subscription"),
            body
          };
        }
        render_cancel_mobile() {
          return {
            next_label: T("Ok"),
            back_label: false,
            body: react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Mobile_cancel_notice, { membership: this.props.membership })
          };
        }
        cancel_subscr() {
          let _this = this;
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
            this.on("uncaught", (e) => {
              perr("cancel_subscription_unknown_error", {
                user: _util_util_js__WEBPACK_IMPORTED_MODULE_6___default().get(_this.props.user, "hola_uid"),
                is_mobile: _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_mobile(_this.props.membership),
                error: e
              });
              _this.setState({ cancel_error: "Unknown error" });
            });
            let data = { reason: _this.state.reason };
            let res = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_api_call(
              "users/payment/cancel_subscription?no_redirect=1",
              { method: "POST", text: true, data }
            );
            _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default().assert(
              res == "ok",
              new Error(`cancel_subscription is not ok: ${res}`)
            );
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.refresh_user({ force_premium: true, reason: "cancel_subscr" });
            _this.props.close();
          });
        }
        send_reason() {
          let _this = this;
          return _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
            try {
              let data = { reason: _this.state.reason };
              let res = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_api_call("users/payment/update_reason", {
                method: "POST",
                text: true,
                data
              });
              return res.trim() == "ok";
            } catch (e) {
              return false;
            }
          });
        }
        render() {
          let step = this.state.step;
          let res = this[`render_${step}`] && this[`render_${step}`]();
          if (!res) return null;
          const actions = [
            res.back_label !== false &&
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                "a",
                { key: "back", className: "btn-secondary", onClick: this.on_back },
                T(res.back_label || "Go back")
              ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "a",
              {
                key: "next",
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ disabled: res.next_disabled }),
                onClick: res.next_disabled ? undefined : this.on_next
              },
              res.next_label
            )
          ];
          return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.u_,
            { title: res.title, on_close: this.props.close, action: actions },
            res.body
          );
        }
      }
      const Alert_message = ({ duration, ts, type, children }) => {
        if (duration && ts + duration < Date.now()) return null;
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "div",
          { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("alert-message", type) },
          children
        );
      };
      const create_alert_info = (type, message, duration) => ({ type, message, duration, ts: Date.now() });
      class Account_details extends react__WEBPACK_IMPORTED_MODULE_2___default().Component {
        constructor(props) {
          super(props);
          _defineProperty(this, "state", { password: "", new_pass: "" });
          _defineProperty(this, "update_membership", () =>
            this.setState({ membership: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_membership() })
          );
          _defineProperty(this, "on_change", (e) => this.setState({ [e.target.name]: e.target.value }));
          _defineProperty(this, "switch_show", (key) => this.setState({ [key]: !this.state[key] }));
          _defineProperty(this, "update_alert", (id, type, message, duration) => {
            let _this$state$alerts = this.state.alerts,
              alerts = _this$state$alerts === void 0 ? {} : _this$state$alerts;
            if (!type) return this.setState({ alerts: _objectSpread(_objectSpread({}, alerts), {}, { [id]: undefined }) });
            this.setState({ alerts: _objectSpread(_objectSpread({}, alerts), {}, { [id]: create_alert_info(type, message, duration) }) });
            if (duration) _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default().set_timeout(() => this.forceUpdate(), duration);
          });
          _defineProperty(this, "logout_sessions", () => {
            let _this = this;
            _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
              this.on("uncaught", () => {
                _this.update_alert("logout", "error", "Unsuccessful logout all sessions except me");
              });
              _this.update_alert("logout");
              let res = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_api_call("users/logout/others", {
                method: "POST",
                text: true
              });
              _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default().assert(res == "ok", new Error());
              _this.update_alert("logout", "success", "Successful logout all sessions except me", 3e3);
            });
          });
          _defineProperty(this, "change_password", () => {
            let _this = this;
            let _this$state = this.state,
              password = _this$state.password,
              new_pass = _this$state.new_pass;
            return _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
              this.on("uncaught", () => {
                _this.update_alert("password", "error", "Current password is incorrect");
              });
              _this.update_alert("password");
              if (!password || !new_pass) {
                return _this.update_alert("password", "error", "Please fill all fields");
              }
              let data = { password, new_pass, service: true };
              let res = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_api_call("users/change_password", {
                method: "POST",
                data,
                text: true
              });
              _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default().assert(res == "ok", new Error());
              yield _this.logout_sessions();
              _this.setState({ show_change_password: false });
              _this.update_alert("password", "success", "Password successfully changed", 3e3);
            });
          });
          _defineProperty(this, "avangate_update_cc", () => {
            let _this = this;
            return _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
              this.on("uncaught", () => {
                _this.update_alert("avangate_update_cc", "error", "Unknown error");
              });
              _this.update_alert("avangate_update_cc");
              let url = yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_api_call("users/payment/single_sign_on");
              _bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default().assert(
                _util_url_js__WEBPACK_IMPORTED_MODULE_7___default().is_valid_url(url),
                new Error()
              );
              location.href = url.replace("?", "payment_methods/?");
            });
          });
          this.switch_show_password = this.switch_show.bind(this, "show_change_password");
          this.switch_show_manage = this.switch_show.bind(this, "show_manage_subscr");
          this.switch_show_cancel = this.switch_show.bind(this, "show_cancel_modal");
        }
        componentDidMount() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("membership_changed", this.update_membership);
          this.update_membership();
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.refresh_user({ force_premium: true, reason: "account_details" });
        }
        componentWillUnmount() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.off("membership_changed", this.update_membership);
        }
        render_alerts(keys) {
          let _this$state$alerts2 = this.state.alerts,
            alerts = _this$state$alerts2 === void 0 ? {} : _this$state$alerts2;
          return Object.entries(alerts)
            .filter(([key, value]) => !!value && keys.includes(key))
            .map(([key, value]) => {
              const message = value.message,
                props = _objectWithoutProperties(value, _excluded2);
              return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Alert_message, _extends({ key }, props), message);
            });
        }
        render() {
          let _this$props = this.props,
            user = _this$props.user,
            is_plus = _this$props.is_plus;
          let _this$state2 = this.state,
            show_change_password = _this$state2.show_change_password,
            show_manage_subscr = _this$state2.show_manage_subscr,
            show_cancel_modal = _this$state2.show_cancel_modal;
          let m = this.state.membership;
          let is_active = _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_active(m);
          const status = !_svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_active(m)
            ? "Stopped"
            : _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_in_trial(m)
            ? "Free trial"
            : "Valid";
          return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.$0,
            { title: T("Account details:") },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
              { label: T("Account ID:") },
              user.displayName,
              " (",
              user.hola_uid,
              ")"
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
              { label: T("Membership:") },
              is_plus ? "Premium" : "FREE"
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                Row,
                { cls: "hfill" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  Link_button,
                  { on_click: this.switch_show_password },
                  show_change_password ? "Hide change password" : "Change password"
                ),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  Link_button,
                  { on_click: this.logout_sessions },
                  "Logout all sessions except me"
                )
              ),
              this.render_alerts(["logout", "password"]),
              show_change_password &&
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  "div",
                  null,
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                    _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                    { label: T("Current password:") },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
                      name: "password",
                      type: "password",
                      onChange: this.on_change
                    })
                  ),
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                    _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                    { label: T("New password:") },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement("input", {
                      name: "new_pass",
                      type: "password",
                      onChange: this.on_change
                    })
                  ),
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                    _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                    { label: " " },
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                      Link_button,
                      { cls: "btn-primary", style: { marginRight: "20px" }, on_click: this.change_password },
                      "Change password"
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                      Link_button,
                      { href: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_url() + "/forgot_password", new_tab: true },
                      "Forgot your password?"
                    )
                  )
                )
            ),
            is_active &&
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                { label: T("Subscribed on:") },
                _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_mobile(m) ? "Mobile" : "Desktop"
              ),
            is_active &&
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                { label: T("Subscription:") },
                _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().get_period_with_price(m)
              ),
            is_active &&
              m.cancelled &&
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                null,
                "You cancelled your subscription. It will remain active until ",
                date2display(m.end),
                "."
              ),
            is_active &&
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                null,
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  Row,
                  { cls: "center" },
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                    Link_button,
                    { on_click: this.switch_show_manage },
                    show_manage_subscr ? T("Hide") : T("Manage")
                  )
                ),
                show_manage_subscr &&
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                    "div",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                      _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                      { label: T("Started on:") },
                      _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().period_start_str(m)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                      _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                      { label: T(m.period == "1 D" ? "Expires on:" : "Next renewal:") },
                      _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().period_end_str(m)
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                      _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                      { label: T("Payment method:") },
                      _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().payment_label(m),
                      m.gateway == "avangate" &&
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                          "div",
                          null,
                          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            Link_button,
                            { on_click: this.avangate_update_cc },
                            "Update Credit card"
                          )
                        ),
                      this.render_alerts(["avangate_update_cc"])
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                      _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                      { label: T("Subscription status:") },
                      status,
                      _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_cancellable(m) &&
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                          "div",
                          null,
                          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                            Link_button,
                            { on_click: this.switch_show_cancel },
                            "Cancel subscription"
                          ),
                          show_cancel_modal &&
                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Cancel_modal, {
                              close: this.switch_show_cancel,
                              user,
                              membership: m
                            })
                        )
                    ),
                    _svc_account_pub_membership_js__WEBPACK_IMPORTED_MODULE_15___default().is_cancellable_mobile(m) &&
                      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                        _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.PH,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Mobile_cancel_notice, { membership: m })
                      )
                  )
              ),
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              Link_line,
              { href: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_url() + "/cp" },
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "My account")
            )
          );
        }
      }
      function Rule_item(props) {
        let rule = props.rule,
          href = props.href,
          cls = props.cls,
          on_remove = props.on_remove,
          on_switch = props.on_switch,
          title = props.title;
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "li",
          { key: rule.name, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rule-item", cls) },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
            className: "icon-" + (props.icon || rule.mode || "unblock")
          }),
          !rule.mitm &&
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "div",
              { className: "f32" },
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "flag " + rule.country })
            ),
          href &&
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "a",
              { className: "rule-name", href, target: "_blank", rel: "noopener noreferrer" },
              rule.name
            ),
          title &&
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "div",
              { className: "rule-name" },
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, title)
            ),
          on_switch && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Switch, { checked: rule.enabled, on_change: on_switch }),
          on_remove &&
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
              className: "icon-remove",
              title: T("Delete"),
              onClick: () => on_remove(rule)
            })
        );
      }
      class Unblock extends react__WEBPACK_IMPORTED_MODULE_2___default().Component {
        constructor(...args) {
          super(...args);
          _defineProperty(this, "state", {});
          _defineProperty(this, "update_rules", () => {
            this.setState({ rules: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_rules() });
            let _this = this;
            return _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
              _this.setState({ mitm_rules: yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_mitm_rules() });
            });
          });
          _defineProperty(
            this,
            "get_rule_url",
            (rule) =>
              "http://" +
              (_util_url_js__WEBPACK_IMPORTED_MODULE_7___default().get_host(
                _util_url_js__WEBPACK_IMPORTED_MODULE_7___default().add_proto(rule.link || "") + "/"
              ) || rule.name)
          );
          _defineProperty(this, "remove_rule", (rule) => {
            _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
              if (rule.mitm) yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.mitm_remove_rule(rule.name);
              let opt = assign(
                { enabled: 0, del: 1 },
                underscore__WEBPACK_IMPORTED_MODULE_0___default().pick(rule, "sid", "name", "type", "country")
              );
              yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.set_rule(opt);
              _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.fetch_rules();
            });
          });
          _defineProperty(this, "render_rule", (rule) =>
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Rule_item, {
              key: rule.name,
              rule,
              href: this.get_rule_url(rule),
              on_remove: this.remove_rule,
              cls: { "rule-disabled": !rule.enabled }
            })
          );
        }
        componentDidMount() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("rule_changed mitm_change", this.update_rules);
          this.update_rules();
        }
        componentWillUnmount() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.off("rule_changed mitm_change", this.update_rules);
        }
        get_rules() {
          let state = this.state;
          let rules = [],
            sites = new Set();
          Object.values(_util_util_js__WEBPACK_IMPORTED_MODULE_6___default().get(state, "rules.unblocker_rules", {})).forEach((rule) => {
            if (!_bext_vpn_util_util_js__WEBPACK_IMPORTED_MODULE_13___default().is_all_browser(rule)) rules.push(rule);
            sites.add(rule.name);
          });
          var _iterator = _createForOfIteratorHelper(state.mitm_rules || []),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              let r = _step.value;
              if (sites.has(r.root_url)) continue;
              rules.push({ name: r.root_url, url: r.root_url, enabled: false, mitm: true });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return rules;
        }
        render() {
          let rules = this.get_rules();
          let country = this.props.country;
          let popular_url =
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_url() +
            "/access/popular" +
            (country ? "/" + country.toLowerCase() : "") +
            "?utm_source=holaext_settings";
          return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.$0,
            { title: T("Unblock") },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "ul",
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                "li",
                { className: "sub-section" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  "h3",
                  { className: "title" },
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "Sites")
                ),
                !!rules.length && react__WEBPACK_IMPORTED_MODULE_2___default().createElement("ul", null, rules.map(this.render_rule)),
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  "a",
                  { className: "popular-btn", target: "_blank", rel: "noopener noreferrer", href: popular_url },
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "Unblock more sites...")
                )
              )
            )
          );
        }
      }
      const Privacy_modal = (props) => {
        let get_plus = react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          "a",
          {
            className: "upgrade-btn",
            href: "",
            onClick: () => _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.open_plus_page("", "p2p_settings")
          },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "Upgrade to"),
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement("i", { className: "icon-plus" })
        );
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.u_,
          { title: T("Upgrade to"), action: get_plus, on_close: props.on_close },
          props.children
        );
      };
      const Privacy = (props) => {
        let is_plus = props.is_plus,
          svc_version = props.svc_version,
          _props$user = props.user,
          user = _props$user === void 0 ? {} : _props$user;
        let _useState = useState(true),
          _useState2 = _slicedToArray(_useState, 2),
          p2p = _useState2[0],
          set_p2p = _useState2[1];
        let _useState3 = useState(is_plus && user && user.no_log),
          _useState4 = _slicedToArray(_useState3, 2),
          no_log = _useState4[0],
          set_no_log = _useState4[1];
        let _useState5 = useState(),
          _useState6 = _slicedToArray(_useState5, 2),
          modal = _useState6[0],
          set_modal = _useState6[1];
        let on_change = (type, val, set_val) => () =>
          _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
            set_val(!val);
            if (!is_plus) {
              yield _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default().sleep(100);
              set_val(val);
              set_modal(type);
            } else if (type == "no_log") {
              yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.hola_api_call("users/set_no_log", {
                method: "POST",
                text: true,
                data: { no_log: !val }
              });
              yield _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.refresh_user({ force_premium: true, reason: "set_no_log" });
            }
          });
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.$0,
          { title: T("Privacy") },
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            "ul",
            null,
            false && 0,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "li",
              { className: "settings-item" },
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "No logs"),
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Switch, {
                checked: no_log,
                on_change: on_change("no_log", no_log, set_no_log)
              })
            )
          ),
          modal &&
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              Privacy_modal,
              { on_close: () => set_modal(false) },
              false && 0,
              modal == "no_log" &&
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "Upgrade to Premium to stop sending activity logs")
            )
        );
      };
      class Legal extends react__WEBPACK_IMPORTED_MODULE_2___default().Component {
        constructor(...args) {
          super(...args);
          _defineProperty(this, "state", {});
          _defineProperty(this, "update_agree_ts", () =>
            this.setState({ agree_ts: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_agree_ts() })
          );
          _defineProperty(this, "show_privacy", (e) => {
            e.preventDefault();
            this.setState({ modal: true });
          });
          _defineProperty(this, "hide_privacy", () => this.setState({ modal: false }));
          _defineProperty(this, "on_change", () => {
            let agree_ts = this.state.agree_ts ? "" : Date.now();
            this.setState({ agree_ts });
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.set_agree_ts(agree_ts);
          });
        }
        componentDidMount() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("agree_ts_changed", this.update_agree_ts);
          this.update_agree_ts();
        }
        componentWillUnmount() {
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("agree_ts_changed", this.update_agree_ts);
        }
        render_modal() {
          return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.u_,
            {
              className: "page-modal-legal",
              title: _bext_vpn_ui_privacy_js__WEBPACK_IMPORTED_MODULE_14__.Z.title,
              on_close: this.hide_privacy
            },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_bext_vpn_ui_privacy_js__WEBPACK_IMPORTED_MODULE_14__.Z.Text, null)
          );
        }
        render() {
          return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.$0,
            { title: T("Legal"), cls: "section-legal" },
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              "ul",
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                "li",
                { className: "settings-item" },
                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                  Label_checkbox,
                  { onChange: this.on_change, checked: !!this.state.agree_ts },
                  "I agree that Hola can use my personal information as described in the ",
                  " ",
                  react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
                    "a",
                    { href: "", onClick: this.show_privacy, onMouseDown: (e) => e.preventDefault() },
                    _bext_vpn_ui_privacy_js__WEBPACK_IMPORTED_MODULE_14__.Z.title
                  )
                )
              )
            ),
            this.state.modal && this.render_modal()
          );
        }
      }
      const Settings = () => {
        const get_user_info = () => ({
          user: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_user(),
          is_plus: _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_is_premium()
        });
        const _useState7 = useState(get_user_info()),
          _useState8 = _slicedToArray(_useState7, 2),
          user_info = _useState8[0],
          set_user_info = _useState8[1];
        const _useState9 = useState(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_svc_version()),
          _useState10 = _slicedToArray(_useState9, 2),
          svc_version = _useState10[0],
          set_svc_version = _useState10[1];
        const _useState11 = useState(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_country()),
          _useState12 = _slicedToArray(_useState11, 2),
          country = _useState12[0],
          set_country = _useState12[1];
        useEffect(() => {
          perr("settings_show");
          const update_user = () => set_user_info(get_user_info());
          const update_country = () => set_country(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_country());
          const update_svc_version = () => set_svc_version(_bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.get_svc_version());
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("user_changed", update_user);
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("country_changed", update_country);
          _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.on("svc_version_changed", update_svc_version);
          return () => {
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.off("user_changed", update_user);
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.off("country_changed", update_country);
            _bext_vpn_ui_ui_api_js__WEBPACK_IMPORTED_MODULE_11__.Z.off("svc_version_changed", update_svc_version);
          };
        }, []);
        return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
          _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.f6,
          _extends({}, user_info, { title: T("Settings"), cls: "settings" }),
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Report_problem, null),
          user_info.user && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Account_details, user_info),
          !_bext_pub_util_js__WEBPACK_IMPORTED_MODULE_9___default().full_browser_mode() &&
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Unblock, { country, is_plus: user_info.is_plus }),
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Privacy, _extends({}, user_info, { svc_version })),
          !!conf__WEBPACK_IMPORTED_MODULE_4__.check_agree_ts && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Legal, null),
          react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
            _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.St,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(
              Link_line,
              { href: "about.html" },
              react__WEBPACK_IMPORTED_MODULE_2___default().createElement(T, null, "About")
            )
          )
        );
      };
      const init = () =>
        _util_etask_js__WEBPACK_IMPORTED_MODULE_8___default()(function* () {
          yield (0, _bext_vpn_ui_page_lib_js__WEBPACK_IMPORTED_MODULE_12__.VV)();
          let root = react_dom__WEBPACK_IMPORTED_MODULE_3___default().createRoot(document.querySelector(".react-root"));
          root.render(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Settings, null));
        });
    }
  }
]);
//# sourceMappingURL=https://hola.org/be_source_map/1.216.954/805.bundle.js.map?build=nopeer_v2
