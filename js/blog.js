var isCurrentEntry = $('.entry')[0];

$('#menu li'). on('click', function(){
    var i = $.inArray($(this)[0],$('#menu li'));
    $('#menu').fadeOut(300, function(){
        hideFooter();
        $($('.entry')[i]).fadeIn(600);
        $('#blog-controls').fadeIn(600, checkFooter);
        isCurrentEntry = $('.entry')[i];
    });
});

$('#to-menu').on('click', function(){
    if ( $.inArray($(isCurrentEntry)[0],$('.entry'))===2){
        resetVideo();
    }
    $('.entry').fadeOut(600);
    $('#blog-controls').fadeOut(600, function(){
        hideFooter();
        $('#menu').fadeIn(600);
         checkFooter();
    });
});

$('#forward').on('click', function(){
    var i = $.inArray($(isCurrentEntry)[0],$('.entry'));
    if (i===2){
        resetVideo();
    }
    $($('.entry')[i]).fadeOut(600, function(){
        hideFooter();
        if (i === ($('.entry').length -1)) {
            $($('.entry')[0]).fadeIn(600,  checkFooter);
            isCurrentEntry = $('.entry')[0];
        } else {
            $($('.entry')[i+1]).fadeIn(600,  checkFooter);
            isCurrentEntry = $('.entry')[i+1];
        }
    });
});

$('#back').on('click', function(){
    var i = $.inArray($(isCurrentEntry)[0],$('.entry'));
    if (i===2){
        resetVideo();
    }
    $($('.entry')[i]).fadeOut(600, function(){
        hideFooter();
        if (i === 0) {
            $($('.entry')[$('.entry').length -1]).fadeIn(600,  checkFooter);
            isCurrentEntry = $('.entry')[$('.entry').length -1];
        } else {
            $($('.entry')[i-1]).fadeIn(600, checkFooter);
            isCurrentEntry = $('.entry')[i-1];
        }
    });
});

var resetVideo = function(){
    $('iframe').attr('src', 'https://www.youtube.com/embed/SyIl_iVTxy4');
};
