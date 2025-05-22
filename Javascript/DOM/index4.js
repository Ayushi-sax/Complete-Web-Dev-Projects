//Using callback function inside a function
function sum(a, b) {
    return a + b; // Return the result
}

function calculator(a, b, operation) {
    return operation(a, b); // Call the callback function and return the result
}

let result = calculator(1, 2, sum);
console.log("Result is:", result);

//or
let result1 = calculator(1,2,(a,b)=>a+b);
console.log(result1);


//Callback hell i.e nested callbacks
function getData(dataId,getNextData){
    setTimeout(()=> 
        {
            console.log("data",dataId);
            if(getNextData){
            getNextData();}
        },2000);
}

getData(1,()=>{
    console.log("getting Data 2");
    getData(2,()=>{
        console.log("getting Data 3");
        getData(3,()=>{
            console.log("getting Data 4");
            getData(4)
        });
    });
});

//Using Promises to resolve the problem of callback hell
let promise = new Promise((resolve,reject)=>
{
    console.log("hi there");
    // resolve("done");
    reject("there's an error");
});
promise.then((val)=>{
    console.log("promise fulfilled",val);
});

promise.catch((error) =>{
    console.log("error occurred",error);
});


//Doing Promise Chaining
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("successfully resolved 1 one");
        },2000);
    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve("successfully resolved 2 one");
        },2000);
    })
}

console.log("fetching data 1");
asyncFunc1().then((val)=>{
    console.log("fetching data 2");
    asyncFunc2().then((val)=>{
    
    })
})
//promise chaining in get data function i.e callback hell one
function getData(dataId){
   return new Promise((resolve,reject) => {
    setTimeout(()=> 
        {
            console.log("data",dataId);
            resolve("successful");
        },2000);
   }) 
}


getData(1).then(()=>{
    return getData(2);
}).then(()=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
});

//Using async-await on get data
async function getAllData(){
    await getData(1);
    await getData(2);
}
getAllData();

//Using IIFE
(async function(){
    await getData(1);
    await getData(2);
})();

//Using Fetch API
const URL = "https://meowfacts.herokuapp.com/"; // The API for cat facts

// Fetches and displays a cat fact
const getCatFact = async () => {
    try {
        const response = await fetch(URL); // Call the API
        console.log(response);
        const data = await response.json(); // Convert response to JSON
        console.log(data);
        document.getElementById("catFactDisplay").innerHTML = data.data[0]; // Show the cat fact
    } catch {
        document.getElementById("catFactDisplay").innerHTML = "Could not fetch cat facts."; // Show error message
    }
};

// Run the function when the button is clicked
document.getElementById("fetchButton").addEventListener("click", getCatFact);
