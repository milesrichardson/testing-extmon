"use strict";
var url = decodeURIComponent(location.search.slice(1)),
  historyState = decodeURIComponent(location.hash.slice(1));
(historyState = "undefined" === historyState ? null : JSON.parse(historyState)),
  history.replaceState(historyState, null, url),
  location.reload();
