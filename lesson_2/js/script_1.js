// * Задача #1. Умови

//$ Знайти суму, добуток та частку двох дійсних чисел.
//$ Результат вивести у формі таблиці

//* 1. Вводимо необхідні дані
let firstActualNumber = parseFloat(prompt("Введіть перше дійсне число", "Введіть число"));
let secondActualNumber = parseFloat(prompt("Введіть друге дійсне число", "Введіть число"));

//* 2. Знаходимо результат
let sumValues = firstActualNumber + secondActualNumber;
let workValues = (firstActualNumber * secondActualNumber).toFixed(2);
let divisionValues = (firstActualNumber / secondActualNumber).toFixed(2);

//* 3. Виводимо результат
document.write(
	`<div class="result">
	<div class="result__content-body">
		<div class="result__box-data">
			<h3 class="result__table-caption">Вхідні значення</h3>
		
					<table class="result__table-input-data table-data">

							<thead class="table-data__subcaption">
								<tr>
									<th>Перше число</th>
									<th>Друге число</th>
									</tr>
							</thead>

							<tbody class="table-data__value-table">
								<tr>
									<td>${firstActualNumber}</td>
									<td>${secondActualNumber}</td>
								</tr>
							</tbody>

					</table>
		</div>
		<div class="result__box-data">
					<h3 class="result__table-caption">Результати обчислень</h3>

					<table class="result__table-input-data table-data">
					
					<thead class="table-data__subcaption">
						<tr>
								<th>Результат суми</th>
								<th>Результат добутку</th>
								<th>Результат частки</th>
						</tr>
					</thead>

						<tbody class="table-data__value-table">
							<tr>
								<td>${sumValues}</td>
								<td>${workValues}</td>
								<td>${divisionValues}</td>
							</tr>
						</tbody>
				</table>
			</div>
		</div>
</div>
`
);
