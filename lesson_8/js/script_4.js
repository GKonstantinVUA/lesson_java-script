// * Задача #4. Умови

//$ Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від - 500 до 500)
//$ Надаючи користувачу можливість вибирати номери елементів (поки він не відмовиться)
//$ Знайти сумарний виграш

if (confirm('Почати тестування?')) {
	function getArraySetNumbers(numberValuesWin, lowerLimit, maxLimit) {
		const setArrayDataWin = [];
		for (let intervalValues = 0; intervalValues < numberValuesWin; intervalValues++) {
			setArrayDataWin.push(lowerLimit + Math.floor(Math.random() * (maxLimit - lowerLimit + 1)))
		}
		return setArrayDataWin
	}

	function getGameUser(numberValuesWin, lowerLimit, maxLimit) {
		let resTotalSumWinGame = 0

		for (; ;) {
			let callFinctionArrayWin = getArraySetNumbers(numberValuesWin, lowerLimit, maxLimit)
			console.log(callFinctionArrayWin);
			let userEnterValGame = prompt(`Ваш виграш становить: ${resTotalSumWinGame} грн\nВведіть значення від 1 до ${numberValuesWin}`, 'Введіть значення')

			if (userEnterValGame === null) break

			let userInput = parseInt(userEnterValGame - 1);
			if (userInput < callFinctionArrayWin.length) resTotalSumWinGame += callFinctionArrayWin[userInput]
		}
		return resTotalSumWinGame
	}

		let userEnterNumberValWin = parseInt(prompt('Поле для формування кількості значень сум для виграшу', 'Поле для введення'))
		let callFuncGame = getGameUser(userEnterNumberValWin, -500, 500)
		document.write(`<div class="result__box-data"><div class="result__name-value"> Загальний виграш становить: <span class="result__answer-value"> ${callFuncGame} грн </span></div></div>`)
}
