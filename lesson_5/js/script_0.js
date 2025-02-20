// * Задача #0. Умови

//$ Користувач загадує число.
//$ Комп’ютер задає питання поки не вгадає число користувача
//$ (використати confirm)

//* 1. Вводимо необхідні дані
let randomNumber
let numberAttempts = 0
const minRandomNumber = 1, maxRandomNumber = 20

//* 2. Знаходимо результат
do {
	randomNumber = minRandomNumber + Math.floor(Math.random() * maxRandomNumber)
	numberAttempts++
}
while (!confirm(`Вгадай число від ${minRandomNumber} до ${maxRandomNumber}. Спроба#: ${numberAttempts}\nВи загадали число: ${randomNumber}?`)) {
}

//* 3. Виводимо результат
document.write(`

		<div class="result__box-data">
			<div class="result__name-value"><span class="result__numerical-value">Комп'ютер вгадав число <span class="result__value-color">${randomNumber}</span>: з <span class="result__value-color">${numberAttempts}</span> спроб(и)</div>
			</div>
	</div>
</div>`);
