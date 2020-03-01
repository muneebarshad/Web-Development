//http://kenwheeler.github.io/slick/
//https://www.youtube.com/watch?v=Uh9cnjDZACo
// Provide animation and slide functionality to the images

// When page is loaded
$(document).ready(function(){
  // The main image displayed on the top
  $(".prdouct-images").slick({
    // 1 image displayed
    slidesToShow: 1,
    slidesToScroll: 1,
    // No arrows on the top image
    arrows: false,
    fade: true,
    // Navigated by the bottom slide nav
    asNavFor: '.slider-nav',
    infinite: true,
    speed: 500,
    // Add fade
    fade: true,
    cssEase: 'linear'
  });

// bottom sliode nav
  $('.slider-nav').slick({
    // 2 images shown
    slidesToShow: 2,
    // 1 image get scrolled when arrow button is clicked (arrow set to true by default)
    slidesToScroll: 1,
    asNavFor: '.prdouct-images',
    // Image dots
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });

});
