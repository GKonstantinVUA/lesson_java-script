// * Задача #10. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ загальний прибуток за вихідні дні

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
	
	function getTotalProfitStoresWeekend(paramDataArrayAnalysis) {
		let sumTotalProfitStoresWeekend = 0
		for (const indicationStores of paramDataArrayAnalysis) {
			for (const valuesWeekendEachStotes of indicationStores.slice(5, 8)) {
				sumTotalProfitStoresWeekend += valuesWeekendEachStotes
			}
		}
		return sumTotalProfitStoresWeekend
	}
	const callFuncTotalProfitWeekendStores = getTotalProfitStoresWeekend(callFuncArrayProfit);
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"> 
		Результат: <span class="result__answer-value">${callFuncTotalProfitWeekendStores}</span> грн.
		
		</div>
		</div>`)
}