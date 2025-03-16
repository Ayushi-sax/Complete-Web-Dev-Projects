// Creating an Object there are three methods

// First is through Object Literals
let car = {
    color: 'red',
    size : '4 seater',
    brand : 'Maruti'
}
//Adding a new property
car.speed = "24km/hr";

//Deleting a property from the object
delete car.speed;
//or using bracket notation
delete car["speed"]; 

// Accessing the object properties with dot notation
document.getElementById("demo").innerHTML = "my " + car.brand + " is a " + car.size + " and its color is " + car.color;

// Accessing the object properties with bracket notation
document.getElementById("demo").innerHTML = "my " + car["brand"] + " is a " + car["size"] + " and its color is " + car["color"];


// Second is through factory function which creates and calls the object and the naming is in camelcase

function createRectangle(hei , bread){
    return rectangle= {
    height : hei,
    breadth : bread,
    rotateRectangle(){
        console.log('hi');
    }
    }
}

// Now to call this function or invoke it we will create an object
let objRectangle = createRectangle(2,4);
// Accessing using dot notation
console.log(objRectangle.height);
console.log(objRectangle.rotateRectangle());

// Accessing using bracket notation
console.log(objRectangle['breadth']);



// Third is through Constructor function or array here pascal naming is used for naming the function

function CreateSquare(hei,len){

    this.height= hei,
    this.length = len
}

// Now to call this function or invoke it we will create an object

let objSquare = new CreateSquare(2,4);
console.log(objSquare);

