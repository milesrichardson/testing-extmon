function LPdriver() {
  (this.derive_doc = function () {
    var e = null,
      e;
    return (e = "undefined" != typeof g_isfirefox && g_isfirefox && LP ? LP.getBrowser().contentDocument : document) || null;
  }),
    (this.find_element_by_id = function (e, t) {
      return (e = e || this.derive_doc()) ? e.getElementById(t) : null;
    }),
    (this.find_element_by_name = function (e, t) {
      var e;
      return !(e = e || this.derive_doc()) || !(e = e.getElementsByName(t)) || e.length < 1 ? null : e[0];
    }),
    (this.find_element_by_xpath = function (e, t) {
      return (e = e || this.derive_doc()) ? LP_getElementByXPath(e, t) : null;
    }),
    (this.find_element_by_link_text = function (e, t) {
      return e || (e = this.derive_doc()), null;
    }),
    (this.find_element_by_partial_link_text = function (e, t) {
      return e || (e = this.derive_doc()), null;
    }),
    (this.find_element_by_tag_name = function (e, t) {
      var e;
      return (e = e || this.derive_doc()) && void 0 !== e.getElementsByTagName && (e = e.getElementsByTagName(t)) && 0 < e.length
        ? e[0]
        : null;
    }),
    (this.find_element_by_class_name = function (e, t) {
      var e;
      return !(e = e || this.derive_doc()) || !(e = e.getElementsByClasName(t)) || e.length < 1 ? null : e[0];
    }),
    (this.find_element_by_css_selector = function (e, t) {
      var e;
      return (e = e || this.derive_doc()) && void 0 !== e.querySelectorAll && (e = e.querySelectorAll(t)) && 0 < e.length ? e : null;
    }),
    (this.find_elements_by_name = function (e, t) {
      return (e = e || this.derive_doc()) ? e.getElementsByName(t) : null;
    }),
    (this.find_elements_by_xpath = function (e, t) {
      return (e = e || this.derive_doc()) ? LP_getElementByXPath(e, t) : null;
    }),
    (this.find_elements_by_link_text = function (e, t) {
      return e || (e = this.derive_doc()), null;
    }),
    (this.find_elements_by_partial_link_text = function (e, t) {
      return e || (e = this.derive_doc()), null;
    }),
    (this.find_elements_by_tag_name = function (e, t) {
      var e;
      return (e = e || this.derive_doc()) && void 0 !== e.getElementsByTagName && (e = e.getElementsByTagName(t)) && 0 < e.length
        ? e
        : null;
    }),
    (this.find_elements_by_class_name = function (e, t) {
      return (e = e || this.derive_doc()) ? e.getElementsByClassName(t) : null;
    }),
    (this.find_elements_by_css_selector = function (e, t) {
      var e;
      return (e = e || this.derive_doc()) && void 0 !== e.querySelectorAll && (e = e.querySelectorAll(t)) && 0 < e.length ? e : null;
    }),
    (this.find_input_elements_by_id = function (e, t) {
      if (!e && !(e = this.derive_doc())) return null;
      if (void 0 !== e.getElementsByTagName) {
        var n = e.getElementsByTagName("INPUT"),
          i = [],
          l;
        if (n) for (l = 0; l < n.length; l++) n[l] && n[l].id == t && i.push(n[l]);
        return i.length < 1 ? null : i;
      }
    });
}
