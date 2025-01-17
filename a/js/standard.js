/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 */

window.addEventListener('load', () => {
	if (typeof localStorage.enableAnalytics === 'undefined') localStorage.setItem('enableAnalytics', 'true');
	if (localStorage.getItem('enableAnalytics') === 'true') {
		(function(c, l, a, r, i, t, y) { // Microsoft Clarity for stats:
			c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
			t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
			y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
		})(window, document, 'clarity', 'script', 'pvf9bh18n4');
		let footer = document.querySelector('footer');
		if (!footer) return;
		let settings = '/meta/settings/index.html';
		let privacy = '/meta/privacy/index.html';
		let statNotice = document.createElement('p'); 
		statNotice.innerHTML = `This page uses <a target="_blank" href="https://clarity.microsoft.com/">Microsoft Clarity</a> for analytics. You can always <a href="${settings}">toggle this on or off</a>.<br>For more information, please refer to the <a href="${privacy}">privacy page</a>.`;
		footer.appendChild(statNotice);
	}
});