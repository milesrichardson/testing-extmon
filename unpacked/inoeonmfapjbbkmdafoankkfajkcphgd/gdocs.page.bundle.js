!(function (e, t) {
  if ("function" == typeof define && define.amd) define([], t);
  else if ("undefined" != typeof exports) t();
  else {
    t(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  const e = 35,
    t = 36,
    r = 37,
    n = 38,
    i = 39,
    a = 40,
    s = 77,
    o = 83,
    c = 89,
    d = 4,
    h = 5,
    m = 6,
    y = 7;
  class v {
    constructor() {
      return v.instance ? v.instance : ((v.instance = this), this.initEventHandlers(), this);
    }
    initEventHandlers() {
      const e = document.querySelector(".docs-texteventtarget-iframe");
      (this.m_textEventIFrameDoc = e.contentDocument),
        (this.m_textEventIFrameWindow = e.contentWindow),
        (this.m_editorWindow = document.querySelector(".kix-appview-editor")),
        (this.m_eventHandlers = []),
        (this.m_eventHandlers.keydown = this._getEventHandlers("keydown", this.m_textEventIFrameDoc)),
        (this.m_eventHandlers.keyup = this._getEventHandlers("keyup", this.m_textEventIFrameDoc)),
        (this.m_eventHandlers.keypress = this._getEventHandlers("keypress", this.m_textEventIFrameDoc));
    }
    fireKeyEvent(e, t, r = !1, n = !1, i = !1, a = !1, s = 1) {
      "string" == typeof t && (t = t.charCodeAt(0));
      var o = {
        altGraphKey: !1,
        altKey: i,
        bubbles: !0,
        cancelBubble: !1,
        cancelable: !0,
        charCode: t,
        clipboardData: void 0,
        ctrlKey: n,
        currentTarget: this.m_textEventIFrameDoc,
        defaultPrevented: !0,
        detail: 0,
        eventPhase: 0,
        keyCode: t,
        keyLocation: 0,
        layerX: 0,
        layerY: 0,
        metaKey: a,
        pageX: 0,
        pageY: 0,
        returnValue: !0,
        shiftKey: r,
        srcElement: this.m_textEventIFrameDoc.body,
        target: this.m_textEventIFrameDoc.body,
        timeStamp: new Date().getTime(),
        type: e,
        view: this.m_textEventIFrameWindow,
        which: t
      };
      10 === t &&
        ((o.code = "Enter"),
        (o.composed = !0),
        (o.charCode = 13),
        (o.defaultPrevented = !1),
        (o.key = "Enter"),
        (o.keyCode = 13),
        (o.metaKey = !1),
        (o.srcElement = this.m_textEventIFrameDoc.body.querySelector("div")),
        (o.target = this.m_textEventIFrameDoc.body.querySelector("div")),
        (o.which = 13),
        (o.type = "keydown"),
        (e = "keydown"));
      let c = 0;
      this.m_eventHandlers[e].forEach((e) => {
        for (c = 0; c < s; c++) e.eventHandler(o);
      });
    }
    _getEventHandlers(e, t) {
      try {
        var r = [];
        for (var n in t)
          if (n.match(/^closure/) && "number" != typeof t[n]) {
            var i = t[n];
            if (!i) continue;
            if (!this.m_eventListKeyName)
              for (var a in i) {
                var s = i[a];
                if (s && s != t)
                  for (var o in s) {
                    var c = s[o];
                    c && null != c.length && c[0].src == t && ((this.m_eventListKeyName = a), r.concat(c));
                  }
              }
            for (var d in i[this.m_eventListKeyName])
              if (d == e)
                for (var h = i[this.m_eventListKeyName][d], m = 0; m < h.length; m++) {
                  if (!this.m_eventHandlerKeyName && h[m].src == t)
                    for (var y in h[m])
                      if (h[m][y].src == t) {
                        this.m_eventHandlerKeyName = y;
                        break;
                      }
                  r.push({ eventObject: h[m], eventHandler: h[m][this.m_eventHandlerKeyName] });
                }
          }
        return r;
      } catch (e) {}
    }
  }
  class f {
    constructor() {
      (this.m_OS = this._detectOS()), (this.m_dispatcher = new v());
    }
    set type(e) {
      e.split("").forEach((e) => {
        this.m_dispatcher.fireKeyEvent("keypress", e);
      }),
        document.dispatchEvent(new CustomEvent("th-type-finished"));
    }
    _detectOS() {
      let e = y;
      return (
        -1 != window.navigator.userAgent.indexOf("CrOS")
          ? (e = d)
          : -1 != window.navigator.userAgent.indexOf("Windows")
          ? (e = h)
          : -1 != window.navigator.userAgent.indexOf("Mac") && (e = m),
        e
      );
    }
    caretMoveLeft(e = 1, t = !1) {
      this.m_dispatcher.fireKeyEvent("keydown", r, t, !1, !1, !1, e);
    }
    caretMoveRight(e = 1, t = !1, r = !1) {
      (r && this.m_OS !== m) || this.m_dispatcher.fireKeyEvent("keydown", i, t, !1, !1, !1, e);
    }
    caretToStartOfWord(e = !1) {
      this.m_OS != m ? this.m_dispatcher.fireKeyEvent("keydown", r, e, !0) : this.m_dispatcher.fireKeyEvent("keydown", r, e, !1, !0);
    }
    caretToEndOfWord(e = !1) {
      this.m_OS != m ? this.m_dispatcher.fireKeyEvent("keydown", i, e, !0) : this.m_dispatcher.fireKeyEvent("keydown", i, e, !1, !0);
    }
    initEventHandlers() {
      this.m_dispatcher.initEventHandlers();
    }
    caretToStartOfNextWord(e = !1) {
      this.m_dispatcher.fireKeyEvent("keydown", i, e, !0);
    }
    caretToStartOfLine(e = !1) {
      this.m_OS != m ? this.m_dispatcher.fireKeyEvent("keydown", t, e) : this.m_dispatcher.fireKeyEvent("keydown", r, e, !1, !1, !0);
    }
    caretToEndOfLine(t = !1) {
      this.m_OS != m ? this.m_dispatcher.fireKeyEvent("keydown", e, t) : this.m_dispatcher.fireKeyEvent("keydown", i, t, !1, !1, !0);
    }
    caretToStartOfDocument(e = !1) {
      this.m_OS != m ? this.m_dispatcher.fireKeyEvent("keydown", t, e, !0) : this.m_dispatcher.fireKeyEvent("keydown", n, e, !1, !1, !0);
    }
    caretToEndOfDocument(t = !1) {
      this.m_OS != m ? this.m_dispatcher.fireKeyEvent("keydown", e, t, !0) : this.m_dispatcher.fireKeyEvent("keydown", a, t, !1, !1, !0);
    }
    async openAltTextDialog() {
      return new Promise((e, t) => {
        this.m_OS == m
          ? (this.m_dispatcher.fireKeyEvent("keydown", c, !1, !1, !0, !0), this.m_dispatcher.fireKeyEvent("keyup", c, !1, !1, !0, !0))
          : (this.m_dispatcher.fireKeyEvent("keydown", c, !1, !0, !0), this.m_dispatcher.fireKeyEvent("keyup", c, !1, !0, !0)),
          e();
      });
    }
    async openCommentBox() {
      return new Promise((e, t) => {
        this.m_OS == m
          ? (this.m_dispatcher.fireKeyEvent("keydown", s, !1, !1, !0, !0), this.m_dispatcher.fireKeyEvent("keyup", s, !1, !1, !0, !0))
          : (this.m_dispatcher.fireKeyEvent("keydown", s, !1, !0, !0), this.m_dispatcher.fireKeyEvent("keyup", s, !1, !0, !0)),
          e();
      });
    }
    async voicetype() {
      return new Promise((e, t) => {
        this.m_OS == m
          ? (this.m_dispatcher.fireKeyEvent("keydown", o, !0, !1, !1, !0), this.m_dispatcher.fireKeyEvent("keyup", o, !0, !1, !0, !0))
          : (this.m_dispatcher.fireKeyEvent("keydown", o, !0, !0, !1), this.m_dispatcher.fireKeyEvent("keyup", o, !1, !0, !1)),
          e();
      });
    }
  }
  window.addEventListener(
    "message",
    async (e) => {
      if (
        e.data &&
        e.data.action &&
        "TH_DOCS_PARSER_SEND_RW4GC" === e.data.action &&
        e.origin === window.location.origin &&
        e.data.th_type &&
        "TH_DOCS_PARSER_SEND_RW4GC" === e.data.action
      ) {
        let t = new f();
        const r = e.data.params;
        switch (e.data.th_type) {
          case "type":
            t.type = e.data.params.textToType;
            break;
          case "caretMoveLeft":
            t.caretMoveLeft(r.numberOFCharacters, r.select);
            break;
          case "caretMoveRight":
            t.caretMoveRight(r.numberOFCharacters, r.select);
            break;
          case "caretToStartOfNextWord":
            t.caretToStartOfNextWord(r.select);
            break;
          case "caretToStartOfLine":
            t.caretToStartOfLine(r.select);
            break;
          case "caretToEndOfLine":
            t.caretToEndOfLine(r.select);
            break;
          case "caretToStartOfDocument":
            t.caretToStartOfDocument(r.select);
            break;
          case "caretToEndOfDocument":
            t.caretToEndOfDocument(r.select);
            break;
          case "caretToStartOfWord":
            t.caretToStartOfWord(r.select);
            break;
          case "caretToEndOfWord":
            t.caretToEndOfWord(r.select);
            break;
          case "openAltTextDialog":
            await t.openAltTextDialog();
            break;
          case "openCommentBox":
            if (0 !== document.querySelectorAll(".docos-docoview-active .docos-input-textarea").length) break;
            await t.openCommentBox();
            break;
          case "voicetype":
            await t.voicetype();
            break;
          case "initEventHandlers":
            t.initEventHandlers();
        }
        (e.data.action = "TH_DOCS_PARSER_RESPONSE_RW4GC"), window.postMessage(e.data, e.origin);
      }
    },
    !1
  ),
    window.addEventListener("message", (e) => {
      if (e.data && e.origin === window.location.origin && e.data.th_type && (e.data.params, "kxresize" === e.data.th_type)) {
        if (window.KX_kixApp) return void window.KX_kixApp.resize();
        let e = document.querySelector("#workspace-container");
        if (e) {
          let t = e.style.overflow;
          return void (
            t &&
            ((e.style.overflow = "scroll"),
            (e.scrollTop = e.scrollTop++),
            requestAnimationFrame(() => {
              (e.scrollTop = e.scrollTop--), (e.style.overflow = t);
            }))
          );
        }
      }
    });
});
