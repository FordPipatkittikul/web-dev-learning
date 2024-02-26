# loops
## for loops
    var todos = [
        "clean room",
        "brush teeth",
        "exercise",
        "study",
        "eat healthy"
    ];

    for (var i=0; i<todos.length; i++) {
        console.log(todos[i]);
    } // i is number
## for of V.S. for in
-   for of : iterating arrays, strings(array of char).
-   for in : enumerating object.
        // for of
        var todos = [
            "clean room",
            "brush teeth",
            "exercise",
            "study",
            "eat healthy"
        ];
        for (todo of todos) {
            console.log(todo);
        } // todo is element


        // for in
        const detailedBasket = {
            apples : 5,
            oranges: 10
        };
        for (item in detailedBasket){
            console.log(item)
        }
        for (item in basket){
            console.log(item)
        }  // it works because array is basiclly an object

## while loops
    var counterOne = 10;
    while(counterOne > 0) {
        console.log(counterOne);
        counterOne--;
        
    }
## do
    var counterTwo = 10;
    do {                            // do this first
        console.log(counterTwo);    
        counterTwo--;
    } while (counterTwo > 0)        // and check this condition

## forEach
    var todos = [
        "clean room",
        "brush teeth",
        "exercise",
        "study",
        "eat healthy"
    ];
    todos.forEach(function(todo, i){   // argument is indidvidual element in todos
        console.log(todo, i)
    })
