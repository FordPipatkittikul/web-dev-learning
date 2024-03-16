# ES2020

promise.allSettled() doesn't care about resolve or reject. We can not do that in promise.all()

    E.X.
    const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000)
    )

    const promiseTwo = new Promise((resolve, reject) =>
        setTimeout(reject, 3000)
    )

    Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
        .catch(error => console.log("It is not working", error))