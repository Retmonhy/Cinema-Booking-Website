const schemeSvg = document.querySelector('.scheme-svg');
schemeSvg.addEventListener('click', (event) => {
	let checkBooked = event.target.closest('.qwerty').classList.contains('booked');
	let checkLegend = event.target.closest('.qwerty').classList.contains('legend');
	if (!checkBooked && !checkLegend) {
	event.target.closest('.qwerty').classList.toggle('active');
	}

	let numSelectedPlaces = document.querySelectorAll('.active').length;
	let totalValue = calcPrice(numSelectedPlaces);
	let priceTotalTag = document.querySelector('.price-total', '.price-summ');

	priceTotalTag.textContent = totalValue;

});

function calcPrice(counter) {
	let pricePerSeat = 400;
	let totalSum;
	totalSum = counter * pricePerSeat;
	return totalSum;
}



