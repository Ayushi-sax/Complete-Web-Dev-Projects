let btn = document.querySelector("button");

//Prints the string format of the entered element
console.log(btn.nodeName);

function run(){
    console.log("running");
}
//Adding event listener
btn.addEventListener("click",run);

//Removing event listener
btn.removeEventListener("click",run);

//Understanding phases of events
let out = document.querySelector(".outer");
let inner = document.querySelector(".inner");

//In Bubbling phase from inner to outer
inner.addEventListener("click",function(event){
    //To stop propogation at a certain point
    // event.stopPropagation
    console.log("inner has been clicked");
},false);
out.addEventListener("click",function(){
    console.log("outer has been clicked");
},false);

//In Capturing phase from outer to inner
inner.addEventListener("click",function(){
    console.log("inner has been clicked");
},true);
out.addEventListener("click",function(){
    console.log("outer has been clicked");
},true);

//At target phase
inner.addEventListener("click",function(event){
    console.log(this.target);
},false);
out.addEventListener("click",function(event){
    console.log(event);
},false);


//Delegation of an event
let out1 = document.querySelector(".outer"); // Select the parent container
let newElement = document.createElement("p"); // Create a paragraph element
newElement.innerText = "Hello there"; // Add text content to the paragraph
out1.appendChild(newElement);
out1.addEventListener("click",function(event){
    if(event.target === "p"){
        console.log(`you clicked :${event.target}`);
    }
})
//To check performance speed of code
console.log(performance.now());