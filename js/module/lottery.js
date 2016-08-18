define(['jquery'],function(){
$(".m_squared .btn_chou").one("click",function(){
  lottery();	
});

 var lottery=function (callback){
	if($(".m_squared .left_time span")[0].innerText==0){
		lottery=null;
		return false;
	}
	$(".m_squared .left_time span")[0].innerText--;	 	
 	var li=document.querySelectorAll(".m_squared .g");
 	var n=li.length;
	var temp=1;//从第一个开始
 	var zhong=5;//抽中哪个(指从第一个开始数起)
 	var quan=10;//一共几圈
 	var speed=300;
 	var speed0=80;//大概的平均速度
 	var ge=zhong+quan*n;//总共要走的单位数
 	//中奖后函数
 	var result=function(){
 		console.log("中奖!");
 	}
    return function chouTimer(){
	     	for(var k=0;k<n;k++){
	     		$(li[k]).removeClass("active");	     		
	     	 }
	     	for(var j=0;j<8;j++){
	           if(parseInt(li[j].getAttribute("data-sequence"))==temp){
	              $(li[j]).addClass("active");
	              //单位数为1时，停止，执行回调
	              if(ge==1){	
	               result();     	
					$(".m_squared .btn_chou").one("click",function(){
					  lottery();	
					});  	              	
	              	// if(callback){callback();}
	              	return false;
	              }
	           }
	        }  
	        temp>=8?(temp=1):temp++;
	        ge--;
             if(ge<=n*2){
               speed+=20;
             }
             else{
 		        if(speed>=speed0){
		        speed-=20;
                 }               	
             }
	        setTimeout(chouTimer,speed);		       
     }();
 }
 });
