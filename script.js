$(document).ready(function(){
	console.log("ready");


	var temp_x = 0;
	var flag = 1;
	var shakepoint = 0;
	var checkpoint2 = 0;
	var applestack = 1;
	var Random_Val =0; // 랜덤값 저장 변수
	var apple = [0,0,0,0,0,0,0,0,0];

	var shake = function(){ // 폰을 좌우로 흔듬에 따라 shakepoint가 +1 씩 증가한다.

		if(temp_x > 0 && flag === -1){ // 여기서 flag는 만약 한쪽으로 폰을 기울이고 있으면
			shakepoint++;          // 값이 계속 증가하기 때문에 값이 한번 증가하면 더이상 증가하지 않도록
			flag = 1;              // 해주기 위해 넣은 조건변수.
		}
		else if(temp_x < 0 && flag === 1) // 폰을 흔들면 x값이 양수와 음수값으로 왔다갔다하는데 
		{				   // 이부분을 체크하여 shakepoint가 +1씩 증가한다. 
			shakepoint++;              // 위의 if문은 x가 양수일때 +1
			flag = -1;                 //  else if문은 x가 음수일때 +1
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
		$("#a"+number).animate({"top" : Random_Val , 1000, null);});
	}
		


	for(i=1;i<10;i++){
		Random_Val = Math.floor((Math.random()*9)+1);//Math.floor((Math.random()*최대값)+최소값);
		                                    // 1~6사이의 난수들중 하나의 값이 Random_Val에 저장이 된다.
		for(j=0;j<i;j++){  // 중복값을 검사하는 반복문 부분.
			if(checkpoint2==1){
				j=0;
			}
			if(card1[j]==Random_Val){ // 지금까지 입력한 값들의 중복을 찾아낸다
				Random_Val = Math.floor((Math.random()*9)+1); // 조건문이 참이면 새로운 난수 생성.
				j=0; // 그리고 다시 처음부터 중복검사를 해야하므로 j=0으로 만들어준다. 
				if(apple[j]==Random_Val){
					checkpoint2=1;
				}
				else{
					checkpoint2=0;
				}
			}
		}
		apple[i] = Random_Val; // 위의 반복문을 빠져나오면 중복값이 없다는 말이므로 
		                 // 카드배열의 i번째에 저장된 값을 넣어준다.
		checkpoint2=0;
	}






	function handleMotionEvent(event) {




		var x = event.accelerationIncludingGravity.x; // 스마트폰 센서 값 받아오는 명령어 x값
		var y = event.accelerationIncludingGravity.y; // y값
		var z = event.accelerationIncludingGravity.z; // z값
		y = Math.round(y); // 1이하 소숫점 버림.
		temp_y = y;




		$("#xVal").html(Math.round(y));
		$("#sVal").html(shakepoint);




		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();




		var orgX = parseFloat(orgX); // 스트링을 숫자로 변환
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
	setInterval(shake,100); // 계속 이 함수가 돌아가게 만들기 위해 선언함. 0.1초마다 이 함수가 실행됨(1000 = 1초)
	setInterval(firepoint,500);
	setInterval(fan,0);




});
