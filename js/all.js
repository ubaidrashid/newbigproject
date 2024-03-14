burger = document.querySelector('.burger')
leftNav = document.querySelector('.left-nav')
minus = document.querySelector('.minus')

burger.addEventListener('click', () => {
    leftNav.classList.toggle('new');
})

minus.addEventListener('click', () => {

    leftNav.classList.add('new');
})

leftNav.addEventListener('click',()=>{

    leftNav.classList.add('new')
})