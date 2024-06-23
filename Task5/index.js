$(document).ready(function() {
    $('#home-ctn').show();
    $('#about-ctn').hide();
    $('#detail-ctn').hide();
});

$('.nav-home').click(function(){
    $('#home-ctn').show();
    $('#about-ctn').hide();
    $('#detail-ctn').hide();
})

$('.nav-detail').click(function(){
    $('#home-ctn').hide();
    $('#about-ctn').hide();
    $('#detail-ctn').show();
})

$('.nav-about').click(function(){
    $('#home-ctn').hide();
    $('#about-ctn').show();
    $('#detail-ctn').hide();
})