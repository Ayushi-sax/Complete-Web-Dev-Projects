

function diceRoll(){
    let num1 = Math.floor(Math.random()*6)+1;
    let num2 = Math.floor(Math.random()*6)+1;
    let heading = document.getElementsByTagName("h1")[0];
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    
    img1.src = `/Javascript/images/dice${num1}.png`; // Assume images are named dice1.png, dice2.png, etc.
    img2.src = `/Javascript/images/dice${num2}.png`;
if(num1>num2){
    heading.innerText = "🚩 Play 1 Wins!";
}
else if(num2>num1){
    heading.innerText = "Player 2 Wins! 🚩";
}
else{
    heading.innerText = "Draw";
}
}
diceRoll();
