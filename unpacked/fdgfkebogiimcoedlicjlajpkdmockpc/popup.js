function displayOverview(pixelSize, tabURL) {
  let overview = document.getElementById("overview");
  if (pixelSize == 0) {
    overview.innerHTML =
      "No pixel found on " +
      tabURL +
      ". Make sure your pixel code is properly implemented and ad blockers are turned off." +
      " You can review Meta Pixel implementation with your developer. " +
      `<a href="https://www.facebook.com/business/help/952192354843755?id=1205376682832142" style="color: rgb(93, 125, 174); margin-left: 4px; text-decoration: none;">` +
      `<span>Learn more</span></a></span>`;
  } else if (pixelSize == 1) {
    overview.innerHTML = "One pixel found on " + tabURL;
  } else {
    overview.innerHTML = pixelSize + " pixel found on " + tabURL;
  }
}

function bindPopoutWindow() {
  var popOutButton = document.getElementsByClassName("popoutButton");

  popOutButton[0].addEventListener(
    "click",
    function (event) {
      event.stopPropagation();
      // close current popup
      window.close();
      // Place new pop out window on top right corner clientX
      var winObj = {
        url: "popup.html",
        width: window.innerWidth,
        height: window.innerHeight + 22,
        left: event.screenX - window.innerWidth,
        top: event.screenY,
        focused: true,
        type: "popup",
        state: "normal"
      };
      // open a new window for popout
      chrome.windows.create(winObj);
    },
    false
  );
}

function toggleWithIconChange(element) {
  let select = element.nextElementSibling;
  let icon = element.firstElementChild.firstElementChild;
  if (select.style.display === "none") {
    select.style.display = "block";
    icon.src = "/img/less_info_icon.png";
  } else {
    select.style.display = "none";
    icon.src = "/img/more_info_icon.png";
  }
}

function hideShowString(element) {
  let text = element.firstChild;
  if (text.textContent === "Show") {
    text.textContent = "Hide";
  } else {
    text.textContent = "Show";
  }
  // display hide content
  let select = element.parentNode.nextElementSibling;
  if (select.style.display === "none") {
    select.style.display = "block";
  } else {
    select.style.display = "none";
  }
}

function clickToCopy(element) {
  const contentElement = element.firstElementChild.firstElementChild;
  const currentContent = contentElement.textContent;

  const input = document.createElement("input");
  input.value = contentElement.getAttribute("text");
  input.style.display = "fixed"; //avoid scrolling to bottom
  input.style.opacity = 0;
  document.body.appendChild(input);
  input.focus();
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  contentElement.textContent = "Copy to clipboard";
  contentElement.nextElementSibling.style.display = "none";

  setTimeout(() => {
    contentElement.textContent = currentContent;
    contentElement.nextElementSibling.style.display = "inline";
  }, 1500 /* 1.5 seconds */);
}

function bindEventListener() {
  // Bind pixel event toggle actions
  var pixelEventsActions = document.getElementsByClassName("pixelEventsAction");
  for (let i = 0; i < pixelEventsActions.length; i++) {
    pixelEventsActions[i].addEventListener(
      "click",
      function () {
        toggleWithIconChange(this);
      },
      false
    );
  }

  // Bind string hide/show actions
  var stringActions = document.getElementsByClassName("stringsAction");
  for (let i = 0; i < stringActions.length; i++) {
    stringActions[i].addEventListener(
      "click",
      function () {
        hideShowString(this);
      },
      false
    );
  }

  // Bind click to clipboard action
  var copyActions = document.getElementsByClassName("pixelIdDisplay");
  for (let i = 0; i < copyActions.length; i++) {
    copyActions[i].addEventListener(
      "click",
      function () {
        clickToCopy(this);
      },
      false
    );
  }
}

function displayPixelEventString(key, value, isValueHide) {
  let eventString = "<div><span><strong><span>" + key + "</span></strong>: ";
  if (!isValueHide) {
    eventString += "<span>" + value + "</span></span></div>";
  } else {
    eventString +=
      "<a class='hoverLink show stringsAction'><span>Show</span></a></span>" +
      "<div style='display: none;'>" +
      "<span class='blockString'>" +
      value +
      "</span>" +
      "</div>" +
      "</div>";
  }
  return eventString;
}

