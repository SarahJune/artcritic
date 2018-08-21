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
