// * Задача #0. Умови

//$ Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим


if (confirm('Почати тестування коду?')) {
	function getWorkDay(paramValueDay) {
		return paramValueDay >= 1 && paramValueDay < 6;
	}

	const enterNumDay = parseInt(prompt('Поле для введення', 'Введіть номер дня тижня'));
	let resultWorkday = getWorkDay(enterNumDay) ? 'Робочий день' : 'Не робочий день';
	document.write(`<div class="result__box-data"><div class="result__name-value"> Результат: <span class="result__answer-value">${resultWorkday}</span></div></div>`);
}


