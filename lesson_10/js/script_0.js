// * Задача #0. Умови

//$ Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

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
		</div></div></div>`);
	
	function getMoreValues1000(paramStasticsData) {
		const newArrayConditionOne = paramStasticsData.filter((currentItem) => currentItem > 1000)
		return newArrayConditionOne
	}
	const callFunctionValuesMore1000 = getMoreValues1000(arrayStasticsData);
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value">Результат:
		<div class="result__answer-value">${callFunctionValuesMore1000}
		</div></div><div>`)
}