// MOBILE MENU
function toggleMenu() {
  document.querySelector('header').classList.toggle('mobile-menu');
  document.querySelector('nav').classList.toggle('mobile-menu');
}

document.getElementById('menu').addEventListener('click', () => {
  toggleMenu();
});

document.getElementById('equis').addEventListener('click', () => {
  toggleMenu();
});
