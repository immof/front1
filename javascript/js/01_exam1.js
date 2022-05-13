const q1 = document.querySelector("#q1");
q1.onclick = function(){
    const name = prompt("이름 입력");
    const age = prompt("나이 입력");
    const addr = prompt("주소 입력");
    const nameSpan = document.querySelector("#name");
    const ageSpan = document.querySelector("#age");
    const addrSpan = document.querySelector("#addr");
    nameSpan.innerText = name;
    ageSpan.innerText = age;
    addrSpan.innerText = addr;
}

const q2 = document.querySelector("#q2");
q2.onclick = function(){
    const input = document.querySelector("#input1");
    const inputValue = input.value;
    const result = document.querySelector(".result")
    if(isNaN(inputValue)){
        result.innerText = "숫자가 아닙니다.";
    }else{
        if(inputValue%2 == 0){
            result.innerText = "짝수";
        }else{
            result.innerText = "홀수";
        }
    }
}
const img = document.querySelector("img");
img.onclick = function(){
    img.setAttribute("src","img/angel.png");
}

const q4 = document.querySelector("#q4");
q4.onclick = function(){
    const result = document.querySelector("#result");
    result.style.color = "navy";
}