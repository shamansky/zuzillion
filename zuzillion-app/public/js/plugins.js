/*global $*/

$(function () {
  "use strict";

  var color_picker = $(".options ul li");

  color_picker
    .eq(0).css("backgroundColor", "#333").end()
    .eq(1).css("backgroundColor", "#bc1a55").end()
    .eq(2).css("backgroundColor", "#FFB535").end()
    .eq(3).css("backgroundColor", "#77AF02").end()
    .eq(4).css("backgroundColor", "#0b85ba").end();

    $(".settings").click(function () {
      $(".options").toggle();
    });

    color_picker.click(function () {
      $("link[href*='_theme']").attr("href", $(this).attr("data-target"));
    });
});
