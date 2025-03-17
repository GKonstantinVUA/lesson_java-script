// * Задача #8. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.)


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
	function getSumDayProfit(profit) {
		for (let dayProfitIndex = 0; dayProfitIndex < profit[0].length; dayProfitIndex++) {
			let sum = 0;
			for (let shop of profit) {
				sum += shop[dayProfitIndex];
			}
			document.write(`<div class="result__box-data">
		<div class="result__name-value">Прибуток за <span class="result__answer-value">${dayProfitIndex + 1}</span> день: <span class="result__answer-value">${sum}</span> грн.</div>
		</div>`);
		}
	}
	getSumDayProfit(callFuncArrayProfit);
}