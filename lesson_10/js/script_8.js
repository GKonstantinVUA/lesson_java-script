// * Задача #6. Умови

//$ Підрахувати суму цін, що більше за 1000
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
	
		function getTotalSumPricesMore1000(paramArrayDataAnalysis) {
		const pricesForAnalysis = paramArrayDataAnalysis.reduce((prevArrayData, currenItemPrices) =>
			currenItemPrices > 1000 ? prevArrayData + currenItemPrices :prevArrayData, 0
		)
	
		return pricesForAnalysis;
	}
	const callFunctTotalSumPrices = getTotalSumPricesMore1000(arrayStasticsData);
	document.write(`<div class="result__box-data">
		<div class="result__name-value">Результат:
		<div class="result__answer-value">${callFunctTotalSumPrices} грн</div></div><div>`);
	
}