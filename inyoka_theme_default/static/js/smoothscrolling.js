/**
 * js.smoothscrolling
 * ~~~~~~~~~~~~~~~~~~
 * 
 * Smoothly scroll to ids inside a document. Script includes additions for a11y.
 *
 * the tabindex and focus on the target-element can be disabled via
 * `data-focus-after-scroll="false"` on the link
 *
 * 
 * source: http://codepen.io/theandyyates/pen/dGovD/
 * (thus MIT licensed, see https://blog.codepen.io/legal/licensing/)
 * 
 * :copyright: (c) 2013-2016 by the Inyoka Team, see AUTHORS for more details.
 * :license: BSD, see LICENSE for more details.
 */

$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var focus_data = $(this).attr('data-focus-after-scroll');
      var focus_after_scroll = focus_data ? (focus_data === "true") : true;

      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 875, function() {
          if(focus_after_scroll) {
            target.attr('tabindex', '-1');
            target.focus();
          }
        });
      location.hash = target.selector;
      return false;
      }
    }
  });
});
