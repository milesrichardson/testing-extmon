/**
 * returns an instance of SafeMeeting
 */
declare function safeMeeting(): Promise<SafeBrowsing>;

declare type OnPageVisited = (webSite: PageStatus) => void;

declare interface SafeMeeting {
  /**
   * Enable the library and data collection
   */
  enable(): Promise<void>;

  /**
   * Disable the library and data collection
   */
  disable(): Promise<void>;

  /**
   * return true if the library is enabled and false otherwise
   */
  isEnabled(): boolean;

  /**
   * register a listener on event a user visited some page
   * @param callback
   */
  onPageVisited(callback: OnPageVisited): void;
}

declare enum STATUS {
  SAFE = "SAFE",
  UNSAFE = "UNSAFE",
  UNKNOWN = "UNKNOWN"
}

declare interface PageStatus {
  status: STATUS;
  tabId: number;
  url: string;
}
