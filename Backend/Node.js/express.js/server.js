const express = require("express");

const app = express();

// Middleware Integration: When you call app.use(express.json());
// you're essentially registering the express.json() middleware 
// function with your Express application (app). 
// This means that 
// this middleware will be invoked for every incoming request that reaches your application.
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // parse (interpret and convert) the JSON data in the request body into a JavaScript object.
app.use(express.text())
// app.use(express.static(__dirname + "/public")) // getting file from different folder

app.get('/', (req,res) => {
    res.send("root")
})

app.post("/profile", (req,res) => {
    console.log(req.body)
    const user = {
        name : "adsdsa",
        age : 23,
    }
    res.send(user)
})



// app.get("/:id", (req, res)=>{
//     // console.log(req.query)
//     // console.log(req.body)
//     // console.log(req.headers)
//     console.log(req.params)
//     res.status(404).send("Not found")
// })



console.log(process.env)


app.listen(5000)