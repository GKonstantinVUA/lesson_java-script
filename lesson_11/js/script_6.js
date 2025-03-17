// * Задача #6. Умови

//$ Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців):</p>
//$ у парних рядках – непарні стовпці, у непарних – парні

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
	
	//* Рішення
	
	function getMixSampleItemsArray (paramDataMainArray) {
		let sumMixSampleItemsArray = 0
		for (let stepRowValue = 0; stepRowValue < paramDataMainArray.length; stepRowValue++) {
			for (let stepColValue = 0; stepColValue < paramDataMainArray[stepRowValue].length; stepColValue++) {
				if ((stepRowValue % 2 === 0 && stepColValue % 2 !== 0) || (stepRowValue%2 !==2 && stepColValue%2===0))
					sumMixSampleItemsArray += paramDataMainArray[stepRowValue][stepColValue]
			}
		}
		return sumMixSampleItemsArray
	}
	
	let callFuncArrayMix = getMixSampleItemsArray(callFunctionBuildArray);
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value">${callFuncArrayMix}
		</span>
		</div>
		</div>`);
}