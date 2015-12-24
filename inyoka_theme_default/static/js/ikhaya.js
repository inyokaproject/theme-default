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
  var textarea = $("#id_text");

  $(".ikhaya-comment-footer a[href='#new_comment']").click(function() {
      textarea.val(textarea.val() + "@" + $(this).data("reply-id") + " ");
      textarea.focus();
  });
})();
