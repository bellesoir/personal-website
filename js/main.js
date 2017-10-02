$('#burger').on('click', function(){
    $('#burger').hide();
    $('#close-nav').show();
    $('nav').slideDown(500);
});

$('#close-nav').on('click', function(){
    $('#burger').show();
    $('#close-nav').hide();
    $('nav').slideUp(500);
});

$('#is-current').on('click', function(){
    location.reload();
});

$(window).on('resize', function(){
    if (($('nav').is(':visible') === false) && ($('body').outerWidth() >= 768)){
        $('nav').removeAttr('style');
    }
});

var checkFooter = function(){
    hideFooter();
    if ($('body').outerHeight() <= $(window).height()){
        $('footer').css({'position': 'absolute', 'bottom':'2%'});
    } else {
        $('footer').css({'position': 'relative'});
    }
    $('footer').css({'opacity': '1'});
};

var hideFooter = function(){
    $('footer').css({'opacity': '0'});
};

checkFooter();
