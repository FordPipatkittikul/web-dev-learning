// let, const
// using const for a variable that doesn't change
// Variables declared by let are only available inside the block where they're defined. 
// Variables declared by var are available throughout the function in which they're declared.

// const player = "bobby"; // const variable cannot be reassign
// let expereince = 100;
// let wizardLevel = false;

// if (expereince > 90) {
//     let wizardLevel = true;
//     console.log("inside", wizardLevel);
// }

// console.log("outside",wizardLevel);

// const obj = {
//     player: "bobby",
//     expereince: 100,
//     wizardLevel: false
// }
// // const you can still cahnge object property
// obj.wizardLevel = true

// console.log(obj) // { player: 'bobby', expereince: 100, wizardLevel: true }

// -------------------------------------------------------------------------

// Destructuring


const obj = {
    player: "bobby",
    expereince: 100,
    wizardLevel: false
}

// const player = obj.player; // same thing
// const experience = obj.expereince // same thing
// const { player, expereince} = obj //  same thing

// let wizardLevel = obj.wizardLevel; //  same thing   ans : false
// let {wizardLevel} = obj; // same thing ans : false


// -------------------------------------------------------------------------

// obj properties

let name = "Ford";
const obj1 = {
    [name]: "hi hi"
}

console.log(obj1) // { Ford: 'hi hi' }

let a = "Ford";
let b = true;
let c = {}
const obj2 = { a,b,c }

console.log(obj2) // { a: 'Ford', b: true, c: {} }

// ------------------------------------------------------------------------

// template Strings

const firstName = "John";
const lastName = "Doe";
const greetingBest = `Hi my name is ${firstName} ${lastName}, I'm a student`

// ------------------------------------------------------------------------

// default arguments

function greet( firstName = '', lastName = ''){
    return `Hi my name is ${firstName} ${lastName}, I'm a student`;
}

// ------------------------------------------------------------------------

// arrow functions

function add(a,b) {
    return a + b;
}  // same thing

const add2 = (a,b) => a+b; // same thing