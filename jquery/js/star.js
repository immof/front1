$(function(){
    const stars = $(".star-wrap1>span");
    stars.on("mouseover",function(){
        stars.css("color","lightgray");
        const index = stars.index(this);
        for(let i=0;i<index;i++){
            stars.eq(i).css("color","gold");
        }
        $("#star-result").text(index+1);
    });
    $("#btn").on("click",function(){
        const score = $(this).prev().val();
        const starScore = score*30;
        //$(".star.on").css("width",starScore+"px");
        $(".star-on").animate({"width":starScore+"px"},2000);
    });
});
