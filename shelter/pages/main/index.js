(function () {
  const burgerMenu = document.querySelector('.burger-menu')  ;
  const navItems = document.querySelector('.navigation')
  const listItems = document.querySelector('.list-items')
  const closeMenuByLink = document.querySelectorAll('.nav-link')
  const scrollBehaviour = document.querySelector('.body')
  const overlay = document.querySelector('.overlay-blackout')
  const mainTitleVisible = document.querySelector('.wrapper-title-burger')
  burgerMenu.addEventListener('click', () => {
      navItems.classList.toggle('navigation-active')
      burgerMenu.classList.toggle('burger-menu-active')
      let paddingOfset = window.innerWidth - document.body.offsetWidth + 'px'
      document.body.style.paddingRight = paddingOfset
      scrollBehaviour.classList.toggle('overlay')
      overlay.classList.toggle('overlay-blackout-active')
      mainTitleVisible.classList.toggle('wrapper-title-burger-active')

  });
  overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-blackout-active')
    burgerMenu.classList.remove('burger-menu-active')
    navItems.classList.remove('navigation-active')
    document.body.style.paddingRight = 0;
    scrollBehaviour.classList.remove('overlay')
    mainTitleVisible.classList.remove('wrapper-title-burger-active')
  } )
  closeMenuByLink.forEach((element) => element.addEventListener('click', () => {
    navItems.classList.remove('navigation-active');
    burgerMenu.classList.remove('burger-menu-active')
    scrollBehaviour.classList.remove('overlay')
    document.body.style.paddingRight = 0;
    overlay.classList.remove('overlay-blackout-active')
    mainTitleVisible.classList.remove('wrapper-title-burger-active')
}))

}());


let object =

  [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];

  console.log(object)


 //Carousel

 const btnLeft = document.querySelector('.button-arrow-left')
 const btnRight = document.querySelector('.button-arrow-right')
 const carousel = document.querySelector('.carousel')
const moveLeft = () => {
  carousel.classList.add('transition-left')
  btnLeft.removeEventListener('click', moveLeft)
  btnRight.removeEventListener('click', moveRight)
}

const moveRight = () => {
  carousel.classList.add('transition-right')
  btnRight.removeEventListener('click', moveRight)
  btnLeft.removeEventListener('click', moveLeft)
}


 btnLeft.addEventListener('click', moveLeft)
 
 btnRight.addEventListener('click', moveRight) 
carousel.addEventListener('animationend', (animationEvent) => {
  if (animationEvent.animationName === 'move-left') {
    carousel.classList.remove('transition-left')
    const leftItems = document.querySelector('.items-left').innerHTML
    document.querySelector('.items-active').innerHTML = leftItems
  }else {
    carousel.classList.remove('transition-right')
    const rightItems = document.querySelector('.items-right').innerHTML
    document.querySelector('.items-active').innerHTML = rightItems
  }
  
  btnLeft.addEventListener('click', moveLeft)
  btnRight.addEventListener('click', moveRight)
 
})



 //Pop-up

 const cardJennifer = document.querySelector('.wrapper-card-jennifer')
 const visibleCardJennifer = document.querySelector('.modal-window-jennifer')
 const buttonCross = document.querySelector('.cross')
 const overlay = document.querySelector('.overlay-blackout')
 const scrollBehaviour = document.querySelector('.body')
 cardJennifer.addEventListener('click', () => {
  visibleCardJennifer.classList.add('modal-window-jennifer-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })
 buttonCross.addEventListener('click', () => {
  visibleCardJennifer.classList.remove('modal-window-jennifer-active')
 })

 const cardKatrine = document.querySelector('.wrapper-card-katrine')
 const visibleCardKatrine = document.querySelector('.modal-window-katrine')
 const buttonCrossKatrine = document.querySelector('.modify-katrine-button')
 cardKatrine.addEventListener('click', () => {
  visibleCardKatrine.classList.add('modal-window-katrine-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })
 buttonCrossKatrine.addEventListener('click', () => {
   if (visibleCardKatrine.target.contains === 'wrapper-card-katrine-active') {
    visibleCardKatrine.classList.remove('modal-window-katrine-active')
   }
 })
 

 const cardTimmy = document.querySelector('.wrapper-card-timmy')
 const visibleCardTimmy = document.querySelector('.modal-window-timmy')
 cardTimmy.addEventListener('click', () => {
  visibleCardTimmy.classList.add('modal-window-timmy-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })

 const cardWoody = document.querySelector('.wrapper-card-woody')
 const visibleCardWoody = document.querySelector('.modal-window-woody')
 cardWoody.addEventListener('click', () => {
  visibleCardWoody.classList.add('modal-window-woody-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })

 const cardCharly = document.querySelector('.wrapper-card-charly')
 const visibleCardCharly = document.querySelector('.modal-window-charly')
 cardCharly.addEventListener('click', () => {
  visibleCardCharly.classList.add('modal-window-charly-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })

 const cardScarlett = document.querySelector('.wrapper-card-scarlett')
 const visibleCardScarlett = document.querySelector('.modal-window-scarlett')
 cardScarlett.addEventListener('click', () => {
  visibleCardScarlett.classList.add('modal-window-scarlett-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })

 const cardFreddie = document.querySelector('.wrapper-card-freddie')
 const visibleCardFreddie = document.querySelector('.modal-window-freddie')
 cardFreddie.addEventListener('click', () => {
  visibleCardFreddie.classList.add('modal-window-freddie-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })

 const cardSophia = document.querySelector('.wrapper-card-sophia')
 const visibleCardSophia = document.querySelector('.modal-window-sophia')
 cardSophia.addEventListener('click', () => {
  visibleCardSophia.classList.add('modal-window-sophia-active')
  overlay.classList.toggle('overlay-blackout-active')
  scrollBehaviour.classList.toggle('overlay')
 })




 