$(function(){
    // nav
    $(".mob_Open").on("click",function(){
        $(".mob_nav").fadeIn();
    })
    $(".mob_Close").on("click",function(){
        $(".mob_nav").fadeOut();
    })


    //精選旅程輪播
    if(!device.desktop()){
        //mobile
         $('.owl-carousel').slick({
        dots: true,
        slidesToShow: 1,
        });
    
    }else{
        //PC
        $('.owl-carousel').slick({
        dots: true,
        slidesToShow: 3,
        });
    }

    $('.carousel').slick({
        dots: true,
        fade:true,
        appendDots:$('.dots-area'),
        });

})//