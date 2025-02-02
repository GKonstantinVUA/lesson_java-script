// * Задача #4. Умови

//$ Дано довжину у сантиметрах.
//$ Визначати скільки це метрів і кілометрів.

//* 1. Вводимо необхідні дані
let lengthСentimeters = prompt("Значення довжини у сантіметрах", "Введіть значення");
const CENTIMETERS_TO_METERS = 0.01;
const CENTIMETERS_TO_KILOMETERS = 0.00001;

let valueMeters = (lengthСentimeters * CENTIMETERS_TO_METERS).toFixed(2);
let valuesKilometrs = (lengthСentimeters * CENTIMETERS_TO_KILOMETERS).toFixed(5);

//* 2. Знаходимо результат


//* 3. Виводимо результат
document.write(`
		<div class="result">
	<div class="result__content-body">
			<div class="result__box-data">
				<h3 class="result__table-caption">Вхідні дані</h3>
				<div class="result__name-value">Значення довжини у сантіметрах: <span class="result__numerical-value">${lengthСentimeters}</span> см.</div>
			</div>

			<div class="result__box-data">
				<h3 class="result__table-caption">Результати обчислення</h3>
				<div class="result__name-value">Довжина у метрах складає: <span class="result__numerical-value">${valueMeters}</span> м.</div>
				<div class="result__name-value">Довжина у кілометрах складає: <span class="result__numerical-value">${valuesKilometrs}</span> км.</div>
			</div>
		</div>
	</div>
`
);


