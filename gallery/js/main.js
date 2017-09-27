//alert('main.js is linked');

$(document).ready(function(){

/*Toggles image captions*/
$('img').on('mouseover', function(){
    var i = $.inArray($(this)[0],$('img')) - 2;
    $($('.caption')[i]).show();
});

$('.caption').on('mouseout', function(){
    $(this).hide();
});

}); //CLOSES ready()
