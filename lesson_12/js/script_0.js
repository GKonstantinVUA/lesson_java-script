// * Задача #0. Умови

//$ Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування бульбашкою

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

	function getCountBubbleSort(paramDataForAnalysisBubbleSort) {
		let indicationChange,
			endIdItem = paramDataForAnalysisBubbleSort.length,
			timerCompare = 0,
			timerChange = 0;
	
		do {
			indicationChange = false;
			for (let stepItem = 0; stepItem < endIdItem; stepItem++) {
				if (paramDataForAnalysisBubbleSort[stepItem - 1] > paramDataForAnalysisBubbleSort[stepItem]) {
					const newAssignment = paramDataForAnalysisBubbleSort[stepItem - 1];
					paramDataForAnalysisBubbleSort[stepItem - 1] = paramDataForAnalysisBubbleSort[stepItem];
					paramDataForAnalysisBubbleSort[stepItem] = newAssignment;
					indicationChange = true;
					timerChange++;
				}
				timerCompare++;
			}
			endIdItem--;
		} while (indicationChange);
	paramDataForAnalysisBubbleSort
		return { paramDataForAnalysisBubbleSort, timerChange, timerCompare };
	}
	
	const { paramDataForAnalysisBubbleSort, timerChange, timerCompare } = getCountBubbleSort(callFuncSetArrayData);
	document.write(
		`<div class="result__box-data">
		<div class="result__name-value"> Відсортований масив:
		<span class="result__answer-value">${paramDataForAnalysisBubbleSort}</span></div> 
		
		<div class="result__name-value"> Кількість порівнянь:
		<span class="result__answer-value">${timerCompare}</span> разів</div> 
		
		<div class="result__name-value">
		Кількість обмінів: <span class="result__answer-value">${timerChange}</span> разів</div></div>`
	);
}