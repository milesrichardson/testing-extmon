!(function (n) {
  var e,
    s =
      ("undefined" != typeof Topics &&
        ((e = !1),
        Topics.get(Topics.INITIALIZED).subscribe(function () {
          e || (n.translateStrings(n.Vault), (e = !0));
        }),
        Topics.get(Topics.CONTENT_SCRIPT_ADD_SITE_DIALOG_OPENED).subscribe(function () {
          e || (n.translateStrings(n.Vault), (e = !0));
        })),
      (n.Vault = {
        EDIT: "Edit",
        SHARE: "Share",
        DELETE: "Delete",
        LAUNCH: "Launch",
        ADMIN_CONSOLE: "Admin Console",
        SUPPORT_CENTER: "Support Center",
        ATTEND_TRAINING: "Attend Training",
        ACCOUNT_SETTINGS: "Account Settings",
        ACCOUNT_MANAGEMENT: "Account Management",
        LOGOUT: "Logout",
        ACCEPT: "Accept",
        REJECT: "Reject",
        ENABLE: "Enable",
        COPY_TOTP: "Copy TOTP",
        COPY_USERNAME: "Copy Username",
        COPY_PASSWORD: "Copy Password",
        COPY_ADDRESS_1: "Copy Address 1",
        COPY_ADDRESS_2: "Copy Address 2",
        COPY_CITY_SLASH_TOWN: "Copy City / Town",
        COPY_ZIP_SLASH_POSTAL_CODE: "Copy ZIP / Postal Code",
        COPY_EMAIL_ADDRESS: "Copy Email Address",
        COPY_PHONE_NUMBER: "Copy Phone Number",
        COPY_BANK_NAME: "Copy Bank Name",
        COPY_ACCOUNT_NUMBER: "Copy Account Number",
        COPY_ROUTING_NUMBER: "Copy Routing Number",
        COPY_NAME_ON_CARD: "Copy Name on Card",
        COPY_SECURITY_CODE: "Copy Security Code",
        COPY_LICENSE_NUMBER: "Copy License Number",
        COPY_POLICY_NUMBER: "Copy Policy Number",
        COPY_GROUP_ID: "Copy Group ID",
        COPY_MEMBER_ID: "Copy Member ID",
        COPY_MEMBERSHIP_NUMBER: "Copy Membership Number",
        COPY_NUMBER: "Copy Number",
        COPY_LICENSE_KEY: "Copy License Key",
        COPY_ORDER_NUMBER: "Copy Order Number",
        COPY_SSH_PASSPHRASE: "Copy Passphrase",
        COPY_SSH_PUBLIC_KEY: "Copy Public Key",
        COPY_HOSTNAME: "Copy Hostname",
        COPY_URL: "Copy URL",
        MOVE_TO_FOLDER: "Move to Folder",
        MOVE_TO_SUB_FOLDER: "Move to Sub-Folder",
        DELETE_FOLDER: "Delete Folder",
        RENAME_FOLDER: "Rename folder",
        SHARE_FOLDER: "Share Folder",
        RENAME: "Rename",
        CREATE_SUB_FOLDER: "Create Sub-Folder",
        OPEN_ALL: "Open All Sites",
        COPY_NOTE: "Copy Note",
        COPY_KEY: "Copy Key",
        FILL: "Fill",
        OPEN: "Open",
        SAVE: "Save",
        CANCEL: "Cancel",
        REVOKE: "Revoke Access",
        RESEND: "Resend Invitation",
        CANCEL_INVITE: "Cancel Invitation",
        REMOVE: "Remove",
        PURGE: "Purge",
        RESTORE: "Restore",
        CLOSE: "Close",
        MAXIMIZE: "Maximize",
        MINIMIZE: "Minimize",
        EDIT_ACCESS: "Edit Access",
        UNLINK_PERSONAL: "Unlink Personal Account",
        STOP_DOWNLOADING: "Stop downloading folder",
        START_DOWNLOADING: "Start Downloading Folder",
        CONFIRM_REQUEST_ACCESS: "Confirm Request Access",
        VAULT_TOGGLE: "Toggle LastPass 3.0",
        AUTO_FILL: "Auto Fill",
        ADDED: "added",
        RENAMED: "renamed",
        SAVED: "saved",
        REMOVED: "removed",
        ACCEPTED: "accepted",
        DECLINED: "declined",
        PURGED: "purged",
        RESTORED: "restored",
        CLONE: "Clone",
        MORE_OPTIONS: "More Options",
        COPY: "Copy",
        EMPTY_COPY: "Nothing to copy",
        MANAGE: "Manage",
        MANAGE_FOLDER: "Manage Folder",
        MANAGE_ITEMS: "Manage items",
        MANAGE_RECIPIENTS: "Manage recipients",
        CONVERT_FOLDER_TO_LEGACY: "Convert to Legacy Shared Folder",
        REQUEST_ACCESS: "Request Access",
        SHARED_WITH: "Shared with",
        SHARED_BY: "Shared by",
        PENDING_SHARE: "Pending share",
        LAST_USED: "Last used",
        WAITING_PERIOD: "Waiting period",
        ACCESS_PENDING: "Access pending until",
        ACCESS_GRANTED: "Access granted",
        ACCOUNT_LINKED: "Account linked",
        GO_TO_URL: "Go to URL",
        UNEXPECTED_ERROR: "An unexpected error has occurred",
        READ_ONLY: "Read-Only",
        EMERGENCY_ACCESS_RECIPIENT: "Emergency Access Recipient",
        UNLINK: "Unlink",
        GENERATED: "Generated",
        NOT_DOWNLOADED: "Not downloaded",
        LINKED: "Linked",
        OUTSIDE_ENT: "Outside Enterprise",
        NO_SHARING_KEYS: "No Sharing Keys",
        GENERATED_PREFIX: "Generated Password for",
        PURGE_ALL: "Purge All",
        LINKED_PERSONAL_ACCOUNT: "Linked Personal Account",
        EMERGENCY_ACCESS: "Emergency Access",
        COLLAPSE_ALL: "Collapse All",
        EXPAND_ALL: "Expand All",
        COMPACT_VIEW: "Show Compact View",
        LARGE_VIEW: "Show Large View",
        SHOW_PASSWORD: "Show Password",
        HIDE_PASSWORD: "Hide Password",
        SHOW_TOTP: "Show one-time passcode",
        HIDE_TOTP: "Hide one-time passcode",
        GENERATE_PASSWORD: "Generate Password",
        ERROR: "Error",
        YES: "Yes",
        NO: "No",
        STARTER_KIT: "Starter kit",
        OPEN_DASHBOARD: "Open Dashboard",
        UPGRADE_PREMIUM: "Upgrade to Premium",
        SHOW: "SHOW",
        HIDE: "HIDE",
        DEFAULT_ACCEPT_FOLDER: "(Accepted Share Offers)",
        NONE_GROUP: "(none)",
        NO_FOLDER: "No folder",
        ADD_ITEM: "Add Item",
        DOWNLOAD: "Download",
        NEVER: "Never",
        JUST_NOW: "Just now",
        SECOND: "A second ago",
        SECONDS: "%d seconds ago",
        MINUTE: "A minute ago",
        MINUTES: "%d minutes ago",
        HOUR: "An hour ago",
        HOURS: "%d hours ago",
        DAY: "A day ago",
        DAYS: "%d days ago",
        WEEK: "A week ago",
        WEEKS: "%d weeks ago",
        MONTH: "A month ago",
        MONTHS: "%d months ago",
        YEAR: "A year ago",
        YEARS: "%d years ago",
        SITE: "Site",
        APPLICATION: "Application:",
        GROUP: "Folder:",
        SECURE_NOTE: "Secure Note",
        FORM_FILL: "Form Fill",
        IDENTITY: "Identity",
        USER: "User",
        USER_GROUP: "User Group",
        SHARED_FOLDER: "Shared Folder",
        ADD_FOLDER: "Add New Folder",
        SHARE_ITEMS: "Share Item",
        ADD_FORM_FILL: "Add Form Fill",
        ADD_NOTE: "Add Secure Note",
        ADD_SITE: "Add Site",
        ADD_SHARED_FOLDER: "Add Shared Folder",
        ADD_IDENTITY: "Add Identity",
        GIVE_EMER_ACCESS: "Give Emergency Access",
        ADD_CREDIT_MON: "Enable Credit Monitoring",
        DUUMY_TERMINATING_ENTRY: ""
      }),
      (n.VaultDynamic = {
        CONFIRM_PURGE: "Are you sure you want to purge %s? It will be permanently deleted from LastPass.",
        CONFIRM_PURGE_PLURAL: "Are you sure you want to purge the selected items? It will be permanently deleted from LastPass.",
        CONFIRM_PURGE_FOLDER: "Are you sure you want to purge this folder's items? It will be permanently deleted from LastPass.",
        CONFIRM_RESTORE: "Are you sure you want to restore %s to your vault?",
        CONFIRM_RESTORE_PLURAL: "Are you sure you want to restore the selected items to your vault?",
        CONFIRM_RESTORE_FOLDER: "Are you sure you want to restore this folder's items to your vault?",
        DELETE_CONFIRM_SITE: "Delete this site - %s?",
        DELETE_CONFIRM: "Are you sure you want to delete %s?",
        DELETE_CONFIRM_PLURAL: "Are you sure you want to delete the selected items?",
        DELETE_SHARED: "Any item owned by someone else is deleted only for yourself, not the owner.",
        PERMISSION_ERROR_MOVE: "You do not have permission to move items to %s",
        PERMISSION_ERROR_DELETE: "You do not have permission to delete items from %s"
      }),
      (n.Consts = { NONE_GROUP: "(none)" }),
      function (e) {
        for (var t = "", E = [], o = e.firstChild; o; )
          3 === o.nodeType ? (t += o.textContent) : 1 === o.nodeType && ((t += "%" + E.length + o.textContent + "%" + E.length), E.push(o)),
            (o = o.nextSibling);
        return { string: n.translateString(t), elements: E };
      }),
    r = function (e) {
      for (var t = s(e), E = (LPTools.removeDOMChildren(e), t.string.indexOf("%")), o = null; -1 < E; ) {
        var n = t.string.substring(0, E),
          r,
          o =
            null === o
              ? (e.appendChild(document.createTextNode(n)), parseInt(t.string.charAt(E + 1)))
              : ((r = t.elements[o]) ? ((r.textContent = n), e.appendChild(r)) : e.appendChild(document.createTextNode(n)), null);
        (t.string = t.string.substring(E + 2)), (E = t.string.indexOf("%"));
      }
      0 < t.string.length && e.appendChild(document.createTextNode(t.string));
    };
  (n.translateString = function (e) {
    if ("undefined" != typeof bg) return bg.StringUtils.translate.apply(bg.StringUtils, arguments);
    if ("undefined" != typeof StringUtils) return StringUtils.translate.apply(StringUtils, arguments);
    if (1 < arguments.length)
      try {
        return sprintf.apply(null, arguments);
      } catch (e) {
        console.error("Strings.translateString: sprintf failed: " + e);
      }
    return e;
  }),
    (n.translate = function (e, t) {
      for (var E = e, o, o; E; ) {
        3 === E.nodeType
          ? (E.textContent = this.translateString(E.textContent))
          : 1 === E.nodeType &&
            (null !== (o = E.getAttribute("placeholder")) && E.setAttribute("placeholder", this.translateString(o)),
            null !== (o = E.getAttribute("title")) && E.setAttribute("title", this.translateString(o)),
            null !== E.getAttribute("compoundtranslation") ? r(E) : n.translate(E.firstChild)),
          (E = E.nextSibling);
      }
    }),
    (n.translateStrings = function (e) {
      for (var t in e) e[t] = n.translateString(e[t]);
    });
})((Strings = {})),
  "undefined" == typeof window && (module.exports = Strings);
