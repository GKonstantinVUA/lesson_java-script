// * Задача #5. Умови

//$ Визначити, чи є ціна, що менше 1000 грн
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
	
		function getOnePriceLessThousand(paramForAnalysis) {
		const resultProcessingData = paramForAnalysis.some(((currentItem)=>currentItem<1000))?'Присутня ціна яка менше за 1 000 грн':'Відсутня ціна яка менше за 1 000 грн';

		return resultProcessingData
	}
	const callFuncPriceLessThousand = getOnePriceLessThousand(arrayStasticsData);
	document.write(`<div class="result__box-data">
		<div class="result__name-value">Результат:
		<div class="result__answer-value">${callFuncPriceLessThousand}</div></div><div>`)
	
}
