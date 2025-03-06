// * Задача #1. Умови

//$ Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
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

	
	function getBuildArrayBasedIndex(paramForAnalysis) {
		const newArrayConditionTwo = paramForAnalysis
		.map((currentItem, indexItem) => (currentItem > 1000 ? indexItem : -1))
		.filter((sampleIndexes) => sampleIndexes !== -1);
		return newArrayConditionTwo
	}
	const callFunctBasedIndex = getBuildArrayBasedIndex(arrayStasticsData);
		document.write(`
	<div class="result__box-data">
	<div class="result__name-value"> Результат:
	<div class="result__answer-value">${callFunctBasedIndex}
	</div></div><div>`);
}
