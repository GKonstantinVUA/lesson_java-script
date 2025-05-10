// * Задача #3. Умови
//$ Створити клас TBankomat, який моделює роботу банкомата
//$ Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень
//$ Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, та метод зняття деякої суми

if (confirm('Почати тестування?')) {
	// @ Клас TBankomat
	class TBankomat {
		constructor(
			paramDenominationBanknote5 = 0,
			paramDenominationBanknote10 = 0,
			paramDenominationBanknote20 = 0,
			paramDenominationBanknote50 = 0,
			paramDenominationBanknote100 = 0,
			paramDenominationBanknote200 = 0
		) {
			this.DenominationBanknote5 = paramDenominationBanknote5;
			this.DenominationBanknote10 = paramDenominationBanknote10;
			this.DenominationBanknote20 = paramDenominationBanknote20;
			this.DenominationBanknote50 = paramDenominationBanknote50;
			this.DenominationBanknote100 = paramDenominationBanknote100;
			this.DenominationBanknote200 = paramDenominationBanknote200;
		}
	
		//# Параметр для банкнот 5 грн.
		#denominationBanknote5;
		get DenominationBanknote5() {
			return this.#denominationBanknote5;
		}
	
		set DenominationBanknote5(transferDenominationBanknote5) {
			if (
				(transferDenominationBanknote5 === null||
				transferDenominationBanknote5 === undefined||
				transferDenominationBanknote5 === ''||
				isNaN(Number(transferDenominationBanknote5)))
			)
				throw new Error('Номінал банкноти не введено або не є числовим значенням');
			if (transferDenominationBanknote5 < 0)
				throw new Error("Номінал купюри не може бути від'ємним значенням");
			else this.#denominationBanknote5 = transferDenominationBanknote5;
		}
	
		//# Параметр для банкнот 10 грн.
		#denominationBanknote10;
		get DenominationBanknote10() {
			return this.#denominationBanknote10;
		}
	
		set DenominationBanknote10(transferDenominationBanknote10) {
			if (
				(transferDenominationBanknote10 === null||
				transferDenominationBanknote10 === undefined||
				transferDenominationBanknote10 === ''||
				isNaN(Number(transferDenominationBanknote10)))
			)
				throw new Error('Номінал банкноти не введено або не є числовим значенням');
			if (transferDenominationBanknote10 < 0)
				throw new Error("Номінал купюри не може бути від'ємним значенням");
			else this.#denominationBanknote10 = transferDenominationBanknote10;
		}
	
		//# Параметр для банкнот 20 грн.
		#denominationBanknote20;
		get DenominationBanknote20() {
			return this.#denominationBanknote20;
		}
	
		set DenominationBanknote20(transferDenominationBanknote20) {
			if (
				(transferDenominationBanknote20 === null||
				transferDenominationBanknote20 === undefined||
				transferDenominationBanknote20 === ''||
				isNaN(Number(transferDenominationBanknote20)))
			)
				throw new Error('Номінал банкноти не введено або не є числовим значенням');
			if (transferDenominationBanknote20 < 0)
				throw new Error("Номінал купюри не може бути від'ємним значенням");
			else this.#denominationBanknote20 = transferDenominationBanknote20;
		}
	
		//# Параметр для банкнот 50 грн.
		#denominationBanknote50;
		get DenominationBanknote50() {
			return this.#denominationBanknote50;
		}
	
		set DenominationBanknote50(transferDenominationBanknote50) {
			if (
				(transferDenominationBanknote50 === null||
				transferDenominationBanknote50 === undefined||
				transferDenominationBanknote50 === ''||
				isNaN(Number(transferDenominationBanknote50)))
			)
				throw new Error('Номінал банкноти не введено або не є числовим значенням');
			if (transferDenominationBanknote50 < 0)
				throw new Error("Номінал купюри не може бути від'ємним значенням");
			else this.#denominationBanknote50 = transferDenominationBanknote50;
		}
	
		//# Параметр для банкнот 100 грн.
		#denominationBanknote100;
		get DenominationBanknote100() {
			return this.#denominationBanknote100;
		}
	
		set DenominationBanknote100(transferDenominationBanknote100) {
			if (
				(transferDenominationBanknote100 === null||
				transferDenominationBanknote100 === undefined||
				transferDenominationBanknote100 === ''||
				isNaN(Number(transferDenominationBanknote100)))
			)
				throw new Error('Номінал банкноти не введено або не є числовим значенням');
			if (transferDenominationBanknote100 < 0)
				throw new Error("Номінал купюри не може бути від'ємним значенням");
			else this.#denominationBanknote100 = transferDenominationBanknote100;
		}
	
		//# Параметр для банкнот 200 грн.
		#denominationBanknote200;
		get DenominationBanknote200() {
			return this.#denominationBanknote200;
		}
	
		set DenominationBanknote200(transferDenominationBanknote200) {
			if (
				(transferDenominationBanknote200 === null||
				transferDenominationBanknote200 === undefined||
				transferDenominationBanknote200 === ''||
				isNaN(Number(transferDenominationBanknote200)))
			)
				throw new Error('Номінал банкноти не введено або не є числовим значенням');
			if (transferDenominationBanknote200 < 0)
				throw new Error("Номінал купюри не може бути від'ємним значенням");
			else this.#denominationBanknote200 = transferDenominationBanknote200;
		}
	
		//$ Метод видачі банкоматом мінімальної суми
		getATMMinAmount() {
			if (this.DenominationBanknote5 > 0) return 5;
			else if (this.DenominationBanknote10 > 0) return 10;
			else if (this.DenominationBanknote20 > 0) return 20;
			else if (this.DenominationBanknote50 > 0) return 50;
			else if (this.DenominationBanknote100 > 0) return 100;
			else if (this.DenominationBanknote200 > 0) return 200;
			else return 0;
		}
	
		//$ Метод видачі банкоматом максимальної суми
		getATMMaxAmount() {
			return (
				this.DenominationBanknote5 * 5 +
				this.DenominationBanknote10 * 10 +
				this.DenominationBanknote20 * 20 +
				this.DenominationBanknote50 * 50 +
				this.DenominationBanknote100 * 100 +
				this.DenominationBanknote200 * 200
			);
		}
	
		//$ Метод видачі банкоматом конкретної суми
		getSpecificAmountATM(paramTotalAmount) {
			if (this.getATMMinAmount() === 0) throw new Error('Банкомат тимчасово не видає готівки');
			if (paramTotalAmount < 5) throw new Error('Некоректно введена мінамальна сума для зняття готівки');
			if (paramTotalAmount > this.getATMMaxAmount(paramTotalAmount)) throw new Error("У банкоматі відсутня відповідна сума для зняття готівки");
			else paramTotalAmount
	
			let calTotalAmount = paramTotalAmount;
			const objectSetBanknotes = {
				banknote5: 0,
				banknote10: 0,
				banknote20: 0,
				banknote50: 0,
				banknote100: 0,
				banknote200: 0,
			};
			if (calTotalAmount >= 200) {
				objectSetBanknotes.banknote200 = Math.min(Math.floor(calTotalAmount / 200), this.DenominationBanknote200);
				calTotalAmount -= objectSetBanknotes.banknote200 * 200;
			}
	
			if (calTotalAmount >= 100) {
				objectSetBanknotes.banknote100 = Math.min(Math.floor(calTotalAmount / 100), this.DenominationBanknote100);
				calTotalAmount -= objectSetBanknotes.banknote100 * 100;
			}
	
			if (calTotalAmount >= 50) {
				objectSetBanknotes.banknote50 = Math.min(Math.floor(calTotalAmount / 50), this.DenominationBanknote50);
				calTotalAmount -= objectSetBanknotes.banknote50 * 50;
			}
	
			if (calTotalAmount >= 20) {
				objectSetBanknotes.banknote20 = Math.min(Math.floor(calTotalAmount / 20), this.DenominationBanknote20);
				calTotalAmount -= objectSetBanknotes.banknote20 * 20;
			}
	
			if (calTotalAmount >= 10) {
				objectSetBanknotes.banknote10 = Math.min(Math.floor(calTotalAmount / 10), this.DenominationBanknote10);
				calTotalAmount -= objectSetBanknotes.banknote10 * 10;
			}
	
			if (calTotalAmount >= 5) {
				objectSetBanknotes.banknote5 = Math.min(Math.floor(calTotalAmount / 5), this.DenominationBanknote5);
				calTotalAmount -= objectSetBanknotes.banknote5 * 5;
			}
	
			if (calTotalAmount !== 0) {
				throw new Error('Неможливо зняти потрібну суму з наявних купюр');
			}
			this.DenominationBanknote200 -= objectSetBanknotes.banknote200;
			this.DenominationBanknote100 -= objectSetBanknotes.banknote100;
			this.DenominationBanknote50 -= objectSetBanknotes.banknote50;
			this.DenominationBanknote20 -= objectSetBanknotes.banknote20;
			this.DenominationBanknote10 -= objectSetBanknotes.banknote10;
			this.DenominationBanknote5 -= objectSetBanknotes.banknote5;
			return objectSetBanknotes;
		}
	
		toString() {
			return `<div class="result__box-data">
			<div class="result__name-value">Мінімальна сума яку може видати банкомат: <span class="result__answer-value">${this.getATMMinAmount()} </span>грн.</div>
			<div class="result__name-value">Максимальна сума яку може видати банкомат: <span class="result__answer-value">${this.getATMMaxAmount()} </span>грн.</div></div>`;
		}
	
	}
	
	try {
		const callClassTBankomat = new TBankomat(80, 75, 60, 50, 45, 35);
		document.write(callClassTBankomat);
		console.log(callClassTBankomat.getSpecificAmountATM(10000));
		console.log(callClassTBankomat.getSpecificAmountATM(4500));
		}
	catch(error) {
		document.write(`${error.message}`)
		}
	
}