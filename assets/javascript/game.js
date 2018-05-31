$(document).ready(function() {
   
    var playerScore = playerScoreRandom()
	var crystalOneValue = crystalRandom()
	var crystalTwoValue = crystalRandom()
	var crystalThreeValue = crystalRandom()
	var crystalFourValue = crystalRandom()
	var totalCrystalValue = 0
	
	
	//random value 19-120 for target.
	function playerScoreRandom(min, max) {
	return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	}
	
	//random value 1-12 for crystals.
	
	function crystalRandom(min, max) {
	return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	}
		
	console.log(parseInt(crystalOneValue) + parseInt(crystalTwoValue))
	
	console.log(crystalOneValue);
	console.log(crystalTwoValue);
	console.log(crystalThreeValue);
	console.log(crystalFourValue);
	console.log("-------------")
	console.log(playerScore)
	
	
	
	}) 

/*1. make array of random numbers (19-120)

2. use math random to pick random number from array 

3. each four buttons html will link to javascript onclick events

4. each button is assigned a different value to represent a the points awarded (var blue = 100pts, var white = 200pts)

5. if player score = target amount 
	then win counter = +1 

6. if player score > target amount
	then loss counter = -1
	then reset() function

