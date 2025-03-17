// * Задача #3. Умови

//$ Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
//$ номери рядків від половини до кінця, стовпці від половини до кінця

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
	
	
	function getSumFourthQuarterArray(paramDataArray) {
		const halfRegionRows = Math.ceil(paramDataArray.length / 2);
		const halfRegionColumns = Math.ceil(paramDataArray[0].length / 2);
		let resultSumFourthPathArray = 0;
		for (const regionRows of paramDataArray.slice(halfRegionRows)) {
			for (const regionColumns of regionRows.slice(halfRegionColumns)) {
				resultSumFourthPathArray += regionColumns;
			}
		}
		return resultSumFourthPathArray;
	}
	
	let callFuncFourthQuarterArray = getSumFourthQuarterArray(callFunctionBuildArray);
	document.write(`<div><div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value">${callFuncFourthQuarterArray}</span>
		</div>
		</div>`)
}