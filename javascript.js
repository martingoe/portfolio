if ($(window).width() <= 500) {
  $("#aboutcontainer").removeClass("col-md-5");
  console.log("set container to 100%");
  $("#aboutcontainer").width($(window).width());
}

$(document).scroll(function(e) {

  if ($(window).scrollTop() == 0) {
    console.log("close")

    $("#toolsSection").css('opacity', "0")

    $("#aboutcontainer").width("41.666667%")

  } else {
    console.log("open")

    $("#aboutcontainer").width("100%")

    $("#toolsSection").css('opacity', "1")

  }
});
