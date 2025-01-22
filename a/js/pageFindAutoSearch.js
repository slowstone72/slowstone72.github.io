/* Copyright (©) 2024-2025 Callum Fisher - cf.fisher.bham@gmail.com
2024.08.26 - 2025.01.22 */

window.addEventListener('load', () => {
	let dirs = {
		'/epicos': '/tech/20250113-epicos/index.html',
		'/namesaver': '/tech/20250114-name-saver-for-multiplayer-piano'
	}
	// if (Object.keys(dirs).includes(window.location.pathname)) {
		document.getElementById('heading').innerText = 'Redirecting...';
		let p = document.createElement('p');
		p.innerHTML = `<a href="${dirs[window.location.pathname]}">Click here if you aren't redirected automatically</a>`;
		document.getElementById('box').appendChild(p);
		let pf = document.getElementById('pf');
		if (pf) pf.parentNode.removeChild(pf);
		setTimeout(window.location.replace, 2000, dirs[window.location.pathname])
		return;
	// }
	let pageFindSearch = new PagefindUI({
		element: '#pageFindSearch',
		showSubResults: false,
		showImages: false,
		translations: {
			placeholder: 'Type here to search'
		}
	});
	let paths = location.pathname.split('/');
	let q = `${paths[paths.length - 1]}${paths[paths.length - 2] ? ' ' + paths[paths.length - 2] : ''}`.replaceAll('index.html', '').replaceAll('%20', '').trim();
	document.getElementById('heading').innerText = `Searching for '${q}'...`;
	pageFindSearch.triggerSearch(q);
});