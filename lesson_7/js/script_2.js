// * Задача #2. Умови

//$ Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців
//$ (таблиця заповнюється заданим фіксованим повідомленням)

function getDisplayTable(rowNumbers, columnNumbers) {
	let tableHTML = `<div class="result__box-data"><table class="result__table-input-data table-data">`;

	for (let rows = 1; rows <= rowNumbers; rows++) {
		tableHTML += `<tr class="table__row">`;
		for (let column = 1; column <= columnNumbers; column++) {
			tableHTML += `<td class="table__cell"><span class="result__answer-value">Cell</span></td>`;
		}
		tableHTML += `</tr>`;
	}
	tableHTML += `</table></div>`;
	return tableHTML;
}

let enterRow = parseInt(prompt('Поле для введення строк', 'Введіть кількість строк'))
let enterCol = parseInt(prompt('Поле для введення строк', 'Введіть кількість стовбців'))

let buildTable = getDisplayTable(enterRow, enterCol);
document.write(buildTable);