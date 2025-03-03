// * Задача #1. Умови

//$ Дано масив елементів
//$ Усі елементи, які більші за перший елемент помножити на 2

if (confirm('Почати тестування?')) {
	const arrayForAnalyze = [39, 48, 27, 61, 41, 25, 90, 18];
	function getProcessingData(parametrForAnalyze) {
		parametrForAnalyze.forEach((currentItem, indexArray, arrayCurrent)=>currentItem>parametrForAnalyze[0]? arrayCurrent[indexArray]*=2:currentItem)

		return parametrForAnalyze.join(', ')
	}
	const userEnterParametr = document.write(`<div class="result__box-data"><div class="result__name-value"> Вхідні дані: <span class="result__answer-value"> ${arrayForAnalyze}</span></div><div class="result__name-value"> Результат: <span class="result__answer-value"> ${getProcessingData(arrayForAnalyze)}</span></div></div>`)
}

