/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var pendingDID,
  onChangedEventActivated = !1,
  capResult,
  capLinks,
  capWords,
  clipboardBlobPromise,
  capFilename,
  canBeBetter,
  limitedSavingFunctionality,
  capURL,
  capTitle,
  capCreated,
  canvases = [],
  automaticAction,
  overrideFolder,
  contextId = -1;
const backgroundPage = getBackgroundPage();
window.addEventListener("load", function () {
  async function n() {
    isWindows()
      ? ($("#upgradeLink,#noflashgoadvanced,#noflashgoadvanced2,#noflashgoadvanced3,#divPDFFeatures").removeClass("hiddenInitially"),
        $("#divWinPromo").show(),
        $("#divNonWinPromo").hide())
      : ($("#divWinPromo").hide(), $("#divNonWinPromo").show());
    isOpera()
      ? $("#lnkOperaStore").hide()
      : isEdge()
      ? $("#lnkEdgeNew").hide()
      : isSafari()
      ? $("#lnkSafariStore").hide()
      : isFirefox()
      ? ($("#lnkAmo").hide(), $("#divEmail").hide())
      : $("#lnkChromeStore").hide();
    $("a[href*='APPID']").each(function () {
      this.href = this.href.replace("APPID", getBrowserId());
    });
    $("#lnkProblem, #lnkProblemBetaPreview, #lnkProblemPDF").attr(
      "href",
      "https://getfireshot.com/report-problem.php?u=" +
        btoa(await backgroundPage.capURL) +
        "&browser=" +
        getBrowserId() +
        "&ver=" +
        (await backgroundPage.extVersion) +
        "&d=" +
        btoa(JSON.stringify(await backgroundPage.savedCapParamsForDebugging))
    );
    J();
    const a = await backgroundPage.isProMode();
    $("#btnPDFOptionsForGmail").toggle(a);
    $("#pdfCaret").toggle(!a);
    $("#pdfSettings").toggle(a);
  }
  function K(a) {
    return "png" === a
      ? clipboardBlobPromise || new Promise((b) => capResult.toBlob(b))
      : new Promise((b) => capResult.toBlob(b, "image/jpeg"));
  }
  async function A() {
    v(
      () =>
        new Promise(async (a) => {
          (await backgroundPage.isProMode())
            ? (gaTrack("UA-1025658-9", "fireshot.com", "PDF-Pro-Created"), a(B()))
            : a(new fsPDF(capResult, capLinks, capTitle).toBlob());
        }),
      capFilename + ".pdf"
    );
  }
  async function C() {
    const a = f(cDefaultImageFormatPref, "png");
    v(
      () =>
        new Promise((b) => {
          if (isSafari() && "png" === a) {
            const e = document.createElement("canvas");
            e.width = capResult.width;
            e.height = capResult.height;
            const d = () => {
              0 >= e.height && b(null);
              try {
                e.getContext("2d", { alpha: !1 }).drawImage(capResult, 0, 0);
              } catch (g) {
                e.height -= 5e3;
                d();
                return;
              }
              e.toBlob((g) => {
                g ? b(g) : ((e.height -= 5e3), d());
              }, "image/png");
            };
            d();
          } else b(K(a));
        }),
      capFilename + "." + a
    );
  }
  function L() {
    $("#lnkOptions, #btnOptions").click(async () => await backgroundPage.openExtensionPreferences());
    $("#advancedInstructionsPreDialog").on("hidden.bs.modal", async () => await backgroundPage.installPro());
    $(
      "#lnkInstallAdvancedTop-1, #lnkInstallAdvancedTop-2, #lnkUpgradeFromPDF, #lnkInstallAdvanced, #lnkInstallAdvanced1, #lnkInstallAdvancedClipboardDlg"
    ).click(function () {
      isWindows() ? $("#advancedInstructionsPreDialog").modal() : (activateBetaPreview(), n());
      return !1;
    });
    $("#btnCloseAlert1").click(function () {
      m("showAlert1", 0);
    });
    $("#btnSaveImage").click(C);
    $("#btnSaveImagePDF").click(A);
    $("#btnSendEmail")
      .find("li")
      .click(function () {
        p();
        M($(this).attr("value"));
      });
    $("#btnClipboard").click(N);
    $("#btnPrint").click(function () {
      O();
      p();
    });
    $("#lnkPdfSettings").click((a) => {
      a.stopPropagation();
      w();
    });
    $("#pdfCaret").click((a) => {
      a.stopPropagation();
      $("#ddControl").dropdown("toggle");
    });
    $("#menuPDFFeatures")
      .find("li")
      .click((a) => {
        a.stopPropagation();
        a = document.getElementById("menuPDFFeatures").getBoundingClientRect();
        $("#divUpgradeMsg").css({ "min-width": a.width + "px", height: a.height + "px" });
        $("#divUpgradeMsg").fadeIn(200);
        return !1;
      });
    $("#menuPDFFeatures")
      .parent()
      .on("hide.bs.dropdown", () => $("#divUpgradeMsg").hide());
    $("#btnCloseAdvancedTopMsg").click(() => {
      m(cCanBeCapturedBetterNexPref, new Date().getTime() + 864e6);
      $("#divCanBeBetterPromo").fadeOut(300);
    });
    $("#btnCloseAdvertising").click(() => {
      $("#divAdvertising").hide();
    });
    $("#lnkAdPromo").click(() => openURL("#"));
    $("#lnkTest1").click(() => {});
    $("#lnkTest2").click(() => {});
    $("#lnkTest3").click(() => {});
    $("#btnHidePreviewWarning").click(() => {
      m(cBetaPreviewWarningExpanded, !1);
      n();
      return !1;
    });
    $("#divPreviewWarning").click(() => {
      m(cBetaPreviewWarningExpanded, !0);
      n();
    });
    $("#lnkDisableBetaPreview").click(() => {
      m(cPluginProModePref, "false");
      n();
      setTimeout(() => $("#divBackToLiteWarning").fadeIn(300), 300);
      setTimeout(() => $("#divBackToLiteWarning").fadeOut(900), 4e3);
      gaTrack("UA-1025658-9", "fireshot.com", "BetaPreviewCanceled");
    });
    $("#btnEnableBetaPreview, #btnEnableBetaPreview-1, #btnEnableBetaPreview-2").click(() => {
      activateBetaPreview();
      setTimeout(n, 200);
    });
    $("#btnPDFOptionsForGmail").click(() => {
      w();
      return !1;
    });
    $("#lnkBetaProgramConditions, #lnkBetaProgramConditions-1").click(() => {
      openBetaPreviewConditionsPage();
      return !1;
    });
    $("#btnCompactBPPromo, #lnkExpandBPPromo").click((a) => {
      m(cBetaPreviewCompactMode, "btnCompactBPPromo" === a.currentTarget.id);
      n();
    });
    $("#lnkRemoveAdv").click(P);
    $("#btnPurchaseFromAdvPro").click(() => doRegister("removeAds"));
    isSafari() &&
      $('a[target="_blank"]').click(function () {
        if ($(this).attr("href") && "#" !== $(this).attr("href")) return window.open($(this).attr("href")), !1;
      });
    $("#lnkBuyPro").click(() => {
      doRegister();
      return !1;
    });
    $("#spnOpenInFinder").click((a) => {
      highlightLastCreatedFileSafari();
      a.stopPropagation();
    });
    $("#divDownloadedInfoText").click(openLastCreatedFileSafari);
  }
  async function D() {
    return !isWindows() && (await backgroundPage.isProMode()) && !(await backgroundPage.isRegistered());
  }
  async function J() {
    const a = "true" === f(cBetaPreviewWarningExpanded, "true");
    (await D())
      ? ($("#divPreviewWarning").removeClass("hiddenInitially"),
        $("#divCanBeBetterPromo, #divLimitedSavingFunctionality").hide(),
        a ? $("#divPreviewWarning").removeClass("warningCollapsed") : $("#divPreviewWarning").addClass("warningCollapsed"))
      : $("#divPreviewWarning").addClass("hiddenInitially");
    (isWindows() || (await backgroundPage.isProMode())) && $("#divBetaPromo").addClass("hiddenInitially");
    "true" === f(cBetaPreviewCompactMode)
      ? ($("#divBPFull").slideUp(300), $("#divBPBrief").slideDown(300))
      : ($("#divBPBrief").hide(), $("#divBPFull").slideDown(300));
  }
  function w() {
    gaTrack("UA-1025658-9", "fireshot.com", "PDF-Pro-Settings");
    return new Promise((a) => {
      PDFDialog.templateVars = new (function (b, e, d, g, c) {
        return { title: b, URL: e, created: d, extents: { cx: g, cy: c } };
      })(capTitle, capURL, capCreated, capResult.width, capResult.height);
      PDFDialog.show(!1).then((b) => {
        b && m(cPDFOptionsEverDisplayed, "true");
        a(b);
      });
    });
  }
  function B() {
    return automaticAction || "false" !== f(cPDFOptionsEverDisplayed, "false") ? E(!1) : w().then((a) => (a ? E(!1) : void 0));
  }
  function p() {
    (automaticAction || "true" === f(cCloseTabAfterSaving)) && chrome.tabs.getCurrent((a) => chrome.tabs.remove(a.id));
  }
  async function O() {
    let a = document.getElementById("divImgResult").cloneNode(!0);
    a.id = "divPrinting";
    $(a).removeClass();
    if (!(await backgroundPage.isProMode())) for (; 1 < a.childNodes.length; ) a.removeChild(a.childNodes[a.childNodes.length - 1]);
    $(a).children("img").removeClass().addClass("imgForPrinting");
    $("body").children("div").addClass("noPrint");
    document.body.appendChild(a);
    print();
    document.body.removeChild(a);
    $("body").children("div").removeClass("noPrint");
  }
  function x() {
    $("#divErrorMessage").slideDown(200);
  }
  function N() {
    isFirefox()
      ? browser.permissions
          .request({ permissions: ["clipboardWrite"] })
          .then(() => clipboardBlobPromise)
          .then((a) => a.arrayBuffer())
          .then((a) => {
            browser.clipboard.setImageData(a, "png");
          })
          .then(() => {
            $("#divClipboardMessage").slideDown(200);
            setTimeout(() => $("#divClipboardMessage").slideUp(100), 2e3);
            p();
          })
          .catch((a) => {
            getConsolePtr()(a);
            $("#modalCopyToClipboard").modal();
          })
      : clipboardBlobPromise
          .then((a) => {
            a = new ClipboardItem(Object.defineProperty({}, a.type, { value: a, enumerable: !0 }));
            return navigator.clipboard.write([a]);
          })
          .then(() => {
            $("#divDownloadedInfo").slideUp(10);
            $("#divClipboardMessage").slideDown(200);
            setTimeout(() => $("#divClipboardMessage").slideUp(100), 2e3);
            "true" === f(cCloseTabAfterSaving) && setTimeout(p, 500);
          })
          .catch((a) => {
            getConsolePtr()(a);
            $("#modalCopyToClipboard").modal();
          });
  }
  async function M(a) {
    var b = a;
    switch (a) {
      case "png":
        a = capResult.toDataURL("image/png");
        break;
      case "jpg":
        a = capResult.toDataURL("image/jpeg");
        break;
      default:
        if (await backgroundPage.isProMode()) {
          const d = await B();
          if (!d || 0 === d.size) {
            x();
            return;
          }
          a = await new Promise((g) => {
            const c = new FileReader();
            c.onloadend = () => {
              g(c.result);
            };
            c.readAsDataURL(d);
          });
        } else a = new fsPDF(capResult, capLinks).toDataURL();
        b = "pdf";
    }
    var e = {
      to: "",
      subject: "Screenshots from FireShot",
      files: [{ inline: "no", name: encodeURIComponent(capFilename + "." + b), data: a }]
    };
    setTimeout(async () => await backgroundPage.openInGmail(JSON.stringify(e)), 200);
  }
  function Q(a, b, e) {
    a()
      .then((d) => {
        if (d && 0 !== d.size) return blobToBase64(d);
        x();
      })
      .then((d) => {
        if (d) {
          var g = {
            topic: "saveFile",
            data: d,
            dialog: String(!automaticAction && "true" !== f(cNoFilenamePromptPref)),
            filename: e,
            subfolder: b,
            openFolder: String(!automaticAction && "true" === f(cOpenFolderAterSavingPref)),
            extension: "pdf"
          };
          getConsolePtr()(`b64 encoded data size is: ${d.length} bytes`);
          backgroundPage.sendNativeMessageSafari(g, async (c) => {
            "true" === c.success &&
              (automaticAction
                ? await backgroundPage.fileSavedCallback(contextId, 1)
                : ($("#divDownloadedInfoFilename").text(decodeURI(c.file.substring(c.file.lastIndexOf("/") + 1, c.file.length))),
                  $("#divDownloadedInfo").slideUp(100).slideDown(200)),
              p());
          });
        }
      });
  }
  function v(a, b, e) {
    let d = /^\/*(.*?)\/*$/g.exec(f(cDefaultFolderPref, cDefaultFolderValue))[1];
    "" !== d && (d += "/");
    automaticAction && overrideFolder && (d += decodeURI(overrideFolder) + "/");
    isSafari()
      ? Q(a, d, b)
      : addDownloadsPermission(async () => {
          onChangedEventActivated ||
            ((onChangedEventActivated = !0),
            chrome.downloads.onChanged.addListener(async (g) => {
              pendingDID &&
                g.state &&
                "complete" == g.state.current &&
                pendingDID == g.id &&
                (automaticAction
                  ? await backgroundPage.fileSavedCallback(contextId, pendingDID)
                  : "true" === f(cOpenFolderAterSavingPref) && chrome.downloads.show(pendingDID),
                p());
            }));
          a().then(async (g) => {
            g && 0 !== g.size
              ? (await backgroundPage.removeDeterminingFilenameHandler(),
                await backgroundPage.addOnDeterminingFilenameHandler(e ? b : d + b),
                chrome.downloads.download(
                  {
                    url: URL.createObjectURL(g),
                    saveAs: !automaticAction && "true" !== f(cNoFilenamePromptPref),
                    filename: isFirefox() ? d + b : void 0,
                    conflictAction: "overwrite"
                  },
                  (c) => {
                    chrome.runtime.lastError ? e || isFirefox() || v(a, b, !0) : (pendingDID = c);
                  }
                ))
              : x();
          });
        });
  }
  async function R() {
    openURL("https://getfireshot.com/like.php?browser=" + getBrowserId() + "&ver=" + (await backgroundPage.extVersion));
  }
  function S() {
    $("#btnLike #btnDislike").unbind();
    $("#btnLike").click(function () {
      m(cLikedPref, "true");
      $("#divLikeMessage").hide();
      F();
    });
    $("#btnDislike").click(function () {
      m(cLikedPref, "false");
      $("#divLikeMessage").slideUp(100);
    });
    setTimeout(function () {
      $("#divLikeMessage").slideDown(300);
    }, 2e3);
  }
  function T() {
    return parseInt(f(cCanBeCapturedBetterNexPref, "0")) <= new Date().getTime()
      ? (setTimeout(() => $("#divCanBeBetterPromo").slideDown(300), isDebug ? 0 : 2e3), !0)
      : !1;
  }
  function U() {
    setTimeout(() => $("#divLimitedSavingFunctionality").slideDown(300), isDebug ? 0 : 2e3);
    return !0;
  }
  async function V() {
    new Date().getTime() > f(cNextAdShown, 0) &&
      (!(await backgroundPage.isProMode()) || (await D())) &&
      ((document.getElementById("iframeAdv").src = "https://ssl.getfireshot.com/carbon/index.html"),
      window.addEventListener(
        "message",
        (a) => {
          switch (a.data.msg) {
            case "loaded":
              gaTrack("UA-1025658-9", "Ads", "AdLoaded");
              $("#divAdv,#divAdvHelper").removeClass("hiddenInitially");
              $("#pageHeader").addClass("hiddenWhenAdShown");
              break;
            case "logAction":
              m(cNextAdShown, new Date().getTime() + a.data.id);
              break;
            case "logClicked":
              gaTrack("UA-1025658-9", "Ads", "AdClicked");
          }
        },
        !1
      ));
  }
  function P() {
    $(isMac() ? "#adv-noads-feature" : "#adv-edit-feature").removeClass("hiddenInitially");
    $("#proPromoFromAdvertising").modal();
  }
  function F() {
    $("#btnRate #btnRateLater").unbind();
    $("#btnRate").click(function () {
      m(cRatedPref, "true");
      $("#divSendReview").slideUp(100);
      R();
    });
    $("#btnRateLater").click(function () {
      $("#divSendReview").slideUp(100);
    });
    setTimeout(function () {
      $("#divSendReview").slideDown(300);
    }, 200);
  }
  function W() {
    if (isWindows() && "" !== f(cPluginProModePref, "") && "" === f("showAlert1", ""))
      setTimeout(function () {
        $("#divAlert1").fadeIn(700);
      }, 1e3);
    else {
      var a = "true" === f(cLikedPref, ""),
        b = "" !== f(cLikedPref, ""),
        e = "true" === f(cRatedPref, "false"),
        d = parseInt(f(cResultPageShownCntrPref, 0));
      !b && 10 < d ? S() : a && !e && 0 === d % 50 && F();
    }
  }
  async function X() {
    function a() {
      let c = document.getElementById("divImgResult"),
        l = c.getClientRects()[0],
        h = document.getElementById("divPanel").getClientRects()[0];
      l &&
        (l.y + l.height < h.y
          ? ($("#divImgResult").height($("#divPanel").height()),
            $("#divImgResult").css("overflow-y", c.clientHeight < c.scrollHeight ? "scroll" : "hidden"),
            $("#divPanel").width($("#divImgResult").width()))
          : ($("#divImgResult").height("auto"), $("#divPanel").width($("#divContainer").width() - $("#divImgResult").width() - 40)),
        capResult.width < $(c).width() - 20
          ? ($("canvas.canvasCell").css("width", "auto"),
            $("#divImgResult").css("overflow-y", c.clientHeight < c.scrollHeight ? "scroll" : "hidden"),
            (c.style.zoom = 1.0000001),
            setTimeout(function () {
              c.style.zoom = 1;
            }, 50))
          : c.clientHeight >= c.scrollHeight &&
            ($(c).css("overflow-y", "hidden"),
            $("canvas.canvasCell").css("width", ""),
            (c.style.zoom = 1.0000001),
            setTimeout(function () {
              c.style.zoom = 1;
            }, 50)));
    }
    var b = 0 === f(cTemplateNumberPref, 1) % 5;
    setTimeout(
      function () {
        $("#lnkSiteIndex").addClass("splashIn");
      },
      b ? 1800 : 1e3
    );
    (await backgroundPage.isProMode()) ||
      (limitedSavingFunctionality
        ? U()
        : (canBeBetter && T()) ||
          (isWindows()
            ? b
              ? setTimeout(() => $("#divPromo").slideDown(300), 1e3)
              : $("#divPromo").show()
            : $("#divBetaPromo").removeClass("hiddenInitially")));
    document.title = capFilename;
    window.addEventListener("resize", debounce(a));
    window.addEventListener(
      "scroll",
      debounce(function () {
        $("#divLeftCol").offset().top - 15 < window.scrollY &&
        $("#divImgResult").height() > $("#divPanel").height() &&
        $("#divPanel").height() < window.innerHeight
          ? ($("#divPanel").addClass("fixed"), $("#divPanel").css({ top: "15px" }))
          : $("#divPanel").removeClass("fixed");
      })
    );
    let e = [],
      d = !1;
    const g = (c) =>
      new Promise((l) => {
        if (d) l();
        else {
          var h = new Image();
          h.className = "canvasCell";
          h.onload = l;
          document.getElementById("divImgResult").appendChild(h);
          isSafari() || isFirefox()
            ? c.toBlob((t) => {
                t ? (h.src = URL.createObjectURL(t)) : ((h.src = "/images/not-available.png"), (d = !0));
              }, "image/jpeg")
            : (l = c.toDataURL("image/jpeg")) && 0 < l.length
            ? (h.src = l)
            : ((h.src = "/images/not-available.png"), (d = !0));
        }
      });
    capBitmaps.forEach((c) => e.push(g(c.canvas)));
    isDebug && console.time("pageInit");
    Promise.all(e).then(() => {
      const c = document.getElementById("divImgResult");
      if (d) {
        let l = !1;
        [...c.childNodes].filter((h) => (/not-available/.test(h.src) && !l ? ((l = !0), !1) : !0)).forEach((h) => c.removeChild(h));
      }
      0 < c.childNodes.length && (c.childNodes[0].id = "imgResult");
      isDebug && console.timeEnd("pageInit");
      setTimeout(a, 10);
      $("#divPreload").hide();
      $("#divContainer").show();
      $("#divPreviewWarningContainer").show();
    });
  }
  function E(a) {
    function b(e) {
      ProgressBar.percentage = e;
      automaticAction && (document.title = `[${Math.round(e)}%] ${chrome.i18n.getMessage("label_processing")}`);
    }
    return new Promise((e) => {
      const d = capBitmaps.reduce((k, y) => k + y.canvas.height, 0),
        g = capBitmaps[0].canvas.width;
      2 < d / 1500 && (b(0), (ProgressBar.visible = !0));
      const c = f("pdfSettings" + (a ? "multi" : "")),
        l = f("header"),
        h = f("footer"),
        t = f("watermark");
      let G = 0,
        H = 0;
      b(5);
      let I;
      createWorker(`scripts/enc/fsWorker.js?ratio=${window.devicePixelRatio}`, (k) => {
        "blitDone" == k.data.message
          ? (H++, b(Math.round(20 + (80 * H) / G)))
          : "completed" == k.data.message
          ? ((ProgressBar.visible = !1),
            isDebug && console.timeEnd("pdf"),
            k.data.result && !k.data.result.size && gaTrack("UA-1025658-9", "fireshot.com", "PDF-Pro-Wrong-Size"),
            e(k.data.result),
            I.postMessage({ message: "terminate" }))
          : "dumpBitmap" == k.data.message && e(k.data.result);
      }).then((k) => {
        I = k;
        isDebug && console.time("pdf");
        k.postMessage({
          message: "init",
          width: g,
          height: d,
          URL: capURL,
          title: capTitle,
          created: capCreated,
          pdfSettings: c,
          headerSettings: l,
          footerSettings: h,
          wmSettings: t
        });
        capBitmaps.forEach((z) => {
          const q = z.canvas,
            Y = q.getContext("2d", { alpha: !1 });
          let r = 0;
          for (; r < q.height; ) {
            const u = Math.min(1500, q.height - r);
            let Z = Y.getImageData(0, r, q.width, u);
            k.postMessage({
              message: "blit",
              dstX: 0,
              dstY: z.y + r,
              dstW: q.width,
              dstH: u,
              imageData: Z.data,
              bufWidth: q.width,
              bufHeight: u,
              srcX: 0,
              srcY: 0
            });
            r += u;
            ++G;
            b(Math.round(5 + (r / d) * 15));
          }
          automaticAction && (z.canvas = 1);
        });
        const y = JSON.stringify({ links: capLinks, words: capWords });
        k.postMessage({ message: "addExtras", metadata: y });
        k.postMessage({ message: "finalize" });
      });
    });
  }
  const f = isFirefox() ? getOption : backgroundPage.getOption,
    m = isFirefox() ? setOption : backgroundPage.setOption;
  fsPreferences.init(async function () {
    try {
      i18nPrepare();
    } catch (b) {
      logError(b.message);
    }
    const a = new URLSearchParams(window.location.search);
    automaticAction = parseInt(a.get("action"));
    overrideFolder = a.get("folder");
    contextId = parseInt(a.get("context"));
    m(cResultPageShownCntrPref, parseInt(f(cResultPageShownCntrPref, 0)) + 1);
    capURL = await backgroundPage.capURL;
    capTitle = await backgroundPage.capTitle;
    capLinks = (await backgroundPage.capLinks) || [];
    capWords = (await backgroundPage.capWords) || [];
    try {
      capBitmaps = [...(await backgroundPage.capBitmaps)];
    } catch (b) {
      window.close();
      return;
    }
    capResult = capBitmaps[0]?.canvas;
    capCreated = new Date();
    capFilename = await backgroundPage.getFilenameLite();
    if (automaticAction)
      switch (
        ($("#divPreload").hide(),
        (document.title = chrome.i18n.getMessage("label_processing")),
        getConsolePtr()(`Performing automatic action: ${automaticAction}`),
        automaticAction)
      ) {
        case cActionSavePDF:
          A();
          break;
        case cActionSave:
          C();
      }
    else
      (canBeBetter = await backgroundPage.canBeBetter),
        (limitedSavingFunctionality = 1 < capBitmaps.length),
        (clipboardBlobPromise = new Promise((b) => capResult.toBlob(b))),
        n(),
        L(),
        await X(),
        W(),
        V();
  });
});
