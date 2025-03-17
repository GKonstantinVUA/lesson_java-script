// * Задача #4. Умови

//$ Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом
//$


if (confirm('Почати тестування?')) {
	let arrayListNames = ['Аліна', 'Орися', 'Ольга', 'Юрко', 'Яків', 'Настя', 'Петро', 'Пилип'];

	function getArrayNameSort(paramListNames) {
		const lastItem = paramListNames.length - 2;
		for (let stepValue = 0; stepValue <= lastItem; stepValue++) {
			let minIndexValue = stepValue;
			for (let stepValueInner = stepValue + 1; stepValueInner < paramListNames.length; stepValueInner++) {
				if (paramListNames[stepValueInner] < paramListNames[minIndexValue]) minIndexValue = stepValueInner;
			}
			if (minIndexValue !== stepValue) {
				[paramListNames[stepValue], paramListNames[minIndexValue]] = [
					paramListNames[minIndexValue],
					paramListNames[stepValue],
				];
			}
		}
		return paramListNames;
	}
	const paramListNames = getArrayNameSort(arrayListNames);
	console.log(paramListNames);



	function getNamePeople(paramListNames, paramSearchName) {
		let startIndex = 0;
		let lastIndex = paramListNames.length - 1;
		while (startIndex <= lastIndex) {
			const middle = Math.floor((startIndex + lastIndex) / 2);
			if (paramListNames[middle] === paramSearchName) return middle;
			if (paramListNames[middle] < paramSearchName) startIndex = middle + 1;
			if (paramListNames[middle] > paramSearchName) lastIndex = middle - 1;
		}
		return -1;
	}

	let userEnterSearchName = prompt("Введіть ім'я для пошуку:", "Ольга");

	const nameEnterArray = getNamePeople(paramListNames, userEnterSearchName);
	document.write(`
		<div class="result__box-data">
		<div class="result__name-value">
		<span class="result__answer-value">${userEnterSearchName}</span> 
		знаходиться у масиві під 
		<span class="result__answer-value">${nameEnterArray}</span> 
		індексом 
		</div></div>`);
}
