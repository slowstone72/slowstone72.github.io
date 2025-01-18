/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 */

let siteSettings;

window.addEventListener('load', () => {
	let loadSettings = () => {
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
		}
	}
	siteSettings = {
		toggleAnalytics: () => {
			if (localStorage.getItem('cookiesAccepted') !== 'true') return;
			let toggleAnalyticsButton = document.getElementById('toggleAnalytics');
			if (localStorage.getItem('enableAnalytics') === 'true') {
				localStorage.setItem('enableAnalytics', 'false');
				toggleAnalyticsButton.innerText = 'Enable Microsoft Clarity for Analytics';
			} else {
				localStorage.setItem('enableAnalytics', 'true');
				toggleAnalyticsButton.innerText = 'Disable Microsoft Clarity for Analytics';
			}
			location.reload();
		},
		toggleAds: () => {
			if (localStorage.getItem('cookiesAccepted') !== 'true') return;
			let toggleAds = document.getElementById('toggleAds');
			if (localStorage.getItem('enableAds') === 'true') {
				localStorage.setItem('enableAds', 'false');
				toggleAds.innerText = 'Enable Google AdSense for Advertising';
			} else {
				localStorage.setItem('enableAds', 'true');
				toggleAds.innerText = 'Disable Google AdSense for Advertising';
			}
			location.reload();
		},
		toggleCookies: () => {
			let toggleCookies = document.getElementById('toggleCookies');
			if (localStorage.getItem('cookiesAccepted') === 'true') {
				localStorage.setItem('cookiesAccepted', 'false');
				toggleCookies.innerText = 'Revoke cookie permission';
			} else {
				localStorage.setItem('cookiesAccepted', 'true');
				toggleCookies.innerText = 'Grant cookie permission';
			}
			location.reload();
		}
	}
	loadSettings();
});