$(document).ready(function(){
	console.log("ready");


	var temp_x = 0;
	var flag = 1;
	var shakepoint = 0;
	var checkpoint2 = 0;
	var applestack = 1;
	var Random_Val =0; // ������ ���� ����
	var apple = [0,0,0,0,0,0,0,0,0];

	var shake = function(){ // ���� �¿�� ��뿡 ���� shakepoint�� +1 �� �����Ѵ�.

		if(temp_x > 0 && flag === -1){ // ���⼭ flag�� ���� �������� ���� ����̰� ������
			shakepoint++;          // ���� ��� �����ϱ� ������ ���� �ѹ� �����ϸ� ���̻� �������� �ʵ���
			flag = 1;              // ���ֱ� ���� ���� ���Ǻ���.
		}
		else if(temp_x < 0 && flag === 1) // ���� ���� x���� ����� ���������� �Դٰ����ϴµ� 
		{				   // �̺κ��� üũ�Ͽ� shakepoint�� +1�� �����Ѵ�. 
			shakepoint++;              // ���� if���� x�� ����϶� +1
			flag = -1;                 //  else if���� x�� �����϶� +1
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
		Random_Val = Math.floor((Math.random()*9)+1);//Math.floor((Math.random()*�ִ밪)+�ּҰ�);
		                                    // 1~6������ �������� �ϳ��� ���� Random_Val�� ������ �ȴ�.
		for(j=0;j<i;j++){  // �ߺ����� �˻��ϴ� �ݺ��� �κ�.
			if(checkpoint2==1){
				j=0;
			}
			if(card1[j]==Random_Val){ // ���ݱ��� �Է��� ������ �ߺ��� ã�Ƴ���
				Random_Val = Math.floor((Math.random()*9)+1); // ���ǹ��� ���̸� ���ο� ���� ����.
				j=0; // �׸��� �ٽ� ó������ �ߺ��˻縦 �ؾ��ϹǷ� j=0���� ������ش�. 
				if(apple[j]==Random_Val){
					checkpoint2=1;
				}
				else{
					checkpoint2=0;
				}
			}
		}
		apple[i] = Random_Val; // ���� �ݺ����� ���������� �ߺ����� ���ٴ� ���̹Ƿ� 
		                 // ī��迭�� i��°�� ����� ���� �־��ش�.
		checkpoint2=0;
	}






	function handleMotionEvent(event) {




		var x = event.accelerationIncludingGravity.x; // ����Ʈ�� ���� �� �޾ƿ��� ��ɾ� x��
		var y = event.accelerationIncludingGravity.y; // y��
		var z = event.accelerationIncludingGravity.z; // z��
		y = Math.round(y); // 1���� �Ҽ��� ����.
		temp_y = y;




		$("#xVal").html(Math.round(y));
		$("#sVal").html(shakepoint);




		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();




		var orgX = parseFloat(orgX); // ��Ʈ���� ���ڷ� ��ȯ
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
	setInterval(shake,100); // ��� �� �Լ��� ���ư��� ����� ���� ������. 0.1�ʸ��� �� �Լ��� �����(1000 = 1��)
	setInterval(firepoint,500);
	setInterval(fan,0);




});
