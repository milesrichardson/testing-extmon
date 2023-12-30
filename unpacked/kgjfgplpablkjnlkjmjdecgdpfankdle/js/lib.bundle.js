/*! For license information please see lib.bundle.js.LICENSE.txt */
(self.webpackChunkextension = self.webpackChunkextension || []).push([
  [647],
  {
    856: function (e) {
      e.exports = (function () {
        "use strict";
        function e(t) {
          return (
            (e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            t(e, n)
          );
        }
        function n() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }
        function r(e, o, i) {
          return (
            (r = n()
              ? Reflect.construct
              : function (e, n, r) {
                  var o = [null];
                  o.push.apply(o, n);
                  var i = new (Function.bind.apply(e, o))();
                  return r && t(i, r.prototype), i;
                }),
            r.apply(null, arguments)
          );
        }
        function o(e) {
          return i(e) || a(e) || s(e) || u();
        }
        function i(e) {
          if (Array.isArray(e)) return l(e);
        }
        function a(e) {
          if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
        }
        function s(e, t) {
          if (e) {
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? l(e, t)
                : void 0
            );
          }
        }
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function u() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c = Object.hasOwnProperty,
          f = Object.setPrototypeOf,
          p = Object.isFrozen,
          d = Object.getPrototypeOf,
          h = Object.getOwnPropertyDescriptor,
          m = Object.freeze,
          g = Object.seal,
          y = Object.create,
          v = "undefined" != typeof Reflect && Reflect,
          b = v.apply,
          x = v.construct;
        b ||
          (b = function (e, t, n) {
            return e.apply(t, n);
          }),
          m ||
            (m = function (e) {
              return e;
            }),
          g ||
            (g = function (e) {
              return e;
            }),
          x ||
            (x = function (e, t) {
              return r(e, o(t));
            });
        var T = O(Array.prototype.forEach),
          w = O(Array.prototype.pop),
          E = O(Array.prototype.push),
          C = O(String.prototype.toLowerCase),
          S = O(String.prototype.toString),
          A = O(String.prototype.match),
          k = O(String.prototype.replace),
          N = O(String.prototype.indexOf),
          D = O(String.prototype.trim),
          L = O(RegExp.prototype.test),
          j = R(TypeError);
        function O(e) {
          return function (t) {
            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
            return b(e, t, r);
          };
        }
        function R(e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
            return x(e, n);
          };
        }
        function M(e, t, n) {
          var r;
          (n = null !== (r = n) && void 0 !== r ? r : C), f && f(e, null);
          for (var o = t.length; o--; ) {
            var i = t[o];
            if ("string" == typeof i) {
              var a = n(i);
              a !== i && (p(t) || (t[o] = a), (i = a));
            }
            e[i] = !0;
          }
          return e;
        }
        function H(e) {
          var t,
            n = y(null);
          for (t in e) !0 === b(c, e, [t]) && (n[t] = e[t]);
          return n;
        }
        function _(e, t) {
          for (; null !== e; ) {
            var n = h(e, t);
            if (n) {
              if (n.get) return O(n.get);
              if ("function" == typeof n.value) return O(n.value);
            }
            e = d(e);
          }
          function r(e) {
            return console.warn("fallback value for", e), null;
          }
          return r;
        }
        var I = m([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr"
          ]),
          q = m([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern"
          ]),
          P = m([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence"
          ]),
          F = m([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "fedropshadow",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use"
          ]),
          W = m([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover"
          ]),
          B = m([
            "maction",
            "maligngroup",
            "malignmark",
            "mlongdiv",
            "mscarries",
            "mscarry",
            "msgroup",
            "mstack",
            "msline",
            "msrow",
            "semantics",
            "annotation",
            "annotation-xml",
            "mprescripts",
            "none"
          ]),
          U = m(["#text"]),
          z = m([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "nonce",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "xmlns",
            "slot"
          ]),
          $ = m([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "targetx",
            "targety",
            "transform",
            "transform-origin",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan"
          ]),
          G = m([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns"
          ]),
          X = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          V = g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          Y = g(/<%[\w\W]*|[\w\W]*%>/gm),
          K = g(/\${[\w\W]*}/gm),
          Q = g(/^data-[\-\w.\u00B7-\uFFFF]/),
          J = g(/^aria-[\-\w]+$/),
          Z = g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          ee = g(/^(?:\w+script|data):/i),
          te = g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          ne = g(/^html$/i),
          re = function () {
            return "undefined" == typeof window ? null : window;
          },
          oe = function (t, n) {
            if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
            var r = null,
              o = "data-tt-policy-suffix";
            n.currentScript && n.currentScript.hasAttribute(o) && (r = n.currentScript.getAttribute(o));
            var i = "dompurify" + (r ? "#" + r : "");
            try {
              return t.createPolicy(i, {
                createHTML: function (e) {
                  return e;
                },
                createScriptURL: function (e) {
                  return e;
                }
              });
            } catch (e) {
              return console.warn("TrustedTypes policy " + i + " could not be created."), null;
            }
          };
        function ie() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re(),
            n = function (e) {
              return ie(e);
            };
          if (((n.version = "2.4.7"), (n.removed = []), !t || !t.document || 9 !== t.document.nodeType)) return (n.isSupported = !1), n;
          var r = t.document,
            i = t.document,
            a = t.DocumentFragment,
            s = t.HTMLTemplateElement,
            l = t.Node,
            u = t.Element,
            c = t.NodeFilter,
            f = t.NamedNodeMap,
            p = void 0 === f ? t.NamedNodeMap || t.MozNamedAttrMap : f,
            d = t.HTMLFormElement,
            h = t.DOMParser,
            g = t.trustedTypes,
            y = u.prototype,
            v = _(y, "cloneNode"),
            b = _(y, "nextSibling"),
            x = _(y, "childNodes"),
            O = _(y, "parentNode");
          if ("function" == typeof s) {
            var R = i.createElement("template");
            R.content && R.content.ownerDocument && (i = R.content.ownerDocument);
          }
          var ae = oe(g, r),
            se = ae ? ae.createHTML("") : "",
            le = i,
            ue = le.implementation,
            ce = le.createNodeIterator,
            fe = le.createDocumentFragment,
            pe = le.getElementsByTagName,
            de = r.importNode,
            he = {};
          try {
            he = H(i).documentMode ? i.documentMode : {};
          } catch (e) {}
          var me = {};
          n.isSupported = "function" == typeof O && ue && void 0 !== ue.createHTMLDocument && 9 !== he;
          var ge,
            ye,
            ve = V,
            be = Y,
            xe = K,
            Te = Q,
            we = J,
            Ee = ee,
            Ce = te,
            Se = Z,
            Ae = null,
            ke = M({}, [].concat(o(I), o(q), o(P), o(W), o(U))),
            Ne = null,
            De = M({}, [].concat(o(z), o($), o(G), o(X))),
            Le = Object.seal(
              Object.create(null, {
                tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
                allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 }
              })
            ),
            je = null,
            Oe = null,
            Re = !0,
            Me = !0,
            He = !1,
            _e = !0,
            Ie = !1,
            qe = !1,
            Pe = !1,
            Fe = !1,
            We = !1,
            Be = !1,
            Ue = !1,
            ze = !0,
            $e = !1,
            Ge = "user-content-",
            Xe = !0,
            Ve = !1,
            Ye = {},
            Ke = null,
            Qe = M({}, [
              "annotation-xml",
              "audio",
              "colgroup",
              "desc",
              "foreignobject",
              "head",
              "iframe",
              "math",
              "mi",
              "mn",
              "mo",
              "ms",
              "mtext",
              "noembed",
              "noframes",
              "noscript",
              "plaintext",
              "script",
              "style",
              "svg",
              "template",
              "thead",
              "title",
              "video",
              "xmp"
            ]),
            Je = null,
            Ze = M({}, ["audio", "video", "img", "source", "image", "track"]),
            et = null,
            tt = M({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns"
            ]),
            nt = "http://www.w3.org/1998/Math/MathML",
            rt = "http://www.w3.org/2000/svg",
            ot = "http://www.w3.org/1999/xhtml",
            it = ot,
            at = !1,
            st = null,
            lt = M({}, [nt, rt, ot], S),
            ut = ["application/xhtml+xml", "text/html"],
            ct = "text/html",
            ft = null,
            pt = i.createElement("form"),
            dt = function (e) {
              return e instanceof RegExp || e instanceof Function;
            },
            ht = function (t) {
              (ft && ft === t) ||
                ((t && "object" === e(t)) || (t = {}),
                (t = H(t)),
                (ge = ge = -1 === ut.indexOf(t.PARSER_MEDIA_TYPE) ? ct : t.PARSER_MEDIA_TYPE),
                (ye = "application/xhtml+xml" === ge ? S : C),
                (Ae = "ALLOWED_TAGS" in t ? M({}, t.ALLOWED_TAGS, ye) : ke),
                (Ne = "ALLOWED_ATTR" in t ? M({}, t.ALLOWED_ATTR, ye) : De),
                (st = "ALLOWED_NAMESPACES" in t ? M({}, t.ALLOWED_NAMESPACES, S) : lt),
                (et = "ADD_URI_SAFE_ATTR" in t ? M(H(tt), t.ADD_URI_SAFE_ATTR, ye) : tt),
                (Je = "ADD_DATA_URI_TAGS" in t ? M(H(Ze), t.ADD_DATA_URI_TAGS, ye) : Ze),
                (Ke = "FORBID_CONTENTS" in t ? M({}, t.FORBID_CONTENTS, ye) : Qe),
                (je = "FORBID_TAGS" in t ? M({}, t.FORBID_TAGS, ye) : {}),
                (Oe = "FORBID_ATTR" in t ? M({}, t.FORBID_ATTR, ye) : {}),
                (Ye = "USE_PROFILES" in t && t.USE_PROFILES),
                (Re = !1 !== t.ALLOW_ARIA_ATTR),
                (Me = !1 !== t.ALLOW_DATA_ATTR),
                (He = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (_e = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                (Ie = t.SAFE_FOR_TEMPLATES || !1),
                (qe = t.WHOLE_DOCUMENT || !1),
                (We = t.RETURN_DOM || !1),
                (Be = t.RETURN_DOM_FRAGMENT || !1),
                (Ue = t.RETURN_TRUSTED_TYPE || !1),
                (Fe = t.FORCE_BODY || !1),
                (ze = !1 !== t.SANITIZE_DOM),
                ($e = t.SANITIZE_NAMED_PROPS || !1),
                (Xe = !1 !== t.KEEP_CONTENT),
                (Ve = t.IN_PLACE || !1),
                (Se = t.ALLOWED_URI_REGEXP || Se),
                (it = t.NAMESPACE || ot),
                (Le = t.CUSTOM_ELEMENT_HANDLING || {}),
                t.CUSTOM_ELEMENT_HANDLING &&
                  dt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (Le.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                t.CUSTOM_ELEMENT_HANDLING &&
                  dt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (Le.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                t.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements &&
                  (Le.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                Ie && (Me = !1),
                Be && (We = !0),
                Ye &&
                  ((Ae = M({}, o(U))),
                  (Ne = []),
                  !0 === Ye.html && (M(Ae, I), M(Ne, z)),
                  !0 === Ye.svg && (M(Ae, q), M(Ne, $), M(Ne, X)),
                  !0 === Ye.svgFilters && (M(Ae, P), M(Ne, $), M(Ne, X)),
                  !0 === Ye.mathMl && (M(Ae, W), M(Ne, G), M(Ne, X))),
                t.ADD_TAGS && (Ae === ke && (Ae = H(Ae)), M(Ae, t.ADD_TAGS, ye)),
                t.ADD_ATTR && (Ne === De && (Ne = H(Ne)), M(Ne, t.ADD_ATTR, ye)),
                t.ADD_URI_SAFE_ATTR && M(et, t.ADD_URI_SAFE_ATTR, ye),
                t.FORBID_CONTENTS && (Ke === Qe && (Ke = H(Ke)), M(Ke, t.FORBID_CONTENTS, ye)),
                Xe && (Ae["#text"] = !0),
                qe && M(Ae, ["html", "head", "body"]),
                Ae.table && (M(Ae, ["tbody"]), delete je.tbody),
                m && m(t),
                (ft = t));
            },
            mt = M({}, ["mi", "mo", "mn", "ms", "mtext"]),
            gt = M({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            yt = M({}, ["title", "style", "font", "a", "script"]),
            vt = M({}, q);
          M(vt, P), M(vt, F);
          var bt = M({}, W);
          M(bt, B);
          var xt = function (e) {
              var t = O(e);
              (t && t.tagName) || (t = { namespaceURI: it, tagName: "template" });
              var n = C(e.tagName),
                r = C(t.tagName);
              return (
                !!st[e.namespaceURI] &&
                (e.namespaceURI === rt
                  ? t.namespaceURI === ot
                    ? "svg" === n
                    : t.namespaceURI === nt
                    ? "svg" === n && ("annotation-xml" === r || mt[r])
                    : Boolean(vt[n])
                  : e.namespaceURI === nt
                  ? t.namespaceURI === ot
                    ? "math" === n
                    : t.namespaceURI === rt
                    ? "math" === n && gt[r]
                    : Boolean(bt[n])
                  : e.namespaceURI === ot
                  ? !(t.namespaceURI === rt && !gt[r]) && !(t.namespaceURI === nt && !mt[r]) && !bt[n] && (yt[n] || !vt[n])
                  : !("application/xhtml+xml" !== ge || !st[e.namespaceURI]))
              );
            },
            Tt = function (e) {
              E(n.removed, { element: e });
              try {
                e.parentNode.removeChild(e);
              } catch (t) {
                try {
                  e.outerHTML = se;
                } catch (t) {
                  e.remove();
                }
              }
            },
            wt = function (e, t) {
              try {
                E(n.removed, { attribute: t.getAttributeNode(e), from: t });
              } catch (e) {
                E(n.removed, { attribute: null, from: t });
              }
              if ((t.removeAttribute(e), "is" === e && !Ne[e]))
                if (We || Be)
                  try {
                    Tt(t);
                  } catch (e) {}
                else
                  try {
                    t.setAttribute(e, "");
                  } catch (e) {}
            },
            Et = function (e) {
              var t, n;
              if (Fe) e = "<remove></remove>" + e;
              else {
                var r = A(e, /^[\r\n\t ]+/);
                n = r && r[0];
              }
              "application/xhtml+xml" === ge &&
                it === ot &&
                (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var o = ae ? ae.createHTML(e) : e;
              if (it === ot)
                try {
                  t = new h().parseFromString(o, ge);
                } catch (e) {}
              if (!t || !t.documentElement) {
                t = ue.createDocument(it, "template", null);
                try {
                  t.documentElement.innerHTML = at ? se : o;
                } catch (e) {}
              }
              var a = t.body || t.documentElement;
              return (
                e && n && a.insertBefore(i.createTextNode(n), a.childNodes[0] || null),
                it === ot ? pe.call(t, qe ? "html" : "body")[0] : qe ? t.documentElement : a
              );
            },
            Ct = function (e) {
              return ce.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, null, !1);
            },
            St = function (e) {
              return (
                e instanceof d &&
                ("string" != typeof e.nodeName ||
                  "string" != typeof e.textContent ||
                  "function" != typeof e.removeChild ||
                  !(e.attributes instanceof p) ||
                  "function" != typeof e.removeAttribute ||
                  "function" != typeof e.setAttribute ||
                  "string" != typeof e.namespaceURI ||
                  "function" != typeof e.insertBefore ||
                  "function" != typeof e.hasChildNodes)
              );
            },
            At = function (t) {
              return "object" === e(l)
                ? t instanceof l
                : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName;
            },
            kt = function (e, t, r) {
              me[e] &&
                T(me[e], function (e) {
                  e.call(n, t, r, ft);
                });
            },
            Nt = function (e) {
              var t;
              if ((kt("beforeSanitizeElements", e, null), St(e))) return Tt(e), !0;
              if (L(/[\u0080-\uFFFF]/, e.nodeName)) return Tt(e), !0;
              var r = ye(e.nodeName);
              if (
                (kt("uponSanitizeElement", e, { tagName: r, allowedTags: Ae }),
                e.hasChildNodes() &&
                  !At(e.firstElementChild) &&
                  (!At(e.content) || !At(e.content.firstElementChild)) &&
                  L(/<[/\w]/g, e.innerHTML) &&
                  L(/<[/\w]/g, e.textContent))
              )
                return Tt(e), !0;
              if ("select" === r && L(/<template/i, e.innerHTML)) return Tt(e), !0;
              if (!Ae[r] || je[r]) {
                if (!je[r] && Lt(r)) {
                  if (Le.tagNameCheck instanceof RegExp && L(Le.tagNameCheck, r)) return !1;
                  if (Le.tagNameCheck instanceof Function && Le.tagNameCheck(r)) return !1;
                }
                if (Xe && !Ke[r]) {
                  var o = O(e) || e.parentNode,
                    i = x(e) || e.childNodes;
                  if (i && o) for (var a = i.length - 1; a >= 0; --a) o.insertBefore(v(i[a], !0), b(e));
                }
                return Tt(e), !0;
              }
              return e instanceof u && !xt(e)
                ? (Tt(e), !0)
                : ("noscript" !== r && "noembed" !== r && "noframes" !== r) || !L(/<\/no(script|embed|frames)/i, e.innerHTML)
                ? (Ie &&
                    3 === e.nodeType &&
                    ((t = e.textContent),
                    (t = k(t, ve, " ")),
                    (t = k(t, be, " ")),
                    (t = k(t, xe, " ")),
                    e.textContent !== t && (E(n.removed, { element: e.cloneNode() }), (e.textContent = t))),
                  kt("afterSanitizeElements", e, null),
                  !1)
                : (Tt(e), !0);
            },
            Dt = function (e, t, n) {
              if (ze && ("id" === t || "name" === t) && (n in i || n in pt)) return !1;
              if (Me && !Oe[t] && L(Te, t));
              else if (Re && L(we, t));
              else if (!Ne[t] || Oe[t]) {
                if (
                  !(
                    (Lt(e) &&
                      ((Le.tagNameCheck instanceof RegExp && L(Le.tagNameCheck, e)) ||
                        (Le.tagNameCheck instanceof Function && Le.tagNameCheck(e))) &&
                      ((Le.attributeNameCheck instanceof RegExp && L(Le.attributeNameCheck, t)) ||
                        (Le.attributeNameCheck instanceof Function && Le.attributeNameCheck(t)))) ||
                    ("is" === t &&
                      Le.allowCustomizedBuiltInElements &&
                      ((Le.tagNameCheck instanceof RegExp && L(Le.tagNameCheck, n)) ||
                        (Le.tagNameCheck instanceof Function && Le.tagNameCheck(n))))
                  )
                )
                  return !1;
              } else if (et[t]);
              else if (L(Se, k(n, Ce, "")));
              else if (("src" !== t && "xlink:href" !== t && "href" !== t) || "script" === e || 0 !== N(n, "data:") || !Je[e])
                if (He && !L(Ee, k(n, Ce, "")));
                else if (n) return !1;
              return !0;
            },
            Lt = function (e) {
              return e.indexOf("-") > 0;
            },
            jt = function (t) {
              var r, o, i, a;
              kt("beforeSanitizeAttributes", t, null);
              var s = t.attributes;
              if (s) {
                var l = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: Ne };
                for (a = s.length; a--; ) {
                  var u = (r = s[a]),
                    c = u.name,
                    f = u.namespaceURI;
                  if (
                    ((o = "value" === c ? r.value : D(r.value)),
                    (i = ye(c)),
                    (l.attrName = i),
                    (l.attrValue = o),
                    (l.keepAttr = !0),
                    (l.forceKeepAttr = void 0),
                    kt("uponSanitizeAttribute", t, l),
                    (o = l.attrValue),
                    !l.forceKeepAttr && (wt(c, t), l.keepAttr))
                  )
                    if (_e || !L(/\/>/i, o)) {
                      Ie && ((o = k(o, ve, " ")), (o = k(o, be, " ")), (o = k(o, xe, " ")));
                      var p = ye(t.nodeName);
                      if (Dt(p, i, o)) {
                        if (
                          (!$e || ("id" !== i && "name" !== i) || (wt(c, t), (o = Ge + o)),
                          ae && "object" === e(g) && "function" == typeof g.getAttributeType)
                        )
                          if (f);
                          else
                            switch (g.getAttributeType(p, i)) {
                              case "TrustedHTML":
                                o = ae.createHTML(o);
                                break;
                              case "TrustedScriptURL":
                                o = ae.createScriptURL(o);
                            }
                        try {
                          f ? t.setAttributeNS(f, c, o) : t.setAttribute(c, o), w(n.removed);
                        } catch (e) {}
                      }
                    } else wt(c, t);
                }
                kt("afterSanitizeAttributes", t, null);
              }
            },
            Ot = function e(t) {
              var n,
                r = Ct(t);
              for (kt("beforeSanitizeShadowDOM", t, null); (n = r.nextNode()); )
                kt("uponSanitizeShadowNode", n, null), Nt(n) || (n.content instanceof a && e(n.content), jt(n));
              kt("afterSanitizeShadowDOM", t, null);
            };
          return (
            (n.sanitize = function (o) {
              var i,
                s,
                u,
                c,
                f,
                p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (((at = !o) && (o = "\x3c!--\x3e"), "string" != typeof o && !At(o))) {
                if ("function" != typeof o.toString) throw j("toString is not a function");
                if ("string" != typeof (o = o.toString())) throw j("dirty is not a string, aborting");
              }
              if (!n.isSupported) {
                if ("object" === e(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                  if ("string" == typeof o) return t.toStaticHTML(o);
                  if (At(o)) return t.toStaticHTML(o.outerHTML);
                }
                return o;
              }
              if ((Pe || ht(p), (n.removed = []), "string" == typeof o && (Ve = !1), Ve)) {
                if (o.nodeName) {
                  var d = ye(o.nodeName);
                  if (!Ae[d] || je[d]) throw j("root node is forbidden and cannot be sanitized in-place");
                }
              } else if (o instanceof l)
                (1 === (s = (i = Et("\x3c!----\x3e")).ownerDocument.importNode(o, !0)).nodeType && "BODY" === s.nodeName) ||
                "HTML" === s.nodeName
                  ? (i = s)
                  : i.appendChild(s);
              else {
                if (!We && !Ie && !qe && -1 === o.indexOf("<")) return ae && Ue ? ae.createHTML(o) : o;
                if (!(i = Et(o))) return We ? null : Ue ? se : "";
              }
              i && Fe && Tt(i.firstChild);
              for (var h = Ct(Ve ? o : i); (u = h.nextNode()); )
                (3 === u.nodeType && u === c) || Nt(u) || (u.content instanceof a && Ot(u.content), jt(u), (c = u));
              if (((c = null), Ve)) return o;
              if (We) {
                if (Be) for (f = fe.call(i.ownerDocument); i.firstChild; ) f.appendChild(i.firstChild);
                else f = i;
                return (Ne.shadowroot || Ne.shadowrootmod) && (f = de.call(r, f, !0)), f;
              }
              var m = qe ? i.outerHTML : i.innerHTML;
              return (
                qe &&
                  Ae["!doctype"] &&
                  i.ownerDocument &&
                  i.ownerDocument.doctype &&
                  i.ownerDocument.doctype.name &&
                  L(ne, i.ownerDocument.doctype.name) &&
                  (m = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + m),
                Ie && ((m = k(m, ve, " ")), (m = k(m, be, " ")), (m = k(m, xe, " "))),
                ae && Ue ? ae.createHTML(m) : m
              );
            }),
            (n.setConfig = function (e) {
              ht(e), (Pe = !0);
            }),
            (n.clearConfig = function () {
              (ft = null), (Pe = !1);
            }),
            (n.isValidAttribute = function (e, t, n) {
              ft || ht({});
              var r = ye(e),
                o = ye(t);
              return Dt(r, o, n);
            }),
            (n.addHook = function (e, t) {
              "function" == typeof t && ((me[e] = me[e] || []), E(me[e], t));
            }),
            (n.removeHook = function (e) {
              if (me[e]) return w(me[e]);
            }),
            (n.removeHooks = function (e) {
              me[e] && (me[e] = []);
            }),
            (n.removeAllHooks = function () {
              me = {};
            }),
            n
          );
        }
        return ie();
      })();
    },
    573: (e) => {
      "use strict";
      var t = /["'&<>]/;
      e.exports = function (e) {
        var n,
          r = "" + e,
          o = t.exec(r);
        if (!o) return r;
        var i = "",
          a = 0,
          s = 0;
        for (a = o.index; a < r.length; a++) {
          switch (r.charCodeAt(a)) {
            case 34:
              n = "&quot;";
              break;
            case 38:
              n = "&amp;";
              break;
            case 39:
              n = "&#39;";
              break;
            case 60:
              n = "&lt;";
              break;
            case 62:
              n = "&gt;";
              break;
            default:
              continue;
          }
          s !== a && (i += r.substring(s, a)), (s = a + 1), (i += n);
        }
        return s !== a ? i + r.substring(s, a) : i;
      };
    },
    755: function (e, t) {
      var n;
      !(function (t, n) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document) throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (r, o) {
        "use strict";
        var i = [],
          a = Object.getPrototypeOf,
          s = i.slice,
          l = i.flat
            ? function (e) {
                return i.flat.call(e);
              }
            : function (e) {
                return i.concat.apply([], e);
              },
          u = i.push,
          c = i.indexOf,
          f = {},
          p = f.toString,
          d = f.hasOwnProperty,
          h = d.toString,
          m = h.call(Object),
          g = {},
          y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
          },
          v = function (e) {
            return null != e && e === e.window;
          },
          b = r.document,
          x = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function T(e, t, n) {
          var r,
            o,
            i = (n = n || b).createElement("script");
          if (((i.text = e), t)) for (r in x) (o = t[r] || (t.getAttribute && t.getAttribute(r))) && i.setAttribute(r, o);
          n.head.appendChild(i).parentNode.removeChild(i);
        }
        function w(e) {
          return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e;
        }
        var E = "3.7.1",
          C = /HTML$/i,
          S = function (e, t) {
            return new S.fn.init(e, t);
          };
        function A(e) {
          var t = !!e && "length" in e && e.length,
            n = w(e);
          return !y(e) && !v(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
        }
        function k(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        (S.fn = S.prototype =
          {
            jquery: E,
            constructor: S,
            length: 0,
            toArray: function () {
              return s.call(this);
            },
            get: function (e) {
              return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
            },
            pushStack: function (e) {
              var t = S.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return S.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                S.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: u,
            sort: i.sort,
            splice: i.splice
          }),
          (S.extend = S.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
              for (
                "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
                  "object" == typeof a || y(a) || (a = {}),
                  s === l && ((a = this), s--);
                s < l;
                s++
              )
                if (null != (e = arguments[s]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        a !== r &&
                        (u && r && (S.isPlainObject(r) || (o = Array.isArray(r)))
                          ? ((n = a[t]),
                            (i = o && !Array.isArray(n) ? [] : o || S.isPlainObject(n) ? n : {}),
                            (o = !1),
                            (a[t] = S.extend(u, i, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
          S.extend({
            expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return (
                !(!e || "[object Object]" !== p.call(e)) &&
                (!(t = a(e)) || ("function" == typeof (n = d.call(t, "constructor") && t.constructor) && h.call(n) === m))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              T(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                r = 0;
              if (A(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
              return e;
            },
            text: function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (!o) for (; (t = e[r++]); ) n += S.text(t);
              return 1 === o || 11 === o ? e.textContent : 9 === o ? e.documentElement.textContent : 3 === o || 4 === o ? e.nodeValue : n;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return null != e && (A(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : c.call(t, e, n);
            },
            isXMLDoc: function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !C.test(t || (n && n.nodeName) || "HTML");
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
              return (e.length = o), e;
            },
            grep: function (e, t, n) {
              for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) !== a && r.push(e[o]);
              return r;
            },
            map: function (e, t, n) {
              var r,
                o,
                i = 0,
                a = [];
              if (A(e)) for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
              else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
              return l(a);
            },
            guid: 1,
            support: g
          }),
          "function" == typeof Symbol && (S.fn[Symbol.iterator] = i[Symbol.iterator]),
          S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          });
        var N = i.pop,
          D = i.sort,
          L = i.splice,
          j = "[\\x20\\t\\r\\n\\f]",
          O = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g");
        S.contains = function (e, t) {
          var n = t && t.parentNode;
          return (
            e === n ||
            !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
          );
        };
        var R = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function M(e, t) {
          return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
        }
        S.escapeSelector = function (e) {
          return (e + "").replace(R, M);
        };
        var H = b,
          _ = u;
        !(function () {
          var e,
            t,
            n,
            o,
            a,
            l,
            u,
            f,
            p,
            h,
            m = _,
            y = S.expando,
            v = 0,
            b = 0,
            x = ee(),
            T = ee(),
            w = ee(),
            E = ee(),
            C = function (e, t) {
              return e === t && (a = !0), 0;
            },
            A =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M =
              "\\[" +
              j +
              "*(" +
              R +
              ")(?:" +
              j +
              "*([*^$|!~]?=)" +
              j +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              R +
              "))|)" +
              j +
              "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            q = new RegExp(j + "+", "g"),
            P = new RegExp("^" + j + "*," + j + "*"),
            F = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            W = new RegExp(j + "|>"),
            B = new RegExp(I),
            U = new RegExp("^" + R + "$"),
            z = {
              ID: new RegExp("^#(" + R + ")"),
              CLASS: new RegExp("^\\.(" + R + ")"),
              TAG: new RegExp("^(" + R + "|[*])"),
              ATTR: new RegExp("^" + M),
              PSEUDO: new RegExp("^" + I),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  j +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  j +
                  "*(?:([+-]|)" +
                  j +
                  "*(\\d+)|))" +
                  j +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + A + ")$", "i"),
              needsContext: new RegExp(
                "^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)",
                "i"
              )
            },
            $ = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            V = /[+~]/,
            Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
            K = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            Q = function () {
              le();
            },
            J = pe(
              function (e) {
                return !0 === e.disabled && k(e, "fieldset");
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            m.apply((i = s.call(H.childNodes)), H.childNodes), i[H.childNodes.length].nodeType;
          } catch (e) {
            m = {
              apply: function (e, t) {
                _.apply(e, s.call(t));
              },
              call: function (e) {
                _.apply(e, s.call(arguments, 1));
              }
            };
          }
          function Z(e, t, n, r) {
            var o,
              i,
              a,
              s,
              u,
              c,
              d,
              h = t && t.ownerDocument,
              v = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== v && 9 !== v && 11 !== v))) return n;
            if (!r && (le(t), (t = t || l), f)) {
              if (11 !== v && (u = X.exec(e)))
                if ((o = u[1])) {
                  if (9 === v) {
                    if (!(a = t.getElementById(o))) return n;
                    if (a.id === o) return m.call(n, a), n;
                  } else if (h && (a = h.getElementById(o)) && Z.contains(t, a) && a.id === o) return m.call(n, a), n;
                } else {
                  if (u[2]) return m.apply(n, t.getElementsByTagName(e)), n;
                  if ((o = u[3]) && t.getElementsByClassName) return m.apply(n, t.getElementsByClassName(o)), n;
                }
              if (!(E[e + " "] || (p && p.test(e)))) {
                if (((d = e), (h = t), 1 === v && (W.test(e) || F.test(e)))) {
                  for (
                    ((h = (V.test(e) && se(t.parentNode)) || t) == t && g.scope) ||
                      ((s = t.getAttribute("id")) ? (s = S.escapeSelector(s)) : t.setAttribute("id", (s = y))),
                      i = (c = ce(e)).length;
                    i--;

                  )
                    c[i] = (s ? "#" + s : ":scope") + " " + fe(c[i]);
                  d = c.join(",");
                }
                try {
                  return m.apply(n, h.querySelectorAll(d)), n;
                } catch (t) {
                  E(e, !0);
                } finally {
                  s === y && t.removeAttribute("id");
                }
              }
            }
            return ve(e.replace(O, "$1"), t, n, r);
          }
          function ee() {
            var e = [];
            return function n(r, o) {
              return e.push(r + " ") > t.cacheLength && delete n[e.shift()], (n[r + " "] = o);
            };
          }
          function te(e) {
            return (e[y] = !0), e;
          }
          function ne(e) {
            var t = l.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function re(e) {
            return function (t) {
              return k(t, "input") && t.type === e;
            };
          }
          function oe(e) {
            return function (t) {
              return (k(t, "input") || k(t, "button")) && t.type === e;
            };
          }
          function ie(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && J(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ae(e) {
            return te(function (t) {
              return (
                (t = +t),
                te(function (n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; ) n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function se(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          function le(e) {
            var n,
              r = e ? e.ownerDocument || e : H;
            return r != l && 9 === r.nodeType && r.documentElement
              ? ((u = (l = r).documentElement),
                (f = !S.isXMLDoc(l)),
                (h = u.matches || u.webkitMatchesSelector || u.msMatchesSelector),
                u.msMatchesSelector && H != l && (n = l.defaultView) && n.top !== n && n.addEventListener("unload", Q),
                (g.getById = ne(function (e) {
                  return (u.appendChild(e).id = S.expando), !l.getElementsByName || !l.getElementsByName(S.expando).length;
                })),
                (g.disconnectedMatch = ne(function (e) {
                  return h.call(e, "*");
                })),
                (g.scope = ne(function () {
                  return l.querySelectorAll(":scope");
                })),
                (g.cssHas = ne(function () {
                  try {
                    return l.querySelector(":has(*,:jqfake)"), !1;
                  } catch (e) {
                    return !0;
                  }
                })),
                g.getById
                  ? ((t.filter.ID = function (e) {
                      var t = e.replace(Y, K);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (t.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && f) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((t.filter.ID = function (e) {
                      var t = e.replace(Y, K);
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (t.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && f) {
                        var n,
                          r,
                          o,
                          i = t.getElementById(e);
                        if (i) {
                          if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                          for (o = t.getElementsByName(e), r = 0; (i = o[r++]); )
                            if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                        }
                        return [];
                      }
                    })),
                (t.find.TAG = function (e, t) {
                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e);
                }),
                (t.find.CLASS = function (e, t) {
                  if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e);
                }),
                (p = []),
                ne(function (e) {
                  var t;
                  (u.appendChild(e).innerHTML =
                    "<a id='" +
                    y +
                    "' href='' disabled='disabled'></a><select id='" +
                    y +
                    "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                    e.querySelectorAll("[selected]").length || p.push("\\[" + j + "*(?:value|" + A + ")"),
                    e.querySelectorAll("[id~=" + y + "-]").length || p.push("~="),
                    e.querySelectorAll("a#" + y + "+*").length || p.push(".#.+[+~]"),
                    e.querySelectorAll(":checked").length || p.push(":checked"),
                    (t = l.createElement("input")).setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    (u.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                    (t = l.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || p.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")");
                }),
                g.cssHas || p.push(":has"),
                (p = p.length && new RegExp(p.join("|"))),
                (C = function (e, t) {
                  if (e === t) return (a = !0), 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                    (!g.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === l || (e.ownerDocument == H && Z.contains(H, e))
                        ? -1
                        : t === l || (t.ownerDocument == H && Z.contains(H, t))
                        ? 1
                        : o
                        ? c.call(o, e) - c.call(o, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }),
                l)
              : l;
          }
          for (e in ((Z.matches = function (e, t) {
            return Z(e, null, null, t);
          }),
          (Z.matchesSelector = function (e, t) {
            if ((le(e), f && !E[t + " "] && (!p || !p.test(t))))
              try {
                var n = h.call(e, t);
                if (n || g.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
              } catch (e) {
                E(t, !0);
              }
            return Z(t, l, null, [e]).length > 0;
          }),
          (Z.contains = function (e, t) {
            return (e.ownerDocument || e) != l && le(e), S.contains(e, t);
          }),
          (Z.attr = function (e, n) {
            (e.ownerDocument || e) != l && le(e);
            var r = t.attrHandle[n.toLowerCase()],
              o = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0;
            return void 0 !== o ? o : e.getAttribute(n);
          }),
          (Z.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (S.uniqueSort = function (e) {
            var t,
              n = [],
              r = 0,
              i = 0;
            if (((a = !g.sortStable), (o = !g.sortStable && s.call(e, 0)), D.call(e, C), a)) {
              for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
              for (; r--; ) L.call(e, n[r], 1);
            }
            return (o = null), e;
          }),
          (S.fn.uniqueSort = function () {
            return this.pushStack(S.uniqueSort(s.apply(this)));
          }),
          (t = S.expr =
            {
              cacheLength: 50,
              createPseudo: te,
              match: z,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" }
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(Y, K)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(Y, K)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || Z.error(e[0]),
                        (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && Z.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return z.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          B.test(n) &&
                          (t = ce(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(Y, K).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return k(e, t);
                      };
                },
                CLASS: function (e) {
                  var t = x[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
                      x(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var o = Z.attr(r, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                          ((o += ""),
                          "=" === t
                            ? o === n
                            : "!=" === t
                            ? o !== n
                            : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                            ? n && o.indexOf(n) > -1
                            : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + o.replace(q, " ") + " ").indexOf(n) > -1
                            : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, o) {
                  var i = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === o
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var u,
                          c,
                          f,
                          p,
                          d,
                          h = i !== a ? "nextSibling" : "previousSibling",
                          m = t.parentNode,
                          g = s && t.nodeName.toLowerCase(),
                          b = !l && !s,
                          x = !1;
                        if (m) {
                          if (i) {
                            for (; h; ) {
                              for (f = t; (f = f[h]); ) if (s ? k(f, g) : 1 === f.nodeType) return !1;
                              d = h = "only" === e && !d && "nextSibling";
                            }
                            return !0;
                          }
                          if (((d = [a ? m.firstChild : m.lastChild]), a && b)) {
                            for (
                              x = (p = (u = (c = m[y] || (m[y] = {}))[e] || [])[0] === v && u[1]) && u[2], f = p && m.childNodes[p];
                              (f = (++p && f && f[h]) || (x = p = 0) || d.pop());

                            )
                              if (1 === f.nodeType && ++x && f === t) {
                                c[e] = [v, p, x];
                                break;
                              }
                          } else if ((b && (x = p = (u = (c = t[y] || (t[y] = {}))[e] || [])[0] === v && u[1]), !1 === x))
                            for (
                              ;
                              (f = (++p && f && f[h]) || (x = p = 0) || d.pop()) &&
                              (!(s ? k(f, g) : 1 === f.nodeType) || !++x || (b && ((c = f[y] || (f[y] = {}))[e] = [v, x]), f !== t));

                            );
                          return (x -= o) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, n) {
                  var r,
                    o = t.pseudos[e] || t.setFilters[e.toLowerCase()] || Z.error("unsupported pseudo: " + e);
                  return o[y]
                    ? o(n)
                    : o.length > 1
                    ? ((r = [e, e, "", n]),
                      t.setFilters.hasOwnProperty(e.toLowerCase())
                        ? te(function (e, t) {
                            for (var r, i = o(e, n), a = i.length; a--; ) e[(r = c.call(e, i[a]))] = !(t[r] = i[a]);
                          })
                        : function (e) {
                            return o(e, 0, r);
                          })
                    : o;
                }
              },
              pseudos: {
                not: te(function (e) {
                  var t = [],
                    n = [],
                    r = ye(e.replace(O, "$1"));
                  return r[y]
                    ? te(function (e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; ) (i = a[s]) && (e[s] = !(t[s] = i));
                      })
                    : function (e, o, i) {
                        return (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop();
                      };
                }),
                has: te(function (e) {
                  return function (t) {
                    return Z(e, t).length > 0;
                  };
                }),
                contains: te(function (e) {
                  return (
                    (e = e.replace(Y, K)),
                    function (t) {
                      return (t.textContent || S.text(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: te(function (e) {
                  return (
                    U.test(e || "") || Z.error("unsupported lang: " + e),
                    (e = e.replace(Y, K).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if ((n = f ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                          return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (e) {
                  var t = r.location && r.location.hash;
                  return t && t.slice(1) === e.id;
                },
                root: function (e) {
                  return e === u;
                },
                focus: function (e) {
                  return (
                    e ===
                      (function () {
                        try {
                          return l.activeElement;
                        } catch (e) {}
                      })() &&
                    l.hasFocus() &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ie(!1),
                disabled: ie(!0),
                checked: function (e) {
                  return (k(e, "input") && !!e.checked) || (k(e, "option") && !!e.selected);
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !t.pseudos.empty(e);
                },
                header: function (e) {
                  return G.test(e.nodeName);
                },
                input: function (e) {
                  return $.test(e.nodeName);
                },
                button: function (e) {
                  return (k(e, "input") && "button" === e.type) || k(e, "button");
                },
                text: function (e) {
                  var t;
                  return k(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ae(function () {
                  return [0];
                }),
                last: ae(function (e, t) {
                  return [t - 1];
                }),
                eq: ae(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ae(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ae(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ae(function (e, t, n) {
                  var r;
                  for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: ae(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                })
              }
            }),
          (t.pseudos.nth = t.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            t.pseudos[e] = re(e);
          for (e in { submit: !0, reset: !0 }) t.pseudos[e] = oe(e);
          function ue() {}
          function ce(e, n) {
            var r,
              o,
              i,
              a,
              s,
              l,
              u,
              c = T[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = t.preFilter; s; ) {
              for (a in ((r && !(o = P.exec(s))) || (o && (s = s.slice(o[0].length) || s), l.push((i = []))),
              (r = !1),
              (o = F.exec(s)) && ((r = o.shift()), i.push({ value: r, type: o[0].replace(O, " ") }), (s = s.slice(r.length))),
              t.filter))
                !(o = z[a].exec(s)) ||
                  (u[a] && !(o = u[a](o))) ||
                  ((r = o.shift()), i.push({ value: r, type: a, matches: o }), (s = s.slice(r.length)));
              if (!r) break;
            }
            return n ? s.length : s ? Z.error(e) : T(e, l).slice(0);
          }
          function fe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function pe(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              a = n && "parentNode" === i,
              s = b++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, o);
                  return !1;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    f = [v, s];
                  if (l) {
                    for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (((c = t[y] || (t[y] = {})), o && k(t, o))) t = t[r] || t;
                        else {
                          if ((u = c[i]) && u[0] === v && u[1] === s) return (f[2] = u[2]);
                          if (((c[i] = f), (f[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function de(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function he(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
              (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), u && t.push(s)));
            return a;
          }
          function me(e, t, n, r, o, i) {
            return (
              r && !r[y] && (r = me(r)),
              o && !o[y] && (o = me(o, i)),
              te(function (i, a, s, l) {
                var u,
                  f,
                  p,
                  d,
                  h = [],
                  g = [],
                  y = a.length,
                  v =
                    i ||
                    (function (e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) Z(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  b = !e || (!i && t) ? v : he(v, h, e, s, l);
                if ((n ? n(b, (d = o || (i ? e : y || r) ? [] : a), s, l) : (d = b), r))
                  for (u = he(d, g), r(u, [], s, l), f = u.length; f--; ) (p = u[f]) && (d[g[f]] = !(b[g[f]] = p));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (u = [], f = d.length; f--; ) (p = d[f]) && u.push((b[f] = p));
                      o(null, (d = []), u, l);
                    }
                    for (f = d.length; f--; ) (p = d[f]) && (u = o ? c.call(i, p) : h[f]) > -1 && (i[u] = !(a[u] = p));
                  }
                } else (d = he(d === a ? d.splice(y, d.length) : d)), o ? o(null, a, d, l) : m.apply(a, d);
              })
            );
          }
          function ge(e) {
            for (
              var r,
                o,
                i,
                a = e.length,
                s = t.relative[e[0].type],
                l = s || t.relative[" "],
                u = s ? 1 : 0,
                f = pe(
                  function (e) {
                    return e === r;
                  },
                  l,
                  !0
                ),
                p = pe(
                  function (e) {
                    return c.call(r, e) > -1;
                  },
                  l,
                  !0
                ),
                d = [
                  function (e, t, o) {
                    var i = (!s && (o || t != n)) || ((r = t).nodeType ? f(e, t, o) : p(e, t, o));
                    return (r = null), i;
                  }
                ];
              u < a;
              u++
            )
              if ((o = t.relative[e[u].type])) d = [pe(de(d), o)];
              else {
                if ((o = t.filter[e[u].type].apply(null, e[u].matches))[y]) {
                  for (i = ++u; i < a && !t.relative[e[i].type]; i++);
                  return me(
                    u > 1 && de(d),
                    u > 1 && fe(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(O, "$1"),
                    o,
                    u < i && ge(e.slice(u, i)),
                    i < a && ge((e = e.slice(i))),
                    i < a && fe(e)
                  );
                }
                d.push(o);
              }
            return de(d);
          }
          function ye(e, r) {
            var o,
              i = [],
              a = [],
              s = w[e + " "];
            if (!s) {
              for (r || (r = ce(e)), o = r.length; o--; ) (s = ge(r[o]))[y] ? i.push(s) : a.push(s);
              (s = w(
                e,
                (function (e, r) {
                  var o = r.length > 0,
                    i = e.length > 0,
                    a = function (a, s, u, c, p) {
                      var d,
                        h,
                        g,
                        y = 0,
                        b = "0",
                        x = a && [],
                        T = [],
                        w = n,
                        E = a || (i && t.find.TAG("*", p)),
                        C = (v += null == w ? 1 : Math.random() || 0.1),
                        A = E.length;
                      for (p && (n = s == l || s || p); b !== A && null != (d = E[b]); b++) {
                        if (i && d) {
                          for (h = 0, s || d.ownerDocument == l || (le(d), (u = !f)); (g = e[h++]); )
                            if (g(d, s || l, u)) {
                              m.call(c, d);
                              break;
                            }
                          p && (v = C);
                        }
                        o && ((d = !g && d) && y--, a && x.push(d));
                      }
                      if (((y += b), o && b !== y)) {
                        for (h = 0; (g = r[h++]); ) g(x, T, s, u);
                        if (a) {
                          if (y > 0) for (; b--; ) x[b] || T[b] || (T[b] = N.call(c));
                          T = he(T);
                        }
                        m.apply(c, T), p && !a && T.length > 0 && y + r.length > 1 && S.uniqueSort(c);
                      }
                      return p && ((v = C), (n = w)), x;
                    };
                  return o ? te(a) : a;
                })(a, i)
              )),
                (s.selector = e);
            }
            return s;
          }
          function ve(e, n, r, o) {
            var i,
              a,
              s,
              l,
              u,
              c = "function" == typeof e && e,
              p = !o && ce((e = c.selector || e));
            if (((r = r || []), 1 === p.length)) {
              if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === n.nodeType && f && t.relative[a[1].type]) {
                if (!(n = (t.find.ID(s.matches[0].replace(Y, K), n) || [])[0])) return r;
                c && (n = n.parentNode), (e = e.slice(a.shift().value.length));
              }
              for (i = z.needsContext.test(e) ? 0 : a.length; i-- && ((s = a[i]), !t.relative[(l = s.type)]); )
                if ((u = t.find[l]) && (o = u(s.matches[0].replace(Y, K), (V.test(a[0].type) && se(n.parentNode)) || n))) {
                  if ((a.splice(i, 1), !(e = o.length && fe(a)))) return m.apply(r, o), r;
                  break;
                }
            }
            return (c || ye(e, p))(o, n, !f, r, !n || (V.test(e) && se(n.parentNode)) || n), r;
          }
          (ue.prototype = t.filters = t.pseudos),
            (t.setFilters = new ue()),
            (g.sortStable = y.split("").sort(C).join("") === y),
            le(),
            (g.sortDetached = ne(function (e) {
              return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
            })),
            (S.find = Z),
            (S.expr[":"] = S.expr.pseudos),
            (S.unique = S.uniqueSort),
            (Z.compile = ye),
            (Z.select = ve),
            (Z.setDocument = le),
            (Z.tokenize = ce),
            (Z.escape = S.escapeSelector),
            (Z.getText = S.text),
            (Z.isXML = S.isXMLDoc),
            (Z.selectors = S.expr),
            (Z.support = S.support),
            (Z.uniqueSort = S.uniqueSort);
        })();
        var I = function (e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && S(e).is(n)) break;
                r.push(e);
              }
            return r;
          },
          q = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          P = S.expr.match.needsContext,
          F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function W(e, t, n) {
          return y(t)
            ? S.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? S.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? S.grep(e, function (e) {
                return c.call(t, e) > -1 !== n;
              })
            : S.filter(t, e, n);
        }
        (S.filter = function (e, t, n) {
          var r = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, e)
                ? [r]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          S.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                o = this;
              if ("string" != typeof e)
                return this.pushStack(
                  S(e).filter(function () {
                    for (t = 0; t < r; t++) if (S.contains(o[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, o[t], n);
              return r > 1 ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(W(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(W(this, e || [], !0));
            },
            is: function (e) {
              return !!W(this, "string" == typeof e && P.test(e) ? S(e) : e || [], !1).length;
            }
          });
        var B,
          U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((S.fn.init = function (e, t, n) {
          var r, o;
          if (!e) return this;
          if (((n = n || B), "string" == typeof e)) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : U.exec(e)) || (!r[1] && t))
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
              if (
                ((t = t instanceof S ? t[0] : t),
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                F.test(r[1]) && S.isPlainObject(t))
              )
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            }
            return (o = b.getElementById(r[2])) && ((this[0] = o), (this.length = 1)), this;
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : y(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(S)
            : S.makeArray(e, this);
        }).prototype = S.fn),
          (B = S(b));
        var z = /^(?:parents|prev(?:Until|All))/,
          $ = { children: !0, contents: !0, next: !0, prev: !0 };
        function G(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              r = 0,
              o = this.length,
              i = [],
              a = "string" != typeof e && S(e);
            if (!P.test(e))
              for (; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                    i.push(n);
                    break;
                  }
            return this.pushStack(i.length > 1 ? S.uniqueSort(i) : i);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? c.call(S(e), this[0])
                : c.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          }
        }),
          S.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return I(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return I(e, "parentNode", n);
              },
              next: function (e) {
                return G(e, "nextSibling");
              },
              prev: function (e) {
                return G(e, "previousSibling");
              },
              nextAll: function (e) {
                return I(e, "nextSibling");
              },
              prevAll: function (e) {
                return I(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return I(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return I(e, "previousSibling", n);
              },
              siblings: function (e) {
                return q((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return q(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && a(e.contentDocument)
                  ? e.contentDocument
                  : (k(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
              }
            },
            function (e, t) {
              S.fn[e] = function (n, r) {
                var o = S.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (r = n),
                  r && "string" == typeof r && (o = S.filter(r, o)),
                  this.length > 1 && ($[e] || S.uniqueSort(o), z.test(e) && o.reverse()),
                  this.pushStack(o)
                );
              };
            }
          );
        var X = /[^\x20\t\r\n\f]+/g;
        function V(e) {
          return e;
        }
        function Y(e) {
          throw e;
        }
        function K(e, t, n, r) {
          var o;
          try {
            e && y((o = e.promise)) ? o.call(e).done(t).fail(n) : e && y((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (S.Callbacks = function (e) {
          e =
            "string" == typeof e
              ? (function (e) {
                  var t = {};
                  return (
                    S.each(e.match(X) || [], function (e, n) {
                      t[n] = !0;
                    }),
                    t
                  );
                })(e)
              : S.extend({}, e);
          var t,
            n,
            r,
            o,
            i = [],
            a = [],
            s = -1,
            l = function () {
              for (o = o || e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < i.length; ) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = i.length), (n = !1));
              e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
            },
            u = {
              add: function () {
                return (
                  i &&
                    (n && !t && ((s = i.length - 1), a.push(n)),
                    (function t(n) {
                      S.each(n, function (n, r) {
                        y(r) ? (e.unique && u.has(r)) || i.push(r) : r && r.length && "string" !== w(r) && t(r);
                      });
                    })(arguments),
                    n && !t && l()),
                  this
                );
              },
              remove: function () {
                return (
                  S.each(arguments, function (e, t) {
                    for (var n; (n = S.inArray(t, i, n)) > -1; ) i.splice(n, 1), n <= s && s--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? S.inArray(e, i) > -1 : i.length > 0;
              },
              empty: function () {
                return i && (i = []), this;
              },
              disable: function () {
                return (o = a = []), (i = n = ""), this;
              },
              disabled: function () {
                return !i;
              },
              lock: function () {
                return (o = a = []), n || t || (i = n = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, n) {
                return o || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || l()), this;
              },
              fire: function () {
                return u.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!r;
              }
            };
          return u;
        }),
          S.extend({
            Deferred: function (e) {
              var t = [
                  ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                  ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                  ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                o = {
                  state: function () {
                    return n;
                  },
                  always: function () {
                    return i.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return o.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return S.Deferred(function (n) {
                      S.each(t, function (t, r) {
                        var o = y(e[r[4]]) && e[r[4]];
                        i[r[1]](function () {
                          var e = o && o.apply(this, arguments);
                          e && y(e.promise)
                            ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                            : n[r[0] + "With"](this, o ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, n, o) {
                    var i = 0;
                    function a(e, t, n, o) {
                      return function () {
                        var s = this,
                          l = arguments,
                          u = function () {
                            var r, u;
                            if (!(e < i)) {
                              if ((r = n.apply(s, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                              (u = r && ("object" == typeof r || "function" == typeof r) && r.then),
                                y(u)
                                  ? o
                                    ? u.call(r, a(i, t, V, o), a(i, t, Y, o))
                                    : (i++, u.call(r, a(i, t, V, o), a(i, t, Y, o), a(i, t, V, t.notifyWith)))
                                  : (n !== V && ((s = void 0), (l = [r])), (o || t.resolveWith)(s, l));
                            }
                          },
                          c = o
                            ? u
                            : function () {
                                try {
                                  u();
                                } catch (r) {
                                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(r, c.error),
                                    e + 1 >= i && (n !== Y && ((s = void 0), (l = [r])), t.rejectWith(s, l));
                                }
                              };
                        e
                          ? c()
                          : (S.Deferred.getErrorHook
                              ? (c.error = S.Deferred.getErrorHook())
                              : S.Deferred.getStackHook && (c.error = S.Deferred.getStackHook()),
                            r.setTimeout(c));
                      };
                    }
                    return S.Deferred(function (r) {
                      t[0][3].add(a(0, r, y(o) ? o : V, r.notifyWith)),
                        t[1][3].add(a(0, r, y(e) ? e : V)),
                        t[2][3].add(a(0, r, y(n) ? n : Y));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? S.extend(e, o) : o;
                  }
                },
                i = {};
              return (
                S.each(t, function (e, r) {
                  var a = r[2],
                    s = r[5];
                  (o[r[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          n = s;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(r[3].fire),
                    (i[r[0]] = function () {
                      return i[r[0] + "With"](this === i ? void 0 : this, arguments), this;
                    }),
                    (i[r[0] + "With"] = a.fireWith);
                }),
                o.promise(i),
                e && e.call(i, i),
                i
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                o = s.call(arguments),
                i = S.Deferred(),
                a = function (e) {
                  return function (n) {
                    (r[e] = this), (o[e] = arguments.length > 1 ? s.call(arguments) : n), --t || i.resolveWith(r, o);
                  };
                };
              if (t <= 1 && (K(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();
              for (; n--; ) K(o[n], a(n), i.reject);
              return i.promise();
            }
          });
        var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (S.Deferred.exceptionHook = function (e, t) {
          r.console && r.console.warn && e && Q.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
        }),
          (S.readyException = function (e) {
            r.setTimeout(function () {
              throw e;
            });
          });
        var J = S.Deferred();
        function Z() {
          b.removeEventListener("DOMContentLoaded", Z), r.removeEventListener("load", Z), S.ready();
        }
        (S.fn.ready = function (e) {
          return (
            J.then(e).catch(function (e) {
              S.readyException(e);
            }),
            this
          );
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0), (!0 !== e && --S.readyWait > 0) || J.resolveWith(b, [S]));
            }
          }),
          (S.ready.then = J.then),
          "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll)
            ? r.setTimeout(S.ready)
            : (b.addEventListener("DOMContentLoaded", Z), r.addEventListener("load", Z));
        var ee = function (e, t, n, r, o, i, a) {
            var s = 0,
              l = e.length,
              u = null == n;
            if ("object" === w(n)) for (s in ((o = !0), n)) ee(e, t, s, n[s], !0, i, a);
            else if (
              void 0 !== r &&
              ((o = !0),
              y(r) || (a = !0),
              u &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((u = t),
                    (t = function (e, t, n) {
                      return u.call(S(e), n);
                    }))),
              t)
            )
              for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : i;
          },
          te = /^-ms-/,
          ne = /-([a-z])/g;
        function re(e, t) {
          return t.toUpperCase();
        }
        function oe(e) {
          return e.replace(te, "ms-").replace(ne, re);
        }
        var ie = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function ae() {
          this.expando = S.expando + ae.uid++;
        }
        (ae.uid = 1),
          (ae.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  ie(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                t
              );
            },
            set: function (e, t, n) {
              var r,
                o = this.cache(e);
              if ("string" == typeof t) o[oe(t)] = n;
              else for (r in t) o[oe(r)] = t[r];
              return o;
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][oe(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando];
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(oe) : (t = oe(t)) in r ? [t] : t.match(X) || []).length;
                  for (; n--; ) delete r[t[n]];
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !S.isEmptyObject(t);
            }
          });
        var se = new ae(),
          le = new ae(),
          ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ce = /[A-Z]/g;
        function fe(e, t, n) {
          var r;
          if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ce, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
              try {
                n = (function (e) {
                  return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ue.test(e) ? JSON.parse(e) : e));
                })(n);
              } catch (e) {}
              le.set(e, t, n);
            } else n = void 0;
          return n;
        }
        S.extend({
          hasData: function (e) {
            return le.hasData(e) || se.hasData(e);
          },
          data: function (e, t, n) {
            return le.access(e, t, n);
          },
          removeData: function (e, t) {
            le.remove(e, t);
          },
          _data: function (e, t, n) {
            return se.access(e, t, n);
          },
          _removeData: function (e, t) {
            se.remove(e, t);
          }
        }),
          S.fn.extend({
            data: function (e, t) {
              var n,
                r,
                o,
                i = this[0],
                a = i && i.attributes;
              if (void 0 === e) {
                if (this.length && ((o = le.get(i)), 1 === i.nodeType && !se.get(i, "hasDataAttrs"))) {
                  for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = oe(r.slice(5))), fe(i, r, o[r]));
                  se.set(i, "hasDataAttrs", !0);
                }
                return o;
              }
              return "object" == typeof e
                ? this.each(function () {
                    le.set(this, e);
                  })
                : ee(
                    this,
                    function (t) {
                      var n;
                      if (i && void 0 === t) return void 0 !== (n = le.get(i, e)) || void 0 !== (n = fe(i, e)) ? n : void 0;
                      this.each(function () {
                        le.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                le.remove(this, e);
              });
            }
          }),
          S.extend({
            queue: function (e, t, n) {
              var r;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (r = se.get(e, t)),
                  n && (!r || Array.isArray(n) ? (r = se.access(e, t, S.makeArray(n))) : r.push(n)),
                  r || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = S.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = S._queueHooks(e, t);
              "inprogress" === o && ((o = n.shift()), r--),
                o &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete i.stop,
                  o.call(
                    e,
                    function () {
                      S.dequeue(e, t);
                    },
                    i
                  )),
                !r && i && i.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                se.get(e, n) ||
                se.access(e, n, {
                  empty: S.Callbacks("once memory").add(function () {
                    se.remove(e, [t + "queue", n]);
                  })
                })
              );
            }
          }),
          S.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = S.queue(this, e, t);
                      S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                S.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                r = 1,
                o = S.Deferred(),
                i = this,
                a = this.length,
                s = function () {
                  --r || o.resolveWith(i, [i]);
                };
              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
                (n = se.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
              return s(), o.promise(t);
            }
          });
        var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          de = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"),
          he = ["Top", "Right", "Bottom", "Left"],
          me = b.documentElement,
          ge = function (e) {
            return S.contains(e.ownerDocument, e);
          },
          ye = { composed: !0 };
        me.getRootNode &&
          (ge = function (e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument;
          });
        var ve = function (e, t) {
          return "none" === (e = t || e).style.display || ("" === e.style.display && ge(e) && "none" === S.css(e, "display"));
        };
        function be(e, t, n, r) {
          var o,
            i,
            a = 20,
            s = r
              ? function () {
                  return r.cur();
                }
              : function () {
                  return S.css(e, t, "");
                },
            l = s(),
            u = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || ("px" !== u && +l)) && de.exec(S.css(e, t));
          if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--; )
              S.style(e, t, c + u), (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0), (c /= i);
            (c *= 2), S.style(e, t, c + u), (n = n || []);
          }
          return n && ((c = +c || +l || 0), (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = u), (r.start = c), (r.end = o))), o;
        }
        var xe = {};
        function Te(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = xe[r];
          return (
            o ||
            ((t = n.body.appendChild(n.createElement(r))),
            (o = S.css(t, "display")),
            t.parentNode.removeChild(t),
            "none" === o && (o = "block"),
            (xe[r] = o),
            o)
          );
        }
        function we(e, t) {
          for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style &&
              ((n = r.style.display),
              t
                ? ("none" === n && ((o[i] = se.get(r, "display") || null), o[i] || (r.style.display = "")),
                  "" === r.style.display && ve(r) && (o[i] = Te(r)))
                : "none" !== n && ((o[i] = "none"), se.set(r, "display", n)));
          for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
          return e;
        }
        S.fn.extend({
          show: function () {
            return we(this, !0);
          },
          hide: function () {
            return we(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ve(this) ? S(this).show() : S(this).hide();
                });
          }
        });
        var Ee,
          Ce,
          Se = /^(?:checkbox|radio)$/i,
          Ae = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ke = /^$|^module$|\/(?:java|ecma)script/i;
        (Ee = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (Ce = b.createElement("input")).setAttribute("type", "radio"),
          Ce.setAttribute("checked", "checked"),
          Ce.setAttribute("name", "t"),
          Ee.appendChild(Ce),
          (g.checkClone = Ee.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (Ee.innerHTML = "<textarea>x</textarea>"),
          (g.noCloneChecked = !!Ee.cloneNode(!0).lastChild.defaultValue),
          (Ee.innerHTML = "<option></option>"),
          (g.option = !!Ee.lastChild);
        var Ne = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        function De(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && k(e, t)) ? S.merge([e], n) : n
          );
        }
        function Le(e, t) {
          for (var n = 0, r = e.length; n < r; n++) se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
        }
        (Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead),
          (Ne.th = Ne.td),
          g.option || (Ne.optgroup = Ne.option = [1, "<select multiple='multiple'>", "</select>"]);
        var je = /<|&#?\w+;/;
        function Oe(e, t, n, r, o) {
          for (var i, a, s, l, u, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((i = e[d]) || 0 === i)
              if ("object" === w(i)) S.merge(p, i.nodeType ? [i] : i);
              else if (je.test(i)) {
                for (
                  a = a || f.appendChild(t.createElement("div")),
                    s = (Ae.exec(i) || ["", ""])[1].toLowerCase(),
                    l = Ne[s] || Ne._default,
                    a.innerHTML = l[1] + S.htmlPrefilter(i) + l[2],
                    c = l[0];
                  c--;

                )
                  a = a.lastChild;
                S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
              } else p.push(t.createTextNode(i));
          for (f.textContent = "", d = 0; (i = p[d++]); )
            if (r && S.inArray(i, r) > -1) o && o.push(i);
            else if (((u = ge(i)), (a = De(f.appendChild(i), "script")), u && Le(a), n))
              for (c = 0; (i = a[c++]); ) ke.test(i.type || "") && n.push(i);
          return f;
        }
        var Re = /^([^.]*)(?:\.(.+)|)/;
        function Me() {
          return !0;
        }
        function He() {
          return !1;
        }
        function _e(e, t, n, r, o, i) {
          var a, s;
          if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) _e(e, s, n, r, t[s], i);
            return e;
          }
          if (
            (null == r && null == o
              ? ((o = n), (r = n = void 0))
              : null == o && ("string" == typeof n ? ((o = r), (r = void 0)) : ((o = r), (r = n), (n = void 0))),
            !1 === o)
          )
            o = He;
          else if (!o) return e;
          return (
            1 === i &&
              ((a = o),
              (o = function (e) {
                return S().off(e), a.apply(this, arguments);
              }),
              (o.guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
              S.event.add(this, t, o, r, n);
            })
          );
        }
        function Ie(e, t, n) {
          n
            ? (se.set(e, t, !1),
              S.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var n,
                    r = se.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (r) (S.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (((r = s.call(arguments)), se.set(this, t, r), this[t](), (n = se.get(this, t)), se.set(this, t, !1), r !== n))
                      return e.stopImmediatePropagation(), e.preventDefault(), n;
                  } else
                    r &&
                      (se.set(this, t, S.event.trigger(r[0], r.slice(1), this)),
                      e.stopPropagation(),
                      (e.isImmediatePropagationStopped = Me));
                }
              }))
            : void 0 === se.get(e, t) && S.event.add(e, t, Me);
        }
        (S.event = {
          global: {},
          add: function (e, t, n, r, o) {
            var i,
              a,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              h,
              m,
              g = se.get(e);
            if (ie(e))
              for (
                n.handler && ((n = (i = n).handler), (o = i.selector)),
                  o && S.find.matchesSelector(me, o),
                  n.guid || (n.guid = S.guid++),
                  (l = g.events) || (l = g.events = Object.create(null)),
                  (a = g.handle) ||
                    (a = g.handle =
                      function (t) {
                        return void 0 !== S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
                      }),
                  u = (t = (t || "").match(X) || [""]).length;
                u--;

              )
                (d = m = (s = Re.exec(t[u]) || [])[1]),
                  (h = (s[2] || "").split(".").sort()),
                  d &&
                    ((f = S.event.special[d] || {}),
                    (d = (o ? f.delegateType : f.bindType) || d),
                    (f = S.event.special[d] || {}),
                    (c = S.extend(
                      {
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && S.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                      },
                      i
                    )),
                    (p = l[d]) ||
                      (((p = l[d] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                    o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (S.event.global[d] = !0));
          },
          remove: function (e, t, n, r, o) {
            var i,
              a,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              h,
              m,
              g = se.hasData(e) && se.get(e);
            if (g && (l = g.events)) {
              for (u = (t = (t || "").match(X) || [""]).length; u--; )
                if (((d = m = (s = Re.exec(t[u]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                  for (
                    f = S.event.special[d] || {},
                      p = l[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                      s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                      a = i = p.length;
                    i--;

                  )
                    (c = p[i]),
                      (!o && m !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                        (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                  a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) || S.removeEvent(e, d, g.handle), delete l[d]);
                } else for (d in l) S.event.remove(e, d + t[u], n, r, !0);
              S.isEmptyObject(l) && se.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s = new Array(arguments.length),
              l = S.event.fix(e),
              u = (se.get(this, "events") || Object.create(null))[l.type] || [],
              c = S.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
              for (a = S.event.handlers.call(this, l, u), t = 0; (o = a[t++]) && !l.isPropagationStopped(); )
                for (l.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                  (l.rnamespace && !1 !== i.namespace && !l.rnamespace.test(i.namespace)) ||
                    ((l.handleObj = i),
                    (l.data = i.data),
                    void 0 !== (r = ((S.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) &&
                      !1 === (l.result = r) &&
                      (l.preventDefault(), l.stopPropagation()));
              return c.postDispatch && c.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              o,
              i,
              a,
              s = [],
              l = t.delegateCount,
              u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
              for (; u !== this; u = u.parentNode || this)
                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                  for (i = [], a = {}, n = 0; n < l; n++)
                    void 0 === a[(o = (r = t[n]).selector + " ")] &&
                      (a[o] = r.needsContext ? S(o, this).index(u) > -1 : S.find(o, this, null, [u]).length),
                      a[o] && i.push(r);
                  i.length && s.push({ elem: u, handlers: i });
                }
            return (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s;
          },
          addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
              }
            });
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return Se.test(t.type) && t.click && k(t, "input") && Ie(t, "click", !0), !1;
              },
              trigger: function (e) {
                var t = this || e;
                return Se.test(t.type) && t.click && k(t, "input") && Ie(t, "click"), !0;
              },
              _default: function (e) {
                var t = e.target;
                return (Se.test(t.type) && t.click && k(t, "input") && se.get(t, "click")) || k(t, "a");
              }
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
              }
            }
          }
        }),
          (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Me : He),
                (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0);
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: He,
            isPropagationStopped: He,
            isImmediatePropagationStopped: He,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = Me), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = Me), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = Me), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            }
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0
            },
            S.event.addProp
          ),
          S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            function n(e) {
              if (b.documentMode) {
                var n = se.get(this, "handle"),
                  r = S.event.fix(e);
                (r.type = "focusin" === e.type ? "focus" : "blur"), (r.isSimulated = !0), n(e), r.target === r.currentTarget && n(r);
              } else S.event.simulate(t, e.target, S.event.fix(e));
            }
            (S.event.special[e] = {
              setup: function () {
                var r;
                if ((Ie(this, e, !0), !b.documentMode)) return !1;
                (r = se.get(this, t)) || this.addEventListener(t, n), se.set(this, t, (r || 0) + 1);
              },
              trigger: function () {
                return Ie(this, e), !0;
              },
              teardown: function () {
                var e;
                if (!b.documentMode) return !1;
                (e = se.get(this, t) - 1) ? se.set(this, t, e) : (this.removeEventListener(t, n), se.remove(this, t));
              },
              _default: function (t) {
                return se.get(t.target, e);
              },
              delegateType: t
            }),
              (S.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    o = b.documentMode ? this : r,
                    i = se.get(o, t);
                  i || (b.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)), se.set(o, t, (i || 0) + 1);
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    o = b.documentMode ? this : r,
                    i = se.get(o, t) - 1;
                  i
                    ? se.set(o, t, i)
                    : (b.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0), se.remove(o, t));
                }
              });
          }),
          S.each(
            { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
            function (e, t) {
              S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    o = e.handleObj;
                  return (
                    (r && (r === this || S.contains(this, r))) ||
                      ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)),
                    n
                  );
                }
              };
            }
          ),
          S.fn.extend({
            on: function (e, t, n, r) {
              return _e(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
              return _e(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
              var r, o;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                  this
                );
              if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = He),
                this.each(function () {
                  S.event.remove(this, e, n, t);
                })
              );
            }
          });
        var qe = /<script|<style|<link/i,
          Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function We(e, t) {
          return (k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
        }
        function Be(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Ue(e) {
          return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
        }
        function ze(e, t) {
          var n, r, o, i, a, s;
          if (1 === t.nodeType) {
            if (se.hasData(e) && (s = se.get(e).events))
              for (o in (se.remove(t, "handle events"), s)) for (n = 0, r = s[o].length; n < r; n++) S.event.add(t, o, s[o][n]);
            le.hasData(e) && ((i = le.access(e)), (a = S.extend({}, i)), le.set(t, a));
          }
        }
        function $e(e, t) {
          var n = t.nodeName.toLowerCase();
          "input" === n && Se.test(e.type)
            ? (t.checked = e.checked)
            : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
        }
        function Ge(e, t, n, r) {
          t = l(t);
          var o,
            i,
            a,
            s,
            u,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            m = y(h);
          if (m || (p > 1 && "string" == typeof h && !g.checkClone && Pe.test(h)))
            return e.each(function (o) {
              var i = e.eq(o);
              m && (t[0] = h.call(this, o, i.html())), Ge(i, t, n, r);
            });
          if (p && ((i = (o = Oe(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === o.childNodes.length && (o = i), i || r)) {
            for (s = (a = S.map(De(o, "script"), Be)).length; f < p; f++)
              (u = o), f !== d && ((u = S.clone(u, !0, !0)), s && S.merge(a, De(u, "script"))), n.call(e[f], u, f);
            if (s)
              for (c = a[a.length - 1].ownerDocument, S.map(a, Ue), f = 0; f < s; f++)
                (u = a[f]),
                  ke.test(u.type || "") &&
                    !se.access(u, "globalEval") &&
                    S.contains(c, u) &&
                    (u.src && "module" !== (u.type || "").toLowerCase()
                      ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c)
                      : T(u.textContent.replace(Fe, ""), u, c));
          }
          return e;
        }
        function Xe(e, t, n) {
          for (var r, o = t ? S.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || S.cleanData(De(r)), r.parentNode && (n && ge(r) && Le(De(r, "script")), r.parentNode.removeChild(r));
          return e;
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.cloneNode(!0),
              l = ge(e);
            if (!(g.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
              for (a = De(s), r = 0, o = (i = De(e)).length; r < o; r++) $e(i[r], a[r]);
            if (t)
              if (n) for (i = i || De(e), a = a || De(s), r = 0, o = i.length; r < o; r++) ze(i[r], a[r]);
              else ze(e, s);
            return (a = De(s, "script")).length > 0 && Le(a, !l && De(e, "script")), s;
          },
          cleanData: function (e) {
            for (var t, n, r, o = S.event.special, i = 0; void 0 !== (n = e[i]); i++)
              if (ie(n)) {
                if ((t = n[se.expando])) {
                  if (t.events) for (r in t.events) o[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                  n[se.expando] = void 0;
                }
                n[le.expando] && (n[le.expando] = void 0);
              }
          }
        }),
          S.fn.extend({
            detach: function (e) {
              return Xe(this, e, !0);
            },
            remove: function (e) {
              return Xe(this, e);
            },
            text: function (e) {
              return ee(
                this,
                function (e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ge(this, arguments, function (e) {
                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || We(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ge(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = We(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ge(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ge(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(De(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return S.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return ee(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if ("string" == typeof e && !qe.test(e) && !Ne[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                      for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(De(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ge(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  S.inArray(this, e) < 0 && (S.cleanData(De(this)), n && n.replaceChild(t, this));
                },
                e
              );
            }
          }),
          S.each(
            { appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" },
            function (e, t) {
              S.fn[e] = function (e) {
                for (var n, r = [], o = S(e), i = o.length - 1, a = 0; a <= i; a++)
                  (n = a === i ? this : this.clone(!0)), S(o[a])[t](n), u.apply(r, n.get());
                return this.pushStack(r);
              };
            }
          );
        var Ve = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"),
          Ye = /^--/,
          Ke = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = r), t.getComputedStyle(e);
          },
          Qe = function (e, t, n) {
            var r,
              o,
              i = {};
            for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
            for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
            return r;
          },
          Je = new RegExp(he.join("|"), "i");
        function Ze(e, t, n) {
          var r,
            o,
            i,
            a,
            s = Ye.test(t),
            l = e.style;
          return (
            (n = n || Ke(e)) &&
              ((a = n.getPropertyValue(t) || n[t]),
              s && a && (a = a.replace(O, "$1") || void 0),
              "" !== a || ge(e) || (a = S.style(e, t)),
              !g.pixelBoxStyles() &&
                Ve.test(a) &&
                Je.test(t) &&
                ((r = l.width),
                (o = l.minWidth),
                (i = l.maxWidth),
                (l.minWidth = l.maxWidth = l.width = a),
                (a = n.width),
                (l.width = r),
                (l.minWidth = o),
                (l.maxWidth = i))),
            void 0 !== a ? a + "" : a
          );
        }
        function et(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            }
          };
        }
        !(function () {
          function e() {
            if (c) {
              (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (c.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                me.appendChild(u).appendChild(c);
              var e = r.getComputedStyle(c);
              (n = "1%" !== e.top),
                (l = 12 === t(e.marginLeft)),
                (c.style.right = "60%"),
                (a = 36 === t(e.right)),
                (o = 36 === t(e.width)),
                (c.style.position = "absolute"),
                (i = 12 === t(c.offsetWidth / 3)),
                me.removeChild(u),
                (c = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var n,
            o,
            i,
            a,
            s,
            l,
            u = b.createElement("div"),
            c = b.createElement("div");
          c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (g.clearCloneStyle = "content-box" === c.style.backgroundClip),
            S.extend(g, {
              boxSizingReliable: function () {
                return e(), o;
              },
              pixelBoxStyles: function () {
                return e(), a;
              },
              pixelPosition: function () {
                return e(), n;
              },
              reliableMarginLeft: function () {
                return e(), l;
              },
              scrollboxSize: function () {
                return e(), i;
              },
              reliableTrDimensions: function () {
                var e, t, n, o;
                return (
                  null == s &&
                    ((e = b.createElement("table")),
                    (t = b.createElement("tr")),
                    (n = b.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                    (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                    (t.style.height = "1px"),
                    (n.style.height = "9px"),
                    (n.style.display = "block"),
                    me.appendChild(e).appendChild(t).appendChild(n),
                    (o = r.getComputedStyle(t)),
                    (s = parseInt(o.height, 10) + parseInt(o.borderTopWidth, 10) + parseInt(o.borderBottomWidth, 10) === t.offsetHeight),
                    me.removeChild(e)),
                  s
                );
              }
            }));
        })();
        var tt = ["Webkit", "Moz", "ms"],
          nt = b.createElement("div").style,
          rt = {};
        function ot(e) {
          var t = S.cssProps[e] || rt[e];
          return (
            t ||
            (e in nt
              ? e
              : (rt[e] =
                  (function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; ) if ((e = tt[n] + t) in nt) return e;
                  })(e) || e))
          );
        }
        var it = /^(none|table(?!-c[ea]).+)/,
          at = { position: "absolute", visibility: "hidden", display: "block" },
          st = { letterSpacing: "0", fontWeight: "400" };
        function lt(e, t, n) {
          var r = de.exec(t);
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
        }
        function ut(e, t, n, r, o, i) {
          var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0,
            u = 0;
          if (n === (r ? "border" : "content")) return 0;
          for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + he[a], !0, o)),
              r
                ? ("content" === n && (l -= S.css(e, "padding" + he[a], !0, o)),
                  "margin" !== n && (l -= S.css(e, "border" + he[a] + "Width", !0, o)))
                : ((l += S.css(e, "padding" + he[a], !0, o)),
                  "padding" !== n
                    ? (l += S.css(e, "border" + he[a] + "Width", !0, o))
                    : (s += S.css(e, "border" + he[a] + "Width", !0, o)));
          return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - s - 0.5)) || 0), l + u;
        }
        function ct(e, t, n) {
          var r = Ke(e),
            o = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            i = o,
            a = Ze(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
          if (Ve.test(a)) {
            if (!n) return a;
            a = "auto";
          }
          return (
            ((!g.boxSizingReliable() && o) ||
              (!g.reliableTrDimensions() && k(e, "tr")) ||
              "auto" === a ||
              (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
              e.getClientRects().length &&
              ((o = "border-box" === S.css(e, "boxSizing", !1, r)), (i = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + ut(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
          );
        }
        function ft(e, t, n, r, o) {
          return new ft.prototype.init(e, t, n, r, o);
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ze(e, "opacity");
                  return "" === n ? "1" : n;
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                i,
                a,
                s = oe(t),
                l = Ye.test(t),
                u = e.style;
              if ((l || (t = ot(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n))
                return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : u[t];
              "string" === (i = typeof n) && (o = de.exec(n)) && o[1] && ((n = be(e, t, o)), (i = "number")),
                null != n &&
                  n == n &&
                  ("number" !== i || l || (n += (o && o[3]) || (S.cssNumber[s] ? "" : "px")),
                  g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (l ? u.setProperty(t, n) : (u[t] = n)));
            }
          },
          css: function (e, t, n, r) {
            var o,
              i,
              a,
              s = oe(t);
            return (
              Ye.test(t) || (t = ot(s)),
              (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
              void 0 === o && (o = Ze(e, t, r)),
              "normal" === o && t in st && (o = st[t]),
              "" === n || n ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o) : o
            );
          }
        }),
          S.each(["height", "width"], function (e, t) {
            S.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !it.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                    ? ct(e, t, r)
                    : Qe(e, at, function () {
                        return ct(e, t, r);
                      });
              },
              set: function (e, n, r) {
                var o,
                  i = Ke(e),
                  a = !g.scrollboxSize() && "absolute" === i.position,
                  s = (a || r) && "border-box" === S.css(e, "boxSizing", !1, i),
                  l = r ? ut(e, t, r, s, i) : 0;
                return (
                  s &&
                    a &&
                    (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ut(e, t, "border", !1, i) - 0.5)),
                  l && (o = de.exec(n)) && "px" !== (o[3] || "px") && ((e.style[t] = n), (n = S.css(e, t))),
                  lt(0, n, l)
                );
              }
            };
          }),
          (S.cssHooks.marginLeft = et(g.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ze(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    Qe(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (S.cssHooks[e + t] = {
              expand: function (n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                  o[e + he[r] + t] = i[r] || i[r - 2] || i[0];
                return o;
              }
            }),
              "margin" !== e && (S.cssHooks[e + t].set = lt);
          }),
          S.fn.extend({
            css: function (e, t) {
              return ee(
                this,
                function (e, t, n) {
                  var r,
                    o,
                    i = {},
                    a = 0;
                  if (Array.isArray(t)) {
                    for (r = Ke(e), o = t.length; a < o; a++) i[t[a]] = S.css(e, t[a], !1, r);
                    return i;
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                },
                e,
                t,
                arguments.length > 1
              );
            }
          }),
          (S.Tween = ft),
          (ft.prototype = {
            constructor: ft,
            init: function (e, t, n, r, o, i) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = o || S.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = i || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = ft.propHooks[this.prop];
              return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = ft.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                this
              );
            }
          }),
          (ft.prototype.init.prototype = ft.prototype),
          (ft.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                S.fx.step[e.prop]
                  ? S.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : S.style(e.elem, e.prop, e.now + e.unit);
              }
            }
          }),
          (ft.propHooks.scrollTop = ft.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
              }
            }),
          (S.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing"
          }),
          (S.fx = ft.prototype.init),
          (S.fx.step = {});
        var pt,
          dt,
          ht = /^(?:toggle|show|hide)$/,
          mt = /queueHooks$/;
        function gt() {
          dt && (!1 === b.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(gt) : r.setTimeout(gt, S.fx.interval), S.fx.tick());
        }
        function yt() {
          return (
            r.setTimeout(function () {
              pt = void 0;
            }),
            (pt = Date.now())
          );
        }
        function vt(e, t) {
          var n,
            r = 0,
            o = { height: e };
          for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = he[r])] = o["padding" + n] = e;
          return t && (o.opacity = o.width = e), o;
        }
        function bt(e, t, n) {
          for (var r, o = (xt.tweeners[t] || []).concat(xt.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if ((r = o[i].call(n, t, e))) return r;
        }
        function xt(e, t, n) {
          var r,
            o,
            i = 0,
            a = xt.prefilters.length,
            s = S.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (o) return !1;
              for (
                var t = pt || yt(),
                  n = Math.max(0, u.startTime + u.duration - t),
                  r = 1 - (n / u.duration || 0),
                  i = 0,
                  a = u.tweens.length;
                i < a;
                i++
              )
                u.tweens[i].run(r);
              return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
            },
            u = s.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: pt || yt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = S.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r;
              },
              stop: function (t) {
                var n = 0,
                  r = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < r; n++) u.tweens[n].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
              }
            }),
            c = u.props;
          for (
            !(function (e, t) {
              var n, r, o, i, a;
              for (n in e)
                if (
                  ((o = t[(r = oe(n))]),
                  (i = e[n]),
                  Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                  n !== r && ((e[r] = i), delete e[n]),
                  (a = S.cssHooks[r]) && ("expand" in a))
                )
                  for (n in ((i = a.expand(i)), delete e[r], i)) (n in e) || ((e[n] = i[n]), (t[n] = o));
                else t[r] = o;
            })(c, u.opts.specialEasing);
            i < a;
            i++
          )
            if ((r = xt.prefilters[i].call(u, e, c, u.opts)))
              return y(r.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
          return (
            S.map(c, bt, u),
            y(u.opts.start) && u.opts.start.call(e, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            S.fx.timer(S.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
            u
          );
        }
        (S.Animation = S.extend(xt, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return be(n.elem, e, de.exec(t), n), n;
              }
            ]
          },
          tweener: function (e, t) {
            y(e) ? ((t = e), (e = ["*"])) : (e = e.match(X));
            for (var n, r = 0, o = e.length; r < o; r++) (n = e[r]), (xt.tweeners[n] = xt.tweeners[n] || []), xt.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                m = e.nodeType && ve(e),
                g = se.get(e, "fxshow");
              for (r in (n.queue ||
                (null == (a = S._queueHooks(e, "fx")).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || s();
                  })),
                a.unqueued++,
                p.always(function () {
                  p.always(function () {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                  });
                })),
              t))
                if (((o = t[r]), ht.test(o))) {
                  if ((delete t[r], (i = i || "toggle" === o), o === (m ? "hide" : "show"))) {
                    if ("show" !== o || !g || void 0 === g[r]) continue;
                    m = !0;
                  }
                  d[r] = (g && g[r]) || S.style(e, r);
                }
              if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (u = g && g.display) && (u = se.get(e, "display")),
                  "none" === (c = S.css(e, "display")) &&
                    (u ? (c = u) : (we([e], !0), (u = e.style.display || u), (c = S.css(e, "display")), we([e]))),
                  ("inline" === c || ("inline-block" === c && null != u)) &&
                    "none" === S.css(e, "float") &&
                    (l ||
                      (p.done(function () {
                        h.display = u;
                      }),
                      null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                  ((h.overflow = "hidden"),
                  p.always(function () {
                    (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                d))
                  l ||
                    (g ? "hidden" in g && (m = g.hidden) : (g = se.access(e, "fxshow", { display: u })),
                    i && (g.hidden = !m),
                    m && we([e], !0),
                    p.done(function () {
                      for (r in (m || we([e]), se.remove(e, "fxshow"), d)) S.style(e, r, d[r]);
                    })),
                    (l = bt(m ? g[r] : 0, r, p)),
                    r in g || ((g[r] = l.start), m && ((l.end = l.start), (l.start = 0)));
            }
          ],
          prefilter: function (e, t) {
            t ? xt.prefilters.unshift(e) : xt.prefilters.push(e);
          }
        })),
          (S.speed = function (e, t, n) {
            var r =
              e && "object" == typeof e
                ? S.extend({}, e)
                : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
            return (
              S.fx.off
                ? (r.duration = 0)
                : "number" != typeof r.duration &&
                  (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
              (r.old = r.complete),
              (r.complete = function () {
                y(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
              }),
              r
            );
          }),
          S.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(ve).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
              var o = S.isEmptyObject(e),
                i = S.speed(t, n, r),
                a = function () {
                  var t = xt(this, S.extend({}, e), i);
                  (o || se.get(this, "finish")) && t.stop(!0);
                };
              return (a.finish = a), o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    o = null != e && e + "queueHooks",
                    i = S.timers,
                    a = se.get(this);
                  if (o) a[o] && a[o].stop && r(a[o]);
                  else for (o in a) a[o] && a[o].stop && mt.test(o) && r(a[o]);
                  for (o = i.length; o--; )
                    i[o].elem !== this || (null != e && i[o].queue !== e) || (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                  (!t && n) || S.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = se.get(this),
                    r = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    i = S.timers,
                    a = r ? r.length : 0;
                  for (n.finish = !0, S.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                  for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                  delete n.finish;
                })
              );
            }
          }),
          S.each(["toggle", "show", "hide"], function (e, t) {
            var n = S.fn[t];
            S.fn[t] = function (e, r, o) {
              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(vt(t, !0), e, r, o);
            };
          }),
          S.each(
            {
              slideDown: vt("show"),
              slideUp: vt("hide"),
              slideToggle: vt("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" }
            },
            function (e, t) {
              S.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
              };
            }
          ),
          (S.timers = []),
          (S.fx.tick = function () {
            var e,
              t = 0,
              n = S.timers;
            for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (pt = void 0);
          }),
          (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
          }),
          (S.fx.interval = 13),
          (S.fx.start = function () {
            dt || ((dt = !0), gt());
          }),
          (S.fx.stop = function () {
            dt = null;
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function (e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, n) {
                var o = r.setTimeout(t, e);
                n.stop = function () {
                  r.clearTimeout(o);
                };
              })
            );
          }),
          (function () {
            var e = b.createElement("input"),
              t = b.createElement("select").appendChild(b.createElement("option"));
            (e.type = "checkbox"),
              (g.checkOn = "" !== e.value),
              (g.optSelected = t.selected),
              ((e = b.createElement("input")).value = "t"),
              (e.type = "radio"),
              (g.radioValue = "t" === e.value);
          })();
        var Tt,
          wt = S.expr.attrHandle;
        S.fn.extend({
          attr: function (e, t) {
            return ee(this, S.attr, e, t, arguments.length > 1);
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e);
            });
          }
        }),
          S.extend({
            attr: function (e, t, n) {
              var r,
                o,
                i = e.nodeType;
              if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === i && S.isXMLDoc(e)) || (o = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? Tt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void S.removeAttr(e, t)
                        : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e.setAttribute(t, n + ""), n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : null == (r = S.find.attr(e, t))
                      ? void 0
                      : r);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!g.radioValue && "radio" === t && k(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                }
              }
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                o = t && t.match(X);
              if (o && 1 === e.nodeType) for (; (n = o[r++]); ) e.removeAttribute(n);
            }
          }),
          (Tt = {
            set: function (e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            }
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = wt[t] || S.find.attr;
            wt[t] = function (e, t, r) {
              var o,
                i,
                a = t.toLowerCase();
              return r || ((i = wt[a]), (wt[a] = o), (o = null != n(e, t, r) ? a : null), (wt[a] = i)), o;
            };
          });
        var Et = /^(?:input|select|textarea|button)$/i,
          Ct = /^(?:a|area)$/i;
        function St(e) {
          return (e.match(X) || []).join(" ");
        }
        function At(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function kt(e) {
          return Array.isArray(e) ? e : ("string" == typeof e && e.match(X)) || [];
        }
        S.fn.extend({
          prop: function (e, t) {
            return ee(this, S.prop, e, t, arguments.length > 1);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e];
            });
          }
        }),
          S.extend({
            prop: function (e, t, n) {
              var r,
                o,
                i = e.nodeType;
              if (3 !== i && 8 !== i && 2 !== i)
                return (
                  (1 === i && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (o = S.propHooks[t])),
                  void 0 !== n
                    ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = S.find.attr(e, "tabindex");
                  return t ? parseInt(t, 10) : Et.test(e.nodeName) || (Ct.test(e.nodeName) && e.href) ? 0 : -1;
                }
              }
            },
            propFix: { for: "htmlFor", class: "className" }
          }),
          g.optSelected ||
            (S.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              }
            }),
          S.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable"
            ],
            function () {
              S.propFix[this.toLowerCase()] = this;
            }
          ),
          S.fn.extend({
            addClass: function (e) {
              var t, n, r, o, i, a;
              return y(e)
                ? this.each(function (t) {
                    S(this).addClass(e.call(this, t, At(this)));
                  })
                : (t = kt(e)).length
                ? this.each(function () {
                    if (((r = At(this)), (n = 1 === this.nodeType && " " + St(r) + " "))) {
                      for (i = 0; i < t.length; i++) (o = t[i]), n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                      (a = St(n)), r !== a && this.setAttribute("class", a);
                    }
                  })
                : this;
            },
            removeClass: function (e) {
              var t, n, r, o, i, a;
              return y(e)
                ? this.each(function (t) {
                    S(this).removeClass(e.call(this, t, At(this)));
                  })
                : arguments.length
                ? (t = kt(e)).length
                  ? this.each(function () {
                      if (((r = At(this)), (n = 1 === this.nodeType && " " + St(r) + " "))) {
                        for (i = 0; i < t.length; i++) for (o = t[i]; n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                        (a = St(n)), r !== a && this.setAttribute("class", a);
                      }
                    })
                  : this
                : this.attr("class", "");
            },
            toggleClass: function (e, t) {
              var n,
                r,
                o,
                i,
                a = typeof e,
                s = "string" === a || Array.isArray(e);
              return y(e)
                ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, At(this), t), t);
                  })
                : "boolean" == typeof t && s
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : ((n = kt(e)),
                  this.each(function () {
                    if (s) for (i = S(this), o = 0; o < n.length; o++) (r = n[o]), i.hasClass(r) ? i.removeClass(r) : i.addClass(r);
                    else
                      (void 0 !== e && "boolean" !== a) ||
                        ((r = At(this)) && se.set(this, "__className__", r),
                        this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : se.get(this, "__className__") || ""));
                  }));
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0;
              for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + St(At(n)) + " ").indexOf(t) > -1) return !0;
              return !1;
            }
          });
        var Nt = /\r/g;
        S.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              o = this[0];
            return arguments.length
              ? ((r = y(e)),
                this.each(function (n) {
                  var o;
                  1 === this.nodeType &&
                    (null == (o = r ? e.call(this, n, S(this).val()) : e)
                      ? (o = "")
                      : "number" == typeof o
                      ? (o += "")
                      : Array.isArray(o) &&
                        (o = S.map(o, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, o, "value")) ||
                      (this.value = o));
                }))
              : o
              ? (t = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value"))
                ? n
                : "string" == typeof (n = o.value)
                ? n.replace(Nt, "")
                : null == n
                ? ""
                : n
              : void 0;
          }
        }),
          S.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = S.find.attr(e, "value");
                  return null != t ? t : St(S.text(e));
                }
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    o = e.options,
                    i = e.selectedIndex,
                    a = "select-one" === e.type,
                    s = a ? null : [],
                    l = a ? i + 1 : o.length;
                  for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                    if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                      if (((t = S(n).val()), a)) return t;
                      s.push(t);
                    }
                  return s;
                },
                set: function (e, t) {
                  for (var n, r, o = e.options, i = S.makeArray(t), a = o.length; a--; )
                    ((r = o[a]).selected = S.inArray(S.valHooks.option.get(r), i) > -1) && (n = !0);
                  return n || (e.selectedIndex = -1), i;
                }
              }
            }
          }),
          S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return (e.checked = S.inArray(S(e).val(), t) > -1);
              }
            }),
              g.checkOn ||
                (S.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          });
        var Dt = r.location,
          Lt = { guid: Date.now() },
          jt = /\?/;
        S.parseXML = function (e) {
          var t, n;
          if (!e || "string" != typeof e) return null;
          try {
            t = new r.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {}
          return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
              S.error(
                "Invalid XML: " +
                  (n
                    ? S.map(n.childNodes, function (e) {
                        return e.textContent;
                      }).join("\n")
                    : e)
              ),
            t
          );
        };
        var Ot = /^(?:focusinfocus|focusoutblur)$/,
          Rt = function (e) {
            e.stopPropagation();
          };
        S.extend(S.event, {
          trigger: function (e, t, n, o) {
            var i,
              a,
              s,
              l,
              u,
              c,
              f,
              p,
              h = [n || b],
              m = d.call(e, "type") ? e.type : e,
              g = d.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((a = p = s = n = n || b),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Ot.test(m + S.event.triggered) &&
                (m.indexOf(".") > -1 && ((g = m.split(".")), (m = g.shift()), g.sort()),
                (u = m.indexOf(":") < 0 && "on" + m),
                ((e = e[S.expando] ? e : new S.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3),
                (e.namespace = g.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (f = S.event.special[m] || {}),
                o || !f.trigger || !1 !== f.trigger.apply(n, t)))
            ) {
              if (!o && !f.noBubble && !v(n)) {
                for (l = f.delegateType || m, Ot.test(l + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), (s = a);
                s === (n.ownerDocument || b) && h.push(s.defaultView || s.parentWindow || r);
              }
              for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                (p = a),
                  (e.type = i > 1 ? l : f.bindType || m),
                  (c = (se.get(a, "events") || Object.create(null))[e.type] && se.get(a, "handle")) && c.apply(a, t),
                  (c = u && a[u]) && c.apply && ie(a) && ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault());
              return (
                (e.type = m),
                o ||
                  e.isDefaultPrevented() ||
                  (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                  !ie(n) ||
                  (u &&
                    y(n[m]) &&
                    !v(n) &&
                    ((s = n[u]) && (n[u] = null),
                    (S.event.triggered = m),
                    e.isPropagationStopped() && p.addEventListener(m, Rt),
                    n[m](),
                    e.isPropagationStopped() && p.removeEventListener(m, Rt),
                    (S.event.triggered = void 0),
                    s && (n[u] = s))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(r, null, t);
          }
        }),
          S.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                S.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return S.event.trigger(e, t, n, !0);
            }
          });
        var Mt = /\[\]$/,
          Ht = /\r?\n/g,
          _t = /^(?:submit|button|image|reset|file)$/i,
          It = /^(?:input|select|textarea|keygen)/i;
        function qt(e, t, n, r) {
          var o;
          if (Array.isArray(t))
            S.each(t, function (t, o) {
              n || Mt.test(e) ? r(e, o) : qt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r);
            });
          else if (n || "object" !== w(t)) r(e, t);
          else for (o in t) qt(e + "[" + o + "]", t[o], n, r);
        }
        (S.param = function (e, t) {
          var n,
            r = [],
            o = function (e, t) {
              var n = y(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
              o(this.name, this.value);
            });
          else for (n in e) qt(n, e[n], t, o);
          return r.join("&");
        }),
          S.fn.extend({
            serialize: function () {
              return S.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return this.name && !S(this).is(":disabled") && It.test(this.nodeName) && !_t.test(e) && (this.checked || !Se.test(e));
                })
                .map(function (e, t) {
                  var n = S(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? S.map(n, function (e) {
                        return { name: t.name, value: e.replace(Ht, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Ht, "\r\n") };
                })
                .get();
            }
          });
        var Pt = /%20/g,
          Ft = /#.*$/,
          Wt = /([?&])_=[^&]*/,
          Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ut = /^(?:GET|HEAD)$/,
          zt = /^\/\//,
          $t = {},
          Gt = {},
          Xt = "*/".concat("*"),
          Vt = b.createElement("a");
        function Yt(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
              o = 0,
              i = t.toLowerCase().match(X) || [];
            if (y(n))
              for (; (r = i[o++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          };
        }
        function Kt(e, t, n, r) {
          var o = {},
            i = e === Gt;
          function a(s) {
            var l;
            return (
              (o[s] = !0),
              S.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || i || o[u] ? (i ? !(l = u) : void 0) : (t.dataTypes.unshift(u), a(u), !1);
              }),
              l
            );
          }
          return a(t.dataTypes[0]) || (!o["*"] && a("*"));
        }
        function Qt(e, t) {
          var n,
            r,
            o = S.ajaxSettings.flatOptions || {};
          for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
          return r && S.extend(!0, e, r), e;
        }
        (Vt.href = Dt.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Dt.href,
              type: "GET",
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Dt.protocol),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
              converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
              flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function (e, t) {
              return t ? Qt(Qt(e, S.ajaxSettings), t) : Qt(S.ajaxSettings, e);
            },
            ajaxPrefilter: Yt($t),
            ajaxTransport: Yt(Gt),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var n,
                o,
                i,
                a,
                s,
                l,
                u,
                c,
                f,
                p,
                d = S.ajaxSetup({}, t),
                h = d.context || d,
                m = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                g = S.Deferred(),
                y = S.Callbacks("once memory"),
                v = d.statusCode || {},
                x = {},
                T = {},
                w = "canceled",
                E = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (u) {
                      if (!a)
                        for (a = {}; (t = Bt.exec(i)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                      t = a[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return u ? i : null;
                  },
                  setRequestHeader: function (e, t) {
                    return null == u && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (x[e] = t)), this;
                  },
                  overrideMimeType: function (e) {
                    return null == u && (d.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (u) E.always(e[E.status]);
                      else for (t in e) v[t] = [v[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || w;
                    return n && n.abort(t), C(0, t), this;
                  }
                };
              if (
                (g.promise(E),
                (d.url = ((e || d.url || Dt.href) + "").replace(zt, Dt.protocol + "//")),
                (d.type = t.method || t.type || d.method || d.type),
                (d.dataTypes = (d.dataType || "*").toLowerCase().match(X) || [""]),
                null == d.crossDomain)
              ) {
                l = b.createElement("a");
                try {
                  (l.href = d.url), (l.href = l.href), (d.crossDomain = Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host);
                } catch (e) {
                  d.crossDomain = !0;
                }
              }
              if ((d.data && d.processData && "string" != typeof d.data && (d.data = S.param(d.data, d.traditional)), Kt($t, d, t, E), u))
                return E;
              for (f in ((c = S.event && d.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
              (d.type = d.type.toUpperCase()),
              (d.hasContent = !Ut.test(d.type)),
              (o = d.url.replace(Ft, "")),
              d.hasContent
                ? d.data &&
                  d.processData &&
                  0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                  (d.data = d.data.replace(Pt, "+"))
                : ((p = d.url.slice(o.length)),
                  d.data && (d.processData || "string" == typeof d.data) && ((o += (jt.test(o) ? "&" : "?") + d.data), delete d.data),
                  !1 === d.cache && ((o = o.replace(Wt, "$1")), (p = (jt.test(o) ? "&" : "?") + "_=" + Lt.guid++ + p)),
                  (d.url = o + p)),
              d.ifModified &&
                (S.lastModified[o] && E.setRequestHeader("If-Modified-Since", S.lastModified[o]),
                S.etag[o] && E.setRequestHeader("If-None-Match", S.etag[o])),
              ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) && E.setRequestHeader("Content-Type", d.contentType),
              E.setRequestHeader(
                "Accept",
                d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                  ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
                  : d.accepts["*"]
              ),
              d.headers))
                E.setRequestHeader(f, d.headers[f]);
              if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || u)) return E.abort();
              if (((w = "abort"), y.add(d.complete), E.done(d.success), E.fail(d.error), (n = Kt(Gt, d, t, E)))) {
                if (((E.readyState = 1), c && m.trigger("ajaxSend", [E, d]), u)) return E;
                d.async &&
                  d.timeout > 0 &&
                  (s = r.setTimeout(function () {
                    E.abort("timeout");
                  }, d.timeout));
                try {
                  (u = !1), n.send(x, C);
                } catch (e) {
                  if (u) throw e;
                  C(-1, e);
                }
              } else C(-1, "No Transport");
              function C(e, t, a, l) {
                var f,
                  p,
                  b,
                  x,
                  T,
                  w = t;
                u ||
                  ((u = !0),
                  s && r.clearTimeout(s),
                  (n = void 0),
                  (i = l || ""),
                  (E.readyState = e > 0 ? 4 : 0),
                  (f = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (x = (function (e, t, n) {
                      for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                      if (r)
                        for (o in s)
                          if (s[o] && s[o].test(r)) {
                            l.unshift(o);
                            break;
                          }
                      if (l[0] in n) i = l[0];
                      else {
                        for (o in n) {
                          if (!l[0] || e.converters[o + " " + l[0]]) {
                            i = o;
                            break;
                          }
                          a || (a = o);
                        }
                        i = i || a;
                      }
                      if (i) return i !== l[0] && l.unshift(i), n[i];
                    })(d, E, a)),
                  !f &&
                    S.inArray("script", d.dataTypes) > -1 &&
                    S.inArray("json", d.dataTypes) < 0 &&
                    (d.converters["text script"] = function () {}),
                  (x = (function (e, t, n, r) {
                    var o,
                      i,
                      a,
                      s,
                      l,
                      u = {},
                      c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i; )
                      if (
                        (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        (l = i),
                        (i = c.shift()))
                      )
                        if ("*" === i) i = l;
                        else if ("*" !== l && l !== i) {
                          if (!(a = u[l + " " + i] || u["* " + i]))
                            for (o in u)
                              if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                !0 === a ? (a = u[o]) : !0 !== u[o] && ((i = s[0]), c.unshift(s[1]));
                                break;
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else
                              try {
                                t = a(t);
                              } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + i };
                              }
                        }
                    return { state: "success", data: t };
                  })(d, x, E, f)),
                  f
                    ? (d.ifModified &&
                        ((T = E.getResponseHeader("Last-Modified")) && (S.lastModified[o] = T),
                        (T = E.getResponseHeader("etag")) && (S.etag[o] = T)),
                      204 === e || "HEAD" === d.type
                        ? (w = "nocontent")
                        : 304 === e
                        ? (w = "notmodified")
                        : ((w = x.state), (p = x.data), (f = !(b = x.error))))
                    : ((b = w), (!e && w) || ((w = "error"), e < 0 && (e = 0))),
                  (E.status = e),
                  (E.statusText = (t || w) + ""),
                  f ? g.resolveWith(h, [p, w, E]) : g.rejectWith(h, [E, w, b]),
                  E.statusCode(v),
                  (v = void 0),
                  c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : b]),
                  y.fireWith(h, [E, w]),
                  c && (m.trigger("ajaxComplete", [E, d]), --S.active || S.event.trigger("ajaxStop")));
              }
              return E;
            },
            getJSON: function (e, t, n) {
              return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return S.get(e, void 0, t, "script");
            }
          }),
          S.each(["get", "post"], function (e, t) {
            S[t] = function (e, n, r, o) {
              return (
                y(n) && ((o = o || r), (r = n), (n = void 0)),
                S.ajax(S.extend({ url: e, type: t, dataType: o, data: n, success: r }, S.isPlainObject(e) && e))
              );
            };
          }),
          S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
          }),
          (S._evalUrl = function (e, t, n) {
            return S.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                S.globalEval(e, t, n);
              }
            });
          }),
          S.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return y(e)
                ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = S(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = y(e);
              return this.each(function (n) {
                S(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    S(this).replaceWith(this.childNodes);
                  }),
                this
              );
            }
          }),
          (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
          }),
          (S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
          }),
          (S.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest();
            } catch (e) {}
          });
        var Jt = { 0: 200, 1223: 204 },
          Zt = S.ajaxSettings.xhr();
        (g.cors = !!Zt && "withCredentials" in Zt),
          (g.ajax = Zt = !!Zt),
          S.ajaxTransport(function (e) {
            var t, n;
            if (g.cors || (Zt && !e.crossDomain))
              return {
                send: function (o, i) {
                  var a,
                    s = e.xhr();
                  if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (a in e.xhrFields) s[a] = e.xhrFields[a];
                  for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                  e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                  o))
                    s.setRequestHeader(a, o[a]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                        "abort" === e
                          ? s.abort()
                          : "error" === e
                          ? "number" != typeof s.status
                            ? i(0, "error")
                            : i(s.status, s.statusText)
                          : i(
                              Jt[s.status] || s.status,
                              s.statusText,
                              "text" !== (s.responseType || "text") || "string" != typeof s.responseText
                                ? { binary: s.response }
                                : { text: s.responseText },
                              s.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (s.onload = t()),
                    (n = s.onerror = s.ontimeout = t("error")),
                    void 0 !== s.onabort
                      ? (s.onabort = n)
                      : (s.onreadystatechange = function () {
                          4 === s.readyState &&
                            r.setTimeout(function () {
                              t && n();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    s.send((e.hasContent && e.data) || null);
                  } catch (e) {
                    if (t) throw e;
                  }
                },
                abort: function () {
                  t && t();
                }
              };
          }),
          S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          S.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return S.globalEval(e), e;
              }
            }
          }),
          S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
          }),
          S.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, o) {
                  (t = S("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                }
              };
          });
        var en,
          tn = [],
          nn = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = tn.pop() || S.expando + "_" + Lt.guid++;
            return (this[e] = !0), e;
          }
        }),
          S.ajaxPrefilter("json jsonp", function (e, t, n) {
            var o,
              i,
              a,
              s =
                !1 !== e.jsonp &&
                (nn.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") &&
                    nn.test(e.data) &&
                    "data");
            if (s || "jsonp" === e.dataTypes[0])
              return (
                (o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                s ? (e[s] = e[s].replace(nn, "$1" + o)) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                (e.converters["script json"] = function () {
                  return a || S.error(o + " was not called"), a[0];
                }),
                (e.dataTypes[0] = "json"),
                (i = r[o]),
                (r[o] = function () {
                  a = arguments;
                }),
                n.always(function () {
                  void 0 === i ? S(r).removeProp(o) : (r[o] = i),
                    e[o] && ((e.jsonpCallback = t.jsonpCallback), tn.push(o)),
                    a && y(i) && i(a[0]),
                    (a = i = void 0);
                }),
                "script"
              );
          }),
          (g.createHTMLDocument =
            (((en = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === en.childNodes.length)),
          (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (g.createHTMLDocument
                    ? (((r = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href),
                      t.head.appendChild(r))
                    : (t = b)),
                (i = !n && []),
                (o = F.exec(e))
                  ? [t.createElement(o[1])]
                  : ((o = Oe([e], t, i)), i && i.length && S(i).remove(), S.merge([], o.childNodes)));
            var r, o, i;
          }),
          (S.fn.load = function (e, t, n) {
            var r,
              o,
              i,
              a = this,
              s = e.indexOf(" ");
            return (
              s > -1 && ((r = St(e.slice(s))), (e = e.slice(0, s))),
              y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
              a.length > 0 &&
                S.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (i = arguments), a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, i || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (S.offset = {
            setOffset: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                l,
                u = S.css(e, "position"),
                c = S(e),
                f = {};
              "static" === u && (e.style.position = "relative"),
                (s = c.offset()),
                (i = S.css(e, "top")),
                (l = S.css(e, "left")),
                ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1
                  ? ((a = (r = c.position()).top), (o = r.left))
                  : ((a = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
                y(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + o),
                "using" in t ? t.using.call(e, f) : c.css(f);
            }
          }),
          S.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      S.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                r = this[0];
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  o = { top: 0, left: 0 };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (o.left += S.css(e, "borderLeftWidth", !0)));
                }
                return { top: t.top - o.top - S.css(r, "marginTop", !0), left: t.left - o.left - S.css(r, "marginLeft", !0) };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                return e || me;
              });
            }
          }),
          S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            S.fn[e] = function (r) {
              return ee(
                this,
                function (e, r, o) {
                  var i;
                  if ((v(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === o)) return i ? i[t] : e[r];
                  i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : (e[r] = o);
                },
                e,
                r,
                arguments.length
              );
            };
          }),
          S.each(["top", "left"], function (e, t) {
            S.cssHooks[t] = et(g.pixelPosition, function (e, n) {
              if (n) return (n = Ze(e, t)), Ve.test(n) ? S(e).position()[t] + "px" : n;
            });
          }),
          S.each({ Height: "height", Width: "width" }, function (e, t) {
            S.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
              S.fn[r] = function (o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                  s = n || (!0 === o || !0 === i ? "margin" : "border");
                return ee(
                  this,
                  function (t, n, o) {
                    var i;
                    return v(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((i = t.documentElement),
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                      : void 0 === o
                      ? S.css(t, n, s)
                      : S.style(t, n, o, s);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              };
            });
          }),
          S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            S.fn[t] = function (e) {
              return this.on(t, e);
            };
          }),
          S.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.on("mouseenter", e).on("mouseleave", t || e);
            }
          }),
          S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              S.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
              };
            }
          );
        var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        (S.proxy = function (e, t) {
          var n, r, o;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = s.call(arguments, 2)),
              (o = function () {
                return e.apply(t || this, r.concat(s.call(arguments)));
              }),
              (o.guid = e.guid = e.guid || S.guid++),
              o
            );
        }),
          (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = k),
          (S.isFunction = y),
          (S.isWindow = v),
          (S.camelCase = oe),
          (S.type = w),
          (S.now = Date.now),
          (S.isNumeric = function (e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
          }),
          (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(rn, "$1");
          }),
          void 0 ===
            (n = function () {
              return S;
            }.apply(t, [])) || (e.exports = n);
        var on = r.jQuery,
          an = r.$;
        return (
          (S.noConflict = function (e) {
            return r.$ === S && (r.$ = an), e && r.jQuery === S && (r.jQuery = on), S;
          }),
          void 0 === o && (r.jQuery = r.$ = S),
          S
        );
      });
    }
  }
]);
