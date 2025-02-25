// * Задача #1. Умови

//$ Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів
//$ кількість парних, кількість додатних, кількість більших за 100

if (confirm('Почати тестування коду?')) {
	function getAnalizeNumbers(numOne, numTwo, numThree) {
		let pairedNumbers = 0;
		if (numOne % 2 === 0) pairedNumbers++
		if (numTwo % 2 === 0 ) pairedNumbers++
		if (numThree % 2 === 0) pairedNumbers++

		let actualNumbers = 0;
		if (numOne > 0) actualNumbers++
		if (numTwo > 0 ) actualNumbers++
		if (numThree > 0) actualNumbers++

		let moreHundred = 0;
		if (numOne > 100) moreHundred++
		if (numTwo > 100) moreHundred++
		if (numThree > 100) moreHundred++

		return {pairedNumbers, actualNumbers, moreHundred}
	}

	let groupNumbers = getAnalizeNumbers(2, 3, 109)
	let resParied = groupNumbers.pairedNumbers
	let resActual = groupNumbers.actualNumbers
	let resMoreHundred = groupNumbers.moreHundred

	document.write(`<div class="result__box-data"><div class="result__name-value">Кількість парних чисел: <span class="result__answer-value">${resParied}</span></div> <div class="result__name-value">Кількість додатних чисел: <span class="result__answer-value">${resActual}</span></div> <div class="result__name-value">Кількість чисел які більше за 100: <span class="result__answer-value">${resMoreHundred}</span></div></div>`)
}

