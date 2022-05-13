$(function(){
    const div = $("#div");
    $("#btn1").on("click",function(){
        div.show(400); //display속성을 원래 요소의 속성으로
    });
    $("#btn2").on("click",function(){
        div.hide(400); //display속성을 none
    });
    $("#btn3").on("click",function(){
        div.toggle(5*1000); //show(),hide()번복
    });
    $("#btn4").on("click",function(){
        div.slideDown(400);
    });
    $("#btn5").on("click",function(){
        div.slideUp(400);
    });
    $("#btn6").on("click",function(){
        div.slideToggle(400);
    });
    $("#btn7").on("click",function(){
        div.fadeIn(400);
    });
    $("#btn8").on("click",function(){
        div.fadeOut(400);
    });
    $("#btn9").on("click",function(){
        div.fadeToggle(5*1000);
    });
    $("#btn10").on("click",function(){
        div.animate(
            {
                width:"100px",
                heigth:"150px",
                opacity: "0.5",
                "backgroudn-color" : "red"
            },
            1000
        )
    })
});