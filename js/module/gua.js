define(['jquery'],function(){
addEventListener( "load", init, false );
$(".btn_gua").click(function(){
  $("#redux").css("visibility","visible");
  $("#robot").show();
});
function init( event ) {
    $("#redux").eraser({
      size:25,
      completeRatio:.5,
      completeFunction: showResult,
    });
}
var showResult=function(){
    $('#redux').hide();
    var times=$(".m_scratch .left_time span")[0];
    setTimeout(function () {
     console.log("中奖!");
     if(times.innerText-->1){
      $("#robot").hide();
      $("#redux").css("visibility","hidden").show().eraser('reset');
     }
      }, 700);
  
}
});