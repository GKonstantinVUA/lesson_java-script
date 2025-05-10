// * Задача #7. Умови

//$ Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.

if (confirm('Почати тестування?')) {
	let fullDateObject = {
		day: 23,
		month: 3,
		year: 2025,
	};
	
	function getNewYearCondition({ month, year }, paramValueUserMounth) {
		return year + Math.floor((month + paramValueUserMounth - 1) / 12);
	}
	
	const callFunctionNewYear = document.write(`<div class="result__box-data">
			<div class="result__name-value">Наступний рік буде: <span class="result__answer-value">${getNewYearCondition(fullDateObject, 29)} </span>р.</div></div>`)
	
	
}