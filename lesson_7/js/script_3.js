// * Задача #3. Умови

//$ Створити функцію, яка виводить банер у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення
//$ (тег img повине знаходитись у середині тега a)
 

if (confirm('Почати тестування?')) {
	function displayBanner(itmeImage, itemTitle, itemLink) {

		return `<div class="result__box-data"> 
		<div class="banner banner--setup">
				<div class="banner__block">
					<div class="banner__body">
						<a href="https://edu.fls.guru/js.html" class="banner__link" target="_blank">${itmeImage}</a>
						${itemTitle}
						<div class="banner__paragraph">
							<p>Ви прагнете стати програмістом frontend-розробником, опанувати функціональне програмування, основи ООП та вивчити мову програмування JavaScript? Тоді цей курс для вас!</p>
						</div>
						${itemLink}
					</div>
				</div>
			</div>
			</div>`
	}

	let resBannerDisplay = displayBanner(`<img class="banner__image" src="img/banner.png" alt="Banner" width="157" height="177">`, `<h1 class="banner__title">Курс з JavaScript</h1>`, `<a href="https://edu.fls.guru/js.html" target="_blank" class="banner__jump-link">Посилання на курс</a>`)

	document.write(`${resBannerDisplay}`)
}