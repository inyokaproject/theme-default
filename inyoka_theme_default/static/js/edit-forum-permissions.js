/**
 * group_edit_forum_permissions.js
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 * for portal/group_edit_forum_permissions.html
 *  * filter table-rows via the forum-name
 *  * highlight hovered column
 * requires jQuery
 *
 * :copyright: (c) 2013-2019 by the Inyoka Team, see AUTHORS for more details.
 * :license: BSD, see LICENSE for more details.
 */

$(function () {
  // Quick Table Search
  // https://css-tricks.com/complete-guide-table-element/#article-header-id-25
  $('#table-search').keyup(function() {
    var regex = new RegExp($('#table-search').val(), "i");
    var rows = $('.portal-edit-forum-permissions tbody tr:gt(1)');
    rows.each(function (index) {
      title = $(this).children(":first-child").html()
      if (title.search(regex) != -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // column highlight inside table
  // https://css-tricks.com/row-and-column-highlighting/#article-header-id-2
  $(".portal-edit-forum-permissions table").delegate('td','mouseover mouseleave', function(e) {
    if (e.type == 'mouseover') {
      $("colgroup").eq($(this).index()).addClass("hover");
      $(":first-child th").eq($(this).index()+1).addClass("hover");
    }
    else {
      $("colgroup").eq($(this).index()).removeClass("hover");
      $(":first-child th").eq($(this).index()+1).removeClass("hover");
    }
  });
});
