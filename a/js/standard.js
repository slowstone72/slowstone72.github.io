/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 */

window.addEventListener('load', () => {
	if (localStorage.getItem('enableTracking') === 'true') {
		(function(c, l, a, r, i, t, y) { // Microsoft Clarity for stats:
			c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
			t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'pvf9bh18n4');
		let footer = document.querySelector('footer');
		if (footer) {
			let settings = `/settings.html`;
			let statNotice = document.createElement('p'); 
			statNotice.innerHTML = `This page uses <a target="_blank" href="https://clarity.microsoft.com/">Microsoft Clarity</a> for statistics. You can customize this on the <a href="${settings}">settings page</a>`;
			footer.appendChild(statNotice);
		}
	}
});