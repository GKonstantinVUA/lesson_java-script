// * Задача #1. Умови

//$ З клавіатури вводиться ціна товару і кількість грошей.
//$ Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

//* 1. Вводимо необхідні дані
let productPrice = parseFloat(prompt('Ціна товару (грн.)', 'Введіть ціну товару'))
let amountMooney = parseFloat(prompt("Кількість грошей (грн.)", "Введіть кількість грошей"))
let costLotteryTicket = 4
let resultMoney

//* 2. Знаходимо результат
if (productPrice > amountMooney)
	resultMoney = (`<div class="result"><div class="result__name-value"><span class="result__numerical-value">
			У Вас недостатньо грошей для здійснення покупки товару</span>
			</div>`)
else {
	resultMoney = (`<div class="result"><div class="result__name-value"><span class="result__numerical-value">Ви можете здійснити покупку товару</span>
	</div>`)

	if (amountMooney - costLotteryTicket >= productPrice)
		resultMoney = (`<div class="result"><div class="result__name-value"><span class="result__numerical-value">З покупкою товару пропонуємо додатково придбати лотерейний білет</span></div>`)
}

//* 3. Виводимо результат
document.write(
	`
	<div class="result">
	<div class="result__content-body">

		<div class="result__box-data">
			<h3 class="result__table-caption">Вхідні дані</h3>

			<div class="result__name-value">
				Ціна товару (грн.):
				<span class="result__numerical-value">
					${productPrice}
				</span>
			</div>

			<div class="result__name-value">
				Кількість грошей (грн.):
				<span class="result__numerical-value">
					${amountMooney}
				</span>
			</div>
		</div>

		<div class="result__box-data">
			<h3 class="result__table-caption">Результати обчислення</h3>
				<div class="result__name-value">
				<span class="result__numerical-value">
					${resultMoney}
				</span>
			</div>
		</div>
	</div>
</div>
	`
	);
	
