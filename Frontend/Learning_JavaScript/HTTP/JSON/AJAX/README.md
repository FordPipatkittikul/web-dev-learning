# AJAX

AJAX = Asynchronous JavaScript And XML.
- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

Old way: they are using XMLHttpRequest object to request data from a web server

New way:  fetch method

    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json() // same thing as json.parse() which is (Parse the data with JSON.parse(), and the data becomes a JavaScript object.)
    }).then((users) =>{
        setRobots(users)
    })


Guide: https://www.w3schools.com/js/js_ajax_intro.asp
