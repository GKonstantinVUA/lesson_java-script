// * Задача #6. Умови

//$ Знайти індекс першої ціни, що більше за 1000

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
	
		function getFirstIndexPriceFromArrayMore1000(paramArrayData) {
		const calculationIndicator = paramArrayData.findIndex((itemCurrent)=>itemCurrent>1000)
	
		return calculationIndicator
	}
	const callFunctionFirstPriceFromArrayMore1000 = getFirstIndexPriceFromArrayMore1000(arrayStasticsData);
		document.write(`<div class="result__box-data">
		<div class="result__name-value">Результат:
		<div class="result__answer-value">${callFunctionFirstPriceFromArrayMore1000}</div></div><div>`)
}