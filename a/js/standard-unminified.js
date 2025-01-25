/* Copyright (©) 2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 - 2025.01.25 */

window.addEventListener('load', () => {
	if (window.location.pathname.startsWith('/w') || window.location.pathname.startsWith('/m/privacy') || window.location.pathname.startsWith('/m/settings')) return;
	let load = () => {
		let footer = document.querySelector('footer');
		if (typeof localStorage.enableAnalytics === 'undefined') localStorage.setItem('enableAnalytics', 'true');
		if (localStorage.getItem('enableAnalytics') === 'true') {
			(function(c, l, a, r, i, t, y) { // Microsoft Clarity for analytics:
				c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
				t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
				y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
			})(window, document, 'clarity', 'script', 'pvf9bh18n4');
			if (!footer) return;
			let notice = document.createElement('p'); 
			notice.innerHTML = `This page uses <a target="_blank" href="https://clarity.microsoft.com/">Microsoft Clarity</a> for analytics.<br>For more information, see the <a href="/m/privacy/index.html">privacy page</a>.`;
			footer.appendChild(notice);
		} else if (footer) {
			let notice = document.createElement('p'); 
			notice.innerHTML = `<a href="/m/privacy/index.html">Privacy Policy</a>`;
			footer.appendChild(notice);
		} // Google AdSense:
		if (typeof localStorage.enableAds === 'undefined') localStorage.setItem('enableAds', 'true');
		if (localStorage.enableAds === 'true' && !window.location.pathname.startsWith('/writing')) {
			let scrpt = document.createElement('script');
			scrpt.async = true;
			scrpt.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2986674631207548';
			scrpt.crossOrigin = 'anonymous';
			document.head.appendChild(scrpt);
		}
	}
	let loadB = () => {
		// Comments:
		if (typeof localStorage.enableCmts === 'undefined') localStorage.setItem('enableCmts', 'true');
		if (localStorage.enableCmts !== 'true' || !window.location.pathname.startsWith('/t')) return;
		let div = document.createElement('div');
		div.className = 'box';
		div.id = 'giscus_thread';
		let scrpt = document.createElement('script');
		scrpt.src = 'https://giscus.app/client.js';
		scrpt.setAttribute('data-repo', 'cffisher/cffisher.github.io');
		scrpt.setAttribute('data-repo-id', 'R_kgDONpbyMA');
		scrpt.setAttribute('data-category', 'Announcements'); 
		scrpt.setAttribute('data-category-id', 'DIC_kwDONpbyMM4CmQSu');
		scrpt.setAttribute('data-mapping', 'title'); // title/url
		scrpt.setAttribute('data-strict', '1');
		scrpt.setAttribute('data-reactions-enabled', '1');
		scrpt.setAttribute('data-emit-metadata', '0');
		scrpt.setAttribute('data-input-position', 'top');
		scrpt.setAttribute('data-theme', 'preferred_color_scheme');
		scrpt.setAttribute('data-lang', 'en');
		scrpt.setAttribute('data-loading', 'lazy');
		scrpt.setAttribute('crossorigin', 'anonymous');
		scrpt.setAttribute('async', '');
		div.appendChild(scrpt);
		let main = document.querySelector('main');
		if (main) main.appendChild(div);
	}
	if (typeof localStorage.cookiesAccepted !== 'undefined' && localStorage.cookiesAccepted === 'true') {
		load();
	} else if (typeof localStorage.cookiesAccepted === 'undefined') {
		let banner = document.createElement('div');
		banner.classList.add('cookieBanner');
		let msg = document.createElement('p');
		msg.innerHTML = 'This page uses cookies to provide personalized advertisements and analyze site usage. For more information, see the <a href="/m/privacy/index.html">privacy page</a>.';
		banner.appendChild(msg);
		let yes = document.createElement('a');
		yes.classList.add('button', 'background');
		yes.textContent = 'Accept';
		yes.addEventListener('click', () => {
			localStorage.setItem('cookiesAccepted', 'true');
			document.body.removeChild(banner);
			load();
		});
		let no = document.createElement('a');
		no.classList.add('button');
		no.textContent = 'No thanks';
		no.addEventListener('click', () => {
			localStorage.setItem('cookiesAccepted', 'false');
			document.body.removeChild(banner);
		});
		let mby = document.createElement('a');
		mby.classList.add('button');
		mby.textContent = 'Customize';
		mby.href = '/m/settings/index.html';
		banner.appendChild(yes);
		banner.appendChild(no);
		banner.appendChild(mby);
		document.body.appendChild(banner);
	} else {
		let footer = document.querySelector('footer');
		let msg = document.createElement('p'); 
		msg.innerHTML = `<a href="/m/settings/index.html">Settings</a>`;
		if (footer) footer.appendChild(msg);
	}
	loadB();
});