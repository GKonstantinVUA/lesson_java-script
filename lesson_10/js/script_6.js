// * Задача #6. Умови

//$ Визначати, чи усі ціни більше за 1000

if (confirm('Почати тестування?')) {
	function getStatisticsSecurities(dataNumbers = 20, minValue = 1, maxValue = 10000) {
		let arrayRandomValue = [];
		for (let stepValue = 0; stepValue < dataNumbers; stepValue++) {
			arrayRandomValue.push(minValue + Math.floor(Math.random() * maxValue));
		}
		return arrayRandomValue;
	}
	
	const arrayStasticsData = getStatisticsSecurities();
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"> Вхідні дані по цінних паперах:
		<div class="result__answer-value">${arrayStasticsData}
		</div></div></div>
		`);
	
		function getAllPricesMore1000(parramArrayForAnalysis) {
		const arrayAnalysisAllPricesMore1000 = parramArrayForAnalysis.every(
			(currentItem) => currentItem > 1000
		)
			? 'Усі ціни більші 1000 грн'
			: 'Не всі ціни більше за 1000грн';

		return arrayAnalysisAllPricesMore1000;
	}
	const callFuncAllPricesMore1000 = getAllPricesMore1000(arrayStasticsData);
	document.write(`<div class="result__box-data">
		<div class="result__name-value">Результат:
		<div class="result__answer-value"> ${callFuncAllPricesMore1000}</div></div><div>`);
}