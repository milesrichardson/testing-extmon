!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 233));
})({
  0: function (e, t, n) {
    "use strict";
    e.exports = n(15);
  },
  1: function (e, t, n) {
    "use strict";
    e.exports = n(14);
  },
  10: function (e, t, n) {
    "use strict";
    !(function e() {
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(18));
  },
  11: function (e, t, n) {
    "use strict";
    var r = n(5);
    var o = {
      en: {
        name: "Hotspot Shield",
        elite: "Premium",
        powered: "Powered by Aura",
        version: "Version",
        wait: "Please wait",
        loading_powered: "Made in California",
        connection_button_stop: "Stop",
        connection_button_connecting: "Connecting...",
        connection_button_connected: "Connected",
        connection_button_disconnected: "Click to connect",
        buy_elite: "Upgrade to Hotspot Shield Premium",
        menu_account: "My account",
        menu_settings: "Settings",
        menu_help: "Help",
        menu_about: "About Hotspot Shield",
        menu_upgrade: "Upgrade to Premium",
        menu_rateus: "Rate us",
        menu_share: "Share this app",
        menu_chrome: "%BROWSER% extension",
        sign_in: "Sign in",
        sign_up: "Sign up",
        restore: "Send password",
        about_privacy: "Privacy policy",
        about_terms: "Terms",
        about_like: "Like us on Facebook",
        about_follow: "Follow us on Twitter",
        help_tutorial: "Tutorial",
        help_payments: "Payments/Subscription",
        help_manage: "Manage account & devices",
        help_support: "Support",
        help_other: "Other",
        help_contact: "Contact us",
        account_type: "Account type",
        account_upgrade: "Upgrade to Premium",
        account_username: "Username",
        account_switch: "Switch account",
        account_key: "Licence key",
        account_redeem: "Redeem license",
        account_activated: "Activated",
        account_na: "Basic",
        restore_forgot: "Forgot password?",
        fill: "Fill highlighted fields",
        password6: "Password must be 6+ characters",
        settings_notifications: "Notifications",
        settings_language: "Language",
        signin_noaccount: "Don't have an account?",
        label_email: "Email address",
        label_enterpassword: "Enter password",
        label_createpassword: "Enter password",
        signup_description: "By clicking sign up you agree to the Hotspot Shield’s",
        signup_description_and: "and",
        signup_have_an_account: "Already have an account",
        tos: "Terms & conditions",
        policy: "Privacy policy",
        beta: "BETA",
        modes_title: "Connection modes",
        modes_cookies: "Cookie blocker",
        modes_tracker: "Tracker blocker",
        modes_adblock: "Ad blocker",
        modes_malware: "Malware blocker",
        modes_notifications: "Notifications",
        modes_proxyLocal: "Bypass local network",
        modes_sword: "Sword",
        modes_tooltips_tracker: "Enable or disable analytic trackers (such as Google) during your Hotspot Shield session.",
        modes_tooltips_adBlock: "Enable or disable ad blocking in %BROWSER% browser during your Hotspot Shield session.",
        modes_tooltips_malware: "Enable or disable ad malware blocker in %BROWSER% browser during your Hotspot Shield session.",
        modes_tooltips_cookie: "Enable or disable web cookies during your Hotspot Shield session.",
        modes_tooltips_settings: "Add and manage your secure and bypass sites here.",
        modes_tooltips_proxyLocal: "Bypass local resources. Such as web sites located in internal network, localhost, etc.",
        modes_tooltips_sword: "Feed web trackers fake web activity to keep your real web activity private.",
        modes_install: "Install",
        browser_settings_title: "Browser settings",
        browser_settings_open: "Open in %BROWSER%",
        banner_create_account_title: "Create account to increase your daily data limit to 500 MB",
        banner_create_account_description: "Creating a secure Hotspot Shield account will earn you another 250 MB of free daily data",
        banner_create_account_btn: "Create account",
        banner_download_app_title: "Install the app and increase combined daily data to 1 GB",
        banner_download_app_description:
          "With the daily limit of 500 MB in the Chrome extension, and 500 MB more in the desktop app, you will have 1 GB total",
        banner_download_app_btn: "Instal Hotspot Shield",
        banner_premium_btn: "Go unlimited with Premium",
        location_optimal_title: "Auto server",
        location_title: "Servers",
        location_show_all: "Show all",
        location_show_less: "Show less",
        location_elite_only: "Location avaliable for premium subscribers.",
        location_auto_title: "Hotspot Shield auto selects the best server for your connection.",
        tooltip_previous: "Previous",
        tooltip_next: "Next",
        tooltip_done: "Done",
        tooltip_title_1: "Homepage",
        tooltip_title_2: "Dashboard",
        tooltip_title_3: "Dashboard",
        tooltip_title_4: "Configuration settings",
        tooltip_text_1_1: "Menu options",
        tooltip_text_1_2: "Configuration settings",
        tooltip_text_1_3: "Click to connect to Hotspot Shield",
        tooltip_text_2_1: "Current session duration counter",
        tooltip_text_2_2: "Click to stop the connection",
        tooltip_text_2_3: "Consumed data over past 24 hours",
        tooltip_text_2_4: "Speed to currently connected server",
        tooltip_text_2_5: "Blocked threats during the session",
        tooltip_text_2_6: "Select virtual location to connect to",
        tooltip_text_3_1: "Currently connected server",
        tooltip_text_3_2: "Number of unblocked sites",
        tooltip_text_3_3: "Turn on extension on these sites",
        tooltip_text_3_4: "Bypass extension when it’s on",
        tooltip_text_4_1: "Select your preferred virtual location",
        tooltip_text_4_2: "Block ads on sites you visit",
        tooltip_text_4_3: "Prevent online tracking",
        tooltip_text_4_4: "Block 3rd party cookies",
        tooltip_text_4_5: "Add & manage secure/bypass sites",
        unavaliable_title: "Service interruption",
        unavaliable_description:
          "Hotspot Shield is being interrupted by another %BROWSER% extension that is controlling your proxy settings.",
        unavaliable_disable: "Disable other extension.",
        map_title: "Connected to:",
        map_optimal: "Auto server",
        secured_websites_title: "Auto protection",
        secured_websites_showing: "Showing",
        secured_websites_of: "of",
        secured_websites_add: "Add site",
        bypass_title: "Bypass websites",
        bypass_showing: "Showing",
        bypass_of: "of",
        bypass_add: "Add site",
        sword_title: "Sword",
        sword_tooltip:
          "Feed web trackers fake web activity to keep your real web activity private. Many websites have multiple 3rd party resources to track you. Sword confuses these trackers by spoofing what you are browsing, allowing you to stay anonymous.",
        sword_add: "Add site",
        main_bypass_tooltip: "Add websites which you want to bypass Hotspot Shield security when the product is turned on.",
        main_secured_tooltip: "Add websites which you want to secure when Hotspot Shield is turned off.",
        connection_bandwidth: "Bandwidth",
        connection_speed: "Speed",
        see_all: "See all",
        unblocked_title: "Sites unblocked:",
        rate_us_rate_title: "Love Hotspot Shield?",
        rate_us_rate_text: "Click the stars to rate us",
        rate_us_thank_you: "Thank you!",
        rate_us_redirect_1: "You are Awesome!\nPlease take a moment to give Us 5 star rating on %BROWSER% Web Store.",
        rate_us_redirect_2: "In a moment you will be redirected...",
        statistic_title: "Blocked threats",
        statistic_ads: "Ads",
        statistic_malware: "Malware",
        statistic_cookies: "Cookies",
        statistic_trackers: "Trackers",
        help_icon_title: "Extension icon",
        help_icon_1: "Hotspot Shield protection is off.",
        help_icon_2: "Hotspot Shield protection is on.",
        help_icon_3: "Hotspot Shield is automatically securing this domain.",
        help_icon_4: "Hotspot Shield is bypassing this domain.",
        reserved: "© 2021 Aura Inc., Aura GmbH — ",
        welcome_title: "Thank you for installing Hotspot Shield!",
        welcome_row_1: "Get more with Hotspot Shield Premium",
        welcome_row_2: "Multi-device support",
        welcome_row_3: "Premium server locations",
        welcome_row_4: "Unlimited data bandwidth",
        welcome_row_5: "Dedicated customer support",
        welcome_row_6: "Ad-free browsing experience",
        welcome_row_7: "or download Hotspot Shield for:",
        configuration_title: "Configuration",
        settings_add_title: "Add a website",
        settings_add_description: "URL",
        settings_add_eg: "E.g. www.facebook.com",
        trial_thanks: "No thanks, continue as free",
        trial_onetime: "One-Time Offer",
        trial_title: "Get more with Hotspot Shield Premium",
        trial_row_1: "Multi-device support",
        trial_row_2: "Premium server locations",
        trial_row_3: "Unlimited data bandwidth",
        trial_row_4: "Dedicated customer support",
        trial_row_5: "Ad-free browsing experience",
        trial_upgrade: "Start my free trial",
        modes_webRTC: "WebRTC blocker",
        modes_tooltips_webRTC:
          "WebRTC discovers IPs via the Interactive Connectivity Establishment (ICE) protocol. Enable this feature to prevent that.",
        terms_agree_by_using: "By using this extension, you agree to our <0/> <1>Terms</1> and <2>Privacy policy</2>.",
        help_open_button: "Open",
        survey_title: "Take a survey to improve Hotspot Shield",
        survey_description: "It will only take about two minutes to complete",
        survey_button: "Begin survey"
      },
      ru: {
        powered: "Создано Aura",
        version: "Версия",
        wait: "Подождите",
        loading_powered: "Сделано в Калифорнии",
        connection_button_stop: "Выключить",
        connection_button_connecting: "Подключение...",
        connection_button_connected: "Подключено",
        connection_button_disconnected: "Щелкните, чтобы подключить",
        buy_elite: "Обновить Hotspot Shield до версии Premium",
        menu_account: "Моя учетная запись",
        menu_settings: "Настройки",
        menu_help: "Помощь",
        menu_about: "О программе Hotspot Shield",
        menu_upgrade: "Обновить до версии Premium",
        menu_rateus: "Оцените нас",
        menu_share: "Расскажите об этом приложении",
        menu_chrome: "Расширение для %BROWSER%",
        sign_in: "Войти",
        sign_up: "Зарегистрироваться",
        about_privacy: "Политика конфиденциальности",
        about_terms: "Условия и положения",
        about_like: "Поставьте нам лайк в Facebook",
        about_follow: "Подпишитесь на нас в Twitter",
        help_tutorial: "Руководство",
        help_payments: "Оплата/Подписка",
        help_manage: "Управление учетной записью",
        help_support: "Поддержка",
        help_other: "Другое",
        help_contact: "Связаться с нами",
        account_type: "Тип учетной записи",
        account_upgrade: "Обновить до версии Premium",
        account_username: "Имя пользователя",
        account_switch: "Сменить учетную запись",
        account_key: "Лицензионный ключ",
        account_redeem: "Восстановить лицензию",
        account_activated: "Активировано",
        restore_forgot: "Забыли пароль?",
        fill: "Заполните выделенные поля",
        password6: "Пароль должен включать не менее 6 символов",
        settings_notifications: "Уведомления",
        settings_language: "Язык",
        signin_noaccount: "У вас нет учетной записи?",
        label_email: "Адрес электронной почты",
        label_enterpassword: "Введите пароль",
        label_createpassword: "Введите пароль",
        signup_description: 'Нажимая кнопку "Зарегистрироваться", вы соглашаетесь с Hotspot Shield',
        signup_description_and: "и",
        signup_have_an_account: "Учетная запись уже есть",
        tos: "Условия и положения",
        policy: "Политика конфиденциальности",
        modes_title: "Режимы подключения",
        modes_cookies: "Блокировщик файлов cookie",
        modes_tracker: "Блокировщик трекеров",
        modes_adblock: "Блокировщик рекламы",
        modes_malware: "Блокировщик malware",
        modes_notifications: "Уведомления",
        modes_tooltips_tracker: "Включение или отключение отслеживания аналитики (например, Google) во время сеанса Hotspot Shield.",
        modes_tooltips_adBlock: "Включение или отключение блокирования рекламы в браузере %BROWSER% во время сеанса Hotspot Shield.",
        modes_tooltips_malware: "Включение или отключение блокирования malware в браузере %BROWSER% во время сеанса Hotspot Shield.",
        modes_tooltips_cookie: "Включение или отключение использования файлов cookie веб-сайтов во время сеанса Hotspot Shield.",
        modes_tooltips_settings: "Добавьте здесь свои защищенные и заблокированные сайты, и управляйте ими.",
        browser_settings_title: "Настройки браузера",
        browser_settings_open: "Открыть в %BROWSER%",
        banner_create_account_title: "Create account to increase your daily data limit to 500 MB",
        banner_create_account_description: "Creating a secure Hotspot Shield account will earn you another 250 MB of free daily data",
        banner_create_account_btn: "Create account",
        banner_download_app_title: "Install the app and increase combined daily data to 1 GB",
        banner_download_app_description:
          "With the daily limit of 500 MB in the Chrome extension, and 500 MB more in the desktop app, you will have 1 GB total",
        banner_download_app_btn: "Instal Hotspot Shield",
        banner_premium_btn: "Go unlimited with Premium",
        location_optimal_title: "Автоматический сервер",
        location_title: "Серверы",
        location_show_all: "Показать все",
        location_show_less: "Показать меньше",
        location_elite_only: "Местоположение доступно для пользователей с подпиской Premium.",
        location_auto_title: "Hotspot Shield автоматически выбирает наилучший сервер для вашего подключения.",
        tooltip_previous: "Назад",
        tooltip_next: "Далее",
        tooltip_done: "Готово",
        tooltip_title_1: "Домашняя страница",
        tooltip_title_2: "Информационная панель",
        tooltip_title_3: "Информационная панель",
        tooltip_title_4: "Конфигурация",
        tooltip_text_1_1: "Меню",
        tooltip_text_1_2: "Конфигурация",
        tooltip_text_1_3: "Щелкните, чтобы подключиться к Hotspot Shield.",
        tooltip_text_2_1: "Продолжительность текущего сеанса",
        tooltip_text_2_2: "Щелкните, чтобы отключиться",
        tooltip_text_2_3: "Данные за последние сутки",
        tooltip_text_2_4: "Скорость подключения к серверу",
        tooltip_text_2_5: "Заблокированные угрозы",
        tooltip_text_2_6: "Ваше виртуальное местоположение",
        tooltip_text_3_1: "Сервер, подключенный в настоящий момент",
        tooltip_text_3_2: "Количество разблокированных сайтов",
        tooltip_text_3_3: "Включите расширение на этих сайтах",
        tooltip_text_3_4: "Обход расширения, когда оно включено",
        tooltip_text_4_1: "Выбор локации для подключения",
        tooltip_text_4_2: "Блокировать рекламу",
        tooltip_text_4_3: "Блокировать трекеры",
        tooltip_text_4_4: "Блокировать сторонние файлы cookie",
        tooltip_text_4_5: "Добавьте защищенные сайты и сайты для обхода и управляйте ими",
        unavaliable_title: "Работа Hotspot Shield прерывается другим расширением %BROWSER%, управляющим настройками вашего прокси.",
        unavaliable_description:
          "Нажмите эту кнопку, чтобы отключить другие расширения (блокировщики рекламы, другие VPN-сервисы и т. д.), которые управляют настройками вашего прокси.",
        map_title: "Просмотр из",
        secured_websites_title: "Автоматическая защита",
        secured_websites_showing: "Отображение",
        secured_websites_of: "для",
        secured_websites_add: "Добавить",
        bypass_title: "Веб-сайты для обхода",
        bypass_showing: "Отображение",
        bypass_of: "для",
        bypass_add: "Добавить",
        main_bypass_tooltip: "Добавьте веб-сайты, для которых будет включен обход защиты Hotspot Shield, когда продукт включен.",
        main_secured_tooltip: "Добавьте веб-сайты, которые следует обезопасить, когда Hotspot Shield выключен.",
        connection_bandwidth: "Трафик",
        connection_speed: "Скорость",
        see_all: "Просмотреть все",
        unblocked_title: "Сайты разблокированы",
        rate_us_rate_text: "Щелкните звездочки, чтобы оценить его.",
        rate_us_thank_you: "Спасибо!",
        rate_us_redirect_1: "Вы чудо!\nПожалуйста, найдите минутку, чтобы дать нам оценку 5 звездочек в интернет-магазине %BROWSER%.",
        rate_us_redirect_2: "Через мгновение вы будете перенаправлены...",
        statistic_title: "Заблокированные угрозы",
        statistic_ads: "Реклама",
        statistic_malware: "Malware",
        statistic_cookies: "Файлы cookie",
        statistic_trackers: "Трекеры",
        help_icon_title: "Значок расширения",
        help_icon_1: "Защита Hotspot Shield выключена.",
        help_icon_2: "Защита Hotspot Shield включена.",
        help_icon_3: "Hotspot Shield автоматически защищает этот домен.",
        help_icon_4: "Hotspot Shield is обходит ограничения этого домена.",
        welcome_title: "Благодарим вас за установку Hotspot Shield!",
        welcome_row_1: "Получайте больше возможностей, используя Hotspot Shield Premium",
        welcome_row_2: "Поддержка нескольких устройств",
        welcome_row_3: "Местоположения премиум-серверов",
        welcome_row_4: "Неограниченный трафик",
        welcome_row_5: "Выделенный центр поддержки клиентов",
        welcome_row_6: "Просмотр сайтов без рекламы",
        welcome_row_7: "или скачайте Hotspot Shield для",
        settings_add_title: "Добавить веб-сайт",
        configuration_title: "Конфигурация",
        trial_thanks: "Нет, спасибо, продолжить в бесплатном режиме",
        trial_onetime: "Единовременное предложение",
        trial_title: "Получайте больше возможностей, используя Hotspot Shield Premium",
        trial_row_1: "Поддержка нескольких устройств",
        trial_row_2: "Местоположения премиум-серверов",
        trial_row_3: "Неограниченный трафик",
        trial_row_4: "Выделенный центр поддержки клиентов",
        trial_row_5: "Просмотр сайтов без рекламы"
      },
      ko: {
        powered: "Aura 제작 지원",
        version: "버전",
        wait: "잠시 기다려 주세요.",
        loading_powered: "Made in California",
        connection_button_stop: "중지",
        connection_button_connecting: "연결 중 ...",
        connection_button_connected: "연결됨",
        connection_button_disconnected: "클릭하여 연결",
        buy_elite: "Hotspot Shield Premium로 업그레이드",
        menu_account: "내 계정",
        menu_settings: "설정",
        menu_help: "도움말",
        menu_about: "Hotspot Shield 정보",
        menu_upgrade: "Premium로 업그레이드",
        menu_rateus: "점수 매기기",
        menu_share: "이 앱 공유",
        menu_chrome: "%BROWSER% 확장 프로그램",
        sign_in: "로그인",
        sign_up: "등록",
        about_privacy: "개인 정보 취급 방침",
        about_terms: "이용 약관",
        about_like: "Facebook '좋아요'",
        about_follow: "Twitter에서 팔로우하기",
        help_tutorial: "자습서",
        help_payments: "결제/가입",
        help_manage: "계정 및 장치 관리",
        help_support: "지원",
        help_other: "기타",
        help_contact: "고객 문의",
        account_type: "계정 유형",
        account_upgrade: "Premium로 업그레이드",
        account_username: "사용자 이름",
        account_switch: "계정 전환",
        account_key: "라이선스 키",
        account_redeem: "라이선스 입력",
        account_activated: "활성화됨",
        restore_forgot: "암호를 잊으셨나요?",
        fill: "강조 표시된 필드 채우기",
        password6: "암호는 6자 이상이어야 함",
        settings_notifications: "알림",
        settings_language: "언어",
        signin_noaccount: "계정이 없습니까?",
        label_email: "전자 메일 주소",
        label_enterpassword: "암호 입력",
        label_createpassword: "암호 입력",
        signup_description: "등록을 클릭하면 Hotspot Shield의 약관에 동의하는 것입니다.",
        signup_description_and: "및",
        signup_have_an_account: "이미 계정이 있음",
        tos: "이용 약관",
        policy: "개인 정보 취급 방침",
        modes_title: "연결 모드",
        modes_cookies: "쿠키 차단 프로그램",
        modes_tracker: "추적자가 차단됨",
        modes_adblock: "광고가 차단됨",
        modes_malware: "맬웨어 차단 프로그램",
        modes_notifications: "알림",
        modes_tooltips_tracker: "Hotspot Shield 세션 도중 분석 추적자(예: Google)를 활성화 또는 비활성화합니다.",
        modes_tooltips_adBlock: "Hotspot Shield 세션 도중 %BROWSER% 브라우저에서 광고 차단을 활성화 또는 비활성화합니다.",
        modes_tooltips_malware: "Hotspot Shield 세션 도중 %BROWSER% 브라우저에서 광고 맬웨어 차단 프로그램을 활성화 또는 비활성화합니다.",
        modes_tooltips_cookie: "Hotspot Shield 세션 도중 웹 쿠키를 활성화 또는 비활성화합니다.",
        modes_tooltips_settings: "여기서 보안 및 우회 사이트를 추가하고 관리하세요.",
        browser_settings_title: "브라우저 설정",
        browser_settings_open: "%BROWSER%에서 열기",
        banner_create_account_title: "Create account to increase your daily data limit to 500 MB",
        banner_create_account_description: "Creating a secure Hotspot Shield account will earn you another 250 MB of free daily data",
        banner_create_account_btn: "Create account",
        banner_download_app_title: "Install the app and increase combined daily data to 1 GB",
        banner_download_app_description:
          "With the daily limit of 500 MB in the Chrome extension, and 500 MB more in the desktop app, you will have 1 GB total",
        banner_download_app_btn: "Instal Hotspot Shield",
        banner_premium_btn: "Go unlimited with Premium",
        location_optimal_title: "자동 서버",
        location_title: "서버",
        location_show_all: "모두 표시",
        location_show_less: "간단히 표시",
        location_elite_only: "Premium 가입자에게 해당하는 위치입니다.",
        location_auto_title: "Hotspot Shield는 현재 사용 중인 연결에 최적화된 서버를 자동으로 선택합니다.",
        tooltip_previous: "이전",
        tooltip_next: "다음",
        tooltip_done: "완료",
        tooltip_title_1: "홈 페이지",
        tooltip_title_2: "대시보드",
        tooltip_title_3: "대시보드",
        tooltip_title_4: "구성",
        tooltip_text_1_1: "메뉴",
        tooltip_text_1_2: "구성",
        tooltip_text_1_3: "클릭하여 Hotspot Shield에 연결",
        tooltip_text_2_1: "현재 세션 지속 시간 카운터",
        tooltip_text_2_2: "클릭하여 연결 중지",
        tooltip_text_2_3: "지난 24시간 동안 사용한 데이터",
        tooltip_text_2_4: "현재 연결된 서버에 대한 속도",
        tooltip_text_2_5: "세션 도중 차단된 위협",
        tooltip_text_2_6: "연결할 가상 위치 선택",
        tooltip_text_3_1: "현재 연결된 서버",
        tooltip_text_3_2: "차단이 해제된 사이트 수",
        tooltip_text_3_3: "이러한 사이트에서 확장 프로그램 켜기",
        tooltip_text_3_4: "켜져 있으면 확장 프로그램 우회",
        tooltip_text_4_1: "기본 가상 위치 선택",
        tooltip_text_4_2: "방문하는 사이트의 광고 차단",
        tooltip_text_4_3: "온라인 추적 차단",
        tooltip_text_4_4: "타사 쿠키 차단",
        tooltip_text_4_5: "보안/우회 사이트 광고 및 관리",
        unavaliable_title: "사용자의 프록시 설정을 제어하는 다른 %BROWSER% 확장 프로그램으로 인해 Hotspot Shield가 중단되고 있습니다.",
        unavaliable_description:
          "단추를 클릭하여 프록시 설정을 제어하는 다른 확장 프로그램(예: 광고 차단 프로그램, 다른 VPN 서비스 등)을 비활성화하세요.",
        map_title: "탐색 위치",
        secured_websites_title: "자동 보호",
        secured_websites_showing: "표시 중",
        secured_websites_of: "/",
        secured_websites_add: "사이트 추가",
        bypass_title: "우회 웹 사이트",
        bypass_showing: "표시 중",
        bypass_of: "/",
        bypass_add: "사이트 추가",
        main_bypass_tooltip: "제품이 켜져 있을 때 Hotspot Shield 보안을 우회하려는 웹 사이트를 추가합니다.",
        main_secured_tooltip: "Hotspot Shield가 꺼져 있을 때 보안을 유지하려는 웹 사이트를 추가합니다.",
        connection_bandwidth: "대역폭",
        connection_speed: "속도",
        see_all: "모두 표시",
        unblocked_title: "사이트 차단이 해제됨",
        rate_us_rate_text: "별을 클릭해 평가해 주세요",
        rate_us_thank_you: "감사합니다!",
        rate_us_redirect_1: "멋지세요!\n잠시 시간을 내어 %BROWSER% Web Store에서 별 5개의 평점을 주시면 감사하겠습니다.",
        rate_us_redirect_2: "잠시 후 리디렉션됩니다.",
        statistic_title: "차단된 위협",
        statistic_ads: "광고",
        statistic_malware: "맬웨어",
        statistic_cookies: "쿠키",
        statistic_trackers: "추적자",
        help_icon_title: "확장 프로그램 아이콘",
        help_icon_1: "Hotspot Shield 보호가 꺼져 있습니다.",
        help_icon_2: "Hotspot Shield 보호가 켜져 있습니다.",
        help_icon_3: "이 도메인은 Hotspot Shield를 통해 자동으로 보안이 유지됩니다.",
        help_icon_4: "이 도메인은 Hotspot Shield가 우회합니다.",
        welcome_title: "Hotspot Shield를 설치해 주셔서 감사합니다!",
        welcome_row_1: "Hotspot Shield Premium 사용자가 되어 더 많은 혜택을 누리세요.",
        welcome_row_2: "다중 장치 지원",
        welcome_row_3: "프리미엄 서버 위치",
        welcome_row_4: "무제한 데이터 대역폭",
        welcome_row_5: "전용 고객 지원",
        welcome_row_6: "광고 없는 브라우징 경험",
        welcome_row_7: "또는 Hotspot Shield 다운로드",
        settings_add_title: "웹 사이트 추가",
        trial_thanks: "아니요. 무료로 계속 사용하겠습니다.",
        trial_onetime: "1회성 기회",
        trial_title: "Hotspot Shield Premium 사용자가 되어 더 많은 혜택을 누리세요.",
        trial_row_1: "다중 장치 지원",
        trial_row_2: "프리미엄 서버 위치",
        trial_row_3: "무제한 데이터 대역폭",
        trial_row_4: "전용 고객 지원",
        trial_row_5: "광고 없는 브라우징 경험"
      },
      tr: {
        powered: "Aura ile desteklenmektedir",
        version: "Sürüm",
        wait: "Lütfen bekleyin",
        loading_powered: "Kaliforniya'da Geliştirildi",
        connection_button_stop: "Durdur",
        connection_button_connecting: "Bağlanılıyor...",
        connection_button_connected: "Bağlanıldı",
        connection_button_disconnected: "Bağlanmak için tıklayın",
        buy_elite: "Hotspot Shield Premium'e Yükselt",
        menu_account: "Hesabım",
        menu_settings: "Ayarlar",
        menu_help: "Yardım",
        menu_about: "Hotspot Shield Hakkında",
        menu_upgrade: "Premium'e Yükselt",
        menu_rateus: "Bizi derecelendirin",
        menu_share: "Bu uygulamayı paylaş",
        menu_chrome: "%BROWSER% uzantısı",
        sign_in: "Oturum Aç",
        sign_up: "Kaydol",
        about_privacy: "Gizlilik İlkesi",
        about_terms: "Şart ve Koşullar",
        about_like: "Bizi Facebook'ta beğenin",
        about_follow: "Bizi Twitter'da takip edin",
        help_tutorial: "Öğretici",
        help_payments: "Ödemeler/Abonelik",
        help_manage: "Hesabı ve Cihazları Yönet",
        help_support: "Destek",
        help_other: "Diğer",
        help_contact: "Bize Ulaşın",
        account_type: "Hesap türü",
        account_upgrade: "Premium'e Yükselt",
        account_username: "Kullanıcı Adı",
        account_switch: "Hesap Değiştir",
        account_key: "Lisans anahtarı",
        account_redeem: "Lisans Kullan",
        account_activated: "Etkinleştirildi",
        restore_forgot: "Parolayı mı unuttunuz?",
        fill: "Vurgulanmış alanları doldurun",
        password6: "Parola 6 veya daha fazla karakterden oluşmalıdır",
        settings_notifications: "Bildirimler",
        settings_language: "Dil",
        signin_noaccount: "Hesabınız yok mu?",
        label_email: "E-Posta Adresi",
        label_enterpassword: "Parolanızı girin",
        label_createpassword: "Parolanızı girin",
        signup_description: "Kaydol'a tıklayarak Hotspot Shield'a ait şunları kabul etmiş olursunuz:",
        signup_description_and: "ve",
        signup_have_an_account: "Zaten bir Hesabım var",
        tos: "Şart ve Koşullar",
        policy: "Gizlilik İlkesi",
        modes_title: "Bağlantı Modları",
        modes_cookies: "Çerez engelleyici",
        modes_tracker: "Engellenen izleyiciler",
        modes_adblock: "Engellenen reklamlar",
        modes_malware: "Malware engelleyici",
        modes_notifications: "Bildirimler",
        modes_tooltips_tracker:
          "Hotspot Shield oturumunuz sırasında Google gibi analitik izleyicileri etkinleştirin veya devre dışı bırakın.",
        modes_tooltips_adBlock:
          "Hotspot Shield oturumunuz sırasında %BROWSER% tarayıcısında reklam engelleme özelliğini etkinleştirin veya devre dışı bırakın.",
        modes_tooltips_malware:
          "Hotspot Shield oturumunuz sırasında %BROWSER% tarayıcısında kötü amaçlı reklam yazılımı engelleyicisini etkinleştirin veya devre dışı bırakın.",
        modes_tooltips_cookie: "Hotspot Shield oturumunuz sırasında internet çerezlerini etkinleştirin veya devre dışı bırakın.",
        modes_tooltips_settings: "Güvenli ve atlanan siteleri buradan ekleyin ve yönetin.",
        browser_settings_title: "Tarayıcı ayarları",
        browser_settings_open: "%BROWSER%'da aç",
        banner_create_account_title: "Create account to increase your daily data limit to 500 MB",
        banner_create_account_description: "Creating a secure Hotspot Shield account will earn you another 250 MB of free daily data",
        banner_create_account_btn: "Create account",
        banner_download_app_title: "Install the app and increase combined daily data to 1 GB",
        banner_download_app_description:
          "With the daily limit of 500 MB in the Chrome extension, and 500 MB more in the desktop app, you will have 1 GB total",
        banner_download_app_btn: "Instal Hotspot Shield",
        banner_premium_btn: "Go unlimited with Premium",
        location_optimal_title: "Otomatik sunucu",
        location_title: "Sunucular",
        location_show_all: "Tümünü göster",
        location_show_less: "Daha az göster",
        location_elite_only: "Premium aboneleri için konum seçenekleri mevcuttur.",
        location_auto_title: "Hotspot Shield, bağlantınız için en iyi sunucuyu otomatik olarak seçer.",
        tooltip_previous: "Önceki",
        tooltip_next: "İleri",
        tooltip_done: "Bitti",
        tooltip_title_1: "Giriş sayfası",
        tooltip_title_2: "Kontrol paneli",
        tooltip_title_3: "Kontrol paneli",
        tooltip_title_4: "Yapılandırma",
        tooltip_text_1_1: "Menü",
        tooltip_text_1_2: "Yapılandırma",
        tooltip_text_1_3: "Hotspot Shield'a bağlanmak için tıklayın",
        tooltip_text_2_1: "Current session duration counter",
        tooltip_text_2_2: "Click to stop the connection",
        tooltip_text_2_3: "Consumed data over past 24 hours",
        tooltip_text_2_4: "Speed to currently connected server",
        tooltip_text_2_5: "Blocked threats during the session",
        tooltip_text_2_6: "Select virtual location to connect to",
        tooltip_text_3_1: "Halihazırda bağlanılan sunucu",
        tooltip_text_3_2: "Engeli kaldırılan site sayısı",
        tooltip_text_3_3: "Bu sitelerde uzantıyı etkinleştirin",
        tooltip_text_3_4: "Açıldığında uzantıyı atlayın",
        tooltip_text_4_1: "İstediğiniz sanal konumu seçin",
        tooltip_text_4_2: "Ziyaret ettiğiniz sitedeki reklamları engelleyin",
        tooltip_text_4_3: "Çevrimiçi izlemeyi engelleyin",
        tooltip_text_4_4: "Üçüncü taraf çerezleri engelleyin",
        tooltip_text_4_5: "Güvenli/atlanan siteleri ekleyin ve yönetin",
        unavaliable_title: "Hotspot Shield, ara sunucu ayarlarınızı kontrol eden başka bir %BROWSER% uzantısı tarafından engelleniyor.",
        unavaliable_description:
          "Lütfen ara sunucu ayarlarınızı kontrol eden diğer uzantıları (reklam engelleme yazılımları, diğer VPN hizmetleri vb.) devre dışı bırakmak için düğmeye tıklayın.",
        map_title: "Şu ülkeden giriş yap",
        secured_websites_title: "Otomatik koruma",
        secured_websites_showing: "Gösteriliyor",
        secured_websites_of: "/",
        secured_websites_add: "Site Ekle",
        bypass_title: "Atlanan web siteler",
        bypass_showing: "Gösteriliyor",
        bypass_of: "/",
        bypass_add: "Site Ekle",
        main_bypass_tooltip: "Uygulama açıldığında Hotspot Shield güvenliğini atlamak istediğiniz web sitelerini ekleyin.",
        main_secured_tooltip: "Hotspot Shield kapatıldığında korunmasını istediğiniz web sitelerini ekleyin.",
        connection_bandwidth: "Bant genişliği",
        connection_speed: "Hız",
        see_all: "Tümünü gör",
        unblocked_title: "Engeli kaldırılan siteler",
        rate_us_rate_text: "Bizi derecelendirmek için yıldızlara tıklayın",
        rate_us_thank_you: "Teşekkürler!",
        rate_us_redirect_1: "Harikasınız!\nLütfen bir dakikanızı ayırıp %BROWSER% Web Mağazası'nda bize 5 yıldız verin.",
        rate_us_redirect_2: "Hemen yönlendirileceksiniz...",
        statistic_title: "Engellenen tehditler",
        statistic_ads: "Reklamlar",
        statistic_malware: "Malware",
        statistic_cookies: "Çerezler",
        statistic_trackers: "İzleyiciler",
        help_icon_title: "Uzantı simgesi",
        help_icon_1: "Hotspot Shield koruması kapalı.",
        help_icon_2: "Hotspot Shield koruması açık.",
        help_icon_3: "Hotspot Shield bu etki alanını otomatik olarak koruyor.",
        help_icon_4: "Hotspot Shield bu etki alanını atlıyor.",
        welcome_title: "Hotspot Shield'ı yüklediğiniz için teşekkürler!",
        welcome_row_1: "Hotspot Shield Premium ile daha fazlasına sahip olun",
        welcome_row_2: "Çoklu cihaz desteği",
        welcome_row_3: "Premium sunucu konumları",
        welcome_row_4: "Sınırsız veri bant genişliği",
        welcome_row_5: "Özel müşteri desteği",
        welcome_row_6: "Reklamsız gezinme deneyimi",
        welcome_row_7: "Ya da Hotspot Shield'ı şunlar için indirin:",
        settings_add_title: "Bir web sitesi ekle",
        trial_thanks: "Hayır, teşekkürler; ücretsiz sürümle devam et",
        trial_onetime: "Tek Seferlik Teklif",
        trial_title: "Hotspot Shield Premium ile daha fazlasına sahip olun",
        trial_row_1: "Çoklu cihaz desteği",
        trial_row_2: "Premium sunucu konumları",
        trial_row_3: "Sınırsız veri bant genişliği",
        trial_row_4: "Özel müşteri desteği",
        trial_row_5: "Reklamsız gezinme deneyimi"
      },
      es: {
        powered: "Con la tecnología de Aura",
        version: "Versión",
        wait: "Espere",
        loading_powered: "Hecho en California",
        connection_button_stop: "Detener",
        connection_button_connecting: "Conectando...",
        connection_button_connected: "Conectado",
        connection_button_disconnected: "Haga clic para conectar",
        buy_elite: "Actualícese a Hotspot Shield Premium",
        menu_account: "Mi cuenta",
        menu_settings: "Configuración",
        menu_help: "Ayuda",
        menu_about: "Acerca de Hotspot Shield",
        menu_upgrade: "Actualice a Premium",
        menu_rateus: "Califíquenos",
        menu_share: "Compartir esta aplicación",
        menu_chrome: "Extensión de %BROWSER%",
        sign_in: "Iniciar sesión",
        sign_up: "Registrarse",
        about_privacy: "Política de privacidad",
        about_terms: "Términos y condiciones",
        about_like: "Síganos en Facebook",
        about_follow: "Síganos en Twitter",
        help_tutorial: "Tutorial",
        help_payments: "Pagos/Suscripción",
        help_manage: "Administrar cuenta y dispositivos",
        help_support: "Asistencia",
        help_other: "Otro",
        help_contact: "Póngase en contacto con nosotros",
        account_type: "Tipo de cuenta",
        account_upgrade: "Actualice a Premium",
        account_username: "Nombre de usuario",
        account_switch: "Cambiar de cuenta",
        account_key: "Clave de licencia",
        account_redeem: "Canjear licencia",
        account_activated: "Activado",
        restore_forgot: "¿Ha olvidado su contraseña?",
        fill: "Rellenar los campos resaltados",
        password6: "La contraseña debe tener más de seis caracteres",
        settings_notifications: "Notificaciones",
        settings_language: "Idioma",
        signin_noaccount: "¿No tiene una cuenta?",
        label_email: "Dirección de correo electrónico",
        label_enterpassword: "Introduzca la contraseña",
        label_createpassword: "Introduzca la contraseña",
        signup_description: "Al hacer clic en Registrarse, acepta ",
        signup_description_and: "y",
        signup_have_an_account: "Ya tiene una cuenta",
        tos: "Términos y condiciones de Hotspot Shield",
        policy: "Política de privacidad",
        modes_title: "Modos de conexión",
        modes_cookies: "Bloqueador de cookies",
        modes_tracker: "Rastreadores bloqueados",
        modes_adblock: "Anuncios bloqueados",
        modes_malware: "Bloqueador de malware",
        modes_notifications: "Notificaciones",
        modes_tooltips_tracker: "Habilite o deshabilite los rastreadores de análisis, como Google, durante su sesión de Hotspot Shield.",
        modes_tooltips_adBlock:
          "Habilite o deshabilite el bloqueador de anuncios en el navegador %BROWSER% durante su sesión de Hotspot Shield.",
        modes_tooltips_malware:
          "Habilite o deshabilite el bloqueador de malware en el navegador %BROWSER% durante su sesión de Hotspot Shield.",
        modes_tooltips_cookie: "Habilite o deshabilite las cookies web durante su sesión de Hotspot Shield.",
        modes_tooltips_settings: "Agregue y administre los sitios seguros y de sobrepaso aquí.",
        browser_settings_title: "Configura tu navegador",
        browser_settings_open: "Abrir en %BROWSER%",
        banner_create_account_title: "Create account to increase your daily data limit to 500 MB",
        banner_create_account_description: "Creating a secure Hotspot Shield account will earn you another 250 MB of free daily data",
        banner_create_account_btn: "Create account",
        banner_download_app_title: "Install the app and increase combined daily data to 1 GB",
        banner_download_app_description:
          "With the daily limit of 500 MB in the Chrome extension, and 500 MB more in the desktop app, you will have 1 GB total",
        banner_download_app_btn: "Instal Hotspot Shield",
        banner_premium_btn: "Go unlimited with Premium",
        location_optimal_title: "Servidor automático",
        location_title: "Servidores",
        location_show_all: "Mostrar todo",
        location_show_less: "Mostrar menos",
        location_elite_only: "Ubicación disponible para suscriptores de Premium",
        location_auto_title: "Hotspot Shield selecciona automáticamente el mejor servidor para su conexión.",
        tooltip_previous: "Anterior",
        tooltip_next: "Siguiente",
        tooltip_done: "Hecho",
        tooltip_title_1: "Página principal",
        tooltip_title_2: "Panel",
        tooltip_title_3: "Panel",
        tooltip_title_4: "Configuración",
        tooltip_text_1_1: "Menú",
        tooltip_text_1_2: "Configuración",
        tooltip_text_1_3: "Haga clic para conectarse a Hotspot Shield.",
        tooltip_text_2_1: "Current session duration counter",
        tooltip_text_2_2: "Click to stop the connection",
        tooltip_text_2_3: "Consumed data over past 24 hours",
        tooltip_text_2_4: "Speed to currently connected server",
        tooltip_text_2_5: "Blocked threats during the session",
        tooltip_text_2_6: "Select virtual location to connect to",
        tooltip_text_3_1: "Servidor conectado actualmente",
        tooltip_text_3_2: "Número de sitios desbloqueados",
        tooltip_text_3_3: "Active la extensión de estos sitios",
        tooltip_text_3_4: "Derive la extensión cuando esté activada",
        tooltip_text_4_1: "Select your preferred virtual location",
        tooltip_text_4_2: "Block ads on sites you visit",
        tooltip_text_4_3: "Prevent online tracking",
        tooltip_text_4_4: "Block 3rd party cookies",
        tooltip_text_4_5: "Add & manage secure/bypass sites",
        unavaliable_title: "Otra extensión de %BROWSER% que controla su configuración de proxy está interrumpiendo a Hotspot Shield.",
        unavaliable_description:
          "Haga clic en el botón para deshabilitar otras extensiones (bloqueadores de anuncios, otros servicios de VPN, etc.) que controlan la configuración de proxy.",
        map_title: "Explorar desde",
        secured_websites_title: "Protección automática",
        secured_websites_showing: "Mostrar",
        secured_websites_of: "de",
        secured_websites_add: "Agregar sitio",
        bypass_title: "Sobrepasar sitios web",
        bypass_showing: "Mostrar",
        bypass_of: "de",
        bypass_add: "Agregar sitio",
        main_bypass_tooltip:
          "Agregue sitios web a los que quiera sobrepasar la seguridad de Hotspot Shield cuando el producto esté activado.",
        main_secured_tooltip: "Agregue sitios web que quiera proteger cuando Hotspot Shield esté desactivado.",
        connection_bandwidth: "Ancho de banda",
        connection_speed: "Velocidad",
        see_all: "Ver todo",
        unblocked_title: "Sitios desbloqueados",
        rate_us_rate_text: "Haga clic en las estrellas para calificarnos.",
        rate_us_thank_you: "¡Gracias!",
        rate_us_redirect_1: "¡Genial!\nTómese un momento para calificarnos con 5 estrellas en %BROWSER% Store.",
        rate_us_redirect_2: "Se le redirigirá en breve...",
        statistic_title: "Amenazas bloqueadas",
        statistic_ads: "Anuncios",
        statistic_malware: "Malware",
        statistic_cookies: "Cookies",
        statistic_trackers: "Rastreadores",
        help_icon_title: "Icono de la extensión",
        help_icon_1: "La protección de Hotspot Shield está desactivada.",
        help_icon_2: "La protección de Hotspot Shield está activada.",
        help_icon_3: "Hotspot Shield está protegiendo este dominio automáticamente.",
        help_icon_4: "Hotspot Shield está ignorando este dominio automáticamente.",
        welcome_title: "Gracias por instalar Hotspot Shield.",
        welcome_row_1: "Más ventajas con Hotspot Shield Premium",
        welcome_row_2: "Compatibilidad con varios dispositivos",
        welcome_row_3: "Ubicaciones de servidores premium",
        welcome_row_4: "Ancho de banda ilimitado",
        welcome_row_5: "Atención preferencial al cliente",
        welcome_row_6: "Experiencia de navegación sin anuncios",
        welcome_row_7: "O descargar Hotspot Shield para",
        settings_add_title: "Agregar un sitio web",
        trial_thanks: "No gracias, continuar con la versión gratuita",
        trial_onetime: "Oferta única",
        trial_title: "Más ventajas con Hotspot Shield Premium",
        trial_row_1: "Compatibilidad con varios dispositivos",
        trial_row_2: "Ubicaciones de servidores premium",
        trial_row_3: "Ancho de banda ilimitado",
        trial_row_4: "Atención preferencial al cliente",
        trial_row_5: "Experiencia de navegación sin anuncios"
      }
    };
    const a = "Locales.language";
    t.a = class {
      constructor() {
        this.restoreLanguage();
      }
      get(e) {
        return Object(r.a)(e);
      }
      getActiveLanguage() {
        return this.language;
      }
      getAllLanguages() {
        return sdk.lokalise.getAllLanguages();
      }
      restoreLanguage() {
        let e;
        try {
          e = (window.navigator.userLanguage || window.navigator.language || "").substr(0, 2) || "en";
        } catch (t) {
          e = "en";
        }
        o[e] || (e = "en"),
          (this.systemLanguage = e),
          sdk && sdk.storage
            ? (this.language = sdk.storage.get(a) ? sdk.storage.get(a) : this.systemLanguage)
            : (this.language = this.systemLanguage),
          document.getElementsByTagName("body") &&
            document.getElementsByTagName("body")[0] &&
            (document.getElementsByTagName("body")[0].className = this.language);
      }
      getLanguage() {
        return sdk.storage.get(a) ? this.language : this.systemLanguage;
      }
      setLanguage(e) {
        return sdk.storage.set(a, e).then(() => {
          (this.language = e),
            document.getElementsByTagName("body") &&
              document.getElementsByTagName("body")[0] &&
              (document.getElementsByTagName("body")[0].className = this.language);
        });
      }
    };
  },
  12: function (e, t) {
    window.chrome ? window.browser || (window.browser = window.chrome) : (window.chrome = window.browser ? window.browser : {});
  },
  14: function (e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(6),
      o = 60103,
      a = 60106;
    (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
    var i = 60109,
      l = 60110,
      s = 60112;
    t.Suspense = 60113;
    var u = 60115,
      c = 60116;
    if ("function" == typeof Symbol && Symbol.for) {
      var d = Symbol.for;
      (o = d("react.element")),
        (a = d("react.portal")),
        (t.Fragment = d("react.fragment")),
        (t.StrictMode = d("react.strict_mode")),
        (t.Profiler = d("react.profiler")),
        (i = d("react.provider")),
        (l = d("react.context")),
        (s = d("react.forward_ref")),
        (t.Suspense = d("react.suspense")),
        (u = d("react.memo")),
        (c = d("react.lazy"));
    }
    var f = "function" == typeof Symbol && Symbol.iterator;
    function p(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      m = {};
    function _(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
    }
    function g() {}
    function b(e, t, n) {
      (this.props = e), (this.context = t), (this.refs = m), (this.updater = n || h);
    }
    (_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(p(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (g.prototype = _.prototype);
    var y = (b.prototype = new g());
    (y.constructor = b), r(y, _.prototype), (y.isPureReactComponent = !0);
    var v = { current: null },
      w = Object.prototype.hasOwnProperty,
      k = { key: !0, ref: !0, __self: !0, __source: !0 };
    function x(e, t, n) {
      var r,
        a = {},
        i = null,
        l = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t))
          w.call(t, r) && !k.hasOwnProperty(r) && (a[r] = t[r]);
      var s = arguments.length - 2;
      if (1 === s) a.children = n;
      else if (1 < s) {
        for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
        a.children = u;
      }
      if (e && e.defaultProps) for (r in (s = e.defaultProps)) void 0 === a[r] && (a[r] = s[r]);
      return { $$typeof: o, type: e, key: i, ref: l, props: a, _owner: v.current };
    }
    function S(e) {
      return "object" == typeof e && null !== e && e.$$typeof === o;
    }
    var E = /\/+/g;
    function C(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })("" + e.key)
        : t.toString(36);
    }
    function O(e, t, n, r, i) {
      var l = typeof e;
      ("undefined" !== l && "boolean" !== l) || (e = null);
      var s = !1;
      if (null === e) s = !0;
      else
        switch (l) {
          case "string":
          case "number":
            s = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case o:
              case a:
                s = !0;
            }
        }
      if (s)
        return (
          (i = i((s = e))),
          (e = "" === r ? "." + C(s, 0) : r),
          Array.isArray(i)
            ? ((n = ""),
              null != e && (n = e.replace(E, "$&/") + "/"),
              O(i, t, n, "", function (e) {
                return e;
              }))
            : null != i &&
              (S(i) &&
                (i = (function (e, t) {
                  return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                })(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)),
              t.push(i)),
          1
        );
      if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
        for (var u = 0; u < e.length; u++) {
          var c = r + C((l = e[u]), u);
          s += O(l, t, n, c, i);
        }
      else if (
        "function" ==
        typeof (c = (function (e) {
          return null === e || "object" != typeof e ? null : "function" == typeof (e = (f && e[f]) || e["@@iterator"]) ? e : null;
        })(e))
      )
        for (e = c.call(e), u = 0; !(l = e.next()).done; ) s += O((l = l.value), t, n, (c = r + C(l, u++)), i);
      else if ("object" === l)
        throw ((t = "" + e), Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
      return s;
    }
    function P(e, t, n) {
      if (null == e) return e;
      var r = [],
        o = 0;
      return (
        O(e, r, "", "", function (e) {
          return t.call(n, e, o++);
        }),
        r
      );
    }
    function N(e) {
      if (-1 === e._status) {
        var t = e._result;
        (t = t()),
          (e._status = 0),
          (e._result = t),
          t.then(
            function (t) {
              0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
            },
            function (t) {
              0 === e._status && ((e._status = 2), (e._result = t));
            }
          );
      }
      if (1 === e._status) return e._result;
      throw e._result;
    }
    var z = { current: null };
    function j() {
      var e = z.current;
      if (null === e) throw Error(p(321));
      return e;
    }
    var T = {
      ReactCurrentDispatcher: z,
      ReactCurrentBatchConfig: { transition: 0 },
      ReactCurrentOwner: v,
      IsSomeRendererActing: { current: !1 },
      assign: r
    };
    (t.Children = {
      map: P,
      forEach: function (e, t, n) {
        P(
          e,
          function () {
            t.apply(this, arguments);
          },
          n
        );
      },
      count: function (e) {
        var t = 0;
        return (
          P(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          P(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e)) throw Error(p(143));
        return e;
      }
    }),
      (t.Component = _),
      (t.PureComponent = b),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
      (t.cloneElement = function (e, t, n) {
        if (null == e) throw Error(p(267, e));
        var a = r({}, e.props),
          i = e.key,
          l = e.ref,
          s = e._owner;
        if (null != t) {
          if ((void 0 !== t.ref && ((l = t.ref), (s = v.current)), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps))
            var u = e.type.defaultProps;
          for (c in t) w.call(t, c) && !k.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
        }
        var c = arguments.length - 2;
        if (1 === c) a.children = n;
        else if (1 < c) {
          u = Array(c);
          for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
          a.children = u;
        }
        return { $$typeof: o, type: e.type, key: i, ref: l, props: a, _owner: s };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: l,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = { $$typeof: i, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = x),
      (t.createFactory = function (e) {
        var t = x.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: s, render: e };
      }),
      (t.isValidElement = S),
      (t.lazy = function (e) {
        return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: N };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return j().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return j().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return j().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, n) {
        return j().useImperativeHandle(e, t, n);
      }),
      (t.useLayoutEffect = function (e, t) {
        return j().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return j().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, n) {
        return j().useReducer(e, t, n);
      }),
      (t.useRef = function (e) {
        return j().useRef(e);
      }),
      (t.useState = function (e) {
        return j().useState(e);
      }),
      (t.version = "17.0.2");
  },
  15: function (e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ n(6);
    var r = n(1),
      o = 60103;
    if (((t.Fragment = 60107), "function" == typeof Symbol && Symbol.for)) {
      var a = Symbol.for;
      (o = a("react.element")), (t.Fragment = a("react.fragment"));
    }
    var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      l = Object.prototype.hasOwnProperty,
      s = { key: !0, ref: !0, __self: !0, __source: !0 };
    function u(e, t, n) {
      var r,
        a = {},
        u = null,
        c = null;
      for (r in (void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t))
        l.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
      if (e && e.defaultProps) for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
      return { $$typeof: o, type: e, key: u, ref: c, props: a, _owner: i.current };
    }
    (t.jsx = u), (t.jsxs = u);
  },
  17: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(0);
    function o() {
      return Object(r.jsxs)("div", {
        id: "footer",
        className: "footer",
        children: [
          locales.get("reserved"),
          Object(r.jsx)("a", {
            href: `https://aura.com/legal/privacy-policy/?utm_source=${sdk.config.elite.popupUtm}&utm_medium=Free&utm_campaign=PrivacyPolicy`,
            target: "_blank",
            rel: "noopener noreferrer",
            children: locales.get("policy")
          }),
          ", ",
          Object(r.jsx)("a", {
            href: `https://www.hotspotshield.com/terms/?utm_source=${sdk.config.elite.popupUtm}&utm_medium=Free&utm_campaign=TermsConditions`,
            target: "_blank",
            rel: "noopener noreferrer",
            children: locales.get("tos")
          })
        ]
      });
    }
  },
  18: function (e, t, n) {
    "use strict";
    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(1),
      o = n(6),
      a = n(19);
    function i(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(i(227));
    var l = new Set(),
      s = {};
    function u(e, t) {
      c(e, t), c(e + "Capture", t);
    }
    function c(e, t) {
      for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
    }
    var d = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
      f =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      p = Object.prototype.hasOwnProperty,
      h = {},
      m = {};
    function _(e, t, n, r, o, a, i) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = i);
    }
    var g = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        g[e] = new _(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach(function (e) {
        var t = e[0];
        g[t] = new _(t, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
        g[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
        g[e] = new _(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          g[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        g[e] = new _(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        g[e] = new _(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        g[e] = new _(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        g[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var b = /[\-:]([a-z])/g;
    function y(e) {
      return e[1].toUpperCase();
    }
    function v(e, t, n, r) {
      var o = g.hasOwnProperty(t) ? g[t] : null;
      (null !== o ? 0 === o.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, o, r) && (n = null),
        r || null === o
          ? (function (e) {
              return !!p.call(m, e) || (!p.call(h, e) && (f.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)));
            })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : o.mustUseProperty
          ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
          : ((t = o.attributeName),
            (r = o.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(b, y);
        g[t] = new _(t, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
        var t = e.replace(b, y);
        g[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var t = e.replace(b, y);
        g[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        g[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (g.xlinkHref = new _("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        g[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      k = 60103,
      x = 60106,
      S = 60107,
      E = 60108,
      C = 60114,
      O = 60109,
      P = 60110,
      N = 60112,
      z = 60113,
      j = 60120,
      T = 60115,
      R = 60116,
      L = 60121,
      M = 60128,
      H = 60129,
      B = 60130,
      I = 60131;
    if ("function" == typeof Symbol && Symbol.for) {
      var F = Symbol.for;
      (k = F("react.element")),
        (x = F("react.portal")),
        (S = F("react.fragment")),
        (E = F("react.strict_mode")),
        (C = F("react.profiler")),
        (O = F("react.provider")),
        (P = F("react.context")),
        (N = F("react.forward_ref")),
        (z = F("react.suspense")),
        (j = F("react.suspense_list")),
        (T = F("react.memo")),
        (R = F("react.lazy")),
        (L = F("react.block")),
        F("react.scope"),
        (M = F("react.opaque.id")),
        (H = F("react.debug_trace_mode")),
        (B = F("react.offscreen")),
        (I = F("react.legacy_hidden"));
    }
    var A,
      D = "function" == typeof Symbol && Symbol.iterator;
    function U(e) {
      return null === e || "object" != typeof e ? null : "function" == typeof (e = (D && e[D]) || e["@@iterator"]) ? e : null;
    }
    function W(e) {
      if (void 0 === A)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          A = (t && t[1]) || "";
        }
      return "\n" + A + e;
    }
    var V = !1;
    function $(e, t) {
      if (!e || V) return "";
      V = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              }
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (e) {
        if (e && r && "string" == typeof e.stack) {
          for (
            var o = e.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, l = a.length - 1;
            1 <= i && 0 <= l && o[i] !== a[l];

          )
            l--;
          for (; 1 <= i && 0 <= l; i--, l--)
            if (o[i] !== a[l]) {
              if (1 !== i || 1 !== l)
                do {
                  if ((i--, 0 > --l || o[i] !== a[l])) return "\n" + o[i].replace(" at new ", " at ");
                } while (1 <= i && 0 <= l);
              break;
            }
        }
      } finally {
        (V = !1), (Error.prepareStackTrace = n);
      }
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function Q(e) {
      switch (e.tag) {
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = $(e.type, !1));
        case 11:
          return (e = $(e.type.render, !1));
        case 22:
          return (e = $(e.type._render, !1));
        case 1:
          return (e = $(e.type, !0));
        default:
          return "";
      }
    }
    function q(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case S:
          return "Fragment";
        case x:
          return "Portal";
        case C:
          return "Profiler";
        case E:
          return "StrictMode";
        case z:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case P:
            return (e.displayName || "Context") + ".Consumer";
          case O:
            return (e._context.displayName || "Context") + ".Provider";
          case N:
            var t = e.render;
            return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
          case T:
            return q(e.type);
          case L:
            return q(e._render);
          case R:
            (t = e._payload), (e = e._init);
            try {
              return q(e(t));
            } catch (e) {}
        }
      return null;
    }
    function G(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function K(e) {
      var t = e.type;
      return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
    }
    function Y(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = K(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var o = n.get,
              a = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return o.call(this);
                },
                set: function (e) {
                  (r = "" + e), a.call(this, e);
                }
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                }
              }
            );
          }
        })(e));
    }
    function X(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return e && (r = K(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
    }
    function Z(e) {
      if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function J(e, t) {
      var n = t.checked;
      return o({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
      });
    }
    function ee(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = G(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        });
    }
    function te(e, t) {
      null != (t = t.checked) && v(e, "checked", t, !1);
    }
    function ne(e, t) {
      te(e, t);
      var n = G(t.value),
        r = t.type;
      if (null != n)
        "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
      t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, G(t.defaultValue)),
        null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
    }
    function re(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
    }
    function oe(e, t, n) {
      ("number" === t && Z(e.ownerDocument) === e) ||
        (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function ae(e, t) {
      return (
        (e = o({ children: void 0 }, t)),
        (t = (function (e) {
          var t = "";
          return (
            r.Children.forEach(e, function (e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function ie(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
          (o = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + G(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
          null !== t || e[o].disabled || (t = e[o]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function le(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
      return o({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
    }
    function se(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(i(92));
          if (Array.isArray(n)) {
            if (!(1 >= n.length)) throw Error(i(93));
            n = n[0];
          }
          t = n;
        }
        null == t && (t = ""), (n = t);
      }
      e._wrapperState = { initialValue: G(n) };
    }
    function ue(e, t) {
      var n = G(t.value),
        r = G(t.defaultValue);
      null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function ce(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
    }
    var de = "http://www.w3.org/1999/xhtml",
      fe = "http://www.w3.org/2000/svg";
    function pe(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function he(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? pe(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var me,
      _e = (function (e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, o) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (me = me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = me.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function ge(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    var be = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      ye = ["Webkit", "ms", "Moz", "O"];
    function ve(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n || "number" != typeof t || 0 === t || (be.hasOwnProperty(e) && be[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function we(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            o = ve(n, t[n], r);
          "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
    }
    Object.keys(be).forEach(function (e) {
      ye.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (be[t] = be[e]);
      });
    });
    var ke = o(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    );
    function xe(e, t) {
      if (t) {
        if (ke[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(i(60));
          if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61));
        }
        if (null != t.style && "object" != typeof t.style) throw Error(i(62));
      }
    }
    function Se(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Ee(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var Ce = null,
      Oe = null,
      Pe = null;
    function Ne(e) {
      if ((e = Zr(e))) {
        if ("function" != typeof Ce) throw Error(i(280));
        var t = e.stateNode;
        t && ((t = eo(t)), Ce(e.stateNode, e.type, t));
      }
    }
    function ze(e) {
      Oe ? (Pe ? Pe.push(e) : (Pe = [e])) : (Oe = e);
    }
    function je() {
      if (Oe) {
        var e = Oe,
          t = Pe;
        if (((Pe = Oe = null), Ne(e), t)) for (e = 0; e < t.length; e++) Ne(t[e]);
      }
    }
    function Te(e, t) {
      return e(t);
    }
    function Re(e, t, n, r, o) {
      return e(t, n, r, o);
    }
    function Le() {}
    var Me = Te,
      He = !1,
      Be = !1;
    function Ie() {
      (null === Oe && null === Pe) || (Le(), je());
    }
    function Fe(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var r = eo(n);
      if (null === r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
      return n;
    }
    var Ae = !1;
    if (d)
      try {
        var De = {};
        Object.defineProperty(De, "passive", {
          get: function () {
            Ae = !0;
          }
        }),
          window.addEventListener("test", De, De),
          window.removeEventListener("test", De, De);
      } catch (e) {
        Ae = !1;
      }
    function Ue(e, t, n, r, o, a, i, l, s) {
      var u = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, u);
      } catch (e) {
        this.onError(e);
      }
    }
    var We = !1,
      Ve = null,
      $e = !1,
      Qe = null,
      qe = {
        onError: function (e) {
          (We = !0), (Ve = e);
        }
      };
    function Ge(e, t, n, r, o, a, i, l, s) {
      (We = !1), (Ve = null), Ue.apply(qe, arguments);
    }
    function Ke(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function Ye(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
      }
      return null;
    }
    function Xe(e) {
      if (Ke(e) !== e) throw Error(i(188));
    }
    function Ze(e) {
      if (
        !(e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = Ke(e))) throw Error(i(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var o = n.return;
            if (null === o) break;
            var a = o.alternate;
            if (null === a) {
              if (null !== (r = o.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (o.child === a.child) {
              for (a = o.child; a; ) {
                if (a === n) return Xe(o), e;
                if (a === r) return Xe(o), t;
                a = a.sibling;
              }
              throw Error(i(188));
            }
            if (n.return !== r.return) (n = o), (r = a);
            else {
              for (var l = !1, s = o.child; s; ) {
                if (s === n) {
                  (l = !0), (n = o), (r = a);
                  break;
                }
                if (s === r) {
                  (l = !0), (r = o), (n = a);
                  break;
                }
                s = s.sibling;
              }
              if (!l) {
                for (s = a.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = a), (r = o);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = a), (n = o);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) throw Error(i(189));
              }
            }
            if (n.alternate !== r) throw Error(i(190));
          }
          if (3 !== n.tag) throw Error(i(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    function Je(e, t) {
      for (var n = e.alternate; null !== t; ) {
        if (t === e || t === n) return !0;
        t = t.return;
      }
      return !1;
    }
    var et,
      tt,
      nt,
      rt,
      ot = !1,
      at = [],
      it = null,
      lt = null,
      st = null,
      ut = new Map(),
      ct = new Map(),
      dt = [],
      ft =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function pt(e, t, n, r, o) {
      return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: o, targetContainers: [r] };
    }
    function ht(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          it = null;
          break;
        case "dragenter":
        case "dragleave":
          lt = null;
          break;
        case "mouseover":
        case "mouseout":
          st = null;
          break;
        case "pointerover":
        case "pointerout":
          ut.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ct.delete(t.pointerId);
      }
    }
    function mt(e, t, n, r, o, a) {
      return null === e || e.nativeEvent !== a
        ? ((e = pt(t, n, r, o, a)), null !== t && null !== (t = Zr(t)) && tt(t), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
    }
    function _t(e) {
      var t = Xr(e.target);
      if (null !== t) {
        var n = Ke(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = Ye(n)))
              return (
                (e.blockedOn = t),
                void rt(e.lanePriority, function () {
                  a.unstable_runWithPriority(e.priority, function () {
                    nt(n);
                  });
                })
              );
          } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function gt(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = Zr(n)) && tt(t), (e.blockedOn = n), !1;
        t.shift();
      }
      return !0;
    }
    function bt(e, t, n) {
      gt(e) && n.delete(t);
    }
    function yt() {
      for (ot = !1; 0 < at.length; ) {
        var e = at[0];
        if (null !== e.blockedOn) {
          null !== (e = Zr(e.blockedOn)) && et(e);
          break;
        }
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n) {
            e.blockedOn = n;
            break;
          }
          t.shift();
        }
        null === e.blockedOn && at.shift();
      }
      null !== it && gt(it) && (it = null),
        null !== lt && gt(lt) && (lt = null),
        null !== st && gt(st) && (st = null),
        ut.forEach(bt),
        ct.forEach(bt);
    }
    function vt(e, t) {
      e.blockedOn === t && ((e.blockedOn = null), ot || ((ot = !0), a.unstable_scheduleCallback(a.unstable_NormalPriority, yt)));
    }
    function wt(e) {
      function t(t) {
        return vt(t, e);
      }
      if (0 < at.length) {
        vt(at[0], e);
        for (var n = 1; n < at.length; n++) {
          var r = at[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== it && vt(it, e), null !== lt && vt(lt, e), null !== st && vt(st, e), ut.forEach(t), ct.forEach(t), n = 0;
        n < dt.length;
        n++
      )
        (r = dt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < dt.length && null === (n = dt[0]).blockedOn; ) _t(n), null === n.blockedOn && dt.shift();
    }
    function kt(e, t) {
      var n = {};
      return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
    }
    var xt = {
        animationend: kt("Animation", "AnimationEnd"),
        animationiteration: kt("Animation", "AnimationIteration"),
        animationstart: kt("Animation", "AnimationStart"),
        transitionend: kt("Transition", "TransitionEnd")
      },
      St = {},
      Et = {};
    function Ct(e) {
      if (St[e]) return St[e];
      if (!xt[e]) return e;
      var t,
        n = xt[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Et) return (St[e] = n[t]);
      return e;
    }
    d &&
      ((Et = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete xt.animationend.animation, delete xt.animationiteration.animation, delete xt.animationstart.animation),
      "TransitionEvent" in window || delete xt.transitionend.transition);
    var Ot = Ct("animationend"),
      Pt = Ct("animationiteration"),
      Nt = Ct("animationstart"),
      zt = Ct("transitionend"),
      jt = new Map(),
      Tt = new Map(),
      Rt = [
        "abort",
        "abort",
        Ot,
        "animationEnd",
        Pt,
        "animationIteration",
        Nt,
        "animationStart",
        "canplay",
        "canPlay",
        "canplaythrough",
        "canPlayThrough",
        "durationchange",
        "durationChange",
        "emptied",
        "emptied",
        "encrypted",
        "encrypted",
        "ended",
        "ended",
        "error",
        "error",
        "gotpointercapture",
        "gotPointerCapture",
        "load",
        "load",
        "loadeddata",
        "loadedData",
        "loadedmetadata",
        "loadedMetadata",
        "loadstart",
        "loadStart",
        "lostpointercapture",
        "lostPointerCapture",
        "playing",
        "playing",
        "progress",
        "progress",
        "seeking",
        "seeking",
        "stalled",
        "stalled",
        "suspend",
        "suspend",
        "timeupdate",
        "timeUpdate",
        zt,
        "transitionEnd",
        "waiting",
        "waiting"
      ];
    function Lt(e, t) {
      for (var n = 0; n < e.length; n += 2) {
        var r = e[n],
          o = e[n + 1];
        (o = "on" + (o[0].toUpperCase() + o.slice(1))), Tt.set(r, t), jt.set(r, o), u(o, [r]);
      }
    }
    (0, a.unstable_now)();
    var Mt = 8;
    function Ht(e) {
      if (0 != (1 & e)) return (Mt = 15), 1;
      if (0 != (2 & e)) return (Mt = 14), 2;
      if (0 != (4 & e)) return (Mt = 13), 4;
      var t = 24 & e;
      return 0 !== t
        ? ((Mt = 12), t)
        : 0 != (32 & e)
        ? ((Mt = 11), 32)
        : 0 !== (t = 192 & e)
        ? ((Mt = 10), t)
        : 0 != (256 & e)
        ? ((Mt = 9), 256)
        : 0 !== (t = 3584 & e)
        ? ((Mt = 8), t)
        : 0 != (4096 & e)
        ? ((Mt = 7), 4096)
        : 0 !== (t = 4186112 & e)
        ? ((Mt = 6), t)
        : 0 !== (t = 62914560 & e)
        ? ((Mt = 5), t)
        : 67108864 & e
        ? ((Mt = 4), 67108864)
        : 0 != (134217728 & e)
        ? ((Mt = 3), 134217728)
        : 0 !== (t = 805306368 & e)
        ? ((Mt = 2), t)
        : 0 != (1073741824 & e)
        ? ((Mt = 1), 1073741824)
        : ((Mt = 8), e);
    }
    function Bt(e, t) {
      var n = e.pendingLanes;
      if (0 === n) return (Mt = 0);
      var r = 0,
        o = 0,
        a = e.expiredLanes,
        i = e.suspendedLanes,
        l = e.pingedLanes;
      if (0 !== a) (r = a), (o = Mt = 15);
      else if (0 !== (a = 134217727 & n)) {
        var s = a & ~i;
        0 !== s ? ((r = Ht(s)), (o = Mt)) : 0 !== (l &= a) && ((r = Ht(l)), (o = Mt));
      } else 0 !== (a = n & ~i) ? ((r = Ht(a)), (o = Mt)) : 0 !== l && ((r = Ht(l)), (o = Mt));
      if (0 === r) return 0;
      if (((r = n & (((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & i))) {
        if ((Ht(t), o <= Mt)) return t;
        Mt = o;
      }
      if (0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - Wt(t))), (r |= e[n]), (t &= ~o);
      return r;
    }
    function It(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
    }
    function Ft(e, t) {
      switch (e) {
        case 15:
          return 1;
        case 14:
          return 2;
        case 12:
          return 0 === (e = At(24 & ~t)) ? Ft(10, t) : e;
        case 10:
          return 0 === (e = At(192 & ~t)) ? Ft(8, t) : e;
        case 8:
          return 0 === (e = At(3584 & ~t)) && 0 === (e = At(4186112 & ~t)) && (e = 512), e;
        case 2:
          return 0 === (t = At(805306368 & ~t)) && (t = 268435456), t;
      }
      throw Error(i(358, e));
    }
    function At(e) {
      return e & -e;
    }
    function Dt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ut(e, t, n) {
      e.pendingLanes |= t;
      var r = t - 1;
      (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Wt(t))] = n);
    }
    var Wt = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 === e ? 32 : (31 - ((Vt(e) / $t) | 0)) | 0;
          },
      Vt = Math.log,
      $t = Math.LN2;
    var Qt = a.unstable_UserBlockingPriority,
      qt = a.unstable_runWithPriority,
      Gt = !0;
    function Kt(e, t, n, r) {
      He || Le();
      var o = Xt,
        a = He;
      He = !0;
      try {
        Re(o, e, t, n, r);
      } finally {
        (He = a) || Ie();
      }
    }
    function Yt(e, t, n, r) {
      qt(Qt, Xt.bind(null, e, t, n, r));
    }
    function Xt(e, t, n, r) {
      var o;
      if (Gt)
        if ((o = 0 == (4 & t)) && 0 < at.length && -1 < ft.indexOf(e)) (e = pt(null, e, t, n, r)), at.push(e);
        else {
          var a = Zt(e, t, n, r);
          if (null === a) o && ht(e, r);
          else {
            if (o) {
              if (-1 < ft.indexOf(e)) return (e = pt(a, e, t, n, r)), void at.push(e);
              if (
                (function (e, t, n, r, o) {
                  switch (t) {
                    case "focusin":
                      return (it = mt(it, e, t, n, r, o)), !0;
                    case "dragenter":
                      return (lt = mt(lt, e, t, n, r, o)), !0;
                    case "mouseover":
                      return (st = mt(st, e, t, n, r, o)), !0;
                    case "pointerover":
                      var a = o.pointerId;
                      return ut.set(a, mt(ut.get(a) || null, e, t, n, r, o)), !0;
                    case "gotpointercapture":
                      return (a = o.pointerId), ct.set(a, mt(ct.get(a) || null, e, t, n, r, o)), !0;
                  }
                  return !1;
                })(a, e, t, n, r)
              )
                return;
              ht(e, r);
            }
            zr(e, t, r, null, n);
          }
        }
    }
    function Zt(e, t, n, r) {
      var o = Ee(r);
      if (null !== (o = Xr(o))) {
        var a = Ke(o);
        if (null === a) o = null;
        else {
          var i = a.tag;
          if (13 === i) {
            if (null !== (o = Ye(a))) return o;
            o = null;
          } else if (3 === i) {
            if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
            o = null;
          } else a !== o && (o = null);
        }
      }
      return zr(e, t, r, o, n), null;
    }
    var Jt = null,
      en = null,
      tn = null;
    function nn() {
      if (tn) return tn;
      var e,
        t,
        n = en,
        r = n.length,
        o = "value" in Jt ? Jt.value : Jt.textContent,
        a = o.length;
      for (e = 0; e < r && n[e] === o[e]; e++);
      var i = r - e;
      for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
      return (tn = o.slice(e, 1 < t ? 1 - t : void 0));
    }
    function rn(e) {
      var t = e.keyCode;
      return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
    }
    function on() {
      return !0;
    }
    function an() {
      return !1;
    }
    function ln(e) {
      function t(t, n, r, o, a) {
        for (var i in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
        return (
          (this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? on : an),
          (this.isPropagationStopped = an),
          this
        );
      }
      return (
        o(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = on));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = on));
          },
          persist: function () {},
          isPersistent: on
        }),
        t
      );
    }
    var sn,
      un,
      cn,
      dn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      },
      fn = ln(dn),
      pn = o({}, dn, { view: 0, detail: 0 }),
      hn = ln(pn),
      mn = o({}, pn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Cn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== cn &&
                (cn && "mousemove" === e.type ? ((sn = e.screenX - cn.screenX), (un = e.screenY - cn.screenY)) : (un = sn = 0), (cn = e)),
              sn);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : un;
        }
      }),
      _n = ln(mn),
      gn = ln(o({}, mn, { dataTransfer: 0 })),
      bn = ln(o({}, pn, { relatedTarget: 0 })),
      yn = ln(o({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      vn = ln(
        o({}, dn, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          }
        })
      ),
      wn = ln(o({}, dn, { data: 0 })),
      kn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      xn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
      Sn = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function En(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
    }
    function Cn() {
      return En;
    }
    var On = ln(
        o({}, pn, {
          key: function (e) {
            if (e.key) {
              var t = kn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = rn(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? xn[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Cn,
          charCode: function (e) {
            return "keypress" === e.type ? rn(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          }
        })
      ),
      Pn = ln(
        o({}, mn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0
        })
      ),
      Nn = ln(
        o({}, pn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })
      ),
      zn = ln(o({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      jn = ln(
        o({}, mn, {
          deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
          },
          deltaZ: 0,
          deltaMode: 0
        })
      ),
      Tn = [9, 13, 27, 32],
      Rn = d && "CompositionEvent" in window,
      Ln = null;
    d && "documentMode" in document && (Ln = document.documentMode);
    var Mn = d && "TextEvent" in window && !Ln,
      Hn = d && (!Rn || (Ln && 8 < Ln && 11 >= Ln)),
      Bn = String.fromCharCode(32),
      In = !1;
    function Fn(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== Tn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function An(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Dn = !1;
    var Un = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Wn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!Un[e.type] : "textarea" === t;
    }
    function Vn(e, t, n, r) {
      ze(r), 0 < (t = Tr(t, "onChange")).length && ((n = new fn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
    }
    var $n = null,
      Qn = null;
    function qn(e) {
      Sr(e, 0);
    }
    function Gn(e) {
      if (X(Jr(e))) return e;
    }
    function Kn(e, t) {
      if ("change" === e) return t;
    }
    var Yn = !1;
    if (d) {
      var Xn;
      if (d) {
        var Zn = "oninput" in document;
        if (!Zn) {
          var Jn = document.createElement("div");
          Jn.setAttribute("oninput", "return;"), (Zn = "function" == typeof Jn.oninput);
        }
        Xn = Zn;
      } else Xn = !1;
      Yn = Xn && (!document.documentMode || 9 < document.documentMode);
    }
    function er() {
      $n && ($n.detachEvent("onpropertychange", tr), (Qn = $n = null));
    }
    function tr(e) {
      if ("value" === e.propertyName && Gn(Qn)) {
        var t = [];
        if ((Vn(t, Qn, e, Ee(e)), (e = qn), He)) e(t);
        else {
          He = !0;
          try {
            Te(e, t);
          } finally {
            (He = !1), Ie();
          }
        }
      }
    }
    function nr(e, t, n) {
      "focusin" === e ? (er(), (Qn = n), ($n = t).attachEvent("onpropertychange", tr)) : "focusout" === e && er();
    }
    function rr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Gn(Qn);
    }
    function or(e, t) {
      if ("click" === e) return Gn(t);
    }
    function ar(e, t) {
      if ("input" === e || "change" === e) return Gn(t);
    }
    var ir =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            },
      lr = Object.prototype.hasOwnProperty;
    function sr(e, t) {
      if (ir(e, t)) return !0;
      if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) if (!lr.call(t, n[r]) || !ir(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    function ur(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function cr(e, t) {
      var n,
        r = ur(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = ur(r);
      }
    }
    function dr() {
      for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = Z((e = t.contentWindow).document);
      }
      return t;
    }
    function fr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var pr = d && "documentMode" in document && 11 >= document.documentMode,
      hr = null,
      mr = null,
      _r = null,
      gr = !1;
    function br(e, t, n) {
      var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      gr ||
        null == hr ||
        hr !== Z(r) ||
        ("selectionStart" in (r = hr) && fr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset
            }),
        (_r && sr(_r, r)) ||
          ((_r = r),
          0 < (r = Tr(mr, "onSelect")).length &&
            ((t = new fn("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = hr))));
    }
    Lt(
      "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
        " "
      ),
      0
    ),
      Lt(
        "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
          " "
        ),
        1
      ),
      Lt(Rt, 2);
    for (
      var yr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), vr = 0;
      vr < yr.length;
      vr++
    )
      Tt.set(yr[vr], 0);
    c("onMouseEnter", ["mouseout", "mouseover"]),
      c("onMouseLeave", ["mouseout", "mouseover"]),
      c("onPointerEnter", ["pointerout", "pointerover"]),
      c("onPointerLeave", ["pointerout", "pointerover"]),
      u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
      u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
      u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
      u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
      u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var wr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      kr = new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));
    function xr(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = n),
        (function (e, t, n, r, o, a, l, s, u) {
          if ((Ge.apply(this, arguments), We)) {
            if (!We) throw Error(i(198));
            var c = Ve;
            (We = !1), (Ve = null), $e || (($e = !0), (Qe = c));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function Sr(e, t) {
      t = 0 != (4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = r.event;
        r = r.listeners;
        e: {
          var a = void 0;
          if (t)
            for (var i = r.length - 1; 0 <= i; i--) {
              var l = r[i],
                s = l.instance,
                u = l.currentTarget;
              if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
              xr(o, l, u), (a = s);
            }
          else
            for (i = 0; i < r.length; i++) {
              if (((s = (l = r[i]).instance), (u = l.currentTarget), (l = l.listener), s !== a && o.isPropagationStopped())) break e;
              xr(o, l, u), (a = s);
            }
        }
      }
      if ($e) throw ((e = Qe), ($e = !1), (Qe = null), e);
    }
    function Er(e, t) {
      var n = to(t),
        r = e + "__bubble";
      n.has(r) || (Nr(t, e, 2, !1), n.add(r));
    }
    var Cr = "_reactListening" + Math.random().toString(36).slice(2);
    function Or(e) {
      e[Cr] ||
        ((e[Cr] = !0),
        l.forEach(function (t) {
          kr.has(t) || Pr(t, !1, e, null), Pr(t, !0, e, null);
        }));
    }
    function Pr(e, t, n, r) {
      var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
        a = n;
      if (("selectionchange" === e && 9 !== n.nodeType && (a = n.ownerDocument), null !== r && !t && kr.has(e))) {
        if ("scroll" !== e) return;
        (o |= 2), (a = r);
      }
      var i = to(a),
        l = e + "__" + (t ? "capture" : "bubble");
      i.has(l) || (t && (o |= 4), Nr(a, e, o, t), i.add(l));
    }
    function Nr(e, t, n, r) {
      var o = Tt.get(t);
      switch (void 0 === o ? 2 : o) {
        case 0:
          o = Kt;
          break;
        case 1:
          o = Yt;
          break;
        default:
          o = Xt;
      }
      (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Ae || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
        r
          ? void 0 !== o
            ? e.addEventListener(t, n, { capture: !0, passive: o })
            : e.addEventListener(t, n, !0)
          : void 0 !== o
          ? e.addEventListener(t, n, { passive: o })
          : e.addEventListener(t, n, !1);
    }
    function zr(e, t, n, r, o) {
      var a = r;
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var i = r.tag;
          if (3 === i || 4 === i) {
            var l = r.stateNode.containerInfo;
            if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
            if (4 === i)
              for (i = r.return; null !== i; ) {
                var s = i.tag;
                if ((3 === s || 4 === s) && ((s = i.stateNode.containerInfo) === o || (8 === s.nodeType && s.parentNode === o))) return;
                i = i.return;
              }
            for (; null !== l; ) {
              if (null === (i = Xr(l))) return;
              if (5 === (s = i.tag) || 6 === s) {
                r = a = i;
                continue e;
              }
              l = l.parentNode;
            }
          }
          r = r.return;
        }
      !(function (e, t, n) {
        if (Be) return e(t, n);
        Be = !0;
        try {
          Me(e, t, n);
        } finally {
          (Be = !1), Ie();
        }
      })(function () {
        var r = a,
          o = Ee(n),
          i = [];
        e: {
          var l = jt.get(e);
          if (void 0 !== l) {
            var s = fn,
              u = e;
            switch (e) {
              case "keypress":
                if (0 === rn(n)) break e;
              case "keydown":
              case "keyup":
                s = On;
                break;
              case "focusin":
                (u = "focus"), (s = bn);
                break;
              case "focusout":
                (u = "blur"), (s = bn);
                break;
              case "beforeblur":
              case "afterblur":
                s = bn;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                s = _n;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                s = gn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                s = Nn;
                break;
              case Ot:
              case Pt:
              case Nt:
                s = yn;
                break;
              case zt:
                s = zn;
                break;
              case "scroll":
                s = hn;
                break;
              case "wheel":
                s = jn;
                break;
              case "copy":
              case "cut":
              case "paste":
                s = vn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                s = Pn;
            }
            var c = 0 != (4 & t),
              d = !c && "scroll" === e,
              f = c ? (null !== l ? l + "Capture" : null) : l;
            c = [];
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode;
              if ((5 === p.tag && null !== m && ((p = m), null !== f && null != (m = Fe(h, f)) && c.push(jr(h, m, p))), d)) break;
              h = h.return;
            }
            0 < c.length && ((l = new s(l, u, null, n, o)), i.push({ event: l, listeners: c }));
          }
        }
        if (0 == (7 & t)) {
          if (
            ((s = "mouseout" === e || "pointerout" === e),
            (!(l = "mouseover" === e || "pointerover" === e) ||
              0 != (16 & t) ||
              !(u = n.relatedTarget || n.fromElement) ||
              (!Xr(u) && !u[Kr])) &&
              (s || l) &&
              ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
              s
                ? ((s = r),
                  null !== (u = (u = n.relatedTarget || n.toElement) ? Xr(u) : null) &&
                    (u !== (d = Ke(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                    (u = null))
                : ((s = null), (u = r)),
              s !== u))
          ) {
            if (
              ((c = _n),
              (m = "onMouseLeave"),
              (f = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) || ((c = Pn), (m = "onPointerLeave"), (f = "onPointerEnter"), (h = "pointer")),
              (d = null == s ? l : Jr(s)),
              (p = null == u ? l : Jr(u)),
              ((l = new c(m, h + "leave", s, n, o)).target = d),
              (l.relatedTarget = p),
              (m = null),
              Xr(o) === r && (((c = new c(f, h + "enter", u, n, o)).target = p), (c.relatedTarget = d), (m = c)),
              (d = m),
              s && u)
            )
              e: {
                for (f = u, h = 0, p = c = s; p; p = Rr(p)) h++;
                for (p = 0, m = f; m; m = Rr(m)) p++;
                for (; 0 < h - p; ) (c = Rr(c)), h--;
                for (; 0 < p - h; ) (f = Rr(f)), p--;
                for (; h--; ) {
                  if (c === f || (null !== f && c === f.alternate)) break e;
                  (c = Rr(c)), (f = Rr(f));
                }
                c = null;
              }
            else c = null;
            null !== s && Lr(i, l, s, c, !1), null !== u && null !== d && Lr(i, d, u, c, !0);
          }
          if ("select" === (s = (l = r ? Jr(r) : window).nodeName && l.nodeName.toLowerCase()) || ("input" === s && "file" === l.type))
            var _ = Kn;
          else if (Wn(l))
            if (Yn) _ = ar;
            else {
              _ = rr;
              var g = nr;
            }
          else (s = l.nodeName) && "input" === s.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (_ = or);
          switch (
            (_ && (_ = _(e, r))
              ? Vn(i, _, n, o)
              : (g && g(e, l, r),
                "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && oe(l, "number", l.value)),
            (g = r ? Jr(r) : window),
            e)
          ) {
            case "focusin":
              (Wn(g) || "true" === g.contentEditable) && ((hr = g), (mr = r), (_r = null));
              break;
            case "focusout":
              _r = mr = hr = null;
              break;
            case "mousedown":
              gr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (gr = !1), br(i, n, o);
              break;
            case "selectionchange":
              if (pr) break;
            case "keydown":
            case "keyup":
              br(i, n, o);
          }
          var b;
          if (Rn)
            e: {
              switch (e) {
                case "compositionstart":
                  var y = "onCompositionStart";
                  break e;
                case "compositionend":
                  y = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  y = "onCompositionUpdate";
                  break e;
              }
              y = void 0;
            }
          else Dn ? Fn(e, n) && (y = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (y = "onCompositionStart");
          y &&
            (Hn &&
              "ko" !== n.locale &&
              (Dn || "onCompositionStart" !== y
                ? "onCompositionEnd" === y && Dn && (b = nn())
                : ((en = "value" in (Jt = o) ? Jt.value : Jt.textContent), (Dn = !0))),
            0 < (g = Tr(r, y)).length &&
              ((y = new wn(y, e, null, n, o)),
              i.push({ event: y, listeners: g }),
              b ? (y.data = b) : null !== (b = An(n)) && (y.data = b))),
            (b = Mn
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return An(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((In = !0), Bn);
                    case "textInput":
                      return (e = t.data) === Bn && In ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (Dn) return "compositionend" === e || (!Rn && Fn(e, t)) ? ((e = nn()), (tn = en = Jt = null), (Dn = !1), e) : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Hn && "ko" !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n)) &&
              0 < (r = Tr(r, "onBeforeInput")).length &&
              ((o = new wn("onBeforeInput", "beforeinput", null, n, o)), i.push({ event: o, listeners: r }), (o.data = b));
        }
        Sr(i, t);
      });
    }
    function jr(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Tr(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var o = e,
          a = o.stateNode;
        5 === o.tag &&
          null !== a &&
          ((o = a), null != (a = Fe(e, n)) && r.unshift(jr(e, a, o)), null != (a = Fe(e, t)) && r.push(jr(e, a, o))),
          (e = e.return);
      }
      return r;
    }
    function Rr(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Lr(e, t, n, r, o) {
      for (var a = t._reactName, i = []; null !== n && n !== r; ) {
        var l = n,
          s = l.alternate,
          u = l.stateNode;
        if (null !== s && s === r) break;
        5 === l.tag &&
          null !== u &&
          ((l = u), o ? null != (s = Fe(n, a)) && i.unshift(jr(n, s, l)) : o || (null != (s = Fe(n, a)) && i.push(jr(n, s, l)))),
          (n = n.return);
      }
      0 !== i.length && e.push({ event: t, listeners: i });
    }
    function Mr() {}
    var Hr = null,
      Br = null;
    function Ir(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Fr(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var Ar = "function" == typeof setTimeout ? setTimeout : void 0,
      Dr = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function Ur(e) {
      1 === e.nodeType ? (e.textContent = "") : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
    }
    function Wr(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function Vr(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var $r = 0;
    var Qr = Math.random().toString(36).slice(2),
      qr = "__reactFiber$" + Qr,
      Gr = "__reactProps$" + Qr,
      Kr = "__reactContainer$" + Qr,
      Yr = "__reactEvents$" + Qr;
    function Xr(e) {
      var t = e[qr];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Kr] || n[qr])) {
          if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
            for (e = Vr(e); null !== e; ) {
              if ((n = e[qr])) return n;
              e = Vr(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function Zr(e) {
      return !(e = e[qr] || e[Kr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
    }
    function Jr(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(i(33));
    }
    function eo(e) {
      return e[Gr] || null;
    }
    function to(e) {
      var t = e[Yr];
      return void 0 === t && (t = e[Yr] = new Set()), t;
    }
    var no = [],
      ro = -1;
    function oo(e) {
      return { current: e };
    }
    function ao(e) {
      0 > ro || ((e.current = no[ro]), (no[ro] = null), ro--);
    }
    function io(e, t) {
      ro++, (no[ro] = e.current), (e.current = t);
    }
    var lo = {},
      so = oo(lo),
      uo = oo(!1),
      co = lo;
    function fo(e, t) {
      var n = e.type.contextTypes;
      if (!n) return lo;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
      var o,
        a = {};
      for (o in n) a[o] = t[o];
      return (
        r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = a)), a
      );
    }
    function po(e) {
      return null != (e = e.childContextTypes);
    }
    function ho() {
      ao(uo), ao(so);
    }
    function mo(e, t, n) {
      if (so.current !== lo) throw Error(i(168));
      io(so, t), io(uo, n);
    }
    function _o(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
      for (var a in (r = r.getChildContext())) if (!(a in e)) throw Error(i(108, q(t) || "Unknown", a));
      return o({}, n, r);
    }
    function go(e) {
      return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lo), (co = so.current), io(so, e), io(uo, uo.current), !0
      );
    }
    function bo(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(i(169));
      n ? ((e = _o(e, t, co)), (r.__reactInternalMemoizedMergedChildContext = e), ao(uo), ao(so), io(so, e)) : ao(uo), io(uo, n);
    }
    var yo = null,
      vo = null,
      wo = a.unstable_runWithPriority,
      ko = a.unstable_scheduleCallback,
      xo = a.unstable_cancelCallback,
      So = a.unstable_shouldYield,
      Eo = a.unstable_requestPaint,
      Co = a.unstable_now,
      Oo = a.unstable_getCurrentPriorityLevel,
      Po = a.unstable_ImmediatePriority,
      No = a.unstable_UserBlockingPriority,
      zo = a.unstable_NormalPriority,
      jo = a.unstable_LowPriority,
      To = a.unstable_IdlePriority,
      Ro = {},
      Lo = void 0 !== Eo ? Eo : function () {},
      Mo = null,
      Ho = null,
      Bo = !1,
      Io = Co(),
      Fo =
        1e4 > Io
          ? Co
          : function () {
              return Co() - Io;
            };
    function Ao() {
      switch (Oo()) {
        case Po:
          return 99;
        case No:
          return 98;
        case zo:
          return 97;
        case jo:
          return 96;
        case To:
          return 95;
        default:
          throw Error(i(332));
      }
    }
    function Do(e) {
      switch (e) {
        case 99:
          return Po;
        case 98:
          return No;
        case 97:
          return zo;
        case 96:
          return jo;
        case 95:
          return To;
        default:
          throw Error(i(332));
      }
    }
    function Uo(e, t) {
      return (e = Do(e)), wo(e, t);
    }
    function Wo(e, t, n) {
      return (e = Do(e)), ko(e, t, n);
    }
    function Vo() {
      if (null !== Ho) {
        var e = Ho;
        (Ho = null), xo(e);
      }
      $o();
    }
    function $o() {
      if (!Bo && null !== Mo) {
        Bo = !0;
        var e = 0;
        try {
          var t = Mo;
          Uo(99, function () {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (Mo = null);
        } catch (t) {
          throw (null !== Mo && (Mo = Mo.slice(e + 1)), ko(Po, Vo), t);
        } finally {
          Bo = !1;
        }
      }
    }
    var Qo = w.ReactCurrentBatchConfig;
    function qo(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    var Go = oo(null),
      Ko = null,
      Yo = null,
      Xo = null;
    function Zo() {
      Xo = Yo = Ko = null;
    }
    function Jo(e) {
      var t = Go.current;
      ao(Go), (e.type._context._currentValue = t);
    }
    function ea(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if ((e.childLanes & t) === t) {
          if (null === n || (n.childLanes & t) === t) break;
          n.childLanes |= t;
        } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
        e = e.return;
      }
    }
    function ta(e, t) {
      (Ko = e),
        (Xo = Yo = null),
        null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Ti = !0), (e.firstContext = null));
    }
    function na(e, t) {
      if (Xo !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) || ((Xo = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === Yo)
        ) {
          if (null === Ko) throw Error(i(308));
          (Yo = t), (Ko.dependencies = { lanes: 0, firstContext: t, responders: null });
        } else Yo = Yo.next = t;
      return e._currentValue;
    }
    var ra = !1;
    function oa(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
    }
    function aa(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
          });
    }
    function ia(e, t) {
      return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function la(e, t) {
      if (null !== (e = e.updateQueue)) {
        var n = (e = e.shared).pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
      }
    }
    function sa(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
          a = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
          } while (null !== n);
          null === a ? (o = a = t) : (a = a.next = t);
        } else o = a = t;
        return (
          (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: r.shared, effects: r.effects }),
          void (e.updateQueue = n)
        );
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
    }
    function ua(e, t, n, r) {
      var a = e.updateQueue;
      ra = !1;
      var i = a.firstBaseUpdate,
        l = a.lastBaseUpdate,
        s = a.shared.pending;
      if (null !== s) {
        a.shared.pending = null;
        var u = s,
          c = u.next;
        (u.next = null), null === l ? (i = c) : (l.next = c), (l = u);
        var d = e.alternate;
        if (null !== d) {
          var f = (d = d.updateQueue).lastBaseUpdate;
          f !== l && (null === f ? (d.firstBaseUpdate = c) : (f.next = c), (d.lastBaseUpdate = u));
        }
      }
      if (null !== i) {
        for (f = a.baseState, l = 0, d = c = u = null; ; ) {
          s = i.lane;
          var p = i.eventTime;
          if ((r & s) === s) {
            null !== d && (d = d.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
            e: {
              var h = e,
                m = i;
              switch (((s = t), (p = n), m.tag)) {
                case 1:
                  if ("function" == typeof (h = m.payload)) {
                    f = h.call(p, f, s);
                    break e;
                  }
                  f = h;
                  break e;
                case 3:
                  h.flags = (-4097 & h.flags) | 64;
                case 0:
                  if (null == (s = "function" == typeof (h = m.payload) ? h.call(p, f, s) : h)) break e;
                  f = o({}, f, s);
                  break e;
                case 2:
                  ra = !0;
              }
            }
            null !== i.callback && ((e.flags |= 32), null === (s = a.effects) ? (a.effects = [i]) : s.push(i));
          } else
            (p = { eventTime: p, lane: s, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
              null === d ? ((c = d = p), (u = f)) : (d = d.next = p),
              (l |= s);
          if (null === (i = i.next)) {
            if (null === (s = a.shared.pending)) break;
            (i = s.next), (s.next = null), (a.lastBaseUpdate = s), (a.shared.pending = null);
          }
        }
        null === d && (u = f),
          (a.baseState = u),
          (a.firstBaseUpdate = c),
          (a.lastBaseUpdate = d),
          (Ll |= l),
          (e.lanes = l),
          (e.memoizedState = f);
      }
    }
    function ca(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            o = r.callback;
          if (null !== o) {
            if (((r.callback = null), (r = n), "function" != typeof o)) throw Error(i(191, o));
            o.call(r);
          }
        }
    }
    var da = new r.Component().refs;
    function fa(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var pa = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && Ke(e) === e;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = as(),
          o = is(e),
          a = ia(r, o);
        (a.payload = t), null != n && (a.callback = n), la(e, a), ls(e, o, r);
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = as(),
          o = is(e),
          a = ia(r, o);
        (a.tag = 1), (a.payload = t), null != n && (a.callback = n), la(e, a), ls(e, o, r);
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = as(),
          r = is(e),
          o = ia(n, r);
        (o.tag = 2), null != t && (o.callback = t), la(e, o), ls(e, r, n);
      }
    };
    function ha(e, t, n, r, o, a, i) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, i)
        : !t.prototype || !t.prototype.isPureReactComponent || !sr(n, r) || !sr(o, a);
    }
    function ma(e, t, n) {
      var r = !1,
        o = lo,
        a = t.contextType;
      return (
        "object" == typeof a && null !== a
          ? (a = na(a))
          : ((o = po(t) ? co : so.current), (a = (r = null != (r = t.contextTypes)) ? fo(e, o) : lo)),
        (t = new t(n, a)),
        (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = pa),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o), (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function _a(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && pa.enqueueReplaceState(t, t.state, null);
    }
    function ga(e, t, n, r) {
      var o = e.stateNode;
      (o.props = n), (o.state = e.memoizedState), (o.refs = da), oa(e);
      var a = t.contextType;
      "object" == typeof a && null !== a ? (o.context = na(a)) : ((a = po(t) ? co : so.current), (o.context = fo(e, a))),
        ua(e, n, o, r),
        (o.state = e.memoizedState),
        "function" == typeof (a = t.getDerivedStateFromProps) && (fa(e, t, a, n), (o.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof o.getSnapshotBeforeUpdate ||
          ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
          ((t = o.state),
          "function" == typeof o.componentWillMount && o.componentWillMount(),
          "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
          t !== o.state && pa.enqueueReplaceState(o, o.state, null),
          ua(e, n, o, r),
          (o.state = e.memoizedState)),
        "function" == typeof o.componentDidMount && (e.flags |= 4);
    }
    var ba = Array.isArray;
    function ya(e, t, n) {
      if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(i(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(i(147, e));
          var o = "" + e;
          return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o
            ? t.ref
            : (((t = function (e) {
                var t = r.refs;
                t === da && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
              })._stringRef = o),
              t);
        }
        if ("string" != typeof e) throw Error(i(284));
        if (!n._owner) throw Error(i(290, e));
      }
      return e;
    }
    function va(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t)
        );
    }
    function wa(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.flags = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function o(e, t) {
        return ((e = Fs(e, t)).index = 0), (e.sibling = null), e;
      }
      function a(t, n, r) {
        return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n;
      }
      function l(t) {
        return e && null === t.alternate && (t.flags = 2), t;
      }
      function s(e, t, n, r) {
        return null === t || 6 !== t.tag ? (((t = Ws(n, e.mode, r)).return = e), t) : (((t = o(t, n)).return = e), t);
      }
      function u(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = o(t, n.props)).ref = ya(e, t, n)), (r.return = e), r)
          : (((r = As(n.type, n.key, n.props, null, e.mode, r)).ref = ya(e, t, n)), (r.return = e), r);
      }
      function c(e, t, n, r) {
        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation
          ? (((t = Vs(n, e.mode, r)).return = e), t)
          : (((t = o(t, n.children || [])).return = e), t);
      }
      function d(e, t, n, r, a) {
        return null === t || 7 !== t.tag ? (((t = Ds(n, e.mode, r, a)).return = e), t) : (((t = o(t, n)).return = e), t);
      }
      function f(e, t, n) {
        if ("string" == typeof t || "number" == typeof t) return ((t = Ws("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case k:
              return ((n = As(t.type, t.key, t.props, null, e.mode, n)).ref = ya(e, null, t)), (n.return = e), n;
            case x:
              return ((t = Vs(t, e.mode, n)).return = e), t;
          }
          if (ba(t) || U(t)) return ((t = Ds(t, e.mode, n, null)).return = e), t;
          va(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var o = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n) return null !== o ? null : s(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case k:
              return n.key === o ? (n.type === S ? d(e, t, n.props.children, r, o) : u(e, t, n, r)) : null;
            case x:
              return n.key === o ? c(e, t, n, r) : null;
          }
          if (ba(n) || U(n)) return null !== o ? null : d(e, t, n, r, null);
          va(e, n);
        }
        return null;
      }
      function h(e, t, n, r, o) {
        if ("string" == typeof r || "number" == typeof r) return s(t, (e = e.get(n) || null), "" + r, o);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case k:
              return (e = e.get(null === r.key ? n : r.key) || null), r.type === S ? d(t, e, r.props.children, o, r.key) : u(t, e, r, o);
            case x:
              return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
          }
          if (ba(r) || U(r)) return d(t, (e = e.get(n) || null), r, o, null);
          va(t, r);
        }
        return null;
      }
      function m(o, i, l, s) {
        for (var u = null, c = null, d = i, m = (i = 0), _ = null; null !== d && m < l.length; m++) {
          d.index > m ? ((_ = d), (d = null)) : (_ = d.sibling);
          var g = p(o, d, l[m], s);
          if (null === g) {
            null === d && (d = _);
            break;
          }
          e && d && null === g.alternate && t(o, d), (i = a(g, i, m)), null === c ? (u = g) : (c.sibling = g), (c = g), (d = _);
        }
        if (m === l.length) return n(o, d), u;
        if (null === d) {
          for (; m < l.length; m++) null !== (d = f(o, l[m], s)) && ((i = a(d, i, m)), null === c ? (u = d) : (c.sibling = d), (c = d));
          return u;
        }
        for (d = r(o, d); m < l.length; m++)
          null !== (_ = h(d, o, m, l[m], s)) &&
            (e && null !== _.alternate && d.delete(null === _.key ? m : _.key),
            (i = a(_, i, m)),
            null === c ? (u = _) : (c.sibling = _),
            (c = _));
        return (
          e &&
            d.forEach(function (e) {
              return t(o, e);
            }),
          u
        );
      }
      function _(o, l, s, u) {
        var c = U(s);
        if ("function" != typeof c) throw Error(i(150));
        if (null == (s = c.call(s))) throw Error(i(151));
        for (var d = (c = null), m = l, _ = (l = 0), g = null, b = s.next(); null !== m && !b.done; _++, b = s.next()) {
          m.index > _ ? ((g = m), (m = null)) : (g = m.sibling);
          var y = p(o, m, b.value, u);
          if (null === y) {
            null === m && (m = g);
            break;
          }
          e && m && null === y.alternate && t(o, m), (l = a(y, l, _)), null === d ? (c = y) : (d.sibling = y), (d = y), (m = g);
        }
        if (b.done) return n(o, m), c;
        if (null === m) {
          for (; !b.done; _++, b = s.next())
            null !== (b = f(o, b.value, u)) && ((l = a(b, l, _)), null === d ? (c = b) : (d.sibling = b), (d = b));
          return c;
        }
        for (m = r(o, m); !b.done; _++, b = s.next())
          null !== (b = h(m, o, _, b.value, u)) &&
            (e && null !== b.alternate && m.delete(null === b.key ? _ : b.key),
            (l = a(b, l, _)),
            null === d ? (c = b) : (d.sibling = b),
            (d = b));
        return (
          e &&
            m.forEach(function (e) {
              return t(o, e);
            }),
          c
        );
      }
      return function (e, r, a, s) {
        var u = "object" == typeof a && null !== a && a.type === S && null === a.key;
        u && (a = a.props.children);
        var c = "object" == typeof a && null !== a;
        if (c)
          switch (a.$$typeof) {
            case k:
              e: {
                for (c = a.key, u = r; null !== u; ) {
                  if (u.key === c) {
                    switch (u.tag) {
                      case 7:
                        if (a.type === S) {
                          n(e, u.sibling), ((r = o(u, a.props.children)).return = e), (e = r);
                          break e;
                        }
                        break;
                      default:
                        if (u.elementType === a.type) {
                          n(e, u.sibling), ((r = o(u, a.props)).ref = ya(e, u, a)), (r.return = e), (e = r);
                          break e;
                        }
                    }
                    n(e, u);
                    break;
                  }
                  t(e, u), (u = u.sibling);
                }
                a.type === S
                  ? (((r = Ds(a.props.children, e.mode, s, a.key)).return = e), (e = r))
                  : (((s = As(a.type, a.key, a.props, null, e.mode, s)).ref = ya(e, r, a)), (s.return = e), (e = s));
              }
              return l(e);
            case x:
              e: {
                for (u = a.key; null !== r; ) {
                  if (r.key === u) {
                    if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                      n(e, r.sibling), ((r = o(r, a.children || [])).return = e), (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Vs(a, e.mode, s)).return = e), (e = r);
              }
              return l(e);
          }
        if ("string" == typeof a || "number" == typeof a)
          return (
            (a = "" + a),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
              : (n(e, r), ((r = Ws(a, e.mode, s)).return = e), (e = r)),
            l(e)
          );
        if (ba(a)) return m(e, r, a, s);
        if (U(a)) return _(e, r, a, s);
        if ((c && va(e, a), void 0 === a && !u))
          switch (e.tag) {
            case 1:
            case 22:
            case 0:
            case 11:
            case 15:
              throw Error(i(152, q(e.type) || "Component"));
          }
        return n(e, r);
      };
    }
    var ka = wa(!0),
      xa = wa(!1),
      Sa = {},
      Ea = oo(Sa),
      Ca = oo(Sa),
      Oa = oo(Sa);
    function Pa(e) {
      if (e === Sa) throw Error(i(174));
      return e;
    }
    function Na(e, t) {
      switch ((io(Oa, t), io(Ca, e), io(Ea, Sa), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
          break;
        default:
          t = he((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
      }
      ao(Ea), io(Ea, t);
    }
    function za() {
      ao(Ea), ao(Ca), ao(Oa);
    }
    function ja(e) {
      Pa(Oa.current);
      var t = Pa(Ea.current),
        n = he(t, e.type);
      t !== n && (io(Ca, e), io(Ea, n));
    }
    function Ta(e) {
      Ca.current === e && (ao(Ea), ao(Ca));
    }
    var Ra = oo(0);
    function La(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.flags)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var Ma = null,
      Ha = null,
      Ba = !1;
    function Ia(e, t) {
      var n = Bs(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.flags = 8),
        null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
    }
    function Fa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
        case 6:
          return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
        case 13:
        default:
          return !1;
      }
    }
    function Aa(e) {
      if (Ba) {
        var t = Ha;
        if (t) {
          var n = t;
          if (!Fa(e, t)) {
            if (!(t = Wr(n.nextSibling)) || !Fa(e, t)) return (e.flags = (-1025 & e.flags) | 2), (Ba = !1), void (Ma = e);
            Ia(Ma, n);
          }
          (Ma = e), (Ha = Wr(t.firstChild));
        } else (e.flags = (-1025 & e.flags) | 2), (Ba = !1), (Ma = e);
      }
    }
    function Da(e) {
      for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
      Ma = e;
    }
    function Ua(e) {
      if (e !== Ma) return !1;
      if (!Ba) return Da(e), (Ba = !0), !1;
      var t = e.type;
      if (5 !== e.tag || ("head" !== t && "body" !== t && !Fr(t, e.memoizedProps))) for (t = Ha; t; ) Ia(e, t), (t = Wr(t.nextSibling));
      if ((Da(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  Ha = Wr(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          Ha = null;
        }
      } else Ha = Ma ? Wr(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Wa() {
      (Ha = Ma = null), (Ba = !1);
    }
    var Va = [];
    function $a() {
      for (var e = 0; e < Va.length; e++) Va[e]._workInProgressVersionPrimary = null;
      Va.length = 0;
    }
    var Qa = w.ReactCurrentDispatcher,
      qa = w.ReactCurrentBatchConfig,
      Ga = 0,
      Ka = null,
      Ya = null,
      Xa = null,
      Za = !1,
      Ja = !1;
    function ei() {
      throw Error(i(321));
    }
    function ti(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!ir(e[n], t[n])) return !1;
      return !0;
    }
    function ni(e, t, n, r, o, a) {
      if (
        ((Ga = a),
        (Ka = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Qa.current = null === e || null === e.memoizedState ? Pi : Ni),
        (e = n(r, o)),
        Ja)
      ) {
        a = 0;
        do {
          if (((Ja = !1), !(25 > a))) throw Error(i(301));
          (a += 1), (Xa = Ya = null), (t.updateQueue = null), (Qa.current = zi), (e = n(r, o));
        } while (Ja);
      }
      if (((Qa.current = Oi), (t = null !== Ya && null !== Ya.next), (Ga = 0), (Xa = Ya = Ka = null), (Za = !1), t)) throw Error(i(300));
      return e;
    }
    function ri() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return null === Xa ? (Ka.memoizedState = Xa = e) : (Xa = Xa.next = e), Xa;
    }
    function oi() {
      if (null === Ya) {
        var e = Ka.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = Ya.next;
      var t = null === Xa ? Ka.memoizedState : Xa.next;
      if (null !== t) (Xa = t), (Ya = e);
      else {
        if (null === e) throw Error(i(310));
        (e = { memoizedState: (Ya = e).memoizedState, baseState: Ya.baseState, baseQueue: Ya.baseQueue, queue: Ya.queue, next: null }),
          null === Xa ? (Ka.memoizedState = Xa = e) : (Xa = Xa.next = e);
      }
      return Xa;
    }
    function ai(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function ii(e) {
      var t = oi(),
        n = t.queue;
      if (null === n) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = Ya,
        o = r.baseQueue,
        a = n.pending;
      if (null !== a) {
        if (null !== o) {
          var l = o.next;
          (o.next = a.next), (a.next = l);
        }
        (r.baseQueue = o = a), (n.pending = null);
      }
      if (null !== o) {
        (o = o.next), (r = r.baseState);
        var s = (l = a = null),
          u = o;
        do {
          var c = u.lane;
          if ((Ga & c) === c)
            null !== s && (s = s.next = { lane: 0, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null }),
              (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
          else {
            var d = { lane: c, action: u.action, eagerReducer: u.eagerReducer, eagerState: u.eagerState, next: null };
            null === s ? ((l = s = d), (a = r)) : (s = s.next = d), (Ka.lanes |= c), (Ll |= c);
          }
          u = u.next;
        } while (null !== u && u !== o);
        null === s ? (a = r) : (s.next = l),
          ir(r, t.memoizedState) || (Ti = !0),
          (t.memoizedState = r),
          (t.baseState = a),
          (t.baseQueue = s),
          (n.lastRenderedState = r);
      }
      return [t.memoizedState, n.dispatch];
    }
    function li(e) {
      var t = oi(),
        n = t.queue;
      if (null === n) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        o = n.pending,
        a = t.memoizedState;
      if (null !== o) {
        n.pending = null;
        var l = (o = o.next);
        do {
          (a = e(a, l.action)), (l = l.next);
        } while (l !== o);
        ir(a, t.memoizedState) || (Ti = !0), (t.memoizedState = a), null === t.baseQueue && (t.baseState = a), (n.lastRenderedState = a);
      }
      return [a, r];
    }
    function si(e, t, n) {
      var r = t._getVersion;
      r = r(t._source);
      var o = t._workInProgressVersionPrimary;
      if (
        (null !== o
          ? (e = o === r)
          : ((e = e.mutableReadLanes), (e = (Ga & e) === e) && ((t._workInProgressVersionPrimary = r), Va.push(t))),
        e)
      )
        return n(t._source);
      throw (Va.push(t), Error(i(350)));
    }
    function ui(e, t, n, r) {
      var o = Cl;
      if (null === o) throw Error(i(349));
      var a = t._getVersion,
        l = a(t._source),
        s = Qa.current,
        u = s.useState(function () {
          return si(o, t, n);
        }),
        c = u[1],
        d = u[0];
      u = Xa;
      var f = e.memoizedState,
        p = f.refs,
        h = p.getSnapshot,
        m = f.source;
      f = f.subscribe;
      var _ = Ka;
      return (
        (e.memoizedState = { refs: p, source: t, subscribe: r }),
        s.useEffect(
          function () {
            (p.getSnapshot = n), (p.setSnapshot = c);
            var e = a(t._source);
            if (!ir(l, e)) {
              (e = n(t._source)),
                ir(d, e) || (c(e), (e = is(_)), (o.mutableReadLanes |= e & o.pendingLanes)),
                (e = o.mutableReadLanes),
                (o.entangledLanes |= e);
              for (var r = o.entanglements, i = e; 0 < i; ) {
                var s = 31 - Wt(i),
                  u = 1 << s;
                (r[s] |= e), (i &= ~u);
              }
            }
          },
          [n, t, r]
        ),
        s.useEffect(
          function () {
            return r(t._source, function () {
              var e = p.getSnapshot,
                n = p.setSnapshot;
              try {
                n(e(t._source));
                var r = is(_);
                o.mutableReadLanes |= r & o.pendingLanes;
              } catch (e) {
                n(function () {
                  throw e;
                });
              }
            });
          },
          [t, r]
        ),
        (ir(h, n) && ir(m, t) && ir(f, r)) ||
          (((e = { pending: null, dispatch: null, lastRenderedReducer: ai, lastRenderedState: d }).dispatch = c = Ci.bind(null, Ka, e)),
          (u.queue = e),
          (u.baseQueue = null),
          (d = si(o, t, n)),
          (u.memoizedState = u.baseState = d)),
        d
      );
    }
    function ci(e, t, n) {
      return ui(oi(), e, t, n);
    }
    function di(e) {
      var t = ri();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: ai, lastRenderedState: e }).dispatch =
          Ci.bind(null, Ka, e)),
        [t.memoizedState, e]
      );
    }
    function fi(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Ka.updateQueue)
          ? ((t = { lastEffect: null }), (Ka.updateQueue = t), (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function pi(e) {
      return (e = { current: e }), (ri().memoizedState = e);
    }
    function hi() {
      return oi().memoizedState;
    }
    function mi(e, t, n, r) {
      var o = ri();
      (Ka.flags |= e), (o.memoizedState = fi(1 | t, n, void 0, void 0 === r ? null : r));
    }
    function _i(e, t, n, r) {
      var o = oi();
      r = void 0 === r ? null : r;
      var a = void 0;
      if (null !== Ya) {
        var i = Ya.memoizedState;
        if (((a = i.destroy), null !== r && ti(r, i.deps))) return void fi(t, n, a, r);
      }
      (Ka.flags |= e), (o.memoizedState = fi(1 | t, n, a, r));
    }
    function gi(e, t) {
      return mi(516, 4, e, t);
    }
    function bi(e, t) {
      return _i(516, 4, e, t);
    }
    function yi(e, t) {
      return _i(4, 2, e, t);
    }
    function vi(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
    }
    function wi(e, t, n) {
      return (n = null != n ? n.concat([e]) : null), _i(4, 2, vi.bind(null, t, e), n);
    }
    function ki() {}
    function xi(e, t) {
      var n = oi();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && ti(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Si(e, t) {
      var n = oi();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && ti(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function Ei(e, t) {
      var n = Ao();
      Uo(98 > n ? 98 : n, function () {
        e(!0);
      }),
        Uo(97 < n ? 97 : n, function () {
          var n = qa.transition;
          qa.transition = 1;
          try {
            e(!1), t();
          } finally {
            qa.transition = n;
          }
        });
    }
    function Ci(e, t, n) {
      var r = as(),
        o = is(e),
        a = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
        i = t.pending;
      if (
        (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
        (t.pending = a),
        (i = e.alternate),
        e === Ka || (null !== i && i === Ka))
      )
        Ja = Za = !0;
      else {
        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer))
          try {
            var l = t.lastRenderedState,
              s = i(l, n);
            if (((a.eagerReducer = i), (a.eagerState = s), ir(s, l))) return;
          } catch (e) {}
        ls(e, o, r);
      }
    }
    var Oi = {
        readContext: na,
        useCallback: ei,
        useContext: ei,
        useEffect: ei,
        useImperativeHandle: ei,
        useLayoutEffect: ei,
        useMemo: ei,
        useReducer: ei,
        useRef: ei,
        useState: ei,
        useDebugValue: ei,
        useDeferredValue: ei,
        useTransition: ei,
        useMutableSource: ei,
        useOpaqueIdentifier: ei,
        unstable_isNewReconciler: !1
      },
      Pi = {
        readContext: na,
        useCallback: function (e, t) {
          return (ri().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: na,
        useEffect: gi,
        useImperativeHandle: function (e, t, n) {
          return (n = null != n ? n.concat([e]) : null), mi(4, 2, vi.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return mi(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = ri();
          return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
          var r = ri();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch =
              Ci.bind(null, Ka, e)),
            [r.memoizedState, e]
          );
        },
        useRef: pi,
        useState: di,
        useDebugValue: ki,
        useDeferredValue: function (e) {
          var t = di(e),
            n = t[0],
            r = t[1];
          return (
            gi(
              function () {
                var t = qa.transition;
                qa.transition = 1;
                try {
                  r(e);
                } finally {
                  qa.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function () {
          var e = di(!1),
            t = e[0];
          return pi((e = Ei.bind(null, e[1]))), [e, t];
        },
        useMutableSource: function (e, t, n) {
          var r = ri();
          return (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }), ui(r, e, t, n);
        },
        useOpaqueIdentifier: function () {
          if (Ba) {
            var e = !1,
              t = (function (e) {
                return { $$typeof: M, toString: e, valueOf: e };
              })(function () {
                throw (e || ((e = !0), n("r:" + ($r++).toString(36))), Error(i(355)));
              }),
              n = di(t)[1];
            return (
              0 == (2 & Ka.mode) &&
                ((Ka.flags |= 516),
                fi(
                  5,
                  function () {
                    n("r:" + ($r++).toString(36));
                  },
                  void 0,
                  null
                )),
              t
            );
          }
          return di((t = "r:" + ($r++).toString(36))), t;
        },
        unstable_isNewReconciler: !1
      },
      Ni = {
        readContext: na,
        useCallback: xi,
        useContext: na,
        useEffect: bi,
        useImperativeHandle: wi,
        useLayoutEffect: yi,
        useMemo: Si,
        useReducer: ii,
        useRef: hi,
        useState: function () {
          return ii(ai);
        },
        useDebugValue: ki,
        useDeferredValue: function (e) {
          var t = ii(ai),
            n = t[0],
            r = t[1];
          return (
            bi(
              function () {
                var t = qa.transition;
                qa.transition = 1;
                try {
                  r(e);
                } finally {
                  qa.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function () {
          var e = ii(ai)[0];
          return [hi().current, e];
        },
        useMutableSource: ci,
        useOpaqueIdentifier: function () {
          return ii(ai)[0];
        },
        unstable_isNewReconciler: !1
      },
      zi = {
        readContext: na,
        useCallback: xi,
        useContext: na,
        useEffect: bi,
        useImperativeHandle: wi,
        useLayoutEffect: yi,
        useMemo: Si,
        useReducer: li,
        useRef: hi,
        useState: function () {
          return li(ai);
        },
        useDebugValue: ki,
        useDeferredValue: function (e) {
          var t = li(ai),
            n = t[0],
            r = t[1];
          return (
            bi(
              function () {
                var t = qa.transition;
                qa.transition = 1;
                try {
                  r(e);
                } finally {
                  qa.transition = t;
                }
              },
              [e]
            ),
            n
          );
        },
        useTransition: function () {
          var e = li(ai)[0];
          return [hi().current, e];
        },
        useMutableSource: ci,
        useOpaqueIdentifier: function () {
          return li(ai)[0];
        },
        unstable_isNewReconciler: !1
      },
      ji = w.ReactCurrentOwner,
      Ti = !1;
    function Ri(e, t, n, r) {
      t.child = null === e ? xa(t, null, n, r) : ka(t, e.child, n, r);
    }
    function Li(e, t, n, r, o) {
      n = n.render;
      var a = t.ref;
      return (
        ta(t, o),
        (r = ni(e, t, n, r, a, o)),
        null === e || Ti
          ? ((t.flags |= 1), Ri(e, t, r, o), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), el(e, t, o))
      );
    }
    function Mi(e, t, n, r, o, a) {
      if (null === e) {
        var i = n.type;
        return "function" != typeof i || Is(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps
          ? (((e = As(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
          : ((t.tag = 15), (t.type = i), Hi(e, t, i, r, o, a));
      }
      return (
        (i = e.child),
        0 == (o & a) && ((o = i.memoizedProps), (n = null !== (n = n.compare) ? n : sr)(o, r) && e.ref === t.ref)
          ? el(e, t, a)
          : ((t.flags |= 1), ((e = Fs(i, r)).ref = t.ref), (e.return = t), (t.child = e))
      );
    }
    function Hi(e, t, n, r, o, a) {
      if (null !== e && sr(e.memoizedProps, r) && e.ref === t.ref) {
        if (((Ti = !1), 0 == (a & o))) return (t.lanes = e.lanes), el(e, t, a);
        0 != (16384 & e.flags) && (Ti = !0);
      }
      return Fi(e, t, n, r, a);
    }
    function Bi(e, t, n) {
      var r = t.pendingProps,
        o = r.children,
        a = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
        if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), ms(t, n);
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== a ? a.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = { baseLanes: e }),
              ms(t, e),
              null
            );
          (t.memoizedState = { baseLanes: 0 }), ms(t, null !== a ? a.baseLanes : n);
        }
      else null !== a ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), ms(t, r);
      return Ri(e, t, o, n), t.child;
    }
    function Ii(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
    }
    function Fi(e, t, n, r, o) {
      var a = po(n) ? co : so.current;
      return (
        (a = fo(t, a)),
        ta(t, o),
        (n = ni(e, t, n, r, a, o)),
        null === e || Ti
          ? ((t.flags |= 1), Ri(e, t, n, o), t.child)
          : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), el(e, t, o))
      );
    }
    function Ai(e, t, n, r, o) {
      if (po(n)) {
        var a = !0;
        go(t);
      } else a = !1;
      if ((ta(t, o), null === t.stateNode))
        null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)), ma(t, n, r), ga(t, n, r, o), (r = !0);
      else if (null === e) {
        var i = t.stateNode,
          l = t.memoizedProps;
        i.props = l;
        var s = i.context,
          u = n.contextType;
        "object" == typeof u && null !== u ? (u = na(u)) : (u = fo(t, (u = po(n) ? co : so.current)));
        var c = n.getDerivedStateFromProps,
          d = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
        d ||
          ("function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps) ||
          ((l !== r || s !== u) && _a(t, i, r, u)),
          (ra = !1);
        var f = t.memoizedState;
        (i.state = f),
          ua(t, r, i, o),
          (s = t.memoizedState),
          l !== r || f !== s || uo.current || ra
            ? ("function" == typeof c && (fa(t, n, c, r), (s = t.memoizedState)),
              (l = ra || ha(t, n, l, r, f, s, u))
                ? (d ||
                    ("function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount) ||
                    ("function" == typeof i.componentWillMount && i.componentWillMount(),
                    "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()),
                  "function" == typeof i.componentDidMount && (t.flags |= 4))
                : ("function" == typeof i.componentDidMount && (t.flags |= 4), (t.memoizedProps = r), (t.memoizedState = s)),
              (i.props = r),
              (i.state = s),
              (i.context = u),
              (r = l))
            : ("function" == typeof i.componentDidMount && (t.flags |= 4), (r = !1));
      } else {
        (i = t.stateNode),
          aa(e, t),
          (l = t.memoizedProps),
          (u = t.type === t.elementType ? l : qo(t.type, l)),
          (i.props = u),
          (d = t.pendingProps),
          (f = i.context),
          "object" == typeof (s = n.contextType) && null !== s ? (s = na(s)) : (s = fo(t, (s = po(n) ? co : so.current)));
        var p = n.getDerivedStateFromProps;
        (c = "function" == typeof p || "function" == typeof i.getSnapshotBeforeUpdate) ||
          ("function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps) ||
          ((l !== d || f !== s) && _a(t, i, r, s)),
          (ra = !1),
          (f = t.memoizedState),
          (i.state = f),
          ua(t, r, i, o);
        var h = t.memoizedState;
        l !== d || f !== h || uo.current || ra
          ? ("function" == typeof p && (fa(t, n, p, r), (h = t.memoizedState)),
            (u = ra || ha(t, n, u, r, f, h, s))
              ? (c ||
                  ("function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate) ||
                  ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, h, s),
                  "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, s)),
                "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 256))
              : ("function" != typeof i.componentDidUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 256),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (i.props = r),
            (i.state = h),
            (i.context = s),
            (r = u))
          : ("function" != typeof i.componentDidUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 4),
            "function" != typeof i.getSnapshotBeforeUpdate || (l === e.memoizedProps && f === e.memoizedState) || (t.flags |= 256),
            (r = !1));
      }
      return Di(e, t, n, r, a, o);
    }
    function Di(e, t, n, r, o, a) {
      Ii(e, t);
      var i = 0 != (64 & t.flags);
      if (!r && !i) return o && bo(t, n, !1), el(e, t, a);
      (r = t.stateNode), (ji.current = t);
      var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
      return (
        (t.flags |= 1),
        null !== e && i ? ((t.child = ka(t, e.child, null, a)), (t.child = ka(t, null, l, a))) : Ri(e, t, l, a),
        (t.memoizedState = r.state),
        o && bo(t, n, !0),
        t.child
      );
    }
    function Ui(e) {
      var t = e.stateNode;
      t.pendingContext ? mo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && mo(0, t.context, !1),
        Na(e, t.containerInfo);
    }
    var Wi,
      Vi,
      $i,
      Qi = { dehydrated: null, retryLane: 0 };
    function qi(e, t, n) {
      var r,
        o = t.pendingProps,
        a = Ra.current,
        i = !1;
      return (
        (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r
          ? ((i = !0), (t.flags &= -65))
          : (null !== e && null === e.memoizedState) || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1),
        io(Ra, 1 & a),
        null === e
          ? (void 0 !== o.fallback && Aa(t),
            (e = o.children),
            (a = o.fallback),
            i
              ? ((e = Gi(t, e, a, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Qi), e)
              : "number" == typeof o.unstable_expectedLoadTime
              ? ((e = Gi(t, e, a, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Qi), (t.lanes = 33554432), e)
              : (((n = Us({ mode: "visible", children: e }, t.mode, n, null)).return = t), (t.child = n)))
          : (e.memoizedState,
            i
              ? ((o = Yi(e, t, o.children, o.fallback, n)),
                (i = t.child),
                (a = e.child.memoizedState),
                (i.memoizedState = null === a ? { baseLanes: n } : { baseLanes: a.baseLanes | n }),
                (i.childLanes = e.childLanes & ~n),
                (t.memoizedState = Qi),
                o)
              : ((n = Ki(e, t, o.children, n)), (t.memoizedState = null), n))
      );
    }
    function Gi(e, t, n, r) {
      var o = e.mode,
        a = e.child;
      return (
        (t = { mode: "hidden", children: t }),
        0 == (2 & o) && null !== a ? ((a.childLanes = 0), (a.pendingProps = t)) : (a = Us(t, o, 0, null)),
        (n = Ds(n, o, r, null)),
        (a.return = e),
        (n.return = e),
        (a.sibling = n),
        (e.child = a),
        n
      );
    }
    function Ki(e, t, n, r) {
      var o = e.child;
      return (
        (e = o.sibling),
        (n = Fs(o, { mode: "visible", children: n })),
        0 == (2 & t.mode) && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
        (t.child = n)
      );
    }
    function Yi(e, t, n, r, o) {
      var a = t.mode,
        i = e.child;
      e = i.sibling;
      var l = { mode: "hidden", children: n };
      return (
        0 == (2 & a) && t.child !== i
          ? (((n = t.child).childLanes = 0),
            (n.pendingProps = l),
            null !== (i = n.lastEffect)
              ? ((t.firstEffect = n.firstEffect), (t.lastEffect = i), (i.nextEffect = null))
              : (t.firstEffect = t.lastEffect = null))
          : (n = Fs(i, l)),
        null !== e ? (r = Fs(e, r)) : ((r = Ds(r, a, o, null)).flags |= 2),
        (r.return = t),
        (n.return = t),
        (n.sibling = r),
        (t.child = n),
        r
      );
    }
    function Xi(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      null !== n && (n.lanes |= t), ea(e.return, t);
    }
    function Zi(e, t, n, r, o, a) {
      var i = e.memoizedState;
      null === i
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o, lastEffect: a })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o),
          (i.lastEffect = a));
    }
    function Ji(e, t, n) {
      var r = t.pendingProps,
        o = r.revealOrder,
        a = r.tail;
      if ((Ri(e, t, r.children, n), 0 != (2 & (r = Ra.current)))) (r = (1 & r) | 2), (t.flags |= 64);
      else {
        if (null !== e && 0 != (64 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Xi(e, n);
            else if (19 === e.tag) Xi(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((io(Ra, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (o) {
          case "forwards":
            for (n = t.child, o = null; null !== n; ) null !== (e = n.alternate) && null === La(e) && (o = n), (n = n.sibling);
            null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)), Zi(t, !1, o, n, a, t.lastEffect);
            break;
          case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === La(e)) {
                t.child = o;
                break;
              }
              (e = o.sibling), (o.sibling = n), (n = o), (o = e);
            }
            Zi(t, !0, n, null, a, t.lastEffect);
            break;
          case "together":
            Zi(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function el(e, t, n) {
      if ((null !== e && (t.dependencies = e.dependencies), (Ll |= t.lanes), 0 != (n & t.childLanes))) {
        if (null !== e && t.child !== e.child) throw Error(i(153));
        if (null !== t.child) {
          for (n = Fs((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = Fs(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      return null;
    }
    function tl(e, t) {
      if (!Ba)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
            null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
    }
    function nl(e, t, n) {
      var r = t.pendingProps;
      switch (t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return null;
        case 1:
          return po(t.type) && ho(), null;
        case 3:
          return (
            za(),
            ao(uo),
            ao(so),
            $a(),
            (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) || (Ua(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
            null
          );
        case 5:
          Ta(t);
          var a = Pa(Oa.current);
          if (((n = t.type), null !== e && null != t.stateNode)) Vi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(i(166));
              return null;
            }
            if (((e = Pa(Ea.current)), Ua(t))) {
              (r = t.stateNode), (n = t.type);
              var l = t.memoizedProps;
              switch (((r[qr] = t), (r[Gr] = l), n)) {
                case "dialog":
                  Er("cancel", r), Er("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Er("load", r);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < wr.length; e++) Er(wr[e], r);
                  break;
                case "source":
                  Er("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Er("error", r), Er("load", r);
                  break;
                case "details":
                  Er("toggle", r);
                  break;
                case "input":
                  ee(r, l), Er("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!l.multiple }), Er("invalid", r);
                  break;
                case "textarea":
                  se(r, l), Er("invalid", r);
              }
              for (var u in (xe(n, l), (e = null), l))
                l.hasOwnProperty(u) &&
                  ((a = l[u]),
                  "children" === u
                    ? "string" == typeof a
                      ? r.textContent !== a && (e = ["children", a])
                      : "number" == typeof a && r.textContent !== "" + a && (e = ["children", "" + a])
                    : s.hasOwnProperty(u) && null != a && "onScroll" === u && Er("scroll", r));
              switch (n) {
                case "input":
                  Y(r), re(r, l, !0);
                  break;
                case "textarea":
                  Y(r), ce(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof l.onClick && (r.onclick = Mr);
              }
              (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
            } else {
              switch (
                ((u = 9 === a.nodeType ? a : a.ownerDocument),
                e === de && (e = pe(n)),
                e === de
                  ? "script" === n
                    ? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = u.createElement(n, { is: r.is }))
                    : ((e = u.createElement(n)), "select" === n && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))
                  : (e = u.createElementNS(e, n)),
                (e[qr] = t),
                (e[Gr] = r),
                Wi(e, t),
                (t.stateNode = e),
                (u = Se(n, r)),
                n)
              ) {
                case "dialog":
                  Er("cancel", e), Er("close", e), (a = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Er("load", e), (a = r);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < wr.length; a++) Er(wr[a], e);
                  a = r;
                  break;
                case "source":
                  Er("error", e), (a = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Er("error", e), Er("load", e), (a = r);
                  break;
                case "details":
                  Er("toggle", e), (a = r);
                  break;
                case "input":
                  ee(e, r), (a = J(e, r)), Er("invalid", e);
                  break;
                case "option":
                  a = ae(e, r);
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }), (a = o({}, r, { value: void 0 })), Er("invalid", e);
                  break;
                case "textarea":
                  se(e, r), (a = le(e, r)), Er("invalid", e);
                  break;
                default:
                  a = r;
              }
              xe(n, a);
              var c = a;
              for (l in c)
                if (c.hasOwnProperty(l)) {
                  var d = c[l];
                  "style" === l
                    ? we(e, d)
                    : "dangerouslySetInnerHTML" === l
                    ? null != (d = d ? d.__html : void 0) && _e(e, d)
                    : "children" === l
                    ? "string" == typeof d
                      ? ("textarea" !== n || "" !== d) && ge(e, d)
                      : "number" == typeof d && ge(e, "" + d)
                    : "suppressContentEditableWarning" !== l &&
                      "suppressHydrationWarning" !== l &&
                      "autoFocus" !== l &&
                      (s.hasOwnProperty(l) ? null != d && "onScroll" === l && Er("scroll", e) : null != d && v(e, l, d, u));
                }
              switch (n) {
                case "input":
                  Y(e), re(e, r, !1);
                  break;
                case "textarea":
                  Y(e), ce(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + G(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (l = r.value) ? ie(e, !!r.multiple, l, !1) : null != r.defaultValue && ie(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof a.onClick && (e.onclick = Mr);
              }
              Ir(n, r) && (t.flags |= 4);
            }
            null !== t.ref && (t.flags |= 128);
          }
          return null;
        case 6:
          if (e && null != t.stateNode) $i(0, t, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === t.stateNode) throw Error(i(166));
            (n = Pa(Oa.current)),
              Pa(Ea.current),
              Ua(t)
                ? ((r = t.stateNode), (n = t.memoizedProps), (r[qr] = t), r.nodeValue !== n && (t.flags |= 4))
                : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[qr] = t), (t.stateNode = r));
          }
          return null;
        case 13:
          return (
            ao(Ra),
            (r = t.memoizedState),
            0 != (64 & t.flags)
              ? ((t.lanes = n), t)
              : ((r = null !== r),
                (n = !1),
                null === e ? void 0 !== t.memoizedProps.fallback && Ua(t) : (n = null !== e.memoizedState),
                r &&
                  !n &&
                  0 != (2 & t.mode) &&
                  ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & Ra.current)
                    ? 0 === jl && (jl = 3)
                    : ((0 !== jl && 3 !== jl) || (jl = 4), null === Cl || (0 == (134217727 & Ll) && 0 == (134217727 & Ml)) || ds(Cl, Pl))),
                (r || n) && (t.flags |= 4),
                null)
          );
        case 4:
          return za(), null === e && Or(t.stateNode.containerInfo), null;
        case 10:
          return Jo(t), null;
        case 17:
          return po(t.type) && ho(), null;
        case 19:
          if ((ao(Ra), null === (r = t.memoizedState))) return null;
          if (((l = 0 != (64 & t.flags)), null === (u = r.rendering)))
            if (l) tl(r, !1);
            else {
              if (0 !== jl || (null !== e && 0 != (64 & e.flags)))
                for (e = t.child; null !== e; ) {
                  if (null !== (u = La(e))) {
                    for (
                      t.flags |= 64,
                        tl(r, !1),
                        null !== (l = u.updateQueue) && ((t.updateQueue = l), (t.flags |= 4)),
                        null === r.lastEffect && (t.firstEffect = null),
                        t.lastEffect = r.lastEffect,
                        r = n,
                        n = t.child;
                      null !== n;

                    )
                      (e = r),
                        ((l = n).flags &= 2),
                        (l.nextEffect = null),
                        (l.firstEffect = null),
                        (l.lastEffect = null),
                        null === (u = l.alternate)
                          ? ((l.childLanes = 0),
                            (l.lanes = e),
                            (l.child = null),
                            (l.memoizedProps = null),
                            (l.memoizedState = null),
                            (l.updateQueue = null),
                            (l.dependencies = null),
                            (l.stateNode = null))
                          : ((l.childLanes = u.childLanes),
                            (l.lanes = u.lanes),
                            (l.child = u.child),
                            (l.memoizedProps = u.memoizedProps),
                            (l.memoizedState = u.memoizedState),
                            (l.updateQueue = u.updateQueue),
                            (l.type = u.type),
                            (e = u.dependencies),
                            (l.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                        (n = n.sibling);
                    return io(Ra, (1 & Ra.current) | 2), t.child;
                  }
                  e = e.sibling;
                }
              null !== r.tail && Fo() > Fl && ((t.flags |= 64), (l = !0), tl(r, !1), (t.lanes = 33554432));
            }
          else {
            if (!l)
              if (null !== (e = La(u))) {
                if (
                  ((t.flags |= 64),
                  (l = !0),
                  null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                  tl(r, !0),
                  null === r.tail && "hidden" === r.tailMode && !u.alternate && !Ba)
                )
                  return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
              } else
                2 * Fo() - r.renderingStartTime > Fl && 1073741824 !== n && ((t.flags |= 64), (l = !0), tl(r, !1), (t.lanes = 33554432));
            r.isBackwards
              ? ((u.sibling = t.child), (t.child = u))
              : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u), (r.last = u));
          }
          return null !== r.tail
            ? ((n = r.tail),
              (r.rendering = n),
              (r.tail = n.sibling),
              (r.lastEffect = t.lastEffect),
              (r.renderingStartTime = Fo()),
              (n.sibling = null),
              (t = Ra.current),
              io(Ra, l ? (1 & t) | 2 : 1 & t),
              n)
            : null;
        case 23:
        case 24:
          return (
            _s(),
            null !== e &&
              (null !== e.memoizedState) != (null !== t.memoizedState) &&
              "unstable-defer-without-hiding" !== r.mode &&
              (t.flags |= 4),
            null
          );
      }
      throw Error(i(156, t.tag));
    }
    function rl(e) {
      switch (e.tag) {
        case 1:
          po(e.type) && ho();
          var t = e.flags;
          return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
        case 3:
          if ((za(), ao(uo), ao(so), $a(), 0 != (64 & (t = e.flags)))) throw Error(i(285));
          return (e.flags = (-4097 & t) | 64), e;
        case 5:
          return Ta(e), null;
        case 13:
          return ao(Ra), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
        case 19:
          return ao(Ra), null;
        case 4:
          return za(), null;
        case 10:
          return Jo(e), null;
        case 23:
        case 24:
          return _s(), null;
        default:
          return null;
      }
    }
    function ol(e, t) {
      try {
        var n = "",
          r = t;
        do {
          (n += Q(r)), (r = r.return);
        } while (r);
        var o = n;
      } catch (e) {
        o = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: t, stack: o };
    }
    function al(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    (Wi = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (Vi = function (e, t, n, r) {
        var a = e.memoizedProps;
        if (a !== r) {
          (e = t.stateNode), Pa(Ea.current);
          var i,
            l = null;
          switch (n) {
            case "input":
              (a = J(e, a)), (r = J(e, r)), (l = []);
              break;
            case "option":
              (a = ae(e, a)), (r = ae(e, r)), (l = []);
              break;
            case "select":
              (a = o({}, a, { value: void 0 })), (r = o({}, r, { value: void 0 })), (l = []);
              break;
            case "textarea":
              (a = le(e, a)), (r = le(e, r)), (l = []);
              break;
            default:
              "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Mr);
          }
          for (d in (xe(n, r), (n = null), a))
            if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && null != a[d])
              if ("style" === d) {
                var u = a[d];
                for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
              } else
                "dangerouslySetInnerHTML" !== d &&
                  "children" !== d &&
                  "suppressContentEditableWarning" !== d &&
                  "suppressHydrationWarning" !== d &&
                  "autoFocus" !== d &&
                  (s.hasOwnProperty(d) ? l || (l = []) : (l = l || []).push(d, null));
          for (d in r) {
            var c = r[d];
            if (((u = null != a ? a[d] : void 0), r.hasOwnProperty(d) && c !== u && (null != c || null != u)))
              if ("style" === d)
                if (u) {
                  for (i in u) !u.hasOwnProperty(i) || (c && c.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
                  for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), (n[i] = c[i]));
                } else n || (l || (l = []), l.push(d, n)), (n = c);
              else
                "dangerouslySetInnerHTML" === d
                  ? ((c = c ? c.__html : void 0), (u = u ? u.__html : void 0), null != c && u !== c && (l = l || []).push(d, c))
                  : "children" === d
                  ? ("string" != typeof c && "number" != typeof c) || (l = l || []).push(d, "" + c)
                  : "suppressContentEditableWarning" !== d &&
                    "suppressHydrationWarning" !== d &&
                    (s.hasOwnProperty(d)
                      ? (null != c && "onScroll" === d && Er("scroll", e), l || u === c || (l = []))
                      : "object" == typeof c && null !== c && c.$$typeof === M
                      ? c.toString()
                      : (l = l || []).push(d, c));
          }
          n && (l = l || []).push("style", n);
          var d = l;
          (t.updateQueue = d) && (t.flags |= 4);
        }
      }),
      ($i = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      });
    var il = "function" == typeof WeakMap ? WeakMap : Map;
    function ll(e, t, n) {
      ((n = ia(-1, n)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function () {
          Wl || ((Wl = !0), (Vl = r)), al(0, t);
        }),
        n
      );
    }
    function sl(e, t, n) {
      (n = ia(-1, n)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var o = t.value;
        n.payload = function () {
          return al(0, t), r(o);
        };
      }
      var a = e.stateNode;
      return (
        null !== a &&
          "function" == typeof a.componentDidCatch &&
          (n.callback = function () {
            "function" != typeof r && (null === $l ? ($l = new Set([this])) : $l.add(this), al(0, t));
            var e = t.stack;
            this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
          }),
        n
      );
    }
    var ul = "function" == typeof WeakSet ? WeakSet : Set;
    function cl(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            Rs(e, t);
          }
        else t.current = null;
    }
    function dl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          return;
        case 1:
          if (256 & t.flags && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : qo(t.type, n), r)),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          return;
        case 3:
          return void (256 & t.flags && Ur(t.stateNode.containerInfo));
        case 5:
        case 6:
        case 4:
        case 17:
          return;
      }
      throw Error(i(163));
    }
    function fl(e, t, n) {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
        case 22:
          if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
            e = t = t.next;
            do {
              if (3 == (3 & e.tag)) {
                var r = e.create;
                e.destroy = r();
              }
              e = e.next;
            } while (e !== t);
          }
          if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
            e = t = t.next;
            do {
              var o = e;
              (r = o.next), 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (zs(n, e), Ns(n, e)), (e = r);
            } while (e !== t);
          }
          return;
        case 1:
          return (
            (e = n.stateNode),
            4 & n.flags &&
              (null === t
                ? e.componentDidMount()
                : ((r = n.elementType === n.type ? t.memoizedProps : qo(n.type, t.memoizedProps)),
                  e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
            void (null !== (t = n.updateQueue) && ca(n, t, e))
          );
        case 3:
          if (null !== (t = n.updateQueue)) {
            if (((e = null), null !== n.child))
              switch (n.child.tag) {
                case 5:
                  e = n.child.stateNode;
                  break;
                case 1:
                  e = n.child.stateNode;
              }
            ca(n, t, e);
          }
          return;
        case 5:
          return (e = n.stateNode), void (null === t && 4 & n.flags && Ir(n.type, n.memoizedProps) && e.focus());
        case 6:
        case 4:
        case 12:
          return;
        case 13:
          return void (
            null === n.memoizedState &&
            ((n = n.alternate), null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && wt(n))))
          );
        case 19:
        case 17:
        case 20:
        case 21:
        case 23:
        case 24:
          return;
      }
      throw Error(i(163));
    }
    function pl(e, t) {
      for (var n = e; ; ) {
        if (5 === n.tag) {
          var r = n.stateNode;
          if (t) "function" == typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : (r.display = "none");
          else {
            r = n.stateNode;
            var o = n.memoizedProps.style;
            (o = null != o && o.hasOwnProperty("display") ? o.display : null), (r.style.display = ve("display", o));
          }
        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
        else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    function hl(e, t) {
      if (vo && "function" == typeof vo.onCommitFiberUnmount)
        try {
          vo.onCommitFiberUnmount(yo, t);
        } catch (e) {}
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var n = (e = e.next);
            do {
              var r = n,
                o = r.destroy;
              if (((r = r.tag), void 0 !== o))
                if (0 != (4 & r)) zs(t, n);
                else {
                  r = t;
                  try {
                    o();
                  } catch (e) {
                    Rs(r, e);
                  }
                }
              n = n.next;
            } while (n !== e);
          }
          break;
        case 1:
          if ((cl(t), "function" == typeof (e = t.stateNode).componentWillUnmount))
            try {
              (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
            } catch (e) {
              Rs(t, e);
            }
          break;
        case 5:
          cl(t);
          break;
        case 4:
          bl(e, t);
      }
    }
    function ml(e) {
      (e.alternate = null),
        (e.child = null),
        (e.dependencies = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.return = null),
        (e.updateQueue = null);
    }
    function _l(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function gl(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (_l(t)) break e;
          t = t.return;
        }
        throw Error(i(160));
      }
      var n = t;
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(i(161));
      }
      16 & n.flags && (ge(t, ""), (n.flags &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || _l(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
          if (2 & n.flags) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.flags)) {
          n = n.stateNode;
          break e;
        }
      }
      r
        ? (function e(t, n, r) {
            var o = t.tag,
              a = 5 === o || 6 === o;
            if (a)
              (t = a ? t.stateNode : t.stateNode.instance),
                n
                  ? 8 === r.nodeType
                    ? r.parentNode.insertBefore(t, n)
                    : r.insertBefore(t, n)
                  : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t),
                    (null !== (r = r._reactRootContainer) && void 0 !== r) || null !== n.onclick || (n.onclick = Mr));
            else if (4 !== o && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
          })(e, n, t)
        : (function e(t, n, r) {
            var o = t.tag,
              a = 5 === o || 6 === o;
            if (a) (t = a ? t.stateNode : t.stateNode.instance), n ? r.insertBefore(t, n) : r.appendChild(t);
            else if (4 !== o && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
          })(e, n, t);
    }
    function bl(e, t) {
      for (var n, r, o = t, a = !1; ; ) {
        if (!a) {
          a = o.return;
          e: for (;;) {
            if (null === a) throw Error(i(160));
            switch (((n = a.stateNode), a.tag)) {
              case 5:
                r = !1;
                break e;
              case 3:
              case 4:
                (n = n.containerInfo), (r = !0);
                break e;
            }
            a = a.return;
          }
          a = !0;
        }
        if (5 === o.tag || 6 === o.tag) {
          e: for (var l = e, s = o, u = s; ; )
            if ((hl(l, u), null !== u.child && 4 !== u.tag)) (u.child.return = u), (u = u.child);
            else {
              if (u === s) break e;
              for (; null === u.sibling; ) {
                if (null === u.return || u.return === s) break e;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
          r ? ((l = n), (s = o.stateNode), 8 === l.nodeType ? l.parentNode.removeChild(s) : l.removeChild(s)) : n.removeChild(o.stateNode);
        } else if (4 === o.tag) {
          if (null !== o.child) {
            (n = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
            continue;
          }
        } else if ((hl(e, o), null !== o.child)) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === t) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === t) return;
          4 === (o = o.return).tag && (a = !1);
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    function yl(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
        case 22:
          var n = t.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var r = (n = n.next);
            do {
              3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
            } while (r !== n);
          }
          return;
        case 1:
          return;
        case 5:
          if (null != (n = t.stateNode)) {
            r = t.memoizedProps;
            var o = null !== e ? e.memoizedProps : r;
            e = t.type;
            var a = t.updateQueue;
            if (((t.updateQueue = null), null !== a)) {
              for (
                n[Gr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Se(e, o), t = Se(e, r), o = 0;
                o < a.length;
                o += 2
              ) {
                var l = a[o],
                  s = a[o + 1];
                "style" === l ? we(n, s) : "dangerouslySetInnerHTML" === l ? _e(n, s) : "children" === l ? ge(n, s) : v(n, l, s, t);
              }
              switch (e) {
                case "input":
                  ne(n, r);
                  break;
                case "textarea":
                  ue(n, r);
                  break;
                case "select":
                  (e = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (a = r.value)
                      ? ie(n, !!r.multiple, a, !1)
                      : e !== !!r.multiple &&
                        (null != r.defaultValue ? ie(n, !!r.multiple, r.defaultValue, !0) : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          return;
        case 6:
          if (null === t.stateNode) throw Error(i(162));
          return void (t.stateNode.nodeValue = t.memoizedProps);
        case 3:
          return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), wt(n.containerInfo)));
        case 12:
          return;
        case 13:
          return null !== t.memoizedState && ((Il = Fo()), pl(t.child, !0)), void vl(t);
        case 19:
          return void vl(t);
        case 17:
          return;
        case 23:
        case 24:
          return void pl(t, null !== t.memoizedState);
      }
      throw Error(i(163));
    }
    function vl(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new ul()),
          t.forEach(function (t) {
            var r = Ms.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    function wl(e, t) {
      return (
        null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && null !== (t = t.memoizedState) && null === t.dehydrated
      );
    }
    var kl = Math.ceil,
      xl = w.ReactCurrentDispatcher,
      Sl = w.ReactCurrentOwner,
      El = 0,
      Cl = null,
      Ol = null,
      Pl = 0,
      Nl = 0,
      zl = oo(0),
      jl = 0,
      Tl = null,
      Rl = 0,
      Ll = 0,
      Ml = 0,
      Hl = 0,
      Bl = null,
      Il = 0,
      Fl = 1 / 0;
    function Al() {
      Fl = Fo() + 500;
    }
    var Dl,
      Ul = null,
      Wl = !1,
      Vl = null,
      $l = null,
      Ql = !1,
      ql = null,
      Gl = 90,
      Kl = [],
      Yl = [],
      Xl = null,
      Zl = 0,
      Jl = null,
      es = -1,
      ts = 0,
      ns = 0,
      rs = null,
      os = !1;
    function as() {
      return 0 != (48 & El) ? Fo() : -1 !== es ? es : (es = Fo());
    }
    function is(e) {
      if (0 == (2 & (e = e.mode))) return 1;
      if (0 == (4 & e)) return 99 === Ao() ? 1 : 2;
      if ((0 === ts && (ts = Rl), 0 !== Qo.transition)) {
        0 !== ns && (ns = null !== Bl ? Bl.pendingLanes : 0), (e = ts);
        var t = 4186112 & ~ns;
        return 0 === (t &= -t) && 0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
      }
      return (
        (e = Ao()),
        0 != (4 & El) && 98 === e
          ? (e = Ft(12, ts))
          : (e = Ft(
              (e = (function (e) {
                switch (e) {
                  case 99:
                    return 15;
                  case 98:
                    return 10;
                  case 97:
                  case 96:
                    return 8;
                  case 95:
                    return 2;
                  default:
                    return 0;
                }
              })(e)),
              ts
            )),
        e
      );
    }
    function ls(e, t, n) {
      if (50 < Zl) throw ((Zl = 0), (Jl = null), Error(i(185)));
      if (null === (e = ss(e, t))) return null;
      Ut(e, t, n), e === Cl && ((Ml |= t), 4 === jl && ds(e, Pl));
      var r = Ao();
      1 === t
        ? 0 != (8 & El) && 0 == (48 & El)
          ? fs(e)
          : (us(e, n), 0 === El && (Al(), Vo()))
        : (0 == (4 & El) || (98 !== r && 99 !== r) || (null === Xl ? (Xl = new Set([e])) : Xl.add(e)), us(e, n)),
        (Bl = e);
    }
    function ss(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
      return 3 === n.tag ? n.stateNode : null;
    }
    function us(e, t) {
      for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var s = 31 - Wt(l),
          u = 1 << s,
          c = a[s];
        if (-1 === c) {
          if (0 == (u & r) || 0 != (u & o)) {
            (c = t), Ht(u);
            var d = Mt;
            a[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
          }
        } else c <= t && (e.expiredLanes |= u);
        l &= ~u;
      }
      if (((r = Bt(e, e === Cl ? Pl : 0)), (t = Mt), 0 === r))
        null !== n && (n !== Ro && xo(n), (e.callbackNode = null), (e.callbackPriority = 0));
      else {
        if (null !== n) {
          if (e.callbackPriority === t) return;
          n !== Ro && xo(n);
        }
        15 === t
          ? ((n = fs.bind(null, e)), null === Mo ? ((Mo = [n]), (Ho = ko(Po, $o))) : Mo.push(n), (n = Ro))
          : 14 === t
          ? (n = Wo(99, fs.bind(null, e)))
          : (n = Wo(
              (n = (function (e) {
                switch (e) {
                  case 15:
                  case 14:
                    return 99;
                  case 13:
                  case 12:
                  case 11:
                  case 10:
                    return 98;
                  case 9:
                  case 8:
                  case 7:
                  case 6:
                  case 4:
                  case 5:
                    return 97;
                  case 3:
                  case 2:
                  case 1:
                    return 95;
                  case 0:
                    return 90;
                  default:
                    throw Error(i(358, e));
                }
              })(t)),
              cs.bind(null, e)
            )),
          (e.callbackPriority = t),
          (e.callbackNode = n);
      }
    }
    function cs(e) {
      if (((es = -1), (ns = ts = 0), 0 != (48 & El))) throw Error(i(327));
      var t = e.callbackNode;
      if (Ps() && e.callbackNode !== t) return null;
      var n = Bt(e, e === Cl ? Pl : 0);
      if (0 === n) return null;
      var r = n,
        o = El;
      El |= 16;
      var a = ys();
      for ((Cl === e && Pl === r) || (Al(), gs(e, r)); ; )
        try {
          ks();
          break;
        } catch (t) {
          bs(e, t);
        }
      if ((Zo(), (xl.current = a), (El = o), null !== Ol ? (r = 0) : ((Cl = null), (Pl = 0), (r = jl)), 0 != (Rl & Ml))) gs(e, 0);
      else if (0 !== r) {
        if ((2 === r && ((El |= 64), e.hydrate && ((e.hydrate = !1), Ur(e.containerInfo)), 0 !== (n = It(e)) && (r = vs(e, n))), 1 === r))
          throw ((t = Tl), gs(e, 0), ds(e, n), us(e, Fo()), t);
        switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Es(e);
            break;
          case 3:
            if ((ds(e, n), (62914560 & n) === n && 10 < (r = Il + 500 - Fo()))) {
              if (0 !== Bt(e, 0)) break;
              if (((o = e.suspendedLanes) & n) !== n) {
                as(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = Ar(Es.bind(null, e), r);
              break;
            }
            Es(e);
            break;
          case 4:
            if ((ds(e, n), (4186112 & n) === n)) break;
            for (r = e.eventTimes, o = -1; 0 < n; ) {
              var l = 31 - Wt(n);
              (a = 1 << l), (l = r[l]) > o && (o = l), (n &= ~a);
            }
            if (
              ((n = o),
              10 <
                (n =
                  (120 > (n = Fo() - n)
                    ? 120
                    : 480 > n
                    ? 480
                    : 1080 > n
                    ? 1080
                    : 1920 > n
                    ? 1920
                    : 3e3 > n
                    ? 3e3
                    : 4320 > n
                    ? 4320
                    : 1960 * kl(n / 1960)) - n))
            ) {
              e.timeoutHandle = Ar(Es.bind(null, e), n);
              break;
            }
            Es(e);
            break;
          case 5:
            Es(e);
            break;
          default:
            throw Error(i(329));
        }
      }
      return us(e, Fo()), e.callbackNode === t ? cs.bind(null, e) : null;
    }
    function ds(e, t) {
      for (t &= ~Hl, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Wt(t),
          r = 1 << n;
        (e[n] = -1), (t &= ~r);
      }
    }
    function fs(e) {
      if (0 != (48 & El)) throw Error(i(327));
      if ((Ps(), e === Cl && 0 != (e.expiredLanes & Pl))) {
        var t = Pl,
          n = vs(e, t);
        0 != (Rl & Ml) && (n = vs(e, (t = Bt(e, t))));
      } else n = vs(e, (t = Bt(e, 0)));
      if (
        (0 !== e.tag && 2 === n && ((El |= 64), e.hydrate && ((e.hydrate = !1), Ur(e.containerInfo)), 0 !== (t = It(e)) && (n = vs(e, t))),
        1 === n)
      )
        throw ((n = Tl), gs(e, 0), ds(e, t), us(e, Fo()), n);
      return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Es(e), us(e, Fo()), null;
    }
    function ps(e, t) {
      var n = El;
      El |= 1;
      try {
        return e(t);
      } finally {
        0 === (El = n) && (Al(), Vo());
      }
    }
    function hs(e, t) {
      var n = El;
      (El &= -2), (El |= 8);
      try {
        return e(t);
      } finally {
        0 === (El = n) && (Al(), Vo());
      }
    }
    function ms(e, t) {
      io(zl, Nl), (Nl |= t), (Rl |= t);
    }
    function _s() {
      (Nl = zl.current), ao(zl);
    }
    function gs(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), Dr(n)), null !== Ol))
        for (n = Ol.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              null != (r = r.type.childContextTypes) && ho();
              break;
            case 3:
              za(), ao(uo), ao(so), $a();
              break;
            case 5:
              Ta(r);
              break;
            case 4:
              za();
              break;
            case 13:
            case 19:
              ao(Ra);
              break;
            case 10:
              Jo(r);
              break;
            case 23:
            case 24:
              _s();
          }
          n = n.return;
        }
      (Cl = e), (Ol = Fs(e.current, null)), (Pl = Nl = Rl = t), (jl = 0), (Tl = null), (Hl = Ml = Ll = 0);
    }
    function bs(e, t) {
      for (;;) {
        var n = Ol;
        try {
          if ((Zo(), (Qa.current = Oi), Za)) {
            for (var r = Ka.memoizedState; null !== r; ) {
              var o = r.queue;
              null !== o && (o.pending = null), (r = r.next);
            }
            Za = !1;
          }
          if (((Ga = 0), (Xa = Ya = Ka = null), (Ja = !1), (Sl.current = null), null === n || null === n.return)) {
            (jl = 1), (Tl = t), (Ol = null);
            break;
          }
          e: {
            var a = e,
              i = n.return,
              l = n,
              s = t;
            if (
              ((t = Pl),
              (l.flags |= 2048),
              (l.firstEffect = l.lastEffect = null),
              null !== s && "object" == typeof s && "function" == typeof s.then)
            ) {
              var u = s;
              if (0 == (2 & l.mode)) {
                var c = l.alternate;
                c
                  ? ((l.updateQueue = c.updateQueue), (l.memoizedState = c.memoizedState), (l.lanes = c.lanes))
                  : ((l.updateQueue = null), (l.memoizedState = null));
              }
              var d = 0 != (1 & Ra.current),
                f = i;
              do {
                var p;
                if ((p = 13 === f.tag)) {
                  var h = f.memoizedState;
                  if (null !== h) p = null !== h.dehydrated;
                  else {
                    var m = f.memoizedProps;
                    p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !d);
                  }
                }
                if (p) {
                  var _ = f.updateQueue;
                  if (null === _) {
                    var g = new Set();
                    g.add(u), (f.updateQueue = g);
                  } else _.add(u);
                  if (0 == (2 & f.mode)) {
                    if (((f.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                      if (null === l.alternate) l.tag = 17;
                      else {
                        var b = ia(-1, 1);
                        (b.tag = 2), la(l, b);
                      }
                    l.lanes |= 1;
                    break e;
                  }
                  (s = void 0), (l = t);
                  var y = a.pingCache;
                  if (
                    (null === y
                      ? ((y = a.pingCache = new il()), (s = new Set()), y.set(u, s))
                      : void 0 === (s = y.get(u)) && ((s = new Set()), y.set(u, s)),
                    !s.has(l))
                  ) {
                    s.add(l);
                    var v = Ls.bind(null, a, u, l);
                    u.then(v, v);
                  }
                  (f.flags |= 4096), (f.lanes = t);
                  break e;
                }
                f = f.return;
              } while (null !== f);
              s = Error(
                (q(l.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
              );
            }
            5 !== jl && (jl = 2), (s = ol(s, l)), (f = i);
            do {
              switch (f.tag) {
                case 3:
                  (a = s), (f.flags |= 4096), (t &= -t), (f.lanes |= t), sa(f, ll(0, a, t));
                  break e;
                case 1:
                  a = s;
                  var w = f.type,
                    k = f.stateNode;
                  if (
                    0 == (64 & f.flags) &&
                    ("function" == typeof w.getDerivedStateFromError ||
                      (null !== k && "function" == typeof k.componentDidCatch && (null === $l || !$l.has(k))))
                  ) {
                    (f.flags |= 4096), (t &= -t), (f.lanes |= t), sa(f, sl(f, a, t));
                    break e;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Ss(n);
        } catch (e) {
          (t = e), Ol === n && null !== n && (Ol = n = n.return);
          continue;
        }
        break;
      }
    }
    function ys() {
      var e = xl.current;
      return (xl.current = Oi), null === e ? Oi : e;
    }
    function vs(e, t) {
      var n = El;
      El |= 16;
      var r = ys();
      for ((Cl === e && Pl === t) || gs(e, t); ; )
        try {
          ws();
          break;
        } catch (t) {
          bs(e, t);
        }
      if ((Zo(), (El = n), (xl.current = r), null !== Ol)) throw Error(i(261));
      return (Cl = null), (Pl = 0), jl;
    }
    function ws() {
      for (; null !== Ol; ) xs(Ol);
    }
    function ks() {
      for (; null !== Ol && !So(); ) xs(Ol);
    }
    function xs(e) {
      var t = Dl(e.alternate, e, Nl);
      (e.memoizedProps = e.pendingProps), null === t ? Ss(e) : (Ol = t), (Sl.current = null);
    }
    function Ss(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), 0 == (2048 & t.flags))) {
          if (null !== (n = nl(n, t, Nl))) return void (Ol = n);
          if ((24 !== (n = t).tag && 23 !== n.tag) || null === n.memoizedState || 0 != (1073741824 & Nl) || 0 == (4 & n.mode)) {
            for (var r = 0, o = n.child; null !== o; ) (r |= o.lanes | o.childLanes), (o = o.sibling);
            n.childLanes = r;
          }
          null !== e &&
            0 == (2048 & e.flags) &&
            (null === e.firstEffect && (e.firstEffect = t.firstEffect),
            null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
            1 < t.flags && (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
        } else {
          if (null !== (n = rl(t))) return (n.flags &= 2047), void (Ol = n);
          null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
        }
        if (null !== (t = t.sibling)) return void (Ol = t);
        Ol = t = e;
      } while (null !== t);
      0 === jl && (jl = 5);
    }
    function Es(e) {
      var t = Ao();
      return Uo(99, Cs.bind(null, e, t)), null;
    }
    function Cs(e, t) {
      do {
        Ps();
      } while (null !== ql);
      if (0 != (48 & El)) throw Error(i(327));
      var n = e.finishedWork;
      if (null === n) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(i(177));
      e.callbackNode = null;
      var r = n.lanes | n.childLanes,
        o = r,
        a = e.pendingLanes & ~o;
      (e.pendingLanes = o),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= o),
        (e.mutableReadLanes &= o),
        (e.entangledLanes &= o),
        (o = e.entanglements);
      for (var l = e.eventTimes, s = e.expirationTimes; 0 < a; ) {
        var u = 31 - Wt(a),
          c = 1 << u;
        (o[u] = 0), (l[u] = -1), (s[u] = -1), (a &= ~c);
      }
      if (
        (null !== Xl && 0 == (24 & r) && Xl.has(e) && Xl.delete(e),
        e === Cl && ((Ol = Cl = null), (Pl = 0)),
        1 < n.flags ? (null !== n.lastEffect ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect)) : (r = n)) : (r = n.firstEffect),
        null !== r)
      ) {
        if (((o = El), (El |= 32), (Sl.current = null), (Hr = Gt), fr((l = dr())))) {
          if ("selectionStart" in l) s = { start: l.selectionStart, end: l.selectionEnd };
          else
            e: if (
              ((s = ((s = l.ownerDocument) && s.defaultView) || window), (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount)
            ) {
              (s = c.anchorNode), (a = c.anchorOffset), (u = c.focusNode), (c = c.focusOffset);
              try {
                s.nodeType, u.nodeType;
              } catch (e) {
                s = null;
                break e;
              }
              var d = 0,
                f = -1,
                p = -1,
                h = 0,
                m = 0,
                _ = l,
                g = null;
              t: for (;;) {
                for (
                  var b;
                  _ !== s || (0 !== a && 3 !== _.nodeType) || (f = d + a),
                    _ !== u || (0 !== c && 3 !== _.nodeType) || (p = d + c),
                    3 === _.nodeType && (d += _.nodeValue.length),
                    null !== (b = _.firstChild);

                )
                  (g = _), (_ = b);
                for (;;) {
                  if (_ === l) break t;
                  if ((g === s && ++h === a && (f = d), g === u && ++m === c && (p = d), null !== (b = _.nextSibling))) break;
                  g = (_ = g).parentNode;
                }
                _ = b;
              }
              s = -1 === f || -1 === p ? null : { start: f, end: p };
            } else s = null;
          s = s || { start: 0, end: 0 };
        } else s = null;
        (Br = { focusedElem: l, selectionRange: s }), (Gt = !1), (rs = null), (os = !1), (Ul = r);
        do {
          try {
            Os();
          } catch (e) {
            if (null === Ul) throw Error(i(330));
            Rs(Ul, e), (Ul = Ul.nextEffect);
          }
        } while (null !== Ul);
        (rs = null), (Ul = r);
        do {
          try {
            for (l = e; null !== Ul; ) {
              var y = Ul.flags;
              if ((16 & y && ge(Ul.stateNode, ""), 128 & y)) {
                var v = Ul.alternate;
                if (null !== v) {
                  var w = v.ref;
                  null !== w && ("function" == typeof w ? w(null) : (w.current = null));
                }
              }
              switch (1038 & y) {
                case 2:
                  gl(Ul), (Ul.flags &= -3);
                  break;
                case 6:
                  gl(Ul), (Ul.flags &= -3), yl(Ul.alternate, Ul);
                  break;
                case 1024:
                  Ul.flags &= -1025;
                  break;
                case 1028:
                  (Ul.flags &= -1025), yl(Ul.alternate, Ul);
                  break;
                case 4:
                  yl(Ul.alternate, Ul);
                  break;
                case 8:
                  bl(l, (s = Ul));
                  var k = s.alternate;
                  ml(s), null !== k && ml(k);
              }
              Ul = Ul.nextEffect;
            }
          } catch (e) {
            if (null === Ul) throw Error(i(330));
            Rs(Ul, e), (Ul = Ul.nextEffect);
          }
        } while (null !== Ul);
        if (
          ((w = Br),
          (v = dr()),
          (y = w.focusedElem),
          (l = w.selectionRange),
          v !== y &&
            y &&
            y.ownerDocument &&
            (function e(t, n) {
              return (
                !(!t || !n) &&
                (t === n ||
                  ((!t || 3 !== t.nodeType) &&
                    (n && 3 === n.nodeType
                      ? e(t, n.parentNode)
                      : "contains" in t
                      ? t.contains(n)
                      : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))))
              );
            })(y.ownerDocument.documentElement, y))
        ) {
          null !== l &&
            fr(y) &&
            ((v = l.start),
            void 0 === (w = l.end) && (w = v),
            "selectionStart" in y
              ? ((y.selectionStart = v), (y.selectionEnd = Math.min(w, y.value.length)))
              : (w = ((v = y.ownerDocument || document) && v.defaultView) || window).getSelection &&
                ((w = w.getSelection()),
                (s = y.textContent.length),
                (k = Math.min(l.start, s)),
                (l = void 0 === l.end ? k : Math.min(l.end, s)),
                !w.extend && k > l && ((s = l), (l = k), (k = s)),
                (s = cr(y, k)),
                (a = cr(y, l)),
                s &&
                  a &&
                  (1 !== w.rangeCount ||
                    w.anchorNode !== s.node ||
                    w.anchorOffset !== s.offset ||
                    w.focusNode !== a.node ||
                    w.focusOffset !== a.offset) &&
                  ((v = v.createRange()).setStart(s.node, s.offset),
                  w.removeAllRanges(),
                  k > l ? (w.addRange(v), w.extend(a.node, a.offset)) : (v.setEnd(a.node, a.offset), w.addRange(v))))),
            (v = []);
          for (w = y; (w = w.parentNode); ) 1 === w.nodeType && v.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
          for ("function" == typeof y.focus && y.focus(), y = 0; y < v.length; y++)
            ((w = v[y]).element.scrollLeft = w.left), (w.element.scrollTop = w.top);
        }
        (Gt = !!Hr), (Br = Hr = null), (e.current = n), (Ul = r);
        do {
          try {
            for (y = e; null !== Ul; ) {
              var x = Ul.flags;
              if ((36 & x && fl(y, Ul.alternate, Ul), 128 & x)) {
                v = void 0;
                var S = Ul.ref;
                if (null !== S) {
                  var E = Ul.stateNode;
                  switch (Ul.tag) {
                    case 5:
                      v = E;
                      break;
                    default:
                      v = E;
                  }
                  "function" == typeof S ? S(v) : (S.current = v);
                }
              }
              Ul = Ul.nextEffect;
            }
          } catch (e) {
            if (null === Ul) throw Error(i(330));
            Rs(Ul, e), (Ul = Ul.nextEffect);
          }
        } while (null !== Ul);
        (Ul = null), Lo(), (El = o);
      } else e.current = n;
      if (Ql) (Ql = !1), (ql = e), (Gl = t);
      else
        for (Ul = r; null !== Ul; )
          (t = Ul.nextEffect), (Ul.nextEffect = null), 8 & Ul.flags && (((x = Ul).sibling = null), (x.stateNode = null)), (Ul = t);
      if (
        (0 === (r = e.pendingLanes) && ($l = null),
        1 === r ? (e === Jl ? Zl++ : ((Zl = 0), (Jl = e))) : (Zl = 0),
        (n = n.stateNode),
        vo && "function" == typeof vo.onCommitFiberRoot)
      )
        try {
          vo.onCommitFiberRoot(yo, n, void 0, 64 == (64 & n.current.flags));
        } catch (e) {}
      if ((us(e, Fo()), Wl)) throw ((Wl = !1), (e = Vl), (Vl = null), e);
      return 0 != (8 & El) || Vo(), null;
    }
    function Os() {
      for (; null !== Ul; ) {
        var e = Ul.alternate;
        os || null === rs || (0 != (8 & Ul.flags) ? Je(Ul, rs) && (os = !0) : 13 === Ul.tag && wl(e, Ul) && Je(Ul, rs) && (os = !0));
        var t = Ul.flags;
        0 != (256 & t) && dl(e, Ul),
          0 == (512 & t) ||
            Ql ||
            ((Ql = !0),
            Wo(97, function () {
              return Ps(), null;
            })),
          (Ul = Ul.nextEffect);
      }
    }
    function Ps() {
      if (90 !== Gl) {
        var e = 97 < Gl ? 97 : Gl;
        return (Gl = 90), Uo(e, js);
      }
      return !1;
    }
    function Ns(e, t) {
      Kl.push(t, e),
        Ql ||
          ((Ql = !0),
          Wo(97, function () {
            return Ps(), null;
          }));
    }
    function zs(e, t) {
      Yl.push(t, e),
        Ql ||
          ((Ql = !0),
          Wo(97, function () {
            return Ps(), null;
          }));
    }
    function js() {
      if (null === ql) return !1;
      var e = ql;
      if (((ql = null), 0 != (48 & El))) throw Error(i(331));
      var t = El;
      El |= 32;
      var n = Yl;
      Yl = [];
      for (var r = 0; r < n.length; r += 2) {
        var o = n[r],
          a = n[r + 1],
          l = o.destroy;
        if (((o.destroy = void 0), "function" == typeof l))
          try {
            l();
          } catch (e) {
            if (null === a) throw Error(i(330));
            Rs(a, e);
          }
      }
      for (n = Kl, Kl = [], r = 0; r < n.length; r += 2) {
        (o = n[r]), (a = n[r + 1]);
        try {
          var s = o.create;
          o.destroy = s();
        } catch (e) {
          if (null === a) throw Error(i(330));
          Rs(a, e);
        }
      }
      for (s = e.current.firstEffect; null !== s; )
        (e = s.nextEffect), (s.nextEffect = null), 8 & s.flags && ((s.sibling = null), (s.stateNode = null)), (s = e);
      return (El = t), Vo(), !0;
    }
    function Ts(e, t, n) {
      la(e, (t = ll(0, (t = ol(n, t)), 1))), (t = as()), null !== (e = ss(e, 1)) && (Ut(e, 1, t), us(e, t));
    }
    function Rs(e, t) {
      if (3 === e.tag) Ts(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            Ts(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch && (null === $l || !$l.has(r)))
            ) {
              var o = sl(n, (e = ol(t, e)), 1);
              if ((la(n, o), (o = as()), null !== (n = ss(n, 1)))) Ut(n, 1, o), us(n, o);
              else if ("function" == typeof r.componentDidCatch && (null === $l || !$l.has(r)))
                try {
                  r.componentDidCatch(t, e);
                } catch (e) {}
              break;
            }
          }
          n = n.return;
        }
    }
    function Ls(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (t = as()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Cl === e && (Pl & n) === n && (4 === jl || (3 === jl && (62914560 & Pl) === Pl && 500 > Fo() - Il) ? gs(e, 0) : (Hl |= n)),
        us(e, t);
    }
    function Ms(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) &&
          (0 == (2 & (t = e.mode))
            ? (t = 1)
            : 0 == (4 & t)
            ? (t = 99 === Ao() ? 1 : 2)
            : (0 === ts && (ts = Rl), 0 === (t = At(62914560 & ~ts)) && (t = 4194304))),
        (n = as()),
        null !== (e = ss(e, t)) && (Ut(e, t, n), us(e, n));
    }
    function Hs(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.flags = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Bs(e, t, n, r) {
      return new Hs(e, t, n, r);
    }
    function Is(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Fs(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Bs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.nextEffect = null), (n.firstEffect = null), (n.lastEffect = null)),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function As(e, t, n, r, o, a) {
      var l = 2;
      if (((r = e), "function" == typeof e)) Is(e) && (l = 1);
      else if ("string" == typeof e) l = 5;
      else
        e: switch (e) {
          case S:
            return Ds(n.children, o, a, t);
          case H:
            (l = 8), (o |= 16);
            break;
          case E:
            (l = 8), (o |= 1);
            break;
          case C:
            return ((e = Bs(12, n, t, 8 | o)).elementType = C), (e.type = C), (e.lanes = a), e;
          case z:
            return ((e = Bs(13, n, t, o)).type = z), (e.elementType = z), (e.lanes = a), e;
          case j:
            return ((e = Bs(19, n, t, o)).elementType = j), (e.lanes = a), e;
          case B:
            return Us(n, o, a, t);
          case I:
            return ((e = Bs(24, n, t, o)).elementType = I), (e.lanes = a), e;
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case O:
                  l = 10;
                  break e;
                case P:
                  l = 9;
                  break e;
                case N:
                  l = 11;
                  break e;
                case T:
                  l = 14;
                  break e;
                case R:
                  (l = 16), (r = null);
                  break e;
                case L:
                  l = 22;
                  break e;
              }
            throw Error(i(130, null == e ? e : typeof e, ""));
        }
      return ((t = Bs(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = a), t;
    }
    function Ds(e, t, n, r) {
      return ((e = Bs(7, e, r, t)).lanes = n), e;
    }
    function Us(e, t, n, r) {
      return ((e = Bs(23, e, r, t)).elementType = B), (e.lanes = n), e;
    }
    function Ws(e, t, n) {
      return ((e = Bs(6, e, null, t)).lanes = n), e;
    }
    function Vs(e, t, n) {
      return (
        ((t = Bs(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
      );
    }
    function $s(e, t, n) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Dt(0)),
        (this.expirationTimes = Dt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Dt(0)),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Qs(e, t, n) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: x, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
    }
    function qs(e, t, n, r) {
      var o = t.current,
        a = as(),
        l = is(o);
      e: if (n) {
        t: {
          if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(i(170));
          var s = n;
          do {
            switch (s.tag) {
              case 3:
                s = s.stateNode.context;
                break t;
              case 1:
                if (po(s.type)) {
                  s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            s = s.return;
          } while (null !== s);
          throw Error(i(171));
        }
        if (1 === n.tag) {
          var u = n.type;
          if (po(u)) {
            n = _o(n, u, s);
            break e;
          }
        }
        n = s;
      } else n = lo;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = ia(a, l)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        la(o, t),
        ls(o, l, a),
        l
      );
    }
    function Gs(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Ks(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function Ys(e, t) {
      Ks(e, t), (e = e.alternate) && Ks(e, t);
    }
    function Xs(e, t, n) {
      var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
      if (
        ((n = new $s(e, t, null != n && !0 === n.hydrate)),
        (t = Bs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
        (n.current = t),
        (t.stateNode = n),
        oa(t),
        (e[Kr] = n.current),
        Or(8 === e.nodeType ? e.parentNode : e),
        r)
      )
        for (e = 0; e < r.length; e++) {
          var o = (t = r[e])._getVersion;
          (o = o(t._source)),
            null == n.mutableSourceEagerHydrationData
              ? (n.mutableSourceEagerHydrationData = [t, o])
              : n.mutableSourceEagerHydrationData.push(t, o);
        }
      this._internalRoot = n;
    }
    function Zs(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Js(e, t, n, r, o) {
      var a = n._reactRootContainer;
      if (a) {
        var i = a._internalRoot;
        if ("function" == typeof o) {
          var l = o;
          o = function () {
            var e = Gs(i);
            l.call(e);
          };
        }
        qs(t, i, e, o);
      } else {
        if (
          ((a = n._reactRootContainer =
            (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new Xs(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
          (i = a._internalRoot),
          "function" == typeof o)
        ) {
          var s = o;
          o = function () {
            var e = Gs(i);
            s.call(e);
          };
        }
        hs(function () {
          qs(t, i, e, o);
        });
      }
      return Gs(i);
    }
    function eu(e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Zs(t)) throw Error(i(200));
      return Qs(e, t, null, n);
    }
    (Dl = function (e, t, n) {
      var r = t.lanes;
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps || uo.current) Ti = !0;
        else {
          if (0 == (n & r)) {
            switch (((Ti = !1), t.tag)) {
              case 3:
                Ui(t), Wa();
                break;
              case 5:
                ja(t);
                break;
              case 1:
                po(t.type) && go(t);
                break;
              case 4:
                Na(t, t.stateNode.containerInfo);
                break;
              case 10:
                r = t.memoizedProps.value;
                var o = t.type._context;
                io(Go, o._currentValue), (o._currentValue = r);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 != (n & t.child.childLanes)
                    ? qi(e, t, n)
                    : (io(Ra, 1 & Ra.current), null !== (t = el(e, t, n)) ? t.sibling : null);
                io(Ra, 1 & Ra.current);
                break;
              case 19:
                if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                  if (r) return Ji(e, t, n);
                  t.flags |= 64;
                }
                if (
                  (null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)), io(Ra, Ra.current), r)
                )
                  break;
                return null;
              case 23:
              case 24:
                return (t.lanes = 0), Bi(e, t, n);
            }
            return el(e, t, n);
          }
          Ti = 0 != (16384 & e.flags);
        }
      else Ti = !1;
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (e = t.pendingProps),
            (o = fo(t, so.current)),
            ta(t, n),
            (o = ni(null, t, r, e, o, n)),
            (t.flags |= 1),
            "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof)
          ) {
            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), po(r))) {
              var a = !0;
              go(t);
            } else a = !1;
            (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), oa(t);
            var l = r.getDerivedStateFromProps;
            "function" == typeof l && fa(t, r, l, e),
              (o.updater = pa),
              (t.stateNode = o),
              (o._reactInternals = t),
              ga(t, r, e, n),
              (t = Di(null, t, r, !0, a, n));
          } else (t.tag = 0), Ri(null, t, o, n), (t = t.child);
          return t;
        case 16:
          o = t.elementType;
          e: {
            switch (
              (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (o = (a = o._init)(o._payload)),
              (t.type = o),
              (a = t.tag =
                (function (e) {
                  if ("function" == typeof e) return Is(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === N) return 11;
                    if (e === T) return 14;
                  }
                  return 2;
                })(o)),
              (e = qo(o, e)),
              a)
            ) {
              case 0:
                t = Fi(null, t, o, e, n);
                break e;
              case 1:
                t = Ai(null, t, o, e, n);
                break e;
              case 11:
                t = Li(null, t, o, e, n);
                break e;
              case 14:
                t = Mi(null, t, o, qo(o.type, e), r, n);
                break e;
            }
            throw Error(i(306, o, ""));
          }
          return t;
        case 0:
          return (r = t.type), (o = t.pendingProps), Fi(e, t, r, (o = t.elementType === r ? o : qo(r, o)), n);
        case 1:
          return (r = t.type), (o = t.pendingProps), Ai(e, t, r, (o = t.elementType === r ? o : qo(r, o)), n);
        case 3:
          if ((Ui(t), (r = t.updateQueue), null === e || null === r)) throw Error(i(282));
          if (
            ((r = t.pendingProps),
            (o = null !== (o = t.memoizedState) ? o.element : null),
            aa(e, t),
            ua(t, r, null, n),
            (r = t.memoizedState.element) === o)
          )
            Wa(), (t = el(e, t, n));
          else {
            if (((a = (o = t.stateNode).hydrate) && ((Ha = Wr(t.stateNode.containerInfo.firstChild)), (Ma = t), (a = Ba = !0)), a)) {
              if (null != (e = o.mutableSourceEagerHydrationData))
                for (o = 0; o < e.length; o += 2) ((a = e[o])._workInProgressVersionPrimary = e[o + 1]), Va.push(a);
              for (n = xa(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
            } else Ri(e, t, r, n), Wa();
            t = t.child;
          }
          return t;
        case 5:
          return (
            ja(t),
            null === e && Aa(t),
            (r = t.type),
            (o = t.pendingProps),
            (a = null !== e ? e.memoizedProps : null),
            (l = o.children),
            Fr(r, o) ? (l = null) : null !== a && Fr(r, a) && (t.flags |= 16),
            Ii(e, t),
            Ri(e, t, l, n),
            t.child
          );
        case 6:
          return null === e && Aa(t), null;
        case 13:
          return qi(e, t, n);
        case 4:
          return (
            Na(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = ka(t, null, r, n)) : Ri(e, t, r, n), t.child
          );
        case 11:
          return (r = t.type), (o = t.pendingProps), Li(e, t, r, (o = t.elementType === r ? o : qo(r, o)), n);
        case 7:
          return Ri(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Ri(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            (r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (a = o.value);
            var s = t.type._context;
            if ((io(Go, s._currentValue), (s._currentValue = a), null !== l))
              if (
                ((s = l.value),
                0 === (a = ir(s, a) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(s, a) : 1073741823)))
              ) {
                if (l.children === o.children && !uo.current) {
                  t = el(e, t, n);
                  break e;
                }
              } else
                for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                  var u = s.dependencies;
                  if (null !== u) {
                    l = s.child;
                    for (var c = u.firstContext; null !== c; ) {
                      if (c.context === r && 0 != (c.observedBits & a)) {
                        1 === s.tag && (((c = ia(-1, n & -n)).tag = 2), la(s, c)),
                          (s.lanes |= n),
                          null !== (c = s.alternate) && (c.lanes |= n),
                          ea(s.return, n),
                          (u.lanes |= n);
                        break;
                      }
                      c = c.next;
                    }
                  } else l = 10 === s.tag && s.type === t.type ? null : s.child;
                  if (null !== l) l.return = s;
                  else
                    for (l = s; null !== l; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (null !== (s = l.sibling)) {
                        (s.return = l.return), (l = s);
                        break;
                      }
                      l = l.return;
                    }
                  s = l;
                }
            Ri(e, t, o.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (o = t.type),
            (r = (a = t.pendingProps).children),
            ta(t, n),
            (r = r((o = na(o, a.unstable_observedBits)))),
            (t.flags |= 1),
            Ri(e, t, r, n),
            t.child
          );
        case 14:
          return (a = qo((o = t.type), t.pendingProps)), Mi(e, t, o, (a = qo(o.type, a)), r, n);
        case 15:
          return Hi(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : qo(r, o)),
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (t.tag = 1),
            po(r) ? ((e = !0), go(t)) : (e = !1),
            ta(t, n),
            ma(t, r, o),
            ga(t, r, o, n),
            Di(null, t, r, !0, e, n)
          );
        case 19:
          return Ji(e, t, n);
        case 23:
        case 24:
          return Bi(e, t, n);
      }
      throw Error(i(156, t.tag));
    }),
      (Xs.prototype.render = function (e) {
        qs(e, this._internalRoot, null, null);
      }),
      (Xs.prototype.unmount = function () {
        var e = this._internalRoot,
          t = e.containerInfo;
        qs(null, e, null, function () {
          t[Kr] = null;
        });
      }),
      (et = function (e) {
        13 === e.tag && (ls(e, 4, as()), Ys(e, 4));
      }),
      (tt = function (e) {
        13 === e.tag && (ls(e, 67108864, as()), Ys(e, 67108864));
      }),
      (nt = function (e) {
        if (13 === e.tag) {
          var t = as(),
            n = is(e);
          ls(e, n, t), Ys(e, n);
        }
      }),
      (rt = function (e, t) {
        return t();
      }),
      (Ce = function (e, t, n) {
        switch (t) {
          case "input":
            if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var o = eo(r);
                  if (!o) throw Error(i(90));
                  X(r), ne(r, o);
                }
              }
            }
            break;
          case "textarea":
            ue(e, n);
            break;
          case "select":
            null != (t = n.value) && ie(e, !!n.multiple, t, !1);
        }
      }),
      (Te = ps),
      (Re = function (e, t, n, r, o) {
        var a = El;
        El |= 4;
        try {
          return Uo(98, e.bind(null, t, n, r, o));
        } finally {
          0 === (El = a) && (Al(), Vo());
        }
      }),
      (Le = function () {
        0 == (49 & El) &&
          ((function () {
            if (null !== Xl) {
              var e = Xl;
              (Xl = null),
                e.forEach(function (e) {
                  (e.expiredLanes |= 24 & e.pendingLanes), us(e, Fo());
                });
            }
            Vo();
          })(),
          Ps());
      }),
      (Me = function (e, t) {
        var n = El;
        El |= 2;
        try {
          return e(t);
        } finally {
          0 === (El = n) && (Al(), Vo());
        }
      });
    var tu = { Events: [Zr, Jr, eo, ze, je, Ps, { current: !1 }] },
      nu = { findFiberByHostInstance: Xr, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
      ru = {
        bundleType: nu.bundleType,
        version: nu.version,
        rendererPackageName: nu.rendererPackageName,
        rendererConfig: nu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: w.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = Ze(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          nu.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var ou = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ou.isDisabled && ou.supportsFiber)
        try {
          (yo = ou.inject(ru)), (vo = ou);
        } catch (e) {}
    }
    (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
      (t.createPortal = eu),
      (t.findDOMNode = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var t = e._reactInternals;
        if (void 0 === t) {
          if ("function" == typeof e.render) throw Error(i(188));
          throw Error(i(268, Object.keys(e)));
        }
        return (e = null === (e = Ze(t)) ? null : e.stateNode);
      }),
      (t.flushSync = function (e, t) {
        var n = El;
        if (0 != (48 & n)) return e(t);
        El |= 1;
        try {
          if (e) return Uo(99, e.bind(null, t));
        } finally {
          (El = n), Vo();
        }
      }),
      (t.hydrate = function (e, t, n) {
        if (!Zs(t)) throw Error(i(200));
        return Js(null, e, t, !0, n);
      }),
      (t.render = function (e, t, n) {
        if (!Zs(t)) throw Error(i(200));
        return Js(null, e, t, !1, n);
      }),
      (t.unmountComponentAtNode = function (e) {
        if (!Zs(e)) throw Error(i(40));
        return (
          !!e._reactRootContainer &&
          (hs(function () {
            Js(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Kr] = null);
            });
          }),
          !0)
        );
      }),
      (t.unstable_batchedUpdates = ps),
      (t.unstable_createPortal = function (e, t) {
        return eu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
      }),
      (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!Zs(n)) throw Error(i(200));
        if (null == e || void 0 === e._reactInternals) throw Error(i(38));
        return Js(e, t, n, !1, r);
      }),
      (t.version = "17.0.2");
  },
  19: function (e, t, n) {
    "use strict";
    e.exports = n(20);
  },
  2: function (e, t, n) {
    "use strict";
    var r,
      o = function () {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
      },
      a = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      i = [];
    function l(e) {
      for (var t = -1, n = 0; n < i.length; n++)
        if (i[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function s(e, t) {
      for (var n = {}, r = [], o = 0; o < e.length; o++) {
        var a = e[o],
          s = t.base ? a[0] + t.base : a[0],
          u = n[s] || 0,
          c = "".concat(s, " ").concat(u);
        n[s] = u + 1;
        var d = l(c),
          f = { css: a[1], media: a[2], sourceMap: a[3] };
        -1 !== d ? (i[d].references++, i[d].updater(f)) : i.push({ identifier: c, updater: _(f, t), references: 1 }), r.push(c);
      }
      return r;
    }
    function u(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var o = n.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = a(e.insert || "head");
        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        i.appendChild(t);
      }
      return t;
    }
    var c,
      d =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join("\n");
        });
    function f(e, t, n, r) {
      var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, o);
      else {
        var a = document.createTextNode(o),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        a = n.sourceMap;
      if (
        (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
        a &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      m = 0;
    function _(e, t) {
      var n, r, o;
      if (t.singleton) {
        var a = m++;
        (n = h || (h = u(t))), (r = f.bind(null, n, a, !1)), (o = f.bind(null, n, a, !0));
      } else
        (n = u(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
      var n = s((e = e || []), t);
      return function (e) {
        if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
          for (var r = 0; r < n.length; r++) {
            var o = l(n[r]);
            i[o].references--;
          }
          for (var a = s(e, t), u = 0; u < n.length; u++) {
            var c = l(n[u]);
            0 === i[c].references && (i[c].updater(), i.splice(c, 1));
          }
          n = a;
        }
      };
    };
  },
  20: function (e, t, n) {
    "use strict";
    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, o, a, i;
    if ("object" == typeof performance && "function" == typeof performance.now) {
      var l = performance;
      t.unstable_now = function () {
        return l.now();
      };
    } else {
      var s = Date,
        u = s.now();
      t.unstable_now = function () {
        return s.now() - u;
      };
    }
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var c = null,
        d = null,
        f = function () {
          if (null !== c)
            try {
              var e = t.unstable_now();
              c(!0, e), (c = null);
            } catch (e) {
              throw (setTimeout(f, 0), e);
            }
        };
      (r = function (e) {
        null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(f, 0));
      }),
        (o = function (e, t) {
          d = setTimeout(e, t);
        }),
        (a = function () {
          clearTimeout(d);
        }),
        (t.unstable_shouldYield = function () {
          return !1;
        }),
        (i = t.unstable_forceFrameRate = function () {});
    } else {
      var p = window.setTimeout,
        h = window.clearTimeout;
      if ("undefined" != typeof console) {
        var m = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          ),
          "function" != typeof m &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            );
      }
      var _ = !1,
        g = null,
        b = -1,
        y = 5,
        v = 0;
      (t.unstable_shouldYield = function () {
        return t.unstable_now() >= v;
      }),
        (i = function () {}),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (y = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var w = new MessageChannel(),
        k = w.port2;
      (w.port1.onmessage = function () {
        if (null !== g) {
          var e = t.unstable_now();
          v = e + y;
          try {
            g(!0, e) ? k.postMessage(null) : ((_ = !1), (g = null));
          } catch (e) {
            throw (k.postMessage(null), e);
          }
        } else _ = !1;
      }),
        (r = function (e) {
          (g = e), _ || ((_ = !0), k.postMessage(null));
        }),
        (o = function (e, n) {
          b = p(function () {
            e(t.unstable_now());
          }, n);
        }),
        (a = function () {
          h(b), (b = -1);
        });
    }
    function x(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          o = e[r];
        if (!(void 0 !== o && 0 < C(o, t))) break e;
        (e[r] = t), (e[n] = o), (n = r);
      }
    }
    function S(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function E(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, o = e.length; r < o; ) {
            var a = 2 * (r + 1) - 1,
              i = e[a],
              l = a + 1,
              s = e[l];
            if (void 0 !== i && 0 > C(i, n))
              void 0 !== s && 0 > C(s, i) ? ((e[r] = s), (e[l] = n), (r = l)) : ((e[r] = i), (e[a] = n), (r = a));
            else {
              if (!(void 0 !== s && 0 > C(s, n))) break e;
              (e[r] = s), (e[l] = n), (r = l);
            }
          }
        }
        return t;
      }
      return null;
    }
    function C(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var O = [],
      P = [],
      N = 1,
      z = null,
      j = 3,
      T = !1,
      R = !1,
      L = !1;
    function M(e) {
      for (var t = S(P); null !== t; ) {
        if (null === t.callback) E(P);
        else {
          if (!(t.startTime <= e)) break;
          E(P), (t.sortIndex = t.expirationTime), x(O, t);
        }
        t = S(P);
      }
    }
    function H(e) {
      if (((L = !1), M(e), !R))
        if (null !== S(O)) (R = !0), r(B);
        else {
          var t = S(P);
          null !== t && o(H, t.startTime - e);
        }
    }
    function B(e, n) {
      (R = !1), L && ((L = !1), a()), (T = !0);
      var r = j;
      try {
        for (M(n), z = S(O); null !== z && (!(z.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
          var i = z.callback;
          if ("function" == typeof i) {
            (z.callback = null), (j = z.priorityLevel);
            var l = i(z.expirationTime <= n);
            (n = t.unstable_now()), "function" == typeof l ? (z.callback = l) : z === S(O) && E(O), M(n);
          } else E(O);
          z = S(O);
        }
        if (null !== z) var s = !0;
        else {
          var u = S(P);
          null !== u && o(H, u.startTime - n), (s = !1);
        }
        return s;
      } finally {
        (z = null), (j = r), (T = !1);
      }
    }
    var I = i;
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        R || T || ((R = !0), r(B));
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return j;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return S(O);
      }),
      (t.unstable_next = function (e) {
        switch (j) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = j;
        }
        var n = j;
        j = t;
        try {
          return e();
        } finally {
          j = n;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = I),
      (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = j;
        j = e;
        try {
          return t();
        } finally {
          j = n;
        }
      }),
      (t.unstable_scheduleCallback = function (e, n, i) {
        var l = t.unstable_now();
        switch (("object" == typeof i && null !== i ? (i = "number" == typeof (i = i.delay) && 0 < i ? l + i : l) : (i = l), e)) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (e = { id: N++, callback: n, priorityLevel: e, startTime: i, expirationTime: (s = i + s), sortIndex: -1 }),
          i > l
            ? ((e.sortIndex = i), x(P, e), null === S(O) && e === S(P) && (L ? a() : (L = !0), o(H, i - l)))
            : ((e.sortIndex = s), x(O, e), R || T || ((R = !0), r(B))),
          e
        );
      }),
      (t.unstable_wrapCallback = function (e) {
        var t = j;
        return function () {
          var n = j;
          j = t;
          try {
            return e.apply(this, arguments);
          } finally {
            j = n;
          }
        };
      });
  },
  219: function (e, t, n) {
    var r = n(2),
      o = n(220);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(o, a);
    e.exports = o.locals || {};
  },
  220: function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-Thin.ttf');\n  font-weight: 100;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-ExtraLight.ttf');\n  font-weight: 200;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-Light.ttf');\n  font-weight: 300;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-Regular.ttf');\n  font-weight: normal;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-Medium.ttf');\n  font-weight: 500;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-SemiBold.ttf');\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-Bold.ttf');\n  font-weight: 700;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-ExtraBold.ttf');\n  font-weight: 800;\n}\n@font-face {\n  font-family: 'WorkSans';\n  src: url('/static/assets/fonts/WorkSans-Black.ttf');\n  font-weight: 900;\n}\nbody {\n  margin: 0;\n  font-family: 'WorkSans', Arial, sans-serif;\n  color: #fff;\n}\nbody.ru {\n  font-family: Arial, sans-serif;\n}\nbody input {\n  font-family: 'WorkSans', Arial, sans-serif;\n}\n.topMessage {\n  text-align: center;\n  font-size: 14px;\n  height: 30px;\n  position: fixed;\n  left: 0;\n  top: 85px;\n  width: 100%;\n  color: #fff;\n  line-height: 30px;\n  display: none;\n  opacity: 0;\n}\n.topMessage.green {\n  display: block;\n  background: #45d3ab;\n}\n.topMessage.red {\n  display: block;\n  background: #f55260;\n}\n@-webkit-keyframes show {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation: show 0.3s linear forwards;\n}\n.scroll::-webkit-scrollbar {\n  width: 0px;\n}\n.scroll::-webkit-scrollbar-thumb {\n  background: #0a3b57;\n  border-radius: 5px;\n}\ninput:focus {\n  outline-width: 0;\n}\n#header {\n  background-image: url('/static/assets/logo.svg');\n  background-position: center 33px;\n  background-repeat: no-repeat;\n  background-size: 210px 35px;\n  padding-top: 100px;\n  text-align: center;\n}\n#header a {\n  margin: 0 20px;\n  color: #2e9ce6;\n  text-decoration: none;\n  font-size: 14px;\n}\n#header a:hover {\n  text-decoration: underline;\n}\n#footer {\n  color: #a0aac3;\n  text-align: center;\n  margin-top: 185px;\n  margin-bottom: 38px;\n  font-size: 12px;\n}\n#footer a {\n  text-decoration: underline;\n  color: #a0aac3;\n}\n#footer a:hover {\n  text-decoration: none;\n}\n#bypass,\n#secured,\n#sword {\n  margin-top: 50px;\n  width: 960px;\n  position: relative;\n  left: 50%;\n  margin-left: -480px;\n}\n#bypass .header,\n#secured .header,\n#sword .header {\n  font-size: 32px;\n  color: #090a19;\n  text-align: center;\n}\n#bypass .header .info,\n#secured .header .info,\n#sword .header .info {\n  color: #4f555f;\n  font-size: 16px;\n  margin-top: 20px;\n}\n#bypass .header .info.spoof,\n#secured .header .info.spoof,\n#sword .header .info.spoof {\n  margin-top: 10px;\n  text-align: left;\n  padding: 0 40px;\n}\n#bypass .header .info.spoof ol,\n#secured .header .info.spoof ol,\n#sword .header .info.spoof ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n#bypass .header .info.spoof ol li a,\n#secured .header .info.spoof ol li a,\n#sword .header .info.spoof ol li a {\n  color: #2e9ce6;\n  text-decoration: none;\n}\n#bypass .header .info.spoof ol li a:hover,\n#secured .header .info.spoof ol li a:hover,\n#sword .header .info.spoof ol li a:hover {\n  text-decoration: underline;\n}\n#bypass .header .info.spoof div,\n#secured .header .info.spoof div,\n#sword .header .info.spoof div {\n  padding-bottom: 10px;\n}\n#bypass .header .info.spoof .bigger,\n#secured .header .info.spoof .bigger,\n#sword .header .info.spoof .bigger {\n  font-size: 18px;\n  font-weight: 500;\n  padding-top: 20px;\n}\n#bypass .header .info.spoof .smaller,\n#secured .header .info.spoof .smaller,\n#sword .header .info.spoof .smaller {\n  font-size: 12px;\n  padding-bottom: 0;\n  margin-top: 10px;\n}\n#bypass .header .sword_tooltip,\n#secured .header .sword_tooltip,\n#sword .header .sword_tooltip {\n  font-size: 12px;\n  text-align: center;\n  margin-top: 10px;\n  color: #4f555f;\n}\n#bypass .body,\n#secured .body,\n#sword .body {\n  margin-top: 30px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n#bypass .body .element,\n#secured .body .element,\n#sword .body .element {\n  width: 120px;\n  height: 120px;\n  margin: 0 20px;\n  position: relative;\n}\n#bypass .body .element .bg,\n#secured .body .element .bg,\n#sword .body .element .bg {\n  position: absolute;\n  width: 0;\n  height: 0;\n  background-color: #ffffff;\n  border-radius: 6px;\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);\n  /*transition: width .2s linear,\n                    height .2s linear,\n                    left .2s linear,\n                    top .2s linear;*/\n  left: 60px;\n  top: 60px;\n}\n#bypass .body .element .bg .close,\n#secured .body .element .bg .close,\n#sword .body .element .bg .close {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: #a0aac3;\n  font-size: 24px;\n  transform: rotate(0.125turn);\n  font-weight: 300;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  display: none;\n}\n#bypass .body .element:hover .bg,\n#secured .body .element:hover .bg,\n#sword .body .element:hover .bg {\n  width: 120px;\n  height: 120px;\n  left: 0;\n  top: 0;\n}\n#bypass .body .element:hover .close,\n#secured .body .element:hover .close,\n#sword .body .element:hover .close {\n  display: block;\n}\n#bypass .body .element .card,\n#secured .body .element .card,\n#sword .body .element .card {\n  width: 36px;\n  height: 36px;\n  background-size: 36px 36px;\n  background-color: #fff;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  left: 42px;\n  top: 37px;\n  color: #2fa6f8;\n  text-align: center;\n  position: absolute;\n  cursor: pointer;\n}\n#bypass .body .element .card.cursorDefault,\n#secured .body .element .card.cursorDefault,\n#sword .body .element .card.cursorDefault {\n  cursor: default;\n}\n#bypass .body .element .card.noFavicon,\n#secured .body .element .card.noFavicon,\n#sword .body .element .card.noFavicon {\n  width: 32px;\n  height: 32px;\n  font-size: 16px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  border: 2px solid #2fa6f8;\n}\n#bypass .body .element .card.add,\n#secured .body .element .card.add,\n#sword .body .element .card.add {\n  width: 32px;\n  height: 32px;\n  border: 2px solid #2fa6f8;\n  font-size: 36px;\n  text-align: center;\n  line-height: 32px;\n  font-weight: 300;\n}\n#bypass .body .element .card.add:hover,\n#secured .body .element .card.add:hover,\n#sword .body .element .card.add:hover {\n  border: 2px solid #2e9ce6;\n  color: #2e9ce6;\n}\n#bypass .body .element .text,\n#secured .body .element .text,\n#sword .body .element .text {\n  font-size: 12px;\n  color: #a0aac3;\n  position: absolute;\n  width: 80px;\n  left: 20px;\n  top: 78px;\n  text-align: center;\n  overflow: hidden;\n  cursor: default;\n}\n",
      ""
    ]),
      (e.exports = t);
  },
  221: function (e, t, n) {
    var r = n(2),
      o = n(222);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[e.i, o, ""]]);
    var a = { insert: "head", singleton: !1 };
    r(o, a);
    e.exports = o.locals || {};
  },
  222: function (e, t, n) {
    (t = n(3)(!1)).push([
      e.i,
      "#add .cover {\n  position: fixed;\n  background: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 7000;\n}\n#add .add {\n  width: 360px;\n  height: 280px;\n  border-radius: 6px;\n  background-color: #ffffff;\n  top: calc((100% - 280px) / 2);\n  left: calc((100% - 360px) / 2);\n  position: fixed;\n  z-index: 8000;\n}\n#add .add.error input {\n  border-bottom: 2px solid red;\n}\n#add .add.error .errorText {\n  display: block;\n}\n#add .add .close {\n  top: 16px;\n  right: 16px;\n  background-image: url('/static/assets/icons/close.svg');\n  background-size: 14px 14px;\n  position: absolute;\n  cursor: pointer;\n  width: 14px;\n  height: 14px;\n  opacity: 0.5;\n}\n#add .add .close:hover {\n  opacity: 1;\n}\n#add .add .title2 {\n  color: #090a19;\n  font-size: 24px;\n  margin-top: 50px;\n  margin-bottom: 40px;\n  text-align: center;\n}\n#add .add .title {\n  color: #a0aac3;\n  font-size: 12px;\n  margin-left: 40px;\n}\n#add .add input {\n  border: 0px;\n  border-bottom: 2px solid #2fa6f8;\n  width: 280px;\n  color: #090a19;\n  font-size: 16px;\n  padding-bottom: 9px;\n  margin-left: 40px;\n  margin-top: 5px;\n}\n#add .add .errorText {\n  position: absolute;\n  top: 93px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: red;\n  display: none;\n}\n#add .add .button {\n  position: absolute;\n  top: 180px;\n  right: 40px;\n  height: 40px;\n  border-radius: 6px;\n  line-height: 40px;\n  text-align: center;\n  background-color: #2fa6f8;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 16px;\n  padding: 0 10px;\n}\n#add .add .button:hover {\n  background: #2e9ce6;\n}\n",
      ""
    ]),
      (e.exports = t);
  },
  233: function (e, t, n) {
    "use strict";
    n.r(t);
    n(12), n(219);
    var r = n(10),
      o = n.n(r),
      a = n(11),
      i = n(9),
      l = n(1),
      s = (n(221), n(0));
    class u extends l.Component {
      constructor(e) {
        super(e), (this.state = { input: { def: locales.get("settings_add_eg"), val: locales.get("settings_add_eg") }, message: "" });
      }
      fieldChanged(e) {
        const t = this.state.input;
        (t.val = e.target.value.trim()), this.setState({ input: t });
      }
      fieldFocus() {
        const e = this.state.input;
        e.val === e.def && ((e.val = ""), this.setState({ input: e }));
      }
      fieldBlur() {
        const e = this.state.input;
        "" === e.val && ((e.val = e.def), this.setState({ input: e }));
      }
      keyDown(e) {
        if (null != e && e.keyCode)
          return 27 === e.keyCode ? this.props.changeScreen("main", "") : 13 === e.keyCode ? this.submitForm() : void 0;
      }
      submitForm() {
        const e = this.state.input.val
          .replace(/^(https?)?(:\/\/)?(www\.)?/, "")
          .replace(/\/.*$/, "")
          .replace(/\?.*$/, "")
          .match(/^([a-zA-Z0-9]+(([\-]?[a-zA-Z0-9]+)*\.)+)*[a-zA-Z]{2,}$/);
        if (!e || !e[0] || this.state.input.val === this.state.input.def) return void this.setState({ message: "Enter correct address." });
        const t = e[0].toLowerCase(),
          { type: n } = this.props;
        "sword" === n
          ? sdk.sword.addToList(t).then(() => this.props.changeScreen("main", ""))
          : sdk.proxy[n].isInList(t)
          ? this.setState({ message: "Alredy in list" })
          : (sdk.reporting.report(n, "add", t), sdk.proxy[n].add(t), this.props.changeScreen("main", ""));
      }
      render() {
        const e = "" === this.state.message ? "" : " error";
        return Object(s.jsxs)("div", {
          id: "add",
          children: [
            Object(s.jsx)("div", { className: "cover" }),
            Object(s.jsxs)("div", {
              className: "add" + e,
              children: [
                Object(s.jsx)("div", { className: "close", onClick: () => this.props.changeScreen("main", "") }),
                Object(s.jsx)("div", { className: "title2", children: locales.get("settings_add_title") }),
                Object(s.jsx)("div", { className: "title", children: locales.get("settings_add_description") }),
                Object(s.jsx)("input", {
                  type: "text",
                  value: this.state.input.val,
                  onChange: this.fieldChanged.bind(this),
                  onFocus: this.fieldFocus.bind(this),
                  onBlur: this.fieldBlur.bind(this),
                  onKeyDown: this.keyDown.bind(this),
                  autoFocus: !0
                }),
                Object(s.jsx)("div", { className: "errorText", children: this.state.message }),
                Object(s.jsx)("div", {
                  className: "button",
                  onClick: this.submitForm.bind(this),
                  children: locales.get("secured_websites_add")
                })
              ]
            })
          ]
        });
      }
    }
    var c = u;
    class d extends l.Component {
      constructor(e) {
        super(),
          (this.state = { sites: sdk.proxy.bypass.get() }),
          sdk.proxy.bypass.onChange.add((e) => {
            this.setState({ sites: e });
          });
      }
      add() {
        this.props.changeScreen("add", "bypass");
      }
      remove(e) {
        sdk.reporting.report("bypass", "remove", e), sdk.proxy.bypass.remove(e);
      }
      open(e) {
        sdk.reporting.report("bypass", "open", e), sdk.tabs.openPage("http://" + e);
      }
      render() {
        const e = [];
        for (const t in this.state.sites) {
          const n = this.state.sites[t];
          let r = n.replace(/\.[^.]+$/, "");
          (r = (r.charAt(0).toUpperCase() + r.slice(1)).substr(0, 12)),
            e.push(
              Object(s.jsxs)(
                "div",
                {
                  className: "element",
                  children: [
                    Object(s.jsx)("div", {
                      className: "bg",
                      children: Object(s.jsx)("div", { className: "close", onClick: this.remove.bind(this, n), children: "+" })
                    }),
                    sdk.tabs.getFavicon(n) &&
                      Object(s.jsx)("div", {
                        className: "card",
                        onClick: this.open.bind(this, n),
                        style: { backgroundImage: `url('${sdk.tabs.getFavicon(n)}')` }
                      }),
                    !sdk.tabs.getFavicon(n) &&
                      Object(s.jsx)("div", {
                        className: "card noFavicon",
                        onClick: this.open.bind(this, n),
                        children: r.substr(0, 2).toUpperCase()
                      }),
                    Object(s.jsx)("div", { className: "text", children: r })
                  ]
                },
                n
              )
            );
        }
        return (
          e.push(
            Object(s.jsxs)(
              "div",
              {
                className: "element add",
                children: [
                  Object(s.jsx)("div", { className: "card add", onClick: this.add.bind(this), children: "+" }),
                  Object(s.jsx)("div", { className: "text", children: locales.get("bypass_add") })
                ]
              },
              "add"
            )
          ),
          Object(s.jsxs)("div", {
            id: "bypass",
            children: [
              Object(s.jsxs)("div", {
                className: "header",
                children: [
                  locales.get("bypass_title"),
                  Object(s.jsx)("div", { className: "info", children: locales.get("main_bypass_tooltip") })
                ]
              }),
              Object(s.jsx)("div", { className: "body" + (1 === e.length ? " single" : ""), children: e })
            ]
          })
        );
      }
    }
    var f = d;
    class p extends l.Component {
      constructor(e) {
        super(e),
          (this.state = { sites: sdk.proxy.secured.get() }),
          sdk.proxy.secured.onChange.add((e) => {
            this.setState({ sites: e });
          });
      }
      add() {
        this.props.changeScreen("add", "secured");
      }
      remove(e) {
        sdk.reporting.report("secured", "remove", e), sdk.proxy.secured.remove(e);
      }
      open(e) {
        sdk.reporting.report("secured", "open", e), sdk.tabs.openPage("http://" + e);
      }
      render() {
        const e = [];
        for (const t in this.state.sites) {
          const n = t;
          let r = n.replace(/\.[^.]+$/, "");
          (r = (r.charAt(0).toUpperCase() + r.slice(1)).substr(0, 12)),
            e.push(
              Object(s.jsxs)(
                "div",
                {
                  className: "element",
                  children: [
                    Object(s.jsx)("div", {
                      className: "bg",
                      children: Object(s.jsx)("div", { className: "close", onClick: this.remove.bind(this, n), children: "+" })
                    }),
                    sdk.tabs.getFavicon(n) &&
                      Object(s.jsx)("div", {
                        className: "card",
                        onClick: this.open.bind(this, n),
                        style: { backgroundImage: `url('${sdk.tabs.getFavicon(n)}')` }
                      }),
                    !sdk.tabs.getFavicon(n) &&
                      Object(s.jsx)("div", {
                        className: "card noFavicon",
                        onClick: this.open.bind(this, n),
                        children: r.substr(0, 2).toUpperCase()
                      }),
                    Object(s.jsx)("div", { className: "text", children: r })
                  ]
                },
                n
              )
            );
        }
        return (
          e.push(
            Object(s.jsxs)(
              "div",
              {
                className: "element add",
                children: [
                  Object(s.jsx)("div", { className: "card add", onClick: this.add.bind(this), children: "+" }),
                  Object(s.jsx)("div", { className: "text", children: locales.get("secured_websites_add") })
                ]
              },
              "add"
            )
          ),
          Object(s.jsxs)("div", {
            id: "secured",
            children: [
              Object(s.jsxs)("div", {
                className: "header",
                children: [
                  locales.get("secured_websites_title"),
                  Object(s.jsx)("div", { className: "info", children: locales.get("main_secured_tooltip") })
                ]
              }),
              Object(s.jsx)("div", { className: "body" + (1 === e.length ? " single" : ""), children: e })
            ]
          })
        );
      }
    }
    var h = p;
    class m extends l.Component {
      constructor(e) {
        super(e), (this.state = { sites: sdk.sword.getList() });
      }
      add() {
        this.props.changeScreen("add", "sword");
      }
      remove(e) {
        sdk.sword.removeFromList(e).then((e) => {
          this.setState({ sites: e });
        });
      }
      render() {
        const e = [];
        for (const t in this.state.sites) {
          const n = this.state.sites[t];
          let r = n.replace(/\.[^.]+$/, "");
          (r = (r.charAt(0).toUpperCase() + r.slice(1)).substr(0, 12)),
            e.push(
              Object(s.jsxs)(
                "div",
                {
                  className: "element",
                  children: [
                    Object(s.jsx)("div", {
                      className: "bg",
                      children: Object(s.jsx)("div", { className: "close", onClick: this.remove.bind(this, t), children: "+" })
                    }),
                    sdk.tabs.getFavicon(n) &&
                      Object(s.jsx)("div", {
                        className: "card cursorDefault",
                        style: { backgroundImage: `url('${sdk.tabs.getFavicon(n)}')` }
                      }),
                    !sdk.tabs.getFavicon(n) &&
                      Object(s.jsx)("div", { className: "card cursorDefault noFavicon", children: r.substr(0, 2).toUpperCase() }),
                    Object(s.jsx)("div", { className: "text", children: r })
                  ]
                },
                n
              )
            );
        }
        return (
          e.push(
            Object(s.jsxs)(
              "div",
              {
                className: "element add",
                children: [
                  Object(s.jsx)("div", { className: "card add", onClick: this.add.bind(this), children: "+" }),
                  Object(s.jsx)("div", { className: "text", children: locales.get("sword_add") })
                ]
              },
              "add"
            )
          ),
          Object(s.jsxs)("div", {
            id: "sword",
            children: [
              Object(s.jsxs)("div", {
                className: "header",
                children: [
                  "Sword",
                  Object(s.jsxs)("div", {
                    className: "info spoof",
                    children: [
                      Object(s.jsx)("div", { children: "Keep your real web activity private by feeding web trackers fake web activity" }),
                      Object(s.jsxs)("ol", {
                        type: 1,
                        children: [
                          Object(s.jsx)("li", { children: "Stop web trackers from logging your real web activity" }),
                          Object(s.jsx)("li", { children: "Keep your personal information away from hackers and identity thieves" }),
                          Object(s.jsx)("li", { children: "Create a safer, more private browsing experience" })
                        ]
                      }),
                      Object(s.jsx)("div", { className: "bigger", children: "Why do I need Sword?" }),
                      Object(s.jsx)("div", {
                        children:
                          "Most websites use third party trackers to serve you ads and learn what you do online. Web trackers can log and share your information to build a more detailed profile of who you are, including your real location, name, home address, phone number, and more, which can be stolen by hackers or identity thieves and sold on the dark web for profit."
                      }),
                      Object(s.jsx)("div", {
                        children:
                          "Sword feeds web trackers false information about where you go and what you do online, allowing you to stay more private while you browse."
                      }),
                      Object(s.jsx)("div", { className: "bigger", children: "How does Sword work?" }),
                      Object(s.jsx)("div", { children: "It’s as easy as the flick of a switch!" }),
                      Object(s.jsxs)("ol", {
                        type: 1,
                        children: [
                          Object(s.jsx)("li", {
                            children: "Just click the slider, but remember: it’s only activated when Hotspot Shield is connected."
                          }),
                          Object(s.jsx)("li", { children: "Add your own trick sites at will!" })
                        ]
                      }),
                      Object(s.jsx)("div", { className: "bigger", children: "How can I see it in action?" }),
                      Object(s.jsxs)("ol", {
                        type: 1,
                        children: [
                          Object(s.jsxs)("li", {
                            children: [
                              "If you are logged into Google, you can go to Google’s",
                              " ",
                              Object(s.jsx)("a", {
                                href: "https://myactivity.google.com/myactivity",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "My Activity"
                              }),
                              " ",
                              "page to see your web activity."
                            ]
                          }),
                          Object(s.jsx)("li", {
                            children: "We suggest deleting your old Google Activity (“Delete activity by…”) to get a fresh activity feed."
                          }),
                          Object(s.jsx)("li", {
                            children:
                              "Turn on Sword, connect using Hotspot Shield, start browsing, and see what was spoofed in the activity feed."
                          })
                        ]
                      }),
                      Object(s.jsx)("div", {
                        className: "smaller",
                        children:
                          "(Note: any server-side activity, such as a Google or YouTube search, will show up in the feed, but other websites will be spoofed, and other trackers will be fed fake web activity.)"
                      }),
                      Object(s.jsx)("div", { className: "bigger", children: "How does Sword work with Tracker Shield?" }),
                      Object(s.jsx)("div", {
                        children:
                          "Web trackers are always trying to find ways to get past blockers, and you can never have too many layers of defense. Sword acts an additional layer of defense that feeds trackers fake web activity."
                      })
                    ]
                  })
                ]
              }),
              Object(s.jsx)("div", { className: "body" + (1 === e.length ? " single" : ""), children: e })
            ]
          })
        );
      }
    }
    var _ = m,
      g = n(17);
    class b extends l.Component {
      constructor() {
        super(), (this.state = { screen: "main" });
      }
      changeScreen(e, t) {
        this.setState({ screen: e, source: t });
      }
      render() {
        let e = "";
        return (
          "add" === this.state.screen
            ? ((document.body.style.overflow = "hidden"),
              (e = Object(s.jsx)(c, { changeScreen: this.changeScreen.bind(this), type: this.state.source })))
            : (document.body.style.overflow = "auto"),
          Object(s.jsxs)("div", {
            className: this.state.screen,
            children: [
              Object(s.jsxs)("div", {
                id: "header",
                children: [
                  Object(s.jsx)("a", { href: "#sword", children: "Tracker Spoof" }),
                  Object(s.jsx)("a", { href: "#secured", children: "Auto protection" }),
                  Object(s.jsx)("a", { href: "#bypass", children: "Bypass websites" })
                ]
              }),
              Object(s.jsx)(_, { changeScreen: this.changeScreen.bind(this) }),
              Object(s.jsx)(h, { changeScreen: this.changeScreen.bind(this) }),
              Object(s.jsx)(f, { changeScreen: this.changeScreen.bind(this) }),
              e,
              Object(s.jsx)(g.a, {})
            ]
          })
        );
      }
    }
    var y = b;
    const v = () => {
      var e, t, n;
      if (
        ((window.sdk = null === (e = browser.extension.getBackgroundPage()) || void 0 === e ? void 0 : e.sdk),
        null === (t = sdk) || void 0 === t || null === (n = t.loading) || void 0 === n || !n.loaded)
      )
        return setTimeout(() => {
          v();
        }, 500);
      (window.locales = new a.a()),
        (window.storage = {}),
        new i.a(),
        (window.controller = o.a.render(Object(s.jsx)(y, {}), document.getElementById("page"))),
        sdk.reporting.report("page", "settings");
    };
    v();
  },
  3: function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((i = r),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l)),
                    "/*# ".concat(s, " */")),
                  a = r.sources.map(function (e) {
                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                  });
                return [n].concat(a).concat([o]).join("\n");
              }
              var i, l, s;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var o = {};
          if (r)
            for (var a = 0; a < this.length; a++) {
              var i = this[a][0];
              null != i && (o[i] = !0);
            }
          for (var l = 0; l < e.length; l++) {
            var s = [].concat(e[l]);
            (r && o[s[0]]) || (n && (s[2] ? (s[2] = "".concat(n, " and ").concat(s[2])) : (s[2] = n)), t.push(s));
          }
        }),
        t
      );
    };
  },
  5: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return l;
      });
    var r = n(1);
    const o = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,
      a = /(?:\r\n|\r|\n)/g;
    function i(e, t = []) {
      const n = e.replace(a, "").split(o);
      if (1 === n.length) return e;
      const l = [],
        s = n.shift();
      s && l.push(s);
      for (const [e, o, a] of (function e(t) {
        if (!t.length) return [];
        const [n, r, o, a] = t.slice(0, 4);
        return [[parseInt(n || o, 10), r || "", a]].concat(e(t.slice(4, t.length)));
      })(n)) {
        const n = t[e];
        l.push(Object(r.cloneElement)(n, { key: e }, o ? i(o, t) : n.props.children)), a && l.push(a);
      }
      return l;
    }
    const l = (e, ...t) => {
        var n, r;
        const o =
          browser.i18n.getMessage(e) ||
          (null === (n = locales) || void 0 === n || null === (r = n.get) || void 0 === r ? void 0 : r.call(n, e));
        return o ? i(o, t) : o;
      },
      s = (e, t) => l(e);
  },
  6: function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable;
    function i(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, l, s = i(e), u = 1; u < arguments.length; u++) {
            for (var c in (n = Object(arguments[u]))) o.call(n, c) && (s[c] = n[c]);
            if (r) {
              l = r(n);
              for (var d = 0; d < l.length; d++) a.call(n, l[d]) && (s[l[d]] = n[l[d]]);
            }
          }
          return s;
        };
  },
  9: function (e, t, n) {
    "use strict";
    t.a = class {
      constructor() {
        (window.log = () => {}),
          (window.debug = () => {}),
          (window.error = () => {}),
          sdk.config.debug && ((window.log = console.log), (window.debug = console.debug), (window.error = console.error));
      }
    };
  }
});
