$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
         $("header").addClass("changeColor")
      }
      if ($(this).scrollTop() < 400) {
         $("header").removeClass("changeColor")
      }
   });
});
