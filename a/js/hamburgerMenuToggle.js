/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2024.11.07 - 2025.01.013 */

let toggleHamburgerMenu;

window.addEventListener('load', () => {
	toggleHamburgerMenu = () => {
		// let menuItems = document.getElementById('menuItems');
		document.getElementById('menuItems').classList.toggle('active');
	}
});