// * Задача #2. Умови

//$ Ігровий автомат
//$ Випадково вибираємо зображення у 3 позиціях
//$ Вибір у кожній позиції вибирається як одне з чотирьох зображень
//$ Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн)

document.write('<div class="slot-machine">')
if (confirm('Почати тестування коду?')) {
	const threeFirstImgs = 100, threeSecondImgs = 200, threeThirdsImgs = 500, threeFourthImgs = 1000

	const minValue = 1, maxValue = 4;
	document.write('<div class="slot-machine__block">')
	const randomImageOne = minValue + Math.floor(Math.random() * maxValue);
	document.write(`<img src="img/lesson_5/${randomImageOne}.png" alt="Prize" class="slot-machine__item-pize" width="100" height="100" loading="lazy"></img>`)
	const randomImageTwo = minValue + Math.floor(Math.random() * maxValue);
	document.write(`<img src="img/lesson_5/${randomImageTwo}.png" alt="Prize" class="slot-machine__item-pize" width="100" height="100" loading="lazy"></img>`)
	const randomImageThree = minValue + Math.floor(Math.random() * maxValue);
	document.write(`<img src="img/lesson_5/${randomImageThree}.png" alt="Prize" class="slot-machine__item-pize" width="100" height="100" loading="lazy"></img>`)
	// document.write('<br>')
	document.write('</div>')

	let amountBreakup = 0
	if (randomImageOne === 1 && randomImageTwo === 1 && randomImageThree === 1) amountBreakup = threeFirstImgs
	else if (randomImageOne === 2 && randomImageTwo === 2 && randomImageThree === 2) amountBreakup = threeSecondImgs
	else if (randomImageOne === 3 && randomImageTwo === 3 && randomImageThree === 3) amountBreakup = threeThirdsImgs
	else if (randomImageOne === 4 && randomImageTwo === 4 && randomImageThree === 4) amountBreakup = threeFourthImgs
	document.write(`<div class="slot-machine__sum">Сума виграшу складає: <span class="slot-machine__value-casino">${amountBreakup}</span> грн.</div>`)
}
document.write('</div>')


//* 1. Виводимо результат
document.write(
	`
	<div class="result">
	<div class="result__content-body">

		<div class="result__box-data">
			<h3 class="result__table-caption">Вхідні дані</h3>

			<div class="result__name-value">
				Рандомне значення:
				<span class="result__numerical-value">
					${randomValue}
				</span>
			</div>
		</div>

		<div class="result__box-data">
			<h3 class="result__table-caption">Результати обчислення</h3>
			<div class="result__name-value">
				<span class="result__numerical-value">
					${resultDraw}
				</span>
			</div>
		</div>
	</div>
</div>
	`
);
