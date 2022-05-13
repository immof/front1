const arr1 = [1,2,3]; //길이가 3인 배열선언
console.log(arr1);
console.log(arr1[1]);
arr1[1] = 100;
console.log(arr1);
const arr2 = new Array();
console.log(arr2);
arr2[0] = 100;
console.log(arr2);
arr2[3] = 100;
console.log(arr2);
console.log(arr2[0],arr2[1]);
const arr3 = new Array(1,2,3);
console.log(arr3);
for(let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}


function sortASC(a,b){
    return a-b;
}
function sortDESC(a,b){
    return b-a;
}

const testArr3 = [1,3,2,7,10,9,8,7,6,4,5]
testArr3.sort(sortASC);
console.log(testArr3);
testArr3.sort(sortDESC);
console.log(testArr3);

testArr3.reverse(); //배열순서반전
console.log(testArr3);

//push,pop
const testArr4 = [1,2,"hello",true];
console.log(testArr4);
//push 배열 가장 뒤에 값 추가
testArr4.push(100);
console.log(testArr4);
testArr4.push(200);
console.log(testArr4);
//pop 배열 가장 뒤에 값 제거
testArr4.pop();
console.log(testArr4);


//unshift,shift
//unshift : 배열 가장 앞에 값 추가
testArr4.unshift("hhihi");
console.log(testArr4);
//shift : 배열 가장 앞의 값 제거
testArr4.shift();
console.log(testArr4);

//slice
const testArr5 = testArr4.slice(1,3); //testArr4 배열의 1번 인덱스부터 3번인덱스 전까지 복사해서 배열로 리턴
console.group(testArr5);

const testArr6 = testArr4.slice(1); // testArr4 배열의 1번 인덱스부터 끝까지 복사해서 배열로
console.log(testArr6);

//splice
const testArr7 = testArr4.splice(2,2); //testArr4 배열의 2번 인덱스부터 2개 잘라내어 리턴
console.log(testArr7);
console.log(testArr4);

const testArr8 = testArr4.splice(1,1,"test");
console.log(testArr8);
console.log(testArr4);