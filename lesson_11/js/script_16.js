// * Задача #16. Умови

//$ Морський бій
//$ Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів
//$ Користувач стріляє вказуючи координати
//$ Гра продовжується поки не потоплено усі кораблі або у користувача не закінчяться снаряди

if (confirm('Почати тестування?')) {
  function generateGameField(rowNumber = 6, colNumber = 6, shipNumber = 5) {
  	
  	let NavalBattlefield = [];
  	for (let stepValue = 0; stepValue < rowNumber; stepValue++) {
  		let row = new Array(colNumber).fill(0);
  		NavalBattlefield.push(row);
  	}
  
  	for (let shipStepValue = 0; shipStepValue < shipNumber; ) {
  		let stepValue = Math.floor(Math.random() * rowNumber);
  		let shipRandom = Math.floor(Math.random() * colNumber);
  		if (NavalBattlefield[stepValue][shipRandom] !== 1) {
  			NavalBattlefield[stepValue][shipRandom] = 1;
  			shipStepValue++;
  		}
  	}
  	return NavalBattlefield;
  }
  
  function getPlayGameNavalBattlefield(shipNumber, missleNumber, NavalBattlefield) {
  	while (shipNumber > 0 && missleNumber > 0) {
  		let coordinatesRow = parseInt(prompt('Поле для введення', 'Координати по рядку')) - 1;
  		let coordinatesCol = parseInt(prompt('Поле для введення', 'Координати по стовбцю')) - 1;
  		missleNumber--;
  
  		if (NavalBattlefield[coordinatesRow][coordinatesCol] === 1) {
  			alert('Влучання у корабель');
  			shipNumber--;
  			NavalBattlefield[coordinatesRow][coordinatesCol] = 0;
  		} else alert('Немає влучання');
  	}
  	if (shipNumber === 0) return 'Ви перемогли';
  	else return 'Ви програли';
  }
  
  function getGameNavalBattlefield(shipNumber = 5, missleNumber = 7, rowNumber = 6, colNumber = 6) {
  	let NavalBattlefield = generateGameField(rowNumber, colNumber, shipNumber);
  	console.log(NavalBattlefield);
  	let callPlayGameResult = getPlayGameNavalBattlefield(shipNumber, missleNumber, NavalBattlefield);
  	alert(callPlayGameResult);
  }
  
  getGameNavalBattlefield();
}