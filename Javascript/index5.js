


function lovePercent(){
    let percent = Math.random()*100;
    return window.alert("love percent is " + (Math.floor(percent)+1) + "%");
}

let val = document.getElementById("btn");
val.addEventListener("click",lovePercent);