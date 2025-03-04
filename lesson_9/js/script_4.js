// * Задача #4. Умови

//$ Податок складає 20%
//$ Сформувати масив, який буде містити величину сплаченого податку у грн

if (confirm('Почати тестування?')) {
	const arraySetDataPrices = [7249, 8, 7511, 1507, 157, 6376, 4304, 45];
	function getPaidTaxes(paramForAnalisis) {
		const arraNewData = paramForAnalisis.map(currentElement => currentElement*0.2)
		return arraNewData.join(', ')
	}
	let enterDataPrices = getPaidTaxes(arraySetDataPrices);
	document.write(`<div class="result__box-data"><div class="result__name-value"> Вхідні дані: <span class="result__answer-value">${arraySetDataPrices.join(', ')}</span></div><div class="result__name-value"> Величини сплачених податків (грн): <span class="result__answer-value"> ${enterDataPrices}</span></div></div>`)
}