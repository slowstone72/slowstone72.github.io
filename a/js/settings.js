/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2025.01.17 */

let siteSettings;

window.addEventListener('load', () => {
	let loadSettings = () => {
		let toggleTrackingButton = document.getElementById('toggleTracking');
		if (localStorage.getItem('enableTracking') === 'true') {
			toggleTrackingButton.innerHTML = toggleTrackingButton.innerHTML.replace(/Enable/g, 'Disable');
		} else {
			toggleTrackingButton.innerHTML = toggleTrackingButton.innerHTML.replace(/Disable/g, 'Enable');
		}
	}
	siteSettings = {
		toggleTracking: () => {
			let toggleTrackingButton = document.getElementById('toggleTracking');
			if (localStorage.getItem('enableTracking') === 'true') {
				localStorage.setItem('enableTracking', 'false');
				toggleTrackingButton.innerHTML = toggleTrackingButton.innerHTML.replace(/Disable/g, 'Enable');
			} else {
				localStorage.setItem('enableTracking', 'true');
				toggleTrackingButton.innerHTML = toggleTrackingButton.innerHTML.replace(/Enable/g, 'Disable');
			}
			location.reload();
		}
	}
	loadSettings();
});