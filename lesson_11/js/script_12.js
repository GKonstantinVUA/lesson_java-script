// * Задача #12. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ сформувати загальний список (одновимірний масив) зі значенням, які що більші за 20000

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
	
	function getBuildArraySample(paramDataAnalysis) {
		let dataSamplingNewArray = [];
		for (const stepRow of paramDataAnalysis) {
			for (const eachColm of stepRow) {
				if (eachColm > 20000) dataSamplingNewArray.push(eachColm);
			}
		}
		return dataSamplingNewArray
	}
	const callBuildArrayNewData = getBuildArraySample(callFuncArrayProfit);
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"> 
		Результат:
		<span class="result__answer-value">${callBuildArrayNewData}</span>
		</div>
		</div>`)
}