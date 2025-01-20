/* Copyright (©) 2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 - 2025.01.20 */

window.addEventListener('load', () => {
	if (window.location.toString().includes('/meta/privacy') || window.location.toString().includes('/meta/settings')) return;
	let load = () => {
		if (typeof localStorage.enableAnalytics === 'undefined') localStorage.setItem('enableAnalytics', 'true');
		if (localStorage.getItem('enableAnalytics') === 'true') {
			(function(c, l, a, r, i, t, y) { // Microsoft Clarity for stats:
				c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments) };
				t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
				y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
			})(window, document, 'clarity', 'script', 'pvf9bh18n4');
			let footer = document.querySelector('footer');
			if (!footer) return;
			let privacy = '/meta/privacy/index.html';
			let statNotice = document.createElement('p'); 
			statNotice.innerHTML = `This page uses <a target="_blank" href="https://clarity.microsoft.com/">Microsoft Clarity</a> for analytics.<br>For more information, please refer to the <a href="${privacy}">privacy page</a>.`;
			footer.appendChild(statNotice);
		} else {
			let footer = document.querySelector('footer');
			if (!footer) return;
			let privacy = '/meta/privacy/index.html';
			let statNotice = document.createElement('p'); 
			statNotice.innerHTML = `<a href="${privacy}">Privacy Policy</a>`;
			footer.appendChild(statNotice);
		} // Google AdSense:
		/* if (typeof localStorage.enableAds === 'undefined') localStorage.setItem('enableAds', 'true');
		if (localStorage.enableAds !== 'true' || window.location.toString().includes('/writing/')) return;
		let googleAds = document.createElement('script');
		googleAds.async = true;
		googleAds.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2986674631207548';
		googleAds.crossOrigin = 'anonymous';
		document.head.appendChild(googleAds); */
		/* Disqus Comments: */ if (!window.location.pathname.includes('/tech/')) return;
		var disqus_config = function () {
			let baseUrl = window.location.origin;
			if (!baseUrl) return;
			let normalizedPath = window.location.pathname;
			if (!/\.[a-zA-Z0-9]+$/.test(normalizedPath)) normalizedPath = normalizedPath.replace(/\/$/, '') + '.html';
			this.page.url = baseUrl + normalizedPath;
		}
		// Define Disqus configuration variables
		baseUrl + normalizedPath; // Ensure unique URL
		let disqusContainer = document.createElement('div');
		disqusContainer.className = 'box';
		disqusContainer.id = 'disqus_thread';
		let script = document.createElement('script');
		script.src = 'https://callumfisher.disqus.com/embed.js';
		script.setAttribute('data-timestamp', + new Date());
		disqusContainer.appendChild(script);
		let mainDiv = document.querySelector('main');
		if (mainDiv) mainDiv.appendChild(disqusContainer);
	}
	if (typeof localStorage.cookiesAccepted !== 'undefined' && localStorage.cookiesAccepted === 'true') {
		load();
	} else if (typeof localStorage.cookiesAccepted === 'undefined') {
		let banner = document.createElement('div');
		banner.classList.add('cookieBanner');
		let message = document.createElement('p');
		message.innerHTML = 'This site uses cookies to provide personalized advertisements and analyze site usage. Additionally, <a href="https://disqus.com/">Disqus</a> is used to provide comments on some pages and may use cookies. For more information, see the <a target="_blank" href="/meta/privacy/index.html">privacy page</a>.';
		banner.appendChild(message);
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
		mby.addEventListener('click', () => {
			window.location.href = '/meta/settings/index.html';
		});
		banner.appendChild(yes);
		banner.appendChild(no);
		banner.appendChild(mby);
		document.body.appendChild(banner);
	}
});