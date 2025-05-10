// * Задача #5. Умови
//$ Розробити клас 'Керівник танців'
//$ Поля(властивості):
//$ ▪	Масив імен хлопців
//$ ▪	Масив імен дівчат
//$ Методи (дії):
//$ ▪	Метод випадкового вибору імені хлопця;
//$ ▪	Метод випадкового вибору імені дівчини;
//$ ▪	Метод виведення пари для танців;
//$ ▪	Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців;

	if (confirm('Почати тестування?')) {
		const arrayNameBoys = [
			'Борис',
			'Гліб',
			'Данило',
			'Захар',
			'Кирило',
			'Єгор',
			'Матвій',
			'Назар',
			'Любовир',
			'Роман',
			'Славко',
			'Петро',
			'Олесь',
		];
		const arrayNameGirls = [
			'Агата',
			'Варвара',
			'Бажана',
			'Василина',
			'Аїда',
			'Ганна',
			'Ельвіра',
			'Дарина',
			'Злата',
			'Єва',
			'Леся',
			'Милана',
			'Ірма',
		];
	
		class dancingHead {
			constructor(listNamesBoys, listNamesGirls, paramIntervalTimer) {
				this.namesBoys = listNamesBoys;
				this.namesGirls = listNamesGirls;
				this.intervalTimer = paramIntervalTimer;
			}
	
			getNameBoy() {
				let generatorNameBoy = Math.floor(Math.random() * this.namesBoys.length);
				return this.namesBoys[generatorNameBoy];
			}
	
			getNameGirl() {
				let generatorNameGirl = Math.floor(Math.random() * this.namesGirls.length);
				return this.namesGirls[generatorNameGirl];
			}
	
			toString() {
				return `${this.getNameBoy()} та ${this.getNameGirl()}`;
			}
	
			run() {
				setInterval(() => {
					document.write(`<div>Пара танцорів: ${this.toString()}</div>`);
				}, this.intervalTimer);
			}
		}
	
		const callClass = new dancingHead(arrayNameBoys, arrayNameGirls, 5000);
		callClass.run();
	
	}
