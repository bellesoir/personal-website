$('h3').on('click', function(){
    var i = $.inArray($(this)[0],$('h3'));
    if ($($('.copy p')[i]).css('display') == 'none' ) {
        $($('.copy p')[i]).slideDown(500);
    } else {
        $($('.copy p')[i]).slideUp();
    }
});
