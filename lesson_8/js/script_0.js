// * Задача #0. Умови

//$ Задача 1. Дано масив, який містить оцінки з К предметів.
//$ Знайти середній бал та з'ясувати до якої категорії він відноситься
//$ (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)) .
//$ 2 - від 1–3 баллів, 3 - від 4–6 баллів, 4 - від 7–9 баллів, 5 - від 10–12 баллів

if (confirm('Почати тестування?')) {
	const studentGradeSet = [3, 8, 12, 12, 11, 12, 10, 5, 6, 7, 8, 12, 6, 8, 4, 7, 11, 12];
	
	function averageBall(paramRatings) {
		let resAvgValue = 0;
		for (stepValue = 0; stepValue < paramRatings.length; stepValue++) {
			resAvgValue += paramRatings[stepValue];
		}
		return (resAvgValue/paramRatings.length).toFixed(2);
	}
	
	let callFunctAgvValue = averageBall(studentGradeSet)
	document.write(`<div class="result__box-data"><div class="result__name-value"> Результат: <span class="result__answer-value">Середній бал становить: ${callFunctAgvValue}</span></div></div>`)
	
	function getCategoryStudent(paramAvgBall) {
		resNameCategory = ''
		if (paramAvgBall < 4) resNameCategory = 'Категорія учня: Двієчник'
		else if (paramAvgBall < 7) resNameCategory = 'Категорія учня: Трієчник'
		else if (paramAvgBall < 10) resNameCategory = 'Категорія учня: Хорошист'
		else resNameCategory = 'Категорія учня: Відмінник'
		return resNameCategory
	}
		
	let callFuncCategory = getCategoryStudent(callFunctAgvValue)
	document.write(`<div class="result__box-data"><div class="result__name-value"> Результат: <span class="result__answer-value">${callFuncCategory}</span></div></div>`)
}
