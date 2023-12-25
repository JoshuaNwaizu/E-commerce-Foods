/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')
//Display Video
const videoBtn = document.querySelector('.button__link')
const video = document.querySelector('.home__video')

videoBtn.addEventListener('click', () => {
    video.classList.toggle('video-open')
})


window.addEventListener('scroll', scrollNav)
/**********************SCROLL UP SECTION  ACTIVE LINK ********************/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const toggle = document.getElementById('nav-toggle')
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.toggle('show-menu')
    toggle.classList.toggle('show-icon')
}


navLink.forEach(n => n.addEventListener('click', linkAction))

//Close menu when ScrollY is less than 50
function scrollNav() {
    const navMenu = document.querySelector('#nav-menu')
    const toggle = document.getElementById('nav-toggle')

    if (this.scrollY >= 50) {
        navMenu.classList.remove('show-menu');
    toggle.classList.remove('show-icon')

    }
}
window.addEventListener('scroll', scrollNav)
// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)
/********************** MAIN DISH NAV SHOW ********************/
const dishNav = document.querySelector('.main__dish-close')
const popularCard = document.querySelector('.main-dish')
const popularContainer = document.querySelector('.popular__dish-category-main__dish')
const breakfastCon = document.querySelector('.popular__dish-category-breakfast')
const breakfastCard = document.querySelector('.break-fast')
const breakfastClose = document.querySelector('.breakfast')
const sushiCard = document.querySelector('.sushi-combo'),
    sushiCon = document.querySelector('.sushi__combo-container'),
    sushiClose = document.querySelector('.sushi-close'),
    browseAll = document.querySelector('.browse-all'),
    browseAllCon = document.querySelector('.browse__all'),
    browseClose = document.querySelector('.browse__close')



/********************** OPEN DISH NAV ********************/
function openItem(itemClass, itemCon) {
    itemClass.addEventListener('click', () => {
        itemCon.classList.add('dish-open')
    })
}
/********************** CLOSE DISH NAV ********************/
function closeItem(itemClass, itemCon) {
    itemClass.addEventListener('click', () => {
        itemCon.classList.remove('dish-open')
    })
}



openItem(popularCard, popularContainer)
closeItem(dishNav, popularContainer)

openItem(breakfastCard, breakfastCon)
closeItem(breakfastClose, breakfastCon)

openItem(sushiCard, sushiCon)
closeItem(sushiClose, sushiCon)

openItem(browseAll, browseAllCon)
closeItem(browseClose, browseAllCon)

// SWIPER POPULAR SECTION 
const popularSwiper = new Swiper('.best__dishes-content ', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
});
