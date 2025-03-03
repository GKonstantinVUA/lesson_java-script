// * Задача #2. Умови

//$ Змінити цей масив так, що на ціни товарів, які більші за 1000 грн
//$ задати зі знижкою 30%

if (confirm('Почати тестування?')) {
	const arrayPricesWithGoods = [
		3094, 2904, 937, 3514, 946, 1267, 589, 2093, 401, 775, 3272, 963, 2891, 1672, 695,
	];
	function getChangeGoodsPrice(parameterGroupData) {
		return parameterGroupData.map(itemCuurent => itemCuurent > 1000 ? (itemCuurent * 0.3).toFixed(2) : itemCuurent).join(', ')
	}
	const userEnterParameter = getChangeGoodsPrice(arrayPricesWithGoods);

	document.write(`<div class="result__box-data"><div class="result__name-value"> Вхідні дані: <span class="result__answer-value"> ${arrayPricesWithGoods}</span></div><div class="result__name-value"> Результат: <span class="result__answer-value"> ${userEnterParameter}</span></div></div>`);
}
