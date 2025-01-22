/* Copyright (©) 2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 - 2025.01.22 */

let siteSettings;

window.addEventListener('load', () => {
	let load = () => {
		// Analytics:
		let toggleAnalytics = document.getElementById('toggleAnalytics');
		if (toggleAnalytics) {
			if (localStorage.getItem('enableAnalytics') === 'true') {
				toggleAnalytics.innerText = 'Disable Microsoft Clarity for Analytics';
			} else {
				toggleAnalytics.innerText = 'Enable Microsoft Clarity for Analytics';
			}
		}
		// Ads:
		let toggleAds = document.getElementById('toggleAds');
		if (toggleAds) {
			if (localStorage.getItem('enableAds') === 'true') {
				toggleAds.innerText = 'Disable Google AdSense for Advertising';
			} else {
				toggleAds.innerText = 'Enable Google AdSense for Advertising';
			}
		}
		// Comments:
		let toggleCmts = document.getElementById('toggleCmts');
		if (toggleCmts) {
			if (localStorage.getItem('enableCmts') === 'true') {
				toggleCmts.innerText = 'Disable Giscus for Comments';
			} else {
				toggleCmts.innerText = 'Enable Giscus for Comments';
			}
		}
		// Cookies:
		let toggleCookies = document.getElementById('toggleCookies');
		if (toggleCookies) {
			if (localStorage.getItem('cookiesAccepted') === 'true') {
				toggleCookies.innerText = 'Revoke cookie permission';
			} else {
				toggleCookies.innerText = 'Grant cookie permission';
			}
		}
		if (localStorage.getItem('cookiesAccepted') !== 'true') {
			if (toggleAnalytics) toggleAnalytics.classList.add('inactive');
			if (toggleAds) toggleAds.classList.add('inactive');
			// if (toggleCmts) toggleCmts.classList.add('inactive');
		}
	}
	siteSettings = {
		toggleAnalytics: () => {
			if (localStorage.getItem('cookiesAccepted') !== 'true') return;
			let btn = document.getElementById('toggleAnalytics');
			if (localStorage.getItem('enableAnalytics') === 'true') {
				localStorage.setItem('enableAnalytics', 'false');
				btn.innerText = 'Enable Microsoft Clarity for Analytics';
			} else {
				localStorage.setItem('enableAnalytics', 'true');
				btn.innerText = 'Disable Microsoft Clarity for Analytics';
			}
			location.reload();
		},
		toggleAds: () => {
			if (localStorage.getItem('cookiesAccepted') !== 'true') return;
			let btn = document.getElementById('toggleAds');
			if (localStorage.getItem('enableAds') === 'true') {
				localStorage.setItem('enableAds', 'false');
				btn.innerText = 'Enable Google AdSense for Advertising';
			} else {
				localStorage.setItem('enableAds', 'true');
				btn.innerText = 'Disable Google AdSense for Advertising';
			}
			location.reload();
		},
		toggleCmts: () => {
			// if (localStorage.getItem('cookiesAccepted') !== 'true') return;
			let btn = document.getElementById('toggleCmts');
			if (localStorage.getItem('enableCmts') === 'true') {
				localStorage.setItem('enableCmts', 'false');
				btn.innerText = 'Enable Giscus for Comments';
			} else {
				localStorage.setItem('enableCmts', 'true');
				btn.innerText = 'Disable Giscus for Comments';
			}
			location.reload();
		},
		toggleCookies: () => {
			let btn = document.getElementById('toggleCookies');
			if (localStorage.getItem('cookiesAccepted') === 'true') {
				localStorage.setItem('cookiesAccepted', 'false');
				btn.innerText = 'Revoke cookie permission';
			} else {
				localStorage.setItem('cookiesAccepted', 'true');
				btn.innerText = 'Grant cookie permission';
			}
			location.reload();
		}
	}
	load();
});