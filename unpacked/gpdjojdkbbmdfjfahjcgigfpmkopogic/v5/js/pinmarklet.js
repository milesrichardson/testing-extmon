(() => {
  (function () {
    "use strict";
    const j = [
        /08fb2eb6424d/,
        /1529ad2b2cc8/,
        /1847807c0ea1/,
        /1d1d5ffa1d50/,
        /20c46b653b00/,
        /25f7c9982cea/,
        /293aa4f9b3d0/,
        /32aa39d04eb4/,
        /415215dcadbf/,
        /540b2374abf1/,
        /6f145d4255cf/,
        /71c1f4783e6d/,
        /79f57d83d54a/,
        /820a6e7baa0f/,
        /85ae87da6618/,
        /871de03c9980/,
        /8c2d5961f7af/,
        /8de5d416e5d2/,
        /95fa195f8b6a/,
        /9e2089d8b8f2/,
        /a32353817e45/,
        /cefdc93047b7/,
        /dbafdf055617/,
        /eefa602a72ed/,
        /efa3a2deb839/
      ],
      N = {
        display: "block",
        position: "fixed",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        margin: "0",
        clip: "0",
        zIndex: "2147483647"
      },
      x = {
        en: {
          noPinDomain: "Sorry, pinning is not allowed from this domain. Please contact the site operator if you have any questions.",
          noPinMeta: "Sorry, pinning is not allowed from this page. Please contact the site operator if you have any questions.",
          noPinnablesFound: "Sorry, couldn't find any pinnable things on this page."
        },
        cs: {
          noPinDomain:
            "Je n\xE1m l\xEDto. Z t\xE9to dom\xE9ny nen\xED mo\u017En\xE9 p\u0159id\xE1vat piny. S dotazy se obracejte na provozovatele webu.",
          noPinMeta:
            "Je n\xE1m l\xEDto. Z t\xE9to str\xE1nky nen\xED mo\u017En\xE9 p\u0159id\xE1vat piny. S dotazy se obracejte na provozovatele webu.",
          noPinnablesFound:
            "Je n\xE1m l\xEDto. Na t\xE9to str\xE1nce jsme nenalezli \u017E\xE1dn\xFD obsah, kter\xFD by bylo mo\u017En\xE9 p\u0159ipnout."
        },
        da: {
          noPinDomain: "Det er ikke muligt at tilf\xF8je pins fra dom\xE6net. Kontakt websitets ejer, hvis du har sp\xF8rgsm\xE5l.",
          noPinMeta: "Det er ikke tilladt at s\xE6tte pins op fra denne side. Kontakt websitets ejer, hvis du har sp\xF8rgsm\xE5l.",
          noPinnablesFound: "Der er ikke rigtigt noget at s\xE6tte op p\xE5 denne side."
        },
        de: {
          noPinDomain:
            "Es tut uns leid, aber von dieser Domain kann nichts gepinnt werden. Bitte kontaktiere den Website-Betreiber, falls du weitere Fragen hast.",
          noPinMeta:
            "Es tut uns leid, aber von dieser Seite kann nichts gepinnt werden. Bitte kontaktiere den Website-Betreiber, falls du weitere Fragen hast.",
          noPinnablesFound: "Es tut uns leid, aber wir konnten auf dieser Seite nichts finden, was du pinnen k\xF6nntest."
        },
        es: {
          noPinDomain:
            "Lo sentimos, no est\xE1 permitido pinear desde este dominio. Ponte en contacto con el operador del sitio si tienes alguna pregunta.",
          noPinMeta:
            "Lo sentimos, no est\xE1 permitido pinear desde esta p\xE1gina. Ponte en contacto con el operador del sitio si tienes alguna pregunta.",
          noPinnablesFound: "Lo sentimos, no hemos encontrado ning\xFAn elemento que se pueda pinear en esta p\xE1gina."
        },
        "es-mx": {
          noPinDomain:
            "Lamentablemente, no est\xE1 permitido pinear desde este dominio. Si quieres hacer consultas, comun\xEDcate con el operador del sitio.",
          noPinMeta:
            "Lamentablemente, no est\xE1 permitido pinear desde esta p\xE1gina. Si quieres hacer consultas, comun\xEDcate con el operador del sitio.",
          noPinnablesFound: "Lamentablemente, no se encontraron cosas para pinear en esta p\xE1gina."
        },
        el: {
          noPinDomain:
            "\u039B\u03C5\u03C0\u03AC\u03BC\u03B1\u03B9, \u03B4\u03B5\u03BD \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9 \u03C4\u03BF \u03BA\u03B1\u03C1\u03C6\u03AF\u03C4\u03C3\u03C9\u03BC\u03B1 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03C4\u03BF\u03BC\u03AD\u03B1. \u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE \u03C4\u03B7\u03C2 \u03B9\u03C3\u03C4\u03BF\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 \u03B1\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03B1\u03C0\u03BF\u03C1\u03AF\u03B5\u03C2.",
          noPinMeta:
            "\u039B\u03C5\u03C0\u03AC\u03BC\u03B1\u03B9, \u03B4\u03B5\u03BD \u03B5\u03C0\u03B9\u03C4\u03C1\u03AD\u03C0\u03B5\u03C4\u03B1\u03B9 \u03C4\u03BF \u03BA\u03B1\u03C1\u03C6\u03AF\u03C4\u03C3\u03C9\u03BC\u03B1 \u03B1\u03C0\u03CC \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1. \u0395\u03C0\u03B9\u03BA\u03BF\u03B9\u03BD\u03C9\u03BD\u03AE\u03C3\u03C4\u03B5 \u03BC\u03B5 \u03C4\u03BF \u03B4\u03B9\u03B1\u03C7\u03B5\u03B9\u03C1\u03B9\u03C3\u03C4\u03AE \u03C4\u03B7\u03C2 \u03B9\u03C3\u03C4\u03BF\u03C3\u03B5\u03BB\u03AF\u03B4\u03B1\u03C2 \u03B1\u03BD \u03AD\u03C7\u03B5\u03C4\u03B5 \u03B1\u03C0\u03BF\u03C1\u03AF\u03B5\u03C2.",
          noPinnablesFound:
            "\u039B\u03C5\u03C0\u03AC\u03BC\u03B1\u03B9, \u03B4\u03B5\u03BD \u03AE\u03C4\u03B1\u03BD \u03B4\u03C5\u03BD\u03B1\u03C4\u03AE \u03B7 \u03B5\u03CD\u03C1\u03B5\u03C3\u03B7 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03C9\u03BD \u03C0\u03BF\u03C5 \u03BC\u03C0\u03BF\u03C1\u03BF\u03CD\u03BD \u03BD\u03B1 \u03BA\u03B1\u03C1\u03C6\u03B9\u03C4\u03C3\u03C9\u03B8\u03BF\u03CD\u03BD \u03C3\u03B5 \u03B1\u03C5\u03C4\u03AE\u03BD \u03C4\u03B7 \u03C3\u03B5\u03BB\u03AF\u03B4\u03B1."
        },
        fi: {
          noPinDomain:
            "Et voi tehd\xE4 Pin-lis\xE4yksi\xE4 t\xE4st\xE4 verkkotunnuksesta. Jos sinulla on kysytt\xE4v\xE4\xE4, ota yhteytt\xE4 sivuston yll\xE4pit\xE4j\xE4\xE4n.",
          noPinMeta:
            "Et voi tehd\xE4 Pin-lis\xE4yksi\xE4 t\xE4lt\xE4 sivulta. Jos sinulla on kysytt\xE4v\xE4\xE4, ota yhteytt\xE4 sivuston yll\xE4pit\xE4j\xE4\xE4n.",
          noPinnablesFound: "Sivulta ei valitettavasti l\xF6ydy sis\xE4lt\xF6\xE4, jota voi lis\xE4t\xE4."
        },
        fr: {
          noPinDomain:
            "D\xE9sol\xE9, mais vous ne pouvez pas \xE9pingler les contenus de ce domaine. Pour toute question, veuillez contacter l'administrateur du site.",
          noPinMeta:
            "D\xE9sol\xE9, mais vous ne pouvez pas \xE9pingler les contenus de cette page. Pour toute question, veuillez contacter l'administrateur du site.",
          noPinnablesFound: "D\xE9sol\xE9, mais aucun contenu susceptible d'\xEAtre \xE9pingl\xE9 n'a \xE9t\xE9 trouv\xE9 sur cette page."
        },
        id: {
          noPinDomain: "Maaf, Anda tidak diizinkan mengepin dari domain ini. Hubungi operator situs jika Anda memiliki pertanyaan.",
          noPinMeta: "Maaf, Anda tidak diizinkan mengepin dari halaman ini. Silakan hubungi operator situs jika Anda memiliki pertanyaan.",
          noPinnablesFound: "Maaf, tidak ada yang bisa dipin dari halaman ini."
        },
        it: {
          noPinDomain:
            "Ci dispiace, ma l'aggiunta di Pin non \xE8 consentita da questo dominio. Se hai domande, contatta il gestore del sito.",
          noPinMeta:
            "Ci dispiace, ma l'aggiunta di Pin non \xE8 consentita da questa pagina. Se hai domande, contatta il gestore del sito.",
          noPinnablesFound: "Spiacenti, impossibile trovare immagini o video che \xE8 possibile aggiungere ai Pin in questa pagina."
        },
        hi: {
          noPinDomain:
            "\u0915\u094D\u0937\u092E\u093E \u0915\u0930\u0947\u0902, \u0907\u0938 \u0921\u094B\u092E\u0947\u0928 \u0938\u0947 \u092A\u093F\u0928 \u0932\u0917\u093E\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0905\u0917\u0930 \u0906\u092A\u0915\u093E \u0915\u094B\u0908 \u092A\u094D\u0930\u0936\u094D\u0928 \u0939\u0948\u0902, \u0924\u094B \u0915\u0943\u092A\u092F\u093E \u0938\u093E\u0907\u091F \u0911\u092A\u0930\u0947\u091F\u0930 \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964",
          noPinMeta:
            "\u0915\u094D\u0937\u092E\u093E \u0915\u0930\u0947\u0902, \u0907\u0938 \u092A\u0947\u091C \u0938\u0947 \u092A\u093F\u0928 \u0932\u0917\u093E\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0905\u0917\u0930 \u0906\u092A\u0915\u093E \u0915\u094B\u0908 \u092A\u094D\u0930\u0936\u094D\u0928 \u0939\u0948\u0902, \u0924\u094B \u0915\u0943\u092A\u092F\u093E \u0938\u093E\u0907\u091F \u0911\u092A\u0930\u0947\u091F\u0930 \u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964",
          noPinnablesFound:
            "\u0915\u094D\u0937\u092E\u093E \u0915\u0930\u0947\u0902, \u0907\u0938 \u092A\u0947\u091C \u092A\u0930 \u0915\u094B\u0908 \u092D\u0940 \u092A\u093F\u0928 \u0932\u0917\u093E\u0928\u0947 \u0935\u093E\u0932\u0940 \u091A\u0940\u095B \u0928\u0939\u0940\u0902 \u092E\u093F\u0932 \u0938\u0915\u0940\u0964"
        },
        hu: {
          noPinDomain:
            "Sajn\xE1ljuk, ebb\u0151l a tartom\xE1nyb\xF3l nem lehet pinelni. K\xE9rj\xFCk, k\xE9rd\xE9seiddel fordulj az oldal \xFCzemeltet\u0151j\xE9hez.",
          noPinMeta:
            "Sajn\xE1ljuk, err\u0151l az oldalr\xF3l nem lehet pinelni. K\xE9rj\xFCk, k\xE9rd\xE9seiddel fordulj az oldal \xFCzemeltet\u0151j\xE9hez.",
          noPinnablesFound: "Sajn\xE1ljuk, ezen az oldalon nem tal\xE1lhat\xF3 semmilyen pinelhet\u0151 dolog."
        },
        ja: {
          noPinDomain:
            "\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u3002HTML \u4EE5\u5916\u306E\u30DA\u30FC\u30B8\u3067\u30D4\u30F3\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3088\u3046\u3068\u8A66\u307F\u3066\u3044\u308B\u5834\u5408\u306F\u3001pinterest.com \u306B\u30A2\u30AF\u30BB\u30B9\u3057\u3066\u304F\u3060\u3055\u3044\u3002",
          noPinMeta:
            "\u3053\u306E\u30DA\u30FC\u30B8\u304B\u3089\u306E\u30D4\u30F3\u306F\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u3054\u8CEA\u554F\u304C\u3042\u308B\u5834\u5408\u306F\u3001\u30B5\u30A4\u30C8\u904B\u55B6\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002",
          noPinnablesFound:
            "\u7533\u3057\u8A33\u3054\u3056\u3044\u307E\u305B\u3093\u3001\u3053\u306E\u30DA\u30FC\u30B8\u3067\u30D4\u30F3\u3067\u304D\u308B\u30A2\u30A4\u30C6\u30E0\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002"
        },
        ko: {
          noPinDomain:
            "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uB3C4\uBA54\uC778\uC5D0\uC11C\uB294 \uD540\uD558\uAE30\uAC00 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC9C8\uBB38\uC774 \uC788\uC73C\uC2DC\uBA74 \uC0AC\uC774\uD2B8 \uC6B4\uC601\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
          noPinMeta:
            "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C\uB294 \uD540\uD558\uAE30\uAC00 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC9C8\uBB38\uC774 \uC788\uC73C\uC2DC\uBA74 \uC0AC\uC774\uD2B8 \uC6B4\uC601\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",
          noPinnablesFound:
            "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC774 \uD398\uC774\uC9C0\uC5D0\uC11C \uD540\uD560 \uC218 \uC788\uB294 \uAC83\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."
        },
        ms: {
          noPinDomain: "Maaf, mengepin tidak dibenarkan dari domain ini. Sila hubungi pengendali laman jika anda ada sebarang solan.",
          noPinMeta: "Maaf, mengepin tidak dibenarkan dari halaman ini. Sila hubungi pengendali laman jika anda ada sebarang soalan.",
          noPinnablesFound: "Maaf, tidak dapat mencari sebarang imej yang boleh dipin pada halaman ini."
        },
        nb: {
          noPinDomain: "Beklager, pinning er ikke tillatt fra dette domenet. Ta kontakt med webmasteren hvis du har sp\xF8rsm\xE5l.",
          noPinMeta: "Beklager, pinning er ikke tillatt fra denne siden. Ta kontakt med webmasteren hvis du har sp\xF8rsm\xE5l.",
          noPinnablesFound: "Beklager, kunne ikke finne noen ting som kunne pinnes p\xE5 denne siden."
        },
        nl: {
          noPinDomain:
            "Sorry, het is niet toegestaan om vanaf dit domein te pinnen. Neem contact op met de beheerder van deze website als je vragen hebt.",
          noPinMeta:
            "Sorry, het is niet toegestaan om vanaf dit domein te pinnen. Neem contact op met de beheerder van deze website als je vragen hebt.",
          noPinnablesFound: "Sorry, er is niets wat je kunt pinnen op deze pagina."
        },
        pl: {
          noPinDomain:
            "Niestety przypinanie z tej domeny jest niedozwolone. Skontaktuj si\u0119 z operatorem witryny, je\u015Bli masz pytania.",
          noPinMeta:
            "Niestety przypinanie z tej strony jest niedozwolone. Skontaktuj si\u0119 z operatorem witryny, je\u015Bli masz pytania.",
          noPinnablesFound: "Niestety na tej stronie nie ma \u017Cadnych rzeczy do przypinania."
        },
        pt: {
          noPinDomain:
            "Lamentamos, mas n\xE3o \xE9 permitido afixar pins a partir deste dom\xEDnio. Em caso de d\xFAvidas, contacta o operador do site.",
          noPinMeta:
            "Lamentamos, mas n\xE3o \xE9 permitido afixar pins a partir desta p\xE1gina. Em caso de d\xFAvidas, contacta o operador do site.",
          noPinnablesFound: "Lamentamos, mas n\xE3o foi poss\xEDvel encontrar nesta p\xE1gina nenhum conte\xFAdo que possa ser afixado."
        },
        "pt-br": {
          noPinDomain:
            "N\xE3o \xE9 poss\xEDvel pinar a partir deste dom\xEDnio. Entre em contato com o operador do site se tiver d\xFAvidas.",
          noPinMeta: "N\xE3o \xE9 poss\xEDvel pinar a partir desta p\xE1gina. Entre em contato com o operador do site se tiver d\xFAvidas.",
          noPinnablesFound: "N\xE3o foi poss\xEDvel encontrar nesta p\xE1gina conte\xFAdo que possa ser pinado."
        },
        ro: {
          noPinDomain:
            "Ne pare r\u0103u, nu se pot ad\u0103uga Pinuri de pe acest site. Te rug\u0103m s\u0103-l contactezi pe operatorul site-ului dac\u0103 ai \xEEntreb\u0103ri.",
          noPinMeta:
            "Ne pare r\u0103u, nu se pot ad\u0103uga Pinuri de pe aceast\u0103 pagin\u0103. Te rug\u0103m s\u0103-l contactezi pe operatorul site-ului dac\u0103 ai \xEEntreb\u0103ri.",
          noPinnablesFound:
            "Ne pare r\u0103u, nu am putut g\u0103si con\u021Binut pentru ad\u0103ugat ca Pinuri pe aceast\u0103 pagin\u0103."
        },
        ru: {
          noPinDomain:
            "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u0440\u0438\u043A\u0430\u043B\u044B\u0432\u0430\u043D\u0438\u0435 \u041F\u0438\u043D\u043E\u0432 \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0434\u043E\u043C\u0435\u043D\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u0421\u043E \u0432\u0441\u0435\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430.",
          noPinMeta:
            "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043F\u0440\u0438\u043A\u0430\u043B\u044B\u0432\u0430\u043D\u0438\u0435 \u041F\u0438\u043D\u043E\u0432 \u0441 \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E. \u0421\u043E \u0432\u0441\u0435\u043C\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u043E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430.",
          noPinnablesFound:
            "\u041D\u0430 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u043D\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0431\u044B \u043F\u0440\u0438\u043A\u043E\u043B\u043E\u0442\u044C."
        },
        sk: {
          noPinDomain:
            "Prep\xE1\u010Dte, z tejto dom\xE9ny si nem\xF4\u017Eete prip\xEDna\u0165 piny. Kontaktujte prev\xE1dzkovate\u013Ea str\xE1nky, ak m\xE1te nejak\xE9 ot\xE1zky.",
          noPinMeta:
            "Prep\xE1\u010Dte, z tejto str\xE1nky si nem\xF4\u017Eete prip\xEDna\u0165 piny. Kontaktujte prev\xE1dzkovate\u013Ea str\xE1nky, ak m\xE1te nejak\xE9 ot\xE1zky.",
          noPinnablesFound: "Prep\xE1\u010Dte, na tejto str\xE1nke sme nena\u0161li ni\u010D na pripnutie."
        },
        sv: {
          noPinDomain:
            "Tyv\xE4rr g\xE5r det inte att pinna fr\xE5n den h\xE4r dom\xE4nen. Kontakta webbplatsoperat\xF6ren om du har fr\xE5gor.",
          noPinMeta: "Det g\xE5r inte att pinna fr\xE5n den h\xE4r sidan. Kontakta webbplatsoperat\xF6ren om du har fr\xE5gor.",
          noPinnablesFound: "Det gick inte att hitta n\xE5got p\xE5 den h\xE4r sidan som g\xE5r att pinna."
        },
        th: {
          noPinDomain:
            "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E42\u0E14\u0E40\u0E21\u0E19\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E1B\u0E31\u0E01\u0E1E\u0E34\u0E19 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E2A\u0E07\u0E2A\u0E31\u0E22",
          noPinMeta:
            "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E40\u0E1E\u0E08\u0E19\u0E35\u0E49\u0E44\u0E21\u0E48\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E43\u0E2B\u0E49\u0E1B\u0E31\u0E01\u0E1E\u0E34\u0E19 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E2B\u0E32\u0E01\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E2A\u0E07\u0E2A\u0E31\u0E22",
          noPinnablesFound:
            "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E2D\u0E30\u0E44\u0E23\u0E17\u0E35\u0E48\u0E1B\u0E31\u0E01\u0E1E\u0E34\u0E19\u0E44\u0E14\u0E49\u0E43\u0E19\u0E40\u0E1E\u0E08\u0E19\u0E35\u0E49"
        },
        tl: {
          noPinDomain: "Sorry, hindi allowed ang pinning sa domain na 'to. Paki-contact ang site operator kung may tanong ka.",
          noPinMeta: "Sorry, hindi allowed ang pinning mula sa page na 'to. Paki-contact ang site operator kung may tanong ka.",
          noPinnablesFound: "Sorry, walang makitang puwedeng i-pin sa page na 'to."
        },
        tr: {
          noPinDomain:
            "\xDCzg\xFCn\xFCz, bu alan ad\u0131ndan pinlemeye izin verilmiyor. Sorular\u0131n\u0131z varsa, l\xFCtfen site operat\xF6r\xFCne ba\u015Fvurun.",
          noPinMeta:
            "\xDCzg\xFCn\xFCz, bu sayfadan pinlemeye izin verilmiyor. Sorular\u0131n\u0131z varsa, l\xFCtfen site operat\xF6r\xFCne ba\u015Fvurun.",
          noPinnablesFound: "\xDCzg\xFCn\xFCz, bu sayfada pinlenebilecek bir \u015Fey bulunamad\u0131."
        },
        uk: {
          noPinDomain:
            "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043F\u0440\u0438\u043A\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0456\u043D\u0438 \u0437 \u0446\u044C\u043E\u0433\u043E \u0434\u043E\u043C\u0435\u043D\u0443 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430. \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443.",
          noPinMeta:
            "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043F\u0440\u0438\u043A\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0456\u043D\u0438 \u0437 \u0446\u0456\u0454\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430. \u042F\u043A\u0449\u043E \u0443 \u0432\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0437\u0432'\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443.",
          noPinnablesFound:
            "\u041D\u0430 \u0436\u0430\u043B\u044C, \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0433\u043B\u0438 \u0437\u043D\u0430\u0439\u0442\u0438 \u043D\u0430 \u0446\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C, \u044F\u043A\u0456 \u043C\u043E\u0436\u043D\u0430 \u0431\u0443\u043B\u043E \u0431 \u043F\u0440\u0438\u043A\u043E\u043B\u043E\u0442\u0438."
        },
        vi: {
          noPinDomain:
            "R\u1EA5t ti\u1EBFc, kh\xF4ng cho ph\xE9p ghim t\u1EEB mi\u1EC1n n\xE0y. Vui l\xF2ng li\xEAn h\u1EC7 ng\u01B0\u1EDDi \u0111i\u1EC1u h\xE0nh trang web n\u1EBFu b\u1EA1n c\xF3 th\u1EAFc m\u1EAFc.",
          noPinMeta:
            "R\u1EA5t ti\u1EBFc, kh\xF4ng cho ph\xE9p ghim t\u1EEB trang n\xE0y. Vui l\xF2ng li\xEAn h\u1EC7 ng\u01B0\u1EDDi \u0111i\u1EC1u h\xE0nh trang web n\u1EBFu b\u1EA1n c\xF3 th\u1EAFc m\u1EAFc.",
          noPinnablesFound:
            "R\u1EA5t ti\u1EBFc, kh\xF4ng th\u1EC3 t\xECm th\u1EA5y th\u1EE9 g\xEC ghim \u0111\u01B0\u1EE3c tr\xEAn trang n\xE0y."
        },
        zh: {
          noPinDomain:
            "\u62B1\u6B49\uFF0C\u4E0D\u5141\u8BB8\u4ECE\u6B64\u57DF\u6536\u85CF Pin \u56FE\u3002\u5982\u6709\u7591\u8651\u8BF7\u8054\u7CFB\u7F51\u7AD9\u8FD0\u8425\u5546\u3002",
          noPinMeta:
            "\u62B1\u6B49\uFF0C\u4E0D\u5141\u8BB8\u4ECE\u6B64\u57DF\u6536\u85CF Pin \u56FE\u3002\u5982\u6709\u7591\u8651\u8BF7\u8054\u7CFB\u7F51\u7AD9\u8FD0\u8425\u5546\u3002",
          noPinnablesFound: "\u62B1\u6B49\uFF0C\u672A\u5728\u6B64\u9875\u9762\u4E2D\u627E\u5230\u53EF\u6536\u85CF\u7684 Pin \u56FE\u3002"
        },
        "zh-tw": {
          noPinDomain:
            "\u62B1\u6B49\uFF01\u4E0D\u5141\u8A31\u5F9E\u6B64\u7DB2\u57DF\u6536\u85CF\u91D8\u5716\u3002\u82E5\u6709\u7591\u554F\uFF0C\u8ACB\u806F\u7D61\u7DB2\u7AD9\u71DF\u904B\u5546\u3002",
          noPinMeta:
            "\u62B1\u6B49\uFF01\u4E0D\u5141\u8A31\u5F9E\u6B64\u7DB2\u9801\u6536\u85CF\u91D8\u5716\u3002\u82E5\u6709\u7591\u554F\uFF0C\u8ACB\u806F\u7D61\u7DB2\u7AD9\u71DF\u904B\u5546\u3002",
          noPinnablesFound:
            "\u62B1\u6B49\uFF01\u5728\u6B64\u7DB2\u9801\u4E0A\u627E\u4E0D\u5230\u4EFB\u4F55\u53EF\u6536\u85CF\u91D8\u5716\u7684\u5167\u5BB9\u3002"
        }
      },
      T = [
        /^https?:\/\/(.*?\.|)craigslist\.org\//,
        /^https?:\/\/(.*?\.|)chase\.com\//,
        /^https?:\/\/(.*?\.|)facebook\.com\//,
        /^https?:\/\/mail\.aol\.com\//,
        /^https?:\/\/(.*?\.|)atmail\.com\//,
        /^https?:\/\/(.*?\.|)contactoffice\.com\//,
        /^https?:\/\/(.*?\.|)fastmail\.fm\//,
        /^https?:\/\/(.*?\.|)webmail\.gandi\.net\//,
        /^https?:\/\/outlook\.live\.com\//,
        /^https?:\/\/(.*?\.|)mail\.live\.com\//,
        /^https?:\/\/post\.pinterest\.com\//,
        /^https?:\/\/mail\.ukr\.net\//,
        /^https?:\/\/plus\.google\.com\//,
        /^https?:\/\/outlook\.office\.com\//,
        /^https?:\/\/accounts\.google\.com\//,
        /^https?:\/\/myaccount\.google\.com\//,
        /^https?:\/\/mail\.google\.com\//,
        /^https?:\/\/inbox\.google\.com\//,
        /^https?:\/\/docs\.google\.com\//,
        /^https?:\/\/gmx\.com\//,
        /^https?:\/\/(.*?\.|)hushmail\.com\//,
        /^https?:\/\/(.*?\.|)laposte\.fr\//,
        /^https?:\/\/mail\.lycos\.com\//,
        /^https?:\/\/(.*?\.|)mail\.com\//,
        /^https?:\/\/(.*?\.|)mail\.ru\//,
        /^https?:\/\/(.*?\.|)opolis\.eu\//,
        /^https?:\/\/(.*?\.|)outlook\.com\//,
        /^https?:\/\/(.*?\.|)nokiamail\.com\//,
        /^https?:\/\/apps\.rackspace\.com\//,
        /^https?:\/\/mail\.rediff\.com\//,
        /^https?:\/\/(.*?\.|)runbox\.com\//,
        /^https?:\/\/mail\.sify\.com\//,
        /^https?:\/\/webmail\.thexyz\.com\//,
        /^https?:\/\/login\.yahoo\.com\//,
        /^https?:\/\/mail\.yahoo\.com\//,
        /^https?:\/\/mail\.yandex\.com\//
      ],
      F = {
        att: { amazonAsin: "data-fling-asin" },
        iframe: {
          youtube: /^(https?:|)\/\/www\.youtube\.com\/embed\//,
          instagram: /^https?:\/\/www\.instagram\.com\/p\//,
          vimeo: /^(https?:|)\/\/player\.vimeo\.com\/video\//
        },
        img: { twitter: /^https?:\/\/pbs\.twimg\.com\/media\//, youtube: /^(https?:|)\/\/i.ytimg.com\/vi\// },
        link: { youtubeWatch: /^(https?:|)\/\/(www|m)\.youtube\.com\/watch?/ },
        page: {
          instagramPage: /^https?:\/\/www\.instagram\.com\//,
          instagramPhoto: /^https?:\/\/www\.instagram\.com\/p\//,
          twitter: /^https?:\/\/twitter\.com\//,
          amazonPage: /^https?:\/\/www\.amazon\.com\//,
          amazonProduct: /^https?:\/\/www\.amazon\.com((\/|.*)\/dp\/)/,
          youtubeWatch: /^https?:\/\/(www|m)\.youtube\.com\/watch?/,
          youtubeMobile: /^https?:\/\/m\.youtube\.com\//,
          googleImageSearch: /^https?:\/\/www\.google\.com\/search(.*tbm=isch.*)/
        },
        pinterest: {
          pin: /^https?:\/\/(([a-z]{1,3}|latest)\.|)pinterest\.(at|(c(a|h|l|o(\.(kr|uk)|m(|\.(au|mx)))))|d(e|k)|es|fr|i(e|t)|jp|nz|p(h|t)|se|ru)\/pin\//
        }
      },
      L = ["debug", "pinMethod", "render", "via", "guid", "pinbox", "quiet", "quality", "noCancel", "noHeader", "force"],
      p = {
        ver: "2021112901",
        grid: "https://assets.pinterest.com/ext/grid.html?" + new Date().getTime(),
        me: /\/\/assets\.pinterest\.com\/js\/pinmarklet\.js/,
        logType: "pinmarklet",
        log: "https://log.pinterest.com/",
        maxWait: 5e3,
        thumbSize: 237,
        quality: 30,
        hazPinningNow: "data-pinterest-pinmarklet-rendered",
        validParams: L,
        hashList: j,
        nopeList: T,
        iframeStyle: N,
        msg: x,
        pattern: F,
        forbiddenQueryKey: [/password/gi],
        k: "PIN_" + new Date().getTime()
      },
      e = {
        override: {},
        config: { debug: !1, pinMethod: "bookmarklet", domain: "www", lang: "en" },
        data: { img: {}, link: {}, meta: {}, script: [] },
        count: { imgLoading: 0 },
        time: { start: new Date().getTime() },
        client: "web"
      },
      y = {};
    function l(t) {
      e.config.debug && window.console && (window.console.log ? console.log(t) : window.console.table && window.console.table(t));
    }
    function S(t) {
      const i = {
        rstr2binb: (n) => {
          let a,
            r = Array(n.length >> 2);
          for (a = 0; a < r.length; a++) r[a] = 0;
          for (a = 0; a < n.length * 8; a += 8) r[a >> 5] |= (n.charCodeAt(a / 8) & 255) << (24 - (a % 32));
          return r;
        },
        binb2rstr: (n) => {
          let a,
            r = "";
          for (a = 0; a < n.length * 32; a += 8) r += String.fromCharCode((n[a >> 5] >>> (24 - (a % 32))) & 255);
          return r;
        },
        safe_add: (n, a) => {
          let r, s;
          return (r = (n & 65535) + (a & 65535)), (s = (n >> 16) + (a >> 16) + (r >> 16)), (s << 16) | (r & 65535);
        },
        bit_rol: (n, a) => (n << a) | (n >>> (32 - a)),
        binb_sha1: (n, a) => {
          let r, s, o, d, m, g, c, u, f, h, k, P, A, _;
          for (
            n[a >> 5] |= 128 << (24 - (a % 32)),
              n[(((a + 64) >> 9) << 4) + 15] = a,
              g = Array(80),
              r = 1732584193,
              s = -271733879,
              o = -1732584194,
              d = 271733878,
              m = -1009589776,
              c = 0;
            c < n.length;
            c += 16
          ) {
            for (h = r, k = s, P = o, A = d, _ = m, u = 0; u < 80; u++)
              u < 16 ? (g[u] = n[c + u]) : (g[u] = i.bit_rol(g[u - 3] ^ g[u - 8] ^ g[u - 14] ^ g[u - 16], 1)),
                (f = i.safe_add(i.safe_add(i.bit_rol(r, 5), i.sha1_ft(u, s, o, d)), i.safe_add(i.safe_add(m, g[u]), i.sha1_kt(u)))),
                (m = d),
                (d = o),
                (o = i.bit_rol(s, 30)),
                (s = r),
                (r = f);
            (r = i.safe_add(r, h)), (s = i.safe_add(s, k)), (o = i.safe_add(o, P)), (d = i.safe_add(d, A)), (m = i.safe_add(m, _));
          }
          return Array(r, s, o, d, m);
        },
        sha1_ft: (n, a, r, s) => (n < 20 ? (a & r) | (~a & s) : n < 40 ? a ^ r ^ s : n < 60 ? (a & r) | (a & s) | (r & s) : a ^ r ^ s),
        sha1_kt: (n) => (n < 20 ? 1518500249 : n < 40 ? 1859775393 : n < 60 ? -1894007588 : -899497514),
        rstr_sha1: (n) => i.binb2rstr(i.binb_sha1(i.rstr2binb(n), n.length * 8)),
        rstr2hex: (n) => {
          let a, r, s, o;
          for (a = "0123456789abcdef", r = "", o = 0; o < n.length; o++)
            (s = n.charCodeAt(o)), (r = r + a.charAt((s >>> 4) & 15) + a.charAt(s & 15));
          return r;
        }
      };
      return (
        e.sha || (l("setting up hash repo"), (e.sha = {})), e.sha[t.str] || (e.sha[t.str] = i.rstr2hex(i.rstr_sha1(t.str))), e.sha[t.str]
      );
    }
    function w(t) {
      let i, n;
      (n = "?type=" + p.logType + "&v=" + p.ver),
        t.reason === "grid_rendered" && e.config.guid && (t.guid = e.config.guid),
        (t.client = e.client),
        (t.url = e.here);
      for (i in t) i !== "extras" && (n = n + "&pm" + i.charAt(0).toUpperCase() + i.slice(1) + "=" + encodeURIComponent(t[i]));
      if (t.extras) for (i in t.extras) t.extras[i] && t.extras[i].hasOwnProperty && (n = n + "&" + i + "=" + t.extras[i]);
      (new Image().src = p.log + n), l("Logging: " + n);
    }
    function D(t) {
      let i, n, a, r, s, o;
      for (s = !1, n = 0; n < p.nopeList.length; n = n + 1) if (t.url.match(p.nopeList[n])) return w({ reason: "nope_list" }), !0;
      if (((r = t.url.split("/")), r[2] && ((r = r[2].split(".")), r.length > 1))) {
        for (o = r.pop(), n = r.length - 1; n > -1; n = n - 1)
          for (o = r[n] + "." + o, i = S({ str: o }), a = p.hashList.length - 1; a > -1; a = a - 1) if (i.match(p.hashList[a])) return o;
      }
      return s;
    }
    function M() {
      e.data.close &&
        (typeof e.extendedClose == "function"
          ? e.extendedClose()
          : e.config.quiet ||
            window.setTimeout(() => {
              window.alert(e.data.close);
            }, 10));
    }
    function z(t) {
      let i = null;
      return t.el && t.att && (typeof t.el[t.att] != "undefined" ? (i = t.el[t.att]) : (i = t.el.getAttribute(t.att))), i;
    }
    function v(t) {
      let i;
      t = t || {};
      function n(a) {
        return (
          a
            ? (typeof a == "object" && a.length && (a = a[0]),
              (a = a.trim()),
              a.match(/\s/) ||
                ((a = a.split("#")[0].split("?")[0]), (a.match(/^http?s:\/\//) || a.match(/\.(gif|jpeg|jpeg|png|webp)/)) && (a = "")))
            : (a = ""),
          a
        );
      }
      return (
        (i = n("" + window.getSelection())),
        i ||
          (t.src
            ? ((i = n(z({ el: t, att: "data-pin-description" }))), i || (i = n(t.title)), i || (i = n(document.title)))
            : (i || (i = n(e.data.meta.description || e.data.meta.title)),
              i || (i = n(e.ogDescription)),
              i ||
                ((i = n(document.title)), !i && t.imageless && (i = e.here.split("/").pop().split("#")[0].split("?")[0].split(".")[0])))),
        i
      );
    }
    function E(t) {
      return t.width < 90 || t.height < 90
        ? "Image dimensions are both too small."
        : t.width < 120 && t.height < 120
        ? "One image dimension is too small."
        : t.width > t.height * 3
        ? "Image is too wide."
        : t.src.match(/^https?:\/\//)
        ? !1
        : "Image source does not begin with http.";
    }
    function C(t) {
      return { status: "loaded", height: t.naturalHeight || 0, width: t.naturalWidth || 0, src: t.src };
    }
    function b(t) {
      if (t.mod && t.mod.url && t.mod.url.match(p.pattern.pinterest.pin)) {
        let i = t.mod.url.split("/pin/");
        if (i[1]) {
          let n = i[1].split("/")[0];
          n - 0 && ((t.mod.pinId = n), (t.mod.suppressPinIdBonus = !0));
        }
        delete t.mod.url;
      }
      if (t.src && !D({ url: t.src })) {
        const i = S({ str: t.src });
        if (!e.data.img[i]) {
          if (t.src.split("#")[0].split("?")[0].split(".").pop() === "svg") {
            e.data.img[i] = { src: t.src, status: "invalid", reason: "SVG images are not supported on Pinterest" };
            return;
          }
          const a = new Image();
          (e.count.imgLoading = e.count.imgLoading + 1),
            (e.data.img[i] = { mod: t.mod || {}, status: "loading" }),
            (a.onerror = (r) => {
              let s;
              e.count.imgLoading = e.count.imgLoading - 1;
              for (s in e.data.img) e.data.img[s].mod && e.data.img[s].mod.pinMedia === t.src && delete e.data.img[s].mod.pinMedia;
              e.data.img[i].status = "error";
            }),
            (a.onload = () => {
              let r,
                s,
                o = C(a),
                d = E(o);
              if (t.override) for (r = 0; r < t.override.length; r = r + 1) e.override[t.override[r]] = !0;
              if (d)
                (e.data.img[i] = { status: "filtered", reason: d, src: t.src.substr(0, 64) }),
                  t.src.length > 64 && (e.data.img[i].src = e.data.img[i].src + "...");
              else {
                o.height > p.thumbSize && o.width > p.thumbSize && (e.override.imageless = !0), t.mod && (e.data.img[i].mod = t.mod);
                for (r in o) o[r] && (e.data.img[i][r] = o[r]);
                t.src === e.here && ((r.description = ""), (e.override.imageless = !0)),
                  t.update
                    ? (l("Image source changed from " + t.update + " to " + t.src),
                      (s = S({ str: t.update })),
                      (e.data.img[s] = e.data.img[i]),
                      t.mod && (e.data.img[s].mod = t.mod),
                      (e.data.img[s].src = t.src),
                      (e.data.img[s].height = o.height),
                      (e.data.img[s].width = o.width),
                      (e.data.img[i] = e.data.img[s]),
                      (e.data.img[i].status = "ok"),
                      delete e.data.img[s])
                    : (e.data.img[i].status = "ok");
              }
              e.count.imgLoading = e.count.imgLoading - 1;
            }),
            (a.src = t.src);
        }
      }
    }
    function B() {
      let t, i, n, a;
      for (t = document.getElementsByTagName("IFRAME"), i = 0; i < t.length; i = i + 1)
        if (
          !(t[i].getAttribute("nopin") || t[i].getAttribute("data-pin-nopin")) &&
          ((n = t[i].getAttribute("src")), n && n.match(/^(https?:|)\/\//))
        ) {
          if (((n = n.split("#")[0].split("?")[0]), n.match(p.pattern.iframe.youtube))) {
            (a = n.split("/")),
              a[4] &&
                (l("found a YouTube player: " + t[i].src),
                b({
                  src: "https://img.youtube.com/vi/" + a[4] + "/hqdefault.jpg",
                  mod: { multimedia: !0, url: "https://www.youtube.com/watch?v=" + a[4], description: v() }
                }));
            continue;
          }
          if (n.match(p.pattern.iframe.instagram)) {
            (a = n.split("/")),
              a[4] &&
                (l("found an Instagram embed: " + t[i].src),
                b({
                  src: "https://instagram.com/p/" + a[4] + "/media/?size=l",
                  mod: { url: "https://www.instagram.com/p/" + a[4] + "/", description: v() }
                }));
            continue;
          }
        }
      l(e.data.iframe);
    }
    function O() {
      let t,
        i,
        n,
        a = 0,
        r;
      const s = (o) => {
        let d, m, g;
        if (o.currentSrc) {
          if (
            ((n = { description: v(o), sourceOrder: a }), (a = a + 1), (d = o.getAttribute("nopin") || o.getAttribute("data-pin-nopin")), d)
          )
            return;
          if (
            ((m = o.parentNode),
            m.tagName === "A" &&
              m.href &&
              e.here.split("/")[2] === m.href.split("/")[2] &&
              (m.href.match(/(^javascript|\.gif|\.jpg|\.jpeg|\.png|\.webp)/) || (n.url = m.href)),
            (d = o.getAttribute("data-pin-me-only")),
            d && (n.pinMeOnly = !0),
            (d = o.getAttribute("data-pin-id")),
            d && (n.pinId = d),
            (d = o.getAttribute("data-pin-description")),
            d && (n.pinDescription = d),
            (d = o.getAttribute("data-pin-url")),
            d && (n.pinUrl = d),
            (d = o.getAttribute("data-pin-media")),
            d
              ? ((n.pinMedia = d), d === o.currentSrc ? b({ src: o.currentSrc, mod: n }) : b({ src: d, mod: n, update: o.currentSrc }))
              : b({ src: o.currentSrc, mod: n }),
            e.here.match(p.pattern.page.twitter) && o.currentSrc.match(p.pattern.img.twitter))
          )
            for (m = o.parentNode; m.tagName; )
              (g = m.getAttribute("data-permalink-path")),
                g &&
                  ((n.url = "https://twitter.com" + g),
                  (n.description = m.parentNode.getElementsByTagName("P")[0].textContent),
                  (m = document.body)),
                (m = m.parentNode);
          o.currentSrc.match(p.pattern.img.youtube) &&
            ((m = o.currentSrc.split("/vi/")),
            m.length &&
              ((g = m[1].split("/")[0]),
              g &&
                b({
                  mod: { multimedia: !0, url: "https://www.youtube.com/watch?v=" + g },
                  src: "https://i.ytimg.com/vi/" + g + "/hqdefault.jpg",
                  update: o.currentSrc
                })));
        }
      };
      if (((r = document.querySelectorAll("[data-pin-me-only]")), r.length === 1)) s(r[0]);
      else
        for (
          e.override.og
            ? l("og overridden")
            : e.data.meta.og &&
              ((n = {}),
              l("og found"),
              e.data.meta.og.image &&
                (typeof e.data.meta.og.image == "string"
                  ? (l("og:image found"), (n.ogMedia = e.data.meta.og.image))
                  : (e.data.meta.og.image[0]
                      ? (l("og:image array found; using the first element"), (q = e.data.meta.og.image[0]))
                      : (q = e.data.meta.og.image),
                    typeof q == "string"
                      ? (l("og:image found in object"), (n.ogMedia = q))
                      : q.secure_url && typeof q.secure_url == "string"
                      ? (l("og:secure_url found"), (n.ogMedia = q.secure_url))
                      : q["~"] && typeof q["~"] == "string" && (l("og:~ found"), (n.ogMedia = q["~"]))),
                e.data.meta.og.url &&
                  (typeof e.data.meta.og.url == "string"
                    ? (n.ogUrl = e.data.meta.og.url)
                    : (l("More than one og:url found"), (n.ogUrl = e.data.meta.og.url[0])),
                  l("og:url found")),
                e.data.meta.og.site_name &&
                  (typeof e.data.meta.og.site_name == "string"
                    ? (e.ogSiteName = e.data.meta.og.site_name)
                    : (l("More than one og:site_name found"), (e.ogSiteName = e.data.meta.og.site_name[0]))),
                (e.data.meta.og.description || e.data.meta.og.title) &&
                  (l("og:title or og:description found"),
                  (n.ogDescription = e.data.meta.og.description || e.data.meta.og.title),
                  typeof n.ogDescription == "string"
                    ? (e.ogDescription = n.ogDescription)
                    : (l("More than one og:description found"), (e.ogDescription = n.ogDescription[0]))),
                l("loading og:image"),
                b({ src: n.ogMedia, mod: n }))),
            i = document.getElementsByTagName("IMG"),
            t = 0;
          t < i.length;
          t = t + 1
        )
          s(i[t]);
    }
    function R() {
      let t, i;
      for (t = document.getElementsByTagName("LINK"), i = 0; i < t.length; i = i + 1)
        if (t[i].rel && t[i].rel.toLowerCase() === "canonical" && t[i].href) {
          (e.data.link.canonical = t[i].href), (e.data.url = t[i].href);
          break;
        }
    }
    function J() {
      let t = {},
        i = [],
        n = {},
        a = document.getElementsByTagName("META"),
        r,
        s,
        o,
        d,
        m,
        g,
        c;
      for (o = 0; o < a.length; o = o + 1)
        if (((s = a[o].getAttribute("content")), s && ((r = a[o].getAttribute("property") || a[o].getAttribute("name")), r))) {
          if (r.toLowerCase() === "pinterest" && s.toLowerCase() === "nopin") return a[o].getAttribute("description") || !0;
          a[o].getAttribute("data-pin-nopin") || i.push({ k: r, v: s });
        }
      for (
        i.sort((f, h) => {
          let k = 0;
          return f.k > h.k ? (k = 1) : f.k < h.k && (k = -1), k;
        }),
          o = 0;
        o < i.length;
        o = o + 1
      ) {
        for (m = i[o].k.split(":"), c = n, d = 0; d < m.length; d = d + 1) typeof c[m[d]] == "undefined" && (c[m[d]] = {}), (c = c[m[d]]);
        (g = typeof c["~"]), g === "undefined" ? (c["~"] = i[o].v) : (g === "string" && (c["~"] = [c["~"]]), c["~"].push(i[o].v));
      }
      function u(f, h, k) {
        for (let P in f)
          typeof f[P] == "object"
            ? typeof f[P][0] == "string"
              ? (h[k] = f[P])
              : u(f[P], f, P)
            : Object.keys(f).length === 1 && (h[k] = f[P]);
        return f;
      }
      if (
        ((e.data.meta = u(n, null, null)),
        (t = {}),
        l("meta data found"),
        l(e.data.meta),
        e.data.meta.pin &&
          (l("data-pin found"),
          e.data.meta.pin.url && (l("data-pin-url found"), (t.pinUrl = e.data.meta.pin.url), (e.override.link = !0)),
          e.data.meta.pin.description && (l("data-pin-description found"), (t.pinDescription = e.data.meta.pin.description)),
          e.data.meta.pin.title && (l("data-pin-title found"), (t.pinTitle = e.data.meta.pin.title)),
          e.data.meta.pin.id && (l("data-pin-id found"), (t.pinId = e.data.meta.pin.id), (e.override.imageless = !0)),
          e.data.meta.pin.media &&
            (l("data-pin-media found"),
            (t.pinMedia = e.data.meta.pin.media),
            l("loading data-pin-media"),
            b({ src: e.data.meta.pin.media, mod: t }))),
        e.data.meta.instapp &&
          e.data.meta.instapp.owner_user_id &&
          e.data.meta.al &&
          e.data.meta.al.ios &&
          e.data.meta.al.ios.url &&
          e.data.meta.al.ios.url.match("=") &&
          ((e.insta = { owner: e.data.meta.instapp.owner_user_id, id: e.data.meta.al.ios.url.split("=")[1] }),
          e.data.meta.instapp.hashtags && (e.insta.hashtags = e.data.meta.instapp.hashtags.toString())),
        e.data.meta.og)
      )
        for (
          typeof e.data.meta.og.image == "object" && (e.data.meta.og.image = e.data.meta.og.image.secure_url || void 0),
            m = ["description", "title", "url", "image"],
            o = 0;
          o < m.length;
          o = o + 1
        )
          e.data.meta.og[m[o]] && typeof e.data.meta.og[m[o]] != "string" && (e.data.meta.og[m[o]] = e.data.meta.og[m[o]][0]);
    }
    function G() {
      let t = document.getElementsByTagName("SCRIPT"),
        i,
        n;
      for (i = 0, n = t.length; i < n; i = i + 1)
        if (t[i].type && t[i].type === "application/ld+json" && t[i].innerText)
          try {
            e.data.script.push(JSON.parse(t[i].innerText));
          } catch (a) {
            l("Could not parse linked data."), l(t[i].innerText);
          }
    }
    function K() {
      let t, i, n, a, r, s, o, d, m;
      if (((i = !1), !i && e.here.match(p.pattern.page.amazonPage))) {
        for (t = document.getElementsByTagName("IMG"), a = 0; a < t.length; a = a + 1)
          if (((r = t[a].getAttribute(p.pattern.att.amazonAsin)), r && e.here.match(r))) {
            b({
              src: t[a].currentSrc,
              override: ["imageless"],
              mod: { url: "https://www.amazon.com/dp/" + r + "/", description: v(t[a]) }
            }),
              (i = !0);
            break;
          }
      }
      if (
        (!i &&
          e.here.match(p.pattern.page.amazonProduct) &&
          ((t = document.getElementById("imgTagWrapperId")),
          t &&
            ((n = t.getElementsByTagName("IMG")[0]),
            n && (b({ src: n.src, override: ["imageless"], mod: { url: e.data.link.canonical, description: v(n) } }), (i = !0)))),
        !i && e.here.match(p.pattern.page.instagramPage))
      ) {
        l("On an Instagram property");
        let g = document.title;
        if (
          (e.data.meta.og &&
            e.data.meta.og.title &&
            ((g = e.data.meta.og.title.split("Instagram: \u201C")),
            g[1] ? (g = g[1].substring(0, g[1].length - 1).trim()) : (g = document.title)),
          e.here.match(p.pattern.page.instagramPhoto))
        ) {
          l("On an Instagram photo URL");
          let c = (f) => {
              if (((a = f.getElementsByTagName("IMG")), a.length))
                for (t = 0; t < a.length; t = t + 1)
                  b({ src: a[t].currentSrc, override: ["imageless"], mod: { url: e.here.split("?")[0], description: g } }), (i = !0);
            },
            u = document.getElementsByTagName("ARTICLE");
          if (
            (u.length === 2 && (l("in main carousel"), c(u[1]), l(i ? "Found image in carousel." : "Found carousel but no image.")), !i)
          ) {
            let f = document.querySelectorAll("[role=button]");
            f.length && (c(f[1]), l(i ? "Found image in button." : "Found button but no image."));
          }
        } else
          for (l("On a non-photo Instagram page"), t = document.getElementsByTagName("IMG"), r = 0; r < t.length; r = r + 1)
            t[r].currentSrc &&
              ((a = t[r].parentNode.parentNode.parentNode),
              a.tagName === "A" &&
                a.href &&
                a.href.match(/^https?:\/\//) &&
                b({ src: t[r].currentSrc, override: ["imageless"], mod: { url: a.href.split("?")[0], description: g } }));
      }
      if (
        (!i &&
          e.here.match(p.pattern.page.youtubeWatch) &&
          ((n = e.here.split("v=")[1].split("&")[0].split("#")[0]),
          n &&
            (l("found a YouTube page: " + e.here),
            b({
              src: "https://img.youtube.com/vi/" + n + "/hqdefault.jpg",
              override: ["imageless"],
              mod: { description: document.title, multimedia: !0, url: "https://www.youtube.com/watch?v=" + n }
            }),
            (i = !0))),
        !i && e.here.match(p.pattern.page.youtubeMobile))
      )
        for (t = document.getElementsByTagName("A"), r = 0; r < t.length; r = r + 1)
          t[r].href &&
            t[r].href.match(p.pattern.link.youtubeWatch) &&
            ((n = t[r].href.split("v=")[1].split("&")[0].split("#")[0]),
            n &&
              (l("found a YouTube video: " + t[r].href),
              b({
                src: "https://img.youtube.com/vi/" + n + "/hqdefault.jpg",
                override: ["imageless"],
                mod: { description: document.title, multimedia: !0, url: "https://www.youtube.com/watch?v=" + n }
              }),
              (i = !0)));
      if (!i && e.here.match(p.pattern.page.googleImageSearch)) {
        const g = function (c) {
          s = { src: c.dataset.src || c.src, mod: { description: c.alt } };
          const u = ((c.parentNode || {}).parentNode || {}).nextSibling;
          u && u.title && u.title === c.alt && u.href && u.href.match(/^http?s:\/\//) && (s.mod.url = u.href),
            b(s),
            (e.override.img = !0),
            (e.override.imageless = !0),
            (i = !0);
        };
        if (((m = document.querySelectorAll("[data-pin-me-only]")), m.length === 1)) g(m[0]);
        else for (d = document.getElementsByTagName("IMG"), o = 0; o < d.length; o = o + 1) d[o].alt && g(d[o]);
      }
      return i;
    }
    function U() {
      (window.JavaScriptInterface || {}).onPinsLoaded &&
        ((e.config.render = "openAndroidAppShare"),
        (window.openAndroidAppShare = () => {
          window.JavaScriptInterface.onPinsLoaded(JSON.stringify(e.data));
        }),
        (e.extendedClose = () => {
          window.JavaScriptInterface.onPinsLoaded(JSON.stringify({ pinmarkletClosedReason: e.data.close }));
        }),
        l("Android app found"),
        (e.client = "android"),
        (e.extended = !0),
        typeof window.JavaScriptInterface.isLoadPinmarkletOnDocumentReady == "function" &&
          window.JavaScriptInterface.isLoadPinmarkletOnDocumentReady() &&
          (e.holdForReadyStateComplete = !0));
    }
    function W() {
      let t, i, n, a;
      if (
        (typeof chrome != "undefined" ? (t = chrome) : typeof browser != "undefined" && (t = browser),
        t && t.runtime && t.runtime.getManifest && t.runtime.sendMessage)
      ) {
        for (i = t.runtime.getManifest().version, a = i.split("."), n = 0; n < a.length; n = n + 1) a[n] = a[n] - 0;
        a[0] > 1 &&
          ((e.config.render = "openGrid"),
          (window.openGrid = () => {
            (e.data.config = e.config),
              (e.data.config.k = p.k),
              t.runtime.sendMessage({ to: "background", act: "populateGrid", data: e.data });
          }),
          (e.extendedClose = () => {
            t.runtime.sendMessage({ to: "background", act: "closeGrid" });
          }),
          l("advanced browser extension found"),
          (e.extended = !0),
          (e.client = "extension"));
      }
    }
    function H() {
      (((window.webkit || {}).messageHandlers || {}).pinmarkletCompletionHandler || {}).postMessage &&
        ((e.config.render = "openIOSAppShare"),
        (window.openIOSAppShare = () => {
          window.webkit.messageHandlers.pinmarkletCompletionHandler.postMessage(e.data);
        }),
        (e.config.quiet = !0),
        (e.extendedClose = () => {
          window.webkit.messageHandlers.pinmarkletCompletionHandler.postMessage({ pinmarkletClosedReason: e.data.close });
        }),
        l("IOS app found"),
        (e.client = "ios"),
        (e.extended = !0));
    }
    function Y(t) {
      let i = "";
      function n(a) {
        if (!i) for (const r in a) typeof a[r] == "object" ? n(a[r]) : r.match(/^gtin/i) && (i = a[r].replace(/^0+/, ""));
      }
      e.data.script.length &&
        (e.data.script.forEach((a) => {
          n(a);
        }),
        i && ((e.data.gtin = i), w({ reason: "gtin_found", gtin: i })));
    }
    function Q() {
      const t = e.here.split("/")[2];
      function i(n, a, r) {
        let s, o, d, m, g, c, u, f;
        switch (
          ((n = n / 60), (s = Math.floor(n)), (o = n - s), (d = r * (1 - a)), (m = r * (1 - a * o)), (g = r * (1 - a * (1 - o))), s)
        ) {
          case 0:
            (c = r), (u = g), (f = d);
            break;
          case 1:
            (c = m), (u = r), (f = d);
            break;
          case 2:
            (c = d), (u = r), (f = g);
            break;
          case 3:
            (c = d), (u = m), (f = r);
            break;
          case 4:
            (c = g), (u = d), (f = r);
            break;
          case 5:
            (c = r), (u = d), (f = m);
            break;
        }
        function h(k) {
          return ("00" + Math.round(k * 255).toString(16)).substr(-2, 2);
        }
        return "#" + h(c) + h(u) + h(f);
      }
      return {
        description: v({ imageless: !0 }),
        height: p.thumbSize,
        width: p.thumbSize,
        score: p.thumbSize * p.thumbSize,
        url: e.here,
        siteName: e.ogSiteName || t,
        color: i(parseInt(S({ str: t }).substr(0, 3), 16) % 360, 0.25, 0.75)
      };
    }
    function V() {
      let t, i, n, a;
      (e.defaultBodyOverflow = ""),
        e.defaultBodyOverflow === "visible" && (e.defaultBodyOverflow = ""),
        (document.body.style.overflow = "hidden"),
        l("popping the unauthed grid"),
        (e.data.config = e.config),
        (e.data.hazExtension = z(document.body)),
        (t = JSON.stringify(e.data)),
        (y.grid = document.createElement("IFRAME")),
        (y.grid.id = p.k + "_grid"),
        (y.grid.src = p.grid),
        (y.grid.frameBorder = "0");
      for (i in p.iframeStyle) p.iframeStyle[i].hasOwnProperty && (y.grid.style[i] = p.iframeStyle[i]);
      function r() {
        (document.body.style.overflow = e.defaultBodyOverflow),
          document.body.removeAttribute(p.hazPinningNow),
          y.grid && y.grid.parentNode && y.grid.parentNode === document.body && document.body.removeChild(y.grid);
      }
      (n = new Date().getTime()),
        (y.grid.onload = () => {
          (a = new Date().getTime() - n),
            l("Grid render time: " + a),
            w({ reason: "grid_rendered", time: a }),
            (e.receiver = y.grid.contentWindow),
            e.receiver.postMessage(t, y.grid.src),
            window.addEventListener("message", (s) => {
              window.clearTimeout(e.renderFailed), s.data === "x" && r();
            }),
            y.grid.focus();
        }),
        document.body.setAttribute(p.hazPinningNow, !0),
        document.body.appendChild(y.grid),
        (e.renderFailed = window.setTimeout(() => {
          w({ reason: "iframe_timeout" }), r(), (e.data.close = e.config.msg.noPinnablesFound), M();
        }, p.maxWait));
    }
    function Z() {
      l(e.data),
        w({ reason: "scan_complete", count: e.data.thumb.length, time: new Date().getTime() - e.time.start }),
        e.data.close
          ? M()
          : e.config.share
          ? (l("sending results to IOS share extension"), document.body.setAttribute(e.config.share, JSON.stringify(e.data)))
          : typeof window[e.config.render] == "function"
          ? (l("sending results to " + e.config.render), window[e.config.render](e.data))
          : (l("sending results to our default iframe grid overlay"), V());
    }
    function I() {
      let t,
        i,
        n,
        a,
        r,
        s,
        o,
        d = [],
        m,
        g;
      for (n in e.data.img)
        e.data.img[n].hasOwnProperty &&
          ((o = e.data.img[n]),
          o.status === "ok" &&
            ((o.url = e.data.url),
            o.mod || (o.mod = {}),
            (s = 1),
            (a = o.height),
            (r = o.width),
            r > a ? (r = a) : a > r * 3 && (a = r * 3),
            o.mod.description && (o.description = o.mod.description),
            o.mod.ogDescription && (o.description = o.mod.ogDescription),
            o.mod.pinDescription && (o.description = o.mod.pinDescription),
            o.description && o.description.length > 500 && (o.description = o.description.substring(0, 500)),
            o.mod.url && (o.url = o.mod.url),
            o.mod.pinUrl && (o.url = o.mod.pinUrl),
            (o.media = o.src),
            o.mod.multimedia && (s = s * 3),
            (o.mod.pinUrl || o.mod.pinMedia) && (s = s * 4),
            o.mod.pinMeOnly && (s = s * 1e6),
            o.mod.pinId &&
              (o.mod.suppressPinIdBonus || (s = s * 10), (o.dataPinId = o.mod.pinId), (o.id = o.mod.pinId), (e.override.imageless = !0)),
            o.width < p.thumbSize && (s = s / 2),
            o.mod.multimedia && ((e.override.imageless = !0), (s = s * 2)),
            (o.score = a * r * s - (o.mod.sourceOrder || 0)),
            d.push(o)));
      e.override.imageless || ((m = Q()), (e.data.imageless = m), d.push(m), d.length === 1 && w({ reason: "imageless_only" })),
        d.sort((u, f) => {
          let h = 0;
          return u.score < f.score ? (h = 1) : u.score > f.score && (h = -1), h;
        }),
        (d = d.filter((u) => u.score > d[0].score / p.quality)),
        (e.data.thumb = d);
      function c(u, f) {
        e.data.rich || (e.data.rich = {}),
          e.data.rich[u]
            ? l("Ignoring duplicate rich data: " + u + " " + f)
            : (l("Adding rich data: " + u + " " + f), (e.data.rich[u] = f));
      }
      if (
        (e.data.meta &&
          (e.data.meta.pin &&
            (e.data.meta.pin.title && c("title", e.data.meta.pin.title),
            e.data.meta.pin.description && c("description", e.data.meta.pin.description),
            e.data.meta.pin.url && c("url", e.data.meta.pin.url)),
          e.data.meta.og &&
            (e.data.meta.og.title && c("title", e.data.meta.og.title),
            e.data.meta.og.description && c("description", e.data.meta.og.description),
            e.data.meta.og.url && c("url", e.data.meta.og.url)),
          e.data.meta.description && typeof e.data.meta.description == "string" && c("description", e.data.meta.description)),
        document.title && typeof document.title == "string" && c("title", document.title),
        e.data.link && e.data.link.canonical && c("url", e.data.link.canonical),
        e.insta)
      ) {
        for (t = 0, i = e.data.script.length; t < i; t = t + 1)
          e.data.script[t].author && e.data.script[t].author.alternateName && (e.insta.username = e.data.script[t].author.alternateName);
        (e.data.rich.instagram = e.insta),
          (g = { reason: "insta_found", extras: { media_id: e.insta.id, owner_id: e.insta.owner, username: e.insta.username } }),
          e.insta.hashtags && (g.extras.hashtags = e.insta.hashtags),
          w(g);
      }
      Y(), Z();
    }
    function $(t) {
      let i, n, a, r;
      if (
        ((n = window.navigator.language.toLowerCase()),
        (n = n.replace(/[^a-z0-9]/g, " ")),
        (n = n.replace(/^\s+|\s+$/g, "")),
        (n = n.replace(/\s+/g, " ")),
        (n = n.split(" ")),
        n.length > 2)
      )
        for (i = n.length - 1; i > -1; i = i - 1) n[i].length !== 2 && n.splice(i, 1);
      (a = n[0]),
        n[1] && (r = n[0] + "-" + n[1]),
        p.msg[r] ? (e.config.lang = r) : p.msg[a] && (e.config.lang = a),
        (e.config.msg = p.msg[e.config.lang]);
    }
    function X(t) {
      typeof t == "string" && (t = document.getElementById(t)), t && t.parentNode && t.parentNode.removeChild(t);
    }
    function ee(t) {
      let i,
        n,
        a,
        r = document.getElementsByTagName("SCRIPT");
      for (i = r.length - 1; i > -1; i = i - 1)
        if (r[i].src.match(p.me)) {
          for (n = 0; n < p.validParams.length; n = n + 1)
            (a = z({ el: r[i], att: p.validParams[n] })), a && (e.config[p.validParams[n]] = a);
          X(r[i]);
          break;
        }
    }
    function te(t) {
      let i,
        n,
        a,
        r,
        s,
        o = "",
        d = "?",
        m = t.split("#")[0].split("?");
      if (m[1]) {
        for (a = m[1].split("&"), i = 0; i < a.length; i = i + 1)
          if (((r = a[i].split("=")), r.length === 2)) {
            for (s = !1, n = 0; n < p.forbiddenQueryKey.length; n = n + 1)
              if (r[0].match(p.forbiddenQueryKey[n])) {
                s = !0;
                break;
              }
            s || ((o = o + d + r[0] + "=" + r[1]), (d = "&"));
          }
      }
      return m[0] + o;
    }
    function ie() {
      if ((l("Pinmarklet injected"), l("My key: " + p.k), !document.body.getAttribute(p.hazPinningNow)))
        if (((e.here = te(document.URL)), window.navigator.userAgent.match(" MSIE "))) w({ reason: "oldIE" });
        else if (
          (ee(),
          e.extended || (U(), W(), H()),
          typeof DATA_RESULTS_KEY == "string" && ((e.config.share = DATA_RESULTS_KEY), (e.client = "ios_share")),
          w({ reason: "init" }),
          $(),
          D({ url: e.here }))
        )
          w({ reason: "domain_not_allowed" }), (e.data.close = e.config.msg.noPinDomain), M();
        else {
          G();
          const t = J();
          if (t) w({ reason: "found_nopin_meta" }), t === !0 ? (e.data.close = e.config.msg.noPinMeta) : (e.data.close = t), M();
          else {
            let i = function () {
              l("Initing"), (e.data.url = e.here), K() || (B(), e.override.img || O(), e.override.link || R());
              function r() {
                e.count.imgLoading
                  ? (l("images left to load: " + e.count.imgLoading),
                    new Date().getTime() < e.time.start + p.maxWait
                      ? window.setTimeout(r, 10)
                      : (l("Timed out, rendering what we have."), I()))
                  : I();
              }
              window.setTimeout(r, 100);
            };
            const n = function () {
                document.readyState === "complete" || Date.now() - a > p.maxWait ? i() : window.requestAnimationFrame(n);
              },
              a = Date.now();
            e.holdForReadyStateComplete ? (l("Holding for readystate complete"), n()) : (l("Ignoring readystate"), i());
          }
        }
    }
    ie();
  })();
})();
