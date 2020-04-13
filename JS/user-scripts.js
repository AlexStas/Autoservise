window.onscroll = function() {
    myFunction() //header hidden
        //scrollbtn
    var scrollElem = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollElem.style.opacity = "1";

    } else {
        scrollElem.style.opacity = "0";
    }
}
var timeOut;

function goUp() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    } else clearTimeout(timeOut);
}
//header hidden
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
};
//top carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000);
}
//burger-menu

function burgerMenu() {
    let menu = document.querySelector(".burger-menu");
    let button = menu.querySelector(".burger-menu-button");
    let links = menu.querySelector(".burger-menu-link");
    let overlay = menu.querySelector(".burger-menu-overlay");


    button.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });
    [].forEach.call(links, function(el) {
        el.addEventListener("click", () => toggleMenu());
    });
    overlay.addEventListener("click", () => toggleMenu());


    function toggleMenu() {
        menu.classList.toggle("burger-menu-active");
        if (menu.classList.contains("burger-menu-active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }
}
burgerMenu();