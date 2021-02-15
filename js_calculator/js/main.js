var arr = document.getElementsByTagName('select');

for (let i = 0; i < arr.length; i++) {
	const select = arr[i];

	for (let j = 2; j <= 30; j += 2) {
		var el = document.createElement('option');
		el.textContent = j;
		el.value = j;
		select.appendChild(el);
	}

}

document.getElementById('submit').addEventListener('click', function (e) {
	e.preventDefault();

	let w = document.getElementById('select_width');
	let h = document.getElementById('select_length');

	let square = w.value * h.value;

	let piecesTotal  = square / 4;
	let packsOf8 = Math.ceil(piecesTotal  / 8);
	let pсsIn8Packs  = packsOf8 * 8;
	
	let counter8 = packsOf8;
	let counter6 = 0;
	
	for (let i = 0; i < packsOf8; i++) {
		if (pсsIn8Packs  > piecesTotal ) {
			pсsIn8Packs  -= 2;
			counter8--;
			counter6++;
			if (pсsIn8Packs  == piecesTotal ) break;
		} else if (pсsIn8Packs  == piecesTotal ) {
			break;
		} else if (pсsIn8Packs  < piecesTotal ) {
			counter8++;
			counter6--;
			break;
		}
	}
	console.log(`You will need ${counter6} packs of 6pcs, ${counter8} packs of 8pcs`);
});