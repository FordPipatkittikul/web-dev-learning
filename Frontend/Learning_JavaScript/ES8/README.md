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

## Async await
await operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await#top_level_await

    Example 1

    // normally Promise we do
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => console.log(users))


    // with Async await
    async function fetchUsers(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()          // .then(response => response.json())
        console.log(data)                           // .then(users => console.log(users))
    }

    // Example 2


    // normally Promise we do
    const urls = [
        "https://jsonplaceholder.typicode.com/users",
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums"
    ];

    Promise.all(urls.map(url => {
        return fetch(url).then(response => response.json())
    })).then(results => {
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
    }).catch(() => console.log("error")) // If something falied print


    // with Async await
    const getData = async function() {
        try{
            const [users, post,albums] = await Promise.all(urls.map(url => {
                return fetch(url).then(response => response.json())
            }))
            console.log(users)
            console.log(post)
            console.log(albums)
        } catch (error){
            console.log("error", error)
        }
    }
