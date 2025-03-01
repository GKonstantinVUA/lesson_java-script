// * Задача #4. Умови

//* Задача 9. Дано покази температур (довільна кількість).
//* Розробити функцію, яка дозволить підрахувати кількість від'ємних показів температури.

if (confirm('Почати тестування?')) {
	function getTemperatureIndicators (valueNumbs) {
		let calcNegativeInd = 0
		for (let periodValue = 1; periodValue <=valueNumbs ; periodValue++) {
			let numberIndicators = (-65 + Math.floor(Math.random() * (131)));
			if (numberIndicators<0) calcNegativeInd++
		}
		return calcNegativeInd
	
	}
		
	let userEnterValue = parseInt(prompt('Поле для введення', 'Введіть загальну кількість показників температури для звіту'))
	let displayResFunct = getTemperatureIndicators(userEnterValue);
	document.write(`<div class="result__box-data"><div class="result__name-value">Всього від'ємних показів температури: <span class="result__answer-value">${displayResFunct} одн.</span></div></div>`)
}