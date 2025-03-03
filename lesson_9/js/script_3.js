// * Задача #3. Умови

//$ Дано масив імен
//$ Сформувати масив з перших літер цих імен

const arrayNamesPeople = ['Амелія', 'Костянтин', 'Сергій', 'Аглая', 'Дмитро', 'Іван', 'Аіда'];
if (confirm('Почати тестування?')) {
	function getArrayFirstLetterName(paramForSearch) {
		let arrayFirstLetterName = [];
		paramForSearch.map(currentNamePerson => arrayFirstLetterName.push(currentNamePerson[0]))
		
		return arrayFirstLetterName.join(', ');
	}
	let callFuncutionForSample = getArrayFirstLetterName(arrayNamesPeople)
	document.write(`<div class="result__box-data"><div class="result__name-value"> Вхідні дані: <span class="result__answer-value"> ${arrayNamesPeople.join(', ')}</span></div><div class="result__name-value"> Результат: <span class="result__answer-value"> ${callFuncutionForSample}</span></div></div>`)
}