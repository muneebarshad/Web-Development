/* This script was created by W3Schools; How To - Slideshow
Link to guide: https://www.w3schools.com/howto/howto_js_slideshow.asp
Fair Use Policy: https://www.w3schools.com/about/default.asp */


var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";

  }

  slides[slideIndex-1].style.display = "block";
}
