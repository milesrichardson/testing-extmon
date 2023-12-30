!(function (t) {
  t.translate = function (t) {
    if (t) {
      var r = t.trim();
      if (0 < r.length) {
        var r = LPPlatform.translate(r);
        try {
          return 1 < arguments.length ? sprintf.apply(null, [r].concat([].splice.call(arguments, 1))) : r;
        } catch (t) {
          return console.error("StringUtils.translate: sprintf failed: " + t), r;
        }
      }
    }
    return t;
  };
})((StringUtils = {}));
