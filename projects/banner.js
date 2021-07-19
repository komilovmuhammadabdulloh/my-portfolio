function Fade() {
    scrollPos = $(this).scrollTop();
    $('.banner').css({
        'background-position': '50% ' + (-scrollPos / 4) + "px"
    });
    $('.banner-text').css({
        'margin-top': -200 - (scrollPos / 4) + "px",
        'opacity': 1 - (scrollPos / 250)
    });
}

$(document).ready(function() {
    $(window).scroll(function() {
        Fade();
    });
});

$('.slides').superslides({
    animation: 'fade',
    pagination: false
});