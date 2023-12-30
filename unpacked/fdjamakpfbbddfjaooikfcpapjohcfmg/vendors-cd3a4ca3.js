/*! For license information please see vendors-cd3a4ca3.js.LICENSE.txt */
(globalThis.webpackChunk_dashlane_leeloo = globalThis.webpackChunk_dashlane_leeloo || []).push([
  [8440],
  {
    961465: (t, e, a) => {
      var n = a(515313).Buffer;
      !(function (t) {
        (t.parser = function (t, e) {
          return new i(t, e);
        }),
          (t.SAXParser = i),
          (t.SAXStream = s),
          (t.createStream = function (t, e) {
            return new s(t, e);
          }),
          (t.MAX_BUFFER_LENGTH = 65536);
        var e,
          r = [
            "comment",
            "sgmlDecl",
            "textNode",
            "tagName",
            "doctype",
            "procInstName",
            "procInstBody",
            "entity",
            "attribName",
            "attribValue",
            "cdata",
            "script"
          ];
        function i(e, a) {
          if (!(this instanceof i)) return new i(e, a);
          var n = this;
          !(function (t) {
            for (var e = 0, a = r.length; e < a; e++) t[r[e]] = "";
          })(n),
            (n.q = n.c = ""),
            (n.bufferCheckPosition = t.MAX_BUFFER_LENGTH),
            (n.opt = a || {}),
            (n.opt.lowercase = n.opt.lowercase || n.opt.lowercasetags),
            (n.looseCase = n.opt.lowercase ? "toLowerCase" : "toUpperCase"),
            (n.tags = []),
            (n.closed = n.closedRoot = n.sawRoot = !1),
            (n.tag = n.error = null),
            (n.strict = !!e),
            (n.noscript = !(!e && !n.opt.noscript)),
            (n.state = h.BEGIN),
            (n.strictEntities = n.opt.strictEntities),
            (n.ENTITIES = n.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES)),
            (n.attribList = []),
            n.opt.xmlns && (n.ns = Object.create(E)),
            (n.trackPosition = !1 !== n.opt.position),
            n.trackPosition && (n.position = n.line = n.column = 0),
            F(n, "onready");
        }
        (t.EVENTS = [
          "text",
          "processinginstruction",
          "sgmldeclaration",
          "doctype",
          "comment",
          "opentagstart",
          "attribute",
          "opentag",
          "closetag",
          "opencdata",
          "cdata",
          "closecdata",
          "error",
          "end",
          "ready",
          "script",
          "opennamespace",
          "closenamespace"
        ]),
          Object.create ||
            (Object.create = function (t) {
              function e() {}
              return (e.prototype = t), new e();
            }),
          Object.keys ||
            (Object.keys = function (t) {
              var e = [];
              for (var a in t) t.hasOwnProperty(a) && e.push(a);
              return e;
            }),
          (i.prototype = {
            end: function () {
              y(this);
            },
            write: function (e) {
              var a = this;
              if (this.error) throw this.error;
              if (a.closed) return P(a, "Cannot write after close. Assign an onready handler.");
              if (null === e) return y(a);
              "object" == typeof e && (e = e.toString());
              for (var n = 0, i = ""; (i = Y(e, n++)), (a.c = i), i; )
                switch ((a.trackPosition && (a.position++, "\n" === i ? (a.line++, (a.column = 0)) : a.column++), a.state)) {
                  case h.BEGIN:
                    if (((a.state = h.BEGIN_WHITESPACE), "\ufeff" === i)) continue;
                    V(a, i);
                    continue;
                  case h.BEGIN_WHITESPACE:
                    V(a, i);
                    continue;
                  case h.TEXT:
                    if (a.sawRoot && !a.closedRoot) {
                      for (var o = n - 1; i && "<" !== i && "&" !== i; )
                        (i = Y(e, n++)) && a.trackPosition && (a.position++, "\n" === i ? (a.line++, (a.column = 0)) : a.column++);
                      a.textNode += e.substring(o, n - 1);
                    }
                    "<" !== i || (a.sawRoot && a.closedRoot && !a.strict)
                      ? (f(i) || (a.sawRoot && !a.closedRoot) || L(a, "Text data outside of root node."),
                        "&" === i ? (a.state = h.TEXT_ENTITY) : (a.textNode += i))
                      : ((a.state = h.OPEN_WAKA), (a.startTagPosition = a.position));
                    continue;
                  case h.SCRIPT:
                    "<" === i ? (a.state = h.SCRIPT_ENDING) : (a.script += i);
                    continue;
                  case h.SCRIPT_ENDING:
                    "/" === i ? (a.state = h.CLOSE_TAG) : ((a.script += "<" + i), (a.state = h.SCRIPT));
                    continue;
                  case h.OPEN_WAKA:
                    if ("!" === i) (a.state = h.SGML_DECL), (a.sgmlDecl = "");
                    else if (f(i));
                    else if (A(p, i)) (a.state = h.OPEN_TAG), (a.tagName = i);
                    else if ("/" === i) (a.state = h.CLOSE_TAG), (a.tagName = "");
                    else if ("?" === i) (a.state = h.PROC_INST), (a.procInstName = a.procInstBody = "");
                    else {
                      if ((L(a, "Unencoded <"), a.startTagPosition + 1 < a.position)) {
                        var s = a.position - a.startTagPosition;
                        i = new Array(s).join(" ") + i;
                      }
                      (a.textNode += "<" + i), (a.state = h.TEXT);
                    }
                    continue;
                  case h.SGML_DECL:
                    (a.sgmlDecl + i).toUpperCase() === c
                      ? (S(a, "onopencdata"), (a.state = h.CDATA), (a.sgmlDecl = ""), (a.cdata = ""))
                      : a.sgmlDecl + i === "--"
                      ? ((a.state = h.COMMENT), (a.comment = ""), (a.sgmlDecl = ""))
                      : (a.sgmlDecl + i).toUpperCase() === u
                      ? ((a.state = h.DOCTYPE),
                        (a.doctype || a.sawRoot) && L(a, "Inappropriately located doctype declaration"),
                        (a.doctype = ""),
                        (a.sgmlDecl = ""))
                      : ">" === i
                      ? (S(a, "onsgmldeclaration", a.sgmlDecl), (a.sgmlDecl = ""), (a.state = h.TEXT))
                      : d(i)
                      ? ((a.state = h.SGML_DECL_QUOTED), (a.sgmlDecl += i))
                      : (a.sgmlDecl += i);
                    continue;
                  case h.SGML_DECL_QUOTED:
                    i === a.q && ((a.state = h.SGML_DECL), (a.q = "")), (a.sgmlDecl += i);
                    continue;
                  case h.DOCTYPE:
                    ">" === i
                      ? ((a.state = h.TEXT), S(a, "ondoctype", a.doctype), (a.doctype = !0))
                      : ((a.doctype += i), "[" === i ? (a.state = h.DOCTYPE_DTD) : d(i) && ((a.state = h.DOCTYPE_QUOTED), (a.q = i)));
                    continue;
                  case h.DOCTYPE_QUOTED:
                    (a.doctype += i), i === a.q && ((a.q = ""), (a.state = h.DOCTYPE));
                    continue;
                  case h.DOCTYPE_DTD:
                    (a.doctype += i), "]" === i ? (a.state = h.DOCTYPE) : d(i) && ((a.state = h.DOCTYPE_DTD_QUOTED), (a.q = i));
                    continue;
                  case h.DOCTYPE_DTD_QUOTED:
                    (a.doctype += i), i === a.q && ((a.state = h.DOCTYPE_DTD), (a.q = ""));
                    continue;
                  case h.COMMENT:
                    "-" === i ? (a.state = h.COMMENT_ENDING) : (a.comment += i);
                    continue;
                  case h.COMMENT_ENDING:
                    "-" === i
                      ? ((a.state = h.COMMENT_ENDED),
                        (a.comment = R(a.opt, a.comment)),
                        a.comment && S(a, "oncomment", a.comment),
                        (a.comment = ""))
                      : ((a.comment += "-" + i), (a.state = h.COMMENT));
                    continue;
                  case h.COMMENT_ENDED:
                    ">" !== i ? (L(a, "Malformed comment"), (a.comment += "--" + i), (a.state = h.COMMENT)) : (a.state = h.TEXT);
                    continue;
                  case h.CDATA:
                    "]" === i ? (a.state = h.CDATA_ENDING) : (a.cdata += i);
                    continue;
                  case h.CDATA_ENDING:
                    "]" === i ? (a.state = h.CDATA_ENDING_2) : ((a.cdata += "]" + i), (a.state = h.CDATA));
                    continue;
                  case h.CDATA_ENDING_2:
                    ">" === i
                      ? (a.cdata && S(a, "oncdata", a.cdata), S(a, "onclosecdata"), (a.cdata = ""), (a.state = h.TEXT))
                      : "]" === i
                      ? (a.cdata += "]")
                      : ((a.cdata += "]]" + i), (a.state = h.CDATA));
                    continue;
                  case h.PROC_INST:
                    "?" === i ? (a.state = h.PROC_INST_ENDING) : f(i) ? (a.state = h.PROC_INST_BODY) : (a.procInstName += i);
                    continue;
                  case h.PROC_INST_BODY:
                    if (!a.procInstBody && f(i)) continue;
                    "?" === i ? (a.state = h.PROC_INST_ENDING) : (a.procInstBody += i);
                    continue;
                  case h.PROC_INST_ENDING:
                    ">" === i
                      ? (S(a, "onprocessinginstruction", { name: a.procInstName, body: a.procInstBody }),
                        (a.procInstName = a.procInstBody = ""),
                        (a.state = h.TEXT))
                      : ((a.procInstBody += "?" + i), (a.state = h.PROC_INST_BODY));
                    continue;
                  case h.OPEN_TAG:
                    A(m, i)
                      ? (a.tagName += i)
                      : (U(a),
                        ">" === i
                          ? x(a)
                          : "/" === i
                          ? (a.state = h.OPEN_TAG_SLASH)
                          : (f(i) || L(a, "Invalid character in tag name"), (a.state = h.ATTRIB)));
                    continue;
                  case h.OPEN_TAG_SLASH:
                    ">" === i ? (x(a, !0), G(a)) : (L(a, "Forward-slash in opening tag not followed by >"), (a.state = h.ATTRIB));
                    continue;
                  case h.ATTRIB:
                    if (f(i)) continue;
                    ">" === i
                      ? x(a)
                      : "/" === i
                      ? (a.state = h.OPEN_TAG_SLASH)
                      : A(p, i)
                      ? ((a.attribName = i), (a.attribValue = ""), (a.state = h.ATTRIB_NAME))
                      : L(a, "Invalid attribute name");
                    continue;
                  case h.ATTRIB_NAME:
                    "=" === i
                      ? (a.state = h.ATTRIB_VALUE)
                      : ">" === i
                      ? (L(a, "Attribute without value"), (a.attribValue = a.attribName), w(a), x(a))
                      : f(i)
                      ? (a.state = h.ATTRIB_NAME_SAW_WHITE)
                      : A(m, i)
                      ? (a.attribName += i)
                      : L(a, "Invalid attribute name");
                    continue;
                  case h.ATTRIB_NAME_SAW_WHITE:
                    if ("=" === i) a.state = h.ATTRIB_VALUE;
                    else {
                      if (f(i)) continue;
                      L(a, "Attribute without value"),
                        (a.tag.attributes[a.attribName] = ""),
                        (a.attribValue = ""),
                        S(a, "onattribute", { name: a.attribName, value: "" }),
                        (a.attribName = ""),
                        ">" === i
                          ? x(a)
                          : A(p, i)
                          ? ((a.attribName = i), (a.state = h.ATTRIB_NAME))
                          : (L(a, "Invalid attribute name"), (a.state = h.ATTRIB));
                    }
                    continue;
                  case h.ATTRIB_VALUE:
                    if (f(i)) continue;
                    d(i)
                      ? ((a.q = i), (a.state = h.ATTRIB_VALUE_QUOTED))
                      : (L(a, "Unquoted attribute value"), (a.state = h.ATTRIB_VALUE_UNQUOTED), (a.attribValue = i));
                    continue;
                  case h.ATTRIB_VALUE_QUOTED:
                    if (i !== a.q) {
                      "&" === i ? (a.state = h.ATTRIB_VALUE_ENTITY_Q) : (a.attribValue += i);
                      continue;
                    }
                    w(a), (a.q = ""), (a.state = h.ATTRIB_VALUE_CLOSED);
                    continue;
                  case h.ATTRIB_VALUE_CLOSED:
                    f(i)
                      ? (a.state = h.ATTRIB)
                      : ">" === i
                      ? x(a)
                      : "/" === i
                      ? (a.state = h.OPEN_TAG_SLASH)
                      : A(p, i)
                      ? (L(a, "No whitespace between attributes"), (a.attribName = i), (a.attribValue = ""), (a.state = h.ATTRIB_NAME))
                      : L(a, "Invalid attribute name");
                    continue;
                  case h.ATTRIB_VALUE_UNQUOTED:
                    if (!g(i)) {
                      "&" === i ? (a.state = h.ATTRIB_VALUE_ENTITY_U) : (a.attribValue += i);
                      continue;
                    }
                    w(a), ">" === i ? x(a) : (a.state = h.ATTRIB);
                    continue;
                  case h.CLOSE_TAG:
                    if (a.tagName)
                      ">" === i
                        ? G(a)
                        : A(m, i)
                        ? (a.tagName += i)
                        : a.script
                        ? ((a.script += "</" + a.tagName), (a.tagName = ""), (a.state = h.SCRIPT))
                        : (f(i) || L(a, "Invalid tagname in closing tag"), (a.state = h.CLOSE_TAG_SAW_WHITE));
                    else {
                      if (f(i)) continue;
                      I(p, i)
                        ? a.script
                          ? ((a.script += "</" + i), (a.state = h.SCRIPT))
                          : L(a, "Invalid tagname in closing tag.")
                        : (a.tagName = i);
                    }
                    continue;
                  case h.CLOSE_TAG_SAW_WHITE:
                    if (f(i)) continue;
                    ">" === i ? G(a) : L(a, "Invalid characters in closing tag");
                    continue;
                  case h.TEXT_ENTITY:
                  case h.ATTRIB_VALUE_ENTITY_Q:
                  case h.ATTRIB_VALUE_ENTITY_U:
                    var l, T;
                    switch (a.state) {
                      case h.TEXT_ENTITY:
                        (l = h.TEXT), (T = "textNode");
                        break;
                      case h.ATTRIB_VALUE_ENTITY_Q:
                        (l = h.ATTRIB_VALUE_QUOTED), (T = "attribValue");
                        break;
                      case h.ATTRIB_VALUE_ENTITY_U:
                        (l = h.ATTRIB_VALUE_UNQUOTED), (T = "attribValue");
                    }
                    ";" === i
                      ? ((a[T] += M(a)), (a.entity = ""), (a.state = l))
                      : A(a.entity.length ? _ : N, i)
                      ? (a.entity += i)
                      : (L(a, "Invalid character in entity name"), (a[T] += "&" + a.entity + i), (a.entity = ""), (a.state = l));
                    continue;
                  default:
                    throw new Error(a, "Unknown state: " + a.state);
                }
              return (
                a.position >= a.bufferCheckPosition &&
                  (function (e) {
                    for (var a = Math.max(t.MAX_BUFFER_LENGTH, 10), n = 0, i = 0, o = r.length; i < o; i++) {
                      var s = e[r[i]].length;
                      if (s > a)
                        switch (r[i]) {
                          case "textNode":
                            v(e);
                            break;
                          case "cdata":
                            S(e, "oncdata", e.cdata), (e.cdata = "");
                            break;
                          case "script":
                            S(e, "onscript", e.script), (e.script = "");
                            break;
                          default:
                            P(e, "Max buffer length exceeded: " + r[i]);
                        }
                      n = Math.max(n, s);
                    }
                    var c = t.MAX_BUFFER_LENGTH - n;
                    e.bufferCheckPosition = c + e.position;
                  })(a),
                a
              );
            },
            resume: function () {
              return (this.error = null), this;
            },
            close: function () {
              return this.write(null);
            },
            flush: function () {
              var t;
              v((t = this)),
                "" !== t.cdata && (S(t, "oncdata", t.cdata), (t.cdata = "")),
                "" !== t.script && (S(t, "onscript", t.script), (t.script = ""));
            }
          });
        try {
          e = a(296704).Stream;
        } catch (t) {
          e = function () {};
        }
        var o = t.EVENTS.filter(function (t) {
          return "error" !== t && "end" !== t;
        });
        function s(t, a) {
          if (!(this instanceof s)) return new s(t, a);
          e.apply(this), (this._parser = new i(t, a)), (this.writable = !0), (this.readable = !0);
          var n = this;
          (this._parser.onend = function () {
            n.emit("end");
          }),
            (this._parser.onerror = function (t) {
              n.emit("error", t), (n._parser.error = null);
            }),
            (this._decoder = null),
            o.forEach(function (t) {
              Object.defineProperty(n, "on" + t, {
                get: function () {
                  return n._parser["on" + t];
                },
                set: function (e) {
                  if (!e) return n.removeAllListeners(t), (n._parser["on" + t] = e), e;
                  n.on(t, e);
                },
                enumerable: !0,
                configurable: !1
              });
            });
        }
        (s.prototype = Object.create(e.prototype, { constructor: { value: s } })),
          (s.prototype.write = function (t) {
            if ("function" == typeof n && "function" == typeof n.isBuffer && n.isBuffer(t)) {
              if (!this._decoder) {
                var e = a(236835).s;
                this._decoder = new e("utf8");
              }
              t = this._decoder.write(t);
            }
            return this._parser.write(t.toString()), this.emit("data", t), !0;
          }),
          (s.prototype.end = function (t) {
            return t && t.length && this.write(t), this._parser.end(), !0;
          }),
          (s.prototype.on = function (t, a) {
            var n = this;
            return (
              n._parser["on" + t] ||
                -1 === o.indexOf(t) ||
                (n._parser["on" + t] = function () {
                  var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                  e.splice(0, 0, t), n.emit.apply(n, e);
                }),
              e.prototype.on.call(n, t, a)
            );
          });
        var c = "[CDATA[",
          u = "DOCTYPE",
          l = "http://www.w3.org/XML/1998/namespace",
          T = "http://www.w3.org/2000/xmlns/",
          E = { xml: l, xmlns: T },
          p =
            /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          m =
            /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
          N =
            /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
          _ =
            /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
        function f(t) {
          return " " === t || "\n" === t || "\r" === t || "\t" === t;
        }
        function d(t) {
          return '"' === t || "'" === t;
        }
        function g(t) {
          return ">" === t || f(t);
        }
        function A(t, e) {
          return t.test(e);
        }
        function I(t, e) {
          return !A(t, e);
        }
        var D,
          b,
          C,
          h = 0;
        for (var O in ((t.STATE = {
          BEGIN: h++,
          BEGIN_WHITESPACE: h++,
          TEXT: h++,
          TEXT_ENTITY: h++,
          OPEN_WAKA: h++,
          SGML_DECL: h++,
          SGML_DECL_QUOTED: h++,
          DOCTYPE: h++,
          DOCTYPE_QUOTED: h++,
          DOCTYPE_DTD: h++,
          DOCTYPE_DTD_QUOTED: h++,
          COMMENT_STARTING: h++,
          COMMENT: h++,
          COMMENT_ENDING: h++,
          COMMENT_ENDED: h++,
          CDATA: h++,
          CDATA_ENDING: h++,
          CDATA_ENDING_2: h++,
          PROC_INST: h++,
          PROC_INST_BODY: h++,
          PROC_INST_ENDING: h++,
          OPEN_TAG: h++,
          OPEN_TAG_SLASH: h++,
          ATTRIB: h++,
          ATTRIB_NAME: h++,
          ATTRIB_NAME_SAW_WHITE: h++,
          ATTRIB_VALUE: h++,
          ATTRIB_VALUE_QUOTED: h++,
          ATTRIB_VALUE_CLOSED: h++,
          ATTRIB_VALUE_UNQUOTED: h++,
          ATTRIB_VALUE_ENTITY_Q: h++,
          ATTRIB_VALUE_ENTITY_U: h++,
          CLOSE_TAG: h++,
          CLOSE_TAG_SAW_WHITE: h++,
          SCRIPT: h++,
          SCRIPT_ENDING: h++
        }),
        (t.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }),
        (t.ENTITIES = {
          amp: "&",
          gt: ">",
          lt: "<",
          quot: '"',
          apos: "'",
          AElig: 198,
          Aacute: 193,
          Acirc: 194,
          Agrave: 192,
          Aring: 197,
          Atilde: 195,
          Auml: 196,
          Ccedil: 199,
          ETH: 208,
          Eacute: 201,
          Ecirc: 202,
          Egrave: 200,
          Euml: 203,
          Iacute: 205,
          Icirc: 206,
          Igrave: 204,
          Iuml: 207,
          Ntilde: 209,
          Oacute: 211,
          Ocirc: 212,
          Ograve: 210,
          Oslash: 216,
          Otilde: 213,
          Ouml: 214,
          THORN: 222,
          Uacute: 218,
          Ucirc: 219,
          Ugrave: 217,
          Uuml: 220,
          Yacute: 221,
          aacute: 225,
          acirc: 226,
          aelig: 230,
          agrave: 224,
          aring: 229,
          atilde: 227,
          auml: 228,
          ccedil: 231,
          eacute: 233,
          ecirc: 234,
          egrave: 232,
          eth: 240,
          euml: 235,
          iacute: 237,
          icirc: 238,
          igrave: 236,
          iuml: 239,
          ntilde: 241,
          oacute: 243,
          ocirc: 244,
          ograve: 242,
          oslash: 248,
          otilde: 245,
          ouml: 246,
          szlig: 223,
          thorn: 254,
          uacute: 250,
          ucirc: 251,
          ugrave: 249,
          uuml: 252,
          yacute: 253,
          yuml: 255,
          copy: 169,
          reg: 174,
          nbsp: 160,
          iexcl: 161,
          cent: 162,
          pound: 163,
          curren: 164,
          yen: 165,
          brvbar: 166,
          sect: 167,
          uml: 168,
          ordf: 170,
          laquo: 171,
          not: 172,
          shy: 173,
          macr: 175,
          deg: 176,
          plusmn: 177,
          sup1: 185,
          sup2: 178,
          sup3: 179,
          acute: 180,
          micro: 181,
          para: 182,
          middot: 183,
          cedil: 184,
          ordm: 186,
          raquo: 187,
          frac14: 188,
          frac12: 189,
          frac34: 190,
          iquest: 191,
          times: 215,
          divide: 247,
          OElig: 338,
          oelig: 339,
          Scaron: 352,
          scaron: 353,
          Yuml: 376,
          fnof: 402,
          circ: 710,
          tilde: 732,
          Alpha: 913,
          Beta: 914,
          Gamma: 915,
          Delta: 916,
          Epsilon: 917,
          Zeta: 918,
          Eta: 919,
          Theta: 920,
          Iota: 921,
          Kappa: 922,
          Lambda: 923,
          Mu: 924,
          Nu: 925,
          Xi: 926,
          Omicron: 927,
          Pi: 928,
          Rho: 929,
          Sigma: 931,
          Tau: 932,
          Upsilon: 933,
          Phi: 934,
          Chi: 935,
          Psi: 936,
          Omega: 937,
          alpha: 945,
          beta: 946,
          gamma: 947,
          delta: 948,
          epsilon: 949,
          zeta: 950,
          eta: 951,
          theta: 952,
          iota: 953,
          kappa: 954,
          lambda: 955,
          mu: 956,
          nu: 957,
          xi: 958,
          omicron: 959,
          pi: 960,
          rho: 961,
          sigmaf: 962,
          sigma: 963,
          tau: 964,
          upsilon: 965,
          phi: 966,
          chi: 967,
          psi: 968,
          omega: 969,
          thetasym: 977,
          upsih: 978,
          piv: 982,
          ensp: 8194,
          emsp: 8195,
          thinsp: 8201,
          zwnj: 8204,
          zwj: 8205,
          lrm: 8206,
          rlm: 8207,
          ndash: 8211,
          mdash: 8212,
          lsquo: 8216,
          rsquo: 8217,
          sbquo: 8218,
          ldquo: 8220,
          rdquo: 8221,
          bdquo: 8222,
          dagger: 8224,
          Dagger: 8225,
          bull: 8226,
          hellip: 8230,
          permil: 8240,
          prime: 8242,
          Prime: 8243,
          lsaquo: 8249,
          rsaquo: 8250,
          oline: 8254,
          frasl: 8260,
          euro: 8364,
          image: 8465,
          weierp: 8472,
          real: 8476,
          trade: 8482,
          alefsym: 8501,
          larr: 8592,
          uarr: 8593,
          rarr: 8594,
          darr: 8595,
          harr: 8596,
          crarr: 8629,
          lArr: 8656,
          uArr: 8657,
          rArr: 8658,
          dArr: 8659,
          hArr: 8660,
          forall: 8704,
          part: 8706,
          exist: 8707,
          empty: 8709,
          nabla: 8711,
          isin: 8712,
          notin: 8713,
          ni: 8715,
          prod: 8719,
          sum: 8721,
          minus: 8722,
          lowast: 8727,
          radic: 8730,
          prop: 8733,
          infin: 8734,
          ang: 8736,
          and: 8743,
          or: 8744,
          cap: 8745,
          cup: 8746,
          int: 8747,
          there4: 8756,
          sim: 8764,
          cong: 8773,
          asymp: 8776,
          ne: 8800,
          equiv: 8801,
          le: 8804,
          ge: 8805,
          sub: 8834,
          sup: 8835,
          nsub: 8836,
          sube: 8838,
          supe: 8839,
          oplus: 8853,
          otimes: 8855,
          perp: 8869,
          sdot: 8901,
          lceil: 8968,
          rceil: 8969,
          lfloor: 8970,
          rfloor: 8971,
          lang: 9001,
          rang: 9002,
          loz: 9674,
          spades: 9824,
          clubs: 9827,
          hearts: 9829,
          diams: 9830
        }),
        Object.keys(t.ENTITIES).forEach(function (e) {
          var a = t.ENTITIES[e],
            n = "number" == typeof a ? String.fromCharCode(a) : a;
          t.ENTITIES[e] = n;
        }),
        t.STATE))
          t.STATE[t.STATE[O]] = O;
        function F(t, e, a) {
          t[e] && t[e](a);
        }
        function S(t, e, a) {
          t.textNode && v(t), F(t, e, a);
        }
        function v(t) {
          (t.textNode = R(t.opt, t.textNode)), t.textNode && F(t, "ontext", t.textNode), (t.textNode = "");
        }
        function R(t, e) {
          return t.trim && (e = e.trim()), t.normalize && (e = e.replace(/\s+/g, " ")), e;
        }
        function P(t, e) {
          return (
            v(t),
            t.trackPosition && (e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c),
            (e = new Error(e)),
            (t.error = e),
            F(t, "onerror", e),
            t
          );
        }
        function y(t) {
          return (
            t.sawRoot && !t.closedRoot && L(t, "Unclosed root tag"),
            t.state !== h.BEGIN && t.state !== h.BEGIN_WHITESPACE && t.state !== h.TEXT && P(t, "Unexpected end"),
            v(t),
            (t.c = ""),
            (t.closed = !0),
            F(t, "onend"),
            i.call(t, t.strict, t.opt),
            t
          );
        }
        function L(t, e) {
          if ("object" != typeof t || !(t instanceof i)) throw new Error("bad call to strictFail");
          t.strict && P(t, e);
        }
        function U(t) {
          t.strict || (t.tagName = t.tagName[t.looseCase]());
          var e = t.tags[t.tags.length - 1] || t,
            a = (t.tag = { name: t.tagName, attributes: {} });
          t.opt.xmlns && (a.ns = e.ns), (t.attribList.length = 0), S(t, "onopentagstart", a);
        }
        function B(t, e) {
          var a = t.indexOf(":") < 0 ? ["", t] : t.split(":"),
            n = a[0],
            r = a[1];
          return e && "xmlns" === t && ((n = "xmlns"), (r = "")), { prefix: n, local: r };
        }
        function w(t) {
          if (
            (t.strict || (t.attribName = t.attribName[t.looseCase]()),
            -1 !== t.attribList.indexOf(t.attribName) || t.tag.attributes.hasOwnProperty(t.attribName))
          )
            t.attribName = t.attribValue = "";
          else {
            if (t.opt.xmlns) {
              var e = B(t.attribName, !0),
                a = e.prefix,
                n = e.local;
              if ("xmlns" === a)
                if ("xml" === n && t.attribValue !== l) L(t, "xml: prefix must be bound to " + l + "\nActual: " + t.attribValue);
                else if ("xmlns" === n && t.attribValue !== T) L(t, "xmlns: prefix must be bound to " + T + "\nActual: " + t.attribValue);
                else {
                  var r = t.tag,
                    i = t.tags[t.tags.length - 1] || t;
                  r.ns === i.ns && (r.ns = Object.create(i.ns)), (r.ns[n] = t.attribValue);
                }
              t.attribList.push([t.attribName, t.attribValue]);
            } else (t.tag.attributes[t.attribName] = t.attribValue), S(t, "onattribute", { name: t.attribName, value: t.attribValue });
            t.attribName = t.attribValue = "";
          }
        }
        function x(t, e) {
          if (t.opt.xmlns) {
            var a = t.tag,
              n = B(t.tagName);
            (a.prefix = n.prefix),
              (a.local = n.local),
              (a.uri = a.ns[n.prefix] || ""),
              a.prefix && !a.uri && (L(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), (a.uri = n.prefix));
            var r = t.tags[t.tags.length - 1] || t;
            a.ns &&
              r.ns !== a.ns &&
              Object.keys(a.ns).forEach(function (e) {
                S(t, "onopennamespace", { prefix: e, uri: a.ns[e] });
              });
            for (var i = 0, o = t.attribList.length; i < o; i++) {
              var s = t.attribList[i],
                c = s[0],
                u = s[1],
                l = B(c, !0),
                T = l.prefix,
                E = l.local,
                p = "" === T ? "" : a.ns[T] || "",
                m = { name: c, value: u, prefix: T, local: E, uri: p };
              T && "xmlns" !== T && !p && (L(t, "Unbound namespace prefix: " + JSON.stringify(T)), (m.uri = T)),
                (t.tag.attributes[c] = m),
                S(t, "onattribute", m);
            }
            t.attribList.length = 0;
          }
          (t.tag.isSelfClosing = !!e),
            (t.sawRoot = !0),
            t.tags.push(t.tag),
            S(t, "onopentag", t.tag),
            e ||
              (t.noscript || "script" !== t.tagName.toLowerCase() ? (t.state = h.TEXT) : (t.state = h.SCRIPT),
              (t.tag = null),
              (t.tagName = "")),
            (t.attribName = t.attribValue = ""),
            (t.attribList.length = 0);
        }
        function G(t) {
          if (!t.tagName) return L(t, "Weird empty close tag."), (t.textNode += "</>"), void (t.state = h.TEXT);
          if (t.script) {
            if ("script" !== t.tagName) return (t.script += "</" + t.tagName + ">"), (t.tagName = ""), void (t.state = h.SCRIPT);
            S(t, "onscript", t.script), (t.script = "");
          }
          var e = t.tags.length,
            a = t.tagName;
          t.strict || (a = a[t.looseCase]());
          for (var n = a; e-- && t.tags[e].name !== n; ) L(t, "Unexpected close tag");
          if (e < 0) return L(t, "Unmatched closing tag: " + t.tagName), (t.textNode += "</" + t.tagName + ">"), void (t.state = h.TEXT);
          t.tagName = a;
          for (var r = t.tags.length; r-- > e; ) {
            var i = (t.tag = t.tags.pop());
            (t.tagName = t.tag.name), S(t, "onclosetag", t.tagName);
            var o = {};
            for (var s in i.ns) o[s] = i.ns[s];
            var c = t.tags[t.tags.length - 1] || t;
            t.opt.xmlns &&
              i.ns !== c.ns &&
              Object.keys(i.ns).forEach(function (e) {
                var a = i.ns[e];
                S(t, "onclosenamespace", { prefix: e, uri: a });
              });
          }
          0 === e && (t.closedRoot = !0), (t.tagName = t.attribValue = t.attribName = ""), (t.attribList.length = 0), (t.state = h.TEXT);
        }
        function M(t) {
          var e,
            a = t.entity,
            n = a.toLowerCase(),
            r = "";
          return t.ENTITIES[a]
            ? t.ENTITIES[a]
            : t.ENTITIES[n]
            ? t.ENTITIES[n]
            : ("#" === (a = n).charAt(0) &&
                ("x" === a.charAt(1)
                  ? ((a = a.slice(2)), (r = (e = parseInt(a, 16)).toString(16)))
                  : ((a = a.slice(1)), (r = (e = parseInt(a, 10)).toString(10)))),
              (a = a.replace(/^0+/, "")),
              isNaN(e) || r.toLowerCase() !== a ? (L(t, "Invalid character entity"), "&" + t.entity + ";") : String.fromCodePoint(e));
        }
        function V(t, e) {
          "<" === e
            ? ((t.state = h.OPEN_WAKA), (t.startTagPosition = t.position))
            : f(e) || (L(t, "Non-whitespace before first tag."), (t.textNode = e), (t.state = h.TEXT));
        }
        function Y(t, e) {
          var a = "";
          return e < t.length && (a = t.charAt(e)), a;
        }
        (h = t.STATE),
          String.fromCodePoint ||
            ((D = String.fromCharCode),
            (b = Math.floor),
            (C = function () {
              var t,
                e,
                a = [],
                n = -1,
                r = arguments.length;
              if (!r) return "";
              for (var i = ""; ++n < r; ) {
                var o = Number(arguments[n]);
                if (!isFinite(o) || o < 0 || o > 1114111 || b(o) !== o) throw RangeError("Invalid code point: " + o);
                o <= 65535 ? a.push(o) : ((t = 55296 + ((o -= 65536) >> 10)), (e = (o % 1024) + 56320), a.push(t, e)),
                  (n + 1 === r || a.length > 16384) && ((i += D.apply(null, a)), (a.length = 0));
              }
              return i;
            }),
            Object.defineProperty
              ? Object.defineProperty(String, "fromCodePoint", { value: C, configurable: !0, writable: !0 })
              : (String.fromCodePoint = C));
      })(e);
    }
  }
]);
