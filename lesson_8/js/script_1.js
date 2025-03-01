// * Задача #1. Умови

//$ Дано масив з іменами учнів
//$ З'ясувати скільки разів зустрічається ім'я 'Іван'
//$ Примітка: умови задачі розширив таким чином, щоб розробити функцію, яка робить підрахунок по будь-яким іменам яке введе користувач


if (confirm('Почати тестування?')) {
	const arrayDataNames = [
		'Олена',
		'Дмитро',
		'Іван',
		'Костянтин',
		'Тетяна',
		'Іван',
		'Микола',
		'Олена',
		'Софія',
		'Іван',
		'Марія',
		'Олег',
		'Христина',
		'Марина',
		'Іван',
		'Дмитро',
		'Володимир',
		'Кіндрат',
	];
	
	function getCountNumdersNameUser(arraySetNames) {
		let calculatiQunuantity = 0;
		let parametrSearchItem = prompt('Введіть параметр для пошуку', 'Введіть ім\'я')
		for (
			let intervalBustingValues = 0; intervalBustingValues < arraySetNames.length; intervalBustingValues++) {
			if (arraySetNames[intervalBustingValues] === parametrSearchItem) {
				calculatiQunuantity++;
			}
		}
		return calculatiQunuantity;
	}
	
	let resultSearchData = getCountNumdersNameUser(arrayDataNames);
	document.write(`<div class="result__box-data"><div class="result__name-value"> Результат: <span class="result__answer-value"> ${resultSearchData} раз(и/ів)</span></div></div>`)
}
