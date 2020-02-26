// https://stackoverflow.com/questions/16475198/jquery-scrolltop-animation
// OverFlow License Policy: https://stackoverflow.com/help/licensing
// Creative Common License: https://creativecommons.org/licenses/by-sa/4.0/

$(document).ready(function(){
      $(window).on('scroll', function () {

        var scrollPos = $(window).scrollTop();
        if(scrollPos > 180){
          console.log("going down");
          $(".scroll-top").show();
        }
        else{
          $(".scroll-top").hide();
        }

      });

    $(".scroll-top").click(function() {
        $("html").animate({
            scrollTop: 0
        }, "fast");
    });
});
