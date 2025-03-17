// * Задача #14. Умови

//$ Дано інформацію про прибуток К магазинів протягом тижня. Знайти:
//$ відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків

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

	
	//* Рішення
	callFuncArrayProfit.sort((prevItem, currentItem) => {
		const maxValueRowOne = Math.max(...prevItem)
		const maxValueRowTwo = Math.max(...currentItem)
		return maxValueRowTwo - maxValueRowOne	
	})
	console.log(callFuncArrayProfit)
	}