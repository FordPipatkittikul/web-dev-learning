// ##### MY own solutions

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve,reject) =>{
  setTimeout(resolve, 4000, "success");
})

// #2) Run the above promise and make it console.log "success"
promise.then((value) => console.log(value));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise1 = Promise.resolve("success");
promise1.then(value => console.log(value))
// or
const promise2 = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.

const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(response => response.json())
}))
  .then((results) =>{
    results.map((result) => {
      console.log(result);
    })
  })
  .catch(err => console.log(`Error is : ${err}`));

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

// Ans: the link is working so I already check that catch block handle it