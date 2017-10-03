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


//transition from is-locked homepage to is-unlocked
$('form').on('submit', function(e){
    e.preventDefault();
    if ($('#is-locked input').val() == '7208'){
        $('#is-locked').fadeOut(2000);
        //Cookies.set('wall-shown', true);
    }
});

/*
function checkCookie(){
    var wallShown = Cookies.get('wall-shown');
    if (wallShown == true){
        $('#is-locked').css('display', 'none');
    }
};

checkCookie();
*/
