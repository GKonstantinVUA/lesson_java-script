// * Задача #7. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ загальний прибуток кожного магазину за тиждень

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
	
	function getProfitEachStoreWeek(paramDataForAnalysis) {
	
		for (let stepEachStore = 0; stepEachStore < paramDataForAnalysis.length; stepEachStore++) {
			let profitEachStoreWeek = 0;
			for (let profitEachStore = 0; profitEachStore < paramDataForAnalysis[stepEachStore].length; profitEachStore++) {
				profitEachStoreWeek += paramDataForAnalysis[stepEachStore][profitEachStore];
			}
			document.write(` 
		<div class="result__box-data">
		<div class="result__name-value"> 
		Магазин # <span class="result__answer-value"> ${stepEachStore + 1}</span>: <span class="result__answer-value"> ${profitEachStoreWeek}</span> грн.</div>
		</div>`);
		}
	}
	const callProfitEachStoreWeek = getProfitEachStoreWeek(callFuncArrayProfit);
}