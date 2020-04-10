$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger").toggleClass("toggle");
    $(".nav-links").toggleClass("open");
    $("body").toggleClass("overflowhidden");
  });
});
