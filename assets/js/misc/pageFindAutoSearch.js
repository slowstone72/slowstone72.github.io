/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
pageFindAutoSearch.js - Automatically triggers a Pagefind (https://pagefind.app/) search for the URL path content.
2024.08.26 - 2025.01.13 */

window.addEventListener('load', () => {
	let pageFindSearch = new PagefindUI({
		element: '#pageFindSearch',
		showSubResults: true,
		showImages: false,
		translations: {
			placeholder: 'Type here to search'
		}
	});
	let paths = location.pathname.split('/');
	pageFindSearch.triggerSearch((`${paths[paths.length - 1]}${paths[paths.length - 2] ? ' ' + paths[paths.length - 2] : ''}`).replaceAll('index.html', '').trim());
});