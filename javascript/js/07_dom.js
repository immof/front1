//1. 텍스트노드를 갖는 요소 생성
//p태그 생성
const p = document.createElement("p");
//<p></p>태그 생성
const text1 = document.createTextNode("p태그 내부에 추가될 구문");

p.setAttribute("id","pppp");
p.setAttribute("class","pp");
p.onclick = function(){
    console.log("p태그 클릭");
}

//생성한 p태그의 자식으로 text1 태그를 추가
p.appendChild(text1); // <p>p태그 내부에 추가될 구분 </p>
document.getElementById("add-zone").appendChild(p);



//2. 텍스트노드를 갖지 않는 요소 생성
//img 태그 생성
const img = document.createElement("img"); //<img>
//태그에 속성값 추가
img.src = "img/피카.png";
document.getElementById("add-zone").append(img);

console.dir(p);


//3. 태그를 여러개 생성해서 넣는 경우
//ul -> li -> a
const ul = document.createElement("ul");// <ul></ul>
const li1 = document.createElement("li"); //<li></li>
const a1 = document.createElement("a"); //<a></a>
const menu1 = document.createTextNode("menu1"); //menu1
a1.setAttribute("href","#"); //<a href="#">menu1</a>
a1.style.textDecoration = "none";
a1.style.color="red";
a1.appendChild(menu1); //<a>menu1</a>
li1.appendChild(a1); //<li><a>menu1</a></li>
ul.appendChild(li1);// <ul><li><a herf="#">menu1</a></li></ul>

const li2 = document.createElement("li"); //<li></li>
const a2 = document.createElement("a"); //<a></a>
const menu2 = document.createTextNode("menu2"); //menu1
a2.setAttribute("href","#");
a2.appendChild(menu2);
li2.appendChild(a2);
ul.appendChild(li2); //<ul><li><a href="#">menu1</a></li><li><a href="#">menu2</a></li></ul>

const li3 = document.createElement("li"); //<li></li>
const a3 = document.createElement("a"); //<a></a>
const menu3 = document.createTextNode("menu3"); //menu1
a3.setAttribute("href","#");
a3.appendChild(menu3);
li3.appendChild(a3);
ul.appendChild(li3);
document.getElementById("add-zone").appendChild(ul);

//id속성의 값이 div html 요소를 가져옴
const div = document.getElementById("div");
console.dir(div);
//가져온 요소의 속성값 확인
console.log(div.getAttribute("id"));
console.log(div.getAttribute("calss"));
console.log(div.getAttribute("name"));
//가졍노 요소의 속성 값 변경
div.setAttribute("id","d");
div.setAttribute("class","c1 c2");
div.setAttribute("name","name-div");