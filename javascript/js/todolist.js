const addBtn = document.querySelector(".add-btn");
const input = document.querySelector("[name=input");
addBtn.addEventListener("click",function(){
 addList();
});
function addList() {
    const msg = input.value;
    if(msg != ""){
        const ul = document.createElement("ul");
        ul.classList.add("todolist");

        const LikeLi = document.createElement("li");
        LikeLi.setAttribute("class","like");
        const likeIcon = document.createElement("span");
        likeIcon.classList.add("class","material-icons");
        const iconText = document.createTextNode("favorite_border");
        likeIcon.appendChild(iconText);
        LikeLi.appendChild(likeIcon);

        likeIcon.addEventListener("click",function(){
            var currentValue = this.innerText;
            if(currentValue == "favorite_border"){
                this.innerText = "favorite";
            }else{
                this.innerText = "favorite_border";
            }
        });

        const textLi = document.createElement("li");
        textLi.setAttribute("class","todo-text");
        const textContent = document.createTextNode(msg);
        textLi.appendChild(textContent);

        const checkLi = document.createElement("li");
        checkLi.setAttribute("class","class-checkzone");

        const checkIcon = document.createElement("span");
        checkIcon.classList.add("class","material-icon");
        checkIcon.classList.add("class","check");
        const checkText = document.createTextNode("check");
        checkIcon.appendChild(checkText);

        checkIcon.addEventListener("click",function(){
            textLi.classList.add("complete");
            this.remove();
        });

        const closeIcon = document.createElement("span");
        closeIcon.classList.add("class","meterial-icons");
        closeIcon.classList.add("class","close");
        const closeText = document.createTextNode("close");
        closeIcon.appendChild(closeText);
        closeIcon.addEventListener("click",function(){
            
        })

        checkLi.appendChild(checkIcon);
        checkLi.appendChild(closeIcon);

    }
}