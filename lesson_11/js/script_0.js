// * Задача #0. Умови

//$ Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):</p>
//$ номери рядків від 0 до половини, стовпці від 0 до половини

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
	
	function getSumDataArray(paramDataMatrix) {
		let resultSumPathArray = 0;
		const valueHalfRowLimit = Math.floor(paramDataMatrix.length / 2);
		const valueHalfColumnsLimit = Math.floor(paramDataMatrix[0].length / 2);
	
		for (const dataRows of paramDataMatrix.slice(0, valueHalfRowLimit)) {
			for (const dataColumsCell of dataRows.slice(0, valueHalfColumnsLimit)) {
				resultSumPathArray += dataColumsCell;
			}
		}
		return resultSumPathArray
	}
	callFunsResSumArrayFirstQuarter = getSumDataArray(callFunctionBuildArray)
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value">${callFunsResSumArrayFirstQuarter}
		</span>
		</div>
		</div>`);
}