// * Задача #3. Умови

//$ Дано послідовність цін товарів та назв (у окремих масивах)
//$ Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається)
//$ Приклад збереження даних let productsPrices = [1000, 20, 31] let productsTitles = ['cheese', 'juice', 'bread']

if (confirm('Почати тестування?')) {
	let productsPrices = [1000, 20, 31];
	let productsTitles = ['cheese', 'juice', 'bread'];
	
	function getPriceGoodsBuy(productPriceParameter, productNameParameter, parametrTotalMoney) {
		let listProductsDisplay = [];
		
		for (let stepDataProducts = 0; stepDataProducts < productPriceParameter.length; stepDataProducts++) {
			if (productPriceParameter[stepDataProducts] <= parametrTotalMoney) {
				listProductsDisplay.push(
					`${productNameParameter[stepDataProducts]} - ${productPriceParameter[stepDataProducts]}`
				);
				document.write(
					`<div class="result__box-data"><div class="result__name-value"> Назва товару: <span class="result__answer-value"> ${productNameParameter[stepDataProducts]} - ${productPriceParameter[stepDataProducts]}</span></div></div>`
				);
			}
		}
		if (listProductsDisplay.length === 0) {
			document.write('<div class="result__box-data"><div class="result__name-value"> Повідомлення: <span class="result__answer-value">У вас недостатньо коштів на покупки будь-якого товару</span></div></div>');
	}
	return listProductsDisplay;
}
const userEnterTotalMoney = parseFloat(prompt('Поле для введення', 'Введіть загальну суму'));
let displayResultProductsList = getPriceGoodsBuy(productsPrices, productsTitles, userEnterTotalMoney);
}
