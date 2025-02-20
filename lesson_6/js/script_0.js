// * Задача #0. Умови

//$ З клавіатури вводяться імена двох дітей та кількість у них цукерок.
//$ Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова

//* 1. Вводимо необхідні дані
const nameFirstChildren = prompt("Ім'я дитини", "Введіть ім'я першої дитини");
const amountSweetsFirstChildren = parseInt(prompt("Кількість цукерок", "Введіть кількість цукерок для першої дитини"))

const nameSecondChildren = prompt("Ім'я дитини", "Введіть ім'я другої дитини");
const amountSweetsSecondChilder = parseInt(prompt('Кількість цукерок', 'Введіть кількість цукерок для другої дитини'))

let countResultCandies

//* 2. Знаходимо результат

if (amountSweetsFirstChildren === amountSweetsSecondChilder) 

countResultCandies = (`<div class="result">

			<div class="result__name-value"><span class="result__numerical-value">${nameFirstChildren.charAt(0).toUpperCase() + nameFirstChildren.slice(1)}</span> та <span class="result__numerical-value">${nameSecondChildren.charAt(0).toUpperCase() + nameSecondChildren.slice(1)}</span> мають однакову кількість цукерок.</div>`);

else
	if (amountSweetsFirstChildren > amountSweetsSecondChilder) 
	countResultCandies = (`<div class="result">

			<div class="result__name-value">
			<span class="result__numerical-value">${nameFirstChildren.charAt(0).toUpperCase() + nameFirstChildren.slice(1)}</span>
			має більшу кількість цукерок ніж
			<span class="result__numerical-value">${nameSecondChildren.charAt(0).toUpperCase() + nameSecondChildren.slice(1)}</span>
			</div>`);

else
countResultCandies = (`<div class="result">
			<div class="result__name-value">
				<span class="result__numerical-value">${nameSecondChildren.charAt(0).toUpperCase() + nameSecondChildren.slice(1)}</span> має більшу кількість цукерок ніж <span class="result__numerical-value">${nameFirstChildren.charAt(0).toUpperCase() + nameFirstChildren.slice(1)}</span>
				</div>`);


//* 3. Виводимо результат
document.write(
	`
	<div class="result">
		<div class="result__content-body">

		<div class="result__box-data">
			<h3 class="result__table-caption">Вхідні дані</h3>

			<div class="result__name-value">
				<span class="result__numerical-value">
				${nameFirstChildren.charAt(0).toUpperCase() + nameFirstChildren.slice(1)}
				</span>має: 
				<span class="result__numerical-value">
				${amountSweetsFirstChildren}
				</span>
				цукерки(ок)
			</div>

			<div class="result__name-value">
				<span class="result__numerical-value">
				${nameSecondChildren.charAt(0).toUpperCase() + nameSecondChildren.slice(1)}
				</span>має: 
				<span class="result__numerical-value">
				${amountSweetsSecondChilder}
				</span>
				цукерки(ок)
			</div>

		</div>

		<div class="result__box-data">
			<h3 class="result__table-caption">Результати обчислення</h3>
			<div class="result__name-value">${countResultCandies}</div>
			</div>
	</div>
</div>
	`
	);
