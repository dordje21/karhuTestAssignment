$(document).ready(function () {
    $("#collection-slider__karhu").slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        dots: false,
        infinite: false,
        speed: 300,
        outerEdgeLimit: true,
        arrows: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2.5,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1.5,
                }
            }
        ],

        variableWidth: true
    });
});