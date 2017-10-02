$('form').on('submit', function(event){
    event.preventDefault();
    $('input').removeClass('is-invalid');
    var ready = 0;
    for(var i=0; i < $('input').length; i++) {
        if($($('input')[i]).val() === ""){
            ready = ready + 1;
            $('input').eq(i).addClass('is-invalid');
        }
        if (ready === 1) {
            $('input').eq(i).focus();
        }
    }
    if (ready > 0){
        alert('Empty Input(s): Please fill out all inputs.');
    } else if (ready === 0) {
        hideFooter();
        $('#madlib-input').hide();
        $('#madlib-story').css('opacity', '0');
        $('#madlib-story').show();
        $('#madlib-story').animate({
            opacity: 1
        }, 1000);
        for(var i=0; i < $('input').length; i++) {
            $($('span')[i]).text($($('input')[i]).val());
        }
        checkFooter();
    }
});

$('#redo').on('click', function(){
    hideFooter();
    $('#madlib-story').animate({
        opacity: 0
    }, 1000, function(){
        $('#madlib-story').hide(function(){
            $('#madlib-input').show();
            checkFooter();
        });
    });

});
