require.config({
    baseUrl: 'js',
    paths:{
        //jq��
        jquery:"lib/jquery-1.10.2.min",
        //���
        eraser:"other/jquery.eraser",
        swiper:"other/idangerous.swiper.min",
        swiper2:"other/idangerous.swiper-2.0.min",
        swiper3d:"other/idangerous.swiper.3dflow-2.0",       
        //ģ��
        gua:"module/gua",//�ν�
        slide:"module/slide",//չʾ����
        slide2:"module/slide2",//չʾ����
        yao:"module/yao",//ҡ��
        lottery:"module/lottery"//�Ź���齱
    },
    shim:{
        'eraser':{
            deps:['jquery'],
            exports:'jQuery.fn.eraser'
         },   
        'swiper':{
            deps:['jquery'],
            exports:'jQuery.fn.swiper'
        },   
        'swiper2':{
            deps:['jquery'],
            exports:'jQuery.fn.swiper2'
         },   
        'swiper3d':{
            deps:['jquery',"swiper2"],
            exports:'jQuery.fn.swiper3d'
        }
        // 'gua':{
        //     dep:['jquery','eraser'],
        //     exports:"gua"
        // }
    }
});

require(['jquery',"eraser","swiper","swiper2","swiper3d","gua","slide","slide2","yao","lottery"],function($){
    (function(){
     
    })();
    
});