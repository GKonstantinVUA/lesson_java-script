// * Задача #2. Умови

//$ Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування включеннями

if (confirm('Почати тестування?')) {
	function getRandomArrayData(paramNumberValues, limitMinValue = 10, limitMaxValue = 400) {
		const arrayData = [];
		for (let stepValue = 0; stepValue < paramNumberValues; stepValue++) {
			arrayData.push(limitMinValue + Math.floor(Math.random() * (limitMaxValue - limitMinValue + 1)));
		}
		return arrayData;
	}

	const callFuncSetArrayData = getRandomArrayData(30);
	console.log(callFuncSetArrayData);

	//* Рішення
	function getSortInsert(paramArrayAnalysis) {
		let currentElement,
			idValue,
			timerCompareSortInsert = 0,
			timerChangeSortInsert = 0;
		for (let stepValue = 1; stepValue < paramArrayAnalysis.length; stepValue++) {
			currentElement = paramArrayAnalysis[stepValue];
			idValue = stepValue - 1;
			while (idValue >= 0 && paramArrayAnalysis[idValue] > currentElement) {
				paramArrayAnalysis[idValue + 1] = paramArrayAnalysis[idValue];
				idValue = idValue - 1;
				paramArrayAnalysis[idValue + 1] = currentElement;
				timerChangeSortInsert++;
				timerCompareSortInsert++;
			}
			timerCompareSortInsert++;
		}
		return { paramArrayAnalysis, timerCompareSortInsert, timerChangeSortInsert };
	}
	const { paramArrayAnalysis, timerCompareSortInsert, timerChangeSortInsert } =
		getSortInsert(callFuncSetArrayData);
	document.write(
		`<div class="result__box-data">
		<div class="result__name-value"> Відсортований масив:
		<span class="result__answer-value"> ${paramArrayAnalysis}</span><div> 
		
		<div class="result__name-value"> Кількість порівнянь:
		<span class="result__answer-value"> ${timerChangeSortInsert}</span> разів<div> 
		
		<div class="result__name-value">
		Кількість обмінів: <span class="result__answer-value">${timerCompareSortInsert}</span> разів<div><div>`
	);
}
