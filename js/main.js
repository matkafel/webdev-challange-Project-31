var $navbar = $('.nav');

// Change navbar height on scroll
$(window).on('scroll', function () {

    var top = $(this).scrollTop();

    if (top > 30) {
        $navbar.addClass('nav-scroll');
    } else {
        $navbar.removeClass('nav-scroll');
    }

});


// Navbar links
// Add click listener to links starting with '#'
$navbar.find('a[href^="#"]').on('click', function (e) {

    // Cancel default action
    e.preventDefault();

    // Animate scroll
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);

});


// Hamburger button
$hamburger = $('.nav__burger');

// Mobile menu dim box
$dim = $('.nav__dim');

// Listeners
$dim.on('click', toggleMenu);
$hamburger.on('click', toggleMenu);
$('.nav__menu').on('click', '.nav__item', toggleMenu);

function toggleMenu() {
    $hamburger.toggleClass('nav__burger-active');
    $dim.toggleClass('nav__dim-active');
    $('.nav .nav__menu').toggleClass('nav__menu-active');
}


//SKILLS 
$('.skills__value').viewportChecker({
    offset: 0,
    callbackFunction: function (elem, action) {
        elem.animate({
            width: elem.attr('data-value') + '%'
        }, 1000);
    }
});

//PORTFOLIO
$('.portfolio').on('focus', 'a', function () {
    $(this).closest('.portfolio__item').addClass('is-active');
});

$('.portfolio').on('blur', 'a', function () {
    $(this).closest('.portfolio__item').removeClass('is-active');
});

//DESCRIPTION
$(document).ready(function () {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 40);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});