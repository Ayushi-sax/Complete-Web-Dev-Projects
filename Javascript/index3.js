//Creating an array of primitives
var num = [1,2,3,4,1];

//1.Insertion in an array and Deletion
    //At the start
    //adding
    num.unshift('hi');
    //removing
    num.shift();
    console.log(num);

    //In the middle
    //adding
    num.splice(2,0,'a');
    //removing
    num.splice(2,1);
    console.log(num);

    //At the end
    //adding
    num.push(5);
    //removing
    num.pop();
    console.log(num);

//2.Searching an element in the array
    //For primitives
    console.log(num.indexOf(3));

    console.log(num.lastIndexOf(1));

    console.log(num.includes(3));

    //For reference types ex objects
    var identity = [
        {
            name : "ayushi",
            age : 25
        },
        {
            name : "adarsh",
            age : 50
        }
    ]
    //Using call back function or arrow function
    let result = identity.find(function(person){
        return person.name === "ayushi";
    });
    console.log(result);

    let result1  = identity.findIndex(function(person){
             return person.name === "ayushi";
    });
    console.log(result1);

    //Now converting the above into arrow function
    let result2 = identity.find(person => person.name === "ayushi");
    console.log(result2);


//3.Emptying an array
let nos = [1,2,3,4];
nos.length = 0;
console.log(nos);


//4.Combining and Slicicng an array
var arr1 = [1,2,3];
var arr2 = [4,5,6];
    //Using concat method
    let newArr = arr1.concat(arr2);
    console.log(newArr);

    //Using spread operator 
     var newArr1 = [...arr1 , ...arr2];
    console.log(newArr1);

    //Slicing an array
    var newArr2 = newArr1.slice(2,3);
    console.log(newArr2);


//5.Iterating an array
    //Using for of loop
    for(let entry of newArr1){
        console.log(entry);
    }

    //Using for each loop
    let values= newArr1.forEach(number => console.log(number));

//6.Joining an array by a seperator
    let fruits = ["mango","apple","watermelon"];
    console.log(fruits.join("*"));

//7.Splitting an array by a seperator
    let name = "hi this is ayushi";
    console.log(name.split(' '));

//8.Sorting an array of primitive and reference
    var array1 = [2,4,-1,5,1];
    array1.sort();
    console.log(array1);

    //reverse sort
    console.log(array1.reverse());

    let array2= [
        {
            id:1,
            name : "ayushi"
        },
        {
            id:2,
            name : "adarsh"
        }
    ]
      

    array2.sort(function(a,b){
        if (a.name < b.name)
            return -1;
        else if(a.name > b.name)
            return 1;
        return 0;
    });
    console.log(array2);

//9.Testing an array using every and some
    //Using every will give a boolean true/false if all values in an array meets the condition
    let allPositive = array1.every(value=> value >= 0);
    console.log(allPositive);

    //Using some will give a boolean true/false if some values(at least one) in an array meets the condition
    let somePositive = array1.some(value => value >= 0);
    console.log(somePositive);

//10.Filtering an array for primitive and reference types
   let filArray = [1,2,3,-1];
   let newVal = filArray.filter(value => value>=0);
   console.log(newVal);

   let obArray = [
    {
        name: "ayush",
        ph : 22
    },
    {
        name: "ayushi",
        num : 23
    }
   ];
   let newVal1=obArray.filter(value => value.name === "ayushi");
   console.log(newVal1);

//11.Mapping array items to something new 
   let maArr = newVal.map(value => "roll_no " + value);
   console.log(maArr);

   //0r
   let maArr1 = newVal.map(value => ({roll_no :value}));
   console.log(maArr1);


//12.Reducing an array
     let no1 = [1,2,3,5,-1];
     let sum = no1.reduce((accumulator,currentValue) => accumulator+currentValue ,0);
     console.log(sum);

//Practice 1
function arrayFromRange(min,max){
    const emptyArr = [];
    for(let i=min;i<=max;i++){
      emptyArr.push(i);
     
    }
    return emptyArr;
}
const numbers = arrayFromRange(1,8);
console.log(numbers);

//Practice 2

function includes(arrayElements, searchElement){
   for(values of arrayElements){
    if(values === searchElement){
        return true;
    }
    else return false;
   }
}
console.log(includes([1,2,3,4,5,6], 9));

//Practice 3

function excludes(arra1 , arra2){
    const result = arra1.filter(value => !arra2.includes(value));
    return console.log(result); // Log the filtered array
}
excludes([1,2,3,4],[1,2]);

//Practice 4

function move(arr1 , index , offset){
    // if(arr1.index === index)
    let position = index+offset;
    if(position>=arr1.length || position<0){
        return console.log("invalid");
        
    }
       let val = arr1.splice(index,1)[0];
        arr1.splice(position,0,val);
        return console.log(arr1);
       
    
    
}
move([1,2,3,4] , 1 ,9);

//Practice 5
function searchOccurrence(array1,searchNum){
    let count = 0;
    for(let val of array1){
        if (val == searchNum)
            count++  
    }
    return count;
}
console.log(searchOccurrence([1,2,,3,4,1,1,1,1],1));

//Practice 6
let array = [2,4,3,1,6]
console.log(array.reduce((a,b)=> {
    if(a>b){
        return a;
    }
    return b;
}));

//Practice 7
let movies =[{title : 'a',year :2018 ,rating :2.0},
    {title : 'b',year :2018 ,rating :3.9},
    {title : 'c',year :2018 ,rating :4},
    {title : 'd',year :2018 ,rating :4.2},
    {title : 'e',year :2017 ,rating :4.8}

]

function filtering(arr){
    return arr.filter(value => value.year == 2018 && value.rating>=4)
    .sort(function(a,b){
        if(a.rating<b.rating)
            return -1;
        else if(a.rating>b.rating)
            return 1;
        else return 0;
    })
    .reverse()
    .map(val => "title " +val.title)

}
console.log(filtering(movies));

   


