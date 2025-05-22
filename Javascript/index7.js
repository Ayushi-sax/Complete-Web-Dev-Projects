let names = ["adarsh","ayushi","lakshu","dii"];
function buyLunch(person){
    let numPeople = person.length;
    let perPos = Math.floor(Math.random()*numPeople);
    return person[perPos] + " will buy lunch today!"
    
}
console.log(buyLunch(names));