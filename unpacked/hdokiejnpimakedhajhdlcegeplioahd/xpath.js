function LP_getElementByXPath(e, t) {
  return (e = e || LP_derive_doc()) ? LP_lookupElementByXPath(e, t) : null;
}
function LP_getElementsByXPath(e, t) {
  return (e = e || LP_derive_doc()) ? LP_lookupElementsByXPath(e, t) : null;
}
function LP_createXPathFromElement(e, t) {
  if (!e && !(e = LP_derive_doc())) return null;
  if (!t) return null;
  var a = null,
    n = LP_eltmap_get(e, t);
  if (null != n && n.uniqid) return n.uniqid;
  var i = 1,
    o,
    l,
    r;
  for (segs = []; t && 1 == t.nodeType; t = t.parentNode)
    if (t.hasAttribute("id")) {
      try {
        var u = e.querySelectorAll("#" + t.id);
      } catch (e) {
        u = [];
      }
      if (1 == u.length && u[0] == t)
        return segs.unshift('id("' + t.getAttribute("id") + '")'), (a = segs.join("/")), LP_eltmap_set(e, t, { uniqid: a }), a;
      for (
        var s = t.parentNode ? t.parentNode.children : [], f = 0, E = 0;
        E < s.length && (void 0 !== s[E].hasAttribute && s[E].hasAttribute("id") && s[E].id == t.id && f++, !(1 < f));
        E++
      );
      if (1 < f) {
        for (o = 1, l = t.previousSibling; l; l = l.previousSibling) l.localName == t.localName && o++;
        segs.unshift(t.localName.toLowerCase() + "[" + o + "]");
      } else segs.unshift(t.localName.toLowerCase() + '[@id="' + t.getAttribute("id") + '"]');
    } else if (t.hasAttribute("name")) segs.unshift(t.localName.toLowerCase() + '[@name="' + t.getAttribute("name") + '"]');
    else if (t.hasAttribute("action") && "FORM" == t.nodeName.toUpperCase())
      segs.unshift(t.localName.toLowerCase() + '[@action="' + t.getAttribute("action") + '"]');
    else if (t.hasAttribute("class")) segs.unshift(t.localName.toLowerCase() + '[contains(@class,"' + t.getAttribute("class") + '")]');
    else {
      for (o = 1, l = t.previousSibling; l; l = l.previousSibling) l.localName == t.localName && o++;
      segs.unshift(t.localName.toLowerCase() + "[" + o + "]");
    }
  return (a = segs.length ? "/" + segs.join("/") : null), LP_eltmap_set(e, t, { uniqid: a }), a;
}
function LP_lookupElementByXPath(e, t) {
  var a, n;
  return !e ||
    !e.documentElement ||
    (g_isfirefox && e && !e.defaultView) ||
    "undefined" == (g_isfirefox ? typeof e.defaultView.XPathEvaluator : typeof XPathEvaluator)
    ? null
    : new (g_isfirefox ? e.defaultView.XPathEvaluator : XPathEvaluator)().evaluate(
        t,
        e.documentElement,
        null,
        (g_isfirefox ? e.defaultView.XPathResult : XPathResult).FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
}
function LP_lookupElementsByXPath(e, t) {
  var a = [];
  if (e && e.documentElement && "undefined" != (g_isfirefox ? typeof e.defaultView.XPathEvaluator : typeof XPathEvaluator)) {
    var n,
      i = new (g_isfirefox ? e.defaultView.XPathEvaluator : XPathEvaluator)().evaluate(
        t,
        e.documentElement,
        null,
        (g_isfirefox ? e.defaultView.XPathResult : XPathResult).ORDERED_NODE_ITERATOR_TYPE,
        null
      );
    if (i) for (var o = i.iterateNext(); o; ) o && a.push(o), (o = i.iterateNext());
  }
  return a;
}
var Node;
function LP_getXPath(e) {
  var t = 1,
    a = 2,
    n = 3,
    i = 7,
    o = 8,
    l = 9,
    r,
    u = [],
    s = null,
    f = "",
    E = function (e) {
      var t = 1,
        a;
      if (2 == e.nodeType) return null;
      for (a = e.previousSibling; a; a = a.previousSibling) a.nodeName == e.nodeName && ++t;
      return t;
    };
  if (N(e)) return "/";
  for (; e && !N(e); e = 2 == e.nodeType ? e.ownerElement : e.parentNode) {
    switch (((r = u[u.length] = {}), e.nodeType)) {
      case 1:
        r.name = "text()";
        break;
      case 2:
        r.name = "@" + e.nodeName;
        break;
      case 7:
        r.name = "processing-instruction()";
        break;
      case 8:
        r.name = "comment()";
        break;
      case 3:
        r.name = e.nodeName;
    }
    r.position = E(e);
  }
  for (var d = u.length - 1; 0 <= d; d--) (f += "/" + (r = u[d]).name), null != r.position && (f += "[" + r.position + "]");
  return f;
  function N(e) {
    return "undefined" != typeof Document ? e instanceof Document : e && 9 == e.nodeType;
  }
}
void 0 === Node &&
  (Node = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12
  });
