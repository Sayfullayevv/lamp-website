/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link , we remove show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach((e) => e.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper('.popular__content', {
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


/*=============== CHOOSE FAQ ===============*/

const faqItems = document.querySelectorAll('.choose__faq-item')

// 1. Select each item

faqItems.forEach((item) => {

    const faqHeader = item.querySelector('.choose__faq-header')

    // 2. Select each button click
    faqHeader.addEventListener('click', () => {
        // 7. Select the current faq-open class
        const openItem = document.querySelector('.faq-open')
        // 5. Call the toggleItem function
        toogleItem(item)


        // 8. Remove the faq-open class from other items
        if(openItem && openItem != item){
            toogleItem(openItem)
        }
    })
})

// 3. Create function to display the content

const toogleItem = (item) => {
    // 3.1. Select each faq content
    const faqContent = item.querySelector('.choose__faq-content')

    // 6. If the same item contains the faq-open class, remove
    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    } else {
        // 4. Add max-height to the content and add the faq-open class
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }

}


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
    

