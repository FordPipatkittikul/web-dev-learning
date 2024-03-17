const express = require("express");
const bodyParser = require("body-parser")
const app = express();

// middleware
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get("/:id", (req, res)=>{
//     // console.log(req.query)
//     // console.log(req.body)
//     // console.log(req.headers)
//     console.log(req.params)
//     res.status(404).send("Not found")
// })

app.use(express.static(__dirname + "/public"))




app.listen(3000)