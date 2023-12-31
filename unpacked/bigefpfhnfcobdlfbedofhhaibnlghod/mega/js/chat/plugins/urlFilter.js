/**
 * Simple URL filter that converts any URIs found in the plain text message to clickable links
 *
 * @param megaChat
 * @returns {UrlFilter}
 * @constructor
 */
var UrlFilter = function (megaChat) {
  var self = this;

  megaChat.on("onBeforeRenderMessage", function (e, eventData) {
    self.processMessage(e, eventData);
  });

  return this;
};

UrlFilter.prototype.processMessage = function (e, eventData) {
  var self = this;

  // use the HTML version of the message if such exists (the HTML version should be generated by hooks/filters on the
  // client side.
  var textContents;
  if (eventData.message.textContents) {
    textContents = eventData.message.textContents;
  } else {
    return; // not yet decrypted.
  }

  var messageContents = eventData.message.messageHtml ? eventData.message.messageHtml : textContents;

  if (!messageContents) {
    return; // ignore, maybe its a system message (or composing/paused composing notification)
  }

  eventData.message.messageHtml = Autolinker.link(messageContents, {
    className: "chatlink",
    truncate: false,
    newWindow: true,
    stripPrefix: false,
    stripTrailingSlash: false,
    twitter: false,
    replaceFn: function (match) {
      switch (match.getType()) {
        case "url":
          var link = match.getUrl();

          if (LinkInfoHelper.isMegaLink(link)) {
            // skip MEGA links.
            var tag = match.buildTag();
            tag.addClass("red");
            return tag;
          }

          if (link.indexOf("http://") !== 0 && link.indexOf("https://") !== 0) {
            return false;
          }

          return true; // let Autolinker perform its normal anchor tag replacement
        default:
          return true;
      }
    }
  });

  if (!eventData.message.megaLinks) {
    var megaLinks = LinkInfoHelper.extractMegaLinksFromString(textContents);
    if (megaLinks && megaLinks.length > 0) {
      eventData.message.megaLinks = megaLinks;
    }
  }
};
