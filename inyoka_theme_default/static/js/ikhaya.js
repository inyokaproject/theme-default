/**
 * Ikhaya.js
 * ~~~~~~~~~~
 *
 * Some JS-additions for ikhaya (requires jQuery).
 *
 * :copyright: (c) 2013-2015 by the Inyoka Team, see AUTHORS for more details.
 * :license: BSD, see LICENSE for more details.
 */

(function reply_comments() {
  var reply_buttons = $(".ikhaya-comment-footer a[href=#new_comment]");

  for(var i=0; i<reply_buttons.length; i++) {
    $(reply_buttons[i]).on("click", function() {
      var textarea = $("form #id_text");
      textarea.val(textarea.val() + "@" + $(this).data("reply-id") + " ");
      textarea.focus();
    });
  }
})();
