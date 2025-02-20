// * Задача #1. Умови

//$ Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7
//$ (у числі є всього дві цифри 7, наприклад: 2679328712)

//* 1. Вводимо необхідні дані

if (confirm('Почати тестування коду?')) {
	const сonstantNumber = '2679328712';
	const firstLetter = сonstantNumber.indexOf('7')
	const lastLetter = сonstantNumber.lastIndexOf('7')
	let resultSum = 0

	//* 2. Знаходимо результат
	
for (let periodSum = firstLetter + 1; periodSum < lastLetter; periodSum++) {
	if (firstLetter!==-1 && lastLetter!==-1 && firstLetter!==lastLetter)
		resultSum += parseInt(сonstantNumber[periodSum])
}

	//* 3. Виводимо результат
	
	document.write(`<div class="result__box-data">
			<div class="result__name-value"><span class="result__numerical-value"> Загальна сума: <span class="result__value-color">${resultSum}</span></div></div>`)
}
