$(document).ready(function () {
    $("#collection-slider__karhu").slick({
        slidesToScroll: 1,
        slidesToShow: 3.5,
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        draggable: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1.5,
                }
            }
        ]
    });
});