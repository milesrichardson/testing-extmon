Interfaces.ExtensionDropdownInterface = (function () {
  var n = Interfaces.Definition,
    e = Interfaces.TYPE_FUNCTION;
  return {
    LPPlatform: { onLoad: new n(e) },
    ExtensionDropdown: { open: new n(e), reset: new n(e), setBigIcons: new n(e), openDialog: new n(e) }
  };
})();
