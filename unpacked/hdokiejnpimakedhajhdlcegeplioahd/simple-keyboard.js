function _extends() {
  return (_extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e],
          o;
        for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
      }
      return t;
    }).apply(this, arguments);
}
function _instanceof(t, e) {
  return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? e[Symbol.hasInstance](t) : t instanceof e;
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(t);
}
!(function (t, e) {
  "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
  "object" === ("undefined" == typeof module ? "undefined" : _typeof(module))
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("SimpleKeyboard", [], e)
    : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports))
    ? (exports.SimpleKeyboard = e())
    : (t.SimpleKeyboard = e());
})(window, function () {
  return (
    (n = [
      function (t, e, n) {
        t.exports = n(2);
      },
      function (t, e, n) {},
      function (t, e, n) {
        "use strict";
        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        n.r(e), n(1);
        var i =
            (o(u.prototype, [
              {
                key: "initKeyboardListener",
                value: function () {
                  var n = this;
                  document.addEventListener("keydown", function (t) {
                    var e;
                    n.simpleKeyboardInstance.options.physicalKeyboardHighlight &&
                      ((e = n.getSimpleKeyboardLayoutKey(t)),
                      n.simpleKeyboardInstance.dispatch(function (t) {
                        var t = t.getButtonElement(e) || t.getButtonElement("{".concat(e, "}"));
                        t &&
                          ((t.style.backgroundColor = n.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor || "#9ab4d0"),
                          (t.style.color = n.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor || "white"));
                      }));
                  }),
                    document.addEventListener("keyup", function (t) {
                      var e;
                      n.simpleKeyboardInstance.options.physicalKeyboardHighlight &&
                        ((e = n.getSimpleKeyboardLayoutKey(t)),
                        n.simpleKeyboardInstance.dispatch(function (t) {
                          var t = t.getButtonElement(e) || t.getButtonElement("{".concat(e, "}"));
                          t && t.removeAttribute && t.removeAttribute("style");
                        }));
                    });
                }
              },
              {
                key: "getSimpleKeyboardLayoutKey",
                value: function (t) {
                  var e;
                  return (e =
                    (e =
                      -1 !== t.code.indexOf("Numpad") ||
                      -1 !== t.code.indexOf("Shift") ||
                      -1 !== t.code.indexOf("Space") ||
                      -1 !== t.code.indexOf("Backspace") ||
                      -1 !== t.code.indexOf("Control") ||
                      -1 !== t.code.indexOf("Alt") ||
                      -1 !== t.code.indexOf("Meta")
                        ? t.code
                        : t.key) !== e.toUpperCase() ||
                    ("F" === t.code[0] && Number.isInteger(Number(t.code[1])) && t.code.length <= 3)
                      ? e.toLowerCase()
                      : e);
                }
              }
            ]),
            u),
          s,
          a;
        function u(t) {
          var e, n;
          if (!_instanceof(this, u)) throw new TypeError("Cannot call a class as a function");
          (this.simpleKeyboardInstance = t),
            (this.initKeyboardListener = this.initKeyboardListener.bind(this)),
            (this.getSimpleKeyboardLayoutKey = this.getSimpleKeyboardLayoutKey.bind(this)),
            this.initKeyboardListener();
        }
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var h =
            (r(
              (l = d),
              (c = [
                {
                  key: "getDefaultLayout",
                  value: function () {
                    return {
                      default: [
                        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                        "{tab} q w e r t y u i o p [ ] \\",
                        "{lock} a s d f g h j k l ; ' {enter}",
                        "{shift} z x c v b n m , . / {shift}",
                        ".com @ {space}"
                      ],
                      shift: [
                        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                        "{tab} Q W E R T Y U I O P { } |",
                        '{lock} A S D F G H J K L : " {enter}',
                        "{shift} Z X C V B N M < > ? {shift}",
                        ".com @ {space}"
                      ]
                    };
                  }
                }
              ])
            ),
            d),
          l,
          c;
        function d() {
          var t, e;
          if (!_instanceof(this, d)) throw new TypeError("Cannot call a class as a function");
        }
        function p(t) {
          return (p =
            "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator)
              ? function (t) {
                  return _typeof(t);
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
                })(t);
        }
        function f(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        var m =
            (f(g.prototype, [
              {
                key: "getButtonClass",
                value: function (t) {
                  var e = -1 !== t.indexOf("{") && -1 !== t.indexOf("}") && "{//}" !== t ? "functionBtn" : "standardBtn",
                    t = t.replace("{", "").replace("}", ""),
                    n = "";
                  return "standardBtn" != e && (n = " hg-button-".concat(t)), "hg-".concat(e).concat(n);
                }
              },
              {
                key: "getDefaultDiplay",
                value: function () {
                  return {
                    "{bksp}": "backspace",
                    "{backspace}": "backspace",
                    "{enter}": "< enter",
                    "{shift}": "shift",
                    "{shiftleft}": "shift",
                    "{shiftright}": "shift",
                    "{alt}": "alt",
                    "{s}": "shift",
                    "{tab}": "tab",
                    "{lock}": "caps",
                    "{capslock}": "caps",
                    "{accept}": "Submit",
                    "{space}": " ",
                    "{//}": " ",
                    "{esc}": "esc",
                    "{escape}": "esc",
                    "{f1}": "f1",
                    "{f2}": "f2",
                    "{f3}": "f3",
                    "{f4}": "f4",
                    "{f5}": "f5",
                    "{f6}": "f6",
                    "{f7}": "f7",
                    "{f8}": "f8",
                    "{f9}": "f9",
                    "{f10}": "f10",
                    "{f11}": "f11",
                    "{f12}": "f12",
                    "{numpaddivide}": "/",
                    "{numlock}": "lock",
                    "{arrowup}": "↑",
                    "{arrowleft}": "←",
                    "{arrowdown}": "↓",
                    "{arrowright}": "→",
                    "{prtscr}": "print",
                    "{scrolllock}": "scroll",
                    "{pause}": "pause",
                    "{insert}": "ins",
                    "{home}": "home",
                    "{pageup}": "up",
                    "{delete}": "del",
                    "{end}": "end",
                    "{pagedown}": "down",
                    "{numpadmultiply}": "*",
                    "{numpadsubtract}": "-",
                    "{numpadadd}": "+",
                    "{numpadenter}": "enter",
                    "{period}": ".",
                    "{numpaddecimal}": ".",
                    "{numpad0}": "0",
                    "{numpad1}": "1",
                    "{numpad2}": "2",
                    "{numpad3}": "3",
                    "{numpad4}": "4",
                    "{numpad5}": "5",
                    "{numpad6}": "6",
                    "{numpad7}": "7",
                    "{numpad8}": "8",
                    "{numpad9}": "9"
                  };
                }
              },
              {
                key: "getButtonDisplayName",
                value: function (t, e, n) {
                  return (e = n ? _extends({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
                }
              },
              {
                key: "getUpdatedInput",
                value: function (t, e, n, o, i) {
                  var e = e;
                  return (
                    ("{bksp}" === t || "{backspace}" === t) && 0 < e.length
                      ? (e = this.removeAt(e, o, i))
                      : "{space}" === t
                      ? (e = this.addStringAt(e, " ", o, i))
                      : "{tab}" !== t || ("boolean" == typeof n.tabCharOnTab && !1 === n.tabCharOnTab)
                      ? ("{enter}" !== t && "{numpadenter}" !== t) || !n.newLineOnEnter
                        ? -1 !== t.indexOf("numpad") && Number.isInteger(Number(t[t.length - 2]))
                          ? (e = this.addStringAt(e, t[t.length - 2], o, i))
                          : "{numpaddivide}" === t
                          ? (e = this.addStringAt(e, "/", o, i))
                          : "{numpadmultiply}" === t
                          ? (e = this.addStringAt(e, "*", o, i))
                          : "{numpadsubtract}" === t
                          ? (e = this.addStringAt(e, "-", o, i))
                          : "{numpadadd}" === t
                          ? (e = this.addStringAt(e, "+", o, i))
                          : "{numpaddecimal}" === t
                          ? (e = this.addStringAt(e, ".", o, i))
                          : ("{" === t || "}" === t || (-1 === t.indexOf("{") && -1 === t.indexOf("}"))) &&
                            (e = this.addStringAt(e, t, o, i))
                        : (e = this.addStringAt(e, "\n", o, i))
                      : (e = this.addStringAt(e, "\t", o, i)),
                    e
                  );
                }
              },
              {
                key: "updateCaretPos",
                value: function (t, e) {
                  var n = this.updateCaretPosAction(this.simpleKeyboardInstance, t, e);
                  this.simpleKeyboardInstance.options.syncInstanceInputs &&
                    this.simpleKeyboardInstance.dispatch(function (t) {
                      t.caretPosition = n;
                    });
                }
              },
              {
                key: "updateCaretPosAction",
                value: function (t, e, n) {
                  return (
                    n ? 0 < t.caretPosition && (t.caretPosition = t.caretPosition - e) : (t.caretPosition = t.caretPosition + e),
                    this.simpleKeyboardInstance.options.debug &&
                      console.log("Caret at:", t.caretPosition, "(".concat(t.keyboardDOMClass, ")")),
                    t.caretPosition
                  );
                }
              },
              {
                key: "addStringAt",
                value: function (t, e, n, o) {
                  var i;
                  return (
                    n || 0 === n
                      ? ((i = [t.slice(0, n), e, t.slice(n)].join("")), this.isMaxLengthReached() || (o && this.updateCaretPos(e.length)))
                      : (i = t + e),
                    i
                  );
                }
              },
              {
                key: "removeAt",
                value: function (t, e, n) {
                  var o, i;
                  return 0 === this.simpleKeyboardInstance.caretPosition
                    ? t
                    : ((i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g),
                      e && 0 <= e
                        ? t.substring(e - 2, e).match(i)
                          ? ((o = t.substr(0, e - 2) + t.substr(e)), n && this.updateCaretPos(2, !0))
                          : ((o = t.substr(0, e - 1) + t.substr(e)), n && this.updateCaretPos(1, !0))
                        : t.slice(-2).match(i)
                        ? ((o = t.slice(0, -2)), n && this.updateCaretPos(2, !0))
                        : ((o = t.slice(0, -1)), n && this.updateCaretPos(1, !0)),
                      o);
                }
              },
              {
                key: "handleMaxLength",
                value: function (t, e, n) {
                  var o = e.maxLength,
                    t = t[e.inputName],
                    i = t.length === o,
                    n;
                  return (
                    !(n.length <= t.length) &&
                    (Number.isInteger(o)
                      ? (e.debug && console.log("maxLength (num) reached:", i),
                        i ? (this.maxLengthReached = !0) : (this.maxLengthReached = !1))
                      : "object" === p(o)
                      ? ((n = t.length === o[e.inputName]),
                        e.debug && console.log("maxLength (obj) reached:", n),
                        n ? (this.maxLengthReached = !0) : (this.maxLengthReached = !1))
                      : void 0)
                  );
                }
              },
              {
                key: "isMaxLengthReached",
                value: function () {
                  return Boolean(this.maxLengthReached);
                }
              },
              {
                key: "camelCase",
                value: function (t) {
                  return t
                    .toLowerCase()
                    .trim()
                    .split(/[.\-_\s]/g)
                    .reduce(function (t, e) {
                      return e.length ? t + e[0].toUpperCase() + e.slice(1) : t;
                    });
                }
              },
              {
                key: "countInArray",
                value: function (t, n) {
                  return t.reduce(function (t, e) {
                    return t + (e === n);
                  }, 0);
                }
              }
            ]),
            g),
          y,
          b;
        function g(t) {
          var e, n;
          if (!_instanceof(this, g)) throw new TypeError("Cannot call a class as a function");
          (this.simpleKeyboardInstance = t),
            (this.getButtonClass = this.getButtonClass.bind(this)),
            (this.getButtonDisplayName = this.getButtonDisplayName.bind(this)),
            (this.getUpdatedInput = this.getUpdatedInput.bind(this)),
            (this.updateCaretPos = this.updateCaretPos.bind(this)),
            (this.updateCaretPosAction = this.updateCaretPosAction.bind(this)),
            (this.isMaxLengthReached = this.isMaxLengthReached.bind(this)),
            (this.camelCase = this.camelCase.bind(this)),
            (this.countInArray = this.countInArray.bind(this));
        }
        function v(t) {
          return (v =
            "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator)
              ? function (t) {
                  return _typeof(t);
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
                })(t);
        }
        function k(t, e) {
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(t, o.key, o);
          }
        }
        function I(t, e, n) {
          e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n);
        }
        var n =
            (k(M.prototype, [
              {
                key: "handleButtonClicked",
                value: function (t) {
                  var e = this.options.debug;
                  if ("{//}" === t) return !1;
                  "function" == typeof this.options.onKeyPress && this.options.onKeyPress(t),
                    this.input[this.options.inputName] || (this.input[this.options.inputName] = "");
                  var n = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.options, this.caretPosition);
                  if (this.input[this.options.inputName] !== n) {
                    if (this.options.maxLength && this.utilities.handleMaxLength(this.input, this.options, n)) return !1;
                    (this.input[this.options.inputName] = this.utilities.getUpdatedInput(
                      t,
                      this.input[this.options.inputName],
                      this.options,
                      this.caretPosition,
                      !0
                    )),
                      e && console.log("Input changed:", this.input),
                      this.options.syncInstanceInputs && this.syncInstanceInputs(this.input),
                      "function" == typeof this.options.onChange && this.options.onChange(this.input[this.options.inputName]);
                  }
                  e && console.log("Key pressed:", t);
                }
              },
              {
                key: "handleButtonMouseDown",
                value: function (t, e) {
                  var n = this;
                  (this.isMouseHold = !0),
                    this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout),
                    this.holdTimeout && clearTimeout(this.holdTimeout),
                    (this.holdTimeout = setTimeout(function () {
                      n.isMouseHold &&
                        ((-1 === t.indexOf("{") && -1 === t.indexOf("}")) || "{bksp}" === t || "{space}" === t || "{tab}" === t) &&
                        (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t, e)),
                        clearTimeout(n.holdTimeout);
                    }, 500));
                }
              },
              {
                key: "handleButtonMouseUp",
                value: function () {
                  (this.isMouseHold = !1), this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout);
                }
              },
              {
                key: "handleButtonHold",
                value: function (t) {
                  var e = this;
                  this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout),
                    (this.holdInteractionTimeout = setTimeout(function () {
                      e.isMouseHold ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
                    }, 100));
                }
              },
              {
                key: "syncInstanceInputs",
                value: function () {
                  var e = this;
                  this.dispatch(function (t) {
                    t.replaceInput(e.input);
                  });
                }
              },
              {
                key: "clearInput",
                value: function (t) {
                  (t = t || this.options.inputName),
                    (this.input[t] = ""),
                    this.options.syncInstanceInputs && this.syncInstanceInputs(this.input);
                }
              },
              {
                key: "getInput",
                value: function (t) {
                  return (
                    (t = t || this.options.inputName),
                    this.options.syncInstanceInputs && this.syncInstanceInputs(this.input),
                    this.input[this.options.inputName]
                  );
                }
              },
              {
                key: "setInput",
                value: function (t, e) {
                  (e = e || this.options.inputName),
                    (this.input[e] = t),
                    this.options.syncInstanceInputs && this.syncInstanceInputs(this.input);
                }
              },
              {
                key: "replaceInput",
                value: function (t) {
                  this.input = t;
                }
              },
              {
                key: "clear",
                value: function () {
                  (this.keyboardDOM.innerHTML = ""), (this.keyboardDOM.className = this.keyboardDOMClass), (this.buttonElements = {});
                }
              },
              {
                key: "dispatch",
                value: function (e) {
                  if (window.SimpleKeyboardInstances)
                    return Object.keys(window.SimpleKeyboardInstances).forEach(function (t) {
                      e(window.SimpleKeyboardInstances[t], t);
                    });
                  throw (
                    (console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR"))
                  );
                }
              },
              {
                key: "addButtonTheme",
                value: function (t, e) {
                  var s = this;
                  if (!e || !t) return !1;
                  t.split(" ").forEach(function (i) {
                    e.split(" ").forEach(function (n) {
                      s.options.buttonTheme || (s.options.buttonTheme = []);
                      var o = !1;
                      s.options.buttonTheme.map(function (t) {
                        var e;
                        return (
                          -1 !== t.class.split(" ").indexOf(n) &&
                            ((o = !0), -1 === (e = t.buttons.split(" ")).indexOf(i)) &&
                            ((o = !0), e.push(i), (t.buttons = e.join(" "))),
                          t
                        );
                      }),
                        o || s.options.buttonTheme.push({ class: n, buttons: t });
                    });
                  }),
                    this.render();
                }
              },
              {
                key: "removeButtonTheme",
                value: function (t, i) {
                  var s = this;
                  if (!t && !i) return (this.options.buttonTheme = []), this.render(), !1;
                  t &&
                    Array.isArray(this.options.buttonTheme) &&
                    this.options.buttonTheme.length &&
                    (t.split(" ").forEach(function (o, t) {
                      s.options.buttonTheme.map(function (t, e) {
                        var n;
                        return (
                          ((i && -1 !== i.indexOf(t.class)) || !i) &&
                            ((n = t.buttons.split(" ").filter(function (t) {
                              return t !== o;
                            })).length
                              ? (t.buttons = n.join(" "))
                              : (s.options.buttonTheme.splice(e, 1), (t = null))),
                          t
                        );
                      });
                    }),
                    this.render());
                }
              },
              {
                key: "getButtonElement",
                value: function (t) {
                  var e,
                    t = this.buttonElements[t];
                  return (e = t ? (1 < t.length ? t : t[0]) : e);
                }
              },
              {
                key: "handleCaret",
                value: function () {
                  this.caretPosition = null;
                  var t = window.SimpleKeyboardInstances;
                  ((t && Object.keys(t)[0] === this.utilities.camelCase(this.keyboardDOMClass)) || !t) &&
                    (this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")")),
                    document.addEventListener("keyup", this.caretEventHandler),
                    document.addEventListener("mouseup", this.caretEventHandler),
                    document.addEventListener("touchend", this.caretEventHandler));
                }
              },
              {
                key: "caretEventHandler",
                value: function (e) {
                  var n;
                  e.target.tagName && (n = e.target.tagName.toLowerCase()),
                    this.dispatch(function (t) {
                      t.isMouseHold && (t.isMouseHold = !1),
                        ("textarea" !== n && "input" !== n) ||
                          t.options.disableCaretPositioning ||
                          ((t.caretPosition = e.target.selectionStart),
                          t.options.debug &&
                            console.log(
                              "Caret at: ",
                              e.target.selectionStart,
                              e.target.tagName.toLowerCase(),
                              "(".concat(t.keyboardDOMClass, ")")
                            ));
                    });
                }
              },
              {
                key: "onInit",
                value: function () {
                  this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")),
                    this.handleCaret(),
                    "function" == typeof this.options.onInit && this.options.onInit();
                }
              },
              {
                key: "onRender",
                value: function () {
                  "function" == typeof this.options.onRender && this.options.onRender();
                }
              },
              {
                key: "onModulesLoaded",
                value: function () {
                  "function" == typeof this.options.onModulesLoaded && this.options.onModulesLoaded();
                }
              },
              {
                key: "loadModules",
                value: function () {
                  var n = this;
                  Array.isArray(this.options.modules) &&
                    (this.options.modules.forEach(function (t) {
                      var t = new t(),
                        e;
                      t.constructor.name &&
                        "Function" !== t.constructor.name &&
                        ((e = "module-".concat(n.utilities.camelCase(t.constructor.name))),
                        (n.keyboardPluginClasses = n.keyboardPluginClasses + " ".concat(e))),
                        t.init(n);
                    }),
                    (this.keyboardPluginClasses = this.keyboardPluginClasses + " modules-loaded"),
                    this.render(),
                    this.onModulesLoaded());
                }
              },
              {
                key: "render",
                value: function () {
                  var r = this,
                    t = (this.clear(), "hg-layout-".concat(this.options.layoutName)),
                    e = this.options.layout || h.getDefaultLayout(),
                    l = this.options.useTouchEvents || !1,
                    c = {};
                  Array.isArray(this.options.buttonTheme) &&
                    this.options.buttonTheme.forEach(function (n) {
                      var t;
                      n.buttons && n.class
                        ? (t = "string" == typeof n.buttons ? n.buttons.split(" ") : t) &&
                          t.forEach(function (t) {
                            var e = c[t];
                            e
                              ? r.utilities.countInArray(e.split(" "), n.class) || (c[t] = "".concat(e, " ").concat(n.class))
                              : (c[t] = n.class);
                          })
                        : console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.');
                    }),
                    (this.keyboardDOM.className += " ".concat(this.options.theme, " ").concat(t, " ").concat(this.keyboardPluginClasses)),
                    e[this.options.layoutName].forEach(function (t, a) {
                      var t = t.split(" "),
                        u = document.createElement("div");
                      (u.className += "hg-row"),
                        t.forEach(function (e, t) {
                          var n = r.utilities.getButtonClass(e),
                            o = c[e],
                            i = r.utilities.getButtonDisplayName(e, r.options.display, r.options.mergeDisplay),
                            s = r.options.useButtonTag ? "button" : "div",
                            s = document.createElement(s),
                            n =
                              ((s.className += "hg-button ".concat(n).concat(o ? " " + o : "")),
                              l
                                ? ((s.ontouchstart = function (t) {
                                    r.handleButtonClicked(e), r.handleButtonMouseDown(e, t);
                                  }),
                                  (s.ontouchend = function (t) {
                                    return r.handleButtonMouseUp();
                                  }),
                                  (s.ontouchcancel = function (t) {
                                    return r.handleButtonMouseUp();
                                  }))
                                : ((s.onclick = function () {
                                    (r.isMouseHold = !1), r.handleButtonClicked(e);
                                  }),
                                  (s.onmousedown = function (t) {
                                    r.options.preventMouseDownDefault && t.preventDefault(), r.handleButtonMouseDown(e, t);
                                  })),
                              s.setAttribute("data-skBtn", e),
                              "".concat(r.options.layoutName, "-r").concat(a, "b").concat(t)),
                            o =
                              (s.setAttribute("data-skBtnUID", n), s.setAttribute("data-displayLabel", i), document.createElement("span"));
                          (o.innerHTML = i),
                            s.appendChild(o),
                            r.buttonElements[e] || (r.buttonElements[e] = []),
                            r.buttonElements[e].push(s),
                            u.appendChild(s);
                        }),
                        r.keyboardDOM.appendChild(u);
                    }),
                    this.onRender(),
                    this.initialized ||
                      ((this.initialized = !0),
                      l ||
                        (document.onmouseup = function () {
                          return r.handleButtonMouseUp();
                        }),
                      this.onInit());
                }
              }
            ]),
            M),
          C,
          w;
        function M() {
          var n = this,
            t = this,
            e = M;
          if (!_instanceof(t, e)) throw new TypeError("Cannot call a class as a function");
          I(this, "setOptions", function (t) {
            (n.options = _extends(n.options, (t = t || {}))), n.render();
          }),
            I(this, "registerModule", function (t, e) {
              n.modules[t] || (n.modules[t] = {}), e(n.modules[t]);
            }),
            I(this, "getModuleProp", function (t, e) {
              return !!n.modules[t] && n.modules[t][e];
            }),
            I(this, "getModulesList", function () {
              return Object.keys(n.modules);
            });
          var t =
              "string" == typeof (arguments.length <= 0 ? void 0 : arguments[0])
                ? arguments.length <= 0
                  ? void 0
                  : arguments[0]
                : ".simple-keyboard",
            e,
            e =
              (e =
                "object" === v(arguments.length <= 0 ? void 0 : arguments[0])
                  ? arguments.length <= 0
                    ? void 0
                    : arguments[0]
                  : arguments.length <= 1
                  ? void 0
                  : arguments[1]) || {};
          if (
            ((this.utilities = new m(this)),
            (this.keyboardDOM = document.querySelector(t)),
            (this.options = e),
            (this.options.layoutName = this.options.layoutName || "default"),
            (this.options.theme = this.options.theme || "hg-theme-default"),
            (this.options.inputName = this.options.inputName || "default"),
            (this.options.preventMouseDownDefault = this.options.preventMouseDownDefault || !1),
            (this.keyboardPluginClasses = ""),
            (this.handleButtonClicked = this.handleButtonClicked.bind(this)),
            (this.syncInstanceInputs = this.syncInstanceInputs.bind(this)),
            (this.clearInput = this.clearInput.bind(this)),
            (this.getInput = this.getInput.bind(this)),
            (this.setInput = this.setInput.bind(this)),
            (this.replaceInput = this.replaceInput.bind(this)),
            (this.clear = this.clear.bind(this)),
            (this.dispatch = this.dispatch.bind(this)),
            (this.addButtonTheme = this.addButtonTheme.bind(this)),
            (this.removeButtonTheme = this.removeButtonTheme.bind(this)),
            (this.getButtonElement = this.getButtonElement.bind(this)),
            (this.handleCaret = this.handleCaret.bind(this)),
            (this.caretEventHandler = this.caretEventHandler.bind(this)),
            (this.onInit = this.onInit.bind(this)),
            (this.onRender = this.onRender.bind(this)),
            (this.render = this.render.bind(this)),
            (this.loadModules = this.loadModules.bind(this)),
            (this.handleButtonMouseUp = this.handleButtonMouseUp.bind(this)),
            (this.handleButtonMouseDown = this.handleButtonMouseDown.bind(this)),
            (this.handleButtonHold = this.handleButtonHold.bind(this)),
            (this.onModulesLoaded = this.onModulesLoaded.bind(this)),
            (this.input = {}),
            (this.input[this.options.inputName] = ""),
            (this.keyboardDOMClass = t.split(".").join("")),
            (this.buttonElements = {}),
            !this.keyboardDOM)
          )
            throw (console.warn('"'.concat(t, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR"));
          this.render(),
            window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}),
            ((window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)] = this).physicalKeyboardInterface = new i(
              this
            )),
            (this.modules = {}),
            this.loadModules();
        }
        e.default = n;
      }
    ]),
    (o = {}),
    (i.m = n),
    (i.c = o),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 0))
  );
  function i(t) {
    var e;
    return (o[t] || ((e = o[t] = { i: t, l: !1, exports: {} }), n[t].call(e.exports, e, e.exports, i), (e.l = !0), e)).exports;
  }
  var n, o;
});
