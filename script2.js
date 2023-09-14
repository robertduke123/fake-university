addEventListener('DOMContentLoaded', () => {


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