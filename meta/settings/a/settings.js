/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 */

let siteSettings;

window.addEventListener('load', () => {
	let loadSettings = () => {
		let toggleAnalyticsButton = document.getElementById('toggleAnalytics');
		if (localStorage.getItem('enableAnalytics') === 'true') {
			toggleAnalyticsButton.innerHTML = 'Disable Microsoft Clarity for Analytics';
		} else {
			toggleAnalyticsButton.innerHTML = 'Enable Microsoft Clarity for Analytics';
		}
	}
	siteSettings = {
		toggleAnalytics: () => {
			let toggleAnalyticsButton = document.getElementById('toggleAnalytics');
			if (localStorage.getItem('enableAnalytics') === 'true') {
				localStorage.setItem('enableAnalytics', 'false');
				toggleAnalyticsButton.innerHTML = 'Enable Microsoft Clarity for Analytics';
			} else {
				localStorage.setItem('enableAnalytics', 'true');
				toggleAnalyticsButton.innerHTML = 'Disable Microsoft Clarity for Analytics';
			}
			location.reload();
		}
	}
	loadSettings();
});