/*! $FileVersion=1.0.112 */
/*
 * COPYRIGHT (c) 2011 MCAFEE INC.  ALL RIGHTS RESERVED.
 */
var g_UID;
var g_path = "sacore:";
var baseUrlScriptElem = document.getElementById("saBaseUrl");
if (typeof baseUrlScriptElem != "undefined" && baseUrlScriptElem) {
  eval(baseUrlScriptElem.innerHTML);
  g_path = saBaseUrl;
}
function trim(b, a) {
  return ltrim(rtrim(b, a), a);
}
function ltrim(b, a) {
  a = a || "\\s";
  return b.replace(new RegExp("^[" + a + "]+", "g"), "");
}
function rtrim(b, a) {
  a = a || "\\s";
  return b.replace(new RegExp("[" + a + "]+$", "g"), "");
}
var FacetImages = {
  green: "" + g_path + "g_facet.gif",
  yellow: "" + g_path + "y_facet.gif",
  red: "" + g_path + "r_facet.gif",
  white: "" + g_path + "empty.gif"
};
var BannerBorder = { green: "#54A411", yellow: "#F0C649", red: "#FF5353", white: "#B9B9B9" };
var DefaultBalloonImages = {
  green: {
    backgroundImages: {
      HEADER_L: "url(" + g_path + "g_header_l.gif)",
      HEADER_C: "url(" + g_path + "g_header_c.gif)",
      HEADER_R: "url(" + g_path + "g_header_r.gif)",
      BANNER_L: "url(" + g_path + "g_banner_l.gif)",
      BANNER_C: "url(" + g_path + "g_banner_c.gif)",
      BANNER_R: "url(" + g_path + "g_banner_r.gif)",
      BANNER_BORDER_L: "url(" + g_path + "g_bottom_l.gif)",
      BANNER_BORDER_R: "url(" + g_path + "g_bottom_r.gif)",
      BOTTOM_L: "url(" + g_path + "g_bottom_l.gif)",
      BOTTOM_C: "url(" + g_path + "g_bottom_c.gif)",
      BOTTOM_R: "url(" + g_path + "g_bottom_r.gif)",
      FOOTER_L: "url(" + g_path + "g_footer_l.gif)",
      FOOTER_C: "url(" + g_path + "g_footer_c.gif)",
      FOOTER_R: "url(" + g_path + "g_footer_r.gif)"
    },
    srcImages: { ICON: "" + g_path + "g_icon.gif", BANNER_SEP: "" + g_path + "g_banner_sep.gif" }
  },
  yellow: {
    backgroundImages: {
      HEADER_L: "url(" + g_path + "y_header_l.gif)",
      HEADER_C: "url(" + g_path + "y_header_c.gif)",
      HEADER_R: "url(" + g_path + "y_header_r.gif)",
      BANNER_L: "url(" + g_path + "y_banner_l.gif)",
      BANNER_C: "url(" + g_path + "y_banner_c.gif)",
      BANNER_R: "url(" + g_path + "y_banner_r.gif)",
      BANNER_BORDER_L: "url(" + g_path + "y_bottom_l.gif)",
      BANNER_BORDER_R: "url(" + g_path + "y_bottom_r.gif)",
      BOTTOM_L: "url(" + g_path + "y_bottom_l.gif)",
      BOTTOM_C: "url(" + g_path + "y_bottom_c.gif)",
      BOTTOM_R: "url(" + g_path + "y_bottom_r.gif)",
      FOOTER_L: "url(" + g_path + "y_footer_l.gif)",
      FOOTER_C: "url(" + g_path + "y_footer_c.gif)",
      FOOTER_R: "url(" + g_path + "y_footer_r.gif)"
    },
    srcImages: { ICON: "" + g_path + "y_icon.gif", BANNER_SEP: "" + g_path + "y_banner_sep.gif" }
  },
  red: {
    backgroundImages: {
      HEADER_L: "url(" + g_path + "r_header_l.gif)",
      HEADER_C: "url(" + g_path + "r_header_c.gif)",
      HEADER_R: "url(" + g_path + "r_header_r.gif)",
      BANNER_L: "url(" + g_path + "r_banner_l.gif)",
      BANNER_C: "url(" + g_path + "r_banner_c.gif)",
      BANNER_R: "url(" + g_path + "r_banner_r.gif)",
      BANNER_BORDER_L: "url(" + g_path + "r_bottom_l.gif)",
      BANNER_BORDER_R: "url(" + g_path + "r_bottom_r.gif)",
      BOTTOM_L: "url(" + g_path + "r_bottom_l.gif)",
      BOTTOM_C: "url(" + g_path + "r_bottom_c.gif)",
      BOTTOM_R: "url(" + g_path + "r_bottom_r.gif)",
      FOOTER_L: "url(" + g_path + "r_footer_l.gif)",
      FOOTER_C: "url(" + g_path + "r_footer_c.gif)",
      FOOTER_R: "url(" + g_path + "r_footer_r.gif)"
    },
    srcImages: { ICON: "" + g_path + "r_icon.gif", BANNER_SEP: "" + g_path + "r_banner_sep.gif" }
  },
  white: {
    backgroundImages: {
      HEADER_L: "url(" + g_path + "w_header_l.gif)",
      HEADER_C: "url(" + g_path + "w_header_c.gif)",
      HEADER_R: "url(" + g_path + "w_header_r.gif)",
      BANNER_L: "url(" + g_path + "w_banner_l.gif)",
      BANNER_C: "url(" + g_path + "w_banner_c.gif)",
      BANNER_R: "url(" + g_path + "w_banner_r.gif)",
      BANNER_BORDER_L: "url(" + g_path + "w_bottom_l.gif)",
      BANNER_BORDER_R: "url(" + g_path + "w_bottom_r.gif)",
      BOTTOM_L: "url(" + g_path + "w_bottom_l.gif)",
      BOTTOM_C: "url(" + g_path + "w_bottom_c.gif)",
      BOTTOM_R: "url(" + g_path + "w_bottom_r.gif)",
      FOOTER_L: "url(" + g_path + "w_footer_l.gif)",
      FOOTER_C: "url(" + g_path + "w_footer_c.gif)",
      FOOTER_R: "url(" + g_path + "w_footer_r.gif)"
    },
    srcImages: { ICON: "" + g_path + "w_icon.gif", BANNER_SEP: "" + g_path + "w_banner_sep.gif" }
  }
};
function LoadImagesByColour(f) {
  var b = DefaultBalloonImages[f].backgroundImages;
  for (var a in b) {
    try {
      document.getElementById(a + g_UID).style.backgroundImage = b[a];
    } catch (d) {}
  }
  var c = DefaultBalloonImages[f].srcImages;
  for (var a in c) {
    try {
      document.getElementById(a + g_UID).innerHTML = "<img alt='' src='" + c[a] + "' style='vertical-align:middle;' />";
    } catch (d) {}
  }
}
function popup(j, g, e, d) {
  var a = j.color;
  var b = popUtil.getSiteReportLink(e, j);
  LoadImagesByColour(a);
  if (j.hackerSafe && a == "green") {
    document.getElementById("ICON" + g_UID).innerHTML = "<img alt='' src='" + g_path + "hs_icon.gif' style='vertical-align:middle;' />";
  }
  var f = document.getElementById("BALLOONLOGO" + g_UID);
  if (typeof e.IsPremium != "undefined" && e.IsPremium) {
    f.innerHTML = "<img alt='' src='" + g_path + "sa-logo-plus.gif' />";
  } else {
    f.innerHTML = "<img alt='' src='" + g_path + "sa-logo.gif' />";
  }
  document.getElementById("SATITLE" + g_UID).innerHTML = j.linkTitleEncoded;
  document.getElementById("DOMAIN" + g_UID).innerHTML = j.domain_specifier;
  var k = document.getElementById("RECOMMENDATION" + g_UID);
  k.innerHTML = j.recommendation;
  k.style.fontSize = "";
  k.style.lineHeight = "";
  for (var c = 0; c < 3; c++) {
    document.getElementById("FACET_IMAGE_" + c + g_UID).innerHTML = "";
    document.getElementById("FACET_RECCOMENDATION_" + c + g_UID).innerHTML = "";
  }
  for (var c = 0; c < g.length && c < 3; c++) {
    document.getElementById("FACET_IMAGE_" + c + g_UID).innerHTML = g[c].imageLink;
    document.getElementById("FACET_RECCOMENDATION_" + c + g_UID).innerHTML = g[c].recommendation[1];
  }
  document.getElementById("BOTTOM_RIGHT" + g_UID).style.visibility = "";
  for (var c = 0; c < 3; c++) {
    document.getElementById("CC_IMAGE_" + c + g_UID).innerHTML = "";
    document.getElementById("CC_DESC_" + c + g_UID).innerHTML = "";
  }
  var i = j.CCList;
  if (typeof i != "undefined" && typeof i[0] != "undefined" && a != "white") {
    document.getElementById("CCHeader" + g_UID).innerHTML = e.CCHeader;
    document.getElementById("CCDesc" + g_UID).innerHTML = typeof e.CCLinkDesc_URL != "undefined" ? e.CCDesc : "";
    document.getElementById("CCDesc" + g_UID).href =
      typeof e.CCLinkDesc_URL != "undefined" && e.CCLinkDesc_URL != "" ? e.CCLinkDesc_URL : "http://www.siteadvisor.com/securesearch/";
    for (var c = 0; typeof i[c] != "undefined" && c < 3; c++) {
      var h = 0;
      for (; h < c; h++) {
        if (i[c]["desc"] == document.getElementById("CC_DESC_" + h + g_UID).innerHTML) {
          break;
        }
      }
      if (h < c) {
        break;
      }
      if (i[c]["desc"].length > 0) {
        document.getElementById("CC_IMAGE_" + c + g_UID).innerHTML = "<img src='" + g_path + "bullet.gif' />";
        document.getElementById("CC_DESC_" + c + g_UID).innerHTML = i[c]["desc"];
      }
    }
    document.getElementById("BOTTOM_SEP" + g_UID).style.borderLeft = "solid 1px Gray";
    document.getElementById("BOTTOM_SEP" + g_UID).style.visibility = "";
  } else {
    if (j.balloonConfig.CCUpsell.length > 0 && a != "white") {
      document.getElementById("CCHeader" + g_UID).innerHTML =
        "<span id='submitsitetxt' class='sastyle_link_upsell'>" + j.balloonConfig.CCUpsell + "</span>";
      document.getElementById("BOTTOM_SEP" + g_UID).style.borderLeft = "solid 1px Gray";
      document.getElementById("CCDesc" + g_UID).innerHTML = "";
    } else {
      document.getElementById("CCHeader" + g_UID).innerHTML = a == "white" ? j.link2 : "";
      document.getElementById("BOTTOM_SEP" + g_UID).style.borderLeft = "solid 0px #dadada";
      document.getElementById("CCDesc" + g_UID).innerHTML = "";
    }
  }
  if (e.upsellInfo.display && typeof e.upsellInfo.message == "string" && trim(e.upsellInfo.message).length > 0) {
    document.getElementById("UPSELL_BORDER" + g_UID).style.borderBottom = "solid 1px #dadada";
    document.getElementById("UPSELL_LINK" + g_UID).innerHTML = trim(e.upsellInfo.message);
    document.getElementById("UPSELL_LINK" + g_UID).href = e.upsellInfo.url;
  } else {
    document.getElementById("UPSELL_BORDER" + g_UID).style.borderBottom = "solid 0px #dadada";
    document.getElementById("UPSELL_BORDER" + g_UID).style.borderLeft = "solid 0px #dadada";
    document.getElementById("UPSELL_LINK" + g_UID).innerHTML = "";
  }
  document.getElementById("DOSSIER_LINK" + g_UID).innerHTML = e.siteReport.linkText;
  document.getElementById("DOSSIER_LINK" + g_UID).href = j.dossierUrl + "&ref=safesearch";
  if (a == "white" && document.getElementById("FACET_IMAGE_0" + g_UID).innerHTML == "") {
    document.getElementById("DOSSIER_LINK" + g_UID).innerHTML = "";
  }
  document.getElementById("BANNER_ROW" + g_UID).style.borderColor = BannerBorder[a];
  if (d && typeof e.HeaderText == "string" && e.HeaderText != "") {
    document.getElementById("HEADER_C" + g_UID).innerHTML = e.HeaderText;
  } else {
    document.getElementById("HEADER_C" + g_UID).innerHTML = "&nbsp;";
  }
}
function PrepareLinks(c, d) {
  var a = popUtil.getSiteReportLink(c, d);
  var b = popUtil.getUpsellLink(c);
  popUtil.populateAnnoItem(c, d, a, b);
  return popUtil.populateFacets(c, d);
}
var FacetList = ["rogue", "download", "personal_info", "ecommerce", "link", "annoyance"];
var TypePriority = { rogue: 0, download: 1, personal_info: 2, ecommerce: 3, link: 4, annoyance: 5 };
var ScorePriority = { WARN: 0, INFO: 1, OK: 2, CERTIFIED: 3, UNKNOWN: 4 };
function FacetTypePrioritySort(d, c) {
  var e = TypePriority[d.name];
  var f = TypePriority[c.name];
  if (e < f) {
    return -1;
  }
  if (e > f) {
    return 1;
  }
  return 0;
}
function FacetPrioritySort(d, c) {
  var e = ScorePriority[d.score];
  var f = ScorePriority[c.score];
  if (e < f) {
    return -1;
  }
  if (e > f) {
    return 1;
  }
  return FacetTypePrioritySort(d, c);
}
function PopUtil() {}
var popUtil = new PopUtil();
PopUtil.prototype.getSiteReportLink = function getSiteReportLink(b, c) {
  var a = b.siteReport.siteReportBaseUrl + c.domain_specifier + "?" + b.siteReport.requestArgs;
  return (
    "<a class='sastyle_link_moreinfo' style='white-space:nowrap;color:#012D6F;padding-right:10px;font-weight:normal' href='" +
    a +
    "' target=_blank>" +
    b.siteReport.linkText +
    "</a>"
  );
};
PopUtil.prototype.displayUpsell = function displayUpsell(a) {
  if (a.upsellInfo.display && typeof a.upsellInfo.message == "string") {
    if (trim(a.upsellInfo.message).length > 0) {
      return true;
    }
  }
  return false;
};
PopUtil.prototype.getUpsellLink = function getUpsellLink(b) {
  var a = "<td style='font-family:sans-serif;font-size:8px;line-height:100%'>&nbsp;</td>";
  if (this.displayUpsell(b)) {
    a =
      "<td colspan=2 align=center><table border='0' cellspacing='0' cellpadding='0' style='table-layout:auto;margin-bottom:10px;margin-left:11px;'><tr><td style='width:2px;height:24px;background:url(" +
      g_path +
      "upsell-l.gif) 0 0 no-repeat;'></td><td class='sastyle_link_upsell' style='cursor:default;height:24px;background:url(" +
      g_path +
      "upsell-m.gif) 0 0 repeat-x;text-decoration:none;white-space:nowrap;color:black;line-height:normal;'><a class='sastyle_link_upsell' style='padding:0 10px;text-decoration:none;font-weight:normal' target='_blank' href='" +
      b.upsellInfo.url +
      "'>" +
      b.upsellInfo.message +
      "</a></td><td style='width:2px;height:24px;background:url(" +
      g_path +
      "upsell-r.gif) 0 0 no-repeat;'></td> </tr></table></td>";
  }
  return a;
};
var ScoreToColor = { OK: "green", CERTIFIED: "green", INFO: "yellow", WARN: "red", UNKNOWN: "white", "": "white" };
PopUtil.prototype.getFacetImage = function getFacetImage(b) {
  var a = "18px";
  return "<img style='font-size:medium;height:" + a + ";' border=0 src='" + b + "'></a>";
};
PopUtil.prototype.populateAnnoItem = function populateAnnoItem(c, d, a, b) {
  d.color = ScoreToColor[d.score];
  if (d.color == "white") {
    d.link1 = "";
    d.link2 = "";
  } else {
    d.link1 = a;
    d.link2 = b;
  }
};
var FacetToPageName = {
  download: "downloads",
  annoyance: "annoyances",
  link: "links",
  personal_info: "email",
  ecommerce: "ecommerce",
  rogue: "rogue",
  "": ""
};
PopUtil.prototype.populateFacets = function populateFacets(c, f) {
  var e = c.siteReport;
  var j, g, h, a;
  var d = [];
  if (typeof f.facets != "object") {
    f.facets = {};
  }
  for (var b in f.facets) {
    f.facets[b].name = b;
    if (f.facets[b].score == "UNKNOWN") {
    } else {
      d.push(f.facets[b]);
    }
  }
  d.sort(FacetPrioritySort);
  for (var i in d) {
    var j = d[i];
    g = FacetImages[ScoreToColor[j.score]];
    h = this.getFacetImage(g);
    a = e.siteReportBaseUrl + f.domain_specifier + "/" + FacetToPageName[j.name] + "?" + e.requestArgs + "&ref=safesearch";
    j.imageLink = "<a href='" + a + "' target='_blank'>" + h + "</a>";
  }
  return d;
};
