// * Задача #0. Умови

//$ Описати масив об’єктів – сайтів розроблених компанією з такими властивостями
//! ----- Властивості ------
//$ -	назва компанії на час розробки (назву періодично змінюють)
//$ -	власник компанії
//$ -	спонсори (масив спонсорів)
//$ *	прізвище спонсора
//$ *	ім’я спонсора
//$ *	сума вкладень спонсора
//$ -	рік випуску
//$ -	вартість сайту
//# 1)	Знайти загальну вартість усіх сайтів

if (confirm('Почати тестування?')) {
	const webSitesCompany = [
		//web site #1
		{
			companyName: 'Tesco',
			companyOwner: 'Richard Logan',
			sponsors: [
				{
					lastSponsorName: 'Marshall',
					firstSponsorName: 'Lisa',
					amountSponsorInvestment: 3000,
				},
				{
					lastSponsorName: 'Harvey',
					firstSponsorName: 'Richard',
					amountSponsorInvestment: 4750,
				},
				{
					lastSponsorName: 'Saunders',
					firstSponsorName: 'Helen',
					amountSponsorInvestment: 2000,
				},
			],
			yearRelease: 1998,
			webSiteCost: 9900,
		},
	
		//web site #2
		{
			companyName: 'Rimmel',
			companyOwner: 'Michael Smith',
			sponsors: [
				{
					lastSponsorName: 'Brooks',
					firstSponsorName: 'Richard',
					amountSponsorInvestment: 2200,
				},
				{
					lastSponsorName: 'Owen',
					firstSponsorName: 'James',
					amountSponsorInvestment: 1500,
				},
				{
					lastSponsorName: 'Scott',
					firstSponsorName: 'Julie',
					amountSponsorInvestment: 3000,
				},
	
				{
					lastSponsorName: 'Thelma',
					firstSponsorName: 'Flowers',
					amountSponsorInvestment: 5500,
				},
			],
			yearRelease: 2002,
			webSiteCost: 22750,
		},
	
		//web site #3
		{
			companyName: 'Ulster',
			companyOwner: 'Anna Taylor',
			sponsors: [
				{
					lastSponsorName: 'Cooper',
					firstSponsorName: 'Clara',
					amountSponsorInvestment: 5800,
				},
				{
					lastSponsorName: 'Ramirez',
					firstSponsorName: 'Deborah',
					amountSponsorInvestment: 14700,
				},
			],
			yearRelease: 2000,
			webSiteCost: 48700,
		},
	
		//web site #4
		{
			companyName: 'Vilo',
			companyOwner: 'Diane Lowe',
			sponsors: [
				{
					lastSponsorName: 'Rodriguez',
					firstSponsorName: 'Rene',
					amountSponsorInvestment: 4000,
				},
				{
					lastSponsorName: 'Stevens',
					firstSponsorName: 'David',
					amountSponsorInvestment: 7700,
				},
				{
					lastSponsorName: 'Campbell',
					firstSponsorName: 'Thomas',
					amountSponsorInvestment: 5650,
				},
				{
					lastSponsorName: 'Taylor',
					firstSponsorName: 'Milton',
					amountSponsorInvestment: 16200,
				},
				{
					lastSponsorName: 'Williams',
					firstSponsorName: 'Edward',
					amountSponsorInvestment: 24700,
				},
			],
			yearRelease: 2012,
			webSiteCost: 42700,
		},
	];
	
	const totalCostSites = webSitesCompany.reduce(
		(prevTotalSum, currentValue) => prevTotalSum + currentValue.webSiteCost,
		0
	);
	
	document.write(`<div class="result__box-data">
			<div class="result__name-value"> Загальна вартість усіх сайтів: <span class="result__answer-value">${totalCostSites}</span>грн.</div></div>`);
	
}