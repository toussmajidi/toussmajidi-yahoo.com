$(document).ready(function() {
  // Start animation
    let $img = $("#img");
   $("#img").keydown(function (c) {
        if (c.keyCode == 37) {
    $img.animate({ left: "+=150px" }, 2000);
        }
  });

  $("#img").keydown(function (c) {
        if (c.keyCode == 39) {
    $img.animate({ left: "-=150px" }, 2000);
        }
  $("#img").keydown(function (c) {
        if (c.keyCode == 38) {
    $img.animate({ top: "+=150px" }, 2000);
        }
  });
});
