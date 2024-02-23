# Functions

## Anonymous Function
function that does not have any name associated with it

    var byeBye = function() {
    console.log("bye bye")
    }

## Arrow functions

    function minus(a,b) {
        return a - b;
    }  // same thing

    const minus = (a,b) => a+b; // same thing


## argument V.S. parameter

    var multiply = function multiplyy(a,b) {    // argument: a, b
        return a * b
    }
    
    console.log(multiply(5,4))           parameters: 5,4


## Currying
The process of converting a function that takes multiply argument into a function that takes one at a time.

    const multiply = (a,b) => a * b;
    
    const curriedMultiple = (a) => (b) => a * b;
    const multiplyBy5 = curriedMultiple(5);
## Compose
The act of putting two function together to form a third function with the output of one function is the input of the other.
    
    const addOne = (num) => num + 1

    const Compose = (f,g) => (a) => f(g(a));
    console.log(Compose(addOne, addOne)(5));  // 7
