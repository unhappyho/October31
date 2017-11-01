// JavaScript Document
$(document).ready(function(){
	
	$('#main>div').not(main_v).addClass('cannotsee');
	//$('#main>div').addClass('cannotsee');
	$('#main_v>div').addClass("aaa vvv");
	//定义num
	var num=[0,3,4,5,9,10,11,12,15,17,21,24,27,29,33,34,35,36,39,41,45,48,49,50,51,52,53,57,58,59];
	//定义img地址
	var addimg=['img/v1.jpg','img/v2.jpg','img/v3.jpg','img/v4.jpg','img/v5.jpg','img/v6.jpg','img/v7.jpg','img/v8.jpg','img/v9.jpg','img/1.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/13.jpg','img/16.jpg','img/18.jpg','img/22.jpg','img/25.jpg','img/28.jpg','img/30.jpg','img/34.jpg','img/35.jpg','img/36.jpg','img/37.jpg','img/40.jpg','img/42.jpg','img/46.jpg','img/49.jpg','img/50.jpg','img/51.jpg','img/52.jpg','img/53.jpg','img/54.jpg','img/58.jpg','img/59.jpg','img/60.jpg'];
	//定义bookimg
	var bookimg=['bigimg/page-3.jpg','bigimg/page-4.jpg','bigimg/page-5.jpeg','bigimg/page-6.jpg','bigimg/page-7.jpg','bigimg/page-8.jpg','bigimg/page-9.jpg','bigimg/page-10.jpg','bigimg/page-11.jpg','bigimg/page-12.jpg','bigimg/page-13.jpg','bigimg/page-14.jpg','bigimg/page-15.jpg','bigimg/page-16.jpg','bigimg/page-17.jpg','bigimg/page-18.jpg','bigimg/page-19.jpg','bigimg/page-20.jpg','bigimg/page-21.jpg','bigimg/page-22.jpg','bigimg/page-23.jpg','bigimg/page-24.jpg','bigimg/page-25.jpg','bigimg/page-26.jpg','bigimg/page-27.jpg','bigimg/page-28.jpg','bigimg/page-29.jpg','bigimg/page-30.jpg','bigimg/page-31.jpg','bigimg/page-32.jpg','bigimg/page-33.jpg','bigimg/page-34.jpg','bigimg/page-35.jpg','bigimg/page-36.jpg','bigimg/page-37.jpg','bigimg/page-38.jpg','bigimg/page-39.jpg','bigimg/page-40.jpg','bigimg/page-41.jpg','bigimg/page-42.jpg','bigimg/page-43.jpg','bigimg/page-44.jpg','bigimg/page-45.jpg','bigimg/page-46.jpg','bigimg/page-47.jpg','bigimg/page-48.jpg','bigimg/page-49.jpg'];
	//定义alt地址
	var addalt=['bigimg/v1.jpg','bigimg/v2.jpg','bigimg/v3.jpg','bigimg/v4.jpg','bigimg/v5.jpg','bigimg/v6.jpg','bigimg/v7.jpg','bigimg/v8.jpg','bigimg/v9.jpg','bigimg/1.jpg','bigimg/4.jpg','bigimg/5.jpg','bigimg/6.jpg','bigimg/10.jpg','bigimg/11.jpg','bigimg/12.jpg','bigimg/13.jpg','bigimg/16.jpg','bigimg/18.jpg','bigimg/22.jpg','bigimg/25.jpg','bigimg/28.jpg','bigimg/30.jpg','bigimg/34.jpg','bigimg/35.jpg','bigimg/36.jpg','bigimg/37.jpg','bigimg/40.jpg','bigimg/42.jpg','bigimg/46.jpg','bigimg/49.jpg','bigimg/50.jpg','bigimg/51.jpg','bigimg/52.jpg','bigimg/53.jpg','bigimg/54.jpg','bigimg/58.jpg','bigimg/59.jpg','bigimg/60.jpg'];
	//添加aaa
	for(i=0;i<num.length;i++){
			$('#main>div').not(main_v).eq(num[i]).addClass('aaa');
			//$('#main>div').eq(num[i]).addClass('aaa');
	}
	//批量添加img
	$('.aaa').append('<img />');
	for(i=0;i<addimg.length;i++){
			$('.aaa>img').eq(i).attr("src",addimg[i]);
			$('.aaa>img').eq(i).attr("alt",addalt[i]);
		}
	//书本添加img
	$('#mybook>div').addClass('pageclass');
	for(i=2;i<=bookimg.length+1;i++){
		$('.pageclass').eq(i).append('<img />');
		$('.pageclass').eq(i).children('img').attr("src",bookimg[i-2]);
	}
	for(i=1;i<=50;i++){
		$('.pageclass').eq(i-1).attr("id","page"+i);
	}
	
	//点击查看大图开始
	$('.aaa').click(function(){
		//$('body').attr("overflow",hidden);
		
		//添加遮罩
		var maskheight=$(document).height();
		var maskwidth=$(document).width();
		$('<div class="mask"></div>').appendTo($('body'));
		$('div.mask').css({
				'opacity':0.7,
				'background':'#000',
				'position':'absolute',
				'left':0,
				'top':0,
				'height':maskheight,
				'width':maskwidth,
				'z-index':998
			});
		//放大图片
		//var showheight=window.screen.availHeight;
		//$('#showimg').css("height",'showheight');
		//$(this).children().clone().appendTo('#showimg');
		//$('<img />').appendTo('#showimg');
		var alts=$(this).children().attr("alt");
		$('#showimg>img').attr("src",alts);
		$('#showimg>img').css({
			"width":"100%",
			"height":"100%"
			});
		$('#showimg').show("scale",1000);
		});
		
	
		//提示关闭
		//$('#showimg').mouseenter(function(){
//			$(this).after('<div class="back">点击图片返回上一级哦<div>');
//			$(this).mousemove(function(){
//			var left1=e.pageX+"px";
//			var top1=e.pageY+"px";
//			
//				$('.back').css({
//						"width":"auto",
//						"height":"auto",
//						"position":"absolute",
//						"top":"top1",
//						"left":"left1",
//						"z-index":"4"
//					});
//				});
//			}).mouseleave(function(){
//				$('div.back').remove();	
//			});
		//关闭大图
		$('#showimg').click(function(){
				$(this).hide("scale",1000);
				//$(this).children().remove();
				$('.mask').remove();
				//$('div.back').remove();
			});
		
	
});