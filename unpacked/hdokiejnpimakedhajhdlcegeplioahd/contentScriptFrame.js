LPFrame = (function () {
  var d = 0,
    m = {},
    t = null,
    n = function (e) {
      var t = ++d,
        n = e.tracking,
        i = null,
        r = new LPEventManager(),
        o = [],
        a = null,
        l = null,
        s = e.interfaceDefinition,
        c = ((m[t] = this), getchromeurl(e.url)),
        u = "&lplanguage=",
        f =
          ("undefined" != lplanguage && null != lplanguage ? (u += lplanguage) : (u += bg.get("g_language")),
          (c += (-1 < c.indexOf("?") ? "&" : "?") + "dialogID=" + t + u),
          LPPlatform.newFrameContainer(c, t)),
        g =
          ((this.close = function () {
            r.publishEvent("close"),
              f.close(),
              window.removeEventListener("resize", this.refreshPosition),
              window.removeEventListener("scroll", this.refreshPosition),
              delete m[t];
          }),
          (this.onClose = function (e) {
            r.addEventListener("close", e);
          }),
          (this.css = function (e) {
            f.css(e), this.refreshPosition();
          }),
          function (e, t, n) {
            if (n) {
              if ("string" == typeof n) {
                if (!n.indexOf("%")) throw "trackElement only supports numbers or percentages for translations";
                n = (e[t] * parseInt(n.substring(0, n.indexOf("%")))) / 100;
              }
              return n;
            }
            return 0;
          }),
        h =
          ((this.refreshPosition = function () {
            var e, t, e;
            n &&
              ((t = (e = n.element.getBoundingClientRect()).top),
              (e = e.left),
              n.frameTranslation && ((t += g(f, "clientHeight", n.frameTranslation.y)), (e += g(f, "clientWidth", n.frameTranslation.x))),
              n.targetTranslation &&
                ((t += g(n.element, "clientHeight", n.targetTranslation.y)), (e += g(n.element, "clientWidth", n.targetTranslation.x))),
              f.css({ top: t, left: e }));
          }),
          (this.trackElement = function (e) {
            (n = e), window.addEventListener("resize", this.refreshPosition), window.addEventListener("scroll", this.refreshPosition);
          }),
          (this.getInterface = function () {
            return (
              null === l &&
                ((a = function (e) {
                  null === i ? o.push(e) : LPPlatform.requestFramework.sendRequest({ type: "contentScriptRequest", data: e, frameID: i });
                }),
                (l = Interfaces.createInstance(s, { direct: !1, context: "contentScript", requestFunction: a }))),
              l
            );
          }),
          function () {
            for (var e = [], t = document.getElementsByTagName("iframe"), n = 0; n < t.length; ++n) {
              var i = t[n];
              (i.src !== c && i.getAttribute("lpsrc") !== c) || e.push(i);
            }
            return e;
          });
      (this.initialize = function (e) {
        if (null === i) {
          var t = h();
          if (!(1 < t.length)) {
            i = e;
            for (var n = 0; n < o.length; ++n) a(o[n]);
            return !0;
          }
          t.forEach(function (e) {
            e.parentElement.removeChild(e);
          });
        }
        return !1;
      }),
        (this.getParams = function () {
          return e.dialogData;
        }),
        (this.getDialogID = function () {
          return t;
        }),
        n && this.trackElement(n);
    };
  Topics.get(Topics.CLEAR_DATA).subscribe(function () {
    for (var e in m) m[e].close();
  });
  var e,
    i,
    r,
    o,
    a,
    l,
    s = function (e) {
      return new n(e);
    },
    c,
    u;
  return {
    css: function (e) {
      var t;
      e && (t = m[e.id]) && t.css(e.css), "function" == typeof e.callback && e.callback();
    },
    close: function (e) {
      var e = m[e];
      e && e.close();
    },
    openDialog: function (e, t, n) {
      var i = s({ url: "contentScriptDialog.html", interfaceDefinition: Interfaces.ContentScriptDialogInterface });
      return (
        i.getInterface().LPDialog.openDialog(e, t),
        n &&
          (n.css && i.css(n.css),
          n.language && (i.url = "contentScriptDialog.html?lplanguage=" + encodeURIComponent(n.language)),
          n.callback) &&
          n.callback(i.getDialogID()),
        i
      );
    },
    openFrame: s,
    initializeRequestFramework: function (e, t, n) {
      var e = m[e],
        i = !1;
      e && (i = e.initialize(n)), t && t(i);
    },
    getParams: function (e, t) {
      t(m[e].getParams());
    },
    showModal: function (e) {
      null === t &&
        ((t = document.createElement("div")),
        LPContentScriptTools.setCSS(t, {
          position: "fixed",
          "z-index": "2147483646",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          "background-color": "rgba(52, 61, 68, 0.6)"
        })),
        document.body.appendChild(t);
    },
    hideModal: function () {
      t && document.body.removeChild(t);
    },
    numberOfDialogs: function () {
      return m ? Object.keys(m).length : 0;
    }
  };
})();
