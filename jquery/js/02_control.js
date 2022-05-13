function func1(){
    const divs = $("#test1>div");
    /*
    divs.each(function(index,item){
        
        //index가 순회번호 (for문의 i 역할)
        //item 해당 순번의 객체
        //item은 자바스크립트객체로 jquery메소드를 사용하는 경우 $(item)
        console.log(index,$(item).text());
        if($(item).is(".d1")){
            $(item).css("color","red");
        }else if($(item).is(".d2")){
            $(item).css("color","blue");
        }else {
            $(item).css("color","green");
        }
    });
    */
   $.each(divs,function(index,item){
       console.log(index,$(item).text());
        if($(item).is(".d1")){
            $(item).css("color","red");
        }else if($(item).is(".d2")){
            $(item).css("color","blue");
        }else {
            $(item).css("color","green");
        }
   })
}

function func2(){
    const divs = $("#test2>div");
    divs.eq(1).addClass("t-red");
    divs.first().addClass("t-red");
    divs.eq(2).addClass("t-red").addClass("bg-yellow");
    divs.last().addClass("t-red bg-yellow");
}

function func3(){
    const divs = $("#test2").children();
    divs.eq(1).removeClass("t-red");
    divs.eq(2).removeClass("bg-yellow").removeClass("t-red");
    divs.last().removeClass("bg-yellow t-red");
}

function func4(){
    const divs = $("#test2>div");
    //hasClass("클래스명") : 매개변수로 전달한 클래스를 갖고 있으면 ture/없으면 false 리턴
    if(divs.eq(1).hasClass("t-red")){
        //글씨색이 빨간색이면 글씨색 적용 해제
        divs.eq(1).removeClass("t-red");
    }else{
        divs.eq(1).addClass("t-red");
    }
}