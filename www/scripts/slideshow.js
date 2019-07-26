$(document).ready(function() {
  //image paths for photogallery
  // var images = [
  //   "images/product_decorations7.jpg",
  //   "images/dsc_0109.jpg",
  //   "images/avocados_2.jpg",
  //   "images/dsc_0121.jpg",
  //   "images/DSC_0171.jpg"
  // ];

  var currentIndex = 1;
  showSlides(currentIndex);

  window.plusSlides = function (n) {
    showSlides(currentIndex += n);
  }

  function currentSlide(n) {
    showSlides(currentIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides2");
    if (n > slides.length) {currentIndex = 1}
      if (n < 1) {currentIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    slides[currentIndex-1].style.display = "block";
  }

  setInterval(plusSlides, 3000, 1);


//   $("#slideshowNext").click(function () {
//     if (currentIndex == 4) {
//       currentIndex = 0;
//     }
//     else {
//       currentIndex = currentIndex + 1;
//     }
//     document.getElementById("slideshowImage").src = images[currentIndex];
// $
//   });
});
