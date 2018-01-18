//window.onerror = window.alert("Something went wrong, you may want to look into upgrading your browser.");
if (detectIE()) {
  window.alert("Your browser has been detected to be Internet Explorer. The layout may appear broken. It is recommended to switch to a newer browser.");
  //window.alert("Please don't use Internet Explorer! The site will not work!");
  //window.open("https://www.google.com/chrome/browser/desktop/index.html", "_self");
}

// Taken from https://www.sitepoint.com/profiling-page-loads-with-the-navigation-timing-api/
if (window.performance && window.performance.timing) {
    window.addEventListener("load", function() {
        var timing = window.performance.timing;
        var user = timing.loadEventEnd - timing.navigationStart;
        var dns = timing.domainLookupEnd - timing.domainLookupStart;
        var conn = timing.connectEnd - timing.connectStart;
        var req = timing.responseEnd - timing.requestStart;
        var fetch = timing.responseEnd - timing.fetchStart;
        console.log(user + " " + dns + " " + conn + " " + req + " " + fetch);
});
}

// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    if (typeof start !== "number") {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

// Forked from https://codepen.io/gapcode/pen/vEJNZN
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  //ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  //ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  //ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  //ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    //return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    return true;
  }
  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    //var rv = ua.indexOf('rv:');
    //return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    return true;
  }
  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    //return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    return false;
  }
  // Other browser
  return false;
}
