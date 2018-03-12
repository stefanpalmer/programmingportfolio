// wow.js
$(function(){
  new WOW().init();
});

// scrolling effect
$(function(){
  $("a.links").click(function(event){
    event.preventDefault();
    var section = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(section).offset().top
    }, 1250);
  });
});

// make back-to-top button appear/disappear
$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      $("#back-to-top").fadeOut();
    } else {
      $("#back-to-top").fadeIn();
    }
  });
});
