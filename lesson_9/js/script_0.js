// * Задача #0. Умови

//$ Дано масив елементів
//$ Знайти добуток додатних елементів

if (confirm('Почати тестування?')) {
	const arrayValuesSum = [50, 21, 98, 86, 76, 66, 45];
	function getSunItemsWithArray(parameterForCalculation) {
		let calculationResult=1
		for (let temporaryArray of parameterForCalculation)
			if (temporaryArray>0) calculationResult *= temporaryArray
		return calculationResult
	}

	const enterUserParam = document.write(`<div class="result__box-data"><div class="result__name-value">Вхідні дані: <span class="result__answer-value"> ${arrayValuesSum}</span></div><div class="result__name-value">Результат добутку: <span class="result__answer-value"> ${getSunItemsWithArray(arrayValuesSum)}</span></div></div>`)
}
