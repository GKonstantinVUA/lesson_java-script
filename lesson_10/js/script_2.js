// * Задача #2. Умови

//$ Сформувати список з тих цін, які більші за попереднє значення
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


	function getValuesLargerPrevious(paramForAnalysisArray) {
		const resultArray = paramForAnalysisArray.filter(
			(itemTest, indexItem, arrayRefer) => indexItem > 0 && itemTest > arrayRefer[indexItem - 1]
		)
		return resultArray
	}

	const callFunctValuesLargerPrevious = getValuesLargerPrevious(arrayStasticsData);
		document.write(`
	<div class="result__box-data">
	<div class="result__name-value">Результат:
	<div class="result__answer-value">${callFunctValuesLargerPrevious}
	</div></div></div>`);
}