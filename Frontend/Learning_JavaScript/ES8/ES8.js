const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

// Object.keys(), Object.values(), Object.entries()  
const keys = Object.keys(person); // ['firstName', 'lastName', 'age', 'eyeColor']
const values = Object.values(person); // ["John", "Doe", 50, "blue"]
const bothKeyAndValues = Object.entries(person);  // [
                                                  //     [ 'firstName', 'John' ],
                                                  //     [ 'lastName', 'Doe' ],
                                                  //     [ 'age', 50 ],
                                                  //     [ 'eyeColor', 'blue' ]
                                                  // ]


let obj = {
    username1 : "abc",
    username2 : "def",
    username3 : "ghi"
};


Object.keys(obj).forEach((key) =>{
    console.log(key);
});

Object.values(obj).forEach((value) =>{
    console.log(value);
});

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);   // username1 : abc
});                                     // username2 : def
                                        // username3 : ghi   
    
// Using for...of loop

for(const key of Object.keys(obj)){
    console.log(key)
}

for(const value of Object.values(obj)){
    console.log(value)
}

const obj1 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj1)) {
  console.log(`${key} : ${value}`); // "a : 5" "b : 7", "c : 9"
}


// mixed it up

let user = {
    username0 : "Santa",
    username1 : "Rudolf",
    username2 : "Mr.grinch"
};

const niceUserName = Object.entries(user).map(value => {
    // console.log(value) // [ 'username0', 'Santa' ]
                          // [ 'username1', 'Rudolf' ]
                          // [ 'username2', 'Mr.grinch' ]
    return value[1] + value[0].replace("username", " ");
})

console.log(niceUserName) // ['Santa 0', 'Rudolf 1', 'Mr.grinch 2']

// ________________________________________________________________________________________

// Async await

// using Jsonplaceholder : https://jsonplaceholder.typicode.com/

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

// another example

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