// The display has order
function displayPixelEventsDetails(pixelEventName, pixelEventInfo) {
  let eventDetails = "";
  // custom data
  if (pixelEventInfo["customData"] && Object.entries(pixelEventInfo["customData"]).length > 0) {
    eventDetails += "<div class='eventInfoTitle'><strong>Custom parameters sent</strong></div>";
    for (const customDataDetail in pixelEventInfo["customData"]) {
      let customDetailDetailAttribute = pixelEventInfo["customData"][customDataDetail]
        ? pixelEventInfo["customData"][customDataDetail]
        : "<em>Not Set</em>";
      eventDetails += displayPixelEventString(customDataDetail, customDetailDetailAttribute, customDetailDetailAttribute.length > 20);
    }
  }
  // pii data
  if (pixelEventInfo["piiData"] && Object.entries(pixelEventInfo["piiData"]).length > 0) {
    eventDetails += "<div class='eventInfoTitle'><strong>ADVANCED MATCHING PARAMETERS SENT</strong></div>";
    for (const piiDetail in pixelEventInfo["piiData"]) {
      const piiDetailDetailAttribute = pixelEventInfo["piiData"][piiDetail];
      eventDetails += displayPixelEventString(piiDetail, piiDetailDetailAttribute, piiDetailDetailAttribute.length > 20);
    }
  }
  // dpo data
  if (pixelEventInfo["dpoData"] && Object.entries(pixelEventInfo["dpoData"]).length > 0) {
    eventDetails += "<div class='eventInfoTitle'><strong>DATA PROCESSING PARAMETERS SENT</strong></div>";
    for (const dpoDetail in pixelEventInfo["dpoData"]) {
      const dpoDetailDetailAttribute = pixelEventInfo["dpoData"][dpoDetail];
      eventDetails += displayPixelEventString(dpoDetail, dpoDetailDetailAttribute, dpoDetailDetailAttribute.length > 20);
    }
    eventDetails +=
      `<span style="display: inline-block; margin-top: 8px;">` +
      `<span>Since Data Processing Options are sent, custom conversions or catalog feedback may not work.</span>` +
      `<a href="https://developers.facebook.com/docs/marketing-apis/data-processing-options" style="color: rgb(93, 125, 174); margin-left: 4px; text-decoration: none;">` +
      `<span>Learn more</span></a></span>`;
  }
  // Warning
  if (pixelEventInfo["status"] === "warning") {
    eventDetails +=
      "<div><div class='eventInfoTitle'><strong>WARNINGS</strong></div>" +
      "<div style='margin: 8px 0px;'>" +
      pixelEventInfo["statusContent"] +
      "</div></div>";
  }

  // event info
  eventDetails += "<div class='eventInfoTitle'><strong>Event Info</strong></div>";

  if (pixelEventInfo["setupMethod"]) {
    eventDetails += displayPixelEventString("Setup Method", pixelEventInfo["setupMethod"]);
  }
  if (pixelEventInfo["urlCalled"]) {
    eventDetails += displayPixelEventString("URL called", pixelEventInfo["urlCalled"], true);
  }
  if (pixelEventInfo["loadTime"]) {
    eventDetails += displayPixelEventString("Load Time", pixelEventInfo["loadTime"]);
  }
  if (pixelEventInfo["pixelCode"]) {
    eventDetails += displayPixelEventString("Pixel Code", pixelEventInfo["pixelCode"], true);
  }
  if (pixelEventInfo["pixelLocation"]) {
    eventDetails += displayPixelEventString("Pixel Location", pixelEventInfo["pixelLocation"], true);
  }
  if (pixelEventInfo["frame"]) {
    // TODO: add frame
    eventDetails += displayPixelEventString("Frame", pixelEventInfo["frame"]);
  }
  if (pixelEventInfo["eventId"]) {
    eventDetails += displayPixelEventString("Event ID", pixelEventInfo["eventId"]);
  }

  return eventDetails;
}

