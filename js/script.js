$(document ).ready(function() {
    $("#resume-btn").click(function(){
		$('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 1500);
    });
    $("#projects-btn").click(function(){
		$('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1500);
    });
    $("#about-me-btn").click(function(){
		$('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 1500);
    });
});