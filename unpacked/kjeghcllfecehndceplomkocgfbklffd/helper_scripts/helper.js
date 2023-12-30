/********************************************************************************
  Module:		helper
  Description:	- Script containing all the helper methods used by the background
				  and the content scripts
/********************************************************************************
  Property of:	Webroot Inc.
  Copyright:	Webroot Inc. (c) 2023
/********************************************************************************
  Creator:		melsaie@webroot.com
  Manager:		pblaimschein@webroot.com
  Created:		02/10/2017 (mm/dd/yyyy)
********************************************************************************/

// ------------- //
// Uri class     //
// ------------- //
class Uri {
  constructor(url) {
    if (!url) {
      this.raw = "";
      this.protocol = "";
      this.authority = "";
      this.host = "";
      this.port = "";
      this.fullpath = "";
      this.path = "";
      this.filename = "";
      this.queryString = "";
      this.anchor = "";
      this.querySeparator = "";
      this.pathAndQuery = "";
      this.urlWithoutQuery = "";
      return;
    }
    var uriParts;
    try {
      uriParts = new RegExp(
        "^(?:([^:/?#.]+):)?(?://)?(([^:/?#]*)(?::(\\d*))?)?((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[\\?#]|$)))*/?)?([^?#/]*))?(?:\\?([^#]*))?(?:#(.*))?"
      ).exec(url);
    } catch (err) {
      this.raw = url;
      this.protocol = "";
      this.authority = "";
      this.host = "";
      this.port = "";
      this.fullpath = "";
      this.path = "";
      this.filename = "";
      this.queryString = "";
      this.anchor = "";
      this.querySeparator = "";
      this.pathAndQuery = "";
      this.urlWithoutQuery = "";
      return;
    }
    for (var i = 0; i < uriParts.length; i++) if (!uriParts[i]) uriParts[i] = "";
    this.raw = uriParts[0];
    this.protocol = uriParts[1];
    this.authority = uriParts[2];
    this.host = uriParts[3];
    this.port = uriParts[4];
    this.fullpath = uriParts[5];
    this.path = uriParts[6];
    this.filename = uriParts[7];
    this.queryString = uriParts[8];
    this.anchor = uriParts[9];
    if (this.queryString) {
      var pos = url.indexOf(this.queryString);
      if (pos >= 0) this.querySeparator = url[pos - 1];
    } else this.querySeparator = "";
    this.pathAndQuery = this.fullpath + this.querySeparator + this.queryString;
    if (this.anchor) this.pathAndQuery += "#" + this.anchor;
    var uriSplitQuery = new RegExp("^[^?#&]+").exec(url);
    this.urlWithoutQuery = uriSplitQuery[0];
  }
  isHostValid() {
    if (!this.host) return false;
    if (this.host.length == 9 && this.host.toLowerCase() == "localhost") return true;
    if (this.host.indexOf(" ") >= 0) return false;
    //first dot
    if (this.host.indexOf(".") <= 0) return false;
    //first dot
    if (this.host.lastIndexOf(".") == this.host.length - 1) return false;
    if (this.host.indexOf("..") >= 0) return false;
    return true;
  }
  query() {
    if (!this.isHostValid()) return {};
    if (!this.queryString) return {};

    var queryDict = {};
    var queryItems = this.queryString.split("&");
    for (var i = 0; i < queryItems.length; i++) {
      var queryPair = queryItems[i].split("=");
      if (queryPair.length == 2) queryDict[queryPair[0]] = queryPair[1];
      else if (queryPair.length == 1) queryDict[queryPair[0]] = undefined;
      else if (queryPair.length > 2) {
        var firstEqual = queryItems[i].indexOf("=");
        queryDict[queryItems[i].substring(0, firstEqual)] = queryItems[i].substr(firstEqual + 1);
      }
    }
    return queryDict;
  }
}

