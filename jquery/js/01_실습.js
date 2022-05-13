$(function(){
    const text1 = $("#text");
    text1.click(function(){
        console.log($(this).html());
    });
    $(".text").click(function(){
        console.log($(this).text());
    });
    $("[name=text]").click(function(){
        console.log($(this).text());
    });
});
function func1(){
    /*
    const checkBox = $("[name=stydy]");
    //객체.is("선택자") :
    for(let i=0;i<checkBox.length;i++){
        if(checkBox.eq(i).is(":checked")){
                count++;
            }
        }
        console.log(count);
        */
       /*
    //방법2
     const checkBox = $("[name=stydy]");
     const filter = checkBox.filter(":checked");
     console.log(filter.length);
     */
    //방법3
    console.log($("[name=stydy]:checked").length);
}

function exam1(){
    const pp = $("#pp");
    //const carrot = pp.prev().children().first();
   //const carrot = pp.parent().children().eq(0).children.eq(0);
   const carrot = pp.parent().find("li").first();
    carrot.css("border","2px solid red");
}

function exam2(){
    //const ul = $(".text ul");
    const ul = $("#pp").prev();
    const fire = ul.next().children().eq(1);
    fire.css("border","2px solid red");
}

function exam3(){
    const span = $("#pica");
    //const div = span.parent().parent();
    const div = span.parents("div").eq(0);
    div.css("border","2px solid blue");
}

function exam4(){
    const test = $(".test");
    const li = test.find("li");
    for(let i=0;i<li.length;i++){
        console.log(li.eq(i).text());
    }
}