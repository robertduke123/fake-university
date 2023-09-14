addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.course-container')
const buttons = document.querySelectorAll('.course-btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.className === 'course-btn next') {
            carousel.scrollLeft >= 2460 ? 
            carousel.scrollBy({
                top: 0,
                left: -5800,
                behavior: 'smooth'
            }) :
            carousel.scrollBy({
                top: 0,
                left: 800,
                behavior: 'smooth'
            })
        } else {
         carousel.scrollLeft === 0 ? 
            carousel.scrollBy({
                top: 0,
                left: 5800,
                behavior: 'smooth'
            }) :
            carousel.scrollBy({
                top: 0,
                left: -800,
                behavior: 'smooth'
            })
        }
        
    })
})


carousel.addEventListener('scroll', () => {
    console.log(carousel.scrollLeft);
})

const  cover = document.querySelector('.mobile-cover')
const mobileNav = document.querySelector('.mobile-nav')
const into = document.querySelector('.mobile-into')
const close = document.querySelector('.mobile-close')

into.addEventListener('click', () => {
    cover.style.display = 'block'
    mobileNav.style.opacity = '1'
    mobileNav.style.display = 'flex'
    into.style.display = 'none'
})

close.addEventListener('click', () => {
    cover.style.display = 'none'
    mobileNav.style.opacity = '0'
    mobileNav.style.display = 'none'
    into.style.display = 'block'
})


})
