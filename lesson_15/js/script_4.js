// * Задача #4. Умови
//$ Розробити клас Baner
//$ Поля(властивості):
//$ ▪	Масив об’єктів (графічних зображень та посилань на сайти)
//$ Методи (дії):
//$ ▪	Метод випадкового вибору об’єкта (графічного зображення та посилання);
//$ ▪	Метод виведення випадкового банера;


	if (confirm('Почати тестування?')) {
			const listBaners = [
				{
					poster: 'img/lesson_15/blender.png',
					urlAdrress: 'https://www.blender.org/',
				},
		
				{
					poster: 'img/lesson_15/dribbble.webp',
					urlAdrress: 'https://dribbble.com/',
				},
		
				{
					poster: 'img/lesson_15/vimeo.jpg',
					urlAdrress: 'https://vimeo.com/',
				},
		
				{
					poster: 'img/lesson_15/unsplash.jpg',
					urlAdrress: 'https://unsplash.com/',
				},
		
				{
					poster: 'img/lesson_15/tutsplus.jpg',
					urlAdrress: 'https://tutsplus.com/',
				},
		
				{
					poster: 'img/lesson_15/deviantart.jpg',
					urlAdrress: 'https://www.deviantart.com/',
				},
		
				{
					poster: 'img/lesson_15/videocopilot.png',
					urlAdrress: 'https://www.videocopilot.net/tutorials/',
				},
			];
		
			class objectSites {
				constructor(paramArrayObjects) {
					this.arrayObject = paramArrayObjects;
				}
		
				getRandomItemSite() {
					const getSite = Math.floor(Math.random() * this.arrayObject.length)
					return this.arrayObject[getSite]
				}
		
				toString() {
					let randomBanner = this.getRandomItemSite();
		
					document.write(
						`<div class="result__box-data">
								<h2 class="result__title">Рандомний постер</h2>
									<a href="${randomBanner.urlAdrress}" target="_blank" class="result__link-poster">
										<img src="${randomBanner.poster}" alt="Poster" class="result__poster" width="300" height="143" loading="lazy">
									</a>
						</div>`
					);
				}
		
			}
		
			let callFuncItemSite = new objectSites(listBaners);
			callFuncItemSite.toString()
		}
