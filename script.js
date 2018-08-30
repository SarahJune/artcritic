// $(function() {
//    $(window).scroll(function () {
//       if ($(this).scrollTop() > 648) {
//          $("header").addClass("changeColor")
//       }
//       if ($(this).scrollTop() < 648) {
//          $("header").removeClass("changeColor")
//       }
//    });
// });

// $(document).ready(function(){
//   $(window).scroll(function() {
//     if ($("#about").scrollTop() == 0) {
//       $("#about-link").addClass("underline")
//     } else {
//       $("#about-link").removeClass("underline");
//     }
//   });
// });

$(document).scroll(function(){
    var st = $(this).scrollTop();

    $("section").each(function() {
        if(st >= $(this).offset().top && st <= $(this).offset().top + $(this).height()){
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').addClass('underline');
        }else{
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').removeClass('underline');
        }
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 1
    }, 500);

});

$(function(){  // $(document).ready shorthand
  $('.about').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1500);

            }

        });

    });

});

// fade in about section
$(window).scroll(function () {
    $('.element-to-hide').each(function () {
        var imagePos = $(this).offset().top + 2;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("fadeIn");
            $(this).removeClass("fadeOut")
        } else {
            $(this).removeClass("fadeIn")
            $(this).addClass("fadeOut");
        }
    });
});
