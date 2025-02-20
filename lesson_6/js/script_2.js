// * Задача #2. Умови

//$ Випадковим чином генерується число від 1 до 5
//$ Спробуйте вгадати число за 2 спроби

//* 1. Вводимо необхідні дані

const minValue=1, maxValue=5
let randomValue=minValue+Math.floor(Math.random()*(maxValue-minValue+1))
let resultDraw
let numberEnter=parseInt(prompt('Перша спроба', 'Введіть число'))

//* 2. Знаходимо результат


if (numberEnter===randomValue)
resultDraw =('Поздоровляємо! <br> Ви вгадали число з першої спроби!')

else {
	numberEnter=parseInt(prompt('На жаль Ви не вгадали. Зробіть другу спробу', 'Введіть число'))

	if (numberEnter===randomValue)
resultDraw =('Поздоровляємо! <br> Ви вгадали число з другої спроби!')

else
	resultDraw =(`Ви програли! <br> На жаль, Ви не вгадали число ні з одніє зі спроб`)
	}


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
