// * Задача #2. Умови

//$ Створити об’єкт 'Авто'
//$ Поля(властивості):
//$ ▪	Марка;
//$ ▪	Розмір бака;
//$ ▪	Кількість наявних літрів;
//$ ▪	Кількість місць;
//$ ▪	Кількість пасажирів;
//$ Методи (дії):
//$ ▪	Заправка на вказану кількість літрів;
//$ ▪	Виведення кількості пасажирів;
//$ ▪	Масив, у якому зберігається поле з зайцями;
//$ ▪	Додавання пасажирів;
//$ ▪	Висадка пасажирів;

if (confirm('Почати тестування?')) {
	let carObject = {
		brandCar: 'Toyota',
		tankSize: 80,
		actualAmountLiters: 35,
		numberSeats: 34,
		numberPassengers: 8,
	
		//# Заправка маршрутки
		gasketCar(enterAmountLiters) {
			return this.actualAmountLiters + enterAmountLiters;
		},
	
		checkingTankAfterRefueling(enterAmountLiters) {
			let afterRefuel = this.gasketCar(enterAmountLiters);
			if (afterRefuel < this.tankSize) return afterRefuel;
			else throw new Error('Обсяг пального після заправки перевищує розмір бака!');
		},
	
		//# Виведення кількості пасажирів
		viewNumberPassegers() {
			return this.numberPassengers;
		},
	
		//# Додавання пасажирів
		addPassegers(paramAddPassegers) {
			this.numberPassengers += paramAddPassegers;
			return this.numberPassengers
		},
	
		checkAddPassegers(paramAddPassegers) {
			let resAddPassegers = this.addPassegers(paramAddPassegers);
			if (resAddPassegers <= this.numberSeats)
				document.write(
					`<div class="result__box-data">
			<div class="result__name-value"> У маршрутку зайшло: <span class="result__answer-value">${paramAddPassegers} чол.</div> 
			<div class="result__name-value">Загальна кількість пасажирів після посадки:
			<span class="result__answer-value">${resAddPassegers}</span>чол.</div></div>`
				);
			else
				document.write(
					`
			<div class="result__box-data">
			<div class="result__name-value">Кількість пасажирів
			<span class="result__answer-value">${resAddPassegers} </span> чол.,</div> 
			<div class="result__name-value">перевищує загальну кількість посадочних місць:
			<span class="result__answer-value">${this.numberSeats} </span> чол.</div></div>`
				);
		},
	
		//# Висадка пасажирів
		landingPassenger(paramMinusPassegers) {
			this.numberPassengers -= paramMinusPassegers
			return this.numberPassengers
		},
	};
	
	//# Заправка маршрутки
	const callFincCarGasket = carObject.checkingTankAfterRefueling(42);
	document.write(
		`
			<div class="result__box-data">
			<div class="result__name-value">Кількість пального після заправки:
			<span class="result__answer-value">${callFincCarGasket}</span> л</div> 
			<div>При загальній ємкості баку:
			<span class="result__answer-value">${carObject.tankSize}</span> л</div>
			</div>`
	);
	
	//# Виведення кількості пасажирів
	document.write(`
		<div class="result__box-data">
			<div class="result__name-value">Поточна кількість пасажирів: 
		<span class="result__answer-value">${carObject.viewNumberPassegers()}</span> чол.
		</div></div>`);
	
	//# Додавання пасажирів
	const callFunctionAddPassegers = carObject.checkAddPassegers(25);
	
	// # Висадка пасажирів
	const callFuncOutPassegers = carObject.landingPassenger(16);
	document.write(`<div class="result__box-data">
			<div class="result__name-value">Загальна кількість пасажирів після висадки: <span class="result__answer-value">${callFuncOutPassegers} </span>чол.</div></div>`);
	
}