/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2024.08.26 - 2025.01.22 */

window.addEventListener('load', () => {
	let pageFindSearch = new PagefindUI({
		element: '#pageFindSearch',
		showSubResults: false,
		showImages: false,
		translations: {
			placeholder: 'Type here to search'
		}
	});
	let paths = location.pathname.split('/');
	let q = `${paths[paths.length - 1]}${paths[paths.length - 2] ? ' ' + paths[paths.length - 2] : ''}`.replaceAll('index.html', '').trim();
	document.getElementById('heading').innerText = `Searching for '${q}'...`;
	pageFindSearch.triggerSearch(q);
});