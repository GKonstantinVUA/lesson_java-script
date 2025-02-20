// * Задача #0. Умови

//$ Інвестор вклав S тис. грн на 20 років під 20% річних, а потім на 17 років під 27% річних
//$ Визначити за допомогою циклів суму, яку він одержить

//* 1. Вводимо необхідні дані
if (confirm('Почати тестування коду?')) {
	let userMoney = parseFloat(prompt('Поле для вводу суми (грн.)', 'Введіть суму вкладу'));
	
	let interestRateOne = 0.2;
	let periodInvestmentOne = 20;
	let interestRateTwo = 0.17; 
	let periodInvestmentTwo = 17; 

	let profitabilityOnePeriod = userMoney;
	let profitabilityTwoPeriod = userMoney;

	//* 2. Знаходимо результат
	for (let periodYear = 1; periodYear <= periodInvestmentOne; periodYear++) {
		profitabilityOnePeriod += (((userMoney * interestRateOne * 365) / 365)+userMoney)
	}

	for (let periodYear = 1; periodYear <= periodInvestmentTwo; periodYear++) {
		profitabilityTwoPeriod += (((userMoney * interestRateTwo * 365) / 365)+userMoney)
	}

	//* 3. Виводимо результат
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"><span class="result__numerical-value"> 
		Сума вкладу <span class="result__value-color">${userMoney.toFixed(2)}</span> грн.
		</div>

		<div class="result__name-value"><span class="result__numerical-value"> 
		Сума доходу за <span class="result__value-color"> ${periodInvestmentOne} </span> років: 
		<span class="result__value-color">${profitabilityOnePeriod.toFixed(2)}</span> грн.</span>
		</div>

		<div class="result__name-value"><span class="result__numerical-value"> 
		Сума доходу за <span class="result__value-color"> ${periodInvestmentTwo} </span> років: 
		<span class="result__value-color">${profitabilityTwoPeriod.toFixed(2)}</span> грн.</span>
		</div>
		</div>`);
}