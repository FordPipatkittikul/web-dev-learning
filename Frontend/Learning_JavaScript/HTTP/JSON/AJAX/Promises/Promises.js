// Promises

// It is an object that may produce a single value some time in the future.
// Either a resolved value which is success or a reson that is not resolved which is rejected.


const promise = new Promise((resolve, reject) =>{
    if(true){
        resolve("It is worked");
    } else {
        reject("Error, it is not woring")
    }
})

const promise2 = new Promise((resolve, reject) =>{ 
    setTimeout(resolve, 100, "Fake");
})

const promise3 = new Promise((resolve, reject) =>{ 
    setTimeout(resolve, 1000, "Fake2");
})

const promise4 = new Promise((resolve, reject) =>{ 
    setTimeout(resolve, 5000, "Real one");
})

Promise.all([promise, promise2, promise3, promise4])
    .then((values) => {
        console.log(values);  
    })
// It is waiting until all the promises are resolved which is 5000 milliseconds(5 sec) 
// and output: ['It is worked', 'Fake', 'Fake2', 'Real one']
// promise.all has to have all promise resolve


// channing promises
promise
    .then((result) => {
        throw Error
        return result + "!"
    })
    .then(result2 => {
        console.log(result2)
    })
    .catch(() => console.log("error!"))

// Another example
promise
    .then((result) => result + "!")
    .then(result2 => result2 + " Yes it is")
    .catch(() => console.log("error!"))
    .then(result3 =>{
        console.log(result3 + " working!")
    })

    // output: It is worked! Yes it is working!
    // catch only run when something fail between

// _________________________________________________________________

// using url from https://jsonplaceholder.typicode.com/

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

// or

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    results.map(result => {
        console.log(result)
    })
}).catch(() => console.log("error")) // If something falied print