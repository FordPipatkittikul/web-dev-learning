function ageCheck(age){
    if(Number(age) < 18){
        console.log("Sorry, you are too young to drive this car. Powering off")
    }else if(Number(age) === 18){
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    }else{
        console.log("Powering On. Enjoy the ride!")
    }
}

// Anonymous function
var sayBye = function() {
    console.log("Bye")
}

sayBye()

var multiply = function multiplyy(a,b) {
    return a * b
}
var plus = function pluss(a,b) {
    return a + b
}
var minus = function minuss(a,b) {     // argument: a, b
    return a - b
}

console.log(multiply(5,4))           // parameters: 5,4


// arrow functions

function add(a,b) {
    return a + b;
}  // same thing

const add2 = (a,b) => a+b; // same thing

