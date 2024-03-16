var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study",
    "eat healthy"
];

var todosImportant = [
    "eat healthy",
    "brush teeth"
];


// for loops
for (var i=0; i<todos.length; i++) {
    console.log(todos[i]);
}

// ------------------------------------------------------------ //

// while loops
var counterOne = 10;
while(counterOne > 0) {
    console.log(counterOne);
    counterOne--;
    
}

// ------------------------------------------------------------ //

// do
var counterTwo = 10;
do {                            // do this first
    console.log(counterTwo);    
    counterTwo--;
} while (counterTwo > 0)        // and check this condition


// ------------------------------------------------------------ //

// forEach

todos.forEach(function(todo, i){   // argument is indidvidual element in todos
    console.log(todo, i)
})

function logTodos(todo, i){   
    console.log(todo, i)
}

todos.forEach(logTodos)
todosImportant.forEach(logTodos)

// ------------------------------------------------------------ //

// Iterable is something that can loop over
const basket = ["apples", 'oranges','grapes'];
const detailedBasket = {
    apples : 5,
    oranges: 10
};


// for of
// Iterting : arrays, strings
for (item of basket) {
    console.log(item);
}

// ------------------------------------------------------------ //

// for in

// enumerating - objects
for (item in detailedBasket){
    console.log(item)
}
// it works because array is basiclly an object
for (item in basket){
    console.log(item)
}