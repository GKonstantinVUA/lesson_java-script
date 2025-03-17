// * Задача #3. Умови

//$ Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком

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


	function getCountBubbleSort(paramDataForAnalysisBubbleSort) {
		let indicationChange,
			endIdItem = paramDataForAnalysisBubbleSort.length,
			formationResTableBubbleSort = '';
	
		do {
			indicationChange = false;
			for (let stepItem = 0; stepItem < endIdItem; stepItem++) {
				if (paramDataForAnalysisBubbleSort[stepItem - 1] > paramDataForAnalysisBubbleSort[stepItem]) {
					const newAssignment = paramDataForAnalysisBubbleSort[stepItem - 1];
					paramDataForAnalysisBubbleSort[stepItem - 1] = paramDataForAnalysisBubbleSort[stepItem];
					paramDataForAnalysisBubbleSort[stepItem] = newAssignment;
					indicationChange = true;
					formationResTableBubbleSort += `<table class="result__table-main"><tr><td>${paramDataForAnalysisBubbleSort}</td></tr></table>`;
				}
			}
			endIdItem--;
		} while (indicationChange);
		paramDataForAnalysisBubbleSort;
		return formationResTableBubbleSort;
	}
	
	const callFunctionResTableBubbleSort = getCountBubbleSort([...callFuncSetArrayData]);
	document.write(`<div class="result__box-data result__box-data-flex-box">
		<div class="result__name-value result__name-value-flex"> Результат Bubble Sort: ${callFunctionResTableBubbleSort}</div>`);

//* -----------------------------------------------------------------------------------------


	function getCountShakerSort(paramDataForAnalysis) {
		let leftIndex = 0,
			rightIndex = paramDataForAnalysis.length - 1,
			formationResTableShakerSort = '';
	
		while (leftIndex < rightIndex) {
			//^ зліва-направо
			let changedIndication = false;
			for (let stepElem = leftIndex + 1; stepElem <= rightIndex; stepElem++) {
				if (paramDataForAnalysis[stepElem - 1] > paramDataForAnalysis[stepElem]) {
					let newAssignmentItem = paramDataForAnalysis[stepElem - 1];
					paramDataForAnalysis[stepElem - 1] = paramDataForAnalysis[stepElem];
					paramDataForAnalysis[stepElem] = newAssignmentItem;
					changedIndication = true;
					formationResTableShakerSort += `<table class="result__table-main"><tr><td>${paramDataForAnalysis}</td></tr></table>`;
				}
	
			}
	
			rightIndex--;
			if (changedIndication === false) break;
	
			//^ справа-наліво
			changedIndication = false;
			for (let stepElem = rightIndex; stepElem > leftIndex; stepElem--) {
				if (paramDataForAnalysis[stepElem - 1] > paramDataForAnalysis[stepElem]) {
					let newAssignmentItem = paramDataForAnalysis[stepElem - 1];
					paramDataForAnalysis[stepElem - 1] = paramDataForAnalysis[stepElem];
					paramDataForAnalysis[stepElem] = newAssignmentItem;
					changedIndication = true;
					formationResTableShakerSort += `<table class="result__table-main"><tr><td>${paramDataForAnalysis}</td></tr></table>`;
				}
			}
			leftIndex++;
			if (changedIndication === false) break;
		}
		return formationResTableShakerSort;
	}
	
	const callFunctionResTableShakerSort=	getCountShakerSort([...callFuncSetArrayData]);
	
	document.write(`<div class="result__name-value result__name-value-flex"> Результат Shaker Sort: ${callFunctionResTableShakerSort}</div>`);

//* -----------------------------------------------------------------------------------------

	function getSortInsert(paramArrayAnalysis) {
		let currentElement, idValue, formationResTableSortInsert = '';
		for (let stepValue = 1; stepValue < paramArrayAnalysis.length; stepValue++) {
			currentElement = paramArrayAnalysis[stepValue];
			idValue = stepValue - 1;
			while (idValue >= 0 && paramArrayAnalysis[idValue] > currentElement) {
				paramArrayAnalysis[idValue + 1] = paramArrayAnalysis[idValue];
				idValue = idValue - 1;
				paramArrayAnalysis[idValue + 1] = currentElement;
			}
	
			formationResTableSortInsert += `<table class="result__table-main"><tr><td>${paramArrayAnalysis}</td></tr></table>`;
		}
		return formationResTableSortInsert
	}
	const callFuncSortInsert = getSortInsert([...callFuncSetArrayData]);
	document.write(`<div class="result__name-value result__name-value-flex">Результат Insert Sort: ${callFuncSortInsert}</div>`);
}
