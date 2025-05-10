// * Задача #1. Умови
//$ Створити клас TMoney для роботи з грошовими сумами
//$ Сума повинна зберігатися у вигляді доларового еквіваленту
//$ Введення та виведення дати реалізувати за допомогою методу toString.
//$ Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100
//$ Курс долара зберігати в окремому полі

if (confirm('Почати тестування?')) {
	class TMoney {
		constructor(paramDollarExchangeRate, paramBalanceMoneySupply) {
			this.DollarExchangeRate = paramDollarExchangeRate;
			this.BalanceMoneySupply = paramBalanceMoneySupply;
		}
	
		//#Параметри для курса доллара
		#dollarExchangeRate;
		get DollarExchangeRate() {
			return this.#dollarExchangeRate;
		}
	
		set DollarExchangeRate(transferDollarExchangeRate) {
			if (transferDollarExchangeRate.length === '' || isNaN(transferDollarExchangeRate))
				throw new Error('Значення про курс доллара відсутне або введено з помилкою');
			if (transferDollarExchangeRate < 0) throw new Error("Курс долара не може бути від'ємною величиною");
			this.#dollarExchangeRate = transferDollarExchangeRate;
		}
	
		//#Параметри для гривні
		#moneySupply;
		get BalanceMoneySupply() {
			return this.#moneySupply;
		}
	
		set BalanceMoneySupply(transferparamMoneySupply) {
			if (transferparamMoneySupply.length === '' || isNaN(transferparamMoneySupply))
				throw new Error('Значення грошової маси не введено або введено з помилкою');
			if (transferparamMoneySupply < 0)
				throw new Error("Введена грошова маса не може бути від'ємною величиною");
			this.#moneySupply = transferparamMoneySupply / this.DollarExchangeRate;
		}
	
		//# Метод додавання грошової маси до балансу
		getAddMoneySupply(paramAddMoney) {
			this.#moneySupply += paramAddMoney / this.DollarExchangeRate;
		}
	
		//# Метод вилучання грошової маси до балансу
		getSubtractMoneySupply(paramSubtractMoney) {
			if (this.BalanceMoneySupply * this.DollarExchangeRate < paramSubtractMoney)
				throw new Error('На балансі клієнта недостатньо коштів для зняття');
			else this.#moneySupply -= paramSubtractMoney / this.DollarExchangeRate;
		}
	
		//# Метод зміни курсу долара
		getChangeDollar(paramMoneySupply) {
			return (this.#moneySupply * this.#dollarExchangeRate + paramMoneySupply) / this.#moneySupply;
		}
	
		//# Представлення на екрані
		toString() {
			return `<div class="result__box-data">
			<div class="result__name-value">Баланс кліента: <span class="result__answer-value">${this.BalanceMoneySupply.toFixed(2)}</span> $</div></div>`;
		}
	}
	
	try {
		const callClassTMoney = new TMoney(41.3, 10000);
		document.write(`
			<div class="result__box-data">
			<div class="result__name-value">
			<span class="result__answer-value">${callClassTMoney}
			</span></div></div>`);
		callClassTMoney.getAddMoneySupply(500);
		document.write(`
			<div class="result__box-data">
			<div class="result__name-value">
			<span class="result__answer-value">${callClassTMoney}
			</span></div></div>`);
		callClassTMoney.getSubtractMoneySupply(300);
		document.write(`
			<div class="result__box-data">
			<div class="result__name-value">
			<span class="result__answer-value">${callClassTMoney}
			</span></div></div>`);
		document.write(`
			<div class="result__box-data">
			<div class="result__name-value">Новий курс долара:
			<span class="result__answer-value">${callClassTMoney.getChangeDollar(100).toFixed(2)}</span> $</div></div>`);
	} catch (error) {
		document.write(`Повідомлення про помилку: ${error.message}`);
	}
	
}