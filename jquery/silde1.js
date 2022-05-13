$(function(){
    let imgNo = 0;
    const ul = $(".slide-wrap>ul");
    const imgCount = ul.children().length();
    ul.css("width",imgCount*1200+"px");
    $(".prev").on("click",function(){
            if(imgNo != 0){
                imgNo--;
                const move = `translateX(${imgNo * -1200}px)`;
                ul.css("transform",move).css("transitoin-duration","1s");
            }
    });
    $(".next").on("click",function(){
        if(imgNo != imgCount-1){
            imgNo++;
            const move = `translateX(${imgNo * -1200}px)`;
            ul.css("transform",move).css("transitoin-duration","1s");
        }
    });
});