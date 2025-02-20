// * Задача #3. Умови

//$ Користувача поступово вводить показники температури протягом року.</p>
//$ Знайти середню температуру

if (confirm('Почати тестування коду?')) {

//* 1. Вводимо необхідні дані
	let averageTemperatureValue = 0;

	for (let numberIndicators = 1; numberIndicators <= 12; numberIndicators++) {
		let monthName = "";

		switch (numberIndicators) {
			case 1:
				monthName = "Cічень";
				break;
			case 2:
				monthName = "Лютий";
				break;
			case 3:
				monthName = "Березень";
				break;
			case 4:
				monthName = "Квітень";
				break;
			case 5:
				monthName = "Травень";
				break;
			case 6:
				monthName = "Червень";
				break;
			case 7:
				monthName = "Липень";
				break;
			case 8:
				monthName = "Серпень";
				break;
			case 9:
				monthName = "Вересень";
				break;
			case 10:
				monthName = "Жовтень";
				break;
			case 11:
				monthName = "Листопад";
				break;
			case 12:
				monthName = "Грудень";
				break;
		}

		//* 2. Знаходимо результат
		let temperatureIndicator = parseInt(
			prompt(`Поле для вводу температури\nПоказник за: ${monthName}`, "Введіть показник")
		);

		document.write(`<div class="result__box5-data">
				<div class="result__name5-value">${monthName}: <span class="result__value5-color">${temperatureIndicator}&deg;C</span>
				</div>
			</div>`);
		averageTemperatureValue += temperatureIndicator;
	}

	//* 3. Виводимо результат
	document.write(`<div class="result__box5-data">
				<div class="result__name5-value">Середне значення температури: <span class="result__value5-color">${(averageTemperatureValue /= 12).toFixed(2)}&deg;C</span>
				</div>
			</div>`);
}









