
		$( document ).ready(function(){

		//Randomizers
		var random=Math.floor(Math.random()*102+19)
		
		$('#goal').text(random);

		function reset(){
		random=Math.floor(Math.random()*102+19);
		console.log(random)
		$('#goal').text(random);
		red= Math.floor(Math.random()*12+1);
		blue= Math.floor(Math.random()*12+1);
		green= Math.floor(Math.random()*12+1);
		purple= Math.floor(Math.random()*12+1);
		playerAmount= 0;
		$('#playerAmount').text(playerAmount);
		} 
		
		var red= Math.floor(Math.random()*12+1)
		var blue= Math.floor(Math.random()*12+1)
		var green= Math.floor(Math.random()*12+1)
		var purple= Math.floor(Math.random()*12+1)
		
		//Counters
		var playerAmount= 0; 
		var wins= 0;
		var losses = 0;
		
	  $('#wins').text(wins);
	  $('#losses').text(losses);
	  
	  function win(){
	  alert("Winner!");
		wins++; 
		$('#wins').text(wins);
		reset();
		}
		
	  function loss(){
	  alert ("Game Over!");
		losses++;
		$('#losses').text(losses);
		reset()
	  }
		
		$('.red').on ('click', function(){
		playerAmount = playerAmount + red;
		$('#playerAmount').text(playerAmount); 
		
		//Rules
		if (playerAmount == random){
		win();
		}
		else if ( playerAmount > random){
		loss();
		}   
		})

		$('.blue').on ('click', function(){
		playerAmount = playerAmount + blue;
		$('#playerAmount').text(playerAmount); 
		
		if (playerAmount == random){
		win();
		}
		else if ( playerAmount > random){
		loss();
		} 
		})

		$('.green').on ('click', function(){
		playerAmount = playerAmount + green;
		$('#playerAmount').text(playerAmount);
	  
		if (playerAmount == random){
		win();
		}
		else if ( playerAmount > random){
		loss();
		} 
		})

		$('.purple').on ('click', function(){
		playerAmount = playerAmount + purple;
		$('#playerAmount').text(playerAmount); 
			
		if (playerAmount == random){
		win();
		}
		else if ( playerAmount > random){
		loss();
		}
		});   
	  }); 

