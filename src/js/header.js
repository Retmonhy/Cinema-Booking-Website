/*Открытие выпадающего меню */
const burgerMenu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
	navbar.classList.toggle('navbar_active');
});