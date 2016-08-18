 define(['jquery','swiper'],function(){
    var loadCss=function(){
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = 'css/idangerous.swiper.css';
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    loadCss();   	
	  var mySwiper = new Swiper('.m_s_hor .swiper-container',{
	    pagination: '.pagination',
	    loop:true,
	    grabCursor: true,
	    paginationClickable: true
	  });
 });
