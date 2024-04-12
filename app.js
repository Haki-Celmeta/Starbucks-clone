const hamburgerMenu = document.querySelector(".hamburger-menu-btn");
const mobileMenu = document.querySelector(".navbar-mobile-container");

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle("open");

  mobileMenu.classList.toggle("open");
})

//Accordion
const accordion = document.getElementsByClassName('contentBx');

for(i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('active');
  })
}