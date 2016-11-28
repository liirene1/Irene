$(document).ready(function() {
  /* For the sticky navigation */
  $('.section-about').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });
});
