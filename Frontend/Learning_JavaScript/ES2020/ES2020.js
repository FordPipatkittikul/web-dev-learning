// allSettled() for promise

const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000)
)

const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000)
)

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(error => console.log("It is not working", error))
// promise.all has to have all promise resolved and not thorw any error


// promise.allSettled() doesn't care about resolve or reject
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(error => console.log("It is not working", error))