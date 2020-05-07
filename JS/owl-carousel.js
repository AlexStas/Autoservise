//bottom-carousel
$('#bottomCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 5
        },
        1000: {
            items: 7
        }
    }
})

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true

})