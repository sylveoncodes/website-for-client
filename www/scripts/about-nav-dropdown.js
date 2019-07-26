// When the document is ready
$(document).ready(function() {

  // When the About nav is hovered

  var hover = false;

  $("#aboutNavItem").mouseenter(function (){

    if (hover) {
      $("#aboutDropdown").addClass("nav-hidden");
      hover = false;
      $("#aboutNavItem .downCaret").text(" ▼");
    }

    else {
      $("#aboutDropdown").removeClass("nav-hidden");
      hover = true;
    }

  });

  $("#aboutDropdown").mouseleave(function (){
    if ($("#first_link").click()) {
      $("#aboutDropdown").addClass("nav-hidden");
      hover = false;
    }
    if ($("#second_link").click()) {
      $("#aboutDropdown").addClass("nav-hidden");
      hover = false;
    }
    if ($("#third_link").click()) {
      $("#aboutDropdown").addClass("nav-hidden");
      hover = false;
    }
    if ($("#fourth_link").click()) {
      $("#aboutDropdown").addClass("nav-hidden");
      hover = false;
    }

  });


});
