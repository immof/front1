$(function(){
    $(".sub-menu").prev().append("<span class='more'>+</span>");
    $(".more").parent().on("click",function(){
        $(this).next().slideToggle();
        $(this).children(".more").toggleClass("menu-active");
    })
});