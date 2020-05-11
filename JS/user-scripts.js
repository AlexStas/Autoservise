//scrollbtn
let scrollElem = document.getElementById("scrollToTop")
window.onscroll = function() {
    myFunction()
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollElem.style.opacity = "1"

    } else {
        scrollElem.style.opacity = "0"
    }
}
let timeOut

function goUp() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100)
        timeOut = setTimeout('goUp()', 20)
    } else clearTimeout(timeOut)
}
//header hidden
let header = document.getElementById("myHeader")
let sticky = header.offsetTop

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")

    } else {
        header.classList.remove("sticky")
    }
}

//burger-menu
let burger = document.querySelector('.burger')
let burgerActive = document.querySelector('.burger span')
let burgerMenu = document.querySelector('.burger-menu')
let backgroundBody = document.querySelector('.float-fade-background')
let body = document.querySelector('body')
const toggleMenu = function() {
    burgerActive.classList.toggle('active')
    backgroundBody.classList.toggle('close-menu')
    body.classList.toggle('noscroll')
    burgerMenu.classList.toggle('burger-menu-show')
    scrollElem.style.opacity = "0"
}
burger.addEventListener('click', function(e) {
    e.stopPropagation()
    toggleMenu()
})
document.addEventListener('click', function(e) {
        const target = e.target
        const its_menu = target == burgerMenu || burgerMenu.contains(target)
        const its_btnMenu = target == burger
        const menu_is_active = burgerActive.classList.contains('active')
        if (!its_menu && !its_btnMenu && menu_is_active) {
            toggleMenu()
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                scrollElem.style.opacity = "1"

            }

        }
    })
    //submenu
let linkSubmenu = document.querySelector('.link-submenu')
let submenu = document.querySelector('.nav-list-submenu')
let closeSubmenu = document.querySelector('.back')
const toggleSubmenu = function() {
    submenu.classList.toggle('submenu-visible')
}
linkSubmenu.addEventListener('click', function() {
    toggleSubmenu()
})
closeSubmenu.addEventListener('click', function() {
    toggleSubmenu()
})