/**
 * js.smoothscrolling
 * ~~~~~~~~~~~~~~~~~~
 * 
 * Smothly scroll to ids inside a document. Script includes additions for a11y.
 * 
 * source: http://codepen.io/theandyyates/pen/dGovD/
 * (thus MIT licensed, see https://blog.codepen.io/legal/licensing/)
 * 
 * :copyright: (c) 2013-2015 by the Inyoka Team, see AUTHORS for more details.
 * :license: BSD, see LICENSE for more details.
 */

$(function() {
  $('a[href*=#]:not([href=#])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 875, function(){
          target.attr('tabindex', '-1');
          target.focus();
          });
      location.hash = target;
      return false;
      }
    }
  });
});
