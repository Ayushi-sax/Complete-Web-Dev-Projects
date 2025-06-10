function sum(a,b){
    return a+b;
}
// sum(1,2);
console.log(sum(1,2));

function retLength(input){
    return input.length;
}
console.log(retLength("ayushi"));

function largeNo(num1,num2){
    if(num1>num2){
        return console.log("num1 is greater");
       
    }
    else{
        return console.log("num2 is greater");    
    }
}
largeNo(1,2);

function revString(rev){
    let arr = [...rev];
    let converted = arr.reverse();
    let otStr = converted.join("");
    return console.log(otStr);
}
revString("ayushi");

function table(num){
    for(i=1;i<=10;i++){
     let  number = num*i;
       console.log(number);
    }
   
}
// console.log(table(2));
table(2);

function addition(number){
    let sum=0;
    for(i=1;i<=number;i++){
       sum =sum+i;
       
    }
    console.log(sum);
}
addition(5);

function vowels(entry){
    let newStr = [...entry];
    let lgStr = newStr.length;
    let count =0;
    for(let i=0;i<lgStr;i++){
       
        if(newStr[i]==="a" || newStr[i]==="e" || newStr[i]==="i" || newStr[i]==="o" || newStr[i]==="u"){
            
            count++;
        }
    }
        console.log(count);
    
}
vowels("ayushi");

function commonEle(arr1,arr2){
    let commonElements = [];
    for(let i=0;i<arr1.length;i++){
            if(arr2.includes(arr1[i])){
                
      if (!commonElements.includes(arr1[i])) {
        commonElements.push(arr1[i]);
            }
        }
    }
   return commonElements.sort();
}
console.log(commonEle([1,2,3,4,5],[2,3,4,6,7]));


function countLett(str){
let count ={};
for(let i=0;i<str.length;i++){
    let arr = str[i];
    if(count[arr]){
        count[arr]++;
    }
    else{
        count[arr]=1;
    }
}
return count;
}
console.log(countLett("adhahaisahi"));

function createCounter(){
    let count = 0;
    return function(){
        count++;
        return console.log(count);
    }

}
let newCount=createCounter();
newCount();
newCount();

function sumEvenNos(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 === 0){
            sum=arr[i]+sum;
        }
    }
    return sum;
}
console.log(sumEvenNos([1,2,3,4,5,6,7]));

function filterArr(arr1){
        return arr1.filter(element=>{
            return (element.length > 5)})
    
}
console.log(filterArr(["ayushi","adarsh","himanshu","gola"])); 

function keyOb(newObj){
    let arr = []
    for(key in newObj){
        arr.push(key);
    }
    return arr;
}
console.log(keyOb({
    name:"ayushi",
    age:24,
    qualification:"under"
}))

function high(arrNe,prop){
    const values = arrNe.map((obj) => obj[prop]);

    return values;
}
console.log(high([{
    name:"ayushi",
    age:24,
    qualification:"under"
},{name:"adarsh",
    age:22,
    qualification:"under"}],"name"))

function getHighest(arr, property) {
        return arr.reduce((highest, current) => 
            current[property] > highest[property] ? current : highest
        );
    }
    
    const data = [
        { name: "Alice", score: 85 },
        { name: "Bob", score: 92 },
        { name: "Charlie", score: 88 }
    ];
    
    console.log(getHighest(data, "score")); 

    let button = document.getElementById("btn");
    button.addEventListener("click",function(){
        this.innerText = "hello there";
    })

    let element = document.getElementById("para");

    element.addEventListener("mouseover",function(){
        this.classList.add("new_class");
    })

    let box = document.getElementById("box1");
    box.addEventListener("scroll",function(){
        this.classList.remove("hello");
    })

    button.addEventListener("click",function(){
        if(box.style.display === "none"){
            box.style.display = "block"
        }
        else{
            box.style.display = "none"
        }
    })

    let form = document.getElementById("myForm");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        // Get input values
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if(username === ""){
        alert("Username is required!");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email!");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }
    alert("Form submitted successfully!");
    this.submit();
});
    
// let URL = "";
// async function fetching(URL){
//     let response = await fetch(URL);
//     let data  = response.json();
// }

function callApi(url,callback){
fetch(url)
.then(response=>{
    if(!response.ok){
        throw new Error("error occurred",$(response.status));
    }
    return(response.json());
})
.then(data => callback(null,data))
.catch(error => callback(error,null))
}
callApi("https://jsonplaceholder.typicode.com/posts/1",(error,data)=>{
    if (error) { console.error("Error fetching data:", error); }
     else { console.log("Fetched data:", data); }
     });


function delay(ms,callback){
    setTimeout(()=>{callback(),ms})
}
delay(2000,()=>{
    console.log("executed after 2 s");
})

let pro = new Promise(function(resolve,reject)
{
resolve("generated sucessfully");
})

function retPro(ms){
    return new Promise(function(resolve,reject){
    setTimeout(()=>{resolve()},ms)
    })
}
retPro(2000).then(() => {
    console.log("2 seconds elapsed");
  });
  

  function rejPro(ms){
    return new Promise(function(resolve,reject){
    setTimeout(()=>{reject("error occured")},ms)
    })
}
rejPro(2000).catch((error) => {
    console.log("2 seconds elapsed",error);
  });


  function resArr(length,ms){
    return new Promise(function(resolve,reject){
        let newArr=[];
    setTimeout(()=>{
        for(let i=0;i< length;i++){
            let num = Math.floor(Math.random()*100);
            newArr.push(num);
        }
       
        resolve(newArr);
    },ms)
    })
}
resArr(5,2000).then((response) => {
    console.log(response);
  });


//   async function retPro(url){
//    try{
//     let response = await fetch(url);
//     if(!response.ok){
//     throw new Error(`Request failed with status ${response.status}`);
//     }
//     let data = await response.json();
//     return data;
//    }catch(error){
// return error
//    }
//   }
//   retPro("https://invalid-url.com")
//   .then(data => console.log("Fetched Data:", data))
//   .catch(error => console.error("Rejected:", error.message));
async function fetchData(url) {
    try {
        let response = await fetch(url);
        
        if (!response.ok) { // If response fails
            throw new Error(`Request failed with status ${response.status}`);
        }

        let data = await response.json();
        return data;
    } catch (error) {
        throw error; // Propagate the error
    }
}

// Example usage with `.catch()`
fetchData("https://invalid-url.com")
    .then(data => console.log("Fetched Data:", data))
    .catch(error => console.error("Rejected:", error.message));


function checkNo(val){
   return new Promise((resolve, reject) => {
    if(typeof val !== "number"){
        reject (new Error("not a num"));
    }
 else {
    resolve(val);
  }
   })
}
checkNo(5)
.then(response=>console.log(response))
.catch(err => console.error(err.message));
checkNo("hello")
.then(response=>console.log(response))
.catch(err => console.error(err.message));

function catching(){
    return
}