// * Задача #1. Умови

//$ Обчислити значення виразів:
//$ Результат вивести у формі таблиці.

//* 1. Вводимо необхідні дані
let firstVariable = parseFloat(prompt("Введіть змінну (а)", "Введіть змінну"));
let secondVariable = parseFloat(prompt("Введіть змінну (b)", "Введіть змінну"));
let thirdVariable = parseFloat(prompt("Введіть змінну (с)", "Введіть змінну"));

const permanentNumberFirstExpression = 12;
const permanentNumberSecondExpression = 2;

//* 2. Знаходимо результат
let resultFirstExpression = (firstVariable + permanentNumberFirstExpression + secondVariable).toFixed(2);

let resultSecondExpression = (Math.sqrt((firstVariable + secondVariable) / (permanentNumberSecondExpression * firstVariable))).toFixed(2);

let resultThirdExpression = (Math.cbrt((firstVariable + secondVariable) * thirdVariable)).toFixed(2);

let resultFourthExpression = (Math.sin((firstVariable / - secondVariable))).toFixed(2);

//* 3. Виводимо результат
document.write(

	`<div class="result">
	<div class="result__content-body">
	<div class="result__box-data">
	<h3 class="result__table-caption">Вхідні значення змінних</h3>
		
	<table class="result__table-input-data table-data">

			<thead class="table-data__subcaption">
				<tr>
					<th>a</th>
					<th>b</th>
					<th>c</th>
					</tr>
			</thead>

			<tbody class="table-data__value-table">
				<tr>
					<td>${firstVariable}</td>
					<td>${secondVariable}</td>
					<td>${thirdVariable}</td>
				</tr>
			</tbody>

	</table>
	</div>

	<div class="result__box-data">
	<h3 class="result__table-caption">Результати обчислень</h3>

	<table class="result__table-input-data table-data">
  
	<thead class="table-data__subcaption">
		<tr>
				<th>
						<math>
							<msub>
								<mi>S</mi>
								<mi>1</mi>
							</msub>
						</math>
				</th>
				<th>
						<math>
							<msub>
								<mi>S</mi>
								<mi>2</mi>
							</msub>
						</math>
				</th>
				<th>	
						<math>
							<msub>
								<mi>S</mi>
								<mi>3</mi>
							</msub>
						</math>
				</th>
				<th>	
						<math>
							<msub>
								<mi>S</mi>
								<mi>4</mi>
							</msub>
						</math>
				</th>
		</tr>
</thead>

<tbody class="table-data__value-table">
  <tr>
    <td>${resultFirstExpression}</td>
    <td>${resultSecondExpression}</td>
		<td>${resultThirdExpression}</td>
		<td>${resultFourthExpression}</td>
  </tr>
</tbody>
</table>
	</div>
</div>
</div>
`
);