function displayPixelEventsInfoDetails(pixelEventName, pixelEventDetails) {
  let imgAlt = "";
  let pixelEventDisplayLabel = pixelEventName;
  // Get display name
  const lastIndex = pixelEventName.lastIndexOf("-");
  if (lastIndex !== -1 && pixelEventName.substring(lastIndex).match(/[0-9]{9}/)) {
    pixelEventDisplayLabel = pixelEventName.substring(0, lastIndex);
  }
  // Microdata and ButtonClick has special style
  if (pixelEventDisplayLabel === "Microdata" || pixelEventDisplayLabel === "SubscribedButtonClick") {
    imgAlt =
      '<img alt="We\'ve suggested this event category based on the button text and user activity on your website." ' +
      "src='/img/tooltip_info_icon.png' title=\"We've suggested this event category based on the button text and user activity on your website.\" " +
      "class='autoDetect'>";
    pixelEventDisplayLabel =
      pixelEventDisplayLabel === "Microdata" ? "Microdata Automatically Detected" : "Button Click Automatically Detected";
  }

  let pixelEventsDetail =
    "<div>" +
    "<div class='hoverPointer pixelEventsAction'>" +
    "<p class='pixelEventDisplay'>" +
    "<img src='/img/more_info_icon.png' class='pixelEventIconMoreInfo'>" +
    "<img src='/img/" +
    pixelEventDetails["status"] +
    "_icon.png' class='pixelEventIconMoreInfo'>" +
    "<span>" +
    pixelEventDisplayLabel +
    "</span>" +
    imgAlt +
    "</p>" +
    "</div>" +
    "<div style='display: none;'>" + // toggle pixel events details
    "<div class='toggleContainer'>" +
    "<div>" +
    displayPixelEventsDetails(pixelEventName, pixelEventDetails) +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";
  return pixelEventsDetail;
}

function displayPixelEventsInfo(pixelId, pixelEvents) {
  let pixelEventsDisplay = "<div>";
  for (const pixelEvent in pixelEvents) {
    pixelEventsDisplay += displayPixelEventsInfoDetails(pixelEvent, pixelEvents[pixelEvent]);
  }
  pixelEventsDisplay += "</div>";
  return pixelEventsDisplay;
}

function displayPixelInfo(pixelId, pixelEvents, tabURL) {
  const troubleshootLink = "https://www.facebook.com/events_manager2/list/pixel/" + pixelId + "/verify?nav_source=pixel_helper";
  const encodeURL = encodeURIComponent(tabURL);
  const setupEventLink = "https://www.facebook.com/signals/event_setup_tool/" + pixelId + "?url=" + encodeURL; // http%3A%2F%2Fhacksig.run%2F example

  let pixelInfo =
    "<div class='pixelPanelOverviewTitle'>" +
    "<span>Meta Pixel</span>" +
    "<div class='pixelPanelOverviewLinks'>" + // Links for each pixel
    "<a href=" +
    troubleshootLink +
    " class='troubleShootingLink'>Troubleshoot Pixel</a>" +
    "<div class='setupEventsContainer'><a href=" +
    setupEventLink +
    " class='setupEventsLink'><span>Set Up Events</span></a><div class='new'><span>New!</span></div></div>" +
    "</div>" +
    "</div>" +
    "<p class='pixelIdDisplay'><span style='cursor:pointer;'>" +
    "<span text=" +
    pixelId +
    ">Pixel ID: " +
    pixelId +
    "</span>&nbsp;" +
    "<small>click to copy</small></span>" +
    "</p>"; // action click to copy;
  return pixelInfo;
}

function displayPixelPanel(displayContent, tabURL) {
  // outer decoration
  let pixelPanel = "";

  for (const pixelId in displayContent) {
    pixelPanel +=
      "<div class='pixelPanel'>" +
      "<div class='divider'></div>" +
      "<div class='pixelBasis'>" +
      "<div class='divFormate'></div>" +
      "<div class='pixelLogo'><img src='/img/pixel_blue_icon_small.png' style='width: 24px;'></div>" + // logo
      "<div class='pixelMainContainer'>" +
      displayPixelInfo(pixelId, displayContent[pixelId], tabURL) +
      "</div>" +
      "</div>" +
      displayPixelEventsInfo(pixelId, displayContent[pixelId]) + // display all events for current pixelId
      "</div>";
  }
  // console.log("print pixel panel:" + pixelPanel);
  document.getElementById("pixelDisplay").innerHTML = pixelPanel;
}

function displayPopup() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const tabId = tabs[0] ? tabs[0].id : "";
    const tabURL = tabs[0]?.url ? new URL(tabs[0].url).hostname : "";

    chrome.storage.local.get(["pixelHelperDetails"], function (storage) {
      const pixelHelper = storage["pixelHelperDetails"];
      const mainContent = pixelHelper && pixelHelper[tabId] ? pixelHelper[tabId] : {};

      const pixelCount = Object.entries(mainContent).length;
      // Display overview
      displayOverview(pixelCount, tabURL);

      // Bind pop out action
      bindPopoutWindow();

      // Display pixel details
      if (pixelCount > 0) {
        displayPixelPanel(mainContent, tabURL);
        // binding listener
        bindEventListener();
      } else {
        document.getElementById("pixelDisplay").innerHTML = "";
      }
    });
  });
}

// Monitor when data updated, refresh
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.pixelHelperUpdated) {
    displayPopup();
  }
});

// Initial display popup
displayPopup();
