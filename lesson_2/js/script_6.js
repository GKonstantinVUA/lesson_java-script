// * Задача #6. Умови

//$ З клавіатури вводяться вартість товару та кількість одиниць 3 товарів.
//$ Обчислити вартість кожного товару окремо та загальну вартість.
//$ Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

//* 1. Вводимо необхідні дані
let nameFirstProduct = prompt("Введіть назву першого товару", "Введіть назву товару");
let amountFirstProduct = parseFloat(prompt(`Кількість ${nameFirstProduct.charAt(0).toUpperCase() + nameFirstProduct.slice(1)} (одн./кг)`, "Введіть кількість продукту"));
let costFirstProduct = parseFloat(prompt(`Вартість ${nameFirstProduct.charAt(0).toUpperCase() + nameFirstProduct.slice(1)} (грн.)`, "Введіть вартість продукту"));

let nameSecondProduct = prompt("Введіть назву другого товару", "Введіть назву товару");
let amountSecondProduct = parseFloat(prompt(`Кількість ${nameSecondProduct.charAt(0).toUpperCase() + nameSecondProduct.slice(1)} (одн./кг)`, "Введіть кількість продукту"));
let costSecondProduct = parseFloat(prompt(`Вартість ${nameSecondProduct.charAt(0).toUpperCase() + nameSecondProduct.slice(1)} (грн.)`, "Введіть вартість продукту"));

let nameThirdProduct = prompt("Введіть назву третього товару", "Введіть назву товару");
let amountThirdProduct = parseFloat(prompt(`Кількість ${nameThirdProduct.charAt(0).toUpperCase() + nameThirdProduct.slice(1)} (одн./кг)`, "Введіть кількість продукту"));
let costThirdProduct = parseFloat(prompt(`Вартість ${nameThirdProduct.charAt(0).toUpperCase() + nameThirdProduct.slice(1)} (грн.)`, "Введіть вартість продукту"));

//* Дані для чеку для відображення поточної дати як у оригінальному чеку
const TODAY_DATE = new Date();
const NOW_DAY = TODAY_DATE.toLocaleString();

//* 2. Знаходимо результат
let totalCostFirstProduct = (amountFirstProduct * costFirstProduct);
let totalCostSecondProduct = (amountSecondProduct * costSecondProduct);
let totalCostThirdProduct = (amountThirdProduct * costThirdProduct);

let totalСostProducts = totalCostFirstProduct + totalCostSecondProduct + totalCostThirdProduct;


//* 3. Виводимо результат

document.write(`
<div class="result">
	<div class="result__content-body">
		<div class="result__box-data">
			<h3 class="result__table-caption result__table-caption--check">Вхідні дані</h3>

			<div class="check">
				<div class="check__container ">
					<div class="check__adress-market adress-market">
						<h3 class="adress-market__hotline">Гаряча лінія 0 777 777 777</h3>
						<div class="adress-market__item">Тов "Сердите каченя"</div>
						<div class="adress-market__item">Україна, Дніпропетровська область</div>
						<div class="adress-market__item">м. Дніпро</div>
						<div class="adress-market__item">вул. Алма, буд.007</div>
						<div class="adress-market__item">ПН 30899999999</div>
						<div class="adress-market__item">Каса 07</div>
					</div>

					<hr class="check__line-dotted">

					<div class="calculated calculated--block">
						<div class="calculated__product-data product-data">${nameFirstProduct.charAt(0).toUpperCase() + nameFirstProduct.slice(1)}:<br>
							<span class="product-data__amount">${amountFirstProduct.toFixed(2)}</span> 
							<span class="product-data__increase">Х</span> 
							<span class="product-data__cost"> ${costFirstProduct.toFixed(2)}</span> 
							<span class="product-data__equals">=</span> 
							<span class="product-data__total-product">${totalCostFirstProduct.toFixed(2)} грн.</span>
						</div>

						<div class="calculated__product-data product-data">${nameSecondProduct.charAt(0).toUpperCase() + nameSecondProduct.slice(1)}:<br>
							<span class="product-data__amount">${amountSecondProduct.toFixed(2)}</span> 
							<span class="product-data__increase">Х</span> 
							<span class="product-data__cost"> ${costSecondProduct.toFixed(2)}</span> 
							<span class="product-data__equals">=</span> 
							<span class="product-data__total-product">${totalCostSecondProduct.toFixed(2)} грн.</span>
						</div>

						<div class="calculated__product-data product-data">${nameThirdProduct.charAt(0).toUpperCase() + nameThirdProduct.slice(1)}:<br>
							<span class="product-data__amount">${amountThirdProduct.toFixed(2)}</span> 
							<span class="product-data__increase">Х</span> 
							<span class="product-data__cost"> ${costThirdProduct.toFixed(2)}</span> 
							<span class="product-data__equals">=</span> 
							<span class="product-data__total-product">${totalCostThirdProduct.toFixed(2)} грн.</span>
						</div>
					</div>
					
					<hr class="check__line-dotted">

					<div class="check__cost-products">Сума: <span class="check__total-sum">${totalСostProducts.toFixed(2)} грн.</span></div>
					<hr class="check__line-dotted">

					<div class="check__fiscal-receipt">${NOW_DAY}</div>

					<img src="img/qr_code.svg" alt="QR Code" class="check__img-qr-code">
					<div class="check__title-fiscal">Фіскальний чек </div>
			</div>
		</div>
	</div>
</div>`)
