$(function () {
    // initialize fancy tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // resizer for large codeblocks
    $('div.code').add('pre.notranslate').each(function () {
        if (this.clientHeight < this.scrollHeight) {
            $(this).after('<button class="codeblock_resizer btn btn-default btn-sm">Expand</button>')
                .css('height', '300px').css('max-height', 'none')
                .data('original_height', this.clientHeight);
        }
    });

    $('[data-trigger="manual"]').hover(function () {
        var placement;
        if ($('body').width() < 753) {
            placement = 'bottom';
        } else {
            placement = 'left';
        }
        $(this).data('bs.tooltip').options.placement = placement;
        $(this).tooltip('show');
    }, function() {
        $(this).tooltip('hide');
    });

    if (navigator.appName.toLowerCase() == 'konqueror') return;
    $('.codeblock_resizer').click(function () {
        $codeblock = $(this).prev();
        if (!$codeblock.hasClass('codeblock_expanded')) {
            $codeblock.addClass('codeblock_expanded');
            $codeblock.animate({
                'height': $codeblock[0].scrollHeight
            }, 500);
            $(this).text('Collapse');
        } else {
            $codeblock.removeClass('codeblock_expanded');
            $codeblock.animate({
                'height': $codeblock.data('original_height')
            }, 500);
            $(this).text('Expand');
        }
    });

    $('.close').click(function() {
      $(this).parent().remove();
    });
});
