// * Задача #2. Умови
//$ Об’єкт ‘Фірма’ (використати члени-класи)
//$ Поля:
//$ ▪	назва фірми;
//$ ▪	дата заснування (рік, місяць);
//$ ▪	послуги (назва послуги, вартість, термін виконання);
//$ ▪	адреси філіалів (країна, місто, вулиця, номер будинку);
//$ Методи:
//$ ▪	визначення кількості років існування фірми;
//$ ▪	виведення всіх філіалів фірми у вказаному місті;
//$ ▪	виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

if (confirm('Почати тестування?')) {
	//@ Клас датa заснування
	class DateFoundationCompany {
		constructor(paramMounthFoundation, paramYearFoundation) {
			this.YearFoundation = paramYearFoundation;
			this.MounthFoundation = paramMounthFoundation;
			this.NameMounth = [
				'Січень',
				'Лютий',
				'Березень',
				'Квітень',
				'Травень',
				'Червень',
				'Липень',
				'Серпень',
				'Вересень',
				'Жовтень',
				'Листопад',
				'Грудень',
			];
		}
	
		//# Параметр для року заснування
		#yearFoundation;
		get YearFoundation() {
			return this.#yearFoundation;
		}
	
		set YearFoundation(transferYearFoundation) {
			if (
				transferYearFoundation === undefined ||
				transferYearFoundation === null ||
				transferYearFoundation === '' ||
				isNaN(Number(transferYearFoundation))
			)
				throw new Error('Рік заснування компанії не введено або введено з помилкою');
			if (transferYearFoundation < 1) throw new Error("Рік не може бути від'ємною величеною");
			else this.#yearFoundation = transferYearFoundation;
		}
	
		//# Параметр для місяця заснування
		#mounthFoundation;
		get MounthFoundation() {
			return this.NameMounth[this.#mounthFoundation - 1];
		}
	
		set MounthFoundation(transferMounthFoundation) {
			if (
				transferMounthFoundation === undefined ||
				transferMounthFoundation === null ||
				transferMounthFoundation === '' ||
				isNaN(Number(transferMounthFoundation))
			)
				throw new Error('Місяць заснування компанії не введено або введено з помилкою');
			if (transferMounthFoundation < 0) throw new Error("Місяць не може бути від'ємною величеною");
			if (transferMounthFoundation < 1 || transferMounthFoundation > 12)
				throw new Error('Номер місяця повинен бути від 1 до 12');
			this.#mounthFoundation = transferMounthFoundation;
		}
	
		toString() {
			return `Дата заснування компанії: ${this.MounthFoundation} ${this.YearFoundation} року`;
		}
	}
	
	//@ Клас послуги (назва послуги, вартість, термін виконання);
	class Service {
		constructor(paramNameService, paramServicePrice, paramDeadlineExecution) {
			this.NameService = paramNameService;
			this.ServicePrice = paramServicePrice;
			this.DeadlineExecution = paramDeadlineExecution;
		}
	
		//# Параметр назви сервісу
		#nameService;
		get NameService() {
			return this.#nameService;
		}
	
		set NameService(transferNameService) {
			if (transferNameService.trim() === '')
				throw new Error('Назву послуги не введено або введено з помилкою');
			else this.#nameService = transferNameService;
		}
	
		//# Параметр вартості послуги
		#servicePrice;
		get ServicePrice() {
			return this.#servicePrice;
		}
	
		set ServicePrice(transferServicePrice = 1) {
			if (
				transferServicePrice === null ||
				transferServicePrice === undefined ||
				transferServicePrice === '' ||
				isNaN(Number(transferServicePrice))
			)
				throw new Error('Вартість послуги не введено або не є числовим значенням');
	
			if (transferServicePrice < 1)
				throw new Error("Вартість послуги не може бути нульовим або від'ємним значенням");
			else this.#servicePrice = transferServicePrice;
		}
	
		//# Параметр терміну виконання
		#deadlineExecution;
		get DeadlineExecution() {
			return this.#deadlineExecution;
		}
	
		set DeadlineExecution(transferDeadlineExecution) {
			if (transferDeadlineExecution.trim() === '')
				throw new Error('Термін виконання послуги не введено або введено з помилкою');
			else this.#deadlineExecution = transferDeadlineExecution;
		}
	
		//# Представлення на екрані
		toString() {
			return `${this.NameService}: Термін виконання ${this.DeadlineExecution} год.; Вартість послуги ${this.ServicePrice} грн.`;
		}
	}
	
	//@ Клас адреси філіалів (країна, місто, вулиця, номер будинку);
	class BranchesAddress {
		constructor(paramNameCountry, paramNameTown, paramNameStreet, paramNumberHouse) {
			this.NameCountry = paramNameCountry;
			this.NameTown = paramNameTown;
			this.NameStreet = paramNameStreet;
			this.NumberHouse = paramNumberHouse;
		}
	
		//# Параметр для країни
		#nameCountry;
		get NameCountry() {
			return this.#nameCountry;
		}
	
		set NameCountry(transferNameCountry) {
			if (transferNameCountry.trim() === '')
				throw new Error("Назва країни відсутня. Треба обов'язково ввести назву країни");
			this.#nameCountry = transferNameCountry;
		}
	
		//# Параметр для міста
		#nameTown;
		get NameTown() {
			return this.#nameTown;
		}
	
		set NameTown(transferNameTown) {
			if (transferNameTown.trim() === '')
				throw new Error("Назва міста відсутня. Треба обов'язково ввести назву міста");
			this.#nameTown = transferNameTown;
		}
	
		//# Параметр для вулиці
		#nameStreet;
		get NameStreet() {
			return this.#nameStreet;
		}
	
		set NameStreet(trasferNameStreet) {
			if (trasferNameStreet.trim() === '')
				throw new Error("Назва вулиці відсутня. Треба обов'язково ввести назву вулиці");
			else this.#nameStreet = trasferNameStreet;
		}
	
		//# Параметр для номеру будинку
		#numberHouse;
		get NumberHouse() {
			return this.#numberHouse;
		}
		set NumberHouse(transferNumberHouse) {
			if (transferNumberHouse.trim() === '')
				throw new Error('Номер будинку не введено або введено з помилкою');
			else this.#numberHouse = transferNumberHouse;
		}
	
		toString() {
			return `${this.NameCountry}, ${this.NameTown}, ${this.NameStreet}, ${this.NumberHouse}`;
		}
	}
	
	//@ Клас компанія
	class Company {
		constructor(
			paramNameCompany,
			paramMounthFoundation,
			paramYearFoundation,
			paramTotalListService,
			paramListBranchesAddress
		) {
			this.NameCompany = paramNameCompany;
			this.FullDateFoundation = new DateFoundationCompany(paramMounthFoundation, paramYearFoundation);
			this.TotalListService = paramTotalListService;
			this.ListBranchesAddress = paramListBranchesAddress;
		}
	
		#nameCmpany;
		get NameCompany() {
			return this.#nameCmpany;
		}
	
		set NameCompany(transferNameCompany) {
			if (transferNameCompany.trim() === '')
				throw new Error("Назва компанії відсутня. Треба обов'язково ввести назіву компанії");
			this.#nameCmpany = transferNameCompany;
		}
	
		//# Визначення кількості повних років існування фірми
		getYearsCompanyExistence() {
			const currentYear = new Date().getFullYear();
			const currentMounth = new Date().getMonth() + 1;
			return currentMounth > this.FullDateFoundation.MounthFoundation
				? currentYear - this.FullDateFoundation.YearFoundation
				: currentYear - this.FullDateFoundation.YearFoundation - 1;
		}
	
		//# Виведення всіх філіалів фірми у вказаному місті
		getBranchesCityFilter(enterTown) {
			const viewListBranches = this.ListBranchesAddress.reduce((arrayBranchs, branchCurrent) => {
				if (branchCurrent.NameTown === enterTown) arrayBranchs.push(branchCurrent);
				return arrayBranchs;
			}, []);
	
			if (viewListBranches.length === 0) { throw new Error(`У ${enterTown} відсутні філіали фірми`); }
			return `<div class="result__box-data">
			<div class="result__name-value">
			Перелік філіалів фірми у м. <span class="result__answer-value"> ${enterTown}</span>:<br> <span class="result__answer-value">${viewListBranches.join('<br>')}</span></div></div>`
		}
	
		//# Виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу
		getServiceFilter(costService, timeService) {
			const viewListServices = this.TotalListService.reduce((arrayService, currentService) => {
				if (currentService.ServicePrice === costService && currentService.DeadlineExecution === timeService) arrayService.push(currentService);
				return arrayService;
			}, []);
			if (viewListServices.length === 0) {
				throw new Error(`Відсутні послуги, що можуть бути виконані за ${costService}грн. та ${timeService}хв`);
			}
				return `<div class="result__box-data">
			<div class="result__name-value">
			Перелік послуг:<br> <span class="result__answer-value">${viewListServices.join('<br>')}</span></div></div>`
		}
	
		toString() {
			return `
			<div class="result__box-data">
			<div class="result__name-value">Назва компанії:<span class="result__answer-value"> ${this.NameCompany}</span></div>
			<div class="result__name-value">Дата заснування компанії: <span class="result__answer-value"> ${this.FullDateFoundation.MounthFoundation} ${this.FullDateFoundation.YearFoundation}</span></div>

			<div class="result__name-value">Кількість повних років існування компанії: <span class="result__answer-value">${this.getYearsCompanyExistence()}</span> роки(ів)</div>
			<div class="result__name-value">Перелік послуг:</div><div class="result__name-value"><span class="result__answer-value">${this.TotalListService.join('<br>')}</span></div>
			<div class="result__name-value">Адреси філіалів:</div><div class="result__name-value"><span class="result__answer-value">${this.ListBranchesAddress.join('<br>')}</span></div></div>
			`;
		}
	}
	
	//# Вивід результатів
	try {
	
		const buildAddressBranches = [
			new BranchesAddress('Україна', 'Дніпро', 'пл. Героїв', '24'),
			new BranchesAddress('Україна', 'Харків', 'площа Гетьмана Сагайдачного', '56'),
			new BranchesAddress('Україна', 'Львів', 'бул. Європейський', '35'),
			new BranchesAddress('Україна', 'Запоріжжя', 'вул. Ялинова', '2'),
			new BranchesAddress('Україна', 'Одеса', 'пл. Героїв', '24'),
			new BranchesAddress('Україна', 'Харків', 'вул. Царичанська', '456'),
			new BranchesAddress('Україна', 'Львів', 'площа Єдності', '5'),
		];
	
		const buildListService = [
			new Service('Послуга #1', 450, '2'),
			new Service('Послуга #2', 550, '3'),
			new Service('Послуга #3', 280, '1'),
			new Service('Послуга #4', 750, '3'),
			new Service('Послуга #5', 210, '0.5'),
			new Service('Послуга #6', 210, '0.5'),
			new Service('Послуга #7', 1500, '4'),
		];
	
		const CallClassCompany = new Company(
			'Food delivery network',
			12,
			2021,
			buildListService,
			buildAddressBranches
		);
		document.write(CallClassCompany);
		document.write(CallClassCompany.getBranchesCityFilter('Львів'))
		document.write(CallClassCompany.getServiceFilter(210, '0.5'))
	
	} catch (error) {
		document.write(`${error.message}`);
	}
}