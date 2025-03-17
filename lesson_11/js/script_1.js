// * Задача #1. Умови

//$ Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):</p>
//$ 2)	номери рядків від 0 до половини, стовпці від половини до кінця

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
	
	
	function getSumThirdPathArray(paramTotalDataArray) {
		let dataСollectionUnderCondition = 0;
		const halfRegionRows = Math.ceil(paramTotalDataArray.length / 2);
		const halfRegionColumns = Math.floor(paramTotalDataArray[0].length / 2);
		for (const rowSample of paramTotalDataArray.slice(halfRegionRows)) {
			for (const columnSample of rowSample.slice(0, halfRegionColumns)) {
				dataСollectionUnderCondition+=columnSample
				}
			}
		return dataСollectionUnderCondition;
	}
	
	callFucnResThirdPathArray = getSumThirdPathArray(callFunctionBuildArray)
	document.write(`<div><div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value"> ${callFucnResThirdPathArray}
		</span>
		</div>
		</div>`)
}
