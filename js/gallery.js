
$(document).ready(function(){

/*Toggles image captions*/
$('img').on('mouseenter', function(){
    var i = $.inArray($(this)[0],$('img')) - 2;
    $($('.caption')[i]).show();
});

$('.caption').on('mouseleave', function(){
    $(this).hide();
});

}); //CLOSES ready()

/*
$(window).on('resize', function(){
    $('.col').css('height', $('.col').css('width'));
});

$('.col').css('height', $('.col').css('width'));
*/
