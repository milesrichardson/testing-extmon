!(function (e, t) {
  if ("function" == typeof define && define.amd) define([], t);
  else if ("undefined" != typeof exports) t();
  else {
    t(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  function e(e, a, i, o) {
    if (!e || (e instanceof Array && e.length <= 0)) return i();
    if (((o = o || 0), e instanceof Array)) t(e, 0, a, i, o);
    else {
      n(e, Object.keys(e), 0, a, i, o);
    }
  }
  function t(e, n, a, i, o) {
    if (e.length <= n) return i();
    2 === a.length
      ? a(e[n], function (l) {
          l ? setTimeout(i, o, l) : setTimeout(t, o, e, n + 1, a, i, o);
        })
      : a(n, e[n], function (l) {
          l ? setTimeout(i, o, l) : setTimeout(t, o, e, n + 1, a, i, o);
        });
  }
  function n(e, t, a, i, o, l) {
    if (t.length <= a) return o();
    2 === i.length
      ? i(e[t[a]], function (c) {
          c ? setTimeout(o, l, c) : setTimeout(n, l, e, t, a + 1, i, o, l);
        })
      : i(t[a], e[t[a]], function (c) {
          c ? setTimeout(o, l, c) : setTimeout(n, l, e, t, a + 1, i, o, l);
        });
  }
  function a(e, t) {
    if (!e || e.length <= 0 || !document.activeElement) return t();
    let n = (function (e) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let a,
          i = e.charCodeAt(n),
          o = e.charAt(n),
          l = o.toUpperCase() === o;
        l &&
          ((a = new Event("keydown", { bubbles: !0, cancelable: !0 })),
          (a.__isDjiSyntheticEvent = !0),
          (a.altKey = !1),
          (a.ctrlKey = !1),
          (a.metaKey = !1),
          (a.shiftKey = l),
          (a.code = "Shift"),
          (a.key = "Shift"),
          (a.keyCode = 16),
          (a.which = 16),
          (a.location = 0),
          (a.repeat = !1),
          (a.isComposing = !1)),
          (a = new Event("keydown", { bubbles: !0, cancelable: !0 })),
          (a.__isDjiSyntheticEvent = !0),
          (a.altKey = !1),
          (a.ctrlKey = !1),
          (a.metaKey = !1),
          (a.shiftKey = l),
          (a.code = "KeySynthetic"),
          (a.key = o),
          (a.keyCode = i),
          (a.which = i),
          (a.location = 0),
          (a.repeat = !1),
          (a.isComposing = !1),
          (a = new Event("keypress", { bubbles: !0, cancelable: !0 })),
          (a.__isDjiSyntheticEvent = !0),
          (a.__char = o),
          (a.altKey = !1),
          (a.ctrlKey = !1),
          (a.metaKey = !1),
          (a.shiftKey = l),
          (a.key = o),
          (a.keyCode = i),
          (a.charCode = i),
          (a.which = i),
          (a.location = 0),
          (a.repeat = !1),
          (a.isComposing = !1),
          t.push(a),
          (a = new Event("textInput", { bubbles: !0, cancelable: !0 })),
          (a.__isDjiSyntheticEvent = !0),
          (a.data = o),
          (a.which = 0),
          (a.detail = 0),
          (a.repeat = !1),
          (a.isComposing = !1),
          t.push(a),
          (a = new Event("keyup", { bubbles: !0, cancelable: !0 })),
          (a.__isDjiSyntheticEvent = !0),
          (a.altKey = !1),
          (a.ctrlKey = !1),
          (a.metaKey = !1),
          (a.shiftKey = l),
          (a.code = "KeySynthetic"),
          (a.key = o),
          (a.keyCode = i),
          (a.which = i),
          (a.location = 0),
          (a.repeat = !1),
          (a.isComposing = !1),
          l &&
            ((a = new Event("keyup", { bubbles: !0, cancelable: !0 })),
            (a.__isDjiSyntheticEvent = !0),
            (a.altKey = !1),
            (a.ctrlKey = !1),
            (a.metaKey = !1),
            (a.shiftKey = !1),
            (a.code = "Shift"),
            (a.key = "Shift"),
            (a.keyCode = 16),
            (a.which = 16),
            (a.location = 0),
            (a.repeat = !1),
            (a.isComposing = !1));
      }
      return t;
    })(e);
    l(
      n,
      !0,
      5,
      function (e, t, n) {
        !n && t.__char && document.execCommand("insertText", !1, t.__char);
      },
      function () {
        setTimeout(function () {
          let e = new Event("textInput", { bubbles: !0, cancelable: !0 });
          (e.__isDjiSyntheticEvent = !0),
            (e.data = ""),
            (e.which = 0),
            (e.detail = 0),
            (e.repeat = !1),
            (e.isComposing = !1),
            document.activeElement.dispatchEvent(e),
            setTimeout(t, 10);
        }, 10);
      }
    );
  }
  function i(e, t, n) {
    let a = t && void 0 !== t.repeats ? t.repeats : 1;
    if (a <= 0) return n();
    const i = "forward" === e ? "ArrowRight" : "ArrowLeft",
      o = "forward" === e ? 39 : 37;
    l(
      s([
        { type: "keydown", key: i, keyCode: o, repeats: a },
        { type: "keyup", key: i, keyCode: o }
      ]),
      !0,
      0,
      function (e, t, n) {},
      n
    );
  }
  function o(t, n) {
    e(
      t,
      function (e, t, n) {
        l(
          (function (e) {
            let t = [],
              n = e.repeats || 1,
              a = !e.hasOwnProperty("repeat");
            for (let i = 0; i < n; i++) a && (e.repeat = Boolean(i > 0)), t.push(c(e));
            return t;
          })(t),
          !1,
          0,
          function (e, n, a) {
            if (t.callbackMessage) {
              let n = new CustomEvent(t.callbackMessage, { detail: { index: e, cancelled: a, params: t } });
              document.documentElement.dispatchEvent(n);
            }
          },
          n
        );
      },
      function () {
        setTimeout(n, 10);
      }
    );
  }
  function l(t, n, a, i, o) {
    let l = document.activeElement;
    if (n)
      e(
        t,
        function (e, t, n) {
          let a = !l.dispatchEvent(t);
          i && i(e, t, a) ? n(!0) : n(!1);
        },
        o,
        a
      );
    else {
      let e = !1,
        n = function (e) {},
        a = function (e) {};
      l.addEventListener("blur", n, !0), l.addEventListener("focus", a, !0);
      for (let n = 0; !e && n < t.length; n++) {
        let a = t[n],
          o = !l.dispatchEvent(a);
        if (i && i(n, a, o)) {
          e = !0;
          break;
        }
      }
      l.removeEventListener("blur", n, !0), l.removeEventListener("focus", a, !0), o(e);
    }
  }
  function c(e) {
    let t = new Event(e.type, { bubbles: !0, cancelable: !0 }),
      n = "keypress" === e.type;
    return (
      (t.__isDjiSyntheticEvent = !0),
      e.hasOwnProperty("id") && (t.__id = e.id),
      (t.altKey = Boolean(e.altKey)),
      (t.ctrlKey = Boolean(e.ctrlKey)),
      (t.metaKey = Boolean(e.metaKey)),
      (t.shiftKey = Boolean(e.shiftKey)),
      (t.key = e.key),
      (t.keyCode = e.keyCode),
      (t.code = e.key),
      (t.charCode = n ? e.keyCode : 0),
      (t.which = e.keyCode),
      (t.location = 0),
      (t.repeat = Boolean(e.repeat)),
      (t.isComposing = !1),
      t
    );
  }
  function s(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) {
      let a = e[n],
        i = a.repeats || 1,
        o = !a.hasOwnProperty("repeat");
      for (let e = 0; e < i; e++) o && (a.repeat = Boolean(e > 0)), t.push(c(a));
    }
    return t;
  }
  document.documentElement.addEventListener(
    "eventdispatcher.dispatch",
    function (e) {
      if ((e.preventDefault(), e.stopPropagation(), e.detail))
        try {
          "keyboardEvents" === e.detail.command
            ? o(e.detail.params, function () {
                if (e.detail.callbackMessage) {
                  let t = new CustomEvent(e.detail.callbackMessage, { detail: { userData: e.detail.userData } });
                  document.documentElement.dispatchEvent(t);
                }
              })
            : "text" === e.detail.command
            ? a(e.detail.params, function () {
                if (e.detail.callbackMessage) {
                  let t = new CustomEvent(e.detail.callbackMessage, { detail: { userData: e.detail.userData } });
                  document.documentElement.dispatchEvent(t);
                }
              })
            : "deleteForward" === e.detail.command
            ? (function (e, t) {
                let n = e && void 0 !== e.repeats ? e.repeats : 1;
                if (n <= 0) return t();
                l(
                  s([
                    { id: 1, type: "keydown", key: "Delete", keyCode: 46, repeats: n },
                    { type: "keyup", key: "Delete", keyCode: 46 }
                  ]),
                  !0,
                  0,
                  function (e, t, n) {
                    n || 1 !== t.__id || document.execCommand("forwardDelete", !1, null);
                  },
                  function () {
                    setTimeout(t, 10);
                  }
                );
              })(e.detail.params, function () {
                if (e.detail.callbackMessage) {
                  let t = new CustomEvent(e.detail.callbackMessage, { detail: { userData: e.detail.userData } });
                  document.documentElement.dispatchEvent(t);
                }
              })
            : "moveForward" === e.detail.command
            ? i("forward", e.detail.params, function () {
                if (e.detail.callbackMessage) {
                  let t = new CustomEvent(e.detail.callbackMessage, { detail: { userData: e.detail.userData } });
                  document.documentElement.dispatchEvent(t);
                }
              })
            : "moveBackward" === e.detail.command &&
              (function (e, t) {
                i("backward", e, t);
              })(e.detail.params, function () {
                if (e.detail.callbackMessage) {
                  let t = new CustomEvent(e.detail.callbackMessage, { detail: { userData: e.detail.userData } });
                  document.documentElement.dispatchEvent(t);
                }
              });
        } catch (e) {}
    },
    !0
  );
});
