(function () {
  function getContent(fragmentId, callback) {
    $.get("partial/" + fragmentId + ".html", function (content) {
      callback(content);
    });
  }
  function setActiveLink(fragmentId) {
    $("#navbar a").each(function (i, linkElement) {
      var link = $(linkElement),
        pageName = link.attr("href").substr(1);
      if (pageName === fragmentId) {
        link.attr("class", "active");
      } else {
        link.removeAttr("class");
      }
    });
  }
  function navigate() {
    var fragmentId = location.hash.substr(1);

    getContent(fragmentId, function (content) {
      $("#content").html(content);
    });

    setActiveLink(fragmentId);
  }

  if (!location.hash) {
    location.hash = "#customer-profile";
  }

  navigate();

  $(window).bind("hashchange", navigate);
})();
