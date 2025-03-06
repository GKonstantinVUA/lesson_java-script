// * Задача #3. Умови

//$ Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
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

	function getValueMaxPrice(arrayStasticsData) {
		const maxValueForCurrentArray = arrayStasticsData.reduce((prevValue, priceCurrentValue) =>
			priceCurrentValue > prevValue ? priceCurrentValue : prevValue
		);
		return maxValueForCurrentArray;
	}
		
	function getBuildArrayPercent(parameterMaxValue, arrayStasticsData) {
		const dataSetPercentage = arrayStasticsData.map((priceParam) => ((priceParam * 100) / parameterMaxValue).toFixed(2))
		return dataSetPercentage
	}
	const userCallFunctionPercentage = getBuildArrayPercent(getValueMaxPrice(arrayStasticsData), arrayStasticsData)
	document.write(`<div class="result__box-data">
	<div class="result__name-value"> Результат:
	<div class="result__answer-value"> ${userCallFunctionPercentage}</div></div></div>`)
}
