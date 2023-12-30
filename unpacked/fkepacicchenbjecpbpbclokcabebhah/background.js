var port,
  trackChanges = !0,
  isSupportedOS = !0,
  iCPState = 0,
  CmdBeginBuildingBookmarkTree = 1,
  CmdAddFolderToTree = 2,
  CmdAddBookmarkToTree = 3,
  CmdEndBuildingBookmarkTree = 4,
  CmdOnChange = 5,
  CmdOnDidBMOp = 6,
  CmdOnFailBMOp = 7,
  CmdOnImportBegin = 8,
  CmdOnImportEnd = 9,
  CmdLaunchiCP = 10,
  CmdInit = 11,
  CmdiCPStateChange = 50,
  CmdiCPAction = 51,
  CmdChangeAddFolder = 60,
  CmdChangeAddBookmark = 61,
  CmdChangeDeleteBookmark = 62,
  CmdChangeDeleteFolderRecursive = 63,
  CmdChangeDeleteFolder = 64,
  CmdChangeUpdate = 65,
  CmdChangeMove = 66;
function doMove(e, t, d) {
  var r = { parentId: t, index: d };
  chrome.bookmarks.move(e, r, function (e) {
    if (e) {
      var t = { cmd: CmdOnDidBMOp, info: e };
      try {
        port.postMessage(t);
      } catch (e) {}
    } else {
      t = { cmd: CmdOnFailBMOp, error: chrome.runtime.lastError, cinfo: r, info: e };
      try {
        port.postMessage(t);
      } catch (e) {}
    }
  });
}
function doAdd(e, t, d, r) {
  var o = { parentId: e, title: t, url: d };
  null != r && (o.index = r),
    chrome.bookmarks.create(o, function (e) {
      if (e) {
        var t = { cmd: CmdOnDidBMOp, info: e };
        try {
          port.postMessage(t);
        } catch (e) {}
      } else {
        t = { cmd: CmdOnFailBMOp, error: chrome.runtime.lastError, cinfo: o, info: e };
        try {
          port.postMessage(t);
        } catch (e) {}
      }
    });
}
function doAddFolder(e, t, d) {
  var r = { parentId: e, title: t };
  null != d && (r.index = d),
    chrome.bookmarks.create(r, function (e) {
      if (e) {
        var t = { cmd: CmdOnDidBMOp, info: e };
        try {
          port.postMessage(t);
        } catch (e) {}
      } else {
        t = { cmd: CmdOnFailBMOp, error: chrome.runtime.lastError, cinfo: r, info: e };
        try {
          port.postMessage(t);
        } catch (e) {}
      }
    });
}
function doDelete(e) {
  chrome.bookmarks.remove(e, function () {
    var t = { cmd: CmdOnDidBMOp, id: e };
    try {
      port.postMessage(t);
    } catch (e) {}
  });
}
function doDeleteFolderRecursively(e) {
  chrome.bookmarks.removeTree(e, function () {
    var t = { cmd: CmdOnDidBMOp, id: e };
    try {
      port.postMessage(t);
    } catch (e) {}
  });
}
function doUpdate(e, t, d) {
  var r = {};
  null != t && null != t && (r.title = t), null != d && null != d && (r.url = d);
  chrome.bookmarks.update(e, r, function (e) {
    if (e) {
      var t = { cmd: CmdOnDidBMOp, info: e };
      try {
        port.postMessage(t);
      } catch (e) {}
    } else {
      t = { cmd: CmdOnFailBMOp, error: chrome.runtime.lastError, cinfo: r, info: e };
      try {
        port.postMessage(t);
      } catch (e) {}
    }
  });
}
function addFolder(e) {
  if (e.children)
    for (var t = e.children.length, d = 0; d < t; d++) {
      var r = e.children[d],
        o = { id: r.id, parentId: r.parentId, title: r.title, index: r.index };
      if (r.children) {
        var n = { cmd: CmdAddFolderToTree, fld: o };
        port.postMessage(n), addFolder(r);
      } else {
        r.url && (o.url = r.url);
        n = { cmd: CmdAddBookmarkToTree, bm: o };
        port.postMessage(n);
      }
    }
}
function buildClientTree() {
  port &&
    chrome.bookmarks.getTree(function (e) {
      var t = e[0].children[0],
        d = e[0].children[1],
        r = { id: t.id, parentId: t.parentId, title: t.title, index: t.index },
        o = { id: d.id, parentId: d.parentId, title: d.title, index: d.index },
        n = { cmd: CmdBeginBuildingBookmarkTree, bar: r, menu: o };
      try {
        port.postMessage(n), addFolder(t), addFolder(d);
        var a = { cmd: CmdEndBuildingBookmarkTree };
        port.postMessage(a);
      } catch (e) {}
    });
}
function oniCPStateChange(e, t) {
  (iCPState = e),
    chrome.runtime.sendMessage({ cmd: "UpdatePopup", iCPState: iCPState }, function (e) {
      chrome.runtime.lastError;
    }),
    t && buildClientTree();
}
function oniCPAction(e) {
  "ShowExtensionsPage" == e && chrome.tabs.create({ url: "chrome://extensions", active: !0 });
}
function checkForValidOS() {
  return !0;
}
if (
  (chrome.runtime.onMessage.addListener(function (e, t, d) {
    if ("GetiCPState" === e.cmd) d({ iCPState: iCPState });
    else if ("LaunchiCP" === e.cmd)
      try {
        var r = { cmd: CmdLaunchiCP };
        port.postMessage(r);
      } catch (e) {}
    else "IsSupportedOS" === e.cmd && d({ isSupportedOS: isSupportedOS });
  }),
  checkForValidOS())
) {
  try {
    (port = chrome.runtime.connectNative("com.apple.bookmarks")),
      (iCPState = 1),
      port.onMessage.addListener(function (e) {
        if (e.cmd)
          switch (e.cmd) {
            case CmdiCPStateChange:
              oniCPStateChange(e.iCPState, e.buildClientTree);
              break;
            case CmdiCPAction:
              oniCPAction(e.action);
              break;
            case CmdChangeAddFolder:
              doAddFolder(e.parentId, e.title, e.index);
              break;
            case CmdChangeAddBookmark:
              doAdd(e.parentId, e.title, e.url, e.index);
              break;
            case CmdChangeDeleteBookmark:
            case CmdChangeDeleteFolder:
              doDelete(e.id);
              break;
            case CmdChangeDeleteFolderRecursive:
              doDeleteFolderRecursively(e.id);
              break;
            case CmdChangeUpdate:
              doUpdate(e.id, e.title, e.url);
              break;
            case CmdChangeMove:
              doMove(e.id, e.parentId, e.index);
          }
      }),
      port.onDisconnect.addListener(function () {
        iCPState = 0;
      });
  } catch (e) {
    iCPState = 0;
  }
  var bm = chrome.bookmarks;
  bm &&
    (bm.onCreated.addListener(function (e, t) {
      var d = { cmd: CmdOnChange, type: "created", id: e, parentId: t.parentId, index: t.index, title: t.title, url: t.url };
      try {
        port.postMessage(d);
      } catch (e) {}
    }),
    bm.onRemoved.addListener(function (e, t) {
      var d = { cmd: CmdOnChange, type: "removed", id: e, parentId: t.parentId, index: t.index };
      try {
        port.postMessage(d);
      } catch (e) {}
    }),
    bm.onChanged.addListener(function (e, t) {
      var d = { cmd: CmdOnChange, type: "changed", id: e, title: t.title, url: t.url };
      try {
        port.postMessage(d);
      } catch (e) {}
    }),
    bm.onMoved.addListener(function (e, t) {
      var d = {
        cmd: CmdOnChange,
        type: "moved",
        id: e,
        oldParentId: t.oldParentId,
        oldIndex: t.oldIndex,
        parentId: t.parentId,
        index: t.index
      };
      try {
        port.postMessage(d);
      } catch (e) {}
    }),
    bm.onChildrenReordered.addListener(function (e, t) {
      var d = { cmd: CmdOnChange, type: "reorder", id: e, childIds: t.childIds };
      try {
        port.postMessage(d);
      } catch (e) {}
    }));
} else
  (isSupportedOS = !1),
    chrome.storage.local.get("hideUnsupportedOSPrompt", function (e) {
      (e.hideUnsupportedOSPrompt && 0 != e.hideUnsupportedOSPrompt) ||
        (chrome.storage.local.set({ hideUnsupportedOSPrompt: 1 }), window.alert(chrome.i18n.getMessage("unsupportedOS")));
    });
function sendInitCommand(e) {
  try {
    var t = { cmd: CmdInit, extVersion: e.version, userAgent: navigator.userAgent, brands: navigator.userAgentData?.brands };
    port.postMessage(t);
  } catch (e) {}
}
chrome.management.getSelf(sendInitCommand);
