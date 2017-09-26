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
