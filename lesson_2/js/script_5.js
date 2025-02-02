// * Задача #5. Умови

//$ Дано кількість секунд, що пройшла від початку доби.
//$ Визначити скільки це годин і хвилин.

//* 1. Вводимо необхідні дані
		let valueInSecond=parseInt(prompt('Значення в секундах', 'Введіть значення'))
		const SECOND_IN_MINUTE=60
		const SECOND_IN_HOURE=3600

						
//* 2. Знаходимо результат

		let meaningInTimes = Math.floor(valueInSecond / SECOND_IN_HOURE)
		let valueInMinutes=Math.floor((valueInSecond%SECOND_IN_HOURE)/SECOND_IN_MINUTE)

//* 3. Виводимо результат
document.write(`
	<div class="result">
		<div class="result__content-body">
				<div class="result__box-data">
					<h3 class="result__table-caption">Вхідні дані</h3>
					<div class="result__name-value">Значення у секундах: <span class="result__numerical-value">${valueInSecond}</span> сек.</div>
				</div>

				<div class="result__box-data">
					<h3 class="result__table-caption">Результати обчислення</h3>
					<div class="result__name-value">Від початку доби пройшло: <span class="result__numerical-value">${meaningInTimes}</span> год. <span class="result__numerical-value">${valueInMinutes}</span> хвл.</div>
				</div>
			</div>
	</div>`
);


