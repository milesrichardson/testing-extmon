var g_content_check = !0,
  g_bodystyle_relative = !0,
  g_trial_bg_expt = !0,
  g_ignore_lp_cache = !1,
  g_stylesheet_grubbing = !0,
  g_use_wacky_disp = !0,
  g_input_click_intercept = !0,
  g_force_fill_active_element = !1,
  g_create_iframe_in_top = !0,
  g_inframe = null,
  g_toplevel_iframe_exists = !1,
  g_iframe_docked = !0,
  g_combat_obfuscation = !0,
  g_queeg_mode = !0,
  g_show_safari_csp_msg = !0,
  g_in_lpframe = !1,
  LP_GETNAME_FAVOR_ID_OVER_NAME = !0,
  LP_GETNAME_FAVOR_NAME_OVER_ID = !1,
  g_popupfill_rows = 0,
  g_popupfill_rows_FF = 0,
  g_weasel_id = null,
  g_weaseled = !1,
  g_autofillsites = {},
  g_popupfill_widest = 260,
  g_popupfill_max = 1,
  g_popupfill_ctr = 0,
  g_popupfill_parent = null,
  g_popupfill_parent_last = null,
  g_isadmin = !1,
  CLICKABLE_ICON_ZINDEX = 2147483648,
  popup_show_sitename_suffix = !0,
  popup_show_menu_expand_visual_cue = !0,
  g_last_field_focused = null,
  g_minwidth_override = 0,
  g_minheight_override = 0,
  g_popupfill_iframe_width_save = 0,
  g_popupfill_iframe_height_save = 0,
  LPICON_HEIGHT = 16,
  LPICON_WIDTH = 16,
  g_double_password_hack = !1,
  g_double_secret_password_hack = !1,
  g_double_password_wtf = !1,
  g_popup_divs = {},
  g_input_cnt = -1,
  g_form_cnt = -1,
  g_input_fingerprint = null,
  g_keyboardNav = !1,
  g_more_close_on_cancel = !1,
  g_more_enable_return = !0,
  create_onerow_iframe = !0,
  do_autofill_if_matched = !1,
  g_frame_css_str = "",
  g_is_specialsite = null,
  g_nevers = {},
  FORCE_OFFER_GENERATE = !0,
  NO_FORCE_GENERATE = !1,
  FORCE_SHOW_NOHITS = !0,
  NO_FORCE_NOHITS = !1,
  FORCE_SHOW_NOHITS_NOLOGIN = 2,
  g_icon_shading = !1,
  g_do_icon_number_hint = !0,
  g_icon_hover = !0,
  g_icon_parent_hover = !0,
  g_icon_number_overrides = { sites: -1, formfills: -1 },
  g_icon_numbers = { sites: 0, formfills: 0 },
  g_visual_cue_on_hover = !0,
  g_show_icon_only_on_focus = !1,
  g_show_save_success_msg = !0,
  g_save_suggest_msg = !1,
  g_creditcard_profile_annotate = !0,
  g_show_icon_number_for_formfills = !1,
  g_save_suggest_msg_seen = !1,
  g_change_icon_on_input = !0,
  g_dologin_clickable = !0,
  FADE_MAXSTATES = 100,
  g_aspx_hack = !0,
  g_found_aspx = !1,
  g_clickable_input = !0,
  g_clickable_input_on_password = !0,
  g_popup_active_username = null,
  g_popup_active_password = null,
  g_extended_kbd_nav = !1,
  g_iframe_scroll_hack = !0,
  g_frame_scrollable_set = !1,
  g_defensive = !0,
  dotrans = !0,
  g_markov = !1,
  g_pw_ico =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVQ4T32SgVHDMAxF6QZ0AswELRuECcoGhAloJwAmACZomAA6QbMBZYKaDRih/+UkTvHF1d0/x/L317eU2cX5WNrxoUabTRwk5Z6EtjjrtH8RcsyXAlx6FS6FneCVcbIS/oSNgNgQUQDSt/Bj1UvbnHNxIdy4eBTolYQEsOkXKIQzBL0I3NvoIGlzFN6Ftbl71gqRaAT2xJvwKFwL2R1A2Jsql6hEL7JdSlp5Oy7uhE/nukCrxDYIUI1JxGAC5L3Yg7670sGQNGJNwMXpQR+byIjoAx3mCViN8aVNFpjUXGDUozG6srvgPJkYlwnc3Qv+nJEAhNZIfDcCzfoVeA4FcPZhvEFx6ld2IZpaxn9lP6gJUAnbV+aA6uzp0yhqApBoUmdrM+Hm7BMiP2mTawInofVEEf5J2pUAAAAASUVORK5CYII=",
  pw_svg = g_pw_ico,
  g_ff_ico =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T2NkoBAwIukXALL9gViBgJkPgPIbgfgDSB2yAQVAfj+RDioEqpuAbkADUKAeiB0JGLIfKN8IxCD1KC6AGYDsqgtANf+B2BDJUBCfaAM2QDUGkGMAcpjA/Qx1EVEugHkJZDlcA7EGgKJSHi0wHwL5D4g1wAGoEISRwQEgB4SJCkSQZns0Aw6SYgDICyCMDEDOJ8oL6E5HMwfsDayxQHFSBmUmUIJBdzq6C0DeWAATRE626AqJ4gMAKh82EQu8MAEAAAAASUVORK5CYII=",
  ff_svg = g_ff_ico,
  g_sites_dark_ico0 =
    "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAANJJREFUOBHdUzsOgzAMfaDOiIETcBjUDozcjetwh3CBdsnAgLiAa1uyG+gAtJ1qyYljv+dPAgBwY72z0kEV7JXV5QzZighHJeNVnJ+IcJGfYVZVhbZt3yjW1u7edR2FEAynibyDsiw9c1EUyHMPIY1lmXbuWEX1fY9pmtA0Deq6RowRwzAoKI05KzFeZRLnWVNn4jZtNuIRiEfws8XkDsZxNL/WuVi1eZ7NxLIsbothMSKC6FYs4+7Oz0j8jIbTPD/5kB7blg6cV5yvf6YDBf8a8gSLtXzq+l6rIQAAAABJRU5ErkJggg==",
  g_sites_ico = "data:image/png;base64," + g_sites_dark_ico0,
  sites_svg = g_sites_ico,
  g_close_ico =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4T7VTgQ2AIAyTC/RD9QO9QLxAP1A/1A9sDZgFo0CQJctcWOs6hioSTRl8hVjDGUNsR9EG3y1Bh2QKQYqaHt+zJdBIhkiCEfU6G8HB9kRX/BtllqLLzw6uQ3hjAKvJpUyvhBYgAmkkWpwZ5SVIlsBF4RA5BxojhygXzSvBkfxI/yVIXmVq41XFPCZe8f2YfHpfz0+q7C4R/Q4GAgAAAABJRU5ErkJggg==",
  close_svg = g_close_ico;
