// * Задача #6. Умови

//$ З клавіатури вводиться номер місяця.
//$ Вивести до якої пори він відноситься.

//* 1. Вводимо необхідні дані
let numberMounth = prompt('Номер місяця', 'Введіть номер місяця')
let seasonYear

//* 2. Знаходимо результат
switch (numberMounth) {
	case '12':
	case '1':
	case '2': seasonYear = 'Зима'
		break
	case '3':
	case '4':
	case '5': seasonYear = 'Весна'
		break
	case '6':
	case '7':
	case '8': seasonYear = 'Літо'
		break
	case '9':
	case '10':
	case '11': seasonYear = 'Осінь'
	default: seasonYear = 'Номер місяця введено з помилкою або він відсутній у загальному переліку'
		break;
}


//* 3. Виводимо результат
document.write(
	`
	<div class="result">
	<div class="result__content-body">

		<div class="result__box-data">
			<h3 class="result__table-caption">Вхидні дані</h3>

			<div class="result__name-value">
				Номер місяця:
				<span class="result__numerical-value">
					${numberMounth}
				</span>
			</div>
		</div>

		<div class="result__box-data">
			<h3 class="result__table-caption">Результати обчислення</h3>
			<div class="result__name-value">
				Пора року:
				<span class="result__numerical-value">
					${seasonYear}
				</span>
			</div>
		</div>
	</div>
</div>
	`
	);
