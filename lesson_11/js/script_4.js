// * Задача #4. Умови

//$ Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):</p>
//$ суму парних рядків

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
	
	
	
	function getSumPairedRows(paramDataMainArray) {
		let resSumPairedRows = 0;
		for (let dataRow = 0; dataRow < paramDataMainArray.length; dataRow += 2) {
			for (let dataColumsCell = 0; dataColumsCell < paramDataMainArray[dataRow].length; dataColumsCell++) {
				resSumPairedRows += paramDataMainArray[dataRow][dataColumsCell];
			}
		}
		return resSumPairedRows;
	}
	
	let callFunctionPairdRowsArray = getSumPairedRows(callFunctionBuildArray);
	document.write(`<div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value"> ${callFunctionPairdRowsArray}</span>
		</div>
		</div>`);
}