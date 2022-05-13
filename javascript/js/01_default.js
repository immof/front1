console.log("hello");

alert(100+200);
alert(100,200,300); //첫번째 매개변수 100만 alert을 이용해서 화면에 나오고 나머지는 매개변수는 모두 버림

//3. confirm
//console.log(confirm("자바스크립트는 할만해요?"));
if(confirm("자바스크립트는 할만해요?")){
    console.log("ㅇㅇ")
}else{
    console.log("ㄴㄴ")
};

//4. prompt
console.log(prompt("당신의 이름은?"));