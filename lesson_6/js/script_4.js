// * Задача #4. Умови

//$ З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
//$ Вивести на екран назву транспортного засобу, яким він може керувати.

//* 1. Вводимо необхідні дані
let nameCategory = prompt("Назва категорії", "Введіть назву категорії");

let resultVehicle;

//* 2. Знаходимо результат
switch (nameCategory.toUpperCase()) {
	case "A": resultVehicle = "Мотоцикл";
		break;
	case "B": resultVehicle = "Легковий автомобіль";
		break;
	case "C": resultVehicle = "Вантажний автомобіль";
		break; 
	default: resultVehicle = "Категорія відсутня в загальному переліку, або введена з помилкою";
		break;
}

//* 3. Виводимо результат
// document.write(
// 	`<div class="result">
// 	<div class="result__content-body">

// 		<div class="result__box-data">
// 			<h3 class="result__table-caption">Вхідні дані</h3>

// 			<div class="result__name-value">
// 				Назва категорії водія:
// 				<span class="result__numerical-value">
// 					${nameCategory.toUpperCase()}
// 				</span>
// 			</div>
// 		</div>

// 		<div class="result__box-data">
// 			<h3 class="result__table-caption">Результати обчислення</h3>
// 			<div class="result__name-value">
// 				Назву транспортного засобу:
// 				<span class="result__numerical-value">
// 						${resultVehicle}
// 				</span>
// 			</div>
// 		</div>
// 	</div>
// </div>`
// 	);
