$(document).ready(function() {

  /* For the sticky navigation */
  $('.section-about').waypoint(function(direction) {
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '650px;'
  });

  //Scroll on button for more
  $('.chevron').click(function () {
    $('html, body').animate({scrollTop: $('.section-about').offset().top}, 1000);
  });

  //Navigation scroll
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//Animations on scroll
  $('.skills-portion').waypoint(function(direction) {
      $('.skills-portion').addClass('animated fadeIn');
  }, {
      offset: '95%'
  });

  $('.passions-portion').waypoint(function(direction) {
      $('.passions-portion').addClass('animated fadeIn');
  }, {
      offset: '95%'
  });

  $('.reverie').waypoint(function(direction) {
    $('.reverie').addClass('animated fadeInRight');
  }, {
      offset: '85%'
  });

  $('.new-project').waypoint(function(direction) {
      $('.new-project').addClass('animated fadeInLeft');
  }, {
      offset: '85%'
  });

});
