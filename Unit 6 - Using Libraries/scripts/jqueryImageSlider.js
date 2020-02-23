//http://kenwheeler.github.io/slick/
//https://www.youtube.com/watch?v=Uh9cnjDZACo


$(document).ready(function(){
  $(".prdouct-images").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.prdouct-images',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    dots:true,
  });

});
