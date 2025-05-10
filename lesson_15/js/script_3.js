// * Задача #3. Умови
//$ Розробити клас MultChecker для перевірки таблиці множення
//$ Поля(властивості):
//$ ▪	Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7);
//$ ▪	Кількість правильних відповідей;
//$ ▪	Кількість неправильних відповідей;
//$ Методи (дії):
//$ ▪	Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване);
//$ ▪	Перевірка правильності вказаної відповіді render - виведення інформації про тестування на екран;

if (confirm('Почати тестування?')) {
	class multiChecker {
			constructor(paramMinValue, paramMaxValue, paramValueForChecking) {
				this.minValue = paramMinValue;
				this.maxValue = paramMaxValue;
				this.valueForChecking = paramValueForChecking;
				this.correctAnswer = 0;
				this.wrongAnswer = 0;
			}
		
			getRandomValue() {
				return this.minValue + Math.floor(Math.random() * this.maxValue);
			}
		
			testMultiplicationTable() {
				for (let stepCheckTable = this.minValue; stepCheckTable <= this.maxValue; stepCheckTable++) {
					const randomValue = this.getRandomValue();
					let correctResult = this.valueForChecking * randomValue;
					let userAnswer = parseInt(prompt(`Скільки буде: ${this.valueForChecking} x ${randomValue} = `, 'Результат'));
					this.checkAnswer(correctResult, userAnswer);
				}
			}
		
			checkAnswer(correctResult, userAnswer) {
				if (correctResult===userAnswer) this.correctAnswer++;
				else this.wrongAnswer++;
			}
		
			render() {
				document.write(`
					<div class="result__box-data">
					<div class="result__name-value">Кількість правильних результатів: <span class="result__answer-value">${this.correctAnswer}</span></div>
					<div class="result__name-value">Кількість не правильних результатів: <span class="result__answer-value">${this.wrongAnswer}</span></div>`);
			}
		}
		
		const testRes = new multiChecker(1, 9, 7);
		testRes.testMultiplicationTable();
		testRes.render();
}