!(function (c) {
  var s = "unknown",
    t = {
      init: function (n) {
        var t = c.extend({}, n),
          o = !0 === /MacPPC|MacIntel/.test(window.navigator.platform),
          e,
          r = function (n) {
            var t = !1,
              n = (n.shiftKey ? (t = n.shiftKey) : n.modifiers && (t = !!(4 & n.modifiers)), String.fromCharCode(n.which));
            return (
              n.toUpperCase() !== n.toLowerCase() &&
                (n.toUpperCase() === n ? (!0 == o && t) || (s = !t) : n.toLowerCase() === n && (s = t)),
              s
            );
          },
          i = function (n) {
            var n = n.which;
            return (s = 20 === n && "unknown" !== s ? !s : s);
          },
          a = function (n, t) {
            n !== t &&
              (c("body").trigger("capsChanged"),
              !0 === t
                ? c("body").trigger("capsOn")
                : !1 === t
                ? c("body").trigger("capsOff")
                : "unknown" === t && c("body").trigger("capsUnknown"));
          };
        return (
          c("body").bind("keypress.capslockstate", function (n) {
            var t = s;
            (s = r(n)), a(t, s);
          }),
          c("body").bind("keydown.capslockstate", function (n) {
            var t = s;
            (s = i(n)), a(t, s);
          }),
          c(window).bind("focus.capslockstate", function () {
            var n;
            a(s, (s = "unknown"));
          }),
          a(null, "unknown"),
          this.each(function () {})
        );
      },
      state: function () {
        return s;
      },
      destroy: function () {
        return this.each(function () {
          c("body").unbind(".capslockstate"), c(window).unbind(".capslockstate");
        });
      }
    };
  jQuery.fn.capslockstate = function (n) {
    return t[n]
      ? t[n].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof n && n
      ? void c.error("Method " + n + " does not exist on jQuery.capslockstate")
      : t.init.apply(this, arguments);
  };
})(jQuery);
