$('h3').on('click', function(){
    var i = $.inArray($(this)[0],$('h3'));
    if ($($('.copy p')[i]).css('display') == 'none' ) {
        $('footer').css({'opacity': '0'});
        $($('.copy p')[i]).slideDown(500, function(){
            checkFooter();
        });
    } else {
        $('footer').css({'opacity': '0'});
        $($('.copy p')[i]).slideUp( function(){
            checkFooter();
        });
    }
});
