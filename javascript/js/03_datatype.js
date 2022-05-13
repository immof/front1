const str = "JavaScript";
console.log(str);
console.log(typeof(str));
console.log(typeof str);
console.log(str.length); //문자열 길이를 리턴
console.log(str.toLowerCase()); //해당문자열을 소문자로 리턴
console.log(str); //원본문자열에는 변화없음
console.log(str.toUpperCase()); //해당 문자열을 대문자로 리턴
console.log(str);
console.log(str.indexOf("a")); //앞에서부터 매개변수로 준 문자열의 위치를 찾아서 리턴
console.log(str.lastIndexOf("a")); //뒤에서부터 매개변수로 준 문자열의 위치를 찾아서 리턴
console.log(str.indexOf("z")); //indexof,lastindexof를 통해서 검색할 때 해당 문자열이 존재하지 않으면 -1
console.log(str.charAt(4)); //해당 인덱스에 있는 문자열 1개 리턴
//for(int i=3,u<7;i++)
console.log(str.substring(3,7)); //3번 인덱스부터 7번 앞까지 문자열 리턴
console.log(str.substring(3)); // substring에 매개변수가 1개인 경우 해당번째부터 끝까지
const study = "java,oracle,html,javascript"
const arr = study.split(","); //매개변수로 전달한 값을 기준으로 잘라내어 배열 형태로 리턴
console.log(arr);

console.log(Math.round(3.4));
console.log(Math.floor(3.9), Math.ceil(3.1)); //버림, 올림

//자동 형 변환
const userName = "이윤수";
const userAge = 20;
const userGrade = "1";
console.log(userName+userAge); 
console.log(userName+userGrade);
console.log(userAge+userGrade);
console.log(userAge-userGrade); // +를 제외한 산술연산은 모두 숫자연산으로 처리
//제 이름은 이윤수이고, 나이는 20살 1학년입니다.
console.log("제이름은 "+userName+"이고, 나이는 "+userAge+"살 "+userGrade+"학년 입니다.");
console.log(`제 이름은 ${userName}이고, 나이는 ${userAge}살 ${userGrade}학년입니다.`);

//수동 형변환
const test11 = "100";
console.log(typeof test11);
const test22 = Number(test11); //숫자타입으로 형변환
console.log(typeof test22);
const test33 = String(test22); //문자열 타입으로 형 변환
console.log(typeof test33);

//연산자
const oper1 = "1";
const oper2 = 1;
console.log(typeof oper1);
console.log(typeof oper2);
console.log(oper1 == oper2); //자료형과 상관없이 값이 일치하면 true
console.log(oper1 === oper2);  //값이 일치하고 자료형까지 일치하면 true
if(oper1 == oper2){
    console.log("같습니다.");
}else{
    console.log("다릅니다.")
}
if(oper1 === oper2){
    console.log("같습니다.");
}else{
    console.log("다릅니다.")
}

//짧은 조건문
//&& 연산 || 연산의 동장 방식을 이용하는 조건문
const testNum = 11;
if(testNum%2 == 0){
    console.log("짝수!");
}else{
    console.log("홀수!");
}

testNum%2 == 0 || console.log("홀수입니다.");
testNum%2 == 0 && console.log("짝수입니다.");

for(let i = 0;i<5;i++){
    console.log(`${i+1}번째 메시지 출력`);
}