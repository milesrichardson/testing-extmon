var WAXUtils = (function () {
  var e = {
      Unknown: 0,
      Text: 1,
      TextArea: 2,
      Password: 3,
      Submit: 4,
      Image: 5,
      Button: 6,
      Checkbox: 7,
      Radio: 8,
      Reset: 9,
      File: 10,
      Hidden: 11,
      Select: 12,
      EventObject: 13
    },
    n = {
      Unknown: 0,
      Label: 1,
      TableCell: 2,
      Header: 3,
      Table: 4,
      TableBody: 5,
      TableRow: 6,
      Input: 7,
      TextArea: 8,
      Button: 9,
      Image: 10,
      Select: 11,
      Link: 12,
      Container: 13,
      SelectOption: 14,
      Generic: 15,
      Form: 16,
      Comments: 17,
      FieldSet: 18,
      AjaxLink: 19
    },
    t = { Unknown: 0, IE: 1, Firefox: 3, Chrome: 4, Safari: 5, Opera: 6 },
    i = t.Unknown,
    r = -1,
    o = !1,
    l = null,
    u = null;
  return {
    setInit: function (e) {
      o = e;
    },
    getInit: function () {
      return o;
    },
    getInputTypeEnum: function () {
      return e;
    },
    getElementTypeEnum: function () {
      return n;
    },
    getBrowserTypeEnum: function () {
      return t;
    },
    getBrowserType: function () {
      if (t.Unknown != i) return i;
      if (window.ActiveXObject) i = t.IE;
      else {
        var e = navigator.userAgent;
        -1 != e.indexOf("Firefox")
          ? (i = t.Firefox)
          : -1 != e.indexOf("Chrome/")
          ? (i = t.Chrome)
          : -1 != e.indexOf("Safari")
          ? (i = t.Safari)
          : -1 != e.indexOf("Opera") && (i = t.Opera);
      }
      return i;
    },
    getBrowserVersion: function () {
      if (-1 != r) return r;
      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) r = new Number(RegExp.$1);
      else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) r = new Number(RegExp.$1);
      else if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)) r = new Number(RegExp.$1);
      else if (-1 != navigator.userAgent.indexOf("Opera")) {
        var e = navigator.userAgent.split("Version/");
        r = e[1].substring(0, e[1].indexOf("."));
      } else /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent) && (r = new Number(RegExp.$1));
      return r;
    },
    eventCallback: function (e, n) {
      0 == n
        ? waxEntry(e, 1 == e ? document.documentElement : WAXUtils.getLoginForm())
        : setTimeout(function () {
            waxEntry(e, 1 == e ? document.documentElement : WAXUtils.getLoginForm());
          }, n);
    },
    addListener: function (e, n, i, r) {
      var o = WAXUtils.getBrowserType();
      return (
        t.Unknown != o &&
        (e.addEventListener(
          n,
          function () {
            WAXUtils.eventCallback(i, r);
          },
          !1
        ),
        !0)
      );
    },
    removeListener: function (e, n) {
      var i = WAXUtils.getBrowserType();
      return t.Unknown != i && (e.removeEventListener(n, WAXUtils.eventCallback, !1), !0);
    },
    trim: function (e) {
      return null == e || void 0 === e
        ? ""
        : ('"' == (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")).charAt(0) && (e = e.substring(1, e.length)),
          '"' == e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)),
          e);
    },
    matchesAttributes: function (e, n) {
      if (void 0 === e || void 0 === n) return !1;
      if (Array != e.constructor) return !1;
      for (var i = !0, r = 0; r < e.length; r++) {
        var o = e[r].split(":="),
          l = WAXUtils.trim(o[0]),
          u = WAXUtils.trim(o[1]);
        if ("index" != l)
          if ("tagname" == l) {
            if (n.tagName.toLowerCase() != u.toLowerCase()) {
              i = !1;
              break;
            }
          } else {
            if ("innerText" != l) {
              var s = n.getAttribute(l);
              if (null != s && u == s) continue;
              i = !1;
              break;
            }
            var a = "";
            if (
              ((a = WAXUtils.getBrowserType() == t.Firefox ? n.textContent : n.innerText),
              (a = WAXUtils.trim(a)).toLowerCase() != u.toLowerCase())
            ) {
              i = !1;
              break;
            }
          }
      }
      return i;
    },
    findElement: function (e) {
      if (null == e || void 0 === e) return null;
      var n = (a = (e = e.replace(/(\", \")|(\" , \")|(\" ,\")/g, '","')).split('","'))[0].split(":="),
        t = WAXUtils.trim(n[0]),
        i = WAXUtils.trim(n[1]),
        r = null;
      if ("id" == t) r = window.document.getElementById(i);
      else if ("tagname" == t) {
        var o = window.document.getElementsByTagName(i);
        if (void 0 === o || null == o) return null;
        for (var l = [], u = 0; u < o.length; u++) {
          var s = o[u];
          WAXUtils.matchesAttributes(a, s) && l.push(s);
        }
        if (1 == l.length) r = l[0];
        else {
          var a;
          n = (a = e.split('","'))[a.length - 1].split(":=");
          if ("index" == (t = WAXUtils.trim(n[0]))) (i = WAXUtils.trim(n[1])) < l.length && (r = l[i]);
        }
      }
      return r;
    },
    onLoginKeyDown: function (e) {
      if (void 0 !== e && null != e) {
        var n = e.srcElement ? e.srcElement : e.target,
          t = e.keyCode ? e.keyCode : event.keyCode,
          i = !1;
        WAXUtils.isTextInput(n) ? 13 == t && (i = WAXUtils.verifyLoginInputs()) : 32 == t && (i = WAXUtils.verifyLoginInputs()),
          i && waxEntry(2, WAXUtils.getLoginForm());
      }
    },
    onLoginClick: function (e) {
      if (void 0 !== e && null != e) {
        0 == e.button && WAXUtils.verifyLoginInputs() && waxEntry(2, WAXUtils.getLoginForm());
      }
    },
    addLoginInput: function (e) {
      void 0 !== e &&
        null != e &&
        (null == l && (l = []),
        l.push(e),
        e.addEventListener("keydown", WAXUtils.onLoginKeyDown, !1),
        WAXUtils.isTextInput(e) || e.addEventListener("mousedown", WAXUtils.onLoginClick, !1));
    },
    isTextInput: function (e) {
      if (void 0 === e || null == e) return !1;
      var n = !1;
      if ("INPUT" == e.tagName) {
        var t = e.getAttribute("type");
        (null != t && "password" != t && "text" != t) || (n = !0);
      }
      return n;
    },
    verifyLoginInputs: function () {
      if (null == l) return !1;
      for (var e = !0, n = 0; n < l.length; ++n) WAXUtils.isTextInput(l[n]) && 0 == l[n].value.length && (e = !1);
      return e;
    },
    clearLogins: function () {
      l = null;
    },
    setLoginForm: function (e) {
      u = e;
    },
    getLoginForm: function () {
      return u;
    }
  };
})();
function waxFindElement(e) {
  return WAXUtils.findElement(e);
}
function waxClearLoginElements() {
  return WAXUtils.clearLogins();
}
function waxAddLoginElement(e) {
  if (void 0 !== e && null != e) return "FORM" == e.tagName ? WAXUtils.setLoginForm(e) : WAXUtils.addLoginInput(e);
}
