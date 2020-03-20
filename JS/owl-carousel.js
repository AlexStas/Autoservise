//top-carousel
$("#topCarousel").owlCarousel({
    items: 1,
    margin: 0,
    dots: false,
    smartSpeed: 2000,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "flipInX",
    animateIn: "flipInX",
});

//bottom-carousel
$('#bottomCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})