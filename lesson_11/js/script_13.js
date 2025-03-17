// * Задача #13. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ відсортувати кожен тиждень за зростанням

if (confirm('Почати тестування?')) {
	function getBuildArrayProfitStores(
		paramTotalNumbStores,
		paramDataEachStore,
		minLimitValueProfit,
		maxLimitValueProfit
	) {
		const bodyMatrixDataStores = [];
		for (let stepStores = 0; stepStores < paramTotalNumbStores; stepStores++) {
			bodyMatrixDataStores.push([]);
			for (let dataEachStore = 0; dataEachStore < paramDataEachStore; dataEachStore++) {
				const randomValueProfitStore =
					minLimitValueProfit +
					Math.floor(Math.random() * (maxLimitValueProfit + minLimitValueProfit - 1));
				bodyMatrixDataStores[stepStores].push(randomValueProfitStore);
			}
		}
		return bodyMatrixDataStores;
	}
	// const enterNumStores = parseInt(prompt('Поле для введення', 'Введіть кількість магазинів для аналізу'))
	const callFuncArrayProfit = getBuildArrayProfitStores(7, 7, 5000, 50000);
	console.log(callFuncArrayProfit);
	
	
	//* Рішення
	function getEachWeekTermsIncreasing(parameterDataAnalysis) {
		for (const rowAnalysisData of parameterDataAnalysis) {
		rowAnalysisData.sort((firstItem, secondItem) => firstItem - secondItem);
	}
		return parameterDataAnalysis
	}

	const callFuncEachWeekTermsIncreasing = getEachWeekTermsIncreasing(callFuncArrayProfit);
	console.log(callFuncEachWeekTermsIncreasing);
}