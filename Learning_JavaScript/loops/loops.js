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