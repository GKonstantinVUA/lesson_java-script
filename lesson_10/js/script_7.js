// * Задача #6. Умови

//$ Підрахувати кількість цін, що більше за 1000
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
	
		function getTotalNumbPricesMore1000(paramDataForAnalysis) {
		const pricesAnalysis = paramDataForAnalysis.reduce(
			(prevBlockData, currentAnalysisValue) =>
				currentAnalysisValue > 1000 ? prevBlockData + 1 : prevBlockData,
			0
		);

		return pricesAnalysis;
	}
	const callFuncTotalNumbPricesMore1000 = getTotalNumbPricesMore1000(arrayStasticsData);
	document.write(`<div class="result__box-data">
		<div class="result__name-value">Результат:
		<div class="result__answer-value">${callFuncTotalNumbPricesMore1000}</div></div><div>`);
}