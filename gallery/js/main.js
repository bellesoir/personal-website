//alert('main.js is linked');

$(document).ready(function(){

/*Toggles image captions*/
$('img').on('mouseover', function(){
    var i = $.inArray($(this)[0],$('img'));
    $($('.caption')[i]).toggle();
});

$('.caption').on('mouseout', function(){
    $(this).toggle();
});

}); //CLOSES ready()
