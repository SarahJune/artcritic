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
        scrollTop: $($.attr(this, 'href')).offset().top
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
