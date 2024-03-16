# ES9

## Object spread operator

    const animals = {
    tiger : 5,
    lion : 3,
    monkey : 2
    }

    const {tiger, ...rest} = animals; // rest is {lion: 3, monkey: 2}
    
    // quick note we can do something like this for an array as well bc array is an object
    const arrayyy = [1,2,3]
    var sum = (a,b,c) => (a+b+c);
    console.log(sum(...arrayyy)) // 6

## finally
What it is : either fulfilled or rejected after everything done It will be called.
When it is good time to use :  It is good when you have to run something no matter what after promises.

    E.X.

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
        .catch(err => console.log(`Error is : ${err}`))
        .finally(() => console.log("extra"))

## for await of

thinking about using for 

    E.X.

    const urls1 = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    ];

    // not using for await of
    const getData = async function () {
        try {
        const [users, posts, albums] = await Promise.all(
            urls1.map(async function (url) {
            const response = await fetch(url);
            return response.json();
            }),
        );
        console.log("users", users);
        console.log("posta", posts);
        console.log("albums", albums);
        } catch (err) {
        console.log("ooooooops", err);
        }
    };


    //  using for await of
    const getData2 = async function () {
        const arrayOfPromises = urls1.map(url => fetch(url))
        for await (let request of arrayOfPromises){
            const data = await request.json();
            console.log(data)
        }
    }