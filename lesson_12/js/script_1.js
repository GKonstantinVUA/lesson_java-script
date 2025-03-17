// * Задача #1. Умови

//$ Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів та порівнянь чисел під час сортування змішуванням


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
	
	function getCountShakerSort(paramDataForAnalysis) {
		let leftIndex = 0,
			rightIndex = paramDataForAnalysis.length - 1,
			timerCompareShakerSort = 0,
			timerChangeShakerSort = 0;
	
		while (leftIndex < rightIndex) {
			//^ блок в напрямку (зліва-направо)
			let changedIndication = false;
			for (let stepElem = leftIndex + 1; stepElem <= rightIndex; stepElem++) {
				if (paramDataForAnalysis[stepElem - 1] > paramDataForAnalysis[stepElem]) {
					let newAssignmentItem = paramDataForAnalysis[stepElem - 1];
					paramDataForAnalysis[stepElem - 1] = paramDataForAnalysis[stepElem];
					paramDataForAnalysis[stepElem] = newAssignmentItem;
					changedIndication = true;
					timerChangeShakerSort++;
				}
				timerCompareShakerSort++;
			}
	
			rightIndex--;
			if (changedIndication === false) break;
	
			//^ блок в напрямку (справа-наліво)
			changedIndication = false;
			for (let stepElem = rightIndex; stepElem > leftIndex; stepElem--) {
				if (paramDataForAnalysis[stepElem - 1] > paramDataForAnalysis[stepElem]) {
					let newAssignmentItem = paramDataForAnalysis[stepElem - 1];
					paramDataForAnalysis[stepElem - 1] = paramDataForAnalysis[stepElem];
					paramDataForAnalysis[stepElem] = newAssignmentItem;
					changedIndication = true;
					timerChangeShakerSort++;
				}
				timerCompareShakerSort++;
			}
			leftIndex++;
			if (changedIndication === false) break;
		}
		return { paramDataForAnalysis, timerChangeShakerSort, timerCompareShakerSort };
	}
	
	const { paramDataForAnalysis, timerChangeShakerSort, timerCompareShakerSort } =
		getCountShakerSort(callFuncSetArrayData);
	document.write(
		`<div class="result__box-data">
		<div class="result__name-value"> Відсортований масив:
		<span class="result__answer-value"> ${paramDataForAnalysis}</span><div> 
		
		<div class="result__name-value"> Кількість порівнянь:
		<span class="result__answer-value"> ${timerChangeShakerSort}</span> разів<div>
		
		<div class="result__name-value">
		Кількість обмінів: <span class="result__answer-value"> ${timerCompareShakerSort}</span> разів<div><div>`
	);
}

