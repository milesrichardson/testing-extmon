/*
 *  background.js
 *
 * Code for the background page (shocker!)
 *
 */

var Background = {
  tabIdPrefix: null,
  nextTabId: 0,
  popupInfo: {}, // Map that holds the port and hostWindowId for new popups
  isFirstRun: false,
  isUpgrade: false, // Whether this load is an upgrade
  helperVersion: null,
  pendingAutoUrls: {}, // The set of URLs that are pending opening in IE Tab
  autoUrlDetails: {},
  forceLocal: {},

  IEOBJECT_KEEP_ALIVE: 15000,
  NATHOST_KEEP_ALIVE: 15000,
  RELOAD_DELAY: 3000,
  PENDING_AUTOURL_TIMEOUT: 10000,
  DOWNLOAD_START_TOLERANCE: 5000,
  STARTUP_DOWNLOAD_MAX_AGE: 15000,
  FORCE_LOCAL_TIMEOUT: 20000,

  generateTabIdPrefix: function () {
    this.tabIdPrefix = Math.random().toString(36).substr(2, 5).toUpperCase();
  },

  getNextIETabId: function () {
    this.nextTabId++;
    return this.tabIdPrefix + this.nextTabId;
  },

  listMatch: function (url, listName) {
    var filterUrls = Settings.get(listName);
    if (filterUrls) {
      for (var i = 0; i < filterUrls.length; i++) {
        var regex = null;
        var filter = filterUrls[i];
        // Remove any special attribute modifiers
        filter = filter.replace(/^\[[^\]]*\]/, "");
        var modifier = "i";
        if (filter.indexOf("r/") == 0) {
          filter = filter.slice(2);
        } else if (filter.indexOf("rcs/") == 0) {
          filter = filter.slice(4);
          modifier = "";
        } else {
          // todo:  Shouldn't we be escaping a bunch more special characters?
          //        Perhaps escape ALL characters, is that valid?
          //        Whatever we do here, we should match in the ietabhelper's listmatch functionality
          filter = filter.replace(/\//g, "\\/").replace(/\./g, "\\.").replace(/\*/g, ".*").replace(/\?/, "\\?");
        }

        // This is user-supplied data, so put the regex constructor in a try / catch
        var regex = null;
        try {
          regex = new RegExp(filter, modifier);
        } catch (ex) {}

        if (regex) {
          // Check for a match AND that the match contains the entire URL.
          var match = url.match(regex);
          if (match && match[0] == url) return filterUrls[i];
        }
      }
    }
    return false;
  },

  getAutoURLFilter: function (url) {
    if (url.match(/chrome[^\:]*\:/i)) return null;
    // Never load the options page in IE Tab, otherwise you can get stuck not being able to
    // change the Auto URLs.  For example, if you had entered an Auto URL of '*'
    if (url.match(/^https?:\/\/www\.(dev\.)?ietab\.net\/options/)) return null;

    if (this.listMatch(url, "exclusion-list")) return null;

    return this.listMatch(url, "autourl-list");
  },

  isInEdge: function () {
    return navigator.userAgent.indexOf("Edg/") != -1;
  },

  isAutoURL: function (url) {
    if (this.forceLocal[url]) {
      return false;
    }
    var filter = this.getAutoURLFilter(url);
    if (!filter) return false;
    return !Settings.hasFilterOption(url, "not-auto");
  },

  isAutoURLException: function (url) {
    return !!this.listMatch(url, "exclusion-list");
  },

  addForceLocal: function (url) {
    // Cleanup any existing entries
    var now = new Date().getTime();
    var urlEntry;
    var timeCreated;
    for (urlEntry in this.forceLocal) {
      timeCreated = this.forceLocal[urlEntry];
      if (now - timeCreated > this.FORCE_LOCAL_TIMEOUT) {
        delete this.forceLocal[urlEntry];
      }
    }

    // And add our new entry
    this.forceLocal[url] = new Date().getTime();
  },

  getContainerPage: function () {
    return "u.htm";
  },

  getNativeHostContainer: function (url) {
    return chrome.runtime.getURL("nhc.htm") + "#url=" + url;
  },

  openWithIETab: function (tabId, url) {
    // We do not allow them to re-open the getting started page using IE Tab
    if (url.indexOf("ie-tab-getting-started") != -1) return;

    var containerUrl;
    // If native host has been detected or the plugin doesn't work, go with native host.
    // We have to go there eventually anyhow.
    containerUrl = this.getNativeHostContainer(url);

    // Not sure why we have a 100 ms delay, leaving now because I assume it was determined it was necessary.
    window.setTimeout(function () {
      if (!tabId) chrome.tabs.create({ url: containerUrl });
      else chrome.tabs.update(tabId, { url: containerUrl });
    }, 100);
  },

  onFirstRun: function () {
    if (this.didRunFirstRun) {
      return;
    }
    this.didRunFirstRun = true;

    if (!this.isInEdge() && !Settings.get("disable-intro-page")) {
      if (Settings.get("use-remote-host")) {
        targetUrl = "http://www.ietab.net/hostedfirstrun";
        chrome.tabs.create({ url: targetUrl });
      } else {
        targetUrl = "http://www.ietab.net/thanks-installing-ie-tab";
        // Do not show for admin installs
        chrome.management.getSelf(
          function (info) {
            if (info.installType != "admin") {
              chrome.tabs.create({ url: targetUrl });
            }
          }.bind(this)
        );
      }
    }
  },

  onUpgrade: function () {},

  // Connect to the host if we are not already connected and send the message.
  // Automatically disconnects from the host after a timeout period
  // Will reply with { type: 'HOST_NOT_FOUND' } if it was not able to connect.
  sendWorkerMessage: function (msg, fnResponse) {
    NativeHostManager.sendWorkerMessage(msg, fnResponse);
  },

  onSetCompatMode: function (strMode) {
    var nMode = Settings.mapCompatModeString(strMode);

    this.sendWorkerMessage({ type: "SET_COMPAT_MODE", newMode: nMode });
  },

  onSetSpellCheck: function (value) {
    this.sendWorkerMessage({ type: "SET_SPELLCHECK", value: value });
  },

  onSetScriptMitigation: function (value) {
    this.sendWorkerMessage({ type: "SET_SCRIPTURL_MITIGATION", value: value });
  },

  onSetOpenInNewTab: function (value) {
    this.sendWorkerMessage({ type: "SET_OPENINNEWTAB", value: value });
  },

  onSetNewPointerMode: function (value) {
    this.sendWorkerMessage({ type: "SET_NEW_POINTER_MODE", value: value });
  },

  getLocalizedText: function (keys, fnResponse) {
    var result = {};

    for (var i = 0; i < keys.length; i++) {
      var str = I18N(keys[i]);
      if (str) result[keys[i]] = str;
    }
    fnResponse(result);
  },

  onShowNormalOptions: function () {
    var manifest = chrome.runtime.getManifest();
    var url = manifest["options_page"];
    if (url.indexOf("http") == -1) url = chrome.runtime.getURL(url);

    chrome.tabs.create({ url: url });
  },

  getCountName: function (key) {
    var count = IETAB.Storage.get(key);
    if (!count) return "0";
    if (count < 5) return "1-5";
    if (count < 10) return "5-10";
    if (count < 20) return "10-20";
    if (count < 50) return "20-50";
    if (count < 100) return "50-100";
    return "100+";
  },

  licensePing: function (daily) {
    // Daily license ping
    var key = Settings.get("license-key");
    if (key) {
      var baseUrl = chrome.runtime.getURL("");
      var id = baseUrl.match(/chrome-extension:\/\/([^\/]*)\//)[1];

      key = encodeURIComponent(key);
      id = encodeURIComponent(id);
      var rand = Math.round(Math.random() * 1000000);
      var cancelled = IETAB.Storage.get("licenseCancelled");
      var helperVersion = Settings.get("helper-version");
      var url = "https://www.ietab.net/logger/pingl?key=" + key + "&ext=" + id + "&hv=" + helperVersion + "&rt=0";
      if (!daily) {
        url += "&cancelled=" + cancelled;
      }
      url += "&r=" + rand;

      var req = new XMLHttpRequest();
      req.open("GET", url);
      req.onreadystatechange = function () {
        if (req.readyState == 4) {
          var data;
          try {
            data = JSON.parse(req.responseText);
            IETAB.Storage.set("licenseCancelled", data.licenseCancelled);
          } catch (ex) {
            IETAB.Storage.set("licenseCancelled", false);
          }
        }
      }.bind(this);
      req.send();
    }
  },

  onDailyPing: function () {
    this.licensePing(true);
  },

  // This is called from the "notsupported" page.  when users are in Metro mode, they will
  // see the "notsupported" page.  And it will be re-loaded when they switch to desktop mode.
  // So that page asks us again whether IE Tab is actually enabled.
  onGetEnabled: function (fnResponse) {
    this.sendWorkerMessage({ type: "CAN_ATTACH" }, function (msgResponse) {
      fnResponse(msgResponse.type == "OK");
    });
    return true; // Tell them the response is asynchronous
  },

  onDumpSingleProcess: function (msg) {
    if (!msg.processId) {
      return;
    }
    this.sendWorkerMessage({ type: "DUMP_PROCESS", processId: msg.processId }, function (result) {
      if (result.type == "DUMP_CREATED") {
        var result = { type: "DUMP_CREATED", url: msg.url, dumpFile: result.dumpFile };
        ExtensionApi.broadcastRequest(result);
        this.sendToAllTabs(result);
      }
    });
  },

  sendToAllTabs: function (msg) {
    chrome.tabs.query({}, function (tabs) {
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, msg);
      }
    });
  },

  onDumpWindows: function () {
    // Send the message back to every tab, it's a case of last-writer wins.
    chrome.tabs.query({}, function (tabs) {
      var message = { type: "DUMP_WINDOWS" };
      for (var i = 0; i < tabs.length; ++i) {
        chrome.tabs.sendMessage(tabs[i].id, message);
      }
    });
  },

  dumpSingleProcess: function (hostName, processId) {
    this.sendWorkerMessage({ type: "DUMP_PROCESS", processId: processId }, (result) => {
      if (result.type == "DUMP_CREATED") {
        var result = { type: "DUMP_CREATED", hostName: hostName, processId: processId, dumpFile: result.dumpFile };
        ExtensionApi.broadcastRequest(result);
        this.sendToAllTabs(result);
      }
    });
  },

  onDumpAllProcesses: function () {
    // Dump every open port
    for (var hostName in NativeHostManager._nativeHostPorts) {
      this.dumpSingleProcess(hostName, NativeHostManager._nativeHostPorts[hostName]._processId);
    }

    // Send a message to every tab to get the URLs they have open for that process ID
    chrome.tabs.query(
      {},
      function (tabs) {
        var message = { type: "GET_URL_PROCESS_INFO" };
        for (var i = 0; i < tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, message);
        }
      }.bind(this)
    );
  },

  onToggleHosted: function () {
    var bHosted = Settings.get("use-remote-host");
    bHosted = !bHosted;
    if (!bHosted) delete localStorage["use-remote-host"];
    else localStorage["use-remote-host"] = 1;
    delete localStorage["version"];
    window.location.reload();
  },

  saveNewLicensee: function (data) {
    Settings.set("licensee", data.email);

    var img = new Image();
    img.src = "https://www.ietab.net/logger/wslicense?info=" + encodeURIComponent(JSON.stringify(data));
  },

  onGetEmail: function (token, fnResponse) {
    console.log("Retrieving email address");
    var req = new XMLHttpRequest();
    req.open("GET", "https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token);
    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        console.log("UserInfo = " + req.responseText);
        var data = JSON.parse(req.responseText);
        if (data && data.email) {
          this.saveNewLicensee(data);
          fnResponse(true);
        }
      }
    }.bind(this);
    req.send();
  },

  onValidateLicense: function (fnResponse) {
    console.log("LICENSE VALIDATION");
    chrome.identity.getAuthToken(
      { interactive: true },
      function (token) {
        console.log("Auth Token = " + token);
        var CWS_LICENSE_API_URL = "https://www.googleapis.com/chromewebstore/v1.1/userlicenses/";
        var req = new XMLHttpRequest();
        req.open("GET", CWS_LICENSE_API_URL + chrome.runtime.id);
        req.setRequestHeader("Authorization", "Bearer " + token);
        req.onreadystatechange = function () {
          if (req.readyState == 4) {
            console.log("License API response = " + req.responseText);
            var license = JSON.parse(req.responseText);
            if (license && license.result && license.accessLevel == "FULL") {
              this.onGetEmail(token, fnResponse);
            }
          }
        }.bind(this);
        req.send();
      }.bind(this)
    );
  },

  reloadTabs: function () {
    this.checkAlreadyLoadedTabs();
  },

  onExtApiRequest: function (sender, request, fnResponse) {
    switch (request.type) {
      case "GET_SETTING":
        Debug.log("GET_SETTING request received for key: " + request.key);
        fnResponse(Settings.get(request.key));
        Debug.log("GET_SETTING response sent ");
        Debug.log("GET_SETTING response: " + JSON.stringify(Settings.get(request.key)));
        break;
      case "SET_SETTING":
        Settings.set(request.key, request.value);
        break;
      case "GET_STORAGE":
        fnResponse(IETAB.Storage.get(request.key));
        break;
      case "SET_STORAGE":
        IETAB.Storage.set(request.key, request.value);
        break;
      case "CLEAR_LOCAL_SETTINGS":
        delete localStorage["localSettings"];
        break;
      case "RESET_ALL_SETTINGS":
        for (var key in localStorage) delete localStorage[key];
        window.location.reload();
        break;
      case "GET_ECMTEST":
        fnResponse(IETAB.Storage.get("ECMTestSettings"));
        break;
      case "SET_ECMTEST":
        Settings.installECMTest(request.value);
        break;
      case "GET_ENABLED":
        return this.onGetEnabled(fnResponse);
      case "UPDATE_REGKEY":
        Settings.set("licensee", request.licensee);
        Settings.set("license-key", request.key);
        chrome.runtime.sendMessage({ type: "REGISTRATION_SUCCESS" });
        fnResponse();
        break;
      case "DUMP_HELPERS":
        this.onDumpAllProcesses();
        break;
      case "VALIDATE_LICENSE":
        this.onValidateLicense(fnResponse);
        return true;
        break;
      case "DUMP_WINDOWS":
        this.onDumpWindows();
        break;
      case "TOGGLE_HOSTED":
        this.onToggleHosted();
        break;
      case "UPDATE_REFRESHTOKEN":
        if (request.token) localStorage["refreshToken"] = request.token;
        else delete localStorage["refreshToken"];
        break;
      case "RELOAD_IETABS":
        this.reloadTabs();
        break;
    }
    // Explicity return true if you plan to send an asynchronous response
    return false;
  },

  checkDownloadsByUrl: function (url) {
    if (!chrome.downloads) return;

    chrome.downloads.search(
      { query: [url] },
      function (items) {
        var foundFiles = [];
        var now = new Date().getTime();
        for (var i = 0; i < items.length; i++) {
          var age = new Date(items[i].startTime) - now;
          if (age < this.STARTUP_DOWNLOAD_MAX_AGE) {
            chrome.downloads.erase({ id: items[i].id });
            foundFiles.push(items[i].filename);
          }
        }
        if (foundFiles.length) {
          // Close any "Save As" dialogs
          this.sendWorkerMessage({ type: "CLOSE_CHROME_DIALOGS2", foundFiles: foundFiles });
        }
      }.bind(this)
    );
  },

  checkDownloadsByTime: function (skipURLs) {
    if (!chrome.downloads) return;

    var startAfter = new Date().getTime() - this.STARTUP_DOWNLOAD_MAX_AGE;
    startAfter = new Date(startAfter).toISOString();

    chrome.downloads.search(
      { startedAfter: startAfter },
      function (items) {
        var foundUrls = [];
        var foundFiles = [];
        for (var i = 0; i < items.length; i++) {
          if (skipURLs[items[i].url]) continue;
          if (!foundUrls[items[i].url] && this.isAutoURL(items[i].url)) {
            this.openWithIETab(null, items[i].url);
            chrome.downloads.erase({ id: items[i].id });
            foundFiles.push(items[i].filename);
            foundUrls[items[i].url] = true;
          }
        }
        if (foundFiles.length) {
          // Close any "Save As" dialogs
          // NOTE:  Do not use CLOSE_CHROME_DIALOGS, it existed in older helper versions and was
          // buggy, so we don't ever want it executed
          this.sendWorkerMessage({ type: "CLOSE_CHROME_DIALOGS2", foundFiles: foundFiles });
        }
      }.bind(this)
    );
  },

  checkAutoURLs: function (tab) {
    var url = tab.url.toString();
    if (url.match(/chrome[^\:]*\:/i)) return false;

    if (this.isAutoURL(url)) {
      this.openWithIETab(tab.id, url);
      return true;
    } else {
      return false;
    }
  },

  checkReload: function (tab) {
    // Some pages require the extension to be initialized before they will work
    // properly.  So we reload those pages after we have initialized.
    var reload = false;
    if (tab.url.indexOf("/notsupported") != -1) {
      reload = true;
    } else if (tab.url.match(/https?:\/\/www\.(dev\.)?ietab\.net\/options/)) {
      reload = true;
    } else if (tab.url.indexOf(chrome.runtime.getURL("")) == 0) {
      reload = true;
    }

    if (reload) {
      window.setTimeout(function () {
        chrome.tabs.reload(tab.id, { bypassCache: true });
      }, this.RELOAD_DELAY);
    }
  },

  uninstallSelf: function () {
    // Close any tab that has the IE Tab webstore extension listing because it is of no use
    var self = this;
    chrome.windows.getAll({ populate: true }, function (windows) {
      for (var iWindow = 0; iWindow < windows.length; iWindow++) {
        var window = windows[iWindow];
        for (var iTab = 0; iTab < window.tabs.length; iTab++) {
          var tab = window.tabs[iTab];
          if (tab.url.match(/.*chrome.google.com.*hehijbfgiekmjfkfjpbkbammjbdenadd.*/)) {
            chrome.tabs.remove(tab.id);
          }
        }
      }
    });

    // And uninstall this extension
    window.setTimeout(function () {
      chrome.management.uninstallSelf();
    }, 5000);
  },

  checkAlreadyLoadedTabs: function () {
    chrome.windows.getAll(
      { populate: true },
      function (windows) {
        var foundAutoURLs = {};
        for (var iWindow = 0; iWindow < windows.length; iWindow++) {
          var window = windows[iWindow];
          for (var iTab = 0; iTab < window.tabs.length; iTab++) {
            // Check whether to load it as an auto url
            if (this.checkAutoURLs(window.tabs[iTab])) {
              foundAutoURLs[window.tabs[iTab].url] = true;

              // It was an auto-url.  See if it was downloaded before we loaded so we can
              // delete the download which will re-close the download shelf
              this.checkDownloadsByUrl(window.tabs[iTab].url);
            }
            this.checkReload(window.tabs[iTab]);
          }
        }
        // In recent versions of Chrome, if you open a download when Chrome isn't yet open,
        // then Chrome will close the tab with the download URL.  So we won't find them as a direct
        // URL in that case.  So we do another query for recent downloads, but we skip any of the
        // downloads that we did find that had an address in the tab and were already opened as an
        // auto URL, lest we double-open them.  This arises especially when they have the option checked
        // to always ask for a file name.
        this.checkDownloadsByTime(foundAutoURLs);
      }.bind(this)
    );
  },

  getVersion: function () {
    return chrome.runtime.getManifest().version;
  },

  getRedirectAutoURL: function (details) {
    var id = Math.random().toString().substr(2, 9);
    this.pendingAutoUrls[id] = details;

    window.setTimeout(
      function () {
        delete this.pendingAutoUrls[id];
      }.bind(this),
      this.PENDING_AUTOURL_TIMEOUT
    );

    return chrome.runtime.getURL("redir.htm") + "#urlid=" + id;
  },

  onBeforeRequest: function (details) {
    if (!Settings.get("enable-auto-urls")) return;

    if (this.isAutoURL(details.url)) {
      // Ideally, we could redirect directly to the IE Tab URL.  But you can't use redirectUrl to redirect to a
      // non-web-accessible resource.  Reference: https://code.google.com/p/chromium/issues/detail?id=313155
      // So we redirect to the web_accessible redir.htm page with an anonymous identifier.
      // It picks up that anonymous identifier and if it matches a pending auto URL, then IT redirects
      // to nhc.htm.
      //
      // We previously used to redirect to about:blank and then re-load with openWithIETab.  But I think
      // that can be racy and sometimes about:blank will end up winning, plus you end up with multiple
      // attempts to open the page in IE Tab.  Same issue with using cancel: true.
      //
      // So this additional redirect through redir.htm turns out to be the smoothest solution.
      //
      var redirectUrl = this.getRedirectAutoURL(details);
      return { redirectUrl: redirectUrl };
    }
  },

  handleNativeMessage: function (port, msg) {
    if (!msg || !msg.type) return false;

    var handled = true;
    switch (msg.type) {
      case "NEW_COOKIE_FROM_IE":
        Cookies.onNewCookieFromIE(port, msg.url, msg.cookieData, msg.fromSetCookie);
        break;
      default:
        handled = false;
    }
    return handled;
  },

  //
  // onDownloadCreated
  //
  // Technically, the need for this is to catch file:// URLs in the enterprise release.
  //
  // In general, the purpose of the download listener is to catch Auto URLs that we did not catch with
  // the webRequest or tab listeners.  This is not normally hit in the webstore release because it doesn't have the
  // download permission.  But the enterprise release has the download permission.
  //
  // The problem is force-installed extensions can't possibly have the file:// permission.  So we use this backup
  // approach to intercept file:// URLs that would otherwise end up as downloads (they aren't caught by
  // webrequest or the tab-change listener, so this is our last alternative).
  //   Reference: https://code.google.com/p/chromium/issues/detail?id=173640
  //
  onDownloadCreated: function (downloadItem) {
    // We check for 'in_progress' and double-check the startTime to workaround this bug:
    //   https://code.google.com/p/chromium/issues/detail?id=432757
    //
    if (downloadItem.state != "in_progress") return;
    var now = new Date().getTime();
    var downloadStart = new Date(downloadItem.startTime).getTime();
    if (now - downloadStart > this.DOWNLOAD_START_TOLERANCE) return;

    if (!Settings.get("enable-auto-urls")) return;

    if (this.isAutoURL(downloadItem.url)) {
      chrome.downloads.cancel(downloadItem.id);

      // Use the currently active tab
      chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabs) {
          if (tabs && tabs.length) {
            this.openWithIETab(tabs[0].id, downloadItem.url);
          }
        }.bind(this)
      );
    }
  },

  initContextMenu: function () {
    if (Settings.get("show-context-menu")) {
      ContextMenu.create(this);
    }
  },

  onContextMenuChanged: function () {
    if (Settings.get("show-context-menu")) {
      ContextMenu.create(this);
    } else {
      ContextMenu.remove();
    }
  },

  initRemoteHostSupport: function () {
    if (!Settings.get("use-remote-host")) return;

    var arrScripts = [
      "myrtille/config.js",
      "myrtille/dialog.js",
      "myrtille/display/divs.js",
      "myrtille/network.js",
      "myrtille/network/buffer.js",
      "myrtille/network/longpolling.js",
      "myrtille/network/websocket.js",
      "myrtille/network/xmlhttp.js",
      "myrtille/audio/audiowebsocket.js",
      "js/remhost_manager.js",
      "js/tunnel.js"
    ];

    // See Bug 6260
    Utils.injectScripts(arrScripts);
  },

  onAutoUrlsChanged: function () {
    var autoUrls = Settings.get("autourl-list");
    var hasUrls = autoUrls && autoUrls.length;
    if (!hasUrls) {
      if (this.fnOnBeforeRequest) {
        chrome.webRequest.onBeforeRequest.removeListener(this.fnOnBeforeRequest);
        this.fnOnBeforeRequest = null;
      }
      if (chrome.downloads && this.fnOnDownloadCreated) {
        chrome.downloads.onCreated.removeListener(this.fnOnDownloadCreated);
        this.fnOnDownloadCreated = null;
      }
      return;
    }

    // Make sure the webrequest listeners are active
    if (!this.fnOnBeforeRequest) {
      this.fnOnBeforeRequest = this.onBeforeRequest.bind(this);
      chrome.webRequest.onBeforeRequest.addListener(this.fnOnBeforeRequest, { urls: ["<all_urls>"], types: ["main_frame"] }, [
        "blocking",
        "requestBody"
      ]);
    }

    // Make sure the download listener is active
    if (chrome.downloads && !this.fnOnDownloadCreated) {
      this.fnOnDownloadCreated = this.onDownloadCreated.bind(this);
      chrome.downloads.onCreated.addListener(this.fnOnDownloadCreated);
    }
  },

  updateHelperVersion: function () {
    this.sendWorkerMessage(
      { type: "PING" },
      function (msgResponse) {
        if (msgResponse.type == "PONG") {
          // Test for the correct version and upgrade if necessary
          this.helperVersion = msgResponse.helperVersion;
        }
      }.bind(this)
    );
  },

  initNativeHost: function (fnContinue) {
    if (Settings.get("use-remote-host")) {
      window.setTimeout(function () {
        fnContinue();
      }, 0);
      return;
    }

    this.minVersionFail = false;

    if (this.chromeVersion.major < 27) {
      // Native messaging is not supported
      fnContinue();
      return;
    }

    // Try to connect
    this.sendWorkerMessage(
      { type: "PING" },
      function (msgResponse) {
        if (msgResponse.type == "PONG") {
          // Test for the correct version and upgrade if necessary
          this.helperVersion = msgResponse.helperVersion;
          NativeHostManager.checkVersion(
            function (result) {
              if (result == "E_VERSION_MIN_FAILED") {
                this.minVersionFail = true;
              }
              this.updateHelperVersion();

              // Initialize registry settings
              this.sendWorkerMessage({ type: "INITREGISTRY" });

              fnContinue();
            }.bind(this)
          );
        } else {
          fnContinue();
        }
      }.bind(this)
    );
  },

  init: function () {
    var previousVersion = IETAB.Storage.get("version");
    this.isFirstRun = !previousVersion;

    var ua = navigator.userAgent.toLowerCase();

    this.isSafari = ua.indexOf("safari") != -1 && ua.indexOf("chrome") == -1;

    chrome.webRequest.onAuthRequired.addListener(
      function (details) {
        if (details.tabId && details.tabId != -1) {
          chrome.tabs.sendMessage(details.tabId, { type: "AUTH_REQUESTED" });
        }
      }.bind(this),
      { urls: ["<all_urls>"] }
    );

    var regexChrome = /Chrome\/(\d+)\./;
    var match = window.navigator.appVersion.match(regexChrome);
    if (match) {
      this.chromeVersion = { major: parseInt(match[1], 10) };
    } else {
      this.chromeVersion = { major: 90 };
    }

    var manifest = chrome.runtime.getManifest();
    var newVersion = manifest.version;
    if (previousVersion != newVersion) {
      IETAB.Storage.set("version", newVersion);

      if (!this.isFirstRun) {
        // Just hang onto the fact that this is an upgrade, we will make use of it later
        // after other dependent initialization.
        this.isUpgrade = true;
      }
    }

    this.initNativeHost(this.init2.bind(this));
  },

  updatePermissions: function (fnResponse) {
    this.permissions = { http: true };

    if (this.isSafari) {
      this.permissions.downloads = false;
      this.permissions.other = false;
      this.permissions.file = false;
      if (fnResponse) {
        fnResponse(this.permissions);
      }
      return;
    }

    // Downloads first
    chrome.permissions.contains(
      {
        permissions: ["downloads"]
      },
      function (granted) {
        if (granted) {
          this.permissions.downloads = true;
        }
        // Now check for all URLs (except file).
        chrome.permissions.contains(
          {
            origins: ["<all_urls>"]
          },
          function (granted) {
            if (granted) {
              this.permissions.other = true;
            }
            // file:// URLs are checked separately
            chrome.permissions.contains(
              {
                origins: ["file://*"]
              },
              function (granted) {
                if (granted) {
                  this.permissions.file = true;
                }
                if (fnResponse) {
                  fnResponse(this.permissions);
                }
              }.bind(this)
            );
          }.bind(this)
        );
      }.bind(this)
    );
  },

  onUrlProcessInfoReceived: function (processInfo) {
    // Broadcast the message to the options page
    var msg = { type: "URL_PROCESS_INFO", url: processInfo.url, processId: processInfo.processId };
    ExtensionApi.broadcastRequest(msg);
    // And to the new extension-hosted options page
    this.sendToAllTabs(msg);
  },

  init2: function () {
    Debug.log("init2");
    var self = this;

    var key = Settings.get("license-key");

    if (typeof chrome.runtime.setUninstallURL != "undefined") {
      if (!key) chrome.runtime.setUninstallURL("http://www.ietab.net/ie-tab-alternatives");
      else chrome.runtime.setUninstallURL("");
    }
    // Wait for enterprise settings to load before doing this
    Settings.onLoaded = function () {
      this.checkAlreadyLoadedTabs();

      this.initContextMenu();

      if (this.isFirstRun) {
        this.onFirstRun();
      } else if (this.isUpgrade) {
        this.onUpgrade();
      }
      GATracking.init(
        function () {
          this.onDailyPing();
        }.bind(this)
      );

      if (IETAB.Storage.get("licenseCancelled")) {
        // Check whether their license has been restored
        this.licensePing();
      }
    }.bind(this);
    Settings.init();

    this.generateTabIdPrefix();

    var firstSeen = IETAB.Storage.get("firstSeen");
    if (!firstSeen) {
      firstSeen = new Date().getTime();
      IETAB.Storage.set("firstSeen", firstSeen);
    }

    if (chrome.browserAction) {
      chrome.browserAction.onClicked.addListener(
        function (tab) {
          var targetUrl = tab.url;
          if (targetUrl.match(/^chrome|^edge/)) {
            // Not a supported URL, open a new tab with the help page
            if (Settings.get("use-remote-host")) {
              targetUrl = "http://www.ietab.net/hostedstartpage?from=chromeurl";
            } else if (this.isInEdge()) {
              targetUrl = chrome.runtime.getURL("edgestartpage.html") + "?";
              chrome.tabs.update(tab.id, { url: targetUrl });
              return;
            } else {
              targetUrl = "http://www.ietab.net/ie-tab-documentation?from=chromeurl";
            }
            // Determine if we have a license key so we can decide whether to show an ad or not
            var key = Settings.get("license-key");
            if (key) targetUrl += "&key=1";
          }
          this.openWithIETab(tab.id, targetUrl);
        }.bind(this)
      );
    }

    // We still need this in addition to the webRequest listener simply because we don't
    // by default have permission for https and file:// URLs.
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status == "loading" && Settings.get("enable-auto-urls")) {
        self.checkAutoURLs(tab);
      }
    });

    ExtensionApi.onRequest = Background.onExtApiRequest.bind(Background);

    // Listen for direct message requests
    chrome.runtime.onMessage.addListener(
      function (msg, sender, fnResponse) {
        if (msg && msg.type == "REQUEST_PERMISSIONS") {
          chrome.permissions.request(
            {
              permissions: ["downloads"],
              origins: ["<all_urls>"]
            },
            function (granted) {
              this.updatePermissions(fnResponse);
            }.bind(this)
          );
          return true;
        } else if (msg.type == "IETABAPI_REQUEST") {
          return IETabApi.onIETabApiRequest(msg.request, sender, fnResponse);
        } else if (msg.type == "DUMP_SINGLE_PROCESS") {
          this.onDumpSingleProcess(msg);
        } else if (msg.type == "URL_PROCESS_INFO") {
          this.onUrlProcessInfoReceived(msg);
        }
      }.bind(this)
    );

    this.onAutoUrlsChanged();
    this.updatePermissions();
    this.initRemoteHostSupport();
  }
};

Background.init();
