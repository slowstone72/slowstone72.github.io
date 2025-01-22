/* Copyright (©) 2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 - 2025.01.20 */

var disqus_config;

window.addEventListener('load', () => {
	if (window.location.pathname.startsWith('/writing') || window.location.pathname.startsWith('/meta/privacy') || window.location.pathname.startsWith('/meta/settings')) return;
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
			notice.innerHTML = `This page uses <a target="_blank" href="https://clarity.microsoft.com/">Microsoft Clarity</a> for analytics.<br>For more information, please refer to the <a href="/meta/privacy/index.html">privacy page</a>.`;
			footer.appendChild(notice);
		} else if (footer) {
			let notice = document.createElement('p'); 
			notice.innerHTML = `<a href="/meta/privacy/index.html">Privacy Policy</a>`;
			footer.appendChild(notice);
		} // Google AdSense:
		/* if (typeof localStorage.enableAds === 'undefined') localStorage.setItem('enableAds', 'true');
		if (localStorage.enableAds === 'true' && !window.location.pathname.startsWith('/writing')) {
			let googleAds = document.createElement('script');
			googleAds.async = true;
			googleAds.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2986674631207548';
			googleAds.crossOrigin = 'anonymous';
			document.head.appendChild(googleAds);
		} Disqus Comments: */
		if (typeof localStorage.enableCmts === 'undefined') localStorage.setItem('enableCmts', 'true');
		if (localStorage.enableCmts === 'true' && window.location.pathname.startsWith('/tech')) {
			/* let canonical = document.querySelector('link[rel="canonical"]');
			if (!canonical) {
				canonical = document.createElement('link');
				canonical.setAttribute('rel', 'canonical');
				document.head.appendChild(canonical);
			}
			canonical.setAttribute('href', window.location.href.replace(/\/index\.html$/, '/').replace(/\/$/, '/'));
			let path = document.location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '/');
			if (!path.endsWith('/')) path += '/';
			console.log('Disqus URL:', document.location.origin + path);
			console.log('Disqus Identifier:', path);
			console.log('Disqus Title:', document.title);
			disqus_config = function () {
				this.page.url = document.location.origin + path;
				this.page.identifier = path;
				this.page.title = document.title;
			}		
			let div = document.createElement('div');
			div.className = 'box';
			div.id = 'disqus_thread';
			let script = document.createElement('script');
			script.src = 'https://callumfisher.disqus.com/embed.js';
			script.setAttribute('data-timestamp', + new Date());
			div.appendChild(script);
			let main = document.querySelector('main');
			if (main) main.appendChild(div); */
			let div = document.createElement('div');
			div.className = 'box';
			div.id = 'giscus_thread';
			let script = document.createElement('script');
			script.src = 'https://giscus.app/client.js';
			script.setAttribute('data-repo', 'cffisher/cffisher.github.io');
			script.setAttribute('data-repo-id', 'R_kgDONpbyMA');
			script.setAttribute('data-category', 'Announcements'); 
			script.setAttribute('data-category-id', 'DIC_kwDONpbyMM4CmQSu');
			script.setAttribute('data-mapping', 'url'); // title/url
			script.setAttribute('data-strict', '1');
			script.setAttribute('data-reactions-enabled', '1');
			script.setAttribute('data-emit-metadata', '0');
			script.setAttribute('data-input-position', 'top');
			script.setAttribute('data-theme', 'preferred_color_scheme');
			script.setAttribute('data-lang', 'en');
			script.setAttribute('data-loading', 'lazy');
			script.setAttribute('crossorigin', 'anonymous');
			script.setAttribute('async', '');
			div.appendChild(script);
			let main = document.querySelector('main');
			if (main) main.appendChild(div);
		}
	}
	if (typeof localStorage.cookiesAccepted !== 'undefined' && localStorage.cookiesAccepted === 'true') {
		load();
	} else if (typeof localStorage.cookiesAccepted === 'undefined') {
		let banner = document.createElement('div');
		banner.classList.add('cookieBanner');
		let msg = document.createElement('p');
		msg.innerHTML = 'This site uses cookies to provide personalized advertisements and analyze site usage. Additionally, <a href="https://disqus.com/">Disqus</a> is used to provide comments on some pages and may use cookies. For more information, see the <a target="_blank" href="/meta/privacy/index.html">privacy page</a>.';
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
		mby.addEventListener('click', () => {
			window.location.href = '/meta/settings/index.html';
		});
		banner.appendChild(yes);
		banner.appendChild(no);
		banner.appendChild(mby);
		document.body.appendChild(banner);
	} else {
		let footer = document.querySelector('footer');
		let msg = document.createElement('p'); 
		msg.innerHTML = `<a href="/meta/settings/index.html">Settings</a>`;
		if (footer) footer.appendChild(msg);
	}
});