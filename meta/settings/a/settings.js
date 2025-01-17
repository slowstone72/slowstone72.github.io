/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 */

let siteSettings;

window.addEventListener('load', () => {
	let loadSettings = () => {
		let toggleAnalyticsButton = document.getElementById('toggleAnalytics');
		if (localStorage.getItem('enableTracking') === 'true') {
			toggleAnalyticsButton.innerHTML = toggleAnalyticsButton.innerHTML.replace(/Enable/g, 'Disable');
		} else {
			toggleAnalyticsButton.innerHTML = toggleAnalyticsButton.innerHTML.replace(/Disable/g, 'Enable');
		}
	}
	siteSettings = {
		toggleAnalytics: () => {
			let toggleAnalyticsButton = document.getElementById('toggleAnalytics');
			if (localStorage.getItem('enableTracking') === 'true') {
				localStorage.setItem('enableTracking', 'false');
				toggleAnalyticsButton.innerHTML = toggleAnalyticsButton.innerHTML.replace(/Disable/g, 'Enable');
			} else {
				localStorage.setItem('enableTracking', 'true');
				toggleAnalyticsButton.innerHTML = toggleAnalyticsButton.innerHTML.replace(/Enable/g, 'Disable');
			}
			location.reload();
		}
	}
	loadSettings();
});