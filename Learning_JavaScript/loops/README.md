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

