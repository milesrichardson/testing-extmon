(function (source, args) {
  function setPopadsDummy(source) {
    delete window.PopAds;
    delete window.popns;
    Object.defineProperties(window, {
      PopAds: {
        get: function get() {
          hit(source);
          return {};
        }
      },
      popns: {
        get: function get() {
          hit(source);
          return {};
        }
      }
    });
  }
  function hit(source) {
    if (source.verbose !== true) {
      return;
    }
    try {
      var log = console.log.bind(console);
      var trace = console.trace.bind(console);
      var prefix = source.ruleText || "";
      if (source.domainName) {
        var AG_SCRIPTLET_MARKER = "#%#//";
        var UBO_SCRIPTLET_MARKER = "##+js";
        var ruleStartIndex;
        if (source.ruleText.includes(AG_SCRIPTLET_MARKER)) {
          ruleStartIndex = source.ruleText.indexOf(AG_SCRIPTLET_MARKER);
        } else if (source.ruleText.includes(UBO_SCRIPTLET_MARKER)) {
          ruleStartIndex = source.ruleText.indexOf(UBO_SCRIPTLET_MARKER);
        }
        var rulePart = source.ruleText.slice(ruleStartIndex);
        prefix = "".concat(source.domainName).concat(rulePart);
      }
      log("".concat(prefix, " trace start"));
      if (trace) {
        trace();
      }
      log("".concat(prefix, " trace end"));
    } catch (e) {}
    if (typeof window.__debug === "function") {
      window.__debug(source);
    }
  }
  const updatedArgs = args ? [].concat(source).concat(args) : [source];
  try {
    setPopadsDummy.apply(this, updatedArgs);
  } catch (e) {
    console.log(e);
  }
})(
  {
    name: "set-popads-dummy",
    args: []
  },
  []
);
