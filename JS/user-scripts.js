window.onscroll = function() {
    myFunction()
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
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
};