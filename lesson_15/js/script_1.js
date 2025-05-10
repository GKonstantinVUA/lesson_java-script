// * Задача #1. Умови

//$ Створити об’єкт 'Тир'
//$ У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку
//$ Поля(властивості):
//$ ▪	Масив, у якому зберігається поле з зайцями;
//$ Методи (дії):
//$ ▪	Масив, у якому зберігається поле з зайцями;


if (confirm('Почати тестування?')) {
	const shootingGallery = {
		serTargets: [1, 0, 1, 0, 1, 0],
	
		shotTarget() {
			let userShot =
				parseInt(prompt('Поле для пострілу (Введіть значення від 1 до 6)', 'Введіть значення')) - 1;
			let resultTarget = this.serTargets[userShot];
			return resultTarget;
		},
	
		checkResultShot() {
			if (this.shotTarget() === 1) document.write(`<div class="result__box-data">
			<div class="result__name-value">Результат: <span class="result__answer-value">Ви влучили в ціль</span></div></div>`);
			else document.write(`<div class="result__box-data">
			<div class="result__name-value">Результат: <span class="result__answer-value">Ви не влучили в ціль</span></div></div>`);
		},
	
		viewSetTargets() {
			document.write(`
			<div class="result">
			<div class="result__content-body">
			<div class="result__box-data"> 
			<table class="result__table-input-data table-data">
			<tbody class="table-data__value-table">
			<tr>
			</div></div></div>`);
			for (let row of this.serTargets) {
				document.write(`
					<td> ${row} </td>`);
			}
			document.write(`</tbody>`);
			document.write(`</tr>`);
			document.write(`</table>`);
		},
	};
	
	const callFuncShot = shootingGallery;
	callFuncShot.checkResultShot();
	callFuncShot.viewSetTargets();
	
}