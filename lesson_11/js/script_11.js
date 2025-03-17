// * Задача #11. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ максимальний прибуток за середу

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
	
	let maxThirdColumn = -Infinity;
	for (const row of callFuncArrayProfit) {
		if (row[2] > maxThirdColumn) {
			maxThirdColumn = row[2];
		}
	}
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value"> 
		<span class="result__answer-value">
		Результат: ${maxThirdColumn}</span> грн.
		</div>
		</div>`);
}