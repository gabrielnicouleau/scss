let burgerMenu = document.querySelector('#toggleMenu');
burgerMenu.addEventListener('click',toggleMenu);

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}