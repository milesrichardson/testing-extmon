/*******************************************************************************************
  Module:		main
  Description:	- Main contentScript for directly interacting with the page's DOM.
				- Every tab has its own instance of this script.
				- Page content (DOM) can only be modified/accessed from within the content script
/*******************************************************************************************
  Property of:	Webroot Inc.
  Copyright:	Webroot Inc. (c) 2023
/*******************************************************************************************
  Creator:		melsaie@webroot.com
  Manager:		pblaimschein@webroot.com
  Created:		02/10/2017 (mm/dd/yyyy)
********************************************************************************************/

// IFDEF EDGE_LEGACY
if (Webroot_Browser.identify_browser() == Webroot_Browser.EDGE_LEGACY) chrome = browser;
else if (Webroot_Browser.identify_browser() == Webroot_Browser.SAFARI) chrome = browser;

var sraObserverTimer = null;

function sraObserverTimerFkt() {
  if (chrome.runtime.id !== undefined) Webroot_Extension.processSRA(Webroot_Extension.currentURL, true);
  sraObserverTimer = null;
}

var sraObserverRunning = false;
var sraObserver = new MutationObserver(function (mutation) {
  if (
    document.readyState == "complete" &&
    mutation.length > 0 &&
    mutation[0].addedNodes.length > 0 &&
    mutation[0].addedNodes[0].className != "WebrootDiv"
  ) {
    if (sraObserverTimer == null) {
      sraObserverTimer = setTimeout(sraObserverTimerFkt, 500);
    } else {
      clearTimeout(sraObserverTimer);
      sraObserverTimer = setTimeout(sraObserverTimerFkt, 500);
    }
  }
});

