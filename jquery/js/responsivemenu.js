$(function(){
    $("#menu-btn").on("click",function(){
        $(".nav>ul").slideToggle();
    });
    //브라우저에 크기 변화가 발생했을 때 이벤트
    $(window).resize(function(){
        const currentWidth = $(window).width(); //현재 브라우저 창의 너비
        if(currentWidth > 760 && $(".nav>ul").is(":hidden")){
            $(".nav>ul").removeAttr("style");
        }
    });
});