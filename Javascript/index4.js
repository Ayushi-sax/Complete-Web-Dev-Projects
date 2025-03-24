//Function Assignment
let stand =function walk(){
    console.log("walkking");
    
}
stand();

//Argument in Functions returns object as output
function sum(a,b){
    let total = 0;
    for(let val of arguments){
        total = total+val;
    }
    return console.log(total);
}
sum(1,2,3,3,4,4);

//Spread Operator returns array as output
function tot(...args){
    console.log(args);
}
tot(1,2,3,4,4,5); 

//Default Parameters
function sum(a,b=3){
    return a+b;
}
console.log(sum(2));

//Get and Set
let person = {
    fName: "ayushi",
    lName: "saxena",

    get fullName() {
        return `${this.fName} ${this.lName}`; // Automatically combines fName and lName
    },

    set fullName(value) {
        const parts = value.split(" "); // Split input into first and last name
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// Use the getter to get the full name
console.log(person.fullName); // Output: "ayushi saxena"

// Use the setter to update the full name
person.fullName = "adarsh kashyap";

// Updated properties reflect the change
console.log(person.fName);    // Output: "adarsh"
console.log(person.lName);    // Output: "kashyap"
console.log(person.fullName); // Output: "adarsh kashyap"

//Try Catch and throw
function divide(a, b) {
    try {
        if (b === 0) {
            // Manually throw an error for dividing by zero
            throw new Error("Division by zero is not allowed");
        }
        return a / b; // Perform the division if b is not zero
    } catch (error) {
        // Catch the error thrown in the try block
        console.error("An error occurred:", error.message);
    }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: "An error occurred: Division by zero is not allowed"
