/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/ module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/ __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/ return __webpack_require__((__webpack_require__.s = 3));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function () {
        return VERSION;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function () {
        return TARGET;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () {
        return COOKIE_NAME;
      });
      /* harmony import */ var common_js_constants_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
      /* harmony import */ var common_js_constants_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        common_js_constants_cookies__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
      /* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _config_env__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function () {
        return _config_env__WEBPACK_IMPORTED_MODULE_1__["HOST"];
      });

      const TARGET = "chrome";
      const { version: VERSION } = self.chrome.runtime.getManifest();
      const COOKIE_NAME = common_js_constants_cookies__WEBPACK_IMPORTED_MODULE_0__["EXTENSION_ACTIVE"];

      /***/
    },
    /* 1 */
    /***/ function (module, exports) {
      const AUTOCOMPLETE_URL = "https://ac.ecosia.org";
      const HOST = "https://www.ecosia.org";
      const SEARCH_URL = "https://www.ecosia.org/search";
      const BASE_URL = "https://www.ecosia.org";

      module.exports = {
        AUTOCOMPLETE_URL,
        BASE_URL,
        HOST,
        SEARCH_URL
      };

      /***/
    },
    /* 2 */
    /***/ function (module, exports) {
      module.exports = {
        EXPERIMENT_ENTITY_ID: "ECEI",
        LAST_DISCARDED_NOTIFICATION: "lastDiscardedNotification",
        LAST_READ_NOTIFICATION: "lastReadNotificationTimestamp",
        MAIN: "ECFG",
        HEIMDALL: "ECHA",
        USER_IMPACT: "ECHA",
        LOGIN_BETA: "ECBT",
        TYPETAG_LEGACY: "__tt",
        SEARCHES_AFTER_INSTALL: "ECSAI",
        CONSENT: "ECCC",
        REQUEST_ID: "ECRQ",
        APP_SNOWPLOW_ID: "app_sp",
        UNLEASH: "ECUNL",
        EXTENSION_ACTIVE: "ECEA",
        BRAZE: "ECUE"
      };

      /***/
    },
    /* 3 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
      /* Manage funnel messages in the context of installed extension. */

      const defaultMessage = {
        addon: _constants__WEBPACK_IMPORTED_MODULE_0__[/* TARGET */ "c"],
        version: _constants__WEBPACK_IMPORTED_MODULE_0__[/* VERSION */ "d"]
      };

      const sendMessage = (event) => {
        window.postMessage(JSON.stringify({ ...defaultMessage, event }), "*");
      };

      window.addEventListener("load", () => {
        sendMessage("version");
      });

      /***/
    }
    /******/
  ]
);
