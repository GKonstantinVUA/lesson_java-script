// * Задача #4. Умови

//$ Підрахувати кількість змін цін
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

		function getChangesNumberPrices(paramValueAnalysis) {
		const totelCountChanges = paramValueAnalysis.reduce((prevCountData, valueCurrent, idValue, arrayReferences) => idValue > 0 && arrayReferences[idValue] !== arrayReferences[idValue - 1] ? prevCountData + 1 : prevCountData,0);
		return totelCountChanges;
	}
	const callFunctionChangePrice = getChangesNumberPrices(arrayStasticsData)
	document.write(`
		<div class="result__box-data">
	<div class="result__name-value"> Результат:
	<div class="result__answer-value">
		${callFunctionChangePrice}
		</div></div></div>`)

}