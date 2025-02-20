// * Задача #3. Умови

//$ З клавіатури вводиться вік людини.
//$ Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

//* 1. Вводимо необхідні дані
let agePerson = parseInt(prompt('Вік людини', 'Введіть вік людини'))

let statusPerson

//* 2. Знаходимо результат
if (agePerson < 6)
	statusPerson = (`Дитина у садочку`)
else
	if (agePerson < 16)
		statusPerson = (`Школяр`)
else
	if (agePerson < 20) statusPerson = (`Студент`)
else
	if (agePerson < 65) statusPerson = (`Працівник`)
else statusPerson = (`Пенсіонер`)

//* 3. Виводимо результат
document.write(
	`
		<div class="result">
	<div class="result__content-body">

		<div class="result__box-data">
			<h3 class="result__table-caption">Вхідні дані</h3>

			<div class="result__name-value">
				Вік людини:
				<span class="result__numerical-value">
					${agePerson}
				</span>
			</div>
		</div>

		<div class="result__box-data">
			<h3 class="result__table-caption">Результати обчислення</h3>
				<div class="result__name-value">Статус особи: 
				<span class="result__numerical-value">
					${statusPerson}
				</span>
			</div>
		</div>
	</div>
</div>
	`
	);


