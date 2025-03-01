// * Задача #2. Умови

//$ Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які:
//$ 1) Кількість номерів автомобілів які починаються на букву 'А'
//$ 2) Кількість номерів автомобілів в яких перша і остання літери співпадають
//$ 3) Кількість номерів автомобілів в яких більше 5 символів

if (confirm('Почати тестування?')) {
	let arrayListСarТumbers = ['AD485SE', '567FG4D', 'A3GHYA', '34AB', 'O45HO', 'S23R', 'N45SRUIN'];
	
	//^ Кількість номерів автомобілів які починаються на букву 'А';
	function getNumberCarsReadLetterA(arraySetNumbersCars) {
		let calculationValues = 0;
		for (
			let conditionIntersection = 0;
			conditionIntersection < arraySetNumbersCars.length;
			conditionIntersection++
		) {
			if (arraySetNumbersCars[conditionIntersection][0] === 'A') calculationValues++;
		}
		return calculationValues;
	}
	let choiceFunction = getNumberCarsReadLetterA(arrayListСarТumbers);
	document.write(`<div class="result__box-data"><div class="result__name-value"> Кількість номерів автомобілів які починаються на букву 'А':<span class="result__answer-value"> ${choiceFunction}</span></div></div>`)
	
	//^ Кількість номерів автомобілів в яких перша і остання літери співпадають;
	function getCompareLetters(arrayCompareSymbols) {
		let calcNumbCoincidences = 0
		for (let transitionArray = 0; transitionArray < arrayCompareSymbols.length; transitionArray++) {
			let lastLetter = arrayCompareSymbols[transitionArray][arrayCompareSymbols[transitionArray].length-1]
			if (arrayCompareSymbols[transitionArray][0] === lastLetter)
				calcNumbCoincidences++
		}
		return calcNumbCoincidences
	}
	
	let resNumbsCoincidencesCars = getCompareLetters(arrayListСarТumbers)
	document.write(`<div class="result__box-data"><div class="result__name-value"> Кількість автомобілів в яких співпадають перша та остання літери: <span class="result__answer-value"> ${resNumbsCoincidencesCars}</span></div></div>`)
	
	//^ Кількість номерів автомобілів в яких більше 5 символів;
	function getListNumbCondition(paramSearchData) {
		let itemResult = 0;
		for (let stepTransition = 0; stepTransition < paramSearchData.length; stepTransition++) {
			if (paramSearchData[stepTransition].length > 5) itemResult++;
		}
		return itemResult;
	}
	let callFunctionProcessing = getListNumbCondition(arrayListСarТumbers);
	document.write(`<div class="result__box-data"><div class="result__name-value"> Кількість номерів автомобілів в яких більше 5 символів: <span class="result__answer-value"> ${callFunctionProcessing}</span></div></div>`);
}