function func1(){
    console.log("인라인이벤트");
}
$(function(){
    /*
    $(".d1").click(function(){
        console.log($(this).text());
    })
    */
   $(document).on("click",".d1",function(){
       console.log($(this).text());
   });
   $("#btn1").on("click",function(){
    const div = $("<div></div>");
    div.addClass("d1");
    div.append("test-4");

    $("#test1").append(div);
   });
   $(".levelup>button").not("#allLevelup").on("click",function(){
    const span = $(this).next().next();
    const level = Number(span.text())+1;
    span.text(level);
   });
   $("#allLevelup").on("click",function(){
    const btn = $(".levelup>button").not("#allLevelup");
    //btn.trigger("click");
    btn.click();
   });
   $("#click").on("click",function(){
       $(this).css("color","red");
   });
   $("#dblclick").on("dblclick",function(){
    $(this).css("color","blue");
   });
   $("#mouseupdown").on("mouseup",function(){
       $(this).css("color","red");
   });
   $("#mouseupdown").on("mousedown",function(){
       $(this).css("color","blue");
   });
   $(document).mousemove(function(event){
    const html = event.pageX+","+event.pageY;
    $("#mousemove").text(html);
   });
   $("#input1").on("focusin",function(){
       $(this).css("border-bottom","1px solid black");
   });
   $("#input1").on("focusout",function(){
       $(this).css("border-bottom","1px solid lightblue");
   })
   $("#submit").on("click",function(event){
        const input1 = $("#input1");
        if(input1.val() == ""){
            //기본이벤트 제거 함수
            event.preventDefault();
            //input1.focusin();
            input1.focus();
        }
   });
   $("#input2").on("change",function(){
       console.log("input2 값 변경!!!!");
   });
   $("[name=test1]").on("change",function(){
       console.log($(this).val());
   });
});