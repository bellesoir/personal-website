$('#submit').on('click', function(event){
    event.preventDefault();
    var ready = false;
    for(var i=0; i < $('input').length; i++) {
        if($($('input')[i]).val() == ""){
            alert('Empty Input(s): Please fill out all inputs.');
            break;
        } else {
            ready = true;
        }
    }
    if (ready == true) {
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
