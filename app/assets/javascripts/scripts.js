$(document).ready(function() {

    $('select.select').select2();

    $('a.smooth-scroll').on('click', function(e) {
        e.preventDefault();
        zenscroll.to($(this).attr('href'));
        // document.querySelector($(this).attr('href')).scrollIntoView({
        //     behavior: 'smooth'
        // });
    });

    $('#slick').slick({
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

});