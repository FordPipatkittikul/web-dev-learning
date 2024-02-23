// primitive types
// Primitive types in JavaScript are passed by value. 
// This means a copy of the value is created and used within the function.

Number

console.log(12 % 5)
console.log(12 / 5)
console.log(12 * 5)
console.log(12 - 5)
console.log(12 + 5)

String

console.log("bac")
console.log("Hello " + "there")
console.log('this isn\'t very nice')
console.log(30 - "9")
console.log(20 + "24")

Boolean

console.log(true)
console.log(false)

undefined

// definition : varaible hasn't assigned

function test(a) {
    if (a === undefined) {
      return 'Undefined value!';
    }
    return a;
  }
  
let x;

console.log(test(x));

null

// represents the intentional absence of any object value

Symbol

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

// _________________________________________________________________

// Reference type

Object

// object are collections of properties

var user = {
    name: "John",
    age: 10,
    isMarried: false,
    friends: ["maria","ford"],
    shout: function() {
        console.log("AHHHH!");
    }
};

var list =[
    {
        username: "fff",
        password: "secre"
    },
    {
        usrename: "ddd",
        password: 123
    }
];

console.log(list[0].username) // fff
console.log(list[1].password) // 123

// method are like function inside the object