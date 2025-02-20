// * Задача #1. Умови

//$ Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами.

//* 1. Вводимо необхідні дані
if (confirm("Почати тестування коду?")) {
	const firstUserValue = parseInt(prompt("Поле для вводу значення", "Введіть перше значення"));
	const secondUserValue = parseInt(prompt("Поле для вводу значення", "Введіть друге значення"));
	let totalAmountValues = 0;
	let countOddNumbers = 0;

	//* 2. Знаходимо результат

		for (let rangeNumbers = Math.min(firstUserValue, secondUserValue); rangeNumbers <= Math.max(firstUserValue, secondUserValue); rangeNumbers++) {
			if (rangeNumbers % 2 !== 0) {
				document.write(`
			<div class="result__box5-data">
				<div class="result__name5-value">Число:
					<span class="result__value5-color">${rangeNumbers}</span>
				</div>
			</div>`);
				totalAmountValues += rangeNumbers;
				countOddNumbers++
			}
			if (countOddNumbers === 5) break
		}

		//* 3. Виводимо результат
	document.write(`
			<div class="result__box5-data">
				<div class="result__name5-value">Загальна сума непарних чисел складає:
					<span class="result__value5-color">${totalAmountValues}</span>
				</div>
			</div>`);
	}