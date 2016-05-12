// Document ready
$(function() {
  $('.nav-toggle').on('click', function() {
    $('header').toggleClass('show-nav');
  });

  $('#animacija').addClass('animated tadaOutLeft');
  $.fn.extend({
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });

  $('.info-box .images').on('mouseover', function(e) {
    $(e.target).animateCss('tada');
  });
});
