$(document).ready(function(){
	console.log("ready");


	var temp_x = 0;
	var flag = 1;
	var shakepoint = 0;
	var checkpoint2 = 0;
	var applestack = 1;
	var Random_Val =0; 
	var apple = [0,0,0,0,0,0,0,0,0];

	var shake = function(){

		if(temp_x > 0 && flag === -1){ 
			shakepoint++;          
			flag = 1;             
		}
		else if(temp_x < 0 && flag === 1) 
		{				   
			shakepoint++;             
			flag = -1;                 
		}
	}
	var falling = function(){
		if(shakepoint%5 === 0 && applestack > 10){
			Newtonlaw(applestack);
			applestack++;

		}
	}
	
	var Newtonlaw = function(number){
		Random_Val = Math.floor((Math.random()*600)+500);
		//$("#a"+number).animate({"top" : Random_Val , 1000, null);});
	}
		


	for(i=1;i<10;i++){
		Random_Val = Math.floor((Math.random()*9)+1);
		                                  
		for(j=0;j<i;j++){  
			if(checkpoint2==1){
				j=0;
			}
			if(card1[j]==Random_Val){
				Random_Val = Math.floor((Math.random()*9)+1); 
				j=0; 
				if(apple[j]==Random_Val){
					checkpoint2=1;
				}
				else{
					checkpoint2=0;
				}
			}
		}
		apple[i] = Random_Val;
		                
		checkpoint2=0;
	}






	function handleMotionEvent(event) {




		var x = event.accelerationIncludingGravity.x;
		var y = event.accelerationIncludingGravity.y; 
		var z = event.accelerationIncludingGravity.z; 
		y = Math.round(y);
		temp_y = y;




		$("#xVal").html(Math.round(y));
		$("#sVal").html(shakepoint);




		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();




		var orgX = parseFloat(orgX); 
		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);








		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);
		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);




	}








	window.addEventListener("devicemotion", handleMotionEvent, true);
	setInterval(shake,100); 
	setInterval(falling,100);
	




});
