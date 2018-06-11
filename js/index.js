

function main() {
  $(".dropdown-content").hide();
  $(".content-theme").css("opacity", "0");
  let open = "none";

  $("#musicToggle").click(function() {
    $(".dropdown-content").slideUp(800);
    $(".content-theme").css("opacity", "0");
    $("body").css({"background-color": "#eee", "color": "#111"});
    $(".themeImage").css("opacity", "1");
    if (open !== "music") {
      $(".music").slideDown(1000);
      setTimeout(() => {
        $("#content-music").css("opacity", "1");
      }, 600);
      setTimeout(() => {
        $('html, body').animate({
            scrollTop: $("#music").offset().top
        }, 600);
      }, 1000);
      $(".music").css("opacity", "1");
      this.style.setProperty("opacity", "0.5", "important");
      $("body").css({"background-color": "#73543d", "color": "#eee"});
      open = "music";
    } else { open = "none"; }
  });
  $("#danceToggle").click(function() {
    $(".dropdown-content").slideUp(800);
    $(".content-theme").css("opacity", "0");
    $("body").css({"background-color": "#eee", "color": "#111"});
    $(".themeImage").css("opacity", "1");
    if (open !== "dance") {
      $(".dance").slideDown(800);
      setTimeout(() => {
        $("#content-dance").css("opacity", "1");
      }, 600);
      setTimeout(() => {
        $('html, body').animate({
            scrollTop: $("#dance").offset().top
        }, 1000);
      }, 800);
      this.style.setProperty("opacity", "0.5", "important");
      $("body").css({"background-color": "#3d5c73", "color": "#eee"});
      open = "dance";
    } else { open = "none"; }
  });
  $("#developToggle").click(function() {
    $(".dropdown-content").slideUp(800);
    $(".content-theme").css("opacity", "0");
    $("body").css({"background-color": "#eee", "color": "#111"});
    $(".themeImage").css("opacity", "1");
    if (open !== "develop") {
      $(".develop").slideDown(1000);
      setTimeout(() => {
        $("#content-develop").css("opacity", "1");
      }, 600);
      setTimeout(() => {
        $('html, body').animate({
            scrollTop: $("#develop").offset().top
        }, 1000);
      }, 1000);
      this.style.setProperty("opacity", "0.5", "important");
      $("body").css({"background-color": "#543d73", "color": "#eee"});
      open = "develop";
    } else { open = "none"; }
  });
  $("#broadcastToggle").click(function() {
    $(".dropdown-content").slideUp(800);
    $(".content-theme").css("opacity", "0");
    $("body").css({"background-color": "#eee", "color": "#111"});
    $(".themeImage").css("opacity", "1");
    if (open !== "broadcast") {
      $(".broadcast").slideDown(800);
      setTimeout(() => {
        $("#content-broadcast").css("opacity", "1");
      }, 600);
      setTimeout(() => {
        $('html, body').animate({
            scrollTop: $("#broadcast").offset().top
        }, 1000);
      }, 800);
      this.style.setProperty("opacity", "0.5", "important");
      $("body").css({"background-color": "#5c733d", "color": "#eee"});
      open = "broadcast";
    } else { open = "none"; }
  });


}

$(document).ready(main);
