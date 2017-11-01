// JavaScript Document

//move();
	//------------------------------------------------------fly word-----------------------------------------
	/*function move(){
		//第一个move;
		$('.first').animate({
			"top":"570px"
		},10000,'easeOutBounce').animate({
			"left":"1050px"
		},10000,'easeOutBounce').animate({
			"top":"100px"
		},10000,'easeOutBounce').animate({
			"left":"0px"
		},10000,'easeOutBounce',function(){
				move();
			});
		
		//第二个move
		$('.second').animate({
			"left":"1050px"	
		},10000,'easeOutBounce').animate({
			"top":"100px"	
		},10000,'easeOutBounce').animate({
			"left":"0px"	
		},10000,'easeOutBounce').animate({
			"top":"575"	
		},10000,'easeOutBounce');
				
		//第三个move
		$('.third').animate({
			"top":"100px"
		},10000,'easeOutBounce').animate({
			"left":"0px"	
		},10000,'easeOutBounce').animate({
			"top":"570px"	
		},10000,'easeOutBounce').animate({
			"left":"1050px"	
		},10000,'easeOutBounce');
		
		//第四个move
		$('.forth').animate({
			"left":"0px"
		},10000,'easeOutBounce').animate({
			"top":"575px"	
		},10000,'easeOutBounce').animate({
			"left":"1050px"	
		},10000,'easeOutBounce').animate({
			"top":"100px"	
		},10000,'easeOutBounce');
		
		//循环~
		//setTimeout("move()",4000);
	}*/
		
	//sb();
	
	var addimg2=['img/v1.jpg','img/v2.jpg','img/v3.jpg','img/v4.jpg','img/v5.jpg','img/v6.jpg','img/v7.jpg','img/v8.jpg','img/v9.jpg','img/1.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/16.jpg','img/18.jpg','img/22.jpg','img/25.jpg','img/28.jpg','img/30.jpg','img/34.jpg','img/35.jpg','img/36.jpg','img/37.jpg','img/40.jpg','img/42.jpg','img/46.jpg','img/49.jpg','img/50.jpg','img/51.jpg','img/52.jpg','img/53.jpg','img/54.jpg','img/58.jpg','img/59.jpg','img/60.jpg'];
	
	//------------------------------------changecolor---------------------------------------------------------------
	var i = 0;
	var color= new Array("#ece86d","#9cef59","#8bcbe6","#f751bf","#d8d232","#f9fc04","#fc8a04","#1c6403","#5f06b1");
	/*function sb(){
	if(i>color.length-1){i=0};
	i=i+1;
	$('span,#mybook .pageclass p').css("color",color[i]);
	setTimeout("sb()",2500);
	}*/
	setInterval(function(){
		if(i>color.length-1){i=0};
		i = i+1;
		$('span,#mybook .pageclass p').css("color",color[i]);
		//$('.ball').css('border',5px solid color[i]);
		},2500);
	//-------------------------------------------cricle--------------------------------------------------
	//圈圈的图片变化
			var ballSize = 150;
			$('#con').append('<div class="ball" style="width:'+ballSize+'px;height:'+ballSize+'px;overflow:hidden;"><img src="img/42.jpg" style="width:100%;height:100%" /></div>');
			$('#con').append('<div class="ball" style="width:'+ballSize+'px;height:'+ballSize+'px;overflow:hidden;"><img src="img/v2.jpg" style="width:100%;height:100%" /</div>');
			$('#con').append('<div class="ball" style="width:'+ballSize+'px;height:'+ballSize+'px;overflow:hidden;"><img src="img/v3.jpg" style="width:100%;height:100%"/></div>');
			$('#con').append('<div class="ball" style="width:'+ballSize+'px;height:'+ballSize+'px;overflow:hidden;"><img src="img/v4.jpg" style="width:100%;height:100%"/></div>');

			action(0,0,0,200,1,1,5);
			action(1,500,200,0,1,1,11);
			action(2,1270,100,150,1,1,20);
			action(3,700,400,300,1,1,25);

			function action(i1,ballX,ballY,H,speedX,speedY,i2){
				//圈圈颜色
				/*setInterval(function() {$('.ball').eq(i1).css('background','hsla('+H+',100%,50%,1)');},40);
				setInterval(function() {
				  if(H <= 360) {H++;}
				  else {H = 0;}
				},20);	*/
				
				var moveX = speedX;
				var moveY = speedY;
				//圈圈移动
				setInterval(function() {
					var height = $('#con').height();
					var width = $('#con').width();

					ballX = ballX+(moveX);
						if (ballX >= width-ballSize) {moveX = -speedX;}
						else if (ballX <= 0) {moveX = +speedX;}
			  
					ballY = ballY+(moveY);
						if (ballY >= height-ballSize) {moveY = -speedY;}
						else if (ballY <= 0) {moveY = +speedY;}
					$('.ball').eq(i1).css({
						'-webkit-transform':'translate3d('+ballX+'px,'+ballY+'px,0)',
						'-moz-transform':'translate3d('+ballX+'px,'+ballY+'px,0)',
						'-ms-transform':'translate3d('+ballX+'px,'+ballY+'px,0)'
					});						
				},50);
				
				//图片变化
				setInterval(function(){
						if(i2>addimg2.length-1){i2 = 0};
						i2 = i2 + 1;
						$('.ball > img').eq(i1).attr("src",addimg2[i2]);
						},10000);						
			}
	//-------------------------------------------book-----------------------------------------------------
	$(function () {		
	        $("#mybook").booklet({
				width:1018,
				height:531,
				arrows: true,
				arrowsHide: true,
				easing:  'easeInOutQuad',
				covers: true,
				startingPage:0,
				menu: '#custom-menu',
				pageSelector: true								
			});
	    });