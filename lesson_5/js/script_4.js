// * Задача #4. Умови

//$ Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів.
//$ Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня

if (confirm('Почати тестування коду?')) {
	const numberWeeks = parseInt(prompt('Формування звіту', 'Введіть кількість тижнів для формування звіту'));

	let totalProfit = 0

	for (let numberWeek = 1; numberWeek <= numberWeeks; numberWeek++) {
		let weeklyProfit = 0
		document.write(`
			<div class="result__box5-data">
				<div class="result__name5-value">Неділя#: <span class="result__value5-color">${numberWeek}</span></div>
			</div>`)
		for (let numberDay = 1; numberDay <= 7; numberDay++) {
			let dayWeek = ''

			switch (numberDay) {
				case 1: dayWeek = 'Понеділок'; break;
				case 2: dayWeek = 'Вівторок'; break;
				case 3: dayWeek = 'Середа'; break;
				case 4: dayWeek = 'Четверг'; break;
				case 5: dayWeek = 'П\'ятниця'; break;
				case 6: dayWeek = 'Субота'; break;
				case 7: dayWeek = 'Неділя'; break;
			}

			let dailyRevenue = parseFloat(prompt(`Поле для вводу щоденної виручки грн.\nТиждень #${numberWeek} ${dayWeek}:`, "Ввести прибуток за день"))
			weeklyProfit += dailyRevenue

			document.write(`
				<div class="result__box5-data">
					<div class="result__name5-value">${dayWeek}: <span class="result__value5-color">${dailyRevenue}</span> грн.</div>
				</div>`)
		}
		totalProfit+=weeklyProfit
		document.write(`
			<div class="result__box5-data">
				<div class="result__name5-value">Прибуток за тиждень складає: <span class="result__value5-color">${weeklyProfit} </span> грн.
				</div>
			</div>`)
		document.write('<br>')
	}
	document.write(`
			<div class="result__box5-data">
				<div class="result__name5-value">Загальний прибуток: <span class="result__value5-color">${totalProfit} </span> грн.</div>
			</div>`)
}

