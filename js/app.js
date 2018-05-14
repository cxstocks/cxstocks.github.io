(function($) {
  "use strict"; // Start of use strict


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar

$("#mainNav").addClass("navbar-shrink");
})(jQuery); // End of use strict

Number.prototype.cround = function () {
  var n = this.toString()
  if(n.includes(".")) {
    var split = n.split('.');
    var end = split[1];
    if(end.length < 2) {
      return n;
    }
    end = end.substring(0,2);
    return split[0] + '.' + end;
  }

  return n;
}
