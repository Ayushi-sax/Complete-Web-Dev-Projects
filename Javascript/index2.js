//First is using for in loop and its output is in string
  //create an object
   let square={
    length:2,
    breadth:3
   }

//for only key
for(key in square){
    console.log(key);
}
//for key value pair
for(key in square){
    console.log(key,square[key]);
}

//Second is using for of loop only used in cases of iterables like arrays,maps etc and its output is an array
 //create an object
   let rect={
    height:2,
    width:3
   }

//for only key
for(let key of Object.keys(rect)){
    console.log(key);
}

//for only value 
for(let value of Object.values(rect)){
    console.log(value);
}

//for key value pair
for(let entry of Object.entries(rect)){
    console.log(entry);
}
// OR
for ([key,value] of Object.entries(rect)){
    console.log(key,value);
}

//Third is checking if a property exists in an object
if("width" in rect){
    console.log("yes");
}

//Cloning an object

let obj1 = {
    name :"ayu",
    age : 25
};


//Now i want to clone the above obj1 in a new obj2 for that three methods are there
 //First is iteration using for in loop
    var obj2 = {};
    for(let key in obj1){
        obj2[key] = obj1[key];
        
    }
    console.log(obj2);

 //Second is by assigning
//    let obj2 = Object.assign({},obj1);
//    console.log(obj2);

 //Third is with spread operator
    // let obj2 = {...obj1};
    // console.log(obj2);



//Practice 1
function userAdd(city,state,zip){
    return {
           city : city,
           state : state,
           zipcode : zip
     
    }
}
let Address = userAdd("kanpur","Uttar Pradesh", "208006");
    
for(let key in Address){
    console.log(key,Address[key]);
}

//Practice 2
function UserAdd(){
    this.city = "kanpur",
    this.state = "Uttar Pradesh",
    this.zipcode = "208006"
}
let NewAddress= new UserAdd();

for (let key in NewAddress){
console.log(key,NewAddress[key]);
}
