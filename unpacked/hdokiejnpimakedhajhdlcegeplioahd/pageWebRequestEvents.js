!(function () {
  var e = 0,
    n = function (t, e) {
      return "function" != typeof t || t.replaced ? t : ((e.replaced = !0), e);
    },
    r,
    c,
    o,
    t,
    u,
    s,
    i;
  "undefined" != typeof CustomEvent &&
    "function" == typeof window.dispatchEvent &&
    ((r = function (t) {
      try {
        if ("string" == typeof (t = "object" == typeof t ? JSON.stringify(t) : t))
          return window.dispatchEvent(new CustomEvent("lprequeststart", { detail: { data: t, requestID: ++e } })), e;
      } catch (t) {}
    }),
    (c = function (t) {
      try {
        window.dispatchEvent(new CustomEvent("lprequestend", { detail: t }));
      } catch (t) {}
    }),
    "undefined" != typeof XMLHttpRequest &&
      XMLHttpRequest.prototype &&
      XMLHttpRequest.prototype.send &&
      (XMLHttpRequest.prototype.send = n(
        XMLHttpRequest.prototype.send,
        ((i = XMLHttpRequest.prototype.send),
        function (t) {
          var e = this,
            n = r(t);
          return (
            n &&
              e.addEventListener("loadend", function () {
                c({ requestID: n, statusCode: e.status });
              }),
            i.apply(e, arguments)
          );
        })
      )),
    "function" == typeof fetch &&
      (fetch = n(
        fetch,
        ((s = fetch),
        function (t, e) {
          var n = r(e),
            o = s.apply(window, arguments),
            u;
          return (
            n &&
              o
                .then(
                  (u = function (t) {
                    c({ requestID: n, statusCode: t && t.status });
                  })
                )
                .catch(u),
            o
          );
        })
      )),
    (o = function (t) {
      return n(t, function () {
        try {
          this.dispatchEvent(new CustomEvent("lpsubmit"));
        } catch (t) {}
        return t.apply(this, arguments);
      });
    }),
    (t = function () {
      if (document && document.forms && 0 < document.forms.length)
        for (var t = 0; t < document.forms.length; ++t) document.forms[t].submit = o(document.forms[t].submit);
    }),
    (document && "interactive" === document.readyState) || "complete" === document.readyState
      ? t()
      : window.addEventListener("DOMContentLoaded", t, !0),
    (Document.prototype.createElement = n(
      Document.prototype.createElement,
      ((u = Document.prototype.createElement),
      function () {
        var t = u.apply(this, arguments);
        return t && "FORM" === t.nodeName && t.submit && (t.submit = o(t.submit)), t;
      })
    )));
})();
