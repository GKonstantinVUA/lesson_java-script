// * Задача #5. Умови

//$ Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):</p>

//$ суму непарних стовпців

if (confirm('Почати тестування?')) {
	function getBuildMatrixArray(parameterRowArray, parameterColumnArray, minLimitValue, maxLimitValue) {
		const totalSetDataAtrray = [];
		for (let iterateOverValuesRows = 0; iterateOverValuesRows < parameterRowArray; iterateOverValuesRows++) {
			const collectionDataColumns = [];
			for (let stepValuesColumns = 0; stepValuesColumns < parameterColumnArray; stepValuesColumns++) {
				collectionDataColumns.push(minLimitValue + Math.floor(Math.random() * (maxLimitValue - minLimitValue + 1))
				);
			}
			totalSetDataAtrray.push(collectionDataColumns);
		}
		return totalSetDataAtrray;
	}
	
	let callFunctionBuildArray = getBuildMatrixArray(8, 12, 1, 100);
	console.log(callFunctionBuildArray);
	
	function getSumUnpairedRows(paramDataMainArray) {
		let resSumUnPairedRows = 0
		for (let dataRowArray = 1; dataRowArray < paramDataMainArray.length; dataRowArray+=2) {
			for (let dataColArray = 0; dataColArray < paramDataMainArray[0].length; dataColArray++) {
				resSumUnPairedRows+=paramDataMainArray[dataRowArray][dataColArray]
			}
		}
		return resSumUnPairedRows
	}
	
	let callFuncArrayUnpairedRows = getSumUnpairedRows(callFunctionBuildArray);
	document.write(`<div><div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value">${callFuncArrayUnpairedRows}</span>
		</div>
		</div>`);
}