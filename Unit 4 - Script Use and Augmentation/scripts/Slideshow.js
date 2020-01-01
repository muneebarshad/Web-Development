/* This script was created by W3Schools; How To - Slideshow
Link to guide: https://www.w3schools.com/howto/howto_js_slideshow.asp
Fair Use Policy: https://www.w3schools.com/about/default.asp */

//Variable timer set to null
var timer = null;
//Variable slideIndex set to 1 to display the first slide
var slideIndex = 1;

//Collect all the slides with the same id
var slides = document.getElementsByClassName("mySlides");

//Function calle dto diaply first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(index) {
  //resets the timer whe slide is changed with next/prev buttons
  clearTimeout(timer);
  //Calls function to display the next or previous slide
  showSlides(slideIndex += index);
}

//Resets the timer and displays the slide of index value
function currentSlide(index) {
  clearTimeout(timer);
  showSlides(slideIndex = index);
}


function showSlides(index) {
  var i;
  //Index set greater than number of slides will show first slide
  if (index > slides.length) {slideIndex = 1}
  //Index set less than 1 will show last slide
  if (index < 1) {slideIndex = slides.length}
  //Hides all the slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";

  }
  //Dispalys slide
  slides[slideIndex-1].style.display = "block";


}

//variuable slideindex for auto slide show
var slideindex = 0;
//Function call to start autoslideshow
autoshowSlides();


function autoshowSlides() {
    var i = 0;
    //Hides all the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideindex++;
    //Index set greater than number of slides will show first slide
    if (slideindex > slides.length) {
        slideindex = 1;
    }
    //Dispalys slide
    slides[slideindex - 1].style.display = "block";
    //Recursive call to function after every 5 seconds
    setTimeout(autoshowSlides, 5000);
}
