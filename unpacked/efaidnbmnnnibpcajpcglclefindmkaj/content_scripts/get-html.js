/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
var dc = {
  Deferred: function (e, t) {
    "use strict";
    var r = this,
      c =
        e ||
        new Promise(function (e, c) {
          (r.resolve = function () {
            r.timer && clearTimeout(r.timer), e();
          }),
            (r.reject = function () {
              r.timer && clearTimeout(r.timer), c && c();
            }),
            t &&
              (r.timer = setTimeout(
                dc.wrap(function () {
                  (r.time_out = !0), delete r.timer, r.resolve();
                }),
                6e4
              ));
        });
    return (
      (this.promise = function () {
        return c;
      }),
      (this.clearTimer = function () {
        this.timer && clearTimeout(r.timer);
      }),
      (this.then = function (e) {
        return c.then(e);
      }),
      (this.done = function (e) {
        return c.then(e, e);
      }),
      this
    );
  },
  cloneTime: {},
  promises: [],
  URIs: {},
  uriCounter: 0,
  doc_prefix: "",
  analytics: [],
  iframesToProcess: [],
  postData: null,
  topWindow: window.self === window.top,
  output: { refs: [], origin: location.origin, currentSize: 0, hasError: !1 },
  wrap: function (e, t) {
    "use strict";
    var r = function () {
      var e;
      try {
        return this.func.apply(this.context, this.args.concat(Array.prototype.slice.call(arguments, 0)));
      } catch (t) {
        throw (
          (t.handled ||
            ((t.handled = !0),
            (e =
              "DCBrowser:Error:JS:" +
              t.stack.match(/get-html\.js:(\d*):(\d*)/)[0] +
              ":" +
              t.message.replace(/\s/g, "_").replace(/"\S*?"/g, "")),
            console.log(e),
            chrome.runtime.sendMessage({ progress_op: "html-blob", main_op: OP, error_analytics: e, error: "web2pdfHTMLJSError" })),
          t)
        );
      }
    };
    return r.bind({ func: e, context: t || {}, args: Array.prototype.slice.call(arguments, 1) });
  },
  random: function () {
    "use strict";
    return "W" + Math.ceil(1e5 * Math.random()).toString();
  },
  log: function (e) {
    "use strict";
    DEBUG && console.log(e);
  },
  getDomain: function (e) {
    "use strict";
    var t = document.createElement("a");
    return (t.href = e), t.origin;
  },
  utf8ByteLength: function (e) {
    "use strict";
    if (!e) return 0;
    var t = encodeURI(e),
      r = t.match(/%/g);
    return r ? t.length - 2 * r.length : t.length;
  },
  resolveURL: function (e, t) {
    "use strict";
    return e
      ? 0 === (t = t.trim()).search(/https?:\/\//) || 0 === t.indexOf("//")
        ? t
        : 0 === t.indexOf("/")
        ? dc.getDomain(e) + t
        : e + "/" + t
      : t;
  },
  registerURI: function (e, t, r) {
    "use strict";
    var c = 0 === r ? "refs/" + dc.doc_prefix : dc.doc_prefix,
      n =
        "." +
        t
          .replace(/[\?#]\S*/, "")
          .split(".")
          .pop();
    return (
      (n.length > 5 || 1 === n.length) && (n = ""),
      (t = dc.resolveURL(e, t)),
      dc.URIs[t] || ((dc.URIs[t] = { placeholder: c + dc.uriCounter.toString() + n }), (dc.uriCounter += 1)),
      dc.URIs[t]
    );
  },
  getType: function (e, t) {
    "use strict";
    var r = "image";
    return (
      t.endsWith(".ttf")
        ? (dc.analytics.push("FONT_TTF"), (r = "font"))
        : t.endsWith(".otf")
        ? (dc.analytics.push("FONT_OTF"), (r = "font"))
        : t.endsWith(".woff")
        ? (dc.analytics.push("FONT_WOFF"), (r = "font"))
        : t.endsWith(".eot") && (dc.analytics.push("FONT_EOT"), (r = "font")),
      "text/xml" === e || "application/vnd.ms-fontobject" === e
        ? (dc.analytics.push("FONT_EOT"), (r = "font"))
        : "font/woff2" === e && (dc.analytics.push("FONT_WOFF2"), (r = "font")),
      e.startsWith("image/svg") && ((r = "svg_image"), dc.analytics.push("SVG_IMAGE")),
      r
    );
  },
  readImage: function (e, t) {
    "use strict";
    var r;
    e.status < 400
      ? ((t.type = dc.getType(e.response.type, t.placeholder)),
        -1 !== EXCLUDE.indexOf(t.type)
          ? ((t.data = null), t.promise.resolve())
          : (((r = new FileReader()).onloadend = dc.wrap(function (e) {
              t.promise.time_out || ((t.data = e.target.result), t.promise.resolve());
            })),
            r.readAsDataURL(e.response)))
      : (dc.log("FAILED to load: " + e.responseURL), dc.log("Placeholder: " + t.placeholder), t.promise.resolve());
  },
  getDataURI: function (e, t, r) {
    "use strict";
    if (0 === t.indexOf("data:")) return t;
    if (!t) return t;
    var c,
      n,
      s = dc.registerURI(e, t, r);
    return (
      s.promise ||
        ((c = new XMLHttpRequest()),
        (s.promise = new dc.Deferred(null, !0)),
        dc.promises.push(s.promise),
        (n = dc.resolveURL(e, t).replace(/^https?:/, "")),
        c.open("GET", n, !0),
        (c.responseType = "blob"),
        (c.onload = dc.wrap(function (e) {
          s.promise.time_out || dc.readImage(this, s);
        }, c)),
        c.send()),
      s.placeholder
    );
  },
  replaceURL: function (e, t, r) {
    "use strict";
    var c = new RegExp(e.replace(/([\.\^\$\*\+\?\(\)\[\{\\\|])/g, "\\$1"), "g");
    return r.replace(c, t);
  },
  replaceCssRefs: function (e, t, r) {
    "use strict";
    var c,
      n,
      s,
      a = (function (e) {
        var t = e.split("/");
        return t.length < 4 ? e : t.slice(0, -1).join("/");
      })(e),
      o = [],
      i = /([\s\S]{0,10})url\s*\(([\s\S]*?)\)/gm;
    for (t = t.replace(/\/\*[\s\S]*?\*\//gm, ""), c = i.exec(t); c; )
      (n = (s = c[2]).replace(/('|")/g, "")),
        s && 0 !== n.indexOf("data:") && o.push({ url: n, imprt: -1 !== c[1].indexOf("@import"), originalURL: s }),
        (c = i.exec(t));
    return (
      o.forEach(
        dc.wrap(function (e) {
          t = e.imprt
            ? "acro-html" === OP
              ? dc.replaceURL(e.originalURL, dc.resolveURL(a, e.url), t)
              : dc.replaceURL(e.originalURL, dc.getCSSDataURI(a, e.url, r + 1), t)
            : "acro-html" === OP
            ? dc.replaceURL(e.originalURL, dc.resolveURL(a, e.url), t)
            : dc.replaceURL(e.originalURL, dc.getDataURI(a, e.url, r + 1), t);
        })
      ),
      t
    );
  },
  getCSSDataURI: function (e, t, r) {
    "use strict";
    if (0 === t.indexOf("data:")) return t;
    var c,
      n,
      s = dc.registerURI(e, t, r);
    return (
      s.promise ||
        ((s.promise = new dc.Deferred(null, !0)),
        dc.promises.push(s.promise),
        (c = new XMLHttpRequest()),
        (n = dc.resolveURL(e, t).replace(/^https?:/, "")),
        c.open("GET", n, !0),
        (c.responseType = "blob"),
        (c.onload = dc.wrap(function (e) {
          var t;
          if (this.status < 400) {
            if ("text/css" !== this.response.type) return void dc.readImage(this, s);
            ((t = new FileReader()).onloadend = function (e) {
              (s.type = "css"),
                s.promise.clearTimer(),
                s.promise.time_out || ((s.data = dc.replaceCssRefs(n, e.target.result, r)), s.promise.resolve());
            }),
              t.readAsText(this.response);
          } else dc.log("CSS FAILED to load: " + c.responseURL + "   Placeholder: " + s.placeholder), s.promise.resolve();
        }, c)),
        c.send()),
      s.placeholder
    );
  },
  processStyleAttr: function (e) {
    "use strict";
    var t = e.getAttribute ? e.getAttribute("style") : "";
    t && e.setAttribute("style", dc.replaceCssRefs(document.location.origin, t, -1));
  },
  resolveRefs: function (e, t) {
    "use strict";
    var r, c, n, s, a;
    if (
      ("LINK" === e.tagName &&
        e.href &&
        ((a = (e.type || "") + (e.rel || "")).includes("icon") || a.includes("image")
          ? dc.log("skipped icon image")
          : (e.href = dc.getCSSDataURI(null, e.href, 0))),
      (n = t.attributes))
    )
      for (r = 0; r < n.length; r += 1) 0 === n[r].name.toLowerCase().indexOf("on") && e.removeAttribute(n[r].name);
    if (
      (-1 !== ["IMG", "INPUT"].indexOf(e.tagName) &&
        ((e.dataset._html_to_pdf_src_ = dc.getDataURI(null, e.src, 0)), e.removeAttribute("src")),
      "INPUT" === e.tagName && "file" !== e.type && e.setAttribute("value", t.value),
      "INPUT" !== e.tagName ||
        ("radio" !== e.type && "checkbox" !== e.type) ||
        (e.removeAttribute("checked"), t.checked && e.setAttribute("checked", "checked")),
      "OPTION" === e.tagName && (e.removeAttribute("selected"), t.selected && e.setAttribute("selected", "selected")),
      "svg" === e.tagName && dc.analytics.push("SVG"),
      "EMBED" === e.tagName &&
        ("application/x-shockwave-flash" === e.type && (dc.topWindow ? dc.analytics.push("FLASH") : dc.analytics.push("FLASH_IN_IFRAME")),
        "acro-html" === OP && e.setAttribute("src", e.src)),
      "OBJECT" === e.tagName &&
        "application/x-shockwave-flash" === e.type &&
        (dc.topWindow ? dc.analytics.push("FLASH") : dc.analytics.push("FLASH_IN_IFRAME")),
      "IFRAME" === e.tagName || "FRAME" === e.tagName)
    )
      if ("acro-html" === OP) e.setAttribute("src", e.src);
      else {
        for (r = 0; r < window.frames.length; r += 1)
          window.frames[r] === t.contentWindow &&
            (t.contentWindow.WINDOW_ID
              ? ((dc.iframesToProcess[r] = { index: r }), (e.src = t.contentWindow.WINDOW_ID + ".html"))
              : (e.src = "about:blank"));
        e.name && e.name.length > 256 && (e.name = "");
      }
    if (
      ("A" === e.tagName && (s = e.getAttribute("href")) && 0 === s.indexOf("/") && e.setAttribute("href", e.href),
      3 === e.nodeType &&
        t.parentNode &&
        "style" === t.parentNode.tagName.toLowerCase() &&
        (e.textContent = dc.replaceCssRefs(document.location.origin, e.textContent, -1)),
      "CANVAS" === e.tagName)
    ) {
      c = document.createElement("IMG");
      try {
        c.src = t.toDataURL("image/png");
      } catch (t) {
        dc.analytics.push("TAINTED_CANVAS"), ((c = document.createElement("DIV")).className = e.className);
      }
      (e = c), dc.analytics.push("CANVAS");
    }
    return (
      "image" === e.tagName &&
        (function (e) {
          var t,
            r,
            c = e.attributes,
            n = c.length;
          for (t = 0; t < n; t += 1)
            ("href" !== (r = c[t]).localName && "src" !== r.localName) || e.setAttribute(r.name, dc.getDataURI(null, r.value, -1));
        })(e),
      dc.processStyleAttr(e),
      e
    );
  },
  getDocType: function (e) {
    "use strict";
    var t,
      r = e.doctype;
    function c(e) {
      return e.replace(/[&<>]/g, function (e) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[e];
      });
    }
    return null === r
      ? ""
      : ((t = "<!DOCTYPE " + r.name),
        r.publicId ? (t += ' PUBLIC "' + c(r.publicId) + '"') : r.systemId && (t += " SYSTEM"),
        c(r.systemId) && (t += ' "' + r.systemId + '"'),
        t + ">");
  },
  htmlTree: function (e) {
    "use strict";
    var t, r, c, n;
    if (((t = e.cloneNode(!1)), (t = dc.resolveRefs(t, e)), e.hasChildNodes()))
      for (r = e.firstChild; r; )
        "none" === ((n = r).style ? n.style.display : "").toLowerCase() ||
          8 === n.nodeType ||
          -1 !== ["BASE", "SCRIPT", "NOSCRIPT"].indexOf(n.tagName) ||
          ("LINK" === n.tagName && n.rel && -1 === n.rel.indexOf("stylesheet") && -1 === n.rel.indexOf("icon")) ||
          ("IMG" === n.tagName && 1 === n.width && 1 === n.height) ||
          ("PARAM" === n.tagName &&
            "application/x-shockwave-flash" === n.parentElement.type &&
            (dc.topWindow ? dc.analytics.push("FLASH") : dc.analytics.push("FLASH_IN_IFRAME")),
          "IFRAME" === n.tagName && n.src && 0 === n.src.indexOf("chrome-extension://")) ||
          ((c = dc.htmlTree(r)), t.appendChild(c)),
          (r = r.nextSibling);
    return t;
  },
  processIframes: function () {
    "use strict";
    var e, t;
    for (e = 0; e < dc.iframesToProcess.length; e += 1)
      (t = dc.iframesToProcess[e]) &&
        !t.promise &&
        ((t.promise = new dc.Deferred()),
        dc.promises.push(t.promise),
        { index: e },
        chrome.runtime.sendMessage({
          main_op: "relay-msg",
          index: e,
          frameID: window.frames[e].WINDOW_ID,
          parentID: window.WINDOW_ID,
          tabId: TABID
        }));
  },
  receiveIframe: function (e) {
    "use strict";
    if ("serialize_iframe" === e.html_op && e.tabId === TABID && e.parentID === window.WINDOW_ID) {
      (dc.analytics = dc.analytics.concat(e.content_analytics)), (dc.output.refs = dc.output.refs.concat(e.refs));
      var t = 0;
      e.refs.forEach(
        dc.wrap(function (e) {
          t += e.data ? e.data.length : 0;
        })
      ),
        (dc.output.currentSize += t),
        dc.iframesToProcess[e.index].promise.resolve();
    }
  },
  _serialize: function (e) {
    "use strict";
    var t,
      r,
      c = new dc.Deferred();
    (dc.doc_prefix = e.frameID),
      (t = dc.htmlTree(document.documentElement)),
      (r = dc.promises.length),
      (function e() {
        return (
          dc.Deferred.all(dc.promises).done(
            dc.wrap(function () {
              dc.processIframes(), dc.promises.length === r ? c.resolve() : ((r = dc.promises.length), e());
            })
          ),
          c.promise()
        );
      })().then(
        dc.wrap(function () {
          var r, c, n, s;
          for (r in ((dc.output.html = dc.getDocType(document) + t.outerHTML.replace(/data\-_html_to_pdf_src_=/gm, "src=")),
          (dc.output.html = dc.output.html.replace(/[\u00A0-\uFFFF]/g, function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          })),
          (dc.output.currentSize += dc.output.html.length),
          dc.URIs))
            if (dc.URIs.hasOwnProperty(r)) {
              if (dc.output.currentSize > 1048576 * maxSize) {
                (c = "web2pdfHTMLTooLarge"), (dc.output.hasError = !0);
                break;
              }
              dc.output.refs.push({ placeholder: dc.URIs[r].placeholder, type: dc.URIs[r].type, data: dc.URIs[r].data }),
                dc.URIs[r].data && (dc.output.currentSize += dc.URIs[r].data.length);
            }
          (n = dc.analytics.filter(function (e, t, r) {
            return t === dc.analytics.indexOf(e);
          })),
            dc.topWindow
              ? ((s = (new Date().getTime() - dc.cloneTime.start) / 100),
                chrome.runtime.sendMessage({
                  progress_op: "html-blob",
                  main_op: OP,
                  blob: dc.output,
                  content_analytics: n,
                  cloneTiming: s,
                  error: c,
                  error_analytics: c
                }),
                (dc = null))
              : (dc.output.refs.push({ placeholder: window.WINDOW_ID + ".html", type: "html", data: dc.output.html }),
                (dc.output.currentSize += dc.output.html.length),
                dc.output.currentSize > 1048576 * maxSize && (c = "web2pdfHTMLTooLarge"),
                (s = (new Date().getTime() - dc.cloneTime.start) / 100),
                chrome.runtime.sendMessage({
                  tabid: TABID,
                  main_op: "relay-msg",
                  complete: !0,
                  index: e.index,
                  refs: dc.output.refs,
                  frameID: window.WINDOW_ID,
                  parentID: e.parentID,
                  content_analytics: n,
                  cloneTiming: s,
                  error: c,
                  error_analytics: c
                }),
                (dc = null));
        })
      );
  }
};
function receiveIframe(e) {
  "use strict";
  dc.wrap(dc.receiveIframe)(e);
}
function serialize(e) {
  "use strict";
  e.frameID === window.WINDOW_ID && window.setTimeout(dc.wrap(dc._serialize), 0, e);
}
(dc.Deferred.all = function (e) {
  "use strict";
  return new dc.Deferred(Promise.all(e));
}),
  (window.WINDOW_ID = dc.random()),
  dc.topWindow && ((dc.cloneTime.start = new Date()), serialize({ frameID: window.WINDOW_ID }));
