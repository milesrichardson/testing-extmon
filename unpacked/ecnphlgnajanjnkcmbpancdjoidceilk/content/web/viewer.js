var location = window.location,
  href = location.href,
  origin = location.origin;
window.location = href.replace(origin + "/content", "https://web.kamihq.com");
