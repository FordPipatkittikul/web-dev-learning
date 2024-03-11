# ES8

## Object.keys(), Object.values(), Object.entries()  

Object.keys() // return an array of key
Object.values() // return an array of value
Object.values() // return two dimensional array of key & values
    
    const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };

    const keys = Object.keys(person); // ['firstName', 'lastName', 'age', 'eyeColor']
    const values = Object.values(person); // ["John", "Doe", 50, "blue"]
    const bothKeyAndValues = Object.entries(person);  // [
                                                    //     [ 'firstName', 'John' ],
                                                    //     [ 'lastName', 'Doe' ],
                                                    //     [ 'age', 50 ],
                                                    //     [ 'eyeColor', 'blue' ]
                                                    // ]