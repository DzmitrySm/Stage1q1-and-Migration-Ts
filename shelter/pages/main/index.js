(function () {
  const burgerMenu = document.querySelector('.burger-menu')  ;
  const navItems = document.querySelector('.navigation')
  const listItems = document.querySelector('.list-items')
  const closeMenuByLink = document.querySelectorAll('.nav-link')
  const scrollBehaviour = document.querySelector('.body')
  const overlay = document.querySelector('.overlay-blackout')
  burgerMenu.addEventListener('click', () => {
      navItems.classList.toggle('navigation-active')
      burgerMenu.classList.toggle('burger-menu-active')
      let paddingOfset = window.innerWidth - document.body.offsetWidth + 'px'
      document.body.style.paddingRight = paddingOfset
      scrollBehaviour.classList.toggle('overlay')
      overlay.classList.toggle('overlay-blackout-active')
  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-blackout-active')
    burgerMenu.classList.remove('burger-menu-active')
    navItems.classList.remove('navigation-active');
  } )
  closeMenuByLink.forEach((element) => element.addEventListener('click', () => {
    navItems.classList.remove('navigation-active');
    burgerMenu.classList.remove('burger-menu-active')
    scrollBehaviour.classList.remove('overlay')
    overlay.classList.remove('overlay-blackout')
}))

}());


 //Carousel

 const btnLeft = document.querySelector('.wrapper-arrow-left')
 const btnRight = document.querySelector('.wrapper-arrow-right')
 btnLeft.addEventListener('click', () => {
     console.log('left')
 })
 