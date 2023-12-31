Interfaces.PopoverInterface = (function () {
  var e = Interfaces.Definition,
    n = Interfaces.TYPE_FUNCTION;
  return {
    LPPopover: {
      refresh: new e(n),
      refreshData: new e(n),
      login: Interfaces.ExtensionLoginDropdownInterface,
      dropdown: Interfaces.ExtensionDropdownInterface
    }
  };
})();
