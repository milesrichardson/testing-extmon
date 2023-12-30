var ZOTERO_TYPE_SCHEMA = {
  itemTypes: {
    1: ["note", "Note", [false], [], {}, "treeitem-note@2x.png"],
    2: [
      "book",
      "Book",
      [1, 2, 3, 5, 4],
      [110, 90, 3, 30, 4, 45, 6, 7, 8, 14, 118, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      {},
      "treeitem-book@2x.png"
    ],
    3: [
      "bookSection",
      "Book Section",
      [1, 29, 2, 3, 5, 4],
      [110, 90, 115, 3, 30, 4, 45, 6, 7, 8, 14, 10, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 115: 12 },
      "treeitem-bookSection@2x.png"
    ],
    4: [
      "journalArticle",
      "Journal Article",
      [1, 2, 3, 27, 4],
      [110, 90, 12, 4, 5, 10, 14, 3, 28, 29, 25, 87, 26, 13, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      {},
      "treeitem-journalArticle@2x.png"
    ],
    5: [
      "magazineArticle",
      "Magazine Article",
      [1, 2, 27, 4],
      [110, 90, 12, 4, 5, 14, 10, 87, 13, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      {},
      "treeitem-magazineArticle@2x.png"
    ],
    6: [
      "newspaperArticle",
      "Newspaper Article",
      [1, 2, 27, 4],
      [110, 90, 12, 7, 6, 14, 15, 10, 87, 116, 13, 1, 27, 123, 19, 62, 18, 2, 22],
      {},
      "treeitem-newspaperArticle@2x.png"
    ],
    7: [
      "thesis",
      "Thesis",
      [1, 2],
      [110, 90, 69, 89, 7, 14, 118, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 69: 108, 89: 8 },
      "treeitem-thesis@2x.png"
    ],
    8: ["letter", "Letter", [1, 2, 16], [110, 90, 65, 14, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], { 65: 108 }, "treeitem-letter@2x.png"],
    9: [
      "manuscript",
      "Manuscript",
      [1, 2, 4],
      [110, 90, 66, 7, 14, 118, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 66: 108 },
      "treeitem-manuscript@2x.png"
    ],
    10: [
      "interview",
      "Interview",
      [6, 2, 7, 4],
      [110, 90, 14, 64, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 64: 109 },
      "treeitem-interview@2x.png"
    ],
    11: [
      "film",
      "Film",
      [8, 2, 10, 9],
      [110, 90, 21, 14, 122, 63, 77, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 21: 8, 63: 109, 122: 108 },
      "treeitem-film@2x.png"
    ],
    12: [
      "artwork",
      "Artwork",
      [22, 2],
      [110, 90, 59, 61, 14, 87, 116, 123, 19, 62, 18, 1, 27, 2, 22],
      { 59: 109 },
      "treeitem-artwork@2x.png"
    ],
    13: ["webpage", "Web Page", [1, 2, 4], [110, 90, 91, 70, 14, 116, 1, 27, 87, 2, 22], { 70: 108, 91: 12 }, "treeitem-webpage@2x.png"],
    14: ["attachment", "Attachment", [false], [110, 27, 1], {}, "treeitem@2x.png"],
    15: [
      "report",
      "Report",
      [1, 2, 5, 4],
      [110, 90, 92, 32, 28, 7, 31, 14, 10, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 31: 8, 32: 108, 92: 60 },
      "treeitem-report@2x.png"
    ],
    16: [
      "bill",
      "Bill",
      [12, 2, 28],
      [110, 90, 93, 36, 94, 15, 95, 41, 40, 42, 14, 87, 1, 27, 116, 2, 22],
      { 41: 127, 93: 60, 94: 4, 95: 10 },
      "treeitem-bill@2x.png"
    ],
    17: [
      "case",
      "Case",
      [1, 2, 13],
      [111, 90, 44, 96, 117, 43, 97, 98, 42, 87, 116, 1, 27, 2, 22],
      { 44: 127, 96: 14, 97: 4, 98: 10, 111: 110, 117: 60 },
      "treeitem-case@2x.png"
    ],
    18: [
      "hearing",
      "Hearing",
      [2],
      [110, 90, 46, 7, 8, 45, 99, 10, 41, 40, 42, 14, 87, 116, 1, 27, 2, 22],
      { 41: 127, 99: 60 },
      "treeitem-hearing@2x.png"
    ],
    19: [
      "patent",
      "Patent",
      [14, 15, 2],
      [110, 90, 7, 102, 48, 120, 50, 121, 10, 103, 51, 52, 53, 54, 87, 116, 1, 27, 2, 22],
      { 50: 60, 52: 14, 54: 131, 120: 127 },
      "treeitem-patent@2x.png"
    ],
    20: [
      "statute",
      "Statute",
      [1, 2],
      [112, 90, 36, 55, 101, 100, 10, 15, 40, 42, 87, 116, 1, 27, 2, 22],
      { 100: 14, 101: 60, 112: 110 },
      "treeitem-statute@2x.png"
    ],
    21: ["email", "E-mail", [1, 2, 16], [113, 90, 14, 116, 1, 27, 87, 2, 22], { 113: 110 }, "treeitem-email@2x.png"],
    22: [
      "map",
      "Map",
      [20, 2, 5],
      [110, 90, 67, 68, 28, 6, 7, 8, 14, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 67: 108 },
      "treeitem-map.png"
    ],
    23: [
      "blogPost",
      "Blog Post",
      [1, 23, 2],
      [110, 90, 107, 70, 14, 1, 27, 87, 116, 2, 22],
      { 70: 108, 107: 12 },
      "treeitem-blogPost@2x.png"
    ],
    24: ["instantMessage", "Instant Message", [1, 2, 16], [110, 90, 14, 87, 116, 1, 27, 2, 22], {}, "treeitem-instantMessage@2x.png"],
    25: [
      "forumPost",
      "Forum Post",
      [1, 2],
      [110, 90, 104, 79, 14, 87, 116, 1, 27, 2, 22],
      { 79: 108, 104: 12 },
      "treeitem-forumPost@2x.png"
    ],
    26: [
      "audioRecording",
      "Audio Recording",
      [17, 18, 2, 19],
      [110, 90, 71, 28, 4, 45, 7, 72, 14, 77, 87, 11, 116, 123, 19, 62, 18, 1, 27, 2, 22],
      { 71: 109, 72: 8 },
      "treeitem-audioRecording@2x.png"
    ],
    27: [
      "presentation",
      "Presentation",
      [24, 2],
      [110, 90, 74, 14, 7, 75, 1, 27, 87, 116, 2, 22],
      { 74: 108 },
      "treeitem-presentation@2x.png"
    ],
    28: [
      "videoRecording",
      "Video Recording",
      [8, 11, 2, 10, 9],
      [110, 90, 63, 28, 4, 45, 7, 76, 14, 77, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 63: 109, 76: 8 },
      "treeitem-videoRecording.png"
    ],
    29: [
      "tvBroadcast",
      "TV Broadcast",
      [8, 11, 2, 25, 10, 9],
      [110, 90, 119, 105, 63, 7, 78, 14, 77, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 63: 109, 78: 8, 105: 60, 119: 12 },
      "treeitem-tvBroadcast.png"
    ],
    30: [
      "radioBroadcast",
      "Radio Broadcast",
      [8, 11, 2, 25, 10, 9],
      [110, 90, 119, 105, 71, 7, 78, 14, 77, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 71: 109, 78: 8, 105: 60, 119: 12 },
      "treeitem-radioBroadcast.png"
    ],
    31: [
      "podcast",
      "Podcast",
      [26, 2, 25],
      [110, 90, 28, 105, 80, 77, 1, 27, 87, 116, 2, 22],
      { 80: 109, 105: 60 },
      "treeitem-podcast.png"
    ],
    32: [
      "computerProgram",
      "Software",
      [21, 2],
      [110, 90, 28, 81, 14, 82, 7, 83, 88, 11, 116, 1, 2, 123, 19, 62, 18, 27, 22],
      { 83: 8 },
      "treeitem-computerProgram@2x.png"
    ],
    33: [
      "conferencePaper",
      "Conference Paper",
      [1, 2, 3, 5, 4],
      [110, 90, 14, 114, 84, 7, 8, 4, 10, 3, 87, 26, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 114: 12 },
      "treeitem-conferencePaper@2x.png"
    ],
    34: ["document", "Document", [1, 2, 3, 27, 4], [110, 90, 8, 14, 87, 116, 1, 27, 123, 19, 62, 18, 2, 22], {}, "treeitem@2x.png"],
    35: [
      "encyclopediaArticle",
      "Encyclopedia Article",
      [1, 2, 3, 5, 4],
      [110, 90, 85, 3, 30, 4, 45, 6, 7, 8, 14, 10, 11, 116, 1, 27, 87, 123, 19, 62, 18, 2, 22],
      { 85: 12 },
      "treeitem-encyclopediaArticle@2x.png"
    ],
    36: [
      "dictionaryEntry",
      "Dictionary Entry",
      [1, 2, 3, 5, 4],
      [110, 90, 86, 3, 30, 4, 45, 6, 7, 8, 14, 10, 87, 11, 116, 1, 27, 123, 19, 62, 18, 2, 22],
      { 86: 12 },
      "treeitem-dictionaryEntry@2x.png"
    ],
    37: ["annotation", "Annotation", [false], [], {}, "treeitem@2x.png"],
    38: [
      "preprint",
      "Preprint",
      [1, 2, 3, 27, 4],
      [110, 90, 122, 124, 125, 7, 14, 3, 30, 26, 126, 1, 27, 123, 19, 116, 87, 62, 18, 2, 22],
      { 122: 108, 124: 8, 125: 60 },
      "treeitem-preprint@2x.png"
    ],
    39: [
      "dataset",
      "Dataset",
      [1, 2],
      [110, 90, 128, 108, 81, 14, 124, 129, 130, 26, 126, 1, 27, 123, 19, 116, 87, 62, 18, 2, 22],
      { 124: 8, 128: 60, 129: 7, 130: 109 },
      "treeitem-dataset@2x.png"
    ],
    40: [
      "standard",
      "Standard",
      [1, 2],
      [110, 90, 132, 46, 108, 60, 81, 131, 14, 8, 7, 26, 126, 1, 27, 123, 19, 116, 118, 87, 62, 18, 2, 22],
      { 132: 127 },
      "treeitem-standard@2x.png"
    ],
    10001: [
      "nsfReviewer",
      "NSF Reviewer",
      [false],
      [10001, 31, 10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010, 10011],
      { 31: false, 10001: 110, 10005: 1, 10008: 14 },
      "report_user.png"
    ]
  },
  creatorTypes: {
    1: ["author", "Author"],
    2: ["contributor", "Contributor"],
    3: ["editor", "Editor"],
    4: ["translator", "Translator"],
    5: ["seriesEditor", "Series Editor"],
    6: ["interviewee", "Interview With"],
    7: ["interviewer", "Interviewer"],
    8: ["director", "Director"],
    9: ["scriptwriter", "Scriptwriter"],
    10: ["producer", "Producer"],
    11: ["castMember", "Cast Member"],
    12: ["sponsor", "Sponsor"],
    13: ["counsel", "Counsel"],
    14: ["inventor", "Inventor"],
    15: ["attorneyAgent", "Attorney/Agent"],
    16: ["recipient", "Recipient"],
    17: ["performer", "Performer"],
    18: ["composer", "Composer"],
    19: ["wordsBy", "Words By"],
    20: ["cartographer", "Cartographer"],
    21: ["programmer", "Programmer"],
    22: ["artist", "Artist"],
    23: ["commenter", "Commenter"],
    24: ["presenter", "Presenter"],
    25: ["guest", "Guest"],
    26: ["podcaster", "Podcaster"],
    27: ["reviewedAuthor", "Reviewed Author"],
    28: ["cosponsor", "Cosponsor"],
    29: ["bookAuthor", "Book Author"]
  },
  fields: {
    1: ["url", "url", true],
    2: ["rights", "rights", true],
    3: ["series", "series", true],
    4: ["volume", "volume", true],
    5: ["issue", "issue", true],
    6: ["edition", "edition", true],
    7: ["place", "place", true],
    8: ["publisher", "publisher", true],
    10: ["pages", "pages", true],
    11: ["ISBN", "ISBN", true],
    12: ["publicationTitle", "publicationTitle", true],
    13: ["ISSN", "ISSN", true],
    14: ["date", "date", true],
    15: ["section", "section", true],
    18: ["callNumber", "callNumber", true],
    19: ["archiveLocation", "archiveLocation", true],
    21: ["distributor", "distributor", false],
    22: ["extra", "extra", true],
    25: ["journalAbbreviation", "journalAbbreviation", true],
    26: ["DOI", "DOI", true],
    27: ["accessDate", "accessDate", true],
    28: ["seriesTitle", "seriesTitle", true],
    29: ["seriesText", "seriesText", true],
    30: ["seriesNumber", "seriesNumber", true],
    31: ["institution", "institution", false],
    32: ["reportType", "reportType", false],
    36: ["code", "code", true],
    40: ["session", "session", true],
    41: ["legislativeBody", "legislativeBody", false],
    42: ["history", "history", true],
    43: ["reporter", "reporter", true],
    44: ["court", "court", false],
    45: ["numberOfVolumes", "numberOfVolumes", true],
    46: ["committee", "committee", true],
    48: ["assignee", "assignee", true],
    50: ["patentNumber", "patentNumber", false],
    51: ["priorityNumbers", "priorityNumbers", true],
    52: ["issueDate", "issueDate", false],
    53: ["references", "references", true],
    54: ["legalStatus", "legalStatus", false],
    55: ["codeNumber", "codeNumber", true],
    59: ["artworkMedium", "artworkMedium", false],
    60: ["number", "number", true],
    61: ["artworkSize", "artworkSize", true],
    62: ["libraryCatalog", "libraryCatalog", true],
    63: ["videoRecordingFormat", "videoRecordingFormat", false],
    64: ["interviewMedium", "interviewMedium", false],
    65: ["letterType", "letterType", false],
    66: ["manuscriptType", "manuscriptType", false],
    67: ["mapType", "mapType", false],
    68: ["scale", "scale", true],
    69: ["thesisType", "thesisType", false],
    70: ["websiteType", "websiteType", false],
    71: ["audioRecordingFormat", "audioRecordingFormat", false],
    72: ["label", "label", false],
    74: ["presentationType", "presentationType", false],
    75: ["meetingName", "meetingName", true],
    76: ["studio", "studio", false],
    77: ["runningTime", "runningTime", true],
    78: ["network", "network", false],
    79: ["postType", "postType", false],
    80: ["audioFileType", "audioFileType", false],
    81: ["versionNumber", "versionNumber", true],
    82: ["system", "system", true],
    83: ["company", "company", false],
    84: ["conferenceName", "conferenceName", true],
    85: ["encyclopediaTitle", "encyclopediaTitle", false],
    86: ["dictionaryTitle", "dictionaryTitle", false],
    87: ["language", "language", true],
    88: ["programmingLanguage", "programmingLanguage", true],
    89: ["university", "university", false],
    90: ["abstractNote", "abstractNote", true],
    91: ["websiteTitle", "websiteTitle", false],
    92: ["reportNumber", "reportNumber", false],
    93: ["billNumber", "billNumber", false],
    94: ["codeVolume", "codeVolume", false],
    95: ["codePages", "codePages", false],
    96: ["dateDecided", "dateDecided", false],
    97: ["reporterVolume", "reporterVolume", false],
    98: ["firstPage", "firstPage", false],
    99: ["documentNumber", "documentNumber", false],
    100: ["dateEnacted", "dateEnacted", false],
    101: ["publicLawNumber", "publicLawNumber", false],
    102: ["country", "country", true],
    103: ["applicationNumber", "applicationNumber", true],
    104: ["forumTitle", "forumTitle", false],
    105: ["episodeNumber", "episodeNumber", false],
    107: ["blogTitle", "blogTitle", false],
    108: ["type", "type", true],
    109: ["medium", "medium", true],
    110: ["title", "title", true],
    111: ["caseName", "caseName", false],
    112: ["nameOfAct", "nameOfAct", false],
    113: ["subject", "subject", false],
    114: ["proceedingsTitle", "proceedingsTitle", false],
    115: ["bookTitle", "bookTitle", false],
    116: ["shortTitle", "shortTitle", true],
    117: ["docketNumber", "docketNumber", false],
    118: ["numPages", "numPages", true],
    119: ["programTitle", "programTitle", false],
    120: ["issuingAuthority", "issuingAuthority", false],
    121: ["filingDate", "filingDate", true],
    122: ["genre", "genre", false],
    123: ["archive", "archive", true],
    124: ["repository", "repository", false],
    125: ["archiveID", "archiveID", false],
    126: ["citationKey", "citationKey", true],
    127: ["authority", "authority", true],
    128: ["identifier", "identifier", false],
    129: ["repositoryLocation", "repositoryLocation", false],
    130: ["format", "format", false],
    131: ["status", "status", true],
    132: ["organization", "organization", false],
    10001: ["name", "name", false],
    10002: ["address", "address", true],
    10003: ["telephone", "telephone", true],
    10004: ["email", "email", true],
    10005: ["homepage", "homepage", false],
    10006: ["discipline", "discipline", true],
    10007: ["nsfID", "nsfID", true],
    10008: ["dateSent", "dateSent", false],
    10009: ["dateDue", "dateDue", true],
    10010: ["accepted", "accepted", true],
    10011: ["programDirector", "programDirector", true]
  }
};

if (typeof module !== "undefined") {
  module.exports = ZOTERO_TYPE_SCHEMA;
}
