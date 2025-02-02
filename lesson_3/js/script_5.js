// * Задача #5. Умови

//$ З клавіатури вводиться номер дня тижня.
//$ Вивести на екран назву дня.

//* 1. Вводимо необхідні дані
let numberDay = prompt('Номер дня тижня', 'Введіть номер дня тижня')
let nameDayWeek

//* 2. Знаходимо результат
switch (numberDay) {
	case '1': nameDayWeek = 'Понеділок';
		break;
	case '2': nameDayWeek = 'Вівторок';
		break;
	case '3': nameDayWeek = 'Середа';
		break;
	case '4': nameDayWeek = 'Четверг';
		break;
	case '5': nameDayWeek = 'П\'ятниця';
		break;
	case '6': nameDayWeek = 'Субота';
		break;
	case '7': nameDayWeek = 'Неділя';
		break;
	default: nameDayWeek = 'Номер дня тижня введено з помилкою або відсутній у загальному переліку';
		break;
}


//* 3. Виводимо результат
document.write(
	`
	<div class="result">
	<div class="result__content-body">

		<div class="result__box-data">
			<h3 class="result__table-caption">Вхідні дані</h3>

			<div class="result__name-value">
				Номер дня тижня:
				<span class="result__numerical-value">
					${numberDay}
				</span>
			</div>
		</div>

		<div class="result__box-data">
			<h3 class="result__table-caption">Результати обчислення</h3>
			<div class="result__name-value">
				Назва дня:
				<span class="result__numerical-value">
					${nameDayWeek}
				</span>
			</div>
		</div>
	</div>
</div>
	`
	);

