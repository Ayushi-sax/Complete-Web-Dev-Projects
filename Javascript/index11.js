let btn1 = document.querySelector(".minus");
let btn2 = document.querySelector(".positive");
let content = document.querySelector("#counter");
let newNum = parseInt (content.innerHTML);
btn1.addEventListener("click",function(){
newNum = newNum - 1;
content.innerHTML = newNum;
});

btn2.addEventListener("click",function(){
    newNum = newNum + 1;
    content.innerHTML = newNum;
    });