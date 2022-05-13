
$(function() {
    /*
    const p2 = document.querySelectorAll(".p2");
    
    for(let i=0;i<p2.length;i++){
        p2[i].addEventListener("click",function(){
            console.log(this.innerText);
        });
    }
    p2.forEach(function(item,index){
        item.addEventListener("click",function(){
            console.log(index);
            console.log(this.innerText);
        });
    });
    */
   const p2 = $(".p2");
   p2.click(function(){
       const index = p2.index(this);
    console.log($(this).text());
   });
});



// const p1 = document.querySelector("#p1");
function func1(){
    const p1 = $("#p1");
    //console.log(p1.innerText);
    console.log(p1.text());
    //console.log(p1.innetHTML);
    console.log(p1.html());
    //p1.innerText = "아이디";
    //p1.text("아이디");
    //p1.innetHTML = "아이디";
    p1.html("아이디");
    //p1.style.backgroundColor = "yellow";
    // p1.style.color = "red";
    //p1.css("color","red");
    //p1.css("background-color","yellow");
    //p1.css("color","red").css("background-color","yellow");
    p1.css({
        "color":"red",
        "background-color":"yellow"
    });
    console.log(p1.css("color"));
}

function func2(){
    const filter = $(".filter>p");
    console.log("선택된 엘리먼트 수 : "+filter.length);
    const first = filter.first(); //선택된 요소 중 첫번째 요소
    console.log("first() : "+first.text());
    const last = filter.last(); //선택된 요소 중 마지막 요소
    console.log("last() : "+last.text());
    const eq = filter.eq(2); //선택된 요소 중 2번째 인덱스 (3번째);
    console.log("eq(2) : "+eq.text());
    const filter2 = filter.filter(".pp1");
    console.log(filter2.length);
    const filter3 = filter.not(".pp4");

    for(let i=0;i<filter2.length;i++){
        console.log(filter2.eq(i).text());
    }
    for (let i=0;i<filter3.length;i++){
        console.log(filter3.eq(i).text());
    }
    //여러요소에 한번에 값을 가져오면 첫번째 요소의 해당 값만
    console.log(filter3.html());
    //함수 설정 뿐만 아니라 css, text등의 설정도 일괄 적용
    filter3.css("color","red");
    filter3.text("변경");
    console.log(filter.html());
    
}

function func3() {
    //parent() : 선택된 요소의 바로 위 상위 요소
    const select = $(".ancestors span").parent();
    select.css("border","2px solid red");
}

function func4(){
    //parents([인자])
    //매개벼수가 없는 경우 : 선택된 요소의 모든 상위 요소
    const select = $(".ancestors span").parents();
    select.css("border","2px solid red");
}

function func5(){
    //parentsUntil(인자) : 선택된 요소부터 인자의 요소까지 범위에 포함되는 요소 리턴(선택된 요소, 인자 제외하고 사이에 있는 요소)
    const select = $(".ancestors span").parentsUntil("div");
    select.css("border","2px solid red");
}

function func6(){
    //children()
    //매개변수가 없는 경우 : 모든 직계 자식
    //const select = $(".descendants").children();
    //select.css("border","2px solid red");
    //매개변수가 있는 경우 : 모든 직계 자식 중 매개변수의 선택자에 해당하는 요소만
    const select = $(".descendants").children(".child1");
    select.css("border","2px solid red");
}

function func7(){
    //find(인자) : 모든 후손 요소 중 인자로 전달한 요소만
    const select = $(".descendants").find(".child1");
    select.css("border","2px solid red");
}

function func8(){
    //siblings()
    //매개변수 없는 경우 : 형제 관계에 있는 모든 요소
    // const select = $(".siblings h3").siblings();
    // 매개변수 있는 경우 : 형제 관계에 있는 요소 중 매개변수로 전달받은 선택자에 해당하는 요소만
    const select = $(".siblings h3").siblings("p");
    select.css("border","2px solid red");
}

function func9(){
    //next() : 선택된 요소의 바로 다음 요소
    const select = $(".siblings h3").next();
    select.css("border","2px solid red");
}

function func10(){
    //nextALL()
    //매개변수 없는 경우 : 선택된 요소의 형제들 중 선택된 요소 이후에 있는 모든 요소
    //const select = $(".silblings h3").nextAll();
    //매개변수가 있는 경우 : 선택된 요소의 형제들 중 선택된 요소 이후에 있는 요소 중 매개변수로 전달한 선택자에 해당되는 요소
    const select = $(".siblings h3").nextAll("h5");
    select.css("border","2px solid red");
}


function func11(){
    //nextUntil(인자) : 선택된 요소부터 매개변수 사이의 모든 요소
    const select = $(".siblings h3").nextUntil("p");
    select.css("border","2px solid red");
}

function func12(){
    //prev() : 선택된 요소의 바로 이전 요소
    const select = $(".siblings h3").prev();
    select.css("border","2px solid red");
}

function func13(){
    //prevAll()
    //매개변수 없는 경우 : 선택된 요소의 형제들 중 이전에 있는 요소 전체
    //const select = $(".silbings h3").prevAll();
    //매개변수 있는 경우 : 선택된 요소의 형제들 중 이전의 있는 요소 중 매개변수 선택자에 해당하는 요소만
    const select=$(".siblings h3").prevAll("span");
    select.css("border","2px solid red");
}

function func14(){
    //prevUntil(인자) : 선택된 요소의 이전에 있는
    const select = $(".siblings h3").prevUntil("p");
    select.css("border","2px solid red");
}