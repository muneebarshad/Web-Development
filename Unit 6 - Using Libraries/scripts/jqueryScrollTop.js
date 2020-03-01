// https://stackoverflow.com/questions/16475198/jquery-scrolltop-animation
// OverFlow License Policy: https://stackoverflow.com/help/licensing
// Creative Common License: https://creativecommons.org/licenses/by-sa/4.0/

// Scroll to top button

$(document).ready(function(){
      $(window).on('scroll', function () {
        // Get position of the window
        var scrollPos = $(window).scrollTop();
        // When user scrolls down below 180px show the button
        if(scrollPos > 180){
          $(".scroll-top").show();
        }
        // else hide the button
        else{
          $(".scroll-top").hide();
        }

      });

    // when button is clicked scroll back to top
    $(".scroll-top").click(function() {
        $("html").animate({
            scrollTop: 0
        }, "fast");
    });
});
