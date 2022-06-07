const hamburger = document.querySelector('.menu-img');
const navList = document.querySelectorAll('.nav__list')
hamburger.addEventListener('click', ()=>{
    navList.forEach(eachNav => {
        eachNav.classList.toggle("nav__list--visible");
    })
});