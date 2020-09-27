$(document).ready(function(){

    // Back To Top Button
    var backButton = $('.back-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
          backButton.addClass('visible');
        } else {
          backButton.removeClass('visible');
        }
    });
    backButton.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });

    // AOS animation 
    AOS.init({
        easing: 'ease-in-out-back',
        duration: 1200,
        disable: false,
    });
});