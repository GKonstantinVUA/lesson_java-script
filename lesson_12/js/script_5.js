// * Задача #5. Умови

//$ Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом
//$ 

if (confirm("Почати тестування?")) {
  let listNamesAnalysis = ["Орися", "Юля", "Сергій", "Наталка", "Олег", "Яна", "Юрко", "Стас"];

  function getArraySotringNames(paramDataNames) {
    for (let stepValue = 1; stepValue < paramDataNames.length; stepValue++) {
      const currentItemArray = paramDataNames[stepValue];
      let prevIndex = stepValue - 1;
      while (prevIndex >= 0 && paramDataNames[prevIndex] > currentItemArray) {
        paramDataNames[prevIndex + 1] = paramDataNames[prevIndex];
        prevIndex--;
      }
			paramDataNames[prevIndex + 1] = currentItemArray;
    }
		return paramDataNames;
	}
	const callFuncNamesList = getArraySotringNames(listNamesAnalysis);
	console.log(callFuncNamesList)

  function getNameLength(callFuncNamesList, searchNameLength = 5) {
    let startIndex = 0;
    let lastIndex = callFuncNamesList.length - 1;
    while (startIndex <= lastIndex) {
      const middle = Math.floor((startIndex + lastIndex) / 2);
      if (callFuncNamesList[middle].length === searchNameLength) return middle;
      if (callFuncNamesList[middle].length < searchNameLength) startIndex = middle + 1;
      if (callFuncNamesList[middle].length > searchNameLength) lastIndex = middle - 1;
    }
    return -1;
  }
  const callFuncNameLength = getNameLength(callFuncNamesList);
document.write(`<div class="result__box-data">
		<div class="result__name-value"> Iм'я довжиною в п'ять символів під індексом <span class="result__answer-value">${callFuncNameLength}</span></div></div>`);
}
