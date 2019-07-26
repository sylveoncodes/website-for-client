//Source: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp
$(document).ready(function() {

var slideIndex = 1;
showSlides(slideIndex);

window.plusSlides = function (n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  slides[slideIndex-1].style.display = "block";
}
setInterval(plusSlides, 9000, 1);

});
