$("#slider").on("scroll", function(e) {
  $(".slide").css({
    "background-position": $(e.target).scrollLeft()/12+ "% 0"
  });
});

$('nav').on('click', 'a', function(e) {
  var width, position;
  e.preventDefault();
  position = $(this).data('id');
  width = 300;

  $('#slider').animate({
    scrollLeft: position * width
  }, 800);

  return false;
});