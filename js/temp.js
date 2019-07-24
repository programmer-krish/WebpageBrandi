
$(document).ready(function () {
    $('.feature-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            
            600: {
                items: 2
            },
            
            1024: {
                items: 3
            }
        }
    })
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 2
            },

            1024: {
                items: 3
            },

            1366: {
                items: 4
            }
        }
    })
});