// * Задача #7. Умови

//$ Знайти суму випадкового номера місяця (від 1 до 12)
//$ та випадкового номера дня (від 0 до 6).

//* 1. Вводимо необхідні дані
const MIN_VALUE_MOUTH=1
let MAX_VALUE_MOUTH=12

let MIN_VALUE_DAY=0
let MAX_VALUE_DAY=6


//* 2. Знаходимо результат
let randomMouthValue = MIN_VALUE_MOUTH + Math.floor(Math.random() * (MAX_VALUE_MOUTH - MIN_VALUE_MOUTH + 1))
let randomDayValue = MIN_VALUE_DAY + Math.floor(Math.random() * (MAX_VALUE_DAY - MIN_VALUE_DAY + 1))

let totalSumRandomValues = randomMouthValue + randomDayValue


//* 3. Виводимо результат
document.write(`	<div class="result">
		<div class="result__content-body">
				<div class="result__box-data">
					<h3 class="result__table-caption">Вхідні дані</h3>
					<div class="result__name-value">Рандомне значення місяця: <span class="result__numerical-value">${randomMouthValue}</span></div>
					<div class="result__name-value">Рандомне значення дня: <span class="result__numerical-value">${randomDayValue}</span></div>
				</div>

				<div class="result__box-data">
					<h3 class="result__table-caption">Результати обчислення</h3>
					<div class="result__name-value">Сума випадкових значень: <span class="result__numerical-value">${totalSumRandomValues}</div>
				</div>
			</div>
	</div>`)