// ---------------------------- //
//   Webroot_Extension Object   //
// ---------------------------- //
var Webroot_Extension = {
  // Initialize User Preferences
  mode: 0,
  urlBlocking: 0,
  phishBlocking: 0,
  searchAnnotation: 0,
  agentPwd: 0,
  Flg: 0,

  // Initialize Rules
  SRA_DATE: "", // Init annotaionFile date
  SRA_DATE_DEFAULT: "Fri, 02 Sep 2022 09:33:24 GMT",
  SRA_CONFIG_DEFAULT: [
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: "^$|(^(?!fl$).+)",
      parent: "div",
      pid: "",
      pclassrex: "^rc$|^yuRUbf$",
      pedistance: "",
      maxloop: "1",
      prefix: "",
      postfix: "",
      encode: "",
      nextonmatch: "0",
      regex: ".*www\\.google\\..*",
      SPID: 1
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: "",
      parent: "h3",
      pid: "",
      pclassrex: "r",
      pedistance: "",
      maxloop: "1",
      prefix: "",
      postfix: "",
      encode: "",
      nextonmatch: "0",
      regex: ".*www\\.google\\..*",
      SPID: 1
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: "",
      parent: "li",
      pid: "",
      pclassrex: "b_algo",
      pedistance: "",
      maxloop: "1",
      prefix: "",
      postfix: "",
      encode: "",
      nextonmatch: "0",
      regex: ".*bing\\.com.*",
      SPID: 2
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: "",
      parent: "h3",
      pid: "",
      pclassrex: "",
      pedistance: "",
      maxloop: "1",
      prefix: "",
      postfix: "",
      encode: "",
      nextonmatch: "0",
      regex: ".*bing\\.com.*",
      SPID: 2
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: "",
      parent: "h3",
      pid: "",
      pclassrex: "title",
      pedistance: "",
      maxloop: "1",
      prefix: "/RU=",
      postfix: "/R",
      encode: "URL",
      nextonmatch: "0",
      regex: ".*search\\.yahoo\\.com.*",
      SPID: 3
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: " ac-algo ac-21th",
      parent: "h3",
      pid: "",
      pclassrex: "title",
      pedistance: "",
      maxloop: "1",
      prefix: "/RU=",
      postfix: "/R",
      encode: "URL",
      nextonmatch: "0",
      regex: ".*search\\.yahoo\\.com.*",
      SPID: 3
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: " td-u",
      parent: "h3",
      pid: "",
      pclassrex: "title",
      pedistance: "",
      maxloop: "1",
      prefix: "/RU=",
      postfix: "/R",
      encode: "URL",
      nextonmatch: "0",
      regex: ".*search\\.yahoo\\.com.*",
      SPID: 3
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: " td-u",
      parent: "h3",
      pid: "",
      pclassrex: "",
      pedistance: "",
      maxloop: "1",
      prefix: "/RU=",
      postfix: "/R",
      encode: "URL",
      nextonmatch: "0",
      regex: ".+search\\.yahoo\\.com.*",
      SPID: 3
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: "",
      parent: "div",
      pid: "",
      pclassrex: "sw-Card__title",
      pedistance: "",
      maxloop: "1",
      prefix: "",
      postfix: "",
      encode: "",
      nextonmatch: "0",
      regex: ".*search\\.yahoo\\.co\\.jp",
      SPID: 3
    },
    {
      domain: "",
      elem: "a",
      eid: "",
      eclassrex: " ac-algo fz-l ac-21th lh-24",
      parent: "h3",
      pid: "",
      pclassrex: "title",
      pedistance: "",
      maxloop: "1",
      prefix: "/RU=",
      postfix: "/R",
      encode: "URL",
      nextonmatch: "0",
      regex: ".*search\\.yahoo\\.com.*",
      SPID: 3
    }
  ],
  SRA_CONFIG: "",

  SRA_TEMPLATE: null,

  // Define PP limit (1MB)
  RTAP_BYTE_SIZE: 1000000,

  // Create Array of MyObjects
  links: new Array(), // <A> TAGS
  isIframe: false,
  currentURL: "",
  currentUrlwithoutParams: "",
  frameRef: 1,
  cfgReceivedAt: 0,
  lastConfigRefresh: 0,
  isContentObservingSet: false,
  currentChksum: 0,
  isRTAPpending: false,

  observerTimer: null,
  observerTimerFkt: function () {
    if (Webroot_Extension.currentChksum !== 0) {
      var chksum = Webroot_Extension.getContentHash(document.body.outerHTML);
      if (chksum !== Webroot_Extension.currentChksum) {
        Webroot_Extension.processRTAP(document.URL, true);
        Webroot_Extension.currentChksum = chksum;
      }
    }
  },

  observer: new MutationObserver(function (mutation) {
    if (Webroot_Extension.isRTAPpending) {
      clearTimeout(Webroot_Extension.observerTimer);
      Webroot_Extension.observerTimer = setTimeout(Webroot_Extension.observerTimerFkt, 2000);
      return;
    }

    if (document.readyState == "complete") {
      for (var x = 0; x < mutation.length; x++) {
        for (var y = 0; y < mutation[x].addedNodes.length; y++) {
          if (mutation[x].addedNodes[y].querySelectorAll) {
            var item = mutation[x].addedNodes[y].querySelectorAll('input[type="password"],textarea,input[type="text"]');
            if (item.length) {
              if (Webroot_Extension.logLevel >= 3) {
                for (var z = 0; z < item.length; z++) {
                  Webroot_Extension.Log(
                    "observed change:",
                    item[z].baseURI + ": " + item[z].type + "#" + item[z].id + "." + item[z].className
                  );
                }
              }
              if (Webroot_Extension.observerTimer == null) {
                Webroot_Extension.observerTimer = setTimeout(Webroot_Extension.observerTimerFkt, 2000);
              } else {
                clearTimeout(Webroot_Extension.observerTimer);
                Webroot_Extension.observerTimer = setTimeout(Webroot_Extension.observerTimerFkt, 2000);
              }
            }
          }
        }
      }
    }
  }),
  // ---------------------------------- //
  //     Initialization function        //
  // ---------------------------------- //
  init: function () {
    Webroot_Extension.isIframe = window.top != window.self ? true : false;
    Webroot_Extension.SRA_DATE = Webroot_Extension.SRA_DATE_DEFAULT;
    Webroot_Extension.SRA_CONFIG = Webroot_Extension.SRA_CONFIG_DEFAULT;

    Webroot_Extension.checkBkSuspended().then(() =>
      chrome.storage.local.get(["ConfigRules", "Settings", "LogSettings", "Mode"], function (result) {
        if (!chrome.runtime.lastError) {
          if (result["ConfigRules"] && result["ConfigRules"]["VERSION"] == 2) {
            Webroot_Extension.SRA_DATE = result["ConfigRules"]["DATE"];
            Webroot_Extension.SRA_CONFIG = result["ConfigRules"]["CONFIG"];
          }

          if (result["LogSettings"] && result["LogSettings"]["LOGLEVEL"]) Webroot_Extension.logLevel = result["LogSettings"]["LOGLEVEL"];
          else Webroot_Extension.logLevel = 0;

          Webroot_Extension.initConfig(result);
        }
      })
    );

    if (Webroot_Browser.identify_browser() != Webroot_Browser.FIREFOX) {
      // keep extension unsuspended while content script is active
      setInterval(() => {
        if (chrome.runtime.id !== undefined) chrome.runtime.sendMessage({ msg: "is_standalone_mode" });
      }, 25 /*seconds*/ * 1000);
    }
  },

  checkBkSuspended: async function () {
    var x = await chrome.runtime.sendMessage({ msg: "SuspendWakeup" });
    while (x.responseText != 0) {
      x = await chrome.runtime.sendMessage({ msg: "SuspendWakeup" });
    }

    return x;
  },

  initConfig: function (config) {
    if (!config || !config["Settings"] || config["Settings"]["VERSION"] != 1) {
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "COMPONENT_ERROR" }, function (response) {});
      return;
    }

    if (config["Mode"]) Webroot_Extension.mode = config["Mode"];
    if (config["Settings"]["URLBlocking"]) Webroot_Extension.urlBlocking = config["Settings"]["URLBlocking"];
    else Webroot_Extension.urlBlocking = 0;
    if (config["Settings"]["PhishBlocking"]) Webroot_Extension.phishBlocking = config["Settings"]["PhishBlocking"];
    else Webroot_Extension.phishBlocking = 0;
    if (config["Settings"]["SearchAnnotation"]) Webroot_Extension.searchAnnotation = config["Settings"]["SearchAnnotation"];
    else Webroot_Extension.searchAnnotation = 0;
    if (config["Settings"]["AgentPwd"]) Webroot_Extension.agentPwd = config["Settings"]["AgentPwd"];
    else Webroot_Extension.agentPwd = 0;
    if (config["Settings"]["Flg"]) Webroot_Extension.Flg = config["Settings"]["Flg"];
    else Webroot_Extension.Flg = 0;

    if (Webroot_Extension.mode == 0 || config["Settings"]["ERR"] == 51) {
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_MISSING" }, function (response) {
        var err = chrome.runtime.lastError;
      });
      Webroot_Extension.updateConfig();
      return;
    }

    Webroot_Extension.runScript();
  },

  GetDistanceToParent: function (elementtag, pclass) {
    var newNode = elementtag.parentNode;
    var DistanceCnt = 0;

    while (DistanceCnt < 200) {
      DistanceCnt++;

      newNode = newNode.parentNode;

      if (newNode == null) break;

      if (newNode.className == pclass) break;
    }

    return DistanceCnt;
  },

  // --------------------------------------------------- //
  // Checks for search engines and annotates the results //
  // Returns True --> If search engine found             //
  // Returns False --> Otherwise                         //
  // --------------------------------------------------- //
  processSRA: function (url, fromObserver) {
    if (Webroot_Extension.isIframe) return false;

    if (Webroot_Extension.searchAnnotation != 1) {
      if (Webroot_Extension.mode == 1) Webroot_Extension.updateConfig();
      return false;
    }

    // Check if domain on list of supported search engines
    var domainIndexList = Webroot_Extension.supportedSearchEngine(url);

    // Perform Search Result Annotation Processing if required
    if (domainIndexList != -1) {
      if (!fromObserver) {
        // Update BrowserAction if SearchEngine
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "SEARCH_ENGINE" }, function (response) {});
      }

      // Get Body content
      var body = document.body;

      // SRA
      Webroot_Extension.processSearchPage(body, domainIndexList);

      return true;
    }

    return false;
  },

  // ----------------------------------------- //
  // Sends log entry to background             //
  // ----------------------------------------- //
  Log: function (logVal1, logVal2, logVal3) {
    if (Webroot_Extension.logLevel >= 3) {
      var logObj = {
        msg: "LOG",
        headline: logVal1
      };

      if (logVal2 || logVal3) {
        logObj.details = {
          logVal2: logVal2,
          logVal3: logVal3
        };
      }

      chrome.runtime.sendMessage(logObj, function (response) {});
    }
    return true;
  },

  // ----------------------------------------- //
  // Sends a BCAP request                      //
  // Returns True --> If BCAP is switched ON   //
  // Returns False --> If BCAP is switched OFF //
  // ----------------------------------------- //
  processBCAP: function (url) {
    if (Webroot_Extension.urlBlocking != 1 && Webroot_Extension.phishBlocking != 1) {
      if (Webroot_Extension.mode == 1) Webroot_Extension.updateConfig();
      return false;
    }

    // Check if domain on list of supported search engines in case SRA is off
    if (Webroot_Extension.searchAnnotation != 1) {
      var domainIndex = Webroot_Extension.supportedSearchEngine(url);
      if (domainIndex != -1) {
        // Update BrowserAction if SearchEngine
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "SEARCH_ENGINE" }, function (response) {});
        return true;
      }
    }

    if (Webroot_Extension.isIframe) {
      Webroot_Extension.frameRef = Webroot_Extension.CreateREF(url);
    }

    chrome.runtime.sendMessage({ msg: "BCAP", ppURL: url, ref: Webroot_Extension.frameRef }, function (response) {
      if (!response || response.responseText == undefined) {
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
        return;
      }
      // Check for errors
      var error = response.responseText;
      if (error != 0) {
        // Log error
        console.info("WTS_Extension [processBCAP]: " + JSON.stringify(error));

        // Update BrowserAction (Case: WSA UNREACHABLE)
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
      }
    });
    return true;
  },

  CreateREF: function (str) {
    var chkSum = parseInt(Math.random() * 10000000);
    if (str) {
      for (i = 0; i < Math.min(str.length, 250); i++) {
        chkSum += str.charCodeAt(i);
      }
    }
    return chkSum;
  },

  // ----------------------------------------- //
  // Sends a RTAP request                      //
  // Returns True --> If RTAP is switched ON   //
  // Returns False --> If RTAP is switched OFF //
  // ----------------------------------------- //
  processRTAP: function (url, isDynRTAP) {
    if (Webroot_Extension.phishBlocking != 1) return false;

    // Get Root Document HTML
    var htmlContent = Webroot_Helper.extractPageHtml(document);

    // Check size of extracted document
    if (htmlContent.length <= 0) return true;
    if (Webroot_Helper.getByteLen(htmlContent) > Webroot_Extension.RTAP_BYTE_SIZE) return true;

    Webroot_Extension.isRTAPpending = true;

    chrome.runtime.sendMessage(
      { msg: "RTAP", isDynRTAP: isDynRTAP, ppURL: document.URL, RootHTML: htmlContent, ref: Webroot_Extension.frameRef.toString() },
      function (response) {
        if (!response || response.responseText == undefined) {
          chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
          return;
        }
        // Check for errors
        var error = response.responseText;
        if (error != 0) {
          // Log error
          console.info("WTS_Extension [processRTAP]: " + JSON.stringify(error));

          // Update BrowserAction (Case: WSA UNREACHABLE)
          chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
        }
      }
    );
    return true;
  },

  // ----------------------------------------- //
  // Sends a WHITELIST request                 //
  // Returns True --> If Whitelisting url      //
  // Returns False --> otherwise               //
  // ----------------------------------------- //
  processWhiteList: function (url) {
    // Check for WhiteList URL's
    if (Webroot_Helper.isWhiteListUrl(url)) {
      chrome.runtime.sendMessage({ msg: "WHITELIST", ppURL: url }, function (response) {
        if (!response || response.responseText == undefined) {
          console.info("WTS_Extension [processWhiteList]");
          chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
        }
        // Check for errors
        var error = response.responseText;
        if (error != 0) {
          // Log error
          console.info("WTS_Extension [processWhiteList]: " + JSON.stringify(error));

          // Update BrowserAction (Case: WSA UNREACHABLE)
          chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
        }
      });
      return true;
    }
    return false;
  },

  getContentHash: function (string) {
    var hash = 0,
      i,
      chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr = string.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  },

  // ---------------------------------- //
  // OnDocumentComplete event listener  //
  // ---------------------------------- //
  runScript: function () {
    // Check if extension is disabled
    if (!Webroot_Extension.urlBlocking && !Webroot_Extension.phishBlocking && !Webroot_Extension.searchAnnotation) {
      if (Webroot_Extension.mode == 1) Webroot_Extension.updateConfig();
      return;
    }

    if (Webroot_Extension.currentURL == document.URL) return;

    // Check for Iframe WhiteList URL's
    if (Webroot_Helper.isIWhiteListUrl(document.URL)) {
      Webroot_Extension.handleIframeWhitePage(document.URL);
      return 0;
    }

    // Get current URL
    Webroot_Extension.currentURL = document.URL;

    Webroot_Extension.currentUrlwithoutParams = Webroot_Helper.process_url(Webroot_Extension.currentURL);

    // Check if NewTab URL
    if (Webroot_Helper.isNewTabPage(Webroot_Extension.currentURL)) return;

    // Check for Content Script Filtered URL's
    if (Webroot_Helper.isContentScriptFilteredUrl(Webroot_Extension.currentURL)) {
      // Update BrowserAction if BlockPage
      if (Webroot_Helper.isBlockPageUrl(Webroot_Extension.currentURL) && Webroot_Extension.isIframe == false) {
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "BLOCK_PAGE" }, function (response) {});
      }
      return false;
    }

    // Perform WhiteListing
    if (Webroot_Extension.processWhiteList(Webroot_Extension.currentURL)) return;

    // Perform SRA
    if (Webroot_Extension.processSRA(Webroot_Extension.currentURL)) return;

    // Perform BCAP
    if (Webroot_Extension.processBCAP(Webroot_Extension.currentURL)) return;

    return 0;
  },

  // -------------------------------------------------- //
  // Update page elements and display main document URL //
  // -------------------------------------------------- //
  handleIframeWhitePage: function (url) {
    // Extract tabId
    var tabId = url.substring(url.toLowerCase().indexOf("tabid") + 6);

    chrome.runtime.sendMessage({ msg: "getTabUrl", tabId: tabId }, function (response) {
      // Update page HTML
      var blockedURL = document.getElementById("blockedURL");
      blockedURL.href = response.responseText;

      // Update style attribute of URL element
      document.getElementById("urlBlock").style.display = "block";

      // Break down URL if long enough
      if (response.responseText.length >= 40) {
        blockedURL.innerText = response.responseText.substring(0, 40) + "...";
        blockedURL.title = response.responseText;
      } else {
        blockedURL.innerText = response.responseText;
      }

      return 0;
    });
    return 0;
  },

  // -------------------------------------- //
  //		 Check if current domain	  	  //
  //       is a supported search engine	  //
  // -------------------------------------- //
  supportedSearchEngine: function (myDomain) {
    // Check if new Config file is loaded
    if (Webroot_Extension.SRA_CONFIG[0].regex == null) return -1;

    // Check if domain on list of supported search engines
    var domainIdxList = [];
    var arrIndex = 0;
    for (var uriCount = 0; uriCount < Webroot_Extension.SRA_CONFIG.length; uriCount++) {
      // Extract RegEx from Config File
      var newRegEx = new RegExp(Webroot_Extension.SRA_CONFIG[uriCount].regex, "i");

      // Check URL against RegEx
      var result = myDomain.match(newRegEx);

      //if ( myDomain == SRA_CONFIG[uriCount].domain )
      if (result != null) {
        domainIdxList[arrIndex] = uriCount;
        arrIndex++;
      }
    }
    if (domainIdxList.length == 0) return -1;
    else return domainIdxList;
  },

  // --------------------------------------- //
  // create WebrootDiv element               //
  // --------------------------------------- //
  create_Webroot_DIV: function (id, icon, txt, txt_detail) {
    if (Webroot_Extension.SRA_TEMPLATE) {
      var x = Webroot_Extension.SRA_TEMPLATE.cloneNode(true);
      var span = x.querySelector("span");
      var preTitle = span.querySelector("pre.webrootlogotitle");
      var preBody = span.querySelector("pre.webrootlogobody");
      var img = x.querySelector("img");

      span.id = "WebrootDivSpan" + id;
      if (icon == "green") {
        span.className = "green";
        img.src = chrome.runtime.getURL("images/sra/GoSm.svg");
      } else if (icon == "yellow") {
        span.className = "yellow";
        img.src = chrome.runtime.getURL("images/sra/YieldSm.svg");
      } else if (icon == "red") {
        span.className = "red";
        img.src = chrome.runtime.getURL("images/sra/StopSm.svg");
      }

      preBody.innerText = "";
      preBody.append(txt_detail);

      var imgLogo = preTitle.querySelector("img").cloneNode(true);
      preTitle.innerText = " - " + txt;
      preTitle.prepend(imgLogo);

      return x;
    }

    var span = document.createElement("span");
    span.id = "WebrootDivSpan" + id;
    if (icon == "green") span.className = "green";
    else if (icon == "yellow") span.className = "yellow";
    else if (icon == "red") span.className = "red";

    var pre1 = document.createElement("pre");
    pre1.className = "webrootlogotitle";
    var img1 = document.createElement("img");
    img1.width = "97";
    img1.height = "12";
    img1.src = chrome.runtime.getURL("images/sra/WebrootSmall.svg");
    pre1.appendChild(img1);
    pre1.append(" - " + txt);
    var img = document.createElement("img");

    if (icon == "green") img.src = chrome.runtime.getURL("images/sra/GoSm.svg");
    else if (icon == "yellow") img.src = chrome.runtime.getURL("images/sra/YieldSm.svg");
    else if (icon == "red") img.src = chrome.runtime.getURL("images/sra/StopSm.svg");

    var pre2 = document.createElement("pre");
    pre2.className = "webrootlogobody";
    pre2.append(txt_detail);
    span.appendChild(pre1);
    span.appendChild(pre2);

    // Create encapsulating <div> element
    var newNode = document.createElement("div");
    newNode.className = "WebrootDiv";
    newNode.appendChild(img);
    newNode.appendChild(span);

    Webroot_Extension.SRA_TEMPLATE = newNode.cloneNode(true);

    return newNode;
  },

  // --------------------------------------- //
  // Add Reputation Icon based on Reputation //
  // Reputation Scores Received from Server  //
  // --------------------------------------- //
  add_icon_bulk: function (rep, index, msg) {
    var toolTip = null;
    var toolTipTitle = null;

    // Create unique ID for <Span> element
    var id = -1;
    var checkId = index;
    while (id == -1) {
      var elementID = "WebrootDivSpan" + checkId;
      if (document.getElementById(elementID) == null) id = checkId;
      else checkId++;
    }

    // Get Categories
    var obj = msg;
    var node;

    // Handle <RED> Reputation
    if (obj.DATA[index].BLK == 1 || obj.DATA[index].BCRI < 21) {
      switch (obj.DATA[index].BLKREASON) {
        case 200:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_PHISHING");
          break;
        case 49:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_KEYLOGGER");
          break;
        case 56:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_MALWARE");
          break;
        case 57:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_PHISHING");
          break;
        case 59:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_SPYWARE");
          break;
        case 67:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_BOTNET");
          break;
        case 71:
          toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_SPAM");
          break;
        default:
          // Check for malicious categories
          var blockedCat = "-1";

          for (var i = 0; i < obj.DATA[index]["CAT.CONF"].length; i++) {
            var splitResult1 = obj.DATA[index]["CAT.CONF"][i].split(".")[0];

            if (
              splitResult1 == "49" ||
              splitResult1 == "56" ||
              splitResult1 == "57" ||
              splitResult1 == "59" ||
              splitResult1 == "67" ||
              splitResult1 == "71"
            ) {
              blockedCat = splitResult1;
              break;
            }
          }

          switch (blockedCat) {
            case "49":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_KEYLOGGER");
              break;
            case "56":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_MALWARE");
              break;
            case "57":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_PHISHING");
              break;
            case "59":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_SPYWARE");
              break;
            case "67":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_BOTNET");
              break;
            case "71":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_SPAM");
              break;
            case "-1":
              toolTipTitle = chrome.i18n.getMessage("TITLE_BCAP_RISK");
              break;
          }
      }

      node = Webroot_Extension.create_Webroot_DIV(id, "red", toolTipTitle, chrome.i18n.getMessage("TEXT_RISK"));
      return node;
    }
    // Handle <GREEN> Reputation
    else if (obj.DATA[index].BCRI >= 61) {
      node = Webroot_Extension.create_Webroot_DIV(
        id,
        "green",
        chrome.i18n.getMessage("TITLE_BCAP_TRUSTWORTHY"),
        chrome.i18n.getMessage("TEXT_TRUSTWORTHY")
      );

      return node;
    }
    // Handle <YELLOW> Reputation
    else if (obj.DATA[index].BCRI >= 21 && obj.DATA[index].BCRI <= 60) {
      node = Webroot_Extension.create_Webroot_DIV(
        id,
        "yellow",
        chrome.i18n.getMessage("TITLE_BCAP_SUSPICIOUS"),
        chrome.i18n.getMessage("TEXT_SUSPICIOUS")
      );

      return node;
    } else {
      node = Webroot_Extension.create_Webroot_DIV(
        id,
        "yellow",
        chrome.i18n.getMessage("TITLE_BCAP_SUSPICIOUS"),
        chrome.i18n.getMessage("TEXT_SUSPICIOUS")
      );

      return node;
    }
  },

  // ---------------------------------------- //
  // Object carrying reference to DOM  		//
  // element to be modified when BrightCloud  //
  // API replies								//
  // ---------------------------------------- //
  myobject: function (o, i, isBing, uri) {
    this.myElement = o;
    this.mylinkIndex = i;
    this.isBing = isBing;
    this.uri = uri;
  },

  // ---------------------------- //
  // 	  UPDATE Search Results  	//
  // ---------------------------- //
  processSRAResponse: function (msg) {
    if (!msg) return;
    var obj = msg;

    // Get URL'S Count
    var urlCount = obj.DATA.length;

    // Traverse Entrie URL's
    for (var i = 0; i < urlCount; i++) {
      // Get Reference
      var myRef = obj.DATA[i].REF;
      if (
        myRef > Webroot_Extension.links.length ||
        !Webroot_Extension.links[myRef - 1].myElement ||
        !Webroot_Extension.links[myRef - 1].myElement.childNodes ||
        !Webroot_Extension.links[myRef - 1].myElement.childNodes.length
      )
        continue;

      // Get results
      var iconNode = Webroot_Extension.add_icon_bulk(obj.DATA[i].BCRI, i, msg);

      // exchange with grey hourglass image
      var link = Webroot_Extension.links[myRef - 1].myElement;
      var mylinkIndex = Webroot_Extension.links[myRef - 1].mylinkIndex;
      if (!mylinkIndex) mylinkIndex = 0;
      var webrootDiv = link.childNodes[mylinkIndex];

      // Content-Visibility=auto -> this style cuts off popup
      if (Webroot_Extension.links[myRef - 1].isBing) {
        var parentElement = link.parentElement;
        if (parentElement && window.getComputedStyle(parentElement)["content-visibility"] == "auto")
          parentElement.style["content-visibility"] = "visible";
      }

      if (webrootDiv.className == "WebrootProcessing")
        // Replace HTML element if it is hourclass
        link.replaceChild(iconNode, webrootDiv);
      else {
        // Add HTML element to Current Node
        link.insertBefore(iconNode, webrootDiv);
      }
    }
    Webroot_Extension.links.length = 0;

    if (!sraObserverRunning && Webroot_Extension.currentUrlwithoutParams.toLowerCase().indexOf(".google.") >= 0) {
      sraObserverRunning = true;
      sraObserver.observe(document.body, { childList: true, attributes: false, subtree: true, characterData: false });
    }
  },

  // ---------------------------- //
  // 	  REMOVE Loading Icons  	//
  // ---------------------------- //
  removeLoadingIconsBlank: function () {
    // Traverse Entrie Search Results
    for (var i = 0; i < Webroot_Extension.links.length; i++) {
      // Remove Loading Icons
      var webrootDiv = Webroot_Extension.links[i].myElement.childNodes[Webroot_Extension.links[i].mylinkIndex];
      if (webrootDiv.className == "WebrootProcessing") {
        webrootDiv.innerText = "";
      }
    }
  },

  // -------------------------------------------------------- //
  // Check received response for errors
  // return: -1 -> error; 0 -> stop processing; 1 -> success/proceed
  // -------------------------------------------------------- //
  checkResponseError: function (response) {
    if (!response || response.responseText == undefined) return -1;
    var obj = response.responseText;

    if (obj.ERR == 0) {
      return 1;
    } else if (obj.ERR == 51) {
      //ERR=51 -> missing KC
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_MISSING" }, function (response) {});
      return 0;
    } else if (obj.ERR == 52) {
      //ERR=52 -> KC failed to validate
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
    } else if (obj.ERR == 55) {
      //ERR=55 -> "Privacy not accepted" (FF)
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_MISSING" }, function (response) {
        var err = chrome.runtime.lastError;
      });
    } else if (obj.ERR == 200) {
      //ERR=200 -> "Invalid Password"
      var str = chrome.i18n.getMessage("Password");
      alert(str);
      return 1;
    } else if (obj.ERR == 503) {
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "WSA_UNREACHABLE" }, function (response) {});
    } else if (obj.ERR == 1062) {
      // ERROR_SERVICE_NOT_ACTIVE returned if "Enable Web Shield" disabled (WSA GUI)
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "DEFAULT" }, function (response) {});
      //not an error; just stop processing
      return 0;
    } else if (obj.ERR > 0) {
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "ERROR" }, function (response) {});
    }

    return -1;
  },

  // --------------------------------------------------------- //
  // Extracts the BLK URL from QueryParams and navigates to it //
  // --------------------------------------------------------- //
  processWhiteListResponse: function (url, msg) {
    // Split URL
    var uri = new Uri(url);
    if (uri.host.toLowerCase() != "wf.webrootanywhere.com") return;

    var q = uri.query();
    var blkURL = q["burl"];
    var extra = q["extra"];
    var tabId = extra.substring(extra.indexOf(":") + 1);

    // Navigate to WhiteListed URL
    if (tabId == "") window.location = Webroot_Helper.decodeBase64(blkURL);
    else {
      // if invalid pwd has been keyed in then return to blockpage
      if (msg.responseText.ERR == 200) {
        var referrerUri = new Uri(document.referrer);
        if (referrerUri.host.toLowerCase() == "wf.webrootanywhere.com") {
          if (referrerUri.queryString) {
            if (referrerUri.queryString.indexOf("%") >= 0) window.location = decodeURIComponent(referrerUri.raw);
            else window.location = referrerUri.raw;
          }
        }
      } else window.location = Webroot_Helper.iWhitePagePathHttps + "?" + "tabId=" + extra.substring(extra.indexOf(":") + 1);
    }
  },

  // ---------------------------------------- //
  // Extract Search results and annotate them //
  // ---------------------------------------- //
  processSearchPage: function (body, domainIdxList) {
    // Create Array of MyObjects (GLOBAL)
    Webroot_Extension.links = new Array(); // <A> TAGS

    var SendRequestPending = true;

    // bing
    if (Webroot_Extension.currentURL.toLowerCase().startsWith("https://www.bing.com/search")) {
      Webroot_Extension.processSearchPageBing(body);
      return;
    }

    // other Searchpages than bing
    for (var searchIndex = 0; searchIndex < domainIdxList.length; searchIndex++) {
      if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].nextonmatch == "0" && SendRequestPending) {
        SendRequestPending = false;
      } else {
        // Check if Page is already being processed
        if (Webroot_Extension.links.length != 0) return;
      }

      // Get ALL Parent Tags within <Body>
      var parentTags = body.getElementsByTagName(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].parent);

      var maxloop = Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].maxloop;

      // Iterate through all <div> tags
      for (var i = 0; i < parentTags.length; i++) {
        var loopcnt = 0;

        // Check Parent ID
        if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pid != "") {
          if (parentTags[i].id.search(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pid) == -1) continue;
        }

        // Check Parent Class Name
        if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pclassrex != "") {
          var newRegEx = new RegExp(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pclassrex, "i");
          var str = parentTags[i].className;

          if (!str) str = "";

          var result = str.match(newRegEx);
          if (result == null) continue;
          var pclass = parentTags[i].className;
        }

        // Check Parent Class Name
        if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pclass != "") {
          if (parentTags[i].className.search(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pclass) == -1) continue;
        }

        // Get all Element tags within the Parent
        var elementTags = parentTags[i].getElementsByTagName(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].elem);

        // Iterate through all Element tags
        for (var j = 0; j < elementTags.length; j++) {
          // Check Element ID
          if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].eid != "") {
            if (elementTags[j].id.search(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].eid) == -1) continue;
          }

          // Check element Class Name
          if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].eclassrex != "") {
            var newRegEx = new RegExp(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].eclassrex, "i");

            var baseURL = elementTags[j].baseURI.split("#");
            if (elementTags[j].href.includes(baseURL[0])) continue;

            var str = elementTags[j].className;
            if (!str) str = "";

            var result = str.match(newRegEx);
            if (result == null) continue;
          }

          // Check Element Class Name
          if (Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].eclass != "") {
            if (elementTags[j].className.search(Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].eclass) == -1) continue;
          }

          // Check if element is visible
          // avoid check on bing -> bing inserts text later via script (WTS-958)
          if (!elementTags[j].innerText) continue;

          // Get all <div>..</div> tags within the Element
          var webrootTags = elementTags[j].getElementsByTagName("div");
          var webrootFlag = true;

          // Traverse All <div> tags
          for (var a = 0; a < webrootTags.length; a++) {
            // If Element contains <div class= 'WebrootDiv'>, then it has been previously processed
            if (webrootTags[a].className == "WebrootDiv" || webrootTags[a].className == "WebrootProcessing") {
              webrootFlag = false;
              loopcnt++;
            }
          }

          if (webrootFlag == false) {
            if (loopcnt >= maxloop) break;
            else continue;
          }

          if (Webroot_Extension.links.length >= 100) continue;

          var useMaxLoop = true;
          var peDist = Webroot_Extension.SRA_CONFIG[domainIdxList[searchIndex]].pedistance;
          if (peDist != "") {
            useMaxLoop = false;
            var res = peDist.split("|");

            var distance = Webroot_Extension.GetDistanceToParent(elementTags[j], pclass);

            if (!(distance >= res[0] && distance <= res[1])) continue;
          }

          //// Add HTML element to Current Node
          var childNodeIndex = 0;
          var childAfter = elementTags[j].childNodes[childNodeIndex];
          if (childAfter && childAfter.nodeName == "BR") {
            childNodeIndex++;
          }

          // Save Current DOM Element
          Webroot_Extension.links.push(new Webroot_Extension.myobject(elementTags[j], childNodeIndex, false));

          loopcnt++;
          if (useMaxLoop == true && loopcnt >= maxloop) break;
        }
      }

      // Process Bulk Request
      if (!SendRequestPending && Webroot_Extension.links.length != 0) {
        var linksArray = Webroot_Helper.create_URL_Array(Webroot_Extension.links, domainIdxList[searchIndex]);

        chrome.runtime.sendMessage({ msg: "SRA", links: linksArray }, function (response) {
          // Check for errors
          var error = response.responseText;
          if (error) {
            // Log error
            if (error.includes("{") && error.includes("}")) console.info("WTS_Extension [PROCESSSEARCHPAGE]: " + JSON.stringify(error));
            else console.info("WTS_Extension [PROCESSSEARCHPAGE]: ", response);

            // Update BrowserAction (Case: WSA UNREACHABLE)
            chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "WSA_UNREACHABLE" }, function (response) {});
            return;
          }
        });
      }
    }
  },

  // --------------------------------------------- //
  // Extract Bing Search results and annotate them //
  // --------------------------------------------- //
  processSearchPageBing: function (body) {
    if (!sraObserverRunning) {
      sraObserverRunning = true;
      sraObserver.observe(body, { childList: true, attributes: false, subtree: true, characterData: false });
    }

    var SRAList = body.querySelectorAll("li.b_algo h2 a:not([class]");
    if (!SRAList.length || SRAList.length == 0) return false;

    for (var i = 0; i < SRAList.length; i++) {
      var item = Webroot_Extension.filterBingLinks(SRAList[i]);
      if (item) Webroot_Extension.links.push(item);
    }
    if (Webroot_Extension.links.length == 0) return false;

    // Process Bulk Request
    var linksArray = Webroot_Helper.create_Url_Array_FromBing(Webroot_Extension.links);
    if (!linksArray || linksArray.length == 0) return false;

    chrome.runtime.sendMessage({ msg: "SRA", links: linksArray }, function (response) {
      // Check for errors
      var error = response.responseText;
      if (error != 0) {
        // Log error
        console.info("WTS_Extension [PROCESSSEARCHPAGE]: " + JSON.stringify(error));

        // Update BrowserAction (Case: WSA UNREACHABLE)
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "WSA_UNREACHABLE" }, function (response) {});
        return false;
      }
    });

    return true;
  },

  // ---------------------------------------- //
  // Select/filter SRA links on Bing          //
  // ---------------------------------------- //
  filterBingLinks: function (elem) {
    if (!elem) return null;
    if (!elem.textContent) return null;

    var alreadyThere = elem.querySelectorAll("div.WebrootDiv");
    if (alreadyThere && alreadyThere.length > 0) return null;

    if (elem.localName != "a") return null;

    var uri = new Uri(elem.href);
    if (!uri || !uri.urlWithoutQuery) return null;
    if (!uri.isHostValid()) return null;

    // extract from bing.com/cf
    if (uri.host == "www.bing.com") {
      var queryDict = uri.query();
      var targetUrl = queryDict["u"];
      if (!targetUrl) return null;
      targetUrl = atob(targetUrl.substring(2).replaceAll("-", "+").replaceAll("_", "/"));
      uri = new Uri(targetUrl);
      if (!uri || !uri.urlWithoutQuery) return null;
      if (!uri.isHostValid()) return null;
    }

    return new Webroot_Extension.myobject(elem, 0, true, uri);
  },

  // ---------------------------------------- //
  // BCAP --> if page classified as malicious --> Navigates to BlockPage
  // BCAP --> If page not malicious --> Performs RTAP
  // ---------------------------------------- //
  processBCAPResponse: function (jsonResponse) {
    // BCAP
    if (jsonResponse.DATA[0].REF != Webroot_Extension.frameRef) return;

    //hidden BCAP
    Webroot_Extension.updateSettingsFromWSA(jsonResponse);

    if (Webroot_Extension.urlBlocking == 1 || (Webroot_Extension.phishBlocking == 1 && jsonResponse.DATA[0].RTAP == -1)) {
      if (jsonResponse.DATA[0].BLK == 1) {
        // Construct Block Page URL
        var myBlockPageURL;
        if (Webroot_Extension.isIframe == true)
          myBlockPageURL = Webroot_Helper.constructBlkUrl(
            Webroot_Extension.Flg,
            Webroot_Extension.agentPwd,
            0,
            document.URL,
            jsonResponse,
            "",
            jsonResponse.TABID,
            1
          );
        else
          myBlockPageURL = Webroot_Helper.constructBlkUrl(
            Webroot_Extension.Flg,
            Webroot_Extension.agentPwd,
            0,
            document.URL,
            jsonResponse,
            "",
            null,
            0
          );

        // Navigate to Blockpage
        if (Webroot_Extension.isIframe) document.location = myBlockPageURL;
        else window.location = myBlockPageURL;

        return;
      }
      // Update BrowserAction icon (only for main frame)
      else if (Webroot_Extension.isIframe == false)
        chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: jsonResponse }, function (response) {});
    }

    if (jsonResponse.DATA[0].NOPP == 2) {
      //TODO remove mode == 2 as soon as dynRTAP gets supported in integrated
      if (Webroot_Extension.mode == 2) Webroot_Extension.startObserver();
      return;
    }
    if (jsonResponse.DATA[0].NOPP == 1 || jsonResponse.DATA[0].PRIVATEIP == 1) return;

    // Perform RTAP
    if (Webroot_Extension.processRTAP(document.URL, false)) return;
  },

  // ---------------------------------------- //
  // RTAP --> if page classified as malicious --> Navigates to BlockPage
  // ---------------------------------------- //
  processRTAPResponse: function (jsonResponse) {
    // RTAP
    if (Webroot_Extension.frameRef.toString() != jsonResponse.REF) return;

    // Check Reputation
    if (jsonResponse.DATA[0].ISPHIS == 1) {
      if (jsonResponse.DATA[0].ISWHT == 1) {
        Webroot_Extension.isRTAPpending = false;
        return;
      }

      // Construct Block Page URL
      if (Webroot_Extension.isIframe == true) {
        var myBlockPageURL = Webroot_Helper.constructBlkUrl(
          Webroot_Extension.Flg,
          Webroot_Extension.agentPwd,
          1,
          document.URL,
          jsonResponse,
          "",
          jsonResponse.TABID,
          1
        );
        document.location = myBlockPageURL;
      } else {
        var myBlockPageURL = Webroot_Helper.constructBlkUrl(
          Webroot_Extension.Flg,
          Webroot_Extension.agentPwd,
          1,
          document.URL,
          jsonResponse,
          ""
        );
        window.location = myBlockPageURL;
      }

      Webroot_Extension.isRTAPpending = false;
      return;
    } else {
      Webroot_Extension.isRTAPpending = false;
      if (Webroot_Extension.mode == 2 && !Webroot_Extension.isContentObservingSet) Webroot_Extension.startObserver();
    }
  },

  startObserver: function () {
    Webroot_Extension.isContentObservingSet = true;
    Webroot_Extension.currentChksum = Webroot_Extension.getContentHash(Webroot_Helper.extractPageHtml(document));
    Webroot_Extension.observer.observe(document.body, { attributes: false, childList: true, characterData: false, subtree: true });
  },

  updateConfig: function () {
    if (Webroot_Extension.isIframe) return;
    var ms = Date.now() - Webroot_Extension.lastConfigRefresh;
    if (ms < 2000) return;

    Webroot_Extension.lastConfigRefresh = Date.now();
    chrome.runtime.sendMessage({ msg: "CONFIG", skipresponse: 1 }, function (response) {});
  },

  updateSettingsFromWSA: function (jsonResponse) {
    if (!jsonResponse || !jsonResponse.SETTINGS || !jsonResponse.SETTINGS.DATA) return;

    var settings = jsonResponse.SETTINGS.DATA;
    if (settings.hasOwnProperty("URLBlocking")) Webroot_Extension.urlBlocking = settings.URLBlocking;
    if (settings.hasOwnProperty("PhishBlocking")) Webroot_Extension.phishBlocking = settings.PhishBlocking;
    if (settings.hasOwnProperty("SearchAnnotation")) Webroot_Extension.searchAnnotation = settings.SearchAnnotation;
    if (settings.hasOwnProperty("Mode")) Webroot_Extension.mode = settings.Mode;
    if (settings.hasOwnProperty("AgentPwd")) Webroot_Extension.agentPwd = settings.AgentPwd;
    if (settings.hasOwnProperty("Flg")) Webroot_Extension.Flg = settings.Flg;
  }
};

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (namespace == "local" && changes["Settings"]) {
    var ms = Date.now() - Webroot_Extension.lastConfigRefresh;
    if (ms > 2000) return;
    Webroot_Extension.initConfig(changes["Settings"].newValue);
  }
});

