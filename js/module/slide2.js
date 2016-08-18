define(['jquery','swiper2','swiper3d'],function(){
  $(function(){  
    //Featured Slide
    var featuredSwiper = $('.featured').swiper({
      slidesPerView:'auto',
      centeredSlides: true,
      initialSlide:7,
      tdFlow: {
        rotate : 30,
        stretch :10,
        depth: 150
      }
    })
  });
});