// ------------- //
// Helper Object //
// ------------- //
var Webroot_Helper = {
  // Define variables
  blockPagePath: "http://wf.webrootanywhere.com/ConsumerBlockpage.aspx".toLowerCase(),
  blockPagePathHttps: "https://wf.webrootanywhere.com/ConsumerBlockpage.aspx".toLowerCase(),
  whitePagePath: "http://wf.webrootanywhere.com/WebFiltering/WhiteList.html".toLowerCase(),
  whitePagePathHttps: "https://wf.webrootanywhere.com/WebFiltering/WhiteList.html".toLowerCase(),
  errorPagePath: "http://wf.webrootanywhere.com/ErrorPages/Oops.aspx".toLowerCase(),
  errorPagePathHttps: "https://wf.webrootanywhere.com/ErrorPages/Oops.aspx".toLowerCase(),
  IframeblockPagePath: "http://wf.webrootanywhere.com/IframeBlockpage.aspx".toLowerCase(),
  IframeblockPagePathHttps: "https://wf.webrootanywhere.com/IframeBlockpage.aspx".toLowerCase(),
  iWhitePagePath: "http://wf.webrootanywhere.com/WebFiltering/iWhiteList.aspx",
  iWhitePagePathHttps: "https://wf.webrootanywhere.com/WebFiltering/iWhiteList.aspx",

  // ------------------------------ //
  //       Break Down URL			  //
  // ------------------------------ //
  parseUri: function (sourceUri) {
    var uriPartNames = ["source", "protocol", "authority", "domain", "port", "path", "directoryPath", "fileName", "query", "anchor"];
    var uriParts = new RegExp(
      "^(?:([^:/?#.]+):)?(?://)?(([^:/?#]*)(?::(\\d*))?)?((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[\\?#]|$)))*/?)?([^?#/]*))?(?:\\?([^#]*))?(?:#(.*))?"
    ).exec(sourceUri);
    var uri = {};

    for (var i = 0; i < 10; i++) {
      uri[uriPartNames[i]] = uriParts[i] ? uriParts[i] : "";
    }

    // Always end directoryPath with a trailing backslash if a path was present in the source URI
    // Note that a trailing backslash is NOT automatically inserted within or appended to the "path" key
    if (uri.directoryPath.length > 0) {
      uri.directoryPath = uri.directoryPath.replace(/\/?$/, "/");
    }

    return uri;
  },

  // ---------------------------------------- //
  //	 Break Down URL Before Classification	//
  //   Remove Parameters/Attributes from URL	//
  // ---------------------------------------- //
  process_url: function (stURL) {
    // Check for Empty URL
    if (stURL == "") return "";

    // Initialize Variable
    var processedURL = "";
    // Separate At "?"
    processedURL = stURL.split("?");
    // Separate At "&"
    var processedURL1 = processedURL[0].split("&");
    // Separate At "#"
    var finalProcessedURL = processedURL1[0].split("#");

    return finalProcessedURL[0];
  },

  // ---------------------------------------- //
  //	 Break Down Server URL 				 	//
  //   Remove Parameters/Attributes from URL	//
  // ---------------------------------------- //
  process_server: function (stURL) {
    // Check for Empty URL
    if (stURL == "") return 1;

    // Initialize Variable
    var processedURL = "";
    var finalProcessedURL = "";
    // Separate At "//"
    processedURL = stURL.split("//");
    // Separate At "/"
    var ProcessedURL2 = processedURL[1].split("/");
    // Separate At "?"
    var ProcessedURL3 = ProcessedURL2[0].split("?");
    // Separate At "#"
    var ProcessedURL4 = ProcessedURL3[0].split("#");
    // Separate At ":"
    finalProcessedURL = ProcessedURL4[0].split(":");

    return finalProcessedURL[0];
  },

  // -------------------------------- //
  //	 Check if URL is HTTP/S         //
  // -------------------------------- //
  is_HTTPS: function (stURL) {
    // Check for Empty URL
    if (!stURL) return false;

    // Convert to LowerCase
    stURL = stURL.toLowerCase();
    // Initialize Variable
    var protocol = "";
    // Separate At "//"
    protocol = stURL.split("//");

    if (protocol[0] == "https:") return true;

    return false;
  },

  // ------------------------------------------- //
  // Check if IFRAME URL needs to be WhiteListed //
  // ------------------------------------------- //
  isIWhiteListUrl: function (url) {
    // Split URL
    var urlSplitResultsTemp = url.split("?");

    // Check URL
    if (urlSplitResultsTemp[0] == Webroot_Helper.iWhitePagePath) return true;
    if (urlSplitResultsTemp[0] == Webroot_Helper.iWhitePagePathHttps) return true;

    return false;
  },

  // ---------------------------------- //
  //		 Create BULK URL JSON array	  //
  //       to be sent to service		  //
  // ---------------------------------- //
  create_URL_Array: function (linksArray, domainIndex) {
    var request = [];

    // Iterate through the Links array
    for (var i = 0; i < linksArray.length; i++) {
      if (i < 100) {
        // BreakDown URL
        if (linksArray[i].myElement.localName == "a") {
          // <A> Tag
          var processedURL = Webroot_Helper.process_url(linksArray[i].myElement.href);
        } else {
          // <IFRAME> Tag
          var processedURL = Webroot_Helper.process_url(linksArray[i].myElement.src);
        }

        var startIndex = -1;
        var endIndex = -1;

        // Extract URL
        if (Webroot_Extension.SRA_CONFIG[domainIndex].prefix != "")
          startIndex = processedURL.search(Webroot_Extension.SRA_CONFIG[domainIndex].prefix);

        if (startIndex != -1) {
          startIndex += Webroot_Extension.SRA_CONFIG[domainIndex].prefix.length;
          processedURL = processedURL.substring(startIndex);
        }

        if (Webroot_Extension.SRA_CONFIG[domainIndex].postfix != "")
          endIndex = processedURL.search(Webroot_Extension.SRA_CONFIG[domainIndex].postfix);

        if (endIndex != -1) processedURL = processedURL.substring(0, endIndex);

        // Decode URL
        if (Webroot_Extension.SRA_CONFIG[domainIndex].encode == "URL") {
          try {
            processedURL = decodeURIComponent(processedURL);
          } catch (e) {
            processedURL = processedURL;
          }
        }

        request.push({
          URL: processedURL,
          REF: i + 1
        });
      }
    }

    //WTS-626: add second URL for classification to array if only one search result exists
    if (linksArray.length == 1) {
      request.push({
        URL: "www.google.com",
        REF: 2
      });
    }

    return request;
  },

  // ---------------------------------- //
  //		 Create BULK URL JSON array	  //
  //       to be sent to service		  //
  // ---------------------------------- //
  create_Url_Array_FromBing: function (linksArray) {
    var request = [];

    // Iterate through the Links array
    for (var i = 0; i < linksArray.length; i++) {
      if (i < 100) {
        var processedURL = linksArray[i].uri.urlWithoutQuery;

        if (processedURL.endsWith("..")) {
          var pos = processedURL.lastIndexOf("?");
          if (pos < 0) pos = processedURL.lastIndexOf("/");
          else pos = pos - 1;
          if (pos < 0) continue;
          processedURL = processedURL.substring(0, pos + 1);
        }

        request.push({
          URL: processedURL,
          REF: i + 1
        });
      }
    }
    if (request.length == 0) return request;

    //WTS-626: add second URL for classification to array if only one search result exists
    if (linksArray.length == 1) {
      request.push({
        URL: "www.google.com",
        REF: 2
      });
    }

    return request;
  },

  // ---------------------------- //
  // Get Size of String in Bytes  //
  // ---------------------------- //
  getByteLen: function (normal_val) {
    // Force string type
    normal_val = String(normal_val);

    var byteLen = 0;
    for (var i = 0; i < normal_val.length; i++) {
      var c = normal_val.charCodeAt(i);
      byteLen += c < 1 << 7 ? 1 : c < 1 << 11 ? 2 : c < 1 << 16 ? 3 : c < 1 << 21 ? 4 : c < 1 << 26 ? 5 : c < 1 << 31 ? 6 : Number.NaN;
    }
    return byteLen;
  },

  // ---------------------------------- //
  // Check if URL needs to be by-passed //
  // ---------------------------------- //
  isContentScriptFilteredUrl: function (url) {
    // Split URL
    var urlSplitResultsTemp = url.split("?");
    var urlSplitResultsLow = urlSplitResultsTemp[0].toLowerCase();
    var urlSplitResults = url.split(":");

    if (url == "") return true;
    if (urlSplitResultsLow == Webroot_Helper.blockPagePath) return true;
    if (urlSplitResultsLow == Webroot_Helper.IframeblockPagePath) return true;
    if (urlSplitResultsLow == Webroot_Helper.errorPagePath) return true;

    if (urlSplitResultsLow == Webroot_Helper.blockPagePathHttps) return true;
    if (urlSplitResultsLow == Webroot_Helper.IframeblockPagePathHttps) return true;
    if (urlSplitResultsLow == Webroot_Helper.errorPagePathHttps) return true;

    if (urlSplitResultsLow == "about:blank") return true;
    if (urlSplitResultsLow == "about:privatebrowsing") return true;
    if (urlSplitResultsLow == "about:newtab") return true;
    if (urlSplitResultsLow == "about:home") return true;
    if (urlSplitResultsLow == "about:addons") return true;
    if (urlSplitResultsLow == "about:support") return true;
    if (urlSplitResultsLow == null) return true;
    if (
      urlSplitResults[0] == "file" ||
      urlSplitResults[0] == "data" ||
      urlSplitResults[0] == "blob" ||
      urlSplitResults[0] == "chrome" ||
      urlSplitResults[0] == "chrome-extension" ||
      urlSplitResults[0] == "externalfile"
    )
      return true;

    return false;
  },

  // ------------------------- //
  // Check if URL is BlockPage //
  // ------------------------- //
  isBlockPageUrl: function (url) {
    // Split URL
    var urlSplitResultsTemp = url.split("?");
    var urlSplitResultsLow = urlSplitResultsTemp[0].toLowerCase();

    if (urlSplitResultsLow == Webroot_Helper.blockPagePath) return true;
    if (urlSplitResultsLow == Webroot_Helper.blockPagePathHttps) return true;

    if (urlSplitResultsLow == Webroot_Helper.IframeblockPagePath) return true;
    if (urlSplitResultsLow == Webroot_Helper.IframeblockPagePathHttps) return true;

    return false;
  },

  // ------------------------------------ //
  // Check if URL needs to be WhiteListed //
  // ------------------------------------ //
  isWhiteListUrl: function (url) {
    // Split URL
    var urlSplitResultsTemp = url.split("?");
    if (urlSplitResultsTemp[0]) urlSplitResultsTemp[0] = urlSplitResultsTemp[0].toLowerCase();

    // Check URL
    if (urlSplitResultsTemp[0] == Webroot_Helper.whitePagePath) return true;
    if (urlSplitResultsTemp[0] == Webroot_Helper.whitePagePathHttps) return true;

    return false;
  },

  // ----------------------- //
  // Construct BLOCKPAGE URL //
  // ----------------------- //
  constructBlkUrl: function (Flg, agentPwd, isPhish, ppURL, responseMsg, token, tabid, isIframe) {
    var myBlockPageURL;
    var obj = responseMsg;

    if (!ppURL) return "";

    // Check if HTTP/S
    var isHttps = Webroot_Helper.is_HTTPS(ppURL);

    if (isHttps) {
      if (isIframe) myBlockPageURL = Webroot_Helper.IframeblockPagePathHttps;
      else myBlockPageURL = Webroot_Helper.blockPagePathHttps;
    } else {
      if (isIframe) myBlockPageURL = Webroot_Helper.IframeblockPagePath;
      else myBlockPageURL = Webroot_Helper.blockPagePath;
    }

    // Add <FLG>
    myBlockPageURL += "?flg=";
    myBlockPageURL += Flg | (obj.STANDALONE ? 8 : 0);

    // Add <BPASS>
    myBlockPageURL += "&bpass=";
    if (agentPwd == 1) myBlockPageURL += "1";
    else myBlockPageURL += "0";

    if (obj.DATA[0].BLKREASON == 200) isPhish = 1;

    if (isPhish == 1) {
      // Add <BRSN2>
      myBlockPageURL += "&brsn2=57";

      // Add <BCAT>
      myBlockPageURL += "&bcat=57-";

      // Add <BCRI>
      myBlockPageURL += "&bcri=0";
    } else {
      var BLKRSN;

      // Add <BRSN2>
      if (obj.DATA[0].BLKREASON) BLKRSN = obj.DATA[0].BLKREASON;
      else {
        for (var catCount = 0; catCount < obj.DATA[0]["CAT.CONF"].length; catCount++) {
          var splitResult1 = obj.DATA[0]["CAT.CONF"][catCount].split(".")[0];
          BLKRSN = splitResult1;
          break;
        }
      }
      myBlockPageURL += "&brsn2=" + BLKRSN;

      // Add <BCAT>
      myBlockPageURL += "&bcat=" + BLKRSN + "-";

      // Add <BCRI>
      myBlockPageURL += "&bcri=";
      myBlockPageURL += obj.DATA[0].BCRI;
    }

    // Add <EXTRA>
    var tmpExtra = obj.DATA[0].EXTRA;
    myBlockPageURL += "&extra=";
    if (tmpExtra != "" && tmpExtra != null) myBlockPageURL += tmpExtra;
    if (myBlockPageURL.indexOf("tabid") == -1 && tabid) {
      if (tmpExtra != "" && tmpExtra != null) myBlockPageURL += "-tabid:" + tabid;
      else myBlockPageURL += "tabid:" + tabid;
    }

    // Add <TOKEN>
    myBlockPageURL += "&token=";
    if (obj.TOKEN) myBlockPageURL += obj.TOKEN;
    else if (token != undefined) myBlockPageURL += token;

    // Add <BURL>
    myBlockPageURL += "&burl=";
    var encodedUrl = Webroot_Helper.encodeBase64(ppURL);
    myBlockPageURL += encodedUrl;

    // return BLOCKPAGE URL
    return myBlockPageURL;
  },

  // ------------------------- //
  // Extract page HTML content //
  // ------------------------- //
  extractPageHtml: function (document) {
    if (!document) return "";

    // Get Root Document HTML
    var RootHTML = "";
    if (document.head && document.head.outerHTML) RootHTML += document.head.outerHTML;
    if (document.body && document.body.outerHTML) RootHTML += document.body.outerHTML;

    if (RootHTML.length > 0) RootHTML = "<html>" + RootHTML + "</html>";

    return RootHTML;
  },

  // -------------------------------------------- //
  // Function to check for newTab links in chrome //
  // -------------------------------------------- //
  isNewTabPage: function (url) {
    // Extract RegEx from Config File
    var newRegEx = new RegExp(".*www\\.google\\..*chrome/newtab.*", "i");

    // Check URL against RegEx
    var result = url.match(newRegEx);

    if (result != null) return true;

    return false;
  },

  // public method for encoding
  encodeBase64: function (input) {
    input = input.replace(/\r\n/g, "\n");
    input = unescape(encodeURIComponent(input));
    return btoa(input);
  },

  // public method for decoding
  decodeBase64: function (input) {
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    input = atob(input);
    input = decodeURIComponent(escape(input));
    return input;
  }
};
