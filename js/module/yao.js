define(['jquery'],function(){
	$(".btn_yao").on("click",function(){ 
	  $(this).unbind("click");
	  yao();
	});	

var yao=(function(){	
	var yao1=$(".yao1")[0];
	var yao2=$(".yao2")[0];
	var yao3=$(".yao3")[0];
	var n=3;//奖品数
	var h=345;//奖品总长度
	var timer=null;	
	var next=1000;
	var zj=[0,1,1];//中奖
	var y0=h/3/2;
	var yStep=y0*2;
	var r=5;//圈数

	yao1.style.backgroundPositionY=y0+'px';
	yao2.style.backgroundPositionY=y0+'px';
	yao3.style.backgroundPositionY=y0+'px';
	var temp=y0;
	// var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { window.setTimeout(callback, 1000 / 60); };
	var timer=null;
	function Gift(){
		var o=new Object();
		o.run=run;
		return o;
	}
	//o:对象，t:垂直距离，r:圈数，w:中奖，c:callback
	function run(o,t,r,w,c){
		var timer1=null;			
		if(r==0){
			if(t>=((w*2+1)*(h/n/2))){
				if(c){
					c();
				}				
				return false;
			}						
		}
		if(~~t>=345){
			t=0;
			r--;
		}		
		o.style.backgroundPositionY=(t+=15)+'px';
		timer1=setTimeout(function(){		
			run(o,t,r,w,c);
		},16);
		return o;				
	}
		var runAsync1=function(){
			var p=new Promise(function(resolve,reject){
					Gift().run(yao1,temp,r,zj[0]);
					resolve();			
			});	
			return p;
		}
		var runAsync2=function(){
			var p=new Promise(function(resolve,reject){
				setTimeout(function(){
					Gift().run(yao2,temp,r,zj[1]);
					resolve();
				},800);
			});	
			return p;
		}
		var runAsync3=function(){
			var p=new Promise(function(resolve,reject){
				setTimeout(function(){
					Gift().run(yao3,temp,r,zj[2]);
					resolve();
					$(".btn_yao").on("click",function(){ 
					  $(this).unbind("click");
					  yao();
					});						
				},800);
			});	
			return p;
		}		
	return function(){
			var times=$(".m_ernie .left_time span")[0].innerText;//剩余次数
			if(times==0){
				yao=null;
				return false;
			}			
			$(".m_ernie .left_time span")[0].innerText--;			
			runAsync1()
			.then(function(data){
				return runAsync2();
			})
			.then(function(data){
				return runAsync3();
			});
		}	
})();
});
