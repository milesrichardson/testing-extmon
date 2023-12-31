LPReflection = (function (a) {
  var p = function (n, t, i) {
      i = i || a;
      for (var e = 0, o = (t = "string" == typeof t ? t.split(".") : t).length; e < o; ++e) {
        var r = t[e];
        if (n) {
          if (!n.hasOwnProperty(r)) throw "Cannot access " + t.join(".") + ". Not defined on the interface.";
          n = n[r];
        }
        e < o - 1 && (i = i[r]);
      }
      return { parent: i, property: t[t.length - 1], definition: n };
    },
    n,
    t,
    i;
  return {
    callFunction: function (n, t, i, e) {
      var o = p(n, t, e && e.context),
        r = o.parent[o.property];
      if (e && e.additionalArguments && o.definition.options && o.definition.options.appendAdditionalArguments) {
        for (var n = [].concat(e.additionalArguments), a = r.length - i.length - n.length, f = 0; f < a; ++f) i.push(void 0);
        i = i.concat(e.additionalArguments);
      }
      if (!o.definition || !o.definition.before) return r.apply(o.parent, i);
      o.definition.before.apply(
        o.definition,
        i.concat(function () {
          r.apply(o.parent, i);
        })
      );
    },
    setValue: function (n, t, i, e) {
      var n = p(n, t, e && e.context);
      if (n.definition && !n.definition.allowWrite()) throw ("string" == typeof t ? t : t.join(".")) + " is not writeable.";
      n.parent[n.property] = i;
    },
    getValue: function (n, t, i) {
      var n = p(n, t, i && i.context);
      return n.parent[n.property];
    }
  };
})(this);
