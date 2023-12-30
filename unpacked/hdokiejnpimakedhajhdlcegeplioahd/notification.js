function addStyle(e) {
  var t, t, e, e;
  g_ischrome && e
    ? (((t = document.createElement("link")).rel = "stylesheet"), (t.href = "notification.css"))
    : ((t = document.createElement("style")),
      (e = "float: none; width: 100%;" + g_webkit_selectable),
      (e = document.createTextNode(
        " #lastpass-notification { padding: 7px 10px !important;text-align: left;position: relative;font-weight:bold;font-family:Helvetica Neue,Helvetica,Arial,Sans-serif;font-size: 11px;z-index: 1000000099;color: black;vertical-align: top; float: none;} #lastpass-content {display: inline;  padding-left: 5px;vertical-align: top;text-align: left; " +
          e +
          " font-family: Helvetica Neue,Helvetica,Arial,sans-serif;font-size: 11px;} .lppopup {position: absolute;-webkit-border-radius: 0px 0px 5px 5px;border-radius: 0px 0px 5px 5px;-webkit-box-shadow: 2px 3px 10px 2px #a6a6a6;box-shadow: 2px 3px 10px 2px #a6a6a6;z-index: 99999;background: #fff;overflow: auto;x: 0px;y: 0px;width: 300px;height: 200px;display: none;} .lppopup table {float:none; display:table; margin: 0px; padding: 0px; border-spacing: 1px;} .lppopup tr:hover {background: -webkit-linear-gradient(top, rgba(214,249,255,1) 0%,rgba(158,232,250,1) 100%);background: -o-linear-gradient(top, rgba(214,249,255,1) 0%,rgba(158,232,250,1) 100%);background: -moz-linear-gradient(top, rgba(214,249,255,1) 0%,rgba(158,232,250,1) 100%);} .lppopup tr {" +
          g_webkit_selectable +
          "background-color: #fff; height: 22px;} .lppopup td {" +
          g_webkit_selectable +
          "font-size: 11px;font-family: Helvetica Neue,Helvetica,Arial,sans-serif;color: black;cursor: pointer;} .lppopupextended {position: absolute;-webkit-border-radius: 0px 0px 5px 5px;border-radius: 0px 0px 5px 5px;-webkit-box-shadow: 2px 3px 10px 2px #a6a6a6;box-shadow: 2px 3px 10px 2px #a6a6a6;z-index: 99999;background: #fff;x: 0px;y: 0px;width: 410px;height: 200px;display: none; overflow-x:hidden;} .lppopupextended table {float:none; display:table; margin: 0px; padding: 0px; border-spacing: 1px; overflow-x:hidden;} .lppopupextended tr {" +
          g_webkit_selectable +
          "background-color: #fff; height: 22px; overflow-x:hidden;} .lppopupextended td {" +
          g_webkit_selectable +
          "font-size: 11px;font-family: Helvetica Neue,Helvetica,Arial,sans-serif;color: black;cursor: pointer; white-space:normal; overflow-x:hidden; } .lppopupextended th {" +
          g_webkit_selectable +
          "font-size: 11px;font-family: Helvetica Neue,Helvetica,Arial,sans-serif;color: black;background-color: #ececec;cursor: pointer; height: 16px;} .sortable tr:hover {background: -webkit-linear-gradient(top, rgba(214,249,255,1) 0%,rgba(158,232,250,1) 100%);background: -o-linear-gradient(top, rgba(214,249,255,1) 0%,rgba(158,232,250,1) 100%);} .lpopupsearchbox {" +
          g_webkit_selectable +
          "background-color: #fff; height: 22px;} .lpopupsearchbox:hover {" +
          g_webkit_selectable +
          'background-color: #fff; height: 22px;} .lpbutton,#lastpass-notification button[type="button"] {background-color: #eeeeee;background-image: -webkit-gradient(linear, left top, left bottom, from(#eeeeee), to(#cccccc));background-image: -webkit-linear-gradient(top, #eeeeee, #cccccc);background-image: -o-linear-gradient(top, #eeeeee, #cccccc);background-image: linear-gradient(top, #eeeeee, #cccccc);border: 1px solid #ccc;border-bottom: 1px solid #bbb;-webkit-border-radius: 3px;border-radius: 3px;color: #333;line-height: 1;font-weight:bold;text-align: center;text-shadow: 0 1px 0 #eee;width: auto;float: right; margin: -2px 5px 2px 2px; height:17px;padding:1px 6px !important;} .lpbutton:hover,#lastpass-notification button[type="button"]:hover {background-color: #dddddd; background-image: -webkit-gradient(linear, left top, left bottom, from(#dddddd), to(#bbbbbb)); background-image: -webkit-linear-gradient(top, #dddddd, #bbbbbb);-o-linear-gradient(top, #dddddd, #bbbbbb); border: 1px solid #bbb; border-bottom: 1px solid #999; cursor: pointer; text-shadow: 0 1px 0 #ddd;} #lastpass-notification img {margin: 0px 0px 0px 0px;padding: 0px 0px 3px 0px;} .lpbutton40 { border-radius:4px; text-align:center; vertical-align: top; padding: 2px 8px !important; background-color: #ffffff !important; box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.20); height: 26px !important; -webkit-border-radius: 4px; -webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.20); background-image: none !important; } .lptext40 { font-family: "Open Sans",Arial,sans-serif !important; font-size:15px !important; } '
      )),
      t.appendChild(e)),
    (t.type = "text/css"),
    (document.head || document.body).appendChild(t);
}
function get_notification_bg() {
  return g_40notify
    ? g_40colors.notify
    : "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAJYCAYAAABIPDecAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUWEftzcEKwjAQhOEIfUHfzJNHX07wYKuHkiDYbGJJMhZS8Ozh39PHzLI7nM6X2a0zeB9cwfR8VIzj/VAQQqtijDUxMyGqsgrTTtyqqGrpkj3Wy987XZJ00FJqSVKlJOfcwbXZMN2uRyUmLMJL8MIshN3OWyjvfz0FAAAAAAAAAAAAAAD8DT79ZmFeaJNdcgAAAABJRU5ErkJggg==')";
}
function get_notification_add_bg() {
  return g_40notify
    ? g_40colors.notify
    : "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAJYCAYAAABIPDecAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALJJREFUWIXtzrttQ0EMRNG7AKt1G2pBLbgF9+BG7ECBoAcYFrxLjoIVIzXgYBgdEPxMnD++JSCO3wSJuB4TBsTlmIwxiPs9gUFUgihiVe2OBCAiMwGIaqgmEkStv32n1uyt1cNzI9fzKdV3tHaeXJMBBEokEVW5n6pqD6PuZCIgGDAkgh2REOwYn+9vp70Fs/HTuDUuja+Xzu1la99R/+JZhmEYhmEYhmEYhmEYhmH8QzwALjFuWzeeKlAAAAAASUVORK5CYII=')";
}
function get_notification_error_bg() {
  return g_40notify
    ? g_40colors.error
    : "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAJYCAYAAABIPDecAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAINJREFUWMPtz0EKAjEMheEIBW/h+byKF/QSLtSKzCBOok58HWTo3sWf1cdLSpNy3O7c3lXGCJtxsylxdU9UJQ/LKpPFZobHkiRcM75OwlYz7bn3Wg0R0W31kwbTPoeo+2+Sh30wCnfhIpyEs1CFQXj+bmjLpwAAAAAAAAAAAAAAgH/DC5OFQV7fXlzwAAAAAElFTkSuQmCC')";
}
function showMenuScript() {
  return "function lpshowmenudiv(id){   closelpmenus(id);   var div = document.getElementById('lppopup'+id);   var btn = document.getElementById('lp'+id);   if(btn && div){     var btnstyle = window.getComputedStyle(btn, null);     var divstyle = window.getComputedStyle(div, null);     var posx = btn.offsetLeft;     posx -= 80;     var divwidth = parseInt(divstyle.getPropertyValue('width'));     if(posx + divwidth > window.innerWidth - 25){       posx -= ((posx + divwidth) - window.innerWidth + 25);     }     div.style.left = posx + \"px\";     div.style.top = (btn.offsetTop + parseInt(btnstyle.getPropertyValue('height'))) + \"px\";         if(div.style.display=='block'){div.style.display = 'none'; if(typeof(slideup)=='function'){slideup();} }    else div.style.display = 'block';       } }function closelpmenus(id){   if(typeof(lpgblmenus)!='undefined'){     for(var i=0; i < lpgblmenus.length; i++){       if((id==null || lpgblmenus[i]!='lppopup'+id) && document.getElementById(lpgblmenus[i]))         document.getElementById(lpgblmenus[i]).style.display = 'none';     }   }} var lpcustomEvent = document.createEvent('Event'); lpcustomEvent.initEvent('lpCustomEventMenu', true, true); ";
}
function showExtTableScript() {
  return "function lpshowmenudiv(id){   closelpmenus(id);   var div = document.getElementById('lppopup'+id);   var btn = document.getElementById('lp'+id);   if(btn && div){     var btnstyle = window.getComputedStyle(btn, null);     var divstyle = window.getComputedStyle(div, null);     var posx = btn.offsetLeft;     posx -= 80;     var divwidth = parseInt(divstyle.getPropertyValue('width'));     if(posx + divwidth > window.innerWidth - 25){       posx -= ((posx + divwidth) - window.innerWidth + 25);     }     div.style.left = posx + \"px\";     div.style.top = (btn.offsetTop + parseInt(btnstyle.getPropertyValue('height'))) + \"px\";         if(div.style.display=='block'){div.style.display = 'none'; if(typeof(slideup)=='function'){slideup();} }    else div.style.display = 'block';     if(id == 'autofill' || id == 'autologin') {       var box = document.getElementById(id+'tabsearchbox');       if (box != null && (typeof(box.focus) != 'undefined')) { box.focus(); }     }   } }function closelpmenus(id){   if(typeof(lpgblmenus)!='undefined'){     for(var i=0; i < lpgblmenus.length; i++){       if((id==null || lpgblmenus[i]!='lppopup'+id) && document.getElementById(lpgblmenus[i]))         document.getElementById(lpgblmenus[i]).style.display = 'none';     }   }} function chk_should_close_exttable(event) {   var dont_close_on_me=[       'autologintab', 'autologintabfooter', 'autologintabheader', 'autologintabsearchlabel',       'autofilltab', 'autofilltabfooter', 'autofilltabheader', 'autofilltabsearchlabel',       'fillformtab', 'fillformtabfooter', 'fillformtabheader', 'fillformtabsearchlabel',       'sorttable_sortrevind', 'sorttable_sortfwdind'];   var tid=null;   var ptid=null;   if (typeof(event.target) != 'undefined') {     tid=event.target.id;     if (typeof(event.target.parentElement) != 'undefined' && event.target.parentElement != null) {       ptid=event.target.parentElement.id;     }   }   var foundit=false;   for (var x in dont_close_on_me) {     if ((tid != null) && (tid == dont_close_on_me[x])) {       foundit=true;       break;     }     if ((ptid != null) && (ptid == dont_close_on_me[x])) {       foundit=true;       break;     }   }   return !foundit; } var lpcustomEvent = document.createEvent('Event'); lpcustomEvent.initEvent('lpCustomEventMenu', true, true); ";
}
function lpPrepareCustomJS(e, t, l, o, i, n) {
  var r,
    r,
    t =
      ("3" == o &&
        n &&
        (-1 != e.indexOf("lpcurruser") &&
          (n.getElementById("lpcurruserelt") ||
            (n.body &&
              (((r = n.createElement("input")).style.display = "none"),
              r.setAttribute("type", "text"),
              r.setAttribute("id", "lpcurruserelt"),
              r.setAttribute("value", ""),
              r.setAttribute("aria-hidden", "true"),
              n.body.appendChild(r))),
          n.getElementById("lpcurruserelt")) &&
          (n.getElementById("lpcurruserelt").value = t),
        -1 != e.indexOf("lpcurrpass")) &&
        (n.getElementById("lpcurrpasselt") ||
          (n.body &&
            (((r = n.createElement("input")).style.display = "none"),
            r.setAttribute("type", "password"),
            r.setAttribute("id", "lpcurrpasselt"),
            r.setAttribute("value", ""),
            r.setAttribute("aria-hidden", "true"),
            n.body.appendChild(r))),
        n.getElementById("lpcurrpasselt")) &&
        (n.getElementById("lpcurrpasselt").value = l),
      "if (typeof(lpcurruser) == 'undefined') lpcurruser = ''; if (document.getElementById('lpcurruserelt') && document.getElementById('lpcurruserelt').value != '') { lpcurruser = document.getElementById('lpcurruserelt').value; document.getElementById('lpcurruserelt').value = ''; } if (typeof(lpcurrpass) == 'undefined') lpcurrpass=''; if (document.getElementById('lpcurrpasselt') && document.getElementById('lpcurrpasselt').value != '') { lpcurrpass = document.getElementById('lpcurrpasselt').value; document.getElementById('lpcurrpasselt').value = ''; } var lploc=" +
        es(o) +
        ";" +
        (1 == i ? "var lponlyfill=1;" : "var lponlyfill=null;") +
        e +
        "lpcurruser = ''; lpcurrpass = '';"),
    t,
    p;
  return (
    (t = (t = (t = (t = t.replace(/lpcurrpage\./g, "")).replace(/lpframe1\./g, "")).replace(/lpframe2\./g, "")).replace(/lpframe3\./g, "")),
    (t = "facebook.com" != gettldcached(get_doc_location_href(n)) ? "(function() {" + t + "})();" : t)
  );
}
