// $(document).scroll(function(){
//     var st = $(this).scrollTop();
//
//     $("section").each(function() {
//         if(st >= $(this).offset().top && st <= $(this).offset().top + $(this).height()){
//             var id = $(this).attr('id');
//             $('a[href="#'+id+'"]').addClass('underline');
//         }else{
//             var id = $(this).attr('id');
//             $('a[href="#'+id+'"]').removeClass('underline');
//         }
//     });
// });
//
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
//
// });


$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