// Initialize ContentScript
Webroot_Extension.init();

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (!msg || !msg.responseText) return;

  var jsonResponse = msg.responseText;

  // ------ //
  // CONFIG //
  // ------ //
  if (jsonResponse.OP == 4) {
    if (Date.now() - Webroot_Extension.cfgReceivedAt < 1000) return;

    // Handle Config Response
    var iSuccess = Webroot_Extension.checkResponseError(msg);
    if (iSuccess <= 0) {
      if (iSuccess < 0) console.info("WTS_Extension [RUNTIME.ONMESSAGE][OP-4]: " + JSON.stringify(jsonResponse));
      Webroot_Extension.removeLoadingIconsBlank();
      return;
    }
    // if Standalone and no KeyCode terminate
    if (jsonResponse.STANDALONE == 1 && !jsonResponse.KC) {
      // Update the browser action to resemble missing keycode
      chrome.runtime.sendMessage({ msg: "update_browseraction_icon", data: "KC_MISSING" }, function (response) {});
      return;
    }
    Webroot_Extension.cfgReceivedAt = Date.now();
    Webroot_Extension.runScript();
  }

  // ---- //
  // BCAP //
  // ---- //
  else if (jsonResponse.OP == 1) {
    // Handle BCAP Response
    var iSuccess = Webroot_Extension.checkResponseError(msg);
    if (iSuccess <= 0) {
      if (iSuccess < 0) console.info("WTS_Extension [RUNTIME.ONMESSAGE][OP-1]: " + JSON.stringify(jsonResponse));
      Webroot_Extension.removeLoadingIconsBlank();
      return;
    }

    var dataEntries = jsonResponse.DATA.length;
    if (dataEntries > 1) Webroot_Extension.processSRAResponse(jsonResponse); //SRA
    else Webroot_Extension.processBCAPResponse(jsonResponse); //BCAP
    return;
  }

  // ---- //
  // RTAP //
  // ---- //
  else if (jsonResponse.OP == 2) {
    // Handle BCAP Response
    var iSuccess = Webroot_Extension.checkResponseError(msg);
    if (iSuccess <= 0) {
      Webroot_Extension.isRTAPpending = false;
      if (iSuccess < 0) console.info("WTS_Extension [RUNTIME.ONMESSAGE][OP-2]: " + JSON.stringify(jsonResponse));
      return;
    }

    //Check response
    Webroot_Extension.processRTAPResponse(jsonResponse);
    return;
  }

  // --------- //
  // WHITELIST //
  // --------- //
  else if (jsonResponse.OP == 3) {
    // Handle WhiteList Response
    var iSuccess = Webroot_Extension.checkResponseError(msg);
    if (iSuccess <= 0) {
      if (iSuccess < 0) console.info("WTS_Extension [RUNTIME.ONMESSAGE][OP-3]: " + JSON.stringify(jsonResponse));
      return;
    }

    //Check response
    Webroot_Extension.processWhiteListResponse(document.URL, msg);
    return;
  }
});
