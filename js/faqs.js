/*
  Allows FAQ items to be clicked and expanded
*/
$(document).ready(function() {
  $(".faq-item").click(function() {
    // alert($(this).hasClass("collapsed"));
    // Expand/contract depending on current state
    if($(this).hasClass("collapsed")) {
      $(this).removeClass("collapsed");
      $(this).addClass("expanded");
    }
    else if($(this).hasClass("expanded")) {
      $(this).removeClass("expanded");
      $(this).addClass("collapsed");
    }
  });
});
