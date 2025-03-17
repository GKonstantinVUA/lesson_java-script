// * Задача #9. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ загальний прибуток за робочі дні

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
	
	function getProfirStoresWorkDays(paramDataArrayForAnalysis) {
		let sumTotalProfitWorkDays = 0;
		for (const dataStores of paramDataArrayForAnalysis) {
			for (const profitEachDay of dataStores.slice(0, 5)) {
				sumTotalProfitWorkDays += profitEachDay;
			}
		}
		return sumTotalProfitWorkDays;
	}
	const callFuncGetProfirWorkDaysStores = getProfirStoresWorkDays(callFuncArrayProfit);
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value">
		Результат: <span class="result__answer-value">${callFuncGetProfirWorkDaysStores}</span> грн.
		</div>
		</div>`);
}