function getnumbericon(e, i, o, t) {
  var n = 0,
    i = getIconState(i.ownerDocument, LP_pickFieldName(e, i));
  i &&
    void 0 !== i.fillhintnumber &&
    "sites" == i.fillhint &&
    ((n = i.fillhintnumber), isNaN(parseFloat(n)) || !isFinite(n) ? (n = 0) : 10 <= n && (n = 9)),
    void 0 !== t && (n = 0 <= t && t <= 9 ? t : 0);
  var A,
    _,
    r,
    s,
    l,
    a,
    g,
    f,
    c,
    u,
    p,
    d,
    m,
    h,
    w,
    E,
    I,
    v,
    i = [
      g_sites_light_ico,
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAXtJREFUOBGVUj2LwkAUnIjBICIIKe8gWKRKo2BvYXMgWNlYWZ3gn1B/htekibWVcH1aIVV+wQULCxsRtMrtrGYv8RLUB8nuvjczu+9DWywWH3EcL8X3jidM07QfAfucz+ffhJdeIZNwu+iLexoFnrr5Cr/+05xSOvBoX61WYdt2BvaSgGVZ6PV6+QKGYahApVKBKJY6p2PKeduUufb7fbTbbaxWKxwOB0ynU+x2O7ium4ndk3l+KYU8AW02m8UM8Jnn81limMLlcsnDK59IMRKHiXpBQibiEZkY0co3sSxlDegoMsdx0O12Ua/XEUUR1us1jsejhFNEvaBIgK07nU4IwxDNZhOdTicDLXO205OViYrDZrORLg5Qq9VSdUpwJSEwoUjiuF+FOEzTxGAwwH6/x3a7zUD+piXjBpLukDwej2XenufJdNLQhzUYjUao1WpoNBpywIbDYZqPwi6wz6xyEATQdV2ROKmJEVMoIECszdL3ffb7n5EsnJNf8S6HAZZBgLIAAAAASUVORK5CYII=",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAYdJREFUOBGVVLuKwkAUPTErioVgY5WF2AhpFKz8AC0W0vgTK9injvkMt7HyB6zWSuy1s1WRXUJQ0cJCxSLOnSSzcYmaDGTmPs45M3fuEMmyrA/XdXvse0eMIUnSD4N9drvdb4KnkpCJ4G/0RTYNEoi1swf35jAnFU68snO5HMrl8h0skYCqqmg0GtEC2WxWJDKZDNhlCT+cE0HfeKNV13XUajUMBgPs93t0Oh3Yto1+v3+X+08mP1EJUQKSaZouJeiY5/OZY6iEy+UShRcxVuIvc9riBAGZEK/IhGGtVNjS43dAgWej2WyiUqlAlmWs12sMh0OcTicuIk7wTOBwOGA+n2O5XELTNJRKJQFP+W9bBKKM6XSK4/GIfD4Px3G4UIAjgXYckXq9DkVRsN1ukU6nAz7+XosIeUbQHfKIcL1eUa1W0Wq1MB6PMZlMODDWJRqGgd1uh0KhwEmbzYavND0UoD77rcJoNEKxWOS1LxYLrFYrLkCYhwIMQXdDPxplNptxQngiMmFuABiQmENn7wkAAAAASUVORK5CYII=",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAV9JREFUOBGVVLuKg0AUvcpCQiB/sAuCYBNMYWtrs0Gwyi+s4E8k4kdItrHKL8h+h612uwRsBDtTiDtnYmbHxTy8kMx9nHP0zr2ohGH43nXdgf3e6AlTFOWbwT72+/0X4OoUMgj9gz7hwyDw1JMv8Mu/zFHlwiN/sViQYRgD2CQBTdPIcZxxgfl8Lgqz2YzYZYlYrolk77zgdF2XLMui4/FIVVVREAR0Op0oSZJB7T8Z8aQWxgSU3W7XoYDXbJqGY9DC+Xwew4sca/GHBb54gysZiEdkYNgoX9lxEAJI3rPtdkts+0jXdQGDyFMCpmnSarUSRNlR+92WcwN/uVzSZrPhUxkU+gAC/j0Rz/OormvK85xTsI2y/W2LnGX+dTroW7a2bSmKIpHiiySiESeOY55dr9dk2zalaTpA3RTAnHHLZVlyQpZlvJWiKIQAMDcFGAp3gw8N5k0QuoohBpkd/i9CoHzgkM8LEwAAAABJRU5ErkJggg==",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAXFJREFUOBGVVDGKwkAUfZHFaBBS2riQSrC18QJpAvbeYAVbD6DxFm4TELyA1R7BKmUgjRa7pAwELKKF2XljEuMSN/HDZOb//96b+X+GKLZtW0mSrMV4Rw1TFOVbwD6Wy+UX4Y1XyCSkG31yTaNArZ1v8Nu3yGkUE1VrTdPQ7/cfYC8JGIYB0zTLBVqtVp5QVRWiWblfzOXBdPHGeTweYzgcYrvdIgxDzGYzBEEAx3Eecn/J9F8qoUxAWSwWCRM8ZhzHEsMSzudzGT6PiRJ/hDPNT5CRiagiEyOusiemtewBA//ZZDLBYDDIIavVCtfrVYrUEmi324iiCPv9XoqQnFkjfduZXzpToNlsykdUJBNMgWmViO/78DwPuq7DsizwQWV2fy1ZJJ2z26Hb6XRwOp0wGo2kwG63g+u6ElmrB/P5XApQ6HK54HA4pNsATwV4z+lVYbPZoNvtys6zHDaURsxTAZFnb/ij6R2PR3AUjWRifgHmko6KAvVfRAAAAABJRU5ErkJggg==",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAYJJREFUOBGVVLuKwkAUPRFRY2GlhRKDVRpBMFgJgRQ2C37HCvmCdOpnuE0qWzvZBf8hTbC2SLAKqQQfTXbumAy6xE0cmMx9nHNm5t4h0nK5/IjjeMVmFwWGJEk+g30uFosfgpfeIRMh2eiLbBokUGjnO/z+feSUHhN5dr1eh6ZpT7C3BHq9HiaTSbZArVYTiWq1ClYs4T/mRDAxyrROp1Pouo71eo0oimBZFo7HIxzHecr9JZP/1hWyBKT5fB5Tgo55uVw4hq5wvV6z8CLGrhgwZyZOkJIJkUcmDGulwpYVrwEF8oZhGOj3+2g2m7xWh8OBi4gT/CcwHo9hmiZ838d2u+WFTvGl5G2nfuY6Go04WZZlqKqK2+0mcCQwyxNpNBpQFAWVSgXD4RCDwUAIlFkXvpmnikhipN0h93w+43Q6YbPZwLZtdDodAS9UA8/z0G63+QMjJhUwHS+7QH1OWoXdbocwDNFqtRAEAfb7PecT5qUAQ1Bt6EejsAnXddNNBZkwv/3KjSrHve9/AAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAWVJREFUOBGVVL2Kg0AQHuXAxDKdcAeprI1NXiCN4HOc4EvEvISQa6xSW+bAJwg26hMEEkQstDU23s7qrnp4FzOw7vx88+3uzKBwOByMpmmOZH3ADBEE4UZgn47jfCNcfCUZE7qDvlBHQYJZJ7fw9jvMEYeBZ7osy6Cq6gj2EsF6vYbdbjdNsFgseECSJCDF4vYwxp2d8oa7aZqg6zqcTicoigJs24Y0TcHzvFHsdzLaLz1hikDY7/cNBvCaVVVRDD7h8XhM4bmPPPFODIvfgCUj4lkyYkgr38l2pDVAx39Cpm4UjuMYfN+nJLMIzuczJVAUBTRNowVmjGI328ye3C+XC+DCOtV1DVEUcRwSWHNIVqsVncIkSUY16qeFc7YK6w5zG4YB2+0WXNeFPM+Ze94c4NU3mw1cr9dRMrL8WUTsc9cqWC6XEAQB3G74K+gFMXwOejfXsDZ3tMqyhDAMIcsyHuxi1g985oWXD2O18QAAAABJRU5ErkJggg==",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAZdJREFUOBGVVD2LwkAQfTEHfhTXqIXggY0KNoKtEBBsDv0Zh0JI5w9Qf4bXWPkHBPHqWKq1CFaeWImIwS8w5Hai2UskxLiw2Zk3b97uziwR2u32p2EYHTY/4GMIgvDLaLVWq/VD9MAryZRw3+ibbBok4GvnG/32tecE7IFndiQSQSaTcdBeEkilUiiXy+4CoVCIB4LBIFixuG+PcfBuvNFarVZRKBTQ6/Ww3W4hyzLW6zW63a4j9phM/ktXcBMQms2mQQE65vl8Njl0hcvl4sbnGLviijl1fgIrmRjPkonDWplkS8esAQFeI51OQ5IkxGIxLJdLDAYD7Pd7U4SfwEugWCwiGo1iNBohm80il8txeuD+tjngZsxmM4TDYeTzeRyPRywWC04jgfozkd1uB13XEY/HzTafTicu8P9aOHQzrO6Q12g0sNls0O/3oSgKJpMJhsOhSfRVg8PhgEQigUqlAlEUQb41RMt4XEul0hfD3gmfz+e4Xq/mnE6nGI/H1AF67iuvNlJt6EeT1DQNqqo69qBkBtT/ANzCmpZx1xTXAAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAZ9JREFUOBGVU7uKwkAUPXmID5AttNyFYBGwsLGwFBUFF/wOhfyE5jPcxkZt/IHFxg+wsZJtrFwS8NWIohZm545xNkp8XcjMnbnnnJk790YyTfPTcZwm+z7whEmSNGWwaqPR+Ca4/AqZCO5BX+STkcBTJ5/gp9HLkb2BR34kEoGu6xewlwQ0TUOxWPQXCIVCIhAMBsEeS6y9MbHpOirNlUoF6XQanU4Hq9UKhmHAsiy0Wq2L2DWZ1i+l4Ccg1et1hwJ0zd1uxzGUwn6/98OLPZbiL1vUxA3OZEI8IhOGlfKdTU3+BrThZ5lMBoVCAev1Gr1eD7PZDIFAALIs80NIRNzAT4DIw+EQm80G2WyWQ1KpFHK5nICr1NvezhIR5iyXSyQSCUSjUSiKgnK5jGQyCVVVEYvF0O12oeTz+R+GJfk3L5n8yWTC+yEej3OxwWCA4/GI7XaLfr/P0/jvlis2VadUKvH+IFK73YZt2yCxcDiM6ZR+SuDuI45GI4zHY8zncxwOB05YLBZ8Pg83BajOjEilummEuVeFmtssvgJurPYHGEKbZ/T0eqIAAAAASUVORK5CYII="
    ],
    t = [
      g_sites_ico,
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAQZJREFUOBGlUzsOgzAMfaDOiIGx6sBhUFuJkTOwIK4DN+nMwA04QduBgRsglNqWkqZACxRLDo4/L89xAIAL6Z1UrVTOPZMa2VKsD+EaEYdWdv4jXAt3S2UQBIjjeFKiaS1+kyRRTdPoPAEyDHzfN8ie58F1TQh2zHGEucmVrLIs0XUdoihCGIZo2xZVVUmSHTNVlvE+xnJuNaUnoql7U9SCIqpmT4Bz9oP81z1jZKJPXubQJ74sy1Tf96qu63FsGaAoCqVlDMCXyL38FJo90jQFMZjNW/0zDcMwaeFAkDfS0ww097oou98BM/gmPKKjHczzXF6p5ZMxWvsP80o7vuDx2PReHtILYnasIXV5JlsAAAAASUVORK5CYII=",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAVVJREFUOBGlUztug0AQHUwaCiMXiAKlcmXJh7BEYSWWcOeCM1BzFzpqizNQcAEqCgponBSIT0FBPZndiM3ijxySkQbm897MLDsAALyTXkjxl8qwb6RC5pDHJozDRaEnC/5FGBcWc5iGYYDjODeUcayn79PphFmWjTheSEywWq1EZV3XYbEQKZBzisInF1iOCoIA2raF/X4P6/UaqqqCJEk4SM4JlmT8tJGCc01+JhpzPBvSEZBGFT4VvGd/UPzwn2tkg36yx73qIua6LuZ5jsMwYBzHaFmWyDHu02+w2+2gaRo4n89g2zZ4nseaTuRC3qSq7KuqinSleDwekYnv+9fY5z/TdrvFruv4Ei2Xy5sCk3EkhwM3mw3SXmCapmia5jWZ+Q+Fg4ui4KP3fY91XWMURZMiLw/p31f0GoYhaJomYGVZCpsMfo1yQLYP5LBlmXSUfL5IXwuez/wpTD7ZAAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAWRJREFUOBGlU7GOgkAQHbnrSAxGK3IVUPId5M7EDlpKvoCaXM8P8AWUfoCJhYWdjQkaa++MGLWmIZmb3YQ54Lg7vZtkd9/OvHn7NgsAAC809jTwxiG4zzQ47mmuDhE9Mno0i+RfQvSCck/naDSCyWTypaWy9evqeR5mWVbxpBA70DSNlfv9PigKl6Be6/Wkc+ZKVpIkcLlcwHEcMAwD8jyHxWIhSfUad9XA5zG15L1Q3olsVndDugKSVd6TYBd+o/z4P88ojL6LqUu9kYvjGI/HI16vV5xOpzgcDrn+QAKvQuWnsCwLSADO5zO4rgur1Qq22y237Amx4nc4DENcLpe4Xq9xMBjU+bf9TIfDAcuyxDRNUdf1hgBbaQEmqaoqse/7KCKKIq49tpo6t6fTCXa7HZimKeubzYZ5ze+S0xKId34SKAgCsG0biqKA2WwG8/lcEmiSz1ht2uuYEkKE7bawqI0/AJ5yzXcdXYlXAAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAATFJREFUOBGlU71thUAMNki0iAIqJAoGgC1Q8iRKGhagYRImoGECagZgADomICkoEBMgXWy/x+V4QF5ILPnw+ee7z74DAOAddUAVv1TKfUOVcqV4PYRqWDRcyfkXoVrQr1Tatg1xHO9KVlovv0mSiL7v1zwGkgwsy5LIpmmCrssQqDFNY+Yyl7PKsoRpmiCKIvB9H8ZxhLZtOUmNySrF+D5GcV41uSekufYmsAWBVOUeAY/sD/Tf/nONRPSTliP0na+ua0GCc3qOvQZI05SLzwCGn1i4rivmeRZd1zHIMwO6hQyVBnIoVVXBMAzQNA3HHcfZ5G1fxSZ0/0fw2I13WRYwDGPjO9vwsIIgEKRFUXALWZbthngGQG3J5DAMRZ7nwvM86cP4aesEenskqAWqzQ/pC316ypnGH23GAAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAVBJREFUOBGlUjFug1AMdVJGRBFiQWKBC3CDDhlQi8TIwszMVbJyCyRukDswdExaFGXIyBj4tV1hCERN01ry52G/52///wEA3tA/0NUvnbiv6GKPiIdNSMO2wpWCfzHSwvoRpW3bEMfxQjK0dfebJImq63rgcSHpwDRNqWwYBqzXkoJpbrXizoXLrKIo4Hw+QxiG4Ps+nE4n2O12TJrmRDUB4zaT4KOQZ8I2h9kUjqCwVfnHgrfwJ8aj/1wjNdrQcqv6VawsSzU1TdMkr1GFe2ZZFjRNA9vtlqld14mEDpFm+dGogK7r/IgulwtgN8J/QvSO/oL+LNEZcF0XDocDBEEAaZryFe/3+xlr+StzOo7DOM9zPoosyyS3lI0RIfV9r47Ho6Jv27bK8zzJXb/LUUyIzsYlsNlsuH2av6oqHofiaHyN33C5RhiiIrLbDFMu+gKOqr2ygs1s2AAAAABJRU5ErkJggg==",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAVVJREFUOBGlUzFug1AMNRwAZcjYMrDmGEhRG4mRA5ALMESZOEPmZM6YmQswZYSBkSktCgNiRJEyuLYlXJpQ0aSW/L+//Z6/jT8AAO+kJ1L8ozL2jVTlEXJ3CXNEDFrZ+YwwF8xHmNPpFDzPu6N0ZY3uvu9jnucdThJpBZPJRDNblgWmqSHoxwxDKlesoHa7HdR1DfP5HBzHgaqqIEkSAfVjyuoZ39f0nI+a0hOV2fWG1AJSqXqmhEP2B/kX/xkjF/rJy1D2O18URZhlGV4uF3Rdtx8fT7Ber/F6veJ2u8Xlcom2bWsCbuFE+sql/CZFUUBZljKdtm1htVpB0zQKH/2ZuGzWOI6RJQxDrUCzDBgKOp/PmKYp8qRY9vu9xgZ46lLQZrMRIrUhexAEGvv5LpUrBs/5hS1+1vTxYDabwfF4hMPhIABaZIzd4XZfkIOT6G03tjykL2vv49Mx20TiAAAAAElFTkSuQmCC",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAASNJREFUOBGlUzFuhEAMNCg1UPACoKWAR6AEiZKWB1DxFxpqXsAXeAAdL7hLQUFJixx7JZzlArkjseTFa8/MejEAAHyQ38jxRWfsO7nYFfJ2CHOUGbRy8i/GXDCvMF3XhSzLflC2tp4+8zzHcRw3nBKSDhzHEWXLssA0pQR6zTBU54JVqKZpYJ5nSJIEPM+DaZqg73sF0mvC0oLvY7Tk1VDdidrc7oZ0BaRWZU+CR/Gd8ul/xsiNfvJypL7L4YO1bSv1N1Z4ZlVVKUgcx1AUBQzDsKPcaCeKv8Vd1+GyLGjbto5/7WcKggDXdUUaq07m+NR2wLqu1ZsIw3CXP2VTQYA8Ym6dPi7JafVTDZ6zIvi+j2VZYhRFjwKMObWUKiJC8RE5/QKVk87a+e76sgAAAABJRU5ErkJggg==",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAWJJREFUOBGlUjtuwkAQfbZEiyhwY7lyB6UPgRKQS5+AIh2i4CYUUHMFDmBcuUWIksIiEULI9gEAMZnZyBuTgAzJSLM7O5+3b3YHAF5Zt6z0oEruC6uWZ4qLS6RGicGrOP8iUgvzmcpmswnf93+VFLQq9yAIaL1eF3kKSDNoNBoauV6vwzR1COWYYSjmOldlTadTpGmKTqcD13Wx3+8RRZFKKsd0Vcn4vqbkfNZUPTHNojfiFoip6jMD3rLf2d/9zzcK0Q9ZbqFf+Xq9HsVxTHme03w+J8dxyvFqgMViQfzINBqNSGQ4HF4BbKtYDAYDulwutFqtFFCr1dIA8gtvrPIgdyVJEpxOJ7TbbWw2G2RZdje3HNC37HY7CsOQeEboeDzSeDzWsYfm4HA4wPM8TCYT1Go1yLmQ67ksvF+7tOWIads2+v0+LMvCcrnEbDbD+XyWkPpGMW5Jl50Coun+sNUgfQJBOtg7An3ZOAAAAABJRU5ErkJggg==",
      "data:image/png;base64," +
        "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAXJJREFUOBGlUS1vwmAQfmCGNIQhUE1mUE2owyEmyUZAIPgHWGRdNQKB5i/0L6CoBQthwcEmSCChECTJ7d5b+u5dSrexXfK8vd49z33kAOCZsWHQL6G4Twxtt4jjJkojluFXBf9iSovsLcpSqYRWq5WQxGP9+O10OjSfz2OeFNITFItFXblQKCCb1SmYuUxGJtdcYY1GI+z3e9TrdZTLZWy3W4RhKCQzp1WG89nGCN7qyk48Zrwb8QrEo+p/LnjNf+V44z9nVIO+qedadYn1ej06Ho+0XC7JdV2JWZYlExq69AJRFFG/36fJZEJBEEiBbrdLw+FQN1UrbBgPjITNZjOJ2baN9XoN9d9ut5HL5TCdTtFsNnHHjBfGI+Ne2MYzHo+h7u44DlarFXzfx+VykZN7nofT6WSwky4NBgM6HA602+2oWq3K2FyMarXalxWS0o8IVSoV5PN5LBYLnM/nNF5qXN1Zd0rxFSfVGpz5rojKNd4BkoTNHvr9McEAAAAASUVORK5CYII="
    ];
  return (
    LP_has_highdef_display(e.defaultView) &&
      ((i = [
        g_40_icons["16x18_lite@2x"],
        g_40_icons["16x18_1_lite@2x"],
        g_40_icons["16x18_2_lite@2x"],
        g_40_icons["16x18_3_lite@2x"],
        g_40_icons["16x18_4_lite@2x"],
        g_40_icons["16x18_5_lite@2x"],
        g_40_icons["16x18_6_lite@2x"],
        g_40_icons["16x18_7_lite@2x"],
        g_40_icons["16x18_8_lite@2x"],
        g_40_icons["16x18_9_lite@2x"]
      ]),
      (t = [
        g_40_icons["16x18_dark@2x"],
        g_40_icons["16x18_1_dark@2x"],
        g_40_icons["16x18_2_dark@2x"],
        g_40_icons["16x18_3_dark@2x"],
        g_40_icons["16x18_4_dark@2x"],
        g_40_icons["16x18_5_dark@2x"],
        g_40_icons["16x18_6_dark@2x"],
        g_40_icons["16x18_7_dark@2x"],
        g_40_icons["16x18_8_dark@2x"],
        g_40_icons["16x18_9_dark@2x"]
      ])),
    (o ? t : i)[n]
  );
}
var g_sites_light_ico0 =
    "iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC",
  g_sites_light_ico = "data:image/png;base64," + g_sites_light_ico0,
  g_pw_light_ico =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=",
  g_ff_light_ico =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==",
  g_close_light_ico =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3UlEQVQ4EaVTOQ7CMBCMETShzcdo4CVOkyJykQb/AXoaPsQT0uLGRZhZxVIirSMDljberOfwaaZpqv5pe5Kttce6rs8QO5SIGWNiCOHhvX+LAMko3hAlfMGAw/6+47fUmdjUEkcEUvGXPicwwqFFxDlaiI+agSoA0tU550G4MJizpgnIJioDQ9/3LxCfHEN+QjcouEqdgQbM1XICHd3pzJhn0mki6hJwH1oQiZdpI+9YKxYAsAFhuWnLfKWTW8IKtPUjAnCLWyBtLHFkD/gweLdx1l89JgobkDSD4toHHT5aJu9+N80AAAAASUVORK5CYII=",
  g_svgs = {};
