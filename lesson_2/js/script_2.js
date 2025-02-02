// * Задача #2. Умови

//$ Дано рік народження (дата: 1 січня) та поточний рік.  
//$ Знайти кількість років.

//* 1. Вводимо необхідні дані
let yearBirthPerson = parseInt(prompt("Рік народження", "Введіть свій рік народження"));
let currentYear = new Date().getFullYear()

//* 2. Знаходимо результат
let personAge = (currentYear - yearBirthPerson);

//* 3. Виводимо результат
document.write(

`<div class="result">
	<div class="result__content-body">
			<div class="result__name-value">Ваш рік народження: <span class="result__numerical-value">${yearBirthPerson}</span></div>
			<div class="result__name-value">Ваш вік в поточному році складає: <span class="result__numerical-value">${personAge}</span> роки/ів</div>
		</div>
</div>
`
);
