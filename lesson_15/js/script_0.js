// * Задача #0. Умови

//$ Дано два об’єкта.
//$ Обидва містять масив цілих чисел
//$ При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням
//$ Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

if (confirm('Почати тестування?')) {
	const objectValuesOne = {
		arrayDataValues: [64, 43, 6, 67, 10, 99, 93, 70, 88, 87, 14, 33],
	
		sumDataValues: function() {
			return this.arrayDataValues.reduce((prevResData, currentValue) => currentValue + prevResData,0);
		},
	};
	
	const objectValuesTwo = {
		arrayDataValues: [27, 18, 76, 20, 74, 79, 61, 1, 45, 36, 10, 99],
	
		productDataValues: function(paramMinValue, paramMaxValue) {
			return this.arrayDataValues.reduce((prevResProduct, currentValueFunc) => currentValueFunc >= paramMinValue && currentValueFunc <= paramMaxValue ? prevResProduct * currentValueFunc : prevResProduct, 1)
		}
	}
	
	document.write(`<div class="result__box-data">
			<div class="result__name-value">Результат суми для об'єкта #1: <span class="result__answer-value">${objectValuesOne.sumDataValues()}</span></div>`);
	document.write(`<div class="result__name-value">Результат добутку для об'єкта #1: <span class="result__answer-value">${objectValuesTwo.productDataValues.apply(objectValuesOne, [3, 45])}</span></div>`);
	document.write(`<div class="result__name-value">Результат суми для об'єкта #2: <span class="result__answer-value">${objectValuesOne.sumDataValues.call(objectValuesTwo)}</span></div>`)
	document.write(`<div class="result__name-value">Результат добутку для об'єкта #2: <span class="result__answer-value">${objectValuesTwo.productDataValues(5, 38)}</span></div></div>`);
	
}

