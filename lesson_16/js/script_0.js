// * Задача #0. Умови
//$ Створити клас TDate для роботи із датами у форматі “день.місяць.рік”
//$ Дата представляється структурою із трьома полями
//$ Реалізувати методи збільшення/зменшення дати на певну кількість днів, місяців чи років
//$ Введення та виведення дати реалізувати за допомогою методу toString.

if (confirm('Почати тестування?')) {
class TDate {
	constructor(paramValueDay, paramValueMonth, paramValueYear) {
		this.ValueYear = paramValueYear;
		this.ValueMonth = paramValueMonth;
		this.ValueDay = paramValueDay;
	}

	//# Параметри для дня
	#valueDay;
	get ValueDay() {
		return this.#valueDay;
	}

	set ValueDay(transferValueDay) {
		const maxValueDayCurrentMounth = this.getValueDayCurrentMonth();
		if (
			transferValueDay === null ||
			transferValueDay === undefined ||
			transferValueDay === '' ||
			isNaN(Number(transferValueDay))
		)
			throw new Error(`Значення дня відсутне або введено з помилкою`);
		if (transferValueDay < 1 || transferValueDay > maxValueDayCurrentMounth)
			throw new Error('Введено не корректне значення дня для відповідного року');
		else this.#valueDay = transferValueDay;
	}

	//# Визначення кількості днів у конкретному році
	getValueDayCurrentMonth() {
		if (this.ValueMonth === 2)
			return (this.ValueYear % 4 === 0 && this.ValueYear % 100 !== 0) || this.ValueYear % 400 === 0
				? 29
				: 28;
		else if (
			this.ValueMonth === 4 ||
			this.ValueMonth === 6 ||
			this.ValueMonth === 9 ||
			this.ValueMonth === 11
		)
			return 30;
		else return 31;
	}

	//# Параметри для місяця
	#valueMonth;
	get ValueMonth() {
		return this.#valueMonth;
	}

	set ValueMonth(transferValueMonth) {
		if (
			transferValueMonth === null ||
			transferValueMonth === undefined ||
			transferValueMonth === '' ||
			isNaN(Number(transferValueMonth))
		)
			throw new Error('Значення для місяця відсутне або введено з помилкою');
		if (transferValueMonth < 1 || transferValueMonth > 12)
			throw new Error('Значення для місяця повинно бути від 1 до 12');
		else this.#valueMonth = transferValueMonth;
	}

	//# Параметри для року
	#valueYear;
	get ValueYear() {
		return this.#valueYear;
	}

	set ValueYear(trasferValueYear) {
		if (
			trasferValueYear === null ||
			trasferValueYear === undefined ||
			trasferValueYear === '' ||
			isNaN(Number(trasferValueYear))
		)
			throw new Error('Значення для року відсутне або введено з помилкою');
		if (trasferValueYear < 1) throw new Error('Значення дня року повинно бути чотирьохзначним');
		if (trasferValueYear < 0) throw new Error("Значення для року не може бути від'ємним");
		else this.#valueYear = trasferValueYear;
	}

	//$ Метод для збільшення року
	methodIncreasingYear(valueYearForIncreasing) {
		if (
			valueYearForIncreasing === null ||
			valueYearForIncreasing === undefined ||
			valueYearForIncreasing === '' ||
			isNaN(Number(valueYearForIncreasing))
		)
			throw new Error('Значення для року відсутне або введено з помилкою');
		if (valueYearForIncreasing < 0) throw new Error(`Передане значення для року не може бути від'ємним`);
		this.ValueYear += valueYearForIncreasing;
		this.ValueDay = Math.min(this.ValueDay, this.getValueDayCurrentMonth());
	}

	//$ Метод для зменьшення року
	methodDecreasingYear(valueYearForDecreasing) {
		if (valueYearForDecreasing < 0) throw new Error(`Передане значення для року не може бути від'ємним`);
		if (
			valueYearForDecreasing === null ||
			valueYearForDecreasing === undefined ||
			valueYearForDecreasing === '' ||
			isNaN(Number(valueYearForDecreasing))
		)
			throw new Error('Значення для року відсутне або введено з помилкою');
		this.ValueYear -= valueYearForDecreasing;
		this.ValueDay = Math.min(this.ValueDay, this.getValueDayCurrentMonth());
	}

	//$ Метод для збільшення місяця
	methodIncreasingMonth(valueMonthForIncreasing) {
		if (
			valueMonthForIncreasing === null ||
			valueMonthForIncreasing === undefined ||
			valueMonthForIncreasing === '' ||
			isNaN(Number(valueMonthForIncreasing))
		)
			throw new Error('Значення для місяця відсутне або введено з помилкою');
		if (valueMonthForIncreasing < 0)
			throw new Error(`Передане значення для місяця не може бути від'ємним`);
		this.ValueMonth = ((this.ValueMonth + valueMonthForIncreasing - 1) % 12) + 1;
		this.ValueDay = Math.min(this.ValueDay, this.getValueDayCurrentMonth());
	}

	//$ Метод для зменьшення місяця
	methodDecreasingMonth(valueMonthForDecreasing) {
		if (
			valueMonthForDecreasing === null ||
			valueMonthForDecreasing === undefined ||
			valueMonthForDecreasing === '' ||
			isNaN(Number(valueMonthForDecreasing))
		)
			throw new Error('Значення для місяця відсутне або введено з помилкою');
		if (valueMonthForDecreasing < 0)
			throw new Error(`Передане значення для місяця не може бути від'ємним`);
		if (this.ValueMonth > valueMonthForDecreasing) this.ValueMonth -= valueMonthForDecreasing;
		else {
			this.ValueMonth = 12 - (((valueMonthForDecreasing - this.ValueMonth - 1) % 12) + 1);
		}
		this.ValueDay = Math.min(this.ValueDay, this.getValueDayCurrentMonth());
	}

	//$ Метод для збільшення дня
	methodIncreasingDay(valueDayForIncreasing) {
		const totalNumberDays = this.getValueDayCurrentMonth();
		if (
			valueDayForIncreasing === null ||
			valueDayForIncreasing === undefined ||
			valueDayForIncreasing === '' ||
			isNaN(Number(valueDayForIncreasing))
		)
			throw new Error('Значення дня відсутне або введено з помилкою');
		if (valueDayForIncreasing < 0) throw new Error(`Передане значення для дня не може бути від'ємним`);
		this.ValueDay = ((this.ValueDay + valueDayForIncreasing - 1) % totalNumberDays) + 1;
	}

	//$ Метод для зменьшення дня
	methodDecreasingDay(valueDayForDecreasing) {
		const totalNumDays = this.getValueDayCurrentMonth();
		if (valueDayForDecreasing < 0) throw new Error(`Не можна зменшувати на від'ємне число`);
		if (this.ValueDay > valueDayForDecreasing) this.ValueDay -= valueDayForDecreasing;
		else this.ValueDay = totalNumDays - (((valueDayForDecreasing - this.ValueDay - 1) % totalNumDays) + 1);
	}

	//# Відображення результату
	toString() {
		return `<div class="result__box-data">
			<div class="result__name-value">Поточна дата: <span class="result__answer-value">${this.ValueDay}.${this.ValueMonth}.${this.ValueYear}</span></div></div>`;
	}
}

try {
	const callClassTDate = new TDate(25, 2, 2025);
	document.write(callClassTDate);
	callClassTDate.methodIncreasingYear(3);
	document.write(callClassTDate);
	callClassTDate.methodDecreasingYear(2);
	document.write(callClassTDate);
	callClassTDate.methodIncreasingMonth(5);
	document.write(callClassTDate);
	callClassTDate.methodDecreasingMonth(2);
	document.write(callClassTDate);
	callClassTDate.methodIncreasingDay(6);
	document.write(callClassTDate);
	callClassTDate.methodDecreasingDay(2);
	document.write(callClassTDate);

} catch (error) {
	document.write(`${error.message}`);
}
}