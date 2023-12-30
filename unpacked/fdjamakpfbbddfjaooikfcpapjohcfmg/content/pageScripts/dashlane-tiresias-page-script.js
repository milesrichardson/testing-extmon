(() => {
  "use strict";
  var t = {
      4179: (t, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.interceptWebkitAnimations = void 0),
          (e.interceptWebkitAnimations = () => {
            const t = {
              apply(t, e, T) {
                var n, o;
                const [E] = T;
                return (
                  "animationend" === E &&
                    (null === (n = document.getElementById("tiresias")) ||
                      void 0 === n ||
                      n.setAttribute("animation-event-switch", "true")),
                  "transitionend" === E &&
                    (null === (o = document.getElementById("tiresias")) ||
                      void 0 === o ||
                      o.setAttribute("transition-event-switch", "true")),
                  Reflect.apply(t, e, T)
                );
              }
            };
            EventTarget.prototype.addEventListener = new Proxy(EventTarget.prototype.addEventListener, t);
          });
      },
      11234: function (t, e, T) {
        var n =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.interceptAttachShadow = e.TRIX_EDITOR_PARENT_TYPES = e.TRIX_GLOBAL_WINDOW_PROPERTY = void 0);
        const o = n(T(84958));
        (e.TRIX_GLOBAL_WINDOW_PROPERTY = "Trix"), (e.TRIX_EDITOR_PARENT_TYPES = ["trix-editor", "figure"]);
        const E = e.TRIX_EDITOR_PARENT_TYPES.join(",");
        e.interceptAttachShadow = function () {
          const t = Element.prototype.attachShadow;
          let T = "";
          Object.defineProperty(Element.prototype, "attachShadow", {
            value: function (n) {
              const a = n.mode;
              T || (T = "[native code]");
              const i = t.call(this, { ...n, mode: "open" });
              return (
                "closed" === a && Object.defineProperty(this, "shadowRoot", { value: null }),
                setTimeout(() => {
                  (function (t) {
                    if (!window[e.TRIX_GLOBAL_WINDOW_PROPERTY]) return !1;
                    let T = t.parentElement;
                    for (; T; ) {
                      if (T.closest(E)) return !0;
                      const t = T.getRootNode();
                      T = t instanceof ShadowRoot && t.host ? t.host : null;
                    }
                    return !1;
                  })(this) || this.setAttribute(o.default.SHADOW_HOST_ATTRIBUTE_NAME, "true");
                }, 0),
                i
              );
            }
          });
        };
      },
      84958: (t, e) => {
        var T;
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.StringConstants = e.InputFieldTypology = void 0),
          (function (t) {
            (t[(t.TEXT_BASED = 0)] = "TEXT_BASED"),
              (t[(t.BOX_BASED = 1)] = "BOX_BASED"),
              (t[(t.BUTTON_BASED = 2)] = "BUTTON_BASED"),
              (t[(t.HIDDEN = 3)] = "HIDDEN"),
              (t[(t.OTHER = 4)] = "OTHER");
          })((T = e.InputFieldTypology || (e.InputFieldTypology = {})));
        const n = {
          "": T.TEXT_BASED,
          button: T.BUTTON_BASED,
          checkbox: T.BOX_BASED,
          color: T.OTHER,
          date: T.TEXT_BASED,
          "datetime-local": T.TEXT_BASED,
          email: T.TEXT_BASED,
          file: T.OTHER,
          hidden: T.HIDDEN,
          image: T.BUTTON_BASED,
          month: T.TEXT_BASED,
          number: T.TEXT_BASED,
          password: T.TEXT_BASED,
          radio: T.BOX_BASED,
          range: T.OTHER,
          reset: T.BUTTON_BASED,
          search: T.TEXT_BASED,
          submit: T.BUTTON_BASED,
          tel: T.TEXT_BASED,
          text: T.TEXT_BASED,
          time: T.TEXT_BASED,
          url: T.TEXT_BASED,
          week: T.OTHER
        };
        class o {
          static getInputTypesByTypology(t) {
            return Object.keys(n).filter((e) => n[e] === t);
          }
          static getInputTypesNotInTypology(t) {
            return Object.keys(n).filter((e) => n[e] !== t);
          }
        }
        (e.default = o),
          (e.StringConstants = o),
          (o.CONTEXT_ATTRIBUTE_NAME = "data-dashlane-context"),
          (o.RID_ATTRIBUTE_NAME = "data-dashlane-rid"),
          (o.FORM_TYPE_ATTRIBUTE_NAME = "data-form-type"),
          (o.LABEL_ATTRIBUTE_NAME = "data-dashlane-label"),
          (o.FRAMEID_ATTRIBUTE_NAME = "data-dashlane-frameid"),
          (o.OVERRIDE_ATTRIBUTE_NAME = "data-dashlane-override"),
          (o.INVISIBLE_ATTRIBUTE_NAME = "data-dashlane-invisible"),
          (o.SHADOW_HOST_ATTRIBUTE_NAME = "data-dashlane-shadowhost"),
          (o.TEXT_BASED_INPUT_FIELD_TYPES = o.getInputTypesByTypology(T.TEXT_BASED)),
          (o.BOX_BASED_INPUT_FIELD_TYPES = o.getInputTypesByTypology(T.BOX_BASED)),
          (o.BUTTON_BASED_INPUT_FIELD_TYPES = o.getInputTypesByTypology(T.BUTTON_BASED));
      }
    },
    e = {};
  function T(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var E = (e[n] = { exports: {} });
    return t[n].call(E.exports, E, E.exports, T), E.exports;
  }
  (() => {
    const t = T(4179);
    (0, T(11234).interceptAttachShadow)(), (0, t.interceptWebkitAnimations)();
  })();
})();
