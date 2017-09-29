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
        $('#madlib-input').hide();
        $('#madlib-story').show();
        for(var i=0; i < $('input').length; i++) {
            $($('span')[i]).text($($('input')[i]).val());
        }
    }
});

$('#redo').on('click', function(){
    $('#madlib-input').show();
    $('#madlib-story').hide();
});
