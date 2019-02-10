if ($(window).width() <= 500) {
  $("#aboutcontainer").removeClass("col-md-5");
  console.log("set container to 100%");
  $("#aboutcontainer").width($(window).width());
}
var x = false;
console.log("Started script")
$(document).scroll(function(e) {
  if (!x) {
    $("#aboutcontainer").removeClass("col-md-5");
    $("#aboutcontainer").animate({
      width: "100%"
    }, 1000, function() {
      $("#toolsSection").animate({
        opacity: 1
      }, "slow");
    });
    x = true;
  }
})
