// * Задача #3. Умови

//$ Дано рік народження (дата: 1 січня) та поточний рік.
//$ Знайти кількість років.

//* 1. Вводимо необхідні дані
let amountGoods = parseFloat(prompt("Кількість одиниці товару (одн./кг)", "Введіть кількість товару"));
let costUnitGoods = parseFloat(prompt("Вартість одиниці товару (грн.)", "Введіть вартість товару"));
const VALUE_VAT = 5;

//* 2. Знаходимо результат
let totalCost = (amountGoods * costUnitGoods).toFixed(2);
let vatTotalCost = ((totalCost * VALUE_VAT / 100).toFixed(2));

//* 3. Виводимо результат
document.write(`
		<div class="result">
	<div class="result__content-body">
			<div class="result__box-data">
				<h3 class="result__table-caption">Вхідні дані</h3>
				<div class="result__name-value">Кількість одиниці товару (одн./кг): <span class="result__numerical-value">${amountGoods = amountGoods.toLocaleString("uk-UA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> (одн./кг)</div>
				<div class="result__name-value">Вартість одиниці товару (грн.): <span class="result__numerical-value">${costUnitGoods = costUnitGoods.toLocaleString("uk-UA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> грн.</div>
			</div>

			<div class="result__box-data">
				<h3 class="result__table-caption">Результати обчислення</h3>
				<div class="result__name-value">Загальна вартість товару складає: <span class="result__numerical-value">${totalCost = Number(totalCost).toLocaleString("uk-UA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> грн.</div>
				<div class="result__name-value">5% ПДВ від загальної вартості складає: <span class="result__numerical-value">${vatTotalCost = Number(vatTotalCost).toLocaleString("uk-UA", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> грн.</div>
			</div>
		</div>
	</div>
`
);