function getNeverUrlRules(e, i) {
  var o = { isAllowed: !0, formFillEnabled: !0, generateEnabled: !0 };
  if ("string" != typeof i) {
    if (!e) return o;
    i = e.location.href;
  }
  for (var t = lpcanonizeUrl(i), n = lpcanonizeUrl(lp_gettld_url(i)), A = 0; A < LP_objectSize(g_nevers); A++) {
    var _ = g_nevers[A],
      r = 0 === _.domain && lpcanonizeUrl(_.url) !== t,
      s = 1 === _.domain && n !== lpcanonizeUrl(lp_gettld_url(_.url));
    if (!r && !s)
      switch (_.type) {
        case "nevershowicons":
          return { isAllowed: !1, formFillEnabled: !1, generateEnabled: !1 };
        case "nevergenerates":
          o.generateEnabled = !1;
          break;
        case "neverformfills":
          o.formFillEnabled = !1;
      }
  }
  return (o.isAllowed = o.formFillEnabled || o.generateEnabled), o;
}
function checkIsDisplayed(e, i, o, t, n, A) {
  if (A) {
    var A = 50,
      _ = [];
    if (!(i == e.body || null == i || A < o)) {
      if (null == t)
        try {
          t = gettldcached(e.location.href);
        } catch (e) {
          return !1;
        }
      for (var r = 50, s = 0, l = "undefined" != typeof window && window ? window : e.defaultView, a = i; a && a != e.body; )
        try {
          var g = LP_getComputedStyle(l, a);
          if (
            null == g ||
            "none" == g.display ||
            "hidden" == g.visibility ||
            !(null == a.offsetHeight || "" === a.offsetHeight || 1 < a.offsetHeight || "hidden" != g.overflow) ||
            ("expedia.com" == t && "-1px" == g.marginTop && 1 == a.offsetHeight) ||
            ("dropbox.com" == t && "register-partial-container" == i.id && a.offsetHeight < 50)
          )
            return (_[_.length] = a), !1;
          a = (_[_.length] = a).parentNode;
        } catch (e) {
          return !0;
        }
    }
  }
  return !0;
}
function createPopupFill(e, i) {
  LPpop.set_icon_hint_from_data(e, i);
}
function getAutoFillArray(e, i, o) {
  var t = [],
    e = punycode.URLToASCII(e.location.href),
    n = lpcanonizeUrl(e),
    A;
  for (A in i) (i[A].genpw && !o) || (t[A] = i[A]);
  return t;
}
function dosavesiteicon(e) {
  var i = LP_derive_doc(),
    o = !1,
    t = !0,
    n = ((e = e ? 1 : 0), [""]),
    A = null != g_popupfill_parent_last ? g_popupfill_parent_last.form : null,
    _,
    r;
  if ((A = (null == A) & (null == g_popupfill_parent_last) ? (null != g_popupfill_parent ? g_popupfill_parent.form : null) : A)) {
    for (var s = A.elements, l = 0, a = 0, g = 0, f = 0, c, _, r, _, u, r; f < s.length; f++) {
      "FIELDSET" != s.tagName &&
        ("password" == (c = s[f].type) ? a++ : "text" == c || "tel" == c || "email" == c ? l++ : "textarea" == c && g++);
    }
    1 == l && 1 == a && 0 == g
      ? g_isfirefox
        ? LP.lpOpenEditWindow(0)
        : (((_ = LP_get_form_save(A, !1, [], !0)) && 0 != _.length) || (_ += LP_get_form_save_orphans(n, !0)),
          (r = { url: punycode.URLToASCII(get_doc_location_href(i)), formdata2: _ }),
          sendBG({ cmd: "savethesite", notificationdata: r, iframe: e }))
      : g_isfirefox
      ? LP.lpOpenEditWindow(0, !1, !1, null, !0)
      : ((u = !1),
        (_ = LP_get_form_save(A, !1, [], !0)) && 0 < _.length && (u = !0),
        (_ += LP_get_form_save_orphans(n, !0, u)),
        (r = { url: punycode.URLToASCII(get_doc_location_href(i)), formdata2: _ }),
        sendBG({ cmd: "savethesite", notificationdata: r, iframe: e }));
  } else
    g_isfirefox
      ? LP.lpOpenEditWindow(0, !1, !1, null, !0)
      : ((_ = LP_get_form_save_orphans(n, !0)),
        (r = { url: punycode.URLToASCII(get_doc_location_href(i)), formdata2: _ }),
        sendBG({ cmd: "savethesite", notificationdata: r, iframe: e }));
}
function setupIcons(A, _, r) {
  if (g_isie || do_experimental_popupfill) {
    if (!(A = A || LP_derive_doc())) return !1;
    if ("undefined" != typeof g_cpwbot && g_cpwbot && "undefined" != typeof g_in_cpwbot && g_in_cpwbot) return !1;
    if ("undefined" != typeof g_isie && g_isie) {
      if ("securelogin.globeop.com" == A.location.hostname && !r)
        return void setTimeout(function () {
          setupIcons(A, _, !0);
        }, 10);
      if (!init_LPfn() || !LPfn) return !1;
      LPfn.ie_reset_popupfillhint(), LPfn.ie_setup_event_handlers(A);
    }
    if (g_isfirefox && LP && LP.lp_getFFVersionFloat() < 20) return !1;
    "undefined" != typeof g_isfirefox && g_isfirefox
      ? ((A.g_input_cnt = countInputs(A, !1, !0)),
        (A.g_form_cnt = countFormEquivalents(A)),
        (A.g_input_fingerprint = computeFingerprint(A)),
        (A.g_did_setupInputObserver = !1))
      : ((g_input_cnt = countInputs(A)),
        (g_form_cnt = countFormEquivalents(A)),
        (g_input_fingerprint = computeFingerprint(A)),
        validate_input_indexes(A));
    var e = LP_getloggedin(),
      o = !1,
      s,
      s,
      s;
    (g_dologin_clickable || (!g_dologin_clickable && e)) && (o = !0);
    try {
      if (
        ((s = "undefined" != typeof punycode ? punycode.URLToASCII(A.location.href) : A.location.href),
        lp_url_is_lastpass(s) && !lp_url_is_lastpass_whitelisted(s))
      )
        return !1;
      if (LP_should_ignore_this_doc(A)) return !1;
    } catch (e) {
      return !1;
    }
    return (
      setTimeout(function () {
        var e, e, i, t, n;
        o &&
          (_ ||
            checkForLoginForm(A) ||
            checkDocumentForLoginOrphans(A) ||
            checkForNonLoginForm(A) ||
            checkForSignupForm(A) ||
            checkDocumentForCPWOrphans(A) ||
            checkDocumentForLoginFirstStageForm(A) ||
            checkDocumentForLoginOrphansFirstStage(A)) &&
          ((e = gettldcached(get_doc_location_href(A))),
          g_isfirefox || ("undefined" != typeof g_isie && g_isie) || sendBG({ cmd: "getpopupfillsites", tld: e, url: s }),
          g_do_icon_number_hint && (g_icon_number_overrides = { sites: -1, formfills: -1 }),
          (e = "undefined" != typeof window && window ? window : A.defaultView),
          (i = LP_get_last_url_history(A)) || (LP_put_last_url_history(A), (i = LP_get_last_url_history(A))),
          (t = i.href),
          (n = i.href_hash),
          e.setTimeout(function () {
            if (!g_isie) {
              var e = LP_get_last_url_history(A),
                i = e.href,
                e = e.href_hash,
                o;
              if (get_doc_location_href(A) !== t || n !== e)
                return LP_put_last_url_history(A), formcachereset(A), fieldcachereset(A), setupIcons(A, _, r), !1;
            }
            doc_create_clickable_icons(A, "", SHOULD_DO_ALWAYS, _);
          }, 50));
      }, 100),
      "function" == typeof setupInputObserver && setupInputObserver(A),
      g_isfirefox ||
        g_isie ||
        (g_create_iframe_in_top &&
          ("undefined" != typeof g_iscasper && g_iscasper && (window = A.defaultView), (g_inframe = LP_inIframe(window)))),
      !0
    );
  }
}
function do_icon_number_hint(e, i, o) {
  void 0 !== g_icon_number_overrides &&
    (null == e || ("undefined" != typeof parseInt && parseInt(e) < 0) || ("undefined" == typeof parseInt && e < 0)
      ? (g_icon_number_overrides.sites = -1)
      : (g_icon_number_overrides.sites = e),
    null == i || ("undefined" != typeof parseInt && parseInt(i) < 0) || ("undefined" == typeof parseInt && i < 0)
      ? (g_icon_number_overrides.formfills = -1)
      : (g_icon_number_overrides.formfills = i),
    (o = o || LP_derive_doc())) &&
    (refresh_input_all_icon_bg(o), g_isfirefox) &&
    LP &&
    "undefined" != typeof g_icon_number_in_toolbar &&
    g_icon_number_in_toolbar &&
    LP.lp_handle_buttons_all("refresh");
}
function closepopupfills(e, i) {
  !is_your_popup_showing(e) || g_isfirefox
    ? closepopupfills_real(e, i)
    : ((g_iframeclose_starttime = null), LP_waitfor_close_ack(closepopupfills_real, i));
}
function closepopupfills_real(e, i) {
  if ((e = e || LP_derive_doc())) {
    for (
      var o,
        t =
          (g_isfirefox ? clear_popup_heartbeat(g_popup_iframe_doc) : g_isie || sendBG({ cmd: "clear_popup_heartbeat" }),
          "undefined" != typeof g_popup_iframe_doc && (g_popup_iframe_doc = null),
          g_create_iframe_in_top &&
            !g_isie &&
            !g_isfirefox &&
            LP_inIframe(window) &&
            toplevel_iframe_state_get() &&
            sendBG({ cmd: "closepopuptoplevel" }),
          e.getElementsByTagName("iframe")),
        n = [],
        o = 0;
      o < t.length;
      o++
    )
      n[o] = t[o];
    for (o = 0; o < t.length; o++) {
      var A = n[o],
        _,
        _;
      void 0 !== A.id &&
        null != A.id &&
        ((_ = LPMAGICIFRAME), 0 == A.id.indexOf(_)) &&
        ((_ = A.id.substr(_.length)),
        null != LP_getElementByIdOrName(e, _) && revert_clickable_icon(e, _),
        info_log(e, "FF1", { param1: A.id }),
        (g_iframe_dims = {}),
        A.parentNode) &&
        (A.parentNode.removeChild(A), i) &&
        bg.sendLpImprove("infieldclose", { source: "form", option: i });
    }
    if ((do_icon_number_hint(-1, -1, e), g_double_password_hack || g_double_secret_password_hack))
      if (((g_double_secret_password_hack = g_double_password_hack = !1), (g_input_cnt = 0), g_isfirefox)) {
        for (var r, s = LP.getBrowser().contentWindow; null != s.top && s.top != s; ) s = s.top;
        var l = s.document,
          l = lpGetBrowserForDocument(l);
        LP.checkShouldRecheck(l);
      } else
        g_double_password_wtf
          ? ((g_form_cnt = g_input_cnt = 0), g_pending_recheck || checkShouldRecheck())
          : (formcachereset(e), fieldcachereset(e), setupIcons(e));
    (g_popupfill_parent_last = g_popupfill_parent),
      (g_popupfill_parent = null),
      (g_minheight_override = g_minwidth_override = g_popupfill_iframe_height_save = g_popupfill_iframe_width_save = g_popupfill_ctr = 0),
      "undefined" != typeof g_isie && g_isie && "undefined" != typeof init_LPfn && init_LPfn() && LPfn && LPfn.ie_set_kbdnav(!1);
  }
}
function popupfill_resize(e) {
  null == (e = e || document || LP.getBrowser().contentDocument) && "undefined" != typeof g_isfirefox && g_isfirefox
    ? end_weasel()
    : 0 < get_doc_location_href(e).indexOf(".xul") ||
      (relocate_popupfill_clickables(e), relocate_popupfill_iframes(e), 0 == g_weaseled && weasel(100), (g_weaseled = !0));
}
function visual_cue_frag(e, i) {
  var o = "",
    t,
    o;
  return (
    null === e ||
      e.length <= 0 ||
      (popup_show_menu_expand_visual_cue &&
        ((t = g_visual_cue_on_hover ? " style='display:none;'" : ""),
        (o =
          "<span id='" +
          e +
          lp_ofa(i) +
          "' expander='true' class='expander' " +
          t +
          "><img id='" +
          e +
          "img" +
          lp_ofa(i) +
          "' src='arrow.png' />  </span>\n"))),
    o
  );
}
function destroy_clickables(e) {
  null != (e = e || document) &&
    (end_weasel(e),
    closepopupfills(e),
    closeclickableicons(e),
    g_save_suggest_msg &&
      setTimeout(function () {
        return destroy_save_suggest_msg(e, MSGDIVID, null), !1;
      }, 0),
    g_isie) &&
    remove_LPfn();
}
function sort_popupfill_bylasttouch(e, i) {
  var e,
    i,
    e = null == e || null == e.last_touch || 0 == e.last_touch ? 2 << 29 : e.last_touch,
    i = null == i || null == i.last_touch || 0 == i.last_touch ? 2 << 29 : i.last_touch;
  return i - e;
}
function doc_create_clickable_icons(o, e, i, t) {
  if (g_isie || do_experimental_popupfill) {
    var n = 9,
      A = 0,
      _,
      r,
      s,
      s;
    if (o || (o = g_isfirefox && LP ? LP.getBrowser().contentDocument : document))
      if (
        (g_isfirefox &&
          ((_ = LP.lpGetCurrentWindow().document),
          (r = (void 0 !== LP.lpGetCurrentWindow().getBrowser ? LP.lpGetCurrentWindow() : LP).getBrowser().contentDocument)),
        (s = (s = 9 === o.nodeType ? o.body : null) || o.getElementsByTagName("body")[0]))
      ) {
        var l = !1;
        if (g_isfirefox) {
          if (never_icons(lpcanonizeUrl(o.location.href), lp_gettld_url(o.location.href))) return;
          if (never_icons(lpcanonizeUrl(r.location.href), lp_gettld_url(r.location.href))) return;
          l = !0;
        } else var a = (l = getNeverUrlRules(o).isAllowed);
        if (l) {
          var g = o.getElementsByTagName("input"),
            f,
            c = 1,
            u = {},
            p = checkDocumentForLoginOrphans(o) || checkDocumentForLoginOrphansFirstStage(o),
            d = checkDocumentForCPWOrphans(o),
            m = checkDocumentForLoginFirstStageForm(o);
          if (g_aspx_hack && !isASPpage()) for (var h, h = 0; h < g.length && h < 5 && !isASPpage(); h++) check_for_ASP(o, g[h]);
          var w = null;
          if ("undefined" != typeof Math) {
            var E = Math.floor(1e4 * Math.random()),
              I = g.length;
            if (g_aspx_hack && isASPpage()) create_icons_on_ASP(o, t);
            else if (p || d || m) create_icons_generic(o, t);
            else {
              var v = MAX_INPUTS_SOFT;
              for (LP_exceedInputsThreshold(o) || (v = MAX_INPUTS_HARD), f = 0; f < I && f < v; f++)
                if (t || popupfill_shoulddofield(o, g[f], i))
                  try {
                    var S = g[f],
                      L = LP_pickFormName(o, S.form),
                      B = p || m || chk_form_has_password(o, S.form),
                      O = d || chk_form_is_nonlogin_form(o, S.form);
                    if (t) {
                      if (!looksLikeUsername(g[f]) && !isInputFieldPassword(o, S)) continue;
                      O = !(B = !0);
                    }
                    var C = chk_form_ask_generate(o, S.form),
                      U = !1,
                      N = (null != w && null != L && L != w && ((U = !0), (C = chk_form_ask_generate(o, S.form, !0))), LP_fieldGetWidth(S));
                    if (
                      (!(null != u[L] && 1 <= u[L]) ||
                        isInputFieldPassword(o, S) ||
                        (B && !C) ||
                        g_show_icon_only_on_focus ||
                        (isASPpage() && isFirstFieldNonLoginSubForm(o, S))) &&
                      a &&
                      (B || O || C)
                    ) {
                      var b = !0;
                      if (
                        ((!B && !C) || LP_iconFieldWidthOK(S, N, !0)) &&
                        (B || C || !O || LP_iconFieldWidthOK(S, N, !1)) &&
                        (B || C || O || LP_iconFieldWidthOK(S, N, !1))
                      ) {
                        var F,
                          G = !0,
                          R,
                          y;
                        if (!O || !is_search_field(o, S, !0))
                          if (!O || !LP_fieldIsReadOnly(S))
                            if (
                              (B && !C
                                ? ((w = L),
                                  g_isie
                                    ? init_LPfn() && LPfn && LPfn.ie_setpopupfillhint({ formid: L, rowtype: "sites" })
                                    : g_isfirefox || sendBG({ cmd: "setpopupfillhint", formid: L, rowtype: "sites" }),
                                  g_do_icon_number_hint && (F = "sites"))
                                : B && C
                                ? ((R = !1),
                                  new RegExp(lpgs("ff_loginform_regexp"), "i").exec(L) && (R = !0),
                                  (g_aspx_hack && isASPpage()) || R
                                    ? (g_isie
                                        ? init_LPfn() && LPfn && LPfn.ie_setpopupfillhint({ formid: L, rowtype: "sites" })
                                        : g_isfirefox || sendBG({ cmd: "setpopupfillhint", formid: L, rowtype: "sites" }),
                                      g_do_icon_number_hint && (F = "sites"))
                                    : (g_isie
                                        ? init_LPfn() && LPfn && LPfn.ie_setpopupfillhint({ formid: L, rowtype: "formfills" })
                                        : g_isfirefox || sendBG({ cmd: "setpopupfillhint", formid: L, rowtype: "formfills" }),
                                      g_do_icon_number_hint &&
                                        (isInputFieldPassword(o, S)
                                          ? (F = S.form && lpCheckCurrentPWField(S.form) ? "sites" : "generate")
                                          : ((F = "formfills"), sendBG({ cmd: "setformfillsactivetab" })))))
                                : !B && C && chk_form_changepw(o, S.form)
                                ? (g_isie
                                    ? init_LPfn() && LPfn && LPfn.ie_setpopupfillhint({ formid: L, rowtype: "sites" })
                                    : g_isfirefox || sendBG({ cmd: "setpopupfillhint", formid: L, rowtype: "sites" }),
                                  g_do_icon_number_hint && (F = "sites"))
                                : d
                                ? g_do_icon_number_hint && (F = "sites")
                                : (g_isie
                                    ? init_LPfn() && LPfn && LPfn.ie_setpopupfillhint({ formid: L, rowtype: "formfills" })
                                    : g_isfirefox || sendBG({ cmd: "setpopupfillhint", formid: L, rowtype: "formfills" }),
                                  g_do_icon_number_hint && ((F = "formfills"), sendBG({ cmd: "setformfillsactivetab" }))),
                              checkIsDisplayed(o, S, 0, null, E))
                            ) {
                              if (g_do_icon_number_hint) {
                                var P = [],
                                  F,
                                  k,
                                  x;
                                if (
                                  (g_isfirefox
                                    ? ((F = F || "sites"),
                                      (x = (k = LP.getMatchingSites(o.location.href, SKIP_GENPWS)) && k.length ? k.length : 0),
                                      (P[F] = x))
                                    : (P = g_icon_numbers),
                                  isASPpage() && isFirstFieldNonLoginSubForm(o, S))
                                )
                                  setup_input_icon(o, S, "formfills", P);
                                else {
                                  var Q = !0,
                                    V;
                                  if (
                                    "formfills" == F &&
                                    !isFirstFieldNonLoginSubForm(o, S) &&
                                    !lpIsVisible(S, !0) &&
                                    S.form &&
                                    lpIsVisible(S.form)
                                  )
                                    continue;
                                  isInputFieldPassword(o, S) &&
                                    lpIsVisible(S, !0) &&
                                    (g_isie
                                      ? "formfills" == F && (F = "generate")
                                      : ((0 == g_icon_numbers.sites && isRegistrationUrl()) || "formfills" == F) && (F = "generate")),
                                    setup_input_icon(o, S, F, P);
                                }
                              } else setup_input_icon(o, S);
                              A++,
                                g_isfirefox ||
                                  (g_save_suggest_msg &&
                                    F &&
                                    null != typeof g_icon_numbers &&
                                    null != typeof g_icon_numbers.sites &&
                                    g_icon_numbers.sites < 1 &&
                                    LP_addEventHandler(
                                      S,
                                      "click",
                                      function (e) {
                                        var i = LP_getEventTarget(e);
                                        return (
                                          setTimeout(function () {
                                            do_save_suggest_msg(i, o);
                                          }, 0),
                                          LP_stopEventPropagation(e),
                                          !1
                                        );
                                      },
                                      !1
                                    )),
                                null == u[L] ? (u[L] = 1) : u[L]++;
                            }
                      }
                    }
                  } catch (e) {}
            }
            g_isfirefox ||
              (0 == g_weaseled &&
                setTimeout(function () {
                  weasel(100);
                }, 500),
              (g_weaseled = !0));
          }
        }
      }
  }
}
var launchPopup = function (e) {
  var i,
    i = g_isfirefox && LP ? LP.getBrowser().contentDocument : document;
  if (i) {
    var o = LP_getEventTarget(e),
      t = LPMAGIC + LP_pickFieldName(i, o),
      n;
    if (null != i.getElementById(t))
      g_clickable_input_on_password
        ? is_your_popup_showing(i) || conditional_create_popup(i, o, FORCE_SHOW_NOHITS_NOLOGIN)
        : (set_active_username_password(i, ai.form), popuptoggle(i, null, LP_pickFieldName(i, o), NO_FORCE_GENERATE, FORCE_SHOW_NOHITS));
    else if (g_input_click_intercept)
      try {
        info_log(i, "FF12"), icon_click_handler(e);
      } catch (e) {}
    return !1;
  }
};
function ff_get_iframe_pos(e, i, o, t, n) {
  var A = !1,
    _;
  if (!g_isfirefox || !n) return null;
  var r = null,
    s = [],
    l = 0,
    a = 0;
  try {
    for (var g = n.getElementsByTagName("iframe"), f = 50, _ = 0; _ < g.length && _ < 50; _++)
      url_is_lpfirefox_iframe(g[_].src) || (s[s.length] = g[_]);
    for (g = n.getElementsByTagName("frame"), _ = 0; _ < g.length && _ < 50; _++) s[s.length] = g[_];
    e && e == n && (e = g_popup_iframe_doc.defaultView.parent.document.g_popupfill_parent.ownerDocument);
    var c = getIconState(e, t);
    if (c) {
      var u = null,
        p = null,
        d = null;
      if (c && c.inframe) {
        for (var m = 0, m = 0, A, h, r, u; m < s.length; m++) {
          p = null;
          try {
            var p = s[m].contentDocument,
              w = LP_getElementByIdOrName(p, t);
            if (w && "INPUT" == w.tagName) {
              d = LP_getAbsolutePos(n, s[m]);
              break;
            }
          } catch (e) {
            return void (p = null);
          }
        }
        p &&
          d &&
          (u = LP_getElementByIdOrName(p, t)) &&
          ((A = !0),
          (h = ff_calculate_iframe_pos(p, u, 0 < g_minwidth_override ? g_minwidth_override : 0)),
          (r = { posx: parseInt(h.posx) + d.left + "px", posy: parseInt(h.posy) + d.top + "px" }));
      } else
        null == c ||
          isEmptyObject(c) ||
          ((u = LP_getElementByIdOrName(n, t)) &&
            ((A = !0), (r = ff_calculate_iframe_pos(n, u, 0 < g_minwidth_override ? g_minwidth_override : 0))));
    }
  } catch (e) {}
  return r;
}
function should_ignore_autocompleteoff_bypref(e, i) {
  return (
    !i || !(e = (e = e || i.ownerDocument) || LP_derive_doc()) || !(!lpdontfillautocompleteoff || "off" != i.getAttribute("autocomplete"))
  );
}
function LP_get_input_pattern(e, i) {
  var o, t, t, t;
  return e && i
    ? ((o = LP_pickFieldName(e, i)),
      null != (t = fieldcacheget(e, o, "input_pattern"))
        ? t
        : ((t = (t = i.getAttribute("pattern")) && t.trim()),
          (t = LP_hasAngular(e) ? i.getAttribute("ng-pattern") : t)
            ? (-1 == t.indexOf("?:") && -1 == t.indexOf("$") && (t = "^(?:" + t + ")$"), fieldcacheset(e, o, "input_pattern", t), t)
            : null))
    : null;
}
function LP_get_input_pattern_desc(e, i) {
  if (e && i) {
    var o = i.getAttribute("title");
    if (o) return o;
    if ((o = i.getAttribute("aria-describedby"))) {
      var i = e.getElementById(o);
      if (i) return LP_elt_get_text(i);
    }
  }
  return null;
}
function LP_test_input_pattern(e, i) {
  var e, e;
  return e && i ? !!(e = LP_get_input_pattern(e, i)) && !!(e = new RegExp(e)) && !!e.exec(i.value) : null;
}
function LP_get_generate_password_with_pattern(e, i) {
  if (!e) return null;
  for (var o, t, n = [], A = e.getElementsByTagName("input"), t = 0; t < A.length && t < MAX_INPUTS_HARD; t++)
    (o = A[t]),
      (i && o.form != i) || "password" != o.type || LP_explicit_ignored(e, o) || LP_implicit_ignored(e, o) || n.push({ elt: o, score: 0 });
  if (n.length <= 0) return null;
  for (t = 0; t < n.length; t++) {
    LP_get_input_pattern(e, (o = n[t].elt)) && (n[t].score += 10);
    var _ = new RegExp(lpgs("ff_currpass_regexp"), "i");
    _ && (_.exec(LP_getname(o, !1)) || _.exec(LP_getname(o, !0))) && (n[t].score -= 5);
  }
  return (
    n.sort(function (e, i) {
      return i.score - e.score;
    }),
    0 < n[0].score ? n[0].elt : null
  );
}
function LP_cleanup_on_logout(e, i) {
  var o = 5;
  if (!(e = e || LP_derive_doc())) return !1;
  if (5 < (i = null == i ? 0 : i)) return !0;
  var t = !0,
    n = [
      "lpcurrpasselt",
      "lpcurruserelt",
      "_lpinvis",
      "__lpsadmsgdiv",
      "__lpsavemsgdiv",
      "__lpsuggestmsgdiv",
      "__lpresultdiv",
      "__lpseleniumbitsdiv"
    ];
  try {
    for (var A = 0; A < n.length; A++) {
      var _ = document.getElementById(n[A]);
      _ && _.parentNode.removeChild(_), g_queeg_mode && (_ = document.getElementById(n[A])) && LP_cleanup_on_logout(e, i + 1);
    }
    if (e.script_stash) {
      for (A in e.script_stash) e.script_stash.hasOwnProperty(A) && (_ = e.script_stash[A]) && _.parentNode && _.parentNode.removeChild(_);
      e.script_stash = {};
    }
  } catch (e) {
    t = !1;
  }
  return reset_lpsaveforminfo_vars(e), reset_forcefill_without_fillbest(), t;
}
function LP_request_iframe_close(e) {
  return !(
    !(e = e || LP_derive_doc()) ||
    !e.location ||
    ("undefined" != typeof g_isie && g_isie
      ? LPfn.request_iframe_close()
      : g_isfirefox
      ? pass
      : sendBG({ cmd: "iframe_close_request", docstate: get_docstate(e), initiate_timestamp: LPPerl.time() }),
    0)
  );
}
function LP_iframe_close_intent_handler(e) {
  return void 0 !== e.value && (g_iframecloseval = e.value), !0;
}
function LP_waitfor_close_ack(e, i, o) {
  var t = 500,
    n = (void 0 === o && (o = 0), LP_gettime()),
    A = LP_derive_doc();
  return null === g_iframeclose_starttime
    ? (null === n && (n = 0),
      g_isie || (g_iframecloseval = CLOSE_CONFIRM_INITIAL),
      (g_iframeclose_starttime = n),
      LP_request_iframe_close(A),
      setTimeout(function () {
        LP_waitfor_close_ack(e, i, o + 1);
      }, 10),
      !0)
    : g_iframecloseval === CLOSE_CONFIRM_INITIAL
    ? g_iframeclose_timeout < n - g_iframeclose_starttime || g_iframeclose_timeout < o * t
      ? e(A, i)
      : (setTimeout(function () {
          LP_waitfor_close_ack(e, i, o + 1);
        }, t),
        !0)
    : g_iframecloseval & CLOSE_CONFIRM_SAFECLOSEBITS
    ? e(A, i)
    : lpConfirmYesNo(lpgs("Are you sure you want to close this window?  You will lose your unsaved changes."))
    ? ((g_iframecloseval = CLOSE_CONFIRM_OKCLOSE), e(A, i))
    : void (g_iframecloseval = CLOSE_CONFIRM_NOCLOSE);
}
function reset_lpsaveforminfo_vars(e) {
  return (
    void 0 !== e && void 0 !== e.LPlpsaveforminfo && delete e.LPlpsaveforminfo,
    void 0 !== e && void 0 !== e.LPlpsaveforminfoaddurid && delete e.LPlpsaveforminfoaddurid,
    !0
  );
}
var g_iframecloseval = null,
  g_iframeclose_timeout = 5e3,
  g_iframeclose_starttime = null,
  CLOSE_CONFIRM_INITIAL = 0,
  CLOSE_CONFIRM_CHECKING = 1,
  CLOSE_CONFIRM_NOCLOSE = 2,
  CLOSE_CONFIRM_OKCLOSE = 4,
  CLOSE_CONFIRM_LOGGEDOUT = 5,
  CLOSE_CONFIRM_TERMINATE = 6,
  CLOSE_CONFIRM_NO_POPUP = 7,
  CLOSE_CONFIRM_SAFECLOSEBITS = 4,
  CLOSE_CONFIRM_NOCLOSEBITS = 0;
function isRegistrationUrl() {
  var e = translations["en-US"].ff_signuptxt_regexp;
  return document.location.href.match(e);
}
