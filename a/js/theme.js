/* Copyright (©) 2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.15 */

(() => {
	let setTheme = () => {
		let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (typeof localStorage.dark === 'undefined') {
			localStorage.dark = dark.toString();
		} else {
			dark = localStorage.dark === 'true';
		}
		if (dark === 'true') {
			document.body.classList.toggle('dark');
		} else {
			document.body.classList.toggle('dark');
			document.body.classList.toggle('dark');
		}
	}
	if (!window.addEventListener) {
		window.attachEvent('onload', setTheme);
	} else {
		window.addEventListener('load', setTheme);
	}
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', setTheme);
})();